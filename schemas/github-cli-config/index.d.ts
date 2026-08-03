/* eslint-disable */

/**
 * Global configuration for the GitHub CLI.
 * https://cli.github.com/manual/gh_config
 */
export interface GitHubCLIConfiguration {
  /**
   * URI of the JSON Schema used to validate this configuration.
   * https://json-schema.org/understanding-json-schema/reference/schema.html
   */
  $schema?: string;
  /**
   * Internal GitHub CLI configuration format version.
   * https://github.com/cli/cli/blob/v2.96.0/internal/config/config.go
   */
  version?: 1;
  /**
   * Protocol to use for Git operations.
   * https://cli.github.com/manual/gh_config
   */
  git_protocol?: 'https' | 'ssh';
  /**
   * Text editor command used by GitHub CLI.
   * https://cli.github.com/manual/gh_config
   */
  editor?: string | null;
  /**
   * Whether interactive prompting is enabled.
   * https://cli.github.com/manual/gh_config
   */
  prompt?: 'enabled' | 'disabled';
  /**
   * Whether GitHub CLI should prefer opening an editor instead of prompting in the terminal.
   * https://cli.github.com/manual/gh_config
   */
  prefer_editor_prompt?: 'enabled' | 'disabled';
  /**
   * Terminal pager command used by GitHub CLI.
   * https://cli.github.com/manual/gh_config
   */
  pager?: string | null;
  /**
   * GitHub CLI aliases, keyed by alias name with command expansions as values.
   * https://cli.github.com/manual/gh_alias
   */
  aliases?: {
    [k: string]: string | undefined;
  } | null;
  /**
   * Path to a Unix domain socket to use for HTTP connections.
   * https://cli.github.com/manual/gh_config
   */
  http_unix_socket?: string | null;
  /**
   * Web browser command used to open URLs.
   * https://cli.github.com/manual/gh_config
   */
  browser?: string | null;
  /**
   * Whether label colors are displayed using their RGB values.
   * https://cli.github.com/manual/gh_config
   */
  color_labels?: 'enabled' | 'disabled';
  /**
   * Whether the accessible four-bit color palette is enabled.
   * https://cli.github.com/manual/gh_config
   */
  accessible_colors?: 'enabled' | 'disabled';
  /**
   * Whether the accessible interactive prompter is enabled.
   * https://cli.github.com/manual/gh_config
   */
  accessible_prompter?: 'enabled' | 'disabled';
  /**
   * Whether terminal spinner animations are enabled.
   * https://cli.github.com/manual/gh_config
   */
  spinner?: 'enabled' | 'disabled';
  /**
   * Telemetry mode. The log mode writes telemetry events to stderr instead of sending them.
   * https://cli.github.com/manual/gh_config
   */
  telemetry?: 'enabled' | 'disabled' | 'log';
  [k: string]: unknown | undefined;
}
