/* eslint-disable */

export interface HttpsWwwSchemastoreOrgUdsBundleJson {
  /**
   * The kind of UDS package
   */
  kind: 'UDSBundle';
  metadata: UDSMetadata;
  build?: UDSBuildData;
  /**
   * List of Zarf packages
   */
  packages: Package[];
  /**
   * This interface was referenced by `HttpsWwwSchemastoreOrgUdsBundleJson`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * UDSBundle metadata
 */
export interface UDSMetadata {
  /**
   * Name to identify this UDS bundle
   */
  name: string;
  /**
   * Additional information about this package
   */
  description?: string;
  /**
   * Generic string set by a package author to track the package version
   */
  version?: string;
  /**
   * Link to package information when online
   */
  url?: string;
  /**
   * Disable compression of this package
   */
  uncompressed?: boolean;
  /**
   * The target cluster architecture for this package
   */
  architecture?: string;
  /**
   * Comma-separated list of package authors (including contact info)
   */
  authors?: string;
  /**
   * Link to package documentation when online
   */
  documentation?: string;
  /**
   * Link to package source code when online
   */
  source?: string;
  /**
   * Name of the distributing entity, organization or individual.
   */
  vendor?: string;
  /**
   * Checksum of a checksums.txt file that contains checksums all the layers within the package.
   */
  aggregateChecksum?: string;
  /**
   * This interface was referenced by `UDSMetadata`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * Generated bundle build data
 */
export interface UDSBuildData {
  /**
   * The machine name that created this package
   */
  terminal: string;
  /**
   * The username who created this package
   */
  user: string;
  /**
   * The architecture this package was created on
   */
  architecture: string;
  /**
   * The timestamp when this package was created
   */
  timestamp: string;
  /**
   * The version of Zarf used to build this package
   */
  version: string;
  /**
   * This interface was referenced by `UDSBuildData`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface Package {
  name: string;
  /**
   * Description of the Zarf package
   */
  description?: string;
  /**
   * The repository to import the package from
   */
  repository?: string;
  /**
   * The local path to import the package from
   */
  path?: string;
  /**
   * Ref (tag) of the Zarf package
   */
  ref: string;
  /**
   * [Alpha] Override the namespace for the entire package deployment. Requires the package to have only one distinct namespace defined
   */
  namespace?: string;
  /**
   * Timeout for deploying the package. Use duration format such as 30s 10m or 1h30m
   */
  timeout?: string;
  /**
   * Flavor of the Zarf package
   */
  flavor?: string;
  /**
   * List of optional components to include from the package (required components are always included)
   */
  optionalComponents?: string[];
  /**
   * The public key to use to verify the package. Mutually exclusive with keylessVerification.
   */
  publicKey?: string;
  keylessVerification?: KeylessVerification;
  /**
   * List of Zarf variables to import from another Zarf package
   */
  imports?: BundleVariableImport[];
  /**
   * List of Zarf variables to export from the Zarf package
   */
  exports?: BundleVariableExport[];
  /**
   * Map of Helm chart overrides to set. The format is <component>:
   */
  overrides?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | {
          [k: string]: BundleChartOverrides | undefined;
        }
      | undefined;
  };
  /**
   * This interface was referenced by `Package`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * Keyless signature verification config. Mutually exclusive with publicKey.
 */
export interface KeylessVerification {
  /**
   * Required identity claim in the signing certificate.
   */
  certificateIdentity?: string;
  /**
   * Regex-based alternative to certificateIdentity for pattern matching.
   */
  certificateIdentityRegexp?: string;
  /**
   * Required OIDC issuer claim in the signing certificate.
   */
  certificateOIDCIssuer?: string;
  /**
   * Regex-based variant of certificateOIDCIssuer.
   */
  certificateOIDCIssuerRegexp?: string;
  /**
   * Sigstore TrustedRoot JSON content for keyless signature verification. Omit to use Zarf's embedded TrustedRoot.
   */
  trustedRoot?: string;
  /**
   * Skip Rekor transparency log inclusion verification. Set to true only for air-gapped or private Sigstore infrastructure.
   */
  insecureIgnoreTlog?: boolean;
  /**
   * Verify RFC3161 signed timestamps in the bundle. Use when signing was done with a TSA and Rekor was not used.
   */
  useSignedTimestamps?: boolean;
  /**
   * This interface was referenced by `KeylessVerification`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface BundleVariableImport {
  name: string;
  package: string;
  description?: string;
  /**
   * This interface was referenced by `BundleVariableImport`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface BundleVariableExport {
  name: string;
  description?: string;
  /**
   * This interface was referenced by `BundleVariableExport`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface BundleChartOverrides {
  /**
   * List of Helm chart values to set statically
   */
  values?: BundleChartValue[];
  /**
   * List of Helm chart variables to set via UDS variables
   */
  variables?: BundleChartVariable[];
  /**
   * The namespace to deploy the Helm chart to
   */
  namespace?: string;
  /**
   * List of Helm chart value file  paths to set statically
   */
  valuesFiles?: string[];
  /**
   * This interface was referenced by `BundleChartOverrides`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface BundleChartValue {
  path: string;
  value: {
    [k: string]: unknown | undefined;
  };
  /**
   * This interface was referenced by `BundleChartValue`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
export interface BundleChartVariable {
  path: string;
  name: string;
  description?: string;
  default?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The type of value to be processed
   */
  type?: 'raw' | 'file';
  /**
   * Whether the value is sensitive
   */
  sensitive?: boolean;
  /**
   * Where the value is set from
   */
  source?: 'config' | 'env' | 'cli' | 'bundle';
  /**
   * This interface was referenced by `BundleChartVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown | undefined;
}
