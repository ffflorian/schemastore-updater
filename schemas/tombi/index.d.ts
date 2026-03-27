/* eslint-disable */

/**
 * TOML version to use if not specified in the schema and comment directive.
 */
export type TOMLVersion = TOMLVersion1 | null;
export type TOMLVersion1 = ('v1.0.0' | 'v1.1.0') | 'v1.1.0-preview';
/**
 * The file match pattern to include in formatting and linting.
 * Supports glob pattern.
 *
 * @minItems 1
 */
export type FilePatternsToInclude = [string, ...string[]] | null;
/**
 * The file match pattern to exclude from formatting and linting.
 * Supports glob pattern.
 *
 * @minItems 1
 */
export type FilePatternsToExclude = [string, ...string[]] | null;
export type FormatRules = FormatRules1 | null;
/**
 * ```toml
 * key = [ 1, 2, 3 ]
 * #      ^       ^  <- this
 * ```
 */
export type TheNumberOfSpacesInsideTheBracketsOfASingleLineArray = ArrayBracketSpaceWidth | null;
export type ArrayBracketSpaceWidth = number;
/**
 * ```toml
 * key = [ 1, 2, 3 ]
 * #         ^  ^    <- this
 * ```
 */
export type TheNumberOfSpacesAfterTheCommaInASingleLineArray = ArrayCommaSpaceWidth | null;
export type ArrayCommaSpaceWidth = number;
/**
 * In accordance with [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339), you can use `T` or space character between date and time.
 *
 * - `T`: Use `T` between date and time like `2001-01-01T00:00:00`
 * - `space`: Use space between date and time like `2001-01-01 00:00:00`
 * - `preserve`: Preserve the original delimiter.
 */
export type TheDelimiterBetweenDateAndTime = DateTimeDelimiter | null;
/**
 * DateTime delimiter
 */
export type DateTimeDelimiter = 'T' | 'space' | 'preserve';
/**
 * Whether to use spaces or tabs for indentation.
 *
 * - `space`: Use spaces for indentation.
 * - `tab`: Use tabs for indentation.
 */
export type TheStyleOfIndentation = IndentStyle | null;
export type IndentStyle = 'space' | 'tab';
/**
 * If `true`, the sub-table will be indented.
 *
 * ```toml
 * [table]
 *     [table.sub-table]
 *     key = "value"
 * # ^^  <- this
 * ```
 */
export type WhetherToIndentTheSubTables = boolean | null;
/**
 * If `true`, the table key-value pairs will be indented.
 *
 * ```toml
 * [table]
 *     key = "value"
 * # ^^  <- this
 * ```
 */
export type WhetherToIndentTheTableKeyValuePairs = boolean | null;
/**
 * ⚠️ **WARNING** ⚠️\
 * This option is only used when the indentation style is `space`.
 */
export type TheNumberOfSpacesPerIndentationLevel = IndentWidth | null;
export type IndentWidth = number;
/**
 * ```toml
 * key = { a = 1, b = 2 }
 * #      ^            ^  <- this
 * ```
 */
export type TheNumberOfSpacesInsideTheBracketsOfASingleLineInlineTable = InlineTableBraceSpaceWidth | null;
export type InlineTableBraceSpaceWidth = number;
/**
 * ```toml
 * key = { a = 1, b = 2 }
 * #             ^  <- this
 * ```
 */
export type TheNumberOfSpacesAfterTheCommaInASingleLineInlineTable = InlineTableCommaSpaceWidth | null;
export type InlineTableCommaSpaceWidth = number;
/**
 * If `true`, the equals sign in the key-value pairs will be aligned.
 *
 * ⚠️ **WARNING** ⚠️\
 * This feature does **not** apply to key-value pairs inside single line inline tables.
 *
 * ```toml
 * # BEFORE
 * key = "value1"
 * key2 = "value2"
 * key3.key4 = "value3"
 *
 * # AFTER
 * key       = "value1"
 * key2      = "value2"
 * key3.key4 = "value3"
 * ```
 */
export type WhetherToAlignTheEqualsSignInTheKeyValuePairs = boolean | null;
export type ThePreferredQuoteCharacterForStrings = StringQuoteStyle | null;
/**
 * The preferred quote character for strings.
 */
export type StringQuoteStyle = 'double' | 'single' | 'preserve';
/**
 * If `true`, the trailing comments in value/key-value pairs will be aligned.
 *
 * **📝 NOTE 📝**\
 * The trailing comments of table header are not targeted by alignment.
 *
 * ```toml
 * # BEFORE
 * key = "value1"  # comment 1
 * key2 = "value2"  # comment 2
 * key3.key4 = "value3"  # comment 3
 *
 * # AFTER
 * key = "value1"        # comment 1
 * key2 = "value2"       # comment 2
 * key3.key4 = "value3"  # comment 3
 * ```
 */
export type WhetherToAlignTheTrailingCommentsInTheKeyValuePairs = boolean | null;
/**
 * ```toml
 * key = "value"
 * #  ^ ^  <- this
 * ```
 */
export type TheNumberOfSpacesAroundTheEqualsSignInAKeyValuePair = KeyValueEqualsSignSpaceWidth | null;
export type KeyValueEqualsSignSpaceWidth = number;
/**
 * In TOML, the line ending must be either `LF` or `CRLF`.
 *
 * - `lf`: Line Feed only (`\n`), common on Linux and macOS as well as inside git repos.
 * - `crlf`: Carriage Return Line Feed (`\r\n`), common on Windows.
 */
export type TheTypeOfLineEnding = LineEnding | null;
export type LineEnding = ('lf' | 'crlf') | 'auto';
/**
 * The formatter will try to keep lines within this width.
 */
export type TheMaximumLineWidth = LineWidth | null;
export type LineWidth = number;
/**
 * ```toml
 * key = "value"  # trailing comment
 * #            ^^  <- this
 * ```
 */
export type TheNumberOfSpacesBeforeTheTrailingComment = TrailingCommentSpaceWidth | null;
export type TrailingCommentSpaceWidth = number;
export type LintRules = LintRules1 | null;
/**
 * Check if the key is empty.
 *
 * ```toml
 * # VALID BUT DISCOURAGED
 * "" = true
 * ```
 */
export type KeyEmpty = (SeverityLevel & SeverityLevelDefaultWarn) | null;
export type SeverityLevel = 'off' | 'warn' | 'error';
export type SeverityLevelDefaultWarn = string;
/**
 * Check if dotted keys are defined out of order.
 *
 * ```toml
 * # VALID BUT DISCOURAGED
 * apple.type = "fruit"
 * orange.type = "fruit"
 * apple.skin = "thin"
 * orange.skin = "thick"
 *
 * # RECOMMENDED
 * apple.type = "fruit"
 * apple.skin = "thin"
 * orange.type = "fruit"
 * orange.skin = "thick"
 * ```
 */
export type DottedKeysOutOfOrder = (SeverityLevel & SeverityLevelDefaultWarn) | null;
/**
 * Check if tables are defined out of order.
 *
 * ```toml
 * # VALID BUT DISCOURAGED
 * [fruit.apple]
 * [animal]
 * [fruit.orange]
 *
 * # RECOMMENDED
 * [fruit.apple]
 * [fruit.orange]
 * [animal]
 * ```
 */
export type TablesOutOfOrder = (SeverityLevel & SeverityLevelDefaultWarn) | null;
export type CodeActionFeatureOptions = LspCodeAction | null;
/**
 * Whether to enable code action.
 */
export type EnableCodeActionFeature = BoolDefaultTrue | null;
export type BoolDefaultTrue = boolean;
export type CompletionFeatureOptions = LspCompletion | null;
/**
 * Whether to enable completion.
 */
export type EnableCompletionFeature = BoolDefaultTrue | null;
export type DiagnosticFeatureOptions = LspDiagnostic | null;
/**
 * Whether to enable diagnostic.
 */
export type EnableDiagnosticFeature = BoolDefaultTrue | null;
export type DocumentLinkFeatureOptions = LspDocumentLink | null;
/**
 * Whether to enable document link.
 */
export type EnableDocumentLinkFeature = BoolDefaultTrue | null;
export type FormattingFeatureOptions = LspFormatting | null;
/**
 * Whether to enable formatting.
 */
export type EnableFormattingFeature = BoolDefaultTrue | null;
export type GotoDeclarationFeatureOptions = LspGotoDefinition | null;
/**
 * Whether to enable goto definition.
 */
export type EnableGotoDefinitionFeature = BoolDefaultTrue | null;
export type GotoDefinitionFeatureOptions = LspGotoDefinition | null;
export type GotoTypeDefinitionFeatureOptions = LspGotoDefinition | null;
export type HoverFeatureOptions = LspHover | null;
/**
 * Whether to enable hover.
 */
export type EnableHoverFeature = BoolDefaultTrue | null;
export type WorkspaceDiagnosticsFeatureOptions = LspWorkspaceDiagnostic | null;
/**
 * Whether to enable workspace diagnostic.
 */
export type EnableWorkspaceDiagnosticFeature = BoolDefaultTrue | null;
export type EnableTheSchemaValidation = BoolDefaultTrue | null;
/**
 * If `additionalProperties` is not specified in the JSON Schema,
 * the strict mode treats it as `additionalProperties: false`,
 * which is different from the JSON Schema specification.
 */
export type EnableStrictSchemaValidation = BoolDefaultTrue | null;
export type SchemaCatalogOptions = SchemaCatalog | null;
/**
 * The catalog is evaluated after the schemas specified by [[schemas]].\
 * Schemas are loaded in order from the beginning of the catalog list.
 */
export type TheSchemaCatalogPathUrlArray = SchemaCatalogPath[] | null;
/**
 * Generic value that can be either single or multiple
 */
export type SchemaCatalogPath = string;
export type SchemaItems = SchemaItem[] | null;
export type SchemaItem = TheSchemaForTheRootTable | TheSchemaForTheSubValue;
export type TheTOMLVersionThatTheSchemaIsAvailable = TOMLVersion1 | null;
export type TheSchemaPath = string;
/**
 * The file match pattern to include the target to apply the schema.
 * Supports glob pattern.
 *
 * @minItems 1
 */
export type TheFileMatchPatternOfTheSchema = [string, ...string[]];
export type TheAccessorsToApplyTheSubSchema = string;
export type TheSubSchemaPath = string;
/**
 * The file match pattern to include the target to apply the sub schema.
 * Supports glob pattern.
 *
 * @minItems 1
 */
export type TheFileMatchPatternOfTheSubSchema = [string, ...string[]];
export type OverrideConfigItems = OverrideConfigItem[] | null;
export type FilesOptionsToOverride = FilesOptionsToOverride1;
/**
 * The file match pattern to include in formatting and linting.
 * Supports glob pattern.
 *
 * @minItems 1
 */
export type FilePatternsToInclude1 = [string, ...string[]];
export type FormatOptionsToOverride = OverrideFormatOptions | null;
export type FormatEnabled = BoolDefaultTrue | null;
export type LintOptionsToOverride = OverrideLintOptions | null;
export type LintEnabled = BoolDefaultTrue | null;

/**
 * **Tombi** (鳶 `/toɴbi/`) is a toolkit for TOML; providing a formatter/linter and language server.
 * See the [GitHub repository](https://github.com/tombi-toml/tombi) for more information.
 */
export interface Tombi {
  'toml-version'?: TOMLVersion;
  files?: FilesOptions | null;
  format?: FormatterOptions | null;
  lint?: LinterOptions | null;
  lsp?: LanguageServerOptions | null;
  schema?: SchemaOverviewOptions | null;
  schemas?: SchemaItems;
  overrides?: OverrideConfigItems;
}
export interface FilesOptions {
  include?: FilePatternsToInclude;
  exclude?: FilePatternsToExclude;
}
export interface FormatterOptions {
  rules?: FormatRules;
}
export interface FormatRules1 {
  'array-bracket-space-width'?: TheNumberOfSpacesInsideTheBracketsOfASingleLineArray;
  'array-comma-space-width'?: TheNumberOfSpacesAfterTheCommaInASingleLineArray;
  'date-time-delimiter'?: TheDelimiterBetweenDateAndTime;
  'indent-style'?: TheStyleOfIndentation;
  'indent-sub-tables'?: WhetherToIndentTheSubTables;
  'indent-table-key-value-pairs'?: WhetherToIndentTheTableKeyValuePairs;
  'indent-width'?: TheNumberOfSpacesPerIndentationLevel;
  'inline-table-brace-space-width'?: TheNumberOfSpacesInsideTheBracketsOfASingleLineInlineTable;
  'inline-table-comma-space-width'?: TheNumberOfSpacesAfterTheCommaInASingleLineInlineTable;
  'key-value-equals-sign-alignment'?: WhetherToAlignTheEqualsSignInTheKeyValuePairs;
  'string-quote-style'?: ThePreferredQuoteCharacterForStrings;
  'trailing-comment-alignment'?: WhetherToAlignTheTrailingCommentsInTheKeyValuePairs;
  'key-value-equals-sign-space-width'?: TheNumberOfSpacesAroundTheEqualsSignInAKeyValuePair;
  'line-ending'?: TheTypeOfLineEnding;
  'line-width'?: TheMaximumLineWidth;
  'trailing-comment-space-width'?: TheNumberOfSpacesBeforeTheTrailingComment;
}
export interface LinterOptions {
  rules?: LintRules;
}
export interface LintRules1 {
  'key-empty'?: KeyEmpty;
  'dotted-keys-out-of-order'?: DottedKeysOutOfOrder;
  'tables-out-of-order'?: TablesOutOfOrder;
}
export interface LanguageServerOptions {
  'code-action'?: CodeActionFeatureOptions;
  completion?: CompletionFeatureOptions;
  diagnostic?: DiagnosticFeatureOptions;
  'document-link'?: DocumentLinkFeatureOptions;
  formatting?: FormattingFeatureOptions;
  'goto-declaration'?: GotoDeclarationFeatureOptions;
  'goto-definition'?: GotoDefinitionFeatureOptions;
  'goto-type-definition'?: GotoTypeDefinitionFeatureOptions;
  hover?: HoverFeatureOptions;
  'workspace-diagnostic'?: WorkspaceDiagnosticsFeatureOptions;
}
export interface LspCodeAction {
  enabled?: EnableCodeActionFeature;
}
export interface LspCompletion {
  enabled?: EnableCompletionFeature;
}
export interface LspDiagnostic {
  enabled?: EnableDiagnosticFeature;
}
export interface LspDocumentLink {
  enabled?: EnableDocumentLinkFeature;
}
export interface LspFormatting {
  enabled?: EnableFormattingFeature;
}
export interface LspGotoDefinition {
  enabled?: EnableGotoDefinitionFeature;
}
export interface LspHover {
  enabled?: EnableHoverFeature;
}
export interface LspWorkspaceDiagnostic {
  enabled?: EnableWorkspaceDiagnosticFeature;
}
export interface SchemaOverviewOptions {
  enabled?: EnableTheSchemaValidation;
  strict?: EnableStrictSchemaValidation;
  catalog?: SchemaCatalogOptions;
}
export interface SchemaCatalog {
  paths?: TheSchemaCatalogPathUrlArray;
}
export interface TheSchemaForTheRootTable {
  'toml-version'?: TheTOMLVersionThatTheSchemaIsAvailable;
  path: TheSchemaPath;
  include: TheFileMatchPatternOfTheSchema;
}
export interface TheSchemaForTheSubValue {
  root: TheAccessorsToApplyTheSubSchema;
  path: TheSubSchemaPath;
  include: TheFileMatchPatternOfTheSubSchema;
}
export interface OverrideConfigItem {
  files: FilesOptionsToOverride;
  format?: FormatOptionsToOverride;
  lint?: LintOptionsToOverride;
}
export interface FilesOptionsToOverride1 {
  include: FilePatternsToInclude1;
  exclude?: FilePatternsToExclude;
}
export interface OverrideFormatOptions {
  enabled?: FormatEnabled;
  rules?: FormatRules;
}
export interface OverrideLintOptions {
  enabled?: LintEnabled;
  rules?: LintRules;
}
