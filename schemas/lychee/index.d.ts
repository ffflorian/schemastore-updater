/* eslint-disable */

/**
 * File extensions to check.
 */
export type StringArray = string[];

/**
 * Configuration for lychee, the fast asynchronous link checker.
 * https://lychee.cli.rs/guides/config/
 */
export interface LycheeConfiguration {
  /**
   * Read input filenames from the given file or stdin if the path is '-'.
   */
  files_from?: string;
  /**
   * Program log level.
   */
  verbose?: 'error' | 'warn' | 'info' | 'debug' | 'trace';
  /**
   * Do not show the interactive progress bar.
   */
  no_progress?: boolean;
  /**
   * Show per-host statistics at the end of the run.
   */
  host_stats?: boolean;
  extensions?: StringArray;
  /**
   * File extension used to parse input sources without a recognized file type.
   */
  default_extension?: string;
  /**
   * Enable link caching.
   */
  cache?: boolean;
  /**
   * Discard cached requests older than this duration, such as '2d' or '12h'.
   */
  max_cache_age?: string;
  /**
   * Status codes or ranges ignored from the cache.
   */
  cache_exclude_status?: string | number | (string | number)[];
  /**
   * Extract links without checking them.
   */
  dump?: boolean;
  /**
   * Dump inputs instead of extracting or checking links.
   */
  dump_inputs?: boolean;
  /**
   * Web archive to use for suggestions.
   */
  archive?: 'wayback';
  /**
   * Suggest link replacements for broken links.
   */
  suggest?: boolean;
  /**
   * Maximum number of allowed redirects.
   */
  max_redirects?: number;
  /**
   * Maximum number of retries per request.
   */
  max_retries?: number;
  /**
   * Minimum accepted TLS version.
   */
  min_tls?: 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3';
  /**
   * Maximum number of concurrent network requests.
   */
  max_concurrency?: number;
  /**
   * Default maximum concurrent requests per host.
   */
  host_concurrency?: number;
  /**
   * Default minimum interval between requests to the same host, such as '50ms' or '1s'.
   */
  host_request_interval?: string;
  /**
   * Number of threads to utilize.
   */
  threads?: number;
  /**
   * User agent sent with each request.
   */
  user_agent?: string;
  /**
   * Proceed for server connections considered insecure.
   */
  insecure?: boolean;
  scheme?: StringArray;
  /**
   * Only check local files and block network requests.
   */
  offline?: boolean;
  include?: StringArray;
  exclude?: StringArray;
  exclude_path?: StringArray;
  /**
   * Exclude all private, link-local, and loopback IP ranges.
   */
  exclude_all_private?: boolean;
  /**
   * Exclude private IP address ranges.
   */
  exclude_private?: boolean;
  /**
   * Exclude link-local IP address ranges.
   */
  exclude_link_local?: boolean;
  /**
   * Exclude loopback IP address ranges and localhost.
   */
  exclude_loopback?: boolean;
  /**
   * Check email addresses.
   */
  include_mail?: boolean;
  remap?: StringArray;
  fallback_extensions?: StringArray;
  index_files?: StringArray;
  header?: StringMap;
  /**
   * Accepted status codes or ranges for valid links.
   */
  accept?: string | number | (string | number)[];
  /**
   * Accept timed out requests.
   */
  accept_timeouts?: boolean;
  /**
   * Fragment checking mode.
   */
  include_fragments?: 'none' | 'anchor-only' | 'text-only' | 'full';
  /**
   * Website timeout in seconds from connect to response finished.
   */
  timeout?: number;
  /**
   * Minimum wait time in seconds between retries.
   */
  retry_wait_time?: number;
  /**
   * Request method or ordered list of fallback methods.
   */
  method?: string | [string, ...string[]];
  /**
   * Base URL or absolute path used to resolve relative URLs in local files.
   */
  base_url?: string;
  /**
   * Root directory used when checking absolute local links.
   */
  root_dir?: string;
  basic_auth?: StringArray;
  /**
   * GitHub API token used to avoid rate limiting on github.com links.
   */
  github_token?: string;
  /**
   * Skip missing input files.
   */
  skip_missing?: boolean;
  /**
   * Do not skip files ignored by ignore files.
   */
  no_ignore?: boolean;
  /**
   * Do not skip hidden directories and files.
   */
  hidden?: boolean;
  /**
   * Check links inside code and preformatted blocks.
   */
  include_verbatim?: boolean;
  /**
   * Ignore case when expanding filesystem path glob inputs.
   */
  glob_ignore_case?: boolean;
  /**
   * Output file for the status report.
   */
  output?: string;
  /**
   * Output display mode.
   */
  mode?: 'plain' | 'color' | 'emoji' | 'task';
  /**
   * Output format for the final status report.
   */
  format?: 'compact' | 'detailed' | 'json' | 'junit' | 'markdown';
  /**
   * Generate special output instead of checking links.
   */
  generate?: 'man' | 'complete-bash' | 'complete-elvish' | 'complete-fish' | 'complete-powershell' | 'complete-zsh';
  /**
   * Treat HTTP links as errors when HTTPS is available.
   */
  require_https?: boolean;
  /**
   * File used to read and write cookies.
   */
  cookie_jar?: string;
  /**
   * Check WikiLinks in Markdown files.
   */
  include_wikilinks?: boolean;
  /**
   * Command used to preprocess input files.
   */
  preprocess?: {
    command: string;
  };
  /**
   * Host-specific rate limiting and header overrides.
   */
  hosts?: {
    [k: string]: HostConfig | undefined;
  };
}
/**
 * Custom request headers applied to all requests.
 */
export interface StringMap {
  [k: string]: string | undefined;
}
export interface HostConfig {
  /**
   * Maximum concurrent requests allowed for this host.
   */
  concurrency?: number;
  /**
   * Minimum interval between requests to this host.
   */
  request_interval?: string;
  headers?: StringMap1;
}
/**
 * Custom request headers for this host.
 */
export interface StringMap1 {
  [k: string]: string | undefined;
}
