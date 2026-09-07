/* eslint-disable */

/**
 * Required to adjust maintainability checks.
 */
export type Version = string;
export type URL = string;
export type Path = string;
export type Prepare = {
  url?: URL;
  path?: Path;
  [k: string]: unknown | undefined;
}[];
export type Threshold = number | null;
export type Enabled1 = boolean;
export type ExcludePattern = string;
export type ExcludePatterns = ExcludePattern[];

/**
 * Configuration file as an alternative for configuring your repository in the settings page.
 */
export interface CodeClimateConfiguration {
  version?: Version;
  prepare?: Prepare;
  checks?: Checks;
  plugins?: Plugins;
  exclude_patterns?: ExcludePatterns;
  [k: string]: unknown | undefined;
}
export interface Checks {
  'argument-count'?: ArgumentCount;
  'complex-logic'?: ComplexLogic;
  'file-lines'?: FileLines;
  'method-complexity'?: MethodComplexity;
  'method-count'?: MethodCount;
  'method-lines'?: MethodLines;
  'nested-control-flow'?: NestedControlFlow;
  'return-statements'?: ReturnStatements;
  'similar-code'?: SimilarCode;
  'identical-code'?: IdenticalCode;
  [k: string]: unknown | undefined;
}
export interface ArgumentCount {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface ComplexLogic {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface FileLines {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface MethodComplexity {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface MethodCount {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface MethodLines {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface NestedControlFlow {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface ReturnStatements {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface SimilarCode {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface IdenticalCode {
  config?: {
    threshold?: Threshold;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * To add a plugin to your analysis. You can find the complete list of available plugins here: https://docs.codeclimate.com/docs/list-of-engines
 */
export interface Plugins {
  [k: string]: Enabled | undefined;
}
export interface Enabled {
  enabled?: Enabled1;
  [k: string]: unknown | undefined;
}
