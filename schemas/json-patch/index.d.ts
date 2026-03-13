/* eslint-disable */

/**
 * A JSON Pointer path.
 */
export type Path = string;
export type JSONSchemaForJSONPatchFiles = (
  | {
      path: Path;
      /**
       * The operation to perform.
       */
      op: 'add' | 'replace' | 'test';
      /**
       * The value to add, replace or test.
       */
      value: {
        [k: string]: unknown | undefined;
      };
    }
  | {
      path: Path;
      /**
       * The operation to perform.
       */
      op: 'remove';
    }
  | {
      path: Path;
      /**
       * The operation to perform.
       */
      op: 'move' | 'copy';
      /**
       * A JSON Pointer path.
       */
      from: string;
    }
)[];
