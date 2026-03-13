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
      generated: 1,
      skipped: 0,
      totalSchemas: 1,
    });

    const packageDir = path.join(context.workspaceDir, 'schemas', 'accelerator-schema');
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
    expect(generatedLicense).toBe('MIT\n');
    expect(generatedPackageJson).toMatchObject({
      author: 'Florian Imdahl <git@ffflorian.de>',
      description: 'TypeScript definitions for accelerator-schema.',
      name: '@schemastore/accelerator-schema',
      private: false,
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
      generated: 0,
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
      await readFile(path.join(context.workspaceDir, 'schemas', 'accelerator-schema', 'package.json'), 'utf-8')
    ) as {version?: string};

    vi.setSystemTime(new Date('2026-03-11T00:00:00Z'));
    const forcedStats = await withWorkingDirectory(context.workspaceDir, () =>
      updateSchemas({force: true, sourceDir: context.sourceDir})
    );
    const secondLock = await readLockFile(context.workspaceDir);
    const secondPackageJson = JSON.parse(
      await readFile(path.join(context.workspaceDir, 'schemas', 'accelerator-schema', 'package.json'), 'utf-8')
    ) as {version?: string};

    expect(forcedStats).toEqual({
      failed: 0,
      generated: 1,
      skipped: 0,
      totalSchemas: 1,
    });
    expect(secondLock.entries['accelerator/schema.json']?.updatedAt).not.toBe(
      firstLock.entries['accelerator/schema.json']?.updatedAt
    );
    expect(firstPackageJson.version).toBe('1.0.0');
    expect(secondPackageJson.version).toBe('1.0.1');
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
      generated: 0,
      skipped: 0,
      totalSchemas: 1,
    });
    expect(generatorLog).toContain('Skipped (conversion failed): broken/schema.json');
    expect(lockFile.entries).toEqual({});
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

    const brokenPackageDir = path.join(context.workspaceDir, 'schemas', 'broken-schema');

    expect(stats).toEqual({
      failed: 1,
      generated: 0,
      skipped: 0,
      totalSchemas: 1,
    });
    expect(generatorLog).toContain('Skipped (type-check failed): broken/schema.json');
    await expect(readFile(path.join(brokenPackageDir, 'index.d.ts'), 'utf-8')).rejects.toThrow();
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

  await writeFile(path.join(workspaceDir, 'LICENSE'), 'MIT\n', 'utf-8');

  const sourceDir = path.join(workspaceDir, 'source');

  for (const [relativePath, content] of Object.entries(schemaFiles)) {
    const schemaPath = path.join(sourceDir, 'src', 'schemas', 'json', relativePath);
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
