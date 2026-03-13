/* eslint-disable */

/**
 * plagiarize.yaml configuration schema
 */
export interface PlagiarizeConfiguration {
  /**
   * Configuration for strings, files, and file paths to replace in target file
   */
  repo: {
    /**
     * Git url of project to plagiarize
     */
    url: string;
    /**
     * Branch, tag, or commit to checkout from project to be plagiarized
     */
    checkout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Strings to find in target project and be replaced with plagiarized project's values
   */
  strings: {
    project: string;
    [k: string]: (string | number | boolean) | undefined;
  };
  /**
   * Variables available to be used for finding and replacing by variable name. For example `$var_name: hello` would replace string '$var_name' with 'hello' in target project
   */
  vars?: {
    [k: string]: (string | number | boolean) | undefined;
  };
  [k: string]: unknown | undefined;
}
