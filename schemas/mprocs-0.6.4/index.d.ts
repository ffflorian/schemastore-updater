/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
 */
export type ProcessConfiguration = (
  | {
      shell: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      cmd: unknown;
      [k: string]: unknown | undefined;
    }
) & {
  /**
   * Shell command to run (exactly one of shell or cmd must be provided).
   */
  shell?: SelectOperator | string;
  /**
   * Array of command and args to run (exactly one of shell or cmd must be provided).
   */
  cmd?: string[];
  /**
   * Set working directory for the process. Prefix <CONFIG_DIR> will be replaced with the path of the directory where the config is located.
   */
  cwd?: string;
  /**
   * Set env variables. Object keys are variable names. Assign variable to null, to clear variables inherited from parent process.
   */
  env?: {
    [k: string]: string | null | SelectOperator | undefined;
  };
  /**
   * Add entries to the PATH environment variable.
   */
  add_path?: string | string[] | SelectOperator;
  /**
   * Start process when mprocs starts. Default: true.
   */
  autostart?: boolean;
  /**
   * Restart process when it exits. Default: false. Note: If process exits within 1 second of starting, it will not be restarted.
   */
  autorestart?: boolean;
  /**
   * A way to stop a process (using `x` key or when quitting mprocs).
   */
  stop?:
    | ('SIGINT' | 'SIGTERM' | 'SIGKILL' | 'hard-kill')
    | {
        'send-keys': string[];
        [k: string]: unknown | undefined;
      };
};
/**
 * Command to run when keybind is triggered.
 */
export type C = string;

/**
 * Schema for mprocs (https://github.com/pvolok/mprocs) configuration files (YAML/JSON).
 */
export interface MprocsConfigurationSchema {
  /**
   * Processes to run. Only allowed in local config.
   */
  procs?: {
    [k: string]: ProcessConfiguration | undefined;
  };
  /**
   * Hide the pane at the bottom of the screen showing key bindings.
   */
  hide_keymap_window?: boolean;
  /**
   * Number of lines to scroll per one mouse scroll.
   */
  mouse_scroll_speed?: number;
  /**
   * Process list window width.
   */
  proc_list_width?: number;
  keymap_procs?: Keymap;
  keymap_term?: Keymap;
  keymap_copy?: Keymap;
}
/**
 * Operator for OS-specific configurations
 */
export interface SelectOperator {
  /**
   * Default value
   */
  $else?: string;
  /**
   * This is the parameter select is targeting.
   */
  $select: 'os';
  /**
   * Value specific to OS
   *
   * This interface was referenced by `SelectOperator`'s JSON-Schema definition
   * via the `patternProperty` "^(windows|macos|linux|android|freebsd|openbsd|netbsd|dragonfly|solaris|illumos|ios)$".
   */
  [k: string]: string | 'os' | undefined;
}
/**
 * Key bindings for process list.
 */
export interface Keymap {
  /**
   * Clear key bindings from previous levels.
   */
  reset?: boolean;
  /**
   * Keybind to target
   *
   * This interface was referenced by `Keymap`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   *
   * This interface was referenced by `Keymap`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   *
   * This interface was referenced by `Keymap`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   */
  [k: string]:
    | null
    | {
        c: C;
        /**
         * Commands to run when keybind is triggered.
         */
        cmds?: {
          c: C;
          [k: string]: unknown | undefined;
        }[];
        [k: string]: unknown | undefined;
      }
    | boolean
    | undefined;
}
