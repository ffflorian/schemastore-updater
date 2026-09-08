/* eslint-disable */

/**
 * Controls when encryption is required for a managed file.
 */
export type EncryptionMode = 'InRepo' | 'Always';
/**
 * File deployment strategy.
 */
export type FileStrategy = 'Symlink' | 'Copy' | 'Template' | 'Hardlink';

/**
 * ConfigSource manifest published by teams for multi-source config management (cfgd-source.yaml)
 */
export interface CfgdConfigSource {
  apiVersion: string;
  kind: string;
  metadata: ConfigSourceMetadata;
  spec: ConfigSourceSpec;
}
export interface ConfigSourceMetadata {
  description?: string | null;
  name: string;
  version?: string | null;
}
export interface ConfigSourceSpec {
  policy?: ConfigSourcePolicy;
  provides?: ConfigSourceProvides;
}
export interface ConfigSourcePolicy {
  constraints?: SourceConstraints;
  locked?: PolicyItems;
  optional?: PolicyItems1;
  recommended?: PolicyItems2;
  required?: {
    aliases?: ShellAlias[];
    env?: EnvVar[];
    files?: ManagedFileSpec[];
    modules?: string[];
    packages?: PackagesSpec | null;
    profiles?: string[];
    secrets?: SecretSpec[];
    system?: {
      [k: string]: unknown | undefined;
    };
  };
}
export interface SourceConstraints {
  allowSystemChanges?: boolean;
  allowedTargetPaths?: string[];
  /**
   * Encryption requirements imposed on files delivered by this source.
   */
  encryption?: EncryptionConstraint | null;
  noScripts?: boolean;
  noSecretsRead?: boolean;
  /**
   * Require that the HEAD commit in this source's git repo has a valid
   * GPG or SSH signature. Subscribers can bypass with `security.allow-unsigned`.
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
export interface PolicyItems {
  aliases?: ShellAlias[];
  env?: EnvVar[];
  files?: ManagedFileSpec[];
  modules?: string[];
  packages?: PackagesSpec | null;
  profiles?: string[];
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
   * Controls when encryption is required for a managed file.
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
export interface SecretSpec {
  backend?: string | null;
  envs?: string[] | null;
  source: string;
  target?: string | null;
  template?: string | null;
}
export interface PolicyItems1 {
  aliases?: ShellAlias[];
  env?: EnvVar[];
  files?: ManagedFileSpec[];
  modules?: string[];
  packages?: PackagesSpec | null;
  profiles?: string[];
  secrets?: SecretSpec[];
  system?: {
    [k: string]: unknown | undefined;
  };
}
export interface PolicyItems2 {
  aliases?: ShellAlias[];
  env?: EnvVar[];
  files?: ManagedFileSpec[];
  modules?: string[];
  packages?: PackagesSpec | null;
  profiles?: string[];
  secrets?: SecretSpec[];
  system?: {
    [k: string]: unknown | undefined;
  };
}
export interface ConfigSourceProvides {
  modules?: string[];
  platformProfiles?: {
    [k: string]: string | undefined;
  };
  profileDetails?: ConfigSourceProfileEntry[];
  profiles?: string[];
}
/**
 * Detailed profile entry in a ConfigSource manifest.
 * When present, provides richer info than the flat `profiles` list.
 */
export interface ConfigSourceProfileEntry {
  description?: string | null;
  inherits?: string[];
  name: string;
  path?: string | null;
}
