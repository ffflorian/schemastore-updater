import {execFile, spawn} from 'node:child_process';
import {EventEmitter} from 'node:events';
import {mkdir, mkdtemp, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import type {SchemaLockFile} from '../src/types.ts';

import {bootstrapNewPackages} from '../src/publisher.ts';

vi.mock('node:child_process', () => ({
  execFile: vi.fn(),
  spawn: vi.fn(),
}));

const execFileMock = vi.mocked(execFile);
const spawnMock = vi.mocked(spawn);
const fetchMock = vi.fn();
const trackedTempDirectories: string[] = [];

vi.stubGlobal('fetch', fetchMock);

afterEach(async () => {
  execFileMock.mockReset();
  spawnMock.mockReset();
  fetchMock.mockReset();
  await Promise.all(trackedTempDirectories.map(tempDirectory => rm(tempDirectory, {force: true, recursive: true})));
  trackedTempDirectories.length = 0;
});

describe('packageExistsOnNpm / loginToNpmWithBrowser / publishNewPackageDirectory (default bootstrap wiring)', () => {
  it('logs in via browser once, then checks the registry and publishes only packages that do not exist yet', async () => {
    fetchMock.mockResolvedValue({ok: false});
    spawnMock.mockImplementation(() => {
      const child = new EventEmitter();
      queueMicrotask(() => child.emit('exit', 0, null));
      return child as ReturnType<typeof spawn>;
    });
    execFileMock.mockImplementation((_command, _args, _options, callback) => {
      (callback as (error: null, result: {stderr: string; stdout: string}) => void)(null, {stderr: '', stdout: ''});
      return {} as ReturnType<typeof execFile>;
    });

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages());

    expect(stats.bootstrapped).toBe(1);
    expect(fetchMock).toHaveBeenCalledWith('https://registry.npmjs.org/@schemastore/alpha', {
      signal: expect.any(AbortSignal),
    });
    expect(spawnMock).toHaveBeenCalledTimes(1);
    expect(spawnMock).toHaveBeenCalledWith(
      'npm',
      ['login', '--auth-type=web', '--registry', 'https://registry.npmjs.org/'],
      expect.objectContaining({stdio: 'inherit'})
    );
    expect(execFileMock).toHaveBeenCalledTimes(1);
    expect(execFileMock).toHaveBeenCalledWith(
      'npm',
      ['publish', '--access', 'public', '--registry', 'https://registry.npmjs.org/'],
      expect.objectContaining({cwd: expect.stringContaining('alpha')}),
      expect.any(Function)
    );
  });

  it('fails the batch without publishing anything when the npm login itself fails', async () => {
    fetchMock.mockResolvedValue({ok: false});
    spawnMock.mockImplementation(() => {
      const child = new EventEmitter();
      queueMicrotask(() => child.emit('exit', 1, null));
      return child as ReturnType<typeof spawn>;
    });

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    await expect(withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages())).rejects.toThrow(
      'npm login exited with code 1'
    );
    expect(execFileMock).not.toHaveBeenCalled();
  });

  it('skips publishing when the registry already has the package', async () => {
    fetchMock.mockResolvedValue({ok: true});

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => bootstrapNewPackages());

    expect(stats).toMatchObject({attempted: 0, bootstrapped: 0, skippedAlreadyExists: 1});
    expect(execFileMock).not.toHaveBeenCalled();
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
