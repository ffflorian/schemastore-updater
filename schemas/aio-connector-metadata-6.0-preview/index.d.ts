/* eslint-disable */

export type CoreSchemaMetaSchema = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) &
  (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  ) & {
    $id?: string;
    $schema?: string;
    $ref?: string;
    $comment?: string;
    title?: string;
    description?: string;
    default?: unknown;
    readOnly?: boolean;
    writeOnly?: boolean;
    examples?: unknown[];
    multipleOf?: number;
    maximum?: number;
    exclusiveMaximum?: number;
    minimum?: number;
    exclusiveMinimum?: number;
    maxLength?: number;
    minLength?: number & number;
    pattern?: string;
    additionalItems?: CoreSchemaMetaSchema;
    items?: CoreSchemaMetaSchema | SchemaArray;
    maxItems?: number;
    minItems?: number & number;
    uniqueItems?: boolean;
    contains?: CoreSchemaMetaSchema;
    maxProperties?: number;
    minProperties?: number & number;
    required?: StringArray;
    additionalProperties?: CoreSchemaMetaSchema;
    definitions?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    properties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    patternProperties?: {
      [k: string]: CoreSchemaMetaSchema;
    };
    dependencies?: {
      [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
    };
    propertyNames?: CoreSchemaMetaSchema;
    const?: unknown;
    /**
     * @minItems 1
     */
    enum?: [unknown, ...unknown[]];
    type?:
      | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
      | [
          'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
          ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
        ];
    format?: string;
    contentMediaType?: string;
    contentEncoding?: string;
    if?: CoreSchemaMetaSchema;
    then?: CoreSchemaMetaSchema;
    else?: CoreSchemaMetaSchema;
    allOf?: SchemaArray;
    anyOf?: SchemaArray;
    oneOf?: SchemaArray;
    not?: CoreSchemaMetaSchema;
    [k: string]: unknown | undefined;
  } & (
    | {
        $id?: string;
        $schema?: string;
        $ref?: string;
        $comment?: string;
        title?: string;
        description?: string;
        default?: unknown;
        readOnly?: boolean;
        writeOnly?: boolean;
        examples?: unknown[];
        multipleOf?: number;
        maximum?: number;
        exclusiveMaximum?: number;
        minimum?: number;
        exclusiveMinimum?: number;
        maxLength?: number;
        minLength?: number & number;
        pattern?: string;
        additionalItems?: CoreSchemaMetaSchema;
        items?: CoreSchemaMetaSchema | SchemaArray;
        maxItems?: number;
        minItems?: number & number;
        uniqueItems?: boolean;
        contains?: CoreSchemaMetaSchema;
        maxProperties?: number;
        minProperties?: number & number;
        required?: StringArray;
        additionalProperties?: CoreSchemaMetaSchema;
        definitions?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        properties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        patternProperties?: {
          [k: string]: CoreSchemaMetaSchema;
        };
        dependencies?: {
          [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
        };
        propertyNames?: CoreSchemaMetaSchema;
        const?: unknown;
        /**
         * @minItems 1
         */
        enum?: [unknown, ...unknown[]];
        type?:
          | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
          | [
              'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
              ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
            ];
        format?: string;
        contentMediaType?: string;
        contentEncoding?: string;
        if?: CoreSchemaMetaSchema;
        then?: CoreSchemaMetaSchema;
        else?: CoreSchemaMetaSchema;
        allOf?: SchemaArray;
        anyOf?: SchemaArray;
        oneOf?: SchemaArray;
        not?: CoreSchemaMetaSchema;
        [k: string]: unknown | undefined;
      }
    | boolean
  );
/**
 * @minItems 1
 */
export type SchemaArray = [CoreSchemaMetaSchema, ...CoreSchemaMetaSchema[]];
export type StringArray = string[];
/**
 * The JSON schema for the "dataPointConfigurationSchema" field on an event's datapoint.
 */
export type CoreSchemaMetaSchema1 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "eventConfigurationSchema" field on an event.
 */
export type CoreSchemaMetaSchema2 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "datasetConfigurationSchema" field on a dataset.
 */
export type CoreSchemaMetaSchema3 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "dataPointConfigurationSchema" field on a dataset's datapoint.
 */
export type CoreSchemaMetaSchema4 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "managementGroupConfigurationSchema" field on a management group.
 */
export type CoreSchemaMetaSchema5 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "actionConfigurationSchema" field on a management group's action.
 */
export type CoreSchemaMetaSchema6 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);
/**
 * The JSON schema for the "streamConfigurationSchema" field on a stream.
 */
export type CoreSchemaMetaSchema7 = {
  $id?: string;
  $schema?: string;
  $ref?: string;
  $comment?: string;
  title?: string;
  description?: string;
  default?: unknown;
  readOnly?: boolean;
  writeOnly?: boolean;
  examples?: unknown[];
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number & number;
  pattern?: string;
  additionalItems?: CoreSchemaMetaSchema;
  items?: CoreSchemaMetaSchema | SchemaArray;
  maxItems?: number;
  minItems?: number & number;
  uniqueItems?: boolean;
  contains?: CoreSchemaMetaSchema;
  maxProperties?: number;
  minProperties?: number & number;
  required?: StringArray;
  additionalProperties?: CoreSchemaMetaSchema;
  definitions?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  properties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  patternProperties?: {
    [k: string]: CoreSchemaMetaSchema;
  };
  dependencies?: {
    [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
  };
  propertyNames?: CoreSchemaMetaSchema;
  const?: unknown;
  /**
   * @minItems 1
   */
  enum?: [unknown, ...unknown[]];
  type?:
    | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
    | [
        'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
        ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
      ];
  format?: string;
  contentMediaType?: string;
  contentEncoding?: string;
  if?: CoreSchemaMetaSchema;
  then?: CoreSchemaMetaSchema;
  else?: CoreSchemaMetaSchema;
  allOf?: SchemaArray;
  anyOf?: SchemaArray;
  oneOf?: SchemaArray;
  not?: CoreSchemaMetaSchema;
  [k: string]: unknown | undefined;
} & (
  | {
      $id?: string;
      $schema?: string;
      $ref?: string;
      $comment?: string;
      title?: string;
      description?: string;
      default?: unknown;
      readOnly?: boolean;
      writeOnly?: boolean;
      examples?: unknown[];
      multipleOf?: number;
      maximum?: number;
      exclusiveMaximum?: number;
      minimum?: number;
      exclusiveMinimum?: number;
      maxLength?: number;
      minLength?: number & number;
      pattern?: string;
      additionalItems?: CoreSchemaMetaSchema;
      items?: CoreSchemaMetaSchema | SchemaArray;
      maxItems?: number;
      minItems?: number & number;
      uniqueItems?: boolean;
      contains?: CoreSchemaMetaSchema;
      maxProperties?: number;
      minProperties?: number & number;
      required?: StringArray;
      additionalProperties?: CoreSchemaMetaSchema;
      definitions?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      properties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      patternProperties?: {
        [k: string]: CoreSchemaMetaSchema;
      };
      dependencies?: {
        [k: string]: (CoreSchemaMetaSchema | StringArray) | undefined;
      };
      propertyNames?: CoreSchemaMetaSchema;
      const?: unknown;
      /**
       * @minItems 1
       */
      enum?: [unknown, ...unknown[]];
      type?:
        | ('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')
        | [
            'array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string',
            ...('array' | 'boolean' | 'integer' | 'null' | 'number' | 'object' | 'string')[]
          ];
      format?: string;
      contentMediaType?: string;
      contentEncoding?: string;
      if?: CoreSchemaMetaSchema;
      then?: CoreSchemaMetaSchema;
      else?: CoreSchemaMetaSchema;
      allOf?: SchemaArray;
      anyOf?: SchemaArray;
      oneOf?: SchemaArray;
      not?: CoreSchemaMetaSchema;
      [k: string]: unknown | undefined;
    }
  | boolean
);

/**
 * Schema that defines how to write a connector metadata document when writing connectors for Azure IoT Operations solutions
 */
export interface JSONSchemaForAzureIoTOperationsConnectorMetadata60Preview {
  /**
   * The version of AIO connector metadata schema that this connector metadata file adheres to.
   */
  aioConnectorMetadataSchemaVersion?: string;
  /**
   * The name of the connector.
   */
  name: string;
  /**
   * A brief (human-readable) description of the connector (preferably in English). This is seen when browsing connectors in the portal.
   */
  description?: string;
  /**
   * The version of this connector. This must use semantic versioning such as '1.2.3'
   */
  version: string;
  /**
   * True if this connector is considered a preview version.
   */
  isPreview?: boolean & string;
  /**
   * A name and/or email of the maintainer of this connector.
   */
  maintainer?: string;
  /**
   * A name and/or email of the vendor that distributes this connector.
   */
  vendor?: string;
  /**
   * The container image details for this connector image.
   */
  imageConfigurationSettings:
    | {
        /**
         * The container image name for the connector. For example: 'myconnector'
         */
        imageName: string;
        /**
         * The tag of the container image for this connector
         */
        tag: string;
      }
    | {
        /**
         * The container image name for the connector. For example: 'myconnector'
         */
        imageName: string;
        /**
         * The digest of the container image for this connector
         */
        digest: string;
      };
  /**
   * The array of secrets that are required for the connector application to work. The secret will be mounted onto all connector instances deployed for this connector application
   *
   * @minItems 1
   */
  secrets?: [
    {
      /**
       * The application-defined alias for the secret
       */
      secretAlias: string;
      /**
       * The description for this secret alias
       */
      secretDescription?: string;
      /**
       * If the secret is optional or mandatory
       */
      isOptional?: boolean;
    }
  ];
  /**
   * The array of storage volumes that are required for the connector application to work.
   *
   * @minItems 1
   */
  storageVolumes?: [
    {
      /**
       * The description for this storage volume
       */
      description?: string;
      /**
       * The mount path for this storage volume
       */
      mountPath: string;
    }
  ];
  /**
   * The CPU architectures that this connector image was built for. At least one must be specified.
   *
   * @minItems 1
   */
  supportedArchitectures: [string];
  /**
   * Details about the source code that compiled this connector
   */
  sourceCode?: {
    /**
     * The programming language used to write this connector
     */
    language: string;
    /**
     * The version of the programming language used to write this connector
     */
    languageVersion: string;
    /**
     * Details about the versions of the AIO SDKs used to write this connector (if they were used)
     */
    sdks?: {
      /**
       * The version of the Azure IoT Operations MQTT package
       */
      mqttPackageVersion?: string;
      /**
       * The version of the Azure IoT Operations protocol package
       */
      protocolPackageVersion?: string;
      /**
       * The version of the Azure IoT Operations services package
       */
      servicesPackageVersion?: string;
      /**
       * The version of the Azure IoT Operations connector package
       */
      connectorPackageVersion?: string;
      [k: string]: unknown | undefined;
    };
  };
  /**
   * The AIO requirements to run this connector
   */
  aioMetadata?: {
    /**
     * The minimal (inclusive) version that can run this connector.
     */
    aioMinVersion?: string;
    /**
     * The maximal (inclusive) version that can run this connector. If there is no known exact version, wildcards can be used such as '1.*.*'. Alternatively, not specifying an aioMaxVersion signals no upper bound
     */
    aioMaxVersion?: string;
  };
  /**
   * The array of keys in the connector configuration
   *
   * @minItems 1
   */
  connectorConfigurationKeys?: [
    {
      /**
       * A key in the connector configuration key/value map.
       */
      key: string;
      /**
       * The description of this key.
       */
      description?: string;
    }
  ];
  inboundEndpointAlternativeTypeName?: AlternativeTypeName;
  /**
   * If true, inbound endpoints are enabled by default. Users may still specify in the deployed device definition if each endpoint is enabled or not and that value will override this value.
   */
  endpointsEnabledByDefault?: boolean;
  /**
   * The array of inbound endpoints in a device that this connector will be deployed for.
   *
   * @minItems 1
   */
  inboundEndpoints: [
    {
      /**
       * Type of connection endpoint. Formatted as ABC.XYZ. For example, 'Microsoft.Media'
       */
      endpointType: string;
      /**
       * The set of authentication types that this connector supports. For example, ["usernamePassword", "anonymous"]
       */
      supportedAuthenticationTypes?: string[];
      /**
       * Describes if this connector expects these fields to be provided in the device definition when deploying the connector. Also describes the expected shape of these values if they are supported.
       */
      fields: {
        address: FieldNecessity;
      };
      /**
       * If true, assets are enabled by default. Users may still specify in the deployed asset definition if each asset is enabled or not and that value will override this value.
       */
      assetsEnabledByDefault?: boolean;
      additionalConfigurationSchema?: CoreSchemaMetaSchema;
      /**
       * The version of the protocol of this inbound endpoint.
       */
      version?: string;
      /**
       * If present, this connector supports using events.
       */
      events?: {
        limits: ModelLimits;
        /**
         * If present, this connector supports using event datapoints.
         */
        dataPoints?: {
          limits: ModelLimits;
          dataPointConfigurationSchema?: CoreSchemaMetaSchema1;
          alternativeTypeName?: AlternativeTypeName1;
          /**
           * Describes if this connector expects these fields to be provided in the data point definition when deploying the connector. Also describes the expected shape of these values if they are supported.
           */
          fields: {
            dataSource: FieldNecessity;
          };
          [k: string]: unknown | undefined;
        };
        alternativeTypeName?: AlternativeTypeName2;
        eventConfigurationSchema?: CoreSchemaMetaSchema2;
        /**
         * Describes if this connector expects these fields to be provided in the event definition when deploying the connector. Also describes the expected shape of these values if they are supported.
         */
        fields: {
          eventNotifier: FieldNecessity;
          typeRef: FieldNecessity;
        };
        /**
         * Information about the supported and default destinations for asset events
         */
        destinations?: {
          /**
           * The array of destinations that this asset's events supports.
           */
          supportedDestinations: ('Mqtt' | 'Storage')[];
          /**
           * The destination that this asset's events will go to by default unless specified otherwise in the asset or the event.
           */
          defaultDestination?: MqttDestinationDefaults | StorageDestinationDefaults;
        };
      };
      /**
       * If present, this connector supports using datasets.
       */
      datasets?: {
        limits: ModelLimits;
        datasetConfigurationSchema?: CoreSchemaMetaSchema3;
        /**
         * If present, this connector supports using dataset datapoints.
         */
        dataPoints?: {
          limits?: ModelLimits;
          dataPointConfigurationSchema?: CoreSchemaMetaSchema4;
          alternativeTypeName?: AlternativeTypeName3;
          /**
           * Describes if this connector expects these fields to be provided in the data point definition when deploying the connector. Also describes the expected shape of these values if they are supported.
           */
          fields?: {
            dataSource: FieldNecessity;
            typeRef: FieldNecessity;
          };
          [k: string]: unknown | undefined;
        };
        alternativeTypeName?: AlternativeTypeName4;
        /**
         * Describes if this connector expects these fields to be provided in the dataset definition when deploying the connector. Also describes the expected shape of these values if they are supported.
         */
        fields: {
          dataSource: FieldNecessity;
          typeRef: FieldNecessity;
        };
        /**
         * Information about the supported and default destinations for asset datasets
         */
        destinations?: {
          /**
           * The array of destinations that this asset's datasets supports.
           */
          supportedDestinations: ('Mqtt' | 'BrokerStateStore' | 'Storage')[];
          /**
           * The destination that this asset's datasets will go to by default unless specified otherwise in the asset or the dataset.
           */
          defaultDestination?:
            | MqttDestinationDefaults
            | StorageDestinationDefaults
            | BrokerStateStoreDestinationDefaults;
        };
      };
      /**
       * If present, this connector supports using management groups.
       */
      managementGroups?: {
        limits: ModelLimits;
        managementGroupConfigurationSchema?: CoreSchemaMetaSchema5;
        alternativeTypeName?: AlternativeTypeName5;
        /**
         * If present, this connector supports using management group actions.
         */
        managementGroupActions?: {
          limits: ModelLimits;
          actionConfigurationSchema?: CoreSchemaMetaSchema6;
          alternativeTypeName?: AlternativeTypeName6;
          /**
           * Describes if this connector expects these fields to be provided in the management group action definition when deploying the connector. Also describes the expected shape of these values if they are supported.
           */
          fields: {
            targetUri: FieldNecessity;
            typeRef: FieldNecessity;
          };
        };
        /**
         * Describes if this connector expects these fields to be provided in the management group definition when deploying the connector. Also describes the expected shape of these values if they are supported.
         */
        fields: {
          typeRef: FieldNecessity;
        };
      };
      /**
       * If present, this connector supports using streams.
       */
      streams?: {
        limits: ModelLimits;
        streamConfigurationSchema?: CoreSchemaMetaSchema7;
        alternativeTypeName?: AlternativeTypeName7;
        /**
         * Describes if this connector expects these fields to be provided in the stream definition when deploying the connector. Also describes the expected shape of these values if they are supported.
         */
        fields: {
          typeRef: FieldNecessity;
        };
        /**
         * Information about the supported and default destinations for asset streams
         */
        destinations?: {
          /**
           * The array of destinations that this asset's streams supports.
           */
          supportedDestinations: ('Mqtt' | 'Storage')[];
          /**
           * The destination that this asset's streams will go to by default unless unless specified otherwise in the asset or the stream.
           */
          defaultDestination?: MqttDestinationDefaults | StorageDestinationDefaults;
        };
        [k: string]: unknown | undefined;
      };
    }
  ];
  /**
   * The recommended configuration to use for allocating device inbound endpoints for the connector instances. Only 'bucketized' is currently supported.
   */
  recommendedAllocationPolicy?: 'bucketized';
  /**
   * The recommended number of replicas to deploy for this connector.
   */
  recommendedReplicas?: number;
}
/**
 * The alternative name to the type "inboundEndpoint" in a device
 */
export interface AlternativeTypeName {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * Details about if a field is required or not and what shape its value should take
 */
export interface FieldNecessity {
  /**
   * If this field is relevant to this connector or not. If required, the connector cannot function without this field being provided in the specified shape. If unsupported, the connector will ignore any value provided for this field. If optional, the connector can function with or without this field being provided, but the behavior may vary depending on it.
   */
  input: 'required' | 'unsupported' | 'optional';
  /**
   * The set of regex that this field's value should adhere to.
   */
  regex?: string[];
  /**
   * An example value for this field that fits the expected format
   */
  exampleValue?: string;
  /**
   * Additional user-readable context for this field. May explain how the field is used or explain the validation rules around it.
   */
  description?: string;
  [k: string]: unknown | undefined;
}
/**
 * Describes the limits to this model type that this connector supports. For instance, a connector may support between 0 to 5 datasets.
 */
export interface ModelLimits {
  /**
   * The maximum number of this model type that this connector supports. If not specified, the default is whatever limits the ADR service itself has.
   */
  maximum?: number;
  /**
   * The minimum number of this model type that this connector supports.
   */
  minimum?: number;
}
/**
 * The alternative name to the type "dataPoints" within an event
 */
export interface AlternativeTypeName1 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The alternative name to the type "events" within an asset
 */
export interface AlternativeTypeName2 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The specific default values that will be used by the connector when publishing telemetry to the MQTT broker.
 */
export interface MqttDestinationDefaults {
  destination: 'Mqtt';
  /**
   * The default MQTT topic that will be published to. Values are allowed to contain deploy-time parameters like 'mqtt/{deviceName}/{inboundEndpointName}/myMessages'.  The supported parameter tokens are: {deviceName}, {inboundEndpointName}, {assetName}, {datasetName}, {eventName}, {streamName}, and {kubernetesNamespace}. Dataset/event/stream name tokens are only allowed if the configured destination is for a dataset/event/stream.
   */
  topic: string;
  /**
   * The default MQTT quality of service that MQTT messages will be published with
   */
  qos: 0 | 1;
  /**
   * The default time to live that MQTT messages will be published with.
   */
  ttl: number;
  /**
   * The default retain flag value that MQTT messages will be published with.
   */
  retain: 'keep' | 'never';
}
/**
 * The storage-specific default values that will be used by the connector if not otherwise specified.
 */
export interface StorageDestinationDefaults {
  destination: 'Storage';
  /**
   * The default path that storage will use. Values are allowed to contain deploy-time parameters like 'storage/{deviceName}/{inboundEndpointName}'.  The supported parameter tokens are: {deviceName}, {inboundEndpointName}, {assetName}, {datasetName}, {eventName}, {streamName}, and {kubernetesNamespace}. Dataset/event/stream name tokens are only allowed if the configured destination is for a dataset/event/stream.
   */
  path: string;
}
/**
 * The alternative name to the type "dataPoints" within a dataset
 */
export interface AlternativeTypeName3 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The alternative name to the type "datasets" within an asset
 */
export interface AlternativeTypeName4 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The broker state store-specific default values that will be used by the connector if not otherwise specified.
 */
export interface BrokerStateStoreDestinationDefaults {
  destination: 'BrokerStateStore';
  /**
   * The default broker state store key that will be published to. Values are allowed to contain deploy-time parameters like 'dss/{deviceName}/{inboundEndpointName}'.  The supported parameter tokens are: {deviceName}, {inboundEndpointName}, {assetName}, {datasetName}, {eventName}, {streamName}, and {kubernetesNamespace}. Dataset/event/stream name tokens are only allowed if the configured destination is for a dataset/event/stream.
   */
  key: string;
}
/**
 * The alternative name to the type "managementGroups" within an asset
 */
export interface AlternativeTypeName5 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The alternative name to the type "actions" within a management group
 */
export interface AlternativeTypeName6 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
/**
 * The alternative name to the type "stream" within an asset
 */
export interface AlternativeTypeName7 {
  /**
   * The singular form of the name of this type
   */
  singular: string;
  /**
   * The plural form of the name of this type
   */
  plural: string;
}
