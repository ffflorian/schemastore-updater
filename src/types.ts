export interface CliOptions {
  force: boolean;
  schema?: string;
  sourceDir?: string;
}

export interface LockEntry {
  generatedFile: string;
  generatedSha256: string;
  /**
   * True once this package version has been successfully submitted to npm via
   * `npm stage publish`. This means the version is pending a maintainer's 2FA
   * approval on npmjs.com (or `npm stage approve`) - not that it is live yet.
   * It still means "do not attempt to publish this version again".
   */
  published: boolean;
  sourceSha256: string;
  updatedAt: string;
}

export interface PublishStats {
  attempted: number;
  dryRun: boolean;
  failed: number;
  failedPackages: string[];
  logFilePath: string;
  published: number;
  publishedPackages: string[];
  skipped: number;
}

export interface SchemaLockFile {
  entries: Record<string, LockEntry>;
  generatedAt: string;
  version: 1;
}

export interface UpdateStats {
  failed: number;
  failedSchemas: string[];
  generated: number;
  generatedSchemas: string[];
  skipped: number;
  totalSchemas: number;
}
