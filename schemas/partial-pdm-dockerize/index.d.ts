/* eslint-disable */

/**
 * A Unix filename pattern filter
 */
export type FnmatchFilter = string;

export interface HttpsJsonSchemastoreOrgPartialPdmDockerizeJson {
  /**
   * fnmatch filter patterns for included PDM scripts
   */
  include?: FnmatchFilter | FnmatchFilter[];
  /**
   * fnmatch filter patterns for excluded PDM scripts
   */
  exclude?: FnmatchFilter | FnmatchFilter[];
  /**
   * fnmatch filter patterns for included binaries
   */
  include_bins?: FnmatchFilter | FnmatchFilter[];
  /**
   * fnmatch filter patterns for excluded binaries
   */
  exclude_bins?: FnmatchFilter | FnmatchFilter[];
  /**
   * Path to a file with environment variables
   */
  env_file?: string;
  /**
   * Environment variables applied when running the script
   */
  env?: {
    [k: string]: string | undefined;
  };
}
