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
      const packageJson = await this.generatePackageJson(schemaName, jsonData[fileName]);
      await fs.writeFile(path.resolve(schemaDirResolved, 'package.json'), packageJson, {encoding: 'utf8'})
    }

    return disabledSchemas;
  }

  private async generatePackageJson(schemaName: string, schemaHash: {hash: string, version: string}): Promise<string> {
    return `{
  "author": "Florian Keller <github@floriankeller.de>",
  "dependencies": {},
  "description": "TypeScript definitions for ${schemaName}.",
  "license": "MIT",
  "main": "",
  "name": "@schemastore/${schemaName}",
  "repository": "https://github.com/ffflorian/schemastore-updater",
  "scripts": {},
  "typesPublisherContentHash": "${schemaHash.hash}",
  "typings": "index.d.ts",
  "version": "${schemaHash.version}"
}
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

    const jsonData: SchemaHashes = {};
    for (const fileName of jsonFiles) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      const fileContent = await fs.readFile(fileNameResolved, {
        encoding: 'utf8'
      });
      const sha256 = crypto
        .createHash('sha256')
        .update(fileContent)
        .digest('hex');

      jsonData[fileName] = {
        hash: sha256,
        version: '',
      };
    }

    const lockFileData = await fs.readFile(this.lockFile, { encoding: 'utf8' });
    const lockFileParsed: SchemaHashes = JSON.parse(lockFileData);
    const updatedHashes: SchemaHashes = {};
    for (const fileName in jsonData) {
      if (
        !lockFileParsed[fileName] ||
        jsonData[fileName] !== lockFileParsed[fileName] || this.force
      ) {
        this.logger.info(`Hash from "${fileName}" is outdated. Updating.`);

        jsonData[fileName].version = String(semver.inc(lockFileParsed[fileName].version, 'patch'));
        updatedHashes[fileName] = jsonData[fileName];
      }
    }

    const disabledSchemas = await this.generateSchemas(updatedHashes);
    await this.generateLockFile(this.lockFile, updatedHashes);

    if (disabledSchemas.length) {
      this.logger.info(`You should consider disabling these schemas: ${disabledSchemas.join(', ')}`)
    }
  }
}

export { SchemaGenerator };
