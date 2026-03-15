import {format} from 'date-fns';
import {compileFromFile} from 'json-schema-to-typescript';
import {execFile} from 'node:child_process';
import {access, mkdir, readdir, readFile, rename, rm, stat, writeFile} from 'node:fs/promises';
import path from 'node:path';
import {promisify} from 'node:util';
import {inc, valid} from 'semver';
import ts from 'typescript';

import type {CliOptions, LockEntry, SchemaLockFile, UpdateStats} from './types.js';

import {sha256FromBuffer} from './hash.js';

const execFileAsync = promisify(execFile);

const SCHEMASTORE_GIT_URL = 'https://github.com/SchemaStore/schemastore.git';
const LOG_FILE_NAME = 'schemagenerator.log';
const LOCK_FILE_NAME = 'schema-lock.json';

export async function updateSchemas(options: CliOptions): Promise<UpdateStats> {
  const projectRoot = process.cwd();
  const logFilePath = path.join(projectRoot, LOG_FILE_NAME);
  const outDir = path.join(projectRoot, 'schemas');
  const lockFilePath = path.join(projectRoot, LOCK_FILE_NAME);
  const rootLicensePath = path.join(projectRoot, 'LICENSE');

  const schemaStoreRoot = options.sourceDir
    ? path.resolve(options.sourceDir)
    : await ensureSchemaStoreRepo(projectRoot);
  const schemaRoot = path.join(schemaStoreRoot, 'src/schemas/json');

  let schemaRootStats = null;
  try {
    schemaRootStats = await stat(schemaRoot);
  } catch {
    // no-op
  }

  if (!schemaRootStats || !schemaRootStats.isDirectory()) {
    throw new Error(`SchemaStore path not found: ${schemaRoot}`);
  }

  let rootLicense: string;
  try {
    rootLicense = await readFile(rootLicensePath, 'utf-8');
  } catch {
    throw new Error(`Repository LICENSE not found: ${rootLicensePath}`);
  }

  await mkdir(outDir, {recursive: true});

  const lockFile = await loadLockFile(lockFilePath);
  const files = await collectJsonFiles(schemaRoot);

  const nextEntries: Record<string, LockEntry> = {};
  const logEntries: string[] = [];

  const stats: UpdateStats = {
    failed: 0,
    generated: 0,
    skipped: 0,
    totalSchemas: files.length,
  };

  await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');

  for (const schemaFilePath of files) {
    const schemaRelativePath = path.relative(schemaRoot, schemaFilePath);
    const schemaId = getSchemaId(schemaRelativePath);
    const packageDirPath = path.join(outDir, schemaId);
    const generatedFilePath = path.join(packageDirPath, 'index.d.ts');
    const packageLicensePath = path.join(packageDirPath, 'LICENSE');
    const packageJsonPath = path.join(packageDirPath, 'package.json');
    const packageReadmePath = path.join(packageDirPath, 'README.md');
    const previousEntry = lockFile.entries[schemaRelativePath];

    const sourceContent = await readFile(schemaFilePath);
    const sourceSha256 = sha256FromBuffer(sourceContent);

    if (
      !options.force &&
      previousEntry &&
      previousEntry.sourceSha256 === sourceSha256 &&
      (await exists(path.join(projectRoot, previousEntry.generatedFile))) &&
      (await exists(packageLicensePath)) &&
      (await exists(packageJsonPath)) &&
      (await exists(packageReadmePath))
    ) {
      nextEntries[schemaRelativePath] = previousEntry;
      stats.skipped += 1;
      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
      continue;
    }

    console.info(`⚙️ Generating: ${schemaId} ...`);

    try {
      const generatedCode = await compileFromFile(schemaFilePath, {
        bannerComment: '/* eslint-disable */',
        strictIndexSignatures: true,
        style: {
          singleQuote: true,
        },
      });

      await mkdir(packageDirPath, {recursive: true});

      const tempOutPath = generatedFilePath.replace(/\.d\.ts$/i, '.tmp.d.ts');
      await writeFile(tempOutPath, generatedCode, 'utf-8');

      const typeCheckResult = typeCheckSingleFile(tempOutPath);
      if (!typeCheckResult.ok) {
        await rm(tempOutPath, {force: true});
        stats.failed += 1;
        logEntries.push(`Skipped (type-check failed): ${schemaRelativePath}`);
        logEntries.push(typeCheckResult.errors);
        await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
        continue;
      }

      const nextPackageVersion = await resolveNextPackageVersion(packageJsonPath);

      await rename(tempOutPath, generatedFilePath);
      await writeFile(packageLicensePath, rootLicense, 'utf-8');
      await writeFile(
        packageJsonPath,
        `${JSON.stringify(createSchemaPackageJson(schemaId, nextPackageVersion), null, 2)}\n`,
        'utf-8'
      );
      await writeFile(packageReadmePath, createSchemaReadme(schemaId, new Date()), 'utf-8');

      const generatedContent = await readFile(generatedFilePath);
      const generatedSha256 = sha256FromBuffer(generatedContent);

      nextEntries[schemaRelativePath] = {
        generatedFile: path.relative(projectRoot, generatedFilePath),
        generatedSha256,
        published: false,
        sourceSha256,
        updatedAt: new Date().toISOString(),
      };

      stats.generated += 1;
      console.info(`✅ Generated: ${schemaRelativePath}`);
      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
    } catch (error) {
      stats.failed += 1;
      const errorMessage = error instanceof Error ? error.message : String(error);
      logEntries.push(`Skipped (conversion failed): ${schemaRelativePath}`);
      logEntries.push(errorMessage);

      if (error instanceof Error && error.stack) {
        logEntries.push(error.stack);
      }

      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
    }
  }

  const nextLockFile = {
    entries: nextEntries,
    generatedAt: new Date().toISOString(),
    version: 1,
  } satisfies SchemaLockFile;

  await writeFile(lockFilePath, `${JSON.stringify(nextLockFile, null, 2)}\n`, 'utf-8');

  return stats;
}

function bumpPatchVersion(version: string): string {
  const validVersion = valid(version);
  if (!validVersion) {
    return '1.0.0';
  }

  const nextVersion = inc(validVersion, 'patch');
  if (!nextVersion) {
    return '1.0.0';
  }

  return nextVersion;
}

async function collectJsonFiles(root: string): Promise<string[]> {
  const outputPaths: string[] = [];

  async function walk(current: string): Promise<void> {
    const entries = await readdir(current, {withFileTypes: true});

    for (const entry of entries) {
      const fullPath = path.join(current, entry.name);
      if (entry.isDirectory()) {
        await walk(fullPath);
        continue;
      }

      if (entry.isFile() && entry.name.endsWith('.json')) {
        outputPaths.push(fullPath);
      }
    }
  }

  await walk(root);
  outputPaths.sort((pathA, pathB) => pathA.localeCompare(pathB));
  return outputPaths;
}

function createGeneratorLog(entries: string[]): string {
  const timestamp = new Date().toISOString();

  if (entries.length === 0) {
    return `[${timestamp}] No schema generation or type-check errors.\n`;
  }

  return [`[${timestamp}] Schema generation log`, '', ...entries, ''].join('\n');
}

function createSchemaPackageJson(schemaId: string, version: string): Record<string, boolean | string> {
  return {
    author: 'Florian Imdahl <git@ffflorian.de>',
    description: `TypeScript definitions for ${schemaId}.`,
    license: 'GPL-3.0',
    name: `@schemastore/${schemaId}`,
    private: false,
    types: 'index.d.ts',
    version,
  };
}

function createSchemaReadme(schemaId: string, updatedAt: Date): string {
  const formattedUpdatedAt = formatReadmeDate(updatedAt);

  return `# Installation
> \`npm install --save @schemastore/${schemaId}\`

# Summary
This package contains type definitions for ${schemaId}.

## Details

Files were exported from https://github.com/ffflorian/schemastore-updater/tree/main/schemas/${schemaId}.

## Additional Details

* Last updated: ${formattedUpdatedAt}
* Dependencies: none
`;
}

async function ensureSchemaStoreRepo(baseDir: string): Promise<string> {
  const repoDir = path.join(baseDir, '.cache/schemastore');
  const gitDir = path.join(repoDir, '.git');

  if (await exists(gitDir)) {
    await execFileAsync('git', ['-C', repoDir, 'fetch', '--depth', '1', 'origin']);
    await execFileAsync('git', ['-C', repoDir, 'reset', '--hard', 'FETCH_HEAD']);
    return repoDir;
  }

  await mkdir(path.dirname(repoDir), {recursive: true});
  await execFileAsync('git', ['clone', '--depth', '1', SCHEMASTORE_GIT_URL, repoDir]);
  return repoDir;
}

async function exists(filePath: string): Promise<boolean> {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

function formatDiagnostics(diagnostics: readonly ts.Diagnostic[]): string {
  const host: ts.FormatDiagnosticsHost = {
    getCanonicalFileName: fileName => fileName,
    getCurrentDirectory: () => process.cwd(),
    getNewLine: () => '\n',
  };

  return ts.formatDiagnosticsWithColorAndContext(diagnostics, host);
}

function formatReadmeDate(date: Date): string {
  return format(date, "EEE, MMM d, yyyy, HH:mm:ss 'GMT'");
}

function getSchemaId(schemaRelativePath: string): string {
  return schemaRelativePath
    .replace(/\.json$/i, '')
    .replace(/[\\/]+/g, '-')
    .toLowerCase();
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
    ),
    generatedAt: parsed.generatedAt,
    version: 1,
  };
}

async function resolveNextPackageVersion(packageJsonPath: string): Promise<string> {
  if (!(await exists(packageJsonPath))) {
    return '1.0.0';
  }

  let packageJsonContent = '';
  try {
    packageJsonContent = await readFile(packageJsonPath, 'utf-8');
  } catch {
    packageJsonContent = '';
  }

  if (!packageJsonContent) {
    return '1.0.0';
  }

  const parsedPackageJson = JSON.parse(packageJsonContent) as {version?: string};
  if (!parsedPackageJson.version) {
    return '1.0.0';
  }

  return bumpPatchVersion(parsedPackageJson.version);
}

function typeCheckSingleFile(filePath: string): {errors: string; ok: false} | {ok: true} {
  const options = {
    module: ts.ModuleKind.NodeNext,
    moduleResolution: ts.ModuleResolutionKind.NodeNext,
    noEmit: true,
    skipLibCheck: true,
    strict: true,
    target: ts.ScriptTarget.ES2023,
  } satisfies ts.CompilerOptions;

  const program = ts.createProgram([filePath], options);
  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length === 0) {
    return {ok: true};
  }

  return {errors: formatDiagnostics(diagnostics), ok: false};
}
