/* eslint-disable */

/**
 * ANSI color number or color string accepted by Glamour.
 */
export type StyleColor = string;
/**
 * Custom metadata ignored by Glamour.
 *
 * This interface was referenced by `GlamourStyle`'s JSON-Schema definition
 * via the `patternProperty` "^_".
 */
export type ExtensionMetadata =
  | unknown[]
  | boolean
  | number
  | null
  | {
      [k: string]: unknown | undefined;
    }
  | string;

/**
 * Style configuration for Charmbracelet Glamour and Glow Markdown rendering.
 * https://github.com/charmbracelet/glamour/tree/main/styles
 */
export interface GlamourStyle {
  $schema?: string;
  block_quote?: StyleBlock;
  code?: StyleBlock;
  code_block?: StyleCodeBlock;
  definition_description?: StylePrimitive;
  definition_list?: StyleBlock;
  definition_term?: StylePrimitive;
  document?: StyleBlock;
  emph?: StylePrimitive;
  enumeration?: StylePrimitive;
  h1?: StyleBlock;
  h2?: StyleBlock;
  h3?: StyleBlock;
  h4?: StyleBlock;
  h5?: StyleBlock;
  h6?: StyleBlock;
  heading?: StyleBlock;
  hr?: StylePrimitive;
  html_block?: StyleBlock;
  html_span?: StyleBlock;
  image?: StylePrimitive;
  image_text?: StylePrimitive;
  item?: StylePrimitive;
  link?: StylePrimitive;
  link_text?: StylePrimitive;
  list?: StyleList;
  paragraph?: StyleBlock;
  strikethrough?: StylePrimitive;
  strong?: StylePrimitive;
  table?: StyleTable;
  task?: StyleTask;
  text?: StylePrimitive;
  [k: string]:
    | ExtensionMetadata
    | string
    | StyleBlock
    | StyleCodeBlock
    | StylePrimitive
    | StyleList
    | StyleTable
    | StyleTask
    | undefined;
}
/**
 * Block element style settings.
 */
export interface StyleBlock {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  color?: StyleColor;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  indent?: number;
  indent_token?: string;
  inverse?: boolean;
  italic?: boolean;
  lower?: boolean;
  margin?: number;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  suffix?: string;
  title?: boolean;
  underline?: boolean;
  upper?: boolean;
}
/**
 * Code block style settings.
 */
export interface StyleCodeBlock {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  chroma?: Chroma;
  color?: StyleColor;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  indent?: number;
  indent_token?: string;
  inverse?: boolean;
  italic?: boolean;
  lower?: boolean;
  margin?: number;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  suffix?: string;
  /**
   * Chroma theme name used for syntax highlighting.
   */
  theme?: string;
  title?: boolean;
  underline?: boolean;
  upper?: boolean;
}
/**
 * Chroma token group styles for fenced code block syntax highlighting.
 */
export interface Chroma {
  background?: StylePrimitive;
  comment?: StylePrimitive;
  comment_preproc?: StylePrimitive;
  error?: StylePrimitive;
  generic_deleted?: StylePrimitive;
  generic_emph?: StylePrimitive;
  generic_inserted?: StylePrimitive;
  generic_strong?: StylePrimitive;
  generic_subheading?: StylePrimitive;
  keyword?: StylePrimitive;
  keyword_namespace?: StylePrimitive;
  keyword_reserved?: StylePrimitive;
  keyword_type?: StylePrimitive;
  literal?: StylePrimitive;
  literal_date?: StylePrimitive;
  literal_number?: StylePrimitive;
  literal_string?: StylePrimitive;
  literal_string_escape?: StylePrimitive;
  name?: StylePrimitive;
  name_attribute?: StylePrimitive;
  name_builtin?: StylePrimitive;
  name_class?: StylePrimitive;
  name_constant?: StylePrimitive;
  name_decorator?: StylePrimitive;
  name_exception?: StylePrimitive;
  name_function?: StylePrimitive;
  name_other?: StylePrimitive;
  name_tag?: StylePrimitive;
  operator?: StylePrimitive;
  punctuation?: StylePrimitive;
  text?: StylePrimitive;
}
/**
 * Inline element style settings.
 */
export interface StylePrimitive {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  color?: StyleColor;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  inverse?: boolean;
  italic?: boolean;
  lower?: boolean;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  suffix?: string;
  title?: boolean;
  underline?: boolean;
  upper?: boolean;
}
/**
 * List style settings.
 */
export interface StyleList {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  color?: StyleColor;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  indent?: number;
  indent_token?: string;
  inverse?: boolean;
  italic?: boolean;
  level_indent?: number;
  lower?: boolean;
  margin?: number;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  suffix?: string;
  title?: boolean;
  underline?: boolean;
  upper?: boolean;
}
/**
 * Table style settings.
 */
export interface StyleTable {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  center_separator?: string;
  color?: StyleColor;
  column_separator?: string;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  indent?: number;
  indent_token?: string;
  inverse?: boolean;
  italic?: boolean;
  lower?: boolean;
  margin?: number;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  row_separator?: string;
  suffix?: string;
  title?: boolean;
  underline?: boolean;
  upper?: boolean;
}
/**
 * Task list item style settings.
 */
export interface StyleTask {
  background_color?: StyleColor;
  blink?: boolean;
  block_prefix?: string;
  block_suffix?: string;
  bold?: boolean;
  color?: StyleColor;
  conceal?: boolean;
  crossed_out?: boolean;
  faint?: boolean;
  format?: string;
  inverse?: boolean;
  italic?: boolean;
  lower?: boolean;
  /**
   * DEPRECATED. Compatibility field for older Glamour style configurations.
   */
  overlined?: boolean;
  prefix?: string;
  suffix?: string;
  ticked?: string;
  title?: boolean;
  underline?: boolean;
  unticked?: string;
  upper?: boolean;
}
