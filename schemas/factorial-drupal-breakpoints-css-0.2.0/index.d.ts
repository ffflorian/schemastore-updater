/* eslint-disable */

/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface DrupalBreakpointsToCSSConfiguration {
  drupal: DrupalConfiguration;
  js?: JavaScriptConfiguration;
  css?: CSSConfiguration;
  options?: ToggleAvailableExtractionOptions;
  prettier?: PrettierOptions;
}
/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface DrupalConfiguration {
  breakpointsPath: string;
  themeName: string;
}
/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface JavaScriptConfiguration {
  enabled?: boolean;
  path?: string;
  type?: 'module' | 'commonjs';
}
/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface CSSConfiguration {
  enabled?: boolean;
  path?: string;
  element?: string;
  customMedia?: boolean;
  customProperty?: boolean;
}
/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface ToggleAvailableExtractionOptions {
  mediaQuery?: boolean;
  resolution?: boolean;
  minWidth?: boolean;
  maxWidth?: boolean;
}
/**
 * https://github.com/factorial-io/drupal-breakpoints-css
 */
export interface PrettierOptions {
  configPath?: string;
}
