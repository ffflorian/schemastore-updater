/* eslint-disable */

export type Bool = boolean;
export type StringArray = string | string[];
export type Int = number;
export type String = string;

/**
 * A JSON schema describing a .mocharc.[json|yml|yaml] file
 */
export interface MochaJSConfigurationFileSchema {
  'allow-uncaught'?: Bool;
  'async-only'?: Bool;
  bail?: Bool;
  'check-leaks'?: Bool;
  delay?: Bool;
  exit?: Bool;
  'forbid-only'?: Bool;
  'forbid-pending'?: Bool;
  global?: StringArray;
  jobs?: Int;
  parallel?: Bool;
  retries?: Int;
  slow?: Int;
  timeout?: Int;
  ui?: String;
  color?: Bool;
  diff?: Bool;
  'full-trace'?: Bool;
  growl?: Bool;
  'inline-diffs'?: Bool;
  reporter?: String;
  'reporter-option'?: StringArray;
  config?: String;
  package?: String;
  extension?: StringArray;
  file?: StringArray;
  ignore?: StringArray;
  recursive?: Bool;
  require?: StringArray;
  sort?: Bool;
  watch?: Bool;
  'watch-files'?: StringArray;
  'watch-ignore'?: StringArray;
  fgrep?: String;
  grep?: String;
  invert?: Bool;
  spec?: StringArray;
  'enable-source-maps'?: Bool;
  [k: string]: unknown | undefined;
}
