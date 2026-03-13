/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTmuxinatorJson {
  defaults?: {
    [k: string]: unknown | undefined;
  };
  name?: number | string;
  /**
   * Name of project root (deprecated, use `name`)
   */
  project_name?: string;
  root?: string;
  /**
   * Name of project root (deprecated, use `root`)
   */
  project_root?: string;
  /**
   * Optional tmux socket.
   */
  socket_name?: string;
  /**
   * Runs on project start, always.
   */
  on_project_start?: string | string[];
  /**
   * Run on project start, the first time.
   */
  on_project_first_start?: string | string[];
  /**
   * Run on project start, after the first time.
   */
  on_project_restart?: string | string[];
  /**
   * Run on project exit (detaching from tmux session).
   */
  on_project_exit?: string | string[];
  /**
   * Run on project stop.
   */
  on_project_stop?: string | string[];
  /**
   * Runs before everything (deprecated).
   */
  pre?: string;
  /**
   * Runs after everything (deprecated).
   */
  post?: string;
  /**
   * Specify version for rbenv (deprecated)
   */
  rbenv?: string;
  /**
   * Pass arguments to tmux (deprecated)
   */
  cli_args?: string;
  /**
   * Specify tabs (deprecated)
   */
  tabs?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Runs in each window and pane before window/pane specific commands. Useful for setting up interpreter versions.
   */
  pre_window?: string;
  /**
   * Pass command line options to tmux. Useful for specifying a different tmux.conf.
   */
  tmux_options?: string;
  /**
   * Change the command to call tmux.  This can be used by derivatives/wrappers like byobu.
   */
  tmux_command?: string;
  /**
   * Specifies (by name or index) which window will be selected on project startup. If not set, the first window is used.
   */
  startup_window?: string | number;
  /**
   * Specifies (by index) which pane of the specified window will be selected on project startup. If not set, the first pane is used.
   */
  startup_pane?: number;
  /**
   * Controls whether the tmux session should be attached to automatically. Defaults to true.
   */
  attach?: boolean;
  /**
   * Deprecated. Use `attach`
   */
  tmux_detached?: boolean;
  /**
   * Enables the display of pane titles.
   */
  enable_pane_titles?: boolean;
  /**
   * Configures pane title position.
   */
  pane_title_position?: string;
  /**
   * Configures pane title format.
   */
  pane_title_format?: string;
  windows?: (
    | string
    | {
        pre?: string[];
        /**
         * The layout setting gets handed down to tmux directly, so you can choose from one of the five tmux standard layouts or specify your own.
         */
        layout?: string;
        /**
         * Panes are optional and are children of window entries.
         */
        panes?: (
          | number
          | string
          | (
              | string
              | {
                  /**
                   * This interface was referenced by `undefined`'s JSON-Schema definition
                   * via the `patternProperty` ".".
                   */
                  [k: string]: string | string[];
                }
            )[]
        )[];
        [k: string]: unknown | undefined;
      }
  )[];
}
