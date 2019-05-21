import * as program from 'commander';
import * as fs from 'fs-extra';
import * as path from 'path';

import {SchemaGenerator} from './';
import {FileSettings, SchemaGeneratorOptions} from './interfaces';

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
  .option('-s, --settings <file>', 'Specify a settings file', 'settings.json')
  .option('-d, --source-dir <dir>', 'Specify a source dir (will disable cloning)');

const settingsFile = program.settings ? path.resolve(program.settings) : path.join(__dirname, '../settings.json');

program
  .command('update')
  .option('-f, --force', 'Force re-generating all schemas', false)
  .action(async parent => {
    try {
      const settings = await fs.readJSON(settingsFile);
      await update({...settings, force: parent.force, source: parent.source});
      await checkDisabled(settings);
    } catch (error) {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    }
  });

program.command('check-disabled').action(async parent => {
  try {
    const settings = await fs.readJSON(settingsFile);
    await checkDisabled({...settings, force: parent.force});
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
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

async function update(settings: Required<SchemaGeneratorOptions>): Promise<void> {
  const settingsDir = path.resolve(path.dirname(settingsFile));

  const generator = new SchemaGenerator(settings);
  await generator.checkVersions();

  const {disabledSchemas: newDisabledSchemas, generatedSchemas} = await generator.generateAll();

  if (generatedSchemas.length) {
    console.log('Generated schemas:', generatedSchemas);
  } else {
    console.log('No schemas generated.');
  }

  await fs.writeFile(path.join(settingsDir, 'updated_files'), generatedSchemas.join('\n'));

  if (newDisabledSchemas.length) {
    console.log(`These schemas will be disabled: "${newDisabledSchemas.join(', ')}"`);

    settings.disabledSchemas = settings.disabledSchemas.concat(newDisabledSchemas).sort();
    await fs.writeFile(settingsFile, `${JSON.stringify(settings, null, 2)}\n`);
  }
}

async function checkDisabled(settings: FileSettings): Promise<void> {
  const generator = new SchemaGenerator(settings);
  await generator.checkVersions();

  const {enabledSchemas} = await generator.checkDisabled();

  if (enabledSchemas.length) {
    console.log('Enabled schemas:', enabledSchemas);
    const enabledSchemaFiles = enabledSchemas.map(schema => `${schema}.json`);
    settings.disabledSchemas = settings.disabledSchemas.filter(schema => !enabledSchemaFiles.includes(schema)).sort();

    await fs.writeFile(settingsFile, `${JSON.stringify(settings, null, 2)}\n`);
  } else {
    console.log('No schemas generated.');
  }
}
