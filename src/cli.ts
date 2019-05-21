import * as program from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';

import {SchemaGenerator} from './';
import {FileSettings} from './interfaces';

const {
  description,
  name,
  version,
}: {
  description: string;
  name: string;
  version: string;
} = require('../package.json');

program
  .name(name)
  .version(version)
  .description(description)
  .option('-s, --settings <file>', 'Specify a settings file', 'settings.json');

const settingsFile = program.settings ? path.resolve(program.settings) : path.join(__dirname, '../settings.json');

program
  .command('update')
  .option('-f, --force', 'Force re-generating all schemas', false)
  .action(parent => {
    return update(parent.force).catch(error => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
  });

program.command('version-check').action(() => {
  return fs
    .readJSON(settingsFile)
    .then((fileSettings: FileSettings) => {
      const generator = new SchemaGenerator({...fileSettings});
      return generator.checkVersions();
    })
    .catch(error => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });
});

program.parse(process.argv);

if (!program.args.length) {
  program.outputHelp();
  process.exit();
}

async function update(force?: boolean): Promise<void> {
  const settings: FileSettings = await fs.readJSON(settingsFile);
  const settingsDir = path.resolve(path.dirname(settingsFile));

  const generator = new SchemaGenerator({...settings, force});
  await generator.checkVersions();

  const {disabledSchemas: newDisabledSchemas, generatedSchemas} = await generator.generate();

  if (generatedSchemas.length) {
    console.log('Generated schemas:', generatedSchemas);
  } else {
    console.log('No schemas generated.');
  }

  await fs.writeFile(path.join(settingsDir, 'updated_files'), generatedSchemas.join('\n'));

  if (newDisabledSchemas.length) {
    console.log(`You should consider disabling these schemas: "${newDisabledSchemas.join(', ')}"`);
  }
}
