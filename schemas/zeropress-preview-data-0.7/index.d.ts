/* eslint-disable */

/**
 * Canonical site data consumed by ZeroPress Build Core and ZeroPress theme preview tooling.
 */
export type ZeroPressPreviewDataV07 = {
  /**
   * Optional JSON Schema URI or path used by editors and tooling. ZeroPress core does not interpret this value.
   */
  $schema?: string;
  /**
   * Preview-data contract version.
   */
  version: '0.7';
  /**
   * Identifier of the generator that produced this payload.
   */
  generator: string;
  /**
   * RFC 3339 date-time. JSON Schema format and the structural pattern aid editors; runtime validation is authoritative for real calendar dates and offset ranges.
   */
  generated_at: string;
  site: Site;
  content: Content;
  menus?: Menus;
  widgets?: Widgets;
  collections?: Collections;
  custom_css?: CustomCss;
  custom_html?: CustomHtml;
};
export type Site = {
  title: string;
  description: string;
  /**
   * Required canonical site origin. Use an empty string when the public origin is unknown.
   */
  url: '' | string;
  /**
   * Required media origin used to resolve relative media URLs. Use an empty string to preserve relative values. Non-empty values must be an HTTP(S) origin with an optional port and without credentials, path, query, or fragment. A trailing root slash is accepted, while canonical payloads omit it.
   */
  media_origin: '' | string;
  /**
   * Optional media delivery capability. Missing means none. media_domain requires a non-empty site.media_origin and means media URLs under that origin support ZeroPress image variant query parameters.
   */
  media_delivery_mode?: 'none' | 'media_domain';
  favicon?: SiteFavicon;
  logo?: SiteLogo;
  newsletter?: SiteNewsletter;
  comments?: SiteComments;
  /**
   * Whether generated HTML pages should include the ZeroPress generator meta tag. Missing or true exposes the generator; false omits it.
   */
  expose_generator?: boolean;
  search?: SiteFeatureState;
  feed?: SiteFeatureState;
  archive?: SiteFeatureState;
  locale: Locale;
  posts_per_page: number;
  /**
   * Date style preset based on Intl.DateTimeFormat dateStyle. Use none to omit the date portion.
   */
  date_style: 'none' | 'short' | 'medium' | 'long' | 'full';
  /**
   * Time style preset based on Intl.DateTimeFormat timeStyle. Use none to omit the time portion.
   */
  time_style: 'none' | 'short' | 'medium' | 'long' | 'full';
  timezone: Timezone;
  robots?: SiteRobots;
  permalinks?: Permalinks;
  front_page?: FrontPage;
  post_index?: PostIndex;
  footer?: SiteFooter;
  meta?: PreviewMeta;
};
/**
 * Optional site favicon links for HTML head output.
 */
export type SiteFavicon = SiteFavicon1 & {
  /**
   * ICO or generic favicon URL/path.
   */
  icon?: AbsoluteWebUrl | string;
  /**
   * Dark color-scheme ICO or generic favicon URL/path.
   */
  icon_dark?: AbsoluteWebUrl | string;
  /**
   * SVG favicon URL/path.
   */
  svg?: AbsoluteWebUrl | string;
  /**
   * PNG favicon URL/path.
   */
  png?: AbsoluteWebUrl | string;
  /**
   * Apple touch icon URL/path.
   */
  apple_touch_icon?: AbsoluteWebUrl | string;
};
export type SiteFavicon1 = {
  [k: string]: unknown | undefined;
};
/**
 * Credential-free absolute HTTP(S) URL. Query strings and fragments are allowed; unsafe characters, malformed percent encoding, and dot path segments are rejected by runtime validation.
 */
export type AbsoluteWebUrl = string;
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
  signup_url?: AbsoluteWebUrl;
  /**
   * Optional iframe embed URL or same-host root-relative embed path.
   */
  embed_url?: AbsoluteWebUrl;
};
/**
 * Canonical BCP 47 locale. JSON Schema provides structural guidance; runtime validation is authoritative.
 */
export type Locale = string;
/**
 * UTC, a canonical IANA time-zone identifier, or a canonical fixed offset within ±14:00. Zero offset is represented as UTC. Runtime validation is authoritative.
 */
export type Timezone = string;
export type PostPermalinkPattern = PermalinkPattern;
/**
 * Absolute URL path pattern beginning with /. Tokens must occupy full path segments, such as :slug or :public_id. Query strings, fragments, percent-encoding, and literal .html suffixes are not allowed. Allowed tokens depend on the permalink field.
 */
export type PermalinkPattern = string;
export type SlugPermalinkPattern = PermalinkPattern;
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
} & FrontPage1;
export type FrontPage1 =
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
    };
/**
 * Absolute public path for the post index route. Use / for the site root.
 */
export type PostIndexPath = string;
/**
 * Credential-free absolute HTTP(S) URL or safe single-slash root-relative media URL with a non-root path. Bare and dot-relative paths are rejected.
 */
export type MediaUrl = AbsoluteWebUrl | string;
/**
 * RFC 3339 date-time. JSON Schema format and the structural pattern aid editors; runtime validation is authoritative for real calendar dates and offset ranges.
 */
export type DateTime = string;
export type StructuredDataValue1 = StructuredDataScalar | StructuredDataObject1 | StructuredDataArray1;
export type StructuredDataScalar = string | number | boolean | null;
export type StructuredDataValue2 = StructuredDataScalar | StructuredDataObject2 | StructuredDataArray2;
export type StructuredDataValue3 = StructuredDataScalar | StructuredDataObject3 | StructuredDataArray3;
export type StructuredDataValue4 = StructuredDataScalar | StructuredDataObject4 | StructuredDataArray4;
/**
 * @maxItems 256
 */
export type StructuredDataArray4 = StructuredDataScalar[];
/**
 * @maxItems 256
 */
export type StructuredDataArray3 = StructuredDataValue4[];
/**
 * @maxItems 256
 */
export type StructuredDataArray2 = StructuredDataValue3[];
/**
 * @maxItems 256
 */
export type StructuredDataArray1 = StructuredDataValue2[];
/**
 * A slug segment containing only Unicode letters, combining marks, decimal digits, isolated internal periods, hyphen, and underscore, with at least one letter or digit. Periods may not lead, trail, or appear consecutively. Decomposed input is accepted; canonical results and length are evaluated after NFC normalization.
 */
export type SlugSegment = string;
export type Page = {
  /**
   * Optional positive public identifier used by comment providers. Required when page.allow_comments is true.
   */
  public_id?: number;
  title: string;
  /**
   * A slug segment containing only Unicode letters, combining marks, decimal digits, isolated internal periods, hyphen, and underscore, with at least one letter or digit. Periods may not lead, trail, or appear consecutively. Decomposed input is accepted; canonical results and length are evaluated after NFC normalization.
   */
  slug: string;
  /**
   * Optional explicit effective Page route path. When omitted, consumers apply the effective pages permalink to the Page slug.
   */
  path?: string;
  content: string;
  document_type: 'plaintext' | 'markdown' | 'html';
  excerpt?: string;
  featured_image?: MediaUrl;
  /**
   * RFC 3339 date-time. JSON Schema format and the structural pattern aid editors; runtime validation is authoritative for real calendar dates and offset ranges.
   */
  updated_at_iso?: string;
  meta?: PreviewMeta;
  data?: StructuredData;
  status: 'published' | 'draft';
  /**
   * Optional document discoverability policy. default leaves generated discovery outputs unchanged; noindex adds HTML robots noindex; delist removes the document from automatic discovery outputs while still rendering its route.
   */
  discoverability?: 'default' | 'noindex' | 'delist';
  /**
   * Optional per-page comment policy. Missing means false.
   */
  allow_comments?: boolean;
  comments?: ContentComments;
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
   * A slug segment containing only Unicode letters, combining marks, decimal digits, isolated internal periods, hyphen, and underscore, with at least one letter or digit. Periods may not lead, trail, or appear consecutively. Decomposed input is accepted; canonical results and length are evaluated after NFC normalization.
   */
  slug?: string;
  /**
   * Effective Page route path used only when type is page.
   */
  path?: string;
} & CollectionItem1;
export type CollectionItem1 =
  | {
      type: 'post';
      [k: string]: unknown | undefined;
    }
  | {
      type: 'page';
      [k: string]: unknown | undefined;
    };
/**
 * Optional trusted site-level HTML injection slots.
 */
export type CustomHtml = CustomHtml1 & {
  /**
   * Trusted raw HTML inserted before the closing head tag. The string must be non-blank and may contain up to 65,536 Unicode code points.
   */
  head_end?: string;
  /**
   * Trusted raw HTML inserted before the closing body tag. The string must be non-blank and may contain up to 65,536 Unicode code points.
   */
  body_end?: string;
};
export type CustomHtml1 = {
  [k: string]: unknown | undefined;
};

/**
 * Optional site logo data for theme rendering.
 */
export interface SiteLogo {
  /**
   * Logo URL for theme rendering. Use a safe single-slash root-relative media path or a credential-free HTTP(S) URL with a path. Bare and dot-relative paths are not supported.
   */
  src: AbsoluteWebUrl | string;
  /**
   * Optional logo alternative text. Themes may fall back to site.title when omitted.
   */
  alt?: string;
}
/**
 * Optional comment-provider configuration and site-level requested state. When omitted, the comment runtime is unavailable.
 */
export interface SiteComments {
  /**
   * Whether the site requests comments when the configured provider and active theme make the runtime available.
   */
  enabled: boolean;
  /**
   * Comment service base URL or same-host root-relative path. Provider-specific consumers derive content endpoints from this value.
   */
  api_base_url: AbsoluteWebUrl | string;
  /**
   * Comment API provider. Missing means zeropress.
   */
  provider?: 'zeropress' | 'wordpress';
  /**
   * Preferred comment page size from 1 through 100. Missing means 50.
   */
  per_page?: number;
  /**
   * Preferred comment order. Missing means desc.
   */
  order?: 'asc' | 'desc';
  threading?: SiteCommentsThreading;
}
/**
 * Optional threaded-comment display policy.
 */
export interface SiteCommentsThreading {
  /**
   * Whether threaded comment display is enabled. Missing means true.
   */
  enabled?: boolean;
  /**
   * Maximum threaded comment display depth from 2 through 10. Missing means 2.
   */
  max_depth?: number;
}
/**
 * Site-level requested state for native static search. Missing means enabled; Build Core combines the request with theme capability.
 */
export interface SiteFeatureState {
  /**
   * Whether the site requests this feature. This field is required whenever the containing feature object exists.
   */
  enabled: boolean;
}
/**
 * Optional robots policy. Missing means allow_indexing true.
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
  posts?: PostPermalinkPattern;
  pages?: SlugPermalinkPattern;
  categories?: SlugPermalinkPattern;
  tags?: SlugPermalinkPattern;
}
/**
 * Optional post index generation policy. Missing fields use Build Core defaults: enabled true, path /, and paginate true.
 */
export interface PostIndex {
  /**
   * Whether the site requests a post index route.
   */
  enabled?: boolean;
  path?: PostIndexPath;
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
 * Generator-defined optional metadata for site/theme conventions. ZeroPress core does not interpret metadata keys.
 */
export interface PreviewMeta {
  [k: string]: string | number | boolean | null | undefined;
}
export interface Content {
  authors: Author[];
  posts: Post[];
  pages: Page[];
  categories: Category[];
  /**
   * Global tag definitions. Array order has no semantic meaning; producers should emit a stable ascending order by name and then slug.
   */
  tags: Tag[];
  media?: Media[];
}
export interface Author {
  id: string;
  display_name: string;
  avatar?: MediaUrl;
}
export interface Post {
  public_id: number;
  title: string;
  /**
   * Post route identity. Values must be unique after NFC normalization within content.posts.
   */
  slug: string;
  content: string;
  document_type: 'plaintext' | 'markdown' | 'html';
  excerpt: string;
  published_at_iso: DateTime;
  updated_at_iso: DateTime;
  author_id: string;
  featured_image?: MediaUrl;
  meta?: PreviewMeta;
  data?: StructuredData;
  status: 'published' | 'draft';
  /**
   * Optional document discoverability policy. default leaves generated discovery outputs unchanged; noindex adds HTML robots noindex; delist removes the document from automatic discovery outputs while still rendering its route.
   */
  discoverability?: 'default' | 'noindex' | 'delist';
  /**
   * Optional per-post comment policy. Missing means false.
   */
  allow_comments?: boolean;
  comments?: ContentComments;
  category_slugs: SlugSegment[];
  /**
   * Ordered tag slug references for this post, unique after NFC normalization. Array order is the theme-facing display order; the first entry is display-first and does not imply a primary or SEO tag.
   */
  tag_slugs: SlugSegment[];
}
/**
 * Page/post scoped structured data for theme-facing repeated UI blocks.
 */
export interface StructuredData {
  [k: string]: StructuredDataValue1 | undefined;
}
export interface StructuredDataObject1 {
  [k: string]: StructuredDataValue2 | undefined;
}
export interface StructuredDataObject2 {
  [k: string]: StructuredDataValue3 | undefined;
}
export interface StructuredDataObject3 {
  [k: string]: StructuredDataValue4 | undefined;
}
export interface StructuredDataObject4 {
  [k: string]: StructuredDataScalar | undefined;
}
/**
 * ZeroPress request metadata for this post. Required when ZeroPress comments are effective for the post; otherwise optional and ignored.
 */
export interface ContentComments {
  /**
   * Opaque non-blank request token, up to 512 Unicode code points, used by the ZeroPress provider to authorize comment API requests for this content item.
   */
  request_token: string;
}
export interface Category {
  name: string;
  slug: SlugSegment;
  description?: string;
}
export interface Tag {
  name: string;
  slug: SlugSegment;
  description?: string;
}
export interface Media {
  /**
   * Credential-free absolute HTTP(S) URL or safe single-slash root-relative media URL with a non-root path. Bare and dot-relative paths are rejected.
   */
  src: AbsoluteWebUrl | string;
  width: number;
  height: number;
  alt?: string;
}
/**
 * Enabled menus keyed by menu_id. Disabled menus and absent menu_ids are omitted.
 */
export interface Menus {
  [k: string]: Menu | undefined;
}
/**
 * A named enabled menu exported to themes under its menu_id key.
 */
export interface Menu {
  /**
   * Human-readable menu name for development and diagnostics.
   */
  name: string;
  /**
   * Resolved menu tree after omission of missing references.
   */
  items: MenuItem[];
}
/**
 * Theme-facing navigation item. Children may be nested to any depth.
 */
export interface MenuItem {
  /**
   * Display title shown by the theme.
   */
  title: string;
  /**
   * Resolved absolute http(s) URL or safe relative web path.
   */
  url: AbsoluteWebUrl;
  /**
   * Link target semantics for the theme.
   */
  target: '_self' | '_blank';
  meta?: PreviewMeta;
  /**
   * Nested child menu items.
   */
  children: MenuItem[];
}
/**
 * Enabled widget areas keyed by widget_area_id. Disabled widget areas are omitted.
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
 * Named curated content lists keyed by collection id.
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
 * Optional site-level custom stylesheet input.
 */
export interface CustomCss {
  /**
   * Raw CSS source to be consumed by build tooling.
   */
  content: string;
}
