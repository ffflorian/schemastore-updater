/* eslint-disable */

/**
 * Do not classify files on this path with the parent tag.
 */
export type Exclude = string;
export type Queries = Query[] | null;
/**
 * Use to identify a specific query whose results you want to include or exclude from display on LGTM.
 */
export type ID = string;
/**
 * Use to specify a single level of severity (error, warning or recommendation) for queries whose results you want to include or exclude from display.
 */
export type Severity = string;
export type Tag = string;
/**
 * Use to specify one or more tags for queries whose results you want to include or exclude from display.
 */
export type Tags = Tag[];
export type Package = string;
/**
 * One or more packages to install.
 */
export type Packages = Package[];
/**
 * Customizable step used by all languages.
 */
export type AfterPrepare = string[];
/**
 * Customizable step used by all languages.
 */
export type BeforeIndex = string[];
/**
 * Specify that all project or solution files should be used for extraction.
 */
export type AllSolutions = boolean;
export type BuildCommand = string[] | string;
/**
 * Specify whether or not to extract the codebase without building the code.
 */
export type Buildless = boolean;
export type Argument = string;
/**
 * Specify a list of additional arguments to dotnet build.
 */
export type Arguments = Argument[];
/**
 * Specify the version of the .NET Core SDK to use.
 */
export type Version = string;
/**
 * Specify a list of files and folders to exclude from extraction. Each path is specified by defining paths relative to LGTM_SRC.
 */
export type Exclude2 = string[];
export type Version1 = string | number;
/**
 * Specify a list of files and folders to scan for files to extract.
 */
export type Include1 = string[];
/**
 * Specify the Java version required to build the project.
 */
export type JavaVersion = string | number;
/**
 * Specify the path (absolute or relative) of a Maven settings file to use.
 */
export type SettingsFile = string;
/**
 * Specify the path of a Maven toolchains file to use.
 */
export type ToolchainsFile = string;
/**
 * Specify the required Maven version.
 */
export type Version2 = string | number;
/**
 * Specify a list of additional arguments to MSBuild.
 */
export type Arguments1 = Argument[];
/**
 * Specify the MSBuild configuration to use, for example, debug or release.
 */
export type Configuration = string;
/**
 * Specify the platform to target, for example: x86, x64, or Any CPU.
 */
export type Platform = string;
/**
 * Specify the MSBuild target.
 */
export type Target = string;
/**
 * Specify whether or not to perform a NuGet restore for extraction.
 */
export type NuGetRestore = boolean;
/**
 * Specify whether .properties files are extracted.
 */
export type PropertiesFiles = boolean;
/**
 * Specify a list of one or more project or solution files for extraction.
 */
export type Solution = string[];
/**
 * Specify how TypeScript files should be extracted.
 */
export type TypeScript = 'none' | 'basic' | 'full';
/**
 * Specify how XML files should be extracted.
 */
export type XMLMode = 'all' | 'default' | 'disabled';
/**
 * Override the default process by specifying a list of commands to run to generate the build configuration.
 */
export type Command = string[] | null;
/**
 * Specify packages to exclude from extraction/analysis.
 */
export type ExcludeRequirements = Package[];
/**
 * Specify a list of pip packages to install. If any of these packages cannot be installed, the extraction will fail.
 */
export type Requirements = Package[];
/**
 * Specify a list of requirements text files to use to set up the environment, or false for none.
 */
export type RequirementFiles = string[] | boolean;
/**
 * Specify a setup.py file to use to set up the environment, or false for none.
 */
export type SetupPython = string;
/**
 * Override the version of the Python interpreter used for setup and extraction.
 */
export type Version3 = string | number;

/**
 * Configuration file for lgtm, for continuous security analysis.
 */
export interface HttpsJsonSchemastoreOrgLgtmJson {
  path_classifiers?: PathClassifiers;
  queries?: Queries;
  extraction?: Extraction;
  [k: string]: unknown | undefined;
}
/**
 * Defines the tag that you want to modify. Usually this is a built-in tag, but you can define your own tags.
 */
export interface PathClassifiers {
  /**
   * Classify files on this path with the parent tag.
   */
  [k: string]:
    | (
        | string
        | {
            exclude?: Exclude;
            [k: string]: unknown | undefined;
          }
      )[]
    | undefined;
}
export interface Query {
  exclude?: Exclude1;
  include?: Include;
  [k: string]: unknown | undefined;
}
/**
 * Hide the results for queries with the specified properties.
 */
export interface Exclude1 {
  id?: ID;
  severity?: Severity;
  tags?: Tags;
  [k: string]: unknown | undefined;
}
/**
 * Show the results for queries with the specified properties.
 */
export interface Include {
  id?: ID;
  severity?: Severity;
  tags?: Tags;
  [k: string]: unknown | undefined;
}
export interface Extraction {
  [k: string]:
    | {
        prepare?: Prepare;
        after_prepare?: AfterPrepare;
        before_index?: BeforeIndex;
        index?: Index;
        configure?: Configure;
        python_setup?: PythonSetup;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Customizable step used by all languages.
 */
export interface Prepare {
  packages?: Packages;
  [k: string]: unknown | undefined;
}
/**
 * Customizable step used by all languages.
 */
export interface Index {
  all_solutions?: AllSolutions;
  build_command?: BuildCommand;
  buildless?: Buildless;
  dotnet?: NET;
  exclude?: Exclude2;
  filetypes?: Filetypes;
  gradle?: Gradle;
  include?: Include1;
  java_version?: JavaVersion;
  maven?: Maven;
  msbuild?: MSBuild;
  nuget_restore?: NuGetRestore;
  properties_files?: PropertiesFiles;
  solution?: Solution;
  typescript?: TypeScript;
  xml_mode?: XMLMode;
  [k: string]: unknown | undefined;
}
export interface NET {
  arguments?: Arguments;
  version?: Version;
  [k: string]: unknown | undefined;
}
/**
 * Specify additional file types to extract.
 */
export interface Filetypes {
  [k: string]: string | undefined;
}
export interface Gradle {
  version?: Version1;
  [k: string]: unknown | undefined;
}
/**
 * Specify Maven settings to use by specifying one or more of the maven subproperties detailed below.
 */
export interface Maven {
  settings_file?: SettingsFile;
  toolchains_file?: ToolchainsFile;
  version?: Version2;
  [k: string]: unknown | undefined;
}
export interface MSBuild {
  arguments?: Arguments1;
  configuration?: Configuration;
  platform?: Platform;
  target?: Target;
  [k: string]: unknown | undefined;
}
/**
 * Customizable step used only by C/C++ extraction.
 */
export interface Configure {
  command?: Command;
  [k: string]: unknown | undefined;
}
/**
 * This step is used only by Python blocks. It sets up the Python interpreter and virtual environment, ready for the index step to extract the codebase.
 */
export interface PythonSetup {
  exclude_requirements?: ExcludeRequirements;
  requirements?: Requirements;
  requirements_files?: RequirementFiles;
  setup_py?: SetupPython;
  version?: Version3;
  [k: string]: unknown | undefined;
}
