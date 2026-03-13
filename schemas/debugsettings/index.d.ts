/* eslint-disable */

export type Profile = Content & Profile1;
export type Profile1 =
  | {
      /**
       * An absolute path to the to the executable.
       */
      executablePath?: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * The name of the command to call.
       */
      commandName?: string;
      [k: string]: unknown | undefined;
    };

export interface JSONSchemaForTheASPNETDebugSettingsJsonFiles {
  /**
   * A list of debug profiles
   */
  profiles?: Profile[];
  [k: string]: unknown | undefined;
}
export interface Content {
  /**
   * The name of the debug profile
   */
  name?: string;
  /**
   * The arguments to pass to the command.
   */
  commandLineArgs?: string;
  /**
   * Sets the working directory of the command.
   */
  workingDirectory?: string;
  /**
   * Set to true if the browser should be launched.
   */
  launchBrowser?: boolean;
  /**
   * The relative URL to launch in the browser.
   */
  launchUrl?: string;
  /**
   * Set the environment variables as key/value pairs.
   */
  environmentVariables?: {
    [k: string]: string | undefined;
  };
  /**
   * Sets the version of the SDK.
   */
  sdkVersion?: string;
  [k: string]: unknown | undefined;
}
