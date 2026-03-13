/* eslint-disable */

export interface HttpsJsonSchemastoreOrgPterodactylJson {
  /**
   * A comment to ignore
   */
  _comment?: string;
  meta?: {
    [k: string]: unknown | undefined;
  };
  exported_at?: string;
  /**
   * The egg's name
   */
  name?: string;
  /**
   * The egg's author
   */
  author?: string;
  /**
   * The egg's description
   */
  description?: string;
  /**
   * A list of features to use
   */
  features?: string[];
  /**
   * Object containing key-value pairs of a pretty Docker image name and its URL
   */
  docker_images?: {
    [k: string]: unknown | undefined;
  };
  file_denylist?: string[];
  /**
   * Command to run on startup
   */
  startup?: string;
  /**
   * Object to store configuration
   */
  config?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A list of possible scripts to execute
   */
  scripts?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
     */
    [k: string]: {
      /**
       * Container to run script in
       */
      container?: string;
      /**
       * Entrypoint of script
       */
      entrypoint?: string;
      [k: string]: unknown | undefined;
    };
  };
  /**
   * Object of variables that can be used to change the startup command
   */
  variables?: {
    /**
     * Name of the variable.
     */
    name?: string;
    /**
     * Description of the variable.
     */
    description?: string;
    /**
     * The environment variable that corresponds to this variable. This can be referenced in the startup command.
     */
    env_variable?: string;
    /**
     * Default value of the variable.
     */
    default_value?: string;
    /**
     * Setting to true allows a user to view the field on the front-end, as well as the assigned value of that variable. They will be able to see it replaced in their startup command.
     */
    user_viewable?: boolean;
    /**
     * Set to true if the variable is editable by the user
     */
    user_editable?: boolean;
    /**
     * Rules to validate the variable against.
     */
    rules?: string;
    field_type?: string;
  }[];
}
