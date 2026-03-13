import {execFile} from 'node:child_process';
import {access, readdir, readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';

import type {PublishStats} from './types.js';

const execFileAsync = promisify(execFile);
const DEFAULT_PUBLISH_LOG_FILE = 'publish-errors.log';

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
  const stats: PublishStats = {
    attempted: 0,
    dryRun,
    failed: 0,
    logFilePath: path.relative(projectRoot, logFilePath),
    published: 0,
    skipped: 0,
  };

  for (const packageDirectory of packageDirectories) {
    const packageJsonPath = path.join(packageDirectory, 'package.json');
    if (!(await exists(packageJsonPath))) {
      stats.skipped += 1;
      continue;
    }

    const packageManifest = await readPackageManifest(packageJsonPath);
    const packageLabel = formatPackageLabel(packageManifest, path.basename(packageDirectory));

    stats.attempted += 1;

    try {
      if (dryRun) {
        stats.published += 1;
        console.info(`Dry run: ${packageLabel}`);
        continue;
      }

      await publishPackage(packageDirectory);
      stats.published += 1;
      console.info(`Published: ${packageLabel}`);
    } catch (error) {
      stats.failed += 1;
      errorMessages.push(formatPublishError(packageLabel, error));
    }
  }

  await writePublishLog(logFilePath, errorMessages);

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

function formatPackageLabel(packageManifest: PackageManifest, fallbackName: string): string {
  const packageName = packageManifest.name ?? fallbackName;
  const packageVersion = packageManifest.version;

  return packageVersion ? `${packageName}@${packageVersion}` : packageName;
}

function formatPublishError(packageLabel: string, error: unknown): string {
  const errorMessage = error instanceof Error ? (error.stack ?? error.message) : String(error);
  return `[${new Date().toISOString()}] ${packageLabel}\n${errorMessage}`;
}

async function publishPackageDirectory(packageDirectory: string): Promise<void> {
  await execFileAsync('npm', ['publish', '--access', 'public'], {
    cwd: packageDirectory,
    env: process.env,
  });
}

async function readPackageManifest(packageJsonPath: string): Promise<PackageManifest> {
  const packageJsonContent = await readFile(packageJsonPath, 'utf-8');
  return JSON.parse(packageJsonContent) as PackageManifest;
}

async function writePublishLog(logFilePath: string, errorMessages: string[]): Promise<void> {
  const content = errorMessages.length > 0 ? `${errorMessages.join('\n\n')}\n` : 'No publish errors.\n';
  await writeFile(logFilePath, content, 'utf-8');
}
