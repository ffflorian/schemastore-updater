/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type BunLockFileWorkspacePackage = BunLockFileBasePackageInfo & {
  /**
   * The name of the workspace package.
   */
  name?: string;
  /**
   * The version of the workspace package.
   */
  version?: string;
  [k: string]: unknown | undefined;
};
/**
 * An array representing a package in the lockfile.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export type BunLockFilePackageArray =
  | [
      string,
      string,
      BunLockFileBasePackageInfo & {
        /**
         * Specifies operating systems supported by this package.
         */
        os?: string | string[];
        /**
         * Specifies CPU architectures supported by this package.
         */
        cpu?: string | string[];
        /**
         * Indicates if the package is bundled.
         */
        bundled?: true;
        [k: string]: unknown | undefined;
      },
      string
    ]
  | [
      string,
      BunLockFileBasePackageInfo & {
        /**
         * Specifies operating systems supported by this package.
         */
        os?: string | string[];
        /**
         * Specifies CPU architectures supported by this package.
         */
        cpu?: string | string[];
        /**
         * Indicates if the package is bundled.
         */
        bundled?: true;
        [k: string]: unknown | undefined;
      }
    ]
  | [string]
  | [
      string,
      BunLockFileBasePackageInfo & {
        /**
         * Specifies operating systems supported by this package.
         */
        os?: string | string[];
        /**
         * Specifies CPU architectures supported by this package.
         */
        cpu?: string | string[];
        /**
         * Indicates if the package is bundled.
         */
        bundled?: true;
        [k: string]: unknown | undefined;
      },
      string
    ]
  | [
      string,
      {
        /**
         * Executable binaries provided by the root package.
         */
        bin?:
          | {
              /**
               * This interface was referenced by `undefined`'s JSON-Schema definition
               * via the `patternProperty` ".*".
               */
              [k: string]: string;
            }
          | string;
        /**
         * Directory where the root package's binaries are located.
         */
        binDir?: string;
      }
    ];

/**
 * Schema definition for Bun's `bun.lock` file (package manager lockfile). See https://bun.sh/docs/install/lockfile
 */
export interface BunLockFile {
  /**
   * Specifies the version of the lockfile format. Currently only sypporting 0 or 1.
   */
  lockfileVersion: 0 | 1;
  /**
   * Defines the project workspaces and their corresponding packages.
   */
  workspaces: {
    [k: string]: BunLockFileWorkspacePackage;
  };
  /**
   * Defines custom dependency resolutions for specific packages.
   */
  overrides?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * Lists dependencies that have been patched to modify their behavior.
   */
  patchedDependencies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * An array of dependencies explicitly marked as trusted.
   */
  trustedDependencies?: string[];
  /**
   * Contains information about all the packages used in the project.
   */
  packages: {
    [k: string]: BunLockFilePackageArray;
  };
  [k: string]: unknown | undefined;
}
/**
 * Base information about a package, including dependencies and peer relationships.
 */
export interface BunLockFileBasePackageInfo {
  /**
   * A map of dependencies required by this package.
   */
  dependencies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * A map of development-only dependencies.
   */
  devDependencies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * A map of optional dependencies for this package.
   */
  optionalDependencies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * A map of peer dependencies for this package.
   */
  peerDependencies?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string;
  };
  /**
   * An array of optional peer dependencies.
   */
  optionalPeers?: string[];
  /**
   * Executable binaries provided by the package.
   */
  bin?:
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: string;
      }
    | string;
  /**
   * Directory where the package's binaries are located.
   */
  binDir?: string;
  [k: string]: unknown | undefined;
}
