interface BuildResult {
  disabledSchemas: string[];
  generatedSchemas: string[];
}

interface FileSettings {
  disabledSchemas: string[];
  lockFile: string;
  schemaStoreRepo: string;
}

interface SchemaHashes {
  [fileName: string]: SchemaData;
}

interface SchemaData {
  hash: string;
  version: string;
}

export {FileSettings, BuildResult, SchemaData, SchemaHashes};
