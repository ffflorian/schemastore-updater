import * as crypto from 'crypto';
import * as fs from 'fs-extra';
import * as schemaGenerator from 'json-schema-to-typescript';
import * as jsonAbc from 'jsonabc';
import * as logdown from 'logdown';
import * as path from 'path';
import * as semver from 'semver';
import * as simpleGit from 'simple-git/promise';

import {BuildResult, CheckResult, SchemaData, SchemaGeneratorOptions, SchemaHashes} from './interfaces';

const defaultOptions: Required<SchemaGeneratorOptions> = {
  disabledSchemas: [],
  force: false,
  lockFile: 'schemas/json-schemas.lock',
  schemaStoreRepo: 'https://github.com/SchemaStore/schemastore',
  source: '',
};

export class SchemaGenerator {
  private readonly git: simpleGit.SimpleGit;
  private readonly jsonSchemasDir: string;
  private readonly logger: logdown.Logger;
  private readonly schemaStoreDirResolved: string;
  private readonly options: Required<SchemaGeneratorOptions>;
  private readonly lockFile: string;

  constructor(options?: SchemaGeneratorOptions) {
    this.options = {
      ...defaultOptions,
      ...options,
    };
    this.git = simpleGit('.');
    this.schemaStoreDirResolved = this.options.source
      ? path.resolve(this.options.source)
      : path.join('temp/schemastore');
    this.jsonSchemasDir = path.join(this.schemaStoreDirResolved, 'src/schemas/json');
    this.lockFile = path.resolve(this.options.lockFile);
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
      this.logger.info(`Force is set. Will re-generate all schemas.`);
    }
  }

  private async fileIsReadable(filePath: string): Promise<boolean> {
    try {
      await fs.access(filePath, fs.constants.F_OK | fs.constants.R_OK);
      return true;
    } catch (error) {
      return false;
    }
  }

  private async generateLockFile(fileName: string, data: SchemaHashes): Promise<void> {
    const sortedData = jsonAbc.sortObj(data, true);
    await fs.writeJson(path.resolve(fileName), sortedData, {spaces: 2});
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
        newSchema = await schemaGenerator.compileFromFile(fileNameResolved);
      } catch (error) {
        this.logger.error(`Can't process "${schemaName}". Adding to the list of disabled schemas.`);
        disabledSchemas.push(fileName);
        continue;
      }

      const schemaDirResolved = path.resolve('schemas', schemaName);

      await fs.ensureDir(schemaDirResolved);
      await fs.writeFile(path.join(schemaDirResolved, 'index.d.ts'), newSchema, 'utf8');

      const packageJson = this.generatePackageJson(schemaName, jsonData[fileName]);
      await fs.writeFile(path.join(schemaDirResolved, 'package.json'), packageJson, 'utf8');

      const readMe = this.generateReadme(schemaName);
      await fs.writeFile(path.join(schemaDirResolved, 'README.md'), readMe, 'utf8');

      const license = this.generateLicense();
      await fs.writeFile(path.join(schemaDirResolved, 'LICENSE'), license, 'utf8');

      generatedSchemas.push(schemaName);
    }

    return {
      disabledSchemas,
      generatedSchemas,
    };
  }

  private generateLicense(): string {
    return `MIT License

Copyright (c) Florian Keller. All rights reserved.

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
  "author": "Florian Keller <github@floriankeller.de>",
  "dependencies": {},
  "description": "TypeScript definitions for ${schemaName}.",
  "license": "MIT",
  "main": "index.d.ts",
  "name": "@schemastore/${schemaName}",
  "repository": "https://github.com/ffflorian/schemastore-updater/tree/master/schemas/${schemaName}",
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
Files were exported from https://github.com/ffflorian/schemastore-updater/tree/master/schemas/${schemaName}.

## Additional Details
* Last updated: ${timeStamp} GMT
* Dependencies: none
`;
  }

  private async removeAndClone(): Promise<void> {
    await fs.remove(this.schemaStoreDirResolved);
    this.logger.info(`Cloning "${this.options.schemaStoreRepo}" to "${this.schemaStoreDirResolved}" ...`);
    await this.git.clone(this.options.schemaStoreRepo, this.schemaStoreDirResolved, ['--depth=1']);
  }

  public async checkVersions(): Promise<void> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);
    const invalidEntries = [];

    for (const entry of Object.keys(lockFileData)) {
      const name = entry.replace('.json', '');
      const packageJson = fs.readJsonSync(`./schemas/${name}/package.json`);
      const lockFileVersion = lockFileData[entry].version;
      if (lockFileVersion !== packageJson.version) {
        invalidEntries.push(entry);
      }
    }

    if (invalidEntries.length) {
      throw new Error(`Invalid version entries: "${invalidEntries.join('", "')}".`);
    }
  }

  public async checkDisabled(): Promise<CheckResult> {
    if (!this.options.source) {
      await this.removeAndClone();
    }

    const {disabledSchemas, generatedSchemas} = await this.generate(this.options.disabledSchemas);
    return {disabledSchemas, enabledSchemas: generatedSchemas};
  }

  private async generateHashes(schemas: string[]): Promise<Record<string, string>> {
    const fileHashes: Record<string, string> = {};

    for (const fileName of schemas) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      const fileIsReadable = await this.fileIsReadable(fileNameResolved);

      if (fileIsReadable) {
        const fileContent = await fs.readFile(fileNameResolved, 'utf8');
        const sha256 = crypto
          .createHash('sha256')
          .update(fileContent)
          .digest('hex');

        fileHashes[fileName] = sha256;
      } else {
        this.logger.error(`File "${fileNameResolved}" is not readable.`);
      }
    }

    return fileHashes;
  }

  private async bumpVersions(fileHashes: Record<string, string>, lockFileData: SchemaHashes): Promise<SchemaHashes> {
    const updatedHashes: SchemaHashes = {};

    for (const fileName in fileHashes) {
      if (!lockFileData[fileName]) {
        this.logger.info(`Hash from "${fileName}" does not exist yet. Creating.`);
        lockFileData[fileName] = {
          hash: fileHashes[fileName],
          version: '0.0.1',
        };
        updatedHashes[fileName] = lockFileData[fileName];
      } else if (
        lockFileData[fileName] &&
        (fileHashes[fileName] !== lockFileData[fileName].hash || this.options.force)
      ) {
        this.logger.info(`Hash from "${fileName}" is outdated. Updating.`);

        const newVersion = semver.inc(lockFileData[fileName].version, 'patch');

        lockFileData[fileName] = {
          hash: fileHashes[fileName],
          version: String(newVersion),
        };
        updatedHashes[fileName] = lockFileData[fileName];
      }
    }

    return updatedHashes;
  }

  public async generateAll(): Promise<BuildResult> {
    if (!this.options.source) {
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

  public async generate(enabledSchemas: string[]): Promise<BuildResult> {
    const lockFileData: SchemaHashes = await fs.readJSON(this.lockFile);
    const fileHashes = await this.generateHashes(enabledSchemas);
    const updatedHashes = await this.bumpVersions(fileHashes, lockFileData);

    const {disabledSchemas, generatedSchemas} = await this.generateSchemas(updatedHashes);

    await this.generateLockFile(this.lockFile, lockFileData);

    return {
      disabledSchemas,
      generatedSchemas,
    };
  }
}
