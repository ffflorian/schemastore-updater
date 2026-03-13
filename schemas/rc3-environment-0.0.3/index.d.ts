/* eslint-disable */

/**
 * RC environment for both Global and per Collection environments
 */
export interface Rc3Environment {
  /**
   * The JSON schema to use for validation
   */
  $schema?: string;
  [k: string]: string | undefined;
}
