/* eslint-disable */

/**
 * The default connection to use
 */
export type DefaultConnection = string;
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
/**
 * Whether to save logs to a file
 */
export type SaveLogs = boolean;
/**
 * The level of logs to output
 */
export type Level = 'debug' | 'info' | 'warning' | 'error';
/**
 * specifies the absolute path to save the log files. The format of the path varies based on your operating system. If not specified, the command creates a logs directory in the default config.toml file location.
 */
export type Path = string;
/**
 * When this access is enabled, specified users can access Snowflake CLI but not the other Snowflake drivers.
 */
export type EnableSeparateAuthenticationPolicyID = boolean;

/**
 * Configuration for Snowflake
 */
export interface SnowflakeConfig {
  default_connection_name?: DefaultConnection;
  connections?: {
    [k: string]: SnowflakeConnectionConfiguration | undefined;
  };
  cli?: {
    logs?: Logs;
    features?: Features;
  };
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
/**
 * Configuration for logging
 */
export interface Logs {
  save_logs?: SaveLogs;
  level?: Level;
  path?: Path;
}
/**
 * Configuration for features
 */
export interface Features {
  enable_separate_authentication_policy_id?: EnableSeparateAuthenticationPolicyID;
}
