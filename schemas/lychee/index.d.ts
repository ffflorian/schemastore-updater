/* eslint-disable */

/**
 * A status-code selector accepts a single integer, a selector string, or a
 * mixed list of integers and selector strings.
 */
export type StatusCodeSelector = StatusCode | StatusCodeSelectorString | StatusCodeSelectorValue[];
export type StatusCode = number;
export type StatusCodeSelectorString = string;
export type StatusCodeSelectorValue = StatusCode | StatusRangeString;
export type StatusRangeString = string;
/**
 * Archives supported in configuration files.
 */
export type Archive = 'wayback';
/**
 * Basic-auth selectors use `<uri-regex> <username>:<password>` syntax.
 */
export type BasicAuthSelector = string;
/**
 * The format to use for the final status report
 */
export type StatsFormat = 'compact' | 'detailed' | 'json' | 'junit' | 'markdown';
/**
 * What to generate when providing the --generate flag
 */
export type GenerateMode =
  'man' | 'complete-bash' | 'complete-elvish' | 'complete-fish' | 'complete-powershell' | 'complete-zsh';
/**
 * Values for `--include-fragments` option, which controls how URL fragments are checked.
 */
export type FragmentMode = 'none' | 'anchor-only' | 'text-only' | 'full';
export type TlsVersion = 'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3';
/**
 * The different formatter modes
 *
 * This decides over whether to use color,
 * emojis, or plain text for the output.
 */
export type OutputMode = 'plain' | 'color' | 'emoji' | 'task';
/**
 * Log levels accepted by the case-insensitive verbosity deserializer.
 */
export type Verbosity = string;

/**
 * Configuration for lychee v0.24.2 (lychee.toml).
 */
export interface LycheeV0242Configuration {
  /**
   * A List of accepted status codes for valid links
   *
   * The following accept range syntax is supported: `[start]..[[=]end]|code`.
   * Some valid examples are:
   *
   * - 200 (accepts the 200 status code only)
   * - ..204 (accepts any status code < 204)
   * - ..=204 (accepts any status code <= 204)
   * - 200..=204 (accepts any status code from 200 to 204 inclusive)
   * - 200..205 (accepts any status code from 200 to 205 excluding 205, same as 200..=204)
   *
   * Use `lychee --accept '200..=204, 429, 500' <inputs>...` to provide a comma-
   * separated list of accepted status codes. This example will accept 200, 201,
   * 202, 203, 204, 429, and 500 as valid status codes.
   *
   * [default: 100..=103,200..=299]
   */
  accept?: StatusCodeSelector | null;
  /**
   * Accept timed out requests and return exit code 0
   * when encountering timeouts but not any other errors.
   */
  accept_timeouts?: boolean | null;
  /**
   * Web archive to use to provide suggestions for `--suggest`.
   *
   * [default: wayback]
   */
  archive?: Archive | null;
  /**
   * Base URL to use when resolving relative URLs in local files. If specified,
   * relative links in local files are interpreted as being relative to the given
   * base URL.
   *
   * For example, given a base URL of `https://example.com/dir/page`, the link `a`
   * would resolve to `https://example.com/dir/a` and the link `/b` would resolve
   * to `https://example.com/b`. This behavior is not affected by the filesystem
   * path of the file containing these links.
   *
   * Note that relative URLs without a leading slash become siblings of the base
   * URL. If, instead, the base URL ended in a slash, the link would become a child
   * of the base URL. For example, a base URL of `https://example.com/dir/page/` and
   * a link of `a` would resolve to `https://example.com/dir/page/a`.
   *
   * Basically, the base URL option resolves links as if the local files were hosted
   * at the given base URL address.
   *
   * The provided base URL value must either be a URL (with scheme) or an absolute path.
   * Note that certain URL schemes cannot be used as a base, e.g., `data` and `mailto`.
   */
  base_url?: string | null;
  /**
   * Basic authentication support. E.g. `http://example.com username:password`
   */
  basic_auth?: BasicAuthSelector[] | null;
  cache?: boolean | null;
  /**
   * A list of status codes that will be ignored from the cache
   *
   * The following exclude range syntax is supported: `[start]..[[=]end]|code`. Some valid
   * examples are:
   *
   * - 429 (excludes the 429 status code only)
   * - 500.. (excludes any status code >= 500)
   * - ..100 (excludes any status code < 100)
   * - 500..=599 (excludes any status code from 500 to 599 inclusive)
   * - 500..600 (excludes any status code from 500 to 600 excluding 600, same as 500..=599)
   *
   * Use `lychee --cache-exclude-status '429, 500..502' <inputs>...` to provide a
   * comma-separated list of excluded status codes. This example will not cache results
   * with a status code of 429, 500 and 501.
   */
  cache_exclude_status?: StatusCodeSelector | null;
  /**
   * Read and write cookies using the given file. Cookies will be stored in the
   * cookie jar and sent with requests. New cookies will be stored in the cookie jar
   * and existing cookies will be updated.
   */
  cookie_jar?: string | null;
  /**
   * This is the default file extension that is applied to files without an extension.
   *
   * This is useful for files without extensions or with unknown extensions.
   * The extension will be used to determine the file type for processing.
   *
   * Examples:
   *   --default-extension md
   *   --default-extension html
   */
  default_extension?: string | null;
  /**
   * Don't perform any link checking.
   * Instead, dump all the links extracted from inputs that would be checked
   */
  dump?: boolean | null;
  /**
   * Don't perform any link extraction and checking.
   * Instead, dump all input sources from which links would be collected
   */
  dump_inputs?: boolean | null;
  /**
   * Exclude URLs and mail addresses from checking.
   * The values are treated as regular expressions.
   */
  exclude?: string[];
  /**
   * Exclude all private IPs from checking.
   * Equivalent to `--exclude-private --exclude-link-local --exclude-loopback`
   */
  exclude_all_private?: boolean | null;
  /**
   * Deprecated. Read URL exclusion patterns from the specified files. Prefer .lycheeignore; use exclude_path to exclude input paths.
   */
  exclude_file?: string[];
  /**
   * Exclude link-local IP address range from checking
   */
  exclude_link_local?: boolean | null;
  /**
   * Exclude loopback IP address range and localhost from checking
   */
  exclude_loopback?: boolean | null;
  /**
   * Exclude paths from getting checked.
   * The values are treated as regular expressions.
   */
  exclude_path?: string[];
  /**
   * Exclude private IP address ranges from checking
   */
  exclude_private?: boolean | null;
  /**
   * A list of file extensions. Files not matching the specified extensions are skipped.
   *
   * Multiple extensions can be separated by commas. Note that if you want to check filetypes,
   * which have multiple extensions, e.g. HTML files with both .html and .htm extensions, you need to
   * specify both extensions explicitly.
   * An example is: `--extensions html,htm,php,asp,aspx,jsp,cgi`.
   *
   * This is useful when the default extensions are not enough and you don't
   * want to provide a long list of inputs (e.g. file1.html, file2.md, etc.)
   *
   * [default: md,mkd,mdx,mdown,mdwn,mkdn,mkdown,markdown,html,htm,css,txt,xml]
   */
  extensions?: string[] | null;
  /**
   * When checking locally, attempts to locate missing files by trying the given
   * fallback extensions. Multiple extensions can be separated by commas. Extensions
   * will be checked in order of appearance.
   *
   * Example: --fallback-extensions html,htm,php,asp,aspx,jsp,cgi
   *
   * Note: This option takes effect on `file://` URIs which do not exist and on
   *       `file://` URIs pointing to directories which resolve to themself (by the
   *       --index-files logic).
   */
  fallback_extensions?: string[];
  /**
   * Read input filenames from the given file or stdin (if path is '-').
   *
   * This is useful when you have a large number of inputs that would be
   * cumbersome to specify on the command line directly.
   *
   * Examples:
   *
   * ```text
   * lychee --files-from list.txt
   * find . -name '*.md' | lychee --files-from -
   * echo 'README.md' | lychee --files-from -
   * ```
   *
   * File Format:
   * - Each line should contain one input (file path, URL, or glob pattern).
   * - Lines starting with '#' are treated as comments and ignored.
   * - Empty lines are also ignored.
   */
  files_from?: string | null;
  /**
   * Output format of final status report
   *
   * [default: compact]
   */
  format?: StatsFormat | null;
  /**
   * Generate special output (e.g. the man page) instead of performing link checking
   */
  generate?: GenerateMode | null;
  /**
   * GitHub API token to use when checking github.com links, to avoid rate limiting
   */
  github_token?: string | null;
  /**
   * Ignore case when expanding filesystem path glob inputs
   */
  glob_ignore_case?: boolean | null;
  /**
   * Set custom header for requests.
   *
   * Some websites require custom headers to be passed in order to return valid responses.
   * You can specify custom headers in the format 'Name: Value'. For example, 'Accept: text/html'.
   * This is the same format that other tools like curl or wget use.
   * Multiple headers can be specified by using the flag multiple times.
   * The specified headers are used for ALL requests.
   * Use the `hosts` option to configure headers on a per-host basis.
   */
  header?: {
    [k: string]: string | undefined;
  };
  /**
   * Do not skip hidden directories and files.
   */
  hidden?: boolean | null;
  /**
   * Default maximum concurrent requests per host (default: 10)
   *
   * This limits the maximum amount of requests that are sent simultaneously
   * to the same host. This helps to prevent overwhelming servers and
   * running into rate-limits. Use the `hosts` option to configure this
   * on a per-host basis.
   *
   * Examples:
   *   --host-concurrency 2   # Conservative for slow APIs
   *   --host-concurrency 20  # Aggressive for fast APIs
   */
  host_concurrency?: number | null;
  /**
   * Minimum interval between requests to the same host (default: 50ms)
   *
   * Sets a baseline delay between consecutive requests to prevent
   * overloading servers. The adaptive algorithm may increase this based
   * on server responses (rate limits, errors). Use the `hosts` option
   * to configure this on a per-host basis.
   *
   * Examples:
   *   --host-request-interval 50ms   # Fast for robust APIs
   *   --host-request-interval 1s     # Conservative for rate-limited APIs
   */
  host_request_interval?: string | null;
  /**
   * Show per-host statistics at the end of the run
   */
  host_stats?: boolean | null;
  /**
   * Host-specific configurations from config file
   */
  hosts?: {
    [k: string]: HostConfig | undefined;
  };
  /**
   * URLs to check (supports regex). Has preference over all excludes.
   */
  include?: string[];
  /**
   * Enable the checking of fragments in links.
   *
   * Use `none` to disable fragment checks, `anchor-only` for anchor fragments
   * like `#section`, `text-only` for text fragments like `#:~:text=example`,
   * or `full` to check both.
   *
   * If provided without a value, defaults to `anchor-only`.
   *
   * Fragment checking does not work for every URL. In general, the target
   * content needs to be Markdown or HTML and follow common conventions.
   * Anchors that only appear after JavaScript execution may be missed, since
   * lychee does not run a browser engine.
   */
  include_fragments?: FragmentMode | null;
  /**
   * Also check email addresses
   */
  include_mail?: boolean | null;
  /**
   * Find links in verbatim sections like `pre`- and `code` blocks
   */
  include_verbatim?: boolean | null;
  /**
   * Check WikiLinks in Markdown files, this requires specifying --base-url
   */
  include_wikilinks?: boolean | null;
  /**
   * When checking locally, resolves directory links to a separate index file.
   * The argument is a comma-separated list of index file names to search for. Index
   * names are relative to the link's directory and attempted in the order given.
   *
   * If `--index-files` is specified, then at least one index file must exist in
   * order for a directory link to be considered valid. Additionally, the special
   * name `.` can be used in the list to refer to the directory itself.
   *
   * If unspecified (the default behavior), index files are disabled and directory
   * links are considered valid as long as the directory exists on disk.
   *
   * Example 1: `--index-files index.html,readme.md` looks for index.html or readme.md
   *            and requires that at least one exists.
   *
   * Example 2: `--index-files index.html,.` will use index.html if it exists, but
   *            still accept the directory link regardless.
   *
   * Example 3: `--index-files ''` will reject all directory links because there are
   *            no valid index files. This will require every link to explicitly name
   *            a file.
   *
   * Note: This option only takes effect on `file://` URIs which exist and point to a directory.
   */
  index_files?: string[] | null;
  /**
   * Proceed for server connections considered insecure (invalid TLS)
   */
  insecure?: boolean | null;
  /**
   * Discard all cached requests older than this duration
   *
   * [default: 1d]
   */
  max_cache_age?: string | null;
  /**
   * Maximum number of concurrent network requests
   *
   * [default: 128]
   */
  max_concurrency?: number | null;
  /**
   * Maximum number of allowed redirects
   *
   * [default: 10]
   */
  max_redirects?: number | null;
  /**
   * Maximum number of retries per request
   *
   * [default: 3]
   */
  max_retries?: number | null;
  /**
   * Request method. Must be a single HTTP method, not a list.
   *
   * [default: get]
   */
  method?: string | null;
  /**
   * Minimum accepted TLS Version
   */
  min_tls?: TlsVersion | null;
  /**
   * Set the output display mode. Determines how results are presented in the terminal
   *
   * [default: color]
   */
  mode?: OutputMode | null;
  /**
   * Do not skip files that would otherwise be ignored by
   * '.gitignore', '.ignore', or the global ignore file.
   */
  no_ignore?: boolean | null;
  /**
   * Do not show progress bar.
   * This is recommended for non-interactive shells (e.g. for continuous integration)
   */
  no_progress?: boolean | null;
  /**
   * Only check local files and block network requests.
   */
  offline?: boolean | null;
  /**
   * Output file of status report
   */
  output?: string | null;
  /**
   * Preprocess input files with the given command.
   *
   * For each file input, this flag causes lychee to execute `COMMAND PATH` and process
   * its standard output instead of the original contents of PATH. This allows you to
   * convert files that would otherwise not be understood by lychee. The preprocessor
   * COMMAND is only run on input files, not on standard input or URLs.
   *
   * To invoke programs with custom arguments or to use multiple preprocessors, use a
   * wrapper program such as a shell script. An example script looks like this:
   *
   * ```bash
   * #!/usr/bin/env bash
   * case "$1" in
   * *.pdf)
   *     exec pdftohtml -i -s -stdout "$1"
   *     ;;
   * *.odt|*.docx|*.epub|*.ipynb)
   *     exec pandoc "$1" --to=html --wrap=none
   *     ;;
   * *)
   *     # identity function, output input without changes
   *     exec cat
   *     ;;
   * esac
   * ```
   */
  preprocess?: Preprocessor | null;
  /**
   * Remap URI matching pattern to different URI
   */
  remap?: string[];
  /**
   * When HTTPS is available, treat HTTP links as errors
   */
  require_https?: boolean | null;
  /**
   * Minimum wait time in seconds between retries of failed requests
   *
   * [default: 1]
   */
  retry_wait_time?: number | null;
  /**
   * Root directory to use when checking absolute links in local files. This option is
   * required if absolute links appear in local files, otherwise those links will be
   * flagged as errors. This must be an absolute path (i.e., one beginning with `/`).
   *
   * If specified, absolute links in local files are resolved by prefixing the given
   * root directory to the requested absolute link. For example, with a root-dir of
   * `/root/dir`, a link to `/page.html` would be resolved to `/root/dir/page.html`.
   *
   * This option can be specified alongside `--base-url`. If both are given, an
   * absolute link is resolved by constructing a URL from three parts: the domain
   * name specified in `--base-url`, followed by the `--root-dir` directory path,
   * followed by the absolute link's own path.
   */
  root_dir?: string | null;
  /**
   * Only test links with the given schemes (e.g. https).
   * Omit to check links with any other scheme.
   * At the moment, we support http, https, file, and mailto.
   */
  scheme?: string[];
  /**
   * Skip missing input files (default is to error if they don't exist)
   */
  skip_missing?: boolean | null;
  /**
   * Suggest link replacements for broken links, using a web archive.
   * The web archive can be specified with `--archive`
   */
  suggest?: boolean | null;
  /**
   * Number of threads to utilize.
   * Defaults to number of cores available to the system
   */
  threads?: number | null;
  /**
   * Website timeout in seconds from connect to response finished
   *
   * [default: 20]
   */
  timeout?: number | null;
  /**
   * User agent
   *
   * [default: lychee/x.y.z]
   */
  user_agent?: string | null;
  /**
   * Verbose program output
   */
  verbose?: Verbosity | null;
}
/**
 * Per-host request settings accepted below the `hosts` table.
 */
export interface HostConfig {
  concurrency?: number | null;
  headers?: {
    [k: string]: string | undefined;
  };
  request_interval?: string | null;
}
/**
 * File-based preprocessor configuration.
 */
export interface Preprocessor {
  command: string;
  [k: string]: unknown | undefined;
}
