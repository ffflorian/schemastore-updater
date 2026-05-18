/* eslint-disable */

/**
 * Matcher groups for one Codex hook event.
 *
 * @minItems 1
 */
export type MatcherGroups = [MatcherGroup, ...MatcherGroup[]];
export type HookHandler = CommandHandler | SkippedHandler;
/**
 * Matcher groups for one Codex hook event.
 *
 * @minItems 1
 */
export type MatcherGroups6 = [MatcherGroup, ...MatcherGroup[]] | undefined;

/**
 * Configuration for OpenAI Codex lifecycle hooks.
 * https://developers.openai.com/codex/hooks
 */
export interface CodexHooksConfiguration {
  /**
   * JSON Schema reference for Codex hooks configuration.
   */
  $schema?: string;
  /**
   * Human-readable description of the hooks file.
   */
  description?: string;
  /**
   * Hook event registrations grouped by Codex lifecycle event.
   */
  hooks: {
    SessionStart?: MatcherGroups;
    PreToolUse?: MatcherGroups;
    PermissionRequest?: MatcherGroups;
    PostToolUse?: MatcherGroups;
    UserPromptSubmit?: MatcherGroups;
    Stop?: MatcherGroups;
    [k: string]: MatcherGroups6 | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Matcher group that decides when one or more hook handlers run.
 */
export interface MatcherGroup {
  /**
   * Regex string that filters when hooks fire. Use *, an empty string, or omit matcher to match every supported occurrence.
   */
  matcher?: string;
  /**
   * Handlers to run when this matcher group matches.
   *
   * @minItems 1
   */
  hooks: [HookHandler, ...HookHandler[]];
  [k: string]: unknown | undefined;
}
/**
 * Command hook handler. Commands run with the session cwd as their working directory.
 */
export interface CommandHandler {
  /**
   * Command handlers are the only hook handler type that runs in the current Codex runtime.
   */
  type: 'command';
  /**
   * Command to execute.
   */
  command: string;
  /**
   * Timeout in seconds. Codex uses 600 seconds when omitted.
   */
  timeout?: number;
  /**
   * Optional status text shown while the hook runs.
   */
  statusMessage?: string;
  /**
   * Parsed by Codex, but async command hooks are not supported yet and async handlers are skipped.
   */
  async?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Prompt and agent handlers are parsed by Codex but skipped in the current runtime.
 */
export interface SkippedHandler {
  type: 'prompt' | 'agent';
  [k: string]: unknown | undefined;
}
