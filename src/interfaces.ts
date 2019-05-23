export interface BuildResult {
  disabledSchemas: string[];
  generatedSchemas: string[];
}

export interface FileSettings {
  disabledSchemas: string[];
  lockFile: string;
  schemaStoreRepo: string;
}

export interface CheckResult {
  disabledSchemas: string[];
  enabledSchemas: string[];
}

export interface SchemaHashes {
  [fileName: string]: SchemaData;
}

export interface SchemaData {
  disabled: boolean;
  hash: string;
  version: string;
}

export interface SchemaGeneratorOptions extends Partial<FileSettings> {
  force?: boolean;
  source?: string;
}
