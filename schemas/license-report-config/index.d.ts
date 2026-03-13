/* eslint-disable */

export interface JSONSchemaForLicenseReportToolConfigurationFile {
  /**
   * license report output format
   */
  output?: 'json' | 'table' | 'csv' | 'html';
  /**
   * HTML output format
   */
  html?: {
    cssFile?: string;
    /**
     * passed directly to tableify (see: https://github.com/kessler/node-tableify)
     */
    tableify?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * CSV output format
   */
  delimiter?: string;
  /**
   * CSV output format: escape fields containing delimiter character
   */
  escapeCsvFields?: boolean & string;
  /**
   * export deps. or deps/dev-/opt-/peer- deps. falsey -> output everything
   */
  only?: string;
  /**
   * NPM registry URL
   */
  registry?: string;
  /**
   * package names that will be excluded from the report
   */
  exclude?: string[];
  /**
   * fields participating in the report and their order
   */
  fields?: (
    | 'department'
    | 'relatedTo'
    | 'name'
    | 'licensePeriod'
    | 'material'
    | 'licenseType'
    | 'link'
    | 'remoteVersion'
    | 'installedVersion'
    | 'author'
  )[];
  /**
   * export deps. or deps/dev-/opt-/peer- deps. falsey -> output everything
   */
  comment?: {
    label?: string;
    value?: string;
    [k: string]: unknown | undefined;
  };
  httpRetryOptions?: {
    delay?: number;
    maxAttempts?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * path to the package.json
   */
  package?: string;
  [k: string]: unknown | undefined;
}
