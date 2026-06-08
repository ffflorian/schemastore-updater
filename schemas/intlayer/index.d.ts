/* eslint-disable */

/**
 * Represents content of the dictionary to be processed.
 */
export type ContentValue =
  | StringValue
  | NumberValue
  | BooleanValue
  | NullValue
  | ArrayValue
  | {
      [k: string]: unknown | undefined;
    };
/**
 * Represents a simple string or a placeholder for a function/promise.
 */
export type StringValue = string;
/**
 * Represents a simple numeric value.
 */
export type NumberValue = number;
/**
 * Represents a simple boolean value.
 */
export type BooleanValue = boolean;
/**
 * Represents a simple null value.
 */
export type NullValue = null;
/**
 * Represents an array of content values.
 */
export type ArrayValue = ContentValue[];

/**
 * JSON Schema Intlayer Dictionary
 */
export interface Dictionary {
  $schema?: string;
  id?: string;
  projectIds?: string[];
  localId?: string;
  localIds?: string[];
  format?: 'intlayer' | 'icu' | 'i18next' | 'vue-i18n' | 'po';
  key: string;
  title?: string;
  description?: string;
  versions?: string[];
  version?: string;
  filePath?: string;
  locale?: string;
  contentAutoTransformation?:
    | boolean
    | {
        markdown?: boolean;
        html?: boolean;
        insertion?: boolean;
      };
  fill?:
    | boolean
    | string
    | {
        [k: string]: (boolean | string) | undefined;
      };
  filled?: true;
  priority?: number;
  importMode?: 'static' | 'dynamic' | 'fetch';
  location?: string;
  schema?: string;
  tags?: string[];
  content: ContentValue;
}
