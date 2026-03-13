/* eslint-disable */

/**
 * RC settings stored in the users RC_HOME directory
 */
export interface Rc3Settings {
  /**
   * The JSON schema to use for validation
   */
  $schema?: string;
  /**
   * Whether to save .response files in the same dir as the .request file
   */
  save_responses?: boolean;
  /**
   * Timeout for requests in seconds
   */
  request_timeout_seconds?: number;
  /**
   * Indentation width for JSON output
   */
  indent?: number;
  /**
   * Indentation type for JSON output
   */
  indent_type?: 'space' | 'tab';
  /**
   * Whether to send no-cache headers
   */
  headers_send_nocache?: boolean;
  /**
   * Whether to follow redirects
   */
  follow_redirects?: boolean;
  /**
   * Whether to verify SSL certificates
   */
  ca_cert_verification?: boolean;
  /**
   * Path to Python-like CA truststore file
   */
  ca_bundle?: string;
  /**
   * The current collection
   */
  current_collection?: string;
  /**
   * The list of collections (each collection should be an absolute path to the collection root directory)
   */
  collections?: CollectionRef[];
}
export interface CollectionRef {
  name?: string;
  location?: string;
}
