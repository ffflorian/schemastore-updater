/* eslint-disable */

/**
 * RC collection information
 */
export interface Rc3Collection {
  /**
   * The JSON schema to use for validation
   */
  $schema?: string;
  /**
   * The name of the collection
   */
  name?: string;
  /**
   * The current request in the collection
   */
  current_request?: string;
  /**
   * The current environment in the collection
   */
  current_environment?: string;
  auth?: Rc3Auth;
}
/**
 * RC auth that can be stored at Collection, Folder, or Request levels
 */
export interface Rc3Auth {
  /**
   * The type of authentication
   */
  type?: 'none' | 'token' | 'bearer' | 'basic' | 'inherit';
  /**
   * The HTTP Header name (for token auth type)
   */
  token_header?: string;
  /**
   * The HTTP Header value (for token auth type)
   */
  token_value?: string;
  /**
   * The bearer token (for bearer auth type)
   */
  bearer_token?: string;
  /**
   * The basic auth username
   */
  username?: string;
  /**
   * The basic auth password
   */
  password?: string;
}
