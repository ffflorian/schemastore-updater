/* eslint-disable */

export type JSONSchemaForAzureWebjobsConfigurationFiles = Scheduled | NotScheduled;
export type Scheduled = Shared & {
  /**
   * Determines the run mode of the Azure Webjob.
   *
   *  Triggered: manually triggered
   *  Scheduled: runs on a specific schedule
   *  Continuous: runs all the time
   */
  runMode?: 'Scheduled';
  [k: string]: unknown | undefined;
};
export type NotScheduled = Shared & {
  /**
   * Determines the run mode of the Azure Webjob.
   *
   *  Triggered: manually triggered
   *  Scheduled: runs on a specific schedule
   *  Continuous: runs all the time
   */
  runMode: 'Continuous' | 'OnDemand';
  [k: string]: unknown | undefined;
};

export interface Shared {
  /**
   * The name of the Azure Webjob.
   */
  webJobName?: string;
  /**
   * The start time of a scheduled job. Example. 2014-06-11T00:00:00-08:00
   */
  startTime?: string;
  /**
   * The end time of a scheduled job. Example. 2014-06-12T00:00:00-08:00
   */
  endTime?: string;
  /**
   * The frequency metric used with the 'interval' property.
   */
  jobRecurrenceFrequency?: 'Second' | 'Minute' | 'Hour' | 'Day' | 'Week' | 'Month';
  /**
   * The interval of how often the Azure Webjob should run. Use it with the 'jobRecurrenceFrequency' property.
   */
  interval?: number;
  [k: string]: unknown | undefined;
}
