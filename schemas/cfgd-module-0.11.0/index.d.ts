/* eslint-disable */

/**
 * File format used to interpret and re-serialize a `Patch`-strategy target.
 */
export type PatchFormat = 'Ini' | 'Json' | 'Yaml' | 'Toml';
/**
 * File deployment strategy.
 */
export type FileStrategy = 'Symlink' | 'Copy' | 'Template' | 'Hardlink' | 'Patch';
/**
 * A lifecycle script entry: either a bare command string, or a mapping for
 * one that needs a timeout, shell, or guard condition.
 *
 * ```yaml
 * preApply: "echo starting"
 * # or
 * postApply:
 *   run: brew update
 *   timeout: 2m
 *   onlyIf: command -v brew
 * ```
 */
export type ScriptEntry = string | ScriptCommand;

/**
 * Schema for cfgd Module documents (kind: Module)
 */
export interface CfgdModule {
  /**
   * API group/version, e.g. `cfgd.io/v1alpha1`.
   */
  apiVersion: string;
  /**
   * Document kind. Always `Module` for this file.
   */
  kind: string;
  metadata: ModuleMetadata;
  spec: ModuleSpec;
}
/**
 * Identifying metadata for this module.
 */
export interface ModuleMetadata {
  /**
   * A one-line human summary shown in `cfgd module list` / `cfgd module show`.
   */
  description?: string | null;
  /**
   * The module's name, referenced from a profile's `modules:` list.
   */
  name: string;
  /**
   * The module's own release version, as `MAJOR.MINOR.PATCH` with optional
   * pre-release and build metadata (`1.2.0`, `2.0.0-rc.1`). It names the
   * `<module>/v<version>` release tag that the workflow from
   * `cfgd workflow generate` cuts when the module changes, so bumping it is
   * what publishes a new release. Absent on modules that are not released
   * independently.
   */
  version?: string | null;
}
/**
 * The module's declared surface.
 */
export interface ModuleSpec {
  /**
   * Shell aliases this module contributes.
   */
  aliases?: ShellAlias[];
  /**
   * Names of other modules this one requires; cfgd resolves and applies them
   * first.
   */
  depends?: string[];
  /**
   * Environment variables this module contributes.
   */
  env?: EnvVar[];
  /**
   * Files this module deploys.
   */
  files?: ModuleFileEntry[];
  /**
   * Packages this module installs.
   */
  packages?: ModulePackageEntry[];
  /**
   * Platform tags gating the whole module. When non-empty and the current
   * platform matches none of them, the module is skipped entirely (it
   * appears as a skipped action rather than vanishing). Tags are matched
   * against the machine's OS, distro, and arch; use `macos` for macOS.
   */
  platforms?: string[];
  /**
   * Lifecycle scripts (`preApply`, `postApply`, …) this module runs.
   */
  scripts?: ScriptSpec | null;
  /**
   * System configurator settings contributed by this module.
   * Deep-merged into the profile system map; module values override profile values at leaf level.
   */
  system?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * A single shell alias entry.
 */
export interface ShellAlias {
  /**
   * Command the alias expands to, written in the syntax of the shell it is
   * generated for. It may carry arguments, pipes and quotes: cfgd quotes the
   * whole value per dialect when it writes the alias definition, so the text
   * reaches the shell exactly as declared. Required — an alias with no
   * command has nothing to expand to.
   */
  command: string;
  /**
   * Alias name, as typed at the shell prompt.
   */
  name: string;
  /**
   * Platform tags gating this entry alone. Empty means every platform the
   * declaring module or profile is not already gated off of. Tags are
   * matched against the machine's OS, distro, and arch; use `macos` for
   * macOS. An entry gated off this host is not part of its desired state at
   * all: it appears on no surface, exactly as a platform-filtered package
   * does.
   */
  platforms?: string[];
  [k: string]: unknown | undefined;
}
/**
 * A single `NAME=VALUE` environment variable entry.
 */
export interface EnvVar {
  /**
   * Variable name. Must be shell-safe and not a reserved `CFGD_*` name.
   */
  name: string;
  /**
   * Platform tags gating this entry alone. Empty means every platform the
   * declaring module or profile is not already gated off of. Tags are
   * matched against the machine's OS, distro, and arch; use `macos` for
   * macOS. An entry gated off this host is not part of its desired state at
   * all: it appears on no surface, exactly as a platform-filtered package
   * does.
   */
  platforms?: string[];
  /**
   * Value assigned to the variable, exported verbatim into the shell
   * environment.
   */
  value: string;
  [k: string]: unknown | undefined;
}
/**
 * One entry of `spec.files[]`: a file this module deploys.
 *
 * ```yaml
 * files:
 *   - source: files/init.lua
 *     target: ~/.config/nvim/init.lua
 * ```
 */
export interface ModuleFileEntry {
  /**
   * Encryption settings for this module file.
   */
  encryption?: EncryptionSpec | null;
  /**
   * Structured merge or script configuration for `strategy: Patch`.
   * Required when `strategy` is `Patch`, rejected otherwise.
   */
  patch?: PatchSpec | null;
  /**
   * Unix permission bits (e.g. "600", "644") to apply after deployment.
   */
  permissions?: string | null;
  /**
   * When true, the source file is local-only: auto-added to .gitignore,
   * silently skipped on machines where it doesn't exist.
   */
  private?: boolean;
  /**
   * Path to the source file, relative to the module directory. Not
   * required when `strategy` is `Patch`; required otherwise.
   */
  source?: string;
  /**
   * Per-file deployment strategy override. Omitted, the module-wide default
   * applies.
   */
  strategy?: FileStrategy | null;
  /**
   * Destination path on the machine. A leading `~` expands to the home
   * directory.
   */
  target: string;
}
/**
 * Encryption settings for a managed file.
 */
export interface EncryptionSpec {
  /**
   * The encryption backend to use (e.g. "sops", "age").
   */
  backend: string;
  /**
   * When encryption must be enforced. Defaults to `InRepo`.
   */
  mode?: 'InRepo' | 'Always';
}
/**
 * Configuration for the `Patch` file strategy: a structured merge (`ensure`)
 * or a content-rewriting script, applied on top of the target's current
 * content.
 */
export interface PatchSpec {
  /**
   * Keys/values to deep-merge into the target, leaving unmentioned keys
   * untouched. Values are literal (no template rendering). Mutually
   * exclusive with `script`.
   */
  ensure?: {
    [k: string]: unknown | undefined;
  };
  /**
   * File format to parse the target as. Inferred from the target's
   * extension when omitted.
   */
  format?: PatchFormat | null;
  /**
   * A script path or an inline command that receives the target's current
   * content on stdin and writes the new content to stdout. A relative path
   * resolves against the module directory for a module file
   * (`spec.files[]`) and against the config directory for a profile file
   * (`spec.files.managed[]`); a value that resolves to no file is run as an
   * inline command. Mutually exclusive with `ensure`.
   */
  script?: string | null;
}
/**
 * One entry of `spec.packages[]`: a package this module installs.
 *
 * ```yaml
 * packages:
 *   - name: neovim
 *     minVersion: "0.9"
 *     prefer: [brew, apt]
 * ```
 */
export interface ModulePackageEntry {
  /**
   * Manager-specific package name aliases (e.g. `{apt: "neovim", brew:
   * "neovim"}`) for a package named differently across managers.
   */
  aliases?: {
    [k: string]: string | undefined;
  };
  /**
   * Skip the install script if this path already exists. A leading `~`
   * expands to the home directory; a relative path resolves against the
   * script's working directory. Existence follows symlinks. Only meaningful
   * for a `prefer: [script]` install; ignored otherwise.
   */
  creates?: string | null;
  /**
   * Package managers to never use for this package, even if otherwise
   * available and preferred by the profile.
   */
  deny?: string[];
  /**
   * Minimum acceptable installed version, loosely parsed (`"1.2"`, `"1"`).
   * A version below this is treated as not satisfying the module.
   */
  minVersion?: string | null;
  /**
   * The package name as the chosen manager knows it.
   */
  name?: string;
  /**
   * Run the install script only if this command exits zero. A non-zero exit
   * skips the install (the condition for installing was not met). Only
   * meaningful for a `prefer: [script]` install; ignored for manager-backed
   * installs (those are idempotent via the manager's installed-package query).
   */
  onlyIf?: string | null;
  /**
   * Platform tags gating this package alone. Empty means install on every
   * platform the module itself is not already gated off of.
   */
  platforms?: string[];
  /**
   * Manager preference order for this package, overriding the profile's
   * default manager priority (e.g. `[brew, apt]`, or `[script]` to force
   * this entry's own `script`).
   */
  prefer?: string[];
  /**
   * Shell script to run instead of a manager install, selected via
   * `prefer: [script]`.
   */
  script?: string | null;
  /**
   * Run the install script only if this command exits NON-zero. A zero exit
   * (success) skips the install (the package already appears present). Only
   * meaningful for a `prefer: [script]` install; ignored otherwise.
   */
  unless?: string | null;
}
/**
 * `spec.scripts`: lifecycle hooks run at specific points in the reconcile cycle.
 *
 * ```yaml
 * scripts:
 *   preApply: "echo starting apply"
 *   postApply:
 *     - run: brew cleanup
 *       continueOnError: true
 *   onDrift: "notify-send 'cfgd: drift detected'"
 * ```
 */
export interface ScriptSpec {
  /**
   * Run when a watched file changes on disk (requires `daemon.reconcile.onChange`).
   */
  onChange?: ScriptEntry[];
  /**
   * Run when the daemon detects drift, before any auto-apply decision.
   */
  onDrift?: ScriptEntry[];
  /**
   * Run once after every action in an apply completes.
   */
  postApply?: ScriptEntry[];
  /**
   * Run once after a daemon reconcile tick completes.
   */
  postReconcile?: ScriptEntry[];
  /**
   * Run once before any action in an apply.
   */
  preApply?: ScriptEntry[];
  /**
   * Run once before a daemon reconcile tick begins.
   */
  preReconcile?: ScriptEntry[];
}
/**
 * The mapping form, carrying the body and its knobs.
 */
export interface ScriptCommand {
  /**
   * Treat a non-zero exit as success and continue reconciliation instead
   * of failing the run. Default: `false`.
   */
  continueOnError?: boolean | null;
  /**
   * Skip the script if this path already exists. A leading `~` expands to
   * the home directory; a relative path resolves against the script's
   * working directory. Existence follows symlinks.
   */
  creates?: string | null;
  /**
   * Kill the script if it produces no stdout/stderr output for this duration.
   * Prevents scripts from silently hanging on unresponsive resources.
   * Format: "30s", "2m", etc. If unset, no idle timeout is enforced.
   */
  idleTimeout?: string | null;
  /**
   * Run the script attached to the terminal (inherited stdin/stdout/stderr,
   * no spinner, no output capture, no idle timeout) so it can prompt the
   * user — e.g. `echo "press Enter when done"; read`. Requires a TTY: when
   * stdin is not a terminal (CI, piped input, or any daemon-run phase) the
   * script is skipped with a warning rather than hanging on instant EOF.
   */
  interactive?: boolean;
  /**
   * Run the script only if this command exits zero. A non-zero exit skips
   * the script (the condition for running was not met). Evaluated with the
   * same shell, working directory, and environment as the body.
   */
  onlyIf?: string | null;
  /**
   * The command or script body to run.
   */
  run: string;
  /**
   * Interpreter to use for inline commands. Ignored (and rejected) on file scripts.
   */
  shell?: ('sh' | 'bash' | 'zsh' | 'pwsh' | 'cmd') | 'auto';
  /**
   * Kill the script if it runs longer than this duration (`"30s"`, `"2m"`).
   * Unset means no timeout.
   */
  timeout?: string | null;
  /**
   * Run the script only if this command exits NON-zero. A zero exit
   * (success) skips the script (the guarded state already holds).
   * Evaluated with the same shell, working directory, and environment as
   * the body.
   */
  unless?: string | null;
  /**
   * Working directory for the script. By default every lifecycle script
   * runs in the user's home directory — never the config source tree — so
   * a relative write can't pollute the user's GitOps repo. Set `workdir`
   * to override: a leading `~` expands to home and `$VAR`/`${VAR}` expand
   * against the script environment (which always carries `$CFGD_MODULE_DIR`
   * and `$CFGD_CONFIG_DIR`), so `workdir: ~/.local/share/app`,
   * `workdir: $CFGD_MODULE_DIR`, or an absolute path all work.
   */
  workdir?: string | null;
  [k: string]: unknown | undefined;
}
