/* eslint-disable */

/**
 * Supported naming cases.
 */
export type NameCase = 'snake' | 'camel' | 'pascal';

/**
 * Top-level vespertide configuration.
 */
export interface VespertideConfig {
  columnNamingCase: NameCase;
  migrationFilenamePattern?: string;
  /**
   * Supported file formats for generated artifacts.
   */
  migrationFormat?: 'json' | 'yaml' | 'yml';
  migrationsDir: string;
  /**
   * Output directory for generated ORM models.
   */
  modelExportDir?: string;
  /**
   * Supported file formats for generated artifacts.
   */
  modelFormat?: 'json' | 'yaml' | 'yml';
  modelsDir: string;
  seaorm?: SeaOrmConfig;
  tableNamingCase: NameCase;
  [k: string]: unknown | undefined;
}
/**
 * SeaORM-specific export configuration.
 */
export interface SeaOrmConfig {
  /**
   * Additional derive macros to add to generated enum types.
   * Default: `["vespera::Schema"]`
   */
  extraEnumDerives?: string[];
  /**
   * Additional derive macros to add to generated entity model types.
   */
  extraModelDerives?: string[];
  [k: string]: unknown | undefined;
}
