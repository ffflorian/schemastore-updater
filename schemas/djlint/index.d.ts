/* eslint-disable */

/**
 * Configuration for djLint, an HTML template linter and formatter. https://djlint.com/docs/configuration/
 */
export interface DjLintConfiguration {
  /**
   * The url of the schema this file is checked against.
   */
  $schema?: string;
  /**
   * Exit with 0 instead of 2 when the given paths match no files at all. Files that were found and then skipped by exclude, extend_exclude, use_gitignore or require_pragma already exit with 0. Disabled by default.
   */
  allow_empty_input?: boolean;
  /**
   * Add an additional blank line after `{% <tag> ... %}` tag groups. Blank lines will never be added to end of block.
   */
  blank_line_after_tag?: string;
  /**
   * Add an additional blank line before `{% <tag> ... %}` tag groups. Blank lines will never be added to start of file or block, or between similar tags.
   */
  blank_line_before_tag?: string;
  /**
   * Add a closing mark to known void tags, so that `<img>` becomes `<img />`.
   */
  close_void_tags?: boolean;
  css?: CssBeautify;
  /**
   * Use to indent custom code blocks. For example `{% toc %}...{% endtoc %}`.
   */
  custom_blocks?: string;
  /**
   * Use to indent custom HTML tags. For example `<mjml>` or `<simple-greeting>` or `<mj-\\w+>`
   */
  custom_html?: string;
  /**
   * Override the default exclude paths.
   */
  exclude?: string;
  /**
   * Add additional paths to the default exclude.
   */
  extend_exclude?: string;
  /**
   * Use to only find files with a specific extension.
   */
  extension?: string;
  /**
   * A list of paths to use as djlint's source. When this option is specified, the command line source must be `-` as if using stdin.
   */
  files?: string[];
  /**
   * Format JavaScript and JSON code inside HTML attributes. This will format object literals and JavaScript code in attributes like `onclick`, `x-*`, and other JavaScript-related attributes. Objects with fewer properties than `format_attribute_js_json_min_props` will not be formatted.
   */
  format_attribute_js_json?: boolean;
  /**
   * Minimum number of properties required in a JavaScript/JSON object for it to be formatted. Default is 2. Objects with fewer properties will remain on a single line.
   */
  format_attribute_js_json_min_props?: number;
  /**
   * Custom regex pattern to match JavaScript attributes for formatting. Default pattern matches common JavaScript attributes like `onclick`, `x-*`, Vue.js directives, Alpine.js directives, Angular directives, and more.
   */
  format_attribute_js_json_pattern?: string;
  /**
   * Formatter will attempt to format template syntax inside of tag attributes. Disabled by default.
   */
  format_attribute_template_tags?: boolean;
  /**
   * Format contents of `style` tags using `css-beautify`. See [css-beautify](https://github.com/beautify-web/js-beautify/blob/main/python/cssbeautifier/css/options.py) for all configuration options. Template syntax is not [fully supported](https://github.com/beautify-web/js-beautify/issues).
   */
  format_css?: boolean;
  /**
   * Format contents of `script` tags using `js-beautify`. See [js-beautify](https://github.com/beautify-web/js-beautify/blob/main/python/jsbeautifier/javascript/options.py) for all configuration options. Template syntax is not [fully supported](https://github.com/beautify-web/js-beautify/issues).
   */
  format_js?: boolean;
  /**
   * Ignore linter codes.
   */
  ignore?: string;
  /**
   * Used to skip indentation on children of template tags. Children will be treated as siblings and indented accordingly.
   */
  ignore_blocks?: string;
  /**
   * Do not attempt to fix the case of known html tags.
   */
  ignore_case?: boolean;
  /**
   * Include linter codes.
   */
  include?: string;
  /**
   * Use to change the code indentation. Default is 4 (four spaces).
   */
  indent?: number;
  js?: JsBeautify;
  /**
   * Keep `<br>` on the line of the text it breaks, rather than giving it a line of its own. `<hr>`, which renders as a rule below the preceding content, is unaffected.
   */
  keep_br_inline?: boolean;
  /**
   * Do not condense the content of multi-line tags into the line of the last attribute.
   */
  line_break_after_multiline_tag?: boolean;
  /**
   * Customize order of output message. Default="{code} {line} {message} {match}". If `{filename}` is not included in message, then the output will be grouped by file and a header will automatically be added to each group.
   *
   * Optional variables:
   * ::: content
   *
   * - `{filename}`
   * - `{line}`
   * - `{code}`
   * - `{message}`
   * - `{match}`
   *   :::
   */
  linter_output_format?: string;
  /**
   * Formatter will attempt to wrap tag attributes if the attribute length exceeds this value.
   */
  max_attribute_length?: number;
  /**
   * Consolidate blank lines down to x lines. Default is 0 meaning blank lines will be removed.
   */
  max_blank_lines?: number;
  /**
   * Formatter will attempt to put some html and template tags on a single line instead of wrapping them if the line length will not exceed this value.
   */
  max_line_length?: number;
  /**
   * Write the block's name into the `{% endblock %}` that closes it, where the block is written across lines. This is what `T003` asks for.
   */
  name_endblocks?: boolean;
  /**
   * Do not rewrite an entity reference as the character it names, so `&copy;` is left as written rather than becoming `©`. The entities that carry syntax, and the invisible ones, are never rewritten either way.
   */
  no_entity_formatting?: boolean;
  /**
   * Do not attempt to format the arguments of function calls inside `{{ }}` expressions.
   */
  no_function_formatting?: boolean;
  /**
   * Do not indent `<head>` and `<body>` below `<html>`, which is how the default VS Code html formatter lays a document out.
   */
  no_indent_inner_html?: boolean;
  /**
   * Do not add a blank line after yaml front matter.
   */
  no_line_after_yaml?: boolean;
  /**
   * Do not attempt to format the contents of `{% set %}` tags.
   */
  no_set_formatting?: boolean;
  /**
   * Ignore linter rules on a per-file basis.
   */
  'per-file-ignores'?: {
    [k: string]: string | undefined;
  };
  /**
   * Preserve blank lines where possible. Ideal for non-html template files where blank lines are intentional.
   */
  preserve_blank_lines?: boolean;
  /**
   * Preserve line breaks inside multiline class attributes.
   */
  preserve_class_newlines?: boolean;
  /**
   * Preserve leading space on text, where possible. Ideal for non-html template files where text indent is intentional.
   */
  preserve_leading_space?: boolean;
  /**
   * Set a profile for the template language. The profile will enable linter rules that apply to your template language, and may also change reformatting. For example, in `handlebars` there are no spaces inside `{{#if}}` tags.
   *
   * Options:
   *
   * :::content
   *
   * - html (default)
   * - django
   * - jinja
   * - nunjucks (for nunjucks and twig)
   * - handlebars (for handlebars and mustache)
   * - liquid (shopify, jekyll, eleventy)
   * - golang (go templates; hugo, helm)
   * - angular
   * - tera (also for zola; use jinja for minijinja)
   * - askama (jinja-style templates in rust; rust expressions are never reformatted)
   *   :::
   */
  profile?:
    | 'all'
    | 'angular'
    | 'askama'
    | 'django'
    | 'golang'
    | 'handlebars'
    | 'html'
    | 'jinja'
    | 'liquid'
    | 'nunjucks'
    | 'tera';
  /**
   * Do not print diff when reformatting.
   */
  quiet?: boolean;
  /**
   * Quotes to use for strings inside template tags, either `double` (the default) or `single`. `T002` requires the same quotes. The formatter uses them in a condition too, such as `{% if x == "a" %}`, so one file does not spell the same string both ways. HTML attribute quoting is left to `H008`.
   */
  quote_style?: 'double' | 'single';
  /**
   * Only format or lint files that starts with a comment with only the text 'djlint:on'. The comment can be a HTML comment or a comment in the template language defined by the profile setting. If no profile is specified, a comment in any of the template languages is accepted.
   *
   * ```html
   * <!-- djlint:on -->
   * {# djlint:on #}
   * {% comment %} djlint:on {% endcomment %}
   * {{ /* djlint:on * / }}
   * {{!-- djlint:on --}}
   * ```
   *
   */
  require_pragma?: boolean;
  /**
   * When an opening tag wraps, put the tag name, each attribute, and the closing bracket on separate lines. Disabled by default.
   */
  single_attribute_per_line?: boolean;
  /**
   * Sort attributes by name, with `id` first and `class` second. A tag whose attributes are guarded by a template tag keeps the order it was written in, since moving one out of its branch would change the page.
   */
  sort_attributes?: boolean;
  /**
   * Add .gitignore excludes to the default exclude. Disabled by default.
   */
  use_gitignore?: boolean;
}
/**
 * Options passed to cssbeautifier when --format-css is on, such as indent_size.
 */
export interface CssBeautify {
  [k: string]: unknown | undefined;
}
/**
 * Options passed to jsbeautifier when --format-js is on, such as indent_size.
 */
export interface JsBeautify {
  [k: string]: unknown | undefined;
}
