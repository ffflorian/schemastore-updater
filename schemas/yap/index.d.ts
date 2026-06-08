/* eslint-disable */

/**
 * Schema for YAP (Yet Another Packager) multi-package project files. A yap.json describes a collection of PKGBUILD-based projects built together for a target distribution.
 */
export interface YapJson {
  /**
   * Optional reference to this JSON Schema for editor validation/autocomplete.
   */
  $schema?: string;
  /**
   * Logical name of the project collection.
   */
  name: string;
  /**
   * Human-readable description of the project collection.
   */
  description: string;
  /**
   * Directory where build artifacts and intermediate files are produced.
   */
  buildDir: string;
  /**
   * Directory where the final packages are written.
   */
  output: string;
  /**
   * Ordered list of sub-projects (each containing a PKGBUILD) to build.
   *
   * @minItems 1
   */
  projects: [
    {
      /**
       * Sub-directory name (relative to the yap.json location) containing the project's PKGBUILD. Must not start with '.' or './'.
       */
      name: string;
      /**
       * If true, the built package is installed immediately after building, before subsequent projects build (useful for intra-collection build dependencies).
       */
      install?: boolean;
      /**
       * Optional human-readable note for the sub-project. Not consumed by the builder (the PKGBUILD's pkgdesc is authoritative); useful for documenting intent in yap.json.
       */
      description?: string;
    },
    ...{
      /**
       * Sub-directory name (relative to the yap.json location) containing the project's PKGBUILD. Must not start with '.' or './'.
       */
      name: string;
      /**
       * If true, the built package is installed immediately after building, before subsequent projects build (useful for intra-collection build dependencies).
       */
      install?: boolean;
      /**
       * Optional human-readable note for the sub-project. Not consumed by the builder (the PKGBUILD's pkgdesc is authoritative); useful for documenting intent in yap.json.
       */
      description?: string;
    }[]
  ];
  /**
   * Compression algorithm for .deb artifacts.
   */
  compressionDeb?: 'zstd' | 'gzip' | 'xz';
  /**
   * Compression algorithm for .rpm artifacts.
   */
  compressionRpm?: 'zstd' | 'gzip' | 'xz';
  /**
   * Package signing configuration. Note: keys are PascalCase (the struct has no JSON tags). Key/passphrase resolution can also be driven by CLI flags and environment variables; see docs.
   */
  signing?: {
    /**
     * Whether signing is active for this build.
     */
    Enabled?: boolean;
    /**
     * Absolute path to the private key (PEM for RSA/APK, ASCII-armored for GPG/DEB/RPM/Pacman).
     */
    KeyPath?: string;
    /**
     * Passphrase for the private key. Prefer environment variables over committing this.
     */
    Passphrase?: string;
    /**
     * Optional key name, used for APK key naming (e.g. "mykey").
     */
    KeyName?: string;
  };
  /**
   * Additional package repositories to configure before resolving build/runtime dependencies.
   */
  repos?: {
    /**
     * Repository identifier.
     */
    name: string;
    /**
     * Base URL of the repository.
     */
    url: string;
    /**
     * APT suite/codename (e.g. "jammy"). Ignored for non-APT formats.
     */
    suite?: string;
    /**
     * APT components (e.g. ["main", "universe"]). Ignored for non-APT formats.
     */
    components?: string[];
    /**
     * URL of the repository signing key to import.
     */
    keyURL?: string;
    /**
     * Restrict this repo to specific distro keys (e.g. ["ubuntu", "rocky"]). Empty means all.
     */
    distros?: string[];
    /**
     * Force a specific repository format. Normally inferred from the target distro.
     */
    format?: string;
    /**
     * Enable GPG signature verification for this repository.
     */
    gpgCheck?: boolean;
  }[];
  /**
   * Package names to omit from makedepends installation.
   */
  skipDeps?: string[];
  /**
   * Cross-compilation target architecture (e.g. "arm64", "aarch64"). Empty means native host arch.
   */
  targetArch?: string;
  /**
   * Directory to capture per-step build debug artifacts.
   */
  debugDir?: string;
  /**
   * Build independent projects in parallel. Default is sequential (file order).
   */
  parallel?: boolean;
  /**
   * Generate Software Bill of Materials for each artifact.
   */
  sbom?: boolean;
  /**
   * SBOM format(s) to emit when sbom is enabled.
   */
  sbomFormat?: 'cyclonedx' | 'spdx' | 'both';
}
