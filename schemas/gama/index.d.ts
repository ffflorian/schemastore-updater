/* eslint-disable */

/**
 * Keyboard shortcut, such as ctrl+c, shift+right, enter, or tab.
 */
export type KeyBinding = string;

/**
 * Configuration for GAMA, a terminal user interface for GitHub Actions.
 * https://github.com/termkit/gama#configuration
 */
export interface GAMAConfiguration {
  /**
   * GitHub connection settings.
   */
  github?: {
    /**
     * GitHub token. Environment variables are usually preferred for secrets.
     */
    token?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Keyboard shortcuts.
   */
  keys?: {
    switch_tab_right?: KeyBinding;
    switch_tab_left?: KeyBinding;
    quit?: KeyBinding;
    refresh?: KeyBinding;
    enter?: KeyBinding;
    live_mode?: KeyBinding;
    tab?: KeyBinding;
    [k: string]: unknown | undefined;
  };
  /**
   * Runtime settings.
   */
  settings?: {
    live_mode?: {
      /**
       * Whether live mode is enabled by default.
       */
      enabled?: boolean;
      /**
       * Refresh interval as a Go duration string, such as 15s, 1m, 1m30s, or 1.5s.
       */
      interval?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
