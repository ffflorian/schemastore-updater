/* eslint-disable */

/**
 * Long name of your project.
 */
export type TheNameSchema = string;
/**
 * Prefix used for CBA macros and the release directory name.
 */
export type ThePrefixSchema = string;
/**
 * Author of the project.
 */
export type TheAuthorSchema = string;
/**
 * HEMTT will look for ```addons/main/script_version.hpp``` and use it for the version number. If you are not using the CBA project structure or do not have that file you can add a version number in the HEMTT project file.
 */
export type TheVersionSchema = string;
export type TheItemsSchema = string;
/**
 * HEMTT will copy the files to the release directory after a successful release build. Supports glob patterns.
 */
export type TheFilesSchema = TheItemsSchema[];
/**
 * HEMTT will include matching relative or absolute paths when building.
 */
export type TheIncludeSchema = TheItemsSchema[];
/**
 * HEMTT will exclude matching files when building.
 */
export type TheExcludeSchema = TheItemsSchema[];
/**
 * HEMTT will build the specified addons from the ./optionals folder.
 */
export type TheOptionalsSchema = TheItemsSchema[];
/**
 * HEMTT will by default build optionals into their own mod folders, which can be directly launched by the user. This can be turned off to build optional PBOs directly into optionals folder.
 */
export type TheFolderOptionalsSchema = boolean;
/**
 * HEMTT will skip building the specified addons.
 */
export type TheSkipSchema = TheItemsSchema[];
/**
 * HEMTT will apply specified header extensions to each PBO. Supports templating.
 */
export type TheHeaderextsSchema = TheItemsSchema[];
/**
 * HEMTT will use the specified mod name (without @) to form @mod folder. Supports templating.
 */
export type TheModnameSchema = string;
/**
 * HEMTT will use the specified key name for .bikey and .biprivatekey names. Supports templating.
 */
export type TheKeynameSchema = string;
/**
 * HEMTT will use the specified signature name as part of the full signature (.bisign) name. Supports templating.
 */
export type TheSignameSchema = string;
/**
 * HEMTT will use the specified signature version. Currently Supported: V2, V3 (Experimental).
 */
export type TheSigversionSchema = number;
/**
 * If set to true, HEMTT will use (and reuse) releases/keys/{keyname}.biprivatekey. It will be generated if it doesn't exist. The default behaviour is to generate a new private key each time and discard it immediately. HEMTT strongly recommends that you only reuse the key if you are making a client-side mod where it will not matter if clients are running different versions of the mod.
 */
export type TheReusePrivateKeySchema = boolean;
export type ThePostbuildSchema = TheItemsSchema[];
export type ThePrebuildSchema = TheItemsSchema[];
export type TheReleasebuildSchema = TheItemsSchema[];
export type TheSchema =
  | (
      | (ParallelRequiresForeachToBeTrue & {
          steps?: TheStepsSchema;
          steps_linux?: TheStepsLinuxSchema;
          steps_windows?: TheStepsWindowsSchema;
          show_output?: TheShowOutputSchema;
          foreach?: TheForeachSchema;
          parallel?: TheParallelSchema;
          [k: string]: unknown | undefined;
        })
      | undefined
    )
  | undefined;
export type ParallelRequiresForeachToBeTrue =
  | {
      [k: string]: unknown | undefined;
    }
  | {
      foreach: true;
      [k: string]: unknown | undefined;
    };
export type TheStepsSchema = TheItemsSchema[];
/**
 * steps_windows and steps_linux can be used to run different steps on the respective platforms.
 */
export type TheStepsLinuxSchema = TheItemsSchema[];
/**
 * steps_windows and steps_linux can be used to run different steps on the respective platforms.
 */
export type TheStepsWindowsSchema = TheItemsSchema[];
/**
 * All output is hidden by default. Setting show_output will display the command being executed and its output.
 */
export type TheShowOutputSchema = boolean;
/**
 * Scripts can be ran for each addons. Inside prebuild the script will be ran for each addon that HEMTT will build, including addons that will be skipped if they are already built. Inside postbuild and releasebuild only addons that were successfully built with be used, excluding addons that were skipped for being up to date.
 */
export type TheForeachSchema = boolean;
/**
 * Requires foreach to be true. If a script is thread safe parallel can be used to process multiple addons at a time.
 */
export type TheParallelSchema = boolean;

/**
 * The hemtt.json or hemtt.toml file is used to configure your HEMTT Project. All examples are done using JSON, but both files support every feature of HEMTT. hemtt.toml will be used if both files are present.
 */
export interface TheRootSchema {
  name: TheNameSchema;
  prefix: ThePrefixSchema;
  author: TheAuthorSchema;
  version?: TheVersionSchema;
  files?: TheFilesSchema;
  include?: TheIncludeSchema;
  exclude?: TheExcludeSchema;
  optionals?: TheOptionalsSchema;
  folder_optionals?: TheFolderOptionalsSchema;
  skip?: TheSkipSchema;
  headerexts?: TheHeaderextsSchema;
  modname?: TheModnameSchema;
  keyname?: TheKeynameSchema;
  signame?: TheSignameSchema;
  sigversion?: TheSigversionSchema;
  reuse_private_key?: TheReusePrivateKeySchema;
  postbuild?: ThePostbuildSchema;
  prebuild?: ThePrebuildSchema;
  releasebuild?: TheReleasebuildSchema;
  scripts?: TheScriptsSchema;
  [k: string]: unknown | undefined;
}
export interface TheScriptsSchema {
  [k: string]: TheSchema | undefined;
}
