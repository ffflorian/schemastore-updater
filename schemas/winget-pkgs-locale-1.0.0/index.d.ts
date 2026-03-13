/* eslint-disable */

/**
 * Package moniker or tag
 */
export type Tag = string | null;

/**
 * A representation of a multiple-file manifest representing app metadata in other locale in the OWC. v1.0.0
 */
export interface HttpsAkaMsWingetManifestLocale100SchemaJson {
  /**
   * The package unique identifier
   */
  PackageIdentifier: string;
  /**
   * The package version
   */
  PackageVersion: string;
  /**
   * The package meta-data locale
   */
  PackageLocale: string;
  /**
   * The publisher name
   */
  Publisher?: string | null;
  /**
   * The publisher home page
   */
  PublisherUrl?: string | null;
  /**
   * The publisher support page
   */
  PublisherSupportUrl?: string | null;
  /**
   * The publisher privacy page or the package privacy page
   */
  PrivacyUrl?: string | null;
  /**
   * The package author
   */
  Author?: string | null;
  /**
   * The package name
   */
  PackageName?: string | null;
  /**
   * The package home page
   */
  PackageUrl?: string | null;
  /**
   * The package license
   */
  License?: string | null;
  /**
   * The license page
   */
  LicenseUrl?: string | null;
  /**
   * The package copyright
   */
  Copyright?: string | null;
  /**
   * The package copyright page
   */
  CopyrightUrl?: string | null;
  /**
   * The short package description
   */
  ShortDescription?: string | null;
  /**
   * The full package description
   */
  Description?: string | null;
  /**
   * The most common package term
   */
  Moniker?: string | null;
  /**
   * List of additional package search terms
   *
   * @maxItems 16
   */
  Tags?:
    | []
    | [Tag]
    | [Tag, Tag]
    | [Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | [Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag, Tag]
    | null;
  /**
   * The manifest type
   */
  ManifestType: 'locale';
  /**
   * The manifest syntax version
   */
  ManifestVersion: string;
  [k: string]: unknown | undefined;
}
