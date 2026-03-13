/* eslint-disable */

export type ComponentDepth = number;
export type SupportedProgrammingLanguage =
  | 'csharp'
  | 'cpp'
  | 'go'
  | 'groovy'
  | 'java'
  | 'javascript'
  | 'objectivec'
  | 'perl'
  | 'php'
  | 'python'
  | 'ruby'
  | 'scala'
  | 'script'
  | 'solidity'
  | 'swift'
  | 'typescript'
  | 'kotlin';
export type Name =
  | 'csharp'
  | 'cpp'
  | 'go'
  | 'groovy'
  | 'java'
  | 'javascript'
  | 'objectivec'
  | 'perl'
  | 'php'
  | 'python'
  | 'ruby'
  | 'scala'
  | 'script'
  | 'solidity'
  | 'swift'
  | 'typescript'
  | 'kotlin';
/**
 * A regular expression for the path(s) to include.
 */
export type Pattern = string;
export type Include = Pattern[];
/**
 * A regular expression for the path(s) to exclude.
 */
export type Pattern1 = string;
export type Exclude = Pattern1[];
export type Languages = (
  | SupportedProgrammingLanguage
  | {
      name?: Name;
      production?: Production;
      test?: Test;
    }
)[];

/**
 * Configuration file for Better Code Hub to override the default configuration.
 */
export interface BetterCodeHub {
  component_depth?: ComponentDepth;
  languages?: Languages;
  exclude?: Exclude;
}
export interface Production {
  include?: Include;
  exclude?: Exclude;
}
export interface Test {
  include?: Include;
  exclude?: Exclude;
}
