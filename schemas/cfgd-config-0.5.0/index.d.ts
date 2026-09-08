/* eslint-disable */

/**
 * Daemon drift reconciliation policy. PascalCase values match K8s enum conventions.
 */
export type DriftPolicy = 'Auto' | 'NotifyOnly' | 'Prompt';
export type ReconcilePatchKind = 'Module' | 'Profile';
export type OriginType = 'Git' | 'Server';

/**
 * Root configuration file for cfgd (cfgd.yaml)
 */
export interface CfgdConfig {
  apiVersion: string;
  kind: string;
  metadata: ConfigMetadata;
  spec: ConfigSpec;
}
export interface ConfigMetadata {
  name: string;
}
export interface ConfigSpec {
  /**
   * AI assistant configuration: provider, model, and API key env var.
   */
  ai?: AiConfig | null;
  /**
   * CLI aliases: map of alias name → command string.
   * Built-in defaults (add, remove) can be overridden or extended.
   */
  aliases?: {
    [k: string]: string | undefined;
  };
  /**
   * Compliance snapshot configuration.
   */
  compliance?: ComplianceConfig | null;
  daemon?: DaemonConfig | null;
  /**
   * Global default file deployment strategy. Per-file overrides take precedence.
   */
  fileStrategy?: 'Symlink' | 'Copy' | 'Template' | 'Hardlink';
  /**
   * Module configuration: registries and security.
   */
  modules?: ModulesConfig | null;
  origin?: OriginSpec[];
  profile?: string | null;
  secrets?: SecretsConfig | null;
  /**
   * Security settings for source signature verification.
   */
  security?: SecurityConfig | null;
  sources?: SourceSpec[];
  theme?: ThemeConfig | null;
  /**
   * Update policy for the cfgd binary and authored skills.
   */
  update?: UpdateConfig | null;
}
export interface AiConfig {
  apiKeyEnv?: string;
  model?: string;
  provider?: string;
}
export interface ComplianceConfig {
  enabled?: boolean;
  export?: ComplianceExport;
  interval?: string;
  retention?: string;
  scope?: ComplianceScope;
}
export interface ComplianceExport {
  format?: 'Json' | 'Yaml';
  path?: string;
}
export interface ComplianceScope {
  files?: boolean;
  packages?: boolean;
  secrets?: boolean;
  system?: boolean;
  watchPackageManagers?: string[];
  watchPaths?: string[];
}
export interface DaemonConfig {
  enabled?: boolean;
  notify?: NotifyConfig | null;
  reconcile?: ReconcileConfig | null;
  sync?: SyncConfig | null;
  /**
   * Mirror daemon log output into the Windows Event Log under the `cfgd`
   * source, in addition to the default file appender at
   * `%LOCALAPPDATA%\cfgd\daemon.log`. No effect on Unix. Read by
   * `cfgd daemon install` to bake `--enable-event-log` into the service
   * binPath; changes require reinstalling the service to take effect.
   */
  windowsEventLog?: boolean;
}
export interface NotifyConfig {
  drift?: boolean;
  method?: 'Desktop' | 'Stdout' | 'Webhook';
  webhookUrl?: string | null;
}
export interface ReconcileConfig {
  autoApply?: boolean;
  /**
   * Policy for daemon auto-reconciliation of detected drift.
   * `Auto` = silently apply (must opt-in), `NotifyOnly` = notify but don't
   * apply (safe default), `Prompt` = future interactive approval.
   */
  driftPolicy?: 'Auto' | 'NotifyOnly' | 'Prompt';
  interval?: string;
  onChange?: boolean;
  /**
   * Per-module or per-profile reconcile overrides (kustomize-style patches).
   * Each patch targets a specific Module or Profile by name and overrides
   * individual reconcile fields. Precedence: Module patch > Profile patch > global.
   */
  patches?: ReconcilePatch[];
  policy?: AutoApplyPolicyConfig | null;
}
/**
 * A kustomize-style reconcile patch targeting a specific module or profile.
 * When `name` is omitted, the patch applies to all entities of the given kind.
 */
export interface ReconcilePatch {
  autoApply?: boolean | null;
  driftPolicy?: DriftPolicy | null;
  interval?: string | null;
  kind: ReconcilePatchKind;
  name?: string | null;
}
export interface AutoApplyPolicyConfig {
  lockedConflict?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
  newOptional?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
  newRecommended?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
}
export interface SyncConfig {
  autoPull?: boolean;
  autoPush?: boolean;
  interval?: string;
}
export interface ModulesConfig {
  /**
   * Module registries — git repos containing modules in a prescribed directory structure.
   */
  registries?: ModuleRegistryEntry[];
  /**
   * Module security settings.
   */
  security?: ModuleSecurityConfig | null;
}
/**
 * A module registry — a git repo containing modules in `modules/<name>/module.yaml` structure.
 */
export interface ModuleRegistryEntry {
  /**
   * Short name / alias for this source (defaults to GitHub org name).
   */
  name: string;
  /**
   * Git URL of the source repository.
   */
  url: string;
}
export interface ModuleSecurityConfig {
  /**
   * Require GPG/SSH signatures on all remote module tags.
   * When true, unsigned modules are rejected unless `--allow-unsigned` is passed.
   */
  requireSignatures?: boolean;
}
export interface OriginSpec {
  auth?: string | null;
  branch?: string;
  /**
   * SSH `StrictHostKeyChecking` policy for git operations.
   * `AcceptNew` (default): accept first-seen keys, reject changed keys.
   * `Yes`: require keys to already exist in known_hosts (high-security).
   * `No`: accept any key (insecure, not recommended).
   */
  sshStrictHostKeyChecking?: 'AcceptNew' | 'Yes' | 'No';
  type: OriginType;
  url: string;
}
export interface SecretsConfig {
  backend?: string;
  integrations?: SecretIntegration[];
  sops?: SopsConfig | null;
}
export interface SecretIntegration {
  name: string;
  [k: string]: unknown | undefined;
}
export interface SopsConfig {
  ageKey?: string | null;
}
export interface SecurityConfig {
  /**
   * Allow unsigned source content even when the source requires signed commits.
   * Intended for development/testing environments.
   */
  allowUnsigned?: boolean;
}
export interface SourceSpec {
  name: string;
  origin: OriginSpec;
  subscription?: SubscriptionSpec;
  sync?: SourceSyncSpec;
}
export interface SubscriptionSpec {
  acceptRecommended?: boolean;
  /**
   * Subscriber opt-in to run lifecycle scripts (profile-layer and
   * source-delivered module bodies) from this source even when the source's
   * `constraints.no_scripts` would otherwise reject them. Default `false`:
   * the source's own `no_scripts` constraint governs.
   */
  allowScripts?: boolean;
  optIn?: string[];
  overrides?: {
    [k: string]: unknown | undefined;
  };
  priority?: number;
  profile?: string | null;
  reject?: {
    [k: string]: unknown | undefined;
  };
}
export interface SourceSyncSpec {
  autoApply?: boolean;
  interval?: string;
  pinVersion?: string | null;
  /**
   * Fail-closed marker. When `true`, a failure to load this source (fetch,
   * manifest, signature, or an unresolvable `pinVersion`) is fatal — apply /
   * plan / compose abort rather than silently dropping the source. Default
   * `false` keeps the best-effort warn-and-continue behaviour for optional
   * sources. Use it for security or team baselines that must always be
   * composed in.
   */
  required?: boolean;
}
export interface ThemeConfig {
  name?: string;
  overrides?: ThemeOverrides;
  [k: string]: unknown | undefined;
}
export interface ThemeOverrides {
  accent?: string | null;
  diffAdd?: string | null;
  diffContext?: string | null;
  diffRemove?: string | null;
  error?: string | null;
  header?: string | null;
  iconArrow?: string | null;
  iconFail?: string | null;
  iconOk?: string | null;
  iconPending?: string | null;
  iconRunning?: string | null;
  iconSkipped?: string | null;
  iconWarn?: string | null;
  info?: string | null;
  muted?: string | null;
  running?: string | null;
  secondary?: string | null;
  success?: string | null;
  warning?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for cfgd self-update checks and authored-skill updates.
 */
export interface UpdateConfig {
  /**
   * Release channel to track (e.g. `stable`, `beta`). When unset, cfgd uses
   * its built-in default channel.
   */
  channel?: string | null;
  /**
   * How often to check for updates, as a duration string (e.g. `24h`, `7d`,
   * `30m`) or a plain number of seconds. Defaults to `24h`.
   */
  interval?: string;
  /**
   * How update checks for the cfgd binary behave. Defaults to `Prompt`.
   */
  policy?: 'Auto' | 'Prompt' | 'Notify' | 'Manual';
  skills?: SkillUpdateConfig;
}
/**
 * Update policy for authored skills. Defaults to inheriting `policy`.
 */
export interface SkillUpdateConfig {
  /**
   * How skill update checks behave. Defaults to `Inherit` (defer to the
   * binary-level policy).
   */
  policy?: 'Inherit' | 'Auto' | 'Prompt' | 'Notify' | 'Manual';
}
