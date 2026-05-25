/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Admin Extensions.
 * https://developer.enonic.com/docs/code/stable/extensions
 */
export interface HttpsJsonSchemastoreOrgEnonicXpAdminExtension800B4Json {
  kind: 'AdminExtension';
  title?: LocalizedTextDef;
  description?: LocalizedTextDef;
  allow?: string[];
  interfaces?: string[];
  config?: GenericValueDef;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
