/* eslint-disable */

/**
 * Paths to include for formatting. In gitignore mode these are files containing gitignore-style patterns.
 */
export type StringArray = string[];

/**
 * Configuration file for yamlfmt
 */
export interface YamlfmtConfig {
  /**
   * Parse and write files with LF or CRLF line endings. This global setting overrides formatter-level line ending settings.
   */
  line_ending?: 'lf' | 'crlf';
  /**
   * Use doublestar for include and exclude paths.
   */
  doublestar?: boolean;
  /**
   * Continue formatting and do not exit with code 1 when an invalid YAML file is found.
   */
  continue_on_error?: boolean;
  /**
   * Controls how include and exclude paths are interpreted.
   */
  match_type?: 'standard' | 'doublestar' | 'gitignore';
  include?: StringArray;
  exclude?: StringArray;
  /**
   * Use gitignore files for exclude paths in addition to exclude patterns.
   */
  gitignore_excludes?: boolean;
  /**
   * Path to the gitignore file used when gitignore exclusions are enabled.
   */
  gitignore_path?: string;
  regex_exclude?: StringArray;
  extensions?: StringArray;
  /**
   * Formatter settings. The basic formatter is the default formatter; kyaml is an alternate formatter type.
   */
  formatter?: BasicFormatter | KyamlFormatter;
  /**
   * Output format used for stdout and stderr messages.
   */
  output_format?: 'default' | 'line' | 'gitlab';
  [k: string]: unknown | undefined;
}
/**
 * Formatter settings for the basic formatter. The basic formatter is the default formatter.
 */
export interface BasicFormatter {
  /**
   * Formatter type.
   */
  type?: 'basic';
  /**
   * Indentation level in spaces for formatted YAML.
   */
  indent?: number;
  /**
   * Include --- at document start.
   */
  include_document_start?: boolean;
  /**
   * Parse and write files with LF or CRLF line endings.
   */
  line_ending?: 'lf' | 'crlf';
  /**
   * Retain line breaks in formatted YAML.
   */
  retain_line_breaks?: boolean;
  /**
   * Retain line breaks but collapse runs of blank lines to a single blank line.
   */
  retain_line_breaks_single?: boolean;
  /**
   * Reject YAML anchors and aliases found in the document.
   */
  disallow_anchors?: boolean;
  /**
   * Maximum line length. A value of 0 means no limit.
   */
  max_line_length?: number;
  /**
   * Preserve newlines in folded block scalars that start with >.
   */
  scan_folded_as_literal?: boolean;
  /**
   * Render block sequence items without an increased indent.
   */
  indentless_arrays?: boolean;
  /**
   * Drop the !!merge tag from well-formed merge keys that use <<.
   */
  drop_merge_tag?: boolean;
  /**
   * Number of padding spaces inserted before line comments.
   */
  pad_line_comments?: number;
  /**
   * Trim trailing whitespace from lines.
   */
  trim_trailing_whitespace?: boolean;
  /**
   * Always add a newline at end of file.
   */
  eof_newline?: boolean;
  /**
   * Attempt to strip YAML directives before formatting and put them back afterwards.
   */
  strip_directives?: boolean;
  /**
   * Indentation level for block sequences. A value of 0 keeps the formatter default behavior.
   */
  array_indent?: number;
  /**
   * Indent an array that appears at the root indentation level of the document.
   */
  indent_root_array?: boolean;
  /**
   * Disable correction for alias nodes used as mapping keys.
   */
  disable_alias_key_correction?: boolean;
  /**
   * Force arrays to be written in flow or block style. Leave empty to preserve the original style.
   */
  force_array_style?: '' | 'flow' | 'block';
  /**
   * Force quoted scalars to use single or double quotes. Leave empty to preserve the original style.
   */
  force_quote_style?: '' | 'single' | 'double';
  [k: string]: unknown | undefined;
}
/**
 * Formatter settings for the kyaml formatter.
 */
export interface KyamlFormatter {
  /**
   * Formatter type.
   */
  type: 'kyaml';
}
