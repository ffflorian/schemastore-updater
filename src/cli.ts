import * as fs from 'fs-extra';
import * as path from 'path';
import * as program from 'commander';
import { FileSettings } from './interfaces';
import { SchemaGenerator } from './';
import { exec } from 'child_process';
import { promisify } from 'util';
const { getYesNo } = require('cli-interact');

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

let generator: SchemaGenerator;
try {
  generator = new SchemaGenerator(
    disabledSchemas,
    schemaStoreRepo,
    lockFile,
    program.force
  );
} catch (error) {
  console.error(`Error: ${error.message}`);
  process.exit(1);
}

generator!
  .start()
  .then(({ disabledSchemas, generatedSchemas }) => {
    if (generatedSchemas.length) {
      console.log('Generated schemas:', generatedSchemas);
      const answer = getYesNo(
        'Would you like to publish the generated schemes on npm?',
        true
      );
      if (answer !== false) {
        generatedSchemas.forEach(async schemaName => {
          const { stderr, stdout } = await promisify(exec)(
            `npm publish ./schemas/${schemaName} --access=public`
          );
          if (stderr) {
            console.error(stderr);
          }
          if (stdout) {
            console.log(stdout);
          }
        });
      }
    } else {
      console.log('No schemas generated.');
    }

    if (disabledSchemas.length) {
      console.log(
        `You should consider disabling these schemas: ${disabledSchemas}`
      );
    }
  })
  .catch(error => {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  });
