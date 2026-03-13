/* eslint-disable */

export interface JSONSchemaForHostMetaFiles {
  subject: string;
  expires?: string;
  aliases?: string[];
  properties?: Property;
  links?: Link[];
  [k: string]: unknown | undefined;
}
export interface Property {
  [k: string]: (null | string) | undefined;
}
export interface Link {
  rel?: string;
  type?: string;
  href?: string;
  template?: string;
  titles?: {
    default?: string;
    [k: string]: string | undefined;
  };
  properties?: Property;
  [k: string]: unknown | undefined;
}
