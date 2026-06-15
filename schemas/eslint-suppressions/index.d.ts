/* eslint-disable */

/**
 * Suppressions file generated and consumed by ESLint bulk suppressions.
 */
export interface ESLintSuppressions {
  [k: string]: FileSuppressions | undefined;
}
/**
 * Rules suppressed for a single file path.
 */
export interface FileSuppressions {
  [k: string]: RuleSuppression | undefined;
}
/**
 * Suppression metadata for one ESLint rule.
 */
export interface RuleSuppression {
  /**
   * Number of existing violations suppressed for this rule in this file.
   */
  count: number;
}
