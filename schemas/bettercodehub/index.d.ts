/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ComponentDepth = number;
export type SupportedProgrammingLanguage =
  | "csharp"
  | "cpp"
  | "go"
  | "groovy"
  | "java"
  | "javascript"
  | "objectivec"
  | "perl"
  | "php"
  | "python"
  | "ruby"
  | "scala"
  | "script"
  | "solidity"
  | "swift"
  | "typescript"
  | "kotlin";
export type Name =
  | "csharp"
  | "cpp"
  | "go"
  | "groovy"
  | "java"
  | "javascript"
  | "objectivec"
  | "perl"
  | "php"
  | "python"
  | "ruby"
  | "scala"
  | "script"
  | "solidity"
  | "swift"
  | "typescript"
  | "kotlin";
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