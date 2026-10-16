/* eslint-disable */

/**
 * Credential-free absolute HTTP(S) URL. Runtime validation rejects whitespace, control characters, backslashes, and malformed percent encoding.
 */
export type HttpUrl = string;
/**
 * Theme-package-relative regular-file path. Runtime validation also rejects empty, dot, traversal, encoded separator, and encoded dot segments and verifies that the file exists.
 */
export type ThemeAssetPath = string;
/**
 * Credential-free absolute HTTP(S) URL or a non-empty mailto URL.
 */
export type SupportUrl = HttpUrl;

/**
 * Metadata manifest for a ZeroPress theme package.
 */
export interface ZeroPressThemeManifestRuntimeV07 {
  /**
   * Optional JSON Schema URI or path used by editors and tooling. ZeroPress core does not interpret this value.
   */
  $schema?: string;
  /**
   * Non-blank human-readable theme name shown in admin UIs and listings. Runtime validation trims the value.
   */
  name: string;
  /**
   * Publisher or organization slug that owns the theme.
   */
  namespace: string;
  /**
   * Unique theme identifier used in package and registry contexts.
   */
  slug: string;
  /**
   * Theme version in SemVer 2.0.0 format.
   */
  version: string;
  /**
   * License identifier for the theme. Use an SPDX id from the allowlist or a LicenseRef-* identifier for commercial, marketplace, proprietary, or otherwise non-SPDX terms.
   */
  license: (
    | ('MIT' | 'Apache-2.0' | 'BSD-3-Clause' | 'GPL-3.0-only' | 'GPL-3.0-or-later')
    | {
        [k: string]: unknown | undefined;
      }
  ) &
    string;
  /**
   * Target ZeroPress theme runtime version.
   */
  runtime: '0.7';
  /**
   * Optional non-blank display name for the theme author or maintainer. Runtime validation trims the value.
   */
  author?: string;
  /**
   * Optional non-blank short summary used in theme listings. Runtime validation trims the value.
   */
  description?: string;
  /**
   * Optional credential-free HTTP(S) URL or safe theme-package-relative regular-file path used for previews.
   */
  thumbnail?: HttpUrl | ThemeAssetPath;
  /**
   * Optional public links for theme information, support, marketplace listings, and license terms.
   */
  links?: {
    homepage?: HttpUrl;
    repository?: HttpUrl;
    documentation?: HttpUrl;
    support?: SupportUrl;
    marketplace?: HttpUrl;
    license?: HttpUrl;
  };
  /**
   * Optional theme capability flags exposed to the runtime and tooling.
   */
  features?: {
    /**
     * Whether the theme supports the comments island capability. Omission behaves like false.
     */
    comments?: boolean;
    /**
     * Whether the theme supports post index routes. Omission behaves like true; explicit false disables the route even when preview data requests it.
     */
    post_index?: boolean;
    /**
     * Whether the theme supports static search UI backed by ZeroPress search artifacts. Omission behaves like false.
     */
    search?: boolean;
  };
  /**
   * Optional map of menu slots declared by the theme.
   */
  menu_slots?: {
    [k: string]: MenuSlotDefinition | undefined;
  };
  /**
   * Optional map of widget areas declared by the theme.
   */
  widget_areas?: {
    [k: string]: WidgetAreaDefinition | undefined;
  };
  /**
   * Optional map of site.meta keys understood by the theme.
   */
  site_meta?: {
    [k: string]: SiteMetaDefinition | undefined;
  };
  /**
   * Optional map of collection slots declared by the theme.
   */
  collection_slots?: {
    [k: string]: CollectionSlotDefinition | undefined;
  };
}
/**
 * Admin-facing helper metadata for a recommended menu id. It documents an expected id but does not assign a menu.
 */
export interface MenuSlotDefinition {
  /**
   * Non-blank human-readable label shown in helper UIs.
   */
  title: string;
  /**
   * Optional non-blank help text explaining where the menu is typically rendered.
   */
  description?: string;
  /**
   * Maximum rendered menu depth, counting top-level items as 1. Omit for no depth limit. Deeper descendants are excluded from rendering with a build warning.
   */
  max_depth?: number;
}
/**
 * Admin-facing helper metadata for a recommended widget area id. It documents an expected id but does not assign widgets.
 */
export interface WidgetAreaDefinition {
  /**
   * Non-blank human-readable label shown in helper UIs.
   */
  title: string;
  /**
   * Optional non-blank help text explaining where the widget area is typically rendered.
   */
  description?: string;
}
/**
 * Admin-facing helper metadata for a site.meta key understood by the theme. It is a hint; core does not assign the value.
 */
export interface SiteMetaDefinition {
  /**
   * Non-blank human-readable label shown in helper UIs.
   */
  title: string;
  /**
   * Optional non-blank help text explaining how the theme uses this key.
   */
  description?: string;
  /**
   * Optional recommended scalar type for authoring tools.
   */
  type?: 'string' | 'number' | 'boolean';
}
/**
 * Admin-facing helper metadata for a recommended named collection id. It documents an expected id but does not assign collection items.
 */
export interface CollectionSlotDefinition {
  /**
   * Non-blank human-readable label shown in helper UIs.
   */
  title: string;
  /**
   * Optional non-blank help text explaining how the collection is rendered.
   */
  description?: string;
}
