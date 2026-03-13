/* eslint-disable */

/**
 * Globally unique program ID, special characters are not allowed
 */
export type ProgramID = string;
/**
 * A description of the program that may be used by user interfaces
 */
export type ProgramDescription = string;
/**
 * Disable the auto-start of the script on system boot
 */
export type AutoStartDisabled = boolean;
/**
 * The scope (location) to which the script belongs. Leave blank for global scope
 */
export type ProgramScope = string;
/**
 * The language the program is written in
 */
export type ProgrammingLanguage = 'groovy' | 'javascript' | 'python';
/**
 * The file name of the main entry point of the program. Defaults to index.<extension>
 */
export type ProgramFileName = string;

/**
 * A MUSE program descriptor file
 */
export interface HttpsJsonSchemastoreOrgAmxMuseJson {
  id: ProgramID;
  description?: ProgramDescription;
  disabled?: AutoStartDisabled;
  envvars?: EnvironmentVariables;
  scope?: ProgramScope;
  provider: ProgrammingLanguage;
  script?: ProgramFileName;
  [k: string]: unknown | undefined;
}
/**
 * Name/Value pairs that can be used to set configuration of a program
 */
export interface EnvironmentVariables {
  [k: string]: string | undefined;
}
