/* eslint-disable */

export interface MicrosoftServiceHubConfiguration {
  /**
   * Specifies the location of the controller executable and activation parameters.
   */
  controller: {
    /**
     * Array of environment variable names. These variables are mixed-up into hash that determines the location service pipe name. The order is significant.
     */
    contextEnvironmentVariables?: string[];
    executable: string;
    args?: string[];
    /**
     * An object with properties like "environment variable name": "value" that describes what environment variables to set for the Hub Controller.
     */
    additionalEnvironmentVariables?: {
      /**
       * The value of the environment variable to set.
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[A-Za-z0-9_/\.]+$".
       */
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  hosts: {
    /**
     * The path to the directory immediately under which are folders that contain *.servicehub.host.json files.
     */
    rootDir: string;
    [k: string]: unknown | undefined;
  };
  services: {
    /**
     * The path to the directory immediately under which are folders that contain *.servicehub.service.json files.
     */
    rootDir: string;
    /**
     * Service names of optional discovery service modules. Controller will use them to locate a service which it cannot find in the services folder.
     */
    discoveryServices?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
