/* eslint-disable */

/**
 * Defaults to true. Set to false to disable.
 */
export type InstallNpmDependenciesWhenOpeningTheProject = boolean;
/**
 * If not provided, a command may be inferred based on the project files (e.g. running `npm start`).
 */
export type ExecuteACustomCommandWhenOpeningTheProject = boolean | string;

/**
 * https://developer.stackblitz.com/docs/platform/project-config/
 */
export interface WebContainerProjectConfiguration {
  installDependencies?: InstallNpmDependenciesWhenOpeningTheProject;
  startCommand?: ExecuteACustomCommandWhenOpeningTheProject;
  env?: ExposeEnvironmentVariablesToTheTerminal;
}
export interface ExposeEnvironmentVariablesToTheTerminal {
  [k: string]: (boolean | string | number) | undefined;
}
