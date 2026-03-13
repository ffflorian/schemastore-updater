/* eslint-disable */

export type Loki = {
  /**
   * A comma-separated list of components to run. The default value 'all' runs Loki in single binary mode. The value 'read' is an alias to run only read-path related components such as the querier and query-frontend, but all in the same process. The value 'write' is an alias to run only write-path related components such as the distributor and compactor, but all in the same process. Supported values: all, compactor, distributor, ingester, querier, query-scheduler, ingester-querier, query-frontend, index-gateway, ruler, table-manager, read, write. A full list of available targets can be printed when running Loki with the '-list-targets' command line flag.
   */
  target?: string;
  /**
   * Enables authentication through the X-Scope-OrgID header, which must be present if true. If false, the OrgID will always be set to 'fake'.
   */
  auth_enabled?: boolean;
  /**
   * The amount of virtual memory in bytes to reserve as ballast in order to optimize garbage collection. Larger ballasts result in fewer garbage collection passes, reducing CPU overhead at the cost of heap size. The ballast will not consume physical memory, because it is never read from. It will, however, distort metrics, because it is counted as live memory. Default: 0.
   */
  ballast_bytes?: number;
  server?: Server;
  distributor?: Distributor;
  querier?: Querier;
  query_scheduler?: QueryScheduler;
  frontend?: Frontend;
  query_range?: QueryRange;
  ruler?: Ruler;
  ingester_client?: IngesterClient;
  ingester?: Ingester;
  pattern_ingester?: {
    /**
     * Whether the pattern ingester is enabled.
     */
    enabled?: boolean;
    /**
     * Configures how the lifecycle of the pattern ingester will operate and where it will register for discovery.
     */
    lifecycler?: {
      ring?: {
        kvstore?: {
          /**
           * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
           */
          store?: string;
          /**
           * The prefix for the keys in the store. Should end with a /.
           */
          prefix?: string;
          consul?: Consul4;
          etcd?: Etcd4;
          multi?: {
            /**
             * Primary backend storage used by multi-client.
             */
            primary?: string;
            /**
             * Secondary backend storage used by multi-client.
             */
            secondary?: string;
            /**
             * Mirror writes to secondary store.
             */
            mirror_enabled?: boolean;
            /**
             * Timeout for storing value to secondary store.
             */
            mirror_timeout?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        /**
         * The heartbeat timeout after which ingesters are skipped for reads/writes. 0 = never (timeout disabled).
         */
        heartbeat_timeout?: string;
        /**
         * The number of ingesters to write to and read from. Default: 1.
         */
        replication_factor?: number;
        /**
         * True to enable the zone-awareness and replicate ingested samples across different availability zones.
         */
        zone_awareness_enabled?: boolean;
        /**
         * Comma-separated list of zones to exclude from the ring. Instances in excluded zones will be filtered out from the ring.
         */
        excluded_zones?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Number of tokens for each ingester. Default: 128.
       */
      num_tokens?: number;
      /**
       * Period at which to heartbeat to consul. 0 = disabled.
       */
      heartbeat_period?: string;
      /**
       * Heartbeat timeout after which instance is assumed to be unhealthy. 0 = disabled.
       */
      heartbeat_timeout?: string;
      /**
       * Observe tokens after generating to resolve collisions. Useful when using gossiping ring.
       */
      observe_period?: string;
      /**
       * Period to wait for a claim from another member; will join automatically after this.
       */
      join_after?: string;
      /**
       * Minimum duration to wait after the internal readiness checks have passed but before succeeding the readiness endpoint. This is used to slowdown deployment controllers (eg. Kubernetes) after an instance is ready and before they proceed with a rolling update, to give the rest of the cluster instances enough time to receive ring updates.
       */
      min_ready_duration?: string;
      /**
       * Name of network interface to read address from.
       */
      interface_names?: string[] | null;
      /**
       * Enable IPv6 support. Required to make use of IP addresses from IPv6 interfaces.
       */
      enable_inet6?: boolean;
      /**
       * Duration to sleep for before exiting, to ensure metrics are scraped.
       */
      final_sleep?: string;
      /**
       * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
       */
      tokens_file_path?: string;
      /**
       * The availability zone where this instance is running.
       */
      availability_zone?: string;
      /**
       * Unregister from the ring upon clean shutdown. It can be useful to disable for rolling restarts with consistent naming in conjunction with -distributor.extend-writes=false.
       */
      unregister_on_shutdown?: boolean;
      /**
       * When enabled the readiness probe succeeds only after all instances are ACTIVE and healthy in the ring, otherwise only the instance itself is checked. This option should be disabled if in your cluster multiple instances can be rolled out simultaneously, otherwise rolling updates may be slowed down.
       */
      readiness_check_ring_health?: boolean;
      /**
       * IP address to advertise in the ring.
       */
      address?: string;
      /**
       * port to advertise in consul (defaults to server.grpc-listen-port). Default: 0.
       */
      port?: number;
      /**
       * ID to register in the ring.
       */
      id?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Configures how the pattern ingester will connect to the ingesters.
     */
    client_config?: {
      /**
       * Configures how connections are pooled.
       */
      pool_config?: {
        /**
         * How frequently to clean up clients for ingesters that have gone away.
         */
        client_cleanup_period?: string;
        /**
         * Run a health check on each ingester client during periodic cleanup.
         */
        health_check_ingesters?: boolean;
        /**
         * Timeout for the health check.
         */
        remote_timeout?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * The remote request timeout on the client side.
       */
      remote_timeout?: string;
      grpc_client_config?: GrpcClient4;
      [k: string]: unknown | undefined;
    };
    /**
     * How many flushes can happen concurrently from each stream. Default: 32.
     */
    concurrent_flushes?: number;
    /**
     * How often should the ingester see if there are any blocks to flush. The first flush check is delayed by a random time up to 0.8x the flush check period. Additionally, there is +/- 1% jitter added to the interval.
     */
    flush_check_period?: string;
    [k: string]: unknown | undefined;
  };
  index_gateway?: IndexGateway;
  bloom_compactor?: BloomCompactor;
  bloom_gateway?: BloomGateway;
  storage_config?: StorageConfig;
  chunk_store_config?: ChunkStoreConfig;
  schema_config?: SchemaConfig;
  compactor?: Compactor;
  compactor_grpc_client?: {
    /**
     * gRPC client max receive message size (bytes). Default: 104857600.
     */
    max_recv_msg_size?: number;
    /**
     * gRPC client max send message size (bytes). Default: 104857600.
     */
    max_send_msg_size?: number;
    /**
     * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
     */
    grpc_compression?: string;
    /**
     * Rate limit for gRPC client; 0 means disabled. Default: 0.
     */
    rate_limit?: number;
    /**
     * Rate limit burst for gRPC client. Default: 0.
     */
    rate_limit_burst?: number;
    /**
     * Enable backoff and retry when we hit rate limits.
     */
    backoff_on_ratelimits?: boolean;
    backoff_config?: {
      /**
       * Minimum delay when backing off.
       */
      min_period?: string;
      /**
       * Maximum delay when backing off.
       */
      max_period?: string;
      /**
       * Number of times to backoff and retry before failing. Default: 10.
       */
      max_retries?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
     */
    initial_stream_window_size?: string;
    /**
     * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
     */
    initial_connection_window_size?: string;
    /**
     * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    /**
     * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
     */
    connect_timeout?: string;
    /**
     * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
     */
    connect_backoff_base_delay?: string;
    /**
     * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
     */
    connect_backoff_max_delay?: string;
    [k: string]: unknown | undefined;
  };
  limits_config?: LimitsConfig;
  frontend_worker?: FrontendWorker;
  table_manager?: TableManager;
  memberlist?: Memberlist;
  runtime_config?: RuntimeConfig;
  operational_config?: OperationalConfig;
  tracing?: Tracing;
  analytics?: Analytics;
  common?: Common;
  /**
   * How long to wait between SIGTERM and shutdown. After receiving SIGTERM, Loki will report 503 Service Unavailable status via /ready endpoint.
   */
  shutdown_delay?: string;
  /**
   * Namespace of the metrics that in previous releases had cortex as namespace. This setting is deprecated and will be removed in the next minor release.
   */
  metrics_namespace?: string;
} & ({
  /**
   * A comma-separated list of components to run. The default value 'all' runs Loki in single binary mode. The value 'read' is an alias to run only read-path related components such as the querier and query-frontend, but all in the same process. The value 'write' is an alias to run only write-path related components such as the distributor and compactor, but all in the same process. Supported values: all, compactor, distributor, ingester, querier, query-scheduler, ingester-querier, query-frontend, index-gateway, ruler, table-manager, read, write. A full list of available targets can be printed when running Loki with the '-list-targets' command line flag.
   */
  target?: string;
  /**
   * Enables authentication through the X-Scope-OrgID header, which must be present if true. If false, the OrgID will always be set to 'fake'.
   */
  auth_enabled?: boolean;
  /**
   * The amount of virtual memory in bytes to reserve as ballast in order to optimize garbage collection. Larger ballasts result in fewer garbage collection passes, reducing CPU overhead at the cost of heap size. The ballast will not consume physical memory, because it is never read from. It will, however, distort metrics, because it is counted as live memory. Default: 0.
   */
  ballast_bytes?: number;
  server?: Server;
  distributor?: Distributor;
  querier?: Querier;
  query_scheduler?: QueryScheduler;
  frontend?: Frontend;
  query_range?: QueryRange;
  ruler?: Ruler;
  ingester_client?: IngesterClient;
  ingester?: Ingester;
  pattern_ingester?: {
    /**
     * Whether the pattern ingester is enabled.
     */
    enabled?: boolean;
    /**
     * Configures how the lifecycle of the pattern ingester will operate and where it will register for discovery.
     */
    lifecycler?: {
      ring?: {
        kvstore?: {
          /**
           * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
           */
          store?: string;
          /**
           * The prefix for the keys in the store. Should end with a /.
           */
          prefix?: string;
          consul?: Consul4;
          etcd?: Etcd4;
          multi?: {
            /**
             * Primary backend storage used by multi-client.
             */
            primary?: string;
            /**
             * Secondary backend storage used by multi-client.
             */
            secondary?: string;
            /**
             * Mirror writes to secondary store.
             */
            mirror_enabled?: boolean;
            /**
             * Timeout for storing value to secondary store.
             */
            mirror_timeout?: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        /**
         * The heartbeat timeout after which ingesters are skipped for reads/writes. 0 = never (timeout disabled).
         */
        heartbeat_timeout?: string;
        /**
         * The number of ingesters to write to and read from. Default: 1.
         */
        replication_factor?: number;
        /**
         * True to enable the zone-awareness and replicate ingested samples across different availability zones.
         */
        zone_awareness_enabled?: boolean;
        /**
         * Comma-separated list of zones to exclude from the ring. Instances in excluded zones will be filtered out from the ring.
         */
        excluded_zones?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * Number of tokens for each ingester. Default: 128.
       */
      num_tokens?: number;
      /**
       * Period at which to heartbeat to consul. 0 = disabled.
       */
      heartbeat_period?: string;
      /**
       * Heartbeat timeout after which instance is assumed to be unhealthy. 0 = disabled.
       */
      heartbeat_timeout?: string;
      /**
       * Observe tokens after generating to resolve collisions. Useful when using gossiping ring.
       */
      observe_period?: string;
      /**
       * Period to wait for a claim from another member; will join automatically after this.
       */
      join_after?: string;
      /**
       * Minimum duration to wait after the internal readiness checks have passed but before succeeding the readiness endpoint. This is used to slowdown deployment controllers (eg. Kubernetes) after an instance is ready and before they proceed with a rolling update, to give the rest of the cluster instances enough time to receive ring updates.
       */
      min_ready_duration?: string;
      /**
       * Name of network interface to read address from.
       */
      interface_names?: string[] | null;
      /**
       * Enable IPv6 support. Required to make use of IP addresses from IPv6 interfaces.
       */
      enable_inet6?: boolean;
      /**
       * Duration to sleep for before exiting, to ensure metrics are scraped.
       */
      final_sleep?: string;
      /**
       * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
       */
      tokens_file_path?: string;
      /**
       * The availability zone where this instance is running.
       */
      availability_zone?: string;
      /**
       * Unregister from the ring upon clean shutdown. It can be useful to disable for rolling restarts with consistent naming in conjunction with -distributor.extend-writes=false.
       */
      unregister_on_shutdown?: boolean;
      /**
       * When enabled the readiness probe succeeds only after all instances are ACTIVE and healthy in the ring, otherwise only the instance itself is checked. This option should be disabled if in your cluster multiple instances can be rolled out simultaneously, otherwise rolling updates may be slowed down.
       */
      readiness_check_ring_health?: boolean;
      /**
       * IP address to advertise in the ring.
       */
      address?: string;
      /**
       * port to advertise in consul (defaults to server.grpc-listen-port). Default: 0.
       */
      port?: number;
      /**
       * ID to register in the ring.
       */
      id?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Configures how the pattern ingester will connect to the ingesters.
     */
    client_config?: {
      /**
       * Configures how connections are pooled.
       */
      pool_config?: {
        /**
         * How frequently to clean up clients for ingesters that have gone away.
         */
        client_cleanup_period?: string;
        /**
         * Run a health check on each ingester client during periodic cleanup.
         */
        health_check_ingesters?: boolean;
        /**
         * Timeout for the health check.
         */
        remote_timeout?: string;
        [k: string]: unknown | undefined;
      };
      /**
       * The remote request timeout on the client side.
       */
      remote_timeout?: string;
      grpc_client_config?: GrpcClient4;
      [k: string]: unknown | undefined;
    };
    /**
     * How many flushes can happen concurrently from each stream. Default: 32.
     */
    concurrent_flushes?: number;
    /**
     * How often should the ingester see if there are any blocks to flush. The first flush check is delayed by a random time up to 0.8x the flush check period. Additionally, there is +/- 1% jitter added to the interval.
     */
    flush_check_period?: string;
    [k: string]: unknown | undefined;
  };
  index_gateway?: IndexGateway;
  bloom_compactor?: BloomCompactor;
  bloom_gateway?: BloomGateway;
  storage_config?: StorageConfig;
  chunk_store_config?: ChunkStoreConfig;
  schema_config?: SchemaConfig;
  compactor?: Compactor;
  compactor_grpc_client?: {
    /**
     * gRPC client max receive message size (bytes). Default: 104857600.
     */
    max_recv_msg_size?: number;
    /**
     * gRPC client max send message size (bytes). Default: 104857600.
     */
    max_send_msg_size?: number;
    /**
     * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
     */
    grpc_compression?: string;
    /**
     * Rate limit for gRPC client; 0 means disabled. Default: 0.
     */
    rate_limit?: number;
    /**
     * Rate limit burst for gRPC client. Default: 0.
     */
    rate_limit_burst?: number;
    /**
     * Enable backoff and retry when we hit rate limits.
     */
    backoff_on_ratelimits?: boolean;
    backoff_config?: {
      /**
       * Minimum delay when backing off.
       */
      min_period?: string;
      /**
       * Maximum delay when backing off.
       */
      max_period?: string;
      /**
       * Number of times to backoff and retry before failing. Default: 10.
       */
      max_retries?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
     */
    initial_stream_window_size?: string;
    /**
     * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
     */
    initial_connection_window_size?: string;
    /**
     * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    /**
     * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
     */
    connect_timeout?: string;
    /**
     * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
     */
    connect_backoff_base_delay?: string;
    /**
     * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
     */
    connect_backoff_max_delay?: string;
    [k: string]: unknown | undefined;
  };
  limits_config?: LimitsConfig;
  frontend_worker?: FrontendWorker;
  table_manager?: TableManager;
  memberlist?: Memberlist;
  runtime_config?: RuntimeConfig;
  operational_config?: OperationalConfig;
  tracing?: Tracing;
  analytics?: Analytics;
  common?: Common;
  /**
   * How long to wait between SIGTERM and shutdown. After receiving SIGTERM, Loki will report 503 Service Unavailable status via /ready endpoint.
   */
  shutdown_delay?: string;
  /**
   * Namespace of the metrics that in previous releases had cortex as namespace. This setting is deprecated and will be removed in the next minor release.
   */
  metrics_namespace?: string;
} | null);

/**
 * Configures the server of the launched module(s).
 */
export interface Server {
  /**
   * HTTP server listen network, default tcp
   */
  http_listen_network?: string;
  /**
   * HTTP server listen address.
   */
  http_listen_address?: string;
  /**
   * HTTP server listen port. Default: 3100.
   */
  http_listen_port?: number;
  /**
   * Maximum number of simultaneous http connections, <=0 to disable. Default: 0.
   */
  http_listen_conn_limit?: number;
  /**
   * gRPC server listen network
   */
  grpc_listen_network?: string;
  /**
   * gRPC server listen address.
   */
  grpc_listen_address?: string;
  /**
   * gRPC server listen port. Default: 9095.
   */
  grpc_listen_port?: number;
  /**
   * Maximum number of simultaneous grpc connections, <=0 to disable. Default: 0.
   */
  grpc_listen_conn_limit?: number;
  /**
   * Comma-separated list of cipher suites to use. If blank, the default Go cipher suites is used.
   */
  tls_cipher_suites?: string;
  /**
   * Minimum TLS version to use. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13. If blank, the Go TLS minimum version is used.
   */
  tls_min_version?: string;
  http_tls_config?: {
    /**
     * Server TLS certificate. This configuration parameter is YAML only.
     */
    cert?: string;
    /**
     * Server TLS key. This configuration parameter is YAML only.
     */
    key?: string;
    /**
     * Root certificate authority used to verify client certificates. This configuration parameter is YAML only.
     */
    client_ca?: string;
    /**
     * HTTP server cert path.
     */
    cert_file?: string;
    /**
     * HTTP server key path.
     */
    key_file?: string;
    /**
     * HTTP TLS Client Auth type.
     */
    client_auth_type?: string;
    /**
     * HTTP TLS Client CA path.
     */
    client_ca_file?: string;
    [k: string]: unknown | undefined;
  };
  grpc_tls_config?: {
    /**
     * Server TLS certificate. This configuration parameter is YAML only.
     */
    cert?: string;
    /**
     * Server TLS key. This configuration parameter is YAML only.
     */
    key?: string;
    /**
     * Root certificate authority used to verify client certificates. This configuration parameter is YAML only.
     */
    client_ca?: string;
    /**
     * GRPC TLS server cert path.
     */
    cert_file?: string;
    /**
     * GRPC TLS server key path.
     */
    key_file?: string;
    /**
     * GRPC TLS Client Auth type.
     */
    client_auth_type?: string;
    /**
     * GRPC TLS Client CA path.
     */
    client_ca_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Register the instrumentation handlers (/metrics etc).
   */
  register_instrumentation?: boolean;
  /**
   * If set to true, gRPC statuses will be reported in instrumentation labels with their string representations. Otherwise, they will be reported as "error".
   */
  report_grpc_codes_in_instrumentation_label_enabled?: boolean;
  /**
   * Timeout for graceful shutdowns
   */
  graceful_shutdown_timeout?: string;
  /**
   * Read timeout for entire HTTP request, including headers and body.
   */
  http_server_read_timeout?: string;
  /**
   * Read timeout for HTTP request headers. If set to 0, value of -server.http-read-timeout is used.
   */
  http_server_read_header_timeout?: string;
  /**
   * Write timeout for HTTP server
   */
  http_server_write_timeout?: string;
  /**
   * Idle timeout for HTTP server
   */
  http_server_idle_timeout?: string;
  /**
   * Log closed connections that did not receive any response, most likely because client didn't send any request within timeout.
   */
  http_log_closed_connections_without_response_enabled?: boolean;
  /**
   * Limit on the size of a gRPC message this server can receive (bytes). Default: 4194304.
   */
  grpc_server_max_recv_msg_size?: number;
  /**
   * Limit on the size of a gRPC message this server can send (bytes). Default: 4194304.
   */
  grpc_server_max_send_msg_size?: number;
  /**
   * Limit on the number of concurrent streams for gRPC calls per client connection (0 = unlimited). Default: 100.
   */
  grpc_server_max_concurrent_streams?: number;
  /**
   * The duration after which an idle connection should be closed. Default: infinity
   */
  grpc_server_max_connection_idle?: string;
  /**
   * The duration for the maximum amount of time a connection may exist before it will be closed. Default: infinity
   */
  grpc_server_max_connection_age?: string;
  /**
   * An additive period after max-connection-age after which the connection will be forcibly closed. Default: infinity
   */
  grpc_server_max_connection_age_grace?: string;
  /**
   * Duration after which a keepalive probe is sent in case of no activity over the connection., Default: 2h
   */
  grpc_server_keepalive_time?: string;
  /**
   * After having pinged for keepalive check, the duration after which an idle connection should be closed, Default: 20s
   */
  grpc_server_keepalive_timeout?: string;
  /**
   * Minimum amount of time a client should wait before sending a keepalive ping. If client sends keepalive ping more often, server will send GOAWAY and close the connection.
   */
  grpc_server_min_time_between_pings?: string;
  /**
   * If true, server allows keepalive pings even when there are no active streams(RPCs). If false, and client sends ping when there are no active streams, server will send GOAWAY and close the connection.
   */
  grpc_server_ping_without_stream_allowed?: boolean;
  /**
   * If non-zero, configures the amount of GRPC server workers used to serve the requests. Default: 0.
   */
  grpc_server_num_workers?: number;
  /**
   * Output log messages in the given format. Valid formats: [logfmt, json]
   */
  log_format?: string;
  /**
   * Only log messages with the given severity or above. Valid levels: [debug, info, warn, error]
   */
  log_level?: string;
  /**
   * Optionally log the source IPs.
   */
  log_source_ips_enabled?: boolean;
  /**
   * Header field storing the source IPs. Only used if server.log-source-ips-enabled is true. If not set the default Forwarded, X-Real-IP and X-Forwarded-For headers are used
   */
  log_source_ips_header?: string;
  /**
   * Regex for matching the source IPs. Only used if server.log-source-ips-enabled is true. If not set the default Forwarded, X-Real-IP and X-Forwarded-For headers are used
   */
  log_source_ips_regex?: string;
  /**
   * Optionally log request headers.
   */
  log_request_headers?: boolean;
  /**
   * Optionally log requests at info level instead of debug level. Applies to request headers as well if server.log-request-headers is enabled.
   */
  log_request_at_info_level_enabled?: boolean;
  /**
   * Comma separated list of headers to exclude from logging. Only used if server.log-request-headers is true.
   */
  log_request_exclude_headers_list?: string;
  /**
   * Base path to serve all API routes from (e.g. /v1/)
   */
  http_path_prefix?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures the distributor.
 */
export interface Distributor {
  ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul;
      etcd?: Etcd;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which distributors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    [k: string]: unknown | undefined;
  };
  rate_store?: {
    /**
     * The max number of concurrent requests to make to ingester stream apis. Default: 200.
     */
    max_request_parallelism?: number;
    /**
     * The interval on which distributors will update current stream rates from ingesters
     */
    stream_rate_update_interval?: string;
    /**
     * Timeout for communication between distributors and any given ingester when updating rates
     */
    ingester_request_timeout?: string;
    /**
     * If enabled, detailed logs and spans will be emitted.
     */
    debug?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Customize the logging of write failures.
   */
  write_failures_logging?: {
    /**
     * Log volume allowed (per second). Default: 1KB. Default: 1KB.
     */
    rate?: string;
    /**
     * Whether a insight=true key should be logged or not. Default: false.
     */
    add_insights_label?: boolean;
    [k: string]: unknown | undefined;
  };
  otlp_config?: {
    /**
     * List of default otlp resource attributes to be picked as index labels
     */
    default_resource_attributes_as_index_labels?: string[] | null;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures the querier. Only appropriate when running all modules or just the querier.
 */
export interface Querier {
  /**
   * Maximum duration for which the live tailing requests are served.
   */
  tail_max_duration?: string;
  /**
   * Time to wait before sending more than the minimum successful query requests.
   */
  extra_query_delay?: string;
  /**
   * Maximum lookback beyond which queries are not sent to ingester. 0 means all queries are sent to ingester.
   */
  query_ingesters_within?: string;
  engine?: {
    /**
     * The maximum amount of time to look back for log lines. Used only for instant log queries.
     */
    max_look_back_period?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The maximum number of queries that can be simultaneously processed by the querier. Default: 4.
   */
  max_concurrent?: number;
  /**
   * Only query the store, and not attempt any ingesters. This is useful for running a standalone querier pool operating only against stored data.
   */
  query_store_only?: boolean;
  /**
   * When true, queriers only query the ingesters, and not stored data. This is useful when the object store is unavailable.
   */
  query_ingester_only?: boolean;
  /**
   * When true, allow queries to span multiple tenants.
   */
  multi_tenant_queries_enabled?: boolean;
  /**
   * When true, querier limits sent via a header are enforced.
   */
  per_request_limits_enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The query_scheduler block configures the Loki query scheduler. When configured it separates the tenant query queues from the query-frontend.
 */
export interface QueryScheduler {
  /**
   * Maximum number of outstanding requests per tenant per query-scheduler. In-flight requests above this limit will fail with HTTP response status code 429. Default: 32000.
   */
  max_outstanding_requests_per_tenant?: number;
  /**
   * Maximum number of levels of nesting of hierarchical queues. 0 means that hierarchical queues are disabled. Default: 3.
   */
  max_queue_hierarchy_levels?: number;
  /**
   * If a querier disconnects without sending notification about graceful shutdown, the query-scheduler will keep the querier in the tenant's shard until the forget delay has passed. This feature is useful to reduce the blast radius when shuffle-sharding is enabled.
   */
  querier_forget_delay?: string;
  grpc_client_config?: GrpcClient;
  /**
   * Set to true to have the query schedulers create and place themselves in a ring. If no frontend_address or scheduler_address are present anywhere else in the configuration, Loki will toggle this value to true.
   */
  use_scheduler_ring?: boolean;
  /**
   * The hash ring configuration. This option is required only if use_scheduler_ring is true.
   */
  scheduler_ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul1;
      etcd?: Etcd1;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which compactors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * True to enable zone-awareness and replicate blocks across different availability zones.
     */
    zone_awareness_enabled?: boolean;
    num_tokens?: unknown;
    replication_factor?: unknown;
    /**
     * Instance ID to register in the ring.
     */
    instance_id?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    /**
     * Port to advertise in the ring (defaults to server.grpc-listen-port). Default: 0.
     */
    instance_port?: number;
    /**
     * IP address to advertise in the ring.
     */
    instance_addr?: string;
    /**
     * The availability zone where this instance is running. Required if zone-awareness is enabled.
     */
    instance_availability_zone?: string;
    /**
     * Enable using a IPv6 instance address.
     */
    instance_enable_ipv6?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * This configures the gRPC client used to report errors back to the query-frontend.
 */
export interface GrpcClient {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul1 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd1 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * The frontend block configures the Loki query-frontend.
 */
export interface Frontend {
  /**
   * Log queries that are slower than the specified duration. Set to 0 to disable. Set to < 0 to enable on all queries.
   */
  log_queries_longer_than?: string;
  /**
   * Comma-separated list of request header names to include in query logs. Applies to both query stats and slow queries logs.
   */
  log_query_request_headers?: string;
  /**
   * Max body size for downstream prometheus. Default: 10485760.
   */
  max_body_size?: number;
  /**
   * True to enable query statistics tracking. When enabled, a message with some statistics is logged for every query.
   */
  query_stats_enabled?: boolean;
  /**
   * Maximum number of outstanding requests per tenant per frontend; requests beyond this error with HTTP 429. Default: 2048.
   */
  max_outstanding_per_tenant?: number;
  /**
   * In the event a tenant is repeatedly sending queries that lead the querier to crash or be killed due to an out-of-memory error, the crashed querier will be disconnected from the query frontend and a new querier will be immediately assigned to the tenant’s shard. This invalidates the assumption that shuffle sharding can be used to reduce the impact on tenants. This option mitigates the impact by configuring a delay between when a querier disconnects because of a crash and when the crashed querier is actually removed from the tenant's shard.
   */
  querier_forget_delay?: string;
  /**
   * DNS hostname used for finding query-schedulers.
   */
  scheduler_address?: string;
  /**
   * How often to resolve the scheduler-address, in order to look for new query-scheduler instances. Also used to determine how often to poll the scheduler-ring for addresses if the scheduler-ring is configured.
   */
  scheduler_dns_lookup_period?: string;
  /**
   * Number of concurrent workers forwarding queries to single query-scheduler. Default: 5.
   */
  scheduler_worker_concurrency?: number;
  grpc_client_config?: GrpcClient1;
  /**
   * Time to wait for inflight requests to finish before forcefully shutting down. This needs to be aligned with the query timeout and the graceful termination period of the process orchestrator.
   */
  graceful_shutdown_timeout?: string;
  /**
   * Name of network interface to read address from. This address is sent to query-scheduler and querier, which uses it to send the query response back to query-frontend.
   */
  instance_interface_names?: string[] | null;
  /**
   * Defines the encoding for requests to and responses from the scheduler and querier. Can be 'json' or 'protobuf' (defaults to 'json').
   */
  encoding?: string;
  /**
   * Compress HTTP responses.
   */
  compress_responses?: boolean;
  /**
   * URL of downstream Loki.
   */
  downstream_url?: string;
  /**
   * URL of querier for tail proxy.
   */
  tail_proxy_url?: string;
  tail_tls_config?: TlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient1 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The TLS configuration.
 */
export interface TlsConfig {
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  [k: string]: unknown | undefined;
}
/**
 * The query_range block configures the query splitting and caching in the Loki query-frontend.
 */
export interface QueryRange {
  /**
   * Mutate incoming queries to align their start and end with their step.
   */
  align_queries_with_step?: boolean;
  results_cache?: {
    cache?: CacheConfig;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Cache query results.
   */
  cache_results?: boolean;
  /**
   * Maximum number of retries for a single request; beyond this, the downstream error is returned. Default: 5.
   */
  max_retries?: number;
  /**
   * Perform query parallelisations based on storage sharding configuration and query ASTs. This feature is supported only by the chunks storage engine.
   */
  parallelise_shardable_queries?: boolean;
  /**
   * A comma-separated list of LogQL vector and range aggregations that should be sharded
   */
  shard_aggregations?: string;
  /**
   * Cache index stats query results.
   */
  cache_index_stats_results?: boolean;
  /**
   * If a cache config is not specified and cache_index_stats_results is true, the config for the results cache is used.
   */
  index_stats_results_cache?: {
    cache?: CacheConfig1;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Cache volume query results.
   */
  cache_volume_results?: boolean;
  /**
   * If a cache config is not specified and cache_volume_results is true, the config for the results cache is used.
   */
  volume_results_cache?: {
    cache?: CacheConfig2;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Cache instant metric query results.
   */
  cache_instant_metric_results?: boolean;
  /**
   * If a cache config is not specified and cache_instant_metric_results is true, the config for the results cache is used.
   */
  instant_metric_results_cache?: {
    cache?: CacheConfig3;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Whether to align the splits of instant metric query with splitByInterval and query's exec time. Useful when instant_metric_cache is enabled
   */
  instant_metric_query_split_align?: boolean;
  /**
   * Cache series query results.
   */
  cache_series_results?: boolean;
  /**
   * If series_results_cache is not configured and cache_series_results is true, the config for the results cache is used.
   */
  series_results_cache?: {
    cache?: CacheConfig4;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Cache label query results.
   */
  cache_label_results?: boolean;
  /**
   * If label_results_cache is not configured and cache_label_results is true, the config for the results cache is used.
   */
  label_results_cache?: {
    cache?: CacheConfig5;
    /**
     * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
     */
    compression?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig1 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig2 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig3 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig4 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig5 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The ruler block configures the Loki ruler.
 */
export interface Ruler {
  /**
   * Base URL of the Grafana instance.
   */
  external_url?: string;
  /**
   * Datasource UID for the dashboard.
   */
  datasource_uid?: string;
  /**
   * Labels to add to all alerts.
   */
  external_labels?: string[] | null;
  ruler_client?: GrpcClient2;
  /**
   * How frequently to evaluate rules.
   */
  evaluation_interval?: string;
  /**
   * How frequently to poll for rule changes.
   */
  poll_interval?: string;
  /**
   * Deprecated: Use -ruler-storage. CLI flags and their respective YAML config options instead.
   */
  storage?: {
    /**
     * Method to use for backend rule storage (configdb, azure, gcs, s3, swift, local, bos, cos)
     */
    type?: string;
    azure?: AzureStorageConfig;
    alibabacloud?: AlibabacloudStorageConfig;
    gcs?: GcsStorageConfig;
    s3?: S3StorageConfig;
    bos?: BosStorageConfig;
    swift?: SwiftStorageConfig;
    cos?: CosStorageConfig;
    /**
     * Configures backend rule storage for a local file system directory.
     */
    local?: {
      /**
       * Directory to scan for rules
       */
      directory?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * File path to store temporary rule files.
   */
  rule_path?: string;
  /**
   * Comma-separated list of Alertmanager URLs to send notifications to. Each Alertmanager URL is treated as a separate group in the configuration. Multiple Alertmanagers in HA per group can be supported by using DNS resolution via '-ruler.alertmanager-discovery'.
   */
  alertmanager_url?: string;
  /**
   * Use DNS SRV records to discover Alertmanager hosts.
   */
  enable_alertmanager_discovery?: boolean;
  /**
   * How long to wait between refreshing DNS resolutions of Alertmanager hosts.
   */
  alertmanager_refresh_interval?: string;
  /**
   * If enabled requests to Alertmanager will utilize the V2 API.
   */
  enable_alertmanager_v2?: boolean;
  /**
   * List of alert relabel configs.
   */
  alert_relabel_configs?:
    | {
        [k: string]: unknown | undefined;
      }[]
    | null;
  /**
   * Capacity of the queue for notifications to be sent to the Alertmanager. Default: 10000.
   */
  notification_queue_capacity?: number;
  /**
   * HTTP timeout duration when sending notifications to the Alertmanager.
   */
  notification_timeout?: string;
  alertmanager_client?: {
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    /**
     * HTTP Basic authentication username. It overrides the username set in the URL (if any).
     */
    basic_auth_username?: string;
    /**
     * HTTP Basic authentication password. It overrides the password set in the URL (if any).
     */
    basic_auth_password?: string;
    /**
     * HTTP Header authorization type (default: Bearer).
     */
    type?: string;
    /**
     * HTTP Header authorization credentials.
     */
    credentials?: string;
    /**
     * HTTP Header authorization credentials file.
     */
    credentials_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Max time to tolerate outage for restoring "for" state of alert.
   */
  for_outage_tolerance?: string;
  /**
   * Minimum duration between alert and restored "for" state. This is maintained only for alerts with configured "for" time greater than the grace period.
   */
  for_grace_period?: string;
  /**
   * Minimum amount of time to wait before resending an alert to Alertmanager.
   */
  resend_delay?: string;
  /**
   * Distribute rule evaluation using ring backend.
   */
  enable_sharding?: boolean;
  /**
   * The sharding strategy to use. Supported values are: default, shuffle-sharding.
   */
  sharding_strategy?: string;
  /**
   * The sharding algorithm to use for deciding how rules & groups are sharded. Supported values are: by-group, by-rule.
   */
  sharding_algo?: string;
  /**
   * Time to spend searching for a pending ruler when shutting down.
   */
  search_pending_for?: string;
  /**
   * Ring used by Loki ruler. The CLI flags prefix for this block configuration is 'ruler.ring'.
   */
  ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul2;
      etcd?: Etcd2;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Interval between heartbeats sent to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which ruler ring members are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * Name of network interface to read addresses from.
     */
    instance_interface_names?: string[] | null;
    /**
     * The number of tokens the lifecycler will generate and put into the ring if it joined without transferring tokens from another lifecycler. Default: 128.
     */
    num_tokens?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Period with which to attempt to flush rule groups.
   */
  flush_period?: string;
  /**
   * Enable the ruler API.
   */
  enable_api?: boolean;
  /**
   * Comma separated list of tenants whose rules this ruler can evaluate. If specified, only these tenants will be handled by ruler, otherwise this ruler can process rules from all tenants. Subject to sharding.
   */
  enabled_tenants?: string;
  /**
   * Comma separated list of tenants whose rules this ruler cannot evaluate. If specified, a ruler that would normally pick the specified tenant(s) for processing will ignore them instead. Subject to sharding.
   */
  disabled_tenants?: string;
  /**
   * Report the wall time for ruler queries to complete as a per user metric and as an info level log message.
   */
  query_stats_enabled?: boolean;
  /**
   * Disable the rule_group label on exported metrics.
   */
  disable_rule_group_label?: boolean;
  wal?: {
    /**
     * The directory in which to write tenant WAL files. Each tenant will have its own directory one level below this directory.
     */
    dir?: string;
    /**
     * Frequency with which to run the WAL truncation process.
     */
    truncate_frequency?: string;
    /**
     * Minimum age that samples must exist in the WAL before being truncated.
     */
    min_age?: string;
    /**
     * Maximum age that samples must exist in the WAL before being truncated.
     */
    max_age?: string;
    [k: string]: unknown | undefined;
  };
  wal_cleaner?: {
    /**
     * The minimum age of a WAL to consider for cleaning.
     */
    min_age?: string;
    /**
     * How often to run the WAL cleaner. 0 = disabled.
     */
    period?: string;
    [k: string]: unknown | undefined;
  };
  remote_write?: RemoteWrite;
  /**
   * Configuration for rule evaluation.
   */
  evaluation?: {
    /**
     * The evaluation mode for the ruler. Can be either 'local' or 'remote'. If set to 'local', the ruler will evaluate rules locally. If set to 'remote', the ruler will evaluate rules remotely. If unset, the ruler will evaluate rules locally.
     */
    mode?: string;
    /**
     * Upper bound of random duration to wait before rule evaluation to avoid contention during concurrent execution of rules. Jitter is calculated consistently for a given rule. Set 0 to disable (default).
     */
    max_jitter?: string;
    query_frontend?: {
      /**
       * GRPC listen address of the query-frontend(s). Must be a DNS address (prefixed with dns:///) to enable client side load balancing.
       */
      address?: string;
      /**
       * Set to true if query-frontend connection requires TLS.
       */
      tls_enabled?: boolean;
      /**
       * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
       */
      tls_cert_path?: string;
      /**
       * Path to the key for the client certificate. Also requires the client certificate to be configured.
       */
      tls_key_path?: string;
      /**
       * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
       */
      tls_ca_path?: string;
      /**
       * Override the expected name on the server certificate.
       */
      tls_server_name?: string;
      /**
       * Skip validating server certificate.
       */
      tls_insecure_skip_verify?: boolean;
      /**
       * Override the default cipher suite list (separated by commas). Allowed values:
       *
       * Secure Ciphers:
       * - TLS_AES_128_GCM_SHA256
       * - TLS_AES_256_GCM_SHA384
       * - TLS_CHACHA20_POLY1305_SHA256
       * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
       * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
       * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
       * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
       * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
       * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
       * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
       * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
       * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
       * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
       *
       * Insecure Ciphers:
       * - TLS_RSA_WITH_RC4_128_SHA
       * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
       * - TLS_RSA_WITH_AES_128_CBC_SHA
       * - TLS_RSA_WITH_AES_256_CBC_SHA
       * - TLS_RSA_WITH_AES_128_CBC_SHA256
       * - TLS_RSA_WITH_AES_128_GCM_SHA256
       * - TLS_RSA_WITH_AES_256_GCM_SHA384
       * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
       * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
       * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
       * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
       * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
       *
       */
      tls_cipher_suites?: string;
      /**
       * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
       */
      tls_min_version?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient2 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for Azure.
 */
export interface AzureStorageConfig {
  /**
   * Azure Cloud environment. Supported values are: AzureGlobal, AzureChinaCloud, AzureGermanCloud, AzureUSGovernment.
   */
  environment?: string;
  /**
   * Azure storage account name.
   */
  account_name?: string;
  /**
   * Azure storage account key.
   */
  account_key?: string;
  /**
   * If `connection-string` is set, the values of `account-name` and `endpoint-suffix` values will not be used. Use this method over `account-key` if you need to authenticate via a SAS token. Or if you use the Azurite emulator.
   */
  connection_string?: string;
  /**
   * Name of the storage account blob container used to store chunks. This container must be created before running cortex.
   */
  container_name?: string;
  /**
   * Azure storage endpoint suffix without schema. The storage account name will be prefixed to this value to create the FQDN.
   */
  endpoint_suffix?: string;
  /**
   * Use Managed Identity to authenticate to the Azure storage account.
   */
  use_managed_identity?: boolean;
  /**
   * Use Federated Token to authenticate to the Azure storage account.
   */
  use_federated_token?: boolean;
  /**
   * User assigned identity ID to authenticate to the Azure storage account.
   */
  user_assigned_id?: string;
  /**
   * Use Service Principal to authenticate through Azure OAuth.
   */
  use_service_principal?: boolean;
  /**
   * Azure Service Principal ID(GUID).
   */
  client_id?: string;
  /**
   * Azure Service Principal secret key.
   */
  client_secret?: string;
  /**
   * Azure Tenant ID is used to authenticate through Azure OAuth.
   */
  tenant_id?: string;
  /**
   * Chunk delimiter for blob ID to be used
   */
  chunk_delimiter?: string;
  /**
   * Preallocated buffer size for downloads. Default: 512000.
   */
  download_buffer_size?: number;
  /**
   * Preallocated buffer size for uploads. Default: 256000.
   */
  upload_buffer_size?: number;
  /**
   * Number of buffers used to used to upload a chunk. Default: 1.
   */
  upload_buffer_count?: number;
  /**
   * Timeout for requests made against azure blob storage.
   */
  request_timeout?: string;
  /**
   * Number of retries for a request which times out. Default: 5.
   */
  max_retries?: number;
  /**
   * Minimum time to wait before retrying a request.
   */
  min_retry_delay?: string;
  /**
   * Maximum time to wait before retrying a request.
   */
  max_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for AlibabaCloud Object Storage (OSS).
 */
export interface AlibabacloudStorageConfig {
  /**
   * Name of OSS bucket.
   */
  bucket?: string;
  /**
   * oss Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * alibabacloud Access Key ID
   */
  access_key_id?: string;
  /**
   * alibabacloud Secret Access Key
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for GCS.
 */
export interface GcsStorageConfig {
  /**
   * Name of GCS bucket. Please refer to https://cloud.google.com/docs/authentication/production for more information about how to configure authentication.
   */
  bucket_name?: string;
  /**
   * Service account key content in JSON format, refer to https://cloud.google.com/iam/docs/creating-managing-service-account-keys for creation.
   */
  service_account?: string;
  /**
   * The size of the buffer that GCS client for each PUT request. 0 to disable buffering. Default: 0.
   */
  chunk_buffer_size?: number;
  /**
   * The duration after which the requests to GCS should be timed out.
   */
  request_timeout?: string;
  /**
   * Enable OpenCensus (OC) instrumentation for all requests.
   */
  enable_opencensus?: boolean;
  /**
   * Enable HTTP2 connections.
   */
  enable_http2?: boolean;
  /**
   * Enable automatic retries of failed idempotent requests.
   */
  enable_retries?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for S3.
 */
export interface S3StorageConfig {
  /**
   * S3 endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<bucket-name> to use a mock in-memory implementation.
   */
  s3?: string;
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  s3forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over. Overrides any buckets specified in s3.url flag
   */
  bucketnames?: string;
  /**
   * S3 Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * AWS region to use.
   */
  region?: string;
  /**
   * AWS Access Key ID
   */
  access_key_id?: string;
  /**
   * AWS Secret Access Key
   */
  secret_access_key?: string;
  /**
   * AWS Session Token
   */
  session_token?: string;
  /**
   * Disable https on s3 connection.
   */
  insecure?: boolean;
  http_config?: {
    /**
     * Timeout specifies a time limit for requests made by s3 Client.
     */
    timeout?: string;
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    /**
     * Set to true to skip verifying the certificate chain and hostname.
     */
    insecure_skip_verify?: boolean;
    /**
     * Path to the trusted CA file that signed the SSL certificate of the S3 endpoint.
     */
    ca_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The signature version to use for authenticating against S3. Supported values are: v4.
   */
  signature_version?: string;
  /**
   * The S3 storage class which objects will use. Supported values are: GLACIER, DEEP_ARCHIVE, GLACIER_IR, INTELLIGENT_TIERING, ONEZONE_IA, OUTPOSTS, REDUCED_REDUNDANCY, STANDARD, STANDARD_IA.
   */
  storage_class?: string;
  sse?: {
    /**
     * Enable AWS Server Side Encryption. Supported values: SSE-KMS, SSE-S3.
     */
    type?: string;
    /**
     * KMS Key ID used to encrypt objects in S3
     */
    kms_key_id?: string;
    /**
     * KMS Encryption Context used for object encryption. It expects JSON formatted string.
     */
    kms_encryption_context?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when S3 get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when s3 get Object
     */
    min_period?: string;
    /**
     * Maximum backoff time when s3 get Object
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when s3 get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for Baidu Object Storage (BOS).
 */
export interface BosStorageConfig {
  /**
   * Name of BOS bucket.
   */
  bucket_name?: string;
  /**
   * BOS endpoint to connect to.
   */
  endpoint?: string;
  /**
   * Baidu Cloud Engine (BCE) Access Key ID.
   */
  access_key_id?: string;
  /**
   * Baidu Cloud Engine (BCE) Secret Access Key.
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for Swift.
 */
export interface SwiftStorageConfig {
  /**
   * OpenStack Swift authentication API version. 0 to autodetect. Default: 0.
   */
  auth_version?: number;
  /**
   * OpenStack Swift authentication URL
   */
  auth_url?: string;
  /**
   * Set this to true to use the internal OpenStack Swift endpoint URL
   */
  internal?: boolean;
  /**
   * OpenStack Swift username.
   */
  username?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  user_domain_name?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  user_domain_id?: string;
  /**
   * OpenStack Swift user ID.
   */
  user_id?: string;
  /**
   * OpenStack Swift API key.
   */
  password?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  domain_id?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  domain_name?: string;
  /**
   * OpenStack Swift project ID (v2,v3 auth only).
   */
  project_id?: string;
  /**
   * OpenStack Swift project name (v2,v3 auth only).
   */
  project_name?: string;
  /**
   * ID of the OpenStack Swift project's domain (v3 auth only), only needed if it differs the from user domain.
   */
  project_domain_id?: string;
  /**
   * Name of the OpenStack Swift project's domain (v3 auth only), only needed if it differs from the user domain.
   */
  project_domain_name?: string;
  /**
   * OpenStack Swift Region to use (v2,v3 auth only).
   */
  region_name?: string;
  /**
   * Name of the OpenStack Swift container to put chunks in.
   */
  container_name?: string;
  /**
   * Max retries on requests error. Default: 3.
   */
  max_retries?: number;
  /**
   * Time after which a connection attempt is aborted.
   */
  connect_timeout?: string;
  /**
   * Time after which an idle request is aborted. The timeout watchdog is reset each time some data is received, so the timeout triggers after X time no data is received on a request.
   */
  request_timeout?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures backend rule storage for IBM Cloud Object Storage (COS).
 */
export interface CosStorageConfig {
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over.
   */
  bucketnames?: string;
  /**
   * COS Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * COS region to use.
   */
  region?: string;
  /**
   * COS HMAC Access Key ID.
   */
  access_key_id?: string;
  /**
   * COS HMAC Secret Access Key.
   */
  secret_access_key?: string;
  http_config?: {
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when cos get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when cos get Object.
     */
    min_period?: string;
    /**
     * Maximum backoff time when cos get Object.
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when cos get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * IAM API key to access COS.
   */
  api_key?: string;
  /**
   * COS service instance id to use.
   */
  service_instance_id?: string;
  /**
   * IAM Auth Endpoint for authentication.
   */
  auth_endpoint?: string;
  /**
   * Compute resource token file path.
   */
  cr_token_file_path?: string;
  /**
   * Name of the trusted profile.
   */
  trusted_profile_name?: string;
  /**
   * ID of the trusted profile.
   */
  trusted_profile_id?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul2 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd2 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Remote-write configuration to send rule samples to a Prometheus remote-write endpoint.
 */
export interface RemoteWrite {
  client?: RemoteWrite1;
  /**
   * Configure remote write clients. A map with remote client id as key.
   */
  clients?: {
    [k: string]: RemoteWrite;
  };
  /**
   * Enable remote-write functionality.
   */
  enabled?: boolean;
  /**
   * Minimum period to wait between refreshing remote-write reconfigurations. This should be greater than or equivalent to -limits.per-user-override-period.
   */
  config_refresh_period?: string;
  /**
   * Add X-Scope-OrgID header in remote write requests.
   */
  add_org_id_header?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Deprecated: Use 'clients' instead. Configure remote write client.
 */
export interface RemoteWrite1 {
  client?: RemoteWrite1;
  /**
   * Configure remote write clients. A map with remote client id as key.
   */
  clients?: {
    [k: string]: RemoteWrite;
  };
  /**
   * Enable remote-write functionality.
   */
  enabled?: boolean;
  /**
   * Minimum period to wait between refreshing remote-write reconfigurations. This should be greater than or equivalent to -limits.per-user-override-period.
   */
  config_refresh_period?: string;
  /**
   * Add X-Scope-OrgID header in remote write requests.
   */
  add_org_id_header?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The ingester_client block configures how the distributor will connect to ingesters. Only appropriate when running all components, the distributor, or the querier.
 */
export interface IngesterClient {
  /**
   * Configures how connections are pooled.
   */
  pool_config?: {
    /**
     * How frequently to clean up clients for ingesters that have gone away.
     */
    client_cleanup_period?: string;
    /**
     * Run a health check on each ingester client during periodic cleanup.
     */
    health_check_ingesters?: boolean;
    /**
     * How quickly a dead client will be removed after it has been detected to disappear. Set this to a value to allow time for a secondary health check to recover the missing client.
     */
    remote_timeout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The remote request timeout on the client side.
   */
  remote_timeout?: string;
  grpc_client_config?: GrpcClient3;
  [k: string]: unknown | undefined;
}
/**
 * Configures how the gRPC connection to ingesters work as a client.
 */
export interface GrpcClient3 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The ingester block configures the ingester and how the ingester will register itself to a key value store.
 */
export interface Ingester {
  /**
   * Configures how the lifecycle of the ingester will operate and where it will register for discovery.
   */
  lifecycler?: {
    ring?: {
      kvstore?: {
        /**
         * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
         */
        store?: string;
        /**
         * The prefix for the keys in the store. Should end with a /.
         */
        prefix?: string;
        consul?: Consul3;
        etcd?: Etcd3;
        multi?: {
          /**
           * Primary backend storage used by multi-client.
           */
          primary?: string;
          /**
           * Secondary backend storage used by multi-client.
           */
          secondary?: string;
          /**
           * Mirror writes to secondary store.
           */
          mirror_enabled?: boolean;
          /**
           * Timeout for storing value to secondary store.
           */
          mirror_timeout?: string;
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * The heartbeat timeout after which ingesters are skipped for reads/writes. 0 = never (timeout disabled).
       */
      heartbeat_timeout?: string;
      /**
       * The number of ingesters to write to and read from. Default: 3.
       */
      replication_factor?: number;
      /**
       * True to enable the zone-awareness and replicate ingested samples across different availability zones.
       */
      zone_awareness_enabled?: boolean;
      /**
       * Comma-separated list of zones to exclude from the ring. Instances in excluded zones will be filtered out from the ring.
       */
      excluded_zones?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Number of tokens for each ingester. Default: 128.
     */
    num_tokens?: number;
    /**
     * Period at which to heartbeat to consul. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * Heartbeat timeout after which instance is assumed to be unhealthy. 0 = disabled.
     */
    heartbeat_timeout?: string;
    /**
     * Observe tokens after generating to resolve collisions. Useful when using gossiping ring.
     */
    observe_period?: string;
    /**
     * Period to wait for a claim from another member; will join automatically after this.
     */
    join_after?: string;
    /**
     * Minimum duration to wait after the internal readiness checks have passed but before succeeding the readiness endpoint. This is used to slowdown deployment controllers (eg. Kubernetes) after an instance is ready and before they proceed with a rolling update, to give the rest of the cluster instances enough time to receive ring updates.
     */
    min_ready_duration?: string;
    /**
     * Name of network interface to read address from.
     */
    interface_names?: string[] | null;
    /**
     * Enable IPv6 support. Required to make use of IP addresses from IPv6 interfaces.
     */
    enable_inet6?: boolean;
    /**
     * Duration to sleep for before exiting, to ensure metrics are scraped.
     */
    final_sleep?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * The availability zone where this instance is running.
     */
    availability_zone?: string;
    /**
     * Unregister from the ring upon clean shutdown. It can be useful to disable for rolling restarts with consistent naming in conjunction with -distributor.extend-writes=false.
     */
    unregister_on_shutdown?: boolean;
    /**
     * When enabled the readiness probe succeeds only after all instances are ACTIVE and healthy in the ring, otherwise only the instance itself is checked. This option should be disabled if in your cluster multiple instances can be rolled out simultaneously, otherwise rolling updates may be slowed down.
     */
    readiness_check_ring_health?: boolean;
    /**
     * IP address to advertise in the ring.
     */
    address?: string;
    /**
     * port to advertise in consul (defaults to server.grpc-listen-port). Default: 0.
     */
    port?: number;
    /**
     * ID to register in the ring.
     */
    id?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * How many flushes can happen concurrently from each stream. Default: 32.
   */
  concurrent_flushes?: number;
  /**
   * How often should the ingester see if there are any blocks to flush. The first flush check is delayed by a random time up to 0.8x the flush check period. Additionally, there is +/- 1% jitter added to the interval.
   */
  flush_check_period?: string;
  /**
   * The timeout before a flush is cancelled.
   */
  flush_op_timeout?: string;
  /**
   * How long chunks should be retained in-memory after they've been flushed.
   */
  chunk_retain_period?: string;
  /**
   * How long chunks should sit in-memory with no updates before being flushed if they don't hit the max block size. This means that half-empty chunks will still be flushed after a certain period as long as they receive no further activity.
   */
  chunk_idle_period?: string;
  /**
   * The targeted _uncompressed_ size in bytes of a chunk block When this threshold is exceeded the head block will be cut and compressed inside the chunk. Default: 262144.
   */
  chunk_block_size?: number;
  /**
   * A target _compressed_ size in bytes for chunks. This is a desired size not an exact size, chunks may be slightly bigger or significantly smaller if they get flushed for other reasons (e.g. chunk_idle_period). A value of 0 creates chunks with a fixed 10 blocks, a non zero value will create chunks with a variable number of blocks to meet the target size. Default: 1572864.
   */
  chunk_target_size?: number;
  /**
   * The algorithm to use for compressing chunk. (none, gzip, lz4-64k, snappy, lz4-256k, lz4-1M, lz4, flate, zstd)
   */
  chunk_encoding?: string;
  /**
   * The maximum duration of a timeseries chunk in memory. If a timeseries runs for longer than this, the current chunk will be flushed to the store and a new chunk created.
   */
  max_chunk_age?: string;
  /**
   * Forget about ingesters having heartbeat timestamps older than `ring.kvstore.heartbeat_timeout`. This is equivalent to clicking on the `/ring` `forget` button in the UI: the ingester is removed from the ring. This is a useful setting when you are sure that an unhealthy node won't return. An example is when not using stateful sets or the equivalent. Use `memberlist.rejoin_interval` > 0 to handle network partition cases when using a memberlist.
   */
  autoforget_unhealthy?: boolean;
  /**
   * Parameters used to synchronize ingesters to cut chunks at the same moment. Sync period is used to roll over incoming entry to a new chunk. If chunk's utilization isn't high enough (eg. less than 50% when sync_min_utilization is set to 0.5), then this chunk rollover doesn't happen.
   */
  sync_period?: string;
  /**
   * Minimum utilization of chunk when doing synchronization. Default: 0.1.
   */
  sync_min_utilization?: number;
  /**
   * The maximum number of errors a stream will report to the user when a push fails. 0 to make unlimited. Default: 10.
   */
  max_returned_stream_errors?: number;
  /**
   * How far back should an ingester be allowed to query the store for data, for use only with boltdb-shipper/tsdb index and filesystem object store. -1 for infinite.
   */
  query_store_max_look_back_period?: string;
  /**
   * The ingester WAL (Write Ahead Log) records incoming logs and stores them on the local file systems in order to guarantee persistence of acknowledged data in the event of a process crash.
   */
  wal?: {
    /**
     * Enable writing of ingested data into WAL.
     */
    enabled?: boolean;
    /**
     * Directory where the WAL data is stored and/or recovered from.
     */
    dir?: string;
    /**
     * Interval at which checkpoints should be created.
     */
    checkpoint_duration?: string;
    /**
     * When WAL is enabled, should chunks be flushed to long-term storage on shutdown.
     */
    flush_on_shutdown?: boolean;
    /**
     * Maximum memory size the WAL may use during replay. After hitting this, it will flush data to storage before continuing. A unit suffix (KB, MB, GB) may be applied. Default: 4GB.
     */
    replay_memory_ceiling?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Shard factor used in the ingesters for the in process reverse index. This MUST be evenly divisible by ALL schema shard factors or Loki will not start. Default: 32.
   */
  index_shards?: number;
  /**
   * Maximum number of dropped streams to keep in memory during tailing. Default: 10.
   */
  max_dropped_streams?: number;
  /**
   * Path where the shutdown marker file is stored. If not set and common.path_prefix is set then common.path_prefix will be used.
   */
  shutdown_marker_path?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul3 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd3 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul4 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd4 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures how the gRPC connection to ingesters work as a client.
 */
export interface GrpcClient4 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The index_gateway block configures the Loki index gateway server, responsible for serving index queries without the need to constantly interact with the object store.
 */
export interface IndexGateway {
  /**
   * Defines in which mode the index gateway server will operate (default to 'simple'). It supports two modes:
   * - 'simple': an index gateway server instance is responsible for handling, storing and returning requests for all indices for all tenants.
   * - 'ring': an index gateway server instance is responsible for a subset of tenants instead of all tenants.
   */
  mode?: string;
  /**
   * Defines the ring to be used by the index gateway servers and clients in case the servers are configured to run in 'ring' mode. In case this isn't configured, this block supports inheriting configuration from the common ring section.
   */
  ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul5;
      etcd?: Etcd5;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which compactors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * True to enable zone-awareness and replicate blocks across different availability zones.
     */
    zone_awareness_enabled?: boolean;
    num_tokens?: unknown;
    /**
     * Deprecated: How many index gateway instances are assigned to each tenant. Use -index-gateway.shard-size instead. The shard size is also a per-tenant setting. Default: 3.
     */
    replication_factor?: number;
    /**
     * Instance ID to register in the ring.
     */
    instance_id?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    /**
     * Port to advertise in the ring (defaults to server.grpc-listen-port). Default: 0.
     */
    instance_port?: number;
    /**
     * IP address to advertise in the ring.
     */
    instance_addr?: string;
    /**
     * The availability zone where this instance is running. Required if zone-awareness is enabled.
     */
    instance_availability_zone?: string;
    /**
     * Enable using a IPv6 instance address.
     */
    instance_enable_ipv6?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul5 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd5 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Experimental: The bloom_compactor block configures the Loki bloom compactor server, responsible for compacting stream indexes into bloom filters and merging them as bloom blocks.
 */
export interface BloomCompactor {
  /**
   * Defines the ring to be used by the bloom-compactor servers. In case this isn't configured, this block supports inheriting configuration from the common ring section.
   */
  ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul6;
      etcd?: Etcd6;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which compactors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * True to enable zone-awareness and replicate blocks across different availability zones.
     */
    zone_awareness_enabled?: boolean;
    /**
     * Number of tokens to use in the ring per compactor. Higher number of tokens will result in more and smaller files (metas and blocks.). Default: 10.
     */
    num_tokens?: number;
    replication_factor?: unknown;
    /**
     * Instance ID to register in the ring.
     */
    instance_id?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    /**
     * Port to advertise in the ring (defaults to server.grpc-listen-port). Default: 0.
     */
    instance_port?: number;
    /**
     * IP address to advertise in the ring.
     */
    instance_addr?: string;
    /**
     * The availability zone where this instance is running. Required if zone-awareness is enabled.
     */
    instance_availability_zone?: string;
    /**
     * Enable using a IPv6 instance address.
     */
    instance_enable_ipv6?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Flag to enable or disable the usage of the bloom-compactor component.
   */
  enabled?: boolean;
  /**
   * Interval at which to re-run the compaction operation.
   */
  compaction_interval?: string;
  /**
   * Newest day-table offset (from today, inclusive) to compact. Increase to lower cost by not re-writing data to object storage too frequently since recent data changes more often at the cost of not having blooms available as quickly. Default: 1.
   */
  min_table_offset?: number;
  /**
   * Oldest day-table offset (from today, inclusive) to compact. This can be used to lower cost by not trying to compact older data which doesn't change. This can be optimized by aligning it with the maximum `reject_old_samples_max_age` setting of any tenant. Default: 2.
   */
  max_table_offset?: number;
  /**
   * Number of workers to run in parallel for compaction. Default: 1.
   */
  worker_parallelism?: number;
  /**
   * Minimum backoff time between retries.
   */
  compaction_retries_min_backoff?: string;
  /**
   * Maximum backoff time between retries.
   */
  compaction_retries_max_backoff?: string;
  /**
   * Number of retries to perform when compaction fails. Default: 3.
   */
  compaction_retries?: number;
  /**
   * Maximum number of tables to compact in parallel. While increasing this value, please make sure compactor has enough disk space allocated to be able to store and compact as many tables. Default: 1.
   */
  max_compaction_parallelism?: number;
  retention?: {
    /**
     * Enable bloom retention.
     */
    enabled?: boolean;
    /**
     * Max lookback days for retention. Default: 365.
     */
    max_lookback_days?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul6 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd6 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * Experimental: The bloom_gateway block configures the Loki bloom gateway server, responsible for serving queries for filtering chunks based on filter expressions.
 */
export interface BloomGateway {
  /**
   * Flag to enable or disable the bloom gateway component globally.
   */
  enabled?: boolean;
  client?: {
    /**
     * Configures the behavior of the connection pool.
     */
    pool_config?: {
      /**
       * How frequently to clean up clients for servers that have gone away or are unhealthy.
       */
      check_interval?: string;
      /**
       * Run a health check on each server during periodic cleanup.
       */
      enable_health_check?: boolean;
      /**
       * Timeout for the health check if health check is enabled.
       */
      health_check_timeout?: string;
      [k: string]: unknown | undefined;
    };
    grpc_client_config?: GrpcClient5;
    results_cache?: {
      cache?: CacheConfig6;
      /**
       * Use compression in cache. The default is an empty value '', which disables compression. Supported values are: 'snappy' and ''.
       */
      compression?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Flag to control whether to cache bloom gateway client requests/responses.
     */
    cache_results?: boolean;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Number of workers to use for filtering chunks concurrently. Usually set to 1x number of CPU cores. Default: 4.
   */
  worker_concurrency?: number;
  /**
   * Number of blocks processed concurrently on a single worker. Usually set to 2x number of CPU cores. Default: 8.
   */
  block_query_concurrency?: number;
  /**
   * Maximum number of outstanding tasks per tenant. Default: 1024.
   */
  max_outstanding_per_tenant?: number;
  /**
   * How many tasks are multiplexed at once. Default: 512.
   */
  num_multiplex_tasks?: number;
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient5 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig6 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The storage_config block configures one of many possible stores for both the index and chunks. Which configuration to be picked should be defined in schema_config block.
 */
export interface StorageConfig {
  alibabacloud?: AlibabacloudStorageConfig1;
  aws?: AwsStorageConfig;
  azure?: AzureStorageConfig1;
  bos?: BosStorageConfig1;
  /**
   * Deprecated: Configures storing indexes in Bigtable. Required fields only required when bigtable is defined in config.
   */
  bigtable?: {
    /**
     * Bigtable project ID.
     */
    project?: string;
    /**
     * Bigtable instance ID. Please refer to https://cloud.google.com/docs/authentication/production for more information about how to configure authentication.
     */
    instance?: string;
    grpc_client_config?: GrpcClient6;
    /**
     * If enabled, once a tables info is fetched, it is cached.
     */
    table_cache_enabled?: boolean;
    /**
     * Duration to cache tables before checking again.
     */
    table_cache_expiration?: string;
    [k: string]: unknown | undefined;
  };
  gcs?: GcsStorageConfig1;
  /**
   * Deprecated: Configures storing chunks and/or the index in Cassandra.
   */
  cassandra?: {
    /**
     * Comma-separated hostnames or IPs of Cassandra instances.
     */
    addresses?: string;
    /**
     * Port that Cassandra is running on. Default: 9042.
     */
    port?: number;
    /**
     * Keyspace to use in Cassandra.
     */
    keyspace?: string;
    /**
     * Consistency level for Cassandra.
     */
    consistency?: string;
    /**
     * Replication factor to use in Cassandra. Default: 3.
     */
    replication_factor?: number;
    /**
     * Instruct the cassandra driver to not attempt to get host info from the system.peers table.
     */
    disable_initial_host_lookup?: boolean;
    /**
     * Use SSL when connecting to cassandra instances.
     */
    SSL?: boolean;
    /**
     * Require SSL certificate validation.
     */
    host_verification?: boolean;
    /**
     * Policy for selecting Cassandra host. Supported values are: round-robin, token-aware.
     */
    host_selection_policy?: string;
    /**
     * Path to certificate file to verify the peer.
     */
    CA_path?: string;
    /**
     * Path to certificate file used by TLS.
     */
    tls_cert_path?: string;
    /**
     * Path to private key file used by TLS.
     */
    tls_key_path?: string;
    /**
     * Enable password authentication when connecting to cassandra.
     */
    auth?: boolean;
    /**
     * Username to use when connecting to cassandra.
     */
    username?: string;
    /**
     * Password to use when connecting to cassandra.
     */
    password?: string;
    /**
     * File containing password to use when connecting to cassandra.
     */
    password_file?: string;
    /**
     * If set, when authenticating with cassandra a custom authenticator will be expected during the handshake. This flag can be set multiple times.
     */
    custom_authenticators?: string[] | null;
    /**
     * Timeout when connecting to cassandra.
     */
    timeout?: string;
    /**
     * Initial connection timeout, used during initial dial to server.
     */
    connect_timeout?: string;
    /**
     * Interval to retry connecting to cassandra nodes marked as DOWN.
     */
    reconnect_interval?: string;
    /**
     * Number of retries to perform on a request. Set to 0 to disable retries. Default: 0.
     */
    max_retries?: number;
    /**
     * Maximum time to wait before retrying a failed request.
     */
    retry_max_backoff?: string;
    /**
     * Minimum time to wait before retrying a failed request.
     */
    retry_min_backoff?: string;
    /**
     * Limit number of concurrent queries to Cassandra. Set to 0 to disable the limit. Default: 0.
     */
    query_concurrency?: number;
    /**
     * Number of TCP connections per host. Default: 2.
     */
    num_connections?: number;
    /**
     * Convict hosts of being down on failure.
     */
    convict_hosts_on_failure?: boolean;
    /**
     * Table options used to create index or chunk tables. This value is used as plain text in the table `WITH` like this, "CREATE TABLE <generated_by_cortex> (...) WITH <cassandra.table-options>". For details, see https://cortexmetrics.io/docs/production/cassandra. By default it will use the default table options of your Cassandra cluster.
     */
    table_options?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Deprecated: Configures storing index in BoltDB. Required fields only required when boltdb is present in the configuration.
   */
  boltdb?: {
    /**
     * Location of BoltDB index files.
     */
    directory?: string;
    [k: string]: unknown | undefined;
  };
  filesystem?: LocalStorageConfig;
  swift?: SwiftStorageConfig1;
  /**
   * Deprecated:
   */
  grpc_store?: {
    /**
     * Hostname or IP of the gRPC store instance.
     */
    server_address?: string;
    [k: string]: unknown | undefined;
  };
  hedging?: {
    /**
     * If set to a non-zero value a second request will be issued at the provided duration. Default is 0 (disabled)
     */
    at?: string;
    /**
     * The maximum of hedge requests allowed. Default: 2.
     */
    up_to?: number;
    /**
     * The maximum of hedge requests allowed per seconds. Default: 5.
     */
    max_per_second?: number;
    [k: string]: unknown | undefined;
  };
  named_stores?: NamedStoresConfig;
  cos?: CosStorageConfig2;
  /**
   * Cache validity for active index entries. Should be no higher than -ingester.max-chunk-idle.
   */
  index_cache_validity?: string;
  congestion_control?: {
    /**
     * Use storage congestion control (default: disabled).
     */
    enabled?: boolean;
    controller?: {
      /**
       * Congestion control strategy to use (default: none, options: 'aimd').
       */
      strategy?: string;
      aimd?: {
        /**
         * AIMD starting throughput window size: how many requests can be sent per second (default: 2000). Default: 2000.
         */
        start?: number;
        /**
         * AIMD maximum throughput window size: upper limit of requests sent per second (default: 10000). Default: 10000.
         */
        upper_bound?: number;
        /**
         * AIMD backoff factor when upstream service is throttled to decrease number of requests sent per second (default: 0.5). Default: 0.5.
         */
        backoff_factor?: number;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    retry?: {
      /**
       * Congestion control retry strategy to use (default: none, options: 'limited').
       */
      strategy?: string;
      /**
       * Maximum number of retries allowed. Default: 2.
       */
      limit?: number;
      [k: string]: unknown | undefined;
    };
    hedging?: {
      config?: {
        at?: string;
        up_to?: number;
        max_per_second?: number;
        [k: string]: unknown | undefined;
      };
      /**
       * Congestion control hedge strategy to use (default: none, options: 'limited').
       */
      strategy?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Experimental. Sets a constant prefix for all keys inserted into object storage. Example: loki/
   */
  object_prefix?: string;
  index_queries_cache_config?: CacheConfig7;
  /**
   * Disable broad index queries which results in reduced cache usage and faster query performance at the expense of somewhat higher QPS on the index store.
   */
  disable_broad_index_queries?: boolean;
  /**
   * Maximum number of parallel chunk reads. Default: 150.
   */
  max_parallel_get_chunk?: number;
  /**
   * The maximum number of chunks to fetch per batch. Default: 50.
   */
  max_chunk_batch_size?: number;
  /**
   * Configures storing index in an Object Store (GCS/S3/Azure/Swift/COS/Filesystem) in the form of boltdb files. Required fields only required when boltdb-shipper is defined in config.
   */
  boltdb_shipper?: {
    /**
     * Directory where ingesters would write index files which would then be uploaded by shipper to configured storage
     */
    active_index_directory?: string;
    /**
     * Cache location for restoring index files from storage for queries
     */
    cache_location?: string;
    /**
     * TTL for index files restored in cache for queries
     */
    cache_ttl?: string;
    /**
     * Resync downloaded files with the storage
     */
    resync_interval?: string;
    /**
     * Number of days of common index to be kept downloaded for queries. For per tenant index query readiness, use limits overrides config. Default: 0.
     */
    query_ready_num_days?: number;
    index_gateway_client?: {
      grpc_client_config?: GrpcClient7;
      /**
       * Hostname or IP of the Index Gateway gRPC server running in simple mode. Can also be prefixed with dns+, dnssrv+, or dnssrvnoa+ to resolve a DNS A record with multiple IP's, a DNS SRV record with a followup A record lookup, or a DNS SRV record without a followup A record lookup, respectively.
       */
      server_address?: string;
      /**
       * Whether requests sent to the gateway should be logged or not.
       */
      log_gateway_requests?: boolean;
      [k: string]: unknown | undefined;
    };
    ingestername?: string;
    mode?: string;
    ingesterdbretainperiod?: string;
    /**
     * Build per tenant index files
     */
    build_per_tenant_index?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures storing index in an Object Store (GCS/S3/Azure/Swift/COS/Filesystem) in a prometheus TSDB-like format. Required fields only required when TSDB is defined in config.
   */
  tsdb_shipper?: {
    /**
     * Directory where ingesters would write index files which would then be uploaded by shipper to configured storage
     */
    active_index_directory?: string;
    /**
     * Cache location for restoring index files from storage for queries
     */
    cache_location?: string;
    /**
     * TTL for index files restored in cache for queries
     */
    cache_ttl?: string;
    /**
     * Resync downloaded files with the storage
     */
    resync_interval?: string;
    /**
     * Number of days of common index to be kept downloaded for queries. For per tenant index query readiness, use limits overrides config. Default: 0.
     */
    query_ready_num_days?: number;
    index_gateway_client?: {
      grpc_client_config?: GrpcClient8;
      /**
       * Hostname or IP of the Index Gateway gRPC server running in simple mode. Can also be prefixed with dns+, dnssrv+, or dnssrvnoa+ to resolve a DNS A record with multiple IP's, a DNS SRV record with a followup A record lookup, or a DNS SRV record without a followup A record lookup, respectively.
       */
      server_address?: string;
      /**
       * Whether requests sent to the gateway should be logged or not.
       */
      log_gateway_requests?: boolean;
      [k: string]: unknown | undefined;
    };
    ingestername?: string;
    mode?: string;
    ingesterdbretainperiod?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Experimental: Configures the bloom shipper component, which contains the store abstraction to fetch bloom filters from and put them to object storage.
   */
  bloom_shipper?: {
    /**
     * Working directory to store downloaded bloom blocks. Supports multiple directories, separated by comma.
     */
    working_directory?: string;
    /**
     * Maximum size of bloom pages that should be queried. Larger pages than this limit are skipped when querying blooms to limit memory usage. Default: 64MiB.
     */
    max_query_page_size?: string;
    /**
     * The amount of maximum concurrent bloom blocks downloads. Usually set to 2x number of CPU cores. Default: 8.
     */
    download_parallelism?: number;
    blocks_cache?: {
      /**
       * Cache for bloom blocks. Soft limit of the cache in bytes. Exceeding this limit will trigger evictions of least recently used items in the background. Default: 32GiB.
       */
      soft_limit?: string;
      /**
       * Cache for bloom blocks. Hard limit of the cache in bytes. Exceeding this limit will block execution until soft limit is deceeded. Default: 64GiB.
       */
      hard_limit?: string;
      /**
       * Cache for bloom blocks. The time to live for items in the cache before they get purged.
       */
      ttl?: string;
      [k: string]: unknown | undefined;
    };
    metas_cache?: CacheConfig8;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The alibabacloud_storage_config block configures the connection to Alibaba Cloud Storage object storage backend.
 */
export interface AlibabacloudStorageConfig1 {
  /**
   * Name of OSS bucket.
   */
  bucket?: string;
  /**
   * oss Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * alibabacloud Access Key ID
   */
  access_key_id?: string;
  /**
   * alibabacloud Secret Access Key
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * The aws_storage_config block configures the connection to dynamoDB and S3 object storage. Either one of them or both can be configured.
 */
export interface AwsStorageConfig {
  /**
   * Deprecated: Configures storing indexes in DynamoDB.
   */
  dynamodb?: {
    /**
     * DynamoDB endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<table-name> to use a mock in-memory implementation.
     */
    dynamodb_url?: string;
    /**
     * DynamoDB table management requests per second limit. Default: 2.
     */
    api_limit?: number;
    /**
     * DynamoDB rate cap to back off when throttled. Default: 10.
     */
    throttle_limit?: number;
    metrics?: {
      /**
       * Use metrics-based autoscaling, via this query URL
       */
      url?: string;
      /**
       * Queue length above which we will scale up capacity. Default: 100000.
       */
      target_queue_length?: number;
      /**
       * Scale up capacity by this multiple. Default: 1.3.
       */
      scale_up_factor?: number;
      /**
       * Ignore throttling below this level (rate per second). Default: 1.
       */
      ignore_throttle_below?: number;
      /**
       * query to fetch ingester queue length
       */
      queue_length_query?: string;
      /**
       * query to fetch throttle rates per table
       */
      write_throttle_query?: string;
      /**
       * query to fetch write capacity usage per table
       */
      write_usage_query?: string;
      /**
       * query to fetch read capacity usage per table
       */
      read_usage_query?: string;
      /**
       * query to fetch read errors per table
       */
      read_error_query?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Number of chunks to group together to parallelise fetches (zero to disable). Default: 10.
     */
    chunk_gang_size?: number;
    /**
     * Max number of chunk-get operations to start in parallel. Default: 32.
     */
    chunk_get_max_parallelism?: number;
    backoff_config?: {
      /**
       * Minimum backoff time
       */
      min_period?: string;
      /**
       * Maximum backoff time
       */
      max_period?: string;
      /**
       * Maximum number of times to retry an operation. Default: 20.
       */
      max_retries?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * KMS key used for encrypting DynamoDB items.  DynamoDB will use an Amazon owned KMS key if not provided.
     */
    kms_key_id?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * S3 endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<bucket-name> to use a mock in-memory implementation.
   */
  s3?: string;
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  s3forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over. Overrides any buckets specified in s3.url flag
   */
  bucketnames?: string;
  /**
   * S3 Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * AWS region to use.
   */
  region?: string;
  /**
   * AWS Access Key ID
   */
  access_key_id?: string;
  /**
   * AWS Secret Access Key
   */
  secret_access_key?: string;
  /**
   * AWS Session Token
   */
  session_token?: string;
  /**
   * Disable https on s3 connection.
   */
  insecure?: boolean;
  http_config?: {
    /**
     * Timeout specifies a time limit for requests made by s3 Client.
     */
    timeout?: string;
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    /**
     * Set to true to skip verifying the certificate chain and hostname.
     */
    insecure_skip_verify?: boolean;
    /**
     * Path to the trusted CA file that signed the SSL certificate of the S3 endpoint.
     */
    ca_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The signature version to use for authenticating against S3. Supported values are: v4.
   */
  signature_version?: string;
  /**
   * The S3 storage class which objects will use. Supported values are: GLACIER, DEEP_ARCHIVE, GLACIER_IR, INTELLIGENT_TIERING, ONEZONE_IA, OUTPOSTS, REDUCED_REDUNDANCY, STANDARD, STANDARD_IA.
   */
  storage_class?: string;
  sse?: {
    /**
     * Enable AWS Server Side Encryption. Supported values: SSE-KMS, SSE-S3.
     */
    type?: string;
    /**
     * KMS Key ID used to encrypt objects in S3
     */
    kms_key_id?: string;
    /**
     * KMS Encryption Context used for object encryption. It expects JSON formatted string.
     */
    kms_encryption_context?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when S3 get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when s3 get Object
     */
    min_period?: string;
    /**
     * Maximum backoff time when s3 get Object
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when s3 get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The azure_storage_config block configures the connection to Azure object storage backend.
 */
export interface AzureStorageConfig1 {
  /**
   * Azure Cloud environment. Supported values are: AzureGlobal, AzureChinaCloud, AzureGermanCloud, AzureUSGovernment.
   */
  environment?: string;
  /**
   * Azure storage account name.
   */
  account_name?: string;
  /**
   * Azure storage account key.
   */
  account_key?: string;
  /**
   * If `connection-string` is set, the values of `account-name` and `endpoint-suffix` values will not be used. Use this method over `account-key` if you need to authenticate via a SAS token. Or if you use the Azurite emulator.
   */
  connection_string?: string;
  /**
   * Name of the storage account blob container used to store chunks. This container must be created before running cortex.
   */
  container_name?: string;
  /**
   * Azure storage endpoint suffix without schema. The storage account name will be prefixed to this value to create the FQDN.
   */
  endpoint_suffix?: string;
  /**
   * Use Managed Identity to authenticate to the Azure storage account.
   */
  use_managed_identity?: boolean;
  /**
   * Use Federated Token to authenticate to the Azure storage account.
   */
  use_federated_token?: boolean;
  /**
   * User assigned identity ID to authenticate to the Azure storage account.
   */
  user_assigned_id?: string;
  /**
   * Use Service Principal to authenticate through Azure OAuth.
   */
  use_service_principal?: boolean;
  /**
   * Azure Service Principal ID(GUID).
   */
  client_id?: string;
  /**
   * Azure Service Principal secret key.
   */
  client_secret?: string;
  /**
   * Azure Tenant ID is used to authenticate through Azure OAuth.
   */
  tenant_id?: string;
  /**
   * Chunk delimiter for blob ID to be used
   */
  chunk_delimiter?: string;
  /**
   * Preallocated buffer size for downloads. Default: 512000.
   */
  download_buffer_size?: number;
  /**
   * Preallocated buffer size for uploads. Default: 256000.
   */
  upload_buffer_size?: number;
  /**
   * Number of buffers used to used to upload a chunk. Default: 1.
   */
  upload_buffer_count?: number;
  /**
   * Timeout for requests made against azure blob storage.
   */
  request_timeout?: string;
  /**
   * Number of retries for a request which times out. Default: 5.
   */
  max_retries?: number;
  /**
   * Minimum time to wait before retrying a request.
   */
  min_retry_delay?: string;
  /**
   * Maximum time to wait before retrying a request.
   */
  max_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The bos_storage_config block configures the connection to Baidu Object Storage (BOS) object storage backend.
 */
export interface BosStorageConfig1 {
  /**
   * Name of BOS bucket.
   */
  bucket_name?: string;
  /**
   * BOS endpoint to connect to.
   */
  endpoint?: string;
  /**
   * Baidu Cloud Engine (BCE) Access Key ID.
   */
  access_key_id?: string;
  /**
   * Baidu Cloud Engine (BCE) Secret Access Key.
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient6 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures storing chunks in GCS. Required fields only required when gcs is defined in config.
 */
export interface GcsStorageConfig1 {
  /**
   * Name of GCS bucket. Please refer to https://cloud.google.com/docs/authentication/production for more information about how to configure authentication.
   */
  bucket_name?: string;
  /**
   * Service account key content in JSON format, refer to https://cloud.google.com/iam/docs/creating-managing-service-account-keys for creation.
   */
  service_account?: string;
  /**
   * The size of the buffer that GCS client for each PUT request. 0 to disable buffering. Default: 0.
   */
  chunk_buffer_size?: number;
  /**
   * The duration after which the requests to GCS should be timed out.
   */
  request_timeout?: string;
  /**
   * Enable OpenCensus (OC) instrumentation for all requests.
   */
  enable_opencensus?: boolean;
  /**
   * Enable HTTP2 connections.
   */
  enable_http2?: boolean;
  /**
   * Enable automatic retries of failed idempotent requests.
   */
  enable_retries?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configures storing the chunks on the local file system. Required fields only required when filesystem is present in the configuration.
 */
export interface LocalStorageConfig {
  /**
   * Directory to store chunks in.
   */
  directory?: string;
  [k: string]: unknown | undefined;
}
/**
 * The swift_storage_config block configures the connection to OpenStack Object Storage (Swift) object storage backend.
 */
export interface SwiftStorageConfig1 {
  /**
   * OpenStack Swift authentication API version. 0 to autodetect. Default: 0.
   */
  auth_version?: number;
  /**
   * OpenStack Swift authentication URL
   */
  auth_url?: string;
  /**
   * Set this to true to use the internal OpenStack Swift endpoint URL
   */
  internal?: boolean;
  /**
   * OpenStack Swift username.
   */
  username?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  user_domain_name?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  user_domain_id?: string;
  /**
   * OpenStack Swift user ID.
   */
  user_id?: string;
  /**
   * OpenStack Swift API key.
   */
  password?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  domain_id?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  domain_name?: string;
  /**
   * OpenStack Swift project ID (v2,v3 auth only).
   */
  project_id?: string;
  /**
   * OpenStack Swift project name (v2,v3 auth only).
   */
  project_name?: string;
  /**
   * ID of the OpenStack Swift project's domain (v3 auth only), only needed if it differs the from user domain.
   */
  project_domain_id?: string;
  /**
   * Name of the OpenStack Swift project's domain (v3 auth only), only needed if it differs from the user domain.
   */
  project_domain_name?: string;
  /**
   * OpenStack Swift Region to use (v2,v3 auth only).
   */
  region_name?: string;
  /**
   * Name of the OpenStack Swift container to put chunks in.
   */
  container_name?: string;
  /**
   * Max retries on requests error. Default: 3.
   */
  max_retries?: number;
  /**
   * Time after which a connection attempt is aborted.
   */
  connect_timeout?: string;
  /**
   * Time after which an idle request is aborted. The timeout watchdog is reset each time some data is received, so the timeout triggers after X time no data is received on a request.
   */
  request_timeout?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures additional object stores for a given storage provider.
 * Supported stores: aws, azure, bos, filesystem, gcs, swift.
 * Example:
 * storage_config:
 *   named_stores:
 *     aws:
 *       store-1:
 *         endpoint: s3://foo-bucket
 *         region: us-west1
 * Named store from this example can be used by setting object_store to store-1 in period_config.
 */
export interface NamedStoresConfig {
  aws?: {
    [k: string]: AwsStorageConfig1 | undefined;
  };
  azure?: {
    [k: string]: AzureStorageConfig2 | undefined;
  };
  bos?: {
    [k: string]: BosStorageConfig2 | undefined;
  };
  filesystem?: {
    [k: string]: LocalStorageConfig1 | undefined;
  };
  gcs?: {
    [k: string]: GcsStorageConfig2 | undefined;
  };
  alibabacloud?: {
    [k: string]: AlibabacloudStorageConfig2 | undefined;
  };
  swift?: {
    [k: string]: SwiftStorageConfig2 | undefined;
  };
  cos?: {
    [k: string]: CosStorageConfig1 | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AwsStorageConfig1 {
  /**
   * Deprecated: Configures storing indexes in DynamoDB.
   */
  dynamodb?: {
    /**
     * DynamoDB endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<table-name> to use a mock in-memory implementation.
     */
    dynamodb_url?: string;
    /**
     * DynamoDB table management requests per second limit. Default: 2.
     */
    api_limit?: number;
    /**
     * DynamoDB rate cap to back off when throttled. Default: 10.
     */
    throttle_limit?: number;
    metrics?: {
      /**
       * Use metrics-based autoscaling, via this query URL
       */
      url?: string;
      /**
       * Queue length above which we will scale up capacity. Default: 100000.
       */
      target_queue_length?: number;
      /**
       * Scale up capacity by this multiple. Default: 1.3.
       */
      scale_up_factor?: number;
      /**
       * Ignore throttling below this level (rate per second). Default: 1.
       */
      ignore_throttle_below?: number;
      /**
       * query to fetch ingester queue length
       */
      queue_length_query?: string;
      /**
       * query to fetch throttle rates per table
       */
      write_throttle_query?: string;
      /**
       * query to fetch write capacity usage per table
       */
      write_usage_query?: string;
      /**
       * query to fetch read capacity usage per table
       */
      read_usage_query?: string;
      /**
       * query to fetch read errors per table
       */
      read_error_query?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Number of chunks to group together to parallelise fetches (zero to disable). Default: 10.
     */
    chunk_gang_size?: number;
    /**
     * Max number of chunk-get operations to start in parallel. Default: 32.
     */
    chunk_get_max_parallelism?: number;
    backoff_config?: {
      /**
       * Minimum backoff time
       */
      min_period?: string;
      /**
       * Maximum backoff time
       */
      max_period?: string;
      /**
       * Maximum number of times to retry an operation. Default: 20.
       */
      max_retries?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * KMS key used for encrypting DynamoDB items.  DynamoDB will use an Amazon owned KMS key if not provided.
     */
    kms_key_id?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * S3 endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<bucket-name> to use a mock in-memory implementation.
   */
  s3?: string;
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  s3forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over. Overrides any buckets specified in s3.url flag
   */
  bucketnames?: string;
  /**
   * S3 Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * AWS region to use.
   */
  region?: string;
  /**
   * AWS Access Key ID
   */
  access_key_id?: string;
  /**
   * AWS Secret Access Key
   */
  secret_access_key?: string;
  /**
   * AWS Session Token
   */
  session_token?: string;
  /**
   * Disable https on s3 connection.
   */
  insecure?: boolean;
  http_config?: {
    /**
     * Timeout specifies a time limit for requests made by s3 Client.
     */
    timeout?: string;
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    /**
     * Set to true to skip verifying the certificate chain and hostname.
     */
    insecure_skip_verify?: boolean;
    /**
     * Path to the trusted CA file that signed the SSL certificate of the S3 endpoint.
     */
    ca_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The signature version to use for authenticating against S3. Supported values are: v4.
   */
  signature_version?: string;
  /**
   * The S3 storage class which objects will use. Supported values are: GLACIER, DEEP_ARCHIVE, GLACIER_IR, INTELLIGENT_TIERING, ONEZONE_IA, OUTPOSTS, REDUCED_REDUNDANCY, STANDARD, STANDARD_IA.
   */
  storage_class?: string;
  sse?: {
    /**
     * Enable AWS Server Side Encryption. Supported values: SSE-KMS, SSE-S3.
     */
    type?: string;
    /**
     * KMS Key ID used to encrypt objects in S3
     */
    kms_key_id?: string;
    /**
     * KMS Encryption Context used for object encryption. It expects JSON formatted string.
     */
    kms_encryption_context?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when S3 get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when s3 get Object
     */
    min_period?: string;
    /**
     * Maximum backoff time when s3 get Object
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when s3 get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AzureStorageConfig2 {
  /**
   * Azure Cloud environment. Supported values are: AzureGlobal, AzureChinaCloud, AzureGermanCloud, AzureUSGovernment.
   */
  environment?: string;
  /**
   * Azure storage account name.
   */
  account_name?: string;
  /**
   * Azure storage account key.
   */
  account_key?: string;
  /**
   * If `connection-string` is set, the values of `account-name` and `endpoint-suffix` values will not be used. Use this method over `account-key` if you need to authenticate via a SAS token. Or if you use the Azurite emulator.
   */
  connection_string?: string;
  /**
   * Name of the storage account blob container used to store chunks. This container must be created before running cortex.
   */
  container_name?: string;
  /**
   * Azure storage endpoint suffix without schema. The storage account name will be prefixed to this value to create the FQDN.
   */
  endpoint_suffix?: string;
  /**
   * Use Managed Identity to authenticate to the Azure storage account.
   */
  use_managed_identity?: boolean;
  /**
   * Use Federated Token to authenticate to the Azure storage account.
   */
  use_federated_token?: boolean;
  /**
   * User assigned identity ID to authenticate to the Azure storage account.
   */
  user_assigned_id?: string;
  /**
   * Use Service Principal to authenticate through Azure OAuth.
   */
  use_service_principal?: boolean;
  /**
   * Azure Service Principal ID(GUID).
   */
  client_id?: string;
  /**
   * Azure Service Principal secret key.
   */
  client_secret?: string;
  /**
   * Azure Tenant ID is used to authenticate through Azure OAuth.
   */
  tenant_id?: string;
  /**
   * Chunk delimiter for blob ID to be used
   */
  chunk_delimiter?: string;
  /**
   * Preallocated buffer size for downloads. Default: 512000.
   */
  download_buffer_size?: number;
  /**
   * Preallocated buffer size for uploads. Default: 256000.
   */
  upload_buffer_size?: number;
  /**
   * Number of buffers used to used to upload a chunk. Default: 1.
   */
  upload_buffer_count?: number;
  /**
   * Timeout for requests made against azure blob storage.
   */
  request_timeout?: string;
  /**
   * Number of retries for a request which times out. Default: 5.
   */
  max_retries?: number;
  /**
   * Minimum time to wait before retrying a request.
   */
  min_retry_delay?: string;
  /**
   * Maximum time to wait before retrying a request.
   */
  max_retry_delay?: string;
  [k: string]: unknown | undefined;
}
export interface BosStorageConfig2 {
  /**
   * Name of BOS bucket.
   */
  bucket_name?: string;
  /**
   * BOS endpoint to connect to.
   */
  endpoint?: string;
  /**
   * Baidu Cloud Engine (BCE) Access Key ID.
   */
  access_key_id?: string;
  /**
   * Baidu Cloud Engine (BCE) Secret Access Key.
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
export interface LocalStorageConfig1 {
  /**
   * Directory to store chunks in.
   */
  directory?: string;
  [k: string]: unknown | undefined;
}
export interface GcsStorageConfig2 {
  /**
   * Name of GCS bucket. Please refer to https://cloud.google.com/docs/authentication/production for more information about how to configure authentication.
   */
  bucket_name?: string;
  /**
   * Service account key content in JSON format, refer to https://cloud.google.com/iam/docs/creating-managing-service-account-keys for creation.
   */
  service_account?: string;
  /**
   * The size of the buffer that GCS client for each PUT request. 0 to disable buffering. Default: 0.
   */
  chunk_buffer_size?: number;
  /**
   * The duration after which the requests to GCS should be timed out.
   */
  request_timeout?: string;
  /**
   * Enable OpenCensus (OC) instrumentation for all requests.
   */
  enable_opencensus?: boolean;
  /**
   * Enable HTTP2 connections.
   */
  enable_http2?: boolean;
  /**
   * Enable automatic retries of failed idempotent requests.
   */
  enable_retries?: boolean;
  [k: string]: unknown | undefined;
}
export interface AlibabacloudStorageConfig2 {
  /**
   * Name of OSS bucket.
   */
  bucket?: string;
  /**
   * oss Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * alibabacloud Access Key ID
   */
  access_key_id?: string;
  /**
   * alibabacloud Secret Access Key
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
export interface SwiftStorageConfig2 {
  /**
   * OpenStack Swift authentication API version. 0 to autodetect. Default: 0.
   */
  auth_version?: number;
  /**
   * OpenStack Swift authentication URL
   */
  auth_url?: string;
  /**
   * Set this to true to use the internal OpenStack Swift endpoint URL
   */
  internal?: boolean;
  /**
   * OpenStack Swift username.
   */
  username?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  user_domain_name?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  user_domain_id?: string;
  /**
   * OpenStack Swift user ID.
   */
  user_id?: string;
  /**
   * OpenStack Swift API key.
   */
  password?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  domain_id?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  domain_name?: string;
  /**
   * OpenStack Swift project ID (v2,v3 auth only).
   */
  project_id?: string;
  /**
   * OpenStack Swift project name (v2,v3 auth only).
   */
  project_name?: string;
  /**
   * ID of the OpenStack Swift project's domain (v3 auth only), only needed if it differs the from user domain.
   */
  project_domain_id?: string;
  /**
   * Name of the OpenStack Swift project's domain (v3 auth only), only needed if it differs from the user domain.
   */
  project_domain_name?: string;
  /**
   * OpenStack Swift Region to use (v2,v3 auth only).
   */
  region_name?: string;
  /**
   * Name of the OpenStack Swift container to put chunks in.
   */
  container_name?: string;
  /**
   * Max retries on requests error. Default: 3.
   */
  max_retries?: number;
  /**
   * Time after which a connection attempt is aborted.
   */
  connect_timeout?: string;
  /**
   * Time after which an idle request is aborted. The timeout watchdog is reset each time some data is received, so the timeout triggers after X time no data is received on a request.
   */
  request_timeout?: string;
  [k: string]: unknown | undefined;
}
export interface CosStorageConfig1 {
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over.
   */
  bucketnames?: string;
  /**
   * COS Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * COS region to use.
   */
  region?: string;
  /**
   * COS HMAC Access Key ID.
   */
  access_key_id?: string;
  /**
   * COS HMAC Secret Access Key.
   */
  secret_access_key?: string;
  http_config?: {
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when cos get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when cos get Object.
     */
    min_period?: string;
    /**
     * Maximum backoff time when cos get Object.
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when cos get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * IAM API key to access COS.
   */
  api_key?: string;
  /**
   * COS service instance id to use.
   */
  service_instance_id?: string;
  /**
   * IAM Auth Endpoint for authentication.
   */
  auth_endpoint?: string;
  /**
   * Compute resource token file path.
   */
  cr_token_file_path?: string;
  /**
   * Name of the trusted profile.
   */
  trusted_profile_name?: string;
  /**
   * ID of the trusted profile.
   */
  trusted_profile_id?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cos_storage_config block configures the connection to IBM Cloud Object Storage (COS) backend.
 */
export interface CosStorageConfig2 {
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over.
   */
  bucketnames?: string;
  /**
   * COS Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * COS region to use.
   */
  region?: string;
  /**
   * COS HMAC Access Key ID.
   */
  access_key_id?: string;
  /**
   * COS HMAC Secret Access Key.
   */
  secret_access_key?: string;
  http_config?: {
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when cos get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when cos get Object.
     */
    min_period?: string;
    /**
     * Maximum backoff time when cos get Object.
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when cos get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * IAM API key to access COS.
   */
  api_key?: string;
  /**
   * COS service instance id to use.
   */
  service_instance_id?: string;
  /**
   * IAM Auth Endpoint for authentication.
   */
  auth_endpoint?: string;
  /**
   * Compute resource token file path.
   */
  cr_token_file_path?: string;
  /**
   * Name of the trusted profile.
   */
  trusted_profile_name?: string;
  /**
   * ID of the trusted profile.
   */
  trusted_profile_id?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig7 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient7 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient8 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig8 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The chunk_store_config block configures how chunks will be cached and how long to wait before saving them to the backing store.
 */
export interface ChunkStoreConfig {
  chunk_cache_config?: CacheConfig9;
  chunk_cache_config_l2?: CacheConfig10;
  write_dedupe_cache_config?: CacheConfig11;
  /**
   * Chunks will be handed off to the L2 cache after this duration. 0 to disable L2 cache.
   */
  l2_chunk_cache_handoff?: string;
  /**
   * Cache index entries older than this period. 0 to disable.
   */
  cache_lookups_older_than?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig9 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The cache_config block configures the cache backend for a specific Loki component.
 */
export interface CacheConfig10 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Write dedupe cache is deprecated along with legacy index types (aws, aws-dynamo, bigtable, bigtable-hashed, cassandra, gcp, gcp-columnkey, grpc-store).
 * Consider using TSDB index which does not require a write dedupe cache.
 */
export interface CacheConfig11 {
  /**
   * The default validity of entries for caches unless overridden.
   */
  default_validity?: string;
  background?: {
    /**
     * At what concurrency to write back to cache. Default: 1.
     */
    writeback_goroutines?: number;
    /**
     * How many key batches to buffer for background write-back. Default is large to prefer size based limiting. Default: 500000.
     */
    writeback_buffer?: number;
    /**
     * Size limit in bytes for background write-back. Default: 500MB.
     */
    writeback_size_limit?: string;
    [k: string]: unknown | undefined;
  };
  memcached?: {
    /**
     * How long keys stay in the memcache.
     */
    expiration?: string;
    /**
     * How many keys to fetch in each batch. Default: 4.
     */
    batch_size?: number;
    /**
     * Maximum active requests to memcache. Default: 5.
     */
    parallelism?: number;
    [k: string]: unknown | undefined;
  };
  memcached_client?: {
    /**
     * Hostname for memcached service to use. If empty and if addresses is unset, no memcached will be used.
     */
    host?: string;
    /**
     * SRV service used to discover memcache servers.
     */
    service?: string;
    /**
     * Comma separated addresses list in DNS Service Discovery format: https://grafana.com/docs/mimir/latest/configure/about-dns-service-discovery/#supported-discovery-modes
     */
    addresses?: string;
    /**
     * Maximum time to wait before giving up on memcached requests.
     */
    timeout?: string;
    /**
     * Maximum number of idle connections in pool. Default: 16.
     */
    max_idle_conns?: number;
    /**
     * The maximum size of an item stored in memcached. Bigger items are not stored. If set to 0, no maximum size is enforced. Default: 0.
     */
    max_item_size?: number;
    /**
     * Period with which to poll DNS for memcache servers.
     */
    update_interval?: string;
    /**
     * Use consistent hashing to distribute to memcache servers.
     */
    consistent_hash?: boolean;
    /**
     * Trip circuit-breaker after this number of consecutive dial failures (if zero then circuit-breaker is disabled). Default: 10.
     */
    circuit_breaker_consecutive_failures?: number;
    /**
     * Duration circuit-breaker remains open after tripping (if zero then 60 seconds is used).
     */
    circuit_breaker_timeout?: string;
    /**
     * Reset circuit-breaker counts after this long (if zero then never reset).
     */
    circuit_breaker_interval?: string;
    /**
     * Enable connecting to Memcached with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
     */
    tls_cert_path?: string;
    /**
     * Path to the key for the client certificate. Also requires the client certificate to be configured.
     */
    tls_key_path?: string;
    /**
     * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
     */
    tls_ca_path?: string;
    /**
     * Override the expected name on the server certificate.
     */
    tls_server_name?: string;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Override the default cipher suite list (separated by commas). Allowed values:
     *
     * Secure Ciphers:
     * - TLS_AES_128_GCM_SHA256
     * - TLS_AES_256_GCM_SHA384
     * - TLS_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
     * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
     * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
     *
     * Insecure Ciphers:
     * - TLS_RSA_WITH_RC4_128_SHA
     * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA
     * - TLS_RSA_WITH_AES_256_CBC_SHA
     * - TLS_RSA_WITH_AES_128_CBC_SHA256
     * - TLS_RSA_WITH_AES_128_GCM_SHA256
     * - TLS_RSA_WITH_AES_256_GCM_SHA384
     * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
     * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
     * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
     * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
     *
     */
    tls_cipher_suites?: string;
    /**
     * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
     */
    tls_min_version?: string;
    [k: string]: unknown | undefined;
  };
  redis?: {
    /**
     * Redis Server or Cluster configuration endpoint to use for caching. A comma-separated list of endpoints for Redis Cluster or Redis Sentinel. If empty, no redis will be used.
     */
    endpoint?: string;
    /**
     * Redis Sentinel master name. An empty string for Redis Server or Redis Cluster.
     */
    master_name?: string;
    /**
     * Maximum time to wait before giving up on redis requests.
     */
    timeout?: string;
    /**
     * How long keys stay in the redis.
     */
    expiration?: string;
    /**
     * Database index. Default: 0.
     */
    db?: number;
    /**
     * Maximum number of connections in the pool. Default: 0.
     */
    pool_size?: number;
    /**
     * Username to use when connecting to redis.
     */
    username?: string;
    /**
     * Password to use when connecting to redis.
     */
    password?: string;
    /**
     * Enable connecting to redis with TLS.
     */
    tls_enabled?: boolean;
    /**
     * Skip validating server certificate.
     */
    tls_insecure_skip_verify?: boolean;
    /**
     * Close connections after remaining idle for this duration. If the value is zero, then idle connections are not closed.
     */
    idle_timeout?: string;
    /**
     * Close connections older than this duration. If the value is zero, then the pool does not close connections based on age.
     */
    max_connection_age?: string;
    /**
     * By default, the Redis client only reads from the master node. Enabling this option can lower pressure on the master node by randomly routing read-only commands to the master and any available replicas.
     */
    route_randomly?: boolean;
    [k: string]: unknown | undefined;
  };
  embedded_cache?: {
    /**
     * Whether embedded cache is enabled.
     */
    enabled?: boolean;
    /**
     * Maximum memory size of the cache in MB. Default: 100.
     */
    max_size_mb?: number;
    /**
     * Maximum number of entries in the cache. Default: 0.
     */
    max_size_items?: number;
    /**
     * The time to live for items in the cache before they get purged.
     */
    ttl?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configures the chunk index schema and where it is stored.
 */
export interface SchemaConfig {
  configs?: PeriodConfig[] | null;
  [k: string]: unknown | undefined;
}
export interface PeriodConfig {
  /**
   * The date of the first day that index buckets should be created. Use a date in the past if this is your only period_config, otherwise use a date when you want the schema to switch over. In YYYY-MM-DD format, for example: 2018-04-15.
   */
  from?: string;
  /**
   * store and object_store below affect which <storage_config> key is used. Which index to use. Either tsdb or boltdb-shipper. Following stores are deprecated: aws, aws-dynamo, gcp, gcp-columnkey, bigtable, bigtable-hashed, cassandra, grpc.
   */
  store?: string;
  /**
   * Which store to use for the chunks. Either aws (alias s3), azure, gcs, alibabacloud, bos, cos, swift, filesystem, or a named_store (refer to named_stores_config). Following stores are deprecated: aws-dynamo, gcp, gcp-columnkey, bigtable, bigtable-hashed, cassandra, grpc.
   */
  object_store?: string;
  /**
   * The schema version to use, current recommended schema is v13.
   */
  schema?: string;
  /**
   * Configures how the index is updated and stored.
   */
  index?: {
    /**
     * Path prefix for index tables. Prefix always needs to end with a path delimiter '/', except when the prefix is empty.
     */
    path_prefix?: string;
    /**
     * Table prefix for all period tables.
     */
    prefix?: string;
    /**
     * Table period.
     */
    period?: string;
    /**
     * A map to be added to all managed tables.
     */
    tags?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Configured how the chunks are updated and stored.
   */
  chunks?: {
    /**
     * Table prefix for all period tables.
     */
    prefix?: string;
    /**
     * Table period.
     */
    period?: string;
    /**
     * A map to be added to all managed tables.
     */
    tags?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * How many shards will be created. Only used if schema is v10 or greater. Default: 16.
   */
  row_shards?: number;
  [k: string]: unknown | undefined;
}
/**
 * The compactor block configures the compactor component, which compacts index shards for performance.
 */
export interface Compactor {
  /**
   * Directory where files can be downloaded for compaction.
   */
  working_directory?: string;
  /**
   * Interval at which to re-run the compaction operation.
   */
  compaction_interval?: string;
  /**
   * Interval at which to apply/enforce retention. 0 means run at same interval as compaction. If non-zero, it should always be a multiple of compaction interval.
   */
  apply_retention_interval?: string;
  /**
   * Activate custom (per-stream,per-tenant) retention.
   */
  retention_enabled?: boolean;
  /**
   * Delay after which chunks will be fully deleted during retention.
   */
  retention_delete_delay?: string;
  /**
   * The total amount of worker to use to delete chunks. Default: 150.
   */
  retention_delete_worker_count?: number;
  /**
   * The maximum amount of time to spend running retention and deletion on any given table in the index.
   */
  retention_table_timeout?: string;
  /**
   * Store used for managing delete requests.
   */
  delete_request_store?: string;
  /**
   * Path prefix for storing delete requests.
   */
  delete_request_store_key_prefix?: string;
  /**
   * The max number of delete requests to run per compaction cycle. Default: 70.
   */
  delete_batch_size?: number;
  /**
   * Allow cancellation of delete request until duration after they are created. Data would be deleted only after delete requests have been older than this duration. Ideally this should be set to at least 24h.
   */
  delete_request_cancel_period?: string;
  /**
   * Constrain the size of any single delete request with line filters. When a delete request > delete_max_interval is input, the request is sharded into smaller requests of no more than delete_max_interval
   */
  delete_max_interval?: string;
  /**
   * Maximum number of tables to compact in parallel. While increasing this value, please make sure compactor has enough disk space allocated to be able to store and compact as many tables. Default: 1.
   */
  max_compaction_parallelism?: number;
  /**
   * Number of upload/remove operations to execute in parallel when finalizing a compaction. NOTE: This setting is per compaction operation, which can be executed in parallel. The upper bound on the number of concurrent uploads is upload_parallelism * max_compaction_parallelism. Default: 10.
   */
  upload_parallelism?: number;
  /**
   * The hash ring configuration used by compactors to elect a single instance for running compactions. The CLI flags prefix for this block config is: compactor.ring
   */
  compactor_ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul7;
      etcd?: Etcd7;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which compactors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * True to enable zone-awareness and replicate blocks across different availability zones.
     */
    zone_awareness_enabled?: boolean;
    num_tokens?: unknown;
    replication_factor?: unknown;
    /**
     * Instance ID to register in the ring.
     */
    instance_id?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    /**
     * Port to advertise in the ring (defaults to server.grpc-listen-port). Default: 0.
     */
    instance_port?: number;
    /**
     * IP address to advertise in the ring.
     */
    instance_addr?: string;
    /**
     * The availability zone where this instance is running. Required if zone-awareness is enabled.
     */
    instance_availability_zone?: string;
    /**
     * Enable using a IPv6 instance address.
     */
    instance_enable_ipv6?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Number of tables that compactor will try to compact. Newer tables are chosen when this is less than the number of tables available. Default: 0.
   */
  tables_to_compact?: number;
  /**
   * Do not compact N latest tables. Together with -compactor.run-once and -compactor.tables-to-compact, this is useful when clearing compactor backlogs. Default: 0.
   */
  skip_latest_n_tables?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul7 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd7 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * The limits_config block configures global and per-tenant limits in Loki. The values here can be overridden in the `overrides` section of the runtime_config file
 */
export interface LimitsConfig {
  /**
   * Whether the ingestion rate limit should be applied individually to each distributor instance (local), or evenly shared across the cluster (global). The ingestion rate strategy cannot be overridden on a per-tenant basis.
   * - local: enforces the limit on a per distributor basis. The actual effective rate limit will be N times higher, where N is the number of distributor replicas.
   * - global: enforces the limit globally, configuring a per-distributor local rate limiter as 'ingestion_rate / N', where N is the number of distributor replicas (it's automatically adjusted if the number of replicas change). The global strategy requires the distributors to form their own ring, which is used to keep track of the current number of healthy distributor replicas.
   */
  ingestion_rate_strategy?: string;
  /**
   * Per-user ingestion rate limit in sample size per second. Units in MB. Default: 4.
   */
  ingestion_rate_mb?: number;
  /**
   * Per-user allowed ingestion burst size (in sample size). Units in MB. The burst size refers to the per-distributor local rate limiter even in the case of the 'global' strategy, and should be set at least to the maximum logs size expected in a single push request. Default: 6.
   */
  ingestion_burst_size_mb?: number;
  /**
   * Maximum length accepted for label names. Default: 1024.
   */
  max_label_name_length?: number;
  /**
   * Maximum length accepted for label value. This setting also applies to the metric name. Default: 2048.
   */
  max_label_value_length?: number;
  /**
   * Maximum number of label names per series. Default: 15.
   */
  max_label_names_per_series?: number;
  /**
   * Whether or not old samples will be rejected.
   */
  reject_old_samples?: boolean;
  /**
   * Maximum accepted sample age before rejecting.
   */
  reject_old_samples_max_age?: string;
  /**
   * Duration which table will be created/deleted before/after it's needed; we won't accept sample from before this time.
   */
  creation_grace_period?: string;
  /**
   * Maximum line size on ingestion path. Example: 256kb. Any log line exceeding this limit will be discarded unless `distributor.max-line-size-truncate` is set which in case it is truncated instead of discarding it completely. There is no limit when unset or set to 0. Default: 256KB.
   */
  max_line_size?: string;
  /**
   * Whether to truncate lines that exceed max_line_size.
   */
  max_line_size_truncate?: boolean;
  /**
   * Alter the log line timestamp during ingestion when the timestamp is the same as the previous entry for the same stream. When enabled, if a log line in a push request has the same timestamp as the previous line for the same stream, one nanosecond is added to the log line. This will preserve the received order of log lines with the exact same timestamp when they are queried, by slightly altering their stored timestamp. NOTE: This is imperfect, because Loki accepts out of order writes, and another push request for the same stream could contain duplicate timestamps to existing entries and they will not be incremented.
   */
  increment_duplicate_timestamp?: boolean;
  /**
   * If no service_name label exists, Loki maps a single label from the configured list to service_name. If none of the configured labels exist in the stream, label is set to unknown_service. Empty list disables setting the label.
   */
  discover_service_name?: string[] | null;
  /**
   * Discover and add log levels during ingestion, if not present already. Levels would be added to Structured Metadata with name 'level' and one of the values from 'debug', 'info', 'warn', 'error', 'critical', 'fatal'.
   */
  discover_log_levels?: boolean;
  /**
   * Maximum number of active streams per user, per ingester. 0 to disable. Default: 0.
   */
  max_streams_per_user?: number;
  /**
   * Maximum number of active streams per user, across the cluster. 0 to disable. When the global limit is enabled, each ingester is configured with a dynamic local limit based on the replication factor and the current number of healthy ingesters, and is kept updated whenever the number of ingesters change. Default: 5000.
   */
  max_global_streams_per_user?: number;
  /**
   * Deprecated. When true, out-of-order writes are accepted.
   */
  unordered_writes?: boolean;
  /**
   * Maximum byte rate per second per stream, also expressible in human readable forms (1MB, 256KB, etc). Default: 3MB.
   */
  per_stream_rate_limit?: string;
  /**
   * Maximum burst bytes per stream, also expressible in human readable forms (1MB, 256KB, etc). This is how far above the rate limit a stream can 'burst' before the stream is limited. Default: 15MB.
   */
  per_stream_rate_limit_burst?: string;
  /**
   * Maximum number of chunks that can be fetched in a single query. Default: 2000000.
   */
  max_chunks_per_query?: number;
  /**
   * Limit the maximum of unique series that is returned by a metric query. When the limit is reached an error is returned. Default: 500.
   */
  max_query_series?: number;
  /**
   * Limit how far back in time series data and metadata can be queried, up until lookback duration ago. This limit is enforced in the query frontend, the querier and the ruler. If the requested time range is outside the allowed range, the request will not fail, but will be modified to only query data within the allowed time range. The default value of 0 does not set a limit.
   */
  max_query_lookback?: string;
  /**
   * The limit to length of chunk store queries. 0 to disable.
   */
  max_query_length?: string;
  /**
   * Limit the length of the [range] inside a range query. Default is 0 or unlimited
   */
  max_query_range?: string;
  /**
   * Maximum number of queries that will be scheduled in parallel by the frontend. Default: 32.
   */
  max_query_parallelism?: number;
  /**
   * Maximum number of queries will be scheduled in parallel by the frontend for TSDB schemas. Default: 128.
   */
  tsdb_max_query_parallelism?: number;
  /**
   * Target maximum number of bytes assigned to a single sharded query. Also expressible in human readable forms (1GB, etc). Note: This is a _target_ and not an absolute limit. The actual limit can be higher, but the query planner will try to build shards up to this limit. Default: 600MB.
   */
  tsdb_max_bytes_per_shard?: string;
  /**
   * sharding strategy to use in query planning. Suggested to use bounded once all nodes can recognize it.
   */
  tsdb_sharding_strategy?: string;
  /**
   * Cardinality limit for index queries. Default: 100000.
   */
  cardinality_limit?: number;
  /**
   * Maximum number of stream matchers per query. Default: 1000.
   */
  max_streams_matchers_per_query?: number;
  /**
   * Maximum number of concurrent tail requests. Default: 10.
   */
  max_concurrent_tail_requests?: number;
  /**
   * Maximum number of log entries that will be returned for a query. Default: 5000.
   */
  max_entries_limit_per_query?: number;
  /**
   * Most recent allowed cacheable result per-tenant, to prevent caching very recent results that might still be in flux.
   */
  max_cache_freshness_per_query?: string;
  /**
   * Do not cache metadata request if the end time is within the frontend.max-metadata-cache-freshness window. Set this to 0 to apply no such limits. Defaults to 24h.
   */
  max_metadata_cache_freshness?: string;
  /**
   * Do not cache requests with an end time that falls within Now minus this duration. 0 disables this feature (default).
   */
  max_stats_cache_freshness?: string;
  /**
   * Maximum number of queriers that can handle requests for a single tenant. If set to 0 or value higher than number of available queriers, *all* queriers will handle requests for the tenant. Each frontend (or query-scheduler, if used) will select the same set of queriers for the same tenant (given that all queriers are connected to all frontends / query-schedulers). This option only works with queriers connecting to the query-frontend / query-scheduler, not when using downstream URL. Default: 0.
   */
  max_queriers_per_tenant?: number;
  /**
   * How much of the available query capacity ("querier" components in distributed mode, "read" components in SSD mode) can be used by a single tenant. Allowed values are 0.0 to 1.0. For example, setting this to 0.5 would allow a tenant to use half of the available queriers for processing the query workload. If set to 0, query capacity is determined by frontend.max-queriers-per-tenant. When both frontend.max-queriers-per-tenant and frontend.max-query-capacity are configured, smaller value of the resulting querier replica count is considered: min(frontend.max-queriers-per-tenant, ceil(querier_replicas * frontend.max-query-capacity)). *All* queriers will handle requests for the tenant if neither limits are applied. This option only works with queriers connecting to the query-frontend / query-scheduler, not when using downstream URL. Use this feature in a multi-tenant setup where you need to limit query capacity for certain tenants. Default: 0.
   */
  max_query_capacity?: number;
  /**
   * Number of days of index to be kept always downloaded for queries. Applies only to per user index in boltdb-shipper index store. 0 to disable. Default: 0.
   */
  query_ready_index_num_days?: number;
  /**
   * Timeout when querying backends (ingesters or storage) during the execution of a query request. When a specific per-tenant timeout is used, the global timeout is ignored.
   */
  query_timeout?: string;
  /**
   * Split queries by a time interval and execute in parallel. The value 0 disables splitting by time. This also determines how cache keys are chosen when result caching is enabled.
   */
  split_queries_by_interval?: string;
  /**
   * Split metadata queries by a time interval and execute in parallel. The value 0 disables splitting metadata queries by time. This also determines how cache keys are chosen when label/series result caching is enabled.
   */
  split_metadata_queries_by_interval?: string;
  /**
   * Experimental. Split interval to use for the portion of metadata request that falls within `recent_metadata_query_window`. Rest of the request which is outside the window still uses `split_metadata_queries_by_interval`. If set to 0, the entire request defaults to using a split interval of `split_metadata_queries_by_interval.`.
   */
  split_recent_metadata_queries_by_interval?: string;
  /**
   * Experimental. Metadata query window inside which `split_recent_metadata_queries_by_interval` gets applied, portion of the metadata request that falls in this window is split using `split_recent_metadata_queries_by_interval`. The value 0 disables using a different split interval for recent metadata queries.
   *
   * This is added to improve cacheability of recent metadata queries. Query split interval also determines the interval used in cache key. The default split interval of 24h is useful for caching long queries, each cache key holding 1 day's results. But metadata queries are often shorter than 24h, to cache them effectively we need a smaller split interval. `recent_metadata_query_window` along with `split_recent_metadata_queries_by_interval` help configure a shorter split interval for recent metadata queries.
   */
  recent_metadata_query_window?: string;
  /**
   * Split instant metric queries by a time interval and execute in parallel. The value 0 disables splitting instant metric queries by time. This also determines how cache keys are chosen when instant metric query result caching is enabled.
   */
  split_instant_metric_queries_by_interval?: string;
  /**
   * Interval to use for time-based splitting when a request is within the `query_ingesters_within` window; defaults to `split-queries-by-interval` by setting to 0.
   */
  split_ingester_queries_by_interval?: string;
  /**
   * Limit queries that can be sharded. Queries within the time range of now and now minus this sharding lookback are not sharded. The default value of 0s disables the lookback, causing sharding of all queries at all times.
   */
  min_sharding_lookback?: string;
  /**
   * Max number of bytes a query can fetch. Enforced in log and metric queries only when TSDB is used. The default value of 0 disables this limit. Default: 0B.
   */
  max_query_bytes_read?: string;
  /**
   * Max number of bytes a query can fetch after splitting and sharding. Enforced in log and metric queries only when TSDB is used. The default value of 0 disables this limit. Default: 150GB.
   */
  max_querier_bytes_read?: string;
  /**
   * Enable log-volume endpoints.
   */
  volume_enabled?: boolean;
  /**
   * The maximum number of aggregated series in a log-volume response. Default: 1000.
   */
  volume_max_series?: number;
  /**
   * Maximum number of rules per rule group per-tenant. 0 to disable. Default: 0.
   */
  ruler_max_rules_per_rule_group?: number;
  /**
   * Maximum number of rule groups per-tenant. 0 to disable. Default: 0.
   */
  ruler_max_rule_groups_per_tenant?: number;
  /**
   * The default tenant's shard size when shuffle-sharding is enabled in the ruler. When this setting is specified in the per-tenant overrides, a value of 0 disables shuffle sharding for the tenant. Default: 0.
   */
  ruler_tenant_shard_size?: number;
  /**
   * Disable recording rules remote-write.
   */
  ruler_remote_write_disabled?: boolean;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. The URL of the endpoint to send samples to.
   */
  ruler_remote_write_url?: string;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Timeout for requests to the remote write endpoint.
   */
  ruler_remote_write_timeout?: string;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Custom HTTP headers to be sent along with each remote write request. Be aware that headers that are set by Loki itself can't be overwritten.
   */
  ruler_remote_write_headers?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. List of remote write relabel configurations.
   */
  ruler_remote_write_relabel_configs?:
    | {
        [k: string]: unknown | undefined;
      }[]
    | null;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Number of samples to buffer per shard before we block reading of more samples from the WAL. It is recommended to have enough capacity in each shard to buffer several requests to keep throughput up while processing occasional slow remote requests.
   */
  ruler_remote_write_queue_capacity?: number;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Minimum number of shards, i.e. amount of concurrency.
   */
  ruler_remote_write_queue_min_shards?: number;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Maximum number of shards, i.e. amount of concurrency.
   */
  ruler_remote_write_queue_max_shards?: number;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Maximum number of samples per send.
   */
  ruler_remote_write_queue_max_samples_per_send?: number;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Maximum time a sample will wait in buffer.
   */
  ruler_remote_write_queue_batch_send_deadline?: string;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Initial retry delay. Gets doubled for every retry.
   */
  ruler_remote_write_queue_min_backoff?: string;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Maximum retry delay.
   */
  ruler_remote_write_queue_max_backoff?: string;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Retry upon receiving a 429 status code from the remote-write storage. This is experimental and might change in the future.
   */
  ruler_remote_write_queue_retry_on_ratelimit?: boolean;
  /**
   * Deprecated: Use 'ruler_remote_write_config' instead. Configures AWS's Signature Verification 4 signing process to sign every remote write request.
   */
  ruler_remote_write_sigv4_config?: {
    region?: string;
    access_key?: string;
    secret_key?: string;
    profile?: string;
    role_arn?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures global and per-tenant limits for remote write clients. A map with remote client id as key.
   */
  ruler_remote_write_config?: {
    [k: string]: RemoteWrite;
  };
  /**
   * Timeout for a remote rule evaluation. Defaults to the value of 'querier.query-timeout'.
   */
  ruler_remote_evaluation_timeout?: string;
  /**
   * Maximum size (in bytes) of the allowable response size from a remote rule evaluation. Set to 0 to allow any response size (default).
   */
  ruler_remote_evaluation_max_response_size?: number;
  /**
   * Deletion mode. Can be one of 'disabled', 'filter-only', or 'filter-and-delete'. When set to 'filter-only' or 'filter-and-delete', and if retention_enabled is true, then the log entry deletion API endpoints are available.
   */
  deletion_mode?: string;
  /**
   * Retention period to apply to stored data, only applies if retention_enabled is true in the compactor config. As of version 2.8.0, a zero value of 0 or 0s disables retention. In previous releases, Loki did not properly honor a zero value to disable retention and a really large value should be used instead.
   */
  retention_period?: string;
  /**
   * Per-stream retention to apply, if the retention is enable on the compactor side.
   * Example:
   *  retention_stream:
   *  - selector: '{namespace="dev"}'
   *  priority: 1
   *  period: 24h
   * - selector: '{container="nginx"}'
   *  priority: 1
   *  period: 744h
   * Selector is a Prometheus labels matchers that will apply the 'period' retention only if the stream is matching. In case multiple stream are matching, the highest priority will be picked. If no rule is matched the 'retention_period' is used.
   */
  retention_stream?:
    | {
        [k: string]: unknown | undefined;
      }[]
    | null;
  /**
   * Feature renamed to 'runtime configuration', flag deprecated in favor of -runtime-config.file (runtime_config.file in YAML).
   */
  per_tenant_override_config?: string;
  /**
   * Feature renamed to 'runtime configuration'; flag deprecated in favor of -runtime-config.reload-period (runtime_config.period in YAML).
   */
  per_tenant_override_period?: string;
  /**
   * Deprecated: Use deletion_mode per tenant configuration instead.
   */
  allow_deletes?: boolean;
  shard_streams?: {
    enabled?: boolean;
    logging_enabled?: boolean;
    desired_rate?: number;
    [k: string]: unknown | undefined;
  };
  blocked_queries?:
    | {
        [k: string]: unknown | undefined;
      }[]
    | null;
  /**
   * Define a list of required selector labels.
   */
  required_labels?: string[] | null;
  /**
   * Minimum number of label matchers a query should contain.
   */
  minimum_labels_number?: number;
  /**
   * The shard size defines how many index gateways should be used by a tenant for querying. If the global shard factor is 0, the global shard factor is set to the deprecated -replication-factor for backwards compatibility reasons. Default: 0.
   */
  index_gateway_shard_size?: number;
  /**
   * Experimental. The shard size defines how many bloom gateways should be used by a tenant for querying. Default: 0.
   */
  bloom_gateway_shard_size?: number;
  /**
   * Experimental. Whether to use the bloom gateway component in the read path to filter chunks.
   */
  bloom_gateway_enable_filtering?: boolean;
  /**
   * Experimental. Interval for computing the cache key in the Bloom Gateway.
   */
  bloom_gateway_cache_key_interval?: string;
  /**
   * Experimental. The shard size defines how many bloom compactors should be used by a tenant when computing blooms. If it's set to 0, shuffle sharding is disabled. Default: 0.
   */
  bloom_compactor_shard_size?: number;
  /**
   * Experimental. Whether to compact chunks into bloom filters.
   */
  bloom_compactor_enable_compaction?: boolean;
  /**
   * Experimental. The maximum bloom block size. A value of 0 sets an unlimited size. Default is 200MB. The actual block size might exceed this limit since blooms will be added to blocks until the block exceeds the maximum block size. Default: 200MB.
   */
  bloom_compactor_max_block_size?: string;
  /**
   * Experimental. The maximum bloom size per log stream. A log stream whose generated bloom filter exceeds this size will be discarded. A value of 0 sets an unlimited size. Default is 128MB. Default: 128MB.
   */
  bloom_compactor_max_bloom_size?: string;
  /**
   * Experimental. Length of the n-grams created when computing blooms from log lines. Default: 4.
   */
  bloom_ngram_length?: number;
  /**
   * Experimental. Skip factor for the n-grams created when computing blooms from log lines. Default: 1.
   */
  bloom_ngram_skip?: number;
  /**
   * Experimental. Scalable Bloom Filter desired false-positive rate. Default: 0.01.
   */
  bloom_false_positive_rate?: number;
  /**
   * Experimental. Compression algorithm for bloom block pages.
   */
  bloom_block_encoding?: string;
  /**
   * Allow user to send structured metadata in push payload.
   */
  allow_structured_metadata?: boolean;
  /**
   * Maximum size accepted for structured metadata per log line. Default: 64KB.
   */
  max_structured_metadata_size?: string;
  /**
   * Maximum number of structured metadata entries per log line. Default: 128.
   */
  max_structured_metadata_entries_count?: number;
  /**
   * OTLP log ingestion configurations
   */
  otlp_config?: {
    /**
     * Configuration for resource attributes to store them as index labels or Structured Metadata or drop them altogether
     */
    resource_attributes?: {
      /**
       * Configure whether to ignore the default list of resource attributes set in 'distributor.otlp.default_resource_attributes_as_index_labels' to be stored as index labels and only use the given resource attributes config
       */
      ignore_defaults?: boolean;
      attributes_config?: AttributesConfig[] | null;
      [k: string]: unknown | undefined;
    };
    /**
     * Configuration for scope attributes to store them as Structured Metadata or drop them altogether
     */
    scope_attributes?: AttributesConfig[] | null;
    /**
     * Configuration for log attributes to store them as Structured Metadata or drop them altogether
     */
    log_attributes?: AttributesConfig[] | null;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface AttributesConfig {
  /**
   * Configures action to take on matching attributes. It allows one of [structured_metadata, drop] for all attribute types. It additionally allows index_label action for resource attributes
   */
  action?: string;
  /**
   * List of attributes to configure how to store them or drop them altogether
   */
  attributes?: string[] | null;
  /**
   * Regex to choose attributes to configure how to store them or drop them altogether
   */
  regex?: string;
  [k: string]: unknown | undefined;
}
/**
 * The frontend_worker configures the worker - running within the Loki querier - picking up and executing queries enqueued by the query-frontend.
 */
export interface FrontendWorker {
  /**
   * Address of query frontend service, in host:port format. If -querier.scheduler-address is set as well, querier will use scheduler instead. Only one of -querier.frontend-address or -querier.scheduler-address can be set. If neither is set, queries are only received via HTTP endpoint.
   */
  frontend_address?: string;
  /**
   * Hostname (and port) of scheduler that querier will periodically resolve, connect to and receive queries from. Only one of -querier.frontend-address or -querier.scheduler-address can be set. If neither is set, queries are only received via HTTP endpoint.
   */
  scheduler_address?: string;
  /**
   * How often to query DNS for query-frontend or query-scheduler address. Also used to determine how often to poll the scheduler-ring for addresses if the scheduler-ring is configured.
   */
  dns_lookup_duration?: string;
  /**
   * Querier ID, sent to frontend service to identify requests from the same querier. Defaults to hostname.
   */
  id?: string;
  grpc_client_config?: GrpcClient9;
  [k: string]: unknown | undefined;
}
/**
 * The grpc_client block configures the gRPC client used to communicate between a client and server component in Loki.
 */
export interface GrpcClient9 {
  /**
   * gRPC client max receive message size (bytes). Default: 104857600.
   */
  max_recv_msg_size?: number;
  /**
   * gRPC client max send message size (bytes). Default: 104857600.
   */
  max_send_msg_size?: number;
  /**
   * Use compression when sending messages. Supported values are: 'gzip', 'snappy' and '' (disable compression)
   */
  grpc_compression?: string;
  /**
   * Rate limit for gRPC client; 0 means disabled. Default: 0.
   */
  rate_limit?: number;
  /**
   * Rate limit burst for gRPC client. Default: 0.
   */
  rate_limit_burst?: number;
  /**
   * Enable backoff and retry when we hit rate limits.
   */
  backoff_on_ratelimits?: boolean;
  backoff_config?: {
    /**
     * Minimum delay when backing off.
     */
    min_period?: string;
    /**
     * Maximum delay when backing off.
     */
    max_period?: string;
    /**
     * Number of times to backoff and retry before failing. Default: 10.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Initial stream window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_stream_window_size?: string;
  /**
   * Initial connection window size. Values less than the default are not supported and are ignored. Setting this to a value other than the default disables the BDP estimator. Default: 63KiB1023B.
   */
  initial_connection_window_size?: string;
  /**
   * Enable TLS in the gRPC client. This flag needs to be enabled when any other TLS flag is set. If set to false, insecure connection to gRPC server will be used.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * The maximum amount of time to establish a connection. A value of 0 means default gRPC client connect timeout and backoff.
   */
  connect_timeout?: string;
  /**
   * Initial backoff delay after first connection failure. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_base_delay?: string;
  /**
   * Maximum backoff delay when establishing a connection. Only relevant if ConnectTimeout > 0.
   */
  connect_backoff_max_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The table_manager block configures the table manager for retention.
 */
export interface TableManager {
  /**
   * If true, disable all changes to DB capacity
   */
  throughput_updates_disabled?: boolean;
  /**
   * If true, enables retention deletes of DB tables
   */
  retention_deletes_enabled?: boolean;
  /**
   * Tables older than this retention period are deleted. Must be either 0 (disabled) or a multiple of 24h. When enabled, be aware this setting is destructive to data!
   */
  retention_period?: string;
  /**
   * How frequently to poll backend to learn our capacity.
   */
  poll_interval?: string;
  /**
   * Periodic tables grace period (duration which table will be created/deleted before/after it's needed).
   */
  creation_grace_period?: string;
  index_tables_provisioning?: {
    /**
     * Enables on demand throughput provisioning for the storage provider (if supported). Applies only to tables which are not autoscaled. Supported by DynamoDB
     */
    enable_ondemand_throughput_mode?: boolean;
    /**
     * Table default write throughput. Supported by DynamoDB. Default: 1000.
     */
    provisioned_write_throughput?: number;
    /**
     * Table default read throughput. Supported by DynamoDB. Default: 300.
     */
    provisioned_read_throughput?: number;
    write_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    read_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Enables on demand throughput provisioning for the storage provider (if supported). Applies only to tables which are not autoscaled. Supported by DynamoDB
     */
    enable_inactive_throughput_on_demand_mode?: boolean;
    /**
     * Table write throughput for inactive tables. Supported by DynamoDB. Default: 1.
     */
    inactive_write_throughput?: number;
    /**
     * Table read throughput for inactive tables. Supported by DynamoDB. Default: 300.
     */
    inactive_read_throughput?: number;
    inactive_write_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    inactive_read_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Number of last inactive tables to enable write autoscale. Default: 4.
     */
    inactive_write_scale_lastn?: number;
    /**
     * Number of last inactive tables to enable read autoscale. Default: 4.
     */
    inactive_read_scale_lastn?: number;
    [k: string]: unknown | undefined;
  };
  chunk_tables_provisioning?: {
    /**
     * Enables on demand throughput provisioning for the storage provider (if supported). Applies only to tables which are not autoscaled. Supported by DynamoDB
     */
    enable_ondemand_throughput_mode?: boolean;
    /**
     * Table default write throughput. Supported by DynamoDB. Default: 1000.
     */
    provisioned_write_throughput?: number;
    /**
     * Table default read throughput. Supported by DynamoDB. Default: 300.
     */
    provisioned_read_throughput?: number;
    write_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    read_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Enables on demand throughput provisioning for the storage provider (if supported). Applies only to tables which are not autoscaled. Supported by DynamoDB
     */
    enable_inactive_throughput_on_demand_mode?: boolean;
    /**
     * Table write throughput for inactive tables. Supported by DynamoDB. Default: 1.
     */
    inactive_write_throughput?: number;
    /**
     * Table read throughput for inactive tables. Supported by DynamoDB. Default: 300.
     */
    inactive_read_throughput?: number;
    inactive_write_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    inactive_read_scale?: {
      /**
       * Should we enable autoscale for the table.
       */
      enabled?: boolean;
      /**
       * AWS AutoScaling role ARN
       */
      role_arn?: string;
      /**
       * DynamoDB minimum provision capacity. Default: 3000.
       */
      min_capacity?: number;
      /**
       * DynamoDB maximum provision capacity. Default: 6000.
       */
      max_capacity?: number;
      /**
       * DynamoDB minimum seconds between each autoscale up. Default: 1800.
       */
      out_cooldown?: number;
      /**
       * DynamoDB minimum seconds between each autoscale down. Default: 1800.
       */
      in_cooldown?: number;
      /**
       * DynamoDB target ratio of consumed capacity to provisioned capacity. Default: 80.
       */
      target?: number;
      [k: string]: unknown | undefined;
    };
    /**
     * Number of last inactive tables to enable write autoscale. Default: 4.
     */
    inactive_write_scale_lastn?: number;
    /**
     * Number of last inactive tables to enable read autoscale. Default: 4.
     */
    inactive_read_scale_lastn?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for memberlist client. Only applies if the selected kvstore is memberlist.
 *
 * When a memberlist config with at least 1 join_members is defined, kvstore of type memberlist is automatically selected for all the components that require a ring unless otherwise specified in the component's configuration section.
 */
export interface Memberlist {
  /**
   * Name of the node in memberlist cluster. Defaults to hostname.
   */
  node_name?: string;
  /**
   * Add random suffix to the node name.
   */
  randomize_node_name?: boolean;
  /**
   * The timeout for establishing a connection with a remote node, and for read/write operations.
   */
  stream_timeout?: string;
  /**
   * Multiplication factor used when sending out messages (factor * log(N+1)). Default: 4.
   */
  retransmit_factor?: number;
  /**
   * How often to use pull/push sync.
   */
  pull_push_interval?: string;
  /**
   * How often to gossip.
   */
  gossip_interval?: string;
  /**
   * How many nodes to gossip to. Default: 3.
   */
  gossip_nodes?: number;
  /**
   * How long to keep gossiping to dead nodes, to give them chance to refute their death.
   */
  gossip_to_dead_nodes_time?: string;
  /**
   * How soon can dead node's name be reclaimed with new address. 0 to disable.
   */
  dead_node_reclaim_time?: string;
  /**
   * Enable message compression. This can be used to reduce bandwidth usage at the cost of slightly more CPU utilization.
   */
  compression_enabled?: boolean;
  /**
   * Gossip address to advertise to other members in the cluster. Used for NAT traversal.
   */
  advertise_addr?: string;
  /**
   * Gossip port to advertise to other members in the cluster. Used for NAT traversal. Default: 7946.
   */
  advertise_port?: number;
  /**
   * The cluster label is an optional string to include in outbound packets and gossip streams. Other members in the memberlist cluster will discard any message whose label doesn't match the configured one, unless the 'cluster-label-verification-disabled' configuration option is set to true.
   */
  cluster_label?: string;
  /**
   * When true, memberlist doesn't verify that inbound packets and gossip streams have the cluster label matching the configured one. This verification should be disabled while rolling out the change to the configured cluster label in a live memberlist cluster.
   */
  cluster_label_verification_disabled?: boolean;
  /**
   * Other cluster members to join. Can be specified multiple times. It can be an IP, hostname or an entry specified in the DNS Service Discovery format.
   */
  join_members?: string[] | null;
  /**
   * Min backoff duration to join other cluster members.
   */
  min_join_backoff?: string;
  /**
   * Max backoff duration to join other cluster members.
   */
  max_join_backoff?: string;
  /**
   * Max number of retries to join other cluster members. Default: 10.
   */
  max_join_retries?: number;
  /**
   * If this node fails to join memberlist cluster, abort.
   */
  abort_if_cluster_join_fails?: boolean;
  /**
   * If not 0, how often to rejoin the cluster. Occasional rejoin can help to fix the cluster split issue, and is harmless otherwise. For example when using only few components as a seed nodes (via -memberlist.join), then it's recommended to use rejoin. If -memberlist.join points to dynamic service that resolves to all gossiping nodes (eg. Kubernetes headless service), then rejoin is not needed.
   */
  rejoin_interval?: string;
  /**
   * How long to keep LEFT ingesters in the ring.
   */
  left_ingesters_timeout?: string;
  /**
   * Timeout for leaving memberlist cluster.
   */
  leave_timeout?: string;
  /**
   * How much space to use for keeping received and sent messages in memory for troubleshooting (two buffers). 0 to disable. Default: 0.
   */
  message_history_buffer_bytes?: number;
  /**
   * IP address to listen on for gossip messages. Multiple addresses may be specified. Defaults to 0.0.0.0
   */
  bind_addr?: string[] | null;
  /**
   * Port to listen on for gossip messages. Default: 7946.
   */
  bind_port?: number;
  /**
   * Timeout used when connecting to other nodes to send packet.
   */
  packet_dial_timeout?: string;
  /**
   * Timeout for writing 'packet' data.
   */
  packet_write_timeout?: string;
  /**
   * Enable TLS on the memberlist transport layer.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for 'runtime config' module, responsible for reloading runtime configuration file.
 */
export interface RuntimeConfig {
  /**
   * How often to check runtime config files.
   */
  period?: string;
  /**
   * Comma separated list of yaml files with the configuration that can be updated at runtime. Runtime config files will be merged from left to right.
   */
  file?: string;
  [k: string]: unknown | undefined;
}
/**
 * These are values which allow you to control aspects of Loki's operation, most commonly used for controlling types of higher verbosity logging, the values here can be overridden in the `configs` section of the `runtime_config` file.
 */
export interface OperationalConfig {
  /**
   * Log every new stream created by a push request (very verbose, recommend to enable via runtime config only).
   */
  log_stream_creation?: boolean;
  /**
   * Log every push request (very verbose, recommend to enable via runtime config only).
   */
  log_push_request?: boolean;
  /**
   * Log every stream in a push request (very verbose, recommend to enable via runtime config only).
   */
  log_push_request_streams?: boolean;
  /**
   * Log push errors with a rate limited logger, will show client push errors without overly spamming logs.
   */
  limited_log_push_errors?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for tracing.
 */
export interface Tracing {
  /**
   * Set to false to disable tracing.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for analytics.
 */
export interface Analytics {
  /**
   * Enable anonymous usage reporting.
   */
  reporting_enabled?: boolean;
  /**
   * URL to which reports are sent
   */
  usage_stats_url?: string;
  [k: string]: unknown | undefined;
}
/**
 * Common configuration to be shared between multiple modules. If a more specific configuration is given in other sections, the related configuration within this section will be ignored.
 */
export interface Common {
  path_prefix?: string;
  storage?: {
    s3?: S3StorageConfig1;
    gcs?: GcsStorageConfig3;
    azure?: AzureStorageConfig3;
    alibabacloud?: AlibabacloudStorageConfig3;
    bos?: BosStorageConfig3;
    swift?: SwiftStorageConfig3;
    filesystem?: {
      /**
       * Directory to store chunks in.
       */
      chunks_directory?: string;
      /**
       * Directory to store rules in.
       */
      rules_directory?: string;
      [k: string]: unknown | undefined;
    };
    hedging?: {
      /**
       * If set to a non-zero value a second request will be issued at the provided duration. Default is 0 (disabled)
       */
      at?: string;
      /**
       * The maximum of hedge requests allowed. Default: 2.
       */
      up_to?: number;
      /**
       * The maximum of hedge requests allowed per seconds. Default: 5.
       */
      max_per_second?: number;
      [k: string]: unknown | undefined;
    };
    cos?: CosStorageConfig3;
    congestion_control?: {
      /**
       * Use storage congestion control (default: disabled).
       */
      enabled?: boolean;
      controller?: {
        /**
         * Congestion control strategy to use (default: none, options: 'aimd').
         */
        strategy?: string;
        aimd?: {
          /**
           * AIMD starting throughput window size: how many requests can be sent per second (default: 2000). Default: 2000.
           */
          start?: number;
          /**
           * AIMD maximum throughput window size: upper limit of requests sent per second (default: 10000). Default: 10000.
           */
          upper_bound?: number;
          /**
           * AIMD backoff factor when upstream service is throttled to decrease number of requests sent per second (default: 0.5). Default: 0.5.
           */
          backoff_factor?: number;
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      };
      retry?: {
        /**
         * Congestion control retry strategy to use (default: none, options: 'limited').
         */
        strategy?: string;
        /**
         * Maximum number of retries allowed. Default: 2.
         */
        limit?: number;
        [k: string]: unknown | undefined;
      };
      hedging?: {
        config?: {
          at?: string;
          up_to?: number;
          max_per_second?: number;
          [k: string]: unknown | undefined;
        };
        /**
         * Congestion control hedge strategy to use (default: none, options: 'limited').
         */
        strategy?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  persist_tokens?: boolean;
  replication_factor?: number;
  ring?: {
    kvstore?: {
      /**
       * Backend storage to use for the ring. Supported values are: consul, etcd, inmemory, memberlist, multi.
       */
      store?: string;
      /**
       * The prefix for the keys in the store. Should end with a /.
       */
      prefix?: string;
      consul?: Consul8;
      etcd?: Etcd8;
      multi?: {
        /**
         * Primary backend storage used by multi-client.
         */
        primary?: string;
        /**
         * Secondary backend storage used by multi-client.
         */
        secondary?: string;
        /**
         * Mirror writes to secondary store.
         */
        mirror_enabled?: boolean;
        /**
         * Timeout for storing value to secondary store.
         */
        mirror_timeout?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    /**
     * Period at which to heartbeat to the ring. 0 = disabled.
     */
    heartbeat_period?: string;
    /**
     * The heartbeat timeout after which compactors are considered unhealthy within the ring. 0 = never (timeout disabled).
     */
    heartbeat_timeout?: string;
    /**
     * File path where tokens are stored. If empty, tokens are not stored at shutdown and restored at startup.
     */
    tokens_file_path?: string;
    /**
     * True to enable zone-awareness and replicate blocks across different availability zones.
     */
    zone_awareness_enabled?: boolean;
    /**
     * Number of tokens to own in the ring. Default: 128.
     */
    num_tokens?: number;
    /**
     * Factor for data replication. Default: 3.
     */
    replication_factor?: number;
    /**
     * Instance ID to register in the ring.
     */
    instance_id?: string;
    /**
     * Name of network interface to read address from.
     */
    instance_interface_names?: string[] | null;
    /**
     * Port to advertise in the ring (defaults to server.grpc-listen-port). Default: 0.
     */
    instance_port?: number;
    /**
     * IP address to advertise in the ring.
     */
    instance_addr?: string;
    /**
     * The availability zone where this instance is running. Required if zone-awareness is enabled.
     */
    instance_availability_zone?: string;
    /**
     * Enable using a IPv6 instance address.
     */
    instance_enable_ipv6?: boolean;
    [k: string]: unknown | undefined;
  };
  instance_interface_names?: string[] | null;
  instance_addr?: string;
  /**
   * the http address of the compactor in the form http://host:port
   */
  compactor_address?: string;
  /**
   * the grpc address of the compactor in the form host:port
   */
  compactor_grpc_address?: string;
  [k: string]: unknown | undefined;
}
/**
 * The s3_storage_config block configures the connection to Amazon S3 object storage backend.
 */
export interface S3StorageConfig1 {
  /**
   * S3 endpoint URL with escaped Key and Secret encoded. If only region is specified as a host, proper endpoint will be deduced. Use inmemory:///<bucket-name> to use a mock in-memory implementation.
   */
  s3?: string;
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  s3forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over. Overrides any buckets specified in s3.url flag
   */
  bucketnames?: string;
  /**
   * S3 Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * AWS region to use.
   */
  region?: string;
  /**
   * AWS Access Key ID
   */
  access_key_id?: string;
  /**
   * AWS Secret Access Key
   */
  secret_access_key?: string;
  /**
   * AWS Session Token
   */
  session_token?: string;
  /**
   * Disable https on s3 connection.
   */
  insecure?: boolean;
  http_config?: {
    /**
     * Timeout specifies a time limit for requests made by s3 Client.
     */
    timeout?: string;
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    /**
     * Set to true to skip verifying the certificate chain and hostname.
     */
    insecure_skip_verify?: boolean;
    /**
     * Path to the trusted CA file that signed the SSL certificate of the S3 endpoint.
     */
    ca_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The signature version to use for authenticating against S3. Supported values are: v4.
   */
  signature_version?: string;
  /**
   * The S3 storage class which objects will use. Supported values are: GLACIER, DEEP_ARCHIVE, GLACIER_IR, INTELLIGENT_TIERING, ONEZONE_IA, OUTPOSTS, REDUCED_REDUNDANCY, STANDARD, STANDARD_IA.
   */
  storage_class?: string;
  sse?: {
    /**
     * Enable AWS Server Side Encryption. Supported values: SSE-KMS, SSE-S3.
     */
    type?: string;
    /**
     * KMS Key ID used to encrypt objects in S3
     */
    kms_key_id?: string;
    /**
     * KMS Encryption Context used for object encryption. It expects JSON formatted string.
     */
    kms_encryption_context?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when S3 get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when s3 get Object
     */
    min_period?: string;
    /**
     * Maximum backoff time when s3 get Object
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when s3 get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * The gcs_storage_config block configures the connection to Google Cloud Storage object storage backend.
 */
export interface GcsStorageConfig3 {
  /**
   * Name of GCS bucket. Please refer to https://cloud.google.com/docs/authentication/production for more information about how to configure authentication.
   */
  bucket_name?: string;
  /**
   * Service account key content in JSON format, refer to https://cloud.google.com/iam/docs/creating-managing-service-account-keys for creation.
   */
  service_account?: string;
  /**
   * The size of the buffer that GCS client for each PUT request. 0 to disable buffering. Default: 0.
   */
  chunk_buffer_size?: number;
  /**
   * The duration after which the requests to GCS should be timed out.
   */
  request_timeout?: string;
  /**
   * Enable OpenCensus (OC) instrumentation for all requests.
   */
  enable_opencensus?: boolean;
  /**
   * Enable HTTP2 connections.
   */
  enable_http2?: boolean;
  /**
   * Enable automatic retries of failed idempotent requests.
   */
  enable_retries?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The azure_storage_config block configures the connection to Azure object storage backend.
 */
export interface AzureStorageConfig3 {
  /**
   * Azure Cloud environment. Supported values are: AzureGlobal, AzureChinaCloud, AzureGermanCloud, AzureUSGovernment.
   */
  environment?: string;
  /**
   * Azure storage account name.
   */
  account_name?: string;
  /**
   * Azure storage account key.
   */
  account_key?: string;
  /**
   * If `connection-string` is set, the values of `account-name` and `endpoint-suffix` values will not be used. Use this method over `account-key` if you need to authenticate via a SAS token. Or if you use the Azurite emulator.
   */
  connection_string?: string;
  /**
   * Name of the storage account blob container used to store chunks. This container must be created before running cortex.
   */
  container_name?: string;
  /**
   * Azure storage endpoint suffix without schema. The storage account name will be prefixed to this value to create the FQDN.
   */
  endpoint_suffix?: string;
  /**
   * Use Managed Identity to authenticate to the Azure storage account.
   */
  use_managed_identity?: boolean;
  /**
   * Use Federated Token to authenticate to the Azure storage account.
   */
  use_federated_token?: boolean;
  /**
   * User assigned identity ID to authenticate to the Azure storage account.
   */
  user_assigned_id?: string;
  /**
   * Use Service Principal to authenticate through Azure OAuth.
   */
  use_service_principal?: boolean;
  /**
   * Azure Service Principal ID(GUID).
   */
  client_id?: string;
  /**
   * Azure Service Principal secret key.
   */
  client_secret?: string;
  /**
   * Azure Tenant ID is used to authenticate through Azure OAuth.
   */
  tenant_id?: string;
  /**
   * Chunk delimiter for blob ID to be used
   */
  chunk_delimiter?: string;
  /**
   * Preallocated buffer size for downloads. Default: 512000.
   */
  download_buffer_size?: number;
  /**
   * Preallocated buffer size for uploads. Default: 256000.
   */
  upload_buffer_size?: number;
  /**
   * Number of buffers used to used to upload a chunk. Default: 1.
   */
  upload_buffer_count?: number;
  /**
   * Timeout for requests made against azure blob storage.
   */
  request_timeout?: string;
  /**
   * Number of retries for a request which times out. Default: 5.
   */
  max_retries?: number;
  /**
   * Minimum time to wait before retrying a request.
   */
  min_retry_delay?: string;
  /**
   * Maximum time to wait before retrying a request.
   */
  max_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * The alibabacloud_storage_config block configures the connection to Alibaba Cloud Storage object storage backend.
 */
export interface AlibabacloudStorageConfig3 {
  /**
   * Name of OSS bucket.
   */
  bucket?: string;
  /**
   * oss Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * alibabacloud Access Key ID
   */
  access_key_id?: string;
  /**
   * alibabacloud Secret Access Key
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * The bos_storage_config block configures the connection to Baidu Object Storage (BOS) object storage backend.
 */
export interface BosStorageConfig3 {
  /**
   * Name of BOS bucket.
   */
  bucket_name?: string;
  /**
   * BOS endpoint to connect to.
   */
  endpoint?: string;
  /**
   * Baidu Cloud Engine (BCE) Access Key ID.
   */
  access_key_id?: string;
  /**
   * Baidu Cloud Engine (BCE) Secret Access Key.
   */
  secret_access_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * The swift_storage_config block configures the connection to OpenStack Object Storage (Swift) object storage backend.
 */
export interface SwiftStorageConfig3 {
  /**
   * OpenStack Swift authentication API version. 0 to autodetect. Default: 0.
   */
  auth_version?: number;
  /**
   * OpenStack Swift authentication URL
   */
  auth_url?: string;
  /**
   * Set this to true to use the internal OpenStack Swift endpoint URL
   */
  internal?: boolean;
  /**
   * OpenStack Swift username.
   */
  username?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  user_domain_name?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  user_domain_id?: string;
  /**
   * OpenStack Swift user ID.
   */
  user_id?: string;
  /**
   * OpenStack Swift API key.
   */
  password?: string;
  /**
   * OpenStack Swift user's domain ID.
   */
  domain_id?: string;
  /**
   * OpenStack Swift user's domain name.
   */
  domain_name?: string;
  /**
   * OpenStack Swift project ID (v2,v3 auth only).
   */
  project_id?: string;
  /**
   * OpenStack Swift project name (v2,v3 auth only).
   */
  project_name?: string;
  /**
   * ID of the OpenStack Swift project's domain (v3 auth only), only needed if it differs the from user domain.
   */
  project_domain_id?: string;
  /**
   * Name of the OpenStack Swift project's domain (v3 auth only), only needed if it differs from the user domain.
   */
  project_domain_name?: string;
  /**
   * OpenStack Swift Region to use (v2,v3 auth only).
   */
  region_name?: string;
  /**
   * Name of the OpenStack Swift container to put chunks in.
   */
  container_name?: string;
  /**
   * Max retries on requests error. Default: 3.
   */
  max_retries?: number;
  /**
   * Time after which a connection attempt is aborted.
   */
  connect_timeout?: string;
  /**
   * Time after which an idle request is aborted. The timeout watchdog is reset each time some data is received, so the timeout triggers after X time no data is received on a request.
   */
  request_timeout?: string;
  [k: string]: unknown | undefined;
}
/**
 * The cos_storage_config block configures the connection to IBM Cloud Object Storage (COS) backend.
 */
export interface CosStorageConfig3 {
  /**
   * Set this to `true` to force the request to use path-style addressing.
   */
  forcepathstyle?: boolean;
  /**
   * Comma separated list of bucket names to evenly distribute chunks over.
   */
  bucketnames?: string;
  /**
   * COS Endpoint to connect to.
   */
  endpoint?: string;
  /**
   * COS region to use.
   */
  region?: string;
  /**
   * COS HMAC Access Key ID.
   */
  access_key_id?: string;
  /**
   * COS HMAC Secret Access Key.
   */
  secret_access_key?: string;
  http_config?: {
    /**
     * The maximum amount of time an idle connection will be held open.
     */
    idle_conn_timeout?: string;
    /**
     * If non-zero, specifies the amount of time to wait for a server's response headers after fully writing the request.
     */
    response_header_timeout?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures back off when cos get Object.
   */
  backoff_config?: {
    /**
     * Minimum backoff time when cos get Object.
     */
    min_period?: string;
    /**
     * Maximum backoff time when cos get Object.
     */
    max_period?: string;
    /**
     * Maximum number of times to retry when cos get Object. Default: 5.
     */
    max_retries?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * IAM API key to access COS.
   */
  api_key?: string;
  /**
   * COS service instance id to use.
   */
  service_instance_id?: string;
  /**
   * IAM Auth Endpoint for authentication.
   */
  auth_endpoint?: string;
  /**
   * Compute resource token file path.
   */
  cr_token_file_path?: string;
  /**
   * Name of the trusted profile.
   */
  trusted_profile_name?: string;
  /**
   * ID of the trusted profile.
   */
  trusted_profile_id?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for a Consul client. Only applies if the selected kvstore is consul.
 */
export interface Consul8 {
  /**
   * Hostname and port of Consul.
   */
  host?: string;
  /**
   * ACL Token used to interact with Consul.
   */
  acl_token?: string;
  /**
   * HTTP timeout when talking to Consul
   */
  http_client_timeout?: string;
  /**
   * Enable consistent reads to Consul.
   */
  consistent_reads?: boolean;
  /**
   * Rate limit when watching key or prefix in Consul, in requests per second. 0 disables the rate limit. Default: 1.
   */
  watch_rate_limit?: number;
  /**
   * Burst size used in rate limit. Values less than 1 are treated as 1. Default: 1.
   */
  watch_burst_size?: number;
  /**
   * Maximum duration to wait before retrying a Compare And Swap (CAS) operation.
   */
  cas_retry_delay?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for an ETCD v3 client. Only applies if the selected kvstore is etcd.
 */
export interface Etcd8 {
  /**
   * The etcd endpoints to connect to.
   */
  endpoints?: string[] | null;
  /**
   * The dial timeout for the etcd connection.
   */
  dial_timeout?: string;
  /**
   * The maximum number of retries to do for failed ops. Default: 10.
   */
  max_retries?: number;
  /**
   * Enable TLS.
   */
  tls_enabled?: boolean;
  /**
   * Path to the client certificate, which will be used for authenticating with the server. Also requires the key path to be configured.
   */
  tls_cert_path?: string;
  /**
   * Path to the key for the client certificate. Also requires the client certificate to be configured.
   */
  tls_key_path?: string;
  /**
   * Path to the CA certificates to validate server certificate against. If not set, the host's root CA certificates are used.
   */
  tls_ca_path?: string;
  /**
   * Override the expected name on the server certificate.
   */
  tls_server_name?: string;
  /**
   * Skip validating server certificate.
   */
  tls_insecure_skip_verify?: boolean;
  /**
   * Override the default cipher suite list (separated by commas). Allowed values:
   *
   * Secure Ciphers:
   * - TLS_AES_128_GCM_SHA256
   * - TLS_AES_256_GCM_SHA384
   * - TLS_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA
   * - TLS_ECDHE_RSA_WITH_AES_256_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_ECDSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_RSA_WITH_CHACHA20_POLY1305_SHA256
   * - TLS_ECDHE_ECDSA_WITH_CHACHA20_POLY1305_SHA256
   *
   * Insecure Ciphers:
   * - TLS_RSA_WITH_RC4_128_SHA
   * - TLS_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA
   * - TLS_RSA_WITH_AES_256_CBC_SHA
   * - TLS_RSA_WITH_AES_128_CBC_SHA256
   * - TLS_RSA_WITH_AES_128_GCM_SHA256
   * - TLS_RSA_WITH_AES_256_GCM_SHA384
   * - TLS_ECDHE_ECDSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_RC4_128_SHA
   * - TLS_ECDHE_RSA_WITH_3DES_EDE_CBC_SHA
   * - TLS_ECDHE_ECDSA_WITH_AES_128_CBC_SHA256
   * - TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256
   *
   */
  tls_cipher_suites?: string;
  /**
   * Override the default minimum TLS version. Allowed values: VersionTLS10, VersionTLS11, VersionTLS12, VersionTLS13
   */
  tls_min_version?: string;
  /**
   * Etcd username.
   */
  username?: string;
  /**
   * Etcd password.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
