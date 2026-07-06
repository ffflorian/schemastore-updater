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
       * Optional timeout in seconds (default: 600; lowered to 30 on UserPromptSubmit and 10 on MessageDisplay)
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
      /**
       * Argument list for exec form. When present, spawns the command directly without shell interpretation — each element is passed as-is, so path placeholders never need quoting. See https://code.claude.com/docs/en/hooks#command-hook-fields
       */
      args?: string[];
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
      /**
       * When the prompt returns ok: false, feed the reason back to Claude and continue the turn instead of stopping. Implemented as continue: true on the resulting decision: "block". See https://code.claude.com/docs/en/hooks#prompt-hook-configuration
       */
      continueOnBlock?: boolean;
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
       * Optional timeout in seconds (default: 600; lowered to 30 on UserPromptSubmit and 10 on MessageDisplay)
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
       * Optional timeout in seconds (default: 600; lowered to 30 on UserPromptSubmit and 10 on MessageDisplay)
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
   * Command that outputs AWS credentials as JSON (in the form {"Credentials": {"AccessKeyId": ..., "SecretAccessKey": ..., "SessionToken": ...}}). The output is captured silently. Use when you cannot modify the .aws directory and must return credentials directly. See https://code.claude.com/docs/en/amazon-bedrock#advanced-credential-configuration
   */
  awsCredentialExport?: string;
  /**
   * Command to run when AWS credentials are expired or unavailable; its output is shown to the user but interactive input is not supported. Also drives the "Claude Platform on AWS · refresh credentials" option in /login when configured. See https://code.claude.com/docs/en/amazon-bedrock#advanced-credential-configuration
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
     * Workspace API key for Claude Platform on AWS; takes precedence over SigV4 authentication. See https://code.claude.com/docs/en/claude-platform-on-aws#1-configure-aws-credentials
     */
    ANTHROPIC_AWS_API_KEY?: string;
    /**
     * Override the Claude Platform on AWS endpoint URL. Default is https://aws-external-anthropic.{region}.api.aws. See https://code.claude.com/docs/en/claude-platform-on-aws#route-through-a-corporate-proxy
     */
    ANTHROPIC_AWS_BASE_URL?: string;
    /**
     * Required workspace ID for Claude Platform on AWS; sent as the anthropic-workspace-id header on every request. See https://code.claude.com/docs/en/claude-platform-on-aws#2-configure-claude-code
     */
    ANTHROPIC_AWS_WORKSPACE_ID?: string;
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
     * Override the default Fable-class model ID. See https://code.claude.com/docs/en/model-config#environment-variables
     */
    ANTHROPIC_DEFAULT_FABLE_MODEL?: string;
    /**
     * Display description shown for the Fable model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_FABLE_MODEL_DESCRIPTION?: string;
    /**
     * Display name shown for the Fable model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_FABLE_MODEL_NAME?: string;
    /**
     * Comma-separated list of capabilities the pinned Fable model supports. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_FABLE_MODEL_SUPPORTED_CAPABILITIES?: string;
    /**
     * Override default Haiku model ID
     */
    ANTHROPIC_DEFAULT_HAIKU_MODEL?: string;
    /**
     * Display description shown for the Haiku model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_HAIKU_MODEL_DESCRIPTION?: string;
    /**
     * Display name shown for the Haiku model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_HAIKU_MODEL_NAME?: string;
    /**
     * Comma-separated list of capabilities the pinned Haiku model supports. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_HAIKU_MODEL_SUPPORTED_CAPABILITIES?: string;
    /**
     * Override default Opus model ID
     */
    ANTHROPIC_DEFAULT_OPUS_MODEL?: string;
    /**
     * Display description shown for the Opus model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_OPUS_MODEL_DESCRIPTION?: string;
    /**
     * Display name shown for the Opus model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_OPUS_MODEL_NAME?: string;
    /**
     * Comma-separated list of capabilities the pinned Opus model supports. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_OPUS_MODEL_SUPPORTED_CAPABILITIES?: string;
    /**
     * Override default Sonnet model ID
     */
    ANTHROPIC_DEFAULT_SONNET_MODEL?: string;
    /**
     * Display description shown for the Sonnet model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_SONNET_MODEL_DESCRIPTION?: string;
    /**
     * Display name shown for the Sonnet model in the model picker. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_SONNET_MODEL_NAME?: string;
    /**
     * Comma-separated list of capabilities the pinned Sonnet model supports. See https://code.claude.com/docs/en/model-config#customize-pinned-model-display-and-capabilities
     */
    ANTHROPIC_DEFAULT_SONNET_MODEL_SUPPORTED_CAPABILITIES?: string;
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
     * DEPRECATED (prefer ANTHROPIC_DEFAULT_HAIKU_MODEL). Haiku-class model to use for background and low-complexity tasks (e.g., 'claude-3-5-haiku-latest')
     */
    ANTHROPIC_SMALL_FAST_MODEL?: string;
    /**
     * Override the AWS region for the Haiku-class model on Bedrock and Bedrock Mantle. Has no effect without ANTHROPIC_DEFAULT_HAIKU_MODEL (or the deprecated ANTHROPIC_SMALL_FAST_MODEL) set on Bedrock. See https://code.claude.com/docs/en/amazon-bedrock#3-configure-claude-code
     */
    ANTHROPIC_SMALL_FAST_MODEL_AWS_REGION?: string;
    /**
     * Override Google Vertex AI endpoint URL
     */
    ANTHROPIC_VERTEX_BASE_URL?: string;
    /**
     * Google Vertex AI project ID
     */
    ANTHROPIC_VERTEX_PROJECT_ID?: string;
    /**
     * Workspace ID for workload identity federation. Scopes the minted token to a specific workspace when the federation rule covers more than one. See https://code.claude.com/docs/en/env-vars
     */
    ANTHROPIC_WORKSPACE_ID?: string;
    /**
     * Override the 5-minute idle timeout for streaming responses (0 disables it). See https://code.claude.com/docs/en/env-vars
     */
    API_FORCE_IDLE_TIMEOUT?: string;
    /**
     * API request timeout in milliseconds (default: 600000)
     */
    API_TIMEOUT_MS?: string;
    /**
     * Bearer token for Bedrock API authentication
     */
    AWS_BEARER_TOKEN_BEDROCK?: string;
    /**
     * AWS region for Amazon Bedrock and Claude Platform on AWS requests (e.g. us-east-1). See https://code.claude.com/docs/en/amazon-bedrock#3-configure-claude-code
     */
    AWS_REGION?: string;
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
     * Endpoint that, together with ENABLE_BETA_TRACING_DETAILED=1, activates detailed beta tracing spans (e.g. claude_code.hook). See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    BETA_TRACING_ENDPOINT?: string;
    /**
     * Force local repo bundling for --remote invocations
     */
    CCR_FORCE_BUNDLE?: '0' | '1';
    /**
     * Set to 1 in subprocesses Claude Code spawns (Bash and PowerShell tools, tmux sessions, hook commands, status line commands, stdio MCP server subprocesses). IDE extensions also set this in their integrated terminals. To distinguish a direct tool/hook subprocess from a stdio MCP server subprocess, use CLAUDE_CODE_CHILD_SESSION instead. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDECODE?: '0' | '1';
    /**
     * Disable built-in subagent types in Agent SDK
     */
    CLAUDE_AGENT_SDK_DISABLE_BUILTIN_AGENTS?: '0' | '1';
    /**
     * Skip 'mcp__<server>__' prefix on MCP tool names in Agent SDK
     */
    CLAUDE_AGENT_SDK_MCP_NO_PREFIX?: '0' | '1';
    /**
     * Stall timeout for background subagents in milliseconds (default 600000). The timer resets on each streaming progress event; if no progress arrives within the window the subagent is aborted and the task is marked failed, surfacing any partial result to the parent. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_ASYNC_AGENT_STALL_TIMEOUT_MS?: string;
    /**
     * Context capacity percentage threshold for auto-compaction (1-100)
     */
    CLAUDE_AUTOCOMPACT_PCT_OVERRIDE?: string;
    /**
     * Force-enable automatic backgrounding of tasks
     */
    CLAUDE_AUTO_BACKGROUND_TASKS?: '0' | '1';
    /**
     * Set to 1 to render screen-reader friendly output: flat text without decorative borders or animations. Set to 0 to force screen-reader mode off even when axScreenReader is true. The --ax-screen-reader flag takes precedence. Requires Claude Code v2.1.181 or later. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_AX_SCREEN_READER?: '0' | '1';
    /**
     * Return to original project directory after each bash command
     */
    CLAUDE_BASH_MAINTAIN_PROJECT_WORKING_DIR?: '0' | '1';
    /**
     * Path to a file whose existence marks the user as present; while it exists, mobile push notifications are skipped (v2.1.181+). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CLIENT_PRESENCE_FILE?: string;
    /**
     * Keep native cursor visible for screen magnifiers and assistive tools
     */
    CLAUDE_CODE_ACCESSIBILITY?: '0' | '1';
    /**
     * Load CLAUDE.md memory files from additional directories
     */
    CLAUDE_CODE_ADDITIONAL_DIRECTORIES_CLAUDE_MD?: '0' | '1';
    /**
     * Force a full-screen repaint on every frame in fullscreen mode. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_ALT_SCREEN_FULL_REPAINT?: '0' | '1';
    /**
     * Send the effort parameter for all models, not just those with effort enabled by default. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_ALWAYS_ENABLE_EFFORT?: '0' | '1';
    /**
     * Credential helper refresh interval in milliseconds
     */
    CLAUDE_CODE_API_KEY_HELPER_TTL_MS?: string;
    /**
     * Set to 0 to stop auto-opening the browser when a new artifact is created. See https://code.claude.com/docs/en/artifacts#create-an-artifact
     */
    CLAUDE_CODE_ARTIFACT_AUTO_OPEN?: '0' | '1';
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
     * Set by Claude Code to 1 in nested subprocesses (Bash, PowerShell, Monitor, hook commands, status-line commands) to distinguish nested sessions from a top-level claude launched in IDE terminals (v2.1.172+). A nested interactive claude TUI started this way is excluded from --resume, --continue, up-arrow history, and the claude agents list; non-interactive claude -p sessions still persist (override with CLAUDE_CODE_FORCE_SESSION_PERSISTENCE=1). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_CHILD_SESSION?: '0' | '1';
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
     * Disable the server-side advisor tool. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_DISABLE_ADVISOR_TOOL?: '0' | '1';
    /**
     * Turn off background agents and agent view (claude agents, --bg, /background, and the on-demand supervisor). Equivalent to the disableAgentView setting. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_DISABLE_AGENT_VIEW?: '0' | '1';
    /**
     * Disable alternate screen buffer rendering. When set to 1, keeps conversation in native scrollback instead of fullscreen renderer
     */
    CLAUDE_CODE_DISABLE_ALTERNATE_SCREEN?: '0' | '1';
    /**
     * Disable the Artifact tool. Equivalent to setting disableArtifact. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_DISABLE_ARTIFACT?: '0' | '1';
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
     * UNDOCUMENTED. Disable automatic memory-pressure reaping of idle background shell commands (added v2.1.193).
     */
    CLAUDE_CODE_DISABLE_BG_SHELL_PRESSURE_REAP?: '0' | '1';
    /**
     * Disable the skills and workflows bundled with Claude Code (plugins and project .claude/skills are unaffected). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_DISABLE_BUNDLED_SKILLS?: '0' | '1';
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
     * Disable file checkpointing for /rewind
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
     * UNDOCUMENTED. Disable mouse click/drag/hover in fullscreen mode while keeping wheel scroll (added v2.1.195).
     */
    CLAUDE_CODE_DISABLE_MOUSE_CLICKS?: '0' | '1';
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
     * Set to 1 to disable workflows. Equivalent to the disableWorkflows setting. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_DISABLE_WORKFLOWS?: '0' | '1';
    /**
     * Reasoning effort level
     */
    CLAUDE_CODE_EFFORT_LEVEL?: 'low' | 'medium' | 'high' | 'xhigh' | 'max' | 'auto';
    /**
     * Set to 1 to make auto mode available on Amazon Bedrock, Google Cloud Vertex AI, and Microsoft Foundry (requires v2.1.158+; no effect on the Anthropic API where auto mode is available by default). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_ENABLE_AUTO_MODE?: '0' | '1';
    /**
     * Override session recap/away summary availability
     */
    CLAUDE_CODE_ENABLE_AWAY_SUMMARY?: '0' | '1';
    /**
     * Refresh plugins at turn boundaries
     */
    CLAUDE_CODE_ENABLE_BACKGROUND_PLUGIN_REFRESH?: '0' | '1';
    /**
     * Enable feedback survey collection via OpenTelemetry for enterprises
     */
    CLAUDE_CODE_ENABLE_FEEDBACK_SURVEY_FOR_OTEL?: '0' | '1';
    /**
     * Force fine-grained tool output streaming
     */
    CLAUDE_CODE_ENABLE_FINE_GRAINED_TOOL_STREAMING?: '0' | '1';
    /**
     * Enable model discovery from LLM gateway /v1/models endpoint when ANTHROPIC_BASE_URL points at an Anthropic-compatible gateway
     */
    CLAUDE_CODE_ENABLE_GATEWAY_MODEL_DISCOVERY?: '0' | '1';
    /**
     * Enable prompt suggestions
     */
    CLAUDE_CODE_ENABLE_PROMPT_SUGGESTION?: 'true' | 'false';
    /**
     * Enable task tracking in non-interactive mode
     */
    CLAUDE_CODE_ENABLE_TASKS?: '0' | '1';
    /**
     * Set to 1 to enable telemetry collection. Required for all OpenTelemetry integration. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    CLAUDE_CODE_ENABLE_TELEMETRY?: '0' | '1';
    /**
     * Enable the enhanced telemetry (tracing) beta. ENABLE_ENHANCED_TELEMETRY_BETA is also accepted. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    CLAUDE_CODE_ENHANCED_TELEMETRY_BETA?: '0' | '1';
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
     * Set to 1 to override the automatic exclusion of nested interactive claude TUI sessions from --resume, --continue, up-arrow history, and the claude agents list (requires v2.1.172+). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_FORCE_SESSION_PERSISTENCE?: '0' | '1';
    /**
     * Set to 1 to force strikethrough rendering for ~~text~~ in Claude's responses when the terminal supports it but is not auto-detected, such as over SSH without TERM_PROGRAM forwarded. Without this, undetected terminals show the literal ~~ markers. Requires Claude Code v2.1.186 or later. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_FORCE_STRIKETHROUGH?: '0' | '1';
    /**
     * Force synchronous output flushing. When set to 1, forces synchronized output on terminals that auto-detection misses (e.g., Emacs eat)
     */
    CLAUDE_CODE_FORCE_SYNC_OUTPUT?: '0' | '1';
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
     * Cap the number of agentic turns when no explicit limit is passed. Equivalent to --max-turns, which takes precedence. A non-positive integer is rejected at startup. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_MAX_TURNS?: string;
    /**
     * Isolate MCP server environments to allowlisted variables
     */
    CLAUDE_CODE_MCP_ALLOWLIST_ENV?: '0' | '1';
    /**
     * Idle timeout in milliseconds for remote MCP tool calls (default: 300000, about 5 minutes). When an HTTP, SSE, WebSocket, or claude.ai connector MCP server sends no response and no progress notification for this long, the tool call aborts with an error instead of waiting for the overall MCP_TOOL_TIMEOUT. Set to 0 to disable the idle check. Values below 1000 are raised to one second, and the value is capped at the effective MCP_TOOL_TIMEOUT. Does not apply to stdio or IDE servers. Requires Claude Code v2.1.187 or later. See https://code.claude.com/docs/en/mcp
     */
    CLAUDE_CODE_MCP_TOOL_IDLE_TIMEOUT?: string;
    /**
     * Set to 1 to show the terminal's own cursor at the input caret instead of a drawn block. The cursor respects the terminal's blink, shape, and focus settings. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_NATIVE_CURSOR?: '0' | '1';
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
     * Set to 1 to pin fast mode to Claude Opus 4.6 instead of the default Opus 4.8 (the fast-mode default since v2.1.154). With this set, /fast runs on Opus 4.6. See https://code.claude.com/docs/en/fast-mode
     */
    CLAUDE_CODE_OPUS_4_6_FAST_MODE_OVERRIDE?: '0' | '1';
    /**
     * Set to 1 to write OpenTelemetry exporter diagnostic errors to stderr (otherwise shown only with --debug). Requires v2.1.179+. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_OTEL_DIAG_STDERR?: '0' | '1';
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
     * Enable automatic package manager updates. When set, Claude Code runs the upgrade command in background on Homebrew/WinGet and prompts to restart
     */
    CLAUDE_CODE_PACKAGE_MANAGER_AUTO_UPDATE?: '0' | '1';
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
     * Set to 1 to clone GitHub owner/repo plugin sources over HTTPS instead of SSH. Useful in CI runners, containers, or environments without a configured SSH key for github.com. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_PLUGIN_PREFER_HTTPS?: '0' | '1';
    /**
     * Path(s) to pre-populated plugin directories
     */
    CLAUDE_CODE_PLUGIN_SEED_DIR?: string;
    /**
     * Set to 1 to stop Claude Code from passing -ExecutionPolicy Bypass when spawning PowerShell for tool calls, hooks, and status line commands. By default Claude Code bypasses execution policy so .ps1 scripts work on default-Restricted Windows installs. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_POWERSHELL_RESPECT_EXECUTION_POLICY?: '0' | '1';
    /**
     * Cap, in milliseconds, on how long `claude -p` waits for background subagents at exit (default 10 minutes; set to 0 to wait without limit, added v2.1.182). See https://code.claude.com/docs/en/headless#background-tasks-at-exit
     */
    CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS?: string;
    /**
     * Propagate the W3C traceparent header on API requests when using a custom ANTHROPIC_BASE_URL. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    CLAUDE_CODE_PROPAGATE_TRACEPARENT?: '0' | '1';
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
     * Override the continuation message injected when resuming a session that ended mid-turn (default "Continue from where you left off."). An empty string uses the default. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_RESUME_PROMPT?: string;
    /**
     * Set to 1 for unattended sessions (eval harnesses, CI, remote workers) to retry 429/529 capacity errors indefinitely, backing off up to 5 minutes, instead of failing after CLAUDE_CODE_MAX_RETRIES. Requires v2.1.186+. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_RETRY_WATCHDOG?: '0' | '1';
    /**
     * Set to 1 to start in safe mode: CLAUDE.md, skills, plugins, hooks, MCP servers, custom commands and agents, output styles, workflows, custom themes, custom keybindings, status line and file-suggestion commands, LSP servers, and auto-memory do not load, for troubleshooting a broken configuration. Managed settings policy still applies. Equivalent to passing --safe-mode; directly spawned child processes inherit the variable. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SAFE_MODE?: '0' | '1';
    /**
     * Script invocation limits (JSON object)
     */
    CLAUDE_CODE_SCRIPT_CAPS?: string;
    /**
     * Mouse wheel scroll speed multiplier (1-20)
     */
    CLAUDE_CODE_SCROLL_SPEED?: string;
    /**
     * Override the time budget in milliseconds for SessionEnd hooks (default 1500, raised up to 60000 by the highest configured per-hook timeout). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SESSIONEND_HOOKS_TIMEOUT_MS?: string;
    /**
     * Set automatically to the current session ID in Bash/PowerShell tool subprocesses, hook command subprocesses, and stdio MCP server subprocesses. Read-only. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SESSION_ID?: string;
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
     * Skip client-side SigV4 authentication for Claude Platform on AWS; use when a proxy or gateway adds authentication before forwarding. See https://code.claude.com/docs/en/claude-platform-on-aws#route-through-a-corporate-proxy
     */
    CLAUDE_CODE_SKIP_ANTHROPIC_AWS_AUTH?: '0' | '1';
    /**
     * Skip AWS authentication for Bedrock
     */
    CLAUDE_CODE_SKIP_BEDROCK_AUTH?: '0' | '1';
    /**
     * Skip Azure authentication for Foundry
     */
    CLAUDE_CODE_SKIP_FOUNDRY_AUTH?: '0' | '1';
    /**
     * Skip AWS authentication for Bedrock Mantle (for example, when using an LLM gateway). See https://code.claude.com/docs/en/env-vars
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
     * Override the default maximum consecutive Stop hook blocks (default: 8) before the turn ends with a warning. Raise this when a stop hook legitimately needs more than 8 iterations to converge. See https://code.claude.com/docs/en/hooks-guide
     */
    CLAUDE_CODE_STOP_HOOK_BLOCK_CAP?: string;
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
     * Set to 1 to download enabled claude.ai skills into ~/.claude/skills/ before the first query and resync every 10 minutes (non-interactive -p mode only; requires claude.ai auth). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SYNC_SKILLS?: '0' | '1';
    /**
     * Timeout in milliseconds for a mid-session skills resync when CLAUDE_CODE_SYNC_SKILLS is set (default 30000). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SYNC_SKILLS_INSTALL_TIMEOUT_MS?: string;
    /**
     * Timeout in milliseconds for the first query to wait on the initial skills sync when CLAUDE_CODE_SYNC_SKILLS is set (default 5000). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_SYNC_SKILLS_WAIT_TIMEOUT_MS?: string;
    /**
     * UNDOCUMENTED. Enable syntax highlighting in diffs
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
     * Enable Claude Platform on AWS as the API provider. Bedrock and Foundry take precedence if also set. See https://code.claude.com/docs/en/claude-platform-on-aws#2-configure-claude-code
     */
    CLAUDE_CODE_USE_ANTHROPIC_AWS?: '0' | '1';
    /**
     * Enable Amazon Bedrock as the API provider. See https://code.claude.com/docs/en/amazon-bedrock#3-configure-claude-code
     */
    CLAUDE_CODE_USE_BEDROCK?: '0' | '1';
    /**
     * Enable Microsoft Foundry as the API provider. See https://code.claude.com/docs/en/microsoft-foundry#3-configure-claude-code
     */
    CLAUDE_CODE_USE_FOUNDRY?: '0' | '1';
    /**
     * Enable the Mantle endpoint (native Anthropic API shape on Bedrock). See https://code.claude.com/docs/en/amazon-bedrock#enable-mantle
     */
    CLAUDE_CODE_USE_MANTLE?: '0' | '1';
    /**
     * Set to 1 to discover custom commands, subagents, and output styles using Node.js file APIs instead of ripgrep (for environments where the bundled ripgrep is unavailable). See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CODE_USE_NATIVE_FILE_SEARCH?: '0' | '1';
    /**
     * Enable PowerShell as default shell for interactive commands (Windows)
     */
    CLAUDE_CODE_USE_POWERSHELL_TOOL?: '0' | '1';
    /**
     * Enable Google Vertex AI as the API provider. See https://code.claude.com/docs/en/google-vertex-ai#4-configure-claude-code
     */
    CLAUDE_CODE_USE_VERTEX?: '0' | '1';
    /**
     * Override the configuration directory (default ~/.claude) where settings, credentials, session history, and plugins are stored. Useful for running multiple accounts side by side. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_CONFIG_DIR?: string;
    /**
     * Set automatically in Bash tool subprocesses and hook commands to the active effort level for the turn (low, medium, high, xhigh, or max; ultracode reports as xhigh). Read-only. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_EFFORT?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
    /**
     * Set to 1 to force-enable, or 0 to force-disable, the byte-level streaming idle watchdog that aborts a connection when no bytes arrive within the configured timeout. Enabled by default on direct Anthropic API and Claude Platform on AWS connections. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_ENABLE_BYTE_WATCHDOG?: '0' | '1';
    /**
     * Set to 1 to enable the byte-level streaming idle watchdog on Amazon Bedrock eventstream responses (off by default). Configure the timeout with CLAUDE_STREAM_IDLE_TIMEOUT_MS. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_ENABLE_BYTE_WATCHDOG_BEDROCK?: '0' | '1';
    /**
     * Set to 1 to force-enable, or 0 to force-disable, the event-level streaming idle watchdog. When unset, server-controlled on the direct Anthropic API and off on other providers. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_ENABLE_STREAM_WATCHDOG?: '0' | '1';
    /**
     * File path for persisting environment variables across Bash commands
     */
    CLAUDE_ENV_FILE?: string;
    /**
     * Project root directory path (also provided to hooks)
     */
    CLAUDE_PROJECT_DIR?: string;
    /**
     * Prefix for auto-generated Remote Control session names when no explicit name is set. Defaults to the machine hostname, producing names like myhost-graceful-unicorn. See https://code.claude.com/docs/en/remote-control#start-a-remote-control-session
     */
    CLAUDE_REMOTE_CONTROL_SESSION_NAME_PREFIX?: string;
    /**
     * Timeout in milliseconds before the streaming idle watchdog closes a stalled connection. When set explicitly the minimum is 300000 (5 minutes); lower values are clamped. See https://code.claude.com/docs/en/env-vars
     */
    CLAUDE_STREAM_IDLE_TIMEOUT_MS?: string;
    /**
     * Vertex AI region: global, a multi-region location (eu, us), or a specific region (e.g. us-east5). See https://code.claude.com/docs/en/google-vertex-ai#region-configuration
     */
    CLOUD_ML_REGION?: string;
    /**
     * Set to a truthy value (1, true, yes, or on) to enable debug mode, equivalent to --debug. Logs are written to ~/.claude/debug/<session-id>.txt. See https://code.claude.com/docs/en/env-vars
     */
    DEBUG?: string;
    /**
     * Set to 1 to disable automatic background updates. Manual claude update still works; use DISABLE_UPDATES to block both. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_AUTOUPDATER?: '0' | '1';
    /**
     * Set to 1 to disable automatic compaction when approaching the context limit. The manual /compact command remains available. Equivalent to autoCompactEnabled: false. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_AUTO_COMPACT?: '0' | '1';
    /**
     * Set to 1 to disable all compaction: both automatic compaction and the manual /compact command. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_COMPACT?: '0' | '1';
    /**
     * Set to 1 to disable cost warning messages. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_COST_WARNINGS?: '0' | '1';
    /**
     * Set to 1 to hide the /doctor command (useful for managed deployments). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_DOCTOR_COMMAND?: '0' | '1';
    /**
     * Disable Sentry error reporting
     */
    DISABLE_ERROR_REPORTING?: '0' | '1';
    /**
     * Set to 1 to hide the /usage-credits command for purchasing additional usage beyond rate limits. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_EXTRA_USAGE_COMMAND?: '0' | '1';
    /**
     * Set to 1 to disable the /feedback command. The older name DISABLE_BUG_COMMAND is also accepted. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_FEEDBACK_COMMAND?: '0' | '1';
    /**
     * Set to 1 to disable GrowthBook feature-flag fetching and use code defaults for every flag. Telemetry stays on unless DISABLE_TELEMETRY is also set. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_GROWTHBOOK?: '0' | '1';
    /**
     * Set to 1 to disable installation warnings (use only when manually managing the installation location). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_INSTALLATION_CHECKS?: '0' | '1';
    /**
     * Set to 1 to hide the /install-github-app command (already hidden on Bedrock, Vertex, or Foundry). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_INSTALL_GITHUB_APP_COMMAND?: '0' | '1';
    /**
     * Set to 1 to prevent sending the interleaved-thinking beta header (useful when a gateway or provider does not support interleaved thinking). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_INTERLEAVED_THINKING?: '0' | '1';
    /**
     * Set to 1 to hide the /login command (useful when authentication is handled externally via API keys or apiKeyHelper). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_LOGIN_COMMAND?: '0' | '1';
    /**
     * Set to 1 to hide the /logout command. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_LOGOUT_COMMAND?: '0' | '1';
    /**
     * Disable prompt caching for all models. See https://code.claude.com/docs/en/prompt-caching#disable-prompt-caching
     */
    DISABLE_PROMPT_CACHING?: '0' | '1';
    /**
     * Disable prompt caching for Fable models only. See https://code.claude.com/docs/en/prompt-caching#disable-prompt-caching
     */
    DISABLE_PROMPT_CACHING_FABLE?: '0' | '1';
    /**
     * Disable prompt caching for Haiku models only. See https://code.claude.com/docs/en/prompt-caching#disable-prompt-caching
     */
    DISABLE_PROMPT_CACHING_HAIKU?: '0' | '1';
    /**
     * Disable prompt caching for Opus models only. See https://code.claude.com/docs/en/prompt-caching#disable-prompt-caching
     */
    DISABLE_PROMPT_CACHING_OPUS?: '0' | '1';
    /**
     * Disable prompt caching for Sonnet models only. See https://code.claude.com/docs/en/prompt-caching#disable-prompt-caching
     */
    DISABLE_PROMPT_CACHING_SONNET?: '0' | '1';
    /**
     * Set to 1 to opt out of telemetry. Also disables feature-flag fetching (same effect as DISABLE_GROWTHBOOK). See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_TELEMETRY?: '0' | '1';
    /**
     * Block all update paths including manual updates
     */
    DISABLE_UPDATES?: '0' | '1';
    /**
     * Set to 1 to hide the /upgrade command. See https://code.claude.com/docs/en/env-vars
     */
    DISABLE_UPGRADE_COMMAND?: '0' | '1';
    /**
     * Set to 1 to opt out of telemetry (cross-tool convention; equivalent to DISABLE_TELEMETRY). See https://code.claude.com/docs/en/env-vars
     */
    DO_NOT_TRACK?: '0' | '1';
    /**
     * Emit detailed spans including hook execution when the tracing beta is enabled. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    ENABLE_BETA_TRACING_DETAILED?: '0' | '1';
    /**
     * Opt in/out of claude.ai MCP servers. See https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md#2163
     */
    ENABLE_CLAUDEAI_MCP_SERVERS?: 'true' | 'false';
    /**
     * Request a 1-hour prompt cache TTL instead of the 5-minute default (billed at a higher rate). See https://code.claude.com/docs/en/prompt-caching#cache-lifetime
     */
    ENABLE_PROMPT_CACHING_1H?: '0' | '1';
    /**
     * Control MCP tool search: "true" always defers and sends the beta header (requests fail on Vertex AI models earlier than Sonnet 4.5/Opus 4.5 or on proxies that do not support tool_reference); "auto" loads tools upfront if they fit within 10% of context; "auto:N" sets a custom threshold percentage (e.g. auto:5); "false" loads all tools upfront. Also applies when ANTHROPIC_BASE_URL points to a non-first-party host. See https://code.claude.com/docs/en/google-vertex-ai#4-configure-claude-code
     */
    ENABLE_TOOL_SEARCH?: string;
    /**
     * Set to any non-empty value to make all models (not only Opus) stop retrying with a repeated-overload error when no fallback model is configured. See https://code.claude.com/docs/en/env-vars
     */
    FALLBACK_FOR_ALL_PRIMARY_MODELS?: string;
    /**
     * Keep plugin auto-updates enabled even when DISABLE_AUTOUPDATER=1 is set. See https://code.claude.com/docs/en/discover-plugins#configure-auto-updates
     */
    FORCE_AUTOUPDATE_PLUGINS?: '0' | '1';
    /**
     * Force a 5-minute cache TTL regardless of authentication method; overrides ENABLE_PROMPT_CACHING_1H or a managed-settings TTL. See https://code.claude.com/docs/en/prompt-caching#override-the-ttl
     */
    FORCE_PROMPT_CACHING_5M?: '0' | '1';
    /**
     * Path to a GCP credential configuration file (service account key or workload identity federation config) used for Vertex AI authentication. See https://code.claude.com/docs/en/google-vertex-ai#3-configure-gcp-credentials
     */
    GOOGLE_APPLICATION_CREDENTIALS?: string;
    /**
     * HTTPS proxy URL (recommended over HTTP_PROXY)
     */
    HTTPS_PROXY?: string;
    /**
     * HTTP proxy URL
     */
    HTTP_PROXY?: string;
    /**
     * Set to 1 to enable demo mode: hides email and organization name from the header and /status output and skips onboarding. See https://code.claude.com/docs/en/env-vars
     */
    IS_DEMO?: '0' | '1';
    /**
     * Maximum number of tokens allowed in MCP tool output before truncation (default: 25000). Claude Code displays a warning above 10000 tokens. For tools that declare anthropic/maxResultSizeChars, that character limit replaces this token limit for text content, but image content from those tools is still subject to this limit. See https://code.claude.com/docs/en/mcp
     */
    MAX_MCP_OUTPUT_TOKENS?: string;
    /**
     * Number of times to retry when the model's response fails validation against --json-schema in non-interactive (-p) mode (default 5). See https://code.claude.com/docs/en/env-vars
     */
    MAX_STRUCTURED_OUTPUT_RETRIES?: string;
    /**
     * Override the extended thinking token budget; set to 0 to disable thinking on the Anthropic API. On adaptive reasoning models (Opus 4.7+, Opus 4.8, Fable 5) a nonzero budget is ignored unless CLAUDE_CODE_DISABLE_ADAPTIVE_THINKING is set. See https://code.claude.com/docs/en/model-config#extended-thinking
     */
    MAX_THINKING_TOKENS?: string;
    /**
     * OAuth client secret for MCP servers that require pre-configured credentials (avoids the interactive prompt when adding a server with --client-secret). See https://code.claude.com/docs/en/env-vars
     */
    MCP_CLIENT_SECRET?: string;
    /**
     * Controls whether startup waits for MCP servers to connect before the first query. Non-blocking by default since v2.1.142; set to 0 to restore the blocking 5-second connection wait. See https://code.claude.com/docs/en/env-vars
     */
    MCP_CONNECTION_NONBLOCKING?: '0' | '1';
    /**
     * How long blocking MCP startup waits in milliseconds for the connection batch before snapshotting the tool list (default 5000). Applies when MCP_CONNECTION_NONBLOCKING=0 or for alwaysLoad servers. See https://code.claude.com/docs/en/env-vars
     */
    MCP_CONNECT_TIMEOUT_MS?: string;
    /**
     * Fixed port for the OAuth redirect callback, as an alternative to --callback-port when adding an MCP server with pre-configured credentials. See https://code.claude.com/docs/en/env-vars
     */
    MCP_OAUTH_CALLBACK_PORT?: string;
    /**
     * Maximum number of remote MCP servers (HTTP/SSE) to connect in parallel during startup (default 20). See https://code.claude.com/docs/en/env-vars
     */
    MCP_REMOTE_SERVER_CONNECTION_BATCH_SIZE?: string;
    /**
     * Maximum number of local MCP servers (stdio) to connect in parallel during startup (default 3). See https://code.claude.com/docs/en/env-vars
     */
    MCP_SERVER_CONNECTION_BATCH_SIZE?: string;
    /**
     * Timeout in milliseconds for MCP server startup (default 30000). See https://code.claude.com/docs/en/env-vars
     */
    MCP_TIMEOUT?: string;
    /**
     * Timeout in milliseconds for MCP tool execution (default: 100000000, about 28 hours). A per-server timeout field in .mcp.json overrides this for that server. Values below 1000 are floored to one second. See https://code.claude.com/docs/en/mcp
     */
    MCP_TOOL_TIMEOUT?: string;
    /**
     * Path to custom CA certificate file
     */
    NODE_EXTRA_CA_CERTS?: string;
    /**
     * Domains to bypass proxy (space or comma-separated, or '*' for all)
     */
    NO_PROXY?: string;
    /**
     * Path to the CA certificate for gRPC OTLP mTLS. See https://code.claude.com/docs/en/monitoring-usage#mtls-authentication
     */
    OTEL_EXPORTER_OTLP_CERTIFICATE?: string;
    /**
     * Path to the client certificate for gRPC OTLP mTLS. See https://code.claude.com/docs/en/monitoring-usage#mtls-authentication
     */
    OTEL_EXPORTER_OTLP_CLIENT_CERTIFICATE?: string;
    /**
     * Path to the client private key for gRPC OTLP mTLS. See https://code.claude.com/docs/en/monitoring-usage#mtls-authentication
     */
    OTEL_EXPORTER_OTLP_CLIENT_KEY?: string;
    /**
     * OTLP exporter endpoint for all signals (e.g. http://localhost:4317). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_ENDPOINT?: string;
    /**
     * Headers sent with OTLP exporter requests (e.g. Authorization=Bearer token). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_HEADERS?: string;
    /**
     * OTLP exporter endpoint override for logs. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_LOGS_ENDPOINT?: string;
    /**
     * OTLP protocol override for logs: grpc, http/json, or http/protobuf. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_LOGS_PROTOCOL?: 'grpc' | 'http/json' | 'http/protobuf';
    /**
     * OTLP exporter endpoint override for metrics. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_METRICS_ENDPOINT?: string;
    /**
     * OTLP protocol override for metrics: grpc, http/json, or http/protobuf. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_METRICS_PROTOCOL?: 'grpc' | 'http/json' | 'http/protobuf';
    /**
     * Metrics temporality preference: delta (default) or cumulative. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_METRICS_TEMPORALITY_PREFERENCE?: 'delta' | 'cumulative';
    /**
     * OTLP exporter protocol for all signals: grpc, http/json, or http/protobuf. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_EXPORTER_OTLP_PROTOCOL?: 'grpc' | 'http/json' | 'http/protobuf';
    /**
     * OTLP exporter endpoint override for traces. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    OTEL_EXPORTER_OTLP_TRACES_ENDPOINT?: string;
    /**
     * OTLP protocol override for traces: grpc, http/json, or http/protobuf. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    OTEL_EXPORTER_OTLP_TRACES_PROTOCOL?: 'grpc' | 'http/json' | 'http/protobuf';
    /**
     * OpenTelemetry logs exporter(s) as a comma-separated list. Valid values: otlp, console, none. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOGS_EXPORTER?: string;
    /**
     * Logs export interval in milliseconds (default 5000). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOGS_EXPORT_INTERVAL?: string;
    /**
     * UNDOCUMENTED. Include assistant response text in the claude_code.assistant_response OpenTelemetry log event (added v2.1.193). When unset, follows OTEL_LOG_USER_PROMPTS; set to 0 to keep prompts-only.
     */
    OTEL_LOG_ASSISTANT_RESPONSES?: '0' | '1';
    /**
     * Log raw API request/response bodies. Set to 1, or to file:<dir> to write them to a directory. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOG_RAW_API_BODIES?: string;
    /**
     * Include full tool input/output content in OpenTelemetry log events (requires tracing; disabled by default). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOG_TOOL_CONTENT?: '0' | '1';
    /**
     * Include tool name and parameters in OpenTelemetry log events (disabled by default). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOG_TOOL_DETAILS?: '0' | '1';
    /**
     * Include user prompt text in OpenTelemetry log events (disabled by default). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_LOG_USER_PROMPTS?: '0' | '1';
    /**
     * OpenTelemetry metrics exporter(s) as a comma-separated list. Valid values: otlp, prometheus, console, none. See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_METRICS_EXPORTER?: string;
    /**
     * Include the user.account_uuid and user.account_id attributes on metrics (default true). See https://code.claude.com/docs/en/monitoring-usage#metrics-cardinality-control
     */
    OTEL_METRICS_INCLUDE_ACCOUNT_UUID?: 'true' | 'false';
    /**
     * Include the app.entrypoint attribute on metrics (default false). See https://code.claude.com/docs/en/monitoring-usage#metrics-cardinality-control
     */
    OTEL_METRICS_INCLUDE_ENTRYPOINT?: 'true' | 'false';
    /**
     * Include configured OTEL_RESOURCE_ATTRIBUTES on metric data points (default true). See https://code.claude.com/docs/en/monitoring-usage#metrics-cardinality-control
     */
    OTEL_METRICS_INCLUDE_RESOURCE_ATTRIBUTES?: 'true' | 'false';
    /**
     * Include the session.id attribute on metrics (default true). See https://code.claude.com/docs/en/monitoring-usage#metrics-cardinality-control
     */
    OTEL_METRICS_INCLUDE_SESSION_ID?: 'true' | 'false';
    /**
     * Include the app.version attribute on metrics (default false). See https://code.claude.com/docs/en/monitoring-usage#metrics-cardinality-control
     */
    OTEL_METRICS_INCLUDE_VERSION?: 'true' | 'false';
    /**
     * Metrics export interval in milliseconds (default 60000). See https://code.claude.com/docs/en/monitoring-usage#common-configuration-variables
     */
    OTEL_METRIC_EXPORT_INTERVAL?: string;
    /**
     * Comma-separated key=value resource attributes attached to all telemetry. See https://code.claude.com/docs/en/monitoring-usage#multi-team-organization-support
     */
    OTEL_RESOURCE_ATTRIBUTES?: string;
    /**
     * OpenTelemetry traces exporter(s) as a comma-separated list. Valid values: otlp, console, none. See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    OTEL_TRACES_EXPORTER?: string;
    /**
     * Traces export interval in milliseconds (default 5000). See https://code.claude.com/docs/en/monitoring-usage#traces-beta
     */
    OTEL_TRACES_EXPORT_INTERVAL?: string;
    /**
     * Override the character budget for skill metadata shown to the Skill tool. The budget scales dynamically at 1% of the context window, with a fallback of 8000 characters. Legacy name kept for backwards compatibility. See https://code.claude.com/docs/en/skills#control-who-invokes-a-skill
     */
    SLASH_COMMAND_TOOL_CHAR_BUDGET?: string;
    /**
     * Maximum number of characters in subagent output before truncation (default 32000, maximum 160000). When truncated, the full output is saved to disk and the path is included in the response. See https://code.claude.com/docs/en/env-vars
     */
    TASK_MAX_OUTPUT_LENGTH?: string;
    /**
     * Use the bundled ripgrep binary instead of system ripgrep
     */
    USE_BUILTIN_RIPGREP?: '0' | '1';
    /**
     * Override the Vertex AI region for Claude 3.5 Haiku (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_3_5_HAIKU?: string;
    /**
     * Override the Vertex AI region for Claude 3.5 Sonnet (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_3_5_SONNET?: string;
    /**
     * Override the Vertex AI region for Claude 3.7 Sonnet (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_3_7_SONNET?: string;
    /**
     * Override the Vertex AI region for Claude 4.0 Opus (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_0_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude 4.0 Sonnet (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_0_SONNET?: string;
    /**
     * Override the Vertex AI region for Claude 4.1 Opus (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_1_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude Opus 4.5 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_5_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude Sonnet 4.5 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_5_SONNET?: string;
    /**
     * Override the Vertex AI region for Claude Opus 4.6 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_6_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude Sonnet 4.6 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_6_SONNET?: string;
    /**
     * Override the Vertex AI region for Claude Opus 4.7 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_7_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude Opus 4.8 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_4_8_OPUS?: string;
    /**
     * Override the Vertex AI region for Claude Fable 5 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_FABLE_5?: string;
    /**
     * Override the Vertex AI region for Claude Haiku 4.5 (used when CLOUD_ML_REGION=global). See https://code.claude.com/docs/en/env-vars
     */
    VERTEX_REGION_CLAUDE_HAIKU_4_5?: string;
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
   * Persist adaptive reasoning effort across sessions. Set to low, medium, high, or xhigh; max and ultracode are session-only and are not accepted in the settings file (use the CLAUDE_CODE_EFFORT_LEVEL environment variable or /effort for a session-only max). Effort is supported on Fable 5, Opus 4.8, Opus 4.7, Opus 4.6, and Sonnet 4.6, with xhigh sitting between high and max (added in v2.1.111). Defaults: Fable 5 and Opus 4.8 default to high; Opus 4.6 and Sonnet 4.6 default to high on all plans (Pro/Max raised from medium to high in v2.1.117); Opus 4.7 defaults to xhigh. Use /effort auto to reset to model default. Also configurable via CLAUDE_CODE_EFFORT_LEVEL environment variable. See https://code.claude.com/docs/en/model-config#adjust-effort-level
   */
  effortLevel?: 'low' | 'medium' | 'high' | 'xhigh';
  /**
   * Enable fast mode, which uses Claude Opus 4.8 by default (since v2.1.154) for faster output at higher per-token cost without downgrading to a smaller model. Requires extra usage enabled. Toggle with the /fast command. Available on Opus 4.8 and Opus 4.7 (Opus 4.7 fast mode deprecated June 2026). See https://code.claude.com/docs/en/fast-mode
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
   * Lifecycle event hooks that run at configurable points during Claude Code operation (tool use, session start/end, notifications, prompt submit, message display, and more), not just before/after tool executions. See https://code.claude.com/docs/en/hooks
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
    /**
     * Hooks that run while assistant message text is displayed
     */
    MessageDisplay?: HookMatcher[];
  };
  /**
   * Disable all hooks and statusLine execution. When true in managed settings, user and project-level disableAllHooks cannot override it. See https://code.claude.com/docs/en/hooks#disable-or-remove-hooks
   */
  disableAllHooks?: boolean;
  /**
   * (Managed settings only) Allowlist of channel plugins that may run, each identified by its marketplace and plugin name. When set, only the listed plugins can push inbound channel messages while channelsEnabled is true. Replaces the default Anthropic allowlist when set; undefined falls back to the default and an empty array blocks all channel plugins. Requires channelsEnabled: true. See https://code.claude.com/docs/en/channels#restrict-which-channel-plugins-can-run
   */
  allowedChannelPlugins?: {
    /**
     * Name of the marketplace the channel plugin is installed from
     */
    marketplace: string;
    /**
     * Name of the channel plugin allowed to run
     */
    plugin: string;
  }[];
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
    /**
     * Set to true when your status line script renders the vim mode indicator itself, to suppress the built-in vim mode display. See https://code.claude.com/docs/en/statusline#manually-configure-a-status-line
     */
    hideVimModeIndicator?: boolean;
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
   * (Managed settings only) Allowlist of plugin marketplaces users can add. Undefined = no restrictions, empty array = lockdown. Uses exact matching for source specifications. See https://code.claude.com/docs/en/plugin-marketplaces#managed-marketplace-restrictions
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
   * Path to an executable, or a shell command line with arguments, that outputs OpenTelemetry headers as a JSON object. Runs at startup and re-runs on the interval set by CLAUDE_CODE_OTEL_HEADERS_HELPER_DEBOUNCE_MS. Requires CLAUDE_CODE_ENABLE_TELEMETRY=1. See https://code.claude.com/docs/en/monitoring-usage#dynamic-headers
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
    /**
     * (Managed setting only) Path to custom bubblewrap (bwrap) binary for Linux/WSL sandbox. Overrides default. See https://code.claude.com/docs/en/server-managed-settings
     */
    bwrapPath?: string;
    /**
     * (Managed setting only) Path to custom socat binary for Linux/WSL network proxying. Overrides default. See https://code.claude.com/docs/en/server-managed-settings
     */
    socatPath?: string;
    /**
     * When true, make sandbox startup a hard failure if required sandbox dependencies are missing. Default: false (sandbox is skipped with a warning). See https://code.claude.com/docs/en/sandboxing#enable-sandboxing
     */
    failIfUnavailable?: boolean;
    /**
     * Limit the entire sandbox configuration to the listed platforms. On platforms not in the list the sandbox config is inert: no sandbox, no auto-allow, no startup warning, and no failIfUnavailable exit. When omitted, all supported platforms are included. Only honored from managed (policy) settings.
     */
    enabledPlatforms?: ('macos' | 'linux' | 'wsl' | 'windows')[];
    /**
     * Block sandboxed commands from reading credential files and secret environment variables (v2.1.187+). Entries merge across settings scopes. See https://code.claude.com/docs/en/sandboxing#protect-credentials
     */
    credentials?: {
      /**
       * Credential file paths to hide from sandboxed commands
       */
      files?: {
        /**
         * Path to the credential file to deny
         */
        path: string;
        /**
         * Access mode; only "deny" is supported
         */
        mode: 'deny';
      }[];
      /**
       * Secret environment variable names to unset for sandboxed commands
       */
      envVars?: {
        /**
         * Environment variable name to deny
         */
        name: string;
        /**
         * Access mode; only "deny" is supported
         */
        mode: 'deny';
      }[];
    };
    /**
     * Allow sandboxed commands to send Apple Events on macOS (v2.1.181+). Honored only from user, managed, or CLI settings; project settings cannot enable it. See https://code.claude.com/docs/en/sandboxing#limitations
     */
    allowAppleEvents?: boolean;
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
   * Per-skill visibility overrides. Controls whether skills appear to Claude and in the / picker. Values: 'on' (name and description shown, default), 'name-only' (name only), 'user-invocable-only' (hidden from Claude, visible in /), 'off' (hidden everywhere). Plugin skills are not affected by this setting. See https://code.claude.com/docs/en/skills#override-skill-visibility-from-settings
   */
  skillOverrides?: {
    [k: string]: ('on' | 'name-only' | 'user-invocable-only' | 'off') | undefined;
  };
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
   * How agent team teammates display: "auto" picks split panes in tmux or iTerm2, in-process otherwise; "iterm2" (added in v2.1.186) forces iTerm2 native split panes and requires the it2 CLI (it shows an error with the install command if it2 is missing). The default is "in-process" (it was "auto" before v2.1.179). Agent teams are experimental and disabled by default. Enable them by adding CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS to your settings.json or environment. See https://code.claude.com/docs/en/agent-teams#choose-a-display-mode
   */
  teammateMode?: 'auto' | 'in-process' | 'tmux' | 'iterm2';
  /**
   * Configuration for --worktree sessions. See https://code.claude.com/docs/en/settings#worktree-settings
   */
  worktree?: {
    /**
     * Directories to check out in each worktree via git sparse-checkout (cone mode). Only the listed paths are written to disk, which is faster in large monorepos. See https://code.claude.com/docs/en/settings#worktree-settings
     */
    sparsePaths?: string[];
    /**
     * Whether to branch worktrees from origin/<default> (fresh) or local HEAD (head). Default: fresh. Set to 'head' to preserve unpushed commits in new worktrees. See https://code.claude.com/docs/en/settings#worktree-settings
     */
    baseRef?: 'fresh' | 'head';
    /**
     * Isolation mode for background sessions. "worktree" blocks Edit/Write in main checkout until EnterWorktree is called; "none" lets background jobs edit the working copy directly without EnterWorktree, for repos where worktrees are impractical. See https://code.claude.com/docs/en/settings#worktree-settings
     */
    bgIsolation?: 'worktree' | 'none';
    /**
     * Directories to symlink from the main repository into each worktree to avoid duplicating large directories on disk. No directories are symlinked by default. See https://code.claude.com/docs/en/settings#worktree-settings
     */
    symlinkDirectories?: string[];
  };
  /**
   * (Admin/managed settings only) Controls how SDK managedSettings (parent tier) merge with inherited settings. 'first-wins': first non-empty value applies (default). 'merge': merge arrays and objects. See https://code.claude.com/docs/en/server-managed-settings
   */
  parentSettingsBehavior?: 'first-wins' | 'merge';
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
   * (Managed settings only) When true, only allowedMcpServers from managed settings are respected; MCP servers defined in user, project, or local settings are ignored. deniedMcpServers still merges from all sources. See https://code.claude.com/docs/en/managed-mcp
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
    /**
     * Rules for the auto mode classifier hard-deny section. Hard-deny rules block unconditionally regardless of user intent. Replaces the built-in hard-deny rules entirely unless the literal string "$defaults" is included as an entry, which splices the built-in defaults in at that position. See https://code.claude.com/docs/en/permissions
     */
    hard_deny?: string[];
    /**
     * UNDOCUMENTED. Route all Bash/PowerShell commands through the auto mode classifier instead of only arbitrary-code-execution patterns (added in v2.1.193).
     */
    classifyAllShell?: boolean;
  };
  /**
   * (Managed settings only) Allow channels for the organization. On claude.ai Team and Enterprise plans, channels are blocked when this is unset or false. For Anthropic Console accounts using API key authentication, channels are allowed by default unless the organization deploys managed settings, in which case this key must be set to true. See https://code.claude.com/docs/en/channels#enterprise-controls
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
   * Legacy alias for voice.enabled; prefer the voice object. Requires a Claude.ai account. See https://code.claude.com/docs/en/settings#available-settings
   */
  voiceEnabled?: boolean;
  /**
   * (Windows managed settings only) When true, Claude Code on WSL reads managed settings from the Windows policy chain in addition to /etc/claude-code, with Windows sources taking priority. Only honored when set in the HKLM registry key or C:\Program Files\ClaudeCode\managed-settings.json, both of which require Windows admin to write. For HKCU policy to also apply on WSL, the flag must additionally be set in HKCU itself. Has no effect on native Windows. See https://code.claude.com/docs/en/settings#available-settings
   */
  wslInheritsWindowsSettings?: boolean;
  /**
   * Status line configuration for subagent sessions. See https://code.claude.com/docs/en/statusline#subagent-status-lines
   */
  subagentStatusLine?: {
    /**
     * Must be "command"
     */
    type: 'command';
    /**
     * Shell command to run for the subagent status line
     */
    command: string;
  };
  /**
   * Model for the server-side advisor tool. Accepts a model alias ("opus", "sonnet", or "fable" on v2.1.170+) or a full model ID. Overridden by the --advisor CLI flag for the session, and blocked when the model is outside the availableModels allowlist. See https://code.claude.com/docs/en/advisor
   */
  advisorModel?: string;
  /**
   * Automatically compact the conversation when context approaches the limit. Also configurable via the DISABLE_AUTO_COMPACT environment variable. See https://code.claude.com/docs/en/settings#available-settings
   */
  autoCompactEnabled?: boolean;
  /**
   * (Managed settings) Turn off background agents and the agent view: claude agents, --bg, /background, and the on-demand supervisor. Also configurable via the CLAUDE_CODE_DISABLE_AGENT_VIEW environment variable (set to 1 to disable). See https://code.claude.com/docs/en/agent-view
   */
  disableAgentView?: boolean;
  /**
   * Key binding mode for the input prompt: "normal" or "vim". Appears in /config as Editor mode. See https://code.claude.com/docs/en/terminal-config#edit-prompts-with-vim-keybindings
   */
  editorMode?: 'normal' | 'vim';
  /**
   * (Managed settings) Extend the availableModels allowlist to the Default model option (requires v2.1.175+). Requires a non-empty availableModels list; when the account-type default is not in the allowlist, Default resolves to the first allowed entry instead. Has no effect when availableModels is unset or empty. See https://code.claude.com/docs/en/model-config#enforce-the-allowlist-for-the-default-model
   */
  enforceAvailableModels?: boolean;
  /**
   * Fallback model chain tried in order when the primary model is overloaded, unavailable, or returns a non-retryable server error. Capped at three entries after deduplication; accepts model names or aliases, and "default" expands to the account-type default. Overridden by the --fallback-model CLI flag for the session. See https://code.claude.com/docs/en/model-config#fallback-model-chains
   *
   * @maxItems 3
   */
  fallbackModel?: [] | [string] | [string, string] | [string, string, string];
  /**
   * Snapshot edited files so /rewind can restore them. Also configurable via the CLAUDE_CODE_DISABLE_FILE_CHECKPOINTING environment variable (set to 1 to disable). See https://code.claude.com/docs/en/checkpointing
   */
  fileCheckpointingEnabled?: boolean;
  /**
   * Command to run when GCP credentials are expired or cannot be loaded. The command's output is displayed to the user but interactive input is not supported; it times out after three minutes. See https://code.claude.com/docs/en/google-vertex-ai#advanced-credential-configuration
   */
  gcpAuthRefresh?: string;
  /**
   * (Managed settings, third-party Desktop deployments only) MCP server configurations pushed to all users. Each entry specifies the transport and connection details, plus an optional toolPolicy map. Delivered through the managed settings file or MDM. See https://code.claude.com/docs/en/desktop#enterprise-configuration
   */
  managedMcpServers?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Per-skill character cap on the combined description and when_to_use text in the skill listing Claude sees each turn. Text longer than this is truncated. See https://code.claude.com/docs/en/skills#skill-descriptions-are-cut-short
   */
  maxSkillDescriptionChars?: number;
  /**
   * Method for task-complete and permission-prompt notifications. "auto" (default) sends a desktop notification in iTerm2, Ghostty, and Kitty and does nothing in other terminals; "terminal_bell" rings the bell in any terminal; "notifications_disabled" turns them off. See https://code.claude.com/docs/en/terminal-config#get-a-terminal-bell-or-notification
   */
  preferredNotifChannel?:
    | 'auto'
    | 'terminal_bell'
    | 'iterm2'
    | 'iterm2_with_bell'
    | 'kitty'
    | 'ghostty'
    | 'notifications_disabled';
  /**
   * (Managed settings only) Allowlist of marketplace names whose plugins may surface as contextual "suggested for this directory" tips in the /plugin Discover tab. No marketplace-declared suggestions surface without this allowlist. The built-in first-party frontend-design tip is unaffected. See https://code.claude.com/docs/en/settings#available-settings
   */
  pluginSuggestionMarketplaces?: string[];
  /**
   * (Managed settings only) Maximum Claude Code version allowed to start. If the running version is newer, Claude Code exits at startup with instructions to install an approved version. See https://code.claude.com/docs/en/admin-setup#decide-what-to-enforce
   */
  requiredMaximumVersion?: string;
  /**
   * (Managed settings only) Minimum Claude Code version required to start. If the running version is older, Claude Code exits at startup rather than only warning. See https://code.claude.com/docs/en/admin-setup#decide-what-to-enforce
   */
  requiredMinimumVersion?: string;
  /**
   * Whether Claude responds after an input-box ! shell command runs (v2.1.186+). Set to false to add the command output to context without a response. See https://code.claude.com/docs/en/interactive-mode#shell-mode-with--prefix
   */
  respondToBashCommands?: boolean;
  /**
   * Fraction of the model context window reserved for the skill listing sent to Claude (default 0.01 = 1%). When the listing exceeds this, descriptions are shortened to fit. Also configurable via the SLASH_COMMAND_TOOL_CHAR_BUDGET environment variable (fixed character count). See https://code.claude.com/docs/en/skills#skill-descriptions-are-cut-short
   */
  skillListingBudgetFraction?: number;
  /**
   * (Managed settings) Pre-configured SSH connections distributed to Desktop users. See https://code.claude.com/docs/en/desktop#ssh-sessions
   */
  sshConfigs?: {
    /**
     * Unique identifier for this SSH config, used to match configs across settings sources
     */
    id: string;
    /**
     * Display name for the SSH connection
     */
    name: string;
    /**
     * SSH host in the form "user@hostname" or "hostname", or a host alias from ~/.ssh/config
     */
    sshHost: string;
    /**
     * SSH port (default 22)
     */
    sshPort?: number;
    /**
     * Path to the SSH identity file (private key)
     */
    sshIdentityFile?: string;
    /**
     * Default working directory on the remote host; supports tilde expansion. Defaults to the remote user home directory
     */
    startDirectory?: string;
  }[];
  /**
   * (Managed settings only) Allowlist restricting Desktop SSH sessions to approved hosts. Patterns are case-insensitive; * matches any host and *.example.com matches example.com and any subdomain. See https://code.claude.com/docs/en/desktop#ssh-sessions
   */
  sshHostAllowlist?: string[];
  /**
   * Color theme for the interface: auto, dark, light, the daltonized variants (deuteranopia-friendly), the ansi variants (16-color terminals), or a custom theme reference such as custom:<slug> or custom:<plugin-name>:<slug>. See https://code.claude.com/docs/en/terminal-config#match-the-color-theme
   */
  theme?: ('auto' | 'dark' | 'light' | 'dark-daltonized' | 'light-daltonized' | 'dark-ansi' | 'light-ansi') | string;
  /**
   * Voice dictation settings: enabled turns dictation on, mode selects "hold" or "tap", and autoSubmit sends the prompt on key release in hold mode. Written automatically when you run /voice. Requires a Claude.ai account. See https://code.claude.com/docs/en/voice-dictation
   */
  voice?: {
    /**
     * Enable push-to-talk voice dictation input
     */
    enabled?: boolean;
    /**
     * Recording mode: "hold" (default) is push-to-talk; "tap" taps once to start and again to stop and submit
     */
    mode?: 'hold' | 'tap';
    /**
     * In hold mode, auto-submit the prompt on key release when the transcript is at least three words long
     */
    autoSubmit?: boolean;
  };
  /**
   * In fullscreen rendering, accelerate mouse-wheel scroll speed during fast scrolls (v2.1.174+). Set to false for a constant scroll rate per wheel notch. See https://code.claude.com/docs/en/fullscreen#mouse-wheel-scrolling
   */
  wheelScrollAccelerationEnabled?: boolean;
  /**
   * Disable the skills and workflows that ship with Claude Code: bundled skills and workflows are removed entirely, while built-in slash commands like /init stay typable but are hidden from the model. Skills from plugins, .claude/skills/, and .claude/commands/ are unaffected. Also configurable via the CLAUDE_CODE_DISABLE_BUNDLED_SKILLS environment variable. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableBundledSkills?: boolean;
  /**
   * Show a one-line session recap when you return to the terminal after a few minutes away. Set to false (or turn off Session recap in /config) to disable. See https://code.claude.com/docs/en/settings#available-settings
   */
  awaySummaryEnabled?: boolean;
  /**
   * In fullscreen rendering, follow new output to the bottom of the conversation. Appears in /config as Auto-scroll. Permission prompts still scroll into view when this is off. See https://code.claude.com/docs/en/fullscreen
   */
  autoScrollEnabled?: boolean;
  /**
   * (Managed settings only) Load claude.ai connectors alongside a deployed managed-mcp.json, which otherwise takes exclusive control and suppresses them. See https://code.claude.com/docs/en/managed-mcp
   */
  allowAllClaudeAiMcps?: boolean;
  /**
   * When Remote Control is connected, allow Claude to send proactive push notifications to your phone, for example when a long task finishes. Requires Claude Code v2.1.119 or later. See https://code.claude.com/docs/en/remote-control#mobile-push-notifications
   */
  agentPushNotifEnabled?: boolean;
  /**
   * Render screen-reader-friendly output: flat text without decorative borders or animations screen-reader mode always uses the classic renderer, so the tui setting has no effect while it is active. The CLAUDE_AX_SCREEN_READER environment variable and --ax-screen-reader flag take precedence. Requires Claude Code v2.1.181 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  axScreenReader?: boolean;
  /**
   * (Managed settings only) CLAUDE.md-style instructions injected as organization-managed memory. Honored only from managed/policy settings. See https://code.claude.com/docs/en/settings#available-settings
   */
  claudeMd?: string;
  /**
   * Disable the Artifact tool, which publishes session output as a private web page on claude.ai. Also configurable via the CLAUDE_CODE_DISABLE_ARTIFACT environment variable. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableArtifact?: boolean;
  /**
   * Set to "disable" to prevent auto mode from being activated: removes auto from the Shift+Tab cycle and rejects --permission-mode auto at startup. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableAutoMode?: 'disable';
  /**
   * Disable claude.ai MCP connectors so they are not auto-fetched or connected. A value of true in any settings source takes precedence. Requires Claude Code v2.1.182 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableClaudeAiConnectors?: boolean;
  /**
   * Disable Remote Control: blocks claude remote-control, the --remote-control flag, auto-start, and the in-session toggle. Requires Claude Code v2.1.128 or later. See https://code.claude.com/docs/en/remote-control
   */
  disableRemoteControl?: boolean;
  /**
   * Disable dynamic workflows and bundled workflow commands. Also configurable via the CLAUDE_CODE_DISABLE_WORKFLOWS environment variable. See https://code.claude.com/docs/en/settings#available-settings
   */
  disableWorkflows?: boolean;
  /**
   * Render extra clickable badges in the footer when a regex matches turn output (tool results and assistant responses). Read from user, --settings flag, and managed settings only; ignored in project and local settings. Requires Claude Code v2.1.176 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  footerLinksRegexes?: {
    /**
     * Config variant; "regex" matches turn output and builds a URL from named capture groups
     */
    type?: 'regex';
    /**
     * Regex matched against turn output
     */
    pattern: string;
    /**
     * Link target; {name} placeholders are filled from named regex capture groups
     */
    url: string;
    /**
     * Badge text; {name} placeholders filled from named capture groups, defaults to the full match
     */
    label?: string;
  }[];
  /**
   * When Remote Control is connected, send a push notification to your phone when a permission prompt or question is waiting for input. Requires Claude Code v2.1.119 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  inputNeededNotifEnabled?: boolean;
  /**
   * Admin-deployed executable that computes managed settings dynamically at startup. Honored only from MDM or the system managed-settings.json. Requires Claude Code v2.1.136 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  policyHelper?: {
    /**
     * Absolute path to the policy helper executable
     */
    path: string;
    /**
     * How long in milliseconds to wait for the helper before treating the run as failed
     */
    timeoutMs?: number;
    /**
     * How often in milliseconds to re-run the helper in the background; set to 0 to disable refresh, or to at least 60000
     */
    refreshIntervalMs?: 0 | number;
  };
  /**
   * Connect Remote Control automatically when each interactive session starts. true = always, false = never, unset = organization default. Requires Claude Code v2.1.119 or later. See https://code.claude.com/docs/en/remote-control#enable-remote-control-for-all-sessions
   */
  remoteControlAtStartup?: boolean;
  /**
   * Disable syntax highlighting in diffs, code blocks, and file previews. See https://code.claude.com/docs/en/settings#available-settings
   */
  syntaxHighlightingDisabled?: boolean;
  /**
   * Show full tool output instead of truncated summaries. The --verbose flag overrides this for a single session. Requires Claude Code v2.1.119 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  verbose?: boolean;
  /**
   * Whether including the keyword "ultracode" in a prompt triggers a dynamic workflow. Requires Claude Code v2.1.157 or later. See https://code.claude.com/docs/en/settings#available-settings
   */
  workflowKeywordTriggerEnabled?: boolean;
  /**
   * Whether the Left arrow key at the start of an empty prompt opens the agents view. Turn it off in /config (the leftArrowOpensAgents setting). See https://code.claude.com/docs/en/agent-view
   */
  leftArrowOpensAgents?: boolean;
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
