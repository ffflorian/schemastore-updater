/* eslint-disable */

export type SectionMap =
  | {
      url?: string;
      [k: string]: unknown | undefined;
    }
  | {
      map?: JSONSchemaForTheSourceMapsV3;
      [k: string]: unknown | undefined;
    };

export interface JSONSchemaForTheSourceMapsV3 {
  /**
   *  File version (always the first entry in the object) and must be a positive integer.
   */
  version: number;
  /**
   * An optional name of the generated code that this source map is associated with.
   */
  file?: string;
  /**
   *  An optional source root, useful for relocating source files on a server or removing repeated values in the 'sources' entry.  This value is prepended to the individual entries in the 'source' field.
   */
  sourceRoot?: string;
  /**
   * A list of original sources used by the 'mappings' entry.
   */
  sources?: string[];
  /**
   * An optional list of source content, useful when the 'source' can�t be hosted. The contents are listed in the same order as the sources in line 5. 'null' may be used if some original sources should be retrieved by name.
   */
  sourcesContent?: (string | null)[];
  /**
   * A list of symbol names used by the 'mappings' entry.
   */
  names?: string[];
  /**
   * A string with the encoded mapping data.
   */
  mappings?: string;
  /**
   * @minItems 1
   */
  sections?: [
    SectionMap & {
      offset?: {
        line?: number;
        column?: number;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    },
    ...(SectionMap & {
      offset?: {
        line?: number;
        column?: number;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    })[]
  ];
  /**
   * Any property starting with 'x_' is valid.
   *
   * This interface was referenced by `JSONSchemaForTheSourceMapsV3`'s JSON-Schema definition
   * via the `patternProperty` "^x_".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}
