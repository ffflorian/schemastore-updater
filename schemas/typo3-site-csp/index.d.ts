/* eslint-disable */

/**
 * Content-Security-Policy of a site in config/sites/<identifier>/csp.yaml.
 */
export type TYPO3SiteContentSecurityPolicy = {
  imports?: TYPO3YAMLImports;
  /**
   * Enables the policy.
   */
  active?: boolean;
  /**
   * Starts from the policy of core and extensions.
   */
  inheritDefault?: boolean;
  /**
   * Changes to the policy.
   */
  mutations?:
    | Mutation[]
    | {
        [k: string]: Mutation | undefined;
      };
  /**
   * Sends the Content-Security-Policy header.
   */
  enforce?: boolean | Disposition;
  /**
   * Sends the Content-Security-Policy-Report-Only header.
   */
  report?: boolean | Disposition;
  /**
   * How inline scripts and styles are allowed.
   */
  behavior?: {
    /**
     * Allows inline scripts and styles with a nonce value.
     */
    useNonce?: boolean;
    /**
     * Allows inline scripts and styles with a hash value.
     */
    useHash?: boolean;
  };
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

export interface Mutation {
  /**
   * How the sources are applied to the directive.
   */
  mode: 'set' | 'append' | 'inherit-once' | 'inherit-again' | 'extend' | 'reduce' | 'remove';
  /**
   * Directive to change.
   */
  directive:
    | 'default-src'
    | 'base-uri'
    | 'child-src'
    | 'connect-src'
    | 'font-src'
    | 'form-action'
    | 'frame-ancestors'
    | 'frame-src'
    | 'img-src'
    | 'manifest-src'
    | 'media-src'
    | 'object-src'
    | 'plugin-types'
    | 'report-to'
    | 'report-uri'
    | 'require-trusted-types-for'
    | 'sandbox'
    | 'script-src'
    | 'script-src-attr'
    | 'script-src-elem'
    | 'style-src'
    | 'style-src-attr'
    | 'style-src-elem'
    | 'trusted-types'
    | 'upgrade-insecure-requests'
    | 'worker-src';
  /**
   * Sources like "'self'" or "data:".
   */
  sources?: (
    | (
        | "'none'"
        | "'self'"
        | "'unsafe-inline'"
        | "'unsafe-eval'"
        | "'unsafe-hashes'"
        | "'wasm-unsafe-eval'"
        | "'report-sample'"
        | "'strict-dynamic'"
        | "'nonce-proxy'"
      )
    | string
  )[];
}
export interface Disposition {
  /**
   * Starts from the policy of core and extensions.
   */
  inheritDefault?: boolean;
  /**
   * Applies resolutions of reported violations.
   */
  includeResolutions?: boolean;
  /**
   * Where violations are reported.
   */
  reportingUrl?: string | boolean | null;
  /**
   * Changes to the policy.
   */
  mutations?:
    | Mutation[]
    | {
        [k: string]: Mutation | undefined;
      };
  /**
   * Packages whose policies are used, for example "typo3/cms-core: true".
   */
  packages?: {
    [k: string]: boolean | undefined;
  };
}
