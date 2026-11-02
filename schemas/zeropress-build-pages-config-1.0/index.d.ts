/* eslint-disable */

/**
 * Credential-free absolute HTTP(S) URL. Query strings and fragments are allowed; unsafe characters, malformed percent encoding, and dot path segments are rejected by runtime validation.
 */
export type AbsoluteWebUrl = string;
/**
 * Source file or theme template used for the site root.
 */
export type FrontPage = {
  /**
   * Front page source mode. theme_index uses theme/index.html. markdown and html read a source file.
   */
  type: 'theme_index' | 'markdown' | 'html';
  /**
   * Optional source-root relative file path. Defaults to index.md for markdown and .zeropress/index.html for html.
   */
  file?: string;
  /**
   * Only applies to html front pages. true renders the file as page body content through the ZeroPress layout; false treats it as a full standalone HTML document.
   */
  layout?: boolean;
};
/**
 * Exact source-root relative path. Leading or trailing whitespace, backslashes, empty or dot path segments, query strings, hash fragments, and parent-directory traversal are not allowed.
 */
export type SourceFilePath = string;
/**
 * Credential-free absolute HTTP(S) URL or safe single-slash root-relative Web path. Query and fragment are allowed.
 */
export type MenuUrl = string;

/**
 * Optional source-directory configuration for @zeropress/build-pages workflows.
 */
export interface ZeroPressBuildPagesConfigV10 {
  /**
   * Optional JSON Schema URI or path used by editors and tooling.
   */
  $schema?: string;
  /**
   * ZeroPress Build Pages config format version.
   */
  version: '1.0';
  site?: Site;
  markdown?: Markdown;
  front_page?: FrontPage;
  custom_html?: CustomHtml;
  menus?: Menus;
  collections?: Collections;
}
/**
 * User-facing site metadata used by Build Pages.
 */
export interface Site {
  title?: string;
  description?: string;
  /**
   * Canonical HTTP(S) site URL at the origin root. Paths, queries, fragments, and subdirectory hosting are not supported. Use an empty string or omit this field when the deployment URL is not known.
   */
  url?: (
    | ''
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  logo?: SiteLogo;
  /**
   * Site locale used for generated preview-data language metadata, such as html lang and feed language.
   */
  locale?: string;
  /**
   * Whether generated HTML should expose the ZeroPress generator meta tag. Set false for white-label sites.
   */
  expose_generator?: boolean;
  /**
   * Whether native ZeroPress search should be enabled when the selected theme supports search UI. Set false to omit native search artifacts and hide theme search UI.
   */
  search?: boolean;
  robots?: SiteRobots;
  footer?: SiteFooter;
  meta?: PreviewMeta;
}
/**
 * Optional site logo data copied into generated preview-data.
 */
export interface SiteLogo {
  /**
   * Logo URL copied into preview-data. Use a safe single-slash root-relative media path or a credential-free HTTP(S) URL with a path. Bare and dot-relative paths are not supported.
   */
  src: AbsoluteWebUrl | string;
  /**
   * Optional logo alternative text. Themes may fall back to site.title when omitted.
   */
  alt?: string;
}
export interface SiteRobots {
  /**
   * Fallback robots.txt indexing policy. Missing site.robots means true; false disallows all agents unless the source directory provides robots.txt.
   */
  allow_indexing: boolean;
}
/**
 * Optional footer display data copied into generated preview-data.
 */
export interface SiteFooter {
  /**
   * Footer copyright or legal text. ZeroPress does not add a copyright symbol automatically.
   */
  copyright_text?: string;
  /**
   * When false, bundled themes hide the Published with ZeroPress attribution. Missing or true means attribution may be shown.
   */
  attribution?: boolean;
}
export interface PreviewMeta {
  [k: string]: string | number | boolean | null | undefined;
}
/**
 * Markdown source processing options.
 */
export interface Markdown {
  /**
   * Optional page update timestamp enrichment. none does not generate updated_at_iso values; git reads the latest commit date for each Markdown file.
   */
  updated_at?: 'none' | 'git';
  /**
   * Controls how source-relative Markdown links are rewritten. clean uses generated clean URLs; html uses explicit HTML file URLs.
   */
  link_output?: 'clean' | 'html';
}
/**
 * Trusted HTML source files materialized as raw preview-data custom_html strings. Each file must be nonblank and no longer than 65,536 Unicode code points.
 */
export interface CustomHtml {
  head_end?: CustomHtmlSlot;
  body_end?: CustomHtmlSlot;
}
/**
 * HTML file injected before </head> by ZeroPress build.
 */
export interface CustomHtmlSlot {
  /**
   * Prebuild-only HTML file inside .zeropress/. Its raw content is preserved after nonblank and 65,536-code-point validation.
   */
  file: SourceFilePath;
}
/**
 * Menu definitions copied into generated preview-data. Omitting menus materializes the built-in primary menu containing Home; an explicit empty object materializes no menus.
 */
export interface Menus {
  [k: string]: Menu | undefined;
}
/**
 * A menu definition. When name is omitted, the menu id is materialized as its name in resolved config and Preview Data.
 */
export interface Menu {
  /**
   * Display name. Omission materializes the containing menu id.
   */
  name?: string;
  items: MenuItem[];
}
/**
 * Menu item copied into generated preview-data.
 */
export interface MenuItem {
  title: string;
  url: MenuUrl;
  target?: '_self' | '_blank';
  meta?: PreviewMeta;
  children?: MenuItem[];
}
/**
 * Reading-order collections generated from Markdown source paths. Omission and an explicit empty object both materialize no collections.
 */
export interface Collections {
  [k: string]: Collection | undefined;
}
/**
 * A reading-order collection. When title is omitted, the collection id is materialized as its title in resolved config and Preview Data.
 */
export interface Collection {
  /**
   * Display title. Omission materializes the containing collection id.
   */
  title?: string;
  description?: string;
  items: SourceFilePath[];
}
