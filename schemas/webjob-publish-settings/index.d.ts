/* eslint-disable */

export type JSONSchemaForAzureWebjobsConfigurationFiles = Scheduled | NotScheduled;

export interface Scheduled {
  /**
   * Determines the run mode of the Azure Webjob.
   *
   *  Triggered: manually triggered
   *  Scheduled: runs on a specific schedule
   *  Continuous: runs all the time
   */
  runMode: 'Scheduled';
  [k: string]: unknown | undefined;
}
export interface NotScheduled {
  /**
   * Determines the run mode of the Azure Webjob.
   *
   *  Triggered: manually triggered
   *  Scheduled: runs on a specific schedule
   *  Continuous: runs all the time
   */
  runMode: 'Continuous' | 'OnDemand';
  [k: string]: unknown | undefined;
}
