/* eslint-disable */

export type Behavior = 'block' | 'allow' | 'noAuth';

export interface JSONSchemaForEntryPointRegulationManifestFiles {
  /**
   * A fully qualified URL of your website.
   */
  site?: string;
  /**
   * Set the max age HTTP cache expiration.
   */
  maxAge?: number;
  reportUrl?: string;
  defaultNavBehavior?: Behavior;
  defaultResBehavior?: Behavior;
  rules: Rule[];
  [k: string]: unknown | undefined;
}
export interface Rule {
  /**
   * Relative path to resource.
   */
  path?: string;
  /**
   * A regular expression for identifying paths to resources.
   */
  regex?: string;
  types?: ('navigation' | 'image' | 'stylesheet' | 'script' | 'xhr' | 'other')[];
  /**
   * Determines if data is allowed at this path.
   */
  allowData?: boolean;
  [k: string]: unknown | undefined;
}
