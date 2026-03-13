/* eslint-disable */

/**
 * A slice definition for Ubuntu Chisel tool. For details, see https://github.com/canonical/chisel/tree/main#slice-definitions.
 */
export interface CanonicalChiselSliceDefinition {
  /**
   * The name of the package to use for the slice.
   */
  package?: string;
  /**
   * The name of the archive to use for the slice. Archives are defined in the chisel.yaml file.
   */
  archive?: string;
  /**
   * A list of slices that are a dependency for all slices of this package. Each slice item is formatted as '<slice_name>_<slice_part>'.
   */
  essential?:
    | string[]
    | {
        /**
         * The name of the dependency slice part.
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: {
          /**
           * Only include this dependency on specific architectures.
           */
          arch?: string[];
        } | null;
      };
  /**
   * Slice definitions for this package.
   */
  slices?: {
    /**
     * The name of the slice part.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
     */
    [k: string]: {
      /**
       * The name of the dependency slice part. The slice part is formatted as '<slice_name>_<slice_part>'.
       */
      essential?:
        | string[]
        | {
            /**
             * The name of the dependency slice part.
             *
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^.+$".
             */
            [k: string]: {
              /**
               * Only include this dependency on specific architectures.
               */
              arch?: string[];
            } | null;
          };
      /**
       * A Starlark expression to modify the file contents.
       */
      mutate?: string;
      /**
       * Concise and unopinionated discriminator to describe the slice. No special chars, trailing punctuation, and it must be sentence case.
       */
      hint?: string;
      /**
       * Files to include in the slice. Supports glob patterns.
       */
      contents?: {
        /**
         * Path description.
         *
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: {
          /**
           * Make this file or directory if it does not already exist.
           */
          make?: boolean;
          /**
           * File permissions to use.
           */
          mode?: number;
          /**
           * Copy this file or directory from this location.
           */
          copy?: string;
          /**
           * The contents of the file.
           */
          text?: string;
          /**
           * Make a symlink to this file or directory.
           */
          symlink?: string;
          /**
           * If true, the file is mutable.
           */
          mutable?: boolean;
          /**
           * Only keep this file until this stage.
           */
          until?: '' | 'mutate';
          /**
           * Only include this file on specific architectures.
           */
          arch?: string[];
        } | null;
      };
    };
  };
}
