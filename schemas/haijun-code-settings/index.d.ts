/* eslint-disable */

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
       * Run this hook asynchronously without blocking Haijun Code
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
       * Optional permission-rule-syntax filter (e.g., "Bash(git *)"). Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.haijun.my.id/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
      /**
       * Argument list for exec form. When present, spawns the command directly without shell interpretation — each element is passed as-is, so path placeholders never need quoting. See https://code.haijun.my.id/docs/en/hooks#command-hook-fields
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.haijun.my.id/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
      /**
       * When the prompt returns ok: false, feed the reason back to Haijun and continue the turn instead of stopping. Implemented as continue: true on the resulting decision: "block". See https://code.haijun.my.id/docs/en/hooks#prompt-hook-configuration
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.haijun.my.id/docs/en/hooks-guide#filter-hooks-with-matchers
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.haijun.my.id/docs/en/hooks-guide#filter-hooks-with-matchers
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
       * Optional permission-rule-syntax filter. Evaluated only on tool-related events (PreToolUse, PostToolUse, PostToolUseFailure, PermissionRequest, PermissionDenied); on other events a hook with `if` set never runs. See https://code.haijun.my.id/docs/en/hooks-guide#filter-hooks-with-matchers
       */
      if?: string;
      /**
       * Custom spinner message displayed while the hook runs
       */
      statusMessage?: string;
    };
/**
 * Tool permission rule.
 * See https://code.haijun.my.id/docs/en/settings#permission-rule-syntax
 * See https://code.haijun.my.id/docs/en/tools-reference for full list of tools available to Haijun.
 */
export type PermissionRule = string;

/**
 * Configuration settings for Haijun Code. Learn more: https://code.haijun.my.id/docs/en/settings
 */
export interface HttpsJsonSchemastoreOrgHaijunCodeSettingsJson {
  /**
   * JSON Schema reference for Haijun Code settings
   */
  $schema?: string;
  /**
   * Path to a script that outputs authentication values. See https://code.haijun.my.id/docs/en/settings#available-settings
   */
  apiKeyHelper?: string;
  /**
   * Enable automatic memory saves that capture useful context to ~/.haijun/projects/<project>/memory/ (derived from the git repository, shared across worktrees). Also configurable via HAIJUN_CODE_DISABLE_AUTO_MEMORY environment variable (set to 1 to disable, 0 to enable). See https://code.haijun.my.id/docs/en/memory#storage-location
   */
  autoMemoryEnabled?: boolean;
  /**
   * Release channel to follow for updates. Use "stable" for a version that is typically about one week old and skips versions with major regressions, or "latest" (default) for the most recent release. Set DISABLE_AUTOUPDATER=1 to disable background auto-updates, or DISABLE_UPDATES=1 to block all update paths including manual `haijun update`.
   */
  autoUpdatesChannel?: 'stable' | 'latest';
  /**
   * Glob patterns for HAIJUN.md files to exclude from loading. Useful in monorepos to skip irrelevant instructions from other teams. Patterns match against absolute file paths. Arrays merge across settings layers. Managed policy HAIJUN.md files cannot be excluded. See https://code.haijun.my.id/docs/en/memory#exclude-specific-haijun-md-files
   */
  haijunMdExcludes?: string[];
  /**
   * Number of days to retain sessions, orphaned subagent worktrees, tasks, shell snapshots, and backups. Minimum is 1; setting 0 is rejected with a validation error. See https://code.haijun.my.id/docs/en/settings#available-settings
   */
  cleanupPeriodDays?: number;
  /**
   * Environment variables to set for Haijun Code sessions. Many environment variables provide settings dimensions not available as dedicated settings.json properties (e.g., thinking tokens, prompt caching, bash timeouts, shell configuration). See https://code.haijun.my.id/docs/en/settings#environment-variables for the full list.
   */
  env?: {
    /**
     * API key for JuGloW API authentication
     */
    JUGLOW_API_KEY?: string;
    /**
     * Custom Authorization header bearer token for API requests
     */
    JUGLOW_AUTH_TOKEN?: string;
    /**
     * Override API endpoint URL for proxy or gateway routing
     */
    JUGLOW_BASE_URL?: string;
    /**
     * Model to use (e.g., 'haijun-opus-4-1', 'haijun-sonnet-4-5-20250514', 'opus', 'sonnet', 'haiku')
     */
    JUGLOW_MODEL?: string;
    /**
     * Haiku-class model to use for background and low-complexity tasks
     */
    JUGLOW_SMALL_FAST_MODEL?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Event-driven hooks that run at specific points during Haijun Code's execution. See https://code.haijun.my.id/docs/en/hooks
   */
  hooks?: {
    PreToolUse?: HookMatcher[];
    PostToolUse?: HookMatcher[];
    Notification?: HookMatcher[];
    UserPromptSubmit?: HookMatcher[];
    SessionStart?: HookMatcher[];
    SessionEnd?: HookMatcher[];
    Stop?: HookMatcher[];
    SubagentStart?: HookMatcher[];
    SubagentStop?: HookMatcher[];
    PreCompact?: HookMatcher[];
    PostCompact?: HookMatcher[];
    PermissionRequest?: HookMatcher[];
    PermissionDenied?: HookMatcher[];
  };
  /**
   * Tool permission configuration. See https://code.haijun.my.id/docs/en/settings#permissions
   */
  permissions?: {
    /**
     * Tools that are automatically allowed without prompting
     */
    allow?: PermissionRule[];
    /**
     * Tools that are always blocked
     */
    deny?: PermissionRule[];
  };
  [k: string]: unknown | undefined;
}
/**
 * Hook matcher configuration with multiple hooks
 */
export interface HookMatcher {
  /**
   * Optional pattern to match event contexts, case-sensitive. Behavior depends on event type. See https://code.haijun.my.id/docs/en/hooks#matcher-patterns for event-specific details and examples
   */
  matcher?: string;
  /**
   * Array of hooks to execute
   */
  hooks: HookCommand[];
}
