/* eslint-disable */

/**
 * Exhaustive list of entrypoints to check. Specifying this disables automatic entrypoint discovery and overrides includeEntrypoints and excludeEntrypoints.
 */
export type StringArray = string[];

/**
 * Configuration for the Are The Types Wrong? CLI.
 */
export interface AttwConfiguration {
  /**
   * Run npm pack in the specified directory and delete the resulting tarball afterwards.
   */
  pack?: boolean;
  /**
   * Read from the npm registry instead of a local file.
   */
  fromNpm?: boolean;
  /**
   * Whether to include DefinitelyTyped types, or the version/range/path of the @types package to use.
   */
  definitelyTyped?: boolean | string;
  /**
   * Output format.
   */
  format?: 'auto' | 'table' | 'table-flipped' | 'ascii' | 'json';
  /**
   * Do not print anything to STDOUT.
   */
  quiet?: boolean;
  entrypoints?: StringArray;
  includeEntrypoints?: StringArray;
  excludeEntrypoints?: StringArray;
  /**
   * In packages without exports, consider every published code file as an entrypoint when no entrypoints are otherwise detected or configured.
   */
  entrypointsLegacy?: boolean;
  /**
   * Rules or problems to ignore.
   */
  ignoreRules?: (
    | 'no-resolution'
    | 'untyped-resolution'
    | 'false-cjs'
    | 'false-esm'
    | 'cjs-resolves-to-esm'
    | 'fallback-condition'
    | 'cjs-only-exports-default'
    | 'named-exports'
    | 'false-export-default'
    | 'missing-export-equals'
    | 'unexpected-module-syntax'
    | 'internal-resolution-error'
  )[];
  /**
   * UNDOCUMENTED. Legacy config-only list of module resolution modes to ignore. These values are combined with the modes ignored by the selected profile.
   */
  ignoreResolutions?: ('node10' | 'node16-cjs' | 'node16-esm' | 'bundler')[];
  /**
   * Analysis profile.
   */
  profile?: 'strict' | 'node16' | 'esm-only';
  /**
   * Print summary information about the different errors.
   */
  summary?: boolean;
  /**
   * Print information with emojis.
   */
  emoji?: boolean;
  /**
   * Print output with colors.
   */
  color?: boolean;
}
