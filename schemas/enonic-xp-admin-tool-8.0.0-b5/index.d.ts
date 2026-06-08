/* eslint-disable */

export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Admin Tools.
 * https://developer.enonic.com/docs/code/stable/tools
 */
export interface HttpsJsonSchemastoreOrgEnonicXpAdminTool800B5Json {
  kind: 'AdminTool';
  title: LocalizedTextDef;
  description?: LocalizedTextDef;
  allow?: string[];
  apis?: string[];
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
