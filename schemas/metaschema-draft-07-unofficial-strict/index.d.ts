/* eslint-disable */

/**
 * A comment of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html#id3
 */
export type CommentProperty = string;
/**
 * A reference of the current property or definition
 * https://json-schema.org/understanding-json-schema/structuring.html#ref
 */
export type RefProperty = string;
/**
 * A type of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/type.html
 */
export type TypeProperty = 'number' | 'integer' | 'null' | 'array' | 'object' | 'boolean' | 'string';
/**
 * A minimum of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/numeric.html?highlight=minimum#range
 */
export type MinimumProperty = number;
/**
 * A maximum of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/numeric.html?highlight=minimum#range
 */
export type MaximumProperty = number;
/**
 * An exclusive minimum of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/numeric.html?highlight=minimum#range
 */
export type ExclusiveMinimumProperty = number;
/**
 * An exclusive maximum of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/numeric.html?highlight=minimum#range
 */
export type ExclusiveMaximumProperty = number;
/**
 * A multiple of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/numeric.html?highlight=minimum#multiples
 */
export type MultipleOfProperty = number;
/**
 * A minimum length of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/string.html?highlight=minlength#length
 */
export type MinLengthProperty = number;
/**
 * A maximum length of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/string.html?highlight=minlength#length
 */
export type MaxLengthProperty = number;
/**
 * A pattern of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/string.html?highlight=minlength#regular-expressions
 */
export type PatternProperty = string;
/**
 * Valid values of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=enum#enumerated-values
 *
 * @minItems 1
 *
 * Items: A valid value of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=enum#enumerated-values
 */
export type EnumProperty = [
  boolean | number | null | number | string,
  ...(boolean | number | null | number | string)[]
];
/**
 * A minimum item count of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#length
 */
export type MinItemsProperty = number;
/**
 * A maximum item count of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#length
 */
export type MaxItemsProperty = number;
/**
 * Whether items of the current property or definition should be unique
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#uniqueness
 */
export type UniqueItemsProperty = boolean;
/**
 * Required sub-properties of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#required-properties
 *
 * @minItems 1
 *
 * Items: A required sub-property of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#required-properties
 */
export type RequiredProperty = [string, ...string[]];
/**
 * A title of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=title#annotations
 */
export type TitleProperty = string;
/**
 * A description of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=title#annotations
 */
export type DescriptionProperty = string;
/**
 * A format of the current property or definition
 * https://json-schema.org/draft/2020-12/draft-bhutton-json-schema-validation-00#rfc.section.7.2.1
 */
export type FormatProperty =
  | 'date'
  | 'time'
  | 'date-time'
  | 'duration'
  | 'regex'
  | 'email'
  | 'idn-email'
  | 'hostname'
  | 'idn-hostname'
  | 'ipv4'
  | 'ipv6'
  | 'json-pointer'
  | 'relative-json-pointer'
  | 'uri'
  | 'uri-reference'
  | 'uri-template'
  | 'uuid';
/**
 * Additional sub-properties of the current property or definition or whether to allow them
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#additional-properties
 */
export type AdditionalPropertiesProperty = false | Entity2;
/**
 * A minimum count of sub-properties of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#size
 */
export type MinPropertiesProperty = number;
/**
 * A maximum count of sub-properties of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#size
 */
export type MaxPropertiesProperty = number;
/**
 * Examples of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
 *
 * Items: An example of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
 */
export type ExamplesProperty = (boolean | number | null | string)[];
/**
 * A requirement to match at least one sub-schema of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#anyof
 *
 * @minItems 2
 */
export type AnyOfProperty = [SubSchemaEntity1, SubSchemaEntity1, ...SubSchemaEntity1[]];
/**
 * A requirement to match at one sub-schema of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#oneof
 *
 * @minItems 2
 */
export type OneOfProperty = [SubSchemaEntity2, SubSchemaEntity2, ...SubSchemaEntity2[]];
/**
 * A requirement to match all sub-schemas of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#allof
 *
 * @minItems 2
 */
export type AllOfProperty = [SubSchemaEntity3, SubSchemaEntity3, ...SubSchemaEntity3[]];

/**
 * A schema
 * https://json-schema.org/understanding-json-schema
 */
export interface HttpsJsonSchemastoreOrgMetaschemaDraft07UnofficialStrictJson {
  /**
   * A schema used to validate this JSON schema
   */
  $schema?: string;
  /**
   * An id of the current property or definition
   * https://json-schema.org/learn/getting-started-step-by-step#create-a-schema-definition
   */
  $id?: string;
  $comment?: CommentProperty;
  $ref?: RefProperty;
  /**
   * Definitions
   */
  $defs?: {
    [k: string]: SubSchemaEntity | undefined;
  };
  /**
   * Definitions
   */
  definitions?: {
    [k: string]: SubSchemaEntity4 | undefined;
  };
  title: TitleProperty;
  description: DescriptionProperty;
  type: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ItemsProperty2;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A definition
 */
export interface SubSchemaEntity {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * Items of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#items
 */
export interface ItemsProperty {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * Sub-properties of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=properties#properties
 */
export interface PropertiesProperty {
  [k: string]: unknown | undefined;
}
/**
 * A sub-property of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=properties#properties
 *
 * This interface was referenced by `PropertiesProperty`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface Entity {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  title: TitleProperty;
  description: DescriptionProperty;
  type: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ItemsProperty1;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  /**
   * A sub-schema should not match of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
   */
  not?: {
    $comment?: CommentProperty;
    $ref?: RefProperty;
    description?: string;
    id?: string;
    type?: TypeProperty;
    minimum?: MinimumProperty;
    maximum?: MaximumProperty;
    exclusiveMinimum?: ExclusiveMinimumProperty;
    exclusiveMaximum?: ExclusiveMaximumProperty;
    multipleOf?: MultipleOfProperty;
    minLength?: MinLengthProperty;
    maxLength?: MaxLengthProperty;
    pattern?: PatternProperty;
    enum?: EnumProperty;
    items?: ItemsProperty;
    minItems?: MinItemsProperty;
    maxItems?: MaxItemsProperty;
    uniqueItems?: UniqueItemsProperty;
    required?: RequiredProperty;
    properties?: PropertiesProperty;
    patternProperties?: PatternPropertiesProperty;
    additionalProperties?: AdditionalPropertiesProperty;
    minProperties?: MinPropertiesProperty;
    maxProperties?: MaxPropertiesProperty;
    /**
     * A constant of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
     */
    const?: boolean | number | null | string;
    /**
     * A default of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
     */
    default?: boolean | number | null | string;
    examples?: ExamplesProperty;
    not?: NotProperty1;
    anyOf?: AnyOfProperty;
    oneOf?: OneOfProperty;
    allOf?: AllOfProperty;
    if?: IfProperty;
    then?: ThenProperty;
    else?: ElseProperty;
    [k: string]: unknown | undefined;
  };
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty1;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * Items of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#items
 */
export interface ItemsProperty1 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * Pattern sub-properties of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#pattern-properties
 */
export interface PatternPropertiesProperty {
  '.'?: Entity1;
  [k: string]: unknown | undefined;
}
/**
 * A pattern sub-property of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#pattern-properties
 */
export interface Entity1 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  title: TitleProperty;
  description: DescriptionProperty;
  type: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ItemsProperty1;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  /**
   * A sub-schema should not match of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
   */
  not?: {
    $comment?: CommentProperty;
    $ref?: RefProperty;
    description?: string;
    id?: string;
    type?: TypeProperty;
    minimum?: MinimumProperty;
    maximum?: MaximumProperty;
    exclusiveMinimum?: ExclusiveMinimumProperty;
    exclusiveMaximum?: ExclusiveMaximumProperty;
    multipleOf?: MultipleOfProperty;
    minLength?: MinLengthProperty;
    maxLength?: MaxLengthProperty;
    pattern?: PatternProperty;
    enum?: EnumProperty;
    items?: ItemsProperty;
    minItems?: MinItemsProperty;
    maxItems?: MaxItemsProperty;
    uniqueItems?: UniqueItemsProperty;
    required?: RequiredProperty;
    properties?: PropertiesProperty;
    patternProperties?: PatternPropertiesProperty;
    additionalProperties?: AdditionalPropertiesProperty;
    minProperties?: MinPropertiesProperty;
    maxProperties?: MaxPropertiesProperty;
    /**
     * A constant of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
     */
    const?: boolean | number | null | string;
    /**
     * A default of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
     */
    default?: boolean | number | null | string;
    examples?: ExamplesProperty;
    not?: NotProperty1;
    anyOf?: AnyOfProperty;
    oneOf?: OneOfProperty;
    allOf?: AllOfProperty;
    if?: IfProperty;
    then?: ThenProperty;
    else?: ElseProperty;
    [k: string]: unknown | undefined;
  };
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty1;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
export interface Entity2 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  title: TitleProperty;
  description: DescriptionProperty;
  type: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ItemsProperty1;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  /**
   * A sub-schema should not match of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
   */
  not?: {
    $comment?: CommentProperty;
    $ref?: RefProperty;
    description?: string;
    id?: string;
    type?: TypeProperty;
    minimum?: MinimumProperty;
    maximum?: MaximumProperty;
    exclusiveMinimum?: ExclusiveMinimumProperty;
    exclusiveMaximum?: ExclusiveMaximumProperty;
    multipleOf?: MultipleOfProperty;
    minLength?: MinLengthProperty;
    maxLength?: MaxLengthProperty;
    pattern?: PatternProperty;
    enum?: EnumProperty;
    items?: ItemsProperty;
    minItems?: MinItemsProperty;
    maxItems?: MaxItemsProperty;
    uniqueItems?: UniqueItemsProperty;
    required?: RequiredProperty;
    properties?: PropertiesProperty;
    patternProperties?: PatternPropertiesProperty;
    additionalProperties?: AdditionalPropertiesProperty;
    minProperties?: MinPropertiesProperty;
    maxProperties?: MaxPropertiesProperty;
    /**
     * A constant of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
     */
    const?: boolean | number | null | string;
    /**
     * A default of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
     */
    default?: boolean | number | null | string;
    examples?: ExamplesProperty;
    not?: NotProperty1;
    anyOf?: AnyOfProperty;
    oneOf?: OneOfProperty;
    allOf?: AllOfProperty;
    if?: IfProperty;
    then?: ThenProperty;
    else?: ElseProperty;
    [k: string]: unknown | undefined;
  };
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty1;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A sub-schema should not match of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
 */
export interface NotProperty1 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A sub-schema of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#anyof
 */
export interface SubSchemaEntity1 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A sub-schema of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#oneof
 */
export interface SubSchemaEntity2 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A sub-schema of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#allof
 */
export interface SubSchemaEntity3 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A conditional header of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 */
export interface IfProperty {
  /**
   * A mapping from sub-property names to conditions of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
   */
  properties: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A mapping from sub-property name to conditions of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface ConditionEntity {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ConditionEntity;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  [k: string]: unknown | undefined;
}
/**
 * A conditional branch of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 */
export interface ThenProperty {
  /**
   * A mapping from sub-property names to requirements of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
   */
  properties: {
    [k: string]: unknown | undefined;
  };
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  [k: string]: unknown | undefined;
}
/**
 * A mapping from sub-property name to requirements of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface RequirementEntity {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  title?: TitleProperty;
  description?: DescriptionProperty;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: RequirementEntity;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  [k: string]: unknown | undefined;
}
/**
 * A conditional else branch of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 */
export interface ElseProperty {
  /**
   * A mapping from sub-property names to requirements of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
   */
  properties: {
    [k: string]: unknown | undefined;
  };
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  [k: string]: unknown | undefined;
}
/**
 * A conditional branch of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
 */
export interface ThenProperty1 {
  /**
   * A mapping from sub-property names to requirements of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/conditionals.html?highlight=condition#if-then-else
   */
  properties: {
    [k: string]: unknown | undefined;
  };
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  [k: string]: unknown | undefined;
}
/**
 * A pattern sub-property of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/object.html?highlight=required#pattern-properties
 *
 * This interface was referenced by `PatternPropertiesProperty`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface Entity3 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  title: TitleProperty;
  description: DescriptionProperty;
  type: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  format?: FormatProperty;
  enum?: EnumProperty;
  items?: ItemsProperty1;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  /**
   * A sub-schema should not match of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
   */
  not?: {
    $comment?: CommentProperty;
    $ref?: RefProperty;
    description?: string;
    id?: string;
    type?: TypeProperty;
    minimum?: MinimumProperty;
    maximum?: MaximumProperty;
    exclusiveMinimum?: ExclusiveMinimumProperty;
    exclusiveMaximum?: ExclusiveMaximumProperty;
    multipleOf?: MultipleOfProperty;
    minLength?: MinLengthProperty;
    maxLength?: MaxLengthProperty;
    pattern?: PatternProperty;
    enum?: EnumProperty;
    items?: ItemsProperty;
    minItems?: MinItemsProperty;
    maxItems?: MaxItemsProperty;
    uniqueItems?: UniqueItemsProperty;
    required?: RequiredProperty;
    properties?: PropertiesProperty;
    patternProperties?: PatternPropertiesProperty;
    additionalProperties?: AdditionalPropertiesProperty;
    minProperties?: MinPropertiesProperty;
    maxProperties?: MaxPropertiesProperty;
    /**
     * A constant of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
     */
    const?: boolean | number | null | string;
    /**
     * A default of the current property or definition
     * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
     */
    default?: boolean | number | null | string;
    examples?: ExamplesProperty;
    not?: NotProperty1;
    anyOf?: AnyOfProperty;
    oneOf?: OneOfProperty;
    allOf?: AllOfProperty;
    if?: IfProperty;
    then?: ThenProperty;
    else?: ElseProperty;
    [k: string]: unknown | undefined;
  };
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty1;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A definition
 */
export interface SubSchemaEntity4 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * Items of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/array.html?highlight=items#items
 */
export interface ItemsProperty2 {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
/**
 * A sub-schema should not match of the current property or definition
 * https://json-schema.org/understanding-json-schema/reference/combining.html?highlight=anyof#not
 */
export interface NotProperty {
  $comment?: CommentProperty;
  $ref?: RefProperty;
  description?: string;
  id?: string;
  type?: TypeProperty;
  minimum?: MinimumProperty;
  maximum?: MaximumProperty;
  exclusiveMinimum?: ExclusiveMinimumProperty;
  exclusiveMaximum?: ExclusiveMaximumProperty;
  multipleOf?: MultipleOfProperty;
  minLength?: MinLengthProperty;
  maxLength?: MaxLengthProperty;
  pattern?: PatternProperty;
  enum?: EnumProperty;
  items?: ItemsProperty;
  minItems?: MinItemsProperty;
  maxItems?: MaxItemsProperty;
  uniqueItems?: UniqueItemsProperty;
  required?: RequiredProperty;
  properties?: PropertiesProperty;
  patternProperties?: PatternPropertiesProperty;
  additionalProperties?: AdditionalPropertiesProperty;
  minProperties?: MinPropertiesProperty;
  maxProperties?: MaxPropertiesProperty;
  /**
   * A constant of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=const#constant-values
   */
  const?: boolean | number | null | string;
  /**
   * A default of the current property or definition
   * https://json-schema.org/understanding-json-schema/reference/generic.html?highlight=default#annotations
   */
  default?: boolean | number | null | string;
  examples?: ExamplesProperty;
  not?: NotProperty1;
  anyOf?: AnyOfProperty;
  oneOf?: OneOfProperty;
  allOf?: AllOfProperty;
  if?: IfProperty;
  then?: ThenProperty;
  else?: ElseProperty;
  [k: string]: unknown | undefined;
}
