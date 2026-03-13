/* eslint-disable */

export interface JSONSchemaForBowerConfigurationFiles {
  /**
   * The name of your package.
   */
  name: string;
  /**
   * Help users identify and search for your package with a brief description.
   */
  description?: string;
  /**
   * A semantic version number.
   */
  version?: string;
  /**
   * The primary acting files necessary to use your package.
   */
  main?: string | unknown[];
  /**
   * SPDX license identifier or path/url to a license.
   */
  license?: string | unknown[];
  /**
   * A list of files for Bower to ignore when installing your package.
   */
  ignore?: string | unknown[];
  /**
   * Used for search by keyword. Helps make your package easier to discover without people needing to know its name.
   */
  keywords?: string[];
  /**
   * A list of people that authored the contents of the package.
   */
  authors?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.
   */
  homepage?: string;
  /**
   * The repository in which the source code can be found.
   */
  repository?: {
    type?: 'git';
    url?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.
   */
  dependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * Dependencies that are only needed for development of the package, e.g., test framework or building documentation.
   */
  devDependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * Dependency versions to automatically resolve with if conflicts occur between packages.
   */
  resolutions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.
   */
  private?: boolean;
  /**
   * Used by grunt-bower-task to specify custom install locations.
   */
  exportsOverride?: {
    [k: string]:
      | {
          [k: string]: (string | unknown[]) | undefined;
        }
      | undefined;
  };
  /**
   * The types of modules this package exposes
   */
  moduleType?: ('amd' | 'es6' | 'globals' | 'node' | 'yui')[] | string;
  /**
   * Any property starting with _ is valid.
   *
   * This interface was referenced by `JSONSchemaForBowerConfigurationFiles`'s JSON-Schema definition
   * via the `patternProperty` "^_".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}
