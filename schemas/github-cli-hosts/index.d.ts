/* eslint-disable */

/**
 * Configuration for a GitHub.com or GitHub Enterprise host.
 * https://github.com/cli/cli/blob/v2.96.0/docs/multiple-accounts.md
 */
export type Host =
  | (ConfigOptions & {
      /**
       * Username of the active account for this host.
       * https://cli.github.com/manual/gh_auth_switch
       */
      user?: string;
      /**
       * Sensitive plaintext authentication token used when secure credential storage is unavailable. Prefer storing credentials with gh auth login.
       * https://cli.github.com/manual/gh_auth_login
       */
      oauth_token?: string;
      /**
       * Accounts known for this host. A null value indicates that the account token is stored in the operating system credential store.
       * https://github.com/cli/cli/blob/v2.96.0/docs/multiple-accounts.md
       */
      users?: {
        [k: string]: (null | User) | undefined;
      };
      [k: string]: unknown | undefined;
    })
  | undefined;
/**
 * Per-account configuration stored for a host.
 * https://github.com/cli/cli/blob/v2.96.0/docs/multiple-accounts.md
 */
export type User = ConfigOptions & {
  /**
   * Sensitive plaintext authentication token used when secure credential storage is unavailable. Prefer storing credentials with gh auth login.
   * https://cli.github.com/manual/gh_auth_login
   */
  oauth_token?: string;
  [k: string]: unknown | undefined;
};

/**
 * Authentication and per-host configuration for the GitHub CLI.
 * https://cli.github.com/manual/gh_auth_status
 */
export interface GitHubCLIHostsConfiguration {
  [k: string]: Host | undefined;
}
/**
 * GitHub CLI options that may be overridden for a host or preserved for an account.
 * https://github.com/cli/cli/blob/v2.96.0/internal/config/config.go
 */
export interface ConfigOptions {
  /**
   * Protocol to use for Git operations with this host.
   * https://cli.github.com/manual/gh_config
   */
  git_protocol?: 'https' | 'ssh';
  /**
   * Text editor command used for this host.
   * https://cli.github.com/manual/gh_config
   */
  editor?: string | null;
  /**
   * Whether interactive prompting is enabled for this host.
   * https://cli.github.com/manual/gh_config
   */
  prompt?: 'enabled' | 'disabled';
  /**
   * Whether GitHub CLI should prefer opening an editor instead of prompting in the terminal for this host.
   * https://cli.github.com/manual/gh_config
   */
  prefer_editor_prompt?: 'enabled' | 'disabled';
  /**
   * Terminal pager command used for this host.
   * https://cli.github.com/manual/gh_config
   */
  pager?: string | null;
  /**
   * Path to a Unix domain socket used for HTTP connections to this host.
   * https://cli.github.com/manual/gh_config
   */
  http_unix_socket?: string | null;
  /**
   * Web browser command used for this host.
   * https://cli.github.com/manual/gh_config
   */
  browser?: string | null;
  /**
   * Whether label colors are displayed using their RGB values for this host.
   * https://cli.github.com/manual/gh_config
   */
  color_labels?: 'enabled' | 'disabled';
  /**
   * Whether the accessible four-bit color palette is enabled for this host.
   * https://cli.github.com/manual/gh_config
   */
  accessible_colors?: 'enabled' | 'disabled';
  /**
   * Whether the accessible interactive prompter is enabled for this host.
   * https://cli.github.com/manual/gh_config
   */
  accessible_prompter?: 'enabled' | 'disabled';
  /**
   * Whether terminal spinner animations are enabled for this host.
   * https://cli.github.com/manual/gh_config
   */
  spinner?: 'enabled' | 'disabled';
  [k: string]: unknown | undefined;
}
