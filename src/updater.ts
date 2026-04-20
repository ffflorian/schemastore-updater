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
import {isNonPublishableSchemaId, loadNonPublishableSchemaIds} from './non-publishable-schemas.js';

const execFileAsync = promisify(execFile);

const SCHEMASTORE_GIT_URL = 'https://github.com/SchemaStore/schemastore.git';
const LOG_FILE_NAME = 'schemagenerator.log';
const LOCK_FILE_NAME = 'schema-lock.json';
const UPDATE_SUMMARY_FILE_NAME = 'update-summary.md';

export async function updateSchemas(options: CliOptions): Promise<UpdateStats> {
  const projectRoot = process.cwd();
  const logFilePath = path.join(projectRoot, LOG_FILE_NAME);
  const summaryFilePath = path.join(projectRoot, UPDATE_SUMMARY_FILE_NAME);
  const outDir = path.join(projectRoot, 'schemas');
  const lockFilePath = path.join(projectRoot, LOCK_FILE_NAME);
  const rootLicensePath = path.join(projectRoot, 'LICENSE');

  const schemaStoreRoot = options.sourceDir
    ? path.resolve(options.sourceDir)
    : await ensureSchemaStoreRepo(projectRoot);
  const schemaRoot = path.join(schemaStoreRoot, 'src/schemas/json');

  const schemaRootStats = await stat(schemaRoot).catch(() => null);

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
  const nonPublishableSchemaIds = await loadNonPublishableSchemaIds(projectRoot);
  const allFiles = await collectJsonFiles(schemaRoot);
  const files = options.schema
    ? allFiles.filter(file => getSchemaId(path.relative(schemaRoot, file)) === options.schema)
    : allFiles;

  const nextEntries: Record<string, LockEntry> = options.schema ? {...lockFile.entries} : {};
  const logEntries: string[] = [];

  const stats: UpdateStats = {
    failed: 0,
    failedSchemas: [],
    generated: 0,
    generatedSchemas: [],
    skipped: 0,
    totalSchemas: files.length,
  };

  await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');

  console.info(`🚀 schemastore-updater will now generate ${files.length} schema${files.length === 1 ? '' : 's'} ... `);

  for (const schemaFilePath of files) {
    const schemaRelativePath = path.relative(schemaRoot, schemaFilePath);
    const schemaId = getSchemaId(schemaRelativePath);

    if (isNonPublishableSchemaId(schemaId, nonPublishableSchemaIds)) {
      stats.skipped += 1;
      process.stdout.write(`⏭️ Skipping build for non-publishable schema: ${schemaId}\n`);
      logEntries.push(`Skipped (non-publishable): ${schemaRelativePath}`);
      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
      continue;
    }

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
      !options.schema &&
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

    process.stdout.write(
      `⚙️ Generating: ${schemaId} (${stats.generated + stats.failed + stats.skipped}/${files.length}) ... `
    );

    try {
      const generatedCode = fixIndexSignatureCompatibility(
        deduplicateGeneratedTypes(
          await compileFromFile(schemaFilePath, {
            bannerComment: '/* eslint-disable */',
            strictIndexSignatures: true,
            style: {
              singleQuote: true,
            },
          })
        )
      );

      await mkdir(packageDirPath, {recursive: true});

      const tempOutPath = generatedFilePath.replace(/\.d\.ts$/i, '.tmp.d.ts');
      await writeFile(tempOutPath, generatedCode, 'utf-8');

      const typeCheckResult = typeCheckSingleFile(tempOutPath);
      if (!typeCheckResult.ok) {
        await rm(tempOutPath, {force: true});
        stats.failed += 1;
        stats.failedSchemas.push(schemaId);
        process.stdout.write('skipped (type-check failed)\n');
        process.stderr.write(typeCheckResult.errors);
        logEntries.push(`Skipped (type-check failed): ${schemaRelativePath}`);
        logEntries.push(typeCheckResult.errors);
        await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
        if (previousEntry) {
          nextEntries[schemaRelativePath] = previousEntry;
        }
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
      stats.generatedSchemas.push(schemaId);
      process.stdout.write(`done\n`);
      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');
    } catch (error) {
      stats.failed += 1;
      stats.failedSchemas.push(schemaId);
      const errorMessage = error instanceof Error ? error.message : String(error);
      process.stdout.write('skipped (conversion failed)\n');
      process.stderr.write(`${errorMessage}\n`);
      logEntries.push(`Skipped (conversion failed): ${schemaRelativePath}`);
      logEntries.push(errorMessage);

      if (error instanceof Error && error.stack) {
        logEntries.push(error.stack);
      }

      await writeFile(logFilePath, createGeneratorLog(logEntries), 'utf-8');

      if (previousEntry) {
        nextEntries[schemaRelativePath] = previousEntry;
      }
    }
  }

  const nextLockFile = {
    entries: nextEntries,
    generatedAt: new Date().toISOString(),
    version: 1,
  } satisfies SchemaLockFile;

  await writeFile(lockFilePath, `${JSON.stringify(nextLockFile, null, 2)}\n`, 'utf-8');
  await writeFile(summaryFilePath, createUpdateSummary(stats), 'utf-8');

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

function createSchemaPackageJson(
  schemaId: string,
  version: string
): Record<string, boolean | Record<string, string> | string> {
  return {
    author: 'Florian Imdahl <git@ffflorian.de>',
    description: `TypeScript definitions for ${schemaId}.`,
    license: 'GPL-3.0',
    name: `@schemastore/${schemaId}`,
    private: false,
    repository: {
      type: 'git',
      url: 'git+https://github.com/ffflorian/schemastore-updater.git',
    },
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

function createUpdateSummary(stats: UpdateStats): string {
  const lines: string[] = [
    '## Schema Update Summary',
    '',
    `- **Total:** ${stats.totalSchemas}`,
    `- **Generated:** ${stats.generated}`,
    `- **Skipped:** ${stats.skipped}`,
    `- **Failed:** ${stats.failed}`,
  ];

  if (stats.generatedSchemas.length > 0) {
    lines.push('', '<details>');
    lines.push('', `<summary>### Updated Schemas (${stats.generatedSchemas.length})</summary>`, '');
    for (const schema of stats.generatedSchemas) {
      lines.push(`- \`${schema}\``);
    }
    lines.push('', '</details>');
  }

  if (stats.failedSchemas.length > 0) {
    lines.push('', '<details>');
    lines.push('', `<summary>### Failed Schemas (${stats.failedSchemas.length})</summary>`, '');
    for (const schema of stats.failedSchemas) {
      lines.push(`- \`${schema}\``);
    }
    lines.push('', '</details>');
  }

  lines.push('');
  return lines.join('\n');
}

function deduplicateGeneratedTypes(code: string): string {
  const sourceFile = ts.createSourceFile('generated.d.ts', code, ts.ScriptTarget.Latest, true);

  const typeBodyTexts = new Map<string, string>();

  for (const statement of sourceFile.statements) {
    if (!ts.isTypeAliasDeclaration(statement)) {
      continue;
    }
    typeBodyTexts.set(statement.name.text, statement.type.getText(sourceFile));
  }

  // Map TypeNameN -> TypeName where both exist and have identical bodies
  const renames = new Map<string, string>();

  for (const [name, bodyText] of typeBodyTexts) {
    const match = name.match(/^(.*\D)(\d+)$/);
    if (!match) {
      continue;
    }
    const [, baseName] = match;
    if (!baseName) {
      continue;
    }
    if (typeBodyTexts.get(baseName) === bodyText) {
      renames.set(name, baseName);
    }
  }

  if (renames.size === 0) {
    return code;
  }

  // Collect declaration ranges to remove, descending so earlier positions stay valid
  const rangesToRemove: Array<{end: number; start: number}> = [];

  for (const statement of sourceFile.statements) {
    if (!ts.isTypeAliasDeclaration(statement)) {
      continue;
    }
    if (renames.has(statement.name.text)) {
      rangesToRemove.push({end: statement.getEnd(), start: statement.getFullStart()});
    }
  }

  rangesToRemove.sort((rangeA, rangeB) => rangeB.start - rangeA.start);

  let result = code;

  for (const {end, start} of rangesToRemove) {
    result = result.slice(0, start) + result.slice(end);
  }

  for (const [from, to] of renames) {
    result = result.replace(new RegExp(`\\b${from}\\b`, 'g'), to);
  }

  return result;
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

function fixIndexSignatureCompatibility(code: string): string {
  const sourceFile = ts.createSourceFile('generated.d.ts', code, ts.ScriptTarget.Latest, true);

  const offsets: number[] = [];

  function visit(node: ts.Node): void {
    if (ts.isTypeLiteralNode(node)) {
      const hasOptionalProp = node.members.some(
        member => ts.isPropertySignature(member) && member.questionToken !== undefined
      );

      if (hasOptionalProp) {
        for (const member of node.members) {
          if (!ts.isIndexSignatureDeclaration(member) || !member.type) {
            continue;
          }
          if (/\bundefined\b/.test(member.type.getText(sourceFile))) {
            continue;
          }
          offsets.push(member.type.getEnd());
        }
      }
    }

    ts.forEachChild(node, visit);
  }

  visit(sourceFile);

  if (offsets.length === 0) {
    return code;
  }

  offsets.sort((offsetA, offsetB) => offsetB - offsetA);

  let result = code;

  for (const offset of offsets) {
    result = `${result.slice(0, offset)} | undefined${result.slice(offset)}`;
  }

  return result;
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

  const packageJsonContent = await readFile(packageJsonPath, 'utf-8').catch(() => '');

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
    skipDefaultLibCheck: true,
    target: ts.ScriptTarget.ES2023,
  } satisfies ts.CompilerOptions;

  const program = ts.createProgram([filePath], options);
  const diagnostics = ts.getPreEmitDiagnostics(program);

  if (diagnostics.length === 0) {
    return {ok: true};
  }

  return {errors: formatDiagnostics(diagnostics), ok: false};
}
