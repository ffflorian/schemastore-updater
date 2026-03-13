/* eslint-disable */

/**
 * Path to your tsconfig file.
 */
export type TsconfigPath = string;
export type Exports =
  | string
  | string[]
  | {
      [k: string]: (string | string[]) | undefined;
    };

export interface HttpsJsonSchemastoreOrgOmletrcJson {
  /**
   * The schema that the configuration file uses.
   */
  $schema?: 'https://www.schemastore.org/omletrc.json';
  /**
   * Filenames or glob patterns that will be included in the scan.
   *
   * @minItems 1
   */
  include?: [string, ...string[]];
  /**
   * Filenames or glob patterns that will be excluded from the scan.
   */
  ignore?: string[];
  tsconfigPath?: TsconfigPath;
  aliases?: Aliases;
  exports?: Exports;
  /**
   * Package-specific configurations if you have a monorepo.
   */
  workspaces?: {
    /**
     * Package-specific configuration.
     */
    [k: string]:
      | {
          tsconfigPath?: TsconfigPath;
          aliases?: Aliases;
          exports?: Exports;
        }
      | undefined;
  };
  hookScript?: string;
}
export interface Aliases {
  [k: string]: (string | string[]) | undefined;
}
