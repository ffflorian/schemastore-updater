/* eslint-disable */

export type GlobList = string[];

/**
 * Configuration file for Vercel's serve static file server (serve.json)
 */
export interface ServeJson {
  /**
   * Serve .html files without the extension, and redirect requests that include it. Use an array of glob patterns to limit this to matching paths.
   */
  cleanUrls?: boolean | GlobList;
  /**
   * Show a directory listing when a directory has no index file. Use an array of glob patterns to limit listings to matching paths.
   */
  directoryListing?: boolean | GlobList;
  /**
   * Send an ETag header calculated from the file contents instead of a Last-Modified header.
   */
  etag?: boolean;
  /**
   * Custom response headers for paths matching a source pattern.
   *
   * @minItems 1
   * @maxItems 50
   */
  headers?: [
    {
      /**
       * @minItems 1
       * @maxItems 50
       */
      headers: [
        {
          key: string;
          value: string;
        },
        ...{
          key: string;
          value: string;
        }[]
      ];
      /**
       * Glob pattern matched against the request path.
       */
      source: string;
    },
    ...{
      /**
       * @minItems 1
       * @maxItems 50
       */
      headers: [
        {
          key: string;
          value: string;
        },
        ...{
          key: string;
          value: string;
        }[]
      ];
      /**
       * Glob pattern matched against the request path.
       */
      source: string;
    }[]
  ];
  /**
   * Directory to serve, relative to the configuration file. Defaults to the current working directory.
   */
  public?: string;
  /**
   * HTTP redirects applied before rewrites.
   */
  redirects?: {
    /**
     * Target URL or path. Supports path segment placeholders from the source.
     */
    destination: string;
    /**
     * Path pattern to match. Supports glob and path-to-regexp placeholders.
     */
    source: string;
    /**
     * HTTP status code of the redirect. Defaults to 301.
     */
    type?: number;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Serve a lone file in the directory at the root path instead of a directory listing.
   */
  renderSingle?: boolean;
  /**
   * Rewrite matching request paths to another path without changing the URL.
   */
  rewrites?: {
    /**
     * Path to serve instead. Supports path segment placeholders from the source.
     */
    destination: string;
    /**
     * Path pattern to match. Supports glob and path-to-regexp placeholders.
     */
    source: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Resolve symlinks and serve the target file instead of returning a 404.
   */
  symlinks?: boolean;
  /**
   * Force (true) or remove (false) a trailing slash on request paths. Unset leaves paths as requested.
   */
  trailingSlash?: boolean;
  unlisted?: GlobList;
  [k: string]: unknown | undefined;
}
