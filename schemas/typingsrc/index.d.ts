/* eslint-disable */

export interface JSONSchemaForTypingsrcFiles {
  /**
   * A string or array of strings of trusted certificates in PEM format
   */
  ca?: string[] | string;
  /**
   * Public x509 certificate to use
   */
  cert?: string;
  /**
   * Override the default installation source (e.g., when doing 'typings install debug')
   */
  defaultSource?: 'file' | 'npm' | 'github' | 'bitbucket' | 'bower' | 'http' | 'https';
  /**
   * Set your GitHub for resolving 'github:' locations
   */
  githubToken?: string;
  /**
   * The proxy to use for HTTP requests
   */
  httpProxy?: string;
  /**
   * The proxy to use for HTTPS requests
   */
  httpsProxy?: string;
  /**
   * Private key to use for SSL
   */
  key?: string;
  /**
   * A string of space-separated hosts to not proxy
   */
  noProxy?: string;
  /**
   * A HTTP(s) proxy URI for outgoing requests
   */
  proxy?: string;
  /**
   * Override the registry URL
   */
  registryURL?: string;
  /**
   * Reject invalid SSL certificates
   */
  rejectUnauthorized?: boolean;
  /**
   * Set the User-Agent for HTTP requests
   */
  userAgent?: string;
  [k: string]: unknown | undefined;
}
