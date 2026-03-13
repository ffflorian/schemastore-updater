/* eslint-disable */

/**
 * A Visual Studio event that a command can be bound to.
 */
export type Vsbindings = string[];

/**
 * Schema for bundleconfig.json files
 */
export interface HttpsJsonSchemastoreOrgCommandsJson {
  /**
   * A list of commands.
   */
  commands?: {
    [k: string]: Commands | undefined;
  };
  /**
   * Specify any Visual Studio event bindings.
   */
  '-vs-binding'?: {
    AfterBuild?: Vsbindings;
    BeforeBuild?: Vsbindings;
    Clean?: Vsbindings;
    ProjectOpen?: Vsbindings;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The friendly name of the command.
 */
export interface Commands {
  /**
   * The name of the executable file name. Example: "cmd.exe".
   */
  fileName: string;
  /**
   * Specify a relative or absolute directory path.
   */
  workingDirectory?: string;
  /**
   * The arguments to pass to the executable file.
   */
  arguments?: string;
  [k: string]: unknown | undefined;
}
