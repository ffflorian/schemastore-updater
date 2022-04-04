import {program as commander} from 'commander';
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

commander.name(name).version(version).description(description);

const commanderOptions = commander.opts();

commander
  .option('-s, --settings <file>', 'Specify a settings file', 'settings.json')
  .option('-d, --source-dir <dir>', 'Specify a source dir (will disable cloning)');

const settingsFile = commanderOptions.settings
  ? path.resolve(commanderOptions.settings)
  : path.join(__dirname, '../settings.json');

commander
  .command('update')
  .option('-f, --force', 'Force re-generating all schemas', false)
  .action(async () => {
    try {
      const settings: FileSettings = await fs.readJSON(settingsFile);
      await update({
        ...settings,
        ...(commanderOptions.sourceDir && {source: commanderOptions.sourceDir}),
        force: !!commanderOptions.force,
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  });

commander.command('check-disabled').action(async () => {
  try {
    const settings = await fs.readJSON(settingsFile);
    await checkDisabled({...settings});
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

commander.command('check-versions').action(async () => {
  try {
    const fileSettings = await fs.readJSON(settingsFile);
    const generator = new SchemaGenerator({...fileSettings});
    await generator.checkHashsums();
    await generator.checkVersions();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

commander.command('fix-lockfile').action(async () => {
  try {
    const fileSettings = await fs.readJSON(settingsFile);
    const generator = new SchemaGenerator({...fileSettings});
    await generator.checkHashsums();
    await generator.fixLockfile();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
});

commander.parse(process.argv);

if (!commander.args.length) {
  commander.outputHelp();
  process.exit();
}

async function update(
  settings: SchemaGeneratorOptions & Required<Pick<SchemaGeneratorOptions, 'disabledSchemas'>>
): Promise<{sourceDir: string}> {
  const generator = new SchemaGenerator(settings);
  await generator.checkVersions();
  await generator.checkHashsums();

  const {disabledSchemas: newDisabledSchemas, generatedSchemas} = await generator.generateAll();

  if (generatedSchemas.length) {
    console.info('Generated schemas:', generatedSchemas);
  } else {
    console.info('No schemas generated.');
  }

  if (newDisabledSchemas.length) {
    console.info('These schemas will be disabled:', newDisabledSchemas);

    settings.disabledSchemas = settings.disabledSchemas.concat(newDisabledSchemas).sort();
    delete settings.force;
    delete settings.source;
    await fs.writeFile(settingsFile, `${JSON.stringify(settings, null, 2)}\n`);
  }

  return {sourceDir: generator.options.source};
}

async function checkDisabled(settings: FileSettings, versionCheck = true): Promise<void> {
  const generator = new SchemaGenerator(settings);

  if (versionCheck) {
    await generator.checkVersions();
    await generator.checkHashsums();
  }

  const {enabledSchemas} = await generator.checkDisabled();

  if (enabledSchemas.length) {
    const enabledSchemaFiles = enabledSchemas.map(schema => `${schema}.json`);
    settings.disabledSchemas = settings.disabledSchemas.filter(schema => !enabledSchemaFiles.includes(schema)).sort();

    await fs.writeFile(settingsFile, `${JSON.stringify(settings, null, 2)}\n`);
  } else {
    console.info('No schemas generated.');
  }
}
