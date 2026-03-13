/* eslint-disable */

export type StorageBackend =
  | InMemoryStorage
  | FileStorageBackend
  | RaftStorageBackend
  | ConsulStorageBackend
  | S3StorageBackend;

/**
 * A JSON schema for Vault's configuration file.
 * https://developer.hashicorp.com/vault/docs/configuration
 */
export interface VaultConfiguration {
  /**
   * Specifies the address (full URL) to advertise to other Vault servers in the cluster for client redirection. This can also be provided via the environment variable VAULT_API_ADDR.
   */
  api_addr?: string;
  /**
   * Specifies the size of the read cache used by the physical storage subsystem. The value is in number of entries, so the total cache size depends on the size of stored entries.
   */
  cache_size?: string;
  /**
   * Specifies the address to advertise to other Vault servers in the cluster for request forwarding. This can also be provided via the environment variable VAULT_CLUSTER_ADDR.
   */
  cluster_addr?: string;
  /**
   * Specifies a human-readable identifier for the Vault cluster. If omitted, Vault will generate a value.
   */
  cluster_name?: string;
  /**
   * Specifies the default lease duration for tokens and secrets. This is specified using a label suffix like '30s' or '1h'.
   */
  default_lease_ttl?: string;
  /**
   * Specifies the default maximum request duration allowed before Vault cancels the request.
   */
  default_max_request_duration?: string;
  /**
   * A comma separated string that specifies the internal mutex locks that should be monitored for potential deadlocks.
   */
  detect_deadlocks?: string;
  /**
   * Disables all caches within Vault, including the read cache used by the physical storage subsystem.
   */
  disable_cache?: boolean;
  /**
   * Specifies whether clustering features such as request forwarding are enabled.
   */
  disable_clustering?: boolean;
  /**
   * Stops Vault from executing the mlock syscall, which prevents memory from being swapped to disk. This can also be provided via the environment variable VAULT_DISABLE_MLOCK.
   */
  disable_mlock: boolean;
  ha_storage?: StorageBackend;
  /**
   * Enables the sys/internal/inspect endpoint which allows users with a root token or sudo privileges to inspect certain subsystems inside Vault.
   */
  introspection_endpoint?: boolean;
  listener: (TcpListener | UnixSocketListener)[];
  /**
   * Specifies the log verbosity level
   */
  log_level?: 'trace' | 'debug' | 'info' | 'warn' | 'error';
  /**
   * Specifies the maximum possible lease duration for tokens and secrets.
   */
  max_lease_ttl?: string;
  /**
   * Path to the file in which the Vault server's Process ID (PID) should be stored.
   */
  pid_file?: string;
  /**
   * A directory from which plugins are allowed to be loaded.
   */
  plugin_directory?: string;
  /**
   * Enables the sys/raw endpoint which allows the decryption/encryption of raw data into and out of the security barrier.
   */
  raw_storage_endpoint?: boolean;
  seal?: (AwsKmsSeal | AzureKeyVaultSeal | GcpCkmsSeal | Pkcs11Seal)[];
  storage: StorageBackend;
  telemetry?: {
    /**
     * Specifies the retention time for Prometheus metrics.
     */
    prometheus_retention_time?: string;
    /**
     * If true, the hostname will not be prefixed to metrics.
     */
    disable_hostname?: boolean;
    /**
     * The address of a DogStatsD agent.
     */
    dogstatsd_addr?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Enables the built-in web UI.
   */
  ui?: boolean;
  [k: string]: unknown | undefined;
}
export interface InMemoryStorage {
  /**
   * The In-Memory storage backend is used for storing all Vault data in-memory on the Vault node. It requires no other configuration.
   */
  inmemory: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface FileStorageBackend {
  file: {
    /**
     * The absolute path on disk to the directory where the data will be stored. If the directory does not exist, Vault will create it.
     */
    path: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface RaftStorageBackend {
  raft: {
    /**
     * The file system path where all the Vault data gets stored. This value can be overridden by setting the VAULT_RAFT_PATH environment variable.
     */
    path: string;
    /**
     * The identifier for the node in the Raft cluster. You can override node_id with the VAULT_RAFT_NODE_ID environment variable. When VAULT_RAFT_NODE_ID is unset, Vault assigns a random GUID during initialization and writes the value to data/node-id in the directory specified by the path parameter.
     */
    node_id?: string;
    /**
     * An integer multiplier used by servers to scale key Raft timing parameters. 1 = 1-2s delay, 3 = 3-6s delay. Default is 5. Max 10.
     */
    performance_multiplier?: number;
    /**
     * This controls how many log entries are left in the log store on disk after a snapshot is made. Default is 10000.
     */
    trailing_logs?: number;
    /**
     * This controls the minimum number of Raft commit entries between snapshots that are saved to disk. Default is 8192.
     */
    snapshot_threshold?: number;
    /**
     * The snapshot interval controls how often Raft checks whether a snapshot operation is required. Default is '120s'
     */
    snapshot_interval?: string;
    /**
     * This configures the maximum number of bytes for a Raft entry. Default is 1048576.
     */
    max_entry_size?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface ConsulStorageBackend {
  consul: {
    /**
     * Specifies the address of the Consul agent to communicate with. Default is '127.0.0.1:8500'
     */
    address?: string;
    /**
     * Specifies the path in Consul's key-value store where Vault data will be stored. Default is 'vault/'
     */
    path?: string;
    /**
     * Specifies the check interval used to send health check information back to Consul. Default is '5s'
     */
    check_timeout?: string;
    /**
     * Specifies the Consul consistency mode
     */
    consistency_mode?: 'default' | 'strong';
    /**
     * Specifies whether Vault should register itself with Consul. Default is false
     */
    disable_registration?: boolean;
    /**
     * Specifies the maximum number of concurrent requests to Consul. Default is '128'
     */
    max_parallel?: string;
    /**
     * Specifies the scheme to use when communicating with Consul
     */
    scheme?: 'http' | 'https';
    /**
     * Specifies the name of the service to register in Consul. Default is 'vault'
     */
    service?: string;
    /**
     * A comma-separated list of tags to attach to the service registration in Consul.
     */
    service_tags?: string;
    /**
     * Specifies a service-specific address to set on the service registration in Consul.
     */
    service_address?: string;
    /**
     * Specifies the Consul ACL token with permission to read and write from the path in Consul's key-value store.
     */
    token?: string;
    /**
     * Specifies the minimum allowed session TTL. Default is '15s'
     */
    session_ttl?: string;
    /**
     * Specifies the wait time before a lock acquisition is made. Default is '15s'
     */
    lock_wait_time?: string;
    /**
     * Specifies the path to the CA certificate used for Consul communication.
     */
    tls_ca_file?: string;
    /**
     * Specifies the path to the certificate for Consul communication.
     */
    tls_cert_file?: string;
    /**
     * Specifies the path to the private key for Consul communication.
     */
    tls_key_file?: string;
    /**
     * Specifies the minimum TLS version to use
     */
    tls_min_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13';
    /**
     * Disable verification of TLS certificates. Default is false.
     */
    tls_skip_verify?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface S3StorageBackend {
  s3: {
    /**
     * Specifies the name of the S3 bucket.
     */
    bucket: string;
    /**
     * Specifies an alternative, AWS compatible, S3 endpoint.
     */
    endpoint?: string;
    /**
     * Specifies the AWS region. Default is 'us-east-1'.
     */
    region?: string;
    /**
     * Specifies the AWS access key.
     */
    access_key?: string;
    /**
     * Specifies the AWS secret key.
     */
    secret_key?: string;
    /**
     * Specifies the AWS session token.
     */
    session_token?: string;
    /**
     * Specifies the maximum number of concurrent requests to S3. Default is '128'
     */
    max_parallel?: string;
    /**
     * Specifies whether to use host bucket style domains with the configured endpoint. Default is false.
     */
    s3_force_path_style?: boolean;
    /**
     * Specifies if SSL should be used for the endpoint connection. Default is false.
     */
    disable_ssl?: boolean;
    /**
     * Specifies the ID or Alias of the KMS key used to encrypt data in the S3 backend.
     */
    kms_key_id?: string;
    /**
     * Specifies the path in the S3 Bucket where Vault data will be stored.
     */
    path?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface TcpListener {
  tcp: {
    /**
     * Specifies the address to bind to for listening. Can be a go-sockaddr template.
     */
    address: string;
    /**
     * Specifies the address to bind to for cluster server-to-server requests. Defaults to one port higher than address.
     */
    cluster_address?: string;
    /**
     * Maximum request duration before Vault cancels the request.
     */
    max_request_duration?: string;
    /**
     * Maximum allowed request size in bytes.
     */
    max_request_size?: number;
    /**
     * Specifies if TLS will be disabled.
     */
    tls_disable?: boolean;
    /**
     * Path to the PEM-encoded certificate file for TLS.
     */
    tls_cert_file?: string;
    /**
     * Path to the PEM-encoded private key file for TLS.
     */
    tls_key_file?: string;
    /**
     * Minimum supported version of TLS
     */
    tls_min_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13';
    /**
     * Maximum supported version of TLS
     */
    tls_max_version?: 'tls10' | 'tls11' | 'tls12' | 'tls13';
    /**
     * PEM-encoded Certificate Authority file for client authentication.
     */
    tls_client_ca_file?: string;
    telemetry?: {
      /**
       * Allows unauthenticated access to the /v1/sys/metrics endpoint.
       */
      unauthenticated_metrics_access?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface UnixSocketListener {
  unix: {
    /**
     * Specifies the path to bind the Unix socket.
     */
    address: string;
    /**
     * Access permissions for the Unix socket.
     */
    socket_mode?: string;
    /**
     * User owner of the Unix socket.
     */
    socket_user?: string;
    /**
     * Group owner of the Unix socket.
     */
    socket_group?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AwsKmsSeal {
  awskms?: {
    /**
     * The AWS region.
     */
    region?: string;
    /**
     * The KMS key ID to use.
     */
    kms_key_id?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AzureKeyVaultSeal {
  azurekeyvault?: {
    /**
     * The Azure tenant ID.
     */
    tenant_id?: string;
    /**
     * The Azure client ID.
     */
    client_id?: string;
    /**
     * The Azure client secret.
     */
    client_secret?: string;
    /**
     * The Key Vault name.
     */
    vault_name?: string;
    /**
     * The key name to use.
     */
    key_name?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface GcpCkmsSeal {
  gcpckms?: {
    /**
     * The GCP project ID.
     */
    project?: string;
    /**
     * The GCP region.
     */
    region?: string;
    /**
     * The KMS key ring.
     */
    key_ring?: string;
    /**
     * The KMS crypto key.
     */
    crypto_key?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Pkcs11Seal {
  pkcs11?: {
    /**
     * The path to the PKCS#11 library.
     */
    lib: string;
    /**
     * The slot number to use.
     */
    slot: string;
    /**
     * The user PIN.
     */
    pin: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
