import * as fs from 'fs-extra';
import * as path from 'path';
import * as program from 'commander';
import { FileSettings } from './interfaces';
import { SchemaGenerator } from './';

const {
  description,
  name,
  version
}: {
  description: string;
  name: string;
  version: string;
} = require('../package.json');

program
  .name(name)
  .version(version)
  .description(description)
  .option(
    '-s, --settings <file>',
    'Specify a settings file',
    path.resolve(__dirname, '..', 'settings.json')
  )
  .option('-f, --force', 'Force re-generating all schemas')
  .parse(process.argv);

const settingsFile = path.resolve(program.settings);
const {
  disabledSchemas,
  schemaStoreRepo,
  lockFile
}: FileSettings = fs.readJSONSync(settingsFile);

const generator = new SchemaGenerator(
  disabledSchemas,
  schemaStoreRepo,
  lockFile,
  program.force
);

generator
  .start()
  .then(() => console.log('Done.'))
  .catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
