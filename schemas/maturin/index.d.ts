/* eslint-disable */

/**
 * Auditwheel mode
 */
export type AuditWheelMode = 'repair' | 'check' | 'skip';
/**
 * Decides how to handle manylinux and musllinux compliance
 */
export type PlatformTag =
  | {
      Manylinux: {
        /**
         * GLIBC version major
         */
        x: number;
        /**
         * GLIBC version minor
         */
        y: number;
        [k: string]: unknown | undefined;
      };
    }
  | {
      Musllinux: {
        /**
         * musl libc version major
         */
        x: number;
        /**
         * musl libc version minor
         */
        y: number;
        [k: string]: unknown | undefined;
      };
    }
  | 'Linux';
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
      format: Formats;
      /**
       * A glob
       */
      path: string;
      [k: string]: unknown | undefined;
    };
/**
 * A single [Format] or multiple [Format] values for a [GlobPattern].
 */
export type Formats = Format | Format[];
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
       * PEP 440 version specifier for the target Python version, e.g. ">=3.11"
       */
      'python-version': string;
      [k: string]: unknown | undefined;
    };
/**
 * Source distribution generator
 */
export type SdistGenerator = 'cargo' | 'git';
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
   * Exclude files matching the given glob pattern(s)
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
   * Include files matching the given glob pattern(s)
   */
  include?: GlobPattern[] | null;
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
   * Source distribution generator
   */
  'sdist-generator'?: SdistGenerator & string;
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
