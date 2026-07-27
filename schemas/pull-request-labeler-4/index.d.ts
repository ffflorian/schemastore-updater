/* eslint-disable */

export type Label =
  | (
      | string
      | (
          | string
          | {
              any?: Any;
              all?: All;
              [k: string]: unknown | undefined;
            }
        )[]
    )
  | undefined;
export type Any = string[];
export type All = string[];

/**
 * A GitHub Action for automatically labelling pull requests.
 */
export interface PullRequestLabeler {
  [k: string]: Label | undefined;
}
