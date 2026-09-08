/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 */
export type JsoneValue = JSONETemplates | JsoneValue[] | null | boolean | number | string;
export type JsoneArray = JsoneValue[];
export type JsoneObjectArray = JSONETemplates[];

export interface JSONETemplates {
  $else?: JsoneValue;
  $eval?: string;
  $flatten?: JsoneArray;
  $flattenDeep?: JsoneArray;
  $fromNow?: string;
  $if?: string;
  $json?: JsoneValue;
  $let?: {
    [k: string]: JsoneValue | undefined;
  };
  $map?: JsoneArray;
  $match?: JSONETemplates;
  $merge?: JsoneObjectArray;
  $mergeDeep?: JsoneObjectArray;
  $reverse?: JSONETemplates;
  $sort?: JSONETemplates | number[];
  $switch?: JSONETemplates;
  $then?: JsoneValue;
  in?: JSONETemplates;
  [k: string]:
    | JsoneValue
    | string
    | JsoneArray
    | {
        [k: string]: JsoneValue | undefined;
      }
    | JSONETemplates
    | JsoneObjectArray
    | number[]
    | undefined;
}
