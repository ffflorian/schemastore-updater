/* eslint-disable */

export type Hatch = {
  metadata?: Metadata;
  env?: CollectorEnv;
  envs?: Envs;
  build?: Build;
  version?: Version;
  publish?: Publish;
} & (
  | {
      version?: never;
      [k: string]: unknown | undefined;
    }
  | {
      version: {
        source?: never;
        path: string;
        pattern?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      version: {
        path?: never;
        source: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      version: {
        source: 'regex';
        path: string;
        pattern?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      version: {
        source: 'code';
        path: string;
        expression?: string;
        'search-paths'?: string[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
);
/**
 * Whether to allow direct references
 */
export type AllowDirectReferences = boolean;
/**
 * Whether to allow ambiguous features
 */
export type AllowAmbiguousFeatures = boolean;
/**
 * Required environment collectors for automatic management
 */
export type Requires = string[];
/**
 * Template environment to inherit from. Set to own name to make self referential (disable inheritance from “default”)
 */
export type Template = string;
/**
 * Make the environment self-referential and skip project install
 */
export type Detached = boolean;
/**
 * List of dependencies to install in the environment
 */
export type Dependencies = string[];
/**
 * List of extra dependencies to install in the environment in addition to the template environment’s dependencies
 */
export type ExtraDependencies = string[];
/**
 * List of optional dependency groups (extras) to install
 */
export type FeaturesExtras = string[];
/**
 * Whether to install the project in development mode
 */
export type DevMode = boolean;
/**
 * Whether to skip installing the project
 */
export type SkipInstall = boolean;
/**
 * Glob patterns of environment variables to include
 */
export type EnvironmentVariableInclude = string[];
/**
 * Glob patterns of environment variables to exclude
 */
export type EnvironmentVariableExclude = string[];
/**
 * List of commands to run before installing the project
 */
export type PreInstallCommands = string[];
/**
 * List of commands to run after installing the project
 */
export type PostInstallCommands = string[];
/**
 * Python version to use or an absolute path to a python interpreter
 */
export type PythonVersion = string;
export type Platform = 'linux' | 'windows' | 'macos';
/**
 * List of platforms to build for
 */
export type Platforms = Platform[];
/**
 * Description of the environment for the `env show` command
 */
export type Description = string;
/**
 * Type of environment. Without plugins, the only supported type is "virtual"
 */
export type Type = string;
/**
 * Matrix of environments
 */
export type Matrix = {
  [k: string]: string[] | undefined;
}[];
/**
 * Format string for matrix names, supporting {variable} and {value} placeholders
 */
export type MatrixNameFormat = string;
/**
 * Build configuration
 */
export type Build = Build1 & Build2;
export type Build1 =
  | {
      'dev-mode-dirs'?: never;
      [k: string]: unknown | undefined;
    }
  | {
      'dev-mode-exact'?: never;
      [k: string]: unknown | undefined;
    };
/**
 * Whether to ignore VCS .*ignore files and include those files by default
 */
export type IgnoreVCSInFileSelection = boolean;
/**
 * List of glob patterns to include files
 */
export type IncludeFiles = string[];
/**
 * List of glob patterns to exclude files
 */
export type ExcludeFiles = string[];
/**
 * List of glob patterns to include VCS-ignored files
 */
export type ArtifactFiles = string[];
/**
 * Whether to only include non-artifact files in packages
 */
export type ExcludingFilesOutsidePackages = boolean;
/**
 * Rewrite relative paths
 */
export type Sources =
  | {
      [k: string]: string | undefined;
    }
  | string[];
/**
 * Whether to skip excluded directories (for performance reasons)
 */
export type SkipExcludedDirs = boolean;
/**
 * Whether to make the build reproducible
 */
export type Reproducible = boolean;
/**
 * Directory to write build artifacts to
 */
export type OutputDirectory = string;
/**
 * List of directories to add to PYTHONPATH in development mode
 */
export type DevModeDirectories = string[];
/**
 * Whether to use an exact dev mode that doesn’t add whole directories to PYTHONPATH
 */
export type ExactDevMode = boolean;
/**
 * Wheel build targets
 */
export type WheelTarget = Target & WheelTarget1;
/**
 * List of relative paths to directories or files to include, preventing directory traversal from project root. This option overrides any include patterns.
 */
export type OnlyIncludeSpecificPaths = string[];
/**
 * Whether to install the project’s runtime dependencies
 */
export type RequireRuntimeDependencies = boolean;
/**
 * A list of the project’s runtime features to install
 */
export type RequiredRuntimeFeatures = string[];
/**
 * Whether to enable current hook (disable to control activation using environment variables)
 */
export type ConditionalExecution = boolean;
/**
 * List of versions to build
 */
export type Versions = string[];
/**
 * List of packages to build
 */
export type Packages = string[];
/**
 * Whether to only include non-artifact files in packages
 */
export type OnlyPackages = boolean;
/**
 * Whether or not to suppress the error when one has not defined any file selection options and all heuristics have failed to determine what to ship
 */
export type BypassSelection = boolean;
/**
 * The version of core metadata to use
 */
export type CoreMetadataVersion = string;
/**
 * Whether or not file names should contain the normalized version of the project name
 */
export type StrictNaming = boolean;
/**
 * Whether or not on macOS, when build hooks have set the infer_tag build data, the wheel name should signal broad support rather than specific versions for newer SDK versions.
 */
export type BroadMacOSCompatibility = boolean;
/**
 * Whether or not to suppress the error when one has not defined any file selection options and all heuristics have failed to determine what to ship
 */
export type BroadFileSelection = boolean;
/**
 * A relative path to a file containing the project version
 */
export type Path = string;
/**
 * A regex pattern to extract the version
 */
export type Pattern = string;
/**
 * A Python expression that will be evaluated in the context of the loaded file to return the version
 */
export type Expression = string;
/**
 * A list of relative paths to directories that will be prepended to Python's search path
 */
export type SearchPaths = string[];
/**
 * A source to use for retrieving and updating the version.
 */
export type Source = string;
/**
 * Ask for confirmation when publishing to index
 */
export type Confirmation = boolean;

/**
 * Metadata for the project
 */
export interface Metadata {
  'allow-direct-references'?: AllowDirectReferences;
  'allow-ambiguous-features'?: AllowAmbiguousFeatures;
  hooks?: MetadataHookPlugins;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for plugin hooks that allow for the modification of project metadata after it has been loaded
 */
export interface MetadataHookPlugins {
  [k: string]: unknown | undefined;
}
/**
 * Environment collector plugin configuration
 */
export interface CollectorEnv {
  collectors?: Collectors;
  requires?: Requires;
  [k: string]: unknown | undefined;
}
/**
 * Custom environment collectors
 */
export interface Collectors {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Dictionary of environments
 */
export interface Envs {
  [k: string]: Env | undefined;
}
export interface Env {
  template?: Template;
  detached?: Detached;
  dependencies?: Dependencies;
  'extra-dependencies'?: ExtraDependencies;
  features?: FeaturesExtras;
  'dev-mode'?: DevMode;
  'skip-install'?: SkipInstall;
  'env-vars'?: EnvironmentVariables;
  'env-include'?: EnvironmentVariableInclude;
  'env-exclude'?: EnvironmentVariableExclude;
  scripts?: Scripts;
  'pre-install-commands'?: PreInstallCommands;
  'post-install-commands'?: PostInstallCommands;
  python?: PythonVersion;
  platforms?: Platforms;
  description?: Description;
  type?: Type;
  matrix?: Matrix;
  'matrix-name-format'?: MatrixNameFormat;
  overrides?: Overrides;
  requires?: Requires;
  [k: string]: unknown | undefined;
}
/**
 * Environment variables to set
 */
export interface EnvironmentVariables {
  [k: string]: string | undefined;
}
/**
 * Dictionary of scripts to run
 */
export interface Scripts {
  [k: string]: string | string[] | undefined;
}
/**
 * Overrides depending on things like platform, matrix variables, or environment variables
 */
export interface Overrides {
  platform?: {
    [k: string]: Override | undefined;
  };
  /**
   * This interface was referenced by `Overrides`'s JSON-Schema definition
   * via the `patternProperty` "env|matrix|name".
   */
  [k: string]:
    | {
        [k: string]: Override | undefined;
      }
    | undefined;
}
/**
 * TODO
 */
export interface Override {
  [k: string]: unknown | undefined;
}
export interface Build2 {
  'ignore-vcs'?: IgnoreVCSInFileSelection;
  include?: IncludeFiles;
  exclude?: ExcludeFiles;
  artifacts?: ArtifactFiles;
  'only-packages'?: ExcludingFilesOutsidePackages;
  sources?: Sources;
  'skip-excluded-dirs'?: SkipExcludedDirs;
  reproducible?: Reproducible;
  directory?: OutputDirectory;
  'dev-mode-dirs'?: DevModeDirectories;
  'dev-mode-exact'?: ExactDevMode;
  targets?: BuildTargets;
  hooks?: BuildHookPlugins;
  [k: string]: unknown | undefined;
}
/**
 * Build targets
 */
export interface BuildTargets {
  wheel?: WheelTarget;
  [k: string]: Target | WheelTarget | undefined;
}
export interface Target {
  'ignore-vcs'?: IgnoreVCSInFileSelection;
  include?: IncludeFiles;
  exclude?: ExcludeFiles;
  artifacts?: ArtifactFiles;
  'only-include'?: OnlyIncludeSpecificPaths;
  hooks?: BuildHookPlugins;
  dependencies?: Dependencies;
  'require-runtime-dependencies'?: RequireRuntimeDependencies;
  'require-runtime-features'?: RequiredRuntimeFeatures;
  versions?: Versions;
  packages?: Packages;
  'force-include'?: ForceInclude;
  'only-packages'?: OnlyPackages;
  sources?: Sources1;
  'bypass-selection'?: BypassSelection;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for plugin hooks that will be executed at various stages of the build process
 */
export interface BuildHookPlugins {
  [k: string]: BuildHook | undefined;
}
export interface BuildHook {
  dependencies?: Dependencies;
  'require-runtime-dependencies'?: RequireRuntimeDependencies;
  'require-runtime-features'?: RequiredRuntimeFeatures;
  'enable-by-default'?: ConditionalExecution;
  [k: string]: unknown | undefined;
}
/**
 * Whether to force include files
 */
export interface ForceInclude {
  [k: string]: string | undefined;
}
/**
 * Rewrite relative paths
 */
export interface Sources1 {
  [k: string]: string | undefined;
}
export interface WheelTarget1 {
  'core-metadata-version'?: CoreMetadataVersion;
  'shared-data'?: SharedData;
  'extra-metadata'?: ExtraMetadata;
  'strict-naming'?: StrictNaming;
  'macos-max-compat'?: BroadMacOSCompatibility;
  'broad-selection'?: BroadFileSelection;
  [k: string]: unknown | undefined;
}
/**
 * A mapping similar to the forced inclusion option corresponding to data that will be installed globally in a given Python environment, usually under sys.prefix
 */
export interface SharedData {
  [k: string]: string | undefined;
}
/**
 * A mapping similar to the forced inclusion option corresponding to extra metadata that will be shipped in a directory named extra_metadata
 */
export interface ExtraMetadata {
  [k: string]: string | undefined;
}
/**
 * Version configuration
 */
export interface Version {
  path?: Path;
  pattern?: Pattern;
  expression?: Expression;
  'search-paths'?: SearchPaths;
  source?: Source;
  [k: string]: unknown | undefined;
}
/**
 * Publish configuration
 */
export interface Publish {
  index?: PublishIndex;
  [k: string]: unknown | undefined;
}
/**
 * Publishing index configuration
 */
export interface PublishIndex {
  disable?: Confirmation;
  repos?: Repositories;
  [k: string]: unknown | undefined;
}
/**
 * Define named repositories to publish to
 */
export interface Repositories {
  main?: never;
  test?: never;
  [k: string]:
    | {
        url?: string;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
