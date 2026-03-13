/* eslint-disable */

export interface JSONSchemaForAnyGruntTask {
  options?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: (FileFormat | Dynamic) | undefined;
}
export interface FileFormat {
  files?:
    | {
        /**
         * @minItems 1
         */
        [k: string]: ([string, ...string[]] | string) | undefined;
      }
    | Dynamic[];
  [k: string]: unknown | undefined;
}
export interface Dynamic {
  /**
   * Must be set to true to use properties other than 'src' and 'dest'
   */
  expand?: boolean;
  /**
   * All 'src' matches are relative to (but don't include) this path
   */
  cwd?: string;
  /**
   * Destination path prefix.
   */
  dest?: string;
  /**
   * Replace any existing extension with this value in generated 'dest' paths.
   */
  ext?: string;
  /**
   * Used to indicate where the period indicating the extension is located.
   */
  extDot?: 'first' | 'last';
  /**
   * The 'filter' property can help you target files with a greater level of detail
   */
  filter?: 'isFile' | 'isDirectory' | 'isBlockDevice' | 'isCharacterDevice' | 'isSymbolicLink' | 'isFIFO' | 'isSocket';
  /**
   * Remove all path parts from generated 'dest' paths
   */
  flatten?: boolean;
  /**
   * If set, patterns without slashes will be matched against the basename of the path if it contains slashes. For example, 'a?b' would match the path '/xyz/123/acb', but not '/xyz/acb/123'.
   */
  matchBase?: boolean;
  /**
   * If set to 'true' then the operation will include non-matching patterns. Combined with grunt's '--verbose' flag, this option can help debug file path issues.
   */
  nonull?: boolean;
  /**
   * This function is called for each matched 'src' file, (after extension renaming and flattening).
   */
  rename?: string;
  /**
   * Pattern(s) to match, relative to the 'cwd'.
   *
   * @minItems 1
   */
  src: [string, ...string[]];
  [k: string]: unknown | undefined;
}
