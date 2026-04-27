/* eslint-disable */

/**
 * A repository of hooks, which can be remote, local, meta, or builtin.
 */
export type Repo = RemoteRepo | LocalRepo | MetaRepo | BuiltinRepo;
export type Stage =
  | 'manual'
  | 'commit-msg'
  | 'post-checkout'
  | 'post-commit'
  | 'post-merge'
  | 'post-rewrite'
  | 'pre-commit'
  | 'pre-merge-commit'
  | 'pre-push'
  | 'pre-rebase'
  | 'prepare-commit-msg';
export type MetaHooks = 'check-hooks-apply' | 'check-useless-excludes' | 'identity';
export type BuiltinHooks =
  | 'check-added-large-files'
  | 'check-case-conflict'
  | 'check-executables-have-shebangs'
  | 'check-illegal-windows-names'
  | 'check-json'
  | 'check-json5'
  | 'check-merge-conflict'
  | 'check-shebang-scripts-are-executable'
  | 'check-symlinks'
  | 'check-toml'
  | 'check-vcs-permalinks'
  | 'check-xml'
  | 'check-yaml'
  | 'destroyed-symlinks'
  | 'detect-private-key'
  | 'end-of-file-fixer'
  | 'file-contents-sorter'
  | 'fix-byte-order-marker'
  | 'forbid-new-submodules'
  | 'mixed-line-ending'
  | 'no-commit-to-branch'
  | 'pretty-format-json'
  | 'trailing-whitespace';
export type HookType =
  | 'commit-msg'
  | 'post-checkout'
  | 'post-commit'
  | 'post-merge'
  | 'post-rewrite'
  | 'pre-commit'
  | 'pre-merge-commit'
  | 'pre-push'
  | 'pre-rebase'
  | 'prepare-commit-msg';

/**
 * The configuration file for prek, a git hook manager written in Rust.
 */
export interface PrekToml {
  repos: Repo[];
  /**
   * A list of `--hook-types` which will be used by default when running `prek install`.
   * Default is `[pre-commit]`.
   */
  default_install_hook_types?: HookType[];
  /**
   * A mapping from language to the default `language_version`.
   */
  default_language_version?: {
    bun?: string;
    conda?: string;
    coursier?: string;
    dart?: string;
    deno?: string;
    docker?: string;
    docker_image?: string;
    dotnet?: string;
    fail?: string;
    golang?: string;
    haskell?: string;
    julia?: string;
    lua?: string;
    node?: string;
    perl?: string;
    pygrep?: string;
    python?: string;
    r?: string;
    ruby?: string;
    rust?: string;
    script?: string;
    swift?: string;
    system?: string;
  };
  /**
   * A configuration-wide default for the stages property of hooks.
   * Default to all stages.
   */
  default_stages?: Stage[];
  /**
   * Global file include pattern.
   */
  files?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Global file exclude pattern.
   */
  exclude?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Set to true to have prek stop running hooks after the first failure.
   * Default is false.
   */
  fail_fast?: boolean;
  /**
   * The minimum version of prek required to run this configuration.
   */
  minimum_prek_version?: string;
  /**
   * Set to true to isolate this project from parent configurations in workspace mode.
   * When true, files in this project are "consumed" by this project and will not be processed
   * by parent projects.
   * When false (default), files in subprojects are processed by both the subproject and
   * any parent projects that contain them.
   */
  orphan?: boolean;
  [k: string]: unknown | undefined;
}
export interface RemoteRepo {
  /**
   * Remote repository location. Must not be `local`, `meta`, or `builtin`.
   */
  repo: string;
  rev: string;
  hooks: RemoteHook[];
  [k: string]: unknown | undefined;
}
/**
 * A remote hook in the configuration file.
 *
 * All keys in manifest hook dict are valid in a config hook dict, but are optional.
 */
export interface RemoteHook {
  /**
   * The id of the hook.
   */
  id: string;
  /**
   * Override the name of the hook.
   */
  name?: string;
  /**
   * Override the entrypoint. Not documented in the official docs but works.
   */
  entry?: string;
  /**
   * Override the language. Not documented in the official docs but works.
   */
  language?:
    | 'bun'
    | 'conda'
    | 'coursier'
    | 'dart'
    | 'deno'
    | 'docker'
    | 'docker_image'
    | 'dotnet'
    | 'fail'
    | 'golang'
    | 'haskell'
    | 'julia'
    | 'lua'
    | 'node'
    | 'perl'
    | 'pygrep'
    | 'python'
    | 'r'
    | 'ruby'
    | 'rust'
    | 'script'
    | 'swift'
    | 'system';
  /**
   * Priority used by the scheduler to determine ordering and concurrency.
   * Hooks with the same priority can run in parallel.
   *
   * This is only allowed in project config files (e.g. `.pre-commit-config.yaml`).
   * It is not allowed in manifests (e.g. `.pre-commit-hooks.yaml`).
   */
  priority?: number;
  /**
   * Not documented in the official docs.
   */
  alias?: string;
  /**
   * The pattern of files to run on.
   */
  files?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Exclude files that were matched by `files`.
   * Default is `$^`, which matches nothing.
   */
  exclude?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * List of file types to run on (AND).
   * Default is `[file]`, which matches all files.
   */
  types?: string[];
  /**
   * List of file types to run on (OR).
   * Default is `[]`.
   */
  types_or?: string[];
  /**
   * List of file types to exclude.
   * Default is `[]`.
   */
  exclude_types?: string[];
  /**
   * Not documented in the official docs.
   */
  additional_dependencies?: string[];
  /**
   * Additional arguments to pass to the hook.
   */
  args?: string[];
  /**
   * Environment variables to set for the hook.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * This hook will run even if there are no matching files.
   * Default is false.
   */
  always_run?: boolean;
  /**
   * If this hook fails, don't run any more hooks.
   * Default is false.
   */
  fail_fast?: boolean;
  /**
   * Append filenames that would be checked to the hook entry as arguments.
   * Default is true.
   */
  pass_filenames?: boolean | number;
  /**
   * A description of the hook. For metadata only.
   */
  description?: string;
  /**
   * Run the hook on a specific version of the language.
   * Default is `default`.
   * See <https://pre-commit.com/#overriding-language-version>.
   */
  language_version?: string;
  /**
   * Write the output of the hook to a file when the hook fails or verbose is enabled.
   */
  log_file?: string;
  /**
   * Run the hook entry through a predefined shell adapter.
   */
  shell?: 'sh' | 'bash' | 'pwsh' | 'powershell' | 'cmd';
  /**
   * This hook will execute using a single process instead of in parallel.
   * Default is false.
   */
  require_serial?: boolean;
  /**
   * Select which Git hook stages this hook runs for.
   * Default all stages are selected.
   * See <https://pre-commit.com/#confining-hooks-to-run-at-certain-stages>.
   */
  stages?: Stage[];
  /**
   * Print the output of the hook even if it passes.
   * Default is false.
   */
  verbose?: boolean;
  /**
   * The minimum version of prek required to run this hook.
   */
  minimum_prek_version?: string;
  [k: string]: unknown | undefined;
}
export interface LocalRepo {
  /**
   * Must be `local`.
   */
  repo: 'local';
  hooks: LocalHook[];
  rev?: never;
  [k: string]: unknown | undefined;
}
/**
 * A local hook in the configuration file.
 *
 * This is similar to `ManifestHook`, but includes config-only fields (like `priority`).
 */
export interface LocalHook {
  /**
   * The id of the hook.
   */
  id: string;
  /**
   * The name of the hook.
   */
  name: string;
  /**
   * The command to run. It can contain arguments that will not be overridden.
   */
  entry: string;
  /**
   * The language of the hook. Tells prek how to install and run the hook.
   */
  language:
    | 'bun'
    | 'conda'
    | 'coursier'
    | 'dart'
    | 'deno'
    | 'docker'
    | 'docker_image'
    | 'dotnet'
    | 'fail'
    | 'golang'
    | 'haskell'
    | 'julia'
    | 'lua'
    | 'node'
    | 'perl'
    | 'pygrep'
    | 'python'
    | 'r'
    | 'ruby'
    | 'rust'
    | 'script'
    | 'swift'
    | 'system';
  /**
   * Priority used by the scheduler to determine ordering and concurrency.
   * Hooks with the same priority can run in parallel.
   */
  priority?: number;
  /**
   * Not documented in the official docs.
   */
  alias?: string;
  /**
   * The pattern of files to run on.
   */
  files?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Exclude files that were matched by `files`.
   * Default is `$^`, which matches nothing.
   */
  exclude?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * List of file types to run on (AND).
   * Default is `[file]`, which matches all files.
   */
  types?: string[];
  /**
   * List of file types to run on (OR).
   * Default is `[]`.
   */
  types_or?: string[];
  /**
   * List of file types to exclude.
   * Default is `[]`.
   */
  exclude_types?: string[];
  /**
   * Not documented in the official docs.
   */
  additional_dependencies?: string[];
  /**
   * Additional arguments to pass to the hook.
   */
  args?: string[];
  /**
   * Environment variables to set for the hook.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * This hook will run even if there are no matching files.
   * Default is false.
   */
  always_run?: boolean;
  /**
   * If this hook fails, don't run any more hooks.
   * Default is false.
   */
  fail_fast?: boolean;
  /**
   * Append filenames that would be checked to the hook entry as arguments.
   * Default is true.
   */
  pass_filenames?: boolean | number;
  /**
   * A description of the hook. For metadata only.
   */
  description?: string;
  /**
   * Run the hook on a specific version of the language.
   * Default is `default`.
   * See <https://pre-commit.com/#overriding-language-version>.
   */
  language_version?: string;
  /**
   * Write the output of the hook to a file when the hook fails or verbose is enabled.
   */
  log_file?: string;
  /**
   * Run the hook entry through a predefined shell adapter.
   */
  shell?: 'sh' | 'bash' | 'pwsh' | 'powershell' | 'cmd';
  /**
   * This hook will execute using a single process instead of in parallel.
   * Default is false.
   */
  require_serial?: boolean;
  /**
   * Select which Git hook stages this hook runs for.
   * Default all stages are selected.
   * See <https://pre-commit.com/#confining-hooks-to-run-at-certain-stages>.
   */
  stages?: Stage[];
  /**
   * Print the output of the hook even if it passes.
   * Default is false.
   */
  verbose?: boolean;
  /**
   * The minimum version of prek required to run this hook.
   */
  minimum_prek_version?: string;
  [k: string]: unknown | undefined;
}
export interface MetaRepo {
  /**
   * Must be `meta`.
   */
  repo: 'meta';
  hooks: MetaHook[];
  rev?: never;
  [k: string]: unknown | undefined;
}
/**
 * A meta hook predefined in prek.
 */
export interface MetaHook {
  id: MetaHooks;
  /**
   * Override the name of the hook.
   */
  name?: string;
  /**
   * Entry is not allowed for predefined hooks.
   */
  entry?: false;
  /**
   * Language must be `system` for predefined hooks (or omitted).
   */
  language?: 'system';
  /**
   * Priority used by the scheduler to determine ordering and concurrency.
   * Hooks with the same priority can run in parallel.
   *
   * This is only allowed in project config files (e.g. `.pre-commit-config.yaml`).
   * It is not allowed in manifests (e.g. `.pre-commit-hooks.yaml`).
   */
  priority?: number;
  /**
   * Not documented in the official docs.
   */
  alias?: string;
  /**
   * The pattern of files to run on.
   */
  files?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Exclude files that were matched by `files`.
   * Default is `$^`, which matches nothing.
   */
  exclude?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * List of file types to run on (AND).
   * Default is `[file]`, which matches all files.
   */
  types?: string[];
  /**
   * List of file types to run on (OR).
   * Default is `[]`.
   */
  types_or?: string[];
  /**
   * List of file types to exclude.
   * Default is `[]`.
   */
  exclude_types?: string[];
  /**
   * Not documented in the official docs.
   */
  additional_dependencies?: string[];
  /**
   * Additional arguments to pass to the hook.
   */
  args?: string[];
  /**
   * Environment variables to set for the hook.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * This hook will run even if there are no matching files.
   * Default is false.
   */
  always_run?: boolean;
  /**
   * If this hook fails, don't run any more hooks.
   * Default is false.
   */
  fail_fast?: boolean;
  /**
   * Append filenames that would be checked to the hook entry as arguments.
   * Default is true.
   */
  pass_filenames?: boolean | number;
  /**
   * A description of the hook. For metadata only.
   */
  description?: string;
  /**
   * Run the hook on a specific version of the language.
   * Default is `default`.
   * See <https://pre-commit.com/#overriding-language-version>.
   */
  language_version?: string;
  /**
   * Write the output of the hook to a file when the hook fails or verbose is enabled.
   */
  log_file?: string;
  /**
   * Run the hook entry through a predefined shell adapter.
   */
  shell?: 'sh' | 'bash' | 'pwsh' | 'powershell' | 'cmd';
  /**
   * This hook will execute using a single process instead of in parallel.
   * Default is false.
   */
  require_serial?: boolean;
  /**
   * Select which Git hook stages this hook runs for.
   * Default all stages are selected.
   * See <https://pre-commit.com/#confining-hooks-to-run-at-certain-stages>.
   */
  stages?: Stage[];
  /**
   * Print the output of the hook even if it passes.
   * Default is false.
   */
  verbose?: boolean;
  /**
   * The minimum version of prek required to run this hook.
   */
  minimum_prek_version?: string;
  [k: string]: unknown | undefined;
}
export interface BuiltinRepo {
  /**
   * Must be `builtin`.
   */
  repo: 'builtin';
  hooks: BuiltinHook[];
  rev?: never;
  [k: string]: unknown | undefined;
}
/**
 * A builtin hook predefined in prek.
 */
export interface BuiltinHook {
  id: BuiltinHooks;
  /**
   * Override the name of the hook.
   */
  name?: string;
  /**
   * Entry is not allowed for predefined hooks.
   */
  entry?: false;
  /**
   * Language must be `system` for predefined hooks (or omitted).
   */
  language?: 'system';
  /**
   * Priority used by the scheduler to determine ordering and concurrency.
   * Hooks with the same priority can run in parallel.
   *
   * This is only allowed in project config files (e.g. `.pre-commit-config.yaml`).
   * It is not allowed in manifests (e.g. `.pre-commit-hooks.yaml`).
   */
  priority?: number;
  /**
   * Not documented in the official docs.
   */
  alias?: string;
  /**
   * The pattern of files to run on.
   */
  files?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Exclude files that were matched by `files`.
   * Default is `$^`, which matches nothing.
   */
  exclude?:
    | string
    | {
        glob: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * List of file types to run on (AND).
   * Default is `[file]`, which matches all files.
   */
  types?: string[];
  /**
   * List of file types to run on (OR).
   * Default is `[]`.
   */
  types_or?: string[];
  /**
   * List of file types to exclude.
   * Default is `[]`.
   */
  exclude_types?: string[];
  /**
   * Not documented in the official docs.
   */
  additional_dependencies?: string[];
  /**
   * Additional arguments to pass to the hook.
   */
  args?: string[];
  /**
   * Environment variables to set for the hook.
   */
  env?: {
    [k: string]: string | undefined;
  };
  /**
   * This hook will run even if there are no matching files.
   * Default is false.
   */
  always_run?: boolean;
  /**
   * If this hook fails, don't run any more hooks.
   * Default is false.
   */
  fail_fast?: boolean;
  /**
   * Append filenames that would be checked to the hook entry as arguments.
   * Default is true.
   */
  pass_filenames?: boolean | number;
  /**
   * A description of the hook. For metadata only.
   */
  description?: string;
  /**
   * Run the hook on a specific version of the language.
   * Default is `default`.
   * See <https://pre-commit.com/#overriding-language-version>.
   */
  language_version?: string;
  /**
   * Write the output of the hook to a file when the hook fails or verbose is enabled.
   */
  log_file?: string;
  /**
   * Run the hook entry through a predefined shell adapter.
   */
  shell?: 'sh' | 'bash' | 'pwsh' | 'powershell' | 'cmd';
  /**
   * This hook will execute using a single process instead of in parallel.
   * Default is false.
   */
  require_serial?: boolean;
  /**
   * Select which Git hook stages this hook runs for.
   * Default all stages are selected.
   * See <https://pre-commit.com/#confining-hooks-to-run-at-certain-stages>.
   */
  stages?: Stage[];
  /**
   * Print the output of the hook even if it passes.
   * Default is false.
   */
  verbose?: boolean;
  /**
   * The minimum version of prek required to run this hook.
   */
  minimum_prek_version?: string;
  [k: string]: unknown | undefined;
}
