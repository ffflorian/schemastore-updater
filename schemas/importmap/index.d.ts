/* eslint-disable */

export interface JSONSchemaForImportMapsFiles {
  /**
   * The Imports field
   */
  imports?: {
    [k: string]: string | undefined;
  };
  /**
   * The Scopes field
   */
  scopes?: {
    [k: string]:
      | {
          [k: string]: string | undefined;
        }
      | undefined;
  };
}
