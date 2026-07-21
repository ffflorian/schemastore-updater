import {spawn} from 'node:child_process';
import {EventEmitter} from 'node:events';
import {mkdir, mkdtemp, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import type {SchemaLockFile} from '../src/types.ts';

import {bootstrapNewPackages} from '../src/publisher.ts';

vi.mock('node:child_process', () => ({
  // publisher.ts also imports execFile at module scope (used by the regular
  // staged-publish path, not exercised here) - promisify(execFile) needs a
  // real function to bind to at import time even though this file never
  // asserts on it directly.
  execFile: vi.fn(),
  spawn: vi.fn(),
}));

const spawnMock = vi.mocked(spawn);
const fetchMock = vi.fn();
const trackedTempDirectories: string[] = [];

vi.stubGlobal('fetch', fetchMock);

afterEach(async () => {
  spawnMock.mockReset();
  fetchMock.mockReset();
  await Promise.all(trackedTempDirectories.map(tempDirectory => rm(tempDirectory, {force: true, recursive: true})));
  trackedTempDirectories.length = 0;
});

function mockSpawnExit(exitCode: number): void {
  spawnMock.mockImplementation(() => {
    const child = new EventEmitter();
    queueMicrotask(() => child.emit('exit', exitCode, null));
    return child as ReturnType<typeof spawn>;
  });
}

describe('packageExistsOnNpm / loginToNpmWithBrowser / publishNewPackageDirectory (default bootstrap wiring)', () => {
  it('logs in via browser once, then checks the registry and publishes only packages that do not exist yet', async () => {
    fetchMock.mockResolvedValue({ok: false});
    mockSpawnExit(0);

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages());

    expect(stats.bootstrapped).toBe(1);
    expect(fetchMock).toHaveBeenCalledWith('https://registry.npmjs.org/@schemastore/alpha', {
      signal: expect.any(AbortSignal),
    });
    expect(spawnMock).toHaveBeenCalledTimes(2);
    expect(spawnMock).toHaveBeenNthCalledWith(
      1,
      'npm',
      ['login', '--auth-type=web', '--registry', 'https://registry.npmjs.org/'],
      expect.objectContaining({stdio: 'inherit'})
    );
    expect(spawnMock).toHaveBeenNthCalledWith(
      2,
      'npm',
      ['publish', '--access', 'public', '--registry', 'https://registry.npmjs.org/', '--auth-type=web'],
      expect.objectContaining({cwd: expect.stringContaining('alpha'), stdio: 'inherit'})
    );
  });

  it('fails the batch without publishing anything when the npm login itself fails', async () => {
    fetchMock.mockResolvedValue({ok: false});
    mockSpawnExit(1);

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    await expect(withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages())).rejects.toThrow(
      'npm login exited with code 1'
    );
    expect(spawnMock).toHaveBeenCalledTimes(1);
  });

  it('skips publishing when the registry already has the package', async () => {
    fetchMock.mockResolvedValue({ok: true});

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages());

    expect(stats).toMatchObject({attempted: 0, bootstrapped: 0, skippedAlreadyExists: 1});
    expect(spawnMock).not.toHaveBeenCalled();
  });
});

async function createWorkspace(schemaPackageFiles: Record<string, string>): Promise<string> {
  const workspaceDirectory = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-bootstrap-tests-'));
  trackedTempDirectories.push(workspaceDirectory);

  await writeFile(path.join(workspaceDirectory, 'schema-blocklist.json'), JSON.stringify([]), 'utf-8');

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
  }

  await writeFile(path.join(workspaceDirectory, 'schema-lock.json'), `${JSON.stringify(lockFile, null, 2)}\n`, 'utf-8');

  return workspaceDirectory;
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
