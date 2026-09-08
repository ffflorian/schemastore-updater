/* eslint-disable */

/**
 * File deployment strategy.
 */
export type FileStrategy = 'Symlink' | 'Copy' | 'Template' | 'Hardlink';
export type ScriptEntry =
  | string
  | {
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
      run: string;
      /**
       * Interpreter to use for inline commands. Ignored (and rejected) on file scripts.
       */
      shell?: ('sh' | 'bash' | 'zsh' | 'pwsh' | 'cmd') | 'auto';
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
    };

/**
 * Schema for cfgd Module documents (kind: Module)
 */
export interface CfgdModule {
  apiVersion: string;
  kind: string;
  metadata: ModuleMetadata;
  spec: ModuleSpec;
}
export interface ModuleMetadata {
  description?: string | null;
  name: string;
}
export interface ModuleSpec {
  aliases?: ShellAlias[];
  depends?: string[];
  env?: EnvVar[];
  files?: ModuleFileEntry[];
  packages?: ModulePackageEntry[];
  /**
   * Platform tags gating the whole module. When non-empty and the current
   * platform matches none of them, the module is skipped entirely (it
   * appears as a Skipped action rather than vanishing). Tags are matched
   * against OS / distro / arch via `Platform::matches_any`; the canonical
   * macOS token is `macos`.
   */
  platforms?: string[];
  scripts?: ScriptSpec | null;
  /**
   * System configurator settings contributed by this module.
   * Deep-merged into the profile system map; module values override profile values at leaf level.
   */
  system?: {
    [k: string]: unknown | undefined;
  };
}
export interface ShellAlias {
  command: string;
  name: string;
  [k: string]: unknown | undefined;
}
export interface EnvVar {
  name: string;
  value: string;
  [k: string]: unknown | undefined;
}
export interface ModuleFileEntry {
  /**
   * Encryption settings for this module file.
   */
  encryption?: EncryptionSpec | null;
  /**
   * Unix permission bits (e.g. "600", "644") to apply after deployment.
   */
  permissions?: string | null;
  /**
   * When true, the source file is local-only: auto-added to .gitignore,
   * silently skipped on machines where it doesn't exist.
   */
  private?: boolean;
  source: string;
  /**
   * Per-file deployment strategy override. If None, uses the global default.
   */
  strategy?: FileStrategy | null;
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
export interface ModulePackageEntry {
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
  deny?: string[];
  minVersion?: string | null;
  name?: string;
  /**
   * Run the install script only if this command exits zero. A non-zero exit
   * skips the install (the condition for installing was not met). Only
   * meaningful for a `prefer: [script]` install; ignored for manager-backed
   * installs (those are idempotent via the manager's installed-package query).
   */
  onlyIf?: string | null;
  platforms?: string[];
  prefer?: string[];
  script?: string | null;
  /**
   * Run the install script only if this command exits NON-zero. A zero exit
   * (success) skips the install (the package already appears present). Only
   * meaningful for a `prefer: [script]` install; ignored otherwise.
   */
  unless?: string | null;
}
export interface ScriptSpec {
  onChange?: ScriptEntry[];
  onDrift?: ScriptEntry[];
  postApply?: ScriptEntry[];
  postReconcile?: ScriptEntry[];
  preApply?: ScriptEntry[];
  preReconcile?: ScriptEntry[];
}
