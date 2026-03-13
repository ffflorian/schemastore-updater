/* eslint-disable */

/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
 */
export type ProcessConfiguration = {
  [k: string]: unknown | undefined;
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
    [k: string]: ProcessConfiguration;
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
  keymap_term?: Keymap1;
  keymap_copy?: Keymap2;
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
   * This interface was referenced by `Keymap1`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   *
   * This interface was referenced by `Keymap2`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   */
  [k: string]: null | {
    c: C;
    /**
     * Commands to run when keybind is triggered.
     */
    cmds?: {
      c: C;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Key bindings for terminal window.
 */
export interface Keymap1 {
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
   * This interface was referenced by `Keymap1`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   *
   * This interface was referenced by `Keymap2`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   */
  [k: string]: null | {
    c: C;
    /**
     * Commands to run when keybind is triggered.
     */
    cmds?: {
      c: C;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
}
/**
 * Key bindings for copy mode.
 */
export interface Keymap2 {
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
   * This interface was referenced by `Keymap1`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   *
   * This interface was referenced by `Keymap2`'s JSON-Schema definition
   * via the `patternProperty` "^<[^>]+>$".
   */
  [k: string]: null | {
    c: C;
    /**
     * Commands to run when keybind is triggered.
     */
    cmds?: {
      c: C;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
}
