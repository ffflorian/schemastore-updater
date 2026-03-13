/* eslint-disable */

export interface JSONSchemaForTypingsTypeScriptDefinitionsManager {
  /**
   * The entry point to the definition (canonical to `"main"` in NPM's `package.json`).
   */
  main?: string;
  /**
   * A string, or map of paths, to override during resolution. See spec: https://github.com/defunctzombie/package-browser-field-spec
   */
  browser?:
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * The semver range this definition is typed for
   */
  version?: string;
  /**
   * Homepage url of the source package
   */
  homepage?: string;
  /**
   * Map of resolutions to install
   */
  resolution?:
    | {
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Used as an alternative or to complement `main`, specify an array of files that are exported but aren't already part of the resolution from `main`.
   */
  files?: string[];
  /**
   * Denote that this definition _must_ be installed as global.
   */
  global?: boolean;
  /**
   * A message to emit to users after typings installation.
   */
  postmessage?: string;
  /**
   * The name of the definition
   */
  name?: string;
  /**
   * A map of dependencies required by the project.
   */
  dependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * A map of dependencies required by the project during development.
   */
  devDependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * A map of dependencies expected in the parent project for this dependency to work.
   */
  peerDependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * A map of global dependencies required by the project.
   */
  globalDependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * A map of global dependencies required by the project during development.
   */
  globalDevDependencies?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
