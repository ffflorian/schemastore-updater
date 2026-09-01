/* eslint-disable */

/**
 * Package Spec for BOSH Releases
 *
 * Docs: https://bosh.io/docs/packages/
 */
export interface BOSHPackageSpec {
  /**
   * The package name.
   */
  name: string;
  /**
   * List of other packages that this package depends on.
   */
  dependencies?: string[];
  /**
   * List of files that this package contains, either explicitly and/or through pattern-matching.
   */
  files: string[];
  /**
   * List of files to be excluded from the package, either explicitly and/or through pattern-matching. Applies on top of `files`.
   */
  excluded_files?: string[];
  /**
   * Whether compression is disabled for the individual package tarball.
   */
  no_compression?: boolean;
  [k: string]: unknown | undefined;
}
