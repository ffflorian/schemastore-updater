/* eslint-disable */

export type Checks = string[];

/**
 * Repo-review's settings.
 */
export interface HttpsJsonSchemastoreOrgPartialRepoReviewJson {
  select?: Checks;
  ignore?:
    | Checks
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[A-Z]+[0-9]*$".
         */
        [k: string]: string;
      };
}
