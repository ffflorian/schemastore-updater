/* eslint-disable */

/**
 * RC request information
 */
export interface Rc3Request {
  /**
   * The JSON schema to use for validation
   */
  $schema?: string;
  /**
   * A comment to provide documentation for this request
   */
  comment?: string;
  /**
   * The HTTP method to use for this request
   */
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'HEAD' | 'OPTIONS';
  /**
   * The URL to use for this request
   */
  url?: string;
  params?: Nvp;
  form_data?: Nvp1;
  auth?: Rc3Auth;
  headers?: Nvp2;
  /**
   * The body of the request
   */
  body?: {
    text?: string;
    json?: {
      [k: string]: unknown | undefined;
    };
  };
  /**
   * Whether to save .response files in the same dir as the .request file
   */
  save_responses?: boolean;
  /**
   * JSON node, or Text pattern (with regex group) to extract from response
   */
  extract?: {
    /**
     * A JSON Path expression to extract a single field from JSON
     */
    json_path?: string;
    /**
     * A Python regex pattern with a single REGEX GROUP to be extracted from the response
     */
    text_pattern?: string;
    /**
     * Choose to store the extracted field in either the global env (default), or currently selected env from your collection
     */
    env?: 'global' | 'current';
    /**
     * The var name (default is token) in the environment to store the extracted value in
     */
    var?: string;
  };
}
/**
 * The query parameters to send with this request
 */
export interface Nvp {
  name?: string;
  [k: string]: string | undefined;
}
/**
 * Form x-www-form-urlencoded data to pass in the request body
 */
export interface Nvp1 {
  name?: string;
  [k: string]: string | undefined;
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
/**
 * The HTTP headers to send with this request
 */
export interface Nvp2 {
  name?: string;
  [k: string]: string | undefined;
}
