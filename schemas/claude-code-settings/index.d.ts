/* eslint-disable */

/**
 * Tool permission rule.
 * See https://code.claude.com/docs/en/settings#permission-rule-syntax
 * See https://code.claude.com/docs/en/tools-reference for full list of tools available to Claude.
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
       * When true, the hook runs in the background and wakes the model when it exits with code 2. Implies async.
       */
      asyncRewake?: boolean;
      /**
       * Shell interpreter for the command. "bash" uses the login shell (bash/zsh/sh); "powershell" uses pwsh. Defaults to bash.
       */
      shell?: 'bash' | 'powershell';
      /**
       * Optional permission-rule-syntax filter (e.g., "Bash(git *)"). Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.claude.com/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.claude.com/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.claude.com/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.claude.com/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    }
  | {
      /**
       * Hook type
       */
      type: 'mcp_tool';
      /**
       * Name of a configured MCP server (must already be connected)
       */
      server: string;
      /**
       * Name of the tool to call on that server
       */
      tool: string;
      /**
       * Arguments passed to the tool. String values support ${path} substitution from hook JSON input (e.g., ${tool_input.file_path}, ${cwd})
       */
      input?: {
        [k: string]: unknown | undefined;
      };
      /**
       * Optional timeout in seconds (default: 60)
       */
      timeout?: number;
      /**
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.claude.com/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
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
   * Path to a script that outputs authentication values. See https://code.claude.com/docs/en/settings#available-settings
   */
  apiKeyHelper?: string;
  /**
   * Enable automatic memory saves that capture useful context to .claude/memory/. Also configurable via CLAUDE_CODE_DISABLE_AUTO_MEMORY environment variable (set to 1 to disable, 0 to enable). See https://code.claude.com/docs/en/memory#auto-memory
   */
  autoMemoryEnabled?: boolean;
  /**
   * Release channel to follow for updates. Use "stable" for a version that is typically about one week old and skips versions with major regressions, or "latest" (default) for the most recent release. Set DISABLE_AUTOUPDATER=1 to disable background auto-updates, or DISABLE_UPDATES=1 (added in v2.1.118) to block all update paths including manual `claude update`.
   */
  autoUpdatesChannel?: 'stable' | 'latest';
  /**
   * Path to a script that exports AWS credentials. See https://code.claude.com/docs/en/settings#available-settings
   */
  awsCredentialExport?: string;
  /**
   * Path to a script that refreshes AWS authentication. See https://code.claude.com/docs/en/settings#available-settings
   */
  awsAuthRefresh?: string;
  /**
   * Glob patterns for CLAUDE.md files to exclude from loading. Useful in monorepos to skip irrelevant instructions from other teams. Patterns match against absolute file paths. Arrays merge across settings layers. Managed policy CLAUDE.md files cannot be excluded. See https://code.claude.com/docs/en/memory#exclude-specific-claude-md-files
   */
  claudeMdExcludes?: string[];
  /**
   * Number of days to retain sessions, orphaned subagent worktrees, tasks, shell snapshots, and backups. Minimum is 1; setting 0 is rejected with a validation error. See https://code.claude.com/docs/en/settings#available-settings
   */
  cleanupPeriodDays?: number;
  /**
   * Environment variables to set for Claude Code sessions. Many environment variables provide settings dimensions not available as dedicated settings.json properties (e.g., thinking tokens, prompt caching, bash timeouts, shell configuration). See https://code.claude.com/docs/en/settings#environment-variables for the full list.
   */
  env?: {
    /**
     * API key for Anthropic API authentication
     */
    ANTHROPIC_API_KEY?: string;
    /**
     * Custom Authorization header bearer token for API requests
     */
    ANTHROPIC_AUTH_TOKEN?: string;
    /**
     * Override API endpoint URL for proxy or gateway routing
     */
    ANTHROPIC_BASE_URL?: string;
    /**
     * Override Amazon Bedrock endpoint URL
     */
    ANTHROPIC_BEDROCK_BASE_URL?: string;
    /**
     * Override Bedrock Mantle endpoint URL
     */
    ANTHROPIC_BEDROCK_MANTLE_BASE_URL?: string;
    /**
     * Select Bedrock service tier; sent as X-Amzn-Bedrock-Service-Tier header. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#21122
     */
    ANTHROPIC_BEDROCK_SERVICE_TIER?: 'default' | 'flex' | 'priority';
    /**
     * Comma-separated beta header values to include in API requests
     */
    ANTHROPIC_BETAS?: string;
    /**
     * Custom HTTP headers for API requests (newline-separated 'Name: Value' pairs)
     */
    ANTHROPIC_CUSTOM_HEADERS?: string;
    /**
     * Custom model ID to add as an entry in the model picker
     */
    ANTHROPIC_CUSTOM_MODEL_OPTION?: string;
    /**
     * Display description for the custom model in the model picker
     */
    ANTHROPIC_CUSTOM_MODEL_OPTION_DESCRIPTION?: string;
    /**
     * Display name for the custom model in the model picker
     */
    ANTHROPIC_CUSTOM_MODEL_OPTION_NAME?: string;
    /**
     * JSON object specifying capability flags for the custom model
     */
    ANTHROPIC_CUSTOM_MODEL_OPTION_SUPPORTED_CAPABILITIES?: string;
    /**
     * Override default Haiku model ID
     */
    ANTHROPIC_DEFAULT_HAIKU_MODEL?: string;
    /**
     * Override default Opus model ID
     */
    ANTHROPIC_DEFAULT_OPUS_MODEL?: string;
    /**
     * Override default Sonnet model ID
     */
    ANTHROPIC_DEFAULT_SONNET_MODEL?: string;
    /**
     * Microsoft Foundry authentication key
     */
    ANTHROPIC_FOUNDRY_API_KEY?: string;
    /**
     * Microsoft Foundry resource URL
     */
    ANTHROPIC_FOUNDRY_BASE_URL?: string;
    /**
     * Microsoft Foundry resource name
     */
    ANTHROPIC_FOUNDRY_RESOURCE?: string;
    /**
     * Model to use (e.g., 'claude-opus-4-1', 'claude-sonnet-4-5-20250514', 'opus', 'sonnet', 'haiku')
     */
    ANTHROPIC_MODEL?: string;
    /**
     * Model to use for background and low-complexity tasks (e.g., 'claude-3-5-haiku-latest')
     */
    ANTHROPIC_SMALL_FAST_MODEL?: string;
    /**
     * Override Google Vertex AI endpoint URL
     */
    ANTHROPIC_VERTEX_BASE_URL?: string;
    /**
     * Google Vertex AI project ID
     */
    ANTHROPIC_VERTEX_PROJECT_ID?: string;
    /**
     * API request timeout in milliseconds (default: 600000)
     */
    API_TIMEOUT_MS?: string;
    /**
     * Bearer token for Bedrock API authentication
     */
    AWS_BEARER_TOKEN_BEDROCK?: string;
    /**
     * Default bash command timeout in milliseconds (default: 120000)
     */
    BASH_DEFAULT_TIMEOUT_MS?: string;
    /**
     * Maximum bash output characters before truncation
     */
    BASH_MAX_OUTPUT_LENGTH?: string;
    /**
     * Maximum bash command timeout in milliseconds (default: 600000)
     */
    BASH_MAX_TIMEOUT_MS?: string;
    /**
     * Force local repo bundling for --remote invocations
     */
    CCR_FORCE_BUNDLE?: '0' | '1';
    /**
     * Disable built-in subagent types in Agent SDK
     */
    CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS?: '0' | '1';
    /**
     * Skip 'mcp__<server>__' prefix on MCP tool names in Agent SDK
     */
    CLAUDE_AGENT_SDK_MCP_NO_PREFIX?: '0' | '1';
    /**
     * Context capacity percentage threshold for auto-compaction (1-100)
     */
    CLAUDE_AUTOCOMPACT_PCT_OVERRIDE?: string;
    /**
     * Force-enable automatic backgrounding of tasks
     */
    CLAUDE_AUTO_BACKGROUND_TASKS?: '0' | '1';
    /**
     * Return to original project directory after each bash command
     */
    CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR?: '0' | '1';
    /**
     * Keep native cursor visible for screen magnifiers and assistive tools
     */
    CLAUDE_CODE_ACCESSIBILITY?: '0' | '1';
    /**
     * Load CLAUDE.md memory files from additional directories
     */
    CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD?: '0' | '1';
    /**
     * Credential helper refresh interval in milliseconds
     */
    CLAUDE_CODE_API_KEY_HELPER_TTL_MS?: string;
    /**
     * Include attribution block in the system prompt
     */
    CLAUDE_CODE_ATTRIBUTION_HEADER?: '0' | '1';
    /**
     * Context capacity for compaction calculations in tokens
     */
    CLAUDE_CODE_AUTO_COMPACT_WINDOW?: string;
    /**
     * Override automatic IDE connection behavior
     */
    CLAUDE_CODE_AUTO_CONNECT_IDE?: 'true' | 'false';
    /**
     * CA certificate sources (comma-separated: 'bundled', 'system')
     */
    CLAUDE_CODE_CERT_STORE?: string;
    /**
     * Client certificate file path for mutual TLS
     */
    CLAUDE_CODE_CLIENT_CERT?: string;
    /**
     * Client private key file path for mutual TLS
     */
    CLAUDE_CODE_CLIENT_KEY?: string;
    /**
     * Passphrase for encrypted client private key
     */
    CLAUDE_CODE_CLIENT_KEY_PASSPHRASE?: string;
    /**
     * Directory path for debug log files
     */
    CLAUDE_CODE_DEBUG_LOGS_DIR?: string;
    /**
     * Debug log verbosity level
     */
    CLAUDE_CODE_DEBUG_LOG_LEVEL?: 'verbose' | 'debug' | 'info' | 'warn' | 'error';
    /**
     * Disable 1M context window models
     */
    CLAUDE_CODE_DISABLE_1M_CONTEXT?: '0' | '1';
    /**
     * Disable adaptive reasoning
     */
    CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING?: '0' | '1';
    /**
     * Disable attachment processing
     */
    CLAUDE_CODE_DISABLE_ATTACHMENTS?: '0' | '1';
    /**
     * Disable automatic memory feature
     */
    CLAUDE_CODE_DISABLE_AUTO_MEMORY?: '0' | '1';
    /**
     * Disable all background task functionality
     */
    CLAUDE_CODE_DISABLE_BACKGROUND_TASKS?: '0' | '1';
    /**
     * Prevent loading CLAUDE.md memory files
     */
    CLAUDE_CODE_DISABLE_CLAUDE_MDS?: '0' | '1';
    /**
     * Disable scheduled/cron tasks
     */
    CLAUDE_CODE_DISABLE_CRON?: '0' | '1';
    /**
     * Strip anthropic-beta headers from API requests. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#21123
     */
    CLAUDE_CODE_DISABLE_EXPERIMENTAL_BETAS?: '0' | '1';
    /**
     * Disable fast mode toggle
     */
    CLAUDE_CODE_DISABLE_FAST_MODE?: '0' | '1';
    /**
     * Disable session quality feedback surveys
     */
    CLAUDE_CODE_DISABLE_FEEDBACK_SURVEY?: '0' | '1';
    /**
     * Disable file checkpointing for undo/restore
     */
    CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING?: '0' | '1';
    /**
     * Remove git commit and PR workflow instructions from the system prompt
     */
    CLAUDE_CODE_DISABLE_GIT_INSTRUCTIONS?: '0' | '1';
    /**
     * Prevent automatic remapping of legacy model names
     */
    CLAUDE_CODE_DISABLE_LEGACY_MODEL_REMAP?: '0' | '1';
    /**
     * Disable mouse tracking in fullscreen mode
     */
    CLAUDE_CODE_DISABLE_MOUSE?: '0' | '1';
    /**
     * Disable auto-update checks, telemetry, and feedback in one setting
     */
    CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC?: '0' | '1';
    /**
     * Disable fallback to non-streaming API mode
     */
    CLAUDE_CODE_DISABLE_NONSTREAMING_FALLBACK?: '0' | '1';
    /**
     * Skip automatic installation of official marketplace plugins
     */
    CLAUDE_CODE_DISABLE_OFFICIAL_MARKETPLACE_AUTOINSTALL?: '0' | '1';
    /**
     * Skip loading system-wide policy skills
     */
    CLAUDE_CODE_DISABLE_POLICY_SKILLS?: '0' | '1';
    /**
     * Disable terminal title updates
     */
    CLAUDE_CODE_DISABLE_TERMINAL_TITLE?: '0' | '1';
    /**
     * Force-disable extended thinking
     */
    CLAUDE_CODE_DISABLE_THINKING?: '0' | '1';
    /**
     * Disable virtual scrolling in fullscreen mode
     */
    CLAUDE_CODE_DISABLE_VIRTUAL_SCROLL?: '0' | '1';
    /**
     * Reasoning effort level
     */
    CLAUDE_CODE_EFFORT_LEVEL?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto';
    /**
     * Override session recap/away summary availability
     */
    CLAUDE_CODE_ENABLE_AWAY_SUMMARY?: '0' | '1';
    /**
     * Refresh plugins at turn boundaries
     */
    CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH?: '0' | '1';
    /**
     * Force fine-grained tool output streaming
     */
    CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING?: '0' | '1';
    /**
     * Enable prompt suggestions
     */
    CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION?: 'true' | 'false';
    /**
     * Enable task tracking in non-interactive mode
     */
    CLAUDE_CODE_ENABLE_TASKS?: '0' | '1';
    /**
     * Enable OpenTelemetry collection
     */
    CLAUDE_CODE_ENABLE_TELEMETRY?: '0' | '1';
    /**
     * Wait time in milliseconds before auto-exit after stop
     */
    CLAUDE_CODE_EXIT_AFTER_STOP_DELAY?: string;
    /**
     * Enable experimental agent teams feature
     */
    CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS?: '0' | '1';
    /**
     * JSON object to merge into every API request body
     */
    CLAUDE_CODE_EXTRA_BODY?: string;
    /**
     * Token limit for file read operations
     */
    CLAUDE_CODE_FILE_READ_MAX_OUTPUT_TOKENS?: string;
    /**
     * Fork subagent processes in non-interactive sessions. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#21120
     */
    CLAUDE_CODE_FORK_SUBAGENT?: '0' | '1';
    /**
     * Path to Git Bash executable (Windows only)
     */
    CLAUDE_CODE_GIT_BASH_PATH?: string;
    /**
     * Include dotfiles/hidden files in Glob results
     */
    CLAUDE_CODE_GLOB_HIDDEN?: 'true' | 'false';
    /**
     * Don't respect .gitignore rules in Glob results
     */
    CLAUDE_CODE_GLOB_NO_IGNORE?: 'true' | 'false';
    /**
     * Glob tool timeout in seconds (default: 20-60)
     */
    CLAUDE_CODE_GLOB_TIMEOUT_SECONDS?: string;
    /**
     * Hide the working directory in the startup logo. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#21126
     */
    CLAUDE_CODE_HIDE_CWD?: '0' | '1';
    /**
     * Override IDE connection address
     */
    CLAUDE_CODE_IDE_HOST_OVERRIDE?: string;
    /**
     * Skip automatic IDE extension installation
     */
    CLAUDE_CODE_IDE_SKIP_AUTO_INSTALL?: '0' | '1';
    /**
     * Skip IDE lockfile validation
     */
    CLAUDE_CODE_IDE_SKIP_VALID_CHECK?: '0' | '1';
    /**
     * Override context window size in tokens
     */
    CLAUDE_CODE_MAX_CONTEXT_TOKENS?: string;
    /**
     * Maximum output tokens per API request
     */
    CLAUDE_CODE_MAX_OUTPUT_TOKENS?: string;
    /**
     * Maximum API request retry attempts (default: 10)
     */
    CLAUDE_CODE_MAX_RETRIES?: string;
    /**
     * Maximum parallel tool executions (default: 10)
     */
    CLAUDE_CODE_MAX_TOOL_USE_CONCURRENCY?: string;
    /**
     * Isolate MCP server environments to allowlisted variables
     */
    CLAUDE_CODE_MCP_ALLOWLIST_ENV?: '0' | '1';
    /**
     * Use the interactive /init setup flow
     */
    CLAUDE_CODE_NEW_INIT?: '0' | '1';
    /**
     * Enable fullscreen rendering mode to reduce flicker
     */
    CLAUDE_CODE_NO_FLICKER?: '0' | '1';
    /**
     * OAuth refresh token
     */
    CLAUDE_CODE_OAUTH_REFRESH_TOKEN?: string;
    /**
     * OAuth scopes (space-separated)
     */
    CLAUDE_CODE_OAUTH_SCOPES?: string;
    /**
     * OAuth access token
     */
    CLAUDE_CODE_OAUTH_TOKEN?: string;
    /**
     * OpenTelemetry span flush timeout in milliseconds (default: 5000)
     */
    CLAUDE_CODE_OTEL_FLUSH_TIMEOUT_MS?: string;
    /**
     * OpenTelemetry header helper refresh interval in milliseconds
     */
    CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS?: string;
    /**
     * OpenTelemetry shutdown timeout in milliseconds (default: 2000)
     */
    CLAUDE_CODE_OTEL_SHUTDOWN_TIMEOUT_MS?: string;
    /**
     * Enable Perforce write protection mode
     */
    CLAUDE_CODE_PERFORCE_MODE?: '0' | '1';
    /**
     * Root directory for plugin cache
     */
    CLAUDE_CODE_PLUGIN_CACHE_DIR?: string;
    /**
     * Plugin marketplace git operations timeout in milliseconds (default: 120000). See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2151
     */
    CLAUDE_CODE_PLUGIN_GIT_TIMEOUT_MS?: string;
    /**
     * Keep plugin cache on update failure
     */
    CLAUDE_CODE_PLUGIN_KEEP_MARKETPLACE_ON_FAILURE?: '0' | '1';
    /**
     * Path(s) to pre-populated plugin directories
     */
    CLAUDE_CODE_PLUGIN_SEED_DIR?: string;
    /**
     * Indicate that the host application manages provider routing
     */
    CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST?: '0' | '1';
    /**
     * Allow proxy to handle DNS resolution
     */
    CLAUDE_CODE_PROXY_RESOLVES_HOSTS?: '0' | '1';
    /**
     * Indicates a remote web environment session
     */
    CLAUDE_CODE_REMOTE?: 'true' | 'false';
    /**
     * Cloud session identifier for remote sessions
     */
    CLAUDE_CODE_REMOTE_SESSION_ID?: string;
    /**
     * Automatically resume from a mid-turn interruption
     */
    CLAUDE_CODE_RESUME_INTERRUPTED_TURN?: '0' | '1';
    /**
     * Script invocation limits (JSON object)
     */
    CLAUDE_CODE_SCRIPT_CAPS?: string;
    /**
     * Mouse wheel scroll speed multiplier (1-20)
     */
    CLAUDE_CODE_SCROLL_SPEED?: string;
    /**
     * Time budget in milliseconds for SessionEnd hooks
     */
    CLAUDE_CODE_SESSION_END_HOOKS_TIMEOUT_MS?: string;
    /**
     * Override automatic shell detection (e.g., '/bin/zsh', '/bin/bash')
     */
    CLAUDE_CODE_SHELL?: string;
    /**
     * Command prefix wrapper for shell commands
     */
    CLAUDE_CODE_SHELL_PREFIX?: string;
    /**
     * Minimal mode with core tools only
     */
    CLAUDE_CODE_SIMPLE?: '0' | '1';
    /**
     * Use a shortened system prompt
     */
    CLAUDE_CODE_SIMPLE_SYSTEM_PROMPT?: '0' | '1';
    /**
     * Skip AWS authentication for Bedrock
     */
    CLAUDE_CODE_SKIP_BEDROCK_AUTH?: '0' | '1';
    /**
     * Skip Azure authentication for Foundry
     */
    CLAUDE_CODE_SKIP_FOUNDRY_AUTH?: '0' | '1';
    /**
     * Skip AWS authentication for Mantle
     */
    CLAUDE_CODE_SKIP_MANTLE_AUTH?: '0' | '1';
    /**
     * Disable transcript writes entirely. See https://code.claude.com/docs/en/settings#environment-variables
     */
    CLAUDE_CODE_SKIP_PROMPT_HISTORY?: '0' | '1';
    /**
     * Skip Google authentication for Vertex AI
     */
    CLAUDE_CODE_SKIP_VERTEX_AUTH?: '0' | '1';
    /**
     * Override model used by subagents
     */
    CLAUDE_CODE_SUBAGENT_MODEL?: string;
    /**
     * Strip credentials from subprocess environments
     */
    CLAUDE_CODE_SUBPROCESS_ENV_SCRUB?: '0' | '1';
    /**
     * Wait synchronously for plugin installation
     */
    CLAUDE_CODE_SYNC_PLUGIN_INSTALL?: '0' | '1';
    /**
     * Timeout in milliseconds for synchronous plugin installation
     */
    CLAUDE_CODE_SYNC_PLUGIN_INSTALL_TIMEOUT_MS?: string;
    /**
     * Enable syntax highlighting in diffs
     */
    CLAUDE_CODE_SYNTAX_HIGHLIGHT?: 'true' | 'false';
    /**
     * Shared task list identifier for team collaboration
     */
    CLAUDE_CODE_TASK_LIST_ID?: string;
    /**
     * Agent team membership name
     */
    CLAUDE_CODE_TEAM_NAME?: string;
    /**
     * Override temp directory path
     */
    CLAUDE_CODE_TMPDIR?: string;
    /**
     * Allow 24-bit truecolor rendering in tmux
     */
    CLAUDE_CODE_TMUX_TRUECOLOR?: '0' | '1';
    /**
     * Enable PowerShell as default shell for interactive commands (Windows)
     */
    CLAUDE_CODE_USE_POWERSHELL_TOOL?: '0' | '1';
    /**
     * File path for persisting environment variables across Bash commands
     */
    CLAUDE_ENV_FILE?: string;
    /**
     * Project root directory path (also provided to hooks)
     */
    CLAUDE_PROJECT_DIR?: string;
    /**
     * Stop background auto-update checks
     */
    DISABLE_AUTOUPDATER?: '0' | '1';
    /**
     * Disable Sentry error reporting
     */
    DISABLE_ERROR_REPORTING?: '0' | '1';
    /**
     * Disable the /feedback command
     */
    DISABLE_FEEDBACK_COMMAND?: '0' | '1';
    /**
     * Disable Statsig telemetry collection
     */
    DISABLE_TELEMETRY?: '0' | '1';
    /**
     * Block all update paths including manual updates
     */
    DISABLE_UPDATES?: '0' | '1';
    /**
     * Opt in/out of claude.ai MCP servers. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2163
     */
    ENABLE_CLAUDEAI_MCP_SERVERS?: 'true' | 'false';
    /**
     * HTTPS proxy URL (recommended over HTTP_PROXY)
     */
    HTTPS_PROXY?: string;
    /**
     * HTTP proxy URL
     */
    HTTP_PROXY?: string;
    /**
     * Path to custom CA certificate file
     */
    NODE_EXTRA_CA_CERTS?: string;
    /**
     * Domains to bypass proxy (space or comma-separated, or '*' for all)
     */
    NO_PROXY?: string;
    /**
     * OpenTelemetry metrics exporter configuration
     */
    OTEL_METRICS_EXPORTER?: string;
    /**
     * Use the bundled ripgrep binary instead of system ripgrep
     */
    USE_BUILTIN_RIPGREP?: '0' | '1';
    /**
     * Environment variable value
     */
    [k: string]: string | undefined;
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
   * See https://code.claude.com/docs/en/tools-reference for full list of tools available to Claude.
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
     * Set to "disable" to prevent auto mode from being activated. Removes `auto` from the Shift+Tab cycle and rejects `--permission-mode auto` at startup. Most useful in managed settings where users cannot override it. See https://code.claude.com/docs/en/permissions
     */
    disableAutoMode?: 'disable';
    /**
     * Additional directories to include in the permission scope
     */
    additionalDirectories?: string[];
  };
  /**
   * Configure Claude's preferred response language (e.g., "japanese", "spanish", "french"). Claude will respond in this language by default. Also sets the voice dictation language and terminal tab session title generation. See https://code.claude.com/docs/en/settings#available-settings
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
   * Persist adaptive reasoning effort across sessions. Effort is supported on Opus 4.7, Opus 4.6, and Sonnet 4.6. Opus 4.7 supports low/medium/high/xhigh/max (xhigh sits between high and max, added in v2.1.111); Opus 4.6 and Sonnet 4.6 support low/medium/high/max (xhigh falls back to high). Defaults: Opus 4.6 and Sonnet 4.6 default to high on all plans (Pro/Max raised from medium to high in v2.1.117); Opus 4.7 defaults to xhigh on Max plan. The max value is session-only unless set via CLAUDE_CODE_EFFORT_LEVEL. Use /effort auto to reset to model default. Also configurable via CLAUDE_CODE_EFFORT_LEVEL environment variable. See https://code.claude.com/docs/en/model-config#adjust-effort-level
   */
  effortLevel?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
  /**
   * Enable fast mode for Opus 4.6 (research preview). Fast mode uses the same model with 2.5x faster output at higher per-token cost. Requires extra usage enabled. Alternatively, toggle with /fast command. See https://code.claude.com/docs/en/fast-mode
   */
  fastMode?: boolean;
  /**
   * Require per-session opt-in for fast mode. When true, fast mode does not persist across sessions and users must enable it with /fast each session. Useful for controlling costs. See https://code.claude.com/docs/en/fast-mode
   */
  fastModePerSessionOptIn?: boolean;
  /**
   * Probability (0–1) that the session quality survey appears when eligible. A value of 0.05 means 5% of eligible sessions. See https://code.claude.com/docs/en/settings#available-settings
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
     * Hooks that run when a turn ends due to an API error (e.g., rate_limit, authentication_failed, billing_error, invalid_request, server_error, max_output_tokens, unknown). Matcher can scope to specific error types. Hook output and exit code are ignored. See https://code.claude.com/docs/en/hooks
     */
    StopFailure?: HookMatcher[];
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
    /**
     * Hooks that run after a full batch of parallel tool calls resolves, before the next model call. Exit code 2 blocks the agentic loop. Does not support matchers. See https://code.claude.com/docs/en/hooks
     */
    PostToolBatch?: HookMatcher[];
    /**
     * Hooks that run when a task is being created via TaskCreate. Exit code 2 rolls back task creation. Does not support matchers. See https://code.claude.com/docs/en/hooks#taskcreated
     */
    TaskCreated?: HookMatcher[];
    /**
     * Hooks that run when a tool call is denied by the auto mode classifier. Supports matchers on tool name. See https://code.claude.com/docs/en/hooks
     */
    PermissionDenied?: HookMatcher[];
    /**
     * Hooks that run when a user-typed command expands into a prompt, before it reaches Claude. Exit code 2 blocks the expansion. Supports matchers on command name. See https://code.claude.com/docs/en/hooks
     */
    UserPromptExpansion?: HookMatcher[];
  };
  /**
   * Disable all hooks and statusLine execution. When true in managed settings, user and project-level disableAllHooks cannot override it. See https://code.claude.com/docs/en/hooks#disable-or-remove-hooks
   */
  disableAllHooks?: boolean;
  /**
   * (Managed settings only) Allowlist of plugin IDs whose MCP servers may advertise channel notifications when channelsEnabled is true. When set, only the listed plugins can push inbound messages. See https://code.claude.com/docs/en/mcp
   */
  allowedChannelPlugins?: string[];
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
    /**
     * Re-run the status line command every N seconds in addition to event-driven updates. Leave unset to run only on events. Useful for time-based data like clocks, or when background subagents change git state while the main session is idle. See https://code.claude.com/docs/en/statusline
     */
    refreshInterval?: number;
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
          /**
           * Whether to automatically update this marketplace on Claude Code startup. Written automatically by Claude Code when you toggle auto-update for a marketplace
           */
          autoUpdate?: boolean;
          /**
           * ISO 8601 timestamp of the last marketplace refresh. Written automatically by Claude Code
           */
          lastUpdated?: string;
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
   * Skip the WebFetch blocklist check for enterprise environments with restrictive security policies. See https://code.claude.com/docs/en/settings#available-settings
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
       * Allow Unix domain sockets for local IPC (SSH agent, Docker, etc.). Provide an array of specific paths. Defaults to blocking if not specified. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowUnixSockets?: string[];
      /**
       * Allow binding to local network addresses (e.g., localhost ports). Defaults to false if not specified. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowLocalBinding?: boolean;
      /**
       * HTTP proxy port to use for network filtering. If not specified, a proxy server will be started automatically. See https://code.claude.com/docs/en/sandboxing#custom-proxy-configuration
       */
      httpProxyPort?: number;
      /**
       * SOCKS proxy port to use for network filtering. If not specified, a proxy server will be started automatically. See https://code.claude.com/docs/en/sandboxing#custom-proxy-configuration
       */
      socksProxyPort?: number;
      /**
       * Allow all Unix domain socket connections. If true, this overrides allowUnixSockets. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowAllUnixSockets?: boolean;
      /**
       * Allowlist of network domains for sandboxed commands. Supports wildcard patterns like *.example.com. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowedDomains?: string[];
      /**
       * Blocklist of network domains for sandboxed commands. Blocks specific domains even when a broader allowedDomains wildcard would otherwise permit them. Supports wildcard patterns like *.example.com. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      deniedDomains?: string[];
      /**
       * (Managed settings only) Only allowedDomains and WebFetch(domain:...) allow rules from managed settings are respected. User, project, local, and flag settings domains are ignored. Denied domains are still respected from all sources. Non-allowed domains are automatically blocked without user prompts. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowManagedDomainsOnly?: boolean;
      /**
       * macOS only. Additional XPC/Mach service names the sandbox may look up. Supports a single trailing * for prefix matching. Needed for tools that communicate via XPC such as the iOS Simulator or Playwright. See https://code.claude.com/docs/en/sandboxing#network-isolation
       */
      allowMachLookup?: string[];
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
     * Commands that should never run in the sandbox (e.g., ["git", "docker"]). See https://code.claude.com/docs/en/sandboxing#configure-sandboxing
     */
    excludedCommands?: string[];
    /**
     * Automatically allow bash commands without prompting when they run in the sandbox. Only applies to commands that will run sandboxed. See https://code.claude.com/docs/en/sandboxing#sandbox-modes
     */
    autoAllowBashIfSandboxed?: boolean;
    /**
     * macOS only. Allow access to the system TLS trust service (com.apple.trustd.agent) in the sandbox. Required for Go-based tools like gh, gcloud, and terraform to verify TLS certificates when using httpProxyPort with a MITM proxy and custom CA. Reduces security by opening a potential data exfiltration path. Default: false. See https://code.claude.com/docs/en/settings#sandbox-settings
     */
    enableWeakerNetworkIsolation?: boolean;
    /**
     * Enable weaker sandbox mode for unprivileged docker environments where --proc mounting fails. This significantly reduces the strength of the sandbox and should only be used when this risk is acceptable. Default: false (secure). See https://code.claude.com/docs/en/sandboxing#limitations
     */
    enableWeakerNestedSandbox?: boolean;
    /**
     * Allow commands to run outside the sandbox via the dangerouslyDisableSandbox parameter. When false, the dangerouslyDisableSandbox parameter is completely ignored and all commands must run sandboxed. Default: true. See https://code.claude.com/docs/en/sandboxing#limitations
     */
    allowUnsandboxedCommands?: boolean;
    /**
     * Enable sandboxed bash. See https://code.claude.com/docs/en/sandboxing#enable-sandboxing
     */
    enabled?: boolean;
    /**
     * Filesystem access control for sandboxed commands. See https://code.claude.com/docs/en/sandboxing#filesystem-isolation
     */
    filesystem?: {
      /**
       * Paths where subprocesses are allowed to write. Supports prefixes: // (absolute), ~/ (home directory), / (relative to settings file), ./ or no prefix (relative path). See https://code.claude.com/docs/en/sandboxing#granting-subprocess-write-access-to-specific-paths
       */
      allowWrite?: string[];
      /**
       * Paths where subprocesses are explicitly denied write access. Takes precedence over allowWrite. See https://code.claude.com/docs/en/sandboxing#filesystem-isolation
       */
      denyWrite?: string[];
      /**
       * Paths where subprocesses are explicitly denied read access. See https://code.claude.com/docs/en/sandboxing#filesystem-isolation
       */
      denyRead?: string[];
      /**
       * Paths to re-allow reading within denyRead regions. Takes precedence over denyRead for matching paths. See https://code.claude.com/docs/en/sandboxing#granting-subprocess-write-access-to-specific-paths
       */
      allowRead?: string[];
      /**
       * (Managed settings only) When true, only allowRead paths from managed settings are used; user, project, and local allowRead entries are ignored. denyRead still merges from all sources. See https://code.claude.com/docs/en/sandboxing#filesystem-isolation
       */
      allowManagedReadPathsOnly?: boolean;
    };
    /**
     * Custom ripgrep configuration for Claude Code's bundled ripgrep support. Overrides the bundled binary and arguments.
     */
    ripgrep?: {
      /**
       * Path to the ripgrep binary to use
       */
      command: string;
      /**
       * Additional arguments to pass to the ripgrep binary
       */
      args?: string[];
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
   * URL template for the PR badge shown in the footer and in tool-result summaries. Substitutes placeholders {host}, {owner}, {repo}, {number}, {url} from the gh-reported PR URL. Use this to point PR links at an internal code-review tool instead of github.com. Does not affect #123 autolinks in Claude's prose. See https://code.claude.com/docs/en/settings#available-settings
   */
  prUrlTemplate?: string;
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
   * Configuration for --worktree sessions. See https://code.claude.com/docs/en/settings#worktree-settings
   */
  worktree?: {
    /**
     * Directories to check out in each worktree via git sparse-checkout (cone mode). Only the listed paths are written to disk, which is faster in large monorepos. See https://code.claude.com/docs/en/settings#worktree-settings
     */
    sparsePaths?: string[];
  };
  /**
   * (Managed settings only) Custom message appended to the plugin trust warning shown before installation. Use to provide organization-specific context about approved plugins. See https://code.claude.com/docs/en/settings#plugin-settings
   */
  pluginTrustMessage?: string;
  /**
   * Per-plugin configuration including MCP server user configs and plugin options, keyed by plugin ID (plugin@marketplace format). See https://code.claude.com/docs/en/plugins
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
          /**
           * Non-sensitive option values from the plugin manifest's userConfig, keyed by option name. Sensitive values go to secure storage instead. See https://code.claude.com/docs/en/plugins-reference
           */
          options?: {
            [k: string]: (string | number | boolean | string[]) | undefined;
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
  /**
   * Name of an agent (built-in or custom) to use for the main thread. Applies the agent's system prompt, tool restrictions, and model. See https://code.claude.com/docs/en/sub-agents
   */
  agent?: string;
  /**
   * Custom directory path for auto-memory storage. Supports ~/ prefix for home-directory expansion. Ignored if set in checked-in project settings (.claude/settings.json) for security. Defaults to ~/.claude/projects/<sanitized-cwd>/memory/ when unset. See https://code.claude.com/docs/en/memory
   */
  autoMemoryDirectory?: string;
  /**
   * Customization for the auto mode classifier prompt. Typically configured in managed settings to tune the allow/deny rules used when permissions.defaultMode is "auto". By default, allow, soft_deny, and environment REPLACE the corresponding built-in classifier section entirely. Include the literal string "$defaults" as an array entry (added in v2.1.118) to splice the built-in defaults in at that position alongside your custom rules. See https://code.claude.com/docs/en/permissions
   */
  autoMode?: {
    /**
     * Rules for the auto mode classifier allow section. Replaces the built-in allow rules entirely unless the literal string "$defaults" is included as an entry, which splices the built-in defaults in at that position.
     */
    allow?: string[];
    /**
     * Rules for the auto mode classifier soft-deny section. Replaces the built-in soft-deny rules entirely unless the literal string "$defaults" is included as an entry, which splices the built-in defaults in at that position.
     */
    soft_deny?: string[];
    /**
     * Entries for the auto mode classifier environment section. Replaces the built-in environment context entirely unless the literal string "$defaults" is included as an entry, which splices the built-in defaults in at that position.
     */
    environment?: string[];
  };
  /**
   * (Teams/Enterprise) Opt-in for channel notifications — MCP servers with the claude/channel capability pushing inbound messages. Default off. When true, users can select servers via --channels. See https://code.claude.com/docs/en/mcp
   */
  channelsEnabled?: boolean;
  /**
   * Default shell for input-box ! commands. Default: bash. Using "powershell" routes ! commands through PowerShell on Windows and requires CLAUDE_CODE_USE_POWERSHELL_TOOL=1 with pwsh on PATH. See https://code.claude.com/docs/en/settings#available-settings
   */
  defaultShell?: 'bash' | 'powershell';
  /**
   * Set to "disable" to prevent Claude Code from registering the `claude://` deep-link protocol handler on startup. Most useful in managed settings where users cannot override it. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableDeepLinkRegistration?: 'disable';
  /**
   * Disable inline shell execution for `` !`...` `` and ` ```! ` blocks in skills and custom slash commands from user, project, plugin, or additional-directory sources. Commands are replaced with [shell command execution disabled by policy] instead of being run. Bundled and managed skills are not affected. Most useful in managed settings where users cannot override it. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableSkillShellExecution?: boolean;
  /**
   * (Managed settings only) Block CLI startup until remote managed settings are freshly fetched from the server. If the fetch fails, the CLI exits (fail-closed) rather than continuing with cached settings. When not set, startup continues without waiting for remote settings. See https://code.claude.com/docs/en/server-managed-settings
   */
  forceRemoteSettingsRefresh?: boolean;
  /**
   * Minimum Claude Code version to stay on. Prevents downgrades when switching release channels. See https://code.claude.com/docs/en/settings#available-settings
   */
  minimumVersion?: string;
  /**
   * When true, the plan-approval dialog offers a "clear context" option. Defaults to false.
   */
  showClearContextOnPlanAccept?: boolean;
  /**
   * Show thinking summaries in the transcript view (Ctrl+O). Thinking summaries are not generated by default in interactive sessions; set to true to restore. See https://code.claude.com/docs/en/settings#available-settings
   */
  showThinkingSummaries?: boolean;
  /**
   * Whether the user has accepted the bypass permissions mode dialog. Typically managed by the CLI rather than set by hand.
   */
  skipDangerousModePermissionPrompt?: boolean;
  /**
   * (Managed settings) Block non-plugin customization sources for the listed surfaces. Array form locks specific surfaces (e.g., ["skills", "hooks"]); true locks all four; false is an explicit no-op. See https://code.claude.com/docs/en/plugins-reference
   */
  strictPluginOnlyCustomization?: boolean | ('skills' | 'agents' | 'hooks' | 'mcp')[];
  /**
   * TUI rendering mode. Use "fullscreen" for the flicker-free alt-screen renderer with virtualized scrollback; "default" for the classic main-screen renderer. Corresponds to the /tui command. See https://code.claude.com/docs/en/settings#available-settings
   */
  tui?: 'fullscreen' | 'default';
  /**
   * Transcript view mode. "default" shows standard interactive view; "verbose" shows expanded tool details; "focus" shows prompt, one-line tool summaries, and final response only (Ctrl+O toggle). See https://code.claude.com/docs/en/settings#available-settings
   */
  viewMode?: 'default' | 'verbose' | 'focus';
  /**
   * When true, apply the auto mode classifier during plan mode to auto-approve safe read-only tool calls while planning. Has no effect unless permissions.defaultMode allows auto. See https://code.claude.com/docs/en/permissions
   */
  useAutoModeDuringPlan?: boolean;
  /**
   * Enable push-to-talk voice dictation. Typically written automatically when /voice is used. Requires a Claude.ai account. See https://code.claude.com/docs/en/settings#available-settings
   */
  voiceEnabled?: boolean;
  /**
   * (Windows managed settings only) When true, Claude Code on WSL reads managed settings from the Windows policy chain in addition to /etc/claude-code, with Windows sources taking priority. Only honored when set in the HKLM registry key or C:\Program Files\ClaudeCode\managed-settings.json, both of which require Windows admin to write. For HKCU policy to also apply on WSL, the flag must additionally be set in HKCU itself. Has no effect on native Windows. See https://code.claude.com/docs/en/settings#available-settings
   */
  wslInheritsWindowsSettings?: boolean;
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
