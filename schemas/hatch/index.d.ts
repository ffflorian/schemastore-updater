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
        path: string;
        pattern?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      version: {
        source: string;
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
 * Required environment plugins
 */
export type Requires1 = string[];
/**
 * Build configuration
 */
export type Build =
  | {
      'dev-mode-dirs'?: never;
      [k: string]: unknown | undefined;
    }
  | {
      'dev-mode-exact'?: never;
      [k: string]: unknown | undefined;
    };
/**
 * A relative path to a file containing the project version
 */
export type Path = string;
/**
 * A regex pattern to extract the version
 */
export type Pattern = string;
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
  requires?: Requires1;
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
  [k: string]: (string | string[]) | undefined;
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
  [k: string]: {
    [k: string]: Override | undefined;
  };
}
/**
 * TODO
 */
export interface Override {
  [k: string]: unknown | undefined;
}
/**
 * Version configuration
 */
export interface Version {
  path?: Path;
  pattern?: Pattern;
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
