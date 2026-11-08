/* eslint-disable */

/**
 * Route enhancers in Configuration/Sets/<SetFolder>/route-enhancers.yaml, or in a file imported by a site.
 */
export type TYPO3SiteSetRouteEnhancers = {
  imports?: TYPO3YAMLImports;
  /**
   * Route enhancers, keyed by identifier.
   */
  routeEnhancers?: TYPO3RouteEnhancers;
} | null;
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
