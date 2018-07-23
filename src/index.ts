import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import * as simpleGit from 'simple-git/promise';
import * as fs from 'fs-extra';
import * as crypto from 'crypto';
import * as schemaGenerator from 'json-schema-to-typescript';
const logdown = require('logdown');

interface SchemaHashes {
  [fileName: string]: string;
}


class SchemaGenerator {
  private git: simpleGit.SimpleGit;
  private jsonSchemasDir: string;
  private lockFile: string;
  private schemaStoreDirResolved: string;
  private logger: any;

  constructor(
    private disabledSchemas: string[],
    private schemaStoreRepo: string
  ) {
    this.git = simpleGit('.');
    this.schemaStoreDirResolved = path.join('temp', 'schemastore');
    this.jsonSchemasDir = path.join(this.schemaStoreDirResolved, 'src', 'schemas', 'json');
    this.lockFile = path.join('schemas', 'json-schemas.lock');
    this.logger = logdown('schemastore-updater', {
      logger: console,
      markdown: false,
    });
    this.logger.info(`Using lockfile "${this.lockFile}".`)
  }

  private generateLockFile(fileName: string, data: SchemaHashes) {
    return fs.writeFile(path.resolve(fileName), JSON.stringify(data, null, 2), {
      encoding: 'utf8'
    });
  }

  private async generateSchemas(jsonData: SchemaHashes) {
    const disabledSchemas = [];
    for (const fileName in jsonData) {
      const fileNameResolved = path.resolve(this.jsonSchemasDir, fileName);
      this.logger.info(`Processing "${fileName}" ...`);
      let newSchema = '';
      try {
        newSchema = await schemaGenerator.compileFromFile(
          fileNameResolved
        );
      } catch (error) {
        this.logger.error(`Can't process "${fileName}". Adding to the list of disabled schemas.`)
        disabledSchemas.push(fileName);
        break;
      }
      const schemaDirResolved = path.resolve(
        'schemas',
        fileName.replace('.json', '')
      );
      await fs.mkdirp(schemaDirResolved);
      await fs.writeFile(
        path.resolve(schemaDirResolved, 'index.d.ts'),
        newSchema,
        { encoding: 'utf8' }
      );
    }
    return { disabledSchemas };
  }

  async start() {
    await promisify(rimraf)(this.schemaStoreDirResolved);
    await this.git.clone(this.schemaStoreRepo, this.schemaStoreDirResolved, [
      '--depth=1'
    ]);

    const jsonFiles = (await fs.readdir(this.jsonSchemasDir)).filter(
      fileName =>
        fileName.endsWith('.json') && !this.disabledSchemas.includes(fileName)
    );
    this.logger.info(`Loaded ${jsonFiles.length} schemas.`);
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

      jsonData[fileName] = sha256;
    }

    if (!fs.existsSync(this.lockFile)) {
      this.logger.info(`No lockfile exists yet. Writing lockfile to "${this.lockFile}" ..`)
      await this.generateSchemas(jsonData);
      await this.generateLockFile(this.lockFile, jsonData);
    } else {
      const lockFileData = await fs.readFile(this.lockFile, { encoding: 'utf8' });
      const lockFileParsed = JSON.parse(lockFileData);
      const updatedHashes: SchemaHashes = {};
      for (const fileName in jsonData) {
        if (
          !lockFileParsed[fileName] ||
          jsonData[fileName] !== lockFileParsed[fileName]
        ) {
          this.logger.info(`Hash from "${fileName}" is outdated. Updating.`)
          updatedHashes[fileName] = jsonData[fileName];
        }
      }
      await this.generateSchemas(updatedHashes);
    }
  }
}

export { SchemaGenerator };
