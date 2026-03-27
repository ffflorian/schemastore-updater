/* eslint-disable */

/**
 * For themes that have multiple authors
 *
 * @minItems 2
 */
export type ThemeAuthors = [AuthorData, AuthorData, ...AuthorData[]];
export type AuthorWebsite = string;
export type AuthorName = string;
/**
 * This info is used by Hugo theme store: https://themes.gohugo.io
 */
export type ThemeDescription = string;
export type ThemeFeatures = string[];
/**
 * This info is used by Hugo theme store: https://themes.gohugo.io
 */
export type WebsiteOfTheTheme = string;
/**
 * Reference: https://choosealicense.com
 */
export type ThemeLicense = string;
export type LinkToThemeSLicense = string;
/**
 * Since the version **0.54.0**, Hugo started using full semver. Therefore, it is required to be `X.Y.Z` format. For instance: `0.54` is incorrect, `0.54.0` is correct.
 */
export type MinimumHugoVersion = string;
/**
 * This info is used by Hugo theme store: https://themes.gohugo.io
 */
export type ThemeName = string;
export type NameOfOriginalAuthor = string;
export type HisHerWebsite = string;
/**
 * This info is used by Hugo theme store: https://themes.gohugo.io
 */
export type ThemeTags = string[];

/**
 * This file contains metadata about the theme and its creator or creators. Hugo only recognizes theme.toml file, any other files are not accepted. Learn more at https://github.com/gohugoio/hugoThemes#themetoml
 */
export interface HugoThemeConfigFileSchema {
  /**
   * Hugo will not recognize the theme config file if it is JSON or YAML format. Please use theme.toml file.
   */
  $schema?: null;
  authors?: ThemeAuthors;
  author?: ThemeAuthor;
  description?: ThemeDescription;
  features?: ThemeFeatures;
  homepage?: WebsiteOfTheTheme;
  license?: ThemeLicense;
  licenselink?: LinkToThemeSLicense;
  min_version: MinimumHugoVersion;
  name: ThemeName;
  original?: OriginalTheme;
  tags?: ThemeTags;
}
export interface AuthorData {
  homepage?: AuthorWebsite;
  name: AuthorName;
}
/**
 * For themes that have single author
 */
export interface ThemeAuthor {
  homepage?: AuthorWebsite;
  name: AuthorName;
}
/**
 * For themes that port an existing theme
 */
export interface OriginalTheme {
  author: NameOfOriginalAuthor;
  homepage?: HisHerWebsite;
  repo: AuthorWebsite;
}
