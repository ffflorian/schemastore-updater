/* eslint-disable */

/**
 * Configuration files for the Stylua formatter
 */
export interface StyluaConfig {
  /**
   * Specify a disambiguation for the style of Lua syntax being formatted.
   */
  syntax?: 'All' | 'Lua51' | 'Lua52' | 'Lua53' | 'Lua54' | 'LuaJIT' | 'Luau' | 'CfxLua';
  /**
   * Approximate line length for printing.
   * Used as a guide for line wrapping - this is not a hard requirement: lines may fall under or over the limit.
   */
  column_width?: number;
  /**
   * Line endings type.
   */
  line_endings?: 'Unix' | 'Windows';
  /**
   * Indent type.
   */
  indent_type?: 'Tabs' | 'Spaces';
  /**
   * Character size of single indentation.
   * If indent_type is set to Tabs, this option is used as a heuristic to determine column width only.
   */
  indent_width?: number;
  /**
   * Quote style for string literals.
   */
  quote_style?: 'AutoPreferDouble' | 'AutoPreferSingle' | 'ForceDouble' | 'ForceSingle';
  /**
   * Whether parentheses should be applied on function calls with a single string/table argument.
   */
  call_parentheses?: 'Always' | 'NoSingleString' | 'NoSingleTable' | 'None' | 'Input';
  /**
   * Specify whether to add a space between the function name and parentheses.
   */
  space_after_function_names?: 'Never' | 'Definitions' | 'Calls' | 'Always';
  /**
   * Specify whether to collapse simple statements.
   */
  collapse_simple_statement?: 'Never' | 'FunctionOnly' | 'ConditionalOnly' | 'Always';
  /**
   * StyLua has built-in support for sorting require statements. We group consecutive require statements into a single "block", and then requires are sorted only within that block. Blocks of requires do not move around the file.
   *
   * StyLua only considers requires of the form local NAME = require(EXPR), and sorts lexicographically based on NAME. (StyLua can also sort Roblox services of the form local NAME = game:GetService(EXPR))
   *
   * Requires sorting is off by default.
   */
  sort_requires?: {
    enabled?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
