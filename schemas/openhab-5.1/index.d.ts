/* eslint-disable */

export type BoolValueType = true | false;
export type ThingUid = string;
/**
 * This interface was referenced by `KeyValueConfigType`'s JSON-Schema definition
 * via the `patternProperty` "^[A-Za-z]\w*$".
 */
export type ConfigValueType = BoolValueType | number | string;
export type ItemTypeEnum =
  | 'Call'
  | 'Color'
  | 'Contact'
  | 'DateTime'
  | 'Dimmer'
  | 'Group'
  | 'Image'
  | 'Location'
  | 'Number'
  | 'Player'
  | 'Rollershutter'
  | 'String'
  | 'Switch';
export type ItemDimensionType = string;

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
    [k: string]:
      | {
          isBridge?: BoolValueType;
          bridge?: ThingUid;
          location?: string;
          config?: KeyValueConfigType;
          channels?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^.+$".
             */
            [k: string]:
              | {
                  type?: string;
                  kind?: 'state' | 'trigger';
                  itemType?: ItemTypeEnum;
                  itemDimension?: ItemDimensionType;
                  label?: string;
                  description?: string;
                  config?: KeyArrayValueConfigType;
                  [k: string]: unknown | undefined;
                }
              | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  items?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
     */
    [k: string]:
      | {
          type?: ItemTypeEnum;
          dimension?: string;
          group?: {
            type?: ItemTypeEnum;
            dimension?: string;
            function?:
              | 'EQUALITY'
              | 'AND'
              | 'OR'
              | 'NAND'
              | 'NOR'
              | 'XOR'
              | 'SUM'
              | 'AVG'
              | 'MEDIAN'
              | 'MIN'
              | 'MAX'
              | 'COUNT'
              | 'LATEST'
              | 'EARLIEST';
            parameters?: string[];
          };
          label?: string;
          icon?: string;
          groups?: string[];
          tags?: string[];
          format?: string;
          unit?: string;
          autoupdate?: BoolValueType;
          channel?: string;
          channels?: {
            [k: string]: KeyArrayValueConfigType | undefined;
          };
          metadata?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^.*$".
             */
            [k: string]:
              | {
                  value?: ConfigValueType;
                  config?: KeyValueConfigType;
                  [k: string]: unknown | undefined;
                }
              | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  tags?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(Location|Equipment|Point|Property)_([A-Z][A-Za-z0-9_]+)*[A-Z][A-Za-z0-9_]*$".
     */
    [k: string]:
      | {
          label?: string;
          description?: string;
          synonyms?: string[];
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
export interface KeyValueConfigType {
  [k: string]: ConfigValueType | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export interface KeyArrayValueConfigType {
  /**
   * This interface was referenced by `KeyArrayValueConfigType`'s JSON-Schema definition
   * via the `patternProperty` "^[A-Za-z]\w*$".
   */
  [k: string]: ConfigValueType | ConfigValueType[] | undefined;
}
