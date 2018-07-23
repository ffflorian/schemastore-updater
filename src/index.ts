import * as path from 'path';
import * as rimraf from 'rimraf';
import { promisify } from 'util';
import * as simpleGit from 'simple-git/promise';
import * as fs from 'fs-extra';
import * as crypto from 'crypto';
import * as schemaGenerator from 'json-schema-to-typescript';

interface SchemaHashes {
  [fileName: string]: string;
}

const git = simpleGit('.');
const {
  disabledSchemas,
  lockFile,
  schemaStoreDir,
  schemaStoreRepo
}: {
  disabledSchemas: string;
  lockFile: string;
  schemaStoreDir: string;
  schemaStoreRepo: string;
} = require('../settings.json');
const schemaStoreDirResolved = path.resolve(schemaStoreDir);
const jsonSchemasDir = path.join(schemaStoreDir, 'src', 'schemas', 'json');
const lockFileResolved = path.resolve(lockFile);

function generateLockFile(fileName: string, data: SchemaHashes) {
  return fs.writeFile(path.resolve(fileName), JSON.stringify(data, null, 2), {
    encoding: 'utf8'
  });
}

async function generateSchemas(jsonData: SchemaHashes) {
  const disabled = [];
  for (const fileName in jsonData) {
    const fileNameResolved = path.resolve(jsonSchemasDir, fileName);
    console.log({ fileName });
    try {
      const newSchema = await schemaGenerator.compileFromFile(fileNameResolved);
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
    } catch (error) {
      disabled.push(fileName);
    }
  }
  console.log({ disabled });
}

async function start() {
  await promisify(rimraf)(schemaStoreDirResolved);
  await git.clone(schemaStoreRepo, schemaStoreDirResolved, ['--depth=1']);

  const jsonFiles = (await fs.readdir(jsonSchemasDir)).filter(
    fileName =>
      fileName.endsWith('.json') && !disabledSchemas.includes(fileName)
  );
  const jsonData: SchemaHashes = {};
  for (const fileName of jsonFiles) {
    const fileNameResolved = path.resolve(jsonSchemasDir, fileName);
    const fileContent = await fs.readFile(fileNameResolved, {
      encoding: 'utf8'
    });
    const sha256 = crypto
      .createHash('sha256')
      .update(fileContent)
      .digest('hex');

    jsonData[fileName] = sha256;
  }

  if (!fs.existsSync(lockFileResolved)) {
    await generateSchemas(jsonData);
    await generateLockFile(lockFileResolved, jsonData);
  } else {
    const lockFileData = await fs.readFile(lockFile, { encoding: 'utf8' });
    const lockFileParsed = JSON.parse(lockFileData);
    const failedHashes: SchemaHashes = {};
    for (const fileName in jsonData) {
      if (
        !lockFileParsed[fileName] ||
        jsonData[fileName] !== lockFileParsed[fileName]
      ) {
        failedHashes[fileName] = jsonData[fileName];
      }
    }
    await generateSchemas(failedHashes);
  }
}

start();
