/* eslint-disable */

/**
 * The version of the product, e.g '5.0' or '1.1'
 */
export type ProductVersion = string;
/**
 * The end-of-life (EOL) date for this Product when it is considered to be out of support. The value may be `null` if the EOL date is undetermined, e.g. when a product is still a prerelease.
 */
export type EndOfLifeDate = DateYYYYMMDD | null;
/**
 * A date in the format YYYY-MM-DD
 */
export type DateYYYYMMDD = string;
/**
 * `true` if the latest release of this product includes a security update, `false` otherwise.
 */
export type LatestReleaseIncludesSecurityUpdate = boolean;
/**
 * A date in the format YYYY-MM-DD
 */
export type LatestReleaseDate = string;
/**
 * The version of the latest release
 */
export type LatestReleaseVersion = string;
/**
 * The version of the runtime included in the latest release
 */
export type LatestRuntimeVersion = string;
/**
 * The version of the SDK included in the latest release. This is usually the SDK with the highest feature band. A ProductRelease may include multiple SDKs across different feature bands, all of which carry the same runtime version.
 */
export type LatestSdkVersion = string;
/**
 * The name of the product.
 */
export type ProductName = string;

/**
 * A collection of manifests for .NET products, which is updated with each preview and stable release of the .NET SDK and/or Runtime
 */
export interface JSONSchemaForNETProductCollectionManifests {
  /**
   * A collection of all released products
   */
  'releases-index': Product[];
}
export interface Product {
  'channel-version': ProductVersion;
  'eol-date'?: EndOfLifeDate;
  security: LatestReleaseIncludesSecurityUpdate;
  'latest-release-date': LatestReleaseDate;
  'latest-release': LatestReleaseVersion;
  'latest-runtime': LatestRuntimeVersion;
  'latest-sdk': LatestSdkVersion;
  product: ProductName;
  /**
   * The URL pointing to the releases.json file that contains information about all the releases associated with this Product.
   */
  'releases.json': string;
  /**
   * The type of Product release indicating whether the release is Standard Term Support (sts) or Long Term Support (lts).
   */
  'release-type': 'sts' | 'lts';
  /**
   * The support phase of the Product.
   */
  'support-phase': 'preview' | 'go-live' | 'active' | 'maintenance' | 'eol';
  /**
   * The URL pointing to the supported-os.json file that contains information about the operating systems supported by this Product.
   */
  'supported-os.json'?: string;
}
