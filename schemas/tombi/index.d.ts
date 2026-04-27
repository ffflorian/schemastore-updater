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
/**
 * Choose which quote style the formatter prefers for basic strings.
 */
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
export type SchemaSpecificFormatOptions = SchemaSpecificFormatOptions1 | null;
export type SchemaSpecificFormatRules = SchemaSpecificFormatRules1 | null;
export type WhetherSchemaDefinedArrayValuesOrderingIsEnabled = SchemaDefinedArrayValuesOrdering | null;
export type WhetherSchemaDefinedArrayValuesOrderingIsEnabled1 = BoolDefaultTrue | null;
export type WhetherSchemaDefinedTableKeyOrderingIsEnabled = SchemaDefinedTableKeyOrdering | null;
export type WhetherSchemaDefinedTableKeyOrderingIsEnabled1 = BoolDefaultTrue | null;
export type SchemaSpecificLintOptions = SchemaSpecificLintOptions1 | null;
export type SchemaSpecificLintRules = SchemaSpecificLintRules1 | null;
/**
 * Override the deprecated diagnostic level for this schema.
 */
export type Deprecated = (SeverityLevel & SeverityLevelDefaultWarn) | null;
export type SchemaSpecificOverrides = SchemaSpecificOverrideItem[] | null;
/**
 * @minItems 1
 */
export type AccessorPatternsToOverride = [AccessorPattern, ...AccessorPattern[]];
/**
 * To apply it to the Root Table, use `""`.
 *
 * Array indices are matched as wildcards. That means `[*]` and numeric
 * indices such as `[0]` are treated the same and will match any array
 * element, so `items[0].name` behaves like `items[*].name`.
 *
 * **Example**:
 *   - `""`
 *   - `"tool.*"`
 *   - `"items[*].name"`
 */
export type AccessorPattern = string;
export type FormatOptionsToOverride = SchemaSpecificOverrideFormatOptions | null;
export type SchemaSpecificOverrideFormatRules = SchemaSpecificOverrideFormatRules1 | null;
export type OverrideArrayValuesOrderingForMatchedRoots = OverrideArrayValuesOrderingForMatchedRoots1 | null;
export type OverrideArrayValuesOrderingForMatchedRoots1 = ArrayValuesOrder | SchemaDefinedArrayValuesOrdering;
export type ArrayValuesOrder = 'ascending' | 'descending' | 'version-sort';
export type OverrideTableKeyOrderingForMatchedRoots = OverrideTableKeyOrderingForMatchedRoots1 | null;
export type OverrideTableKeyOrderingForMatchedRoots1 = TableKeysOrder | SchemaDefinedTableKeyOrdering;
export type TableKeysOrder = 'ascending' | 'descending' | 'schema' | 'version-sort';
export type LintOptionsToOverride = SchemaSpecificOverrideLintOptions | null;
export type SchemaSpecificOverrideLintRules = SchemaSpecificOverrideLintRules1 | null;
export type OverrideDeprecatedDiagnosticsForMatchedRoots = (SeverityLevel & SeverityLevelDefaultWarn) | null;
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
export type FormatOptionsToOverride1 = OverrideFormatOptions | null;
export type FormatEnabled = BoolDefaultTrue | null;
export type LintOptionsToOverride1 = OverrideLintOptions | null;
export type LintEnabled = BoolDefaultTrue | null;
/**
 * Configure built-in support for `Cargo.toml`.
 */
export type CargoExtension = CargoExtensionFeatures | null;
export type CargoExtensionFeatures = EnabledOnly | CargoExtensionFeatureTree;
/**
 * Whether this feature is enabled.
 */
export type EnableFeature = BoolDefaultTrue;
export type CargoLSPFeatureOptions = CargoLspFeatures | null;
export type CargoLspFeatures = EnabledOnly | CargoLspFeatureTree;
export type CompletionFeatureOptions1 = CargoCompletionFeatures | null;
export type CargoCompletionFeatures = EnabledOnly | CargoCompletionFeatureTree;
/**
 * Whether completion suggests dependency versions.
 */
export type DependencyVersionCompletionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether this nested feature is enabled.
 */
export type EnableFeature1 = BoolDefaultTrue | null;
/**
 * Whether completion suggests dependency features.
 */
export type DependencyFeatureCompletionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether completion suggests filesystem paths.
 */
export type PathCompletionFeature = ToggleFeatureDefaultTrue | null;
export type InlayHintFeatureOptions = CargoInlayHintFeatures | null;
export type CargoInlayHintFeatures = EnabledOnly | CargoInlayHintFeatureTree;
/**
 * Whether inlay hints show dependency versions.
 */
export type DependencyVersionInlayHintFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether inlay hints show `default-features` values.
 */
export type DefaultFeaturesInlayHintFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether inlay hints show values inherited from the Cargo workspace.
 */
export type WorkspaceValueInlayHintFeature = ToggleFeatureDefaultTrue | null;
export type GotoDefinitionFeatureOptions1 = CargoNavigationFeatures | null;
export type CargoNavigationFeatures = EnabledOnly | CargoNavigationFeatureTree;
/**
 * Whether navigation resolves dependency definitions and declarations.
 */
export type DependencyNavigationFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether navigation resolves workspace member targets.
 */
export type MemberNavigationFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether navigation resolves filesystem paths.
 */
export type PathNavigationFeature = ToggleFeatureDefaultTrue | null;
export type GotoDeclarationFeatureOptions1 = CargoNavigationFeatures | null;
export type DocumentLinkFeatureOptions1 = CargoDocumentLinkFeatures | null;
export type CargoDocumentLinkFeatures = EnabledOnly | CargoDocumentLinkFeatureTree;
/**
 * Whether document links are created for `Cargo.toml` references.
 */
export type CargoTomlDocumentLinkFeature = ToggleFeatureDefaultFalse | null;
/**
 * Whether this nested feature is enabled.
 */
export type EnableFeature2 = BoolDefaultFalse | null;
export type BoolDefaultFalse = boolean;
/**
 * Whether document links are created for crates.io package references.
 */
export type CratesIoDocumentLinkFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether document links are created for Git references.
 */
export type GitDocumentLinkFeature = ToggleFeatureDefaultFalse | null;
/**
 * Whether document links are created for filesystem paths.
 */
export type PathDocumentLinkFeature = ToggleFeatureDefaultFalse | null;
/**
 * Whether document links are created for `workspace = true` references.
 */
export type WorkspaceDocumentLinkFeature = ToggleFeatureDefaultFalse | null;
export type HoverFeatureOptions1 = CargoHoverFeatures | null;
export type CargoHoverFeatures = EnabledOnly | CargoHoverFeatureTree;
/**
 * Whether hover shows detailed dependency metadata.
 */
export type DependencyDetailHoverFeature = ToggleFeatureDefaultTrue | null;
export type CodeActionFeatureOptions1 = CargoCodeActionFeatures | null;
export type CargoCodeActionFeatures = EnabledOnly | CargoCodeActionFeatureTree;
/**
 * Whether code actions can replace a value with `workspace = true`.
 */
export type InheritFromWorkspaceCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether code actions can inherit dependency settings from the workspace.
 */
export type InheritDependencyFromWorkspaceCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether code actions can rewrite inline dependencies to table format.
 */
export type ConvertDependencyToTableFormatCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether code actions can add a dependency to the workspace and inherit it.
 */
export type AddToWorkspaceAndInheritDependencyCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Configure built-in support for `pyproject.toml`.
 */
export type PyprojectExtension = PyprojectExtensionFeatures | null;
export type PyprojectExtensionFeatures = EnabledOnly | PyprojectExtensionFeatureTree;
export type PyprojectLSPFeatureOptions = PyprojectLspFeatures | null;
export type PyprojectLspFeatures = EnabledOnly | PyprojectLspFeatureTree;
/**
 * Configure pyproject completion features.
 */
export type CompletionFeatureOptions2 = PyprojectCompletionFeatures | null;
export type PyprojectCompletionFeatures = EnabledOnly | PyprojectCompletionFeatureTree;
/**
 * Configure pyproject inlay hint features.
 */
export type InlayHintFeatureOptions1 = PyprojectInlayHintFeatures | null;
export type PyprojectInlayHintFeatures = EnabledOnly | PyprojectInlayHintFeatureTree;
/**
 * Configure pyproject go-to-definition features.
 */
export type GotoDefinitionFeatureOptions2 = PyprojectNavigationFeatures | null;
export type PyprojectNavigationFeatures = EnabledOnly | PyprojectNavigationFeatureTree;
/**
 * Configure pyproject go-to-declaration features.
 */
export type GotoDeclarationFeatureOptions2 = PyprojectNavigationFeatures | null;
/**
 * Configure pyproject document link features.
 */
export type DocumentLinkFeatureOptions2 = PyprojectDocumentLinkFeatures | null;
export type PyprojectDocumentLinkFeatures = EnabledOnly | PyprojectDocumentLinkFeatureTree;
/**
 * Whether document links are created for `pyproject.toml` references.
 */
export type PyprojectTomlDocumentLinkFeature = ToggleFeatureDefaultFalse | null;
/**
 * Whether document links are created for `pypi.org` package references.
 */
export type PyPIDocumentLinkFeature = ToggleFeatureDefaultTrue | null;
/**
 * Configure pyproject hover features.
 */
export type HoverFeatureOptions2 = PyprojectHoverFeatures | null;
export type PyprojectHoverFeatures = EnabledOnly | PyprojectHoverFeatureTree;
/**
 * Configure pyproject code action features.
 */
export type CodeActionFeatureOptions2 = PyprojectCodeActionFeatures | null;
export type PyprojectCodeActionFeatures = EnabledOnly | PyprojectCodeActionFeatureTree;
/**
 * Whether code actions can reuse a dependency declared in the workspace.
 */
export type UseWorkspaceDependencyCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Whether code actions can add a dependency to the workspace and reuse it.
 */
export type AddToWorkspaceAndUseWorkspaceDependencyCodeActionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Configure built-in support for `tombi.toml`.
 */
export type TombiExtension = TombiExtensionFeatures | null;
export type TombiExtensionFeatures = EnabledOnly | TombiExtensionFeatureTree;
export type TombiLSPFeatureOptions = TombiLspFeatures | null;
export type TombiLspFeatures = EnabledOnly | TombiLspFeatureTree;
/**
 * Configure Tombi completion features.
 */
export type CompletionFeatureOptions3 = TombiCompletionFeatures | null;
export type TombiCompletionFeatures = EnabledOnly | TombiCompletionFeatureTree;
/**
 * Configure Tombi go-to-definition features.
 */
export type GotoDefinitionFeatureOptions3 = TombiGotoDefinitionFeatures | null;
export type TombiGotoDefinitionFeatures = EnabledOnly | TombiGotoDefinitionFeatureTree;
/**
 * Whether go-to-definition resolves filesystem paths.
 */
export type PathGotoDefinitionFeature = ToggleFeatureDefaultTrue | null;
/**
 * Configure Tombi document link features.
 */
export type DocumentLinkFeatureOptions3 = TombiDocumentLinkFeatures | null;
export type TombiDocumentLinkFeatures = EnabledOnly | TombiDocumentLinkFeatureTree;
/**
 * Configure Tombi hover features.
 */
export type HoverFeatureOptions3 = TombiHoverFeatures | null;
export type TombiHoverFeatures = EnabledOnly | TombiHoverFeatureTree;

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
  extensions?: ExtensionOptions | null;
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
  format?: SchemaSpecificFormatOptions;
  lint?: SchemaSpecificLintOptions;
  overrides?: SchemaSpecificOverrides;
}
export interface SchemaSpecificFormatOptions1 {
  rules?: SchemaSpecificFormatRules;
}
export interface SchemaSpecificFormatRules1 {
  'array-values-order'?: WhetherSchemaDefinedArrayValuesOrderingIsEnabled;
  'table-keys-order'?: WhetherSchemaDefinedTableKeyOrderingIsEnabled;
}
export interface SchemaDefinedArrayValuesOrdering {
  enabled?: WhetherSchemaDefinedArrayValuesOrderingIsEnabled1;
}
export interface SchemaDefinedTableKeyOrdering {
  enabled?: WhetherSchemaDefinedTableKeyOrderingIsEnabled1;
}
export interface SchemaSpecificLintOptions1 {
  rules?: SchemaSpecificLintRules;
}
export interface SchemaSpecificLintRules1 {
  deprecated?: Deprecated;
}
export interface SchemaSpecificOverrideItem {
  targets: AccessorPatternsToOverride;
  format?: FormatOptionsToOverride;
  lint?: LintOptionsToOverride;
}
export interface SchemaSpecificOverrideFormatOptions {
  rules?: SchemaSpecificOverrideFormatRules;
}
export interface SchemaSpecificOverrideFormatRules1 {
  'array-values-order'?: OverrideArrayValuesOrderingForMatchedRoots;
  'table-keys-order'?: OverrideTableKeyOrderingForMatchedRoots;
}
export interface SchemaSpecificOverrideLintOptions {
  rules?: SchemaSpecificOverrideLintRules;
}
export interface SchemaSpecificOverrideLintRules1 {
  deprecated?: OverrideDeprecatedDiagnosticsForMatchedRoots;
}
export interface TheSchemaForTheSubValue {
  root: TheAccessorsToApplyTheSubSchema;
  path: TheSubSchemaPath;
  include: TheFileMatchPatternOfTheSubSchema;
  format?: SchemaSpecificFormatOptions;
  lint?: SchemaSpecificLintOptions;
  overrides?: SchemaSpecificOverrides;
}
export interface OverrideConfigItem {
  files: FilesOptionsToOverride;
  format?: FormatOptionsToOverride1;
  lint?: LintOptionsToOverride1;
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
/**
 * 🚧 Currently, third-party extensions are not supported,
 * and only built-in extensions are provided. 🚧
 */
export interface ExtensionOptions {
  'tombi-toml/cargo'?: CargoExtension;
  'tombi-toml/pyproject'?: PyprojectExtension;
  'tombi-toml/tombi'?: TombiExtension;
}
export interface EnabledOnly {
  enabled: EnableFeature;
}
export interface CargoExtensionFeatureTree {
  lsp?: CargoLSPFeatureOptions;
}
export interface CargoLspFeatureTree {
  completion?: CompletionFeatureOptions1;
  'inlay-hint'?: InlayHintFeatureOptions;
  'goto-definition'?: GotoDefinitionFeatureOptions1;
  'goto-declaration'?: GotoDeclarationFeatureOptions1;
  'document-link'?: DocumentLinkFeatureOptions1;
  hover?: HoverFeatureOptions1;
  'code-action'?: CodeActionFeatureOptions1;
}
export interface CargoCompletionFeatureTree {
  'dependency-version'?: DependencyVersionCompletionFeature;
  'dependency-feature'?: DependencyFeatureCompletionFeature;
  path?: PathCompletionFeature;
}
export interface ToggleFeatureDefaultTrue {
  enabled?: EnableFeature1;
}
export interface CargoInlayHintFeatureTree {
  'dependency-version'?: DependencyVersionInlayHintFeature;
  'default-features'?: DefaultFeaturesInlayHintFeature;
  'workspace-value'?: WorkspaceValueInlayHintFeature;
}
export interface CargoNavigationFeatureTree {
  dependency?: DependencyNavigationFeature;
  member?: MemberNavigationFeature;
  path?: PathNavigationFeature;
}
export interface CargoDocumentLinkFeatureTree {
  'cargo-toml'?: CargoTomlDocumentLinkFeature;
  'crates-io'?: CratesIoDocumentLinkFeature;
  git?: GitDocumentLinkFeature;
  path?: PathDocumentLinkFeature;
  workspace?: WorkspaceDocumentLinkFeature;
}
export interface ToggleFeatureDefaultFalse {
  enabled?: EnableFeature2;
}
export interface CargoHoverFeatureTree {
  'dependency-detail'?: DependencyDetailHoverFeature;
}
export interface CargoCodeActionFeatureTree {
  'inherit-from-workspace'?: InheritFromWorkspaceCodeActionFeature;
  'inherit-dependency-from-workspace'?: InheritDependencyFromWorkspaceCodeActionFeature;
  'convert-dependency-to-table-format'?: ConvertDependencyToTableFormatCodeActionFeature;
  'add-to-workspace-and-inherit-dependency'?: AddToWorkspaceAndInheritDependencyCodeActionFeature;
}
export interface PyprojectExtensionFeatureTree {
  lsp?: PyprojectLSPFeatureOptions;
}
export interface PyprojectLspFeatureTree {
  completion?: CompletionFeatureOptions2;
  'inlay-hint'?: InlayHintFeatureOptions1;
  'goto-definition'?: GotoDefinitionFeatureOptions2;
  'goto-declaration'?: GotoDeclarationFeatureOptions2;
  'document-link'?: DocumentLinkFeatureOptions2;
  hover?: HoverFeatureOptions2;
  'code-action'?: CodeActionFeatureOptions2;
}
export interface PyprojectCompletionFeatureTree {
  path?: PathCompletionFeature;
}
export interface PyprojectInlayHintFeatureTree {
  'dependency-version'?: DependencyVersionInlayHintFeature;
}
export interface PyprojectNavigationFeatureTree {
  dependency?: DependencyNavigationFeature;
  member?: MemberNavigationFeature;
  path?: PathNavigationFeature;
}
export interface PyprojectDocumentLinkFeatureTree {
  'pyproject-toml'?: PyprojectTomlDocumentLinkFeature;
  'pypi-org'?: PyPIDocumentLinkFeature;
}
export interface PyprojectHoverFeatureTree {
  'dependency-detail'?: DependencyDetailHoverFeature;
}
export interface PyprojectCodeActionFeatureTree {
  'use-workspace-dependency'?: UseWorkspaceDependencyCodeActionFeature;
  'add-to-workspace-and-use-workspace-dependency'?: AddToWorkspaceAndUseWorkspaceDependencyCodeActionFeature;
}
export interface TombiExtensionFeatureTree {
  lsp?: TombiLSPFeatureOptions;
}
export interface TombiLspFeatureTree {
  completion?: CompletionFeatureOptions3;
  'goto-definition'?: GotoDefinitionFeatureOptions3;
  'document-link'?: DocumentLinkFeatureOptions3;
  hover?: HoverFeatureOptions3;
}
export interface TombiCompletionFeatureTree {
  path?: PathCompletionFeature;
}
export interface TombiGotoDefinitionFeatureTree {
  path?: PathGotoDefinitionFeature;
}
export interface TombiDocumentLinkFeatureTree {
  path?: PathDocumentLinkFeature;
}
export interface TombiHoverFeatureTree {}
