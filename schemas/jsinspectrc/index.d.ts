/* eslint-disable */

export interface JSONSchemaForJSInspectConfigurationFiles {
  /**
   * A flag indicating whether to limit the search to nodes with matching identifiers
   */
  identifiers?: boolean;
  /**
   * A regular expression used for matching paths to ignore
   */
  ignore?: string;
  /**
   * A flag indicating whether to process JSX files
   */
  jsx?: boolean;
  /**
   * The name of the reporter to be used
   */
  reporter?: 'default' | 'json' | 'pmd';
  /**
   * The number of lines at which diffs should be suppressed. A value of 0 is off.
   */
  suppress?: number;
  /**
   * A threshold determining the smallest subset of nodes to analyze
   */
  threshold?: number;
  [k: string]: unknown | undefined;
}
