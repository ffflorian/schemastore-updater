/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "(em|ex|ch|vw|vh|cm|mm|in|pt|pc|px|rem|vmin|vmax|%)".
 */
export type SimpleArrayStringRule = string[];
/**
 * Files that provide additional information (like animations, custom properties and custom media queries) to rules that check for unknown things.
 * https://stylelint.io/user-guide/configure#referencefiles
 */
export type ReferenceFiles = ReferenceFilesEntry | ReferenceFilesEntry[];
export type ReferenceFilesEntry =
  | string
  | {
      /**
       * A glob or array of globs that specify which files to parse
       */
      files: string | SimpleArrayStringRule;
      /**
       * A custom syntax to parse non-CSS reference files with
       */
      customSyntax?: string;
      /**
       * A PostCSS plugin to bundle CSS reference files with, e.g. postcss-import
       */
      loader?: string;
      [k: string]: unknown | undefined;
    };
export type Directionality = 'top-to-bottom' | 'bottom-to-top' | 'left-to-right' | 'right-to-left';
export type AllRules = AtRule &
  Block &
  Color &
  Comment &
  CustomMedia &
  CustomProperty &
  Declaration &
  DeclarationBlock &
  Font &
  Function &
  GeneralSheet &
  KeyframeDeclaration &
  Length &
  Lightness &
  MediaFeature &
  MediaQuery &
  MediaQueryList &
  Number &
  Property &
  RootRule &
  Rule &
  Selector &
  SelectorList &
  ShorthandProperty &
  String &
  StylelintDisableComment &
  Time &
  Unit &
  Value &
  ValueList;
export type SimpleStringOrArrayStringRule = string | SimpleArrayStringRule;

export interface JSONSchemaForTheStylelintConfigurationFiles {
  /**
   * Your configuration can extend an existing configuration(s) (whether your own or a third-party config)
   */
  extends?: string | SimpleArrayStringRule;
  plugins?: SimpleArrayStringRule;
  /**
   * Specify a custom syntax to use on your code.
   */
  customSyntax?: string;
  /**
   * Provide rule and behavior overrides for files that match particular glob patterns.
   */
  overrides?: {
    /**
     * A glob or array of globs that specify which files the configuration should be applied to
     */
    files?: string | SimpleArrayStringRule;
    /**
     * A description of the override's purpose
     */
    name?: string;
    customSyntax?: string;
    referenceFiles?: ReferenceFiles;
    languageOptions?: LanguageOptions;
    rules?: AllRules;
    [k: string]: unknown | undefined;
  }[];
  referenceFiles?: ReferenceFiles;
  languageOptions?: LanguageOptions;
  /**
   * Processors are functions that hook into stylelint's pipeline, modifying code on its way into stylelint and modifying results on their way out
   */
  processors?: (
    | string
    | ((
        | [string]
        | [
            string,
            {
              [k: string]: unknown | undefined;
            }
          ]
      ) &
        unknown[])
  )[];
  /**
   * Ignore stylelint-disable (e.g. /* stylelint-disable block-no-empty * /) comments.
   */
  ignoreDisables?: boolean;
  /**
   * Provide a glob or array of globs to ignore specific files
   */
  ignoreFiles?: string | SimpleArrayStringRule;
  /**
   * The default severity level for all rules that do not have a severity specified in their secondary options
   */
  defaultSeverity?: 'warning' | 'error';
  /**
   * Report stylelint-disable comments without a description.
   */
  reportDescriptionlessDisables?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Report stylelint-disable comments that don't match rules that are specified in the configuration object.
   */
  reportInvalidScopeDisables?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Report stylelint-disable comments that don't actually match any lints that need to be disabled
   */
  reportNeedlessDisables?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Report configuration comments that are not scoped to at least one rule.
   * https://stylelint.io/user-guide/configure#reportunscopeddisables
   */
  reportUnscopedDisables?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * What configuration comments like /* stylelint-disable * / start with. Useful when running several instances of Stylelint with different configurations.
   * https://stylelint.io/user-guide/configure#configurationcomment
   */
  configurationComment?: string;
  /**
   * Do not throw an error when the glob pattern matches no files. Should not be overridden on a per-file basis.
   * https://stylelint.io/user-guide/configure#allowemptyinput
   */
  allowEmptyInput?: boolean;
  /**
   * Store the results of processed files so that Stylelint only operates on the changed ones. Should not be overridden on a per-file basis.
   * https://stylelint.io/user-guide/configure#cache
   */
  cache?: boolean;
  /**
   * Automatically fix, where possible, problems reported by rules. Should not be overridden on a per-file basis.
   * https://stylelint.io/user-guide/configure#fix
   */
  fix?: boolean;
  /**
   * The name of a provided formatter, or a path to a custom formatter.
   * https://stylelint.io/user-guide/configure#formatter
   */
  formatter?: ('compact' | 'json' | 'string' | 'tap' | 'unix' | 'verbose') | string;
  /**
   * The maximum number of warnings accepted. Should not be overridden on a per-file basis.
   * https://stylelint.io/user-guide/configure#maxwarnings
   */
  maxWarnings?: number;
  /**
   * Only register problems for rules with an "error"-level severity (ignore "warning"-level).
   * https://stylelint.io/user-guide/options#quiet
   */
  quiet?: boolean;
  rules?: AllRules;
  [k: string]: unknown | undefined;
}
/**
 * Customize the CSS syntax and specify the directionality.
 * https://stylelint.io/user-guide/configure#languageoptions
 */
export interface LanguageOptions {
  /**
   * Extend or modify the default CSS syntax used by rules that check for unknown or invalid things.
   * https://stylelint.io/user-guide/configure#syntax
   */
  syntax?: {
    /**
     * Custom at-rules, with the syntax of their prelude and descriptors
     */
    atRules?: {
      [k: string]:
        | {
            comment?: string;
            prelude?: string;
            descriptors?: {
              [k: string]: string | undefined;
            };
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    /**
     * Extra CSS-wide keywords
     */
    cssWideKeywords?: string[];
    /**
     * The syntax of specific properties
     */
    properties?: {
      [k: string]: string | undefined;
    };
    /**
     * Type definitions used in property values
     */
    types?: {
      [k: string]: string | undefined;
    };
    /**
     * Extra units for each unit category
     */
    units?: {
      [k: string]: string[] | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * The direction of the block and inline axes, which must be perpendicular.
   * https://stylelint.io/user-guide/configure#directionality
   */
  directionality?: {
    block: Directionality;
    inline: Directionality;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AtRule {
  /**
   * Specify a blacklist of disallowed at-rules
   */
  'at-rule-blacklist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * Require or disallow an empty line before at-rules
   */
  'at-rule-empty-line-before'?:
    | null
    | ('always' | 'never' | [])
    | [
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              except?: [
                (
                  | 'all-nested'
                  | 'after-same-name'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                  | 'first-nested'
                ),
                ...(
                  | 'all-nested'
                  | 'after-same-name'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                  | 'first-nested'
                )[]
              ];
              /**
               * @minItems 1
               */
              ignore?: [
                (
                  | 'after-comment'
                  | 'first-nested'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                ),
                ...(
                  | 'after-comment'
                  | 'first-nested'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                )[]
              ];
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              except?: [
                (
                  | 'all-nested'
                  | 'after-same-name'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                  | 'first-nested'
                ),
                ...(
                  | 'all-nested'
                  | 'after-same-name'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                  | 'first-nested'
                )[]
              ];
              /**
               * @minItems 1
               */
              ignore?: [
                (
                  | 'after-comment'
                  | 'first-nested'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                ),
                ...(
                  | 'after-comment'
                  | 'first-nested'
                  | 'inside-block'
                  | 'blockless-after-same-name-blockless'
                  | 'blockless-after-blockless'
                )[]
              ];
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Specify lowercase or uppercase for at-rules names
   */
  'at-rule-name-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a newline after at-rule names
   */
  'at-rule-name-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | [])
    | [('always' | 'always-multi-line' | {}) | CoreRule, ('always' | 'always-multi-line' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space after at-rule names
   */
  'at-rule-name-space-after'?:
    | null
    | ('always' | 'always-single-line' | [])
    | [('always' | 'always-single-line' | {}) | CoreRule, ('always' | 'always-single-line' | {}) | CoreRule];
  /**
   * Disallow unknown at-rules
   */
  'at-rule-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow vendor prefixes for at-rules
   */
  'at-rule-no-vendor-prefix'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Require a newline after the semicolon of at-rules
   */
  'at-rule-semicolon-newline-after'?: null | ('always' | []) | [('always' | {}) | CoreRule, ('always' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the semicolons of at-rules
   */
  'at-rule-semicolon-space-before'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Specify a whitelist of allowed at-rules
   */
  'at-rule-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  [k: string]: unknown | undefined;
}
export interface CoreRule {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
  [k: string]: unknown | undefined;
}
export interface Block {
  /**
   * @deprecated
   * Require or disallow an empty line before the closing brace of blocks
   */
  'block-closing-brace-empty-line-before'?:
    | null
    | ('always-multi-line' | 'never' | [])
    | [('always-multi-line' | 'never' | {}) | CoreRule, ('always-multi-line' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the closing brace of blocks
   */
  'block-closing-brace-newline-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the closing brace of blocks
   */
  'block-closing-brace-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the closing brace of blocks
   */
  'block-closing-brace-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        ),
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        )
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the closing brace of blocks
   */
  'block-closing-brace-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        ),
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        )
      ];
  /**
   * Disallow empty blocks
   */
  'block-no-empty'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow single-line blocks
   */
  'block-no-single-line'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Require a newline after the opening brace of blocks
   */
  'block-opening-brace-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the opening brace of blocks
   */
  'block-opening-brace-newline-before'?:
    | null
    | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        ),
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | CoreRule
        )
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the opening brace of blocks
   */
  'block-opening-brace-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        ),
        (
          | (
              | 'always'
              | 'never'
              | 'always-single-line'
              | 'never-single-line'
              | 'always-multi-line'
              | 'never-multi-line'
              | {}
            )
          | CoreRule
        )
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the opening brace of blocks
   */
  'block-opening-brace-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'always-single-line' | 'never-single-line' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              ignoreAtRules?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  [k: string]: unknown | undefined;
}
export interface Color {
  /**
   * @deprecated
   * Specify lowercase or uppercase for hex colors
   */
  'color-hex-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Specify short or long notation for hex colors
   */
  'color-hex-length'?:
    null | ('short' | 'long' | []) | [('short' | 'long' | {}) | CoreRule, ('short' | 'long' | {}) | CoreRule];
  /**
   * Require (where possible) or disallow named colors
   */
  'color-named'?:
    | null
    | ('always-where-possible' | 'never' | [])
    | [
        (
          | ('always-where-possible' | 'never' | {})
          | (CoreRule & {
              ignore?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always-where-possible' | 'never' | {})
          | (CoreRule & {
              ignore?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow hex colors
   */
  'color-no-hex'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow invalid hex colors
   */
  'color-no-invalid-hex'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Comment {
  /**
   * Require or disallow an empty line before comments
   */
  'comment-empty-line-before'?:
    | null
    | ('always' | 'never' | [])
    | [
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option for comments that are nested and the first child of their parent node
               *
               * @minItems 1
               */
              except?: ['first-nested', ...'first-nested'[]];
              /**
               * Don't require an empty line between comments
               *
               * @minItems 1
               */
              ignore?: [
                'between-comments' | 'after-comment' | 'stylelint-command' | 'stylelint-commands',
                ...('between-comments' | 'after-comment' | 'stylelint-command' | 'stylelint-commands')[]
              ];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option for comments that are nested and the first child of their parent node
               *
               * @minItems 1
               */
              except?: ['first-nested', ...'first-nested'[]];
              /**
               * Don't require an empty line between comments
               *
               * @minItems 1
               */
              ignore?: [
                'between-comments' | 'after-comment' | 'stylelint-command' | 'stylelint-commands',
                ...('between-comments' | 'after-comment' | 'stylelint-command' | 'stylelint-commands')[]
              ];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow empty comments
   */
  'comment-no-empty'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Require or disallow whitespace on the inside of comment markers
   */
  'comment-whitespace-inside'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a blacklist of disallowed words within comments
   */
  'comment-word-blacklist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  [k: string]: unknown | undefined;
}
export interface CustomMedia {
  /**
   * Specify a pattern for custom media query names
   */
  'custom-media-pattern'?: (null | string) | [string | CoreRule, string | CoreRule];
  /**
   * Disallow unknown custom media queries
   */
  'no-unknown-custom-media'?: (true | null) | (([true | null] | [true | null, CoreRule1]) & unknown[]);
  [k: string]: unknown | undefined;
}
export interface CoreRule1 {
  disableFix?: boolean;
  /**
   * Custom message that will be used in errors and warnings
   */
  message?: string;
  reportDisables?: boolean;
  /**
   * Message status
   */
  severity?: 'warning' | 'error';
  url?: string;
}
export interface CustomProperty {
  /**
   * Require or disallow an empty line before custom properties
   */
  'custom-property-empty-line-before'?:
    | null
    | ('always' | 'never' | [])
    | [
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option for custom properties that come after a block, comment, custom property or first child of their parent node
               *
               * @minItems 1
               */
              except?: [
                'after-block' | 'after-comment' | 'after-custom-property' | 'first-nested',
                ...('after-block' | 'after-comment' | 'after-custom-property' | 'first-nested')[]
              ];
              /**
               * Ignore custom properties that are preceded by comments or other custom properties, that are the first child of their parent node, or that are inside single-line blocks
               *
               * @minItems 1
               */
              ignore?: [
                'after-comment' | 'after-custom-property' | 'first-nested' | 'inside-single-line-block',
                ...('after-comment' | 'after-custom-property' | 'first-nested' | 'inside-single-line-block')[]
              ];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option for custom properties that come after a block, comment, custom property or first child of their parent node
               *
               * @minItems 1
               */
              except?: [
                'after-block' | 'after-comment' | 'after-custom-property' | 'first-nested',
                ...('after-block' | 'after-comment' | 'after-custom-property' | 'first-nested')[]
              ];
              /**
               * Ignore custom properties that are preceded by comments or other custom properties, that are the first child of their parent node, or that are inside single-line blocks
               *
               * @minItems 1
               */
              ignore?: [
                'after-comment' | 'after-custom-property' | 'first-nested' | 'inside-single-line-block',
                ...('after-comment' | 'after-custom-property' | 'first-nested' | 'inside-single-line-block')[]
              ];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow custom properties outside of `:root` rules
   */
  'custom-property-no-outside-root'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify a pattern for custom properties
   */
  'custom-property-pattern'?: (null | string) | [string | CoreRule, string | CoreRule];
  /**
   * Disallow unknown custom properties
   */
  'no-unknown-custom-properties'?: (true | null) | (([true | null] | [true | null, CoreRule1]) & unknown[]);
  [k: string]: unknown | undefined;
}
export interface Declaration {
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the bang of declarations
   */
  'declaration-bang-space-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the bang of declarations
   */
  'declaration-bang-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the colon of declarations
   */
  'declaration-colon-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | [])
    | [('always' | 'always-multi-line' | {}) | CoreRule, ('always' | 'always-multi-line' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the colon of declarations
   */
  'declaration-colon-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the colon of declarations
   */
  'declaration-colon-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Require or disallow an empty line before declarations
   */
  'declaration-empty-line-before'?:
    | null
    | ('always' | 'never' | [])
    | [
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              except?: [
                'after-block' | 'after-comment' | 'after-declaration' | 'first-nested',
                ...('after-block' | 'after-comment' | 'after-declaration' | 'first-nested')[]
              ];
              /**
               * @minItems 1
               */
              ignore?: [
                'after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block',
                ...('after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block')[]
              ];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              except?: [
                'after-block' | 'after-comment' | 'after-declaration' | 'first-nested',
                ...('after-block' | 'after-comment' | 'after-declaration' | 'first-nested')[]
              ];
              /**
               * @minItems 1
               */
              ignore?: [
                'after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block',
                ...('after-comment' | 'after-declaration' | 'first-nested' | 'inside-single-line-block')[]
              ];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow `!important` within declarations
   */
  'declaration-no-important'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify a blacklist of disallowed property and unit pairs within declarations
   */
  'declaration-property-unit-blacklist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule | undefined;
        },
        CoreRule
      ];
  /**
   * Specify a whitelist of allowed property and unit pairs within declarations
   */
  'declaration-property-unit-whitelist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule | undefined;
        },
        CoreRule
      ];
  /**
   * Specify a blacklist of disallowed property and value pairs within declarations
   */
  'declaration-property-value-blacklist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule | undefined;
        },
        CoreRule
      ];
  /**
   * Disallow unknown values for properties within declarations
   */
  'declaration-property-value-no-unknown'?:
    | (true | null)
    | ((
        | [true | null]
        | [
            true | null,
            CoreRule & {
              ignoreProperties?: {
                [k: string]:
                  | string
                  | string[]
                  | {
                      [k: string]: unknown | undefined;
                    }
                  | (
                      | {
                          [k: string]: unknown | undefined;
                        }
                      | string
                    )[]
                  | undefined;
              };
              propertiesSyntax?: {
                [k: string]: string | string[] | undefined;
              };
              typesSyntax?: {
                [k: string]: string | string[] | undefined;
              };
              [k: string]: unknown | undefined;
            }
          ]
      ) &
        unknown[]);
  /**
   * Specify a whitelist of allowed property and value pairs within declarations
   */
  'declaration-property-value-whitelist'?:
    | null
    | {
        [k: string]: SimpleStringOrArrayStringRule | undefined;
      }
    | [
        {
          [k: string]: SimpleStringOrArrayStringRule | undefined;
        },
        CoreRule
      ];
  [k: string]: unknown | undefined;
}
export interface DeclarationBlock {
  /**
   * Disallow duplicate properties within declaration blocks
   */
  'declaration-block-no-duplicate-properties'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: [
                (
                  | 'consecutive-duplicates'
                  | 'consecutive-duplicates-with-different-values'
                  | 'consecutive-duplicates-with-different-syntaxes'
                  | 'consecutive-duplicates-with-same-prefixless-values'
                ),
                ...(
                  | 'consecutive-duplicates'
                  | 'consecutive-duplicates-with-different-values'
                  | 'consecutive-duplicates-with-different-syntaxes'
                  | 'consecutive-duplicates-with-same-prefixless-values'
                )[]
              ];
              ignoreProperties?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: [
                (
                  | 'consecutive-duplicates'
                  | 'consecutive-duplicates-with-different-values'
                  | 'consecutive-duplicates-with-different-syntaxes'
                  | 'consecutive-duplicates-with-same-prefixless-values'
                ),
                ...(
                  | 'consecutive-duplicates'
                  | 'consecutive-duplicates-with-different-values'
                  | 'consecutive-duplicates-with-different-syntaxes'
                  | 'consecutive-duplicates-with-same-prefixless-values'
                )[]
              ];
              ignoreProperties?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow property values that are ignored due to another property value in the same rule
   */
  'declaration-block-no-ignored-properties'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow longhand properties that can be combined into one shorthand property
   */
  'declaration-block-no-redundant-longhand-properties'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreShorthands?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreShorthands?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow shorthand properties that override related longhand properties
   */
  'declaration-block-no-shorthand-property-overrides'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify the order of properties within declaration blocks
   */
  'declaration-block-properties-order'?:
    | null
    | ('alphabetical' | [])
    | [
        (
          | ('alphabetical' | [] | {})
          | string
          | SimpleArrayStringRule
          | (CoreRule & {
              /**
               * These options only apply if you've defined your own array of properties
               */
              unspecified?: 'top' | 'bottom' | 'bottomAlphabetical' | 'ignore';
              order?: 'strict' | 'flexible';
              properties?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        ...(
          | ('alphabetical' | [] | {})
          | string
          | SimpleArrayStringRule
          | (CoreRule & {
              /**
               * These options only apply if you've defined your own array of properties
               */
              unspecified?: 'top' | 'bottom' | 'bottomAlphabetical' | 'ignore';
              order?: 'strict' | 'flexible';
              properties?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )[]
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the semicolons of declaration blocks
   */
  'declaration-block-semicolon-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the semicolons of declaration blocks
   */
  'declaration-block-semicolon-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the semicolons of declaration blocks
   */
  'declaration-block-semicolon-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the semicolons of declaration blocks
   */
  'declaration-block-semicolon-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * Limit the number of declaration within a single line declaration block
   */
  'declaration-block-single-line-max-declarations'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  /**
   * @deprecated
   * Require or disallow a trailing semicolon within declaration blocks
   */
  'declaration-block-trailing-semicolon'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Font {
  /**
   * Specify whether or not quotation marks should be used around font family names
   */
  'font-family-name-quotes'?:
    | null
    | ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | [])
    | [
        ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule,
        ('always-where-required' | 'always-where-recommended' | 'always-unless-keyword' | {}) | CoreRule
      ];
  /**
   * Require numeric or named (where possible) `font-weight` values. Also, when named values are expected, require only valid names
   */
  'font-weight-notation'?:
    | null
    | ('numeric' | 'named-where-possible' | [])
    | [
        (
          | ('numeric' | 'named-where-possible' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['relative', ...'relative'[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('numeric' | 'named-where-possible' | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['relative', ...'relative'[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  [k: string]: unknown | undefined;
}
export interface Function {
  /**
   * Specify a blacklist of disallowed functions
   */
  'function-blacklist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * Disallow an unspaced operator within `calc` functions
   */
  'function-calc-no-unspaced-operator'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the commas of functions
   */
  'function-comma-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the commas of functions
   */
  'function-comma-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the commas of functions
   */
  'function-comma-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the commas of functions
   */
  'function-comma-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * Disallow direction values in `linear-gradient()` calls that are not valid according to the standard syntax
   */
  'function-linear-gradient-no-nonstandard-direction'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Limit the number of adjacent empty lines within functions
   */
  'function-max-empty-lines'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  /**
   * Specify lowercase or uppercase for function names
   */
  'function-name-case'?:
    | null
    | ('lower' | 'upper' | [])
    | [
        (
          | ('lower' | 'upper' | {})
          | (CoreRule & {
              ignoreFunctions?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('lower' | 'upper' | {})
          | (CoreRule & {
              ignoreFunctions?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace on the inside of the parentheses of functions
   */
  'function-parentheses-newline-inside'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace on the inside of the parentheses of functions
   */
  'function-parentheses-space-inside'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * Require or disallow data URIs for urls
   */
  'function-url-data-uris'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Disallow scheme-relative urls
   */
  'function-url-no-scheme-relative'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Require or disallow quotes for urls
   */
  'function-url-quotes'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a whitelist of allowed url schemes
   */
  'function-url-scheme-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * Specify a whitelist of allowed functions
   */
  'function-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * @deprecated
   * Require or disallow whitespace after functions
   */
  'function-whitespace-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  [k: string]: unknown | undefined;
}
export interface GeneralSheet {
  /**
   * @deprecated
   * Specify indentation
   */
  indentation?:
    | (null | number)
    | ('tab' | [])
    | [number, ...number[]]
    | [
        (
          | number
          | ('tab' | {})
          | (CoreRule & {
              /**
               * If `true`, the closing brace of a block (rule or at-rule) will be expected at the same indentation level as the block's inner nodes
               */
              indentInsideParens?: 'twice' | 'once-at-root-twice-in-block';
              /**
               * Do not indent for these things
               *
               * @minItems 1
               */
              except?: ['block' | 'param' | 'value', ...('block' | 'param' | 'value')[]];
              /**
               * Ignore the indentation inside parentheses
               *
               * @minItems 1
               */
              ignore?: ['inside-parens' | 'param' | 'value', ...('inside-parens' | 'param' | 'value')[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | number
          | ('tab' | {})
          | (CoreRule & {
              /**
               * If `true`, the closing brace of a block (rule or at-rule) will be expected at the same indentation level as the block's inner nodes
               */
              indentInsideParens?: 'twice' | 'once-at-root-twice-in-block';
              /**
               * Do not indent for these things
               *
               * @minItems 1
               */
              except?: ['block' | 'param' | 'value', ...('block' | 'param' | 'value')[]];
              /**
               * Ignore the indentation inside parentheses
               *
               * @minItems 1
               */
              ignore?: ['inside-parens' | 'param' | 'value', ...('inside-parens' | 'param' | 'value')[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Specify unix or windows linebreaks
   */
  linebreaks?: {
    [k: string]: unknown | undefined;
  };
  /**
   * @deprecated
   * Limit the number of adjacent empty lines
   */
  'max-empty-lines'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  /**
   * @deprecated
   * Limit the length of a line
   */
  'max-line-length'?:
    | (null | number)
    | [
        (
          | number
          | (CoreRule & {
              ignore?:
                ('non-comments' | 'comments') | ['non-comments' | 'comments', ...('non-comments' | 'comments')[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | number
          | (CoreRule & {
              ignore?:
                ('non-comments' | 'comments') | ['non-comments' | 'comments', ...('non-comments' | 'comments')[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Limit the allowed nesting depth
   */
  'max-nesting-depth'?:
    | (null | number)
    | [
        (
          | number
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: [
                'at-rules-without-declaration-blocks' | 'blockless-at-rules' | 'pseudo-classes',
                ...('at-rules-without-declaration-blocks' | 'blockless-at-rules' | 'pseudo-classes')[]
              ];
              ignoreAtRules?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | number
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: [
                'at-rules-without-declaration-blocks' | 'blockless-at-rules' | 'pseudo-classes',
                ...('at-rules-without-declaration-blocks' | 'blockless-at-rules' | 'pseudo-classes')[]
              ];
              ignoreAtRules?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow browser hacks that are irrelevant to the browsers you are targeting
   */
  'no-browser-hacks'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              browsers?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              browsers?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity
   */
  'no-descending-specificity'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow duplicate selectors within a stylesheet
   */
  'no-duplicate-selectors'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Disallow empty first lines
   */
  'no-empty-first-line'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Disallow empty sources
   */
  'no-empty-source'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Disallow end-of-line whitespace
   */
  'no-eol-whitespace'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['empty-lines', ...'empty-lines'[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['empty-lines', ...'empty-lines'[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Disallow extra semicolons
   */
  'no-extra-semicolons'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow colors that are suspiciously close to being identical
   */
  'no-indistinguishable-colors'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              threshold?: number;
              ignore?: SimpleArrayStringRule;
              /**
               * An array of color pairs to ignore. Each pair is an array with two items
               *
               * @minItems 1
               */
              whitelist?: [SimpleArrayStringRule, ...SimpleArrayStringRule[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              threshold?: number;
              ignore?: SimpleArrayStringRule;
              /**
               * An array of color pairs to ignore. Each pair is an array with two items
               *
               * @minItems 1
               */
              whitelist?: [SimpleArrayStringRule, ...SimpleArrayStringRule[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow double-slash comments `(//...)` which are not supported by CSS and could lead to unexpected results
   */
  'no-invalid-double-slash-comments'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Disallow missing end-of-source newlines
   */
  'no-missing-end-of-source-newline'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow animation names that do not correspond to a `@keyframes` declaration
   */
  'no-unknown-animations'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Require or disallow Unicode BOM
   */
  'unicode-bom'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Disallow features that are unsupported by the browsers that you are targeting
   */
  'no-unsupported-browser-features'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              browsers?: string;
              ignore?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              browsers?: string;
              ignore?: SimpleStringOrArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  [k: string]: unknown | undefined;
}
export interface KeyframeDeclaration {
  /**
   * Disallow !important within keyframe declarations
   */
  'keyframe-declaration-no-important'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Length {
  /**
   * Disallow units for zero lengths
   */
  'length-zero-no-unit'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Lightness {
  /**
   * Specify number or percentage notation for lightness
   */
  'lightness-notation'?:
    | (('percentage' | 'number') | null)
    | (([('percentage' | 'number') | null] | [('percentage' | 'number') | null, CoreRule1]) & unknown[]);
  [k: string]: unknown | undefined;
}
export interface MediaFeature {
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the colon in media features
   */
  'media-feature-colon-space-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the colon in media features
   */
  'media-feature-colon-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Specify lowercase or uppercase for media feature names
   */
  'media-feature-name-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Disallow unknown media feature names
   */
  'media-feature-name-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreMediaFeatureNames?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreMediaFeatureNames?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow unknown values for media features
   */
  'media-feature-name-value-no-unknown'?: (true | null) | (([true | null] | [true | null, CoreRule1]) & unknown[]);
  /**
   * Disallow vendor prefixes for media feature names
   */
  'media-feature-name-no-vendor-prefix'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify a list of allowed name and unit pairs within media features
   */
  'media-feature-name-unit-allowed-list'?:
    | ({
        [k: string]: string | string[] | undefined;
      } | null)
    | ((
        | [
            {
              [k: string]: string | string[] | undefined;
            } | null
          ]
        | [
            {
              [k: string]: string | string[] | undefined;
            } | null,
            CoreRule1
          ]
      ) &
        unknown[]);
  /**
   * Disallow missing punctuation for non-boolean media features
   */
  'media-feature-no-missing-punctuation'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace on the inside of the parentheses within media features
   */
  'media-feature-parentheses-space-inside'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify context or prefix notation for media feature ranges
   */
  'media-feature-range-notation'?:
    | (('prefix' | 'context') | null)
    | (([('prefix' | 'context') | null] | [('prefix' | 'context') | null, CoreRule1]) & unknown[]);
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the range operator in media features
   */
  'media-feature-range-operator-space-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the range operator in media features
   */
  'media-feature-range-operator-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  [k: string]: unknown | undefined;
}
export interface MediaQuery {
  /**
   * Disallow invalid media queries
   */
  'media-query-no-invalid'?: (true | null) | (([true | null] | [true | null, CoreRule1]) & unknown[]);
  [k: string]: unknown | undefined;
}
export interface MediaQueryList {
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the commas of media query lists
   */
  'media-query-list-comma-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the commas of media query lists
   */
  'media-query-list-comma-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the commas of media query lists
   */
  'media-query-list-comma-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the commas of media query lists
   */
  'media-query-list-comma-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  [k: string]: unknown | undefined;
}
export interface Number {
  /**
   * @deprecated
   * Require or disallow a leading zero for fractional numbers less than 1
   */
  'number-leading-zero'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Limit the number of decimal places allowed in numbers
   */
  'number-max-precision'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  /**
   * @deprecated
   * Disallow trailing zeros in numbers
   */
  'number-no-trailing-zeros'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Property {
  /**
   * Specify a blacklist of disallowed properties
   */
  'property-blacklist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * @deprecated
   * Specify lowercase or uppercase for properties
   */
  'property-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Disallow unknown properties
   */
  'property-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreProperties?: SimpleArrayStringRule;
              /**
               * If `true`, this rule will check vendor-prefixed properties
               */
              checkPrefixed?: boolean;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreProperties?: SimpleArrayStringRule;
              /**
               * If `true`, this rule will check vendor-prefixed properties
               */
              checkPrefixed?: boolean;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow vendor prefixes for properties
   */
  'property-no-vendor-prefix'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify a whitelist of allowed properties
   */
  'property-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  [k: string]: unknown | undefined;
}
export interface RootRule {
  /**
   * Disallow standard properties inside `:root` rules
   */
  'root-no-standard-properties'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Rule {
  /**
   * Require or disallow an empty line before nested rules
   */
  'rule-nested-empty-line-before'?:
    | null
    | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option if the rule is the first in a block
               *
               * @minItems 1
               */
              except?: ['first-nested', ...'first-nested'[]];
              /**
               * Ignore rules that come after a comment
               *
               * @minItems 1
               */
              ignore?: ['after-comment', ...'after-comment'[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option if the rule is the first in a block
               *
               * @minItems 1
               */
              except?: ['first-nested', ...'first-nested'[]];
              /**
               * Ignore rules that come after a comment
               *
               * @minItems 1
               */
              ignore?: ['after-comment', ...'after-comment'[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Require or disallow an empty line before non-nested rules
   */
  'rule-non-nested-empty-line-before'?:
    | null
    | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        (
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option if the rule is the first in a block
               *
               * @minItems 1
               */
              except?: ['after-single-line-comment', ...'after-single-line-comment'[]];
              /**
               * Ignore rules that come after a comment
               *
               * @minItems 1
               */
              ignore?: ['after-comment', ...'after-comment'[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('always' | 'never' | 'always-multi-line' | 'never-multi-line' | {})
          | (CoreRule & {
              /**
               * Reverse the primary option if the rule is the first in a block
               *
               * @minItems 1
               */
              except?: ['after-single-line-comment', ...'after-single-line-comment'[]];
              /**
               * Ignore rules that come after a comment
               *
               * @minItems 1
               */
              ignore?: ['after-comment', ...'after-comment'[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  [k: string]: unknown | undefined;
}
export interface Selector {
  /**
   * Disallow unmatchable An+B selectors
   */
  'selector-anb-no-unmatchable'?: (true | null) | (([true | null] | [true | null, CoreRule1]) & unknown[]);
  /**
   * @deprecated
   * Require a single space or disallow whitespace on the inside of the brackets within attribute selector
   */
  'selector-attribute-brackets-space-inside'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a blacklist of disallowed attribute operators
   */
  'selector-attribute-operator-blacklist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after operators within attribute selectors
   */
  'selector-attribute-operator-space-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before operators within attribute selectors
   */
  'selector-attribute-operator-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a whitelist of allowed attribute operators
   */
  'selector-attribute-operator-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * Require or disallow quotes for attribute values
   */
  'selector-attribute-quotes'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a pattern for class selectors
   */
  'selector-class-pattern'?:
    | (null | string)
    | [
        (
          | string
          | (CoreRule & {
              /**
               * This option will resolve nested selectors with `&` interpolation
               */
              resolveNestedSelectors?: boolean;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | string
          | (CoreRule & {
              /**
               * This option will resolve nested selectors with `&` interpolation
               */
              resolveNestedSelectors?: boolean;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the combinators of selectors
   */
  'selector-combinator-space-after'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the combinators of selectors
   */
  'selector-combinator-space-before'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * @deprecated
   * Disallow non-space characters for descendant combinators of selectors
   */
  'selector-descendant-combinator-no-non-space'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify a pattern for id selectors
   */
  'selector-id-pattern'?: (null | string) | [string | CoreRule, string | CoreRule];
  /**
   * Limit the number of compound selectors in a selector
   */
  'selector-max-compound-selectors'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  /**
   * Limit the specificity of selectors
   */
  'selector-max-specificity'?: (null | string) | [string | CoreRule, string | CoreRule];
  /**
   * Specify a pattern for the selectors of rules nested within rules
   */
  'selector-nested-pattern'?: (null | string) | [string | CoreRule, string | CoreRule];
  /**
   * Disallow attribute selectors
   */
  'selector-no-attribute'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow combinators in selectors
   */
  'selector-no-combinator'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow id selectors
   */
  'selector-no-id'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow qualifying a selector by type
   */
  'selector-no-qualifying-type'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['attribute' | 'class' | 'id', ...('attribute' | 'class' | 'id')[]];
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['attribute' | 'class' | 'id', ...('attribute' | 'class' | 'id')[]];
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow type selectors
   */
  'selector-no-type'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['compounded' | 'descendant', ...('compounded' | 'descendant')[]];
              ignoreTypes?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              /**
               * @minItems 1
               */
              ignore?: ['compounded' | 'descendant', ...('compounded' | 'descendant')[]];
              ignoreTypes?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow the universal selector
   */
  'selector-no-universal'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Disallow vendor prefixes for selectors
   */
  'selector-no-vendor-prefix'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Specify lowercase or uppercase for pseudo-class selectors
   */
  'selector-pseudo-class-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Disallow unknown pseudo-class selectors
   */
  'selector-pseudo-class-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignorePseudoClasses?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignorePseudoClasses?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace on the inside of the parentheses within pseudo-class selectors
   */
  'selector-pseudo-class-parentheses-space-inside'?:
    null | ('always' | 'never' | []) | [('always' | 'never' | {}) | CoreRule, ('always' | 'never' | {}) | CoreRule];
  /**
   * Specify a whitelist of allowed pseudo-class selectors
   */
  'selector-pseudo-class-whitelist'?:
    | (null | string)
    | [([] | {}) | SimpleArrayStringRule | CoreRule, ...(([] | {}) | SimpleArrayStringRule | CoreRule)[]];
  /**
   * @deprecated
   * Specify lowercase or uppercase for pseudo-element selectors
   */
  'selector-pseudo-element-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Specify single or double colon notation for applicable pseudo-elements
   */
  'selector-pseudo-element-colon-notation'?:
    null | ('single' | 'double' | []) | [('single' | 'double' | {}) | CoreRule, ('single' | 'double' | {}) | CoreRule];
  /**
   * Disallow unknown pseudo-element selectors
   */
  'selector-pseudo-element-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignorePseudoElements?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignorePseudoElements?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow the composition of :root in selectors
   */
  'selector-root-no-composition'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * Specify lowercase or uppercase for type selectors
   */
  'selector-type-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Disallow unknown type selectors
   */
  'selector-type-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreTypes?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreTypes?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * @deprecated
   * Limit the number of adjacent empty lines within selectors
   */
  'selector-max-empty-lines'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  [k: string]: unknown | undefined;
}
export interface SelectorList {
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the commas of selector lists
   */
  'selector-list-comma-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the commas of selector lists
   */
  'selector-list-comma-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the commas of selector lists
   */
  'selector-list-comma-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the commas of selector lists
   */
  'selector-list-comma-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  [k: string]: unknown | undefined;
}
export interface ShorthandProperty {
  /**
   * Disallow redundant values in shorthand properties
   */
  'shorthand-property-no-redundant-values'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface String {
  /**
   * Disallow (unescaped) newlines in strings
   */
  'string-no-newline'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  /**
   * @deprecated
   * Specify single or double quotes around strings
   */
  'string-quotes'?:
    null | ('single' | 'double' | []) | [('single' | 'double' | {}) | CoreRule, ('single' | 'double' | {}) | CoreRule];
  [k: string]: unknown | undefined;
}
export interface StylelintDisableComment {
  /**
   * Require a reason comment before or after `stylelint-disable` comments
   */
  'stylelint-disable-reason'?:
    | null
    | ('always-before' | 'always-after' | [])
    | [('always-before' | 'always-after' | {}) | CoreRule, ('always-before' | 'always-after' | {}) | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Time {
  /**
   * Disallow `animation` and `transition` less than or equal to 100ms
   */
  'time-no-imperceptible'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface Unit {
  /**
   * Specify a blacklist of disallowed units
   */
  'unit-blacklist'?:
    | null
    | (
        | 'em'
        | 'ex'
        | 'px'
        | '%'
        | 'rem'
        | 'vw'
        | 'vh'
        | 'vm'
        | 'vmin'
        | 'vmax'
        | 'ch'
        | 'in'
        | 'cm'
        | 'mm'
        | 'q'
        | 'pt'
        | 'pc'
        | 'deg'
        | 'grad'
        | 'rad'
        | 'turn'
        | 'ms'
        | 's'
        | 'Hz'
        | 'kHz'
        | 'dpi'
        | 'dpcm'
        | 'dppx'
        | 'fr'
        | []
      )
    | [
        (
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | (CoreRule & {
              /**
               * Ignore units in the values of declarations with the specified properties
               */
              ignoreProperties?: {
                [k: string]: SimpleArrayStringRule | undefined;
              };
              [k: string]: unknown | undefined;
            })
        ),
        ...(
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | (CoreRule & {
              /**
               * Ignore units in the values of declarations with the specified properties
               */
              ignoreProperties?: {
                [k: string]: SimpleArrayStringRule | undefined;
              };
              [k: string]: unknown | undefined;
            })
        )[]
      ];
  /**
   * @deprecated
   * Specify lowercase or uppercase for units
   */
  'unit-case'?:
    null | ('lower' | 'upper' | []) | [('lower' | 'upper' | {}) | CoreRule, ('lower' | 'upper' | {}) | CoreRule];
  /**
   * Disallow unknown units
   */
  'unit-no-unknown'?:
    | null
    | (true | [])
    | [
        (
          | (true | {})
          | (CoreRule & {
              ignoreUnits?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | (true | {})
          | (CoreRule & {
              ignoreUnits?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Specify a whitelist of allowed units
   */
  'unit-whitelist'?:
    | null
    | (
        | 'em'
        | 'ex'
        | 'px'
        | '%'
        | 'rem'
        | 'vw'
        | 'vh'
        | 'vm'
        | 'vmin'
        | 'vmax'
        | 'ch'
        | 'in'
        | 'cm'
        | 'mm'
        | 'q'
        | 'pt'
        | 'pc'
        | 'deg'
        | 'grad'
        | 'rad'
        | 'turn'
        | 'ms'
        | 's'
        | 'Hz'
        | 'kHz'
        | 'dpi'
        | 'dpcm'
        | 'dppx'
        | 'fr'
        | []
      )
    | [
        (
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | (CoreRule & {
              /**
               * Ignore units in the values of declarations with the specified properties
               */
              ignoreProperties?: {
                [k: string]: SimpleArrayStringRule | undefined;
              };
              [k: string]: unknown | undefined;
            })
        ),
        ...(
          | (
              | 'em'
              | 'ex'
              | 'px'
              | '%'
              | 'rem'
              | 'vw'
              | 'vh'
              | 'vm'
              | 'vmin'
              | 'vmax'
              | 'ch'
              | 'in'
              | 'cm'
              | 'mm'
              | 'q'
              | 'pt'
              | 'pc'
              | 'deg'
              | 'grad'
              | 'rad'
              | 'turn'
              | 'ms'
              | 's'
              | 'Hz'
              | 'kHz'
              | 'dpi'
              | 'dpcm'
              | 'dppx'
              | 'fr'
              | []
              | {}
            )
          | [
              (
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              ),
              ...(
                | 'em'
                | 'ex'
                | 'px'
                | '%'
                | 'rem'
                | 'vw'
                | 'vh'
                | 'vm'
                | 'vmin'
                | 'vmax'
                | 'ch'
                | 'in'
                | 'cm'
                | 'mm'
                | 'q'
                | 'pt'
                | 'pc'
                | 'deg'
                | 'grad'
                | 'rad'
                | 'turn'
                | 'ms'
                | 's'
                | 'Hz'
                | 'kHz'
                | 'dpi'
                | 'dpcm'
                | 'dppx'
                | 'fr'
              )[]
            ]
          | (CoreRule & {
              /**
               * Ignore units in the values of declarations with the specified properties
               */
              ignoreProperties?: {
                [k: string]: SimpleArrayStringRule | undefined;
              };
              [k: string]: unknown | undefined;
            })
        )[]
      ];
  [k: string]: unknown | undefined;
}
export interface Value {
  /**
   * Specify lowercase or uppercase for keywords values
   */
  'value-keyword-case'?:
    | null
    | ('lower' | 'upper' | [])
    | [
        (
          | ('lower' | 'upper' | {})
          | (CoreRule & {
              ignoreKeywords?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        ),
        (
          | ('lower' | 'upper' | {})
          | (CoreRule & {
              ignoreKeywords?: SimpleArrayStringRule;
              [k: string]: unknown | undefined;
            })
        )
      ];
  /**
   * Disallow vendor prefixes for values
   */
  'value-no-vendor-prefix'?: null | boolean | [boolean | CoreRule, boolean | CoreRule];
  [k: string]: unknown | undefined;
}
export interface ValueList {
  /**
   * @deprecated
   * Require a newline or disallow whitespace after the commas of value lists
   */
  'value-list-comma-newline-after'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a newline or disallow whitespace before the commas of value lists
   */
  'value-list-comma-newline-before'?:
    | null
    | ('always' | 'always-multi-line' | 'never-multi-line' | [])
    | [
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule,
        ('always' | 'always-multi-line' | 'never-multi-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace after the commas of value lists
   */
  'value-list-comma-space-after'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Require a single space or disallow whitespace before the commas of value lists
   */
  'value-list-comma-space-before'?:
    | null
    | ('always' | 'never' | 'always-single-line' | 'never-single-line' | [])
    | [
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule,
        ('always' | 'never' | 'always-single-line' | 'never-single-line' | {}) | CoreRule
      ];
  /**
   * @deprecated
   * Limit the number of adjacent empty lines within value lists
   */
  'value-list-max-empty-lines'?: (null | number) | [{} | CoreRule, {} | CoreRule];
  [k: string]: unknown | undefined;
}
