/* eslint-disable */

/**
 * The Ultimate Script Language for monday.com - © 2024 MakeITSimple
 */
export interface TrueScriptForTscriptFiles {
  /**
   * The minimal version to run this TrueScript. Format: "major.minor.patch"
   */
  truescript_version: string;
  /**
   * Unique ID of the TrueScript (UUID4)
   */
  id: string;
  /**
   * Short description of the TrueScript
   */
  name: string;
  /**
   * A more detailed description of the TrueScript
   */
  description?: string;
  /**
   * Intended environment to run the TrueScript
   */
  environment: 'production' | 'staging' | 'development';
  /**
   * The item's ID to execute the TrueScript upon
   */
  item_id: number;
  /**
   * Parameters that will be passed to the TrueScript
   */
  params?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Free tags for any classification
   */
  tags?: string[];
  /**
   * The expected result when running this TrueScript
   */
  result?: {
    /**
     * The result of the execution of the TrueScript
     */
    result: 'success' | 'error';
    /**
     * The error info (when 'result=error')
     */
    error?: {
      additionalProperties?: unknown;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * The TrueScript itself
   */
  script: string | string[];
}
