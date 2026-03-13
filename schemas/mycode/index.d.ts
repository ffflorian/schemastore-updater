/* eslint-disable */

export type Classification = 'MyCode' | 'LibraryCode' | 'UnrelatedCode';
export type Includes = string[];

export interface JSONSchemaForMycodeJsFiles {
  /**
   * Script that is executed by passing a string to the host-provided eval function.
   */
  Eval?: Classification & string;
  /**
   * Script that is executed by passing a string to the 'Function' constructor.
   */
  Function?: Classification & string;
  /**
   * Script that is executed by passing a string to the 'setTimeout', 'setImmediate', or 'setInterval' functions.
   */
  ScriptBlock?: Classification & string;
  /**
   * An array of urls or files that are classified as 'MyCode'.
   */
  MyCode?: Includes;
  /**
   * An array of urls or files that are classified as 'LibraryCode'.
   */
  Libraries?: Includes;
  /**
   * An array of urls or files that are classified as 'UnrelatedCode'.
   */
  Unrelated?: Includes;
  [k: string]: unknown | undefined;
}
