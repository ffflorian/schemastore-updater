# schemastore-updater [![Build Status](https://github.com/ffflorian/schemastore-updater/workflows/Build/badge.svg)](https://github.com/ffflorian/schemastore-updater/actions/)

Load schema files from [@SchemaStore/schemastore](https://github.com/SchemaStore/schemastore), convert them to TypeScript definitions with [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript) and publish them [on npm](https://www.npmjs.com/org/schemastore).

## Usage

```
Usage: schemastore-updater [options] [command]

Options:
  -V, --version           output the version number
  -s, --settings <file>   Specify a settings file (default: "settings.json")
  -d, --source-dir <dir>  Specify a source dir (will disable cloning)
  -h, --help              output usage information

Commands:
  update [options]
  check-disabled
  check-versions
  fix-lockfile
```

```
Usage: schemastore-updater update [options]

Options:
  -f, --force  Force re-generating all schemas (default: false)
  -h, --help   output usage information
```
