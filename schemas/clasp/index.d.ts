/* eslint-disable */

/**
 * A file
 * https://github.com/google/clasp#filepushorder-optional
 */
export type File = string;

export interface GoogleAppsScriptConfigSchema {
  /**
   * An ID of the current Google Apps Script project
   * https://github.com/google/clasp#scriptid-required
   */
  scriptId: string;
  /**
   * A root directory path of the current Google Apps Script project
   * https://github.com/google/clasp#rootdir-optional
   */
  rootDir?: string;
  /**
   * An ID for a Google Cloud Platform project linked to the current Google Apps Script project
   * https://github.com/google/clasp#projectid-optional
   */
  projectId?: string;
  /**
   * An extension for local files of the current Google Apps Script project
   * https://github.com/google/clasp#filepushorder-optional
   */
  fileExtension?: string;
  /**
   * Files pushed first of the current Google Apps Script project
   * https://github.com/google/clasp#filepushorder-optional
   */
  filePushOrder?: File[];
  [k: string]: unknown | undefined;
}
