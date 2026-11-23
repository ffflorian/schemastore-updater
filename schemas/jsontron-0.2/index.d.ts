/* eslint-disable */

/**
 * Jsontron vocabulary: Schematron-like rules, assert, report, and let keywords with id/flag/role metadata, over JSON Schema, using jq expressions.
 */
export interface Jsontron02 {
  /**
   * Array of rules. Each rule selects context nodes with a jq expression and runs asserts and/or reports.
   *
   * @minItems 1
   */
  rules?: [
    (
      | {
          asserts: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          reports: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      /**
       * jq expression evaluated against the current instance; each result is a context node.
       */
      context: string;
      /**
       * Optional human-readable identifier prefixed to every failure message produced by this rule as [id].
       */
      id?: string;
      let?: Let;
      /**
       * Assertions that FAIL when the test is not jq-truthy (classic Schematron assert).
       *
       * @minItems 1
       */
      asserts?: [Assertion, ...Assertion[]];
      /**
       * Assertions that FAIL when the test IS jq-truthy (classic Schematron report).
       *
       * @minItems 1
       */
      reports?: [Assertion, ...Assertion[]];
    } & (
        | {
            asserts: unknown;
            [k: string]: unknown | undefined;
          }
        | {
            reports: unknown;
            [k: string]: unknown | undefined;
          }
      ) & {
        /**
         * jq expression evaluated against the current instance; each result is a context node.
         */
        context: string;
        /**
         * Optional human-readable identifier prefixed to every failure message produced by this rule as [id].
         */
        id?: string;
        let?: Let;
        /**
         * Assertions that FAIL when the test is not jq-truthy (classic Schematron assert).
         *
         * @minItems 1
         */
        asserts?: [Assertion, ...Assertion[]];
        /**
         * Assertions that FAIL when the test IS jq-truthy (classic Schematron report).
         *
         * @minItems 1
         */
        reports?: [Assertion, ...Assertion[]];
      },
    ...((
      | {
          asserts: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          reports: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      /**
       * jq expression evaluated against the current instance; each result is a context node.
       */
      context: string;
      /**
       * Optional human-readable identifier prefixed to every failure message produced by this rule as [id].
       */
      id?: string;
      let?: Let;
      /**
       * Assertions that FAIL when the test is not jq-truthy (classic Schematron assert).
       *
       * @minItems 1
       */
      asserts?: [Assertion, ...Assertion[]];
      /**
       * Assertions that FAIL when the test IS jq-truthy (classic Schematron report).
       *
       * @minItems 1
       */
      reports?: [Assertion, ...Assertion[]];
    } & (
        | {
            asserts: unknown;
            [k: string]: unknown | undefined;
          }
        | {
            reports: unknown;
            [k: string]: unknown | undefined;
          }
      ) & {
        /**
         * jq expression evaluated against the current instance; each result is a context node.
         */
        context: string;
        /**
         * Optional human-readable identifier prefixed to every failure message produced by this rule as [id].
         */
        id?: string;
        let?: Let;
        /**
         * Assertions that FAIL when the test is not jq-truthy (classic Schematron assert).
         *
         * @minItems 1
         */
        asserts?: [Assertion, ...Assertion[]];
        /**
         * Assertions that FAIL when the test IS jq-truthy (classic Schematron report).
         *
         * @minItems 1
         */
        reports?: [Assertion, ...Assertion[]];
      })[]
  ];
  /**
   * Sugar for a rule with context ".". String, object, or array of those; all append to one context="." rule. Fails when the test is not jq-truthy.
   */
  assert?: string | Assertion | [string | Assertion, ...(string | Assertion)[]];
  /**
   * Sugar for a rule with context "." whose test polarity is inverted (Schematron report). Fails when the test IS jq-truthy.
   */
  report?: string | Assertion | [string | Assertion, ...(string | Assertion)[]];
  let?: Let;
  [k: string]: unknown | undefined;
}
/**
 * Object mapping variable names (matching [A-Za-z_][A-Za-z0-9_]*, excluding the reserved 'root') to jq expressions. Entries are evaluated in document order; each takes the first value of its expression (or null if the stream is empty).
 */
export interface Let {
  [k: string]: string | undefined;
}
export interface Assertion {
  test: string;
  message?: string;
  /**
   * Optional human-readable identifier prefixed to the failure message as [id].
   */
  id?: string;
  /**
   * Optional severity label (e.g. 'error', 'warning', 'info') prefixed to the failure message as [flag=value].
   */
  flag?: string;
  /**
   * Alias of 'flag' for Schematron parity. Mutually exclusive with 'flag' (enforced at build time).
   */
  role?: string;
}
