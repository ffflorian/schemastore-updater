/* eslint-disable */

/**
 * Syntactic units in unist syntax trees are called nodes, and implement the Node interface.
 */
export interface JSONSchemaForUnistSyntaxTrees {
  /**
   * The type field is a non-empty string representing the variant of a node. This field can be used to determine the type a node implements.
   */
  type: string;
  position?: Position;
  /**
   * The children field is a list representing the children of a node.
   */
  children?: JSONSchemaForUnistSyntaxTrees[];
  /**
   * The data field represents information from the ecosystem. The value of the data field implements the Data interface.
   */
  data?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The value field can contain any value.
   */
  value?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A position represents the location of a node in a source file. The value of the position field implements the Position interface. The position field must not be present if a node is generated.
 */
export interface Position {
  end: Point;
  start: Point1;
}
/**
 * The end field of Position represents the place of the first character after the parsed source region, whether it exists or not.
 */
export interface Point {
  /**
   * The column field (1-indexed integer) represents a column in a source file.
   */
  column: number;
  /**
   * The line field (1-indexed integer) represents a line in a source file.
   */
  line: number;
  /**
   * The offset field (0-indexed integer) represents a character in a source file.
   */
  offset?: number;
}
/**
 * The start field of Position represents the place of the first character of the parsed source region.
 */
export interface Point1 {
  /**
   * The column field (1-indexed integer) represents a column in a source file.
   */
  column: number;
  /**
   * The line field (1-indexed integer) represents a line in a source file.
   */
  line: number;
  /**
   * The offset field (0-indexed integer) represents a character in a source file.
   */
  offset?: number;
}
