/* eslint-disable */

export interface JSONSchemaForThePowerPagesConfigurationFile {
  /**
   * The name of the website
   */
  siteName?: string;
  /**
   * The path of the default HTML page to load when opening the website. This path should be relative to the compiledPath.
   */
  defaultLandingPage?: string;
  /**
   * The path of the compiled output directory relative to powerpages.config.json file
   */
  compiledPath?: string;
  /**
   * List of glob patterns (strings) identifying file patterns to be cleaned up from web-files before uploading to Power Pages.
   */
  bundleFilePatterns?: string[];
  /**
   * Whether to include source code when uploading files to Power Pages. Defaults to `false` if not specified.
   */
  includeSource?: boolean;
  /**
   * List of glob patterns (strings) identifying source file patterns to be excluded when uploading the site to Power Pages. This is only applicable if `includeSource` is set to `true`.
   */
  sourceExcludePatterns?: string[];
  [k: string]: unknown | undefined;
}
