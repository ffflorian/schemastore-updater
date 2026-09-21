/* eslint-disable */

export interface JSONSchemaForCoffeelintJsonFiles {
  arrow_spacing?: Base;
  braces_spacing?: Base1;
  camel_case_classes?: Base;
  coffeescript_error?: Base;
  colon_assignment_spacing?: Base4;
  cyclomatic_complexity?: Base5;
  duplicate_key?: Base;
  empty_constructor_needs_parens?: Base;
  ensure_comprehensions?: Base;
  eol_last?: Base;
  indentation?: Base5;
  line_endings?: Base11;
  max_line_length?: Base12;
  missing_fat_arrows?: Base;
  newlines_after_classes?: Base5;
  no_backticks?: Base;
  no_debugger?: Base;
  no_empty_functions?: Base;
  no_empty_param_list?: Base;
  no_implicit_braces?: Base19;
  no_implicit_parens?: Base;
  no_interpolation_in_single_quotes?: Base;
  no_nested_string_interpolation?: Base;
  no_plusplus?: Base;
  no_private_function_fat_arrows?: Base;
  no_stand_alone_at?: Base;
  no_tabs?: Base;
  no_this?: Base;
  no_throwing_strings?: Base;
  no_trailing_semicolons?: Base;
  no_trailing_whitespace?: Base30;
  no_unnecessary_double_quotes?: Base;
  no_unnecessary_fat_arrows?: Base;
  non_empty_constructor_needs_parens?: Base;
  prefer_english_operator?: Base;
  space_operators?: Base;
  spacing_after_comma?: Base;
  transform_messes_up_line_numbers?: Base;
  [k: string]: unknown | undefined;
}
/**
 * This rule checks to see that there is spacing before and after the arrow operator that declares a function. [default level: ignore]
 */
export interface Base {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule checks to see that there is the proper spacing inside curly braces. The spacing amount is specified by `spaces`. The spacing amount for empty objects is specified by `empty_object_spaces`. [default level: ignore]
 */
export interface Base1 {
  empty_object_spaces?: 0 | 1;
  spaces?: 0 | 1;
  [k: string]: unknown | undefined;
}
/**
 * This rule checks to see that there is spacing before and after the colon in a colon assignment (i.e., classes, objects). [default level: ignore]
 */
export interface Base4 {
  spacing?: {
    left?: 0 | 1;
    right?: 0 | 1;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Examine the complexity of your application. [default level: ignore]
 */
export interface Base5 {
  value?: number;
  [k: string]: unknown | undefined;
}
/**
 * This rule ensures your project uses only windows or unix line endings. [default level: ignore]
 */
export interface Base11 {
  value?: 'unix' | 'windows';
  [k: string]: unknown | undefined;
}
/**
 * This rule imposes a maximum line length on your code. [default level: error]
 */
export interface Base12 {
  value?: number;
  limitComments?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits implicit braces when declaring object literals. Implicit braces can make code more difficult to understand, especially when used in combination with optional parenthesis. [default level: ignore]
 */
export interface Base19 {
  strict?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * This rule forbids trailing whitespace in your code, since it is needless cruft. [default level: error]
 */
export interface Base30 {
  allowed_in_comments?: boolean;
  allowed_in_empty_lines?: boolean;
  [k: string]: unknown | undefined;
}
