/* eslint-disable */

export interface NueJSConfigurationFile {
  $schema?: string;
  /**
   * The output directory for the generated build files.
   */
  dist?: string;
  /**
   * An array of global directories, automatically included on all pages.
   */
  globals?: string[];
  /**
   * Whether to enable hot reloading.
   */
  hotreload?: boolean;
  /**
   * An array of directories treated as libraries.
   */
  libs?: string[];
  /**
   * A list of reference links for use in Markdown content. Links should be supplied in the `name: url "title"` format.
   */
  links?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Whether to use Lightning CSS for processing of CSS.
   */
  lightning_css?: boolean;
  /**
   * Whether to use native CSS nesting.
   */
  native_css_nesting?: boolean;
  /**
   * The port number for the development server. Defaults to 8080.
   */
  port?: number;
  /**
   * Whether to enable syntax highlighting for code blocks within your Markdown content.
   */
  syntax_highlight?: boolean;
  /**
   * Whether to enable view transitions for instant and smooth page switches.
   */
  view_transitions?: boolean;
  /**
   * Whether to inline all CSS directly into the HTML page.
   */
  inline_css?: boolean;
  /**
   * The value of the HTML <base> element.
   */
  base?: string;
  /**
   * The value of the charset meta tag.
   */
  charset?: string;
  /**
   * The value of the `<html direction="{ direction }">` attribute, which defines the text direction of the document. The default is "ltr" (left to right)..
   */
  direction?: string;
  /**
   * The relative path to your favicon.
   */
  favicon?: string;
  /**
   * The generator meta tag that identifies the software used to create the site. The default is "Nue (nuejs.org)" and is only rendered in production mode.
   */
  generator?: string;
  /**
   * When set to true, all header levels (h2 and h3) will be generated with an id and an anchor (<a>) element.
   */
  heading_ids?: boolean;
  /**
   * The value of the `<html lang="{ language }">` attribute. The default is "en".
   */
  language?: string;
  /**
   * Your full domain name, including the protocol.
   */
  origin?: string;
  /**
   * An array of assets to prefetch before they are used. These can include images, scripts, or CSS files.
   */
  prefetch?: string[];
  /**
   * The value for the robots meta property. Use "noindex" to exclude the entire website from search engine indexing.
   */
  robots?: string;
  /**
   * The value for the theme color meta property.
   */
  theme_color?: string;
  /**
   * The viewport value. The default is: "width=device-width, initial-scale=1".
   */
  viewport?: string;
  /**
   * A list of assets to be included from a library directory for all pages in the area. For example, a value like `include: [highlight, motion]` would include all files matching the strings `highlight` or `motion` in their filenames.
   */
  include?: string[];
  /**
   * An array of CSS class names for the page sections, or `true` to render sections but not add any class names.
   */
  sections?: boolean | string[];
  /**
   * The name of the application directory to which the page belongs.
   */
  appdir?: string;
  /**
   * The name of the directory for a content collection.
   */
  content_collection?: string;
  /**
   * The name of the content collection variable. By default, this is the same as the directory name.
   */
  collection_name?: string;
  /**
   * A list of assets to be excluded from a library directory.
   */
  exclude?: string[];
  /**
   * The URL of the Open Graph image to represent the page on social media platforms.
   */
  og_image?: string;
  /**
   * A shorthand alias for og_image, allowing for easier reference in the page settings.
   */
  og?: string;
  /**
   * A brief description of the page to be used in Open Graph meta tags. This description appears in social media previews, providing context about the content when shared.
   */
  og_description?: string;
  /**
   * A setting that prevents the page from being included in content collections.
   */
  unlisted?: boolean;
  [k: string]: unknown | undefined;
}
