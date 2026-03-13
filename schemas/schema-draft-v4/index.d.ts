/* eslint-disable */

export type PositiveInteger = number;
export type PositiveIntegerDefault0 = PositiveInteger;
/**
 * @minItems 1
 */
export type SchemaArray = [HttpsJsonSchemastoreOrgSchemaDraftV4Json, ...HttpsJsonSchemastoreOrgSchemaDraftV4Json[]];
/**
 * @minItems 1
 */
export type StringArray = [string, ...string[]];
export type SimpleTypes = 'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string';

/**
 * Modified JSON Schema draft v4 that includes the optional '$ref' and 'format'
 */
export interface HttpsJsonSchemastoreOrgSchemaDraftV4Json {
  $schema?: string;
  $ref?: string;
  id?: string;
  format?: string;
  title?: string;
  description?: string;
  default?: unknown;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: PositiveInteger;
  minLength?: PositiveIntegerDefault0;
  pattern?: string;
  additionalItems?: boolean | HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  items?: HttpsJsonSchemastoreOrgSchemaDraftV4Json | SchemaArray;
  maxItems?: PositiveInteger;
  minItems?: PositiveIntegerDefault0;
  uniqueItems?: boolean;
  maxProperties?: PositiveInteger;
  minProperties?: PositiveIntegerDefault0;
  required?: StringArray;
  additionalProperties?: boolean | HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  definitions?: {
    [k: string]: HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  };
  properties?: {
    [k: string]: HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  };
  patternProperties?: {
    [k: string]: HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  };
  dependencies?: {
    [k: string]: (HttpsJsonSchemastoreOrgSchemaDraftV4Json | StringArray) | undefined;
  };
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?: SimpleTypes | [SimpleTypes, ...SimpleTypes[]];
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: HttpsJsonSchemastoreOrgSchemaDraftV4Json;
  [k: string]: unknown | undefined;
}
