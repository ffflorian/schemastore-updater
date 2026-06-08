/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Services.
 * https://developer.enonic.com/docs/code/stable/http
 */
export interface HttpsJsonSchemastoreOrgEnonicXpService800Json {
  kind: 'Service';
  allow?: string[];
  title?: LocalizedTextDef;
}
