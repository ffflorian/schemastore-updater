#!/usr/bin/env node

import {Command} from 'commander';
import {readFile, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import type {SchemaLockFile} from './types.js';

import {bootstrapNewPackages, publishGeneratedPackages} from './publisher.js';
import {LOCK_FILE_NAME, updateSchemas} from './updater.js';

interface PublishCommandOptions {
  dryRun?: boolean;
  logFile?: string;
}

interface UpdateCommandOptions {
  force?: boolean;
  schema?: string;
  sourceDir?: string;
}

async function getVersion(): Promise<string> {
  const currentFilePath = fileURLToPath(import.meta.url);
  const packageJsonPath = path.resolve(path.dirname(currentFilePath), '../package.json');
  const packageJsonRaw = await readFile(packageJsonPath, 'utf-8');
  const packageJson = JSON.parse(packageJsonRaw) as {version?: string};
  return packageJson.version ?? '0.0.0';
}

async function main(): Promise<void> {
  const program = new Command();
  const version = await getVersion();

  program
    .name('schemastore-updater')
    .description('Update JSON schemas from SchemaStore and generate TypeScript declarations')
    .version(version);

  program
    .command('publish')
    .description('Publish all generated schema packages to npm')
    .option('--dry-run', 'List packages that would be published without publishing them')
    .option('--log-file <file>', 'Write publish errors to a specific log file')
    .action((options: PublishCommandOptions) => runPublishCommand(options));

  program
    .command('bootstrap')
    .description(
      'Publish schema packages that have never existed on npm before (`npm stage publish` cannot create a package for the first time). Run this from a real terminal - it prompts for 2FA/passkey approval interactively and cannot complete in CI.'
    )
    .action(() => runBootstrapCommand());

  program
    .command('update')
    .description('Update and generate all schemas')
    .option('-f, --force', 'Regenerate all schemas, ignoring source hash matches')
    .option('--schema <id>', 'Only update the schema with this ID (e.g. "package")')
    .option('--source-dir <dir>', 'Use an existing SchemaStore checkout directory')
    .action((options: UpdateCommandOptions) => runUpdateCommand(options));

  program
    .command('mark-published <schema>')
    .description(`Set the published/staged flag to true for a schema entry in ${LOCK_FILE_NAME}`)
    .action((schema: string) => runMarkPublishedCommand(schema));

  if (process.argv.length <= 2) {
    await runUpdateCommand({force: false});
    return;
  }

  await program.parseAsync(process.argv);
}

async function run(): Promise<void> {
  try {
    await main();
  } catch (error) {
    const message = error instanceof Error ? (error.stack ?? error.message) : String(error);
    console.error(message);
    process.exitCode = 1;
  }
}

async function runBootstrapCommand(): Promise<void> {
  const stats = await bootstrapNewPackages();

  console.info('\nBootstrap complete.');
  console.info(`Attempted: ${stats.attempted}`);
  console.info(`Bootstrapped: ${stats.bootstrapped}`);
  console.info(`Already existed on npm: ${stats.skippedAlreadyExists}`);
  console.info(`Failed: ${stats.failed}`);

  if (stats.bootstrappedPackages.length > 0) {
    console.info(`\nBootstrapped packages:\n${stats.bootstrappedPackages.map(label => `  - ${label}`).join('\n')}`);
  }

  if (stats.failedPackages.length > 0) {
    console.info(`\nFailed packages:\n${stats.failedPackages.map(label => `  - ${label}`).join('\n')}`);
  }

  if (stats.failed > 0) {
    process.exitCode = 1;
  }
}

async function runMarkPublishedCommand(schema: string): Promise<void> {
  const lockFilePath = path.join(process.cwd(), LOCK_FILE_NAME);
  const raw = await readFile(lockFilePath, 'utf-8');
  const lockFile = JSON.parse(raw) as SchemaLockFile;

  const schemaId = schema.replace(/\.json$/i, '').toLowerCase();
  const matchingKey = Object.keys(lockFile.entries).filter(
    entry =>
      entry
        .replace(/\.json$/i, '')
        .replace(/[\\/]+/g, '-')
        .toLowerCase() === schemaId
  );

  if (matchingKey.length === 0 || !matchingKey[0]) {
    throw new Error(`No ${LOCK_FILE_NAME} entry found for schema ID: ${schemaId}`);
  }

  if (matchingKey.length > 1) {
    throw new Error(`Multiple ${LOCK_FILE_NAME} entry found for schema ID: ${schemaId}`);
  }

  const entry = lockFile.entries[matchingKey[0]];
  if (entry) {
    entry.published = true;
  }

  await writeFile(lockFilePath, `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');
  console.info(`Marked as published: ${matchingKey[0]}`);
}

async function runPublishCommand(options: PublishCommandOptions): Promise<void> {
  const stats = await publishGeneratedPackages({
    dryRun: options.dryRun ?? false,
    ...(options.logFile ? {logFilePath: options.logFile} : {}),
  });

  console.info(
    stats.dryRun ? '\nDry run complete.' : '\nStaging complete. Versions are pending 2FA approval on npmjs.com before they go live.'
  );
  console.info(`Attempted: ${stats.attempted}`);
  console.info(`Staged: ${stats.published}`);
  console.info(`Skipped: ${stats.skipped}`);
  console.info(`Failed: ${stats.failed}`);
  console.info(`Log file: ${stats.logFilePath}`);

  if (stats.publishedPackages.length > 0) {
    console.info(`\nStaged packages:\n${stats.publishedPackages.map(label => `  - ${label}`).join('\n')}`);
  }

  if (stats.failedPackages.length > 0) {
    console.info(`\nFailed packages:\n${stats.failedPackages.map(label => `  - ${label}`).join('\n')}`);
  }

  if (!stats.dryRun && stats.failed > 0) {
    process.exitCode = 1;
  }
}

async function runUpdateCommand(options: UpdateCommandOptions): Promise<void> {
  const stats = await updateSchemas({
    force: options.force ?? false,
    ...(options.schema ? {schema: options.schema} : {}),
    ...(options.sourceDir ? {sourceDir: options.sourceDir} : {}),
  });

  console.info('\nDone.');
  console.info(`Total: ${stats.totalSchemas}`);
  console.info(`Generated: ${stats.generated}`);
  console.info(`Skipped: ${stats.skipped}`);
  console.info(`Failed: ${stats.failed}`);

  if (stats.generatedSchemas.length > 0) {
    console.info(`\nGenerated schemas:\n${stats.generatedSchemas.map(name => `  - ${name}`).join('\n')}`);
  }

  if (stats.failedSchemas.length > 0) {
    console.info(`\nFailed schemas:\n${stats.failedSchemas.map(name => `  - ${name}`).join('\n')}`);
  }
}

void run();
