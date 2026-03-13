/* eslint-disable */

/**
 * JSON schema fcor djLint's configuration file
 */
export interface DjlintSchema {
  $schema?: string;
  blank_line_after_tag?: string;
  blank_line_before_tag?: string;
  close_void_tags?: boolean;
  css?: CssBeautify;
  custom_blocks?: string;
  custom_html?: string;
  exclude?: string;
  extend_exclude?: string;
  extension?: string;
  files?: string[];
  format_attribute_template_tags?: boolean;
  format_css?: boolean;
  format_js?: boolean;
  ignore?: string;
  ignore_blocks?: string;
  ignore_case?: boolean;
  include?: string;
  indent?: number;
  js?: JsBeautify;
  line_break_after_multiline_tag?: boolean;
  linter_output_format?: string;
  max_attribute_length?: number;
  max_blank_lines?: number;
  max_line_length?: number;
  no_function_formatting?: boolean;
  no_line_after_yaml?: boolean;
  no_set_formatting?: boolean;
  'per-file-ignores'?: {
    [k: string]: unknown | undefined;
  };
  preserve_blank_lines?: boolean;
  preserve_leading_space?: boolean;
  profile?: 'html' | 'django' | 'jinja' | 'nunjucks' | 'handlebars' | 'golang' | 'angular';
  require_pragma?: boolean;
  use_gitignore?: boolean;
}
export interface CssBeautify {
  [k: string]: unknown | undefined;
}
export interface JsBeautify {
  [k: string]: unknown | undefined;
}
