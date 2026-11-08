/* eslint-disable */

/**
 * Other YAML files to include.
 */
export type TYPO3YAMLImports = {
  /**
   * Absolute, relative or "EXT:" path of the file.
   */
  resource: string;
  /**
   * Treats resource as a pattern like "*.yaml".
   */
  glob?: boolean;
}[];
