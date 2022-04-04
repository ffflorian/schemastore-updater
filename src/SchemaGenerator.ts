import {execSync} from 'child_process';
import * as crypto from 'crypto';
import * as fs from 'fs-extra';
import * as schemaGenerator from 'json-schema-to-typescript';
import * as jsonAbc from 'jsonabc';
import * as logdown from 'logdown';
import * as path from 'path';
import * as semver from 'semver';

import type {BuildResult, CheckResult, SchemaData, SchemaGeneratorOptions, SchemaHashes} from './interfaces';

const defaultOptions: Required<SchemaGeneratorOptions> = {
  disabledSchemas: [],
  force: false,
  lockFile: 'schemas/json-schemas.lock',
  schemaStoreRepo: 'https://github.com/SchemaStore/schemastore',
  source: '',
};

export class SchemaGenerator {
  public readonly options: Required<SchemaGeneratorOptions>;
  private readonly jsonSchemasDir: string;
  private readonly lockFile: string;
  private readonly logFile: string;
  private readonly logger: logdown.Logger;
  private readonly schemaStoreDirResolved: string;
  private readonly updatedFilesFile: string;

  constructor(options?: SchemaGeneratorOptions) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.options.source = this.options.source || 'temp/schemastore';
    this.schemaStoreDirResolved = path.resolve(this.options.source);
    this.jsonSchemasDir = path.join(this.schemaStoreDirResolved, 'src/schemas/json');
    this.lockFile = path.resolve(this.options.lockFile);
    this.logFile = path.resolve('schemagenerator.log');
    this.updatedFilesFile = path.resolve('updated_files');
    this.logger = logdown('schemastore-updater/SchemaGenerator', {
      logger: console,
      markdown: false,
    });

    try {
      fs.accessSync(this.lockFile, fs.constants.R_OK | fs.constants.F_OK);
    } catch (error) {
      throw new Error(`Lockfile "${this.lockFile}" not found.`);
    }

    this.logger.info(`Using lockfile "${this.lockFile}".`);

    if (this.options.force) {
      this.logger.info('Force is set. Will re-generate all schemas.');
    }
  }

  public async checkDisabled(): Promise<CheckResult> {
    this.logger.info('Checking disabled packages.');

    try {
      const files = await fs.readdir(this.schemaStoreDirResolved);
      if (files.length === 0) {
        throw new Error('No files in directory');
      }
    } catch {
      await this.removeAndClone();
    }

    const {disabledSchemas, generatedSchemas} = await this.generate(this.options.disabledSchemas);
    return {disabledSchemas, enabledSchemas: generatedSchemas};
  }

  public async checkHashsums(): Promise<void> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);
    const invalidEntries = [];

    for (const entry in lockFileData) {
      const name = entry.replace('.json', '');
      const fileName = `./schemas/${name}/package.json`;
      const fileIsReadable = await this.fileIsReadable(fileName);
      if (fileIsReadable) {
        const packageJson = await fs.readJson(fileName);
        const lockFileHash = lockFileData[entry].hash;
        if (lockFileHash !== packageJson.typesPublisherContentHash) {
          invalidEntries.push(entry);
        }
      }
    }

    if (invalidEntries.length) {
      this.logger.error(`Invalid hash entries: "${invalidEntries.join('", "')}".`);
    }
  }

  public async checkVersions(): Promise<void> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);
    const invalidEntries = [];

    for (const entry in lockFileData) {
      const name = entry.replace('.json', '');
      const fileName = `./schemas/${name}/package.json`;
      const fileIsReadable = await this.fileIsReadable(fileName);
      if (fileIsReadable) {
        const packageJson = await fs.readJson(fileName);
        const lockFileVersion = lockFileData[entry].version;
        if (lockFileVersion !== packageJson.version) {
          invalidEntries.push(entry);
        }
      }
    }

    if (invalidEntries.length) {
      this.logger.error(`Invalid version entries: "${invalidEntries.join('", "')}".`);
    }
  }

  public async fixLockfile(): Promise<void> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);

    for (const entry in lockFileData) {
      const name = entry.replace('.json', '');
      const fileName = `./schemas/${name}/package.json`;
      const fileIsReadable = await this.fileIsReadable(fileName);
      if (fileIsReadable) {
        const packageJson = await fs.readJson(fileName);

        const lockFileHash = lockFileData[entry].hash;
        const packageJsonHash = packageJson.typesPublisherContentHash;

        if (lockFileHash !== packageJsonHash) {
          this.logger.info(`${entry}: Expected "${packageJsonHash}", got "${lockFileHash}".`);
          lockFileData[entry].hash = packageJsonHash;
        }

        const lockFileVersion = lockFileData[entry].version;
        const packageJsonVersion = packageJson.version;

        if (lockFileVersion !== packageJsonVersion) {
          this.logger.info(`${entry}: Expected "${packageJsonVersion}", got "${lockFileVersion}".`);
          lockFileData[entry].version = packageJsonVersion;
        }
      }
    }

    await fs.writeJson(this.lockFile, lockFileData, {spaces: 2});
  }

  public async generate(enabledSchemas: string[]): Promise<BuildResult> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);
    const fileHashes = await this.generateHashes(enabledSchemas);
    const updatedHashes = await this.bumpVersions(fileHashes, lockFileData);

    await fs.remove(this.updatedFilesFile);
    const {disabledSchemas, generatedSchemas} = await this.generateSchemas(updatedHashes);

    for (const disabledSchema of disabledSchemas) {
      if (lockFileData[disabledSchema]) {
        updatedHashes[disabledSchema] = lockFileData[disabledSchema];
      }
    }

    await this.writeLockFile(this.lockFile, {...lockFileData, ...updatedHashes});

    return {
      disabledSchemas,
      generatedSchemas,
    };
  }

  public async generateAll(): Promise<BuildResult> {
    try {
      const files = await fs.readdir(this.schemaStoreDirResolved);
      if (files.length === 0) {
        throw new Error('No files in directory');
      }
    } catch {
      await this.removeAndClone();
    }
    const allFiles = await fs.readdir(this.jsonSchemasDir);

    const enabledSchemas = allFiles.filter(fileName => {
      const schemaIsDisabled = this.options.disabledSchemas.includes(fileName);
      return fileName.endsWith('.json') && !schemaIsDisabled;
    });

    this.logger.info(
      `Loaded ${enabledSchemas.length} enabled schemas and ${this.options.disabledSchemas.length} disabled schemas.`
    );

    return this.generate(enabledSchemas);
  }

  private async bumpVersions(fileHashes: Record<string, string>, lockFileData: SchemaHashes): Promise<SchemaHashes> {
    const updatedHashes: SchemaHashes = {};

    for (const fileName in fileHashes) {
      if (!lockFileData[fileName]) {
        this.logger.info(`Hash from "${fileName}" does not exist yet. Creating.`);
        updatedHashes[fileName] = {
          hash: fileHashes[fileName],
          version: '0.0.1',
        };
      } else if (
        lockFileData[fileName] &&
        (fileHashes[fileName] !== lockFileData[fileName].hash || this.options.force)
      ) {
        this.logger.info(`Hash from "${fileName}" is outdated. Updating.`);

        const newVersion = semver.inc(lockFileData[fileName].version, 'patch');

        updatedHashes[fileName] = {
          hash: fileHashes[fileName],
          version: String(newVersion),
        };
      }
    }

    return updatedHashes;
  }

  private async fileIsReadable(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async generateHashes(schemas: string[]): Promise<Record<string, string>> {
    this.logger.info(`Generating hashes for ${schemas.length} schemas.`);
    const fileHashes: Record<string, string> = {};

    for (const fileName of schemas) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      const fileIsReadable = await this.fileIsReadable(fileNameResolved);

      if (fileIsReadable) {
        const fileContent = await fs.readFile(fileNameResolved, 'utf8');
        const sha256 = crypto.createHash('sha256').update(fileContent).digest('hex');

        fileHashes[fileName] = sha256;
      } else {
        this.logger.error(`File "${fileNameResolved}" is not readable.`);
      }
    }

    return fileHashes;
  }

  private generateLicense(): string {
    return `MIT License

Copyright (c) Florian Imdahl. All rights reserved.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE
`;
  }

  private generatePackageJson(schemaName: string, schemaData: SchemaData): string {
    return `{
  "author": "Florian Imdahl <git@ffflorian.de>",
  "dependencies": {},
  "description": "TypeScript definitions for ${schemaName}.",
  "license": "MIT",
  "main": "index.d.ts",
  "name": "@schemastore/${schemaName}",
  "repository": "https://github.com/ffflorian/schemastore-updater/tree/main/schemas/${schemaName}",
  "scripts": {},
  "typesPublisherContentHash": "${schemaData.hash}",
  "types": "index.d.ts",
  "version": "${schemaData.version}",
  "typeScriptVersion": "2.2"
}
`;
  }

  private generateReadme(schemaName: string): string {
    const timeStamp = new Date().toLocaleDateString('en-US', {
      day: '2-digit',
      hour: '2-digit',
      hour12: false,
      minute: '2-digit',
      month: 'short',
      second: '2-digit',
      timeZone: 'GMT',
      weekday: 'short',
      year: 'numeric',
    });
    return `# Installation
> \`npm install --save @schemastore/${schemaName}\`

# Summary
This package contains type definitions for ${schemaName}.

## Details
Files were exported from https://github.com/ffflorian/schemastore-updater/tree/main/schemas/${schemaName}.

## Additional Details
* Last updated: ${timeStamp} GMT
* Dependencies: none
`;
  }

  private async generateSchemas(jsonData: SchemaHashes): Promise<BuildResult> {
    const disabledSchemas: string[] = [];
    const generatedSchemas: string[] = [];

    for (const fileName in jsonData) {
      const schemaName = fileName.replace('.json', '');
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      this.logger.info(`Processing "${schemaName}" ...`);

      let newSchema = '';

      try {
        newSchema = await schemaGenerator.compileFromFile(fileNameResolved, {
          cwd: this.jsonSchemasDir,
        });
      } catch (error) {
        this.logger.error(`Can't process "${schemaName}". Adding to the list of disabled schemas.`);
        disabledSchemas.push(fileName);
        await fs.appendFile(this.logFile, `${error.message}\n`, {encoding: 'utf-8'});
        break;
      }

      const schemaDirResolved = path.resolve('schemas', schemaName);
      const saveToSchemaDir = (fileName: string, content: string) => {
        return fs.writeFile(path.join(schemaDirResolved, fileName), content, 'utf-8');
      };

      await fs.ensureDir(schemaDirResolved);
      await saveToSchemaDir('index.d.ts', newSchema);

      const packageJson = this.generatePackageJson(schemaName, jsonData[fileName]);
      await saveToSchemaDir('package.json', packageJson);

      const readMe = this.generateReadme(schemaName);
      await saveToSchemaDir('README.md', readMe);

      const license = this.generateLicense();
      await saveToSchemaDir('LICENSE', license);

      await fs.appendFile(this.updatedFilesFile, `${schemaName}\n`, {encoding: 'utf-8'});

      this.logger.info(`Finished processing "${schemaName}".`);

      generatedSchemas.push(schemaName);
    }

    return {
      disabledSchemas,
      generatedSchemas,
    };
  }

  private async removeAndClone(): Promise<void> {
    await fs.remove(this.schemaStoreDirResolved);
    this.logger.info(`Cloning "${this.options.schemaStoreRepo}" to "${this.schemaStoreDirResolved}" ...`);
    execSync(`git clone --depth 1 "${this.options.schemaStoreRepo}" "${this.schemaStoreDirResolved}"`);
  }

  private async writeLockFile(fileName: string, data: SchemaHashes): Promise<void> {
    this.logger.info(`Writing lockfile "${fileName}" ...`);
    const sortedData = jsonAbc.sortObj(data, true);
    await fs.writeJson(path.resolve(fileName), sortedData, {spaces: 2});
  }
}
