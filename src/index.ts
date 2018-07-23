import * as path from 'path';
import * as rimraf from 'rimraf';
import {promisify} from 'util';
import * as simpleGit from 'simple-git/promise';
import * as fs from 'fs';
import * as crypto from 'crypto';

interface SchemaHashes {
  [fileName: string]: string;
}

const git = simpleGit('.');
const readDirPromise = promisify(fs.readdir);
const readFilePromise = promisify(fs.readFile);
const rimrafPromise = promisify(rimraf);
const {lockFile, schemaStoreDir, schemaStoreRepo}: {lockFile: string, schemaStoreDir: string, schemaStoreRepo: string} = require('../settings.json');

function generateLockFile(data: SchemaHashes, fileName: string) {
  return fs.writeFileSync(path.resolve(fileName), JSON.stringify(data, null, 2), {encoding: 'utf8'})
}

async function start() {
  const schemaStoreDirResolved = path.resolve(schemaStoreDir);
  const jsonSchemasDir = path.join(schemaStoreDir, 'src', 'schemas', 'json');
  const lockFileResolved = path.resolve(lockFile);

  //await rimrafPromise(schemaStoreDirResolved);
  //await git.clone(schemaStoreRepo, schemaStoreDirResolved, ['--depth=1']);

  const jsonFiles = await readDirPromise(jsonSchemasDir);
  const jsonData: SchemaHashes = {};
  for (const fileName of jsonFiles) {
    const fileNameResolved = path.resolve(jsonSchemasDir, fileName);
    const fileContent = await readFilePromise(fileNameResolved, {encoding: 'utf8'});
    const sha256 = crypto.createHash('sha256')
      .update(fileContent)
      .digest('hex');

    jsonData[fileName] = sha256;
  }

  if (fs.existsSync(lockFileResolved)) {
    const lockFile = await readFilePromise(lockFileResolved, {encoding: 'utf8'});
    const lockFileData = JSON.parse(lockFile);
    const failedHashes: SchemaHashes = {};
    for (const fileName in jsonData) {
      if (jsonData[fileName] !== lockFileData[fileName]) {
        failedHashes[fileName] = jsonData[fileName];
      }
    }
    console.log({failedHashes})
  } else {
    await generateLockFile(jsonData, lockFileResolved);
  }
}

start();
