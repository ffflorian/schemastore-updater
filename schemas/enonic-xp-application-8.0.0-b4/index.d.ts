/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Applications.
 * https://developer.enonic.com/docs/code/stable/fundamentals/apps
 */
export interface HttpsJsonSchemastoreOrgEnonicXpApplication800B4Json {
  kind: 'Application';
  title?: LocalizedTextDef;
  description?: LocalizedTextDef;
  vendorName?: string;
  vendorUrl?: string;
  url?: string;
  config?: GenericValueDef;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
