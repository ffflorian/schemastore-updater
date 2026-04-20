/* eslint-disable */

/**
 * Tool permission rule.
 * See https://code.claude.com/docs/en/settings#permission-rule-syntax
 * See https://code.claude.com/docs/en/settings#tools-available-to-claude for full list of tools available to Claude.
 */
export type PermissionRule = string;
export type HookCommand =
  | {
      /**
       * Hook type
       */
      type: 'command';
      /**
       * Shell command to execute
       */
      command: string;
      /**
       * Optional timeout in seconds
       */
      timeout?: number;
      /**
       * Run this hook asynchronously without blocking Claude Code
       */
      async?: boolean;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    }
  | {
      /**
       * Hook type
       */
      type: 'prompt';
      /**
       * Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON.
       */
      prompt: string;
      /**
       * Model to use for evaluation. Defaults to a fast model
       */
      model?: string;
      /**
       * Optional timeout in seconds (default: 30)
       */
      timeout?: number;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    }
  | {
      /**
       * Hook type
       */
      type: 'agent';
      /**
       * Prompt describing what to verify. Use $ARGUMENTS placeholder for hook input JSON.
       */
      prompt: string;
      /**
       * Model to use for evaluation. Defaults to a fast model
       */
      model?: string;
      /**
       * Optional timeout in seconds (default: 60)
       */
      timeout?: number;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    }
  | {
      /**
       * Hook type
       */
      type: 'http';
      /**
       * URL to POST hook input JSON to. Endpoint must accept POST requests and return JSON.
       */
      url: string;
      /**
       * Custom HTTP headers (e.g., Authorization: Bearer token). Values support $VAR_NAME or ${VAR_NAME} interpolation.
       */
      headers?: {
        [k: string]: string | undefined;
      };
      /**
       * List of environment variable names permitted for interpolation in headers. If not set, no env var interpolation is allowed.
       */
      allowedEnvVars?: string[];
      /**
       * Optional timeout in seconds (default: 30)
       */
      timeout?: number;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    };

/**
 * Configuration settings for Claude Code. Learn more: https://code.claude.com/docs/en/settings
 */
export interface ClaudeCodeSettings {
  /**
   * JSON Schema reference for Claude Code settings
   */
  $schema?: string;
  /**
   * Path to a script that outputs authentication values
   */
  apiKeyHelper?: string;
  /**
   * Enable automatic memory saves that capture useful context to .claude/memory/. Also configurable via CLAUDE_CODE_DISABLE_AUTO_MEMORY environment variable (set to 1 to disable, 0 to enable). See https://code.claude.com/docs/en/memory#auto-memory
   */
  autoMemoryEnabled?: boolean;
  /**
   * Release channel to follow for updates. Use "stable" for a version that is typically about one week old and skips versions with major regressions, or "latest" (default) for the most recent release. Set DISABLE_AUTOUPDATER=1 to disable updates entirely.
   */
  autoUpdatesChannel?: 'stable' | 'latest';
  /**
   * Path to a script that exports AWS credentials
   */
  awsCredentialExport?: string;
  /**
   * Path to a script that refreshes AWS authentication
   */
  awsAuthRefresh?: string;
  /**
   * Glob patterns for CLAUDE.md files to exclude from loading. Useful in monorepos to skip irrelevant instructions from other teams. Patterns match against absolute file paths. Arrays merge across settings layers. Managed policy CLAUDE.md files cannot be excluded. See https://code.claude.com/docs/en/memory#exclude-specific-claudemd-files
   */
  claudeMdExcludes?: string[];
  /**
   * Number of days to retain chat transcripts (0 to disable cleanup)
   */
  cleanupPeriodDays?: number;
  /**
   * Environment variables to set for Claude Code sessions. Many environment variables provide settings dimensions not available as dedicated settings.json properties (e.g., thinking tokens, prompt caching, bash timeouts, shell configuration). See https://code.claude.com/docs/en/settings#environment-variables for the full list.
   * UNDOCUMENTED: CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS (plugin marketplace git timeout in ms, default 120000, see https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2151).
   * UNDOCUMENTED: ENABLE_CLAUDEAI_MCP_SERVERS (set to false to opt out of claude.ai MCP servers, see https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2163).
   */
  env?: {
    /**
     * Environment variable value
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[A-Z_][A-Z0-9_]*$".
     */
    [k: string]: string;
  };
  /**
   * Customize attribution for git commits and pull requests. See https://code.claude.com/docs/en/settings#attribution-settings
   */
  attribution?: {
    /**
     * Attribution for git commits, including any trailers. Empty string hides commit attribution
     */
    commit?: string;
    /**
     * Attribution for pull request descriptions. Empty string hides pull request attribution
     */
    pr?: string;
  };
  /**
   * Include built-in git commit and PR workflow instructions in Claude's system prompt. Also configurable via CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS environment variable (set to 1 to disable). See https://code.claude.com/docs/en/settings#available-settings
   */
  includeGitInstructions?: boolean;
  /**
   * DEPRECATED. Use 'attribution' instead. Whether to include the co-authored-by Claude byline in git commits and pull requests (default: true)
   */
  includeCoAuthoredBy?: boolean;
  /**
   * Customize where plan files are stored. Path is relative to project root (default: ~/.claude/plans)
   */
  plansDirectory?: string;
  /**
   * Control whether the @ file picker respects .gitignore patterns. When true (default), files matching .gitignore patterns are excluded from suggestions
   */
  respectGitignore?: boolean;
  /**
   * Tool usage permissions configuration.
   * See https://code.claude.com/docs/en/permissions and https://code.claude.com/docs/en/settings#permission-settings
   * See https://code.claude.com/docs/en/settings#tools-available-to-claude for full list of tools available to Claude.
   */
  permissions?: {
    /**
     * List of permission rules for allowed operations
     */
    allow?: PermissionRule[];
    /**
     * List of permission rules for denied operations
     */
    deny?: PermissionRule[];
    /**
     * List of permission rules that should always prompt for confirmation
     */
    ask?: PermissionRule[];
    /**
     * Default permission mode.
     * "default": prompts on first use.
     * "acceptEdits": auto-accepts file edits.
     * "plan": read-only, no modifications.
     * UNDOCUMENTED. "delegate": coordination-only for agent team leads (agent teams are experimental; enable via CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS).
     * "dontAsk": auto-denies unless pre-approved via permissions.
     * "bypassPermissions": skips all prompts (use only in isolated environments).
     * "auto": auto-approves tool calls with background safety checks that verify actions align with your request.
     * See https://code.claude.com/docs/en/permissions
     */
    defaultMode?: 'acceptEdits' | 'bypassPermissions' | 'default' | 'delegate' | 'dontAsk' | 'plan' | 'auto';
    /**
     * Disable the ability to bypass permission prompts
     */
    disableBypassPermissionsMode?: 'disable';
    /**
     * Additional directories to include in the permission scope
     */
    additionalDirectories?: string[];
  };
  /**
   * Preferred language for Claude's responses
   */
  language?: string;
  /**
   * Override the default model used by Claude Code. For finer control, use environment variables: ANTHROPIC_MODEL (runtime override), ANTHROPIC_DEFAULT_OPUS_MODEL, ANTHROPIC_DEFAULT_SONNET_MODEL, ANTHROPIC_DEFAULT_HAIKU_MODEL (per-class pinning), CLAUDE_CODE_SUBAGENT_MODEL (subagent model). See https://code.claude.com/docs/en/model-config
   */
  model?: string;
  /**
   * Restrict which models users can select. When defined at multiple settings levels (user, project, etc.), arrays are merged and deduplicated. See https://code.claude.com/docs/en/model-config#restrict-model-selection
   */
  availableModels?: string[];
  /**
   * Map Anthropic model IDs to provider-specific model IDs such as Bedrock inference profile ARNs, Vertex AI version names, or Foundry deployment names. Each model picker entry uses its mapped value when calling the provider API. Unknown keys are ignored. See https://code.claude.com/docs/en/model-config#override-model-ids-per-version
   */
  modelOverrides?: {
    [k: string]: string | undefined;
  };
  /**
   * Control Opus 4.6 adaptive reasoning effort. Lower effort is faster and cheaper for straightforward tasks, higher effort provides deeper reasoning. Defaults vary by model and plan (Opus 4.6 defaults to medium for Max and Team subscribers). Use /effort auto to reset to model default. Also configurable via CLAUDE_CODE_EFFORT_LEVEL environment variable. See https://code.claude.com/docs/en/model-config#adjust-effort-level
   */
  effortLevel?: 'low' | 'medium' | 'high';
  /**
   * Enable fast mode for Opus 4.6 (research preview). Fast mode uses the same model with 2.5x faster output at higher per-token cost. Requires extra usage enabled. Alternatively, toggle with /fast command. See https://code.claude.com/docs/en/fast-mode
   */
  fastMode?: boolean;
  /**
   * Require per-session opt-in for fast mode. When true, fast mode does not persist across sessions and users must enable it with /fast each session. Useful for controlling costs. See https://code.claude.com/docs/en/fast-mode
   */
  fastModePerSessionOptIn?: boolean;
  /**
   * Probability (0–1) that the session quality survey appears when eligible. A value of 0.05 means 5% of eligible sessions. See https://code.claude.com/docs/en/settings
   */
  feedbackSurveyRate?: number;
  /**
   * Whether to automatically approve all MCP servers in the project. See https://code.claude.com/docs/en/mcp
   */
  enableAllProjectMcpServers?: boolean;
  /**
   * List of approved MCP servers from .mcp.json. See https://code.claude.com/docs/en/mcp
   */
  enabledMcpjsonServers?: string[];
  /**
   * List of rejected MCP servers from .mcp.json. See https://code.claude.com/docs/en/mcp
   */
  disabledMcpjsonServers?: string[];
  /**
   * Enterprise allowlist of MCP servers that can be used. Applies to all scopes including enterprise servers from managed-mcp.json. If undefined, all servers are allowed. If empty array, no servers are allowed. Denylist takes precedence - if a server is on both lists, it is denied. See https://code.claude.com/docs/en/mcp#restriction-options
   */
  allowedMcpServers?: (
    | {
        /**
         * Name of the MCP server that users are allowed to configure
         */
        serverName: string;
      }
    | {
        /**
         * Exact command and arguments used to start stdio servers
         */
        serverCommand: string[];
      }
    | {
        /**
         * URL pattern for remote servers, supports wildcards (e.g., https://*.example.com/*)
         */
        serverUrl: string;
      }
  )[];
  /**
   * Enterprise denylist of MCP servers that are explicitly blocked. If a server is on the denylist, it will be blocked across all scopes including enterprise. Denylist takes precedence over allowlist - if a server is on both lists, it is denied. See https://code.claude.com/docs/en/mcp#restriction-options
   */
  deniedMcpServers?: (
    | {
        /**
         * Name of the MCP server that is explicitly blocked
         */
        serverName: string;
      }
    | {
        /**
         * Exact command and arguments used to start stdio servers
         */
        serverCommand: string[];
      }
    | {
        /**
         * URL pattern for remote servers, supports wildcards (e.g., https://*.example.com/*)
         */
        serverUrl: string;
      }
  )[];
  /**
   * Allowlist of environment variable names HTTP hooks may interpolate into headers. When set, each hook's effective allowedEnvVars is the intersection with this list. Undefined = no restriction. Arrays merge across settings sources. See https://code.claude.com/docs/en/settings#hook-configuration
   */
  httpHookAllowedEnvVars?: string[];
  /**
   * Custom commands to run before/after tool executions. See https://code.claude.com/docs/en/hooks
   */
  hooks?: {
    /**
     * Hooks that run before tool calls
     */
    PreToolUse?: HookMatcher[];
    /**
     * Hooks that run after tool completion
     */
    PostToolUse?: HookMatcher[];
    /**
     * Hooks that run after a tool fails
     */
    PostToolUseFailure?: HookMatcher[];
    /**
     * Hooks that run when a permission dialog appears
     */
    PermissionRequest?: HookMatcher[];
    /**
     * Hooks that trigger on notifications
     */
    Notification?: HookMatcher[];
    /**
     * Hooks that run when a user submits a prompt
     */
    UserPromptSubmit?: HookMatcher[];
    /**
     * Hooks that run when agents finish responding. Does not run on user interrupt
     */
    Stop?: HookMatcher[];
    /**
     * Hooks that run when a subagent is spawned
     */
    SubagentStart?: HookMatcher[];
    /**
     * Hooks that run when subagents finish responding
     */
    SubagentStop?: HookMatcher[];
    /**
     * Hooks that run before the context is compacted
     */
    PreCompact?: HookMatcher[];
    /**
     * Hooks that run after the context is compacted. See https://code.claude.com/docs/en/hooks
     */
    PostCompact?: HookMatcher[];
    /**
     * Hooks that run when an MCP server requests user input during a tool call. See https://code.claude.com/docs/en/hooks
     */
    Elicitation?: HookMatcher[];
    /**
     * Hooks that run after a user responds to an MCP elicitation, before the response is sent back to the server. See https://code.claude.com/docs/en/hooks
     */
    ElicitationResult?: HookMatcher[];
    /**
     * Hooks that run when an agent team teammate is about to go idle. Exit code 2 sends feedback and keeps the teammate working. Does not support matchers. Agent teams are experimental. See https://code.claude.com/docs/en/hooks#teammateidle
     */
    TeammateIdle?: HookMatcher[];
    /**
     * Hooks that run when a task is being marked as completed. Exit code 2 prevents completion and sends feedback. Does not support matchers. See https://code.claude.com/docs/en/hooks#taskcompleted
     */
    TaskCompleted?: HookMatcher[];
    /**
     * UNDOCUMENTED. Hooks that run during repository initialization (--init, --init-only) or maintenance (--maintenance)
     */
    Setup?: HookMatcher[];
    /**
     * Hooks that run when a CLAUDE.md or .claude/rules/*.md file is loaded into context. Fires at session start and when files are lazily loaded (e.g., nested traversal, path glob match). No decision control; used for audit logging and observability. Does not support matchers. See https://code.claude.com/docs/en/hooks#instructionsloaded
     */
    InstructionsLoaded?: HookMatcher[];
    /**
     * Hooks that run when the working directory changes. Provides cwd (new directory) and previous_cwd. Matchers are ignored; fires on every directory change. See https://code.claude.com/docs/en/hooks#cwdchanged
     */
    CwdChanged?: HookMatcher[];
    /**
     * Hooks that run when a watched file is created, modified, or deleted. Supports filename matchers. Provides file_path and file_event_type (created, modified, deleted). See https://code.claude.com/docs/en/hooks#filechanged
     */
    FileChanged?: HookMatcher[];
    /**
     * Hooks that run when settings, managed settings, or skill files change during a session. Supports matchers: user_settings, project_settings, local_settings, policy_settings, skills. Command handlers only. Exit code 2 blocks the change (except policy_settings which is audit-only). See https://code.claude.com/docs/en/hooks#configchange
     */
    ConfigChange?: HookMatcher[];
    /**
     * Hooks that run when a worktree is created via --worktree or isolation: "worktree" in subagents. Command handlers only, no matchers. Hook must print absolute path to created worktree on stdout; non-zero exit fails creation. See https://code.claude.com/docs/en/hooks#worktreecreate
     */
    WorktreeCreate?: HookMatcher[];
    /**
     * Hooks that run when a worktree is being removed at session exit or when a subagent finishes. Command handlers only, no matchers. Used for cleanup tasks; cannot block removal. See https://code.claude.com/docs/en/hooks#worktreeremove
     */
    WorktreeRemove?: HookMatcher[];
    /**
     * Hooks that run when a new session starts
     */
    SessionStart?: HookMatcher[];
    /**
     * Hooks that run when a session ends
     */
    SessionEnd?: HookMatcher[];
  };
  /**
   * Disable all hooks and statusLine execution. When true in managed settings, user and project-level disableAllHooks cannot override it. See https://code.claude.com/docs/en/hooks#disable-or-remove-hooks
   */
  disableAllHooks?: boolean;
  /**
   * Allowlist of URL patterns that HTTP hooks may target. Supports * as a wildcard. When set, hooks with non-matching URLs are blocked. Undefined = no restriction, empty array = block all HTTP hooks. Arrays merge across settings sources. See https://code.claude.com/docs/en/settings#hook-configuration
   */
  allowedHttpHookUrls?: string[];
  /**
   * (Managed settings only) Prevent loading of user, project, and plugin hooks. Only allows managed hooks and SDK hooks. See https://code.claude.com/docs/en/settings#hook-configuration
   */
  allowManagedHooksOnly?: boolean;
  /**
   * (Managed settings only) Prevent user and project settings from defining allow, ask, or deny permission rules. Only rules in managed settings apply. See https://code.claude.com/docs/en/settings#permission-settings
   */
  allowManagedPermissionRulesOnly?: boolean;
  /**
   * Custom status line display configuration. See https://code.claude.com/docs/en/statusline
   */
  statusLine?: {
    /**
     * The type of status line handler; must be set to "command" to run a custom shell script that receives JSON session data via stdin.
     */
    type: 'command';
    /**
     * A shell command or path to a script that displays session information (context usage, costs, git status, etc.) by reading JSON data from stdin and writing output to stdout. See https://code.claude.com/docs/en/statusline
     */
    command: string;
    /**
     * Optional number of extra horizontal spacing characters added to the status line content; defaults to 0.
     */
    padding?: number;
  };
  /**
   * Configure a custom script for @ file autocomplete. See https://code.claude.com/docs/en/settings#file-suggestion-settings
   */
  fileSuggestion?: {
    /**
     * The type of file suggestion handler; must be set to "command" to execute a custom shell script that generates file suggestions for the @ file picker.
     */
    type: 'command';
    /**
     * Shell command to execute for file suggestions
     */
    command: string;
  };
  /**
   * Enabled plugins using plugin-id@marketplace-id format. Example: { "formatter@anthropic-tools": true }. See https://code.claude.com/docs/en/plugins
   */
  enabledPlugins?: {
    [k: string]:
      | (
          | string[]
          | boolean
          | {
              [k: string]: unknown | undefined;
            }
        )
      | undefined;
  };
  /**
   * Additional marketplaces to make available for this repository. Typically used in repository .claude/settings.json to ensure team members have required plugin sources. See https://code.claude.com/docs/en/plugin-marketplaces
   */
  extraKnownMarketplaces?: {
    [k: string]:
      | {
          /**
           * Where to fetch the marketplace from
           */
          source:
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'url';
                /**
                 * Direct URL to marketplace.json file
                 */
                url: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'hostPattern';
                /**
                 * Git host pattern to trust for repositories in source specifications
                 */
                hostPattern: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'github';
                /**
                 * GitHub repository in owner/repo format
                 */
                repo: string;
                /**
                 * Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.
                 */
                ref?: string;
                /**
                 * Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)
                 */
                path?: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'git';
                /**
                 * Full git repository URL
                 */
                url: string;
                /**
                 * Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.
                 */
                ref?: string;
                /**
                 * Path to marketplace.json within repo (defaults to .claude-plugin/marketplace.json)
                 */
                path?: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'npm';
                /**
                 * NPM package containing marketplace.json
                 */
                package: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'file';
                /**
                 * Local file path to marketplace.json
                 */
                path: string;
              }
            | {
                /**
                 * Identifies the marketplace source type
                 */
                source: 'directory';
                /**
                 * Local directory containing .claude-plugin/marketplace.json
                 */
                path: string;
              };
          /**
           * Local cache path where marketplace manifest is stored (auto-generated if not provided)
           */
          installLocation?: string;
        }
      | undefined;
  };
  /**
   * (Managed settings only) Allowlist of plugin marketplaces users can add. Undefined = no restrictions, empty array = lockdown. Uses exact matching for source specifications. See https://code.claude.com/docs/en/settings#strictknownmarketplaces
   */
  strictKnownMarketplaces?: (
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'hostPattern';
        /**
         * Git host pattern to trust for repositories in source specifications
         */
        hostPattern: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'github';
        /**
         * GitHub repository in owner/repo format
         */
        repo: string;
        /**
         * Git branch, tag, or SHA
         */
        ref?: string;
        /**
         * Subdirectory path
         */
        path?: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'git';
        /**
         * Full git repository URL
         */
        url: string;
        /**
         * Git branch, tag, or SHA
         */
        ref?: string;
        /**
         * Subdirectory path
         */
        path?: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'url';
        /**
         * Direct URL to marketplace.json
         */
        url: string;
        /**
         * HTTP headers for authenticated access
         */
        headers?: {
          [k: string]: string | undefined;
        };
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'npm';
        /**
         * NPM package name (supports scoped packages)
         */
        package: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'file';
        /**
         * Absolute path to marketplace.json file
         */
        path: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'directory';
        /**
         * Absolute path to directory containing .claude-plugin/marketplace.json
         */
        path: string;
      }
    | {
        /**
         * Identifies the marketplace source type
         */
        source: 'pathPattern';
        /**
         * Regex pattern to match file or directory paths for marketplace sources
         */
        pathPattern: string;
      }
  )[];
  /**
   * List of marketplace names the user has chosen not to install when prompted
   */
  skippedMarketplaces?: string[];
  /**
   * List of plugin IDs (plugin@marketplace format) the user has chosen not to install when prompted
   */
  skippedPlugins?: string[];
  /**
   * Force a specific login method: "claudeai" for Claude Pro/Max, "console" for Console billing
   */
  forceLoginMethod?: 'claudeai' | 'console';
  /**
   * Organization UUID to use for OAuth login
   */
  forceLoginOrgUUID?: string;
  /**
   * Path to a script that outputs OpenTelemetry headers
   */
  otelHeadersHelper?: string;
  /**
   * Controls the output style for assistant responses. Built-in styles: default, Explanatory, Learning. Custom styles can be added in ~/.claude/output-styles/ or .claude/output-styles/. See https://code.claude.com/docs/en/output-styles
   */
  outputStyle?: string;
  /**
   * Skip the WebFetch blocklist check for enterprise environments with restrictive security policies
   */
  skipWebFetchPreflight?: boolean;
  /**
   * Sandbox execution configuration. See https://code.claude.com/docs/en/sandboxing
   */
  sandbox?: {
    /**
     * Configures network isolation settings for the sandboxed bash environment, including domain restrictions, Unix socket access, and custom proxy configuration.
     */
    network?: {
      /**
       * Allow Unix domain sockets for local IPC (SSH agent, Docker, etc.). Provide an array of specific paths. Defaults to blocking if not specified
       */
      allowUnixSockets?: string[];
      /**
       * Allow binding to local network addresses (e.g., localhost ports). Defaults to false if not specified
       */
      allowLocalBinding?: boolean;
      /**
       * HTTP proxy port to use for network filtering. If not specified, a proxy server will be started automatically
       */
      httpProxyPort?: number;
      /**
       * SOCKS proxy port to use for network filtering. If not specified, a proxy server will be started automatically
       */
      socksProxyPort?: number;
      /**
       * Allow all Unix domain socket connections. If true, this overrides allowUnixSockets
       */
      allowAllUnixSockets?: boolean;
      /**
       * Allowlist of network domains for sandboxed commands. Supports wildcard patterns like *.example.com
       */
      allowedDomains?: string[];
      /**
       * (Managed settings only) Only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources. Non-allowed domains are automatically blocked without user prompts.
       */
      allowManagedDomainsOnly?: boolean;
    };
    /**
     * Map of command patterns to filesystem paths to ignore violations for. Use "*" to match all commands
     */
    ignoreViolations?: {
      /**
       * List of filesystem paths to ignore sandbox violations for when this command pattern matches
       */
      [k: string]: string[] | undefined;
    };
    /**
     * Commands that should never run in the sandbox (e.g., ["git", "docker"])
     */
    excludedCommands?: string[];
    /**
     * Automatically allow bash commands without prompting when they run in the sandbox. Only applies to commands that will run sandboxed.
     */
    autoAllowBashIfSandboxed?: boolean;
    /**
     * macOS only. Allow access to the system TLS trust service (com.apple.trustd.agent) in the sandbox. Required for Go-based tools like gh, gcloud, and terraform to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. Reduces security by opening a potential data exfiltration path. Default: false. See https://code.claude.com/docs/en/settings#sandbox-settings
     */
    enableWeakerNetworkIsolation?: boolean;
    /**
     * Enable weaker sandbox mode for unprivileged docker environments where --proc mounting fails. This significantly reduces the strength of the sandbox and should only be used when this risk is acceptable.Default: false (secure).
     */
    enableWeakerNestedSandbox?: boolean;
    /**
     * Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true.
     */
    allowUnsandboxedCommands?: boolean;
    /**
     * Enable sandboxed bash
     */
    enabled?: boolean;
    /**
     * Filesystem access control for sandboxed commands. See https://code.claude.com/docs/en/sandboxing#filesystem-isolation
     */
    filesystem?: {
      /**
       * Paths where subprocesses are allowed to write. Supports prefixes: // (absolute), ~/ (home directory), / (relative to settings file), ./ or no prefix (relative path)
       */
      allowWrite?: string[];
      /**
       * Paths where subprocesses are explicitly denied write access. Takes precedence over allowWrite
       */
      denyWrite?: string[];
      /**
       * Paths where subprocesses are explicitly denied read access
       */
      denyRead?: string[];
      /**
       * Paths to re-allow reading within denyRead regions. Takes precedence over denyRead for matching paths
       */
      allowRead?: string[];
      /**
       * When true (managed settings only), only allowRead paths from managed settings are used
       */
      allowManagedReadPathsOnly?: boolean;
    };
  };
  /**
   * Customize the verbs shown in spinner progress messages
   */
  spinnerVerbs?: {
    /**
     * How to combine custom verbs with default spinner verbs: 'append' adds custom verbs to the default list, 'replace' uses only custom verbs
     */
    mode?: 'append' | 'replace';
    /**
     * Custom verbs used in spinner progress text
     *
     * @minItems 1
     */
    verbs: [string, ...string[]];
  };
  /**
   * Show tips in the spinner while Claude is working. Set to false to disable tips (default: true)
   */
  spinnerTipsEnabled?: boolean;
  /**
   * Customize the tips displayed in the spinner while Claude is working. See https://code.claude.com/docs/en/settings#available-settings
   */
  spinnerTipsOverride?: {
    /**
     * If true, only show custom tips. If false or absent, custom tips merge with built-in tips
     */
    excludeDefault?: boolean;
    /**
     * Custom tip strings to display in the spinner
     *
     * @minItems 1
     */
    tips: [string, ...string[]];
  };
  /**
   * Enable the terminal progress bar that shows progress in supported terminals like Windows Terminal and iTerm2 (default: true)
   */
  terminalProgressBarEnabled?: boolean;
  /**
   * Show turn duration messages after responses (e.g., "Cooked for 1m 6s"). Set to false to hide these messages (default: true)
   */
  showTurnDuration?: boolean;
  /**
   * Reduce or disable UI animations (spinners, shimmer, flash effects) for accessibility
   */
  prefersReducedMotion?: boolean;
  /**
   * Enable extended thinking by default for all sessions. Typically configured via the /config command rather than editing directly. See https://code.claude.com/docs/en/common-workflows#use-extended-thinking-thinking-mode
   */
  alwaysThinkingEnabled?: boolean;
  /**
   * Company announcements to display at startup (one will be randomly selected if multiple are provided)
   */
  companyAnnouncements?: string[];
  /**
   * How agent team teammates display: "auto" picks split panes in tmux or iTerm2, in-process otherwise. Agent teams are experimental and disabled by default. Enable them by adding CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS to your settings.json or environment. See https://code.claude.com/docs/en/agent-teams
   */
  teammateMode?: 'auto' | 'in-process' | 'tmux';
  /**
   * Configuration for --worktree sessions. See https://code.claude.com/docs/en/settings
   */
  worktree?: {
    /**
     * Directories to check out in each worktree via git sparse-checkout (cone mode). Only the listed paths are written to disk, which is faster in large monorepos.
     */
    sparsePaths?: string[];
  };
  /**
   * (Managed settings only) Custom message appended to the plugin trust warning shown before installation. Use to provide organization-specific context about approved plugins. See https://code.claude.com/docs/en/settings#plugin-settings
   */
  pluginTrustMessage?: string;
  /**
   * Per-plugin configuration including MCP server user configs, keyed by plugin ID (plugin@marketplace format). See https://code.claude.com/docs/en/plugins
   */
  pluginConfigs?: {
    [k: string]:
      | {
          /**
           * User configuration values for MCP servers keyed by server name
           */
          mcpServers?: {
            [k: string]:
              | {
                  [k: string]: (string | number | boolean | string[]) | undefined;
                }
              | undefined;
          };
        }
      | undefined;
  };
  /**
   * (Managed settings only) Only allowedMcpServers from managed settings are respected. deniedMcpServers still merges from all sources. Users can still add their own MCP servers, but only the admin-defined allowlist applies.
   */
  allowManagedMcpServersOnly?: boolean;
  /**
   * (Managed settings only) Blocklist of marketplace sources. These exact sources are blocked from being added as marketplaces. The check happens before downloading, so blocked sources never touch the filesystem.
   */
  blockedMarketplaces?: (
    | {
        /**
         * Block marketplace fetched from direct URL
         */
        source: 'url';
        /**
         * Direct URL to marketplace.json file
         */
        url: string;
        /**
         * Custom HTTP headers (e.g., for authentication)
         */
        headers?: {
          [k: string]: string | undefined;
        };
      }
    | {
        /**
         * Block marketplace from GitHub repository
         */
        source: 'github';
        /**
         * GitHub repository in owner/repo format
         */
        repo: string;
        /**
         * Git branch or tag to use
         */
        ref?: string;
        /**
         * Path to marketplace.json within repo
         */
        path?: string;
      }
    | {
        /**
         * Block marketplace from git repository URL
         */
        source: 'git';
        /**
         * Full git repository URL
         */
        url: string;
        /**
         * Git branch or tag to use
         */
        ref?: string;
        /**
         * Path to marketplace.json within repo
         */
        path?: string;
      }
    | {
        /**
         * Block marketplace from NPM package
         */
        source: 'npm';
        /**
         * NPM package containing marketplace.json
         */
        package: string;
      }
    | {
        /**
         * Block marketplace from local file
         */
        source: 'file';
        /**
         * Local file path to marketplace.json
         */
        path: string;
      }
    | {
        /**
         * Block marketplace from local directory
         */
        source: 'directory';
        /**
         * Local directory containing .claude-plugin/marketplace.json
         */
        path: string;
      }
    | {
        /**
         * Block marketplace by host pattern matching
         */
        source: 'hostPattern';
        /**
         * Regex pattern to match the host/domain extracted from any marketplace source type
         */
        hostPattern: string;
      }
    | {
        /**
         * Block marketplace by file/directory path pattern matching
         */
        source: 'pathPattern';
        /**
         * Regex pattern to match file or directory paths for marketplace sources
         */
        pathPattern: string;
      }
  )[];
  [k: string]: unknown | undefined;
}
/**
 * Hook matcher configuration with multiple hooks
 */
export interface HookMatcher {
  /**
   * Optional pattern to match event contexts, case-sensitive. Behavior depends on event type. See https://code.claude.com/docs/en/hooks#matcher-patterns for event-specific details and examples
   */
  matcher?: string;
  /**
   * Array of hooks to execute
   */
  hooks: HookCommand[];
}
