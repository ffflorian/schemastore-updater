/* eslint-disable */

/**
 * YAML descriptor for Enonic XP Styles.
 * https://developer.enonic.com/docs/cms/stable/richtext/styles
 */
export interface HttpsJsonSchemastoreOrgEnonicXpStyle800B4Json {
  kind: 'Style';
  styles?: ImageStyleDef[];
}
export interface ImageStyleDef {
  type: 'Image';
  filter?: string;
  aspectRatio?: string;
  [k: string]: unknown | undefined;
}
