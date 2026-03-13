/* eslint-disable */

export type JsoneValue = JSONETemplates | JSONETemplates[] | (null | boolean | number | string);
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
    [k: string]:
      | {
          [k: string]: JSONETemplates;
        }
      | undefined;
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
  [k: string]: JsoneValue;
}
