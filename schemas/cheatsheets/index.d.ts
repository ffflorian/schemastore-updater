/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface CheatsheetsConfigFileSchema {
  /**
   * The cheat paths
   * https://github.com/cheat/cheat#cheatpaths
   */
  cheatpaths?: {
    /**
     * The name
     * https://github.com/cheat/cheat#cheatpaths
     */
    name?: string;
    /**
     * The path
     * https://github.com/cheat/cheat#cheatpaths
     */
    path?: string;
    /**
     * The tags
     * https://github.com/cheat/cheat#cheatpaths
     */
    tags?: string[];
    /**
     * Allow/restrict creating cheatsheets
     * https://github.com/cheat/cheat#cheatpaths
     */
    readonly?: boolean;
  }[];
}
