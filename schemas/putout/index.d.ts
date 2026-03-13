/* eslint-disable */

export type Rule =
  | ('on' | 'off')
  | [
      'on' | 'off',
      {
        [k: string]: unknown | undefined;
      }
    ]
  | [
      'on' | 'off',
      string,
      {
        [k: string]: unknown | undefined;
      }
    ]
  | ['on' | 'off', string];

export interface HttpsJsonSchemastoreOrgPutoutJson {
  /**
   * Tell 🐊Putout which printer to use
   */
  printer?:
    | string
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ];
  /**
   * Tell 🐊Putout which parser to use
   */
  parser?: string;
  /**
   * Choose the way to show information about errors found
   */
  formatter?: string | unknown[];
  /**
   * Tell 🐊Putout which processors to use to support file types other then JavaScript
   */
  processors?: string[];
  /**
   * Tell 🐊Putout to ignore specific files and directories.
   */
  ignore?: string[];
  /**
   * Allows to match rules for files and folders, specified by glob patterns.
   */
  match?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Tell 🐊Putout which plugins to load
   */
  plugins?: unknown[];
  rules?: Rules;
}
/**
 * 🐊Putout comes with a large number of rules. You can modify which rules your project uses.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.*$".
 */
export interface Rules {
  'apply-arrow'?: Rule;
  'apply-at'?: Rule;
  'apply-dot-notation'?: Rule;
  'apply-flat-map'?: Rule;
  'apply-global-this'?: Rule;
  'apply-overrides'?: Rule;
  'apply-shorthand-properties'?: Rule;
  'apply-starts-with'?: Rule;
  'apply-template-literals'?: Rule;
  'arguments/apply-json-parse'?: Rule;
  arguments?: Rule;
  'arguments/apply-rest'?: Rule;
  'arguments/convert-expression-to-arguments'?: Rule;
  'arguments/remove-duplicate'?: Rule;
  'arguments/remove-empty'?: Rule;
  'arguments/remove-unused'?: Rule;
  'arguments/remove-useless'?: Rule;
  'arguments/remove-useless-form-method'?: Rule;
  'assignment/convert-to-arrow-function'?: Rule;
  assignment?: Rule;
  'assignment/convert-to-comparison'?: Rule;
  'assignment/convert-to-declaration'?: Rule;
  'assignment/simplify'?: Rule;
  'assignment/split'?: Rule;
  'conditions/add-return'?: Rule;
  conditions?: Rule;
  'conditions/apply-comparison-order'?: Rule;
  'conditions/apply-consistent-blocks'?: Rule;
  'conditions/apply-equal'?: Rule;
  'conditions/apply-if'?: Rule;
  'conditions/convert-arrow-to-condition'?: Rule;
  'conditions/convert-comparison-to-boolean'?: Rule;
  'conditions/convert-equal-to-strict-equal'?: Rule;
  'conditions/evaluate'?: Rule;
  'conditions/merge-if-statements'?: Rule;
  'conditions/merge-if-with-else'?: Rule;
  'conditions/remove-boolean'?: Rule;
  'conditions/remove-same-values-condition'?: Rule;
  'conditions/remove-useless-else'?: Rule;
  'conditions/remove-useless-loop-condition'?: Rule;
  'conditions/remove-zero'?: Rule;
  'conditions/reverse-condition'?: Rule;
  'conditions/simplify'?: Rule;
  'conditions/wrap-with-block'?: Rule;
  'convert-concat-to-flat'?: Rule;
  'convert-index-of-to-includes'?: Rule;
  'convert-object-entries-to-array-entries'?: Rule;
  'convert-object-entries-to-object-keys'?: Rule;
  'convert-object-keys-to-object-entries'?: Rule;
  'convert-template-to-string'?: Rule;
  'convert-to-arrow-function'?: Rule;
  declare?: Rule;
  'declare-before-reference'?: Rule;
  'destructuring/apply-array'?: Rule;
  destructuring?: Rule;
  'destructuring/apply-object'?: Rule;
  'destructuring/convert-object-to-array'?: Rule;
  'destructuring/extract-properties-equal-deep'?: Rule;
  'destructuring/extract-properties-not-equal-deep'?: Rule;
  'destructuring/merge-properties'?: Rule;
  'destructuring/remove-useless-arguments'?: Rule;
  'destructuring/remove-useless-object'?: Rule;
  'destructuring/remove-useless-variables'?: Rule;
  'destructuring/split-call'?: Rule;
  'destructuring/split-nested'?: Rule;
  'esm/apply-default-import'?: Rule;
  esm?: Rule;
  'esm/apply-export-from'?: Rule;
  'esm/apply-import-attributes'?: Rule;
  'esm/convert-assert-to-with'?: Rule;
  'esm/declare-imports-first'?: Rule;
  'esm/group-imports-by-source'?: Rule;
  'esm/merge-declaration-with-export'?: Rule;
  'esm/merge-duplicate-imports/join'?: Rule;
  'esm/merge-duplicate-imports/rename'?: Rule;
  'esm/merge-export-declarations'?: Rule;
  'esm/remove-empty-export'?: Rule;
  'esm/remove-empty-import'?: Rule;
  'esm/remove-quotes-from-import-assertions'?: Rule;
  'esm/remove-useless-export-specifiers'?: Rule;
  'esm/sort-imports-by-specifiers'?: Rule;
  'extract-sequence-expressions'?: Rule;
  'for-of/add-missing-declaration'?: Rule;
  'for-of'?: Rule;
  'for-of/for-each'?: Rule;
  'for-of/for-entries'?: Rule;
  'for-of/for-entries-n'?: Rule;
  'for-of/for-in-negative'?: Rule;
  'for-of/for-in-positive'?: Rule;
  'for-of/for-length'?: Rule;
  'for-of/for-n'?: Rule;
  'for-of/map'?: Rule;
  'for-of/reduce'?: Rule;
  'for-of/remove-unused-variables'?: Rule;
  'for-of/remove-useless'?: Rule;
  'for-of/remove-useless-array-from'?: Rule;
  'for-of/remove-useless-variables'?: Rule;
  'for-of/to-for-n'?: Rule;
  'generators/add-missing-star'?: Rule;
  generators?: Rule;
  'generators/convert-multiply-to-generator'?: Rule;
  'gitignore/add'?: Rule;
  gitignore?: Rule;
  'gitignore/sort'?: Rule;
  'labels/convert-to-object'?: Rule;
  labels?: Rule;
  'labels/remove-unused'?: Rule;
  'logical-expressions/convert-bitwise-to-logical'?: Rule;
  'logical-expressions'?: Rule;
  'logical-expressions/remove-boolean'?: Rule;
  'logical-expressions/remove-duplicates'?: Rule;
  'logical-expressions/simplify'?: Rule;
  'math/apply-exponentiation'?: Rule;
  math?: Rule;
  'math/apply-multiplication'?: Rule;
  'math/apply-numeric-separators'?: Rule;
  'math/convert-sqrt-to-hypot'?: Rule;
  'math/declare'?: Rule;
  'math/remove-unchanged-zero-declarations'?: Rule;
  'maybe/array'?: Rule;
  maybe?: Rule;
  'maybe/declare'?: Rule;
  'maybe/empty-array'?: Rule;
  'maybe/fn'?: Rule;
  'maybe/noop'?: Rule;
  'merge-duplicate-functions'?: Rule;
  'montag/apply'?: Rule;
  montag?: Rule;
  'montag/declare'?: Rule;
  'new/add-missing'?: Rule;
  new?: Rule;
  'new/remove-useless'?: Rule;
  'nodejs/add-node-prefix'?: Rule;
  nodejs?: Rule;
  'nodejs/convert-buffer-to-buffer-alloc'?: Rule;
  'nodejs/convert-dirname-to-url'?: Rule;
  'nodejs/convert-exports-to-module-exports'?: Rule;
  'nodejs/convert-fs-promises'?: Rule;
  'nodejs/convert-promisify-to-fs-promises'?: Rule;
  'nodejs/convert-url-to-dirname'?: Rule;
  'nodejs/declare'?: Rule;
  'nodejs/declare-after-require'?: Rule;
  'nodejs/group-require-by-id'?: Rule;
  'nodejs/remove-illegal-strict-mode'?: Rule;
  'nodejs/remove-process-exit'?: Rule;
  'nodejs/remove-top-level-process-exit'?: Rule;
  'nodejs/remove-useless-promisify'?: Rule;
  'optional-chaining/convert-logical-to-optional'?: Rule;
  'optional-chaining'?: Rule;
  'optional-chaining/convert-optional-assign-to-logical'?: Rule;
  'parens/add-missing-for-assign'?: Rule;
  parens?: Rule;
  'parens/add-missing-for-awai'?: Rule;
  'parens/add-missing-for-template'?: Rule;
  'parens/remove-useless-for-await'?: Rule;
  'parens/remove-useless-for-params'?: Rule;
  'promises/add-missing-async'?: Rule;
  promises?: Rule;
  'promises/add-missing-await'?: Rule;
  'promises/apply-await-import'?: Rule;
  'promises/apply-top-level-await'?: Rule;
  'promises/convert-new-promise-to-async'?: Rule;
  'promises/convert-reject-to-throw'?: Rule;
  'promises/convert-resolve-to-async'?: Rule;
  'promises/remove-useless-async'?: Rule;
  'promises/remove-useless-await'?: Rule;
  'promises/remove-useless-resolve'?: Rule;
  'promises/remove-useless-variables'?: Rule;
  'putout/add-await-to-progress'?: Rule;
  putout?: Rule;
  'putout/add-crawl-file'?: Rule;
  'putout/add-path-arg-to-fix'?: Rule;
  'putout/add-path-arg-to-match'?: Rule;
  'putout/add-path-arg-to-visitors'?: Rule;
  'putout/add-places-to-compare-places'?: Rule;
  'putout/add-push-arg'?: Rule;
  'putout/add-test-args'?: Rule;
  'putout/add-track-file'?: Rule;
  'putout/add-traverse-args'?: Rule;
  'putout/apply-async-formatter'?: Rule;
  'putout/apply-create-nested-directory'?: Rule;
  'putout/apply-create-test'?: Rule;
  'putout/apply-declare'?: Rule;
  'putout/apply-desturcturing'?: Rule;
  'putout/apply-engine-node-version'?: Rule;
  'putout/apply-exports-to-add-args'?: Rule;
  'putout/apply-exports-to-match-files'?: Rule;
  'putout/apply-exports-to-rename-files'?: Rule;
  'putout/apply-fixture-name-to-message'?: Rule;
  'putout/apply-for-of-to-track-file'?: Rule;
  'putout/apply-insert-after'?: Rule;
  'putout/apply-insert-before'?: Rule;
  'putout/apply-lowercase-to-node-builders'?: Rule;
  'putout/apply-namespace-specifier'?: Rule;
  'putout/apply-parens'?: Rule;
  'putout/apply-processors-destructuring'?: Rule;
  'putout/apply-remove'?: Rule;
  'putout/apply-rename'?: Rule;
  'putout/apply-report'?: Rule;
  'putout/apply-short-processors'?: Rule;
  'putout/apply-transform-with-options'?: Rule;
  'putout/apply-traverser-to-ignore'?: Rule;
  'putout/apply-vars'?: Rule;
  'putout/check-declare'?: Rule;
  'putout/check-match'?: Rule;
  'putout/check-replace-code'?: Rule;
  'putout/convert-add-argument-to-add-args'?: Rule;
  'putout/convert-babel-types'?: Rule;
  'putout/convert-destructuring-to-identifier'?: Rule;
  'putout/convert-dirname-to-url'?: Rule;
  'putout/convert-find-to-traverse'?: Rule;
  'putout/convert-get-file-content-to-read-file-content'?: Rule;
  'putout/convert-get-rule-to-require'?: Rule;
  'putout/convert-include-to-traverse'?: Rule;
  'putout/convert-match-to-function'?: Rule;
  'putout/convert-method-to-property'?: Rule;
  'putout/convert-node-to-path-in-get-template-values'?: Rule;
  'putout/convert-number-to-numeric'?: Rule;
  'putout/convert-plugins-element-to-tuple'?: Rule;
  'putout/convert-process-to-find'?: Rule;
  'putout/convert-progress-to-track-file'?: Rule;
  'putout/convert-push-object-to-push-path'?: Rule;
  'putout/convert-putout-test-to-create-test'?: Rule;
  'putout/convert-replace-to-function'?: Rule;
  'putout/convert-replace-to-traverse'?: Rule;
  'putout/convert-replace-with'?: Rule;
  'putout/convert-replace-with-multiple'?: Rule;
  'putout/convert-report-to-function'?: Rule;
  'putout/convert-to-no-transform-code'?: Rule;
  'putout/convert-traverse-to-include'?: Rule;
  'putout/convert-traverse-to-replace'?: Rule;
  'putout/convert-traverse-to-scan'?: Rule;
  'putout/convert-url-to-dirname'?: Rule;
  'putout/create-test'?: Rule;
  'putout/declare'?: Rule;
  'putout/declare-path-variable'?: Rule;
  'putout/declare-template-variables'?: Rule;
  'putout/includer'?: Rule;
  'putout/move-require-on-top-level'?: Rule;
  'putout/remove-empty-array-from-process'?: Rule;
  'putout/remove-empty-object-from-transform'?: Rule;
  'putout/remove-message-from-no-report-after-transform'?: Rule;
  'putout/remove-unused-get-properties-argument'?: Rule;
  'putout/remove-useless-printer-option'?: Rule;
  'putout/rename-operate-to-operator'?: Rule;
  'putout/replace-operate-with-operator'?: Rule;
  'putout/replace-test-message'?: Rule;
  'putout/shorten-imports'?: Rule;
  'putout/simplify-replace-template'?: Rule;
  'regexp/apply-character-class'?: Rule;
  regexp?: Rule;
  'regexp/apply-ends-with'?: Rule;
  'regexp/apply-global-regexp-to-replace-all'?: Rule;
  'regexp/apply-literal-notation'?: Rule;
  'regexp/apply-starts-with'?: Rule;
  'regexp/convert-replace-to-replace-all'?: Rule;
  'regexp/convert-to-string'?: Rule;
  'regexp/optimize'?: Rule;
  'regexp/remove-duplicates-from-character-class'?: Rule;
  'regexp/remove-useless-escape'?: Rule;
  'regexp/remove-useless-group'?: Rule;
  'regexp/remove-useless-regexp'?: Rule;
  'remove-console'?: Rule;
  'remove-debugger'?: Rule;
  'remove-duplicate-case'?: Rule;
  'remove-duplicate-keys'?: Rule;
  'remove-empty/argument'?: Rule;
  'remove-empty'?: Rule;
  'remove-empty/block'?: Rule;
  'remove-empty/nested-pattern'?: Rule;
  'remove-empty/pattern'?: Rule;
  'remove-empty/static-block'?: Rule;
  'remove-iife'?: Rule;
  'remove-nested-blocks'?: Rule;
  'remove-unreachable-code'?: Rule;
  'remove-unused-expressions'?: Rule;
  'remove-unused-private-fields'?: Rule;
  'remove-useless-array'?: Rule;
  'remove-useless-array-constructor'?: Rule;
  'remove-useless-array-entries'?: Rule;
  'remove-useless-assign'?: Rule;
  'remove-useless-constructor'?: Rule;
  'remove-useless-continue'?: Rule;
  'remove-useless-delete'?: Rule;
  'remove-useless-escape'?: Rule;
  'remove-useless-functions'?: Rule;
  'remove-useless-map'?: Rule;
  'remove-useless-object-from-entries'?: Rule;
  'remove-useless-operand'?: Rule;
  'remove-useless-push'?: Rule;
  'remove-useless-replace'?: Rule;
  'remove-useless-template-expressions'?: Rule;
  'return/apply-early'?: Rule;
  return?: Rule;
  'return/convert-from-break'?: Rule;
  'return/convert-from-continue'?: Rule;
  'return/merge-with-next-sibling'?: Rule;
  'return/remove-useless'?: Rule;
  'return/simplify-boolean'?: Rule;
  'simplify-ternary/spread'?: Rule;
  'simplify-ternary'?: Rule;
  'simplify-ternary/value'?: Rule;
  'spread/convert-apply-to-spread'?: Rule;
  spread?: Rule;
  'spread/convert-object-assign-to-merge-spread'?: Rule;
  'spread/remove-useless-array'?: Rule;
  'spread/simplify-nested'?: Rule;
  'try-catch/apply-destructuring'?: Rule;
  'try-catch'?: Rule;
  'try-catch/args'?: Rule;
  'try-catch/async'?: Rule;
  'try-catch/await'?: Rule;
  'try-catch/declare'?: Rule;
  'try-catch/expand-args'?: Rule;
  'try-catch/sync'?: Rule;
  'types/apply-is-array'?: Rule;
  types?: Rule;
  'types/convert-typeof-to-is-type'?: Rule;
  'types/declare'?: Rule;
  'types/remove-double-negations'?: Rule;
  'types/remove-useless-constructor'?: Rule;
  'types/remove-useless-conversion'?: Rule;
  'types/remove-useless-typeof'?: Rule;
  'variables/apply-declarations-order'?: Rule;
  variables?: Rule;
  'variables/convert-const-to-let'?: Rule;
  'variables/extract-keywords'?: Rule;
  'variables/remove-unreferenced'?: Rule;
  'variables/remove-unused'?: Rule;
  'variables/remove-useless'?: Rule;
  'variables/remove-useless-assignment'?: Rule;
  'variables/remove-useless-declarations'?: Rule;
  'variables/remove-useless-duplicates'?: Rule;
  'variables/remove-useless-rename'?: Rule;
  'variables/reuse-duplicate-init'?: Rule;
  'variables/split-declarations'?: Rule;
  'convert-quotes-to-backticks'?: Rule;
  'madrun/add-cut-env'?: Rule;
  madrun?: Rule;
  'madrun/add-fix-lint'?: Rule;
  'madrun/add-function'?: Rule;
  'madrun/add-missing-quotes-to-watcher'?: Rule;
  'madrun/add-run'?: Rule;
  'madrun/call-run'?: Rule;
  'madrun/convert-args-to-scripts'?: Rule;
  'madrun/convert-cut-env-to-run'?: Rule;
  'madrun/convert-lint-lib'?: Rule;
  'madrun/convert-nyc-to-c8'?: Rule;
  'madrun/convert-run-argument'?: Rule;
  'madrun/convert-run-to-cut-env'?: Rule;
  'madrun/convert-to-async'?: Rule;
  'madrun/declare'?: Rule;
  'madrun/remove-check-duplicates-from-test'?: Rule;
  'madrun/remove-putout'?: Rule;
  'madrun/remove-useless-array-in-run'?: Rule;
  'madrun/remove-useless-string-conversion'?: Rule;
  'madrun/rename-eslint-to-putout'?: Rule;
  'madrun/rename-series-to-run'?: Rule;
  'madrun/set-lint-dot'?: Rule;
  'madrun/set-report-lcov'?: Rule;
  'nodejs/convert-commonjs-to-esm/common'?: Rule;
  'nodejs/convert-commonjs-to-esm/exports'?: Rule;
  'nodejs/convert-commonjs-to-esm/require'?: Rule;
  'npmignore/add'?: Rule;
  npmignore?: Rule;
  'npmignore/sort'?: Rule;
  'coverage/add-to-exclude'?: Rule;
  coverage?: Rule;
  'coverage/sort-ignore'?: Rule;
  'putout-config/apply-arguments'?: Rule;
  'putout-config'?: Rule;
  'putout-config/apply-assignment'?: Rule;
  'putout-config/apply-conditions'?: Rule;
  'putout-config/apply-coverage'?: Rule;
  'putout-config/apply-destructuring'?: Rule;
  'putout-config/apply-esm'?: Rule;
  'putout-config/apply-for-of'?: Rule;
  'putout-config/apply-labels'?: Rule;
  'putout-config/apply-math'?: Rule;
  'putout-config/apply-nodejs'?: Rule;
  'putout-config/apply-optional-chaining'?: Rule;
  'putout-config/apply-parens'?: Rule;
  'putout-config/apply-promises'?: Rule;
  'putout-config/apply-return'?: Rule;
  'putout-config/apply-spread'?: Rule;
  'putout-config/apply-tape'?: Rule;
  'putout-config/apply-types'?: Rule;
  'putout-config/apply-variables'?: Rule;
  'putout-config/convert-boolean-to-string'?: Rule;
  'putout-config/move-formatter-up'?: Rule;
  'putout-config/remove-empty'?: Rule;
  'putout-config/rename-rules'?: Rule;
  'putout-config/sort-ignore'?: Rule;
  'eslint/add-putout'?: Rule;
  eslint?: Rule;
  'eslint/apply-create-eslint-config'?: Rule;
  'eslint/apply-define-config'?: Rule;
  'eslint/apply-dir-to-flat'?: Rule;
  'eslint/apply-match-to-flat'?: Rule;
  'eslint/apply-safe-align'?: Rule;
  'eslint/convert-export-match-to-declaration'?: Rule;
  'eslint/convert-files-to-array'?: Rule;
  'eslint/convert-ide-to-safe'?: Rule;
  'eslint/convert-node-to-n'?: Rule;
  'eslint/convert-plugins-array-to-object'?: Rule;
  'eslint/convert-require-to-import'?: Rule;
  'eslint/declare'?: Rule;
  'eslint/move-putout-to-end-of-extends'?: Rule;
  'eslint/remove-create-eslint-config-with-one-argument'?: Rule;
  'eslint/remove-no-missing'?: Rule;
  'eslint/remove-no-unpublished-require'?: Rule;
  'eslint/remove-no-unsupported-features'?: Rule;
  'eslint/remove-overrides-with-empty-rules'?: Rule;
  'eslint/remove-parser-options'?: Rule;
  'eslint/remove-spread-from-create-eslint-config'?: Rule;
  'eslint/remove-suffix-config'?: Rule;
  'eslint/remove-useless-define-config'?: Rule;
  'eslint/remove-useless-match-to-flat'?: Rule;
  'eslint/remove-useless-properties'?: Rule;
  'eslint/remove-useless-slice'?: Rule;
  'package-json/add-type'?: Rule;
  'package-json'?: Rule;
  'package-json/apply-https-to-repository-url'?: Rule;
  'package-json/apply-js-extension'?: Rule;
  'package-json/remove-commit-type'?: Rule;
  'package-json/remove-duplicate-keywords'?: Rule;
  'package-json/remove-imports-nesting'?: Rule;
  'package-json/remove-nyc'?: Rule;
  'tape/add-args'?: Rule;
  tape?: Rule;
  'tape/add-stop-all'?: Rule;
  'tape/add-t-end'?: Rule;
  'tape/apply-destructuring'?: Rule;
  'tape/apply-stub'?: Rule;
  'tape/apply-with-name'?: Rule;
  'tape/convert-called-with-args'?: Rule;
  'tape/convert-called-with-no-args-to-called-with'?: Rule;
  'tape/convert-called-with-to-called-with-no-args'?: Rule;
  'tape/convert-deep-equal-to-equal'?: Rule;
  'tape/convert-does-not-throw-to-try-catch'?: Rule;
  'tape/convert-emitter-to-promise'?: Rule;
  'tape/convert-equal-to-called-once'?: Rule;
  'tape/convert-equal-to-deep-equal'?: Rule;
  'tape/convert-equal-to-not-ok'?: Rule;
  'tape/convert-equal-to-ok'?: Rule;
  'tape/convert-equals-to-equal'?: Rule;
  'tape/convert-match-regexp-to-string'?: Rule;
  'tape/convert-ok-to-called-with'?: Rule;
  'tape/convert-ok-to-match'?: Rule;
  'tape/convert-tape-to-supertape'?: Rule;
  'tape/convert-throws-to-try-catch'?: Rule;
  'tape/declare'?: Rule;
  'tape/jest'?: Rule;
  'tape/remove-default-messages'?: Rule;
  'tape/remove-only'?: Rule;
  'tape/remove-skip'?: Rule;
  'tape/remove-useless-not-called-args'?: Rule;
  'tape/remove-useless-t-end'?: Rule;
  'tape/switch-expected-with-result'?: Rule;
  'tape/sync-with-name'?: Rule;
  'nodejs/add-missing-strict-mode'?: Rule;
  'nodejs/remove-useless-strict-mode'?: Rule;
  'nodejs/convert-esm-to-commonjs'?: Rule;
  'nodejs/convert-commonjs-to-esm'?: Rule;
  typescript?: Rule;
  'typescript/apply-as-type-assertion'?: Rule;
  'typescript/apply-utility-types'?: Rule;
  'typescript/convert-generic-to-shorthand'?: Rule;
  'typescript/remove-duplicate-interface-keys'?: Rule;
  'typescript/remove-duplicates-from-union'?: Rule;
  'typescript/remove-unused-types'?: Rule;
  'typescript/remove-useless-mapped-types'?: Rule;
  'typescript/remove-useless-mapping-modifiers'?: Rule;
  'typescript/remove-useless-types'?: Rule;
  'typescript/remove-useless-types-from-constants'?: Rule;
  [k: string]: unknown | undefined;
}
