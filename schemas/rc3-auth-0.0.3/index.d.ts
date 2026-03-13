/* eslint-disable */

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
