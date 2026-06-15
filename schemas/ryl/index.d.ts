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
  | 'document-end'
  | 'document-start'
  | 'empty-lines'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings'
  | 'trailing-spaces';
/**
 * A fixable rule name accepted by `fix.unfixable`.
 */
export type FixRuleName =
  | 'braces'
  | 'brackets'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'document-end'
  | 'document-start'
  | 'empty-lines'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings'
  | 'trailing-spaces';
/**
 * A TOML field that accepts either one string or a list of strings.
 */
export type StringOrVec = string | string[];
/**
 * A built-in lint rule name.
 */
export type RuleName =
  | 'anchors'
  | 'block-scalar-chomping'
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
  | 'merge-keys'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'octal-values'
  | 'quoted-strings'
  | 'tags'
  | 'trailing-spaces'
  | 'truthy'
  | 'unicode-line-breaks';
/**
 * A `per-line-ignores` rule selector: a built-in rule name, or `ALL` to suppress
 * every rule on a matching line. Untagged so `"ALL"` and rule names share one list.
 */
export type PerLineRule = AllRulesSelector | RuleName;
/**
 * The `ALL` keyword accepted in a `per-line-ignores` `rules` list.
 */
export type AllRulesSelector = 'ALL';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForTomlAnchorsOptions = boolean | RuleSwitch | RuleOptionsForTomlAnchorsOptions;
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
export type RuleEntryForNoOptions = boolean | RuleSwitch | RuleOptionsForNoOptions;
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
export type RuleEntryForCommentsIndentationOptions = boolean | RuleSwitch | RuleOptionsForCommentsIndentationOptions;
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
export type RuleEntryForTomlHyphensOptions = boolean | RuleSwitch | RuleOptionsForTomlHyphensOptions;
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
export type RuleEntryForTomlKeyDuplicatesOptions = boolean | RuleSwitch | RuleOptionsForTomlKeyDuplicatesOptions;
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
export type RuleEntryForTagsOptions = boolean | RuleSwitch | RuleOptionsForTagsOptions;
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
   * Glob patterns assigning files to source kinds (`yaml`, `markdown`).
   */
  files?: FilesTable | null;
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
   * Behaviour for YAML embedded in markdown (front matter and fenced blocks).
   */
  markdown?: MarkdownTable | null;
  /**
   * Output targets: which format goes to which destination (file/stdout/stderr).
   */
  output?: OutputTable | null;
  /**
   * Per-file rule ignores.
   */
  'per-file-ignores'?: {
    [k: string]: RuleName[] | undefined;
  } | null;
  /**
   * Per-line rule ignores: suppress rules on lines/files matching a pattern.
   */
  'per-line-ignores'?: PerLineIgnore[] | null;
  /**
   * Rule configuration table.
   */
  rules?: RulesTable | null;
}
/**
 * File-to-source-kind glob mapping (ryl-only; TOML). Each kind selects which
 * files are linted as that kind. A file matching more than one kind is an error.
 */
export interface FilesTable {
  /**
   * Glob patterns for markdown files whose embedded YAML is linted.
   */
  markdown?: string[] | null;
  /**
   * Glob patterns for files linted directly as YAML.
   */
  yaml?: string[] | null;
}
/**
 * TOML `[fix]` table.
 */
export interface FixTable {
  fixable?: FixableRuleSelector[] | null;
  unfixable?: FixRuleName[] | null;
}
/**
 * Markdown embedding behaviour. ryl-only (TOML); yamllint has no equivalent.
 */
export interface MarkdownTable {
  /**
   * Lint fenced `yaml`/`yml` code blocks. Defaults to `true`.
   */
  'fenced-blocks'?: boolean | null;
  /**
   * Lint the leading YAML front matter block. Defaults to `true`.
   */
  'front-matter'?: boolean | null;
}
/**
 * Output targets (ryl-only; TOML). Each format present is rendered to its destination,
 * so several formats produce several outputs in one run (e.g. console plus a report
 * file). A CLI `--format` overrides this table wholesale. yamllint has no equivalent;
 * see `docs/output-formats.md`.
 */
export interface OutputTable {
  /**
   * Auto-detected console format (GitHub annotations in CI, otherwise colored/plain).
   */
  auto?: OutputDestination | null;
  /**
   * Plain text with ANSI colors.
   */
  colored?: OutputDestination | null;
  /**
   * GitHub Actions workflow commands.
   */
  github?: OutputDestination | null;
  /**
   * `GitLab` Code Quality JSON report.
   */
  gitlab?: OutputDestination | null;
  /**
   * `JUnit` XML test report.
   */
  junit?: OutputDestination | null;
  /**
   * One `path:line:col: [level] message (rule)` line per diagnostic.
   */
  parsable?: OutputDestination | null;
  /**
   * Plain text grouped per file.
   */
  standard?: OutputDestination | null;
}
/**
 * Where one format's output goes. An absent `path` means the format's default stream
 * (stderr for the console formats, stdout for `junit`/`gitlab`); `"-"` means stdout; any
 * other value is a file path.
 */
export interface OutputDestination {
  path?: string | null;
}
/**
 * A single `per-line-ignores` entry. Suppresses `rules` on source lines matching
 * `regex` (the whole physical line, unanchored) within files matching `path` (a
 * glob). All present fields must match (logical AND); at least one of `regex`/`path`
 * is required (validated in `validate_toml_config`), so an entry can't disable a rule
 * globally.
 */
export interface PerLineIgnore {
  path?: string | null;
  regex?: string | null;
  rules: PerLineRule[];
}
/**
 * Built-in rule table for TOML config.
 */
export interface RulesTable {
  anchors?: RuleEntryForTomlAnchorsOptions | null;
  'block-scalar-chomping'?: RuleEntryForNoOptions | null;
  braces?: RuleEntryForBraceLikeOptions | null;
  brackets?: RuleEntryForBraceLikeOptions | null;
  colons?: RuleEntryForColonsOptions | null;
  commas?: RuleEntryForCommasOptions | null;
  comments?: RuleEntryForCommentsOptions | null;
  'comments-indentation'?: RuleEntryForCommentsIndentationOptions | null;
  'document-end'?: RuleEntryForDocumentPresenceOptions | null;
  'document-start'?: RuleEntryForDocumentPresenceOptions | null;
  'empty-lines'?: RuleEntryForEmptyLinesOptions | null;
  'empty-values'?: RuleEntryForEmptyValuesOptions | null;
  'float-values'?: RuleEntryForFloatValuesOptions | null;
  hyphens?: RuleEntryForTomlHyphensOptions | null;
  indentation?: RuleEntryForIndentationOptions | null;
  'key-duplicates'?: RuleEntryForTomlKeyDuplicatesOptions | null;
  'key-ordering'?: RuleEntryForKeyOrderingOptions | null;
  'line-length'?: RuleEntryForLineLengthOptions | null;
  'merge-keys'?: RuleEntryForNoOptions | null;
  'new-line-at-end-of-file'?: RuleEntryForNoOptions | null;
  'new-lines'?: RuleEntryForNewLinesOptions | null;
  'octal-values'?: RuleEntryForOctalValuesOptions | null;
  'quoted-strings'?: RuleEntryForTomlQuotedStringsOptions | null;
  tags?: RuleEntryForTagsOptions | null;
  'trailing-spaces'?: RuleEntryForNoOptions | null;
  truthy?: RuleEntryForTruthyOptions | null;
  'unicode-line-breaks'?: RuleEntryForNoOptions | null;
  [k: string]: unknown | undefined;
}
/**
 * Common rule fields plus rule-specific options.
 */
export interface RuleOptionsForTomlAnchorsOptions {
  'forbid-ambiguous-anchor-alias-names'?: boolean | null;
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
export interface RuleOptionsForNoOptions {
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
export interface RuleOptionsForCommentsIndentationOptions {
  'allow-any-open-indent'?: boolean | null;
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
export interface RuleOptionsForTomlHyphensOptions {
  'dash-on-own-line'?: boolean | null;
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
export interface RuleOptionsForTomlKeyDuplicatesOptions {
  'check-canonical'?: boolean | null;
  'forbid-duplicated-merge-keys'?: boolean | null;
  'forbid-merge-key-shadowing'?: boolean | null;
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
export interface RuleOptionsForTagsOptions {
  'allowed-tags'?: string[] | null;
  'forbid-removed-types'?: boolean | null;
  'forbid-unsafe-tags'?: boolean | null;
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  level?: RuleLevel | null;
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
