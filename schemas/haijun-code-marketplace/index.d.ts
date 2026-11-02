/* eslint-disable */

export interface HttpsJsonSchemastoreOrgHaijunCodeMarketplaceJson {
  /**
   * JSON Schema reference for editor autocomplete/validation; ignored at load time
   */
  $schema?: string;
  name: string;
  /**
   * Marketplace manifest version
   */
  version: string;
  /**
   * Human-readable description of this marketplace
   */
  description?: string;
  /**
   * Marketplace maintainer or curator information
   */
  owner?: {
    /**
     * Display name of the plugin author or organization
     */
    name: string;
    /**
     * Contact email for support or feedback
     */
    email?: string;
    /**
     * Website, GitHub profile, or organization URL
     */
    url?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Collection of available plugins in this marketplace
   */
  plugins?: {
    /**
     * JSON Schema reference for editor autocomplete/validation; ignored at load time
     */
    $schema?: string;
    /**
     * Unique identifier matching the plugin name
     */
    name: string;
    /**
     * Semantic version (e.g., 1.2.3) following semver.org specification
     */
    version: string;
    /**
     * Brief, user-facing explanation of what the plugin provides
     */
    description: string;
    /**
     * Information about the plugin creator or maintainer
     */
    author?: {
      /**
       * Display name of the plugin author or organization
       */
      name: string;
      /**
       * Contact email for support or feedback
       */
      email?: string;
      /**
       * Website, GitHub profile, or organization URL
       */
      url?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Plugin homepage or documentation URL
     */
    homepage?: string;
    /**
     * Source code repository URL
     */
    repository?: string;
    /**
     * SPDX license identifier (e.g., MIT, Apache-2.0)
     */
    license?: string;
    /**
     * Tags for plugin discovery and categorization
     */
    keywords?: string[];
    /**
     * Plugins that must be enabled for this plugin to function. Bare names (no "@marketplace") are resolved against the declaring plugin's own marketplace.
     */
    dependencies?: (
      | string
      | {
          name: string;
          marketplace?: string;
          [k: string]: unknown | undefined;
        }
    )[];
    hooks?:
      | string
      | {
          [k: string]:
            | {
                /**
                 * String pattern to match (e.g. tool names like "Write")
                 */
                matcher?: string;
                /**
                 * List of hooks to execute when the matcher matches
                 */
                hooks: (
                  | {
                      /**
                       * Shell command hook type
                       */
                      type: 'command';
                      /**
                       * Shell command to execute
                       */
                      command: string;
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern.
                       */
                      if?: string;
                      /**
                       * Shell interpreter. 'bash' uses your $SHELL (bash/zsh/sh); 'powershell' uses pwsh. Defaults to bash.
                       */
                      shell?: 'bash' | 'powershell';
                      /**
                       * Timeout in seconds for this specific command
                       */
                      timeout?: number;
                      /**
                       * Custom status message to display in spinner while hook runs
                       */
                      statusMessage?: string;
                      /**
                       * If true, hook runs once and is removed after execution
                       */
                      once?: boolean;
                      /**
                       * If true, hook runs in background without blocking
                       */
                      async?: boolean;
                      /**
                       * If true, hook runs in background and wakes the model on exit code 2 (blocking error). Implies async.
                       */
                      asyncRewake?: boolean;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      /**
                       * LLM prompt hook type
                       */
                      type: 'prompt';
                      /**
                       * Prompt to evaluate with LLM. Use $ARGUMENTS placeholder for hook input JSON.
                       */
                      prompt: string;
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for this specific prompt evaluation
                       */
                      timeout?: number;
                      /**
                       * Model to use for this prompt hook (e.g., "haijun-sonnet-4-6"). If not specified, uses the default small fast model.
                       */
                      model?: string;
                      /**
                       * Custom status message to display in spinner while hook runs
                       */
                      statusMessage?: string;
                      /**
                       * If true, hook runs once and is removed after execution
                       */
                      once?: boolean;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      /**
                       * Agentic verifier hook type
                       */
                      type: 'agent';
                      /**
                       * Prompt describing what to verify (e.g. "Verify that unit tests ran and passed."). Use $ARGUMENTS placeholder for hook input JSON.
                       */
                      prompt: string;
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for agent execution (default 60)
                       */
                      timeout?: number;
                      /**
                       * Model to use for this agent hook (e.g., "haijun-sonnet-4-6"). If not specified, uses Haiku.
                       */
                      model?: string;
                      /**
                       * Custom status message to display in spinner while hook runs
                       */
                      statusMessage?: string;
                      /**
                       * If true, hook runs once and is removed after execution
                       */
                      once?: boolean;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      /**
                       * HTTP hook type
                       */
                      type: 'http';
                      /**
                       * URL to POST the hook input JSON to
                       */
                      url: string;
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for this specific request
                       */
                      timeout?: number;
                      /**
                       * Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax.
                       */
                      headers?: {
                        [k: string]: string | undefined;
                      };
                      /**
                       * Explicit list of environment variable names that may be interpolated in header values.
                       */
                      allowedEnvVars?: string[];
                      /**
                       * Custom status message to display in spinner while hook runs
                       */
                      statusMessage?: string;
                      /**
                       * If true, hook runs once and is removed after execution
                       */
                      once?: boolean;
                      [k: string]: unknown | undefined;
                    }
                  | {
                      /**
                       * MCP tool hook type
                       */
                      type: 'mcp_tool';
                      /**
                       * Name of an already-configured MCP server to invoke
                       */
                      server: string;
                      /**
                       * Name of the tool on that server to call
                       */
                      tool: string;
                      /**
                       * Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON.
                       */
                      input?: {
                        [k: string]: unknown | undefined;
                      };
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for this specific tool call
                       */
                      timeout?: number;
                      /**
                       * Custom status message to display in spinner while hook runs
                       */
                      statusMessage?: string;
                      /**
                       * If true, hook runs once and is removed after execution
                       */
                      once?: boolean;
                      [k: string]: unknown | undefined;
                    }
                )[];
                [k: string]: unknown | undefined;
              }[]
            | undefined;
        };
    commands?:
      | string
      | string[]
      | {
          [k: string]:
            | {
                /**
                 * Path to command markdown file, relative to plugin root
                 */
                source?: string;
                /**
                 * Inline markdown content for the command
                 */
                content?: string;
                /**
                 * Command description override
                 */
                description?: string;
                /**
                 * Hint for command arguments (e.g., "[file]")
                 */
                argumentHint?: string;
                /**
                 * Default model for this command
                 */
                model?: string;
                /**
                 * Tools allowed when command runs
                 */
                allowedTools?: string[];
                [k: string]: unknown | undefined;
              }
            | undefined;
        };
    agents?: string | string[];
    tracks?: string | string[];
    outputStyles?: string | string[];
    themes?: string | string[];
    /**
     * Channels this plugin provides. Each entry declares an MCP server as a message channel and optionally specifies user configuration to prompt for at enable time.
     */
    channels?: {
      /**
       * Name of the MCP server this channel binds to. Must match a key in this plugin's mcpServers.
       */
      server: string;
      /**
       * Human-readable name shown in the config dialog title (e.g., "Telegram"). Defaults to the server name.
       */
      displayName?: string;
      /**
       * Fields to prompt the user for when enabling this plugin in assistant mode. Saved values are substituted into ${user_config.KEY} references in the mcpServers env.
       */
      userConfig?: {
        [k: string]:
          | {
              /**
               * Type of the configuration value
               */
              type: 'string' | 'number' | 'boolean' | 'directory' | 'file';
              /**
               * Human-readable label shown in the config dialog
               */
              title: string;
              /**
               * Help text shown beneath the field in the config dialog
               */
              description: string;
              /**
               * If true, validation fails when this field is empty
               */
              required?: boolean;
              /**
               * Default value used when the user provides nothing
               */
              default?: string | number | boolean | string[];
              /**
               * For string type: allow an array of strings
               */
              multiple?: boolean;
              /**
               * If true, masks dialog input and stores value in secure storage (keychain/credentials file) instead of settings.json
               */
              sensitive?: boolean;
              /**
               * Minimum value (number type only)
               */
              min?: number;
              /**
               * Maximum value (number type only)
               */
              max?: number;
            }
          | undefined;
      };
    }[];
    mcpServers?:
      | string
      | {
          [k: string]:
            | {
                /**
                 * Command to start the MCP server
                 */
                command: string;
                /**
                 * Arguments for the MCP server command
                 */
                args?: string[];
                /**
                 * Environment variables for the MCP server
                 */
                env?: {
                  [k: string]: string | undefined;
                };
                [k: string]: unknown | undefined;
              }
            | undefined;
        };
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
