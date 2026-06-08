/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Universal and Harmonized APIs.
 * https://developer.enonic.com/docs/code/stable/apis
 */
export interface HttpsJsonSchemastoreOrgEnonicXpApi800B5Json {
  kind: 'API';
  allow?: string[];
  title?: LocalizedTextDef;
  description?: LocalizedTextDef;
  documentationUrl?: string;
  mount?: ('web' | 'management')[];
  config?: GenericValueDef;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
