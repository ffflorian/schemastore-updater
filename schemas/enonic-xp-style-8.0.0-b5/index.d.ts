/* eslint-disable */

export type ImageStyleDef = StyleItemDef & {
  type?: 'Image';
  filter?: string;
  aspectRatio?: string;
  [k: string]: unknown | undefined;
};
export type LocalizedTextDef =
  | string
  | {
      text: string;
      i18n?: string;
    };

/**
 * YAML descriptor for Enonic XP Styles.
 * https://developer.enonic.com/docs/cms/stable/richtext/styles
 */
export interface HttpsJsonSchemastoreOrgEnonicXpStyle800B5Json {
  kind: 'Style';
  styles?: ImageStyleDef[];
}
export interface StyleItemDef {
  name: string;
  type: string;
  label?: LocalizedTextDef;
  editor?: EditorDef;
  [k: string]: unknown | undefined;
}
export interface EditorDef {
  css?: string;
}
