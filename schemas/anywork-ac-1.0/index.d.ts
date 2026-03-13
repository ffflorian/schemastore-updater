/* eslint-disable */

/**
 * AnyWork automation config schema
 */
export type AnyWorkAutomationConfig = {
  [k: string]: unknown | undefined;
} & {
  /**
   * A configuration type
   */
  ctype: string;
  /**
   * A configuration version of configuration
   */
  cversion: number;
  [k: string]: unknown | undefined;
};
