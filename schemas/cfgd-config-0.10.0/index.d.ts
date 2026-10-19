/* eslint-disable */

/**
 * Daemon drift reconciliation policy. Values are PascalCase, matching
 * Kubernetes API conventions.
 */
export type DriftPolicy = 'Auto' | 'NotifyOnly' | 'Prompt';

/**
 * Root configuration file for cfgd (cfgd.yaml)
 */
export interface CfgdConfig {
  /**
   * API group/version, e.g. `cfgd.io/v1alpha1`. See `API_VERSION`.
   */
  apiVersion: string;
  /**
   * Document kind. Always `CfgdConfig` for this file.
   */
  kind: string;
  metadata: ConfigMetadata;
  spec: ConfigSpec;
}
/**
 * Identifying metadata for this config document.
 */
export interface ConfigMetadata {
  /**
   * A human-chosen name for this machine's config, shown in status output.
   */
  name: string;
}
/**
 * The body of the document: everything cfgd reads to decide what this
 * machine should look like.
 */
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
   * Periodic snapshots of machine state, for drift history and audit.
   * Omitted, no snapshots are taken and `cfgd compliance` reports only
   * what it collects on the spot.
   */
  compliance?: ComplianceConfig | null;
  /**
   * The background daemon that watches for drift between reconciles.
   * Omitted, no daemon runs and every reconcile is an explicit
   * `cfgd apply`.
   */
  daemon?: DaemonConfig | null;
  /**
   * Global default file deployment strategy. Per-file overrides take precedence.
   *
   * `Patch` is rejected here: it is defined by a per-file `patch:` block,
   * which a file inheriting the global default cannot have.
   */
  fileStrategy?: 'Symlink' | 'Copy' | 'Template' | 'Hardlink';
  /**
   * Module configuration: registries and security.
   */
  modules?: ModulesConfig | null;
  /**
   * Git origins this config's changes may be pushed to / pulled from.
   */
  origin?: OriginSpec[];
  /**
   * Name of the active `ProfileSpec` to reconcile against.
   */
  profile?: string | null;
  /**
   * Which backend resolves a `${secret:…}` reference, and how it is
   * reached. Omitted, no backend is configured and a declared secret
   * reference fails to resolve.
   */
  secrets?: SecretsConfig | null;
  /**
   * Security settings for source signature verification.
   */
  security?: SecurityConfig | null;
  /**
   * Additional config sources this machine subscribes to.
   */
  sources?: SourceSpec[];
  /**
   * Colours and glyphs cfgd renders with: a named preset (`default`,
   * `dracula`, `solarized-dark`, `solarized-light`, `nord`, `monokai`,
   * `adventure-time`, `catppuccin-mocha`, `gruvbox-dark`, `tokyo-night`,
   * `one-dark`, `minimal`) plus per-slot overrides. Omitted, the
   * `default` preset applies.
   */
  theme?: ThemeConfig | null;
  /**
   * Update policy for the cfgd binary and authored skills.
   */
  update?: UpdateConfig | null;
  /**
   * Whether closing `→` usage hints render. Omitted, hints render.
   */
  usageHints?: boolean | null;
}
/**
 * `spec.ai`: settings for `cfgd generate`'s AI-guided session.
 *
 * ```yaml
 * ai:
 *   provider: claude
 *   model: claude-sonnet-5
 *   apiKeyEnv: ANTHROPIC_API_KEY
 * ```
 */
export interface AiConfig {
  /**
   * Name of the environment variable holding the API key. Default: `ANTHROPIC_API_KEY`.
   */
  apiKeyEnv?: string;
  /**
   * The model identifier to request. Default: `claude-sonnet-5`.
   */
  model?: string;
  /**
   * The AI provider name. Default: `claude`.
   */
  provider?: string;
}
/**
 * `spec.compliance`: periodic snapshotting of machine state for drift/audit history.
 *
 * ```yaml
 * compliance:
 *   enabled: true
 *   interval: 1h
 *   retention: 30d
 *   scope:
 *     files: true
 *     packages: true
 *   export:
 *     format: Json
 *     path: ~/.local/state/cfgd/compliance/
 * ```
 */
export interface ComplianceConfig {
  /**
   * Whether the daemon takes compliance snapshots on its tick. Default: `false`.
   */
  enabled?: boolean;
  export?: ComplianceExport;
  /**
   * How often a snapshot is taken, as a duration string. Default: `1h`.
   */
  interval?: string;
  /**
   * How long a snapshot is kept before being pruned, as a duration string.
   * Default: `30d`.
   */
  retention?: string;
  scope?: ComplianceScope;
}
/**
 * Where and in what format a snapshot is exported.
 */
export interface ComplianceExport {
  /**
   * Export file format. Default: `Json`.
   */
  format?: 'Json' | 'Yaml';
  /**
   * Directory a snapshot file is written into. Default:
   * `~/.local/state/cfgd/compliance/`.
   */
  path?: string;
}
/**
 * Which surfaces a snapshot covers.
 */
export interface ComplianceScope {
  /**
   * Include declared files' content/permission state. Default: `true`.
   */
  files?: boolean;
  /**
   * Include declared packages' installed state. Default: `true`.
   */
  packages?: boolean;
  /**
   * Include declared secrets' presence/hash state (never plaintext). Default: `true`.
   */
  secrets?: boolean;
  /**
   * Include system configurator settings. Default: `true`.
   */
  system?: boolean;
  /**
   * Extra package managers to watch beyond those a module declares against.
   */
  watchPackageManagers?: string[];
  /**
   * Extra filesystem paths to watch for drift beyond declared files.
   */
  watchPaths?: string[];
}
/**
 * `spec.daemon`: settings for `cfgd daemon`'s background reconcile loop.
 *
 * ```yaml
 * daemon:
 *   enabled: true
 *   reconcile:
 *     interval: 5m
 *     autoApply: false
 *   sync:
 *     autoPull: true
 *   notify:
 *     drift: true
 * ```
 */
export interface DaemonConfig {
  /**
   * Whether the daemon runs at all. Default: `false`.
   */
  enabled?: boolean;
  /**
   * How the daemon reports detected drift.
   */
  notify?: NotifyConfig | null;
  /**
   * How often the daemon looks for drift and what it does when it finds
   * some. Omitted, the daemon reconciles on the built-in defaults: every
   * `5m`, notifying rather than applying.
   */
  reconcile?: ReconcileConfig | null;
  /**
   * Whether the daemon keeps the config directory in step with its git
   * remote, and how often. Omitted, the daemon never touches git and every
   * pull or push stays a manual `cfgd sync`.
   */
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
/**
 * `spec.notify`: how the daemon reports detected drift.
 *
 * ```yaml
 * notify:
 *   drift: true
 *   method: Webhook
 *   webhookUrl: https://example.com/hook
 * ```
 */
export interface NotifyConfig {
  /**
   * Send a notification whenever the daemon detects drift. Default: `false`.
   */
  drift?: boolean;
  /**
   * Where a drift notification is delivered. Default: `Desktop`.
   */
  method?: 'Desktop' | 'Stdout' | 'Webhook';
  /**
   * Webhook URL to POST to when `method` is `Webhook`. Required only for that method.
   */
  webhookUrl?: string | null;
}
/**
 * `spec.daemon.reconcile`: how often and how aggressively the daemon reconciles.
 *
 * ```yaml
 * reconcile:
 *   interval: 5m
 *   onChange: true
 *   autoApply: false
 *   driftPolicy: NotifyOnly
 * ```
 */
export interface ReconcileConfig {
  /**
   * Apply new/changed source-recommended modules automatically. Default:
   * `false`. Independent of `driftPolicy`, which governs already-declared
   * drift instead.
   */
  autoApply?: boolean;
  /**
   * Policy for daemon auto-reconciliation of detected drift.
   * `Auto` = silently apply (must opt-in), `NotifyOnly` = notify but don't
   * apply (safe default), `Prompt` = future interactive approval.
   */
  driftPolicy?: 'Auto' | 'NotifyOnly' | 'Prompt';
  /**
   * How often the daemon checks for drift, as a duration string. Default: `5m`.
   */
  interval?: string;
  /**
   * Trigger an immediate reconcile when a watched file changes, in addition to
   * the timed interval. Default: `false`.
   */
  onChange?: boolean;
  /**
   * Per-module or per-profile reconcile overrides (kustomize-style patches).
   * Each patch targets a specific Module or Profile by name and overrides
   * individual reconcile fields. Precedence: Module patch > Profile patch > global.
   */
  patches?: ReconcilePatch[];
  /**
   * Auto-apply decisions for new/changed module recommendations.
   */
  policy?: AutoApplyPolicyConfig | null;
}
/**
 * A kustomize-style reconcile patch targeting a specific module or profile.
 * When `name` is omitted, the patch applies to all entities of the given kind.
 */
export interface ReconcilePatch {
  /**
   * Overrides the global `autoApply` for the targeted entity.
   */
  autoApply?: boolean | null;
  /**
   * Overrides the global `driftPolicy` for the targeted entity.
   */
  driftPolicy?: DriftPolicy | null;
  /**
   * Overrides the global reconcile interval for the targeted entity.
   */
  interval?: string | null;
  /**
   * Whether this patch targets a `Module` or a `Profile`.
   */
  kind: 'Module' | 'Profile';
  /**
   * Name of the module/profile this patch targets. Omitted to target every
   * entity of `kind`.
   */
  name?: string | null;
}
/**
 * `spec.daemon.reconcile.policy`: what the daemon does when a source recommends
 * a module change it did not previously know about.
 *
 * ```yaml
 * policy:
 *   newRecommended: Accept
 *   newOptional: Ignore
 *   lockedConflict: Notify
 * ```
 */
export interface AutoApplyPolicyConfig {
  /**
   * Action when a source's recommendation conflicts with a locked version.
   * Default: `Notify`.
   */
  lockedConflict?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
  /**
   * Action for a newly available optional module. Default: `Ignore`.
   */
  newOptional?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
  /**
   * Action for a newly recommended module. Default: `Notify`.
   */
  newRecommended?: 'Notify' | 'Accept' | 'Reject' | 'Ignore';
}
/**
 * `spec.sync`: automatic push/pull settings for the daemon's git sync loop.
 *
 * ```yaml
 * sync:
 *   autoPush: true
 *   autoPull: true
 *   interval: 5m
 * ```
 */
export interface SyncConfig {
  /**
   * Automatically pull upstream config changes. Default: `false`.
   */
  autoPull?: boolean;
  /**
   * Automatically commit and push local config changes. Default: `false`.
   */
  autoPush?: boolean;
  /**
   * How often the daemon runs the sync loop, as a duration string (`"5m"`, `"1h"`).
   * Default: `1h`.
   */
  interval?: string;
}
/**
 * `spec.modules`: module registries and their security requirements.
 *
 * ```yaml
 * modules:
 *   registries:
 *     - name: acme
 *       url: https://github.com/acme/cfgd-modules
 *   security:
 *     requireSignatures: true
 * ```
 */
export interface ModulesConfig {
  /**
   * Module registries — git repos containing modules in a prescribed directory structure.
   */
  registries?: ModuleRegistryEntry[];
  /**
   * Signature requirements for modules pulled from these registries.
   * Omitted, signatures are not required and an unsigned module tag is
   * accepted.
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
   * Git URL of the registry repository, in any form git accepts — an HTTPS
   * or SSH clone URL, or a GitHub `owner/repo` shorthand cfgd expands to the
   * full URL. Required. The repository is cloned into the local cache and
   * scanned for `modules/<name>/module.yaml` entries, which is what
   * `cfgd module search` and `cfgd module add` resolve against.
   */
  url: string;
}
/**
 * `spec.modules.security`: signature requirements for modules pulled from a registry.
 */
export interface ModuleSecurityConfig {
  /**
   * Require GPG/SSH signatures on all remote module tags.
   * When true, unsigned modules are rejected unless `--allow-unsigned` is passed.
   */
  requireSignatures?: boolean;
}
/**
 * One entry of `spec.origin[]`: a remote this machine's config can sync with.
 *
 * ```yaml
 * origin:
 *   - type: Git
 *     url: git@github.com:me/dotfiles.git
 *     branch: main
 * ```
 */
export interface OriginSpec {
  /**
   * Auth method override for this origin (e.g. a credential-helper name).
   * Omitted uses the ambient git/SSH credential configuration.
   */
  auth?: string | null;
  /**
   * Branch to sync against. Default: `master`.
   */
  branch?: string;
  /**
   * SSH `StrictHostKeyChecking` policy for git operations.
   * `AcceptNew` (default): accept first-seen keys, reject changed keys.
   * `Yes`: require keys to already exist in known_hosts (high-security).
   * `No`: accept any key (insecure, not recommended).
   */
  sshStrictHostKeyChecking?: 'AcceptNew' | 'Yes' | 'No';
  /**
   * Kind of origin: `Git` (a git remote) or `Server` (the device gateway).
   */
  type: 'Git' | 'Server';
  /**
   * The origin's URL (a git remote, or the gateway's base URL).
   */
  url: string;
}
/**
 * `spec.secrets`: the default secret backend and its integrations.
 *
 * ```yaml
 * secrets:
 *   backend: sops
 *   sops:
 *     ageKey: ~/.config/sops/age/keys.txt
 *   integrations:
 *     - name: 1password
 *       vault: Personal
 * ```
 */
export interface SecretsConfig {
  /**
   * Default secret backend name (`sops`, `1password`, `bitwarden`, `vault`, `age`).
   * Default: `sops`.
   */
  backend?: string;
  /**
   * Named backend integrations a `${secret:<name>:<ref>}` reference can select.
   */
  integrations?: SecretIntegration[];
  /**
   * sops-specific settings, used when `backend` is `sops`.
   */
  sops?: SopsConfig | null;
}
/**
 * One named secret backend integration under `spec.secrets.integrations[]`.
 *
 * Every field beyond `name` is backend-specific and captured verbatim into
 * `extra`, so it accepts arbitrary per-backend keys (`vault`/`item` for
 * 1Password, `mount`/`path` for Vault, and so on).
 *
 * ```yaml
 * integrations:
 *   - name: 1password
 *     vault: Personal
 *     item: GitHub Token
 * ```
 */
export interface SecretIntegration {
  /**
   * Integration name (`1password`, `bitwarden`, `vault`), referenced by
   * `${secret:<name>:<ref>}`.
   */
  name: string;
  [k: string]: unknown | undefined;
}
/**
 * sops backend settings under `spec.secrets.sops`.
 *
 * ```yaml
 * sops:
 *   ageKey: ~/.config/sops/age/keys.txt
 * ```
 */
export interface SopsConfig {
  /**
   * Path to the age private key file sops decrypts with. Falls back to sops's
   * own default search path when omitted.
   */
  ageKey?: string | null;
}
/**
 * `spec.security`: source signature-verification settings.
 *
 * ```yaml
 * security:
 *   allowUnsigned: false
 * ```
 */
export interface SecurityConfig {
  /**
   * Allow unsigned source content even when the source requires signed commits.
   * Intended for development/testing environments.
   */
  allowUnsigned?: boolean;
}
/**
 * One entry of `spec.sources[]`: a remote config source this machine
 * subscribes to.
 *
 * ```yaml
 * sources:
 *   - name: team-baseline
 *     origin:
 *       type: Git
 *       url: git@github.com:acme/cfgd-baseline.git
 *     subscription:
 *       acceptRecommended: true
 *     sync:
 *       interval: 1h
 * ```
 */
export interface SourceSpec {
  /**
   * Local name for this source, used in `cfgd source` commands and status output.
   */
  name: string;
  origin: OriginSpec;
  subscription?: SubscriptionSpec;
  sync?: SourceSyncSpec;
}
/**
 * What this machine accepts from the source and how it applies.
 */
export interface SubscriptionSpec {
  /**
   * Automatically accept the source's `recommended` policy tier without
   * prompting. Default: `false`.
   */
  acceptRecommended?: boolean;
  /**
   * Subscriber opt-in to run lifecycle scripts (profile-layer and
   * source-delivered module bodies) from this source even when the source's
   * `constraints.noScripts` would otherwise reject them. Default `false`:
   * the source's own `noScripts` constraint governs.
   */
  allowScripts?: boolean;
  /**
   * Names from the source's `optional` policy tier to accept.
   */
  optIn?: string[];
  /**
   * Local values to deep-merge on top of what the source delivers, applied
   * after composition.
   */
  overrides?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Merge priority against other sources and the local profile; higher wins
   * on conflicting leaf values. Default: `500`. Capped at
   * `MAX_SOURCE_PRIORITY`.
   */
  priority?: number;
  /**
   * Which of the source's published profiles to compose against. Omitted
   * composes every profile the source provides.
   */
  profile?: string | null;
  /**
   * Items from the source's `recommended` tier to drop entirely rather than
   * accept. A mapping under `packages`, `env`, `aliases`, and/or `modules`;
   * any other top-level key is rejected as a typo.
   */
  reject?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Subscriber-side demand that this source's HEAD commit carry a valid GPG
   * or SSH signature.
   *
   * The trust anchor for the check. `constraints.requireSignedCommits` says
   * the same thing, but it is read from the source's manifest INSIDE the
   * cached clone, so whoever can write the cache can also clear it. This
   * flag is read from the subscriber's own config, which the cache cannot
   * reach.
   *
   * ORed with the manifest's flag, so it only ever ADDS strictness: a
   * manifest `true` is never weakened by a subscriber `false`. Default
   * `false`. `spec.security.allowUnsigned` still bypasses both.
   */
  requireSignedCommits?: boolean;
}
/**
 * How often and under what conditions the source is refreshed.
 */
export interface SourceSyncSpec {
  /**
   * After a refresh that CHANGED this source, reconcile the whole profile
   * immediately and apply, forcing `Auto` for that tick regardless of
   * `spec.daemon.reconcile.driftPolicy`. The source-decision gate is
   * untouched: an item awaiting a decision is withheld exactly as it would
   * be on any other tick. Default: `false`, which records the change and
   * leaves the apply to the ordinary reconcile tick or to `cfgd sync`.
   */
  autoApply?: boolean;
  /**
   * How often to fetch and re-resolve the source, as a duration string.
   * Default: `1h`.
   */
  interval?: string;
  /**
   * Pin to a specific git tag/branch/commit instead of tracking the origin's
   * default branch.
   */
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
/**
 * `spec.theme`: the active output preset and any per-color/icon overrides.
 *
 * Accepts either a bare string (the preset name) or a mapping:
 *
 * ```yaml
 * theme: dracula
 * # or
 * theme:
 *   name: dracula
 *   overrides:
 *     header: "#ff0000"
 *     iconOk: "Y"
 * ```
 */
export interface ThemeConfig {
  /**
   * Preset name (`default`, `dracula`, `solarized-dark`, `solarized-light`,
   * `nord`, `monokai`, `adventure-time`, `catppuccin-mocha`, `gruvbox-dark`,
   * `tokyo-night`, `one-dark`, `minimal`). Default: `default`.
   */
  name?: string;
  overrides?: ThemeOverrides;
  [k: string]: unknown | undefined;
}
/**
 * Per-color and per-icon overrides applied on top of the named preset.
 */
export interface ThemeOverrides {
  /**
   * Color for accent status lines: attention without alarm. Hex color.
   */
  accent?: string | null;
  /**
   * Color for an added diff line. Hex color.
   */
  diffAdd?: string | null;
  /**
   * Color for an unchanged diff context line. Hex color.
   */
  diffContext?: string | null;
  /**
   * Color for a removed diff line. Hex color.
   */
  diffRemove?: string | null;
  /**
   * Color for failure status lines. Hex color.
   */
  error?: string | null;
  /**
   * Color for a top-level heading. Hex color (`"#ff0000"`).
   */
  header?: string | null;
  /**
   * Glyph rendered for an `old -> new` relationship (e.g. `→`).
   */
  iconArrow?: string | null;
  /**
   * Glyph for failure status lines. Default varies by preset (e.g. `✗`).
   */
  iconFail?: string | null;
  /**
   * Glyph for informational status lines. Default varies by preset.
   */
  iconInfo?: string | null;
  /**
   * Glyph for success status lines. Default varies by preset (e.g. `✓`).
   */
  iconOk?: string | null;
  /**
   * Glyph for pending status lines. Default varies by preset.
   */
  iconPending?: string | null;
  /**
   * Glyph for in-progress status lines. Default varies by preset.
   */
  iconRunning?: string | null;
  /**
   * Glyph for skipped status lines. Default varies by preset.
   */
  iconSkipped?: string | null;
  /**
   * Glyph for warning status lines. Default varies by preset (e.g. `⚠`).
   */
  iconWarn?: string | null;
  /**
   * Color for informational status lines. Hex color.
   */
  info?: string | null;
  /**
   * Color for de-emphasized text (hints, notes, qualifiers). Hex color.
   */
  muted?: string | null;
  /**
   * Color for action lines at the deepest nesting level of a run. Hex color
   * (`"#ff0000"`). Presets that carry no palette foreground of their own
   * leave it unset.
   */
  primary?: string | null;
  /**
   * Color for in-progress status lines and spinner labels. Hex color.
   */
  running?: string | null;
  /**
   * Color for secondary status lines: structural pivots, labels, and
   * identifiers. Hex color.
   */
  secondary?: string | null;
  /**
   * Color for success status lines. Hex color.
   */
  success?: string | null;
  /**
   * Color for schema type annotations in explain output. Hex color
   * (`"#8be9fd"`).
   */
  typeHint?: string | null;
  /**
   * Color for warning status lines. Hex color.
   */
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
