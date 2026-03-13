import {mkdir, mkdtemp, readFile, rm, writeFile} from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import {afterEach, describe, expect, it, vi} from 'vitest';

import {publishGeneratedPackages} from '../src/publisher.ts';

const trackedTempDirectories: string[] = [];

afterEach(async () => {
  vi.useRealTimers();
  await Promise.all(trackedTempDirectories.map(tempDirectory => rm(tempDirectory, {force: true, recursive: true})));
  trackedTempDirectories.length = 0;
});

describe('publishGeneratedPackages', () => {
  it('publishes every generated package with a package.json', async () => {
    const consoleInfoSpy = vi.spyOn(console, 'info').mockImplementation(() => undefined);
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
    expect(consoleInfoSpy).toHaveBeenCalledWith('Published: @schemastore/alpha@1.0.0');
    expect(consoleInfoSpy).toHaveBeenCalledWith('Published: @schemastore/beta@2.0.0');
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
  });
});

async function createWorkspace(schemaPackageFiles: Record<string, string>): Promise<string> {
  const workspaceDirectory = await mkdtemp(path.join(os.tmpdir(), 'schemastore-updater-publish-tests-'));
  trackedTempDirectories.push(workspaceDirectory);

  const schemasDirectory = path.join(workspaceDirectory, 'schemas');

  for (const [relativePath, content] of Object.entries(schemaPackageFiles)) {
    const targetPath = path.join(schemasDirectory, relativePath);
    await mkdir(path.dirname(targetPath), {recursive: true});
    await writeFile(targetPath, content, 'utf-8');
  }

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
