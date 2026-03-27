#!/usr/bin/env node

import {Command} from 'commander';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';

import {publishGeneratedPackages} from './publisher.js';
import {updateSchemas} from './updater.js';

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
    .action(async (options: PublishCommandOptions) => {
      await runPublishCommand(options);
    });

  program
    .command('update')
    .description('Update and generate all schemas')
    .option('-f, --force', 'Regenerate all schemas, ignoring source hash matches')
    .option('--schema <id>', 'Only update the schema with this ID (e.g. "package")')
    .option('--source-dir <dir>', 'Use an existing SchemaStore checkout directory')
    .action(async (options: UpdateCommandOptions) => {
      await runUpdateCommand(options);
    });

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

async function runPublishCommand(options: PublishCommandOptions): Promise<void> {
  const stats = await publishGeneratedPackages({
    dryRun: options.dryRun ?? false,
    ...(options.logFile ? {logFilePath: options.logFile} : {}),
  });

  console.info(stats.dryRun ? '\nDry run complete.' : '\nPublish complete.');
  console.info(`Attempted: ${stats.attempted}`);
  console.info(`Published: ${stats.published}`);
  console.info(`Skipped: ${stats.skipped}`);
  console.info(`Failed: ${stats.failed}`);
  console.info(`Log file: ${stats.logFilePath}`);

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
}

void run();
