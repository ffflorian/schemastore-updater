/* eslint-disable */

export type Bundle = {
  /**
   * Set to true to include the output file in the project. Doesn't work in some Visual Studio project types like ASP.NET Core applications.
   */
  includeInProject?: boolean;
  /**
   * One or more relative file names or globbing patterns to bundle. Example: "scripts/** /*.js"
   */
  inputFiles: string[];
  /**
   * Specify options for minification of the output file.
   */
  minify?: {
    enabled: boolean;
    /**
     * Produce a .gz file after minification.
     */
    gzip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The relative path to the desired output file name.
   */
  outputFileName: string;
  [k: string]: unknown | undefined;
} & Bundle1;
export type Bundle1 = JsBundle | CssBundle | HtmlBundle;
/**
 * Schema for bundleconfig.json files
 */
export type HttpsJsonSchemastoreOrgBundleconfigJson = Bundle[];

export interface JsBundle {
  outputFileName?: string;
  /**
   * JavaScript only. Set to true to produce a source map.
   */
  sourceMap?: boolean;
  /**
   * JavaScript only. Sets a root path for source maps.
   */
  sourceMapRootPath?: string;
  minify?: AjaxminBaseSettings & {
    /**
     * JavaScript only. Gets or sets a flag indicating whether to always escape non-ASCII characters as \uXXXX or to let the output encoding object handle that via the JsEncoderFallback object for the specified output encoding format.
     */
    alwaysEscapeNonAscii?: boolean;
    /**
     * JavaScript only.
     */
    evalTreatment?: 'ignore' | 'makeAllSafe' | 'makeImmediateSafe';
    /**
     * JavaScript only.
     */
    preserveImportantComments?: boolean;
    /**
     * JavaScript only. Controls if local variables should be shortened.
     */
    renameLocals?: boolean;
    /**
     * Forces all rules to be terminated with semicolons if set to true.
     */
    termSemicolons?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AjaxminBaseSettings {
  /**
   * For the multi-line output feature, how many spaces to use when indenting a block (see outputMode).
   */
  indentSize?: number;
  /**
   * SingleLine minifies everything to a single line. MultipleLines breaks the minified code into multiple lines for easier reading.
   */
  outputMode?: 'multipleLines' | 'singleLine' | 'none';
  [k: string]: unknown | undefined;
}
export interface CssBundle {
  outputFileName?: string;
  minify?: AjaxminBaseSettings & {
    /**
     * CSS only. If no color names are to be used, set this value to 'hex'. If a set of colors recognized by all major browser is okay to use (W3C-strict validation is not required), set this value to 'major'.
     */
    colorNames?: 'hex' | 'major' | 'noSwap' | 'strict';
    /**
     * CSS only. How to treat comments in the code. The default is 'none', which will strip all comments except 'important' comments. 'all' will leave all comments, and 'hacks' will only leave certain known comment-based hacks.
     */
    commentMode?: 'none' | 'all' | 'hacks' | 'important';
    /**
     * CSS only. Adjust relative paths inside the url() function.
     */
    adjustRelativePaths?: boolean;
    /**
     * Forces all rules to be terminated with semicolons if set to true.
     */
    termSemicolons?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface HtmlBundle {
  outputFileName?: string;
  minify?: {
    /**
     * HTML only. Remove values from boolean attributes.
     */
    collapseBooleanAttributes?: boolean;
    /**
     * HTML only. Indicating whether to collapse whitespaces.
     */
    collapseWhitespace?: boolean;
    /**
     * HTML only. Indicating whether the parsing is occurring on an HTML fragment, to avoid creating missing tags (like html, body, head).
     */
    isFragmentOnly?: boolean;
    /**
     * HTML only. Indicating whether to keep one space when collapsing.
     */
    keepOneSpaceWhenCollapsing?: boolean;
    /**
     * HTML only. Minify CSS code in style tags.
     */
    minifyEmbeddedCssCode?: boolean;
    /**
     * HTML only. Minify JS code in script tags.
     */
    minifyEmbeddedJsCode?: boolean;
    /**
     * HTML only. Minify CSS code in style attributes.
     */
    minifyInlineCssCode?: boolean;
    /**
     * HTML only. Preserve case of tag and attribute names.
     */
    preserveCase?: boolean;
    /**
     * HTML only. Remove all HTML comments except conditional, noindex, Knockout.js containerless comments and Angular.js comment directives.
     */
    removeHtmlComments?: boolean;
    /**
     * HTML only. Remove optional end tags.
     */
    removeOptionalEndTags?: boolean;
    /**
     * HTML only. Indicating whether to remove quoted attributes when possible.
     */
    removeQuotedAttributes?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
