/* eslint-disable */

/**
 * Filesystem path. Relative paths are resolved according to chezmoi's configuration rules.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export type Path = string;
/**
 * Automatic boolean setting. Accepts a boolean, 'auto', or a string representation recognized by chezmoi.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export type AutoBool = boolean | string;
/**
 * List of strings. Chezmoi also accepts a comma-separated string through its configuration decoder.
 * https://www.chezmoi.io/reference/configuration-file/
 */
export type StringList = string[] | string;
/**
 * Entry types to include or exclude.
 * https://www.chezmoi.io/reference/command-line-flags/global/
 */
export type EntryTypes = (
  | 'all'
  | 'always'
  | 'dirs'
  | 'encrypted'
  | 'externals'
  | 'files'
  | 'noalways'
  | 'nodirs'
  | 'noencrypted'
  | 'noexternals'
  | 'nofiles'
  | 'none'
  | 'noremove'
  | 'noscripts'
  | 'nosymlinks'
  | 'notemplates'
  | 'remove'
  | 'scripts'
  | 'symlinks'
  | 'templates'
)[];

/**
 * Configuration for chezmoi, a dotfile manager across multiple machines.
 * https://www.chezmoi.io/reference/configuration-file/
 */
export interface ChezmoiConfiguration {
  /**
   * URI of the JSON Schema used to validate this configuration.
   * https://json-schema.org/understanding-json-schema/reference/schema.html
   */
  $schema?: string;
  cacheDir?: Path;
  color?: AutoBool;
  /**
   * Arbitrary data made available to templates.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  data?: {
    [k: string]: unknown | undefined;
  };
  env?: Environment;
  /**
   * Default structured-data output format. TOML is supported as an input format but not as an output format.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  format?: ('json' | 'yaml') | string;
  destDir?: Path;
  gitHub?: GitHub;
  /**
   * Commands to run before or after chezmoi events, keyed by event name.
   * https://www.chezmoi.io/reference/configuration-file/hooks/
   */
  hooks?: {
    [k: string]: Hook | undefined;
  };
  /**
   * Whether chezmoi may prompt for input.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  interactive?: boolean;
  /**
   * Custom interpreters keyed by file extension without the leading period.
   * https://www.chezmoi.io/reference/configuration-file/interpreters/
   */
  interpreters?: {
    [k: string]: Interpreter | undefined;
  };
  /**
   * UNDOCUMENTED. Whether chezmoi should reduce interactive behavior.
   * https://github.com/twpayne/chezmoi/blob/v2.71.1/internal/cmd/config.go
   */
  lessInteractive?: boolean;
  /**
   * How the source state is represented.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  mode?: ('file' | 'symlink') | string;
  /**
   * Pager command used for long output.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  pager?: string;
  pagerArgs?: StringList;
  persistentState?: Path;
  pinentry?: Pinentry;
  progress?: AutoBool;
  /**
   * UNDOCUMENTED. Whether potentially unsafe operations are disabled.
   * https://github.com/twpayne/chezmoi/blob/v2.71.1/internal/cmd/config.go
   */
  safe?: boolean;
  scriptEnv?: Environment;
  scriptTempDir?: Path;
  sourceDir?: Path;
  tempDir?: Path;
  template?: Template;
  /**
   * Text conversion commands used when computing diffs.
   * https://www.chezmoi.io/reference/configuration-file/textconv/
   */
  textConv?: TextConv[];
  /**
   * File creation mask. TOML supports octal literals such as 0o22; JSON and YAML use the equivalent decimal value.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  umask?: number;
  useBuiltinAge?: AutoBool;
  useBuiltinGit?: AutoBool;
  /**
   * Whether verbose output is enabled.
   * https://www.chezmoi.io/reference/configuration-file/variables/
   */
  verbose?: boolean;
  warnings?: Warnings;
  workingTree?: Path;
  awsSecretsManager?: AwsSecretsManager;
  azureKeyVault?: AzureKeyVault;
  bitwarden?: Bitwarden;
  bitwardenSecrets?: BitwardenSecrets;
  dashlane?: Dashlane;
  doppler?: Doppler;
  ejson?: Ejson;
  gopass?: Gopass;
  keepassxc?: Keepassxc;
  keeper?: Keeper;
  lastpass?: Lastpass;
  onepassword?: Onepassword;
  pass?: Pass;
  passhole?: Passhole;
  protonPass?: ProtonPass;
  rbw?: Rbw;
  secret?: Command;
  vault?: Vault;
  /**
   * Encryption method. An empty value enables automatic detection from the age or GPG sections.
   * https://www.chezmoi.io/reference/configuration-file/encryption/
   */
  encryption?: '' | 'age' | 'gpg' | 'transparent';
  age?: Age;
  gpg?: Gpg;
  add?: Add;
  cd?: Command;
  completion?: Completion;
  docker?: Docker;
  diff?: Diff;
  edit?: Edit;
  git?: Git;
  merge?: Command;
  status?: Status;
  update?: Update;
  verify?: Verify;
  [k: string]: unknown | undefined;
}
/**
 * Environment variables keyed by name.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface Environment {
  [k: string]: string | undefined;
}
/**
 * GitHub API cache settings.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface GitHub {
  /**
   * Go duration string such as '1s' or '1m'. Integer nanosecond values are also accepted.
   * https://pkg.go.dev/time#ParseDuration
   */
  refreshPeriod?: string | number;
  [k: string]: unknown | undefined;
}
/**
 * Commands run before and after a chezmoi event.
 * https://www.chezmoi.io/reference/configuration-file/hooks/
 */
export interface Hook {
  pre?: HookCommand;
  post?: HookCommand;
  [k: string]: unknown | undefined;
}
/**
 * Command or inline script executed by a hook.
 * https://www.chezmoi.io/reference/configuration-file/hooks/
 */
export interface HookCommand {
  command?: string;
  script?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * Interpreter command for files with a specific extension.
 * https://www.chezmoi.io/reference/configuration-file/interpreters/
 */
export interface Interpreter {
  command?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * Pinentry command used for passphrase prompts.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface Pinentry {
  command?: string;
  args?: StringList;
  /**
   * List of strings. Chezmoi also accepts a comma-separated string through its configuration decoder.
   * https://www.chezmoi.io/reference/configuration-file/
   */
  options?: string[] | string;
  [k: string]: unknown | undefined;
}
/**
 * Go template engine options.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface Template {
  /**
   * List of strings. Chezmoi also accepts a comma-separated string through its configuration decoder.
   * https://www.chezmoi.io/reference/configuration-file/
   */
  options?: string[] | string;
  [k: string]: unknown | undefined;
}
/**
 * Text conversion command selected by a path pattern.
 * https://www.chezmoi.io/reference/configuration-file/textconv/
 */
export interface TextConv {
  pattern?: string;
  command?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * Warning controls.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface Warnings {
  configFileTemplateHasChanged?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * AWS Secrets Manager settings.
 * https://www.chezmoi.io/reference/templates/aws-secrets-manager-functions/
 */
export interface AwsSecretsManager {
  region?: string;
  profile?: string;
  [k: string]: unknown | undefined;
}
/**
 * Azure Key Vault settings.
 * https://www.chezmoi.io/reference/templates/azure-key-vault-functions/
 */
export interface AzureKeyVault {
  defaultVault?: string;
  [k: string]: unknown | undefined;
}
/**
 * Bitwarden CLI settings.
 * https://www.chezmoi.io/reference/templates/bitwarden-functions/
 */
export interface Bitwarden {
  command?: string;
  unlock?: AutoBool;
  [k: string]: unknown | undefined;
}
/**
 * Bitwarden Secrets Manager CLI settings.
 * https://www.chezmoi.io/reference/templates/bitwarden-secrets-manager-functions/
 */
export interface BitwardenSecrets {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * Dashlane CLI settings.
 * https://www.chezmoi.io/reference/templates/dashlane-functions/
 */
export interface Dashlane {
  command?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * Doppler CLI settings.
 * https://www.chezmoi.io/reference/templates/doppler-functions/
 */
export interface Doppler {
  command?: string;
  args?: StringList;
  project?: string;
  config?: string;
  [k: string]: unknown | undefined;
}
/**
 * EJSON settings.
 * https://www.chezmoi.io/reference/templates/ejson-functions/
 */
export interface Ejson {
  keyDir?: string;
  key?: string;
  [k: string]: unknown | undefined;
}
/**
 * gopass settings.
 * https://www.chezmoi.io/reference/templates/gopass-functions/
 */
export interface Gopass {
  command?: string;
  mode?: ('' | 'builtin') | string;
  [k: string]: unknown | undefined;
}
/**
 * KeePassXC CLI settings.
 * https://www.chezmoi.io/reference/templates/keepassxc-functions/
 */
export interface Keepassxc {
  command?: string;
  database?: string;
  mode?: ('builtin' | 'cache-password' | 'open') | string;
  args?: StringList;
  prompt?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Keeper Commander settings.
 * https://www.chezmoi.io/reference/templates/keeper-functions/
 */
export interface Keeper {
  command?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * LastPass CLI settings.
 * https://www.chezmoi.io/reference/templates/lastpass-functions/
 */
export interface Lastpass {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * 1Password CLI settings.
 * https://www.chezmoi.io/reference/templates/1password-functions/
 */
export interface Onepassword {
  command?: string;
  prompt?: boolean;
  mode?: ('account' | 'connect' | 'service') | string;
  [k: string]: unknown | undefined;
}
/**
 * pass password-store settings.
 * https://www.chezmoi.io/reference/templates/pass-functions/
 */
export interface Pass {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * passhole settings.
 * https://www.chezmoi.io/reference/templates/passhole-functions/
 */
export interface Passhole {
  command?: string;
  args?: StringList;
  prompt?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Proton Pass CLI settings.
 * https://www.chezmoi.io/reference/templates/proton-pass-functions/
 */
export interface ProtonPass {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * rbw Bitwarden CLI settings.
 * https://www.chezmoi.io/reference/templates/rbw-functions/
 */
export interface Rbw {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * External command configuration.
 * https://www.chezmoi.io/reference/configuration-file/
 */
export interface Command {
  command?: string;
  args?: StringList;
  [k: string]: unknown | undefined;
}
/**
 * HashiCorp Vault CLI settings.
 * https://www.chezmoi.io/reference/templates/vault-functions/
 */
export interface Vault {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * age encryption settings.
 * https://www.chezmoi.io/reference/configuration-file/encryption/age/
 */
export interface Age {
  /**
   * UNDOCUMENTED. Internal age implementation selection; prefer the top-level useBuiltinAge setting.
   * https://github.com/twpayne/chezmoi/blob/v2.71.1/internal/chezmoi/ageencryption.go
   */
  useBuiltin?: boolean;
  command?: string;
  args?: StringList;
  identity?: string;
  identities?: StringList;
  passphrase?: boolean;
  recipient?: string;
  recipients?: StringList;
  recipientsFile?: string;
  recipientsFiles?: StringList;
  suffix?: string;
  symmetric?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * GnuPG encryption settings.
 * https://www.chezmoi.io/reference/configuration-file/encryption/gpg/
 */
export interface Gpg {
  command?: string;
  args?: StringList;
  recipient?: string;
  recipients?: StringList;
  symmetric?: boolean;
  suffix?: string;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the add command.
 * https://www.chezmoi.io/reference/commands/add/
 */
export interface Add {
  encrypt?: boolean;
  secrets?: ('ignore' | 'warning' | 'error') | string;
  templateSymlinks?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Shell completion settings.
 * https://www.chezmoi.io/reference/commands/completion/
 */
export interface Completion {
  custom?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Docker command settings.
 * https://www.chezmoi.io/reference/commands/docker/
 */
export interface Docker {
  command?: string;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the diff command.
 * https://www.chezmoi.io/reference/commands/diff/
 */
export interface Diff {
  command?: string;
  args?: StringList;
  exclude?: EntryTypes;
  pager?: string;
  pagerArgs?: StringList;
  reverse?: boolean;
  scriptContents?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the edit command.
 * https://www.chezmoi.io/reference/commands/edit/
 */
export interface Edit {
  command?: string;
  args?: StringList;
  hardlink?: boolean;
  /**
   * Go duration string such as '1s' or '1m'. Integer nanosecond values are also accepted.
   * https://pkg.go.dev/time#ParseDuration
   */
  minDuration?: string | number;
  watch?: boolean;
  apply?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Git integration settings.
 * https://www.chezmoi.io/reference/configuration-file/variables/
 */
export interface Git {
  command?: string;
  autoAdd?: boolean;
  autoCommit?: boolean;
  autoPush?: boolean;
  commitMessageTemplate?: string;
  commitMessageTemplateFile?: string;
  lfs?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the status command.
 * https://www.chezmoi.io/reference/commands/status/
 */
export interface Status {
  exclude?: EntryTypes;
  pathStyle?: ('absolute' | 'relative') | string;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the update command.
 * https://www.chezmoi.io/reference/commands/update/
 */
export interface Update {
  command?: string;
  args?: StringList;
  apply?: boolean;
  recurseSubmodules?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Defaults for the verify command.
 * https://www.chezmoi.io/reference/commands/verify/
 */
export interface Verify {
  exclude?: EntryTypes;
  [k: string]: unknown | undefined;
}
