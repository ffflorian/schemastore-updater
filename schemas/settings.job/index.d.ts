/* eslint-disable */

export interface JSONSchemaForAzureWebjobSettingsJobFiles {
  /**
   * The graceful shutdown period for an Azure Webjob. The time specified in seconds.
   */
  stopping_wait_time?: number;
  /**
   * Specify if the Webjob should be treated as a singleton. If true, the Webjob will not scale on multiple Azure Website instances like the web application itself.
   */
  is_singleton?: boolean;
  [k: string]: unknown | undefined;
}
