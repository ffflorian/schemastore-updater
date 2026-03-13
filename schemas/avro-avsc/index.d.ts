/* eslint-disable */

/**
 * Json-Schema definition for Avro AVSC files.
 */
export type AvroSchemaDefinition = AvroSchema;
/**
 * Root Schema
 */
export type AvroSchema = AvroTypes;
/**
 * Allowed Avro types
 */
export type AvroTypes =
  | PrimitiveType
  | PrimitiveTypeWithMetadata
  | CustomType
  | Record
  | Enum
  | Array
  | Map
  | Fixed
  | Union;
/**
 * Basic type primitives.
 */
export type PrimitiveType = 'null' | 'boolean' | 'int' | 'long' | 'float' | 'double' | 'bytes' | 'string';
/**
 * Reference to a ComplexType
 */
export type CustomType = string;
export type Name = string;
export type Namespace = string;
/**
 * A Union of types
 *
 * @minItems 1
 */
export type Union = [AvroSchema, ...AvroSchema[]];

/**
 * A primitive type with metadata attached.
 */
export interface PrimitiveTypeWithMetadata {
  type: PrimitiveType;
  [k: string]: unknown | undefined;
}
/**
 * A Record
 */
export interface Record {
  type: 'record';
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  fields: Field[];
  [k: string]: unknown | undefined;
}
/**
 * A field within a Record
 */
export interface Field {
  name: Name;
  type: AvroTypes;
  doc?: string;
  default?: unknown;
  order?: 'ascending' | 'descending' | 'ignore';
  aliases?: Name[];
  [k: string]: unknown | undefined;
}
/**
 * An enumeration
 */
export interface Enum {
  type: 'enum';
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  symbols: Name[];
  [k: string]: unknown | undefined;
}
/**
 * An array
 */
export interface Array {
  type: 'array';
  name?: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  items: AvroTypes;
  [k: string]: unknown | undefined;
}
/**
 * A map of values
 */
export interface Map {
  type: 'map';
  name?: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  values: AvroTypes;
  [k: string]: unknown | undefined;
}
/**
 * A fixed sized array of bytes
 */
export interface Fixed {
  type: 'fixed';
  name: Name;
  namespace?: Namespace;
  doc?: string;
  aliases?: Name[];
  size: number;
  [k: string]: unknown | undefined;
}
