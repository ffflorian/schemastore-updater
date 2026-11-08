/* eslint-disable */

/**
 * Other YAML files to include.
 */
export type TYPO3YAMLImports = {
  /**
   * Absolute, relative or "EXT:" path of the file.
   */
  resource: string;
  /**
   * Treats resource as a pattern like "*.yaml".
   */
  glob?: boolean;
}[];
/**
 * Placeholder like %env(MY_VARIABLE)%.
 */
export type Placeholder = string;
export type ErrorHandler = {
  /**
   * HTTP status code, 0 for all others.
   */
  errorCode: number | string;
  /**
   * How the error is handled.
   */
  errorHandler: 'Page' | 'Fluid' | 'PHP' | 'LoginRedirect';
  [k: string]: unknown | undefined;
};
export type StaticRoute = {
  /**
   * Path of the route, for example "robots.txt".
   */
  route: string;
  /**
   * Type of the route.
   */
  type: 'staticText' | 'uri' | 'asset';
  [k: string]: unknown | undefined;
};
/**
 * Route enhancers, keyed by identifier.
 */
export type TYPO3RouteEnhancers = {
  [k: string]: Enhancer | undefined;
} | null;
export type Enhancer = {
  /**
   * Type of the enhancer.
   */
  type: ('Simple' | 'Plugin' | 'Extbase' | 'PageType') | string;
  /**
   * Pages the enhancer is used on, like 13 or 'page["doktype"] == 1'.
   */
  limitToPages?: (number | string)[];
  /**
   * Aspects, keyed by argument name.
   */
  aspects?: {
    [k: string]: Aspect | undefined;
  };
  [k: string]: unknown | undefined;
};
export type Aspect = {
  /**
   * Type of the aspect.
   */
  type:
    | ('LocaleModifier' | 'PersistedAliasMapper' | 'PersistedPatternMapper' | 'StaticRangeMapper' | 'StaticValueMapper')
    | string;
  [k: string]: unknown | undefined;
};

export interface TYPO3SiteConfiguration {
  imports?: TYPO3YAMLImports;
  /**
   * ID of the root page.
   */
  rootPageId?: number | string | Placeholder;
  /**
   * Entry point, for example "https://example.com/" or "/".
   */
  base?: string;
  /**
   * Other entry points, for example per environment.
   */
  baseVariants?:
    | BaseVariant[]
    | {
        [k: string]: BaseVariant | undefined;
      };
  /**
   * Title of the website.
   */
  websiteTitle?: string;
  /**
   * Site sets used by the site.
   */
  dependencies?:
    | string[]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Languages of the site.
   */
  languages?:
    | Language[]
    | {
        [k: string]: Language | undefined;
      };
  /**
   * Error handlers by HTTP status code.
   */
  errorHandling?:
    | ErrorHandler[]
    | {
        [k: string]: ErrorHandler | undefined;
      };
  /**
   * Static routes like robots.txt.
   */
  routes?:
    | StaticRoute[]
    | {
        [k: string]: unknown | undefined;
      };
  routeEnhancers?: TYPO3RouteEnhancers;
  /**
   * Site settings, usually in settings.yaml.
   */
  settings?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface BaseVariant {
  /**
   * Entry point used if the condition matches.
   */
  base: string;
  /**
   * Expression, for example 'applicationContext == "Development"'.
   */
  condition: string;
  [k: string]: unknown | undefined;
}
export interface Language {
  /**
   * ID of the language, 0 for the default language.
   */
  languageId: number | string | Placeholder;
  /**
   * Name of the language in the backend.
   */
  title?: string;
  /**
   * Name of the language in the frontend.
   */
  navigationTitle?: string;
  /**
   * Title of the website in this language.
   */
  websiteTitle?: string;
  /**
   * Entry point of the language, for example "/de/".
   */
  base?: string;
  /**
   * Other entry points of the language.
   */
  baseVariants?:
    | BaseVariant[]
    | {
        [k: string]: BaseVariant | undefined;
      };
  /**
   * Locale, for example "de_DE.UTF-8" or "de-DE".
   */
  locale: string;
  /**
   * Value of the hreflang attribute.
   */
  hreflang?: string;
  /**
   * Makes the language available in the frontend.
   */
  enabled?: boolean | (0 | 1) | Placeholder;
  /**
   * Flag icon in the backend, for example "de" or "global".
   */
  flag?: string;
  /**
   * Behaviour for missing translations.
   */
  fallbackType?: ('strict' | 'fallback' | 'free') | Placeholder;
  /**
   * IDs of fallback languages.
   */
  fallbacks?: string | number | (number | string)[];
  /**
   * Deprecated since TYPO3 v12.3.
   */
  typo3Language?: string;
  [k: string]: unknown | undefined;
}
