/* eslint-disable */

/**
 * Closed set of values copied into preview-data site before WXR-derived defaults are applied. Configure meta, newsletter, and comments with their top-level base properties.
 */
export type Site = {
  title?: string;
  description?: string;
  /**
   * Empty string or an HTTP(S) origin without credentials, path, query, or fragment. A trailing root slash is accepted; canonical producers emit URL.origin.
   */
  url?: '' | string;
  /**
   * Optional explicit HTTP(S) media origin. An empty or omitted value keeps automatic inference enabled; inferred values are written to preview-data and report.inferred.media_origin, while the resolved base retains the empty auto sentinel.
   */
  media_origin?: '' | string;
  /**
   * Media delivery behavior copied to Preview Data. media_domain requires an explicit non-empty media_origin.
   */
  media_delivery_mode?: 'none' | 'media_domain';
  favicon?: SiteFavicon;
  logo?: SiteLogo;
  /**
   * Whether generated HTML pages should include the ZeroPress generator meta tag. Missing or true exposes the generator; false omits it.
   */
  expose_generator?: boolean;
  /**
   * Canonical BCP 47 locale. JSON Schema provides structural guidance; runtime validation is authoritative.
   */
  locale?: string;
  posts_per_page?: number;
  /**
   * Date style preset based on Intl.DateTimeFormat dateStyle. Use none to omit the date portion.
   */
  date_style?: 'none' | 'short' | 'medium' | 'long' | 'full';
  /**
   * Time style preset based on Intl.DateTimeFormat timeStyle. Use none to omit the time portion.
   */
  time_style?: 'none' | 'short' | 'medium' | 'long' | 'full';
  /**
   * Optional authoritative IANA time zone or canonical ±HH:MM offset. When omitted, the importer infers one fixed offset from trustworthy published Post/Page date pairs, falls back to UTC when inference is unavailable or ambiguous, and materializes the effective value in the resolved base.
   */
  timezone?: string;
  search?: SiteFeatureState;
  feed?: SiteFeatureState;
  archive?: SiteFeatureState;
  robots?: SiteRobots;
  permalinks?: Permalinks;
  front_page?: FrontPage;
  post_index?: PostIndex;
  footer?: SiteFooter;
};
/**
 * Optional site favicon links for HTML head output.
 */
export type SiteFavicon = {
  [k: string]: unknown | undefined;
} & {
  /**
   * ICO or generic favicon URL/path.
   */
  icon?: string;
  /**
   * Dark color-scheme ICO or generic favicon URL/path.
   */
  icon_dark?: string;
  /**
   * SVG favicon URL/path.
   */
  svg?: string;
  /**
   * PNG favicon URL/path.
   */
  png?: string;
  /**
   * Apple touch icon URL/path.
   */
  apple_touch_icon?: string;
};
/**
 * Optional root front page selection policy expressed as a closed discriminated union. Missing means theme_index.
 */
export type FrontPage = {
  /**
   * Front page source type.
   */
  type: 'theme_index' | 'page' | 'standalone_html';
  /**
   * Effective relative Page route path used when type is page.
   */
  page_path?: string;
  /**
   * Trusted full HTML used when type is standalone_html.
   */
  html?: string;
} & (
  | {
      type: 'theme_index';
      [k: string]: unknown | undefined;
    }
  | {
      type: 'page';
      [k: string]: unknown | undefined;
    }
  | {
      type: 'standalone_html';
      [k: string]: unknown | undefined;
    }
);
/**
 * Optional newsletter CTA/island data for theme rendering. ZeroPress does not implement provider submit behavior.
 */
export type SiteNewsletter = {
  /**
   * Whether themes should show the newsletter CTA or island.
   */
  enabled: boolean;
  /**
   * Optional theme-facing newsletter title. Themes own fallback copy.
   */
  title?: string;
  /**
   * Optional theme-facing newsletter description. Themes own fallback copy.
   */
  description?: string;
  /**
   * Optional theme-facing CTA label. Themes own fallback copy.
   */
  button_label?: string;
  /**
   * Optional external signup URL or same-host root-relative signup path.
   */
  signup_url?: string;
  /**
   * Optional iframe embed URL or same-host root-relative embed path.
   */
  embed_url?: string;
};
/**
 * A reference to a page or post included in a named collection.
 */
export type CollectionItem = {
  /**
   * Referenced content type.
   */
  type: 'post' | 'page';
  /**
   * Post slug used only when type is post.
   */
  slug?: string;
  /**
   * Effective Page route path used only when type is page.
   */
  path?: string;
} & (
  | {
      type: 'post';
      [k: string]: unknown | undefined;
    }
  | {
      type: 'page';
      [k: string]: unknown | undefined;
    }
);
/**
 * Trusted raw HTML strings copied to preview-data custom_html.
 */
export type CustomHtml = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Trusted raw HTML inserted before the closing head tag. The string must be non-blank and may contain up to 65,536 Unicode code points.
   */
  head_end?: string;
  /**
   * Trusted raw HTML inserted before the closing body tag. The string must be non-blank and may contain up to 65,536 Unicode code points.
   */
  body_end?: string;
};

/**
 * Base preset for @zeropress/wxr-import. WXR-generated content and menus are not accepted in this file.
 */
export interface ZeroPressWXRImportBaseV07 {
  /**
   * Optional JSON Schema URI or path used by editors and tooling.
   */
  $schema?: string;
  /**
   * WXR Import Base contract version.
   */
  version: '0.7';
  site?: Site;
  meta?: PreviewMeta;
  comments?: Comments;
  newsletter?: SiteNewsletter;
  widgets?: Widgets;
  collections?: Collections;
  custom_css?: CustomCss;
  custom_html?: CustomHtml;
  import?: Import;
}
/**
 * Optional site logo data for theme rendering.
 */
export interface SiteLogo {
  /**
   * Logo URL for theme rendering. Use a safe single-slash root-relative media path or a credential-free HTTP(S) URL with a path. Bare and dot-relative paths are not supported.
   */
  src: string;
  /**
   * Optional logo alternative text. Themes may fall back to site.title when omitted.
   */
  alt?: string;
}
/**
 * Closed requested-state object used by optional site search, feed, and archive controls.
 */
export interface SiteFeatureState {
  /**
   * Whether the site requests this feature. This field is required whenever the containing feature object exists.
   */
  enabled: boolean;
}
/**
 * Closed site robots policy used by Build Core and exposed to themes.
 */
export interface SiteRobots {
  /**
   * Whether generated fallback robots.txt permits indexing.
   */
  allow_indexing: boolean;
}
/**
 * Optional site permalink policy. Missing fields resolve to directory output, /posts/:slug/, /:slug/, /categories/:slug/, and /tags/:slug/ without mutating Preview Data.
 */
export interface Permalinks {
  /**
   * Controls whether generated public URLs and output files use directory index paths or .html extension paths. Allowed values: directory, html-extension.
   */
  output_style?: 'directory' | 'html-extension';
  posts?: string;
  pages?: string;
  categories?: string;
  tags?: string;
}
/**
 * Optional post index generation policy. Missing fields use Build Core defaults: enabled true, path /, and paginate true.
 */
export interface PostIndex {
  /**
   * Whether the site requests a post index route.
   */
  enabled?: boolean;
  /**
   * Absolute public path for the post index route. Use / for the site root.
   */
  path?: string;
  /**
   * Whether the post index should generate page 2+ routes.
   */
  paginate?: boolean;
}
/**
 * Optional site footer display data for themes.
 */
export interface SiteFooter {
  /**
   * Theme-facing footer copyright or legal text. ZeroPress does not add a copyright symbol automatically.
   */
  copyright_text?: string;
  /**
   * When false, themes that support ZeroPress attribution should hide it. Missing or true means attribution may be shown.
   */
  attribution?: boolean;
}
/**
 * Values copied unchanged to preview-data site.meta. Keys are not interpreted or reserved by the importer.
 */
export interface PreviewMeta {
  [k: string]: string | number | boolean | null | undefined;
}
/**
 * WordPress comment API configuration copied to preview-data site.comments. api_base_url is required when this block is present; omit the complete block to infer it from the WXR source URL. enabled defaults to true and all omitted optional fields are materialized in the resolved base.
 */
export interface Comments {
  enabled?: boolean;
  /**
   * WordPress REST API base URL, normally ending in /wp-json/wp/v2. It may be an absolute HTTP(S) URL or a root-relative path and must not contain credentials, a query, or a fragment.
   */
  api_base_url: string;
  /**
   * The WXR bridge uses the WordPress comment provider.
   */
  provider?: 'wordpress';
  per_page?: number;
  order?: 'asc' | 'desc';
  threading?: {
    enabled?: boolean;
    max_depth?: number;
  };
}
/**
 * Widget areas copied to preview-data. When omitted, the importer materializes its recommended sidebar defaults in preview-data and the resolved base. An explicit empty object disables that fallback, and any provided object is preserved without augmentation.
 */
export interface Widgets {
  [k: string]: WidgetArea | undefined;
}
/**
 * A named enabled widget area exported to themes under its widget_area_id key.
 */
export interface WidgetArea {
  /**
   * Human-readable widget area name for development and diagnostics.
   */
  name: string;
  /**
   * Resolved widget item list after omission of disabled or missing-reference items.
   */
  items: WidgetItem[];
}
/**
 * Theme-facing widget item shell. Widget-type-specific settings are intentionally left open.
 */
export interface WidgetItem {
  /**
   * Stable widget item type identifier.
   */
  type: string;
  /**
   * Required display title string. An empty or whitespace-only value means the widget has no display title after normalization.
   */
  title: string;
  /**
   * Widget-type-specific settings payload. This object is intentionally schema-light.
   */
  settings?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * Values copied to preview-data collections.
 */
export interface Collections {
  [k: string]: Collection | undefined;
}
/**
 * A named curated content list exported to themes under its collection id.
 */
export interface Collection {
  /**
   * Optional display title for the collection.
   */
  title?: string;
  /**
   * Optional helper text for the collection.
   */
  description?: string;
  items: CollectionItem[];
}
/**
 * Canonical preview-data custom_css value.
 */
export interface CustomCss {
  /**
   * Raw CSS source to be consumed by build tooling.
   */
  content: string;
}
export interface Import {
  /**
   * Original WordPress media URL prefix. When the pair is omitted, the importer may infer and seed an identity pair from safe WordPress attachment URLs.
   */
  media_from?: string;
  /**
   * Replacement media URL prefix. A normalized value equal to media_from is allowed and disables runtime rewriting.
   */
  media_to?: string;
}
