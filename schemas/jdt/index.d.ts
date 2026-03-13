/* eslint-disable */

/**
 * Use JSONPath syntax to navigate to the node where the transform should be applied.
 */
export type JdtPath = string;
/**
 * The transformation value that should be applied.
 */
export type JdtValue = string;

export interface JSONSchemaForJSONDocumentTransforms {
  '@jdt.rename'?:
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      }
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      }[];
  /**
   * Replaces the current node with the given value.
   */
  '@jdt.replace'?:
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      }[]
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      };
  /**
   * Removes the node with the given name from the current level.
   */
  '@jdt.remove'?:
    | (
        | boolean
        | number
        | null
        | {
            [k: string]: unknown | undefined;
          }
        | string
      )[]
    | boolean
    | {
        '@jdt.path'?: JdtPath;
        [k: string]: unknown | undefined;
      }
    | string;
  /**
   * Merges the current node value with the given object.
   */
  '@jdt.merge'?:
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      }
    | {
        '@jdt.path'?: JdtPath;
        '@jdt.value'?: JdtValue;
        [k: string]: unknown | undefined;
      }[];
  [k: string]: JSONSchemaForJSONDocumentTransforms;
}
