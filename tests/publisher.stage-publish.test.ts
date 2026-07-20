import {execFile} from 'node:child_process';
import {mkdir, mkdtemp, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import type {SchemaLockFile} from '../src/types.ts';

import {publishGeneratedPackages} from '../src/publisher.ts';

vi.mock('node:child_process', () => ({
  execFile: vi.fn(),
}));

const execFileMock = vi.mocked(execFile);
const trackedTempDirectories: string[] = [];
const previousNpmToken = process.env.NPM_TOKEN;

afterEach(async () => {
  execFileMock.mockReset();
  if (previousNpmToken === undefined) {
    delete process.env.NPM_TOKEN;
  } else {
    process.env.NPM_TOKEN = previousNpmToken;
  }

  await Promise.all(trackedTempDirectories.map(tempDirectory => rm(tempDirectory, {force: true, recursive: true})));
  trackedTempDirectories.length = 0;
});

describe('stagePackageDirectory (default publishPackage)', () => {
  it('invokes `npm stage publish` relying only on the ambient OIDC environment', async () => {
    delete process.env.NPM_TOKEN;
    execFileMock.mockImplementation((_command, _args, _options, callback) => {
      (callback as (error: null, result: {stderr: string; stdout: string}) => void)(null, {stderr: '', stdout: ''});
      return {} as ReturnType<typeof execFile>;
    });

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    await withWorkingDirectory(workspaceDirectory, () => publishGeneratedPackages());

    expect(execFileMock).toHaveBeenCalledTimes(1);
    expect(execFileMock).toHaveBeenCalledWith(
      'npm',
      ['stage', 'publish', '--access', 'public', '--registry', 'https://registry.npmjs.org/'],
      expect.objectContaining({cwd: expect.stringContaining('alpha')}),
      expect.any(Function)
    );
  });

  it('retries with a scoped fallback token only when the OIDC-only attempt fails and NPM_TOKEN is set', async () => {
    process.env.NPM_TOKEN = 'fallback-token';
    execFileMock.mockImplementation((_command, args, _options, callback) => {
      const cb = callback as (error: Error | null, result?: {stderr: string; stdout: string}) => void;
      if (Array.isArray(args) && args.includes('--userconfig')) {
        cb(null, {stderr: '', stdout: ''});
      } else {
        cb(new Error('no trusted publisher configured for this package'));
      }
      return {} as ReturnType<typeof execFile>;
    });

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => publishGeneratedPackages());

    expect(stats.failed).toBe(0);
    expect(stats.published).toBe(1);
    expect(execFileMock).toHaveBeenCalledTimes(2);
    expect(execFileMock).toHaveBeenNthCalledWith(
      1,
      'npm',
      ['stage', 'publish', '--access', 'public', '--registry', 'https://registry.npmjs.org/'],
      expect.anything(),
      expect.any(Function)
    );
    expect(execFileMock).toHaveBeenNthCalledWith(
      2,
      'npm',
      [
        'stage',
        'publish',
        '--access',
        'public',
        '--registry',
        'https://registry.npmjs.org/',
        '--userconfig',
        expect.stringContaining('.npmrc'),
      ],
      expect.anything(),
      expect.any(Function)
    );
  });

  it('fails the package without retrying when the OIDC-only attempt fails and no NPM_TOKEN is set', async () => {
    delete process.env.NPM_TOKEN;
    execFileMock.mockImplementation((_command, _args, _options, callback) => {
      (callback as (error: Error) => void)(new Error('no trusted publisher configured for this package'));
      return {} as ReturnType<typeof execFile>;
    });

    const workspaceDirectory = await createWorkspace({
      'alpha/package.json': JSON.stringify({name: '@schemastore/alpha', version: '1.0.0'}, null, 2),
    });

    const stats = await withWorkingDirectory(workspaceDirectory, () => publishGeneratedPackages());

    expect(stats.failed).toBe(1);
    expect(execFileMock).toHaveBeenCalledTimes(1);
  });
});

async function createWorkspace(schemaPackageFiles: Record<string, string>): Promise<string> {
  const workspaceDirectory = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-stage-publish-tests-'));
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
