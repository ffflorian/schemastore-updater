/* eslint-disable */

export interface JSONSchemaForTsdrcFiles {
  /**
   * Enabled by default, setting this option to false disables strict SSL. Passed to request package. Useful behind (corporate) proxies that act like man-in-the middle on https connections.
   */
  strictSSL?: boolean;
  /**
   * Any standard http-proxy as supported by the request package.
   */
  proxy?: string;
  /**
   * The OAuth token can be used to boost the GitHub API rate-limit from 60 to 5000 (non-cached) requests per hour. The is token needs just 'read-only access to public information' so no additional OAuth scopes are necessary.
   */
  token?: string;
  [k: string]: unknown | undefined;
}
