/* eslint-disable */

/**
 * The schema version of this config file
 */
export type Version = string;
/**
 * A list of paths or files which Sourcery will ignore.
 */
export type Ignore = string[];
export type Enable = string[];
/**
 * A list of rule IDs Sourcery will never suggest.
 */
export type Disable = string[];
/**
 * An enumeration.
 */
export type RuleType = 'refactoring' | 'suggestion' | 'comment' | 'hover';
/**
 * A string specifying the lowest Python version your project supports. Sourcery will not suggest refactorings requiring a higher Python version.
 */
export type PythonVersion = string | PythonVersion1;
export type Major = number;
export type Minor = number;
export type Id = string;
export type Description = string;
export type Pattern = string;
/**
 * An enumeration.
 */
export type RuleLanguage = 'python' | 'java' | 'javascript' | 'typescript';
export type Replacement = string;
export type Condition = string;
export type Explanation = string;
export type Include = string[];
export type Exclude = string[];
export type Match = string;
export type Expect = string;
export type NoMatch = string;
export type Tests = (MatchRuleTestConfig | NoMatchRuleTestConfig)[];
export type Tags = string[];
/**
 * A list of custom rules Sourcery will include in its analysis.
 */
export type Rules = RuleConfig[];
export type QualityThreshold = number;
export type Labels = string[];
export type IgnoreLabels = string[];
export type RequestReview = string | RequestReview1;
export type Origin = string;
export type Forked = string;
export type SourceryBranch = string;
export type MinLines = number;
export type MinDuplicates = number;
export type IdenticalClonesOnly = boolean;
export type Url = string;
export type SslCertsFile = string;
export type NoSslVerify = boolean;

export interface SourceryYAMLSchema {
  version?: Version;
  ignore?: Ignore;
  rule_settings?: RuleSettings;
  rules?: Rules;
  rule_tags?: RuleTags;
  metrics?: Metrics;
  github?: Github;
  clone_detection?: CloneDetection;
  proxy?: Proxy;
}
export interface RuleSettings {
  enable?: Enable;
  disable?: Disable;
  rule_types?: RuleType[];
  python_version?: PythonVersion;
}
export interface PythonVersion1 {
  major: Major;
  minor: Minor;
  [k: string]: unknown | undefined;
}
export interface RuleConfig {
  id: Id;
  description: Description;
  pattern: Pattern;
  language?: RuleLanguage;
  replacement?: Replacement;
  condition?: Condition;
  explanation?: Explanation;
  paths?: PathsConfig;
  tests?: Tests;
  tags?: Tags;
}
export interface PathsConfig {
  include?: Include;
  exclude?: Exclude;
}
export interface MatchRuleTestConfig {
  match: Match;
  expect?: Expect;
}
export interface NoMatchRuleTestConfig {
  'no-match': NoMatch;
}
/**
 * Additional rule tags.
 */
export interface RuleTags {
  [k: string]: string[] | undefined;
}
export interface Metrics {
  quality_threshold?: QualityThreshold;
}
export interface Github {
  labels?: Labels;
  ignore_labels?: IgnoreLabels;
  request_review?: RequestReview;
  sourcery_branch?: SourceryBranch;
}
export interface RequestReview1 {
  origin?: Origin;
  forked?: Forked;
}
export interface CloneDetection {
  min_lines?: MinLines;
  min_duplicates?: MinDuplicates;
  identical_clones_only?: IdenticalClonesOnly;
}
export interface Proxy {
  url?: Url;
  ssl_certs_file?: SslCertsFile;
  no_ssl_verify?: NoSslVerify;
}
