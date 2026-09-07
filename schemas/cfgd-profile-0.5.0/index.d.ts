/* eslint-disable */

/**
 * How far `spec.env` exports reach across the current user's environment.
 *
 * The two env fields differ by *scope of affected users*: `spec.env` targets
 * the current user, `spec.system.environment` targets all users (privileged).
 * This knob narrows the *current-user* reach; it never widens beyond the user.
 */
export type EnvScope = 'All' | 'Login' | 'Interactive';
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
 * Profile document for cfgd (profiles/*.yaml)
 */
export interface CfgdProfile {
  apiVersion: string;
  kind: string;
  metadata: ProfileMetadata;
  spec: ProfileSpec;
}
export interface ProfileMetadata {
  name: string;
}
export interface ProfileSpec {
  aliases?: ShellAlias[];
  env?: EnvVar[];
  /**
   * How far `spec.env` exports reach across the current user's environment.
   * Omitted means "inherit" (a parent layer's value survives); the resolved
   * default when no layer sets it is [`EnvScope::All`] — every standard user
   * entry point cfgd can safely touch. Narrow it to `Login` or `Interactive`
   * to opt out of the broader session surfaces.
   */
  envScope?: EnvScope | null;
  files?: FilesSpec | null;
  inherits?: string[];
  modules?: string[];
  packages?: PackagesSpec | null;
  scripts?: ScriptSpec | null;
  secrets?: SecretSpec[];
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
export interface FilesSpec {
  managed?: ManagedFileSpec[];
  permissions?: {
    [k: string]: string | undefined;
  };
}
export interface ManagedFileSpec {
  /**
   * Encryption settings for this file.
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
export interface PackagesSpec {
  apk?: string[];
  apt?: AptSpec | null;
  brew?: BrewSpec | null;
  cargo?: CargoSpec | null;
  chocolatey?: string[];
  custom?: CustomManagerSpec[];
  dnf?: string[];
  flatpak?: FlatpakSpec | null;
  go?: string[];
  nix?: string[];
  npm?: NpmSpec | null;
  pacman?: string[];
  pipx?: string[];
  pkg?: string[];
  scoop?: string[];
  snap?: SnapSpec | null;
  winget?: string[];
  yum?: string[];
  zypper?: string[];
}
export interface AptSpec {
  file?: string | null;
  packages?: string[];
}
export interface BrewSpec {
  casks?: string[];
  file?: string | null;
  formulae?: string[];
  taps?: string[];
}
/**
 * Cargo package spec. Supports both list form (`cargo: [bat, ripgrep]`)
 * and object form (`cargo: { file: Cargo.toml, packages: [...] }`) via the
 * shared `list_or_struct` deserializer on the `PackagesSpec::cargo` field.
 */
export interface CargoSpec {
  file?: string | null;
  packages?: string[];
}
export interface CustomManagerSpec {
  check: string;
  install: string;
  listInstalled: string;
  name: string;
  packages?: string[];
  uninstall: string;
  update?: string | null;
}
export interface FlatpakSpec {
  packages?: string[];
  remote?: string | null;
}
export interface NpmSpec {
  file?: string | null;
  global?: string[];
}
export interface SnapSpec {
  classic?: string[];
  packages?: string[];
}
export interface ScriptSpec {
  onChange?: ScriptEntry[];
  onDrift?: ScriptEntry[];
  postApply?: ScriptEntry[];
  postReconcile?: ScriptEntry[];
  preApply?: ScriptEntry[];
  preReconcile?: ScriptEntry[];
}
export interface SecretSpec {
  backend?: string | null;
  envs?: string[] | null;
  source: string;
  target?: string | null;
  template?: string | null;
}
