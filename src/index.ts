import * as path from 'path';
import * as rimraf from 'rimraf';
import {promisify} from 'util';
import * as simpleGit from 'simple-git/promise';
import * as fs from 'fs';

const git = simpleGit('.');
const readDirPromise = promisify(fs.readdir);
const rimrafPromise = promisify(rimraf);

const {schemaStoreDir, schemastoreRepo}: {schemaStoreDir: string, schemastoreRepo: string} = require('../settings.json');
const schemaStoreDirResolved = path.resolve(schemaStoreDir);
const jsonSchemasDir = path.join(schemaStoreDir, 'src', 'schemas', 'json');

async function start() {
  await rimrafPromise(schemaStoreDirResolved);
  await git.clone(schemastoreRepo, schemaStoreDirResolved, ['--depth=1']);
  const jsonFiles = await readDirPromise(jsonSchemasDir);
  console.log({jsonFiles});
}

start();
