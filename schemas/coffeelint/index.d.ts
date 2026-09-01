/* eslint-disable */

export interface JSONSchemaForCoffeelintJsonFiles {
  arrow_spacing?: Base;
  braces_spacing?: Base1;
  camel_case_classes?: Base2;
  coffeescript_error?: Base3;
  colon_assignment_spacing?: Base4;
  cyclomatic_complexity?: Base5;
  duplicate_key?: Base6;
  empty_constructor_needs_parens?: Base7;
  ensure_comprehensions?: Base8;
  eol_last?: Base9;
  indentation?: Base10;
  line_endings?: Base11;
  max_line_length?: Base12;
  missing_fat_arrows?: Base13;
  newlines_after_classes?: Base14;
  no_backticks?: Base15;
  no_debugger?: Base16;
  no_empty_functions?: Base17;
  no_empty_param_list?: Base18;
  no_implicit_braces?: Base19;
  no_implicit_parens?: Base20;
  no_interpolation_in_single_quotes?: Base21;
  no_nested_string_interpolation?: Base22;
  no_plusplus?: Base23;
  no_private_function_fat_arrows?: Base24;
  no_stand_alone_at?: Base25;
  no_tabs?: Base26;
  no_this?: Base27;
  no_throwing_strings?: Base28;
  no_trailing_semicolons?: Base29;
  no_trailing_whitespace?: Base30;
  no_unnecessary_double_quotes?: Base31;
  no_unnecessary_fat_arrows?: Base32;
  non_empty_constructor_needs_parens?: Base33;
  prefer_english_operator?: Base34;
  space_operators?: Base35;
  spacing_after_comma?: Base36;
  transform_messes_up_line_numbers?: Base37;
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
 * This rule mandates that all class names are CamelCased. Camel casing class names is a generally accepted way of distinguishing constructor functions - which require the `new` prefix to behave properly - from plain old functions. [default level: error]
 */
export interface Base2 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * [default level: error]
 */
export interface Base3 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
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
 * Prevents defining duplicate keys in object literals and classes. [default level: error]
 */
export interface Base6 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Requires constructors with no parameters to include the parens. [default level: ignore]
 */
export interface Base7 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule makes sure that parentheses are around comprehensions. [default level: warn]
 */
export interface Base8 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Checks that the file ends with a single newline. [default level: ignore]
 */
export interface Base9 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule imposes a standard number of spaces to be used for indentation. Since whitespace is significant in CoffeeScript, it's critical that a project chooses a standard indentation format and stays consistent. Other roads lead to darkness. [default level: error]
 */
export interface Base10 {
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
 * Warns when you use `this` inside a function that wasn't defined with a fat arrow. This rule does not apply to methods defined in a class, since they have `this` bound to the class instance (or the class itself, for class methods). [default level: ignore]
 */
export interface Base13 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Checks the number of newlines between classes and other code. [default level: ignore]
 */
export interface Base14 {
  value?: number;
  [k: string]: unknown | undefined;
}
/**
 * Backticks allow snippets of JavaScript to be embedded in CoffeeScript. While some folks consider backticks useful in a few niche circumstances, they should be avoided because so none of JavaScript's 'bad parts', like with and eval, sneak into CoffeeScript. [default level: error]
 */
export interface Base15 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule detects the `debugger` statement. [default level: warn]
 */
export interface Base16 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Disallows declaring empty functions. The goal of this rule is that unintentional empty callbacks can be detected. [default level: ignore]
 */
export interface Base17 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits empty parameter lists in function definitions. [default level: ignore]
 */
export interface Base18 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
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
 * This rule prohibits implicit parens on function calls. [default level: ignore]
 */
export interface Base20 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits string interpolation in a single quoted string. [default level: ignore]
 */
export interface Base21 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule warns about nested string interpolation, as it tends to make code harder to read and understand. [default level: warn]
 */
export interface Base22 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule forbids the increment and decrement arithmetic operators. Some people believe the `++` and `--` to be cryptic and the cause of bugs due to misunderstandings of their precedence rules. [default level: ignore]
 */
export interface Base23 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Warns when you use the fat arrow for a private function inside a class definition scope. It is not necessary and it does not do anything. [default level: warn]
 */
export interface Base24 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule checks that no stand alone `@` are in use, they are discouraged. [default level: ignore]
 */
export interface Base25 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule forbids tabs in indentation. Enough said. [default level: error]
 */
export interface Base26 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits `this`. Use `@` instead. [default level: ignore]
 */
export interface Base27 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule forbids throwing string literals or interpolations. While JavaScript (and CoffeeScript by extension) allow any expression to be thrown, it is best to only throw `Error` objects, because they contain valuable debugging information like the stack trace. [default level: error]
 */
export interface Base28 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits trailing semicolons, since they are needless cruft in CoffeeScript. [default level: error]
 */
export interface Base29 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
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
/**
 * This rule prohibits double quotes unless string interpolation is used or the string contains single quotes. [default level: ignore]
 */
export interface Base31 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Disallows defining functions with fat arrows when `this` is not used within the function.  [default level: warn]
 */
export interface Base32 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * Requires constructors with parameters to include the parens. [default level: ignore]
 */
export interface Base33 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule prohibits `&&`, `||`, `==`, `!=` and `!`. Use `and`, `or`, `is`, `isnt`, and `not` instead. `!!` (for converting to a boolean) is ignored. [default level: ignore]
 */
export interface Base34 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule enforces that operators have space around them.  [default level: ignore]
 */
export interface Base35 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule checks to make sure you have a space after commas. [default level: ignore]
 */
export interface Base36 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
/**
 * This rule detects when changes are made by transform function, and warns that line numbers are probably incorrect. [default level: warn]
 */
export interface Base37 {
  /**
   * Determines the error level
   */
  level?: 'error' | 'warn' | 'ignore';
  [k: string]: unknown | undefined;
}
