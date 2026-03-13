/* eslint-disable */

export type BoolValueType = true | false;
export type ThingUid = string;
/**
 * This interface was referenced by `KeyValueConfigType`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z]\w*$".
 */
export type ConfigValueType = BoolValueType | number | string;

/**
 * Schema for openHAB configuration files. Implements version 5.1
 */
export interface OpenHAB51 {
  version: 1;
  things?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[A-Za-z0-9]([\w-]+:)+[\w-]+$".
     */
    [k: string]: {
      isBridge?: BoolValueType;
      bridge?: ThingUid;
      location?: string;
      config?: KeyValueConfigType;
      channels?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: {
          [k: string]: unknown | undefined;
        };
      };
      [k: string]: unknown | undefined;
    };
  };
  items?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
     */
    [k: string]: {
      [k: string]: unknown | undefined;
    };
  };
  tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(Location|Equipment|Point|Property)_([A-Z][A-Za-z0-9_]+)*[A-Z][A-Za-z0-9_]*$".
     */
    [k: string]: {
      label?: string;
      description?: string;
      synonyms?: string[];
      [k: string]: unknown | undefined;
    };
  };
}
export interface KeyValueConfigType {
  [k: string]: ConfigValueType;
}
