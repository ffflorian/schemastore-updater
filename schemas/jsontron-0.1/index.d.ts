/* eslint-disable */

/**
 * Jsontron vocabulary: Schematron-like rules and assert keywords over JSON Schema, using jq expressions.
 */
export interface Jsontron01 {
  /**
   * Array of rules. Each rule selects context nodes with a jq expression and runs asserts.
   *
   * @minItems 1
   */
  rules?: [
    {
      /**
       * jq expression evaluated against the current instance; each result is a context node.
       */
      context: string;
      /**
       * @minItems 1
       */
      asserts: [
        {
          /**
           * jq expression evaluated with . set to the context node. Fails when not jq-truthy.
           */
          test: string;
          /**
           * jq expression evaluating to a string (interpolation supported). If the value does not start with a double quote, quotes are added implicitly for parsing.
           */
          message?: string;
        },
        ...{
          /**
           * jq expression evaluated with . set to the context node. Fails when not jq-truthy.
           */
          test: string;
          /**
           * jq expression evaluating to a string (interpolation supported). If the value does not start with a double quote, quotes are added implicitly for parsing.
           */
          message?: string;
        }[]
      ];
    },
    ...{
      /**
       * jq expression evaluated against the current instance; each result is a context node.
       */
      context: string;
      /**
       * @minItems 1
       */
      asserts: [
        {
          /**
           * jq expression evaluated with . set to the context node. Fails when not jq-truthy.
           */
          test: string;
          /**
           * jq expression evaluating to a string (interpolation supported). If the value does not start with a double quote, quotes are added implicitly for parsing.
           */
          message?: string;
        },
        ...{
          /**
           * jq expression evaluated with . set to the context node. Fails when not jq-truthy.
           */
          test: string;
          /**
           * jq expression evaluating to a string (interpolation supported). If the value does not start with a double quote, quotes are added implicitly for parsing.
           */
          message?: string;
        }[]
      ];
    }[]
  ];
  /**
   * Sugar for a rule with context ".". String, object, or array of those; all append to one context="." rule.
   */
  assert?:
    | string
    | {
        test: string;
        message?: string;
      }
    | [
        (
          | string
          | {
              test: string;
              message?: string;
            }
        ),
        ...(
          | string
          | {
              test: string;
              message?: string;
            }
        )[]
      ];
  [k: string]: unknown | undefined;
}
