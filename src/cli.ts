import { SchemaGenerator } from './';
import * as program from 'commander';
import * as path from 'path';

const {description, name, version}: {description: string, name: string, version: string} = require('../package.json');

program
  .name(name)
  .version(version)
  .description(description)
  .option(
    '-s, --settings <file>',
    'Specify a settings file',
    path.resolve(__dirname, '..', 'settings.json')
  )
  .option(
    '-f, --force',
    'Force re-generating all schemas'
  )
  .parse(process.argv);

const settingsFile = path.resolve(program.settings);

const {
  disabledSchemas,
  schemaStoreRepo
}: {
  disabledSchemas: string[];
  schemaStoreRepo: string;
} = require(settingsFile);

const generator = new SchemaGenerator(
  disabledSchemas,
  schemaStoreRepo,
  program.force
);

generator
  .start()
  .then(() => console.log('Done.'))
  .catch(error => console.error(error));
