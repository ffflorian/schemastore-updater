/* eslint-disable */

export type Config =
  | {
      /**
       * Field configurations
       */
      '.field': string;
      /**
       * Value to be assigned to the field
       */
      '.value': {
        [k: string]: unknown | undefined;
      };
    }
  | {
      /**
       * Name of the method to be invoked
       */
      '.method': string;
      /**
       * Arguments for the method
       */
      '.args'?: unknown[];
      /**
       * Specifically to be used for method which use varargs
       */
      '.varargs'?: unknown[];
      /**
       * Indicates whether the output of the method should be used as input for the next config or as the return type
       */
      '.transform'?: boolean;
    };

export interface ArchitectFXDocumentsSchema {
  /**
   * A class which may hold injected fields to handle them
   */
  '.controller'?: string;
  '.deps'?: string[];
  '.imports'?: string[];
  /**
   * A series of generic steps to configure global state or specific objects
   */
  '.config'?: Config[];
  [k: string]: Entity;
}
/**
 * Entity or tree node
 *
 * This interface was referenced by `ArchitectFXDocumentsSchema`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z_][A-Za-z0-9_]*$".
 */
export interface Entity {
  /**
   * Arguments for the constructor
   */
  '.args'?: unknown[];
  /**
   * Specifically to be used for constructors which use varargs
   */
  '.varargs'?: unknown[];
  /**
   * Allows building this entity through the factory/builder pattern using configs
   */
  '.factory'?: Config[];
  /**
   * A series of generic steps to configure global state or specific objects
   */
  '.config'?: Config[];
  /**
   * Entities may or may not contain other entities inside them
   */
  children?: Entity[];
  [k: string]: unknown | undefined;
}
