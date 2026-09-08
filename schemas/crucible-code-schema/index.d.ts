/* eslint-disable */

/**
 * Settings for the crucible coding agent. Formats are unstable while the version is 0.x: any key here may be renamed or removed in any release, with no deprecation period.
 */
export interface CrucibleConfiguration {
  $schema?: string;
  $comment?: string;
  /**
   * What happens when the model's window fills up
   */
  compaction?: {
    $schema?: string;
    $comment?: string;
    /**
     * How large a session has to be, in tokens, before picking it up asks whether to carry it whole. Zero never asks
     */
    askOnResume?: number;
    /**
     * How many tokens of recent turns are kept word for word after the rest becomes a recap
     */
    keep?: number;
    /**
     * Maximum tokens a structured compaction recap may produce; ordinary recaps stop earlier
     */
    recap?: number;
    /**
     * Tokens to keep free for the next answer and the tools it calls, instead of the room crucible works out from the model
     */
    reserve?: number;
    /**
     * The most tokens one turn may produce before crucible stops it, where a runaway turn is worth bounding
     */
    spendCeiling?: number;
    /**
     * Whether a full window is answered by compacting the session, or by letting the turn fail
     */
    when?: 'full' | 'never';
  };
  /**
   * Environment variables for the commands crucible runs. A file under the working directory may set only crucible's own CRUCIBLE_CODE_ names
   */
  env?: {
    $schema?: string;
    $comment?: string;
    /**
     * How many rows of the transcript one notch of the wheel moves
     */
    CRUCIBLE_CODE_MOUSE_SCROLL_SPEED?: string;
    [k: string]: string | undefined;
  };
  /**
   * Per-extension settings, keyed by the identifier the extension's manifest states
   */
  extensions?: {
    $schema?: string;
    $comment?: string;
    [k: string]:
      | {
          $schema?: string;
          $comment?: string;
          /**
           * Settings for the extension itself, in whatever names its own documentation gives. Read only from the configuration file in your home directory
           */
          config?: {
            [k: string]: unknown | undefined;
          };
          /**
           * The manifest digest this extension was agreed to at, as --extensions prints it. Read only from the configuration file in your home directory
           */
          digest?: string;
          /**
           * Whether crucible may run this extension. Not enough on its own: `digest` says which program was agreed to. Read only from the configuration file in your home directory
           */
          enabled?: boolean;
        }
      | string
      | undefined;
  };
  /**
   * What the keyboard does
   */
  input?: {
    $schema?: string;
    $comment?: string;
    /**
     * Which press sends a prompt: enter sends and Shift+Enter, Alt+Enter or Ctrl+J opens a line; altEnter swaps the two, for a terminal that keeps Enter for itself
     */
    send?: 'enter' | 'altEnter';
  };
  /**
   * MCP servers crucible may be asked to start
   */
  mcp?: {
    $schema?: string;
    $comment?: string;
    /**
     * MCP servers that may be selected, keyed by the identifier their tools are qualified by. Nothing is started by being written here
     */
    servers?: {
      $schema?: string;
      $comment?: string;
      [k: string]:
        | {
            $schema?: string;
            $comment?: string;
            /**
             * What to pass the program, one argument per element, applied verbatim. Read only from the configuration file in your home directory
             */
            args?: string[];
            /**
             * The program to run for this server. An absolute path, or a bare program name for PATH to answer. Read only from the configuration file in your home directory
             */
            command: string;
            /**
             * An absolute path to start the program in. Left off, the directory crucible was started in. Read only from the configuration file in your home directory
             */
            directory?: string;
            /**
             * Environment variables for this server, applied verbatim — values, so nothing secret belongs here. Read only from the configuration file in your home directory
             */
            env?: {
              $schema?: string;
              $comment?: string;
              [k: string]: string | undefined;
            };
            /**
             * Environment variables for this server taken from crucible's own, keyed by the name the server reads and holding the name crucible reads — names, never secrets. Read only from the configuration file in your home directory
             */
            envFrom?: {
              $schema?: string;
              $comment?: string;
              [k: string]: string | undefined;
            };
            /**
             * How long to wait for the server to agree a protocol version before giving up on it. Read only from the configuration file in your home directory
             */
            handshakeSeconds?: number;
            /**
             * How long to wait for one request to this server before giving up on it. Read only from the configuration file in your home directory
             */
            requestSeconds?: number;
            /**
             * Whether a run that selected this server fails when it cannot be prepared, rather than carrying on without its tools. Read only from the configuration file in your home directory
             */
            required?: boolean;
            /**
             * How many times this server may be started again after it ends. Read only from the configuration file in your home directory
             */
            restarts?: number;
            /**
             * How long the server is given to stop on its own before it is killed. Read only from the configuration file in your home directory
             */
            shutdownSeconds?: number;
          }
        | string
        | undefined;
    };
  };
  /**
   * What the terminal shows
   */
  output?: {
    $schema?: string;
    $comment?: string;
    /**
     * Whether to write colour: auto follows the terminal and NO_COLOR, always and never override it
     */
    color?: 'auto' | 'always' | 'never';
    /**
     * Which characters crucible draws with: unicode for box drawing, ascii for a font that lacks it
     */
    glyphs?: 'unicode' | 'ascii';
    /**
     * Which theme fenced code is drawn in — a name from /theme, such as Monokai Extended, GitHub, Dracula or Nord
     */
    syntaxTheme?: string;
    /**
     * Which colours crucible draws with: auto follows the terminal's own background, ansi spends only the sixteen it already has
     */
    theme?: 'auto' | 'dark' | 'light' | 'colourblind-dark' | 'colourblind-light' | 'ansi';
    /**
     * How much of a tool call and its result one line shows
     */
    toolDetail?: 'compact' | 'full';
  };
  /**
   * What runs without being put to you, what is refused outright, and where tools may reach
   */
  permissions?: {
    $schema?: string;
    $comment?: string;
    /**
     * Rules for calls that run without being put to you. Read only from the configuration file in your home directory
     */
    allow?: string[];
    /**
     * Rules for calls that are always put to you, whatever the mode says
     */
    ask?: string[];
    /**
     * Rules for calls that are refused in every mode, beating any allow written beside them
     */
    deny?: string[];
    /**
     * Absolute paths to directories outside the working directory that tools may reach. Read only from the configuration file in your home directory
     */
    extraDirectories?: string[];
    /**
     * What happens to a call no rule mentions: ask about every change and command, allow changes to files, or allow everything. Read only from the configuration file in your home directory
     */
    mode?: 'ask' | 'allowEdits' | 'fullAccess';
  };
  /**
   * Provider-side reuse of an identical prompt prefix, enabled through each provider's verified native mechanism by default
   */
  promptCaching?: {
    $schema?: string;
    $comment?: string;
    /**
     * Provider-neutral cache mechanisms still permitted after capability resolution; layers intersect this list
     */
    allowedMechanisms?: (
      'providerManagedUsageOnly' | 'automaticPrefix' | 'explicitBreakpoints' | 'persistentContent'
    )[];
    /**
     * Broadest identity scope allowed to share a cache prefix
     */
    isolationScope?: 'run' | 'session' | 'workspace' | 'user';
    /**
     * Whether Crucible observes provider caching, prefers the verified native mechanism, requires it, or requires a documented opt-out
     */
    mode?: 'observeOnly' | 'prefer' | 'require' | 'prohibit';
    /**
     * Bounded opaque user-owned label included in cache scope identity; never a provider cache key
     */
    namespace?: string;
    /**
     * Separate authority for remotely persisted cached-content resources
     */
    persistentResources?: {
      $schema?: string;
      $comment?: string;
      /**
       * Whether remote persistent cache resources are forbidden, reusable, creatable, or required; creation authority must come from user configuration
       */
      mode?: 'forbid' | 'reuse' | 'create' | 'require';
    };
    /**
     * Optional provider-neutral retention request under a hard duration ceiling
     */
    requestedRetention?: {
      $schema?: string;
      $comment?: string;
      /**
       * Provider-neutral retention class; extended retention must be chosen in the user configuration
       */
      class?: 'providerDefault' | 'ephemeral' | 'extended';
      /**
       * Hard maximum provider retention in seconds; required for ephemeral and extended retention
       */
      maxSeconds?: number;
    };
  };
  /**
   * Which provider to ask, by the name --model qualifies a model with. Read only from the configuration file in your home directory
   */
  provider?: string;
  /**
   * Per-provider defaults, keyed by provider name
   */
  providers?: {
    $schema?: string;
    $comment?: string;
    [k: string]:
      | {
          $schema?: string;
          $comment?: string;
          /**
           * Name of the environment variable holding this provider's API key — the name, never the key
           */
          apiKeyEnv?: string;
          /**
           * Address to send this provider's requests to instead of the vendor's, for a gateway or a proxy
           */
          baseUrl?: string;
          /**
           * The context-window size in tokens, keyed by model name; an explicit value may opt into a larger native window
           */
          contextWindow?: {
            $schema?: string;
            $comment?: string;
            [k: string]: number | string | undefined;
          };
          /**
           * The context-window size in tokens for any model of this provider not named above
           */
          defaultContextWindow?: number;
          /**
           * How hard to think before answering, when --effort does not say. Left off, the vendor's own default for whichever model is being asked
           */
          effort?: 'low' | 'medium' | 'high' | 'xhigh' | 'max';
          /**
           * The model to ask when --model does not name one
           */
          model?: string;
        }
      | string
      | undefined;
  };
  /**
   * Operating-system confinement for commands and descendant processes
   */
  sandbox?: {
    $schema?: string;
    $comment?: string;
    /**
     * Whether commands require verified kernel confinement, may use an explicit compatibility fallback, or run unconfined; only user configuration may weaken required
     */
    mode?: 'required' | 'degraded' | 'off';
  };
  /**
   * What the model is asked under: how much it explains, and anything you would rather it were told instead
   */
  systemPrompt?: {
    $schema?: string;
    $comment?: string;
    /**
     * Instructions to add to crucible's own, said after them and every turn
     */
    append?: string;
    /**
     * Instructions to ask every turn under in place of crucible's own, replacing them entirely. Read only from the configuration file in your home directory
     */
    custom?: string;
    /**
     * How much of the reasoning comes back with the answer: concise for the conclusion, explanatory for why it is that one, learning for what to know before touching the code again
     */
    tone?: 'concise' | 'explanatory' | 'learning';
  };
  /**
   * Whether crucible finds out that a newer release exists
   */
  updates?: {
    $schema?: string;
    $comment?: string;
    /**
     * Whether crucible asks GitHub which release is newest, and says so when this one is behind
     */
    check?: 'auto' | 'never';
  };
}
