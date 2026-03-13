/* eslint-disable */

export interface TaploConfigurationSchema {
  /**
   * Files to exclude (ignore).
   *
   * A list of Unix-like [glob](https://en.wikipedia.org/wiki/Glob_(programming)) path patterns. Globstars (`**`) are supported.
   *
   * Relative paths are **not** relative to the configuration file, but rather depends on the tool using the configuration.
   *
   * This has priority over `include`.
   */
  exclude?: string[] | null;
  /**
   * Formatting options.
   */
  formatting?: OptionsIncomplete | null;
  /**
   * Files to include.
   *
   * A list of Unix-like [glob](https://en.wikipedia.org/wiki/Glob_(programming)) path patterns. Globstars (`**`) are supported.
   *
   * Relative paths are **not** relative to the configuration file, but rather depends on the tool using the configuration.
   *
   * Omitting this property includes all files, **however an empty array will include none**.
   */
  include?: string[] | null;
  plugins?: {
    [k: string]: Plugin | undefined;
  } | null;
  /**
   * Rules are used to override configurations by path and keys.
   */
  rule?: Rule[];
  /**
   * Schema validation options.
   */
  schema?: SchemaOptions | null;
}
/**
 * All the formatting options.
 */
export interface OptionsIncomplete {
  /**
   * Align consecutive comments after entries and items vertically.
   *
   * This applies to comments that are after entries or array items.
   */
  align_comments?: boolean | null;
  /**
   * Align entries vertically.
   *
   * Entries that have table headers, comments, or blank lines between them are not aligned.
   */
  align_entries?: boolean | null;
  /**
   * If `align_comments` is true, apply the alignment in cases where there's only one comment.
   */
  align_single_comments?: boolean | null;
  /**
   * The maximum amount of consecutive blank lines allowed.
   */
  allowed_blank_lines?: number | null;
  /**
   * Automatically collapse arrays if they fit in one line.
   *
   * The array won't be collapsed if it contains a comment.
   */
  array_auto_collapse?: boolean | null;
  /**
   * Automatically expand arrays to multiple lines once they exceed the configured `column_width`.
   */
  array_auto_expand?: boolean | null;
  /**
   * Put trailing commas for multiline arrays.
   */
  array_trailing_comma?: boolean | null;
  /**
   * Target maximum column width after which arrays are expanded into new lines.
   *
   * This is best-effort and might not be accurate.
   */
  column_width?: number | null;
  /**
   * Omit whitespace padding inside single-line arrays.
   */
  compact_arrays?: boolean | null;
  /**
   * Omit whitespace around `=`.
   */
  compact_entries?: boolean | null;
  /**
   * Omit whitespace padding inside inline tables.
   */
  compact_inline_tables?: boolean | null;
  /**
   * Use CRLF line endings
   */
  crlf?: boolean | null;
  /**
   * Indent entries under tables.
   */
  indent_entries?: boolean | null;
  /**
   * Indentation to use, should be tabs or spaces but technically could be anything.
   */
  indent_string?: string | null;
  /**
   * Indent subtables if they come in order.
   */
  indent_tables?: boolean | null;
  /**
   * Expand values (e.g.) inside inline tables where possible.
   */
  inline_table_expand?: boolean | null;
  /**
   * Alphabetically reorder array values that are not separated by blank lines.
   */
  reorder_arrays?: boolean | null;
  /**
   * Alphabetically reorder keys that are not separated by blank lines.
   */
  reorder_keys?: boolean | null;
  /**
   * Add trailing newline to the source.
   */
  trailing_newline?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * A plugin to extend Taplo's capabilities.
 */
export interface Plugin {
  /**
   * Optional settings for the plugin.
   */
  settings?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A rule to override options by either name or file.
 */
export interface Rule {
  /**
   * Files that are excluded from this rule.
   *
   * A list of Unix-like [glob](https://en.wikipedia.org/wiki/Glob_(programming)) path patterns.
   *
   * Relative paths are **not** relative to the configuration file, but rather depends on the tool using the configuration.
   *
   * This has priority over `include`.
   */
  exclude?: string[] | null;
  /**
   * Formatting options.
   */
  formatting?: OptionsIncomplete | null;
  /**
   * Files this rule is valid for.
   *
   * A list of Unix-like [glob](https://en.wikipedia.org/wiki/Glob_(programming)) path patterns.
   *
   * Relative paths are **not** relative to the configuration file, but rather depends on the tool using the configuration.
   *
   * Omitting this property includes all files, **however an empty array will include none**.
   */
  include?: string[] | null;
  /**
   * Keys the rule is valid for in a document.
   *
   * A list of Unix-like [glob](https://en.wikipedia.org/wiki/Glob_(programming)) dotted key patterns.
   *
   * This allows enabling the rule for specific paths in the document.
   *
   * For example:
   *
   * - `package.metadata` will enable the rule for everything inside the `package.metadata` table, including itself.
   *
   * If omitted, the rule will always be valid for all keys.
   */
  keys?: string[] | null;
  /**
   * The name of the rule.
   *
   * Used in `taplo::<name>` comments.
   */
  name?: string | null;
  /**
   * Schema validation options.
   */
  schema?: SchemaOptions | null;
}
/**
 * Options for schema validation and completion.
 *
 * Schemas in rules with defined keys are ignored.
 */
export interface SchemaOptions {
  /**
   * Whether the schema should be enabled or not.
   *
   * Defaults to true if omitted.
   */
  enabled?: boolean | null;
  /**
   * A local file path to the schema, overrides `url` if set.
   *
   * URLs are also accepted here, but it's not a guarantee and might change in newer releases. Please use the `url` field instead whenever possible.
   */
  path?: string | null;
  /**
   * A full absolute URL to the schema.
   *
   * The url of the schema, supported schemes are `http`, `https`, `file` and `taplo`.
   */
  url?: string | null;
}
