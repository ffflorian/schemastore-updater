/* eslint-disable */

/**
 * @minItems 1
 */
export type Rule =
  | boolean
  | {
      /**
       * Severity level. Level "error" will cause exit code 2.
       */
      severity?: 'default' | 'error' | 'warning' | 'warn' | 'off' | 'none';
      [k: string]: unknown | undefined;
    }
  | [unknown, ...unknown[]];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options = ['array' | 'generic' | 'array-simple'];
/**
 * @minItems 1
 */
export type Options1 = [string, ...string[]];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Items = [string] | [string, string];
/**
 * @minItems 1
 */
export type Options2 = [Items, ...Items[]];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options3 = ['always-prefix' | 'never-prefix'];
/**
 * @minItems 1
 * @maxItems 4
 */
export type Options4 =
  | ['no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property']
  | [
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property'
    ]
  | [
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property'
    ]
  | [
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property',
      'no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property'
    ];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options6 =
  | ['ignore-params' | 'ignore-properties']
  | ['ignore-params' | 'ignore-properties', 'ignore-params' | 'ignore-properties'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options7 = ['allow-declarations'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options8 = ['ignore-static'];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options10 =
  | [
      | 'check-parameters'
      | {
          'ignore-pattern'?: string;
        }
    ]
  | [
      (
        | 'check-parameters'
        | {
            'ignore-pattern'?: string;
          }
      ),
      (
        | 'check-parameters'
        | {
            'ignore-pattern'?: string;
          }
      )
    ];
export type Options11 = 'only-inline-lambdas'[];
/**
 * @minItems 1
 * @maxItems 8
 */
export type Options12 =
  | [
      | 'allow-null-union'
      | 'allow-undefined-union'
      | 'allow-string'
      | 'allow-enum'
      | 'allow-number'
      | 'allow-mix'
      | 'allow-boolean-or-undefined'
      | 'ignore-rhs'
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ]
  | [
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      ),
      (
        | 'allow-null-union'
        | 'allow-undefined-union'
        | 'allow-string'
        | 'allow-enum'
        | 'allow-number'
        | 'allow-mix'
        | 'allow-boolean-or-undefined'
        | 'ignore-rhs'
      )
    ];
/**
 * @minItems 1
 * @maxItems 9
 */
export type Options13 =
  | [
      | 'call-signature'
      | 'arrow-call-signature'
      | 'parameter'
      | 'arrow-parameter'
      | 'property-declaration'
      | 'variable-declaration'
      | 'member-variable-declaration'
      | 'object-destructuring'
      | 'array-destructuring'
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ]
  | [
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      ),
      (
        | 'call-signature'
        | 'arrow-call-signature'
        | 'parameter'
        | 'arrow-parameter'
        | 'property-declaration'
        | 'variable-declaration'
        | 'member-variable-declaration'
        | 'object-destructuring'
        | 'array-destructuring'
      )
    ];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options14 =
  | [
      {
        'call-signature'?: 'nospace' | 'onespace' | 'space';
        'index-signature'?: 'nospace' | 'onespace' | 'space';
        parameter?: 'nospace' | 'onespace' | 'space';
        'property-declaration'?: 'nospace' | 'onespace' | 'space';
        'variable-declaration'?: 'nospace' | 'onespace' | 'space';
      }
    ]
  | [
      {
        'call-signature'?: 'nospace' | 'onespace' | 'space';
        'index-signature'?: 'nospace' | 'onespace' | 'space';
        parameter?: 'nospace' | 'onespace' | 'space';
        'property-declaration'?: 'nospace' | 'onespace' | 'space';
        'variable-declaration'?: 'nospace' | 'onespace' | 'space';
      },
      {
        'call-signature'?: 'nospace' | 'onespace' | 'space';
        'index-signature'?: 'nospace' | 'onespace' | 'space';
        parameter?: 'nospace' | 'onespace' | 'space';
        'property-declaration'?: 'nospace' | 'onespace' | 'space';
        'variable-declaration'?: 'nospace' | 'onespace' | 'space';
      }
    ];
/**
 * @minItems 1
 * @maxItems 5
 */
export type Options15 =
  | ['arguments' | 'elements' | 'members' | 'parameters' | 'statements']
  | [
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements'
    ]
  | [
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements'
    ]
  | [
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements'
    ]
  | [
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements',
      'arguments' | 'elements' | 'members' | 'parameters' | 'statements'
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options16 = ['ban-single-arg-parens'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options17 = ['multiline'];
/**
 * @minItems 1
 */
export type Options18 = [
  (
    | string
    | [string]
    | [string, string]
    | [string, string, string]
    | {
        name: string | [string] | [string, string] | [string, string, string];
        message?: string;
      }
  ),
  ...(
    | string
    | [string]
    | [string, string]
    | [string, string, string]
    | {
        name: string | [string] | [string, string] | [string, string, string];
        message?: string;
      }
  )[]
];
/**
 * @minItems 1
 * @maxItems 4
 */
export type Options19 =
  | [
      | ('check-space' | 'check-lowercase' | 'check-uppercase')
      | {
          'ignore-words'?: string[];
          'ignore-pattern'?: string;
          [k: string]: unknown | undefined;
        }
    ]
  | [
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      ),
      (
        | ('check-space' | 'check-lowercase' | 'check-uppercase')
        | {
            'ignore-words'?: string[];
            'ignore-pattern'?: string;
            [k: string]: unknown | undefined;
          }
      )
    ];
/**
 * @minItems 1
 * @maxItems 10
 */
export type Options20 =
  | [
      | (
          | 'classes'
          | 'enums'
          | 'enum-members'
          | 'functions'
          | 'interfaces'
          | 'methods'
          | 'namespaces'
          | 'properties'
          | 'types'
          | 'variables'
        )
      | {
          classes?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          enums?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          'enum-members'?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          functions?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          interfaces?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          methods?: {
            locations?: 'all' | 'instance' | 'static';
            privacies?: 'all' | 'private' | 'protected' | 'public';
          };
          namespaces?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          properties?: {
            locations?: 'all' | 'instance' | 'static';
            privacies?: 'all' | 'private' | 'protected' | 'public';
          };
          types?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          variables?: {
            visibilities?: 'all' | 'exported' | 'internal';
          };
          [k: string]: unknown | undefined;
        }
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ]
  | [
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      ),
      (
        | (
            | 'classes'
            | 'enums'
            | 'enum-members'
            | 'functions'
            | 'interfaces'
            | 'methods'
            | 'namespaces'
            | 'properties'
            | 'types'
            | 'variables'
          )
        | {
            classes?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            enums?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            'enum-members'?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            functions?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            interfaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            methods?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            namespaces?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            properties?: {
              locations?: 'all' | 'instance' | 'static';
              privacies?: 'all' | 'private' | 'protected' | 'public';
            };
            types?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            variables?: {
              visibilities?: 'all' | 'exported' | 'internal';
            };
            [k: string]: unknown | undefined;
          }
      )
    ];
export type Options21 = ('as-needed' | 'ignore-same-line')[];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options22 = [number];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options23 = [string] | [string, string];
/**
 * @minItems 1
 */
export type Options24 = [
  (
    | string
    | {
        /**
         * @minItems 1
         */
        [k: string]: [string, ...string[]] | undefined;
      }
    | string[]
  ),
  ...(
    | string
    | {
        /**
         * @minItems 1
         */
        [k: string]: [string, ...string[]] | undefined;
      }
    | string[]
  )[]
];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options25 = ['tabs' | 'spaces'] | ['tabs' | 'spaces', 2 | 4];
/**
 * @minItems 0
 * @maxItems 1
 */
export type Options26 = [] | ['check-multiline-start'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options27 = ['LF' | 'CRLF'];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options28 = [number] | [number, 'exclude-class-expressions'];
export type Options30 = (
  | number
  | {
      limit?: number;
      'ignore-pattern'?: string;
      'check-strings'?: boolean;
      'check-regex'?: boolean;
    }
)[];
/**
 * @minItems 1
 * @maxItems 15
 */
export type Kinds =
  | [
      | 'static-field'
      | 'instance-field'
      | 'static-method'
      | 'instance-method'
      | 'constructor'
      | 'public-static-field'
      | 'public-static-method'
      | 'protected-static-field'
      | 'protected-static-method'
      | 'private-static-field'
      | 'private-static-method'
      | 'public-instance-field'
      | 'protected-instance-field'
      | 'private-instance-field'
      | 'public-constructor'
      | 'protected-constructor'
      | 'private-constructor'
      | 'public-instance-method'
      | 'protected-instance-method'
      | 'private-instance-method'
      | 'public-static-accessor'
      | 'protected-static-accessor'
      | 'private-static-accessor'
      | 'public-instance-accessor'
      | 'protected-instance-accessor'
      | 'private-instance-accessor'
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ]
  | [
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      ),
      (
        | 'static-field'
        | 'instance-field'
        | 'static-method'
        | 'instance-method'
        | 'constructor'
        | 'public-static-field'
        | 'public-static-method'
        | 'protected-static-field'
        | 'protected-static-method'
        | 'private-static-field'
        | 'private-static-method'
        | 'public-instance-field'
        | 'protected-instance-field'
        | 'private-instance-field'
        | 'public-constructor'
        | 'protected-constructor'
        | 'private-constructor'
        | 'public-instance-method'
        | 'protected-instance-method'
        | 'private-instance-method'
        | 'public-static-accessor'
        | 'protected-static-accessor'
        | 'private-static-accessor'
        | 'public-instance-accessor'
        | 'protected-instance-accessor'
        | 'private-instance-accessor'
      )
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options31 = [Items1];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options35 = ['check-parameters'];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options36 =
  | ['allow-empty-catch' | 'allow-empty-functions']
  | ['allow-empty-catch' | 'allow-empty-functions', 'allow-empty-catch' | 'allow-empty-functions'];
/**
 * @minItems 0
 * @maxItems 3
 */
export type Options37 =
  [] | ['dev' | 'optional'] | ['dev' | 'optional', unknown[]] | ['dev' | 'optional', unknown[], unknown];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options38 = [Items2];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options39 = ['check-function-in-method'];
/**
 * @minItems 1
 */
export type Options40 = [number, ...number[]];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options41 = [Items3];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options43 = [Items4];
/**
 * @minItems 1
 * @maxItems 4
 */
export type Options44 =
  | ['ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines']
  | [
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines'
    ]
  | [
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines'
    ]
  | [
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines',
      'ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines'
    ];
export type Options45 = ('allow-constructor-only' | 'allow-empty-class' | 'allow-static-only')[];
/**
 * @minItems 1
 * @maxItems 3
 */
export type Options46 =
  | ['allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template']
  | [
      'allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template',
      'allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template'
    ]
  | [
      'allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template',
      'allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template',
      'allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template'
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options47 = ['ignore-arrow-function-shorthand'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options48 = ['always' | 'as-needed' | 'consistent' | 'consistent-as-needed'];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options49 = ['always' | 'never'] | ['always' | 'never', 'always' | 'never'];
/**
 * @minItems 1
 * @maxItems 4
 */
export type Options50 =
  | ['ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first']
  | [
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first'
    ]
  | [
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first'
    ]
  | [
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first',
      'ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first'
    ];
/**
 * @minItems 1
 * @maxItems 5
 */
export type Options51 =
  | ['check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace']
  | [
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace'
    ]
  | [
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace'
    ]
  | [
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace'
    ]
  | [
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace',
      'check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace'
    ];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options52 = ['ignore-for-loop'];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options53 =
  | ['allow-declarations' | 'allow-named-functions']
  | ['allow-declarations' | 'allow-named-functions', 'allow-declarations' | 'allow-named-functions'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options54 = [Items5];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options55 = ['check-else-if'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options56 = [Items6];
/**
 * @minItems 1
 * @maxItems 2
 */
export type Options57 =
  ['allow-public' | 'allow-protected'] | ['allow-public' | 'allow-protected', 'allow-public' | 'allow-protected'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options58 = [Items7];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options59 = ['allow-single-concat'];
/**
 * @minItems 1
 * @maxItems 4
 */
export type Options60 =
  | ['single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template']
  | [
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template'
    ]
  | [
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template'
    ]
  | [
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template',
      'single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template'
    ];
/**
 * @minItems 1
 * @maxItems 3
 */
export type Options61 =
  | ['always' | 'never']
  | ['always' | 'never', 'ignore-interfaces' | 'ignore-bound-class-methods' | 'strict-bound-class-methods']
  | ['always' | 'never', 'ignore-interfaces' | 'ignore-bound-class-methods' | 'strict-bound-class-methods', unknown];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options62 = [Items8];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options64 = ['always'];
/**
 * @minItems 1
 * @maxItems 1
 */
export type Options65 = [Items9];
/**
 * @minItems 1
 * @maxItems 3
 */
export type Options66 =
  | ['allow-null-check' | 'allow-undefined-check']
  | ['allow-null-check' | 'allow-undefined-check', 'allow-null-check' | 'allow-undefined-check']
  | [
      'allow-null-check' | 'allow-undefined-check',
      'allow-null-check' | 'allow-undefined-check',
      'allow-null-check' | 'allow-undefined-check'
    ];
/**
 * @minItems 1
 * @maxItems 7
 */
export type Options67 =
  | [
      | 'check-format'
      | 'require-const-for-all-caps'
      | 'allow-leading-underscore'
      | 'allow-trailing-underscore'
      | 'allow-pascal-case'
      | 'allow-snake-case'
      | 'ban-keywords'
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ]
  | [
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      ),
      (
        | 'check-format'
        | 'require-const-for-all-caps'
        | 'allow-leading-underscore'
        | 'allow-trailing-underscore'
        | 'allow-pascal-case'
        | 'allow-snake-case'
        | 'ban-keywords'
      )
    ];
export type Options68 = (
  | 'check-branch'
  | 'check-decl'
  | 'check-operator'
  | 'check-module'
  | 'check-separator'
  | 'check-rest-spread'
  | 'check-type'
  | 'check-typecast'
  | 'check-type-operator'
  | 'check-preblock'
  | 'check-postbrace'
)[];

export interface JSONSchemaForTheTSLintConfigurationFiles {
  /**
   * The name of a built-in configuration preset, or a path or array of paths to other configuration files which are extended by this configuration. These values are handled using node module resolution semantics.
   */
  extends?: string | string[];
  /**
   * A path to a directory or an array of paths to directories of custom rules. These values are handled using node module resolution semantics, if an `index.js` is placed in your rules directory.
   */
  rulesDirectory?: string | string[];
  /**
   * A map of rules that will be used to lint TypeScript files. These rules apply to `.ts` and `.tsx` files.
   */
  rules?: TsRules & Rules;
  jsRules?: Rules;
  /**
   * The severity level used when a rule specifies "default" as its severity level. If undefined, "error" is used.
   */
  defaultSeverity?: 'error' | 'warning' | 'warn' | 'off' | 'none';
  /**
   * Additional linter options.
   */
  linterOptions?: {
    /**
     * An array of globs. Any file matching these globs will not be linted. All exclude patterns are relative to the configuration file they were specified in.
     */
    exclude?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface TsRules {
  /**
   * Enforces function overloads to be consecutive.
   */
  'adjacent-overload-signatures'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Bans "// @ts-ignore" comments from being used.
   */
  'ban-ts-ignore'?: (Rule & []) | [boolean];
  /**
   * Requires using either 'T[]' or 'Array<T>' for arrays.
   */
  'array-type'?: Rule &
    (
      | []
      | ([boolean, ...('array' | 'generic' | 'array-simple')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options | ('array' | 'generic' | 'array-simple');
          severity?: unknown;
        })
    );
  /**
   * Warns for an awaited value that is not a Promise.
   */
  'await-promise'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options1 | string;
          severity?: unknown;
        })
    );
  /**
   * Bans specific types from being used. Does not ban the corresponding runtime objects from being used.
   */
  'ban-types'?: Rule &
    (
      | []
      | ([boolean, ...Items[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options2 | Items;
          severity?: unknown;
        })
    );
  /**
   * An interface or literal type with just a call signature can be written as a function type.
   */
  'callable-types'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires interface names to begin with a capital 'I'
   */
  'interface-name'?: Rule &
    (
      | []
      | ([boolean, ...('always-prefix' | 'never-prefix')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options3 | ('always-prefix' | 'never-prefix');
          severity?: unknown;
        })
    );
  /**
   * Prefer an interface declaration over a type literal (`type T = { ... }`)
   */
  'interface-over-type-literal'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires that a default import have the same name as the declaration it imports.
   * Does nothing for anonymous default exports.
   */
  'match-default-export-name'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires explicit visibility declarations for class members.
   */
  'member-access'?: Rule &
    (
      | []
      | ([boolean, ...('no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options4 | ('no-public' | 'check-accessor' | 'check-constructor' | 'check-parameter-property');
          severity?: unknown;
        })
    );
  /**
   * Requires the use of `as Type` for type assertions instead of `<Type>`.
   */
  'no-angle-bracket-type-assertion'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows usages of `any` as a type declaration.
   */
  'no-any'?: Rule &
    (
      | []
      | [boolean]
      | ([
          boolean,
          {
            'ignore-rest-args'?: boolean;
            [k: string]: unknown | undefined;
          }
        ] & {
          severity?: unknown;
        })
    );
  /**
   * Warns on comparison to a boolean literal, as in `x === true`.
   */
  'no-boolean-literal-compare'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Forbids empty interfaces.
   */
  'no-empty-interface'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Promises returned by functions must be handled appropriately.
   */
  'no-floating-promises'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options1 | string;
          severity?: unknown;
        })
    );
  /**
   * Disallows explicit type declarations for variables or parameters initialized to a number, string, or boolean.
   */
  'no-inferrable-types'?: Rule &
    (
      | []
      | ([boolean, ...('ignore-params' | 'ignore-properties')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options6 | ('ignore-params' | 'ignore-properties');
          severity?: unknown;
        })
    );
  /**
   * Disallow type inference of {} (empty object type) at function and constructor call sites
   */
  'no-inferred-empty-object-type'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows internal `module`
   */
  'no-internal-module'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows mergeable namespaces in the same file.
   */
  'no-mergeable-namespace'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Warns on apparent attempts to define constructors for interfaces or `new` for classes.
   */
  'no-misused-new'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows use of internal `module`s and `namespace`s.
   */
  'no-namespace'?: Rule &
    (
      | []
      | ([boolean, ...'allow-declarations'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options7 | 'allow-declarations';
          severity?: unknown;
        })
    );
  /**
   * Disallows non-null assertions.
   */
  'no-non-null-assertion'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Forbids an object literal to appear in a type assertion expression.
   * Casting to `any` is still allowed.
   */
  'no-object-literal-type-assertion'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows parameter properties in class constructors.
   */
  'no-parameter-properties'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Forbids JSDoc which duplicates TypeScript functionality.
   */
  'no-redundant-jsdoc'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Don't `<reference types="foo" />` if you import `foo` anyway.
   */
  'no-reference-import'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Warns when a method is used as outside of a method call.
   */
  'no-unbound-method'?: Rule &
    (
      | []
      | ([boolean, ...'ignore-static'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options8 | 'ignore-static';
          severity?: unknown;
        })
    );
  /**
   * Warns when a namespace qualifier (`A.x`) is unnecessary.
   */
  'no-unnecessary-qualifier'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Warns if a type assertion does not change the type of an expression.
   */
  'no-unnecessary-type-assertion'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options1 | string;
          severity?: unknown;
        })
    );
  /**
   * Warns when using an expression of type 'any' in a dynamic way.
   * Uses are only allowed if they would work for `{} | null | undefined`.
   * Type casts and tests are allowed.
   * Expressions that work on all values (such as `"" + x`) are allowed.
   */
  'no-unsafe-any'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows unused imports, variables, functions and private class members. Similar to tsc's --noUnusedParameters and --noUnusedLocals options, but does not interrupt code compilation.
   */
  'no-unused-variable'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | 'check-parameters'
            | {
                'ignore-pattern'?: string;
              }
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options10
            | (
                | 'check-parameters'
                | {
                    'ignore-pattern'?: string;
                  }
              );
          severity?: unknown;
        })
    );
  /**
   * Disallows the use of require statements except in import statements.
   */
  'no-var-requires'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires that private variables are marked as `readonly` if they're never modified outside of the constructor.
   */
  'prefer-readonly'?: Rule &
    (
      | []
      | ([boolean, ...'only-inline-lambdas'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options11 | 'only-inline-lambdas';
          severity?: unknown;
        })
    );
  /**
   * Restricts the types allowed in boolean expressions. By default only booleans are allowed.
   *
   * The following nodes are checked:
   * * Arguments to the `!`, `&&`, and `||` operators
   * * The condition in a conditional expression (`cond ? x : y`)
   * * Conditions for `if`, `for`, `while`, and `do-while` statements.
   */
  'strict-boolean-expressions'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | 'allow-null-union'
            | 'allow-undefined-union'
            | 'allow-string'
            | 'allow-enum'
            | 'allow-number'
            | 'allow-mix'
            | 'allow-boolean-or-undefined'
            | 'ignore-rhs'
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options12
            | (
                | 'allow-null-union'
                | 'allow-undefined-union'
                | 'allow-string'
                | 'allow-enum'
                | 'allow-number'
                | 'allow-mix'
                | 'allow-boolean-or-undefined'
                | 'ignore-rhs'
              );
          severity?: unknown;
        })
    );
  /**
   * Warns for type predicates that are always true or always false.
   * Works for 'typeof' comparisons to constants (e.g. 'typeof foo === "string"'), and equality comparison to 'null'/'undefined'.
   * (TypeScript won't let you compare '1 === 2', but it has an exception for '1 === undefined'.)
   * Does not yet work for 'instanceof'.
   * Does *not* warn for 'if (x.y)' where 'x.y' is always truthy. For that, see strict-boolean-expressions.
   *
   * This rule requires `strictNullChecks` to work properly.
   */
  'strict-type-predicates'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires type definitions to exist.
   */
  typedef?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | 'call-signature'
            | 'arrow-call-signature'
            | 'parameter'
            | 'arrow-parameter'
            | 'property-declaration'
            | 'variable-declaration'
            | 'member-variable-declaration'
            | 'object-destructuring'
            | 'array-destructuring'
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options13
            | (
                | 'call-signature'
                | 'arrow-call-signature'
                | 'parameter'
                | 'arrow-parameter'
                | 'property-declaration'
                | 'variable-declaration'
                | 'member-variable-declaration'
                | 'object-destructuring'
                | 'array-destructuring'
              );
          severity?: unknown;
        })
    );
  /**
   * Requires or disallows whitespace for type definitions.
   */
  'typedef-whitespace'?: Rule &
    (
      | []
      | [boolean]
      | [
          boolean,
          {
            'call-signature'?: 'nospace' | 'onespace' | 'space';
            'index-signature'?: 'nospace' | 'onespace' | 'space';
            parameter?: 'nospace' | 'onespace' | 'space';
            'property-declaration'?: 'nospace' | 'onespace' | 'space';
            'variable-declaration'?: 'nospace' | 'onespace' | 'space';
          }
        ]
      | ([
          boolean,
          {
            'call-signature'?: 'nospace' | 'onespace' | 'space';
            'index-signature'?: 'nospace' | 'onespace' | 'space';
            parameter?: 'nospace' | 'onespace' | 'space';
            'property-declaration'?: 'nospace' | 'onespace' | 'space';
            'variable-declaration'?: 'nospace' | 'onespace' | 'space';
          },
          {
            'call-signature'?: 'nospace' | 'onespace' | 'space';
            'index-signature'?: 'nospace' | 'onespace' | 'space';
            parameter?: 'nospace' | 'onespace' | 'space';
            'property-declaration'?: 'nospace' | 'onespace' | 'space';
            'variable-declaration'?: 'nospace' | 'onespace' | 'space';
          }
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options14
            | {
                'call-signature'?: 'nospace' | 'onespace' | 'space';
                'index-signature'?: 'nospace' | 'onespace' | 'space';
                parameter?: 'nospace' | 'onespace' | 'space';
                'property-declaration'?: 'nospace' | 'onespace' | 'space';
                'variable-declaration'?: 'nospace' | 'onespace' | 'space';
              };
          severity?: unknown;
        })
    );
  /**
   * Checks that type literal members are separated by semicolons.
   * Enforces a trailing semicolon for multiline type literals.
   */
  'type-literal-delimiter'?: Rule &
    (
      | []
      | [boolean]
      | ([
          boolean,
          {
            singleLine?: 'always' | 'never';
            [k: string]: unknown | undefined;
          }
        ] & {
          severity?: unknown;
        })
    );
  /**
   * Warns for any two overloads that could be unified into one by using a union or an optional/rest parameter.
   */
  'unified-signatures'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Warns if an explicitly specified type argument is the default for that type parameter.
   */
  'use-default-type-parameter'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Prevents using the built-in Function constructor.
   */
  'function-constructor'?: (Rule & []) | [boolean];
  [k: string]: unknown | undefined;
}
export interface Rules {
  /**
   * Enforces vertical alignment.
   */
  align?: Rule &
    (
      | []
      | ([boolean, ...('arguments' | 'elements' | 'members' | 'parameters' | 'statements')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options15 | ('arguments' | 'elements' | 'members' | 'parameters' | 'statements');
          severity?: unknown;
        })
    );
  /**
   * Requires parentheses around the parameters of arrow function definitions.
   */
  'arrow-parens'?: Rule &
    (
      | []
      | ([boolean, ...'ban-single-arg-parens'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options16 | 'ban-single-arg-parens';
          severity?: unknown;
        })
    );
  /**
   * Suggests to convert `() => { return x; }` to `() => x`.
   */
  'arrow-return-shorthand'?: Rule &
    (
      | []
      | ([boolean, ...'multiline'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options17 | 'multiline';
          severity?: unknown;
        })
    );
  /**
   * Bans the use of specific functions or global methods.
   */
  ban?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | string
            | [string]
            | [string, string]
            | [string, string, string]
            | {
                name: string | [string] | [string, string] | [string, string, string];
                message?: string;
              }
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options18
            | (
                | string
                | [string]
                | [string, string]
                | [string, string, string]
                | {
                    name: string | [string] | [string, string] | [string, string, string];
                    message?: string;
                  }
              );
          severity?: unknown;
        })
    );
  /**
   * Bans the comma operator.
   */
  'ban-comma-operator'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * In a binary expression, a literal should always be on the right-hand side if possible.
   * For example, prefer 'x + 1' over '1 + x'.
   */
  'binary-expression-operand-order'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces PascalCased class and interface names.
   */
  'class-name'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces formatting rules for single-line comments.
   */
  'comment-format'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | ('check-space' | 'check-lowercase' | 'check-uppercase')
            | {
                'ignore-words'?: string[];
                'ignore-pattern'?: string;
                [k: string]: unknown | undefined;
              }
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options19
            | (
                | ('check-space' | 'check-lowercase' | 'check-uppercase')
                | {
                    'ignore-words'?: string[];
                    'ignore-pattern'?: string;
                    [k: string]: unknown | undefined;
                  }
              );
          severity?: unknown;
        })
    );
  /**
   * Enforces documentation for important items be filled out.
   */
  'completed-docs'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | (
                | 'classes'
                | 'enums'
                | 'enum-members'
                | 'functions'
                | 'interfaces'
                | 'methods'
                | 'namespaces'
                | 'properties'
                | 'types'
                | 'variables'
              )
            | {
                classes?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                enums?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                'enum-members'?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                functions?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                interfaces?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                methods?: {
                  locations?: 'all' | 'instance' | 'static';
                  privacies?: 'all' | 'private' | 'protected' | 'public';
                };
                namespaces?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                properties?: {
                  locations?: 'all' | 'instance' | 'static';
                  privacies?: 'all' | 'private' | 'protected' | 'public';
                };
                types?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                variables?: {
                  visibilities?: 'all' | 'exported' | 'internal';
                };
                [k: string]: unknown | undefined;
              }
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options20
            | (
                | (
                    | 'classes'
                    | 'enums'
                    | 'enum-members'
                    | 'functions'
                    | 'interfaces'
                    | 'methods'
                    | 'namespaces'
                    | 'properties'
                    | 'types'
                    | 'variables'
                  )
                | {
                    classes?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    enums?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    'enum-members'?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    functions?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    interfaces?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    methods?: {
                      locations?: 'all' | 'instance' | 'static';
                      privacies?: 'all' | 'private' | 'protected' | 'public';
                    };
                    namespaces?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    properties?: {
                      locations?: 'all' | 'instance' | 'static';
                      privacies?: 'all' | 'private' | 'protected' | 'public';
                    };
                    types?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    variables?: {
                      visibilities?: 'all' | 'exported' | 'internal';
                    };
                    [k: string]: unknown | undefined;
                  }
              );
          severity?: unknown;
        })
    );
  /**
   * Enforces braces for `if`/`for`/`do`/`while` statements.
   */
  curly?: Rule &
    (
      | []
      | ([boolean, ...('as-needed' | 'ignore-same-line')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options21 | ('as-needed' | 'ignore-same-line');
          severity?: unknown;
        })
    );
  /**
   * Enforces a threshold of cyclomatic complexity.
   */
  'cyclomatic-complexity'?: Rule &
    (
      | []
      | ([boolean, ...number[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options22 | number;
          severity?: unknown;
        })
    );
  /**
   * Warns when deprecated APIs are used.
   */
  deprecation?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces UTF-8 file encoding.
   */
  encoding?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Ensures the file ends with a newline.
   */
  eofline?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces a certain header comment for all files, matched by a regular expression.
   */
  'file-header'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options23 | string;
          severity?: unknown;
        })
    );
  /**
   * Enforces a consistent file naming convention.
   *
   * @minItems 2
   */
  'file-name-casing'?: [
    boolean,
    (
      | ('camel-case' | 'pascal-case' | 'kebab-case' | 'snake-case')
      | {
          [k: string]: 'camel-case' | 'pascal-case' | 'kebab-case' | 'snake-case' | undefined;
        }
    )
  ];
  /**
   * Requires a `for ... in` statement to be filtered with an `if` statement.
   */
  forin?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows importing the specified modules directly via `import` and `require`.
   * Instead only sub modules may be imported from that module.
   */
  'import-blacklist'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | string
            | {
                /**
                 * @minItems 1
                 */
                [k: string]: [string, ...string[]] | undefined;
              }
            | string[]
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options24
            | (
                | string
                | {
                    /**
                     * @minItems 1
                     */
                    [k: string]: [string, ...string[]] | undefined;
                  }
                | string[]
              );
          severity?: unknown;
        })
    );
  /**
   * Ensures proper spacing between import statement keywords
   */
  'import-spacing'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces indentation with tabs or spaces.
   */
  indent?: Rule &
    (
      | []
      | [boolean]
      | [boolean, 'tabs' | 'spaces']
      | ([boolean, 'tabs' | 'spaces', 2 | 4] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options25 | ('tabs' | 'spaces');
          severity?: unknown;
        })
    );
  /**
   * Enforces basic format rules for JSDoc comments.
   */
  'jsdoc-format'?: Rule &
    (
      | []
      | ([boolean, ...'check-multiline-start'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options26 | 'check-multiline-start';
          severity?: unknown;
        })
    );
  /**
   * Only allows labels in sensible locations.
   */
  'label-position'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces a consistent linebreak style.
   */
  'linebreak-style'?: Rule &
    (
      | []
      | ([boolean, ...('LF' | 'CRLF')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options27 | ('LF' | 'CRLF');
          severity?: unknown;
        })
    );
  /**
   * A file may not contain more than the specified number of classes
   */
  'max-classes-per-file'?: Rule &
    (
      | [boolean, number]
      | ([boolean, number, 'exclude-class-expressions'] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options28 | number;
          severity?: unknown;
        })
    );
  /**
   * Requires files to remain under a certain number of lines
   */
  'max-file-line-count'?: Rule &
    (
      | []
      | ([boolean, ...number[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options22 | number;
          severity?: unknown;
        })
    );
  /**
   * Requires lines to be under a certain max length.
   */
  'max-line-length'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | number
            | {
                limit?: number;
                'ignore-pattern'?: string;
                'check-strings'?: boolean;
                'check-regex'?: boolean;
              }
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options30
            | (
                | number
                | {
                    limit?: number;
                    'ignore-pattern'?: string;
                    'check-strings'?: boolean;
                    'check-regex'?: boolean;
                  }
              );
          severity?: unknown;
        })
    );
  /**
   * Enforces member ordering.
   */
  'member-ordering'?: Rule &
    (
      | []
      | ([boolean, ...Items1[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options31 | Items1;
          severity?: unknown;
        })
    );
  /**
   * Enforces blank line before return when not the only line in the block.
   */
  'newline-before-return'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires that chained method calls be broken apart onto separate lines.
   */
  'newline-per-chained-call'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires parentheses when invoking a constructor via the `new` keyword.
   */
  'new-parens'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows use of `arguments.callee`.
   */
  'no-arg'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows bitwise operators.
   */
  'no-bitwise'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows any type of assignment in conditionals.
   */
  'no-conditional-assignment'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows one or more blank lines in a row.
   */
  'no-consecutive-blank-lines'?: Rule &
    (
      | []
      | ([boolean, ...number[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options22 | number;
          severity?: unknown;
        })
    );
  /**
   * Bans the use of specified `console` methods.
   */
  'no-console'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options1 | string;
          severity?: unknown;
        })
    );
  /**
   * Disallows access to the constructors of `String`, `Number`, and `Boolean`.
   */
  'no-construct'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows `debugger` statements.
   */
  'no-debugger'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows default exports in ES6-style modules.
   */
  'no-default-export'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows multiple import statements from the same module.
   */
  'no-duplicate-imports'?: Rule &
    (
      | []
      | [boolean]
      | ([boolean, Options34] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options34;
          severity?: unknown;
        })
    );
  /**
   * Warns if 'super()' appears twice in a constructor.
   */
  'no-duplicate-super'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Prevents duplicate cases in switch statements.
   */
  'no-duplicate-switch-case'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows duplicate variable declarations in the same block scope.
   */
  'no-duplicate-variable'?: Rule &
    (
      | []
      | ([boolean, ...'check-parameters'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options35 | 'check-parameters';
          severity?: unknown;
        })
    );
  /**
   * Bans usage of the delete operator with computed key expressions.
   */
  'no-dynamic-delete'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows empty blocks.
   */
  'no-empty'?: Rule &
    (
      | []
      | ([boolean, ...('allow-empty-catch' | 'allow-empty-functions')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options36 | ('allow-empty-catch' | 'allow-empty-functions');
          severity?: unknown;
        })
    );
  /**
   * Disallows `eval` function invocations.
   */
  'no-eval'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Forbid for…in statements
   * https://palantir.github.io/tslint/rules/no-for-in/
   */
  'no-for-in'?: (Rule & []) | [boolean];
  /**
   * Disallows iterating over an array with a for-in loop.
   */
  'no-for-in-array'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows importing modules that are not listed as dependency in the project's package.json.
   */
  'no-implicit-dependencies'?: Rule &
    (
      | []
      | ([boolean, ...(('dev' | 'optional') & unknown[])[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options37 | ('dev' | 'optional') | unknown[];
          severity?: unknown;
        })
    );
  /**
   * Avoid import statements with side-effect.
   */
  'no-import-side-effect'?: Rule &
    (
      | []
      | ([boolean, ...Items2[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options38 | Items2;
          severity?: unknown;
        })
    );
  /**
   * Warns on use of `${` in non-template strings.
   */
  'no-invalid-template-strings'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows using the `this` keyword outside of classes.
   */
  'no-invalid-this'?: Rule &
    (
      | []
      | ([boolean, ...'check-function-in-method'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options39 | 'check-function-in-method';
          severity?: unknown;
        })
    );
  /**
   * Disallow irregular whitespace outside of strings and comments
   */
  'no-irregular-whitespace'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows the use constant number values outside of variable assignments.
   * When no list of allowed values is specified, -1, 0 and 1 are allowed by default.
   */
  'no-magic-numbers'?: Rule &
    (
      | []
      | ([boolean, ...number[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options40 | number;
          severity?: unknown;
        })
    );
  /**
   * Forbid explicitly declared or implicitly returned union types with both null and undefined as members
   * https://palantir.github.io/tslint/rules/no-null-undefined-union/
   */
  'no-null-undefined-union'?: (Rule & []) | [boolean];
  /**
   * Disallows use of the `null` keyword literal.
   */
  'no-null-keyword'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows reassigning parameters.
   */
  'no-parameter-reassignment'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows `/// <reference path=>` imports (use ES6-style imports instead).
   */
  'no-reference'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows unnecessary `return await`.
   */
  'no-return-await'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows invocation of `require()`.
   */
  'no-require-imports'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows shadowing variable declarations.
   */
  'no-shadowed-variable'?: Rule &
    (
      | []
      | ([boolean, ...Items3[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options41 | Items3;
          severity?: unknown;
        })
    );
  /**
   * Forbids array literals to contain missing elements.
   */
  'no-sparse-arrays'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Forbids unnecessary string literal property access.
   * Allows `obj["prop-erty"]` (can't be a regular property access).
   * Disallows `obj["property"]` (should be `obj.property`).
   */
  'no-string-literal'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Flags throwing plain strings or concatenations of strings because only Errors produce proper stack traces.
   */
  'no-string-throw'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows importing any submodule.
   */
  'no-submodule-imports'?: Rule &
    (
      | []
      | ([boolean, ...string[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options1 | string;
          severity?: unknown;
        })
    );
  /**
   * Disallows falling through case statements.
   */
  'no-switch-case-fall-through'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows unnecessary references to `this`.
   */
  'no-this-assignment'?: Rule &
    (
      | []
      | ([boolean, ...Items4[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options43 | Items4;
          severity?: unknown;
        })
    );
  /**
   * Disallows trailing whitespace at the end of a line.
   */
  'no-trailing-whitespace'?: Rule &
    (
      | []
      | ([boolean, ...('ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options44 | ('ignore-comments' | 'ignore-jsdoc' | 'ignore-template-strings' | 'ignore-blank-lines');
          severity?: unknown;
        })
    );
  /**
   * Replaces `x => f(x)` with just `f`.
   * To catch more cases, enable `only-arrow-functions` and `arrow-return-shorthand` too.
   */
  'no-unnecessary-callback-wrapper'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows classes that are not strictly necessary.
   */
  'no-unnecessary-class'?: Rule &
    (
      | []
      | ([boolean, ...('allow-constructor-only' | 'allow-empty-class' | 'allow-static-only')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options45 | ('allow-constructor-only' | 'allow-empty-class' | 'allow-static-only');
          severity?: unknown;
        })
    );
  /**
   * Forbids a 'var'/'let' statement or destructuring initializer to be initialized to 'undefined'.
   */
  'no-unnecessary-initializer'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows control flow statements, such as `return`, `continue` `break` and `throws` in finally blocks.
   */
  'no-unsafe-finally'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows unused expression statements.
   */
  'no-unused-expression'?: Rule &
    (
      | []
      | ([boolean, ...('allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options46 | ('allow-fast-null-checks' | 'allow-new' | 'allow-tagged-template');
          severity?: unknown;
        })
    );
  /**
   * Disallows usage of variables before their declaration.
   */
  'no-use-before-declare'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Disallows usage of the `var` keyword.
   */
  'no-var-keyword'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires expressions of type `void` to appear in statement position.
   */
  'no-void-expression'?: Rule &
    (
      | []
      | ([boolean, ...'ignore-arrow-function-shorthand'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options47 | 'ignore-arrow-function-shorthand';
          severity?: unknown;
        })
    );
  /**
   * Checks that decimal literals should begin with '0.' instead of just '.', and should not end with a trailing '0'.
   */
  'number-literal-format'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces consistent object literal property quote style.
   */
  'object-literal-key-quotes'?: Rule &
    (
      | []
      | ([boolean, ...('always' | 'as-needed' | 'consistent' | 'consistent-as-needed')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options48 | ('always' | 'as-needed' | 'consistent' | 'consistent-as-needed');
          severity?: unknown;
        })
    );
  /**
   * Enforces use of ES6 object literal shorthand when possible.
   */
  'object-literal-shorthand'?: Rule &
    (
      | []
      | ([boolean, ...('always' | 'never')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options49 | ('always' | 'never');
          severity?: unknown;
        })
    );
  /**
   * Checks ordering of keys in object literals.
   */
  'object-literal-sort-keys'?: Rule &
    (
      | []
      | ([boolean, ...('ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options50 | ('ignore-case' | 'locale-compare' | 'match-declaration-order' | 'shorthand-first');
          severity?: unknown;
        })
    );
  /**
   * Requires the specified tokens to be on the same line as the expression preceding them.
   */
  'one-line'?: Rule &
    (
      | []
      | ([boolean, ...('check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            Options51 | ('check-catch' | 'check-finally' | 'check-else' | 'check-open-brace' | 'check-whitespace');
          severity?: unknown;
        })
    );
  /**
   * Disallows multiple variable definitions in the same declaration statement.
   */
  'one-variable-per-declaration'?: Rule &
    (
      | []
      | ([boolean, ...'ignore-for-loop'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options52 | 'ignore-for-loop';
          severity?: unknown;
        })
    );
  /**
   * Disallows traditional (non-arrow) function expressions.
   */
  'only-arrow-functions'?: Rule &
    (
      | []
      | ([boolean, ...('allow-declarations' | 'allow-named-functions')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options53 | ('allow-declarations' | 'allow-named-functions');
          severity?: unknown;
        })
    );
  /**
   * Requires that import statements be alphabetized.
   */
  'ordered-imports'?: Rule &
    (
      | []
      | ([boolean, ...Items5[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options54 | Items5;
          severity?: unknown;
        })
    );
  /**
   * Recommends to use a conditional expression instead of assigning to the same thing in each branch of an if statement.
   */
  'prefer-conditional-expression'?: Rule &
    (
      | []
      | ([boolean, ...'check-else-if'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options55 | 'check-else-if';
          severity?: unknown;
        })
    );
  /**
   * Requires that variable declarations use `const` instead of `let` and `var` if possible.
   */
  'prefer-const'?: Rule &
    (
      | []
      | ([boolean, ...Items6[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options56 | Items6;
          severity?: unknown;
        })
    );
  /**
   * Recommends a 'for-of' loop over a standard 'for' loop if the index is only used to access the array being iterated.
   */
  'prefer-for-of'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Warns for class methods that do not use 'this'.
   */
  'prefer-function-over-method'?: Rule &
    (
      | []
      | ([boolean, ...('allow-public' | 'allow-protected')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options57 | ('allow-public' | 'allow-protected');
          severity?: unknown;
        })
    );
  /**
   * Prefer `foo(): void` over `foo: () => void` in interfaces and types.
   */
  'prefer-method-signature'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces the use of the ES2015 object spread operator over `Object.assign()` where appropriate.
   */
  'prefer-object-spread'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Prefer a `switch` statement to an `if` statement with simple `===` comparisons.
   */
  'prefer-switch'?: Rule &
    (
      | []
      | ([boolean, ...Items7[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options58 | Items7;
          severity?: unknown;
        })
    );
  /**
   * Prefer a template expression over string literal concatenation.
   */
  'prefer-template'?: Rule &
    (
      | []
      | ([boolean, ...'allow-single-concat'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options59 | 'allow-single-concat';
          severity?: unknown;
        })
    );
  /**
   * Prefer while loops instead of for loops without an initializer and incrementor.
   */
  'prefer-while'?: (Rule & []) | [boolean];
  /**
   * Force functions marked async contain an await or return statement
   * https://palantir.github.io/tslint/rules/no-async-without-await/
   */
  'no-async-without-await'?: (Rule & []) | [boolean];
  /**
   * Requires any function or method that returns a promise to be marked async.
   */
  'promise-function-async'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Requires single or double quotes for string literals.
   */
  quotemark?: Rule &
    (
      | []
      | ([boolean, ...('single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options60 | ('single' | 'double' | 'jsx-single' | 'jsx-double' | 'avoid-escape' | 'avoid-template');
          severity?: unknown;
        })
    );
  /**
   * Requires the radix parameter to be specified when calling `parseInt`.
   */
  radix?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * When adding two variables, operands must both be of type number or of type string.
   */
  'restrict-plus-operands'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Prefer `return;` in void functions and `return undefined;` in value-returning functions.
   */
  'return-undefined'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces consistent semicolon usage at the end of every statement.
   */
  semicolon?: Rule &
    (
      | []
      | [boolean]
      | [boolean, 'always' | 'never']
      | ([
          boolean,
          'always' | 'never',
          'ignore-interfaces' | 'ignore-bound-class-methods' | 'strict-bound-class-methods'
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options61 | ('always' | 'never');
          severity?: unknown;
        })
    );
  /**
   * Require or disallow a space before function parenthesis
   */
  'space-before-function-paren'?: Rule &
    (
      | []
      | ([boolean, ...Items8[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options62 | Items8;
          severity?: unknown;
        })
    );
  /**
   * Enforces spaces within parentheses or disallow them.
   */
  'space-within-parens'?: Rule &
    (
      | []
      | ([boolean, ...number[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options22 | number;
          severity?: unknown;
        })
    );
  /**
   * Require a `default` case in all `switch` statements.
   */
  'switch-default'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Checks whether the final clause of a switch statement ends in `break;`.
   */
  'switch-final-break'?: Rule &
    (
      | []
      | ([boolean, ...'always'[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options64 | 'always';
          severity?: unknown;
        })
    );
  /**
   * Requires or disallows trailing commas in array and object literals, destructuring assignments, function typings, named imports and exports and function parameters.
   */
  'trailing-comma'?: Rule &
    (
      | []
      | ([boolean, ...Items9[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options65 | Items9;
          severity?: unknown;
        })
    );
  /**
   * Requires `===` and `!==` in place of `==` and `!=`.
   */
  'triple-equals'?: Rule &
    (
      | []
      | ([boolean, ...('allow-null-check' | 'allow-undefined-check')[]] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?: Options66 | ('allow-null-check' | 'allow-undefined-check');
          severity?: unknown;
        })
    );
  /**
   * Makes sure result of `typeof` is compared to correct string values
   */
  'typeof-compare'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Enforces use of the `isNaN()` function to check for NaN references instead of a comparison to the `NaN` constant.
   */
  'use-isnan'?: Rule &
    (
      | []
      | ([boolean] & {
          severity?: unknown;
        })
    );
  /**
   * Checks variable names for various errors.
   */
  'variable-name'?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | 'check-format'
            | 'require-const-for-all-caps'
            | 'allow-leading-underscore'
            | 'allow-trailing-underscore'
            | 'allow-pascal-case'
            | 'allow-snake-case'
            | 'ban-keywords'
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options67
            | (
                | 'check-format'
                | 'require-const-for-all-caps'
                | 'allow-leading-underscore'
                | 'allow-trailing-underscore'
                | 'allow-pascal-case'
                | 'allow-snake-case'
                | 'ban-keywords'
              );
          severity?: unknown;
        })
    );
  /**
   * Enforces whitespace style conventions.
   */
  whitespace?: Rule &
    (
      | []
      | ([
          boolean,
          ...(
            | 'check-branch'
            | 'check-decl'
            | 'check-operator'
            | 'check-module'
            | 'check-separator'
            | 'check-rest-spread'
            | 'check-type'
            | 'check-typecast'
            | 'check-type-operator'
            | 'check-preblock'
            | 'check-postbrace'
          )[]
        ] & {
          /**
           * An option value or an array of multiple option values.
           */
          options?:
            | Options68
            | (
                | 'check-branch'
                | 'check-decl'
                | 'check-operator'
                | 'check-module'
                | 'check-separator'
                | 'check-rest-spread'
                | 'check-type'
                | 'check-typecast'
                | 'check-type-operator'
                | 'check-preblock'
                | 'check-postbrace'
              );
          severity?: unknown;
        })
    );
  [k: string]: unknown | undefined;
}
export interface Items1 {
  order?:
    | ('fields-first' | 'instance-sandwich' | 'statics-first')
    | [
        | (
            | 'static-field'
            | 'instance-field'
            | 'static-method'
            | 'instance-method'
            | 'constructor'
            | 'public-static-field'
            | 'public-static-method'
            | 'protected-static-field'
            | 'protected-static-method'
            | 'private-static-field'
            | 'private-static-method'
            | 'public-instance-field'
            | 'protected-instance-field'
            | 'private-instance-field'
            | 'public-constructor'
            | 'protected-constructor'
            | 'private-constructor'
            | 'public-instance-method'
            | 'protected-instance-method'
            | 'private-instance-method'
            | 'public-static-accessor'
            | 'protected-static-accessor'
            | 'private-static-accessor'
            | 'public-instance-accessor'
            | 'protected-instance-accessor'
            | 'private-instance-accessor'
          )
        | {
            name?: string;
            kinds?: Kinds;
          }
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ]
    | [
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        ),
        (
          | (
              | 'static-field'
              | 'instance-field'
              | 'static-method'
              | 'instance-method'
              | 'constructor'
              | 'public-static-field'
              | 'public-static-method'
              | 'protected-static-field'
              | 'protected-static-method'
              | 'private-static-field'
              | 'private-static-method'
              | 'public-instance-field'
              | 'protected-instance-field'
              | 'private-instance-field'
              | 'public-constructor'
              | 'protected-constructor'
              | 'private-constructor'
              | 'public-instance-method'
              | 'protected-instance-method'
              | 'private-instance-method'
              | 'public-static-accessor'
              | 'protected-static-accessor'
              | 'private-static-accessor'
              | 'public-instance-accessor'
              | 'protected-instance-accessor'
              | 'private-instance-accessor'
            )
          | {
              name?: string;
              kinds?: Kinds;
            }
        )
      ];
  alphabetize?: boolean;
}
export interface Options34 {
  'allow-namespace-imports'?: boolean;
}
export interface Items2 {
  'ignore-module'?: string;
}
export interface Items3 {
  class?: boolean;
  enum?: boolean;
  function?: boolean;
  import?: boolean;
  interface?: boolean;
  namespace?: boolean;
  typeAlias?: boolean;
  typeParameter?: boolean;
}
export interface Items4 {
  'allow-destructuring'?: boolean;
  /**
   * @minItems 1
   */
  'allowed-names'?: [string, ...string[]];
}
export interface Items5 {
  'grouped-imports'?: boolean;
  groups?: (
    | string
    | {
        name?: string;
        match: string;
        order: number;
        [k: string]: unknown | undefined;
      }
  )[];
  'import-sources-order'?:
    'case-insensitive' | 'case-insensitive-legacy' | 'lowercase-first' | 'lowercase-last' | 'any';
  'named-imports-order'?: 'case-insensitive' | 'case-insensitive-legacy' | 'lowercase-first' | 'lowercase-last' | 'any';
  'module-source-path'?: 'full' | 'basename';
}
export interface Items6 {
  destructuring?: 'all' | 'any';
}
export interface Items7 {
  'min-cases'?: number;
}
export interface Items8 {
  anonymous?: 'always' | 'never';
  asyncArrow?: 'always' | 'never';
  constructor?: 'always' | 'never';
  method?: 'always' | 'never';
  named?: 'always' | 'never';
}
export interface Items9 {
  multiline?:
    | ('always' | 'never')
    | {
        arrays?: 'always' | 'never' | 'ignore';
        exports?: 'always' | 'never' | 'ignore';
        functions?: 'always' | 'never' | 'ignore';
        imports?: 'always' | 'never' | 'ignore';
        objects?: 'always' | 'never' | 'ignore';
        typeLiterals?: 'always' | 'never' | 'ignore';
      };
  singleline?:
    | ('always' | 'never')
    | {
        arrays?: 'always' | 'never' | 'ignore';
        exports?: 'always' | 'never' | 'ignore';
        functions?: 'always' | 'never' | 'ignore';
        imports?: 'always' | 'never' | 'ignore';
        objects?: 'always' | 'never' | 'ignore';
        typeLiterals?: 'always' | 'never' | 'ignore';
      };
  /**
   * Option to forbid trailing comma after rest
   */
  esSpecCompliant?: boolean;
}
