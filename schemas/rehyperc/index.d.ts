/* eslint-disable */

export interface JSONSchemaForRehyperc {
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
     * Specify whether to parse a fragment, instead of a complete document. In document mode, unopened html, head, and body elements are opened in just the right places.
     */
    fragment?: boolean;
    /**
     * Which space the document is in.
     *
     * If an svg element is found in the HTML space, parse automatically switches to the SVG space when entering the element, and switches back when exiting.
     *
     * Note: make sure to set fragment: true if space: 'svg'.
     */
    space?: 'svg' | 'html';
    /**
     * Emit parse errors while parsing on the vfile.
     *
     * Setting this to true starts emitting HTML parse errors.
     *
     * Specific rules can be turned off by setting them to false (or 0). The default, when emitParseErrors: true, is true (or 1), and means that rules emit as warnings. Rules can also be configured with 2, to turn them into fatal errors.
     */
    emitParseErrors?: boolean;
    /**
     * Patch extra positional information. If specified, the following element:
     */
    verbose?: boolean;
    /**
     * Configuration for stringify-entities. Do not use escapeOnly, attribute, or subset (toHtml already passes those, so they won't work). However, useNamedReferences, useShortestReferences, and omitOptionalSemicolons are all fine.
     */
    entities?: {
      /**
       * Prefer named character references (&amp;) where possible.
       */
      useNamedReferences?: boolean;
      /**
       * Prefer the shortest possible reference, if that results in less bytes.
       */
      useShortestReferences?: boolean;
      /**
       * Whether to omit semicolons when possible.
       */
      omitOptionalSemicolons?: boolean;
    };
    /**
     * Tag names of elements to serialize without closing tag.
     *
     * Not used in the SVG space.
     */
    voids?: string[];
    /**
     * Use a <!DOCTYPE… instead of <!doctype…. Useless except for XHTML.
     */
    upperDoctype?: boolean;
    /**
     * Preferred quote to use.
     */
    quote?: '"' | "'";
    /**
     * Use the other quote if that results in less bytes.
     */
    quoteSmart?: boolean;
    /**
     * Leave attributes unquoted if that results in less bytes.
     *
     * Not used in the SVG space.
     */
    preferUnquoted?: boolean;
    /**
     * Omit optional opening and closing tags. For example, in <ol><li>one</li><li>two</li></ol>, both </li> closing tags can be omitted. The first because it's followed by another li, the last because it's followed by nothing.
     *
     * Not used in the SVG space.
     */
    omitOptionalTags?: boolean;
    /**
     * Collapse empty attributes: get class instead of class="". Note: boolean attributes, such as hidden, are always collapsed.
     *
     * Not used in the SVG space.
     */
    collapseEmptyAttributes?: boolean;
    /**
     * Close self-closing nodes with an extra slash (/): <img /> instead of <img>. See tightSelfClosing to control whether a space is used before the slash.
     *
     * Not used in the SVG space.
     */
    closeSelfClosing?: boolean;
    /**
     * Close SVG elements without any content with slash (/) on the opening tag instead of an end tag: <circle /> instead of <circle></circle>. See tightSelfClosing to control whether a space is used before the slash.
     *
     * Not used in the HTML space.
     */
    closeEmptyElements?: boolean;
    /**
     * Join known comma-separated attribute values with just a comma (,), instead of padding them on the right as well (,·, where · represents a space).
     */
    tightCommaSeparatedLists?: boolean;
    /**
     * Join attributes together, without whitespace, if possible: get class="a b"title="c d" instead of class="a b" title="c d" to save bytes. Note: creates invalid (but working) markup.
     *
     * Not used in the SVG space.
     */
    tightAttributes?: boolean;
    /**
     * Drop unneeded spaces in doctypes: <!doctypehtml> instead of <!doctype html> to save bytes. Note: creates invalid (but working) markup.
     */
    tightDoctype?: boolean;
    /**
     * Use "bogus comments" instead of comments to save byes: <?charlie> instead of <!--charlie-->. Note: creates invalid (but working) markup.
     */
    bogusComments?: boolean;
    /**
     * Do not encode characters which cause parse errors (even though they work), to save bytes. Note: creates invalid (but working) markup.
     *
     * Not used in the SVG space.
     */
    allowParseErrors?: boolean;
    /**
     * Allow raw nodes and insert them as raw HTML. When falsey, encodes raw nodes. Note: Only set this if you completely trust the content.
     */
    allowDangerousHtml?: boolean;
  };
}
