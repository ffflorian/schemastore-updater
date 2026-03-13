/* eslint-disable */

export type HttpsJsonSchemastoreOrgElmJson = Application | Package;
/**
 * This interface was referenced by `ApplicationDependencies`'s JSON-Schema definition
 * via the `patternProperty` "^[^/]+/[^/]+$".
 */
export type Version = string;
/**
 * This interface was referenced by `PackageDependencies`'s JSON-Schema definition
 * via the `patternProperty` "^[^/]+/[^/]+$".
 */
export type Range = string;

export interface Application {
  type: 'application';
  'source-directories': string[];
  'elm-version': Version;
  dependencies: ApplicationDependenciesGroup;
  'test-dependencies': ApplicationDependenciesGroup;
}
export interface ApplicationDependenciesGroup {
  direct: ApplicationDependencies;
  indirect: ApplicationDependencies;
}
export interface ApplicationDependencies {
  [k: string]: Version;
}
export interface Package {
  type: 'package';
  name: string;
  summary: string;
  license:
    | string
    | (
        | 'AGPL-3.0-only'
        | 'Apache-2.0'
        | 'BSD-2-Clause'
        | 'BSD-3-Clause'
        | 'BSL-1.0'
        | 'CC0-1.0'
        | 'CDDL-1.0'
        | 'CDDL-1.1'
        | 'EPL-1.0'
        | 'EPL-2.0'
        | 'GPL-2.0-only'
        | 'GPL-3.0-only'
        | 'ISC'
        | 'LGPL-2.0-only'
        | 'LGPL-2.1-only'
        | 'LGPL-2.1-or-later'
        | 'LGPL-3.0-only'
        | 'LGPL-3.0-or-later'
        | 'MIT'
        | 'MPL-2.0'
        | 'MS-PL'
        | 'UNLICENSED'
      );
  version: string;
  'exposed-modules':
    | string[]
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".*".
         */
        [k: string]: string[];
      };
  'elm-version': Range;
  dependencies: PackageDependencies;
  'test-dependencies': PackageDependencies;
}
export interface PackageDependencies {
  [k: string]: Range;
}
