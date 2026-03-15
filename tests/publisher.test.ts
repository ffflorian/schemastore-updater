import {mkdir, mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import type {SchemaLockFile} from '../src/types.ts';

import {publishGeneratedPackages} from '../src/publisher.ts';

const trackedTempDirectories: string[] = [];

afterEach(async () => {
  vi.useRealTimers();
  await Promise.all(trackedTempDirectories.map(tempDirectory => rm(tempDirectory, {force: true, recursive: true})));
  trackedTempDirectories.length = 0;
});

describe('publishGeneratedPackages', () => {
  it('publishes every generated package with a package.json', async () => {
    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
      'beta/package.json': JSON.stringify({name: '@schemastore/beta', version: '2.0.0'}, null, 2),
      'notes/readme.txt': 'not a package',
    });
    const publishedDirectories: string[] = [];

    const stats = await withWorkingDirectory(workspaceDirectory, () =>
      publishGeneratedPackages({
        publishPackage: async packageDirectory => {
          publishedDirectories.push(path.basename(packageDirectory));
        },
      })
    );

    const logFileContent = await readFile(path.join(workspaceDirectory, 'publish-errors.log'), 'utf-8');
    const lockFile = await readLockFile(workspaceDirectory);

    expect(stats).toEqual({
      attempted: 2,
      dryRun: false,
      failed: 0,
      logFilePath: 'publish-errors.log',
      published: 2,
      skipped: 1,
    });
    expect(publishedDirectories).toEqual(['alpha', 'beta']);
    expect(logFileContent).toBe('No publish errors.\n');
    expect(lockFile.entries['alpha.json']?.published).toBe(true);
    expect(lockFile.entries['beta.json']?.published).toBe(true);
  });

  it('continues publishing remaining packages and writes failures to a log file', async () => {
    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
      'beta/package.json': JSON.stringify({name: '@schemastore/beta', version: '1.0.1'}, null, 2),
      'gamma/package.json': JSON.stringify({name: '@schemastore/gamma', version: '1.0.2'}, null, 2),
    });
    const publishedDirectories: string[] = [];

    const stats = await withWorkingDirectory(workspaceDirectory, () =>
      publishGeneratedPackages({
        publishPackage: async packageDirectory => {
          const packageDirectoryName = path.basename(packageDirectory);
          if (packageDirectoryName === 'beta') {
            throw new Error('publish failed');
          }

          publishedDirectories.push(packageDirectoryName);
        },
      })
    );

    const logFileContent = await readFile(path.join(workspaceDirectory, 'publish-errors.log'), 'utf-8');
    const lockFile = await readLockFile(workspaceDirectory);

    expect(stats).toEqual({
      attempted: 3,
      dryRun: false,
      failed: 1,
      logFilePath: 'publish-errors.log',
      published: 2,
      skipped: 0,
    });
    expect(publishedDirectories).toEqual(['alpha', 'gamma']);
    expect(logFileContent).toContain('@schemastore/beta@1.0.1');
    expect(logFileContent).toContain('publish failed');
    expect(lockFile.entries['alpha.json']?.published).toBe(true);
    expect(lockFile.entries['beta.json']?.published).toBe(false);
    expect(lockFile.entries['gamma.json']?.published).toBe(true);
  });

  it('supports dry-run mode without calling the publish function', async () => {
    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
      'beta/package.json': JSON.stringify({name: '@schemastore/beta', version: '1.0.1'}, null, 2),
    });
    const publishPackage = vi.fn(async () => {
      throw new Error('should not publish in dry-run mode');
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () =>
      publishGeneratedPackages({
        dryRun: true,
        publishPackage,
      })
    );

    const logFileContent = await readFile(path.join(workspaceDirectory, 'publish-errors.log'), 'utf-8');
    const lockFile = await readLockFile(workspaceDirectory);

    expect(stats).toEqual({
      attempted: 2,
      dryRun: true,
      failed: 0,
      logFilePath: 'publish-errors.log',
      published: 2,
      skipped: 0,
    });
    expect(publishPackage).not.toHaveBeenCalled();
    expect(logFileContent).toBe('No publish errors.\n');
    expect(lockFile.entries['alpha.json']?.published).toBe(false);
    expect(lockFile.entries['beta.json']?.published).toBe(false);
  });

  it('skips packages that are already marked as published in schema-lock.json', async () => {
    const workspaceDirectory = await createWorkspace(
      {
        'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
        'beta/package.json': JSON.stringify({name: '@schemastore/beta', version: '1.0.1'}, null, 2),
      },
      {
        'alpha.json': true,
      }
    );

    const publishPackage = vi.fn(async (_packageDirectory: string) => undefined);

    const stats = await withWorkingDirectory(workspaceDirectory, () =>
      publishGeneratedPackages({
        publishPackage,
      })
    );

    const lockFile = await readLockFile(workspaceDirectory);

    expect(stats).toEqual({
      attempted: 1,
      dryRun: false,
      failed: 0,
      logFilePath: 'publish-errors.log',
      published: 1,
      skipped: 1,
    });
    expect(publishPackage).toHaveBeenCalledTimes(1);
    expect(lockFile.entries['alpha.json']?.published).toBe(true);
    expect(lockFile.entries['beta.json']?.published).toBe(true);
  });
});

async function createWorkspace(
  schemaPackageFiles: Record<string, string>,
  publishedOverrides: Record<string, boolean> = {}
): Promise<string> {
  const workspaceDirectory = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-publish-tests-'));
  trackedTempDirectories.push(workspaceDirectory);

  const schemasDirectory = path.join(workspaceDirectory, 'schemas');
  const lockFile: SchemaLockFile = {
    entries: {},
    generatedAt: new Date(0).toISOString(),
    version: 1,
  };

  for (const [relativePath, content] of Object.entries(schemaPackageFiles)) {
    const targetPath = path.join(schemasDirectory, relativePath);
    await mkdir(path.dirname(targetPath), {recursive: true});
    await writeFile(targetPath, content, 'utf-8');

    if (path.basename(targetPath) === 'package.json') {
      const packageDirectory = path.dirname(targetPath);
      const packageName = path.basename(packageDirectory);
      lockFile.entries[`${packageName}.json`] = {
        generatedFile: path.join('schemas', packageName, 'index.d.ts'),
        generatedSha256: 'generated-hash',
        published: publishedOverrides[`${packageName}.json`] ?? false,
        sourceSha256: 'source-hash',
        updatedAt: new Date(0).toISOString(),
      };
    }
  }

  await writeFile(path.join(workspaceDirectory, 'schema-lock.json'), `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');

  return workspaceDirectory;
}

async function readLockFile(workspaceDirectory: string): Promise<SchemaLockFile> {
  const raw = await readFile(path.join(workspaceDirectory, 'schema-lock.json'), 'utf-8');
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
