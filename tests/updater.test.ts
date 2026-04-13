import {mkdir, mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import type {SchemaLockFile} from '../src/types.ts';

import {updateSchemas} from '../src/updater.ts';

interface WorkspaceContext {
  sourceDir: string;
  workspaceDir: string;
}

const trackedTempDirs: string[] = [];

afterEach(async () => {
  vi.resetModules();
  vi.useRealTimers();

  await Promise.all(trackedTempDirs.map(tempDir => rm(tempDir, {force: true, recursive: true})));
  trackedTempDirs.length = 0;
});

describe('updateSchemas', () => {
  it('generates one publishable schema package with index, README, package.json and LICENSE', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );

    expect(stats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 1,
      generatedSchemas: ['accelerator-schema'],
      skipped: 0,
      totalSchemas: 1,
    });

    const packageDir = path.join(context.workspaceDir, 'schemas/accelerator-schema');
    const generatedDts = await readFile(path.join(packageDir, 'index.d.ts'), 'utf-8');
    const generatedLicense = await readFile(path.join(packageDir, 'LICENSE'), 'utf-8');
    const generatedReadme = await readFile(path.join(packageDir, 'README.md'), 'utf-8');
    const generatedPackageJson = JSON.parse(await readFile(path.join(packageDir, 'package.json'), 'utf-8')) as Record<
      string,
      boolean | string
    >;
    const generatorLog = await readFile(path.join(context.workspaceDir, 'schemagenerator.log'), 'utf-8');
    const lockFile = await readLockFile(context.workspaceDir);

    expect(generatedDts.startsWith('/* eslint-disable */')).toBe(true);
    expect(generatedLicense).toBe('GPL-3.0\n');
    expect(generatedPackageJson).toMatchObject({
      author: 'Florian Imdahl <git@ffflorian.de>',
      description: 'TypeScript definitions for accelerator-schema.',
      name: '@schemastore/accelerator-schema',
      private: false,
      repository: {
        type: 'git',
        url: 'git+https://github.com/ffflorian/schemastore-updater.git',
      },
      types: 'index.d.ts',
      version: '1.0.0',
    });
    expect(generatedReadme).toContain('# Installation');
    expect(generatedReadme).toContain('npm install --save @schemastore/accelerator-schema');
    expect(generatedReadme).toContain('This package contains type definitions for accelerator-schema.');
    expect(generatedReadme).toContain(
      'https://github.com/ffflorian/schemastore-updater/tree/main/schemas/accelerator-schema'
    );
    expect(generatorLog).toContain('No schema generation or type-check errors.');

    const updateSummary = await readFile(path.join(context.workspaceDir, 'update-summary.md'), 'utf-8');
    expect(updateSummary).toContain('## Schema Update Summary');
    expect(updateSummary).toContain('**Generated:** 1');
    expect(updateSummary).toContain('`accelerator-schema`');

    const lockEntry = lockFile.entries['accelerator/schema.json'];
    expect(lockEntry).toBeDefined();
    expect(lockEntry?.generatedFile).toBe('schemas/accelerator-schema/index.d.ts');
    // eslint-disable-next-line no-magic-numbers
    expect(lockEntry?.generatedSha256).toHaveLength(64);
    expect(lockEntry?.published).toBe(false);
    // eslint-disable-next-line no-magic-numbers
    expect(lockEntry?.sourceSha256).toHaveLength(64);
  });

  it('skips unchanged schemas on subsequent runs without force', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));
    const firstLock = await readLockFile(context.workspaceDir);

    const secondStats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );
    const secondLock = await readLockFile(context.workspaceDir);

    expect(secondStats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 0,
      generatedSchemas: [],
      skipped: 1,
      totalSchemas: 1,
    });
    expect(secondLock.entries['accelerator/schema.json']).toEqual(firstLock.entries['accelerator/schema.json']);
  });

  it('regenerates schema packages when force is true', async () => {
    vi.useFakeTimers();

    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    vi.setSystemTime(new Date('2026-03-10T00:00:00Z'));
    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));
    const firstLock = await readLockFile(context.workspaceDir);
    const firstPackageJson = JSON.parse(
      await readFile(path.join(context.workspaceDir, 'schemas/accelerator-schema/package.json'), 'utf-8')
    ) as {version?: string};

    vi.setSystemTime(new Date('2026-03-11T00:00:00Z'));
    const forcedStats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: true, sourceDir: context.sourceDir})
    );
    const secondLock = await readLockFile(context.workspaceDir);
    const secondPackageJson = JSON.parse(
      await readFile(path.join(context.workspaceDir, 'schemas/accelerator-schema/package.json'), 'utf-8')
    ) as {version?: string};

    expect(forcedStats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 1,
      generatedSchemas: ['accelerator-schema'],
      skipped: 0,
      totalSchemas: 1,
    });
    expect(secondLock.entries['accelerator/schema.json']?.updatedAt).not.toBe(
      firstLock.entries['accelerator/schema.json']?.updatedAt
    );
    expect(firstPackageJson.version).toBe('1.0.0');
    expect(secondPackageJson.version).toBe('1.0.1');
  });

  it('resets published to false when regeneration changes the generated sha256', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));

    const initialLockFile = await readLockFile(context.workspaceDir);
    const initialEntry = initialLockFile.entries['accelerator/schema.json'];

    expect(initialEntry).toBeDefined();

    await writeLockFile(context.workspaceDir, {
      ...initialLockFile,
      entries: {
        ...initialLockFile.entries,
        'accelerator/schema.json': {
          ...initialEntry,
          published: true,
        },
      },
    });

    await writeSchemaFile(
      context.sourceDir,
      'accelerator/schema.json',
      JSON.stringify(
        {
          ...createBasicSchema('Accelerator'),
          properties: {
            enabled: {type: 'boolean'},
            name: {type: 'string'},
          },
          required: ['name', 'enabled'],
        },
        null,
        2
      )
    );

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );
    const nextLockFile = await readLockFile(context.workspaceDir);
    const nextEntry = nextLockFile.entries['accelerator/schema.json'];

    expect(stats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 1,
      generatedSchemas: ['accelerator-schema'],
      skipped: 0,
      totalSchemas: 1,
    });
    expect(nextEntry?.generatedSha256).not.toBe(initialEntry?.generatedSha256);
    expect(nextEntry?.published).toBe(false);
  });

  it('counts conversion failures and continues without requiring a blocklist', async () => {
    const context = await createWorkspace({
      'broken/schema.json': '{"title": "Broken", "type":',
    });

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );
    const generatorLog = await readFile(path.join(context.workspaceDir, 'schemagenerator.log'), 'utf-8');
    const lockFile = await readLockFile(context.workspaceDir);

    expect(stats).toEqual({
      failed: 1,
      failedSchemas: ['broken-schema'],
      generated: 0,
      generatedSchemas: [],
      skipped: 0,
      totalSchemas: 1,
    });
    expect(generatorLog).toContain('Skipped (conversion failed): broken/schema.json');
    expect(lockFile.entries).toEqual({});

    const updateSummary = await readFile(path.join(context.workspaceDir, 'update-summary.md'), 'utf-8');
    expect(updateSummary).toContain('**Failed:** 1');
    expect(updateSummary).toContain('`broken-schema`');
  });

  it('counts type-check failures and skips invalid generated declarations', async () => {
    const context = await createWorkspace({
      'broken/schema.json': JSON.stringify(createBasicSchema('BrokenSchema'), null, 2),
    });

    vi.resetModules();
    vi.doMock('json-schema-to-typescript', () => ({
      compileFromFile: vi.fn(async () => '/* eslint-disable */\nexport interface Broken { value: ; }\n'),
    }));

    const mockedUpdater = await import('../src/updater.ts');
    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      mockedUpdater.updateSchemas({force: false, sourceDir: context.sourceDir})
    );
    const generatorLog = await readFile(path.join(context.workspaceDir, 'schemagenerator.log'), 'utf-8');

    const brokenPackageDir = path.join(context.workspaceDir, 'schemas/broken-schema');

    expect(stats).toEqual({
      failed: 1,
      failedSchemas: ['broken-schema'],
      generated: 0,
      generatedSchemas: [],
      skipped: 0,
      totalSchemas: 1,
    });
    expect(generatorLog).toContain('Skipped (type-check failed): broken/schema.json');
    await expect(readFile(path.join(brokenPackageDir, 'index.d.ts'), 'utf-8')).rejects.toThrow();
  });

  it('preserves existing lock entry when conversion fails', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));
    const firstLock = await readLockFile(context.workspaceDir);
    const firstEntry = firstLock.entries['accelerator/schema.json'];
    expect(firstEntry).toBeDefined();

    await writeSchemaFile(context.sourceDir, 'accelerator/schema.json', '{"title": "Broken", "type":');

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );
    const secondLock = await readLockFile(context.workspaceDir);

    expect(stats).toEqual({failed: 1, failedSchemas: ['accelerator-schema'], generated: 0, generatedSchemas: [], skipped: 0, totalSchemas: 1});
    expect(secondLock.entries['accelerator/schema.json']).toEqual(firstEntry);
  });

  it('preserves existing lock entry when type-check fails', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
    });

    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));
    const firstLock = await readLockFile(context.workspaceDir);
    const firstEntry = firstLock.entries['accelerator/schema.json'];
    expect(firstEntry).toBeDefined();

    vi.resetModules();
    vi.doMock('json-schema-to-typescript', () => ({
      compileFromFile: vi.fn(async () => '/* eslint-disable */\nexport interface Broken { value: ; }\n'),
    }));

    const mockedUpdater = await import('../src/updater.ts');
    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      mockedUpdater.updateSchemas({force: true, sourceDir: context.sourceDir})
    );
    const secondLock = await readLockFile(context.workspaceDir);

    expect(stats).toEqual({failed: 1, failedSchemas: ['accelerator-schema'], generated: 0, generatedSchemas: [], skipped: 0, totalSchemas: 1});
    expect(secondLock.entries['accelerator/schema.json']).toEqual(firstEntry);
  });

  it('fixes index signature incompatibility with optional properties', async () => {
    const context = await createWorkspace({
      'schema/test.json': JSON.stringify(createBasicSchema('Test'), null, 2),
    });

    vi.resetModules();
    vi.doMock('json-schema-to-typescript', () => ({
      compileFromFile: vi.fn(async () =>
        [
          '/* eslint-disable */',
          '',
          'export type Test = {',
          "  '.'?: string;",
          '  [k: string]: string;',
          '};',
          '',
        ].join('\n')
      ),
    }));

    const mockedUpdater = await import('../src/updater.ts');
    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      mockedUpdater.updateSchemas({force: false, sourceDir: context.sourceDir})
    );

    expect(stats.generated).toBe(1);
    expect(stats.failed).toBe(0);

    const generatedDts = await readFile(path.join(context.workspaceDir, 'schemas/schema-test/index.d.ts'), 'utf-8');

    expect(generatedDts).toContain('[k: string]: string | undefined;');
  });

  it('deduplicates identical numbered type variants in generated declarations', async () => {
    const context = await createWorkspace({
      'schema/test.json': JSON.stringify(createBasicSchema('Test'), null, 2),
    });

    vi.resetModules();
    vi.doMock('json-schema-to-typescript', () => ({
      compileFromFile: vi.fn(async () =>
        [
          '/* eslint-disable */',
          '',
          'export type Foo = string;',
          '',
          'export type Wrapper = {',
          '  value: Foo;',
          '};',
          '',
          'export type Wrapper1 = {',
          '  value: Foo;',
          '};',
          '',
          'export type Root = Wrapper | Wrapper1;',
          '',
        ].join('\n')
      ),
    }));

    const mockedUpdater = await import('../src/updater.ts');
    await withWorkingDirectory(context.workspaceDir, () =>
      mockedUpdater.updateSchemas({force: false, sourceDir: context.sourceDir})
    );

    const generatedDts = await readFile(path.join(context.workspaceDir, 'schemas/schema-test/index.d.ts'), 'utf-8');

    expect(generatedDts).not.toContain('Wrapper1');
    expect(generatedDts).toContain('export type Wrapper = {');
    expect(generatedDts).toContain('Root = Wrapper | Wrapper');
  });

  it('preserves existing lock file entries for other schemas when schema option is given', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
      'other/schema.json': JSON.stringify(createBasicSchema('Other'), null, 2),
    });

    await withWorkingDirectory(context.workspaceDir, () => updateSchemas({force: false, sourceDir: context.sourceDir}));
    const fullLock = await readLockFile(context.workspaceDir);
    expect(Object.keys(fullLock.entries)).toHaveLength(2);

    await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, schema: 'accelerator-schema', sourceDir: context.sourceDir})
    );
    const partialLock = await readLockFile(context.workspaceDir);

    expect(Object.keys(partialLock.entries)).toHaveLength(2);
    expect(partialLock.entries['other/schema.json']).toEqual(fullLock.entries['other/schema.json']);
  });

  it('generates only the specified schema when schema option is given', async () => {
    const context = await createWorkspace({
      'accelerator/schema.json': JSON.stringify(createBasicSchema('Accelerator'), null, 2),
      'other/schema.json': JSON.stringify(createBasicSchema('Other'), null, 2),
    });

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, schema: 'accelerator-schema', sourceDir: context.sourceDir})
    );

    expect(stats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 1,
      generatedSchemas: ['accelerator-schema'],
      skipped: 0,
      totalSchemas: 1,
    });

    await expect(
      readFile(path.join(context.workspaceDir, 'schemas/accelerator-schema/index.d.ts'), 'utf-8')
    ).resolves.toBeTruthy();
    await expect(
      readFile(path.join(context.workspaceDir, 'schemas/other-schema/index.d.ts'), 'utf-8')
    ).rejects.toThrow();
  });

  it('always skips non-publishable schemas during generation', async () => {
    const context = await createWorkspace({
      'cheatsheets.json': JSON.stringify(createBasicSchema('Cheatsheets'), null, 2),
    });

    const stats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: false, sourceDir: context.sourceDir})
    );

    const lockFile = await readLockFile(context.workspaceDir);
    const generatorLog = await readFile(path.join(context.workspaceDir, 'schemagenerator.log'), 'utf-8');

    expect(stats).toEqual({
      failed: 0,
      failedSchemas: [],
      generated: 0,
      generatedSchemas: [],
      skipped: 1,
      totalSchemas: 1,
    });
    expect(lockFile.entries).toEqual({});
    expect(generatorLog).toContain('Skipped (non-publishable): cheatsheets.json');
    await expect(
      readFile(path.join(context.workspaceDir, 'schemas/cheatsheets/index.d.ts'), 'utf-8')
    ).rejects.toThrow();
  });
});

function createBasicSchema(title: string): Record<string, unknown> {
  return {
    $schema: 'http://json-schema.org/draft-07/schema#',
    additionalProperties: false,
    properties: {
      name: {type: 'string'},
    },
    required: ['name'],
    title,
    type: 'object',
  };
}

async function createWorkspace(schemaFiles: Record<string, string>): Promise<WorkspaceContext> {
  const workspaceDir = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-tests-'));
  trackedTempDirs.push(workspaceDir);

  await writeFile(path.join(workspaceDir, 'schema-blocklist.json'), JSON.stringify(['cheatsheets']), 'utf-8');
  await writeFile(path.join(workspaceDir, 'LICENSE'), 'GPL-3.0\n', 'utf-8');

  const sourceDir = path.join(workspaceDir, 'source');

  for (const [relativePath, content] of Object.entries(schemaFiles)) {
    const schemaPath = path.join(sourceDir, 'src/schemas/json', relativePath);
    await mkdir(path.dirname(schemaPath), {recursive: true});
    await writeFile(schemaPath, content, 'utf-8');
  }

  return {sourceDir, workspaceDir};
}

async function readLockFile(workspaceDir: string): Promise<SchemaLockFile> {
  const raw = await readFile(path.join(workspaceDir, 'schema-lock.json'), 'utf-8');
  return JSON.parse(raw) as SchemaLockFile;
}

async function withWorkingDirectory<T>(targetDirectory: string, action: () => Promise<T>): Promise<T> {
  const previousDirectory = process.cwd();
  process.chdir(targetDirectory);

  try {
    return await action();
  } finally {
    process.chdir(previousDirectory);
  }
}

async function writeLockFile(workspaceDir: string, lockFile: SchemaLockFile): Promise<void> {
  await writeFile(path.join(workspaceDir, 'schema-lock.json'), `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');
}

async function writeSchemaFile(sourceDir: string, relativePath: string, content: string): Promise<void> {
  const schemaPath = path.join(sourceDir, 'src/schemas/json', relativePath);
  await mkdir(path.dirname(schemaPath), {recursive: true});
  await writeFile(schemaPath, content, 'utf-8');
}
