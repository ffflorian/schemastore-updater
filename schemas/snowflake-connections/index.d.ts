/* eslint-disable */

/**
 * The Snowflake account identifier
 */
export type AccountIdentifier = string;
/**
 * The username to authenticate with Snowflake
 */
export type Username = string;
/**
 * The password for authentication with Snowflake
 */
export type Password = string;
/**
 * The name of the Snowflake warehouse to use for queries
 */
export type Warehouse = string;
/**
 * The name of the Snowflake database to connect to
 */
export type Database = string;
/**
 * The name of the database schema to use
 */
export type Schema = string;
/**
 * The name of the Snowflake role to use
 */
export type Role = string;
/**
 * The name of the Snowflake authenticator to use
 */
export type Authenticator =
  | 'externalbrowser'
  | 'id_token'
  | 'no_auth'
  | 'oauth'
  | 'oauth_client_credentials'
  | 'oauth_authorization_code'
  | 'okta'
  | 'programmatic_access_token'
  | 'snowflake_jwt'
  | 'snowflake'
  | 'tokenaccessor'
  | 'username_password_mfa'
  | 'workload_identity';
/**
 * The path to the private key file for the Snowflake JWT Authentication
 */
export type PrivateKeyFileForJWTAuthentication = string;
/**
 * The password for the private key file for the Snowflake JWT Authentication
 */
export type PrivateKeyFilePasswordForJWTAuthentication = string;
/**
 * The path to the private key file for the Snowflake Key Pair Authentication
 */
export type PrivateKeyPathForKeyPairAuthentication = string;
/**
 * The passphrase for the private key file for the Snowflake Key Pair Authentication
 */
export type PrivateKeyPassphraseForKeyPairAuthentication = string;
/**
 * The path to the token file for the Snowflake OAuth Authentication
 */
export type TokenFilePathForOAuth = string;
/**
 * The workload identity provider to use for WIF authentication
 */
export type WorkloadIdentityProvider = 'azure' | 'aws' | 'gcp' | 'oidc';
/**
 * e resource to use for WIF authentication on Azure environment
 */
export type WorkloadIdentityEntraResource = string;

export interface HttpsJsonSchemastoreOrgSnowflakeConnectionsJson {
  default?: DefaultConnection;
  [k: string]: SnowflakeConnectionConfiguration | undefined;
}
/**
 * The default connection to use
 */
export interface DefaultConnection {
  account?: AccountIdentifier;
  user?: Username;
  password?: Password;
  warehouse?: Warehouse;
  database?: Database;
  schema?: Schema;
  role?: Role;
  authenticator?: Authenticator;
  private_key_file?: PrivateKeyFileForJWTAuthentication;
  private_key_file_pwd?: PrivateKeyFilePasswordForJWTAuthentication;
  private_key_path?: PrivateKeyPathForKeyPairAuthentication;
  private_key_passphrase?: PrivateKeyPassphraseForKeyPairAuthentication;
  token_file_path?: TokenFilePathForOAuth;
  workload_identity_provider?: WorkloadIdentityProvider;
  workload_identity_entra_resource?: WorkloadIdentityEntraResource;
  [k: string]: unknown | undefined;
}
/**
 * Configuration settings for connecting to a Snowflake database instance
 */
export interface SnowflakeConnectionConfiguration {
  account?: AccountIdentifier;
  user?: Username;
  password?: Password;
  warehouse?: Warehouse;
  database?: Database;
  schema?: Schema;
  role?: Role;
  authenticator?: Authenticator;
  private_key_file?: PrivateKeyFileForJWTAuthentication;
  private_key_file_pwd?: PrivateKeyFilePasswordForJWTAuthentication;
  private_key_path?: PrivateKeyPathForKeyPairAuthentication;
  private_key_passphrase?: PrivateKeyPassphraseForKeyPairAuthentication;
  token_file_path?: TokenFilePathForOAuth;
  workload_identity_provider?: WorkloadIdentityProvider;
  workload_identity_entra_resource?: WorkloadIdentityEntraResource;
  [k: string]: unknown | undefined;
}
