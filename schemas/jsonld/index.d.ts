/* eslint-disable */

export type SchemaForJSONLD = Context &
  Graph &
  Common &
  (
    | {
        [k: string]: unknown | undefined;
      }
    | unknown[]
  );

export interface Context {
  /**
   * Used to define the short-hand names that are used throughout a JSON-LD document.
   */
  '@context'?:
    | {
        [k: string]: unknown | undefined;
      }
    | string
    | unknown[]
    | null;
  [k: string]: unknown | undefined;
}
export interface Graph {
  /**
   * Used to express a graph.
   */
  '@graph'?: Common[] | Common1;
  [k: string]: unknown | undefined;
}
export interface Common {
  /**
   * Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.
   */
  '@id'?: string;
  /**
   * Used to specify the data that is associated with a particular property in the graph.
   */
  '@value'?: string | boolean | number | null;
  /**
   * Used to specify the language for a particular string value or the default language of a JSON-LD document.
   */
  '@language'?: string | null;
  /**
   * Used to set the data type of a node or typed value.
   */
  '@type'?: string | null | unknown[];
  /**
   * Used to set the default container type for a term.
   */
  '@container'?: ('@language' | '@list' | '@index' | '@set') | null;
  /**
   * Used to express an ordered set of data.
   */
  '@list'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express an unordered set of data and to ensure that values are always represented as arrays.
   */
  '@set'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express reverse properties.
   */
  '@reverse'?:
    | string
    | {
        [k: string]: Common | undefined;
      }
    | null;
  /**
   * Used to set the base IRI against which relative IRIs are resolved
   */
  '@base'?: string | null;
  /**
   * Used to expand properties and values in @type with a common prefix IRI
   */
  '@vocab'?: string | null;
  [k: string]: Common | undefined;
}
export interface Common1 {
  /**
   * Used to uniquely identify things that are being described in the document with IRIs or blank node identifiers.
   */
  '@id'?: string;
  /**
   * Used to specify the data that is associated with a particular property in the graph.
   */
  '@value'?: string | boolean | number | null;
  /**
   * Used to specify the language for a particular string value or the default language of a JSON-LD document.
   */
  '@language'?: string | null;
  /**
   * Used to set the data type of a node or typed value.
   */
  '@type'?: string | null | unknown[];
  /**
   * Used to set the default container type for a term.
   */
  '@container'?: ('@language' | '@list' | '@index' | '@set') | null;
  /**
   * Used to express an ordered set of data.
   */
  '@list'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express an unordered set of data and to ensure that values are always represented as arrays.
   */
  '@set'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to express reverse properties.
   */
  '@reverse'?:
    | string
    | {
        [k: string]: Common | undefined;
      }
    | null;
  /**
   * Used to set the base IRI against which relative IRIs are resolved
   */
  '@base'?: string | null;
  /**
   * Used to expand properties and values in @type with a common prefix IRI
   */
  '@vocab'?: string | null;
  [k: string]: Common | undefined;
}
