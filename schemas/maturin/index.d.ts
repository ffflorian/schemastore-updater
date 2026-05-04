/* eslint-disable */

/**
 * Auditwheel mode
 */
export type AuditWheelMode = 'repair' | 'check' | 'warn' | 'skip';
/**
 * Decides how to handle manylinux and musllinux compliance
 */
export type PlatformTag =
  | {
      Manylinux: {
        /**
         * GLIBC version major
         */
        major: number;
        /**
         * GLIBC version minor
         */
        minor: number;
        [k: string]: unknown | undefined;
      };
    }
  | {
      Musllinux: {
        /**
         * musl libc version major
         */
        major: number;
        /**
         * musl libc version minor
         */
        minor: number;
        [k: string]: unknown | undefined;
      };
    }
  | 'Linux'
  | 'Pypi';
/**
 * A glob pattern for the include and exclude configuration.
 *
 * See [PyProjectToml::include] and [PyProject::exclude].
 *
 * Based on <https://python-poetry.org/docs/pyproject/#include-and-exclude>.
 */
export type GlobPattern =
  | string
  | {
      /**
       * One or more [Format] values
       */
      format: ('sdist' | 'wheel') | Format[];
      /**
       * A glob
       */
      path: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Optional crate name (defaults to the root crate)
       */
      crate_name?: string | null;
      /**
       * Source: must be "out-dir"
       */
      from: 'out-dir';
      /**
       * A glob pattern relative to OUT_DIR
       */
      path: string;
      /**
       * Target path in wheel (e.g. "my_package/")
       */
      to: string;
      [k: string]: unknown | undefined;
    };
/**
 * The target format for the include or exclude [GlobPattern].
 *
 * See [Formats].
 */
export type Format = 'sdist' | 'wheel';
/**
 * A cargo feature specification that can be either a plain feature name
 * or a conditional feature that is only enabled for certain Python versions.
 *
 * # Examples
 *
 * ```toml
 * [tool.maturin]
 * features = [
 *   "some-feature",
 *   { feature = "pyo3/abi3-py311", python-version = ">=3.11" },
 *   { feature = "pyo3/abi3-py38", python-version = "<3.11" },
 *   { feature = "pyo3/abi3-py311", python-version = ">=3.11", python-implementation = "cpython" },
 *   { feature = "pypy-compat", python-implementation = "pypy" },
 * ]
 * ```
 */
export type FeatureSpec =
  | string
  | {
      /**
       * The cargo feature to enable
       */
      feature: string;
      /**
       * Python implementation name, e.g. "cpython", "pypy", "graalpy"
       */
      'python-implementation'?: string | null;
      /**
       * PEP 440 version specifier for the target Python version, e.g. ">=3.11"
       */
      'python-version'?: string | null;
      [k: string]: unknown | undefined;
    };
/**
 * Supported cargo crate types
 */
export type CargoCrateType = 'bin' | 'cdylib' | 'dylib' | 'lib' | 'rlib' | 'staticlib';

/**
 * The `[tool.maturin]` section of a pyproject.toml
 */
export interface ToolMaturin {
  /**
   * Activate all available features
   */
  'all-features'?: boolean | null;
  /**
   * Audit wheel mode
   */
  auditwheel?: AuditWheelMode | null;
  /**
   * Bindings type
   */
  bindings?: string | null;
  /**
   * Platform compatibility
   */
  compatibility?: PlatformTag | null;
  /**
   * Override a configuration value (unstable)
   */
  config?: string[] | null;
  /**
   * Path to the wheel directory, defaults to `<module_name>.data`
   */
  data?: string | null;
  /**
   * Same as `profile` but for "editable" builds
   */
  'editable-profile'?: string | null;
  /**
   * Exclude files matching the given glob pattern(s).
   * Patterns are resolved relative to the directory containing `pyproject.toml`.
   */
  exclude?: GlobPattern[] | null;
  /**
   * List of features to activate.
   * Each entry can be a plain feature name string, or a conditional object
   * with `feature` and `python-version` keys.
   */
  features?: FeatureSpec[] | null;
  /**
   * Require Cargo.lock and cache are up to date
   */
  frozen?: boolean | null;
  /**
   * CI generation configuration
   */
  'generate-ci'?: GenerateCIConfig | null;
  /**
   * Include files matching the given glob pattern(s).
   * Patterns are resolved relative to the directory containing `pyproject.toml`.
   * When `python-source` is configured, patterns are also tried relative to
   * that directory if no matches are found.
   */
  include?: GlobPattern[] | null;
  /**
   * Include the import library (.dll.lib) in the wheel on Windows
   */
  'include-import-lib'?: boolean;
  /**
   * Require Cargo.lock is up to date
   */
  locked?: boolean | null;
  /**
   * Path to Cargo.toml
   */
  'manifest-path'?: string | null;
  /**
   * Module name, accepts setuptools style import name like `foo.bar`
   */
  'module-name'?: string | null;
  /**
   * Do not activate the `default` feature
   */
  'no-default-features'?: boolean | null;
  /**
   * Build artifacts with the specified Cargo profile
   */
  profile?: string | null;
  /**
   * Python packages to include
   */
  'python-packages'?: string[] | null;
  /**
   * The directory with python module, contains `<module_name>/__init__.py`
   */
  'python-source'?: string | null;
  /**
   * Additional rustc arguments
   */
  'rustc-args'?: string[] | null;
  /**
   * SBOM configuration
   */
  sbom?: SbomConfig | null;
  /**
   * Source distribution generator
   */
  'sdist-generator'?: 'cargo' | 'git';
  /**
   * Skip audit wheel
   */
  'skip-auditwheel'?: boolean;
  /**
   * Strip the final binary
   */
  strip?: boolean;
  /**
   * Target configuration
   */
  target?: {
    [k: string]: TargetConfig | undefined;
  };
  /**
   * Cargo compile targets
   */
  targets?: CargoTarget[] | null;
  /**
   * Unstable (nightly-only) flags to Cargo, see 'cargo -Z help' for details
   */
  'unstable-flags'?: string[] | null;
  /**
   * Use base Python executable instead of venv Python executable in PEP 517 build.
   */
  'use-base-python'?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The `[tool.maturin.generate-ci]` section
 */
export interface GenerateCIConfig {
  /**
   * GitHub Actions configuration
   */
  github?: GitHubCIConfig | null;
  [k: string]: unknown | undefined;
}
/**
 * The `[tool.maturin.generate-ci.github]` section
 */
export interface GitHubCIConfig {
  /**
   * Android platform configuration
   */
  android?: PlatformCIConfig | null;
  /**
   * Extra arguments to pass to maturin (applies to all platforms)
   */
  args?: string | null;
  /**
   * Emscripten platform configuration
   */
  emscripten?: PlatformCIConfig | null;
  /**
   * Linux (manylinux) platform configuration
   */
  linux?: PlatformCIConfig | null;
  /**
   * macOS platform configuration
   */
  macos?: PlatformCIConfig | null;
  /**
   * Musllinux platform configuration
   */
  musllinux?: PlatformCIConfig | null;
  /**
   * Enable pytest
   */
  pytest?: boolean | null;
  /**
   * Skip artifact attestation
   */
  'skip-attestation'?: boolean | null;
  /**
   * Windows platform configuration
   */
  windows?: PlatformCIConfig | null;
  /**
   * Use zig for cross compilation
   */
  zig?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Per-platform CI configuration
 */
export interface PlatformCIConfig {
  /**
   * Extra arguments to pass to maturin
   */
  args?: string | null;
  /**
   * Script to run before build on Linux
   */
  'before-script-linux'?: string | null;
  /**
   * Container image to use
   */
  container?: string | null;
  /**
   * Docker options
   */
  'docker-options'?: string | null;
  /**
   * Manylinux version (e.g. "auto", "2_28", "musllinux_1_2")
   */
  manylinux?: string | null;
  /**
   * Default runner for this platform
   */
  runner?: string | null;
  /**
   * Rust toolchain (e.g. "nightly", "stable")
   */
  'rust-toolchain'?: string | null;
  /**
   * Rustup components to install
   */
  'rustup-components'?: string | null;
  /**
   * Detailed per-target configuration (mutually exclusive with `targets`)
   */
  target?: TargetCIConfig[] | null;
  /**
   * Simple list of target architectures (mutually exclusive with `target`)
   */
  targets?: string[] | null;
  [k: string]: unknown | undefined;
}
/**
 * Per-target CI configuration within a platform
 */
export interface TargetCIConfig {
  /**
   * Target architecture (e.g. "x86_64", "aarch64")
   */
  arch: string;
  /**
   * Extra arguments to pass to maturin
   */
  args?: string | null;
  /**
   * Before-script-linux override
   */
  'before-script-linux'?: string | null;
  /**
   * Container image override
   */
  container?: string | null;
  /**
   * Docker options override
   */
  'docker-options'?: string | null;
  /**
   * Manylinux version override
   */
  manylinux?: string | null;
  /**
   * Runner override for this target
   */
  runner?: string | null;
  /**
   * Rust toolchain override
   */
  'rust-toolchain'?: string | null;
  /**
   * Rustup components override
   */
  'rustup-components'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * SBOM configuration
 */
export interface SbomConfig {
  /**
   * Generate a CycloneDX SBOM for external shared libraries grafted during
   * auditwheel repair. Defaults to `true` when repair copies libraries.
   *
   * The SBOM is written to `<dist-info>/sboms/auditwheel.cdx.json` and
   * records which OS packages (deb, rpm, apk) provided the grafted
   * libraries, following the same convention as Python's auditwheel.
   */
  auditwheel?: boolean | null;
  /**
   * Additional SBOM files to include in the `.dist-info/sboms` directory.
   */
  include?: string[] | null;
  /**
   * Generate an SBOM for Rust crates. Defaults to `true`.
   */
  rust?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Target configuration
 */
export interface TargetConfig {
  /**
   * macOS deployment target version
   */
  'macos-deployment-target'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Cargo compile target
 */
export interface CargoTarget {
  /**
   * Kind of target ("bin", "cdylib")
   */
  kind?: CargoCrateType | null;
  /**
   * Name as given in the `Cargo.toml` or generated from the file name
   */
  name: string;
  [k: string]: unknown | undefined;
}
