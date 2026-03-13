/* eslint-disable */

export interface HttpsJsonSchemastoreOrgNycrcJson {
  /**
   * Name of configuration to extend from.
   */
  extends?: string;
  /**
   * Whether or not to instrument all files (not just the ones touched by your test suite).
   */
  all?: boolean;
  /**
   * Check whether coverage is within thresholds, fail if not
   */
  'check-coverage'?: boolean;
  /**
   * List of extensions that nyc should attempt to handle in addition to .js
   */
  extension?: string[];
  /**
   * List of files to include for coverage.
   */
  include?: string[];
  /**
   * List of files to exclude for coverage.
   */
  exclude?: string[];
  /**
   * The names of custom reporter to show coverage results.
   */
  reporter?: string[];
  /**
   * Where to put the coverage report files.
   */
  'report-dir'?: string;
  /**
   * Don't show files with 100% statement, branch, and function coverage
   */
  'skip-full'?: boolean;
  /**
   * Directory to output raw coverage information to.
   */
  'temp-dir'?: string;
  [k: string]: unknown | undefined;
}
