## Note: this repository is deprecated as [@SchemaStore](https://github.com/SchemaStore) will soon start publishing npm packages on their own (see https://github.com/SchemaStore/schemastore/issues/1274).

# schemastore-updater

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
