/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A list of strings representing [PEP 508](https://www.python.org/dev/peps/pep-0508) dependencies required to execute the build system.
 *
 */
export type BuildSystemDependencies = string[];
/**
 * Python path to project's build backend
 */
export type BuildBackend = string;
/**
 * paths to prepend to 'sys.path' when loading the build backend, relative to project root
 */
export type BuildBackendDirectories = string[];
/**
 * Pattern that matches `Name <email>` like 'King Arthur' or 'Miss Islington &lt;miss-islington@python.org&gt;'.
 */
export type PoetryAuthorPattern = string;
/**
 * List of authors that contributed to the package. This is typically the main maintainers, not the full list.
 */
export type PoetryAuthors = PoetryAuthorPattern[];
/**
 * List of maintainers, other than the original author(s), that upkeep the package.
 */
export type PoetryMaintainers = PoetryAuthorPattern[];
/**
 * Path to file or directory to include.
 */
export type PoetryIncludePath = string;
/**
 * The format(s) for which the package must be included.
 */
export type PoetryPackageFormats = PoetryPackageFormat | PoetryPackageFormat[];
/**
 * A Python packaging format.
 */
export type PoetryPackageFormat = "sdist" | "wheel";
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^(?!python$)[a-zA-Z-_.0-9]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
 */
export type PoetryDependencyAny =
  | PoetryPep440Version
  | PoetryLongDependency
  | PoetryGitDependency
  | PoetryFileDependency
  | PoetryPathDependency
  | PoetryUrlDependency
  | PoetryMultipleConstraintsDependency;
/**
 * A version constraint. Validates against the PEP 440's version pattern.
 */
export type PoetryPep440Version = string;
/**
 * @minItems 1
 */
export type PoetryMultipleConstraintsDependency = [
  (
    | PoetryPep440Version
    | PoetryLongDependency
    | PoetryGitDependency
    | PoetryFileDependency
    | PoetryPathDependency
    | PoetryUrlDependency
  ),
  ...(
    | PoetryPep440Version
    | PoetryLongDependency
    | PoetryGitDependency
    | PoetryFileDependency
    | PoetryPathDependency
    | PoetryUrlDependency
  )[]
];
export type PoetryBuildSection = PoetryBuildScript | PoetryBuildConfig;
/**
 * The python script file used to build extensions.
 */
export type PoetryBuildScript = string;
/**
 * A simple script pointing to a callable object.
 */
export type PoetryScriptLegacy = string;
export type PoetryScriptTable = PoetryExtraScriptLegacy | PoetryExtraScripts;
export type ProjectMetadata =
  | {
      dynamic: unknown[];
      [k: string]: unknown | undefined;
    }
  | {
      version: unknown;
      [k: string]: unknown | undefined;
    };

export interface JSONSchemaForPythonProjectMetadataAndConfiguration {
  "build-system"?: ProjectBuildSystemConfiguration;
  tool?: ToolSpecificConfiguration;
  project?: ProjectMetadata;
}
/**
 * Build-related data.
 *
 */
export interface ProjectBuildSystemConfiguration {
  requires: BuildSystemDependencies;
  "build-backend"?: BuildBackend;
  "backend-path"?: BuildBackendDirectories;
}
/**
 * A table for tool configurations.
 *
 * Every tool that is used by the project can have its own sub-table for its configuration.
 *
 */
export interface ToolSpecificConfiguration {
  poetry?: {
    /**
     * Package name.
     */
    name: string;
    /**
     * Version of the package. It should follow semantic versioning, but it is not enforced.
     */
    version: string;
    /**
     * Short package description.
     */
    description: string;
    keywords?: string[];
    /**
     * Homepage URL for the project.
     */
    homepage?: string;
    /**
     * Repository URL for the project.
     */
    repository?: string;
    /**
     * Documentation URL for the project.
     */
    documentation?: string;
    /**
     * License name.
     */
    license?: string;
    authors: PoetryAuthors;
    maintainers?: PoetryMaintainers;
    readme?: string | string[];
    /**
     * A list of trove classifers.
     */
    classifiers?: unknown[];
    /**
     * A list of packages to include in the final distribution.
     */
    packages?: {
      include: PoetryIncludePath;
      /**
       * Where the source directory of the package resides.
       */
      from?: string;
      format?: PoetryPackageFormats;
    }[];
    /**
     * A list of files and folders to include.
     */
    include?: (
      | PoetryIncludePath
      | {
          path: PoetryIncludePath;
          format?: PoetryPackageFormats;
        }
    )[];
    /**
     * A list of files and folders to exclude.
     */
    exclude?: unknown[];
    /**
     * This is a hash of package name (keys) and version constraints (values) that are required to run this package.
     */
    dependencies?: {
      /**
       * A version constraint. Validates against the PEP 440's version pattern.
       */
      python: string;
      [k: string]: PoetryDependencyAny;
    };
    /**
     * This is a hash of package name (keys) and version constraints (values) that this package requires for developing it (testing tools and such).
     */
    "dev-dependencies"?: {
      [k: string]: PoetryDependencyAny;
    };
    extras?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
       */
      [k: string]: string[];
    };
    /**
     * This represents groups of dependencies
     */
    group?: {
      /**
       * This represents a single dependency group
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
       */
      [k: string]: {
        /**
         * Whether the dependency group is optional or not
         */
        optional?: boolean;
        /**
         * The dependencies of this dependency group
         */
        dependencies: {
          [k: string]: PoetryDependencyAny;
        };
      };
    };
    build?: PoetryBuildSection;
    /**
     * A hash of scripts to be installed.
     */
    scripts?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
       */
      [k: string]: PoetryScriptLegacy | PoetryScriptTable;
    };
    /**
     * A hash of hashes representing plugins
     */
    plugins?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
       */
      [k: string]: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[a-zA-Z-_.0-9]+$".
         */
        [k: string]: string;
      };
    };
    urls?: {
      /**
       * The full url of the custom url.
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface PoetryLongDependency {
  version: PoetryPep440Version;
  /**
   * The python versions for which the dependency should be installed.
   */
  python?: string;
  /**
   * The platform(s) for which the dependency should be installed.
   */
  platform?: string;
  /**
   * The PEP 508 compliant environment markers for which the dependency should be installed.
   */
  markers?: string;
  /**
   * Whether the dependency allows prereleases or not.
   */
  "allow-prereleases"?: boolean;
  /**
   * Whether the dependency allows prereleases or not.
   */
  "allows-prereleases"?: boolean;
  /**
   * Whether the dependency is optional or not.
   */
  optional?: boolean;
  /**
   * The required extras for this dependency.
   */
  extras?: string[];
  /**
   * The exclusive source used to search for this dependency.
   */
  source?: string;
}
export interface PoetryGitDependency {
  /**
   * The url of the git repository.
   */
  git: string;
  /**
   * The branch to checkout.
   */
  branch?: string;
  /**
   * The tag to checkout.
   */
  tag?: string;
  /**
   * The revision to checkout.
   */
  rev?: string;
  /**
   * The relative path to the directory where the package is located.
   */
  subdirectory?: string;
  /**
   * The python versions for which the dependency should be installed.
   */
  python?: string;
  /**
   * The platform(s) for which the dependency should be installed.
   */
  platform?: string;
  /**
   * The PEP 508 compliant environment markers for which the dependency should be installed.
   */
  markers?: string;
  /**
   * Whether the dependency allows prereleases or not.
   */
  "allow-prereleases"?: boolean;
  /**
   * Whether the dependency allows prereleases or not.
   */
  "allows-prereleases"?: boolean;
  /**
   * Whether the dependency is optional or not.
   */
  optional?: boolean;
  /**
   * The required extras for this dependency.
   */
  extras?: string[];
  /**
   * Whether to install the dependency in development mode.
   */
  develop?: boolean;
}
export interface PoetryFileDependency {
  /**
   * The path to the file.
   */
  file: string;
  /**
   * The python versions for which the dependency should be installed.
   */
  python?: string;
  /**
   * The platform(s) for which the dependency should be installed.
   */
  platform?: string;
  /**
   * The PEP 508 compliant environment markers for which the dependency should be installed.
   */
  markers?: string;
  /**
   * Whether the dependency is optional or not.
   */
  optional?: boolean;
  /**
   * The required extras for this dependency.
   */
  extras?: string[];
}
export interface PoetryPathDependency {
  /**
   * The path to the dependency.
   */
  path: string;
  /**
   * The python versions for which the dependency should be installed.
   */
  python?: string;
  /**
   * The platform(s) for which the dependency should be installed.
   */
  platform?: string;
  /**
   * The PEP 508 compliant environment markers for which the dependency should be installed.
   */
  markers?: string;
  /**
   * Whether the dependency is optional or not.
   */
  optional?: boolean;
  /**
   * The required extras for this dependency.
   */
  extras?: string[];
  /**
   * Whether to install the dependency in development mode.
   */
  develop?: boolean;
}
export interface PoetryUrlDependency {
  /**
   * The url to the file.
   */
  url: string;
  /**
   * The python versions for which the dependency should be installed.
   */
  python?: string;
  /**
   * The platform(s) for which the dependency should be installed.
   */
  platform?: string;
  /**
   * The PEP 508 compliant environment markers for which the dependency should be installed.
   */
  markers?: string;
  /**
   * Whether the dependency is optional or not.
   */
  optional?: boolean;
  /**
   * The required extras for this dependency.
   */
  extras?: string[];
}
/**
 * Build specific configurations.
 */
export interface PoetryBuildConfig {
  /**
   * Generate and include a setup.py file in sdist.
   */
  "generate-setup-file"?: boolean;
  script?: PoetryBuildScript;
}
/**
 * A script that should be installed only if extras are activated.
 */
export interface PoetryExtraScriptLegacy {
  /**
   * The entry point of the script. Deprecated in favour of reference.
   */
  callable?: string;
  /**
   * The required extras for this script.
   */
  extras?: string[];
}
/**
 * Either a console entry point or a script file that'll be included in the distribution package.
 */
export interface PoetryExtraScripts {
  /**
   * If type is file this is the relative path of the script file, if console it is the module name.
   */
  reference: string;
  /**
   * Value can be either file or console.
   */
  type: "file" | "console";
  /**
   * The required extras for this script. Only applicable if type is console.
   */
  extras?: string[];
}
