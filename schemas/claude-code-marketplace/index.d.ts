/* eslint-disable */

/**
 * Marketplace manifest (.claude-plugin/marketplace.json) listing Claude Code plugins. Learn more: https://code.claude.com/docs/en/plugin-marketplaces
 */
export interface ClaudeCodePluginMarketplace {
  /**
   * JSON Schema reference for editor autocomplete/validation; ignored at load time
   */
  $schema?: string;
  name: string;
  /**
   * Marketplace manifest version
   */
  version?: string;
  /**
   * Human-readable description of this marketplace
   */
  description?: string;
  /**
   * Marketplace maintainer or curator information
   */
  owner: {
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
  plugins: {
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
    version?: string;
    /**
     * Brief, user-facing explanation of what the plugin provides
     */
    description?: string;
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
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
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
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for this specific prompt evaluation
                       */
                      timeout?: number;
                      /**
                       * Model to use for this prompt hook (e.g., "claude-sonnet-4-6"). If not specified, uses the default small fast model.
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
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for agent execution (default 60)
                       */
                      timeout?: number;
                      /**
                       * Model to use for this agent hook (e.g., "claude-sonnet-4-6"). If not specified, uses Haiku.
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
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                       */
                      if?: string;
                      /**
                       * Timeout in seconds for this specific request
                       */
                      timeout?: number;
                      /**
                       * Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.
                       */
                      headers?: {
                        [k: string]: string | undefined;
                      };
                      /**
                       * Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work.
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
                       * Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON (e.g. "${tool_input.file_path}").
                       */
                      input?: {
                        [k: string]: unknown | undefined;
                      };
                      /**
                       * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
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
        }
      | (
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
                           * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
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
                           * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                           */
                          if?: string;
                          /**
                           * Timeout in seconds for this specific prompt evaluation
                           */
                          timeout?: number;
                          /**
                           * Model to use for this prompt hook (e.g., "claude-sonnet-4-6"). If not specified, uses the default small fast model.
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
                           * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                           */
                          if?: string;
                          /**
                           * Timeout in seconds for agent execution (default 60)
                           */
                          timeout?: number;
                          /**
                           * Model to use for this agent hook (e.g., "claude-sonnet-4-6"). If not specified, uses Haiku.
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
                           * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
                           */
                          if?: string;
                          /**
                           * Timeout in seconds for this specific request
                           */
                          timeout?: number;
                          /**
                           * Additional headers to include in the request. Values may reference environment variables using $VAR_NAME or ${VAR_NAME} syntax (e.g., "Authorization": "Bearer $MY_TOKEN"). Only variables listed in allowedEnvVars will be interpolated.
                           */
                          headers?: {
                            [k: string]: string | undefined;
                          };
                          /**
                           * Explicit list of environment variable names that may be interpolated in header values. Only variables listed here will be resolved; all other $VAR references are left as empty strings. Required for env var interpolation to work.
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
                           * Arguments passed to the MCP tool. String values support ${path} interpolation from the hook input JSON (e.g. "${tool_input.file_path}").
                           */
                          input?: {
                            [k: string]: unknown | undefined;
                          };
                          /**
                           * Permission rule syntax to filter when this hook runs (e.g., "Bash(git *)"). Only runs if the tool call matches the pattern. Avoids spawning hooks for non-matching commands.
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
            }
        )[];
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
    skills?: string | string[];
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
            | (
                | {
                    type?: 'stdio';
                    command: string;
                    args?: string[];
                    env?: {
                      [k: string]: string | undefined;
                    };
                    [k: string]: unknown | undefined;
                  }
                | {
                    type: 'sse';
                    url: string;
                    headers?: {
                      [k: string]: string | undefined;
                    };
                    headersHelper?: string;
                    oauth?: {
                      clientId?: string;
                      callbackPort?: number;
                      authServerMetadataUrl?: string;
                      scopes?: string;
                      xaa?: boolean;
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  }
                | {
                    type: 'http';
                    url: string;
                    headers?: {
                      [k: string]: string | undefined;
                    };
                    headersHelper?: string;
                    oauth?: {
                      clientId?: string;
                      callbackPort?: number;
                      authServerMetadataUrl?: string;
                      scopes?: string;
                      xaa?: boolean;
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  }
                | {
                    type: 'ws';
                    url: string;
                    headers?: {
                      [k: string]: string | undefined;
                    };
                    headersHelper?: string;
                    [k: string]: unknown | undefined;
                  }
              )
            | undefined;
        }
      | (
          | string
          | {
              [k: string]:
                | (
                    | {
                        type?: 'stdio';
                        command: string;
                        args?: string[];
                        env?: {
                          [k: string]: string | undefined;
                        };
                        [k: string]: unknown | undefined;
                      }
                    | {
                        type: 'sse';
                        url: string;
                        headers?: {
                          [k: string]: string | undefined;
                        };
                        headersHelper?: string;
                        oauth?: {
                          clientId?: string;
                          callbackPort?: number;
                          authServerMetadataUrl?: string;
                          scopes?: string;
                          xaa?: boolean;
                          [k: string]: unknown | undefined;
                        };
                        [k: string]: unknown | undefined;
                      }
                    | {
                        type: 'http';
                        url: string;
                        headers?: {
                          [k: string]: string | undefined;
                        };
                        headersHelper?: string;
                        oauth?: {
                          clientId?: string;
                          callbackPort?: number;
                          authServerMetadataUrl?: string;
                          scopes?: string;
                          xaa?: boolean;
                          [k: string]: unknown | undefined;
                        };
                        [k: string]: unknown | undefined;
                      }
                    | {
                        type: 'ws';
                        url: string;
                        headers?: {
                          [k: string]: string | undefined;
                        };
                        headersHelper?: string;
                        [k: string]: unknown | undefined;
                      }
                  )
                | undefined;
            }
        )[];
    lspServers?:
      | string
      | {
          [k: string]:
            | {
                /**
                 * Command to execute the LSP server (e.g., "typescript-language-server")
                 */
                command: string;
                /**
                 * Command-line arguments to pass to the server
                 */
                args?: string[];
                /**
                 * Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping.
                 */
                extensionToLanguage: {
                  [k: string]: string | undefined;
                };
                /**
                 * Communication transport mechanism
                 */
                transport?: 'stdio' | 'socket';
                /**
                 * Environment variables to set when starting the server
                 */
                env?: {
                  [k: string]: string | undefined;
                };
                /**
                 * Initialization options passed to the server during initialization
                 */
                initializationOptions?: {
                  [k: string]: unknown | undefined;
                };
                /**
                 * Settings passed to the server via workspace/didChangeConfiguration
                 */
                settings?: {
                  [k: string]: unknown | undefined;
                };
                /**
                 * Workspace folder path to use for the server
                 */
                workspaceFolder?: string;
                /**
                 * Maximum time to wait for server startup (milliseconds)
                 */
                startupTimeout?: number;
                /**
                 * Maximum time to wait for graceful shutdown (milliseconds)
                 */
                shutdownTimeout?: number;
                /**
                 * Whether to restart the server if it crashes
                 */
                restartOnCrash?: boolean;
                /**
                 * Maximum number of restart attempts before giving up
                 */
                maxRestarts?: number;
              }
            | undefined;
        }
      | (
          | string
          | {
              [k: string]:
                | {
                    /**
                     * Command to execute the LSP server (e.g., "typescript-language-server")
                     */
                    command: string;
                    /**
                     * Command-line arguments to pass to the server
                     */
                    args?: string[];
                    /**
                     * Mapping from file extension to LSP language ID. File extensions and languages are derived from this mapping.
                     */
                    extensionToLanguage: {
                      [k: string]: string | undefined;
                    };
                    /**
                     * Communication transport mechanism
                     */
                    transport?: 'stdio' | 'socket';
                    /**
                     * Environment variables to set when starting the server
                     */
                    env?: {
                      [k: string]: string | undefined;
                    };
                    /**
                     * Initialization options passed to the server during initialization
                     */
                    initializationOptions?: {
                      [k: string]: unknown | undefined;
                    };
                    /**
                     * Settings passed to the server via workspace/didChangeConfiguration
                     */
                    settings?: {
                      [k: string]: unknown | undefined;
                    };
                    /**
                     * Workspace folder path to use for the server
                     */
                    workspaceFolder?: string;
                    /**
                     * Maximum time to wait for server startup (milliseconds)
                     */
                    startupTimeout?: number;
                    /**
                     * Maximum time to wait for graceful shutdown (milliseconds)
                     */
                    shutdownTimeout?: number;
                    /**
                     * Whether to restart the server if it crashes
                     */
                    restartOnCrash?: boolean;
                    /**
                     * Maximum number of restart attempts before giving up
                     */
                    maxRestarts?: number;
                  }
                | undefined;
            }
        )[];
    /**
     * Background watch scripts the host arms as persistent Monitor tasks (unsandboxed, same trust tier as hooks) so plugins need not instruct the model to arm them. When omitted, monitors/monitors.json at the plugin root is loaded if present.
     */
    monitors?:
      | string
      | {
          /**
           * Identifier for this monitor, unique within the plugin. Used to dedupe so re-arming (plugin reload, repeat skill invoke) does not spawn duplicates.
           */
          name: string;
          /**
           * Shell command to run as a persistent background monitor. Each stdout line is delivered to the model as a <task_notification> event; the process runs for the session lifetime. ${CLAUDE_PLUGIN_ROOT}, ${CLAUDE_PLUGIN_DATA}, ${user_config.*}, and ${ENV_VAR} are substituted. Runs in the session cwd — prefix with `cd "${CLAUDE_PLUGIN_ROOT}" && ` if the script needs its own directory.
           */
          command: string;
          /**
           * Short human-readable description of what is being monitored (shown in task panel and notification summary).
           */
          description: string;
          /**
           * Arm trigger. "always" arms at session start and on plugin reload. "on-skill-invoke:<skill>" arms the first time that skill is dispatched (via Skill tool or slash command).
           */
          when?: 'always' | string;
        }[];
    /**
     * Settings to merge into the user settings while this plugin is enabled. Only the documented allowlisted keys are applied.
     */
    settings?: {
      [k: string]: unknown | undefined;
    };
    /**
     * User-configurable values this plugin needs. Prompted at enable time. Non-sensitive values saved to settings.json; sensitive values to secure storage. Available as ${user_config.KEY} in MCP/LSP server config, hook commands, and (non-sensitive only) skill/agent content. Keep sensitive value counts small.
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
    /**
     * Where to fetch the plugin from
     */
    source:
      | string
      | {
          source: 'npm';
          /**
           * Package name (or url, or local path, or anything else that can be passed to `npm` as a package)
           */
          package: string;
          /**
           * Specific version or version range (e.g., ^1.0.0, ~2.1.0)
           */
          version?: string;
          /**
           * Custom NPM registry URL (defaults to using system default, likely npmjs.org)
           */
          registry?: string;
          [k: string]: unknown | undefined;
        }
      | {
          source: 'url';
          /**
           * Full git repository URL (https:// or git@)
           */
          url: string;
          /**
           * Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.
           */
          ref?: string;
          /**
           * Specific commit SHA to use
           */
          sha?: string;
          [k: string]: unknown | undefined;
        }
      | {
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
           * Specific commit SHA to use
           */
          sha?: string;
          [k: string]: unknown | undefined;
        }
      | {
          source: 'git-subdir';
          /**
           * Git repository: GitHub owner/repo shorthand, https://, or git@ URL
           */
          url: string;
          /**
           * Subdirectory within the repo containing the plugin (e.g., "tools/claude-plugin"). Cloned sparsely using partial clone (--filter=tree:0) to minimize bandwidth for monorepos.
           */
          path: string;
          /**
           * Git branch or tag to use (e.g., "main", "v1.0.0"). Defaults to repository default branch.
           */
          ref?: string;
          /**
           * Specific commit SHA to use
           */
          sha?: string;
          [k: string]: unknown | undefined;
        };
    /**
     * Category for organizing plugins (e.g., "productivity", "development")
     */
    category?: string;
    /**
     * Tags for searchability and discovery
     */
    tags?: string[];
    /**
     * Require the plugin manifest to be present in the plugin folder. If false, the marketplace entry provides the manifest.
     */
    strict?: boolean;
    [k: string]: unknown | undefined;
  }[];
  /**
   * When true, plugins removed from this marketplace will be automatically uninstalled and flagged for users
   */
  forceRemoveDeletedPlugins?: boolean;
  /**
   * Optional marketplace metadata
   */
  metadata?: {
    /**
     * Base path for relative plugin sources
     */
    pluginRoot?: string;
    /**
     * Marketplace version
     */
    version?: string;
    /**
     * Marketplace description
     */
    description?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Marketplace names whose plugins may be auto-installed as dependencies. Only the root marketplace's allowlist applies — no transitive trust.
   */
  allowCrossMarketplaceDependenciesOn?: string[];
  [k: string]: unknown | undefined;
}
