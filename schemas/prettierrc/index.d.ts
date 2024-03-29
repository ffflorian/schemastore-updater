/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type SchemaForPrettierrc = (OptionsDefinition & OverridesDefinition) | string;

export interface OptionsDefinition {
  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens?: "always" | "avoid";
  /**
   * Put > of opening tags on the last line instead of on a new line.
   */
  bracketSameLine?: boolean;
  /**
   * Print spaces between brackets.
   */
  bracketSpacing?: boolean;
  /**
   * Print (to stderr) where a cursor at the given position would move to after formatting.
   * This option cannot be used with --range-start and --range-end.
   */
  cursorOffset?: number;
  /**
   * Whether parse the .editorconfig file in your project and convert its properties to the corresponding Prettier configuration. This configuration will be overridden by .prettierrc, etc.
   */
  editorconfig?: boolean;
  /**
   * Control how Prettier formats quoted code embedded in the file.
   */
  embeddedLanguageFormatting?: "auto" | "off";
  /**
   * Which end of line characters to apply.
   */
  endOfLine?: "lf" | "crlf" | "cr" | "auto";
  /**
   * Specify the input filepath. This will be used to do parser inference.
   */
  filepath?: string;
  /**
   * How to handle whitespaces in HTML.
   */
  htmlWhitespaceSensitivity?: "css" | "strict" | "ignore";
  /**
   * Insert @format pragma into file's first docblock comment.
   */
  insertPragma?: boolean;
  /**
   * Use single quotes in JSX.
   */
  jsxSingleQuote?: boolean;
  /**
   * Which parser to use.
   */
  parser?:
    | "flow"
    | "babel"
    | "babel-flow"
    | "babel-ts"
    | "typescript"
    | "acorn"
    | "espree"
    | "meriyah"
    | "css"
    | "less"
    | "scss"
    | "json"
    | "json5"
    | "json-stringify"
    | "graphql"
    | "markdown"
    | "mdx"
    | "vue"
    | "yaml"
    | "glimmer"
    | "html"
    | "angular"
    | "lwc"
    | string;
  /**
   * Custom directory that contains prettier plugins in node_modules subdirectory.
   * Overrides default behavior when plugins are searched relatively to the location of Prettier.
   * Multiple values are accepted.
   */
  pluginSearchDirs?: string[] | false;
  /**
   * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
   */
  plugins?: string[];
  /**
   * The line length where Prettier will try wrap.
   */
  printWidth?: number;
  /**
   * How to wrap prose.
   */
  proseWrap?: "always" | "never" | "preserve";
  /**
   * Change when properties in objects are quoted.
   */
  quoteProps?: "as-needed" | "consistent" | "preserve";
  /**
   * Format code ending at a given character offset (exclusive).
   * The range will extend forwards to the end of the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeEnd?: number;
  /**
   * Format code starting at a given character offset.
   * The range will extend backwards to the start of the first line containing the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeStart?: number;
  /**
   * Require either '@prettier' or '@format' to be present in the file's first docblock comment
   * in order for it to be formatted.
   */
  requirePragma?: boolean;
  /**
   * Print semicolons.
   */
  semi?: boolean;
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   */
  singleAttributePerLine?: boolean;
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote?: boolean;
  /**
   * Number of spaces per indentation level.
   */
  tabWidth?: number;
  /**
   * Print trailing commas wherever possible when multi-line.
   */
  trailingComma?: "es5" | "none" | "all";
  /**
   * Indent with tabs instead of spaces.
   */
  useTabs?: boolean;
  /**
   * Indent script and style tags in Vue files.
   */
  vueIndentScriptAndStyle?: boolean;
  [k: string]: unknown;
}
export interface OverridesDefinition {
  /**
   * Provide a list of patterns to override prettier configuration.
   */
  overrides?: {
    /**
     * Include these files in this override.
     */
    files: string | string[];
    /**
     * Exclude these files from this override.
     */
    excludeFiles?: string | string[];
    options?: OptionsDefinition1;
  }[];
  [k: string]: unknown;
}
/**
 * The options to apply for this override.
 */
export interface OptionsDefinition1 {
  /**
   * Include parentheses around a sole arrow function parameter.
   */
  arrowParens?: "always" | "avoid";
  /**
   * Put > of opening tags on the last line instead of on a new line.
   */
  bracketSameLine?: boolean;
  /**
   * Print spaces between brackets.
   */
  bracketSpacing?: boolean;
  /**
   * Print (to stderr) where a cursor at the given position would move to after formatting.
   * This option cannot be used with --range-start and --range-end.
   */
  cursorOffset?: number;
  /**
   * Whether parse the .editorconfig file in your project and convert its properties to the corresponding Prettier configuration. This configuration will be overridden by .prettierrc, etc.
   */
  editorconfig?: boolean;
  /**
   * Control how Prettier formats quoted code embedded in the file.
   */
  embeddedLanguageFormatting?: "auto" | "off";
  /**
   * Which end of line characters to apply.
   */
  endOfLine?: "lf" | "crlf" | "cr" | "auto";
  /**
   * Specify the input filepath. This will be used to do parser inference.
   */
  filepath?: string;
  /**
   * How to handle whitespaces in HTML.
   */
  htmlWhitespaceSensitivity?: "css" | "strict" | "ignore";
  /**
   * Insert @format pragma into file's first docblock comment.
   */
  insertPragma?: boolean;
  /**
   * Use single quotes in JSX.
   */
  jsxSingleQuote?: boolean;
  /**
   * Which parser to use.
   */
  parser?:
    | "flow"
    | "babel"
    | "babel-flow"
    | "babel-ts"
    | "typescript"
    | "acorn"
    | "espree"
    | "meriyah"
    | "css"
    | "less"
    | "scss"
    | "json"
    | "json5"
    | "json-stringify"
    | "graphql"
    | "markdown"
    | "mdx"
    | "vue"
    | "yaml"
    | "glimmer"
    | "html"
    | "angular"
    | "lwc"
    | string;
  /**
   * Custom directory that contains prettier plugins in node_modules subdirectory.
   * Overrides default behavior when plugins are searched relatively to the location of Prettier.
   * Multiple values are accepted.
   */
  pluginSearchDirs?: string[] | false;
  /**
   * Add a plugin. Multiple plugins can be passed as separate `--plugin`s.
   */
  plugins?: string[];
  /**
   * The line length where Prettier will try wrap.
   */
  printWidth?: number;
  /**
   * How to wrap prose.
   */
  proseWrap?: "always" | "never" | "preserve";
  /**
   * Change when properties in objects are quoted.
   */
  quoteProps?: "as-needed" | "consistent" | "preserve";
  /**
   * Format code ending at a given character offset (exclusive).
   * The range will extend forwards to the end of the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeEnd?: number;
  /**
   * Format code starting at a given character offset.
   * The range will extend backwards to the start of the first line containing the selected statement.
   * This option cannot be used with --cursor-offset.
   */
  rangeStart?: number;
  /**
   * Require either '@prettier' or '@format' to be present in the file's first docblock comment
   * in order for it to be formatted.
   */
  requirePragma?: boolean;
  /**
   * Print semicolons.
   */
  semi?: boolean;
  /**
   * Enforce single attribute per line in HTML, Vue and JSX.
   */
  singleAttributePerLine?: boolean;
  /**
   * Use single quotes instead of double quotes.
   */
  singleQuote?: boolean;
  /**
   * Number of spaces per indentation level.
   */
  tabWidth?: number;
  /**
   * Print trailing commas wherever possible when multi-line.
   */
  trailingComma?: "es5" | "none" | "all";
  /**
   * Indent with tabs instead of spaces.
   */
  useTabs?: boolean;
  /**
   * Indent script and style tags in Vue files.
   */
  vueIndentScriptAndStyle?: boolean;
  [k: string]: unknown;
}
