/* eslint-disable */

export type HttpsJsonSchemastoreOrgAwsCdkAppconfigFeatureflags100Json = FlagSetDefinition;
export type FlagSchemaVersions = '1';
export type CustomerDefinedName = string;
export type CustomerDefinedDescription = string;
export type ElementConstraints = NumberConstraints | StringConstraints;
export type AttributeValue = string | number | boolean | (string | number)[];

export interface FlagSetDefinition {
  version: FlagSchemaVersions;
  flags: FlagDefinitions;
  values: FlagValues;
}
export interface FlagDefinitions {
  [k: string]: FlagDefinition;
}
/**
 * This interface was referenced by `FlagDefinitions`'s JSON-Schema definition
 * via the `patternProperty` "^[^\n]{1,64}$".
 */
export interface FlagDefinition {
  name?: CustomerDefinedName;
  description?: CustomerDefinedDescription;
  _createdAt?: string;
  _updatedAt?: string;
  _deprecation?: {
    status?: 'planned';
    date?: string;
  };
  attributes: AttributeDefinitions;
}
export interface AttributeDefinitions {
  [k: string]: AttributeDefinition;
}
/**
 * This interface was referenced by `AttributeDefinitions`'s JSON-Schema definition
 * via the `patternProperty` "^[^\n]{1,64}$".
 */
export interface AttributeDefinition {
  description?: CustomerDefinedDescription;
  constraints: NumberConstraints | StringConstraints | ArrayConstraints | BoolConstraints;
}
export interface NumberConstraints {
  type: 'number';
  required?: boolean;
  minimum?: number;
  maximum?: number;
}
export interface StringConstraints {
  type: 'string';
  required?: boolean;
  pattern?: string;
  /**
   * @maxItems 100
   */
  enum?: (string | number)[];
}
export interface ArrayConstraints {
  type: 'array';
  required?: boolean;
  elements?: ElementConstraints;
}
export interface BoolConstraints {
  type: 'boolean';
  required?: boolean;
}
export interface FlagValues {
  [k: string]: FlagValue;
}
/**
 * This interface was referenced by `FlagValues`'s JSON-Schema definition
 * via the `patternProperty` "^[^\n]{1,64}$".
 */
export interface FlagValue {
  enabled: boolean;
  _createdAt?: string;
  _updatedAt?: string;
  /**
   * @maxItems 32
   */
  _variants: Variant[];
}
export interface Variant {
  enabled: boolean;
  name: CustomerDefinedName;
  rule?: string;
  attributeValues?: AttributeValue;
}
