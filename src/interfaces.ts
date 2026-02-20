export interface BuildResult {
  disabledSchemas: string[];
  generatedSchemas: string[];
}

export interface CheckResult {
  disabledSchemas: string[];
  enabledSchemas: string[];
}

export interface FileSettings {
  disabledSchemas: string[];
  lockFile: string;
  schemaStoreRepo: string;
  source?: string;
}

export interface SchemaData {
  hash: string;
  version: string;
}

export interface SchemaGeneratorOptions extends Partial<FileSettings> {
  force?: boolean;
  schema?: string;
  source?: string;
}

export interface SchemaHashes {
  [fileName: string]: SchemaData;
}
