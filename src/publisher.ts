import {execFile} from 'node:child_process';
import {access, readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';

import type {LockEntry, PublishStats, SchemaLockFile} from './types.js';

const execFileAsync = promisify(execFile);
const DEFAULT_PUBLISH_LOG_FILE = 'publish-errors.log';
const NPM_REGISTRY_URL = 'https://registry.npmjs.org/';

interface PackageManifest {
  name?: string;
  version?: string;
}

interface PublishOptions {
  dryRun?: boolean;
  logFilePath?: string;
  publishPackage?: (packageDirectory: string) => Promise<void>;
  schemasDir?: string;
}

export async function publishGeneratedPackages(options: PublishOptions = {}): Promise<PublishStats> {
  const projectRoot = process.cwd();
  const dryRun = options.dryRun ?? false;
  const schemasDirectory = options.schemasDir ? path.resolve(options.schemasDir) : path.join(projectRoot, 'schemas');
  const logFilePath = options.logFilePath
    ? path.resolve(options.logFilePath)
    : path.join(projectRoot, DEFAULT_PUBLISH_LOG_FILE);
  const publishPackage = options.publishPackage ?? publishPackageDirectory;
  const lockFilePath = path.join(projectRoot, 'schema-lock.json');

  const schemasDirectoryExists = await exists(schemasDirectory);
  if (!schemasDirectoryExists) {
    throw new Error(`Schemas directory not found: ${schemasDirectory}`);
  }

  const directoryEntries = await readdir(schemasDirectory, {withFileTypes: true});
  const packageDirectories = directoryEntries
    .filter(directoryEntry => directoryEntry.isDirectory())
    .map(directoryEntry => path.join(schemasDirectory, directoryEntry.name))
    .sort((leftPath, rightPath) => leftPath.localeCompare(rightPath));

  const errorMessages: string[] = [];
  const lockFile = await loadLockFile(lockFilePath);
  const stats: PublishStats = {
    attempted: 0,
    dryRun,
    failed: 0,
    logFilePath: path.relative(projectRoot, logFilePath),
    published: 0,
    skipped: 0,
  };

  await writePublishLog(logFilePath, errorMessages);

  console.info(`🚀 schemastore-updater will now publish ${packageDirectories.length} packages ...`);

  for (const packageDirectory of packageDirectories) {
    const packageJsonPath = path.join(packageDirectory, 'package.json');
    if (!(await exists(packageJsonPath))) {
      stats.skipped += 1;
      await writePublishLog(logFilePath, errorMessages);
      continue;
    }

    const schemaName = path.basename(packageDirectory);
    const packageManifest = await readPackageManifest(packageJsonPath);

    process.stdout.write(`⏭️ Publishing: @schemastore/${schemaName}@${packageManifest.version ?? 'unknown'} ... `);

    const matchingLockEntry = findLockEntryForPackage(lockFile, packageDirectory, projectRoot);
    if (matchingLockEntry?.published) {
      stats.skipped += 1;
      process.stdout.write('skipped (already published)\n');
      await writePublishLog(logFilePath, errorMessages);
      continue;
    }

    const packageLabel = formatPackageLabel(packageManifest, schemaName);

    stats.attempted += 1;

    try {
      if (dryRun) {
        stats.published += 1;
        process.stdout.write(`dry run\n`);
        continue;
      }

      await publishPackage(packageDirectory);
      stats.published += 1;
      markPackageAsPublished(lockFile, packageDirectory, projectRoot);
      await writeLockFile(lockFilePath, lockFile);
      process.stdout.write(`done\n`);
    } catch (error) {
      stats.failed += 1;
      process.stdout.write(`failed\n`);
      errorMessages.push(formatPublishError(packageLabel, error));
    }

    await writePublishLog(logFilePath, errorMessages);
  }

  return stats;
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function findLockEntryForPackage(
  lockFile: SchemaLockFile,
  packageDirectory: string,
  projectRoot: string
): LockEntry | undefined {
  const generatedFile = normalizePath(path.relative(projectRoot, path.join(packageDirectory, 'index.d.ts')));

  return Object.values(lockFile.entries).find(lockEntry => normalizePath(lockEntry.generatedFile) === generatedFile);
}

function formatPackageLabel(packageManifest: PackageManifest, fallbackName: string): string {
  const packageName = packageManifest.name ?? fallbackName;
  const packageVersion = packageManifest.version;

  return packageVersion ? `${packageName}@${packageVersion}` : packageName;
}

function formatPublishError(packageLabel: string, error: unknown): string {
  const errorMessage = error instanceof Error ? (error.stack ?? error.message) : String(error);
  return `[${new Date().toISOString()}] ${packageLabel}\n${errorMessage}`;
}

async function loadLockFile(lockFilePath: string): Promise<SchemaLockFile> {
  if (!(await exists(lockFilePath))) {
    return {
      entries: {},
      generatedAt: new Date(0).toISOString(),
      version: 1,
    };
  }

  const content = await readFile(lockFilePath, 'utf-8');
  const parsed = JSON.parse(content) as SchemaLockFile;

  return {
    entries: Object.fromEntries(
      Object.entries(parsed.entries ?? {}).map(([schemaPath, lockEntry]) => [
        schemaPath,
        {
          ...lockEntry,
          published: lockEntry.published ?? false,
        },
      ])
    ) as Record<string, LockEntry>,
    generatedAt: parsed.generatedAt,
    version: 1,
  };
}

function markPackageAsPublished(lockFile: SchemaLockFile, packageDirectory: string, projectRoot: string): void {
  const generatedFile = normalizePath(path.relative(projectRoot, path.join(packageDirectory, 'index.d.ts')));

  for (const lockEntry of Object.values(lockFile.entries)) {
    if (normalizePath(lockEntry.generatedFile) === generatedFile) {
      lockEntry.published = true;
    }
  }
}

function normalizePath(filePath: string): string {
  return filePath.replaceAll('\\', '/');
}

async function publishPackageDirectory(packageDirectory: string): Promise<void> {
  await execFileAsync('npm', ['publish', '--access', 'public', '--registry', NPM_REGISTRY_URL], {
    cwd: packageDirectory,
    env: process.env,
  });
}

async function readPackageManifest(packageJsonPath: string): Promise<PackageManifest> {
  const packageJsonContent = await readFile(packageJsonPath, 'utf-8');
  return JSON.parse(packageJsonContent) as PackageManifest;
}

async function writeLockFile(lockFilePath: string, lockFile: SchemaLockFile): Promise<void> {
  await writeFile(lockFilePath, `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');
}

async function writePublishLog(logFilePath: string, errorMessages: string[]): Promise<void> {
  const content = errorMessages.length > 0 ? `${errorMessages.join('\n\n')}\n` : 'No publish errors.\n';
  await writeFile(logFilePath, content, 'utf-8');
}
