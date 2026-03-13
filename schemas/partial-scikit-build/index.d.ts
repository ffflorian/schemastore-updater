/* eslint-disable */

export type Generate = (
  | {
      /**
       * The path (relative to platlib) for the file to generate.
       */
      path: string;
      /**
       * The template to use for the file. This includes string.Template style placeholders for all the metadata. If empty, a template-path must be set.
       */
      template: string;
      /**
       * The place to put the generated file. The "build" directory is useful for CMake files, and the "install" directory is useful for Python files, usually. You can also write directly to the "source" directory, will overwrite existing files & remember to gitignore the file.
       */
      location?: 'install' | 'build' | 'source';
    }
  | {
      /**
       * The path (relative to platlib) for the file to generate.
       */
      path: string;
      /**
       * The path to the template file. If empty, a template must be set.
       */
      'template-path': string;
      /**
       * The place to put the generated file. The "build" directory is useful for CMake files, and the "install" directory is useful for Python files, usually. You can also write directly to the "source" directory, will overwrite existing files & remember to gitignore the file.
       */
      location?: 'install' | 'build' | 'source';
    }
)[];
export type Inherit = 'none' | 'append' | 'prepend';

/**
 * Scikit-build-core's settings.
 */
export interface HttpsJsonSchemastoreOrgPartialScikitBuildJson {
  cmake?: Cmake;
  ninja?: Ninja;
  logging?: Logging;
  sdist?: Sdist;
  wheel?: Wheel;
  backport?: Backport;
  editable?: Editable;
  build?: Build;
  install?: Install;
  generate?: Generate;
  messages?: Messages;
  metadata?: Metadata;
  /**
   * Strictly check all config options. If False, warnings will be printed for unknown options. If True, an error will be raised.
   */
  'strict-config'?: boolean;
  /**
   * Enable early previews of features not finalized yet.
   */
  experimental?: boolean;
  /**
   * If set, this will provide a method for backward compatibility.
   */
  'minimum-version'?: string;
  /**
   * The build directory. Defaults to a temporary directory, but can be set.
   */
  'build-dir'?: string;
  /**
   * Immediately fail the build. This is only useful in overrides.
   */
  fail?: boolean;
  /**
   * A list of overrides to apply to the settings, based on the `if` selector.
   */
  overrides?: {
    if:
      | IfOverrides
      | {
          any: IfOverrides;
        };
    inherit?: {
      cmake?: {
        args?: Inherit;
        define?: Inherit;
        targets?: Inherit;
      };
      sdist?: {
        include?: Inherit;
        exclude?: Inherit;
      };
      wheel?: {
        packages?: Inherit;
        'license-files'?: Inherit;
        exclude?: Inherit;
      };
      build?: {
        'tool-args'?: Inherit;
        targets?: Inherit;
      };
      install?: {
        components?: Inherit;
      };
    };
    cmake?: Cmake;
    ninja?: Ninja;
    logging?: Logging;
    sdist?: Sdist;
    wheel?: Wheel;
    backport?: Backport;
    editable?: Editable;
    build?: Build;
    install?: Install;
    generate?: Generate;
    messages?: Messages;
    metadata?: Metadata;
    /**
     * Strictly check all config options. If False, warnings will be printed for unknown options. If True, an error will be raised.
     */
    'strict-config'?: boolean;
    /**
     * Enable early previews of features not finalized yet.
     */
    experimental?: boolean;
    /**
     * If set, this will provide a method for backward compatibility.
     */
    'minimum-version'?: string;
    /**
     * The build directory. Defaults to a temporary directory, but can be set.
     */
    'build-dir'?: string;
    /**
     * Immediately fail the build. This is only useful in overrides.
     */
    fail?: boolean;
  }[];
}
export interface Cmake {
  /**
   * @deprecated
   * DEPRECATED in 0.8; use version instead.
   */
  'minimum-version'?: string;
  /**
   * The versions of CMake to allow. If CMake is not present on the system or does not pass this specifier, it will be downloaded via PyPI if possible. An empty string will disable this check. The default on 0.10+ is "CMakeLists.txt", which will read it from the project's CMakeLists.txt file, or ">=3.15" if unreadable or <0.10.
   */
  version?: string;
  /**
   * A list of args to pass to CMake when configuring the project. Setting this in config or envvar will override toml. See also ``cmake.define``.
   */
  args?: string[];
  /**
   * A table of defines to pass to CMake when configuring the project. Additive.
   */
  define?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".+".
     */
    [k: string]:
      | (string | boolean)
      | {
          env: string;
          default?: string | boolean;
        };
  };
  /**
   * @deprecated
   * DEPRECATED in 0.10, use build.verbose instead.
   */
  verbose?: boolean;
  /**
   * The build type to use when building the project. Valid options are: "Debug", "Release", "RelWithDebInfo", "MinSizeRel", "", etc.
   */
  'build-type'?: string;
  /**
   * The source directory to use when building the project. Currently only affects the native builder (not the setuptools plugin).
   */
  'source-dir'?: string;
  /**
   * @deprecated
   * DEPRECATED in 0.10; use build.targets instead.
   */
  targets?: string[];
}
export interface Ninja {
  /**
   * @deprecated
   * DEPRECATED in 0.8; use version instead.
   */
  'minimum-version'?: string;
  /**
   * The versions of Ninja to allow. If Ninja is not present on the system or does not pass this specifier, it will be downloaded via PyPI if possible. An empty string will disable this check.
   */
  version?: string;
  /**
   * If Ninja is not present on the system or is older than required, it will be downloaded via PyPI if this is false.
   */
  'make-fallback'?: boolean;
}
export interface Logging {
  /**
   * The logging level to display, "DEBUG", "INFO", "WARNING", and "ERROR" are possible options.
   */
  level?: 'NOTSET' | 'DEBUG' | 'INFO' | 'WARNING' | 'ERROR' | 'CRITICAL';
}
export interface Sdist {
  /**
   * Files to include in the SDist even if they are skipped by default. Supports gitignore syntax.
   */
  include?: string[];
  /**
   * Files to exclude from the SDist even if they are included by default. Supports gitignore syntax.
   */
  exclude?: string[];
  /**
   * If set to True, try to build a reproducible distribution (Unix and Python 3.9+ recommended).  ``SOURCE_DATE_EPOCH`` will be used for timestamps, or a fixed value if not set.
   */
  reproducible?: boolean;
  /**
   * If set to True, CMake will be run before building the SDist.
   */
  cmake?: boolean;
}
export interface Wheel {
  /**
   * A list of packages to auto-copy into the wheel. If this is not set, it will default to the first of ``src/<package>``, ``python/<package>``, or ``<package>`` if they exist.  The prefix(s) will be stripped from the package name inside the wheel. If a dict, provides a mapping of package name to source directory.
   */
  packages?:
    | string[]
    | {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` ".+".
         */
        [k: string]: string;
      };
  /**
   * The Python tags. The default (empty string) will use the default Python version. You can also set this to "cp37" to enable the CPython 3.7+ Stable ABI / Limited API (only on CPython and if the version is sufficient, otherwise this has no effect). Or you can set it to "py3" or "py2.py3" to ignore Python ABI compatibility. The ABI tag is inferred from this tag.
   */
  'py-api'?: string;
  /**
   * Fill out extra tags that are not required. This adds "x86_64" and "arm64" to the list of platforms when "universal2" is used, which helps older Pip's (before 21.0.1) find the correct wheel.
   */
  'expand-macos-universal-tags'?: boolean;
  /**
   * The install directory for the wheel. This is relative to the platlib root. You might set this to the package name. The original dir is still at SKBUILD_PLATLIB_DIR (also SKBUILD_DATA_DIR, etc. are available). EXPERIMENTAL: An absolute path will be one level higher than the platlib root, giving access to "/platlib", "/data", "/headers", and "/scripts".
   */
  'install-dir'?: string;
  /**
   * A list of license files to include in the wheel. Supports glob patterns.
   */
  'license-files'?: string[];
  /**
   * If set to True (the default), CMake will be run before building the wheel.
   */
  cmake?: boolean;
  /**
   * Target the platlib or the purelib. If not set, the default is to target the platlib if wheel.cmake is true, and the purelib otherwise.
   */
  platlib?: boolean;
  /**
   * A set of patterns to exclude from the wheel. This is additive to the SDist exclude patterns. This applies to the final paths in the wheel, and can exclude files from CMake output as well.  Editable installs may not respect this exclusion.
   */
  exclude?: string[];
  /**
   * The build tag to use for the wheel. If empty, no build tag is used.
   */
  'build-tag'?: string;
}
export interface Backport {
  /**
   * If CMake is less than this value, backport a copy of FindPython. Set to 0 disable this, or the empty string.
   */
  'find-python'?: string;
}
export interface Editable {
  /**
   * Select the editable mode to use. Can be "redirect" (default) or "inplace".
   */
  mode?: 'redirect' | 'inplace';
  /**
   * Turn on verbose output for the editable mode rebuilds.
   */
  verbose?: boolean;
  /**
   * Rebuild the project when the package is imported. The build-directory must be set.
   */
  rebuild?: boolean;
}
export interface Build {
  /**
   * Extra args to pass directly to the builder in the build step.
   */
  'tool-args'?: string[];
  /**
   * The build targets to use when building the project. Empty builds the default target.
   */
  targets?: string[];
  /**
   * Verbose printout when building.
   */
  verbose?: boolean;
}
export interface Install {
  /**
   * The components to install. If empty, all default components are installed.
   */
  components?: string[];
  /**
   * Whether to strip the binaries. True for scikit-build-core 0.5+.
   */
  strip?: boolean;
}
export interface Messages {
  /**
   * A message to print after a build failure.
   */
  'after-failure'?: string;
  /**
   * A message to print after a successful build.
   */
  'after-success'?: string;
}
/**
 * List dynamic metadata fields and hook locations in this table.
 */
export interface Metadata {
  version?: Metadata1;
  description?: Metadata1;
  license?: Metadata1;
  readme?: Metadata1;
  'requires-python'?: Metadata1;
  dependencies?: Metadata1;
  'optional-dependencies'?: Metadata1;
  entrypoints?: Metadata1;
  authors?: Metadata1;
  maintainers?: Metadata1;
  urls?: Metadata1;
  classifiers?: Metadata1;
  keywords?: Metadata1;
  scripts?: Metadata1;
  'gui-scripts'?: Metadata1;
}
export interface Metadata1 {
  provider?: string;
  'provider-path'?: string;
  [k: string]: unknown | undefined;
}
export interface IfOverrides {
  /**
   * The version of scikit-build-version. Takes a specifier set.
   */
  'scikit-build-version'?: string;
  /**
   * The two-digit Python version. Takes a specifier set.
   */
  'python-version'?: string;
  /**
   * The value of `sys.implementation.name`. Takes a regex
   */
  'implementation-name'?: string;
  /**
   * Derived from `sys.implementation.version`, following PEP 508. Takes a specifier set.
   */
  'implementation-version'?: string;
  /**
   * The value of `sys.platform`. Takes a regex.
   */
  'platform-system'?: string;
  /**
   * The value of `platform.machine()`. Takes a regex.
   */
  'platform-machine'?: string;
  /**
   * The value of `platform.node()`. Takes a regex.
   */
  'platform-node'?: string;
  /**
   * The state of the build, one of `sdist`, `wheel`, `editable`, `metadata_wheel`, and `metadata_editable`. Takes a regex.
   */
  state?: string;
  /**
   * Whether the build is from an sdist.
   */
  'from-sdist'?: boolean;
  /**
   * Matches if the build fails. A build will be retried if there is at least one matching override with this set to true.
   */
  failed?: boolean;
  /**
   * The version of CMake found on the system. Takes a specifier set.
   */
  'system-cmake'?: string;
  /**
   * Whether a cmake wheel is known to be provided for this system.
   */
  'cmake-wheel'?: boolean;
  /**
   * A sorted string of the abi flags. Takes a regex.
   */
  'abi-flags'?: string;
  /**
   * A table of environment variables mapped to either string regexs, or booleans. Valid 'truthy' environment variables are case insensitive `true`, `on`, `yes`, `y`, `t`, or a number more than 0.
   */
  env?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | boolean;
  };
}
