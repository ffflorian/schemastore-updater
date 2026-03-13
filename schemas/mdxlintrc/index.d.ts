/* eslint-disable */

export interface JSONSchemaForMdxlintrc {
  /**
   * The plugins field, related to plugins in options, has either an array of plugin names (or paths) or plugin–options tuples, or an object mapping plugins to their options.
   * Plugin options can be false, which specifies that a plugin should not be used. In all other cases, they are treated as an object, and merged by the cascade. Thus, it's possible to specify part of the options from one configuration file, and overwrite or extend it from another file.
   */
  plugins?:
    | (string | [] | [string, ...unknown[]])[]
    | {
        [k: string]: unknown | undefined;
      };
  settings?: {
    /**
     * Marker to use to for bullets of items in unordered lists.
     */
    bullet?: '*' | '+' | '-';
    /**
     * Whether to add the same number of number signs (#) at the end of an ATX heading as the opening sequence.
     */
    closeAtx?: boolean;
    /**
     * Marker to use to serialize emphasis.
     */
    emphasis?: '*' | '_';
    /**
     * Marker to use to serialize fenced code.
     */
    fence?: '`' | '~';
    /**
     * Whether to use fenced code always. The default is to fenced code if there is a language defined, if the code is empty, or if it starts or ends in empty lines
     */
    fences?: boolean;
    /**
     * Whether to increment the value of bullets of items in ordered lists.
     */
    incrementListMarker?: boolean;
    /**
     * Whether to indent the content of list items with the size of the bullet plus one space (when 'one') or a tab stop ('tab'), or depending on the item and its parent list ('mixed', uses 'one' if the item and list are tight and 'tab' otherwise)
     */
    listItemIndent?: 'one' | 'tab' | 'mixed';
    /**
     * Try and wrap syntax at this width. When set to a finite number (say, 80), the formatter will print attributes on separate lines when a tag doesn’t fit on one line. The normal behavior is to print attributes with spaces between them instead of line endings.
     */
    printWidth?: number;
    /**
     * Marker to use to serialize titles and attribute values.
     */
    quote?: '"' | "'";
    /**
     * Use the other quote if that results in less bytes.
     */
    quoteSmart?: boolean;
    /**
     * Whether to use resource links ([text](url)) always. The default is to use autolinks (<https://example.com>) when possible.
     */
    resourceLink?: boolean;
    /**
     * Marker to use for thematic breaks.
     */
    rule?: '*' | '-' | '_';
    /**
     * Number of markers to use for thematic breaks.
     */
    ruleRepetition?: number;
    /**
     * Whether to add spaces between markers in thematic breaks.
     */
    ruleSpaces?: boolean;
    /**
     * Whether to use setext headings when possible. Setext headings are not possible for headings with a rank more than 2 or when they're empty.
     */
    setext?: boolean;
    /**
     * Marker to use to serialize strong.
     */
    strong?: '*' | '_';
    /**
     * Whether to join definitions w/o a blank line.
     */
    tightDefinitions?: boolean;
    /**
     * do not use an extra space when closing self-closing elements: <img/> instead of <img />
     */
    tightSelfClosing?: boolean;
  };
}
