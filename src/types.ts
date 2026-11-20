export interface BootstrapStats {
  attempted: number;
  bootstrapped: number;
  bootstrappedPackages: string[];
  failed: number;
  failedPackages: string[];
  skippedAlreadyExists: number;
}

export interface CliOptions {
  force: boolean;
  schema?: string;
  sourceDir?: string;
}

export interface LockEntry {
  generatedFile: string;
  generatedSha256: string;
  /**
   * True once this package version has been successfully published to npm via
   * `npm publish`. It means "do not attempt to publish this version again".
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
