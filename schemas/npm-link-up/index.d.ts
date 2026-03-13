/* eslint-disable */

export interface JSONSchemaForNLUNpmLinkUpLibrary {
  $schema?: string;
  alwaysReinstall?: boolean;
  comments?: string[];
  deps: string[];
  ignore?: string[];
  linkToItself?: boolean;
  linkable?: true;
  list: string[];
  localSettings?: {
    [k: string]: unknown | undefined;
  };
  'npm-link-up'?: boolean;
  packages: PackagesMap;
  searchRoots?: string[];
}
export interface PackagesMap {
  [k: string]: unknown | undefined;
}
