/* eslint-disable */

/**
 * Controls when encryption is required for a managed file.
 */
export type EncryptionMode = 'InRepo' | 'Always';
/**
 * File format used to interpret and re-serialize a `Patch`-strategy target.
 */
export type PatchFormat = 'Ini' | 'Json' | 'Yaml' | 'Toml';
/**
 * File deployment strategy.
 */
export type FileStrategy = 'Symlink' | 'Copy' | 'Template' | 'Hardlink' | 'Patch';

/**
 * ConfigSource manifest published by teams for multi-source config management (cfgd-source.yaml)
 */
export interface CfgdConfigSource {
  /**
   * API group/version, e.g. `cfgd.io/v1alpha1`.
   */
  apiVersion: string;
  /**
   * Document kind. Always `ConfigSource` for this file.
   */
  kind: string;
  metadata: ConfigSourceMetadata;
  spec: ConfigSourceSpec;
}
/**
 * Identifying metadata for this source.
 */
export interface ConfigSourceMetadata {
  /**
   * A one-line human summary of what this source provides.
   */
  description?: string | null;
  /**
   * The source's published name, as its maintainer spells it. Shown wherever
   * the manifest is displayed (`cfgd source show`, the summary a subscriber
   * approves before trusting the source) and carried in `-o json` output.
   * Required. A subscriber registers the source under a local name of their
   * own choosing, so this value identifies the source to a reader rather
   * than keying anything cfgd stores.
   */
  name: string;
  /**
   * The source manifest's own version, shown to subscribers.
   */
  version?: string | null;
}
/**
 * What the source publishes and its policy tiers.
 */
export interface ConfigSourceSpec {
  policy?: ConfigSourcePolicy;
  provides?: ConfigSourceProvides;
}
/**
 * Policy tiers (required/recommended/optional/locked) and constraints
 * this source enforces on subscribers.
 */
export interface ConfigSourcePolicy {
  constraints?: SourceConstraints;
  locked?: PolicyItems;
  optional?: PolicyItems1;
  recommended?: PolicyItems2;
  /**
   * Items every subscriber receives unconditionally.
   */
  required?: {
    /**
     * Shell aliases offered at this tier.
     */
    aliases?: ShellAlias[];
    /**
     * Environment variables offered at this tier.
     */
    env?: EnvVar[];
    /**
     * Files offered at this tier.
     */
    files?: ManagedFileSpec[];
    /**
     * Module names offered at this tier.
     */
    modules?: string[];
    /**
     * Packages offered at this tier.
     */
    packages?: PackagesSpec | null;
    /**
     * Profile names this tier recommends composing in.
     */
    profiles?: string[];
    /**
     * Secrets offered at this tier.
     */
    secrets?: SecretSpec[];
    /**
     * System configurator settings offered at this tier.
     */
    system?: {
      [k: string]: unknown | undefined;
    };
  };
}
/**
 * Restrictions this source imposes on how subscribers may compose it.
 */
export interface SourceConstraints {
  /**
   * Allow this source to deliver `system:` configurator settings. Default: `false`.
   */
  allowSystemChanges?: boolean;
  /**
   * Glob patterns restricting which file targets this source may deploy to.
   * Empty means no restriction.
   */
  allowedTargetPaths?: string[];
  /**
   * Encryption requirements imposed on files delivered by this source.
   */
  encryption?: EncryptionConstraint | null;
  /**
   * Reject lifecycle scripts (profile-layer and module `run:` bodies) this
   * source delivers, unless a subscriber opts in via
   * `subscription.allowScripts`. Default: `true`.
   */
  noScripts?: boolean;
  /**
   * Reject `${secret:…}` references this source's delivered content
   * resolves. Default: `true`.
   */
  noSecretsRead?: boolean;
  /**
   * Require that the HEAD commit in this source's git repo has a valid
   * GPG or SSH signature. ORed with the subscriber's
   * `subscription.requireSignedCommits`, so either side asking is enough.
   * Subscribers can bypass both with `spec.security.allowUnsigned`.
   */
  requireSignedCommits?: boolean;
}
/**
 * Encryption constraint applied to files from a config source.
 */
export interface EncryptionConstraint {
  /**
   * If set, restrict which backend is acceptable.
   */
  backend?: string | null;
  /**
   * If set, restrict which encryption mode is acceptable.
   */
  mode?: EncryptionMode | null;
  /**
   * Glob patterns or explicit paths that must be encrypted.
   */
  requiredTargets?: string[];
}
/**
 * Items every subscriber receives and cannot override locally.
 */
export interface PolicyItems {
  /**
   * Shell aliases offered at this tier.
   */
  aliases?: ShellAlias[];
  /**
   * Environment variables offered at this tier.
   */
  env?: EnvVar[];
  /**
   * Files offered at this tier.
   */
  files?: ManagedFileSpec[];
  /**
   * Module names offered at this tier.
   */
  modules?: string[];
  /**
   * Packages offered at this tier.
   */
  packages?: PackagesSpec | null;
  /**
   * Profile names this tier recommends composing in.
   */
  profiles?: string[];
  /**
   * Secrets offered at this tier.
   */
  secrets?: SecretSpec[];
  /**
   * System configurator settings offered at this tier.
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
   * Controls when encryption is required for a managed file.
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
/**
 * Items a subscriber must explicitly name in `subscription.optIn` to receive.
 */
export interface PolicyItems1 {
  /**
   * Shell aliases offered at this tier.
   */
  aliases?: ShellAlias[];
  /**
   * Environment variables offered at this tier.
   */
  env?: EnvVar[];
  /**
   * Files offered at this tier.
   */
  files?: ManagedFileSpec[];
  /**
   * Module names offered at this tier.
   */
  modules?: string[];
  /**
   * Packages offered at this tier.
   */
  packages?: PackagesSpec | null;
  /**
   * Profile names this tier recommends composing in.
   */
  profiles?: string[];
  /**
   * Secrets offered at this tier.
   */
  secrets?: SecretSpec[];
  /**
   * System configurator settings offered at this tier.
   */
  system?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * Items a subscriber receives when `subscription.acceptRecommended` is set.
 */
export interface PolicyItems2 {
  /**
   * Shell aliases offered at this tier.
   */
  aliases?: ShellAlias[];
  /**
   * Environment variables offered at this tier.
   */
  env?: EnvVar[];
  /**
   * Files offered at this tier.
   */
  files?: ManagedFileSpec[];
  /**
   * Module names offered at this tier.
   */
  modules?: string[];
  /**
   * Packages offered at this tier.
   */
  packages?: PackagesSpec | null;
  /**
   * Profile names this tier recommends composing in.
   */
  profiles?: string[];
  /**
   * Secrets offered at this tier.
   */
  secrets?: SecretSpec[];
  /**
   * System configurator settings offered at this tier.
   */
  system?: {
    [k: string]: unknown | undefined;
  };
}
/**
 * Profiles and modules this source publishes.
 */
export interface ConfigSourceProvides {
  /**
   * Names of modules this source publishes.
   */
  modules?: string[];
  /**
   * Maps a platform/distro tag (`macos`, `debian`, …) to the profile name
   * to use on that platform.
   */
  platformProfiles?: {
    [k: string]: string | undefined;
  };
  /**
   * Published profiles with descriptions, paths, and inheritance — richer
   * than the flat `profiles` list.
   */
  profileDetails?: ConfigSourceProfileEntry[];
  /**
   * Flat list of published profile names. Superseded by `profileDetails`
   * when that list is non-empty.
   */
  profiles?: string[];
}
/**
 * Detailed profile entry in a ConfigSource manifest.
 * When present, provides richer info than the flat `profiles` list.
 */
export interface ConfigSourceProfileEntry {
  /**
   * A one-line human summary of the profile.
   */
  description?: string | null;
  /**
   * Names of other published profiles this one inherits from.
   */
  inherits?: string[];
  /**
   * Name the profile is published under, and the value `cfgd profile
   * switch` takes to activate it.
   */
  name: string;
  /**
   * Path to the profile's manifest within the source repository, if not at
   * the conventional location.
   */
  path?: string | null;
}
