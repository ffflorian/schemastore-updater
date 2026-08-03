/* eslint-disable */

/**
 * Configuration for Dust, a more intuitive version of du.
 * https://github.com/bootandy/dust/tree/v1.2.4#config-file
 */
export interface DustConfiguration {
  /**
   * Display full paths instead of file and directory names.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'display-full-paths'?: boolean;
  /**
   * Use apparent file sizes instead of disk usage.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'display-apparent-size'?: boolean;
  /**
   * Reverse the output order so the largest entries appear first.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  reverse?: boolean;
  /**
   * Disable colored output.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'no-colors'?: boolean;
  /**
   * Force colored output even when stdout is not a terminal.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'force-colors'?: boolean;
  /**
   * Hide the percent bars and percentages.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'no-bars'?: boolean;
  /**
   * Do not display the total row.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'skip-total'?: boolean;
  /**
   * Present output in a format suitable for screen readers.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'screen-reader'?: boolean;
  /**
   * Ignore hidden files and directories.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'ignore-hidden'?: boolean;
  /**
   * Display directories but not files.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'only-dir'?: boolean;
  /**
   * Display files but not directories.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'only-file'?: boolean;
  /**
   * Disable the progress indicator.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'disable-progress'?: boolean;
  /**
   * Place percent bars on the right side of the output.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'bars-on-right'?: boolean;
  /**
   * Emit JSON output.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'output-json'?: boolean;
  /**
   * Print filesystem access errors.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'print-errors'?: boolean;
  /**
   * Size output format. Common values include si, b, k, kib, m, mib, g, gib, t, tib, kb, mb, gb, and tb; Dust accepts other strings.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'output-format'?: string;
  /**
   * Minimum size threshold for displayed entries, such as 10M or 1G.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'min-size'?: string;
  /**
   * Read NUL-terminated input paths from this file, or from standard input when set to '-'.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'files0-from'?: string;
  /**
   * Read newline-delimited input paths from this file, or from standard input when set to '-'.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'files-from'?: string;
  /**
   * Maximum directory depth to display. Omit for unlimited depth.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  depth?: number;
  /**
   * Worker thread stack size in bytes.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'stack-size'?: number;
  /**
   * Number of worker threads.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  threads?: number;
  /**
   * Maximum number of output lines.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  'number-of-lines'?: number;
  /**
   * Paths whose contents should be collapsed into a single entry.
   * https://github.com/bootandy/dust/blob/v1.2.4/src/config.rs
   */
  collapse?: string[];
  [k: string]: unknown | undefined;
}
