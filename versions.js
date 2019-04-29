const fs = require('fs-extra');
const lockFile = fs.readJsonSync('./schemas/json-schemas.lock');

for (const entryFile of Object.keys(lockFile)) {
  const name = entryFile.replace('.json', '')
  const packageJson = fs.readJsonSync(`./schemas/${name}/package.json`);
  const lockFileVersion = lockFile[entryFile].version
  if (lockFileVersion !== packageJson.version) {
    console.warn(`Invalid version for "${name}"!`);
  }
}
