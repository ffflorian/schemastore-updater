/* eslint-disable */

export interface JSONSchemaForFoundryVTTTemplateJsonFiles {
  Actor?: Entity;
  Item?: Entity1;
}
/**
 * The top level data schema for Actor types.
 */
export interface Entity {
  /**
   * Array of strings defining the entity subtypes defined by the schema.
   */
  types?: string[];
  /**
   * Template schemas that can be reused by entity subtypes.
   */
  templates?: {
    /**
     * Definition of a template schema.
     */
    [k: string]:
      | {
          /**
           * Custom property defined for this schema.
           */
          [k: string]:
            | {
                [k: string]: unknown | undefined;
              }
            | undefined;
        }
      | undefined;
  };
  /**
   * Definition of an entity subtype.
   */
  [k: string]:
    | {
        /**
         * Array of strings specifying which template schemas to apply to this type.
         */
        templates?: string[];
        /**
         * Custom property defined for this schema.
         */
        [k: string]:
          | {
              [k: string]: unknown | undefined;
            }
          | undefined;
      }
    | undefined;
}
/**
 * The top level data schema for Item types.
 */
export interface Entity1 {
  /**
   * Array of strings defining the entity subtypes defined by the schema.
   */
  types?: string[];
  /**
   * Template schemas that can be reused by entity subtypes.
   */
  templates?: {
    /**
     * Definition of a template schema.
     */
    [k: string]:
      | {
          /**
           * Custom property defined for this schema.
           */
          [k: string]:
            | {
                [k: string]: unknown | undefined;
              }
            | undefined;
        }
      | undefined;
  };
  /**
   * Definition of an entity subtype.
   */
  [k: string]:
    | {
        /**
         * Array of strings specifying which template schemas to apply to this type.
         */
        templates?: string[];
        /**
         * Custom property defined for this schema.
         */
        [k: string]:
          | {
              [k: string]: unknown | undefined;
            }
          | undefined;
      }
    | undefined;
}
