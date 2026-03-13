/* eslint-disable */

export type Match = {
  [k: string]: unknown | undefined;
};
export type All = Match[];
export type Any = Match[];
export type Label =
  | (
      | {
          all: All;
        }
      | {
          any: Any;
        }
      | Match
    )[]
  | undefined;

/**
 * A GitHub Action for automatically labelling pull requests.
 */
export interface PullRequestLabeler {
  [k: string]: Label | undefined;
}
