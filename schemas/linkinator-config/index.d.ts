/* eslint-disable */

export interface JSONSchemaForLinkinator {
  /**
   * The number of connections to make simultaneously.
   */
  concurrency?: number;
  /**
   * The config file path.
   */
  config?: string;
  /**
   * By default, all scans are shallow. Only the top level links on the requested page will be scanned. By setting recurse to true, the crawler will follow all links on the page, and continue scanning links on the same domain for as long as it can go. Results are cached, so no worries about loops.
   */
  recurse?: boolean;
  /**
   * List of urls in regexy form to not include in the check.
   */
  skip?: string | string[];
  /**
   * Return the data in CSV or JSON format.
   */
  format?: 'json' | 'text' | 'csv';
  /**
   * If true, does not show links
   */
  silent?: boolean;
  /**
   * The output verbosity
   */
  verbosity?: string;
  /**
   * By default, requests made by linkinator do not time out (or follow the settings of the OS). This option (in milliseconds) will fail requests after the configured amount of time.
   */
  timeout?: number & string;
  /**
   * Automatically parse and scan markdown if scanning from a location on disk.
   */
  markdown?: boolean;
  /**
   * When scanning a locally directory, customize the location on disk where the server is started. Defaults to the path passed in path.
   */
  serverRoot?: string;
  /**
   * Automatically serve a static file listing page when serving a directory. Defaults to false.
   */
  directoryListing?: boolean;
  /**
   * Automatically retry requests that respond with an HTTP 429, and include a retry-after header. The RetryConfig option is a placeholder for fine-grained controls to be implemented at a later time, and is only included here to signal forward-compatibility.
   */
  retry?:
    | boolean
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Automatically retry requests that return 5xx or unknown response.
   */
  retryErrors?: boolean;
  /**
   * How many times should an error be retried?
   */
  retryErrorsCount?: number;
  /**
   * Random jitter applied to error retry.
   */
  retryErrorsJitter?: number;
  /**
   * Collection of objects that contain a search pattern, and replacement.
   */
  urlRewriteExpressions?: unknown[];
  [k: string]: unknown | undefined;
}
