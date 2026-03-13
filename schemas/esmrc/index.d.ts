/* eslint-disable */

export interface ConfigurationFilesForTheEsmModulePackageInNodeJs {
  /**
   * A boolean or object for toggling CJS features in ESM
   */
  cjs?:
    | boolean
    | {
        /**
         * A boolean for storing ES modules in require.cache
         */
        cache?: boolean;
        /**
         * A boolean for __esModule interoperability
         */
        esModule?: boolean;
        /**
         * A boolean for respecting require.extensions in ESM
         */
        extensions?: boolean;
        /**
         * A boolean for importing named exports of CJS modules
         */
        mutableNamespace?: boolean;
        /**
         * A boolean for importing named exports of CJS modules
         */
        namedExports?: boolean;
        /**
         * A boolean for following CJS path rules in ESM
         */
        paths?: boolean;
        /**
         * A boolean for __dirname, __filename, and require in ESM
         */
        vars?: boolean;
        /**
         * A boolean for requiring ES modules without the dangling require().default
         */
        dedefault?: boolean;
        /**
         * A boolean for top-level return support
         */
        topLevelReturn?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * An array of fields checked when importing a package
   */
  mainFields?: string[];
  /**
   * A string describing the mode in which to detect ESM module files
   */
  mode?: ('auto' | 'all' | 'strict') & string;
  /**
   * A boolean for top-level await in modules without ESM exports. (Node 10+)
   */
  await?: boolean;
  /**
   * A boolean to apply these options to all module loads
   */
  force?: boolean;
  /**
   * A boolean for WebAssembly module support. (Node 8+)
   */
  wasm?: boolean;
  /**
   * [dev] A boolean for toggling cache creation or a cache directory path
   */
  cache?: boolean;
  /**
   * [dev] A boolean for including inline source maps
   */
  sourceMap?: boolean;
}
