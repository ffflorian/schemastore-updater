/* eslint-disable */

/**
 * A rule selector accepted by `fix.fixable`.
 */
export type FixableRuleSelector =
  | 'ALL'
  | 'braces'
  | 'brackets'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings';
/**
 * A fixable rule name accepted by `fix.unfixable`.
 */
export type FixRuleName =
  | 'braces'
  | 'brackets'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings';
/**
 * A TOML field that accepts either one string or a list of strings.
 */
export type StringOrVec = string | string[];
/**
 * A built-in lint rule name.
 */
export type RuleName =
  | 'anchors'
  | 'braces'
  | 'brackets'
  | 'colons'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'document-end'
  | 'document-start'
  | 'empty-lines'
  | 'empty-values'
  | 'float-values'
  | 'hyphens'
  | 'indentation'
  | 'key-duplicates'
  | 'key-ordering'
  | 'line-length'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'octal-values'
  | 'quoted-strings'
  | 'trailing-spaces'
  | 'truthy';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForAnchorsOptions = boolean | RuleSwitch | RuleOptionsForAnchorsOptions;
/**
 * Shorthand rule enable/disable syntax.
 */
export type RuleSwitch = 'enable' | 'disable';
/**
 * Rule severity override.
 */
export type RuleLevel = 'error' | 'warning';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForBraceLikeOptions = boolean | RuleSwitch | RuleOptionsForBraceLikeOptions;
export type ForbidSetting = boolean | ForbidMode;
export type ForbidMode = 'non-empty';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForColonsOptions = boolean | RuleSwitch | RuleOptionsForColonsOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForCommasOptions = boolean | RuleSwitch | RuleOptionsForCommasOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForCommentsOptions = boolean | RuleSwitch | RuleOptionsForCommentsOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForNoOptions = boolean | RuleSwitch | RuleOptionsForNoOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForDocumentPresenceOptions = boolean | RuleSwitch | RuleOptionsForDocumentPresenceOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForEmptyLinesOptions = boolean | RuleSwitch | RuleOptionsForEmptyLinesOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForEmptyValuesOptions = boolean | RuleSwitch | RuleOptionsForEmptyValuesOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForFloatValuesOptions = boolean | RuleSwitch | RuleOptionsForFloatValuesOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForHyphensOptions = boolean | RuleSwitch | RuleOptionsForHyphensOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForIndentationOptions = boolean | RuleSwitch | RuleOptionsForIndentationOptions;
export type IndentSequencesSetting = boolean | IndentSequencesMode;
export type IndentSequencesMode = 'whatever' | 'consistent';
export type SpacesSetting = number | SpacesMode;
export type SpacesMode = 'consistent';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForKeyDuplicatesOptions = boolean | RuleSwitch | RuleOptionsForKeyDuplicatesOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForKeyOrderingOptions = boolean | RuleSwitch | RuleOptionsForKeyOrderingOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForLineLengthOptions = boolean | RuleSwitch | RuleOptionsForLineLengthOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForNewLinesOptions = boolean | RuleSwitch | RuleOptionsForNewLinesOptions;
export type NewLinesType = 'unix' | 'dos' | 'platform';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForOctalValuesOptions = boolean | RuleSwitch | RuleOptionsForOctalValuesOptions;
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForTomlQuotedStringsOptions = boolean | RuleSwitch | RuleOptionsForTomlQuotedStringsOptions;
export type QuoteType = 'any' | 'single' | 'double' | 'consistent';
export type QuotedStringsRequired = boolean | QuotedStringsRequiredMode;
export type QuotedStringsRequiredMode = 'only-when-needed';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForTruthyOptions = boolean | RuleSwitch | RuleOptionsForTruthyOptions;
export type TruthyAllowedValue =
  | 'YES'
  | 'Yes'
  | 'yes'
  | 'NO'
  | 'No'
  | 'no'
  | 'TRUE'
  | 'True'
  | 'true'
  | 'FALSE'
  | 'False'
  | 'false'
  | 'ON'
  | 'On'
  | 'on'
  | 'OFF'
  | 'Off'
  | 'off';

/**
 * JSON Schema root for `ryl` TOML configuration.
 */
export interface RylTOMLConfig {
  /**
   * Native fix policy.
   */
  fix?: FixTable | null;
  /**
   * Ignore patterns, either as one multi-line string or a list of patterns.
   */
  ignore?: StringOrVec | null;
  /**
   * Paths to files that contain ignore patterns.
   */
  'ignore-from-file'?: StringOrVec | null;
  /**
   * Locale identifier used by diagnostics.
   */
  locale?: string | null;
  /**
   * Per-file rule ignores.
   */
  'per-file-ignores'?: {
    [k: string]: RuleName[] | undefined;
  } | null;
  /**
   * Rule configuration table.
   */
  rules?: RulesTable | null;
  /**
   * Glob patterns used to identify YAML files while scanning directories.
   */
  'yaml-files'?: string[] | null;
  [k: string]: unknown | undefined;
}
/**
 * TOML `[fix]` table.
 */
export interface FixTable {
  fixable?: FixableRuleSelector[] | null;
  unfixable?: FixRuleName[] | null;
}
/**
 * Built-in rule table for TOML config.
 */
export interface RulesTable {
  anchors?: RuleEntryForAnchorsOptions | null;
  braces?: RuleEntryForBraceLikeOptions | null;
  brackets?: RuleEntryForBraceLikeOptions | null;
  colons?: RuleEntryForColonsOptions | null;
  commas?: RuleEntryForCommasOptions | null;
  comments?: RuleEntryForCommentsOptions | null;
  'comments-indentation'?: RuleEntryForNoOptions | null;
  'document-end'?: RuleEntryForDocumentPresenceOptions | null;
  'document-start'?: RuleEntryForDocumentPresenceOptions | null;
  'empty-lines'?: RuleEntryForEmptyLinesOptions | null;
  'empty-values'?: RuleEntryForEmptyValuesOptions | null;
  'float-values'?: RuleEntryForFloatValuesOptions | null;
  hyphens?: RuleEntryForHyphensOptions | null;
  indentation?: RuleEntryForIndentationOptions | null;
  'key-duplicates'?: RuleEntryForKeyDuplicatesOptions | null;
  'key-ordering'?: RuleEntryForKeyOrderingOptions | null;
  'line-length'?: RuleEntryForLineLengthOptions | null;
  'new-line-at-end-of-file'?: RuleEntryForNoOptions | null;
  'new-lines'?: RuleEntryForNewLinesOptions | null;
  'octal-values'?: RuleEntryForOctalValuesOptions | null;
  'quoted-strings'?: RuleEntryForTomlQuotedStringsOptions | null;
  'trailing-spaces'?: RuleEntryForNoOptions | null;
  truthy?: RuleEntryForTruthyOptions | null;
  [k: string]: unknown | undefined;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForAnchorsOptions {
  'forbid-duplicated-anchors'?: boolean | null;
  'forbid-undeclared-aliases'?: boolean | null;
  'forbid-unused-anchors'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForBraceLikeOptions {
  forbid?: ForbidSetting | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'max-spaces-inside'?: number | null;
  'max-spaces-inside-empty'?: number | null;
  'min-spaces-inside'?: number | null;
  'min-spaces-inside-empty'?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForColonsOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'max-spaces-after'?: number | null;
  'max-spaces-before'?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForCommasOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'max-spaces-after'?: number | null;
  'max-spaces-before'?: number | null;
  'min-spaces-after'?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForCommentsOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  'ignore-shebangs'?: boolean | null;
  level?: RuleLevel | null;
  'min-spaces-from-content'?: number | null;
  'require-starting-space'?: boolean | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForNoOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForDocumentPresenceOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  present?: boolean | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForEmptyLinesOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  max?: number | null;
  'max-end'?: number | null;
  'max-start'?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForEmptyValuesOptions {
  'forbid-in-block-mappings'?: boolean | null;
  'forbid-in-block-sequences'?: boolean | null;
  'forbid-in-flow-mappings'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForFloatValuesOptions {
  'forbid-inf'?: boolean | null;
  'forbid-nan'?: boolean | null;
  'forbid-scientific-notation'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'require-numeral-before-decimal'?: boolean | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForHyphensOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'max-spaces-after'?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForIndentationOptions {
  'check-multi-line-strings'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  'indent-sequences'?: IndentSequencesSetting | null;
  level?: RuleLevel | null;
  spaces?: SpacesSetting | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForKeyDuplicatesOptions {
  'forbid-duplicated-merge-keys'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForKeyOrderingOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  'ignored-keys'?: string[] | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForLineLengthOptions {
  'allow-non-breakable-inline-mappings'?: boolean | null;
  'allow-non-breakable-words'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  max?: number | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForNewLinesOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  type?: NewLinesType | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForOctalValuesOptions {
  'forbid-explicit-octal'?: boolean | null;
  'forbid-implicit-octal'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForTomlQuotedStringsOptions {
  'allow-double-quotes-for-escaping'?: boolean | null;
  'allow-quoted-quotes'?: boolean | null;
  'check-keys'?: boolean | null;
  'extra-allowed'?: string[] | null;
  'extra-required'?: string[] | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
  'quote-type'?: QuoteType | null;
  required?: QuotedStringsRequired | null;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForTruthyOptions {
  'allowed-values'?: TruthyAllowedValue[] | null;
  'check-keys'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
}
