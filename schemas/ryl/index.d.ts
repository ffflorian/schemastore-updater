/* eslint-disable */

/**
 * A TOML field that accepts either one string or a list of strings.
 */
export type StringOrVec = string | string[];
/**
 * A rule selector accepted by `lint.fixable`.
 */
export type FixableRuleSelector =
  | 'ALL'
  | 'braces'
  | 'brackets'
  | 'colons'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'document-end'
  | 'document-start'
  | 'empty-lines'
  | 'hyphens'
  | 'key-ordering'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings'
  | 'trailing-spaces'
  | 'truthy';
/**
 * A fixable rule name accepted by `lint.unfixable`.
 */
export type FixRuleName =
  | 'braces'
  | 'brackets'
  | 'colons'
  | 'commas'
  | 'comments'
  | 'comments-indentation'
  | 'document-end'
  | 'document-start'
  | 'empty-lines'
  | 'hyphens'
  | 'key-ordering'
  | 'new-line-at-end-of-file'
  | 'new-lines'
  | 'quoted-strings'
  | 'trailing-spaces'
  | 'truthy';
/**
 * A rule id, or `ALL` for every rule.
 */
export type RuleSelector =
  | 'ALL'
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
 * Shorthand rule enable/disable syntax.
 */
export type RuleSwitch = 'enable' | 'disable';
/**
 * Common rule entry shape used by TOML config.
 */
export type RuleEntryForTomlAnchorsOptions = boolean | RuleSwitch | RuleOptionsForTomlAnchorsOptions;
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
export type RuleEntryForTomlCommentsOptions = boolean | RuleSwitch | RuleOptionsForTomlCommentsOptions;
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
export type RuleEntryForTomlKeyOrderingOptions = boolean | RuleSwitch | RuleOptionsForTomlKeyOrderingOptions;
/**
 * Where keys missing from `keys` go: sorted after the listed keys, or kept in place.
 */
export type Unlisted = 'sort' | 'keep';
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
   * Directory for the on-disk result cache.
   */
  'cache-dir'?: string | null;
  /**
   * Files to skip, as one multi-line string or a list of gitignore-style patterns.
   */
  exclude?: StringOrVec | null;
  /**
   * Paths to files that contain exclude patterns, such as `.gitignore`.
   */
  'exclude-from-file'?: StringOrVec | null;
  /**
   * Glob patterns assigning files to source kinds (`yaml`, `markdown`).
   */
  files?: FilesTable | null;
  /**
   * @deprecated
   * Deprecated: use `lint.fixable` and `lint.unfixable`.
   */
  fix?: FixTable | null;
  /**
   * Formatter settings.
   */
  format?: FormatTable | null;
  /**
   * @deprecated
   * Deprecated: use `exclude`.
   */
  ignore?: StringOrVec | null;
  /**
   * @deprecated
   * Deprecated: use `exclude-from-file`.
   */
  'ignore-from-file'?: StringOrVec | null;
  /**
   * The formatter's indent width, and the default for `[lint.rules.indentation] spaces`.
   */
  'indent-width'?: number | null;
  /**
   * The formatter's line length, and the default for `[lint.rules.line-length] max`.
   */
  'line-length'?: number | null;
  /**
   * Linter settings: rule configuration, fix policy, and rule ignores.
   */
  lint?: LintTable | null;
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
   * @deprecated
   * Deprecated: use `lint.per-file-ignores`.
   */
  'per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * @deprecated
   * Deprecated: use `lint.per-line-ignores`.
   */
  'per-line-ignores'?: PerLineIgnore[] | null;
  /**
   * @deprecated
   * Deprecated: use `lint.rules`.
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
 * The deprecated `[fix]` table; its keys now live in `[lint]`.
 */
export interface FixTable {
  fixable?: FixableRuleSelector[] | null;
  unfixable?: FixRuleName[] | null;
}
/**
 * The `[format]` table: `ryl format`'s targets.
 */
export interface FormatTable {
  /**
   * Whether to pad the inside of a non-empty flow mapping's braces with one space.
   */
  'brace-spacing'?: boolean;
  /**
   * Exact number of spaces between content and an inline comment.
   */
  'comment-spacing'?: number;
  /**
   * Whether to add a missing space after a comment's `#`.
   */
  'comment-starting-space'?: 'add' | 'preserve';
  /**
   * Whether a block mapping in a block sequence starts on the line after its `-`.
   */
  'dash-on-own-line'?: boolean;
  /**
   * Whether to add a missing `...` document end marker.
   */
  'document-end'?: 'add' | 'preserve';
  /**
   * Whether to add a missing `---` document start marker.
   */
  'document-start'?: 'add' | 'preserve';
  /**
   * Whether to split plain, quoted and `>` scalar lines longer than `line-length` at spaces.
   */
  'fold-long-lines'?: boolean;
  /**
   * Whether a block sequence under a mapping key is indented past the key.
   */
  'indent-sequences'?: boolean;
  /**
   * Line ending; `native` is the platform's, `auto` the one most of the file uses.
   */
  'line-ending'?: 'lf' | 'cr-lf' | 'native' | 'auto';
  /**
   * Collection style for mappings; `preserve` leaves each as written.
   */
  'mapping-style'?: 'preserve' | 'block' | 'flow';
  /**
   * Most consecutive blank lines kept between content lines.
   */
  'max-blank-lines'?: number;
  /**
   * Opt in to unstable style changes before a minor release promotes them to stable.
   */
  preview?: boolean;
  /**
   * Preferred quote for strings that need quoting; `preserve` leaves quoting alone.
   */
  'quote-style'?: 'single' | 'double' | 'preserve';
  /**
   * Collection style for sequences; `preserve` leaves each as written.
   */
  'sequence-style'?: 'preserve' | 'block' | 'flow';
}
/**
 * The `[lint]` table.
 */
export interface LintTable {
  /**
   * Rules `--fix` may fix (default `["ALL"]`).
   */
  fixable?: FixableRuleSelector[] | null;
  /**
   * Per-file rule ignores.
   */
  'per-file-ignores'?: {
    [k: string]: RuleSelector[] | undefined;
  } | null;
  /**
   * Per-line rule ignores: suppress rules on lines/files matching a pattern.
   */
  'per-line-ignores'?: PerLineIgnore[] | null;
  /**
   * Rule configuration table.
   */
  rules?: RulesTable | null;
  /**
   * Return exit code 2 when only warnings (no errors) are found (default false).
   */
  strict?: boolean | null;
  /**
   * Rules `--fix` must not fix, overriding `fixable`.
   */
  unfixable?: FixRuleName[] | null;
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
  rules: RuleSelector[];
}
/**
 * Built-in rule table for TOML config.
 */
export interface RulesTable {
  ALL?: RuleSwitch | null;
  anchors?: RuleEntryForTomlAnchorsOptions | null;
  'block-scalar-chomping'?: RuleEntryForNoOptions | null;
  braces?: RuleEntryForBraceLikeOptions | null;
  brackets?: RuleEntryForBraceLikeOptions | null;
  colons?: RuleEntryForColonsOptions | null;
  commas?: RuleEntryForCommasOptions | null;
  comments?: RuleEntryForTomlCommentsOptions | null;
  'comments-indentation'?: RuleEntryForCommentsIndentationOptions | null;
  'document-end'?: RuleEntryForDocumentPresenceOptions | null;
  'document-start'?: RuleEntryForDocumentPresenceOptions | null;
  'empty-lines'?: RuleEntryForEmptyLinesOptions | null;
  'empty-values'?: RuleEntryForEmptyValuesOptions | null;
  'float-values'?: RuleEntryForFloatValuesOptions | null;
  hyphens?: RuleEntryForTomlHyphensOptions | null;
  indentation?: RuleEntryForIndentationOptions | null;
  'key-duplicates'?: RuleEntryForTomlKeyDuplicatesOptions | null;
  'key-ordering'?: RuleEntryForTomlKeyOrderingOptions | null;
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
  'forbid-anchors-and-aliases'?: boolean | null;
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
export interface RuleOptionsForTomlCommentsOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  'ignore-shebangs'?: boolean | null;
  level?: RuleLevel | null;
  'max-spaces-from-content'?: number | null;
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
export interface RuleOptionsForTomlKeyOrderingOptions {
  ignore?: StringOrVec | null;
  'ignore-from-file'?: StringOrVec | null;
  'ignored-keys'?: string[] | null;
  level?: RuleLevel | null;
  orders?: KeyOrderEntry[] | null;
}
/**
 * A configured key order for the mappings that both `files` and `path` select.
 */
export interface KeyOrderEntry {
  /**
   * Globs matched like `per-file-ignores` keys; `!` excludes.
   */
  files: string[];
  keys: string[];
  /**
   * `JSONPath` subset: `$`, `.name`, `['name']`, `[*]`, `.*`.
   */
  path: string;
  unlisted?: Unlisted | null;
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
