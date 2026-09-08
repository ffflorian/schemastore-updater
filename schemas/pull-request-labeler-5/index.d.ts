/* eslint-disable */

/**
 * A non-negative integer. Numeric strings are accepted by actions/labeler.
 */
export type NonNegativeInteger = number | string;
export type Match = Match1 & Match2;
export type Match1 = {
  [k: string]: unknown | undefined;
};
export type GlobRule = GlobRule1 & GlobRule2;
export type GlobRule1 = {
  [k: string]: unknown | undefined;
};
export type StringOrStringArray = string | string[];
export type All = Match[];
export type Any = Match[];
export type Label = (
  | {
      all: All;
    }
  | {
      any: Any;
    }
  | Match
)[];

/**
 * A GitHub Action for automatically labelling pull requests.
 */
export interface PullRequestLabeler {
  'changed-files-labels-limit'?: NonNegativeInteger;
  'max-files-changed'?: NonNegativeInteger;
  [k: string]: Label | NonNegativeInteger | undefined;
}
export interface Match2 {
  'changed-files'?: GlobRule[];
  'base-branch'?: StringOrStringArray;
  'head-branch'?: StringOrStringArray;
}
export interface GlobRule2 {
  'any-glob-to-any-file'?: StringOrStringArray;
  'any-glob-to-all-files'?: StringOrStringArray;
  'all-globs-to-any-file'?: StringOrStringArray;
  'all-globs-to-all-files'?: StringOrStringArray;
}
