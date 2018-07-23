import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import * as simpleGit from 'simple-git/promise';
import * as fs from 'fs-extra';
import * as crypto from 'crypto';
import * as schemaGenerator from 'json-schema-to-typescript';
import * as semver from 'semver';
const logdown = require('logdown');

interface SchemaHashes {
  [fileName: string]: {
    hash: string;
    version: string
  };
}

class SchemaGenerator {
  private git: simpleGit.SimpleGit;
  private jsonSchemasDir: string;
  private lockFile: string;
  private schemaStoreDirResolved: string;
  private logger: any;

  constructor(
    private disabledSchemas: string[],
    private schemaStoreRepo: string,
    private force: boolean
  ) {
    this.git = simpleGit('.');
    this.schemaStoreDirResolved = path.join('temp', 'schemastore');
    this.jsonSchemasDir = path.join(this.schemaStoreDirResolved, 'src', 'schemas', 'json');
    this.lockFile = path.join('schemas', 'json-schemas.lock');
    this.logger = logdown('schemastore-updater', {
      logger: console,
      markdown: false,
    });

    if (fs.existsSync(this.lockFile)) {
      this.logger.info(`Using lockfile "${this.lockFile}".`);
    } else {
      throw new Error(`Lockfile "${this.lockFile}" not found.`);
    }
    if (this.force) {
      this.logger.info(`Force is set. Will re-generate all schemas.`);
    }
  }

  private async generateLockFile(fileName: string, data: SchemaHashes): Promise<void> {
    await fs.writeFile(path.resolve(fileName), JSON.stringify(data, null, 2), {
      encoding: 'utf8'
    });
  }

  private async generateSchemas(jsonData: SchemaHashes): Promise<string[]> {
    const disabledSchemas = [];
    for (const fileName in jsonData) {
      const schemaName = fileName.replace('.json', '');
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      this.logger.info(`Processing "${schemaName}" ...`);
      let newSchema = '';
      try {
        newSchema = await schemaGenerator.compileFromFile(
          fileNameResolved
        );
      } catch (error) {
        this.logger.error(`Can't process "${schemaName}". Adding to the list of disabled schemas.`)
        disabledSchemas.push(fileName);
        continue;
      }
      const schemaDirResolved = path.resolve(
        'schemas',
        schemaName
      );
      await fs.mkdirp(schemaDirResolved);
      await fs.writeFile(
        path.resolve(schemaDirResolved, 'index.d.ts'),
        newSchema,
        { encoding: 'utf8' }
      );
      const packageJson = this.generatePackageJson(schemaName, jsonData[fileName]);
      await fs.writeFile(path.resolve(schemaDirResolved, 'package.json'), packageJson, {encoding: 'utf8'})
      const readMe = this.generateReadme(schemaName, jsonData[fileName].version);
      await fs.writeFile(path.resolve(schemaDirResolved, 'README.md'), readMe, {encoding: 'utf8'});
      const license = this.generateLicense();
      await fs.writeFile(path.resolve(schemaDirResolved, 'LICENSE'), license, {encoding: 'utf8'});
    }

    return disabledSchemas;
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
`
  }

  private generatePackageJson(schemaName: string, schemaData: {hash: string, version: string}): string {
    return `{
  "author": "Florian Keller <github@floriankeller.de>",
  "dependencies": {},
  "description": "TypeScript definitions for ${schemaName}.",
  "license": "MIT",
  "main": "",
  "name": "@schemastore/${schemaName}",
  "repository": "https://github.com/ffflorian/schemastore-updater",
  "scripts": {},
  "typesPublisherContentHash": "${schemaData.hash}",
  "typings": "index.d.ts",
  "version": "${schemaData.version}"
}
`
  }

  private generateReadme(schemaName: string, schemaVersion: string) {
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
`
  }

  private async removeAndClone(): Promise<void> {
    await promisify(rimraf)(this.schemaStoreDirResolved);
    await this.git.clone(this.schemaStoreRepo, this.schemaStoreDirResolved, [
      '--depth=1'
    ]);
  }

  async start(): Promise<void> {
    await this.removeAndClone();

    const jsonFiles = (await fs.readdir(this.jsonSchemasDir)).filter(
      fileName => {
        const schemaIsDisabled = this.disabledSchemas ? this.disabledSchemas.includes(fileName) : false;
        return fileName.endsWith('.json') && !schemaIsDisabled;
      }
    );

    this.logger.info(`Loaded ${jsonFiles.length} enabled schemas and ${this.disabledSchemas.length} disabled schemas.`);

    const fileHashes: {[fileName: string]: string} = {};
    for (const fileName of jsonFiles) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      const fileContent = await fs.readFile(fileNameResolved, {
        encoding: 'utf8'
      });
      const sha256 = crypto
        .createHash('sha256')
        .update(fileContent)
        .digest('hex');

      fileHashes[fileName] = sha256;
    }

    const lockFileData = await fs.readFile(this.lockFile, { encoding: 'utf8' });
    const lockFileParsed: SchemaHashes = JSON.parse(lockFileData);
    const updatedHashes: SchemaHashes = {};

    for (const fileName in fileHashes) {
      if (
        !lockFileParsed[fileName] ||
        fileHashes[fileName] !== lockFileParsed[fileName].hash || this.force
      ) {
        this.logger.info(`Hash from "${fileName}" is outdated. Updating.`);

        const newVersion = semver.inc(lockFileParsed[fileName].version, 'patch');

        lockFileParsed[fileName] = {
          hash: fileHashes[fileName],
          version: String(newVersion),
        };
        updatedHashes[fileName] = lockFileParsed[fileName];
      }
    }

    const disabledSchemas = await this.generateSchemas(updatedHashes);

    await this.generateLockFile(this.lockFile, lockFileParsed);

    if (disabledSchemas.length) {
      this.logger.info(`You should consider disabling these schemas: ${disabledSchemas.join(', ')}`)
    }
  }
}

export { SchemaGenerator };
