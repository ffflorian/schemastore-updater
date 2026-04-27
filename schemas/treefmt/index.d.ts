/* eslint-disable */

/**
 * https://treefmt.com
 */
export interface JSONSchemaForTreefmtConfigurationFiles {
  /**
   * Do not exit with error if a configured formatter is missing
   */
  'allow-missing-formatter'?: boolean;
  /**
   * The file into which a cpu profile will be written
   */
  'cpu-profile'?: string;
  /**
   * Exclude files or directories matching the specified globs
   */
  excludes?: string[];
  /**
   * Exit with error if any changes were made during execution; useful for CI
   */
  'fail-on-change'?: boolean;
  /**
   * A list of formatters to apply. Defaults to all configured formatters
   */
  formatters?: string[];
  /**
   * Log paths that did not match any formatters at the specified log level
   */
  'on-unmatched'?: 'debug' | 'info' | 'warn' | 'error' | 'fatal';
  /**
   * The root directory from which treefmt will start walking the filesystem. Defaults to the root of the current git worktree. If not in a git repo, defaults to the directory containing the config file.
   */
  'tree-root'?: string;
  /**
   * File to search for to find the tree root (if tree-root is not set)
   */
  'tree-root-file'?: string;
  /**
   * Command to run to find the tree root. It is parsed using shlex, to allow quoting arguments that contain whitespace. If you wish to pass arguments containing quotes, you should use nested quotes e.g. "'" or '"'
   */
  'tree-root-cmd'?: string;
  /**
   * Set the verbosity of logs (0 = warn, 1 = info, 2 = debug)
   */
  verbose?: number;
  /**
   * The method used to traverse the files within the tree root
   */
  walk?: 'auto' | 'git' | 'filesystem';
  formatter?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
     */
    [k: string]: {
      command?: string;
      options?: string[];
      includes?: string[];
      excludes?: string[];
      priority?: number;
      'no-positional-arg-support'?: boolean;
    };
  };
  [k: string]: unknown | undefined;
}
