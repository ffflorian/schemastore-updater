/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Webapps.
 * https://developer.enonic.com/docs/code/stable/webapps
 */
export interface HttpsJsonSchemastoreOrgEnonicXpWebapp800B4Json {
  kind: 'WebApp';
  description?: LocalizedTextDef;
  apis?: string[];
  config?: GenericValueDef;
}
export interface GenericValueDef {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
