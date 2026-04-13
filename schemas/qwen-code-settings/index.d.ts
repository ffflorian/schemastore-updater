/* eslint-disable */

/**
 * Configuration file for Qwen Code
 */
export interface QwenCodeSettings {
  /**
   * URL or path to the JSON schema for this configuration file
   */
  $schema?: string;
  /**
   * Schema version identifier
   */
  $version?: number;
  /**
   * General configuration options
   */
  general?: {
    /**
     * The preferred editor to open files in
     */
    preferredEditor?: string;
    /**
     * Enable Vim keybindings
     */
    vimMode?: boolean;
    /**
     * Enable automatic update checks and installations on startup
     */
    enableAutoUpdate?: boolean;
    /**
     * Automatically add a Co-authored-by trailer to git commit messages
     */
    gitCoAuthor?: boolean;
    /**
     * Session checkpointing configuration
     */
    checkpointing?: {
      /**
       * Enable session checkpointing for recovery
       */
      enabled?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Default encoding for new files
     */
    defaultFileEncoding?: 'utf-8' | 'utf-8-bom';
  };
  /**
   * Output configuration
   */
  output?: {
    /**
     * The format of the CLI output
     */
    format?: 'text' | 'json';
  };
  /**
   * User interface configuration
   */
  ui?: {
    /**
     * The color theme for the UI
     */
    theme?: string;
    /**
     * Custom theme definitions
     */
    customThemes?: {
      [k: string]:
        | {
            name: string;
            type: 'custom';
            Background?: string;
            Foreground?: string;
            AccentBlue?: string;
            AccentPurple?: string;
            AccentCyan?: string;
            AccentGreen?: string;
            AccentYellow?: string;
            AccentRed?: string;
            LightBlue?: string;
            Comment?: string;
            Gray?: string;
            DiffAdded?: string;
            DiffRemoved?: string;
            DiffModified?: string;
            GradientColors?: string[];
            [k: string]: unknown | undefined;
          }
        | undefined;
    };
    /**
     * Hide the window title bar
     */
    hideWindowTitle?: boolean;
    /**
     * Hide helpful tips in the UI
     */
    hideTips?: boolean;
    /**
     * Hide the application banner
     */
    hideBanner?: boolean;
    /**
     * Hide the footer from the UI
     */
    hideFooter?: boolean;
    /**
     * Display memory usage information in the UI
     */
    showMemoryUsage?: boolean;
    /**
     * Show line numbers in code blocks in the CLI output
     */
    showLineNumbers?: boolean;
    /**
     * Show citations for generated text in the chat
     */
    showCitations?: boolean;
    /**
     * Show welcome back dialog when returning to a project with conversation history
     */
    enableWelcomeBack?: boolean;
    /**
     * Accessibility configuration
     */
    accessibility?: {
      /**
       * Enable loading phrases (disable for accessibility)
       */
      enableLoadingPhrases?: boolean;
      /**
       * Enables screen reader mode, adjusting the TUI for better compatibility
       */
      screenReader?: boolean;
    };
    /**
     * Custom phrases to display during loading states
     */
    customWittyPhrases?: string[];
  };
  /**
   * IDE integration configuration
   */
  ide?: {
    /**
     * Enable IDE integration mode
     */
    enabled?: boolean;
    /**
     * Whether the user has seen the IDE integration nudge
     */
    hasSeenNudge?: boolean;
  };
  /**
   * Privacy configuration
   */
  privacy?: {
    /**
     * Enable collection of usage statistics
     */
    usageStatisticsEnabled?: boolean;
  };
  /**
   * Model configuration
   */
  model?: {
    /**
     * The Qwen model to use for conversations
     */
    name?: string;
    /**
     * Maximum number of turns to keep in a session (-1 is unlimited)
     */
    maxSessionTurns?: number;
    /**
     * Chat history compression configuration
     */
    chatCompression?: {
      /**
       * Threshold for chat history compression as a percentage of token limit
       */
      contextPercentageThreshold?: number;
    };
    /**
     * Skip the next speaker check
     */
    skipNextSpeakerCheck?: boolean;
    /**
     * Disables loop detection checks (use if false positives occur)
     */
    skipLoopDetection?: boolean;
    /**
     * Skips sending the startup workspace context at session start
     */
    skipStartupContext?: boolean;
    /**
     * Enables logging of OpenAI API calls for debugging
     */
    enableOpenAILogging?: boolean;
    /**
     * Custom directory path for OpenAI API logs
     */
    openAILoggingDir?: string;
    /**
     * Generation configuration parameters
     */
    generationConfig?: {
      /**
       * Request timeout
       */
      timeout?: number;
      /**
       * Override model's maximum assumed context capacity
       */
      contextWindowSize?: number;
      /**
       * Enable cache control
       */
      enableCacheControl?: boolean;
      /**
       * Override auto-detected input modalities
       */
      modalities?: {
        image?: boolean;
        pdf?: boolean;
        audio?: boolean;
        video?: boolean;
      };
      /**
       * Custom HTTP headers for API requests
       */
      customHeaders?: {
        [k: string]: string | undefined;
      };
      /**
       * Additional body parameters (OpenAI-compatible providers only)
       */
      extra_body?: {
        [k: string]: unknown | undefined;
      };
      /**
       * Fine-tuning knobs (e.g., temperature, top_p, max_tokens)
       */
      samplingParams?: {
        temperature?: number;
        top_p?: number;
        max_tokens?: number;
        [k: string]: unknown | undefined;
      };
    };
  };
  /**
   * Context configuration
   */
  context?: {
    /**
     * The name of the context file(s)
     */
    fileName?: string | string[];
    /**
     * The format to use when importing memory
     */
    importFormat?: string;
    /**
     * Additional directories to include in the workspace context
     */
    includeDirectories?: string[];
    /**
     * Controls behavior of /memory refresh for included directories
     */
    loadFromIncludeDirectories?: boolean;
    /**
     * File filtering configuration
     */
    fileFiltering?: {
      /**
       * Respect .gitignore files when searching
       */
      respectGitIgnore?: boolean;
      /**
       * Respect .qwenignore files when searching
       */
      respectQwenIgnore?: boolean;
      /**
       * Enable recursive file searching for @ completions
       */
      enableRecursiveFileSearch?: boolean;
      /**
       * Enable fuzzy search capabilities
       */
      enableFuzzySearch?: boolean;
    };
  };
  /**
   * Tools configuration
   */
  tools?: {
    /**
     * Sandbox execution environment (boolean or custom path string)
     */
    sandbox?: boolean | string;
    /**
     * Shell configuration
     */
    shell?: {
      /**
       * Use node-pty for an interactive shell experience
       */
      enableInteractiveShell?: boolean;
    };
    /**
     * Allowlist of built-in tools
     */
    core?: string[];
    /**
     * Tool names to exclude from discovery
     */
    exclude?: string[];
    /**
     * Tools that bypass the confirmation dialog
     */
    allowed?: string[];
    /**
     * Default approval mode for tool usage
     */
    approvalMode?: 'plan' | 'default' | 'auto-edit' | 'yolo';
    /**
     * Command to run for tool discovery
     */
    discoveryCommand?: string;
    /**
     * Custom shell command for calling a specific discovered tool
     */
    callCommand?: string;
    /**
     * Use ripgrep for file content search
     */
    useRipgrep?: boolean;
    /**
     * Use the bundled ripgrep binary (requires tools.useRipgrep: true)
     */
    useBuiltinRipgrep?: boolean;
    /**
     * Truncate output if larger than this many characters
     */
    truncateToolOutputThreshold?: number;
    /**
     * Maximum lines/entries kept when truncating output
     */
    truncateToolOutputLines?: number;
  };
  /**
   * MCP (Model Context Protocol) configuration
   */
  mcp?: {
    /**
     * Command to start an MCP server
     */
    serverCommand?: string;
    /**
     * Allowlist of MCP server names
     */
    allowed?: string[];
    /**
     * Denylist of MCP server names
     */
    excluded?: string[];
  };
  /**
   * Security configuration
   */
  security?: {
    /**
     * Folder trust configuration
     */
    folderTrust?: {
      /**
       * Setting to track whether Folder trust is enabled
       */
      enabled?: boolean;
    };
    /**
     * Authentication configuration
     */
    auth?: {
      /**
       * The currently selected authentication type
       */
      selectedType?: string;
      /**
       * The required auth type (useful for enterprises)
       */
      enforcedType?: string;
      /**
       * Whether to use an external authentication flow
       */
      useExternal?: boolean;
    };
  };
  /**
   * Advanced configuration options
   */
  advanced?: {
    /**
     * Automatically configure Node.js memory limits
     */
    autoConfigureMemory?: boolean;
    /**
     * The DNS resolution order
     */
    dnsResolutionOrder?: string;
    /**
     * Environment variables to exclude from project context
     */
    excludedEnvVars?: string[];
    /**
     * API key for Tavily web search service
     */
    tavilyApiKey?: string;
    /**
     * Bug command configuration
     */
    bugCommand?: {
      /**
       * A URL that can contain {title} and {info} placeholders for the /bug command
       */
      urlTemplate?: string;
    };
  };
  /**
   * Model-Context Protocol server configurations
   */
  mcpServers?: {
    /**
     * MCP server configuration
     */
    [k: string]:
      | {
          /**
           * The command to execute to start the MCP server via stdio
           */
          command?: string;
          /**
           * Arguments to pass to the command
           */
          args?: string[];
          /**
           * Environment variables to set for the server process
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * The working directory in which to start the server
           */
          cwd?: string;
          /**
           * The URL of an MCP server using Server-Sent Events (SSE)
           */
          url?: string;
          /**
           * The URL of an MCP server using streamable HTTP
           */
          httpUrl?: string;
          /**
           * A map of HTTP headers to send with requests to url or httpUrl
           */
          headers?: {
            [k: string]: string | undefined;
          };
          /**
           * Timeout in milliseconds for requests to this MCP server
           */
          timeout?: number;
          /**
           * Trust this server and bypass all tool call confirmations
           */
          trust?: boolean;
          /**
           * A brief description of the server
           */
          description?: string;
          /**
           * Allowlist of tool names from this MCP server
           */
          includeTools?: string[];
          /**
           * Denylist of tool names from this MCP server (takes precedence over includeTools)
           */
          excludeTools?: string[];
        }
      | undefined;
  };
  /**
   * Telemetry configuration
   */
  telemetry?: {
    /**
     * Whether or not telemetry is enabled
     */
    enabled?: boolean;
    /**
     * The destination for collected telemetry
     */
    target?: 'local' | 'gcp';
    /**
     * The endpoint for the OTLP Exporter
     */
    otlpEndpoint?: string;
    /**
     * The protocol for the OTLP Exporter
     */
    otlpProtocol?: 'grpc' | 'http';
    /**
     * Whether or not to include the content of user prompts in the logs
     */
    logPrompts?: boolean;
    /**
     * The file to write telemetry to when target is local
     */
    outfile?: string;
    /**
     * Whether to use an external OTLP collector
     */
    useCollector?: boolean;
  };
}
