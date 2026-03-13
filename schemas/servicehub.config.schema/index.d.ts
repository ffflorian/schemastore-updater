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
      [k: string]: string;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
