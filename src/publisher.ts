import {execFile, spawn} from 'node:child_process';
import {access, mkdtemp, readdir, readFile, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {promisify} from 'node:util';

import type {BootstrapStats, LockEntry, PublishStats, SchemaLockFile} from './types.js';

import {isNonPublishableSchemaId, loadNonPublishableSchemaIds} from './non-publishable-schemas.js';

const execFileAsync = promisify(execFile);
const DEFAULT_PUBLISH_LOG_FILE = 'publish-errors.log';
const NPM_REGISTRY_CHECK_TIMEOUT_MS = 10_000;
const NPM_REGISTRY_URL = 'https://registry.npmjs.org/';
const PUBLISH_SUMMARY_FILE_NAME = 'publish-summary.md';

interface BootstrapOptions {
  checkPackageExists?: (packageName: string) => Promise<boolean>;
  loginToNpm?: () => Promise<void>;
  publishNewPackage?: (packageDirectory: string) => Promise<void>;
  schemasDir?: string;
}

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

export async function bootstrapNewPackages(options: BootstrapOptions = {}): Promise<BootstrapStats> {
  const projectRoot = process.cwd();
  const schemasDirectory = options.schemasDir ? path.resolve(options.schemasDir) : path.join(projectRoot, 'schemas');
  const checkPackageExists = options.checkPackageExists ?? packageExistsOnNpm;
  const loginToNpm = options.loginToNpm ?? loginToNpmWithBrowser;
  const publishNewPackage = options.publishNewPackage ?? publishNewPackageDirectory;
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

  const lockFile = await loadLockFile(lockFilePath);
  const nonPublishableSchemaIds = await loadNonPublishableSchemaIds(projectRoot);
  const stats: BootstrapStats = {
    attempted: 0,
    bootstrapped: 0,
    bootstrappedPackages: [],
    failed: 0,
    failedPackages: [],
    skippedAlreadyExists: 0,
  };

  const candidates: Array<{packageDirectory: string; packageLabel: string}> = [];

  for (const packageDirectory of packageDirectories) {
    const packageJsonPath = path.join(packageDirectory, 'package.json');
    if (!(await exists(packageJsonPath))) {
      continue;
    }

    const schemaName = path.basename(packageDirectory);
    if (isNonPublishableSchemaId(schemaName, nonPublishableSchemaIds)) {
      continue;
    }

    const matchingLockEntry = findLockEntryForPackage(lockFile, packageDirectory, projectRoot);
    if (matchingLockEntry?.published) {
      continue;
    }

    const packageManifest = await readPackageManifest(packageJsonPath);
    const packageLabel = formatPackageLabel(packageManifest, schemaName);
    const packageName = packageManifest.name ?? `@schemastore/${schemaName}`;

    process.stdout.write(`🔍 Checking ${packageLabel} on npm ... `);

    let alreadyExists: boolean;
    try {
      alreadyExists = await checkPackageExists(packageName);
    } catch (error) {
      stats.failed += 1;
      stats.failedPackages.push(packageLabel);
      process.stdout.write('failed\n');
      console.error(error instanceof Error ? (error.stack ?? error.message) : String(error));
      continue;
    }

    if (alreadyExists) {
      // Already exists on npm - just a pending new version, not a first-ever
      // publish. Leave it for the normal staged-publish pipeline to handle.
      stats.skippedAlreadyExists += 1;
      process.stdout.write('already exists\n');
      continue;
    }

    process.stdout.write('not found, will bootstrap\n');
    candidates.push({packageDirectory, packageLabel});
  }

  if (candidates.length === 0) {
    return stats;
  }

  // A single browser-based login covers every candidate below - `npm publish`
  // does not fall back to a web login from a fully unauthenticated state on
  // its own, only `npm login` does, so login has to happen as its own step.
  process.stdout.write('🔑 Logging in to npm - watch for a login URL to open on your phone ... ');
  await loginToNpm();
  process.stdout.write('done\n');

  for (const {packageDirectory, packageLabel} of candidates) {
    stats.attempted += 1;
    process.stdout.write(`🌱 Bootstrapping ${packageLabel} ... `);

    try {
      await publishNewPackage(packageDirectory);
      markPackageAsPublished(lockFile, packageDirectory, projectRoot);
      await writeLockFile(lockFilePath, lockFile);
      stats.bootstrapped += 1;
      stats.bootstrappedPackages.push(packageLabel);
      process.stdout.write('done\n');
    } catch (error) {
      stats.failed += 1;
      stats.failedPackages.push(packageLabel);
      process.stdout.write('failed\n');
      console.error(error instanceof Error ? (error.stack ?? error.message) : String(error));
    }
  }

  return stats;
}

export async function publishGeneratedPackages(options: PublishOptions = {}): Promise<PublishStats> {
  const projectRoot = process.cwd();
  const dryRun = options.dryRun ?? false;
  const schemasDirectory = options.schemasDir ? path.resolve(options.schemasDir) : path.join(projectRoot, 'schemas');
  const logFilePath = options.logFilePath
    ? path.resolve(options.logFilePath)
    : path.join(projectRoot, DEFAULT_PUBLISH_LOG_FILE);
  const summaryFilePath = path.join(projectRoot, PUBLISH_SUMMARY_FILE_NAME);
  const publishPackage = options.publishPackage ?? stagePackageDirectory;
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
  const nonPublishableSchemaIds = await loadNonPublishableSchemaIds(projectRoot);
  const stats: PublishStats = {
    attempted: 0,
    dryRun,
    failed: 0,
    failedPackages: [],
    logFilePath: path.relative(projectRoot, logFilePath),
    published: 0,
    publishedPackages: [],
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

    if (isNonPublishableSchemaId(schemaName, nonPublishableSchemaIds)) {
      stats.skipped += 1;
      process.stdout.write(`⏭️ Publishing: @schemastore/${schemaName} ... skipped (non-publishable)\n`);
      await writePublishLog(logFilePath, errorMessages);
      continue;
    }

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
        stats.publishedPackages.push(packageLabel);
        process.stdout.write(`dry run\n`);
        continue;
      }

      await publishPackage(packageDirectory);
      stats.published += 1;
      stats.publishedPackages.push(packageLabel);
      markPackageAsPublished(lockFile, packageDirectory, projectRoot);
      await writeLockFile(lockFilePath, lockFile);
      process.stdout.write(`done\n`);
    } catch (error) {
      stats.failed += 1;
      stats.failedPackages.push(packageLabel);
      process.stdout.write(`failed\n`);
      errorMessages.push(formatPublishError(packageLabel, error));
    }

    await writePublishLog(logFilePath, errorMessages);
  }

  await writeFile(summaryFilePath, createPublishSummary(stats), 'utf-8');

  return stats;
}

function createPublishSummary(stats: PublishStats): string {
  const lines: string[] = [
    '## Publish Summary',
    '',
    `- **Attempted:** ${stats.attempted}`,
    `- **Staged (pending 2FA approval):** ${stats.published}`,
    `- **Skipped:** ${stats.skipped}`,
    `- **Failed:** ${stats.failed}`,
  ];

  if (stats.publishedPackages.length > 0) {
    lines.push('', `<details>`);
    lines.push(`<summary><h3>Staged Packages (${stats.publishedPackages.length})</h3></summary>`, '');
    for (const packageLabel of stats.publishedPackages) {
      lines.push(`- \`${packageLabel}\``);
    }
    lines.push('', '</details>');
  }

  if (stats.failedPackages.length > 0) {
    lines.push('', `<details>`);
    lines.push(`<summary><h3>Failed Packages (${stats.failedPackages.length})</h3></summary>`, '');
    for (const packageLabel of stats.failedPackages) {
      lines.push(`- \`${packageLabel}\``);
    }
    lines.push('', '</details>');
  }

  lines.push('');
  return lines.join('\n');
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

async function loginToNpmWithBrowser(): Promise<void> {
  await spawnNpmWithInheritedStdio(['login', '--auth-type=web', '--registry', NPM_REGISTRY_URL]);
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

async function packageExistsOnNpm(packageName: string): Promise<boolean> {
  const response = await fetch(`${NPM_REGISTRY_URL}${packageName}`, {
    signal: AbortSignal.timeout(NPM_REGISTRY_CHECK_TIMEOUT_MS),
  });
  return response.ok;
}

// `npm publish` only attempts to resolve an OTP/2FA challenge interactively -
// in a non-TTY environment (e.g. CI) it just prints the challenge and exits.
// There is no working way to complete that challenge from a second, wrapping
// process: npm's own web-based OTP flow (required for WebAuthn/passkey
// accounts, since there's no typed code to fall back to) has no known working
// implementation for non-interactive callers - even changesets, the tool
// npm's own CLI cites as the reason it surfaces these URLs at all, has this as
// an open, unimplemented feature request (changesets/changesets#1773).
// Bootstrapping a brand-new package must therefore be run from a real
// terminal by a maintainer, where npm's native OTP/passkey prompt works.
async function publishNewPackageDirectory(packageDirectory: string): Promise<void> {
  await spawnNpmWithInheritedStdio(['publish', '--access', 'public', '--registry', NPM_REGISTRY_URL], {
    cwd: packageDirectory,
  });
}

async function readPackageManifest(packageJsonPath: string): Promise<PackageManifest> {
  const packageJsonContent = await readFile(packageJsonPath, 'utf-8');
  return JSON.parse(packageJsonContent) as PackageManifest;
}

async function runNpmWithTemporaryToken(args: string[], packageDirectory: string, npmToken: string): Promise<void> {
  const configDirectory = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-npm-'));
  const userConfigPath = path.join(configDirectory, '.npmrc');

  try {
    await writeFile(userConfigPath, `//registry.npmjs.org/:_authToken=${npmToken}\n`, 'utf-8');
    await execFileAsync('npm', [...args, '--userconfig', userConfigPath], {
      cwd: packageDirectory,
      env: process.env,
    });
  } finally {
    await rm(configDirectory, {force: true, recursive: true});
  }
}

// Same live-streaming rationale as `spawnNpmWithInheritedStdio`, but stderr is
// `execFile` always buffers a child's output for its callback, even when
// asked to inherit stdio, so a live browser-approval URL (npm login) or an
// interactive OTP/passkey prompt (npm publish, run from a real terminal)
// would never reach the terminal while the process is still running and
// waiting for that approval - only `spawn` streams it live.
async function spawnNpmWithInheritedStdio(args: string[], spawnOptions: {cwd?: string} = {}): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const child = spawn('npm', args, {
      cwd: spawnOptions.cwd,
      env: process.env,
      stdio: 'inherit',
    });

    child.on('error', reject);
    child.on('exit', (code, signal) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`npm ${args[0]} exited with code ${code ?? 'null'} (signal ${signal ?? 'none'})`));
      }
    });
  });
}

async function stagePackageDirectory(packageDirectory: string): Promise<void> {
  try {
    await execFileAsync('npm', ['stage', 'publish', '--access', 'public', '--registry', NPM_REGISTRY_URL], {
      cwd: packageDirectory,
      env: process.env,
    });
  } catch (error) {
    // Falls back to a token when OIDC has no trusted publisher for this package yet.
    // This only helps packages that already exist on npm without trust configured -
    // `npm stage publish` cannot create a package for the first time (it 404s), so a
    // schema's very first version must still be published manually by a maintainer
    // before this schema can ever succeed here, staged or not.
    const fallbackToken = process.env.NPM_TOKEN;
    if (!fallbackToken) {
      throw error;
    }

    await stageWithFallbackToken(packageDirectory, fallbackToken);
  }
}

async function stageWithFallbackToken(packageDirectory: string, npmToken: string): Promise<void> {
  await runNpmWithTemporaryToken(
    ['stage', 'publish', '--access', 'public', '--registry', NPM_REGISTRY_URL],
    packageDirectory,
    npmToken
  );
}

async function writeLockFile(lockFilePath: string, lockFile: SchemaLockFile): Promise<void> {
  await writeFile(lockFilePath, `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');
}

async function writePublishLog(logFilePath: string, errorMessages: string[]): Promise<void> {
  const content = errorMessages.length > 0 ? `${errorMessages.join('\n\n')}\n` : 'No publish errors.\n';
  await writeFile(logFilePath, content, 'utf-8');
}
