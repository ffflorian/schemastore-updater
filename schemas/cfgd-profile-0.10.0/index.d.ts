/* eslint-disable */

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
 * How far `spec.env` exports reach across the current user's environment.
 *
 * The two env fields differ by *scope of affected users*: `spec.env` targets
 * the current user, `spec.system.environment` targets all users (privileged).
 * This knob narrows the *current-user* reach; it never widens beyond the user.
 */
export type EnvScope = 'All' | 'Login' | 'Interactive';
/**
 * File format used to interpret and re-serialize a `Patch`-strategy target.
 */
export type PatchFormat = 'Ini' | 'Json' | 'Yaml' | 'Toml';
/**
 * File deployment strategy.
 */
export type FileStrategy = 'Symlink' | 'Copy' | 'Template' | 'Hardlink' | 'Patch';

/**
 * Profile document for cfgd (profiles/*.yaml)
 */
export interface CfgdProfile {
  /**
   * API group/version, e.g. `cfgd.io/v1alpha1`.
   */
  apiVersion: string;
  /**
   * Document kind. Always `Profile` for this file.
   */
  kind: string;
  metadata: ProfileMetadata;
  spec: ProfileSpec;
}
/**
 * Identifying metadata for this profile.
 */
export interface ProfileMetadata {
  /**
   * The profile's name, referenced by `spec.profile` in `cfgd.yaml` and by
   * `inherits:` in another profile.
   */
  name: string;
}
/**
 * The profile's declared surface.
 */
export interface ProfileSpec {
  /**
   * Shell aliases this profile sets.
   */
  aliases?: ShellAlias[];
  /**
   * Declarative backup jobs this profile schedules.
   */
  backups?: BackupSpec[];
  /**
   * Environment variables this profile sets.
   */
  env?: EnvVar[];
  /**
   * How far `spec.env` exports reach across the current user's environment.
   * Omitted means "inherit" (a parent layer's value survives); the resolved
   * default when no layer sets it is `All` — every standard user entry point
   * cfgd can safely touch. Narrow it to `Login` or `Interactive` to opt out
   * of the broader session surfaces.
   */
  envScope?: EnvScope | null;
  /**
   * Files this profile deploys.
   */
  files?: FilesSpec | null;
  /**
   * Names of base profiles to merge under this one. Later fields in this
   * profile override an inherited base's; lists are unioned.
   */
  inherits?: string[];
  /**
   * Names of modules this profile includes.
   */
  modules?: string[];
  /**
   * Packages this profile installs, grouped by manager.
   */
  packages?: PackagesSpec | null;
  /**
   * Lifecycle scripts (`preApply`, `postApply`, …) this profile runs.
   */
  scripts?: ScriptSpec | null;
  /**
   * Secrets this profile resolves into files or environment variables.
   */
  secrets?: SecretSpec[];
  /**
   * System configurator settings (`macosDefaults`, `systemd`, `sysctl`, …),
   * keyed by configurator name.
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
 * A declarative backup: snapshot `source` (a file or directory) into
 * `destination`, retaining the newest `retention` snapshots.
 *
 * The shape is validated at parse time and run by the backup engine.
 * Schedule-less backups (no `schedule`) run automatically on every
 * `cfgd apply`; every backup — scheduled or not — can also be run directly
 * with `cfgd backup run [name]`.
 */
export interface BackupSpec {
  /**
   * Where snapshots are written. Defaults to `<state_dir>/backups/<name>/`
   * when omitted — resolved by the backup engine, not at parse time, since
   * the state dir depends on runtime scope/overrides.
   */
  destination?: string | null;
  /**
   * Unique identifier for this backup within `spec.backups`, unique across
   * the list. Keys the `destination` default, run records, and CLI
   * selection. Becomes a directory component (`<state_dir>/backups/<name>/`)
   * and a lock filename (`<state_dir>/locks/backup-<name>.lock`), so it must
   * be non-empty, non-blank, a single segment (no `/` or `\`), not a
   * directory reference (`.`, `..`), not rooted (`/daily`, `C:/daily`), and
   * free of `:` anywhere — a drive and NTFS data-stream separator on Windows.
   * Windows shapes are rejected on every platform so a name written on one
   * OS stays valid on the others.
   */
  name: string;
  /**
   * Filename template for each snapshot. Supports `{name}`, `{filename}`,
   * and `{timestamp}` (UTC, `%Y%m%dT%H%M%SZ`). Unknown `{var}` tokens are
   * rejected at parse time. A literal `/` nests the snapshot in a
   * subdirectory of the destination. At run time the rendered value must be
   * relative and every segment must name something: `.` and `..` segments,
   * empty segments (`a//b`, `daily/`), rooted values (`/daily`, `C:/daily`,
   * `C:daily`, `\\server\share`), and `:` anywhere are all rejected. Windows
   * shapes are rejected on every platform, so a pattern is valid everywhere
   * or nowhere. A rejection names the `{filename}` it interpolated, so a
   * colon in the source filename points at itself. Defaults to
   * `"{filename}.{timestamp}"`.
   */
  namePattern?: string;
  /**
   * Scripts run after the copy step (e.g. restart the service stopped by
   * `preBackup`). Always attempted, including after a failed `preBackup` or
   * a failed copy.
   */
  postBackup?: ScriptEntry[];
  /**
   * Scripts run before the snapshot is taken (e.g. stop a service that
   * holds `source` open so the snapshot is consistent). A failure skips the
   * snapshot and records a failed run; `postBackup` still runs.
   */
  preBackup?: ScriptEntry[];
  /**
   * Number of newest snapshots to keep for this backup; older snapshots are
   * pruned from disk and from the run history. Must be at least 1 (`0` would
   * keep no backups, which is a misconfiguration rather than a supported
   * "unlimited" mode). Defaults to 10.
   */
  retention?: number;
  /**
   * When to run this backup: a duration interval (e.g. `"6h"`) or a cron
   * expression, validated at parse time. Cron expressions may be 5-field
   * (`minute hour day month weekday`, e.g. `"0 3 * * *"`) or 6-field with a
   * leading seconds field (`second minute hour day month weekday`, e.g.
   * `"30 0 3 * * *"`), and are evaluated in the machine's LOCAL timezone,
   * like a crontab entry. An interval is measured from the unit's last
   * recorded run, so a `"1d"` backup on a machine rebooted daily still fires
   * daily. Setting this hands the backup to the daemon's timers and takes it
   * out of apply; omitted means "run on every apply".
   */
  schedule?: string | null;
  /**
   * File or directory to snapshot. A leading `~` expands to the home
   * directory. Must not contain, or sit inside, the resolved `destination` —
   * a nested pair is rejected before any copy, with symlinks resolved on both
   * sides. Its filename is what `{filename}` interpolates, so a source whose
   * filename contains `:` (legal on Unix, a drive and data-stream separator
   * on Windows) needs an explicit `namePattern` that leaves `{filename}` out.
   */
  source: string;
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
 * `spec.files`: files this profile deploys and their permission overrides.
 *
 * ```yaml
 * files:
 *   managed:
 *     - source: files/gitconfig
 *       target: ~/.gitconfig
 *   permissions:
 *     ~/.ssh/id_ed25519: "0600"
 * ```
 */
export interface FilesSpec {
  /**
   * Files this profile deploys, each pairing a source in the config
   * directory with a target on the machine. Empty, no files are managed.
   */
  managed?: ManagedFileSpec[];
  /**
   * Octal permission strings (`"0600"`) keyed by target path, applied after
   * deployment.
   */
  permissions?: {
    [k: string]: string | undefined;
  };
}
/**
 * One entry of `spec.files.managed[]`: a file this profile deploys.
 *
 * ```yaml
 * files:
 *   managed:
 *     - source: files/gitconfig
 *       target: ~/.gitconfig
 *       permissions: "644"
 * ```
 */
export interface ManagedFileSpec {
  /**
   * Encryption settings for this file.
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
   * Path to the source file. Not required when `strategy` is `Patch`;
   * required otherwise.
   */
  source?: string;
  /**
   * Per-file deployment strategy override. Omitted, the profile-wide
   * default applies.
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
 * `spec.packages`: packages to install, grouped by package manager.
 *
 * Every manager field accepts either a bare list of names or (for the
 * managers with options of their own) a mapping:
 *
 * ```yaml
 * packages:
 *   brew:
 *     formulae: [ripgrep, fzf]
 *     casks: [alacritty]
 *   apt: [curl, git]
 *   cargo: [ripgrep]
 * ```
 */
export interface PackagesSpec {
  /**
   * APK packages (Alpine).
   */
  apk?: string[] | PackageListSpec | null;
  /**
   * APT packages (Debian/Ubuntu).
   */
  apt?: string[] | AptSpec | null;
  /**
   * Homebrew packages (macOS/Linux).
   */
  brew?: string[] | BrewSpec | null;
  /**
   * Cargo packages (`cargo install`).
   */
  cargo?: string[] | CargoSpec | null;
  /**
   * Chocolatey packages (Windows).
   */
  chocolatey?: string[] | PackageListSpec | null;
  /**
   * User-defined package managers not built into cfgd, each with its own
   * check/install/uninstall commands.
   */
  custom?: CustomManagerSpec[];
  /**
   * DNF packages (Fedora/RHEL).
   */
  dnf?: string[] | PackageListSpec | null;
  /**
   * Flatpak packages (Linux).
   */
  flatpak?: string[] | FlatpakSpec | null;
  /**
   * Go packages (`go install`).
   */
  go?: string[] | PackageListSpec | null;
  /**
   * Nix packages (`nix-env` / `nix profile`).
   */
  nix?: string[] | PackageListSpec | null;
  /**
   * npm global packages.
   */
  npm?: string[] | NpmSpec | null;
  /**
   * Pacman packages (Arch).
   */
  pacman?: string[] | PackageListSpec | null;
  /**
   * pipx-installed Python applications.
   */
  pipx?: string[] | PackageListSpec | null;
  /**
   * pkg packages (FreeBSD).
   */
  pkg?: string[] | PackageListSpec | null;
  /**
   * Scoop packages (Windows).
   */
  scoop?: string[] | PackageListSpec | null;
  /**
   * Snap packages (Linux).
   */
  snap?: string[] | SnapSpec | null;
  /**
   * Winget packages (Windows).
   */
  winget?: string[] | PackageListSpec | null;
  /**
   * Yum packages (legacy RHEL/CentOS).
   */
  yum?: string[] | PackageListSpec | null;
  /**
   * Zypper packages (openSUSE).
   */
  zypper?: string[] | PackageListSpec | null;
}
/**
 * The map form of a bare-list manager (`pipx`, `dnf`, `apk`, …): the same
 * list under a `packages` key.
 */
export interface PackageListSpec {
  /**
   * Package names.
   */
  packages?: string[];
}
/**
 * The object form of `apt`: a package list, a file listing packages, or both.
 * A bare list of names folds into `packages`.
 */
export interface AptSpec {
  /**
   * Path to a package-list file to install from, one name per line.
   */
  file?: string | null;
  /**
   * APT package names to install.
   */
  packages?: string[];
}
/**
 * The object form of `brew`: taps, formulae and casks, or a Brewfile. A bare
 * list of names folds into `formulae`.
 */
export interface BrewSpec {
  /**
   * Homebrew casks (GUI applications) to install.
   */
  casks?: string[];
  /**
   * Path to a Brewfile to apply instead of (or alongside) `taps`,
   * `formulae` and `casks`.
   */
  file?: string | null;
  /**
   * Homebrew formulae (CLI packages) to install.
   */
  formulae?: string[];
  /**
   * Third-party taps to add before installing formulae/casks.
   */
  taps?: string[];
}
/**
 * The object form of `cargo`: crates to install, a `Cargo.toml` to install
 * from, or both. A bare list of names folds into `packages`.
 */
export interface CargoSpec {
  /**
   * Path to a `Cargo.toml` whose binaries to install instead of `packages`.
   */
  file?: string | null;
  /**
   * Crate names to install (`cargo install`).
   */
  packages?: string[];
}
/**
 * A user-defined package manager under `spec.packages.custom[]`, driven
 * entirely by shell commands.
 *
 * ```yaml
 * custom:
 *   - name: asdf
 *     check: "command -v asdf"
 *     listInstalled: "asdf list"
 *     install: "asdf install {package}"
 *     uninstall: "asdf uninstall {package}"
 *     packages: [nodejs]
 * ```
 */
export interface CustomManagerSpec {
  /**
   * Command that exits zero when this manager is available on the machine.
   */
  check: string;
  /**
   * Command template to install a package; `{package}` is substituted.
   */
  install: string;
  /**
   * Command whose stdout lists installed package names, one per line.
   */
  listInstalled: string;
  /**
   * Manager name, used in `prefer:`/`deny:` lists and status output.
   */
  name: string;
  /**
   * Package names to install with this manager.
   */
  packages?: string[];
  /**
   * Command template to uninstall a package; `{package}` is substituted.
   */
  uninstall: string;
  /**
   * Command to refresh the manager's own package index/cache before installs.
   */
  update?: string | null;
}
/**
 * The object form of `flatpak`: application ids and the remote to install
 * them from. A bare list of ids folds into `packages`.
 */
export interface FlatpakSpec {
  /**
   * Flatpak application ids to install.
   */
  packages?: string[];
  /**
   * Remote to install from (e.g. `flathub`). Falls back to Flatpak's
   * configured default remote when omitted.
   */
  remote?: string | null;
}
/**
 * The object form of `npm`: global packages, a `package.json` to install
 * from, or both. A bare list of names folds into `global`.
 */
export interface NpmSpec {
  /**
   * Path to a `package.json` to install dependencies from.
   */
  file?: string | null;
  /**
   * Package names to install globally (`npm install -g`).
   */
  global?: string[];
}
/**
 * The object form of `snap`: strict and classic-confinement snaps. A bare
 * list of names folds into `packages`.
 */
export interface SnapSpec {
  /**
   * Snap names installed with `--classic` confinement.
   */
  classic?: string[];
  /**
   * Snap names installed with default (strict) confinement.
   */
  packages?: string[];
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
 * One entry of `spec.secrets[]`: a secret resolved into a file, into
 * environment variables, or both. At least one of `target` / `envs` must be
 * set; an entry carrying both writes the file AND exports the variables from
 * one resolution.
 *
 * ```yaml
 * secrets:
 *   - source: op://Personal/GitHub/token
 *     envs: [GITHUB_TOKEN]
 *   - source: ssh_key
 *     target: ~/.ssh/id_ed25519
 *   - source: vault://secret/data/api#key
 *     target: ~/.config/api-key
 *     envs: [API_KEY]
 * ```
 */
export interface SecretSpec {
  /**
   * Secret backend name to resolve `source` with. Falls back to
   * `spec.secrets.backend` from `cfgd.yaml` when omitted.
   */
  backend?: string | null;
  /**
   * Environment variable names to export the decrypted value under. May be
   * combined with `target`.
   */
  envs?: string[] | null;
  /**
   * Backend-specific reference to the secret (a 1Password `op://` URI, a
   * Vault path, a sops-encrypted file key, …).
   */
  source: string;
  /**
   * File path to write the decrypted secret to. May be combined with `envs`.
   */
  target?: string | null;
  /**
   * Template rendered around the resolved value before it is written to
   * `target` or exported under `envs`: every `${secret:value}` in it is
   * replaced by the value (`template: "token: ${secret:value}"`). Only a
   * provider reference (`op://`, `vault://`, …) resolves to a single value,
   * so `template` is rejected on a sops-encrypted file source.
   */
  template?: string | null;
}
