/* eslint-disable */

export type File = string | null | FileFormat;

export interface HttpsJsonSchemastoreOrgLegoJson {
  /**
   * An array of your app's blocks.
   */
  blocks: {
    /**
     * The name of the block type
     */
    type: string;
    /**
     * Path relative to root where the block will be stored
     */
    path: string;
    /**
     * Is this a file? or a folder? False by default.
     */
    isFile?: boolean;
    /**
     * Files making up the block
     */
    files?: File[];
    file?: File;
    [k: string]: unknown | undefined;
  }[];
  /**
   * An object mapping file objects to strings
   */
  fileFormats?: {
    [k: string]: FileFormat1;
  };
  [k: string]: unknown | undefined;
}
/**
 * This object or string represents the file format
 */
export interface FileFormat {
  /**
   * Name of block file
   */
  name: string;
  /**
   * Path to file template
   */
  template?: string;
  [k: string]: unknown | undefined;
}
/**
 * This object represents a file format
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface FileFormat1 {
  /**
   * Name of block file
   */
  name: string;
  /**
   * Path to file template
   */
  template?: string;
  [k: string]: unknown | undefined;
}
