/* eslint-disable */

export type DefaultValue = boolean | number | null | string;

/**
 * Schema for Revel Digital gadget.yaml files. See https://developer.reveldigital.com/gadgets for more information.
 */
export interface GadgetYaml {
  title: string;
  title_url: string | null;
  description: string;
  author: string;
  background: string;
  requirements: string[];
  locales: Locale[];
  prefs: Pref[];
}
export interface Locale {
  messages: string;
  lang?: string;
}
export interface Pref {
  name: string;
  display_name: string;
  datatype: string;
  default_value: DefaultValue;
  required: boolean;
  options?: Option[];
  depends?: Depend[];
  multiple?: boolean;
  multiline?: boolean;
}
export interface Option {
  display_value: string;
  value?: string | null;
}
export interface Depend {
  name: string;
  any_of?: AnyOf[];
  all_of?: AllOf[];
  none_of?: NoneOf[];
}
export interface AnyOf {
  values: string[];
}
export interface AllOf {
  values: string[];
}
export interface NoneOf {
  values: string[];
}
