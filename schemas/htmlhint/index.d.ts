/* eslint-disable */

export interface JSONSchemaForHTMLHintConfigurationFiles {
  /**
   * Alt of img must be present and alt of area[href] and input[type=image] must be set value.
   */
  'alt-require'?: boolean;
  /**
   * Attribute name must be lowercase.
   */
  'attr-lowercase'?: boolean | string[];
  /**
   * The same attribute can't be specified twice.
   */
  'attr-no-duplication'?: boolean;
  /**
   * Attributes should be sorted in an order.
   */
  'attr-sorted'?: boolean;
  /**
   * Attribute value cannot use unsafe chars.
   */
  'attr-unsafe-chars'?: boolean;
  /**
   * Attribute value must be closed by double quotes.
   */
  'attr-value-double-quotes'?: boolean;
  /**
   * Class attributes should not contain duplicate values. Other attributes can be checked via configuration.
   */
  'attr-value-no-duplication'?: boolean | string[];
  /**
   * Attribute must set value.
   */
  'attr-value-not-empty'?: boolean;
  /**
   * Attribute value must be closed by single quotes.
   */
  'attr-value-single-quotes'?: boolean;
  /**
   * No leading or trailing spaces inside attribute values.
   */
  'attr-whitespace'?: boolean;
  /**
   * The type attribute of a button element must be present with a valid value: button, submit, or reset.
   */
  'button-type-require'?: boolean;
  /**
   * Doctype must be first.
   */
  'doctype-first'?: boolean;
  /**
   * Doctype must be HTML5.
   */
  'doctype-html5'?: boolean;
  /**
   * A frame or iframe element must have an accessible name.
   */
  'frame-title-require'?: boolean;
  /**
   * The method attribute of a form element must be present.
   */
  'form-method-require'?: boolean;
  /**
   * A H1 heading element is required in HTML documents.
   */
  'h1-require'?: boolean;
  /**
   * The script tag cannot be used in head.
   */
  'head-script-disabled'?: false | true | 'allow-non-blocking';
  /**
   * Href must be absolute or relative.
   */
  'href-abs-or-rel'?: false | 'abs' | 'rel';
  /**
   * The lang attribute of an <html> element must be present and should be valid.
   */
  'html-lang-require'?: boolean;
  /**
   * Id and class cannot use ad keyword, it will be blocked by adblock software.
   */
  'id-class-ad-disabled'?: boolean;
  /**
   * Id and class value must meet some rules: underline, dash, hump.
   */
  'id-class-value'?: false | 'underline' | 'dash' | 'hump';
  /**
   * ID attributes must be unique in the document.
   */
  'id-unique'?: boolean;
  /**
   * Inline script cannot be used.
   */
  'inline-script-disabled'?: boolean;
  /**
   * Inline style cannot be used.
   */
  'inline-style-disabled'?: boolean;
  /**
   * A link element with rel="canonical" is required within the <head> tag.
   */
  'link-rel-canonical-require'?: boolean;
  /**
   * A main element is required within the <body> tag.
   */
  'main-require'?: boolean;
  /**
   * A meta charset is required within the <head> tag.
   */
  'meta-charset-require'?: boolean;
  /**
   * A meta description is required within the <head> tag.
   */
  'meta-description-require'?: boolean;
  /**
   * A meta viewport is required within the <head> tag.
   */
  'meta-viewport-require'?: boolean;
  /**
   * Spaces and tabs cannot be mixed in front of line.
   */
  'space-tab-mixed-disabled'?: false | 'space' | 'tab';
  /**
   * Special characters must be escaped.
   */
  'spec-char-escape'?: boolean;
  /**
   * Src of img(script,link) must set value. Empty of src will visit current page twice.
   */
  'src-not-empty'?: boolean;
  /**
   * Style tag cannot be used.
   */
  'style-disabled'?: boolean;
  /**
   * Disallows the use of obsolete HTML tags.
   */
  'tag-no-obsolete'?: boolean;
  /**
   * Tag must be paired.
   */
  'tag-pair'?: boolean;
  /**
   * The empty tag must be self-closed.
   */
  'tag-self-close'?: boolean;
  /**
   * Tagname must be lowercase.
   */
  'tagname-lowercase'?: boolean;
  /**
   * Tagname must not contain any characters beside letters, numbers, ”-”, ”:” or ”_”.
   */
  'tagname-specialchars'?: boolean;
  /**
   * Check if particular tags are self-closing or must include or exclude particular tags.
   */
  'tags-check'?: boolean;
  /**
   * title must be present in head tag.
   */
  'title-require'?: boolean;
  [k: string]: unknown | undefined;
}
