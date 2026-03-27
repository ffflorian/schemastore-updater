export interface CliOptions {
  force: boolean;
  schema?: string;
  sourceDir?: string;
}

export interface LockEntry {
  generatedFile: string;
  generatedSha256: string;
  published: boolean;
  sourceSha256: string;
  updatedAt: string;
}

export interface PublishStats {
  attempted: number;
  dryRun: boolean;
  failed: number;
  logFilePath: string;
  published: number;
  skipped: number;
}

export interface SchemaLockFile {
  entries: Record<string, LockEntry>;
  generatedAt: string;
  version: 1;
}

export interface UpdateStats {
  failed: number;
  generated: number;
  skipped: number;
  totalSchemas: number;
}
