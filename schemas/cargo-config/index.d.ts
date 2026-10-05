/* eslint-disable */

export type IncludeEntry =
  | string
  | {
      path: string;
      optional?: boolean;
      [k: string]: unknown | undefined;
    };
/**
 * Command the alias expands to. A string is split on whitespace; an array is passed through verbatim (use the array form to preserve arguments containing spaces).
 */
export type AliasExpansion = string | string[];
/**
 * Value for an environment variable injected into build scripts, rustc, `cargo run`, and `cargo build`. Either a bare string or an inline table that opts into `force` (override an existing env var) or `relative` (resolve `value` relative to the config file's directory).
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#env)
 */
export type EnvEntry = LiteralValue | ExpandedValue;
/**
 * Literal string assigned to the environment variable.
 */
export type LiteralValue = string;
/**
 * String exported as the variable's value. When `relative = true`, this is interpreted as a path relative to the parent directory of the `.cargo/` directory containing this config file, and the exported value is the resolved absolute path.
 */
export type VariableValue = string;
/**
 * When `true`, override the variable even if it is already present in the parent environment. Defaults to `false` (existing values win).
 */
export type Force = boolean;
/**
 * When `true`, treat `value` as a path relative to the parent directory of the `.cargo/` directory containing this config file. Cargo resolves it to an absolute path before exporting. Defaults to `false`.
 */
export type Relative = boolean;
/**
 * Minimum TLS version to use; cargo accepts any newer version up to the platform maximum.
 */
export type MinimumTLSVersion = 'default' | 'tlsv1' | 'tlsv1.0' | 'tlsv1.1' | 'tlsv1.2' | 'tlsv1.3';
/**
 * Replacement dependency: version string or dependency table. Cargo validates source conflicts and resolves the replacement crate.
 */
export type DepSpec =
  | string
  | {
      /**
       * Semver requirement matched against the patched package.
       *
       * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html)
       */
      version?: string;
      /**
       * Filesystem path to the replacement crate. Relative paths resolve relative to the config file containing this `[patch]` section.
       *
       * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#patch)
       */
      path?: string;
      /**
       * Git repository URL providing the replacement crate.
       *
       * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#specifying-dependencies-from-git-repositories)
       */
      git?: string;
      /**
       * Git branch to use. Mutually exclusive with `tag` and `rev`.
       */
      branch?: string;
      /**
       * Git tag to use. Mutually exclusive with `branch` and `rev`.
       */
      tag?: string;
      /**
       * Git revision (commit-ish) to use. Mutually exclusive with `branch` and `tag`.
       */
      rev?: string;
      /**
       * Real package name when the patch entry's key is a rename. Lets you patch a crate while referring to it under a different name in your manifest.
       *
       * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/specifying-dependencies.html#renaming-dependencies-in-cargotoml)
       */
      package?: string;
      /**
       * Name of the registry the replacement is fetched from when using `version`. Refers to a key under `[registries]`.
       */
      registry?: string;
      /**
       * Parsed but ignored for patch selection; configure features on the dependency that uses this patch.
       */
      'default-features'?: boolean;
      /**
       * Parsed but ignored for patch selection; configure features on the dependency that uses this patch.
       */
      features?: string[];
      /**
       * Whether the dependency is optional. Rarely meaningful inside `[patch]`; included for parity with the dependency-table format.
       */
      optional?: boolean;
      /**
       * Whether the dependency is part of the public API (unstable nightly feature).
       */
      public?: boolean;
      /**
       * Internal registry index URL used by Cargo when publishing.
       */
      'registry-index'?: string;
      /**
       * UNSTABLE: Named path base; requires path-bases support.
       */
      base?: string;
      /**
       * UNSTABLE: Artifact dependency; requires -Z bindeps.
       */
      artifact?: string | string[];
      /**
       * UNSTABLE: Also use the artifact dependency as a library; requires -Z bindeps.
       */
      lib?: boolean;
      /**
       * UNSTABLE: Artifact target platform; requires -Z bindeps.
       */
      target?: string;
      /**
       * @deprecated
       * Deprecated underscore spelling of default-features.
       */
      default_features?: boolean;
      [k: string]: unknown | undefined;
    };
/**
 * Optimization level. Integers `0`-`3` set increasing optimization; `"s"` optimizes for binary size; `"z"` optimizes for size while disabling loop vectorization.
 * Defaults: `0` for `dev`/`test`, `3` for `release`/`bench`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#opt-level)
 */
export type OptLevel = number | ('s' | 'z');
/**
 * Debug information: false/0/none disables it; 1/limited includes limited information; line-tables-only and line-directives-only are distinct modes; true/2/full includes full information.
 */
export type Debug = boolean | number | ('none' | 'line-directives-only' | 'line-tables-only' | 'limited' | 'full');
/**
 * Whether and how debug information is split out of the main executable.
 * Platform defaults: `"unpacked"` on macOS, `"packed"` on Windows MSVC, `"off"` elsewhere.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#split-debuginfo)
 */
export type SplitDebuginfo = 'off' | 'packed' | 'unpacked';
/**
 * Whether to strip symbols and/or debug info from the final binary. `true` is equivalent to `"symbols"`; `false` to `"none"`.
 * Default: `"none"`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#strip)
 */
export type Strip = boolean | ('none' | 'debuginfo' | 'symbols');
/**
 * Whether `debug_assert!` and related checks are compiled in.
 * Defaults: `true` for `dev`/`test`, `false` for `release`/`bench`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#debug-assertions)
 */
export type DebugAssertions = boolean;
/**
 * Whether runtime integer overflow checks are emitted.
 * Defaults: `true` for `dev`/`test`, `false` for `release`/`bench`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#overflow-checks)
 */
export type OverflowChecks = boolean;
/**
 * Link-time optimization. `false` disables LTO with the local ThinLTO equivalent; `true`/`"fat"` performs fat LTO over the full dependency graph; `"thin"` is faster cross-crate ThinLTO; `"off"` disables LTO entirely (including local ThinLTO).
 * Default: `false`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#lto)
 */
export type Lto = boolean | ('off' | 'thin' | 'fat');
/**
 * Panic strategy: unwind or abort. immediate-abort requires unstable panic-immediate-abort support. Ignored for test/bench profiles.
 */
export type Panic = 'unwind' | 'abort' | 'immediate-abort';
/**
 * Whether incremental compilation is enabled. May be overridden by the `CARGO_INCREMENTAL` env var or `build.incremental`.
 * Defaults: `true` for `dev`/`test`, `false` for `release`/`bench`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#incremental)
 */
export type Incremental = boolean;
/**
 * Number of parallel code generation units per crate. Defaults depend on incremental compilation: 256 when enabled, 16 otherwise.
 */
export type CodegenUnits = number;
/**
 * Whether the compiler embeds an `rpath` into the final binary.
 * Default: `false`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#rpath)
 */
export type Rpath = boolean;
/**
 * Source definition. At most one source location; crates-io can use its implicit location. Other sources require a location after merging. replace-with redirects the identified source.
 */
export type Source1 = {
  /**
   * Replacement source name. The source location still identifies what is replaced.
   */
  'replace-with'?: string;
  /**
   * Path to a directory source.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#sourcenamedirectory)
   */
  directory?: string;
  /**
   * URL of a registry source.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#sourcenameregistry)
   */
  registry?: string;
  /**
   * Path to a local registry source.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#sourcenamelocal-registry)
   */
  'local-registry'?: string;
  /**
   * URL of a git repository source.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#sourcenamegit)
   */
  git?: string;
  /**
   * Git reference selector. Cargo prefers branch, then tag, then rev when multiple are present; otherwise uses the default branch.
   */
  branch?: string;
  /**
   * Git reference selector. Cargo prefers branch, then tag, then rev when multiple are present; otherwise uses the default branch.
   */
  tag?: string;
  /**
   * Git reference selector. Cargo prefers branch, then tag, then rev when multiple are present; otherwise uses the default branch.
   */
  rev?: string;
  [k: string]: unknown | undefined;
};
/**
 * Libraries to link, equivalent to passing `-l <lib>` to `rustc`. Order is preserved and may affect symbol resolution.
 */
export type RustcLinkLib = string[];
/**
 * Library search paths, equivalent to passing `-L <path>` to `rustc`. Searched in the listed order.
 */
export type RustcLinkSearch = string[];
/**
 * Extra `rustc` flags. Whitespace-separated string; only `-l` and `-L` flags are accepted.
 */
export type RustcFlags = string;
/**
 * Custom `--cfg` flags enabled while compiling dependents of this links library. Order is preserved.
 */
export type RustcCfg = string[];
/**
 * Extra link args appended when building a `cdylib` that depends on this links library. Order is preserved (passed to the linker positionally).
 */
export type RustcCdylibLinkArg = string[];

/**
 * Configuration for Cargo, the Rust package manager and build tool
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html)
 */
export interface CargoConfiguration {
  /**
   * Additional Cargo configuration files to include. Paths are relative to the including configuration file and must end with .toml.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#include)
   */
  include?: IncludeEntry[];
  /**
   * Local package paths used as dependency overrides.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#paths)
   */
  paths?: string[];
  alias?: Alias;
  build?: Build;
  cache?: Cache;
  'cargo-new'?: CargoNew;
  'credential-alias'?: CredentialAlias;
  doc?: Doc;
  env?: Env;
  'future-incompat-report'?: FutureIncompatReport;
  http?: Http;
  install?: Install;
  net?: Net;
  patch?: Patch;
  profile?: Profile;
  registries?: Registries;
  registry?: Registry;
  resolver?: Resolver;
  source?: Source;
  target?: Target;
  term?: Term;
  /**
   * UNSTABLE: Apply target settings to host builds; requires -Z target-applies-to-host.
   */
  'target-applies-to-host'?: boolean;
  /**
   * UNSTABLE: Named path bases; requires path-bases support.
   */
  'path-bases'?: {
    [k: string]: string | undefined;
  };
  /**
   * UNSTABLE: Publish settings; timeout requires -Z publish-timeout.
   */
  publish?: {
    timeout?: number;
    [k: string]: unknown | undefined;
  };
  host?: HostConfig;
  /**
   * Nightly feature switches. Stable Cargo does not enable these. Pinned to cc5596f058e623d22be718adf541a9bd766d9417
   */
  unstable?: {
    /**
     * UNSTABLE: allow-features. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'allow-features'?: string[];
    /**
     * UNSTABLE: embed-metadata. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'embed-metadata'?: boolean;
    /**
     * UNSTABLE: print-im-a-teapot. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'print-im-a-teapot'?: boolean;
    /**
     * UNSTABLE: advanced-env. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'advanced-env'?: boolean;
    /**
     * UNSTABLE: any-build-script-metadata. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'any-build-script-metadata'?: boolean;
    /**
     * UNSTABLE: asymmetric-token. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'asymmetric-token'?: boolean;
    /**
     * UNSTABLE: avoid-dev-deps. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'avoid-dev-deps'?: boolean;
    /**
     * UNSTABLE: binary-dep-depinfo. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'binary-dep-depinfo'?: boolean;
    /**
     * UNSTABLE: bindeps. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    bindeps?: boolean;
    /**
     * UNSTABLE: build-analysis. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'build-analysis'?: boolean;
    /**
     * UNSTABLE: build-dir-new-layout. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'build-dir-new-layout'?: boolean;
    /**
     * UNSTABLE: build-std. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'build-std'?: string[];
    /**
     * UNSTABLE: build-std-features. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'build-std-features'?: string[];
    /**
     * UNSTABLE: checksum-freshness. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'checksum-freshness'?: boolean;
    /**
     * UNSTABLE: codegen-backend. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'codegen-backend'?: boolean;
    /**
     * UNSTABLE: direct-minimal-versions. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'direct-minimal-versions'?: boolean;
    /**
     * UNSTABLE: dual-proc-macros. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'dual-proc-macros'?: boolean;
    /**
     * UNSTABLE: feature-unification. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'feature-unification'?: boolean;
    /**
     * UNSTABLE: features. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    features?: string[];
    /**
     * UNSTABLE: fine-grain-locking. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'fine-grain-locking'?: boolean;
    /**
     * UNSTABLE: fix-edition. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'fix-edition'?:
      | {
          Start: '2015' | '2018' | '2021' | '2024';
        }
      | {
          End: {
            initial: '2015' | '2018' | '2021' | '2024';
            next: '2015' | '2018' | '2021' | '2024';
            [k: string]: unknown | undefined;
          };
        };
    /**
     * UNSTABLE: gc. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    gc?: boolean;
    /**
     * UNSTABLE: git. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    git?:
      | boolean
      | string
      | {
          shallow_index?: boolean;
          shallow_deps?: boolean;
          [k: string]: unknown | undefined;
        };
    /**
     * UNSTABLE: gitoxide. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    gitoxide?:
      | boolean
      | string
      | {
          fetch?: boolean;
          checkout?: boolean;
          [k: string]: unknown | undefined;
        };
    /**
     * UNSTABLE: hint-msrv. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'hint-msrv'?: boolean;
    /**
     * UNSTABLE: host-config. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'host-config'?: boolean;
    /**
     * UNSTABLE: json-target-spec. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'json-target-spec'?: boolean;
    /**
     * UNSTABLE: minimal-versions. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'minimal-versions'?: boolean;
    /**
     * UNSTABLE: msrv-policy. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'msrv-policy'?: boolean;
    /**
     * UNSTABLE: mtime-on-use. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'mtime-on-use'?: boolean;
    /**
     * UNSTABLE: next-lockfile-bump. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'next-lockfile-bump'?: boolean;
    /**
     * UNSTABLE: no-index-update. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'no-index-update'?: boolean;
    /**
     * UNSTABLE: panic-abort-tests. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'panic-abort-tests'?: boolean;
    /**
     * UNSTABLE: panic-immediate-abort. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'panic-immediate-abort'?: boolean;
    /**
     * UNSTABLE: profile-hint-mostly-unused. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'profile-hint-mostly-unused'?: boolean;
    /**
     * UNSTABLE: profile-rustflags. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'profile-rustflags'?: boolean;
    /**
     * UNSTABLE: public-dependency. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'public-dependency'?: boolean;
    /**
     * UNSTABLE: publish-timeout. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'publish-timeout'?: boolean;
    /**
     * UNSTABLE: root-dir. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'root-dir'?: string;
    /**
     * UNSTABLE: rustc-unicode. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'rustc-unicode'?: boolean;
    /**
     * UNSTABLE: rustdoc-depinfo. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'rustdoc-depinfo'?: boolean;
    /**
     * UNSTABLE: rustdoc-map. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'rustdoc-map'?: boolean;
    /**
     * UNSTABLE: rustdoc-mergeable-info. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'rustdoc-mergeable-info'?: boolean;
    /**
     * UNSTABLE: rustdoc-scrape-examples. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'rustdoc-scrape-examples'?: boolean;
    /**
     * UNSTABLE: sbom. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    sbom?: boolean;
    /**
     * UNSTABLE: script. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    script?: boolean;
    /**
     * UNSTABLE: section-timings. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'section-timings'?: boolean;
    /**
     * UNSTABLE: separate-nightlies. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'separate-nightlies'?: boolean;
    /**
     * UNSTABLE: skip-rustdoc-fingerprint. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'skip-rustdoc-fingerprint'?: boolean;
    /**
     * UNSTABLE: target-applies-to-host. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'target-applies-to-host'?: boolean;
    /**
     * UNSTABLE: trim-paths. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'trim-paths'?: boolean;
    /**
     * UNSTABLE: unstable-options. See
     *
     * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/features.rs)
     */
    'unstable-options'?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Cargo command aliases. Each key is a subcommand name; the value is the command to run, either a single string (split on whitespace) or an array of arguments. Aliases are recursive and may not redefine existing built-in Cargo commands. Per-alias values can also be set via the `CARGO_ALIAS_<name>` environment variable.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#alias)
 */
export interface Alias {
  [k: string]: AliasExpansion | undefined;
}
/**
 * Build-time operations and compiler settings.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#build)
 */
export interface Build {
  /**
   * Adjust the effective level of lint warnings for local packages. MSRV: respected as of Rust 1.97.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildwarnings)
   */
  warnings?: 'warn' | 'allow' | 'deny';
  /**
   * Maximum number of compiler processes to run in parallel. Negative values are relative to the number of logical CPUs. The string "default" resets to Cargo defaults. Defaults to the number of logical CPUs.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildjobs)
   */
  jobs?: number | 'default';
  /**
   * Executable to use for rustc.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildrustc)
   */
  rustc?: string;
  /**
   * Wrapper executable to run instead of rustc. The first argument passed to the wrapper is the path to the actual rustc executable.
   * https://doc.rust-lang.org/cargo/reference/config.html#buildrustc-wrapper An empty string disables the wrapper.
   */
  'rustc-wrapper'?: string;
  /**
   * Wrapper executable to run instead of rustc for workspace members only. If both rustc-wrapper and rustc-workspace-wrapper are set, invocations are nested: $RUSTC_WRAPPER $RUSTC_WORKSPACE_WRAPPER $RUSTC.
   * https://doc.rust-lang.org/cargo/reference/config.html#buildrustc-workspace-wrapper An empty string disables the wrapper.
   */
  'rustc-workspace-wrapper'?: string;
  /**
   * Executable to use for rustdoc.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildrustdoc)
   */
  rustdoc?: string;
  /**
   * Default target platform triple, custom target spec path, "host-tuple", or list of targets. Defaults to the host platform when unset.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildtarget)
   */
  target?: string | string[];
  /**
   * Directory where all compiler output is placed. Defaults to a directory named `target` at the workspace root.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildtarget-dir)
   */
  'target-dir'?: string;
  /**
   * Directory where intermediate build artifacts are stored. Defaults to the value of `build.target-dir`. Supports path templating with `{workspace-root}`, `{cargo-cache-home}`, and `{workspace-path-hash}`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildbuild-dir)
   */
  'build-dir'?: string;
  /**
   * Extra command-line flags passed to rustc. May be an array of strings or a space-separated string.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildrustflags)
   */
  rustflags?: string | string[];
  /**
   * Extra command-line flags passed to rustdoc. May be an array of strings or a space-separated string.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildrustdocflags)
   */
  rustdocflags?: string | string[];
  /**
   * Whether to enable incremental compilation. When unset, the value from the active profile is used; when set, this overrides every profile.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildincremental)
   */
  incremental?: boolean;
  /**
   * Config-relative path prefix stripped from dep-info file paths, used to convert absolute paths to relative paths for downstream tools.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#builddep-info-basedir)
   */
  'dep-info-basedir'?: string;
  /**
   * @deprecated
   * DEPRECATED. This option is unused. Cargo always has pipelining enabled.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#buildpipelining)
   */
  pipelining?: boolean;
  /**
   * UNSTABLE: Copy final artifacts to this directory; requires -Z unstable-options.
   */
  'artifact-dir'?: string;
  /**
   * UNSTABLE: Generate SBOM precursor files; requires -Z sbom.
   */
  sbom?: boolean;
  /**
   * UNSTABLE: Freshness comparison method; requires -Z checksum-freshness.
   */
  fingerprint?: 'mtime' | 'content';
  /**
   * UNSTABLE: Persist build metrics; requires -Z build-analysis.
   */
  analysis?: {
    enabled: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Settings for Cargo caches.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cache)
 */
export interface Cache {
  /**
   * How often Cargo checks whether unused global cache files should be deleted. Accepts "never", "always", or an integer followed by "seconds", "minutes", "hours", "days", "weeks", or "months" (e.g. "1 day", "2 weeks").
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cacheauto-clean-frequency)
   */
  'auto-clean-frequency'?: string;
  /**
   * UNSTABLE: Global cache retention; requires -Z gc.
   */
  'global-clean'?: {
    'max-src-age'?: string;
    'max-crate-age'?: string;
    'max-index-age'?: string;
    'max-git-co-age'?: string;
    'max-git-db-age'?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Defaults for cargo new.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cargo-new)
 */
export interface CargoNew {
  /**
   * @deprecated
   * DEPRECATED. This option is unused.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cargo-newname)
   */
  name?: string;
  /**
   * @deprecated
   * DEPRECATED. This option is unused.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cargo-newemail)
   */
  email?: string;
  /**
   * Source control system used when initializing a new repository.
   * Defaults to `git`, or `none` when run inside an existing VCS repository. Overridable via `cargo new --vcs`.
   * Environment: `CARGO_CARGO_NEW_VCS`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#cargo-newvcs)
   */
  vcs?: 'git' | 'hg' | 'pijul' | 'fossil' | 'none';
  [k: string]: unknown | undefined;
}
/**
 * Credential provider aliases.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#credential-alias)
 */
export interface CredentialAlias {
  /**
   * Credential provider command for this alias: an executable path with optional arguments. If given as a string, it is split on spaces into path and arguments. Reference the alias name from `registry.global-credential-providers` or `registries.<NAME>.credential-provider`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#credential-alias)
   */
  [k: string]: string | string[] | undefined;
}
/**
 * Options for cargo doc.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#doc)
 */
export interface Doc {
  /**
   * Browser command used by cargo doc --open, overriding the BROWSER environment variable. Either a single program path or an array of [program, ...args].
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#docbrowser)
   */
  browser?: string | string[];
  /**
   * UNSTABLE: External rustdoc links; requires -Z rustdoc-map.
   */
  'extern-map'?: {
    std?: string;
    registries?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Environment variables set for build scripts, rustc invocations, cargo run, and cargo build.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#env)
 */
export interface Env {
  [k: string]: EnvEntry | undefined;
}
/**
 * Inline table form. Required: `value`. Optional flags: `force`, `relative`.
 */
export interface ExpandedValue {
  value: VariableValue;
  force?: Force;
  relative?: Relative;
}
/**
 * Settings for future incompatibility reports.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#future-incompat-report)
 */
export interface FutureIncompatReport {
  /**
   * How often Cargo displays future incompatibility report notifications.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#future-incompat-reportfrequency)
   */
  frequency?: 'always' | 'never';
  [k: string]: unknown | undefined;
}
/**
 * HTTP behavior for fetching crates and accessing remote git repositories.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#http)
 */
export interface Http {
  /**
   * Enable HTTP debugging. Combine with `CARGO_LOG=network=debug` (or `network=trace`) to see request details. Logs may contain authentication tokens, do not share publicly.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpdebug)
   */
  debug?: boolean;
  /**
   * HTTP and HTTPS proxy in libcurl format `[protocol://]host[:port]`. Falls back to git's `http.proxy`, then to `HTTPS_PROXY`/`https_proxy`/`http_proxy` env vars.
   * https://doc.rust-lang.org/cargo/reference/config.html#httpproxy An empty string disables proxy use.
   */
  proxy?: string;
  /**
   * Timeout for each HTTP request, in seconds.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httptimeout)
   */
  timeout?: number;
  /**
   * Path to a Certificate Authority (CA) bundle file used to verify TLS certificates. If unset, Cargo uses the system trust store.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpcainfo)
   */
  cainfo?: string;
  /**
   * Path to a Certificate Authority (CA) bundle file used to verify proxy TLS certificates. Falls back to `http.cainfo` if unset.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpproxy-cainfo)
   */
  'proxy-cainfo'?: string;
  /**
   * Whether TLS certificate revocation checks are performed. Only works on Windows. Default: `true` on Windows, `false` elsewhere.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpcheck-revoke)
   */
  'check-revoke'?: boolean;
  /**
   * Minimum TLS version, or a table with `min`/`max` TLS version bounds. Cargo's default range is `min = "tlsv1.0"`, `max` = newest supported (typically `tlsv1.3`).
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpssl-version)
   */
  'ssl-version'?: MinimumTLSVersion | TLSVersionRange;
  /**
   * Average transfer speed threshold, in bytes per second. If the transfer rate stays below this for `http.timeout` seconds, Cargo aborts and retries.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httplow-speed-limit)
   */
  'low-speed-limit'?: number;
  /**
   * Whether Cargo attempts to use HTTP/2 with multiplexing. If `false`, falls back to HTTP/1.1 without pipelining.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpmultiplexing)
   */
  multiplexing?: boolean;
  /**
   * Custom HTTP user-agent header. Default is a string including Cargo's version.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#httpuser-agent)
   */
  'user-agent'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Explicit minimum/maximum TLS version bounds.
 */
export interface TLSVersionRange {
  /**
   * Minimum TLS version to negotiate.
   */
  min?: 'default' | 'tlsv1' | 'tlsv1.0' | 'tlsv1.1' | 'tlsv1.2' | 'tlsv1.3';
  /**
   * Maximum TLS version to negotiate.
   */
  max?: 'default' | 'tlsv1' | 'tlsv1.0' | 'tlsv1.1' | 'tlsv1.2' | 'tlsv1.3';
  [k: string]: unknown | undefined;
}
/**
 * Defaults for cargo install.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#install)
 */
export interface Install {
  /**
   * Root directory for installed executables. Executables go into a `bin` directory underneath the root, alongside tracking files `.crates.toml` and `.crates2.json`. Defaults to Cargo's home directory (typically `~/.cargo`). Overridable with `--root` or `CARGO_INSTALL_ROOT`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#installroot)
   */
  root?: string;
  [k: string]: unknown | undefined;
}
/**
 * Networking configuration.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#net)
 */
export interface Net {
  /**
   * Number of times to retry possibly spurious network errors.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#netretry)
   */
  retry?: number;
  /**
   * Use the git executable for fetching registry indexes and git dependencies.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#netgit-fetch-with-cli)
   */
  'git-fetch-with-cli'?: boolean;
  /**
   * Avoid accessing the network and use locally cached data where possible.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#netoffline)
   */
  offline?: boolean;
  /**
   * SSH connection settings.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#netssh)
   */
  ssh?: {
    /**
     * SSH host keys accepted by Cargo.
     *
     * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#netsshknown-hosts)
     */
    'known-hosts'?: string[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Dependency patch overrides. Outer key is the registry name being patched (typically `crates-io`, or a name from `[registries]`); inner key is the package name being replaced; innermost table is the replacement dependency specification, using the same format as Cargo.toml `[patch]`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#patch)
 */
export interface Patch {
  /**
   * Patches keyed by registry name. The conventional key is `crates-io`; user-defined registry names from `[registries]` are also valid.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/overriding-dependencies.html#the-patch-section)
   */
  [k: string]:
    | {
        [k: string]: DepSpec | undefined;
      }
    | undefined;
}
/**
 * Profile configuration overlays workspace/manifest profiles. Custom profiles require inherits after merging, but a configuration overlay may omit it.
 *
 * [Cargo source](https://github.com/rust-lang/cargo/blob/cc5596f058e623d22be718adf541a9bd766d9417/src/workspace/profiles.rs)
 */
export interface Profile {
  dev?: BuiltinProfile;
  release?: BuiltinProfile;
  test?: BuiltinProfile;
  bench?: BuiltinProfile;
  [k: string]: CustomProfile | BuiltinProfile | BuiltinProfile | BuiltinProfile | BuiltinProfile | undefined;
}
/**
 * Built-in `dev` profile (used by `cargo build` and `cargo run`).
 * Defaults: `opt-level = 0`, `debug = true`, `debug-assertions = true`, `overflow-checks = true`, `lto = false`, `panic = "unwind"`, `incremental = true`, `codegen-units = 256`, `rpath = false`.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#dev)
 */
export interface BuiltinProfile {
  'opt-level'?: OptLevel;
  debug?: Debug;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  lto?: Lto;
  panic?: Panic;
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  rpath?: Rpath;
  'build-override'?: BuildOverride;
  package?: PackageOverrides;
  /**
   * UNSTABLE: Extra compiler flags; requires -Z profile-rustflags.
   */
  rustflags?: string[];
  /**
   * UNSTABLE: Compiler codegen backend; requires -Z codegen-backend.
   */
  'codegen-backend'?: string;
  /**
   * UNSTABLE: Trim filesystem paths; requires -Z trim-paths.
   */
  'trim-paths'?: 'none' | 'object' | 'all';
  /**
   * UNSTABLE: Mark crates mostly unused; requires -Z profile-hint-mostly-unused.
   */
  'hint-mostly-unused'?: boolean;
  /**
   * Removed: directory names follow the profile name.
   */
  'dir-name'?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Override profile settings for build scripts, proc-macros, and their dependencies. Accepts the same keys as a normal profile (excluding nested `package` and `build-override`).
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#overrides)
 */
export interface BuildOverride {
  'opt-level'?: OptLevel;
  debug?: Debug;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  /**
   * Not permitted in profile overrides.
   */
  lto?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  panic?: {
    [k: string]: unknown | undefined;
  };
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  /**
   * Not permitted in profile overrides.
   */
  rpath?: {
    [k: string]: unknown | undefined;
  };
  /**
   * UNSTABLE: Extra compiler flags; requires -Z profile-rustflags.
   */
  rustflags?: string[];
  /**
   * UNSTABLE: Compiler codegen backend; requires -Z codegen-backend.
   */
  'codegen-backend'?: string;
  /**
   * UNSTABLE: Trim filesystem paths; requires -Z trim-paths.
   */
  'trim-paths'?: 'none' | 'object' | 'all';
  /**
   * UNSTABLE: Mark crates mostly unused; requires -Z profile-hint-mostly-unused.
   */
  'hint-mostly-unused'?: boolean;
  /**
   * Not permitted in profile overrides.
   */
  package?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  'build-override'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Removed: directory names follow the profile name.
   */
  'dir-name'?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Per-package profile overrides. Each key is a package name (or `"*"` for all dependencies, or a [`PackageId` spec](https://doc.rust-lang.org/cargo/reference/pkgid-spec.html) like `"serde@1.0.0"`).
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#overrides)
 */
export interface PackageOverrides {
  [k: string]: ProfilePackageSettings | undefined;
}
/**
 * Per-package profile override. Cargo does not support `panic`, `lto`, or `rpath` here, and nested `build-override`/`package` are not allowed.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#overrides)
 */
export interface ProfilePackageSettings {
  'opt-level'?: OptLevel;
  debug?: Debug;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  /**
   * UNSTABLE: Extra compiler flags; requires -Z profile-rustflags.
   */
  rustflags?: string[];
  /**
   * UNSTABLE: Compiler codegen backend; requires -Z codegen-backend.
   */
  'codegen-backend'?: string;
  /**
   * UNSTABLE: Trim filesystem paths; requires -Z trim-paths.
   */
  'trim-paths'?: 'none' | 'object' | 'all';
  /**
   * UNSTABLE: Mark crates mostly unused; requires -Z profile-hint-mostly-unused.
   */
  'hint-mostly-unused'?: boolean;
  /**
   * Not permitted in profile overrides.
   */
  panic?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  lto?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  rpath?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  package?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not permitted in profile overrides.
   */
  'build-override'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Removed: directory names follow the profile name.
   */
  'dir-name'?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Settings for a user-defined Cargo profile. Custom profiles must declare `inherits` naming an existing (built-in or previously-defined) profile.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#custom-profiles)
 */
export interface CustomProfile {
  /**
   * Name of the profile this one inherits from. Required for every custom profile. The four built-ins (`dev`, `release`, `test`, `bench`) are always valid; you may also inherit from another custom profile.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/profiles.html#custom-profiles)
   */
  inherits?: string;
  'opt-level'?: OptLevel;
  debug?: Debug;
  'split-debuginfo'?: SplitDebuginfo;
  strip?: Strip;
  'debug-assertions'?: DebugAssertions;
  'overflow-checks'?: OverflowChecks;
  lto?: Lto;
  panic?: Panic;
  incremental?: Incremental;
  'codegen-units'?: CodegenUnits;
  rpath?: Rpath;
  'build-override'?: BuildOverride;
  package?: PackageOverrides;
  /**
   * UNSTABLE: Extra compiler flags; requires -Z profile-rustflags.
   */
  rustflags?: string[];
  /**
   * UNSTABLE: Compiler codegen backend; requires -Z codegen-backend.
   */
  'codegen-backend'?: string;
  /**
   * UNSTABLE: Trim filesystem paths; requires -Z trim-paths.
   */
  'trim-paths'?: 'none' | 'object' | 'all';
  /**
   * UNSTABLE: Mark crates mostly unused; requires -Z profile-hint-mostly-unused.
   */
  'hint-mostly-unused'?: boolean;
  /**
   * Removed: directory names follow the profile name.
   */
  'dir-name'?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Additional registries and crates.io registry protocol settings.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registries)
 */
export interface Registries {
  'crates-io'?: CratesIoRegistryConfig;
  [k: string]: CustomRegistryConfig | CratesIoRegistryConfig | undefined;
}
/**
 * Settings for the official `crates-io` registry. Adds the `protocol` key (sparse vs. git index) on top of the shared registry properties. The default index URL is built into Cargo, so `index` is rarely set here.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriescrates-ioprotocol)
 */
export interface CratesIoRegistryConfig {
  /**
   * URL of the registry index. Rarely set under `[registries.crates-io]` because Cargo ships the canonical URL. Environment: `CARGO_REGISTRIES_CRATES_IO_INDEX`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnameindex)
   */
  index?: string;
  /**
   * Authentication token for crates.io. Normally lives in `credentials.toml`, not `config.toml`. Environment: `CARGO_REGISTRIES_CRATES_IO_TOKEN`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnametoken)
   */
  token?: string;
  /**
   * Credential provider for crates.io. If unset, falls back to `registry.global-credential-providers`. Environment: `CARGO_REGISTRIES_CRATES_IO_CREDENTIAL_PROVIDER`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnamecredential-provider)
   */
  'credential-provider'?: string | string[];
  /**
   * Protocol used to access crates.io. Only valid under `[registries.crates-io]`; user-defined registries advertise their protocol via the index URL itself (`sparse+https://...` or a git URL). Defaults to `"sparse"` since Cargo 1.70.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriescrates-ioprotocol)
   */
  protocol?: 'git' | 'sparse';
  /**
   * Minimum publish age, for example "7 days" or "0". Requires Cargo 1.100+.
   */
  'min-publish-age'?: string;
  /**
   * UNSTABLE: Asymmetric credential secret key; requires -Z asymmetric-token. Store in credentials.toml.
   */
  'secret-key'?: string;
  /**
   * UNSTABLE: Subject for asymmetric credentials; requires -Z asymmetric-token.
   */
  'secret-key-subject'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Settings for a user-defined registry (any name other than `crates-io`). `protocol` is omitted: non-crates.io registries select their protocol through the `index` URL scheme (`sparse+https://...` for sparse, plain URL for git).
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesname)
 */
export interface CustomRegistryConfig {
  /**
   * URL of the registry index. For sparse registries use `sparse+https://...`; for git registries use a plain `https://...` URL. Environment: `CARGO_REGISTRIES_<NAME>_INDEX`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnameindex)
   */
  index?: string;
  /**
   * Authentication token for the registry. Normally lives in `credentials.toml`, not `config.toml`. Environment: `CARGO_REGISTRIES_<NAME>_TOKEN`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnametoken)
   */
  token?: string;
  /**
   * Credential provider for this registry. If unset, falls back to `registry.global-credential-providers`. Environment: `CARGO_REGISTRIES_<NAME>_CREDENTIAL_PROVIDER`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registriesnamecredential-provider)
   */
  'credential-provider'?: string | string[];
  /**
   * Minimum publish age, for example "7 days" or "0". Requires Cargo 1.100+.
   */
  'min-publish-age'?: string;
  /**
   * UNSTABLE: Asymmetric credential secret key; requires -Z asymmetric-token. Store in credentials.toml.
   */
  'secret-key'?: string;
  /**
   * UNSTABLE: Subject for asymmetric credentials; requires -Z asymmetric-token.
   */
  'secret-key-subject'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Default registry and crates.io credential settings.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registry)
 */
export interface Registry {
  /**
   * REMOVED: registry.index is no longer accepted. Use registries.<name>.index or source configuration.
   */
  index?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Name of the registry (from the `registries` table) to use by default for registry commands like `cargo publish`. Can be overridden with `--registry`. Environment: `CARGO_REGISTRY_DEFAULT`.
   * https://doc.rust-lang.org/cargo/reference/config.html#registrydefault
   */
  default?: string;
  /**
   * Credential provider for crates.io. If unset, falls back to `registry.global-credential-providers`. If the value matches a key in `[credential-alias]`, the alias is used. Environment: `CARGO_REGISTRY_CREDENTIAL_PROVIDER`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registrycredential-provider)
   */
  'credential-provider'?: string | string[];
  /**
   * Authentication token for crates.io. Should normally only appear in `credentials.toml`. Can be overridden with `--token`. Environment: `CARGO_REGISTRY_TOKEN`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registrytoken)
   */
  token?: string;
  /**
   * Ordered list of global credential providers used when a registry does not configure its own. Order is significant: providers toward the END of the list have precedence. Path and arguments split on spaces; for paths/args containing spaces, define an alias in `[credential-alias]` and reference it here. Environment: `CARGO_REGISTRY_GLOBAL_CREDENTIAL_PROVIDERS`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#registryglobal-credential-providers)
   *
   * Items: Credential provider name, command string, or command with arguments.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/registry-authentication.html)
   */
  'global-credential-providers'?: (string | string[])[];
  /**
   * Minimum publish age, for example "7 days" or "0". Requires Cargo 1.100+.
   */
  'global-min-publish-age'?: string;
  /**
   * UNSTABLE: Asymmetric credential secret key; requires -Z asymmetric-token. Store in credentials.toml.
   */
  'secret-key'?: string;
  /**
   * UNSTABLE: Subject for asymmetric credentials; requires -Z asymmetric-token.
   */
  'secret-key-subject'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Dependency resolver behavior for local development.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#resolver)
 */
export interface Resolver {
  /**
   * Path to the lockfile to use when resolving dependencies. Useful with read-only source directories. The path must end with `Cargo.lock`. Requires Cargo 1.97+. Environment: `CARGO_RESOLVER_LOCKFILE_PATH`.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#resolverlockfile-path)
   */
  'lockfile-path'?: string;
  /**
   * How dependency versions with incompatible package.rust-version values are treated.
   * https://doc.rust-lang.org/cargo/reference/config.html#resolverincompatible-rust-versions Default is allow for resolver 1/2 and fallback for resolver 3.
   */
  'incompatible-rust-versions'?: 'allow' | 'fallback';
  /**
   * How to handle versions younger than the minimum publish age. Requires Cargo 1.100+.
   */
  'incompatible-publish-age'?: 'allow' | 'deny';
  /**
   * UNSTABLE: Feature unification scope; requires -Z feature-unification.
   */
  'feature-unification'?: 'package' | 'selected' | 'workspace';
  [k: string]: unknown | undefined;
}
/**
 * Named registry source definitions and source replacement.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#source)
 */
export interface Source {
  'crates-io'?: Source1;
  [k: string]: Source1 | undefined;
}
/**
 * Target-specific platform settings. Keys are target triples, cfg expressions, or custom target names.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#target)
 */
export interface Target {
  [k: string]: TargetEntry | undefined;
}
/**
 * Settings applied when building for a single target. The owning key is a target triple (e.g. `x86_64-unknown-linux-gnu`), a `cfg(...)` expression, or a custom JSON target name. Recognised properties configure the linker, runner, and rustc/rustdoc flags; any additional key is treated as a `links` library override (build script metadata).
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#target)
 */
export interface TargetEntry {
  /**
   * @deprecated
   * DEPRECATED. This option is unused.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplear)
   */
  ar?: string;
  /**
   * Linker passed to rustc for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplelinker)
   */
  linker?: string;
  /**
   * Runner command used to execute target binaries.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerunner)
   */
  runner?: string | string[];
  /**
   * Extra rustc flags for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerustflags)
   */
  rustflags?: string | string[];
  /**
   * Extra rustdoc flags for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerustdocflags)
   */
  rustdocflags?: string | string[];
  [k: string]: LinksLibraryOverride | string | string[] | undefined;
}
/**
 * Build script override for a target `links` library. When present, the build script for the named library is skipped and these values are used instead. Arbitrary keys beyond the recognised `rustc-*` set become opaque metadata exposed to dependents as `DEP_<links>_<KEY>` env vars.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplelinks)
 */
export interface LinksLibraryOverride {
  'rustc-link-lib'?: RustcLinkLib;
  'rustc-link-search'?: RustcLinkSearch;
  'rustc-flags'?: RustcFlags;
  'rustc-cfg'?: RustcCfg;
  'rustc-env'?: RustcEnv;
  'rustc-cdylib-link-arg'?: RustcCdylibLinkArg;
  /**
   * Build-script override for rustc-check-cfg.
   */
  'rustc-check-cfg'?: string[];
  /**
   * Build-script override for rustc-link-arg.
   */
  'rustc-link-arg'?: string[];
  /**
   * Build-script override for rustc-link-arg-cdylib.
   */
  'rustc-link-arg-cdylib'?: string[];
  /**
   * Build-script override for rustc-link-arg-bins.
   */
  'rustc-link-arg-bins'?: string[];
  /**
   * Build-script override for rustc-link-arg-tests.
   */
  'rustc-link-arg-tests'?: string[];
  /**
   * Build-script override for rustc-link-arg-benches.
   */
  'rustc-link-arg-benches'?: string[];
  /**
   * Build-script override for rustc-link-arg-examples.
   */
  'rustc-link-arg-examples'?: string[];
  /**
   * Not supported in build-script overrides.
   */
  warning?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not supported in build-script overrides.
   */
  'rerun-if-changed'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Not supported in build-script overrides.
   */
  'rerun-if-env-changed'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Build-script metadata value.
   */
  [k: string]:
    | string
    | RustcLinkLib
    | RustcLinkSearch
    | RustcCfg
    | RustcEnv
    | RustcCdylibLinkArg
    | string[]
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Environment variables exposed to `rustc` while compiling dependents of this links library.
 */
export interface RustcEnv {
  [k: string]: string | undefined;
}
/**
 * Terminal output and interaction settings.
 *
 * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#term)
 */
export interface Term {
  /**
   * Whether Cargo output is quiet.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termquiet)
   */
  quiet?: boolean;
  /**
   * Whether Cargo output is verbose.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termverbose)
   */
  verbose?: boolean;
  /**
   * Whether Cargo colorizes terminal output.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termcolor)
   */
  color?: 'auto' | 'always' | 'never';
  /**
   * Whether Cargo uses hyperlinks in terminal output. Auto-detected when unset.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termhyperlinks)
   */
  hyperlinks?: boolean;
  /**
   * Whether Cargo can render non-ASCII Unicode characters. Auto-detected when unset.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termunicode)
   */
  unicode?: boolean;
  /**
   * Progress bar configuration.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termprogresswhen)
   */
  progress?: {
    /**
     * Whether Cargo shows a progress bar.
     *
     * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termprogresswhen)
     */
    when?: 'auto' | 'always' | 'never';
    /**
     * Progress width in columns (non-negative). Required when when = "always".
     */
    width?: number;
    /**
     * Whether Cargo reports progress to the terminal emulator (e.g. taskbar). Auto-detected when unset.
     *
     * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#termprogressterm-integration)
     */
    'term-integration'?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * UNSTABLE: Host platform overrides; requires -Z host-config and -Z target-applies-to-host.
 */
export interface HostConfig {
  /**
   * @deprecated
   * DEPRECATED. This option is unused.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplear)
   */
  ar?: string;
  /**
   * Linker passed to rustc for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplelinker)
   */
  linker?: string;
  /**
   * Runner command used to execute target binaries.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerunner)
   */
  runner?: string | string[];
  /**
   * Extra rustc flags for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerustflags)
   */
  rustflags?: string | string[];
  /**
   * Extra rustdoc flags for this target.
   *
   * [Cargo documentation](https://doc.rust-lang.org/cargo/reference/config.html#targettriplerustdocflags)
   */
  rustdocflags?: string | string[];
  [k: string]: TargetEntry | string | string[] | undefined;
}
