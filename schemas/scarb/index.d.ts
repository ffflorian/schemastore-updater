/* eslint-disable */

/**
 * Controls function inlining behavior during compilation.
 *
 * Can be a non-negative integer (inline small functions up to the given weight)
 * or one of the predefined strategies: `"default"`, `"avoid"`.
 */
export type InliningStrategy = number | ('default' | 'avoid');
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace4 = (TomlWorkspaceDependency | (string | DetailedTomlDependency)) | undefined;
/**
 * Type representing a path for use in `Scarb.toml` where all paths are expected to be relative to
 * it.
 */
export type RelativeUtf8PathBuf = string;
export type TomlFeatureToEnable = string;
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace2 = TomlWorkspaceField | string[];
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace = TomlWorkspaceField1 | string;
/**
 * A valid Cairo package name.
 *
 * Must use only ASCII lowercase alphanumeric characters or `_`, cannot be empty,
 * cannot start with a digit, cannot be a Cairo keyword, and cannot be just `_`.
 *
 * See the full naming rules in the
 * [Scarb docs](https://docs.swmansion.com/scarb/docs/reference/manifest.html#name).
 */
export type PackageName = string;
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace3 = TomlWorkspaceField2 | (string | boolean);
export type TomlDependency = (string | DetailedTomlDependency) | undefined;
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace5 = (WorkspaceScriptDefinition | string) | undefined;
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace7 = (TomlWorkspaceTargetDefault | TomlTargetDefaults) | undefined;
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace8 = TomlWorkspaceBuildExternalContracts | string[];
/**
 * Allows inheriting keys from a workspace.
 */
export type MaybeWorkspace6 =
  | (
      | TomlWorkspaceTool
      | {
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type PathOrBool = string | boolean;
export type ScriptDefinition = string | undefined;

/**
 * This type is used to deserialize `Scarb.toml` files.
 */
export interface TomlManifest {
  /**
   * Global Cairo compiler configuration for this package or workspace profile.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#cairo>
   */
  cairo?: TomlCairo | null;
  /**
   * The `[cairo-plugin]` target describing a Cairo compiler plugin artifact.
   */
  'cairo-plugin'?: TomlTarget3 | null;
  /**
   * The `[dependencies]` table for normal build dependencies.
   *
   * Your packages can depend on other libraries from registries,
   * Git repositories, or subdirectories on your local file system.
   *  - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/specifying-dependencies.html>
   */
  dependencies?: {
    [k: string]: MaybeWorkspace4 | undefined;
  } | null;
  /**
   * The `[dev-dependencies]` table for dependencies used only in tests.
   * Development dependencies are not used when compiling a package for building, but are used for compiling tests.
   *
   * These dependencies are not propagated to other packages which depend on this package.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/specifying-dependencies.html#development-dependencies>
   */
  'dev-dependencies'?: {
    [k: string]: MaybeWorkspace4 | undefined;
  } | null;
  /**
   * The `[executable]` target describing how to build an executable entrypoint.
   *
   * The executable target defines an artifact that can be executed with `scarb execute` command.
   * This target should be used for packages that are meant to be executed rather than used as dependencies.
   *
   * Configure the entry `function`, `allow-syscalls`, and whether to emit
   * Sierra output for the executable.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/targets.html#executable-target>
   */
  executable?: TomlTarget2 | null;
  /**
   * The `[features]` table defining feature flags for conditional compilation.
   *
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/conditional-compilation.html#features>
   */
  features?: {
    [k: string]: TomlFeatureToEnable[] | undefined;
  } | null;
  /**
   * The `[lib]` target describing how to build the package library.
   *
   * The library target defines a "library" that can be used by other packages.
   * In other words, if a package does not provide a library target, it cannot be used as a dependency.
   * If not specified, the name of the library defaults to the name of the package. A package can have only one library target.
   *
   * If the manifest does not list any targets, Scarb will assume the library target with its default parameters.
   *
   * Controls output artifacts (e.g. `sierra`, `casm`) and optional
   * `name` overrides.
   *  - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/targets.html#library>
   */
  lib?: TomlTarget | null;
  /**
   * The `[package]` section with metadata about the current package.
   *
   * Required for non-workspace members. Contains fields like `name`,
   * `version`, `edition`, `publish`, `license`, etc.
   */
  package?: TomlPackage | null;
  /**
   * The `[patch.<source>]` tables to override dependency sources.
   *
   * Useful to redirect packages to local paths or forks for the resolver.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/overriding-dependencies.html#the-patch-section>
   */
  patch?: {
    [k: string]:
      | {
          [k: string]: TomlDependency | undefined;
        }
      | undefined;
  } | null;
  /**
   * The `[profile]` table defining build profiles.
   *
   * Common profiles are `dev` and `release`. Each profile can override `cairo`
   * options and `tool` settings, and may `inherit` from another profile.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/profiles.html#profiles>
   */
  profile?: {
    [k: string]: TomlProfile | undefined;
  } | null;
  /**
   * The `[scripts]` table with custom commands you can run via `scarb run <name>`.
   *
   * Script commands are simple shell snippets; in workspaces, they can be
   * marked with `{ workspace = true }` to indicate inheritance.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/scripts.html#listing-scripts>
   */
  scripts?: {
    [k: string]: MaybeWorkspace5 | undefined;
  } | null;
  /**
   * The `[[target.*]]` tables to define additional, custom-named targets.
   */
  target?: {
    [k: string]: TomlTarget4[] | undefined;
  } | null;
  /**
   * The `[target-defaults]` table to define defaults applied to targets
   * (for example, test settings) when not explicitly set on a target.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/targets.html#target-defaults>
   */
  'target-defaults'?: {
    [k: string]: MaybeWorkspace7 | undefined;
  } | null;
  /**
   * The `[[test]]` array of tables defining external test suites.
   *
   * Each table describes a test target with its own parameters. When absent,
   * Scarb may auto-detect tests under the default tests directory.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/targets.html#test-targets>
   */
  test?: TomlTarget4[] | null;
  /**
   * The `[tool]` table for third‑party tool configuration namespaces.
   *
   * Keys under `tool.<name>` are passed to external tools. Use
   * `{ workspace = true }` to opt into workspace inheritance when applicable.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#tool>
   */
  tool?: {
    [k: string]: MaybeWorkspace6 | undefined;
  } | null;
  /**
   * The `[workspace]` section defining a multi-package workspace.
   *
   * Lets you list `members`, define shared `dependencies`, `scripts`,
   * and defaults inherited by workspace members.
   */
  workspace?: TomlWorkspace | null;
  [k: string]: unknown | undefined;
}
export interface TomlCairo {
  /**
   * Add additional information about sierra functions to debug info.
   * Used by [cairo-debugger](https://github.com/software-mansion-labs/cairo-debugger).
   * This feature is unstable and is subject to change.
   */
  'add-functions-debug-info'?: boolean | null;
  /**
   * Add a mapping between sierra statement indexes and lines in cairo code
   * to debug info. A statement index maps to a vector consisting of a line which caused the
   * statement to be generated and all lines that were inlined or generated along the way.
   * Used by [cairo-coverage](https://github.com/software-mansion/cairo-coverage).
   * This feature is unstable and is subject to change.
   */
  'add-statements-code-locations-debug-info'?: boolean | null;
  /**
   * Add a mapping between sierra statement indexes and fully qualified paths of cairo functions
   * to debug info. A statement index maps to a vector consisting of a function which caused the
   * statement to be generated and all functions that were inlined or generated along the way.
   * Used by [cairo-profiler](https://github.com/software-mansion/cairo-profiler).
   * This feature is unstable and is subject to change.
   */
  'add-statements-functions-debug-info'?: boolean | null;
  /**
   * Do not exit with error on compiler warnings.
   */
  'allow-warnings'?: boolean | null;
  /**
   * Enable auto gas withdrawal and gas usage check.
   */
  'enable-gas'?: boolean | null;
  /**
   * Whether to enable incremental compilation.
   */
  incremental?: boolean | null;
  /**
   * Inlining strategy.
   * If `skip_sierra_optimizations` is set to `true`,
   * the value of this field has to be set to [`None`] or [`Some`] with [`InliningStrategy::Avoid`].
   */
  'inlining-strategy'?: InliningStrategy | null;
  /**
   * Whether to add panic backtrace handling to the generated code.
   */
  'panic-backtrace'?: boolean | null;
  /**
   * Replace all names in generated Sierra code with dummy counterparts, representing the
   * expanded information about the named items.
   *
   * For libfuncs and types that would be recursively opening their generic arguments.
   * For functions, that would be their original name in Cairo.
   * For example, while the Sierra name be `[6]`, with this flag turned on it might be:
   * - For libfuncs: `felt252_const<2>` or `unbox<Box<Box<felt252>>>`.
   * - For types: `felt252` or `Box<Box<felt252>>`.
   * - For user functions: `test::foo`.
   *
   * Defaults to `false` except for "dev" profile.
   */
  'sierra-replace-ids'?: boolean | null;
  /**
   * Disable most possible optimizations that happen during compilation.
   * Since inlining is an optimization as well, setting this field to `true` will make the cairo
   * compiler behave (in the aspect of inlining) as if the `inlining_strategy` was set
   * to [`InliningStrategy::Avoid`].
   */
  'skip-optimizations'?: boolean | null;
  /**
   * Do not generate panic handling code. This might be useful for client side proving.
   */
  'unsafe-panic'?: boolean | null;
  /**
   * Alias for `add_statements_code_locations_debug_info`.
   * If both defined, `add_statements_code_locations_debug_info` takes precedence.
   */
  'unstable-add-statements-code-locations-debug-info'?: boolean | null;
  /**
   * Alias for `add_statements_functions_debug_info`.
   * If both defined, `add_statements_functions_debug_info` takes precedence.
   */
  'unstable-add-statements-functions-debug-info'?: boolean | null;
  [k: string]: unknown | undefined;
}
export interface TomlTarget3 {
  /**
   * If `true`, mark this plugin as builtin.
   * Generally, it should not be used.
   */
  builtin?: boolean | null;
  /**
   * Override the default target name.
   */
  name?: string | null;
  /**
   * Path to the source root of this target.
   * Defaults to `src/lib.cairo`.
   */
  'source-path'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceDependency {
  features?: string[] | null;
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Detailed specification as a table, e.g. `package = { version = "<version>" }`.
 */
export interface DetailedTomlDependency {
  /**
   * Git branch to use when `git` is specified.
   */
  branch?: string | null;
  /**
   * Whether to enable this dependency's default features (defaults to `true`).
   */
  'default-features'?: boolean | null;
  /**
   * A list of features to enable for this dependency.
   */
  features?: string[] | null;
  /**
   * Git URL for the dependency source.
   */
  git?: string | null;
  /**
   * Local path to the dependency source, relative to the manifest that
   * declares it.
   */
  path?: RelativeUtf8PathBuf | null;
  /**
   * Custom registry index URL to fetch this dependency from.
   */
  registry?: string | null;
  /**
   * Specific Git revision (commit hash) to use when `git` is specified.
   */
  rev?: string | null;
  /**
   * Git tag to use when `git` is specified.
   */
  tag?: string | null;
  /**
   * A semver version requirement for the dependency.
   */
  version?: string | null;
  [k: string]: unknown | undefined;
}
export interface TomlTarget2 {
  /**
   * If true, will allow syscalls in the program.
   *
   * In general, syscalls are not allowed in executables, as they are currently not checked.
   */
  'allow-syscalls'?: boolean | null;
  /**
   * Program entrypoint.
   *
   * Executable must have exactly one entrypoint that will be used during the execution.
   * This must be a function with the `#[executable]` attribute.
   */
  function?: string | null;
  /**
   * Override the default target name.
   */
  name?: string | null;
  /**
   * Emit a compiled Sierra program for the executable function, in JSON format.
   * This may be useful, for example, for debugging or local profiling.
   */
  sierra?: boolean | null;
  /**
   * Path to the source root of this target.
   * Defaults to `src/lib.cairo`.
   */
  'source-path'?: string | null;
  [k: string]: unknown | undefined;
}
export interface TomlTarget {
  /**
   * Emit CASM assembly for the library target.
   */
  casm?: boolean | null;
  /**
   * Override the default target name.
   */
  name?: string | null;
  /**
   * Emit a compiled Sierra program for the library target, in JSON format.
   */
  sierra?: boolean | null;
  /**
   * Emit Sierra in a human-readable text form.
   */
  'sierra-text'?: boolean | null;
  /**
   * Path to the source root of this target.
   * Defaults to `src/lib.cairo`.
   */
  'source-path'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Represents the `package` section of a `Scarb.toml`.
 */
export interface TomlPackage {
  /**
   * A list of additional assets to ship with the package (packaged alongside sources).
   * Declare files that should be treated as runtime assets of the package.
   * Paths are relative to the package root and must point to files (directories are not allowed).
   * Assets must exist at build time.
   *
   * ```toml
   * [package]
   * assets = ["mypackage-oracle.wasm", "some/file.dat"]
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#assets>
   */
  assets?: string[] | null;
  /**
   * List of package authors.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#authors>
   */
  authors?: MaybeWorkspace2 | null;
  /**
   * A Cairo compiler version requirement that this package is
   * compatible with. This does not change the compiler version used by Scarb
   * but enforces compatibility (can be ignored with `--ignore-cairo-version`).
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#cairo-version>
   */
  'cairo-version'?: MaybeWorkspace | null;
  /**
   * Short description of the package.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#description>
   */
  description?: MaybeWorkspace | null;
  /**
   * URL to package documentation.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#documentation>
   */
  documentation?: MaybeWorkspace | null;
  /**
   * An optional key that affects which Cairo edition your package is compiled with.
   * The editions allow newer Cairo compiler versions to introduce opt-in features that may break existing code.
   * Setting the edition key in `[package]` will affect all targets in the package, including test suites etc.
   *
   * Most manifests have the edition field filled in automatically by scarb new with the latest available edition.
   * If the edition field is not present in Scarb.toml, then the default edition is assumed.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#edition>
   */
  edition?: MaybeWorkspace | null;
  /**
   * This field is responsible for setting experimental flags to be used on the package for the compiler.
   * ```toml
   * [package]
   * experimental-features = ["negative_impls"]
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#experimental-features>
   */
  'experimental-features'?: string[] | null;
  /**
   * Project homepage URL.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#homepage>
   */
  homepage?: MaybeWorkspace | null;
  /**
   * When packaging a package with `scarb package` command (see
   * [packaging your package](../registries/publishing.md#packaging-your-package)), all files excluded with rules from
   * `.gitignore` or `.scarbignore` files are not included in the resulting package tarball.
   * This field can be used mark files and subdirectories that should be included in the package tarball, even if those files
   * would be excluded by rules from ignore files.
   * The paths are relative to the package root and cannot point to files outside the package.
   *
   * ```toml
   * [package]
   * include = ["target/some/file.txt"]
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#include>
   */
  include?: string[] | null;
  /**
   * An array of strings that describe your package. This can help when searching for the package on a registry,
   * and it is allowed to choose any words that would help someone find this package.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#keywords>
   */
  keywords?: MaybeWorkspace2 | null;
  /**
   * The `license` field contains the name of the software license that the package is released under.
   * The `license-file` field contains the path to a file containing the text of the license (relative to this `Scarb.toml`).
   *
   * Package registries must interpret the `license` field as
   * an [SPDX 2 license expression](https://spdx.github.io/spdx-spec/v2.3/SPDX-license-expressions/).
   * The license name must be a known license from the [SPDX license list](https://spdx.org/licenses/).
   *
   * SPDX license expressions support AND and OR operators to combine multiple licenses.
   *
   * ```toml
   * [package]
   * license = "MIT OR Apache-2.0"
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#license-and-license-file>
   */
  license?: MaybeWorkspace | null;
  /**
   * Path to a license file.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#license-and-license-file>
   */
  'license-file'?: MaybeWorkspace | null;
  /**
   * The package name is a valid Cairo identifier used to refer to the package.
   * It is used when listed as a dependency in another package, and as the default name of targets.
   *
   * The name must use only ASCII lowercase alphanumeric characters or _, and cannot be empty. It also must not be a valid Cairo keyword or a wildcard pattern (_).
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#name>
   */
  name: string;
  /**
   * **UNSTABLE** This package does not depend on Cairo's `core`.
   */
  'no-core'?: boolean | null;
  /**
   * Whether the package is allowed to be published to a registry.
   * Defaults to `true`. Set to `false` to prevent publishing.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#publish>
   */
  publish?: boolean | null;
  /**
   * Re-exports direct `cairo-plugin` dependencies to all downstream packages.
   *
   * When declared, any package depending on this one will automatically inherit
   * these plugins as dependencies. Only direct dependencies with the
   * `cairo-plugin` target are eligible for re-export.
   * ```toml
   * [package]
   * re-export-cairo-plugins = ["proc_macro_package"]
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#re-export-cairo-plugins>
   */
  're-export-cairo-plugins'?: PackageName[] | null;
  /**
   * This field should be the path to a file in the package root (relative to this `Scarb.toml`) that contains general
   * information about the package.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#readme>
   */
  readme?: MaybeWorkspace3 | null;
  /**
   * This field should be a URL to the source repository for your package.
   *
   * ```toml
   * [package]
   * repository = "https://github.com/software-mansion/scarb"
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#repository>
   */
  repository?: MaybeWorkspace | null;
  /**
   * A free-form map of additional internet links related to this package. Keys are human-readable link names, and values are URLs.
   * ```toml
   * [package.urls]
   * "We can help you build your project" = "https://swmansion.com/products/"
   * "We're hiring" = "https://swmansion.com/careers/"
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#urls>
   */
  urls?: {
    [k: string]: string | undefined;
  } | null;
  /**
   * Allows inheriting keys from a workspace.
   */
  version: TomlWorkspaceField1 | string;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceField {
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceField1 {
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceField2 {
  workspace: boolean;
  [k: string]: unknown | undefined;
}
export interface TomlProfile {
  /**
   * Cairo compiler configuration for this profile.
   */
  cairo?: TomlCairo | null;
  /**
   * The name of another profile to inherit defaults from.
   */
  inherits?: string | null;
  /**
   * Tool-specific configuration for this profile (under `tool.<name>`).
   */
  tool?: {
    [k: string]: unknown | undefined;
  } | null;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface WorkspaceScriptDefinition {
  /**
   * If `true`, the script entry is defined at the workspace level and can be
   * inherited by member packages.
   */
  workspace: boolean;
  [k: string]: unknown | undefined;
}
export interface TomlTarget4 {
  /**
   * Override the default target name.
   */
  name?: string | null;
  /**
   * Path to the source root of this target.
   * Defaults to `src/lib.cairo`.
   */
  'source-path'?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceTargetDefault {
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The "defined" type, or the type that that is used when not inheriting from a workspace.
 */
export interface TomlTargetDefaults {
  'build-external-contracts': MaybeWorkspace8;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceBuildExternalContracts {
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The type when inheriting from a workspace.
 */
export interface TomlWorkspaceTool {
  /**
   * If `true`, indicates that the tool configuration is defined at the
   * workspace level and should be inherited by members.
   */
  workspace: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Represents the workspace root definition.
 */
export interface TomlWorkspace {
  /**
   * List of workspace packages that are allowed to have no audits.
   */
  'allow-no-audits'?: PackageName[] | null;
  /**
   * Shared workspace `[workspace.dependencies]` available to members.
   * Specifying a workspace dependency is similar to package dependencies,
   * except you can then inherit the workspace dependency as a package dependency.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/workspaces.html#dependencies>
   */
  dependencies?: {
    [k: string]: TomlDependency | undefined;
  } | null;
  /**
   * List of workspace member package paths (relative to the workspace root).
   * Supports globs to match multiple paths, using typical filename glob patterns like * and ?.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/workspaces.html#members>
   */
  members?: string[] | null;
  /**
   * Package fields that can be inherited by workspace members
   * via `workspace.package.*` (e.g., `version`, `edition`, `authors`).
   */
  package?: PackageInheritableFields | null;
  /**
   * Setting this field to true will cause Scarb to ignore any versions of dependencies, including transitive ones, that are not marked as audited in the registry.
   * If unable to resolve the dependency tree due to this, Scarb will exit with an error.
   * By default, this field is set to false. This policy applies to the entire workspace.
   * This field is ignored in member packages manifest files, and only the one defined in the workspace root manifest is applied when compiling member packages.
   *
   * You may whitelist specific packages to ignore the require-audits setting by specifying them in the allow-no-audits key:
   * ```toml
   * [workspace]
   * allow-no-audits = ["alexandria_math"]
   * ```
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/workspaces.html#security-and-audits>
   */
  'require-audits'?: boolean | null;
  /**
   * Workspace-wide `[workspace.scripts]` available to members.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/workspaces.html#scripts>
   */
  scripts?: {
    [k: string]: ScriptDefinition | undefined;
  } | null;
  /**
   * Defaults applied to targets within workspace members when not
   * configured on the target, must be inherited explicitly.
   * For example:
   * ```toml
   *  [target-defaults]
   *  test.workspace = true
   * ```
   */
  'target-defaults'?: {
    [k: string]: TargetDefaults | undefined;
  } | null;
  /**
   * Workspace-level `[workspace.tool]` configuration passed to external tools.
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/workspaces.html#tool>
   */
  tool?: {
    [k: string]: unknown | undefined;
  } | null;
  [k: string]: unknown | undefined;
}
export interface PackageInheritableFields {
  /**
   * Authors list to inherit for members.
   */
  authors?: string[] | null;
  /**
   * A Cairo compiler version requirement that this package is
   * compatible with. This does not change the compiler version used by Scarb
   * but enforces compatibility (can be ignored with `--ignore-cairo-version`).
   * - See official documentation at: <https://docs.swmansion.com/scarb/docs/reference/manifest.html#cairo-version>
   */
  'cairo-version'?: string | null;
  /**
   * Short description of the package; shown on registries.
   */
  description?: string | null;
  /**
   * URL of the package documentation.
   */
  documentation?: string | null;
  /**
   * Cairo edition to inherit for members (e.g. `"2023_10"`).
   */
  edition?: string | null;
  /**
   * Project homepage URL.
   */
  homepage?: string | null;
  /**
   * Search keywords for package discovery on registries.
   */
  keywords?: string[] | null;
  /**
   * SPDX license expression, e.g. `"MIT"` or `"Apache-2.0"`.
   */
  license?: string | null;
  /**
   * Path to a license file to include in the package.
   */
  'license-file'?: string | null;
  /**
   * Path to a README file, or `false` to disable including a readme.
   */
  readme?: PathOrBool | null;
  /**
   * URL of the source repository.
   */
  repository?: string | null;
  /**
   * Version to inherit for members that opt into
   * `workspace.package.version = ...`.
   */
  version?: string | null;
  [k: string]: unknown | undefined;
}
export interface TargetDefaults {
  'build-external-contracts': string[];
  [k: string]: unknown | undefined;
}
