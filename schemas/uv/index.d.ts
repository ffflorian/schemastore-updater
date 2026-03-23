/* eslint-disable */

/**
 * The default version specifier when adding a dependency.
 */
export type AddBoundsKind = 'lower' | 'major' | 'minor' | 'exact';
/**
 * A host or host-port pair.
 */
export type TrustedHost = string;
/**
 * Whether to include a single module or multiple modules.
 */
export type ModuleName = string | string[];
export type CacheKey =
  | string
  | {
      file: string;
    }
  | {
      dir: string;
    }
  | {
      git: GitPattern;
    }
  | {
      env: string;
    };
export type GitPattern = boolean | GitSet;
/**
 * The URL of an index to use for fetching packages (e.g., `https://pypi.org/simple`), or a local path.
 */
export type IndexUrl = string;
export type ConfigSettingValue = (string | string[]) | undefined;
/**
 * The normalized name of an extra dependency.
 *
 * Converts the name to lowercase and collapses runs of `-`, `_`, and `.` down to a single `-`.
 * For example, `---`, `.`, and `__` are all converted to a single `-`.
 *
 * See:
 * - <https://peps.python.org/pep-0685/#specification/>
 * - <https://packaging.python.org/en/latest/specifications/name-normalization/>
 */
export type ExtraName = string;
/**
 * The normalized name of a dependency group.
 *
 * See:
 * - <https://peps.python.org/pep-0735/>
 * - <https://packaging.python.org/en/latest/specifications/name-normalization/>
 */
export type GroupName = string;
/**
 * The normalized name of a package.
 *
 * Converts the name to lowercase and collapses runs of `-`, `_`, and `.` down to a single `-`.
 * For example, `---`, `.`, and `__` are all converted to a single `-`.
 *
 * See: <https://packaging.python.org/en/latest/specifications/name-normalization/>
 */
export type PackageName = string;
/**
 * Like [`ConflictSet`], but for deserialization in `pyproject.toml`.
 *
 * The schema format is different from the in-memory format. Specifically, the
 * schema format does not allow specifying the package name (or will make it
 * optional in the future), where as the in-memory format needs the package
 * name.
 */
export type SchemaConflictSet = SchemaConflictItem[];
/**
 * Like [`Conflicts`], but for deserialization in `pyproject.toml`.
 *
 * The schema format is different from the in-memory format. Specifically, the
 * schema format does not allow specifying the package name (or will make it
 * optional in the future), where as the in-memory format needs the package
 * name.
 *
 * N.B. `Conflicts` is still used for (de)serialization. Specifically, in the
 * lock file, where the package name is required.
 */
export type SchemaConflicts = SchemaConflictSet[];
/**
 * Either the literal "all" or a list of groups
 */
export type DefaultGroups = 'all' | GroupName[];
/**
 * A PEP 508 dependency specifier, e.g., `ruff >= 0.6.0`
 */
export type Requirement = string;
/**
 * Exclude distributions uploaded after the given timestamp.
 *
 * Accepts both RFC 3339 timestamps (e.g., `2006-12-02T02:07:43Z`) and local dates in the same format (e.g., `2006-12-02`), as well as relative durations (e.g., `1 week`, `30 days`, `6 months`). Relative durations are resolved to a timestamp at lock time.
 */
export type ExcludeNewerValue = string;
export type PackageExcludeNewer = (false | ExcludeNewerValue) | undefined;
export type ExtraBuildDependency =
  | Requirement
  | {
      'match-runtime': boolean;
      requirement: Requirement;
      [k: string]: unknown | undefined;
    };
export type ForkStrategy = 'fewest' | 'requires-python';
/**
 * A proxy URL (e.g., `http://proxy.example.com:8080`).
 */
export type ProxyUrl = string;
/**
 * When to use authentication.
 */
export type AuthPolicy = 'auto' | 'always' | 'never';
export type IndexFormat = 'simple' | 'flat';
/**
 * HTTP status code (100-599)
 */
export type StatusCode = number;
/**
 * The normalized name of an index.
 *
 * Index names may contain letters, digits, hyphens, underscores, and periods, and must be ASCII.
 */
export type IndexName = string;
/**
 * A [`Url`] wrapper that redacts credentials when displaying the URL.
 *
 * `DisplaySafeUrl` wraps the standard [`url::Url`] type, providing functionality to mask
 * secrets by default when the URL is displayed or logged. This helps prevent accidental
 * exposure of sensitive information in logs and debug output.
 *
 * # Examples
 *
 * ```
 * use uv_redacted::DisplaySafeUrl;
 * use std::str::FromStr;
 *
 * // Create a `DisplaySafeUrl` from a `&str`
 * let mut url = DisplaySafeUrl::parse("https://user:password@example.com").unwrap();
 *
 * // Display will mask secrets
 * assert_eq!(url.to_string(), "https://user:****@example.com/");
 *
 * // You can still access the username and password
 * assert_eq!(url.username(), "user");
 * assert_eq!(url.password(), Some("password"));
 *
 * // And you can still update the username and password
 * let _ = url.set_username("new_user");
 * let _ = url.set_password(Some("new_password"));
 * assert_eq!(url.username(), "new_user");
 * assert_eq!(url.password(), Some("new_password"));
 *
 * // It is also possible to remove the credentials entirely
 * url.remove_credentials();
 * assert_eq!(url.username(), "");
 * assert_eq!(url.password(), None);
 * ```
 */
export type DisplaySafeUrl = string;
export type IndexStrategy = 'first-index' | 'unsafe-first-match' | 'unsafe-best-match';
/**
 * Keyring provider type to use for credential lookup.
 */
export type KeyringProviderType = 'disabled' | 'subprocess';
/**
 * The method to use when linking.
 *
 * Defaults to [`Clone`](LinkMode::Clone) on macOS and Linux (which support copy-on-write on
 * APFS and btrfs/xfs/bcachefs respectively), and [`Hardlink`](LinkMode::Hardlink) on other
 * platforms.
 */
export type LinkMode = 'clone' | 'copy' | 'hardlink' | 'symlink';
/**
 * Indicate the style of annotation comments, used to indicate the dependencies that requested each
 * package.
 */
export type AnnotationStyle = 'line' | 'split';
/**
 * The name of a package, or `:all:` or `:none:` to select or omit all packages, respectively.
 */
export type PackageNameSpecifier = string;
export type PrereleaseMode = 'disallow' | 'allow' | 'if-necessary' | 'explicit' | 'if-necessary-or-explicit';
/**
 * The supported target triples. Each triple consists of an architecture, vendor, and operating
 * system.
 *
 * See: <https://doc.rust-lang.org/nightly/rustc/platform-support.html>
 */
export type TargetTriple =
  | 'windows'
  | 'linux'
  | 'macos'
  | 'x86_64-pc-windows-msvc'
  | 'aarch64-pc-windows-msvc'
  | 'i686-pc-windows-msvc'
  | 'x86_64-unknown-linux-gnu'
  | 'aarch64-apple-darwin'
  | 'x86_64-apple-darwin'
  | 'aarch64-unknown-linux-gnu'
  | 'aarch64-unknown-linux-musl'
  | 'x86_64-unknown-linux-musl'
  | 'riscv64-unknown-linux'
  | 'x86_64-manylinux2014'
  | 'x86_64-manylinux_2_17'
  | 'x86_64-manylinux_2_28'
  | 'x86_64-manylinux_2_31'
  | 'x86_64-manylinux_2_32'
  | 'x86_64-manylinux_2_33'
  | 'x86_64-manylinux_2_34'
  | 'x86_64-manylinux_2_35'
  | 'x86_64-manylinux_2_36'
  | 'x86_64-manylinux_2_37'
  | 'x86_64-manylinux_2_38'
  | 'x86_64-manylinux_2_39'
  | 'x86_64-manylinux_2_40'
  | 'aarch64-manylinux2014'
  | 'aarch64-manylinux_2_17'
  | 'aarch64-manylinux_2_28'
  | 'aarch64-manylinux_2_31'
  | 'aarch64-manylinux_2_32'
  | 'aarch64-manylinux_2_33'
  | 'aarch64-manylinux_2_34'
  | 'aarch64-manylinux_2_35'
  | 'aarch64-manylinux_2_36'
  | 'aarch64-manylinux_2_37'
  | 'aarch64-manylinux_2_38'
  | 'aarch64-manylinux_2_39'
  | 'aarch64-manylinux_2_40'
  | 'aarch64-linux-android'
  | 'x86_64-linux-android'
  | 'wasm32-pyodide2024'
  | 'arm64-apple-ios'
  | 'arm64-apple-ios-simulator'
  | 'x86_64-apple-ios-simulator';
/**
 * A Python version specifier, e.g. `3.11` or `3.12.4`.
 */
export type PythonVersion = string;
export type ResolutionMode = 'highest' | 'lowest' | 'lowest-direct';
/**
 * The strategy to use when determining the appropriate PyTorch index.
 */
export type TorchMode =
  | 'auto'
  | 'cpu'
  | 'cu130'
  | 'cu129'
  | 'cu128'
  | 'cu126'
  | 'cu125'
  | 'cu124'
  | 'cu123'
  | 'cu122'
  | 'cu121'
  | 'cu120'
  | 'cu118'
  | 'cu117'
  | 'cu116'
  | 'cu115'
  | 'cu114'
  | 'cu113'
  | 'cu112'
  | 'cu111'
  | 'cu110'
  | 'cu102'
  | 'cu101'
  | 'cu100'
  | 'cu92'
  | 'cu91'
  | 'cu90'
  | 'cu80'
  | 'rocm7.1'
  | 'rocm7.0'
  | 'rocm6.4'
  | 'rocm6.3'
  | 'rocm6.2.4'
  | 'rocm6.2'
  | 'rocm6.1'
  | 'rocm6.0'
  | 'rocm5.7'
  | 'rocm5.6'
  | 'rocm5.5'
  | 'rocm5.4.2'
  | 'rocm5.4'
  | 'rocm5.3'
  | 'rocm5.2'
  | 'rocm5.1.1'
  | 'rocm4.2'
  | 'rocm4.1'
  | 'rocm4.0.1'
  | 'xpu';
export type PythonDownloads = 'automatic' | 'manual' | 'never';
export type PythonPreference = 'only-managed' | 'managed' | 'system' | 'only-system';
/**
 * A version specifier, e.g. `>=0.5.0` or `==0.5.0`.
 */
export type RequiredVersion = string;
export type Sources = (Source | Source[]) | undefined;
/**
 * A `tool.uv.sources` value.
 */
export type Source =
  | {
      branch?: string | null;
      extra?: ExtraName | null;
      /**
       * The repository URL (without the `git+` prefix).
       */
      git: DisplaySafeUrl;
      group?: GroupName | null;
      /**
       * Whether to use Git LFS when cloning the repository.
       */
      lfs?: boolean | null;
      marker?: MarkerTree;
      rev?: string | null;
      /**
       * The path to the directory with the `pyproject.toml`, if it's not in the archive root.
       */
      subdirectory?: PortablePathBuf | null;
      tag?: string | null;
    }
  | {
      extra?: ExtraName | null;
      group?: GroupName | null;
      marker?: MarkerTree;
      /**
       * For source distributions, the path to the directory with the `pyproject.toml`, if it's
       * not in the archive root.
       */
      subdirectory?: PortablePathBuf | null;
      url: DisplaySafeUrl;
    }
  | {
      /**
       * `false` by default.
       */
      editable?: boolean | null;
      extra?: ExtraName | null;
      group?: GroupName | null;
      marker?: MarkerTree;
      /**
       * Whether to treat the dependency as a buildable Python package (`true`) or as a virtual
       * package (`false`). If `false`, the package will not be built or installed, but its
       * dependencies will be included in the virtual environment.
       *
       * When omitted, the package status is inferred based on the presence of a `[build-system]`
       * in the project's `pyproject.toml`.
       */
      package?: boolean | null;
      path: PortablePathBuf;
    }
  | {
      extra?: ExtraName | null;
      group?: GroupName | null;
      index: IndexName;
      marker?: MarkerTree;
    }
  | {
      /**
       * Whether the package should be installed as editable. Defaults to `true`.
       */
      editable?: boolean | null;
      extra?: ExtraName | null;
      group?: GroupName | null;
      marker?: MarkerTree;
      /**
       * When set to `false`, the package will be fetched from the remote index, rather than
       * included as a workspace package.
       */
      workspace: boolean;
    };
/**
 * A PEP 508-compliant marker expression, e.g., `sys_platform == 'Darwin'`
 */
export type MarkerTree = string;
export type PortablePathBuf = string;
export type TrustedPublishing = ('always' | 'never') | 'automatic';
export type SerdePattern = string;

/**
 * Metadata and configuration for uv.
 */
export interface CombinedOptions {
  /**
   * The default version specifier when adding a dependency.
   *
   * When adding a dependency to the project, if no constraint or URL is provided, a constraint
   * is added based on the latest compatible version of the package. By default, a lower bound
   * constraint is used, e.g., `>=1.2.3`.
   *
   * When `--frozen` is provided, no resolution is performed, and dependencies are always added
   * without constraints.
   *
   * This option is in preview and may change in any future release.
   */
  'add-bounds'?: AddBoundsKind | null;
  /**
   * Allow insecure connections to host.
   *
   * Expects to receive either a hostname (e.g., `localhost`), a host-port pair (e.g.,
   * `localhost:8080`), or a URL (e.g., `https://localhost`).
   *
   * WARNING: Hosts included in this list will not be verified against the system's certificate
   * store. Only use `--allow-insecure-host` in a secure network with verified sources, as it
   * bypasses SSL verification and could expose you to MITM attacks.
   */
  'allow-insecure-host'?: TrustedHost[] | null;
  /**
   * Configuration for the uv build backend.
   *
   * Note that those settings only apply when using the `uv_build` backend, other build backends
   * (such as hatchling) have their own configuration.
   */
  'build-backend'?: BuildBackendSettings | null;
  /**
   * PEP 508-style requirements, e.g., `ruff==0.5.0`, or `ruff @ https://...`.
   */
  'build-constraint-dependencies'?: string[] | null;
  /**
   * Path to the cache directory.
   *
   * Defaults to `$XDG_CACHE_HOME/uv` or `$HOME/.cache/uv` on Linux and macOS, and
   * `%LOCALAPPDATA%\uv\cache` on Windows.
   */
  'cache-dir'?: string | null;
  /**
   * The keys to consider when caching builds for the project.
   *
   * Cache keys enable you to specify the files or directories that should trigger a rebuild when
   * modified. By default, uv will rebuild a project whenever the `pyproject.toml`, `setup.py`,
   * or `setup.cfg` files in the project directory are modified, or if a `src` directory is
   * added or removed, i.e.:
   *
   * ```toml
   * cache-keys = [{ file = "pyproject.toml" }, { file = "setup.py" }, { file = "setup.cfg" }, { dir = "src" }]
   * ```
   *
   * As an example: if a project uses dynamic metadata to read its dependencies from a
   * `requirements.txt` file, you can specify `cache-keys = [{ file = "requirements.txt" }, { file = "pyproject.toml" }]`
   * to ensure that the project is rebuilt whenever the `requirements.txt` file is modified (in
   * addition to watching the `pyproject.toml`).
   *
   * Globs are supported, following the syntax of the [`glob`](https://docs.rs/glob/0.3.1/glob/struct.Pattern.html)
   * crate. For example, to invalidate the cache whenever a `.toml` file in the project directory
   * or any of its subdirectories is modified, you can specify `cache-keys = [{ file = "** /*.toml" }]`.
   * Note that the use of globs can be expensive, as uv may need to walk the filesystem to
   * determine whether any files have changed.
   *
   * Cache keys can also include version control information. For example, if a project uses
   * `setuptools_scm` to read its version from a Git commit, you can specify `cache-keys = [{ git = { commit = true }, { file = "pyproject.toml" }]`
   * to include the current Git commit hash in the cache key (in addition to the
   * `pyproject.toml`). Git tags are also supported via `cache-keys = [{ git = { commit = true, tags = true } }]`.
   *
   * Cache keys can also include environment variables. For example, if a project relies on
   * `MACOSX_DEPLOYMENT_TARGET` or other environment variables to determine its behavior, you can
   * specify `cache-keys = [{ env = "MACOSX_DEPLOYMENT_TARGET" }]` to invalidate the cache
   * whenever the environment variable changes.
   *
   * Cache keys only affect the project defined by the `pyproject.toml` in which they're
   * specified (as opposed to, e.g., affecting all members in a workspace), and all paths and
   * globs are interpreted as relative to the project directory.
   */
  'cache-keys'?: CacheKey[] | null;
  /**
   * Check an index URL for existing files to skip duplicate uploads.
   *
   * This option allows retrying publishing that failed after only some, but not all files have
   * been uploaded, and handles error due to parallel uploads of the same file.
   *
   * Before uploading, the index is checked. If the exact same file already exists in the index,
   * the file will not be uploaded. If an error occurred during the upload, the index is checked
   * again, to handle cases where the identical file was uploaded twice in parallel.
   *
   * The exact behavior will vary based on the index. When uploading to PyPI, uploading the same
   * file succeeds even without `--check-url`, while most other indexes error.
   *
   * The index must provide one of the supported hashes (SHA-256, SHA-384, or SHA-512).
   */
  'check-url'?: IndexUrl | null;
  /**
   * Compile Python files to bytecode after installation.
   *
   * By default, uv does not compile Python (`.py`) files to bytecode (`__pycache__/*.pyc`);
   * instead, compilation is performed lazily the first time a module is imported. For use-cases
   * in which start time is critical, such as CLI applications and Docker containers, this option
   * can be enabled to trade longer installation times for faster start times.
   *
   * When enabled, uv will process the entire site-packages directory (including packages that
   * are not being modified by the current operation) for consistency. Like pip, it will also
   * ignore errors.
   */
  'compile-bytecode'?: boolean | null;
  /**
   * The maximum number of source distributions that uv will build concurrently at any given
   * time.
   *
   * Defaults to the number of available CPU cores.
   */
  'concurrent-builds'?: number | null;
  /**
   * The maximum number of in-flight concurrent downloads that uv will perform at any given
   * time.
   */
  'concurrent-downloads'?: number | null;
  /**
   * The number of threads used when installing and unzipping packages.
   *
   * Defaults to the number of available CPU cores.
   */
  'concurrent-installs'?: number | null;
  /**
   * Settings to pass to the [PEP 517](https://peps.python.org/pep-0517/) build backend,
   * specified as `KEY=VALUE` pairs.
   */
  'config-settings'?: ConfigSettings | null;
  /**
   * Settings to pass to the [PEP 517](https://peps.python.org/pep-0517/) build backend for specific packages,
   * specified as `KEY=VALUE` pairs.
   *
   * Accepts a map from package names to string key-value pairs.
   */
  'config-settings-package'?: PackageConfigSettings | null;
  /**
   * A list of sets of conflicting groups or extras.
   */
  conflicts?: SchemaConflicts | null;
  /**
   * PEP 508-style requirements, e.g., `ruff==0.5.0`, or `ruff @ https://...`.
   */
  'constraint-dependencies'?: string[] | null;
  /**
   * The list of `dependency-groups` to install by default.
   *
   * Can also be the literal `"all"` to default enable all groups.
   */
  'default-groups'?: DefaultGroups | null;
  /**
   * Additional settings for `dependency-groups`.
   *
   * Currently this can only be used to add `requires-python` constraints
   * to dependency groups (typically to inform uv that your dev tooling
   * has a higher python requirement than your actual project).
   *
   * This cannot be used to define dependency groups, use the top-level
   * `[dependency-groups]` table for that.
   */
  'dependency-groups'?: ToolUvDependencyGroups | null;
  /**
   * Pre-defined static metadata for dependencies of the project (direct or transitive). When
   * provided, enables the resolver to use the specified metadata instead of querying the
   * registry or building the relevant package from source.
   *
   * Metadata should be provided in adherence with the [Metadata 2.3](https://packaging.python.org/en/latest/specifications/core-metadata/)
   * standard, though only the following fields are respected:
   *
   * - `name`: The name of the package.
   * - (Optional) `version`: The version of the package. If omitted, the metadata will be applied
   *   to all versions of the package.
   * - (Optional) `requires-dist`: The dependencies of the package (e.g., `werkzeug>=0.14`).
   * - (Optional) `requires-python`: The Python version required by the package (e.g., `>=3.10`).
   * - (Optional) `provides-extra`: The extras provided by the package.
   */
  'dependency-metadata'?: StaticMetadata[] | null;
  /**
   * PEP 508-style requirements, e.g., `ruff==0.5.0`, or `ruff @ https://...`.
   */
  'dev-dependencies'?: string[] | null;
  /**
   * A list of environment markers, e.g., `python_version >= '3.6'`.
   */
  environments?: string[] | null;
  /**
   * Package names to exclude, e.g., `werkzeug`, `numpy`.
   */
  'exclude-dependencies'?: string[] | null;
  /**
   * Limit candidate packages to those that were uploaded prior to the given date.
   *
   * Accepts RFC 3339 timestamps (e.g., `2006-12-02T02:07:43Z`), a "friendly" duration (e.g.,
   * `24 hours`, `1 week`, `30 days`), or an ISO 8601 duration (e.g., `PT24H`, `P7D`, `P30D`).
   *
   * Durations do not respect semantics of the local time zone and are always resolved to a fixed
   * number of seconds assuming that a day is 24 hours (e.g., DST transitions are ignored).
   * Calendar units such as months and years are not allowed.
   */
  'exclude-newer'?: ExcludeNewerValue | null;
  /**
   * Limit candidate packages for specific packages to those that were uploaded prior to the
   * given date.
   *
   * Accepts a dictionary format of `PACKAGE = "DATE"` pairs, where `DATE` is an RFC 3339
   * timestamp (e.g., `2006-12-02T02:07:43Z`), a "friendly" duration (e.g., `24 hours`, `1 week`,
   * `30 days`), or a ISO 8601 duration (e.g., `PT24H`, `P7D`, `P30D`).
   *
   * Durations do not respect semantics of the local time zone and are always resolved to a fixed
   * number of seconds assuming that a day is 24 hours (e.g., DST transitions are ignored).
   * Calendar units such as months and years are not allowed.
   */
  'exclude-newer-package'?: ExcludeNewerPackage | null;
  /**
   * Additional build dependencies for packages.
   *
   * This allows extending the PEP 517 build environment for the project's dependencies with
   * additional packages. This is useful for packages that assume the presence of packages like
   * `pip`, and do not declare them as build dependencies.
   */
  'extra-build-dependencies'?: ExtraBuildDependencies | null;
  /**
   * Extra environment variables to set when building certain packages.
   *
   * Environment variables will be added to the environment when building the
   * specified packages.
   */
  'extra-build-variables'?: ExtraBuildVariables | null;
  /**
   * Extra URLs of package indexes to use, in addition to `--index-url`.
   *
   * Accepts either a repository compliant with [PEP 503](https://peps.python.org/pep-0503/)
   * (the simple repository API), or a local directory laid out in the same format.
   *
   * All indexes provided via this flag take priority over the index specified by
   * [`index_url`](#index-url) or [`index`](#index) with `default = true`. When multiple indexes
   * are provided, earlier values take priority.
   *
   * To control uv's resolution strategy when multiple indexes are present, see
   * [`index_strategy`](#index-strategy).
   *
   * (Deprecated: use `index` instead.)
   */
  'extra-index-url'?: IndexUrl[] | null;
  /**
   * Locations to search for candidate distributions, in addition to those found in the registry
   * indexes.
   *
   * If a path, the target must be a directory that contains packages as wheel files (`.whl`) or
   * source distributions (e.g., `.tar.gz` or `.zip`) at the top level.
   *
   * If a URL, the page must contain a flat list of links to package files adhering to the
   * formats described above.
   */
  'find-links'?: IndexUrl[] | null;
  /**
   * The strategy to use when selecting multiple versions of a given package across Python
   * versions and platforms.
   *
   * By default, uv will optimize for selecting the latest version of each package for each
   * supported Python version (`requires-python`), while minimizing the number of selected
   * versions across platforms.
   *
   * Under `fewest`, uv will minimize the number of selected versions for each package,
   * preferring older versions that are compatible with a wider range of supported Python
   * versions or platforms.
   */
  'fork-strategy'?: ForkStrategy | null;
  /**
   * The URL of the HTTP proxy to use.
   */
  'http-proxy'?: ProxyUrl | null;
  /**
   * The URL of the HTTPS proxy to use.
   */
  'https-proxy'?: ProxyUrl | null;
  /**
   * The indexes to use when resolving dependencies.
   *
   * Accepts either a repository compliant with [PEP 503](https://peps.python.org/pep-0503/)
   * (the simple repository API), or a local directory laid out in the same format.
   *
   * Indexes are considered in the order in which they're defined, such that the first-defined
   * index has the highest priority. Further, the indexes provided by this setting are given
   * higher priority than any indexes specified via [`index_url`](#index-url) or
   * [`extra_index_url`](#extra-index-url). uv will only consider the first index that contains
   * a given package, unless an alternative [index strategy](#index-strategy) is specified.
   *
   * If an index is marked as `explicit = true`, it will be used exclusively for the
   * dependencies that select it explicitly via `[tool.uv.sources]`, as in:
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "pytorch"
   * url = "https://download.pytorch.org/whl/cu121"
   * explicit = true
   *
   * [tool.uv.sources]
   * torch = { index = "pytorch" }
   * ```
   *
   * If an index is marked as `default = true`, it will be moved to the end of the prioritized list, such that it is
   * given the lowest priority when resolving packages. Additionally, marking an index as default will disable the
   * PyPI default index.
   */
  index?: Index[] | null;
  /**
   * The strategy to use when resolving against multiple index URLs.
   *
   * By default, uv will stop at the first index on which a given package is available, and
   * limit resolutions to those present on that first index (`first-index`). This prevents
   * "dependency confusion" attacks, whereby an attacker can upload a malicious package under the
   * same name to an alternate index.
   */
  'index-strategy'?: IndexStrategy | null;
  /**
   * The URL of the Python package index (by default: <https://pypi.org/simple>).
   *
   * Accepts either a repository compliant with [PEP 503](https://peps.python.org/pep-0503/)
   * (the simple repository API), or a local directory laid out in the same format.
   *
   * The index provided by this setting is given lower priority than any indexes specified via
   * [`extra_index_url`](#extra-index-url) or [`index`](#index).
   *
   * (Deprecated: use `index` instead.)
   */
  'index-url'?: IndexUrl | null;
  /**
   * Attempt to use `keyring` for authentication for index URLs.
   *
   * At present, only `--keyring-provider subprocess` is supported, which configures uv to
   * use the `keyring` CLI to handle authentication.
   */
  'keyring-provider'?: KeyringProviderType | null;
  /**
   * The method to use when installing packages from the global cache.
   *
   * Defaults to `clone` (also known as Copy-on-Write) on macOS and Linux, and `hardlink` on
   * Windows.
   *
   * WARNING: The use of symlink link mode is discouraged, as they create tight coupling between
   * the cache and the target environment. For example, clearing the cache (`uv cache clean`)
   * will break all installed packages by way of removing the underlying source files. Use
   * symlinks with caution.
   */
  'link-mode'?: LinkMode | null;
  /**
   * Whether the project is managed by uv. If `false`, uv will ignore the project when
   * `uv run` is invoked.
   */
  managed?: boolean | null;
  /**
   * Whether to load TLS certificates from the platform's native certificate store.
   *
   * By default, uv loads certificates from the bundled `webpki-roots` crate. The
   * `webpki-roots` are a reliable set of trust roots from Mozilla, and including them in uv
   * improves portability and performance (especially on macOS).
   *
   * However, in some cases, you may want to use the platform's native certificate store,
   * especially if you're relying on a corporate trust root (e.g., for a mandatory proxy) that's
   * included in your system's certificate store.
   */
  'native-tls'?: boolean | null;
  /**
   * Don't install pre-built wheels.
   *
   * The given packages will be built and installed from source. The resolver will still use
   * pre-built wheels to extract package metadata, if available.
   */
  'no-binary'?: boolean | null;
  /**
   * Don't install pre-built wheels for a specific package.
   */
  'no-binary-package'?: PackageName[] | null;
  /**
   * Don't build source distributions.
   *
   * When enabled, resolving will not run arbitrary Python code. The cached wheels of
   * already-built source distributions will be reused, but operations that require building
   * distributions will exit with an error.
   */
  'no-build'?: boolean | null;
  /**
   * Disable isolation when building source distributions.
   *
   * Assumes that build dependencies specified by [PEP 518](https://peps.python.org/pep-0518/)
   * are already installed.
   */
  'no-build-isolation'?: boolean | null;
  /**
   * Disable isolation when building source distributions for a specific package.
   *
   * Assumes that the packages' build dependencies specified by [PEP 518](https://peps.python.org/pep-0518/)
   * are already installed.
   */
  'no-build-isolation-package'?: PackageName[] | null;
  /**
   * Don't build source distributions for a specific package.
   */
  'no-build-package'?: PackageName[] | null;
  /**
   * Avoid reading from or writing to the cache, instead using a temporary directory for the
   * duration of the operation.
   */
  'no-cache'?: boolean | null;
  /**
   * Ignore all registry indexes (e.g., PyPI), instead relying on direct URL dependencies and
   * those provided via `--find-links`.
   */
  'no-index'?: boolean | null;
  /**
   * A list of hosts to exclude from proxying.
   */
  'no-proxy'?: string[] | null;
  /**
   * Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the
   * standards-compliant, publishable package metadata, as opposed to using any local or Git
   * sources.
   */
  'no-sources'?: boolean | null;
  /**
   * Ignore `tool.uv.sources` for the specified packages.
   */
  'no-sources-package'?: PackageName[] | null;
  /**
   * Disable network access, relying only on locally cached data and locally available files.
   */
  offline?: boolean | null;
  /**
   * PEP 508-style requirements, e.g., `ruff==0.5.0`, or `ruff @ https://...`.
   */
  'override-dependencies'?: string[] | null;
  /**
   * Whether the project should be considered a Python package, or a non-package ("virtual")
   * project.
   *
   * Packages are built and installed into the virtual environment in editable mode and thus
   * require a build backend, while virtual projects are _not_ built or installed; instead, only
   * their dependencies are included in the virtual environment.
   *
   * Creating a package requires that a `build-system` is present in the `pyproject.toml`, and
   * that the project adheres to a structure that adheres to the build backend's expectations
   * (e.g., a `src` layout).
   */
  package?: boolean | null;
  pip?: PipOptions | null;
  /**
   * The strategy to use when considering pre-release versions.
   *
   * By default, uv will accept pre-releases for packages that _only_ publish pre-releases,
   * along with first-party requirements that contain an explicit pre-release marker in the
   * declared specifiers (`if-necessary-or-explicit`).
   */
  prerelease?: PrereleaseMode | null;
  /**
   * Whether to enable experimental, preview features.
   */
  preview?: boolean | null;
  /**
   * The URL for publishing packages to the Python package index (by default:
   * <https://upload.pypi.org/legacy/>).
   */
  'publish-url'?: DisplaySafeUrl | null;
  /**
   * Mirror URL to use for downloading managed PyPy installations.
   *
   * By default, managed PyPy installations are downloaded from [downloads.python.org](https://downloads.python.org/).
   * This variable can be set to a mirror URL to use a different source for PyPy installations.
   * The provided URL will replace `https://downloads.python.org/pypy` in, e.g., `https://downloads.python.org/pypy/pypy3.8-v7.3.7-osx64.tar.bz2`.
   *
   * Distributions can be read from a
   * local directory by using the `file://` URL scheme.
   */
  'pypy-install-mirror'?: string | null;
  /**
   * Whether to allow Python downloads.
   */
  'python-downloads'?: PythonDownloads | null;
  /**
   * URL pointing to JSON of custom Python installations.
   */
  'python-downloads-json-url'?: string | null;
  /**
   * Mirror URL for downloading managed Python installations.
   *
   * By default, managed Python installations are downloaded from [`python-build-standalone`](https://github.com/astral-sh/python-build-standalone).
   * This variable can be set to a mirror URL to use a different source for Python installations.
   * The provided URL will replace `https://github.com/astral-sh/python-build-standalone/releases/download` in, e.g., `https://github.com/astral-sh/python-build-standalone/releases/download/20240713/cpython-3.12.4%2B20240713-aarch64-apple-darwin-install_only.tar.gz`.
   *
   * Distributions can be read from a local directory by using the `file://` URL scheme.
   */
  'python-install-mirror'?: string | null;
  /**
   * Whether to prefer using Python installations that are already present on the system, or
   * those that are downloaded and installed by uv.
   */
  'python-preference'?: PythonPreference | null;
  /**
   * Reinstall all packages, regardless of whether they're already installed. Implies `refresh`.
   */
  reinstall?: boolean | null;
  /**
   * Reinstall a specific package, regardless of whether it's already installed. Implies
   * `refresh-package`.
   */
  'reinstall-package'?: PackageName[] | null;
  /**
   * A list of environment markers, e.g., `sys_platform == 'darwin'.
   */
  'required-environments'?: string[] | null;
  /**
   * Enforce a requirement on the version of uv.
   *
   * If the version of uv does not meet the requirement at runtime, uv will exit
   * with an error.
   *
   * Accepts a [PEP 440](https://peps.python.org/pep-0440/) specifier, like `==0.5.0` or `>=0.5.0`.
   */
  'required-version'?: RequiredVersion | null;
  /**
   * The strategy to use when selecting between the different compatible versions for a given
   * package requirement.
   *
   * By default, uv will use the latest compatible version of each package (`highest`).
   */
  resolution?: ResolutionMode | null;
  /**
   * The sources to use when resolving dependencies.
   *
   * `tool.uv.sources` enriches the dependency metadata with additional sources, incorporated
   * during development. A dependency source can be a Git repository, a URL, a local path, or an
   * alternative registry.
   *
   * See [Dependencies](https://docs.astral.sh/uv/concepts/projects/dependencies/) for more.
   */
  sources?: ToolUvSources | null;
  /**
   * The backend to use when fetching packages in the PyTorch ecosystem.
   *
   * When set, uv will ignore the configured index URLs for packages in the PyTorch ecosystem,
   * and will instead use the defined backend.
   *
   * For example, when set to `cpu`, uv will use the CPU-only PyTorch index; when set to `cu126`,
   * uv will use the PyTorch index for CUDA 12.6.
   *
   * The `auto` mode will attempt to detect the appropriate PyTorch index based on the currently
   * installed CUDA drivers.
   *
   * This setting is only respected by `uv pip` commands.
   *
   * This option is in preview and may change in any future release.
   */
  'torch-backend'?: TorchMode | null;
  /**
   * Configure trusted publishing.
   *
   * By default, uv checks for trusted publishing when running in a supported environment, but
   * ignores it if it isn't configured.
   *
   * uv's supported environments for trusted publishing include GitHub Actions and GitLab CI/CD.
   */
  'trusted-publishing'?: TrustedPublishing | null;
  /**
   * Allow package upgrades, ignoring pinned versions in any existing output file.
   */
  upgrade?: boolean | null;
  /**
   * Allow upgrades for a specific package, ignoring pinned versions in any existing output
   * file.
   *
   * Accepts both standalone package names (`ruff`) and version specifiers (`ruff<0.5.0`).
   */
  'upgrade-package'?: Requirement[] | null;
  /**
   * The workspace definition for the project, if any.
   */
  workspace?: ToolUvWorkspace | null;
}
/**
 * Settings for the uv build backend (`uv_build`).
 *
 * Note that those settings only apply when using the `uv_build` backend, other build backends
 * (such as hatchling) have their own configuration.
 *
 * All options that accept globs use the portable glob patterns from
 * [PEP 639](https://packaging.python.org/en/latest/specifications/glob-patterns/).
 */
export interface BuildBackendSettings {
  /**
   * Data includes for wheels.
   *
   * Each entry is a directory, whose contents are copied to the matching directory in the wheel
   * in `<name>-<version>.data/(purelib|platlib|headers|scripts|data)`. Upon installation, this
   * data is moved to its target location, as defined by
   * <https://docs.python.org/3.12/library/sysconfig.html#installation-paths>. Usually, small
   * data files are included by placing them in the Python module instead of using data includes.
   *
   * - `scripts`: Installed to the directory for executables, `<venv>/bin` on Unix or
   *   `<venv>\Scripts` on Windows. This directory is added to `PATH` when the virtual
   *   environment  is activated or when using `uv run`, so this data type can be used to install
   *   additional binaries. Consider using `project.scripts` instead for Python entrypoints.
   * - `data`: Installed over the virtualenv environment root.
   *
   *     Warning: This may override existing files!
   *
   * - `headers`: Installed to the include directory. Compilers building Python packages
   *   with this package as build requirement use the include directory to find additional header
   *   files.
   * - `purelib` and `platlib`: Installed to the `site-packages` directory. It is not recommended
   *   to use these two options.
   */
  data?: WheelDataIncludes;
  /**
   * If set to `false`, the default excludes aren't applied.
   *
   * Default excludes: `__pycache__`, `*.pyc`, and `*.pyo`.
   */
  'default-excludes'?: boolean;
  /**
   * The name of the module directory inside `module-root`.
   *
   * The default module name is the package name with dots and dashes replaced by underscores.
   *
   * Package names need to be valid Python identifiers, and the directory needs to contain a
   * `__init__.py`. An exception are stubs packages, whose name ends with `-stubs`, with the stem
   * being the module name, and which contain a `__init__.pyi` file.
   *
   * For namespace packages with a single module, the path can be dotted, e.g., `foo.bar` or
   * `foo-stubs.bar`.
   *
   * For namespace packages with multiple modules, the path can be a list, e.g.,
   * `["foo", "bar"]`. We recommend using a single module per package, splitting multiple
   * packages into a workspace.
   *
   * Note that using this option runs the risk of creating two packages with different names but
   * the same module names. Installing such packages together leads to unspecified behavior,
   * often with corrupted files or directory trees.
   */
  'module-name'?: ModuleName | null;
  /**
   * The directory that contains the module directory.
   *
   * Common values are `src` (src layout, the default) or an empty path (flat layout).
   */
  'module-root'?: string;
  /**
   * Build a namespace package.
   *
   * Build a PEP 420 implicit namespace package, allowing more than one root `__init__.py`.
   *
   * Use this option when the namespace package contains multiple root `__init__.py`, for
   * namespace packages with a single root `__init__.py` use a dotted `module-name` instead.
   *
   * To compare dotted `module-name` and `namespace = true`, the first example below can be
   * expressed with `module-name = "cloud.database"`: There is one root `__init__.py` `database`.
   * In the second example, we have three roots (`cloud.database`, `cloud.database_pro`,
   * `billing.modules.database_pro`), so `namespace = true` is required.
   *
   * ```text
   * src
   * └── cloud
   *     └── database
   *         ├── __init__.py
   *         ├── query_builder
   *         │   └── __init__.py
   *         └── sql
   *             ├── parser.py
   *             └── __init__.py
   * ```
   *
   * ```text
   * src
   * ├── cloud
   * │   ├── database
   * │   │   ├── __init__.py
   * │   │   ├── query_builder
   * │   │   │   └── __init__.py
   * │   │   └── sql
   * │   │       ├── __init__.py
   * │   │       └── parser.py
   * │   └── database_pro
   * │       ├── __init__.py
   * │       └── query_builder.py
   * └── billing
   *     └── modules
   *         └── database_pro
   *             ├── __init__.py
   *             └── sql.py
   * ```
   */
  namespace?: boolean;
  /**
   * Glob expressions which files and directories to exclude from the source distribution.
   *
   * These exclusions are also applied to wheels to ensure that a wheel built from a source tree
   * is consistent with a wheel built from a source distribution.
   */
  'source-exclude'?: string[];
  /**
   * Glob expressions which files and directories to additionally include in the source
   * distribution.
   *
   * `pyproject.toml` and the contents of the module directory are always included.
   */
  'source-include'?: string[];
  /**
   * Glob expressions which files and directories to exclude from the wheel.
   */
  'wheel-exclude'?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Data includes for wheels.
 *
 * See `BuildBackendSettings::data`.
 */
export interface WheelDataIncludes {
  data?: string | null;
  headers?: string | null;
  platlib?: string | null;
  purelib?: string | null;
  scripts?: string | null;
}
export interface GitSet {
  commit?: boolean | null;
  tags?: boolean | null;
}
/**
 * Settings to pass to a PEP 517 build backend, structured as a map from (string) key to string or
 * list of strings.
 *
 * See: <https://peps.python.org/pep-0517/#config-settings>
 */
export interface ConfigSettings {
  [k: string]: ConfigSettingValue | undefined;
}
/**
 * Settings to pass to PEP 517 build backends on a per-package basis.
 */
export interface PackageConfigSettings {
  [k: string]: ConfigSettings;
}
/**
 * A single item in a conflicting set.
 *
 * Each item is a pair of an (optional) package and a corresponding extra or group name for that
 * package.
 */
export interface SchemaConflictItem {
  extra?: ExtraName | null;
  group?: GroupName | null;
  package?: PackageName | null;
}
export interface ToolUvDependencyGroups {
  [k: string]: DependencyGroupSettings | undefined;
}
export interface DependencyGroupSettings {
  /**
   * Version of python to require when installing this group
   */
  'requires-python'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * A subset of the Python Package Metadata 2.3 standard as specified in
 * <https://packaging.python.org/specifications/core-metadata/>.
 */
export interface StaticMetadata {
  name: PackageName;
  'provides-extra'?: ExtraName[];
  'requires-dist'?: Requirement[];
  /**
   * PEP 508-style Python requirement, e.g., `>=3.10`
   */
  'requires-python'?: string | null;
  /**
   * PEP 440-style package version, e.g., `1.2.3`
   */
  version?: string | null;
}
export interface ExcludeNewerPackage {
  [k: string]: PackageExcludeNewer | undefined;
}
export interface ExtraBuildDependencies {
  [k: string]: ExtraBuildDependency[] | undefined;
}
/**
 * Extra environment variables to set during builds, on a per-package basis.
 */
export interface ExtraBuildVariables {
  [k: string]:
    | {
        [k: string]: string | undefined;
      }
    | undefined;
}
export interface Index {
  /**
   * When uv should use authentication for requests to the index.
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "my-index"
   * url = "https://<omitted>/simple"
   * authenticate = "always"
   * ```
   */
  authenticate?: AuthPolicy & string;
  /**
   * Cache control configuration for this index.
   *
   * When set, these headers will override the server's cache control headers
   * for both package metadata requests and artifact downloads.
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "my-index"
   * url = "https://<omitted>/simple"
   * cache-control = { api = "max-age=600", files = "max-age=3600" }
   * ```
   */
  'cache-control'?: IndexCacheControl | null;
  /**
   * Mark the index as the default index.
   *
   * By default, uv uses PyPI as the default index, such that even if additional indexes are
   * defined via `[[tool.uv.index]]`, PyPI will still be used as a fallback for packages that
   * aren't found elsewhere. To disable the PyPI default, set `default = true` on at least one
   * other index.
   *
   * Marking an index as default will move it to the front of the list of indexes, such that it
   * is given the highest priority when resolving packages.
   */
  default?: boolean;
  /**
   * Mark the index as explicit.
   *
   * Explicit indexes will _only_ be used when explicitly requested via a `[tool.uv.sources]`
   * definition, as in:
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "pytorch"
   * url = "https://download.pytorch.org/whl/cu121"
   * explicit = true
   *
   * [tool.uv.sources]
   * torch = { index = "pytorch" }
   * ```
   */
  explicit?: boolean;
  /**
   * The format used by the index.
   *
   * Indexes can either be PEP 503-compliant (i.e., a PyPI-style registry implementing the Simple
   * API) or structured as a flat list of distributions (e.g., `--find-links`). In both cases,
   * indexes can point to either local or remote resources.
   */
  format?: IndexFormat & string;
  /**
   * Status codes that uv should ignore when deciding whether
   * to continue searching in the next index after a failure.
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "my-index"
   * url = "https://<omitted>/simple"
   * ignore-error-codes = [401, 403]
   * ```
   */
  'ignore-error-codes'?: StatusCode[] | null;
  /**
   * The name of the index.
   *
   * Index names can be used to reference indexes elsewhere in the configuration. For example,
   * you can pin a package to a specific index by name:
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "pytorch"
   * url = "https://download.pytorch.org/whl/cu121"
   *
   * [tool.uv.sources]
   * torch = { index = "pytorch" }
   * ```
   */
  name?: IndexName | null;
  /**
   * The URL of the upload endpoint.
   *
   * When using `uv publish --index <name>`, this URL is used for publishing.
   *
   * A configuration for the default index PyPI would look as follows:
   *
   * ```toml
   * [[tool.uv.index]]
   * name = "pypi"
   * url = "https://pypi.org/simple"
   * publish-url = "https://upload.pypi.org/legacy/"
   * ```
   */
  'publish-url'?: DisplaySafeUrl | null;
  /**
   * The URL of the index.
   *
   * Expects to receive a URL (e.g., `https://pypi.org/simple`) or a local path.
   */
  url: IndexUrl;
  [k: string]: unknown | undefined;
}
/**
 * Cache control configuration for an index.
 */
export interface IndexCacheControl {
  /**
   * Cache control header for Simple API requests.
   */
  api?: string | null;
  /**
   * Cache control header for file downloads.
   */
  files?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Settings that are specific to the `uv pip` command-line interface.
 *
 * These values will be ignored when running commands outside the `uv pip` namespace (e.g.,
 * `uv lock`, `uvx`).
 */
export interface PipOptions {
  /**
   * Include all optional dependencies.
   *
   * Only applies to `pyproject.toml`, `setup.py`, and `setup.cfg` sources.
   */
  'all-extras'?: boolean | null;
  /**
   * Allow `uv pip sync` with empty requirements, which will clear the environment of all
   * packages.
   */
  'allow-empty-requirements'?: boolean | null;
  /**
   * The style of the annotation comments included in the output file, used to indicate the
   * source of each package.
   */
  'annotation-style'?: AnnotationStyle | null;
  /**
   * Allow uv to modify an `EXTERNALLY-MANAGED` Python installation.
   *
   * WARNING: `--break-system-packages` is intended for use in continuous integration (CI)
   * environments, when installing into Python installations that are managed by an external
   * package manager, like `apt`. It should be used with caution, as such Python installations
   * explicitly recommend against modifications by other package managers (like uv or pip).
   */
  'break-system-packages'?: boolean | null;
  /**
   * Compile Python files to bytecode after installation.
   *
   * By default, uv does not compile Python (`.py`) files to bytecode (`__pycache__/*.pyc`);
   * instead, compilation is performed lazily the first time a module is imported. For use-cases
   * in which start time is critical, such as CLI applications and Docker containers, this option
   * can be enabled to trade longer installation times for faster start times.
   *
   * When enabled, uv will process the entire site-packages directory (including packages that
   * are not being modified by the current operation) for consistency. Like pip, it will also
   * ignore errors.
   */
  'compile-bytecode'?: boolean | null;
  /**
   * Settings to pass to the [PEP 517](https://peps.python.org/pep-0517/) build backend,
   * specified as `KEY=VALUE` pairs.
   */
  'config-settings'?: ConfigSettings | null;
  /**
   * Settings to pass to the [PEP 517](https://peps.python.org/pep-0517/) build backend for specific packages,
   * specified as `KEY=VALUE` pairs.
   */
  'config-settings-package'?: PackageConfigSettings | null;
  /**
   * The header comment to include at the top of the output file generated by `uv pip compile`.
   *
   * Used to reflect custom build scripts and commands that wrap `uv pip compile`.
   */
  'custom-compile-command'?: string | null;
  /**
   * Pre-defined static metadata for dependencies of the project (direct or transitive). When
   * provided, enables the resolver to use the specified metadata instead of querying the
   * registry or building the relevant package from source.
   *
   * Metadata should be provided in adherence with the [Metadata 2.3](https://packaging.python.org/en/latest/specifications/core-metadata/)
   * standard, though only the following fields are respected:
   *
   * - `name`: The name of the package.
   * - (Optional) `version`: The version of the package. If omitted, the metadata will be applied
   *   to all versions of the package.
   * - (Optional) `requires-dist`: The dependencies of the package (e.g., `werkzeug>=0.14`).
   * - (Optional) `requires-python`: The Python version required by the package (e.g., `>=3.10`).
   * - (Optional) `provides-extra`: The extras provided by the package.
   */
  'dependency-metadata'?: StaticMetadata[] | null;
  /**
   * Include `--no-binary` and `--only-binary` entries in the output file generated by `uv pip compile`.
   */
  'emit-build-options'?: boolean | null;
  /**
   * Include `--find-links` entries in the output file generated by `uv pip compile`.
   */
  'emit-find-links'?: boolean | null;
  /**
   * Include comment annotations indicating the index used to resolve each package (e.g.,
   * `# from https://pypi.org/simple`).
   */
  'emit-index-annotation'?: boolean | null;
  /**
   * Include `--index-url` and `--extra-index-url` entries in the output file generated by `uv pip compile`.
   */
  'emit-index-url'?: boolean | null;
  /**
   * Whether to emit a marker string indicating the conditions under which the set of pinned
   * dependencies is valid.
   *
   * The pinned dependencies may be valid even when the marker expression is
   * false, but when the expression is true, the requirements are known to
   * be correct.
   */
  'emit-marker-expression'?: boolean | null;
  /**
   * Limit candidate packages to those that were uploaded prior to a given point in time.
   *
   * Accepts a superset of [RFC 3339](https://www.rfc-editor.org/rfc/rfc3339.html) (e.g.,
   * `2006-12-02T02:07:43Z`). A full timestamp is required to ensure that the resolver will
   * behave consistently across timezones.
   */
  'exclude-newer'?: ExcludeNewerValue | null;
  /**
   * Limit candidate packages for specific packages to those that were uploaded prior to the given date.
   *
   * Accepts package-date pairs in a dictionary format.
   */
  'exclude-newer-package'?: ExcludeNewerPackage | null;
  /**
   * Include optional dependencies from the specified extra; may be provided more than once.
   *
   * Only applies to `pyproject.toml`, `setup.py`, and `setup.cfg` sources.
   */
  extra?: ExtraName[] | null;
  /**
   * Additional build dependencies for packages.
   *
   * This allows extending the PEP 517 build environment for the project's dependencies with
   * additional packages. This is useful for packages that assume the presence of packages like
   * `pip`, and do not declare them as build dependencies.
   */
  'extra-build-dependencies'?: ExtraBuildDependencies | null;
  /**
   * Extra environment variables to set when building certain packages.
   *
   * Environment variables will be added to the environment when building the
   * specified packages.
   */
  'extra-build-variables'?: ExtraBuildVariables | null;
  /**
   * Extra URLs of package indexes to use, in addition to `--index-url`.
   *
   * Accepts either a repository compliant with [PEP 503](https://peps.python.org/pep-0503/)
   * (the simple repository API), or a local directory laid out in the same format.
   *
   * All indexes provided via this flag take priority over the index specified by
   * [`index_url`](#index-url). When multiple indexes are provided, earlier values take priority.
   *
   * To control uv's resolution strategy when multiple indexes are present, see
   * [`index_strategy`](#index-strategy).
   */
  'extra-index-url'?: IndexUrl[] | null;
  /**
   * Locations to search for candidate distributions, in addition to those found in the registry
   * indexes.
   *
   * If a path, the target must be a directory that contains packages as wheel files (`.whl`) or
   * source distributions (e.g., `.tar.gz` or `.zip`) at the top level.
   *
   * If a URL, the page must contain a flat list of links to package files adhering to the
   * formats described above.
   */
  'find-links'?: IndexUrl[] | null;
  /**
   * The strategy to use when selecting multiple versions of a given package across Python
   * versions and platforms.
   *
   * By default, uv will optimize for selecting the latest version of each package for each
   * supported Python version (`requires-python`), while minimizing the number of selected
   * versions across platforms.
   *
   * Under `fewest`, uv will minimize the number of selected versions for each package,
   * preferring older versions that are compatible with a wider range of supported Python
   * versions or platforms.
   */
  'fork-strategy'?: ForkStrategy | null;
  /**
   * Include distribution hashes in the output file.
   */
  'generate-hashes'?: boolean | null;
  /**
   * Include the following dependency groups.
   */
  group?: PipGroupName[] | null;
  /**
   * The strategy to use when resolving against multiple index URLs.
   *
   * By default, uv will stop at the first index on which a given package is available, and
   * limit resolutions to those present on that first index (`first-index`). This prevents
   * "dependency confusion" attacks, whereby an attacker can upload a malicious package under the
   * same name to an alternate index.
   */
  'index-strategy'?: IndexStrategy | null;
  /**
   * The URL of the Python package index (by default: <https://pypi.org/simple>).
   *
   * Accepts either a repository compliant with [PEP 503](https://peps.python.org/pep-0503/)
   * (the simple repository API), or a local directory laid out in the same format.
   *
   * The index provided by this setting is given lower priority than any indexes specified via
   * [`extra_index_url`](#extra-index-url).
   */
  'index-url'?: IndexUrl | null;
  /**
   * Attempt to use `keyring` for authentication for index URLs.
   *
   * At present, only `--keyring-provider subprocess` is supported, which configures uv to
   * use the `keyring` CLI to handle authentication.
   */
  'keyring-provider'?: KeyringProviderType | null;
  /**
   * The method to use when installing packages from the global cache.
   *
   * Defaults to `clone` (also known as Copy-on-Write) on macOS and Linux, and `hardlink` on
   * Windows.
   *
   * WARNING: The use of symlink link mode is discouraged, as they create tight coupling between
   * the cache and the target environment. For example, clearing the cache (`uv cache clean`)
   * will break all installed packages by way of removing the underlying source files. Use
   * symlinks with caution.
   */
  'link-mode'?: LinkMode | null;
  /**
   * Exclude comment annotations indicating the source of each package from the output file
   * generated by `uv pip compile`.
   */
  'no-annotate'?: boolean | null;
  /**
   * Don't install pre-built wheels.
   *
   * The given packages will be built and installed from source. The resolver will still use
   * pre-built wheels to extract package metadata, if available.
   *
   * Multiple packages may be provided. Disable binaries for all packages with `:all:`.
   * Clear previously specified packages with `:none:`.
   */
  'no-binary'?: PackageNameSpecifier[] | null;
  /**
   * Don't build source distributions.
   *
   * When enabled, resolving will not run arbitrary Python code. The cached wheels of
   * already-built source distributions will be reused, but operations that require building
   * distributions will exit with an error.
   *
   * Alias for `--only-binary :all:`.
   */
  'no-build'?: boolean | null;
  /**
   * Disable isolation when building source distributions.
   *
   * Assumes that build dependencies specified by [PEP 518](https://peps.python.org/pep-0518/)
   * are already installed.
   */
  'no-build-isolation'?: boolean | null;
  /**
   * Disable isolation when building source distributions for a specific package.
   *
   * Assumes that the packages' build dependencies specified by [PEP 518](https://peps.python.org/pep-0518/)
   * are already installed.
   */
  'no-build-isolation-package'?: PackageName[] | null;
  /**
   * Ignore package dependencies, instead only add those packages explicitly listed
   * on the command line to the resulting requirements file.
   */
  'no-deps'?: boolean | null;
  /**
   * Specify a package to omit from the output resolution. Its dependencies will still be
   * included in the resolution. Equivalent to pip-compile's `--unsafe-package` option.
   */
  'no-emit-package'?: PackageName[] | null;
  /**
   * Exclude the specified optional dependencies if `all-extras` is supplied.
   */
  'no-extra'?: ExtraName[] | null;
  /**
   * Exclude the comment header at the top of output file generated by `uv pip compile`.
   */
  'no-header'?: boolean | null;
  /**
   * Ignore all registry indexes (e.g., PyPI), instead relying on direct URL dependencies and
   * those provided via `--find-links`.
   */
  'no-index'?: boolean | null;
  /**
   * Ignore the `tool.uv.sources` table when resolving dependencies. Used to lock against the
   * standards-compliant, publishable package metadata, as opposed to using any local or Git
   * sources.
   */
  'no-sources'?: boolean | null;
  /**
   * Ignore `tool.uv.sources` for the specified packages.
   */
  'no-sources-package'?: PackageName[] | null;
  /**
   * Include extras in the output file.
   *
   * By default, uv strips extras, as any packages pulled in by the extras are already included
   * as dependencies in the output file directly. Further, output files generated with
   * `--no-strip-extras` cannot be used as constraints files in `install` and `sync` invocations.
   */
  'no-strip-extras'?: boolean | null;
  /**
   * Include environment markers in the output file generated by `uv pip compile`.
   *
   * By default, uv strips environment markers, as the resolution generated by `compile` is
   * only guaranteed to be correct for the target environment.
   */
  'no-strip-markers'?: boolean | null;
  /**
   * Only use pre-built wheels; don't build source distributions.
   *
   * When enabled, resolving will not run code from the given packages. The cached wheels of already-built
   * source distributions will be reused, but operations that require building distributions will
   * exit with an error.
   *
   * Multiple packages may be provided. Disable binaries for all packages with `:all:`.
   * Clear previously specified packages with `:none:`.
   */
  'only-binary'?: PackageNameSpecifier[] | null;
  /**
   * Write the requirements generated by `uv pip compile` to the given `requirements.txt` file.
   *
   * If the file already exists, the existing versions will be preferred when resolving
   * dependencies, unless `--upgrade` is also specified.
   */
  'output-file'?: string | null;
  /**
   * Install packages into `lib`, `bin`, and other top-level folders under the specified
   * directory, as if a virtual environment were present at that location.
   *
   * In general, prefer the use of `--python` to install into an alternate environment, as
   * scripts and other artifacts installed via `--prefix` will reference the installing
   * interpreter, rather than any interpreter added to the `--prefix` directory, rendering them
   * non-portable.
   */
  prefix?: string | null;
  /**
   * The strategy to use when considering pre-release versions.
   *
   * By default, uv will accept pre-releases for packages that _only_ publish pre-releases,
   * along with first-party requirements that contain an explicit pre-release marker in the
   * declared specifiers (`if-necessary-or-explicit`).
   */
  prerelease?: PrereleaseMode | null;
  /**
   * The Python interpreter into which packages should be installed.
   *
   * By default, uv installs into the virtual environment in the current working directory or
   * any parent directory. The `--python` option allows you to specify a different interpreter,
   * which is intended for use in continuous integration (CI) environments or other automated
   * workflows.
   *
   * Supported formats:
   * - `3.10` looks for an installed Python 3.10 in the registry on Windows (see
   *   `py --list-paths`), or `python3.10` on Linux and macOS.
   * - `python3.10` or `python.exe` looks for a binary with the given name in `PATH`.
   * - `/home/ferris/.local/bin/python3.10` uses the exact Python at the given path.
   */
  python?: string | null;
  /**
   * The platform for which requirements should be resolved.
   *
   * Represented as a "target triple", a string that describes the target platform in terms of
   * its CPU, vendor, and operating system name, like `x86_64-unknown-linux-gnu` or
   * `aarch64-apple-darwin`.
   */
  'python-platform'?: TargetTriple | null;
  /**
   * The minimum Python version that should be supported by the resolved requirements (e.g.,
   * `3.8` or `3.8.17`).
   *
   * If a patch version is omitted, the minimum patch version is assumed. For example, `3.8` is
   * mapped to `3.8.0`.
   */
  'python-version'?: PythonVersion | null;
  /**
   * Reinstall all packages, regardless of whether they're already installed. Implies `refresh`.
   */
  reinstall?: boolean | null;
  /**
   * Reinstall a specific package, regardless of whether it's already installed. Implies
   * `refresh-package`.
   */
  'reinstall-package'?: PackageName[] | null;
  /**
   * Require a matching hash for each requirement.
   *
   * Hash-checking mode is all or nothing. If enabled, _all_ requirements must be provided
   * with a corresponding hash or set of hashes. Additionally, if enabled, _all_ requirements
   * must either be pinned to exact versions (e.g., `==1.0.0`), or be specified via direct URL.
   *
   * Hash-checking mode introduces a number of additional constraints:
   *
   * - Git dependencies are not supported.
   * - Editable installations are not supported.
   * - Local dependencies are not supported, unless they point to a specific wheel (`.whl`) or
   *   source archive (`.zip`, `.tar.gz`), as opposed to a directory.
   */
  'require-hashes'?: boolean | null;
  /**
   * The strategy to use when selecting between the different compatible versions for a given
   * package requirement.
   *
   * By default, uv will use the latest compatible version of each package (`highest`).
   */
  resolution?: ResolutionMode | null;
  /**
   * Validate the Python environment, to detect packages with missing dependencies and other
   * issues.
   */
  strict?: boolean | null;
  /**
   * Install packages into the system Python environment.
   *
   * By default, uv installs into the virtual environment in the current working directory or
   * any parent directory. The `--system` option instructs uv to instead use the first Python
   * found in the system `PATH`.
   *
   * WARNING: `--system` is intended for use in continuous integration (CI) environments and
   * should be used with caution, as it can modify the system Python installation.
   */
  system?: boolean | null;
  /**
   * Install packages into the specified directory, rather than into the virtual or system Python
   * environment. The packages will be installed at the top-level of the directory.
   */
  target?: string | null;
  /**
   * The backend to use when fetching packages in the PyTorch ecosystem.
   *
   * When set, uv will ignore the configured index URLs for packages in the PyTorch ecosystem,
   * and will instead use the defined backend.
   *
   * For example, when set to `cpu`, uv will use the CPU-only PyTorch index; when set to `cu126`,
   * uv will use the PyTorch index for CUDA 12.6.
   *
   * The `auto` mode will attempt to detect the appropriate PyTorch index based on the currently
   * installed CUDA drivers.
   *
   * This setting is only respected by `uv pip` commands.
   *
   * This option is in preview and may change in any future release.
   */
  'torch-backend'?: TorchMode | null;
  /**
   * Perform a universal resolution, attempting to generate a single `requirements.txt` output
   * file that is compatible with all operating systems, architectures, and Python
   * implementations.
   *
   * In universal mode, the current Python version (or user-provided `--python-version`) will be
   * treated as a lower bound. For example, `--universal --python-version 3.7` would produce a
   * universal resolution for Python 3.7 and later.
   */
  universal?: boolean | null;
  /**
   * Allow package upgrades, ignoring pinned versions in any existing output file.
   */
  upgrade?: boolean | null;
  /**
   * Allow upgrades for a specific package, ignoring pinned versions in any existing output
   * file.
   *
   * Accepts both standalone package names (`ruff`) and version specifiers (`ruff<0.5.0`).
   */
  'upgrade-package'?: Requirement[] | null;
  /**
   * Validate any hashes provided in the requirements file.
   *
   * Unlike `--require-hashes`, `--verify-hashes` does not require that all requirements have
   * hashes; instead, it will limit itself to verifying the hashes of those requirements that do
   * include them.
   */
  'verify-hashes'?: boolean | null;
}
/**
 * The pip-compatible variant of a [`GroupName`].
 *
 * Either <groupname> or <path>:<groupname>.
 * If <path> is omitted it defaults to "pyproject.toml".
 */
export interface PipGroupName {
  name: GroupName;
  path?: string | null;
  [k: string]: unknown | undefined;
}
export interface ToolUvSources {
  [k: string]: Sources | undefined;
}
export interface ToolUvWorkspace {
  /**
   * Packages to exclude as workspace members. If a package matches both `members` and
   * `exclude`, it will be excluded.
   *
   * Supports both globs and explicit paths.
   *
   * For more information on the glob syntax, refer to the [`glob` documentation](https://docs.rs/glob/latest/glob/struct.Pattern.html).
   */
  exclude?: SerdePattern[] | null;
  /**
   * Packages to include as workspace members.
   *
   * Supports both globs and explicit paths.
   *
   * For more information on the glob syntax, refer to the [`glob` documentation](https://docs.rs/glob/latest/glob/struct.Pattern.html).
   */
  members?: SerdePattern[] | null;
}
