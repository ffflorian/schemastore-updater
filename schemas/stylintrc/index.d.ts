/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * Expect the @block keyword when defining block variables.
 */
export type BlockKeywordPreference = false | "never" | "always";
/**
 * Expect {} when declaring a selector.
 */
export type BracketsPreference = false | "never" | "always";
/**
 * Expect : when declaring a property.
 */
export type ColonPreference = false | "never" | "always";
/**
 * Enforce variables when defining hex values
 */
export type ColorsPreference = false | "always";
/**
 * Enforce or disallow spaces after commas.
 */
export type CommaSpacePreference = false | "never" | "always";
/**
 * Enforce or disallow spaces after line comments ('// comment' vs '//comment').
 */
export type CommentSpacePreference = false | "never" | "always";
/**
 * By default Stylint ignores @css blocks. If set to true however, it will throw a warning if @css is used.
 */
export type CssLiteralPreference = false | "never";
/**
 * In Stylus you have the option of using mixins transparently, like css properties. Because of how Stylus' syntax works, this rule also allows you to add adhoc support for custom properties as needed by just added the name of the property to this array.
 */
export type CustomPropertiesArray = unknown[];
/**
 * Sets the max selector depth. If set to 4, max selector depth will be 4 indents. Pseudo selectors like &:first-child or &:hover won't count towards the limit. Set to false if you don't want to check for this
 */
export type MaxSelectorDepthPreference = boolean | number;
/**
 * Checks if selector or property duplicated unnecessarily.
 */
export type DuplicatesPreference = boolean;
/**
 * Check for places where properties can be written more efficiently. (Example: prefer margin 0 over margin 0 0)
 */
export type PropertyEfficiencyPreference = false | "never" | "always";
/**
 * Exclude certain file patterns from linting. (Example: ['vendor/** /*', 'node_modules/** /*'])
 */
export type ExcludeFilesPreference = unknown[];
/**
 * Pass in either @extend or @extends to enforce one, or false to enforce neither.
 */
export type ExtendSPreference = false | "@extend" | "@extends";
/**
 * Works in conjunction with duplicates. Does nothing on its own. If false, duplicates will check for dupes within individual files only. If true, duplicates will check for dupes across all files.
 */
export type GlobalDuplicateRulesPreference = boolean;
/**
 * Stylint's default setting groups errors and warnings by file when outputting. You can disable this if you want.
 */
export type GroupOutputByFileSchema = boolean;
/**
 * Number of spaces to indent.
 */
export type IndentPrefPreference = boolean | number;
/**
 * Enforce or disallow unnecessary leading zeroes on decimal points.
 */
export type LeadingZeroPreference = false | "never" | "always";
/**
 * Set 'max' number of Errors.
 */
export type MaxNumberOfErrorsPreference = boolean | number;
/**
 * Set 'max' number of Warnings.
 */
export type MaxNumberOfWarningsPreference = boolean | number;
/**
 * Returns true if mixed spaces and tabs are found. If a number is passed to indentPref, it assumes soft tabs (ie, spaces), and if false is passed to indentPref it assumes hard tabs. If soft tabs, outputs warning/error if hard tabs used. If hard tabs, outputs warning/error if unnecessary extra spaces found.
 */
export type AllowMixedHardSoftTabs = boolean;
/**
 * In Stylus you have the option of using mixins transparently, like css properties. Because of how Stylus' syntax works, this rule also allows you to add adhoc support for custom mixins as needed by just added the name of the mixin to this array.
 */
export type Mixins = unknown[];
/**
 * Enforce a particular naming convention when declaring classes, ids, and variables. Throws a warning if you don't follow the convention.
 */
export type NamingConvention = false | "lowercase-dash" | "lowercase_underscore" | "camelCase" | "BEM";
/**
 * By default, namingConvention only looks at variable names. If namingConventionStrict is set to true, namingConvention will also look at class and id names. If you have a lot of 3rd party css you can't change you might want to leave this off.
 */
export type NamingConventionStrictSchema = boolean;
/**
 * If 'always' check for places where none used instead of 0. If 'never' check for places where 0 could be used instead of none.
 */
export type NonePreference = false | "always" | "never";
/**
 * If true, show warning when !important is found.
 */
export type NoImportantPreference = boolean;
/**
 * Enforce or disallow use of extra spaces inside parens.
 */
export type ParenSpacePreference = false | "always" | "never";
/**
 * Enforce extending placeholder vars when using @extend(s) (prefer @extends $placeholder over $extends .some-class)
 */
export type PlaceholdersPreference = false | "always" | "never";
/**
 * Enforce use of $ when defining a variable. In Stylus using a $ when defining a variable is optional, but is a good idea if you want to prevent ambiguity. Not including the $ sets up situations where you wonder: 'Is this a variable or a value?' For instance: padding $default is easier to understand than padding default.
 */
export type PrefixVarsWithDollarPreference = false | "always" | "never";
/**
 * Enforce consistent quotation style.
 */
export type QuoteStylePreference = false | "single" | "double";
export type Schema = string;
export type ColumnsSchema = Schema[];
export type ColumnSplitterSchema = boolean | string;
export type ShowHeadersSchema = boolean;
export type TruncateSchema = boolean;
/**
 * Enforce or disallow semicolons
 */
export type SemicolonPreference = false | "always" | "never";
/**
 * Enforce a particular sort order when declaring properties. Throws a warning if you don't follow the order.
 */
export type PropertySortingOrderPreference = boolean | string | unknown[];
/**
 * Enforce putting properties on new lines.
 */
export type OneLinersPreference = false | "always" | "never";
/**
 * An explanation about the purpose of this instance.
 */
export type TrailingWhitespacePreference = false | "never";
/**
 * Looks for instances of the inefficient * selector. Lots of resets use this, for good reason (resetting box model), but past that you really don't need this selector, and you should avoid it if possible.
 */
export type UniversalPreference = false | "never";
/**
 * Check that a property is valid CSS or HTML.
 */
export type ValidPreference = boolean;
/**
 * Looks for instances of 0px. You don't need the px. Checks all units, not just px.
 */
export type ZeroUnitsPreference = false | "never";
/**
 * Enforce some (very) basic z-index sanity. Any number passed in will be used as the base for your z-index values. Throws an error if your value is not normalized.
 */
export type ZIndexNormalizePreference = boolean | number;

export interface JSONSchemaForStylintConfigurationFiles {
  blocks?: BlockKeywordPreference;
  brackets?: BracketsPreference;
  colons?: ColonPreference;
  colors?: ColorsPreference;
  commaSpace?: CommaSpacePreference;
  commentSpace?: CommentSpacePreference;
  cssLiteral?: CssLiteralPreference;
  customProperties?: CustomPropertiesArray;
  depthLimit?: MaxSelectorDepthPreference;
  duplicates?: DuplicatesPreference;
  efficient?: PropertyEfficiencyPreference;
  exclude?: ExcludeFilesPreference;
  extendPref?: ExtendSPreference;
  globalDupe?: GlobalDuplicateRulesPreference;
  groupOutputByFile?: GroupOutputByFileSchema;
  indentPref?: IndentPrefPreference;
  leadingZero?: LeadingZeroPreference;
  maxErrors?: MaxNumberOfErrorsPreference;
  maxWarnings?: MaxNumberOfWarningsPreference;
  mixed?: AllowMixedHardSoftTabs;
  mixins?: Mixins;
  namingConvention?: NamingConvention;
  namingConventionStrict?: NamingConventionStrictSchema;
  none?: NonePreference;
  noImportant?: NoImportantPreference;
  parenSpace?: ParenSpacePreference;
  placeholders?: PlaceholdersPreference;
  prefixVarsWithDollar?: PrefixVarsWithDollarPreference;
  quotePref?: QuoteStylePreference;
  reporterOptions?: ReporterOptionsSchema;
  semicolons?: SemicolonPreference;
  sortOrder?: PropertySortingOrderPreference;
  stackedProperties?: OneLinersPreference;
  trailingWhitespace?: TrailingWhitespacePreference;
  universal?: UniversalPreference;
  valid?: ValidPreference;
  zeroUnits?: ZeroUnitsPreference;
  zIndexNormalize?: ZIndexNormalizePreference;
  [k: string]: unknown;
}
/**
 * Customize reporter output.
 */
export interface ReporterOptionsSchema {
  columns?: ColumnsSchema;
  columnSplitter?: ColumnSplitterSchema;
  showHeaders?: ShowHeadersSchema;
  truncate?: TruncateSchema;
  [k: string]: unknown;
}
