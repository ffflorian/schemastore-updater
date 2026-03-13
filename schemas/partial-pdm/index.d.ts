/* eslint-disable */

export type DevDependency = string;
/**
 * The default dev dependencies
 */
export type DevDependencyGroup = DevDependency[];
export type DevDependencyGroup1 = DevDependency[] | undefined;
/**
 * Options that can be applied to a PDM command
 */
export type CommandOptions = string[];
export type EnvFile =
  | {
      /**
       * Path to a file with env vars. Existing vars will be overwritten
       */
      override?: string;
      additionalProperties?: never;
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * PDM script definition
 */
export type PdmScript =
  | (
      | {
          /**
           * Call to a python callable
           */
          call: string;
          env?: EnvVars;
          env_file?: EnvFile;
          help?: ScriptHelp;
        }
      | {
          /**
           * Command that can be run from PDM's environment
           */
          cmd: string | string[];
          env?: EnvVars;
          env_file?: EnvFile;
          help?: ScriptHelp;
        }
      | {
          /**
           * Command that will be run in a shell environment
           */
          shell: string;
          env?: EnvVars;
          env_file?: EnvFile;
          help?: ScriptHelp;
        }
      | {
          /**
           * List of PDM scripts that should be run with this script
           */
          composite: string[];
          env?: EnvVars;
          env_file?: EnvFile;
          help?: ScriptHelp;
          /**
           * continue the execution of the remaining scripts after a failure
           */
          keep_going?: boolean;
        }
    )
  | string;
/**
 * Help text for the script
 */
export type ScriptHelp = string;
/**
 * Path pattern specifications for build.wheel-data
 */
export type WheelDataArray = (
  | {
      /**
       * Path pattern of included files
       */
      path: string;
      /**
       * If specified, the relative paths of the matched files will be calculated based on this directory, otherwise the files will be flattened and installed directly under the scheme directory
       */
      'relative-to'?: string;
    }
  | string
)[];

export interface HttpsJsonSchemastoreOrgPartialPdmJson {
  /**
   * Whether the project needs to be distributed
   */
  distribution?: boolean;
  /**
   * Ignore package resolution warnings for packages matching the given patterns (PDM v2.10.0)
   */
  ignore_package_warnings?: string[];
  /**
   * Development dependencies
   */
  'dev-dependencies'?: {
    dev?: DevDependencyGroup;
    [k: string]: DevDependencyGroup1 | undefined;
  };
  /**
   * Configuration related to package resolution
   */
  resolution?: {
    /**
     * Whether to allow the use of pre-releases when resolving packages
     */
    'allow-prereleases'?: boolean;
    /**
     * Package names to be excluded from the resolution result
     */
    excludes?: string[];
    /**
     * Whether PDM prefers package sources by order
     */
    'respect-source-order'?: boolean;
    /**
     * Resolution overrides for forcing specific dependency versions
     */
    overrides?: {
      /**
       * Dependency version to be used. Can be a version range or an absolute url to a wheel file
       */
      [k: string]: string | undefined;
    };
  };
  /**
   * Default options applied to a PDM command
   */
  options?: {
    add?: CommandOptions;
    build?: CommandOptions;
    cache?: CommandOptions;
    completion?: CommandOptions;
    config?: CommandOptions;
    export?: CommandOptions;
    fix?: CommandOptions;
    import?: CommandOptions;
    info?: CommandOptions;
    init?: CommandOptions;
    install?: CommandOptions;
    list?: CommandOptions;
    lock?: CommandOptions;
    publish?: CommandOptions;
    remove?: CommandOptions;
    run?: CommandOptions;
    search?: CommandOptions;
    self?: CommandOptions;
    show?: CommandOptions;
    sync?: CommandOptions;
    update?: CommandOptions;
    use?: CommandOptions;
    venv?: CommandOptions;
    [k: string]: CommandOptions;
  };
  /**
   * List of PDM plugins required for this project
   */
  plugins?: string[];
  /**
   * Sources used for package resolution
   */
  source?: PackageSource[];
  /**
   * Definition of PDM scripts
   */
  scripts?: {
    /**
     * Shared options for all scripts
     * https://pdm-project.org/latest/usage/scripts/#shared-options
     */
    _?: {
      env?: EnvVars;
      env_file?: EnvFile;
    };
    post_init?: PdmScript;
    pre_install?: PdmScript;
    post_install?: PdmScript;
    pre_lock?: PdmScript;
    post_lock?: PdmScript;
    pre_build?: PdmScript;
    post_build?: PdmScript;
    pre_publish?: PdmScript;
    post_publish?: PdmScript;
    pre_script?: PdmScript;
    post_script?: PdmScript;
    pre_run?: PdmScript;
    post_run?: PdmScript;
    [k: string]: PdmScript;
  };
  /**
   * Dynamic version options for PDM-backend
   */
  version?: {
    /**
     * Dynamic version source
     */
    source: 'file' | 'scm' | 'call';
    /**
     * Path to python file to read version from (file source)
     */
    path?: string;
    /**
     * Specify a default version to be used when building from a source tree where SCM is not available (since pdm-backend v2.2.0)
     */
    fallback_version?: string;
    /**
     * Filters the set of tags which are considered as candidates to capture your project's version (scm source)
     */
    tag_filter?: string;
    /**
     * Regex for reading version from source control tag (scm source)
     */
    tag_regex?: string;
    /**
     * Used to customize the format of the version string (since pdm-backend v2.2.0)
     */
    version_format?: string;
    /**
     * Python callable for reading version
     */
    getter?: string;
    /**
     * File path a generated version should be written to
     */
    write_to?: string;
    /**
     * Template to use for generated version file
     */
    write_template?: string;
  };
  /**
   * Configuration related to the build process with pdm-backend
   */
  build?: {
    /**
     * Path patterns of files to be included in the package
     */
    includes?: string[];
    /**
     * Path patterns of files to be excluded from package
     */
    excludes?: string[];
    /**
     * Path patterns of files that are needed for building but not meant to be copied to the site-packages directory
     */
    'source-includes'?: string[];
    /**
     * Directory where packages are located. The default value is src if src/ is found and . otherwise
     */
    'package-dir'?: string;
    /**
     * Python file that should be run before every build
     */
    'custom-hook'?: string;
    /**
     * Whether to auto-generate setup.py and run setuptools with it. Useful for building C extensions
     */
    'run-setuptools'?: boolean;
    /**
     * Whether builds should be platform specific
     */
    'is-purelib'?: boolean;
    /**
     * Format of editable wheels
     */
    'editable-backend'?: 'path' | 'editables';
    /**
     * Configuration for additional files to be written to a user's site-packages directory
     */
    'wheel-data'?: {
      scripts?: WheelDataArray;
      purelib?: WheelDataArray;
      platlib?: WheelDataArray;
      include?: WheelDataArray;
      platinclude?: WheelDataArray;
      data?: WheelDataArray;
    };
  };
  dockerize?: HttpsJsonSchemastoreOrgPartialPdmDockerizeJson;
}
/**
 * Package source
 */
export interface PackageSource {
  /**
   * Name of the package source
   */
  name: string;
  /**
   * HTTP url for the package source
   */
  url: string;
  /**
   * Whether to verify certificates when using the package source
   */
  verify_ssl?: boolean;
  /**
   * Username for the package source
   */
  username?: string;
  /**
   * Password for the package source
   */
  password?: string;
  /**
   * index or find_links
   */
  type?: 'index' | 'find_links';
  /**
   * Glob patterns of packages that should not be used from this source. Ignored if include_packages configuration is present
   */
  exclude_packages?: string[];
  /**
   * Glob patterns of the only packages that should be used from this source
   */
  include_packages?: string[];
}
/**
 * Environment variables applied when running the script
 */
export interface EnvVars {
  [k: string]: string | undefined;
}
export interface HttpsJsonSchemastoreOrgPartialPdmDockerizeJson {
  /**
   * fnmatch filter patterns for included PDM scripts
   */
  include?: string | string[];
  /**
   * fnmatch filter patterns for excluded PDM scripts
   */
  exclude?: string | string[];
  /**
   * fnmatch filter patterns for included binaries
   */
  include_bins?: string | string[];
  /**
   * fnmatch filter patterns for excluded binaries
   */
  exclude_bins?: string | string[];
  /**
   * Path to a file with environment variables
   */
  env_file?: string;
  /**
   * Environment variables applied when running the script
   */
  env?: {
    [k: string]: string | undefined;
  };
}
