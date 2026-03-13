/* eslint-disable */

/**
 * Used to configure any part of AnyWork automation.
 */
export type AnyWorkAutomationConfigurationSchema = {
  [k: string]: unknown | undefined;
} & {
  /**
   * type of configuration, means who will use this configuration.
   */
  ctype: string;
  /**
   * Version of configuration. The reader will parse configuration based on this.
   */
  cversion: number;
  [k: string]: unknown | undefined;
};
