/* eslint-disable */

/**
 * Pants configuration file schema: https://www.pantsbuild.org/
 */
export interface HttpsJsonSchemastoreOrgPantsbuild2310Json {
  /**
   * Options to control the overall behavior of Pants.
   */
  GLOBAL?: {
    /**
     * Silence warnings/errors about running Pants on these versions of macOS. Pants only supports recent versions of macOS. You can try running on older versions, but it may or may not work
     * https://www.pantsbuild.org/v2.31/docs/reference-global#allow_deprecated_macos_versions
     */
    allow_deprecated_macos_versions?: unknown[];
    /**
     * Register functionality from these backends
     * https://www.pantsbuild.org/v2.31/docs/reference-global#backend_packages
     */
    backend_packages?: unknown[];
    /**
     * Python files to evaluate and whose symbols should be exposed to all BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#build_file_prelude_globs
     */
    build_file_prelude_globs?: unknown[];
    /**
     * Path globs or literals to ignore when identifying BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#build_ignore
     */
    build_ignore?: unknown[];
    /**
     * The naming scheme for BUILD files, i.e. where you define targets
     * https://www.pantsbuild.org/v2.31/docs/reference-global#build_patterns
     */
    build_patterns?: unknown[];
    /**
     * Path to a file containing PEM-format CA certificates used for verifying secure connections when downloading files required by a build
     * https://www.pantsbuild.org/v2.31/docs/reference-global#ca_certs_path
     */
    ca_certs_path?: string;
    /**
     * Controls how the content of cache entries is handled during process execution
     * https://www.pantsbuild.org/v2.31/docs/reference-global#cache_content_behavior
     */
    cache_content_behavior?: 'fetch' | 'validate' | 'defer';
    /**
     * Whether Pants should use colors in output or not
     * https://www.pantsbuild.org/v2.31/docs/reference-global#colors
     */
    colors?: boolean;
    /**
     * Enable concurrent runs of Pants
     * https://www.pantsbuild.org/v2.31/docs/reference-global#concurrent
     */
    concurrent?: boolean;
    /**
     * If true, `docker_environment` targets can be used to run builds inside a Docker container
     * https://www.pantsbuild.org/v2.31/docs/reference-global#docker_execution
     */
    docker_execution?: boolean;
    /**
     * Display a dynamically-updating console UI as Pants runs
     * https://www.pantsbuild.org/v2.31/docs/reference-global#dynamic_ui
     */
    dynamic_ui?: boolean;
    /**
     * If `--dynamic-ui` is enabled, selects the renderer
     * https://www.pantsbuild.org/v2.31/docs/reference-global#dynamic_ui_renderer
     */
    dynamic_ui_renderer?: 'indicatif-spinner' | 'experimental-prodash';
    /**
     * Enable fine grained target analysis based on line numbers
     * https://www.pantsbuild.org/v2.31/docs/reference-global#enable_target_origin_sources_blocks
     */
    enable_target_origin_sources_blocks?: boolean;
    /**
     * A directory to write execution and rule graphs to as `dot` files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#engine_visualize_to
     */
    engine_visualize_to?: {
      [k: string]: unknown | undefined;
    };
    /**
     * When Pants downloads files (for example, for the `http_source` source), Pants will retry the download if a "retryable" error occurs
     * https://www.pantsbuild.org/v2.31/docs/reference-global#file_downloads_max_attempts
     */
    file_downloads_max_attempts?: number;
    /**
     * When Pants downloads files (for example, for the `http_source` source), Pants will retry the download if a "retryable" error occurs
     * https://www.pantsbuild.org/v2.31/docs/reference-global#file_downloads_retry_delay
     */
    file_downloads_retry_delay?: number;
    /**
     * Ignore logs and warnings matching these strings
     * https://www.pantsbuild.org/v2.31/docs/reference-global#ignore_warnings
     */
    ignore_warnings?: unknown[];
    /**
     * Controls whether Pants will clean up local directories used as chroots for running processes
     * https://www.pantsbuild.org/v2.31/docs/reference-global#keep_sandboxes
     */
    keep_sandboxes?: 'always' | 'on_failure' | 'never';
    /**
     * Set the logging level
     * https://www.pantsbuild.org/v2.31/docs/reference-global#level
     */
    level?: 'trace' | 'debug' | 'info' | 'warn' | 'error';
    /**
     * Whether to cache process executions in a local cache persisted to disk at `--local-store-dir`
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_cache
     */
    local_cache?: boolean;
    /**
     * Directory to use for local process execution sandboxing
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_execution_root_dir
     */
    local_execution_root_dir?: string;
    /**
     * Directory to use for the local file store, which stores the results of subprocesses run by Pants
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_store_dir
     */
    local_store_dir?: string;
    /**
     * The maximum size in bytes of the local store containing directories
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_store_directories_max_size_bytes
     */
    local_store_directories_max_size_bytes?: number;
    /**
     * The maximum size in bytes of the local store containing files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_store_files_max_size_bytes
     */
    local_store_files_max_size_bytes?: number;
    /**
     * The maximum size in bytes of the local store containing process cache entries
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_store_processes_max_size_bytes
     */
    local_store_processes_max_size_bytes?: number;
    /**
     * The number of LMDB shards created for the local store
     * https://www.pantsbuild.org/v2.31/docs/reference-global#local_store_shard_count
     */
    local_store_shard_count?: number;
    /**
     * Set a more specific logging level for one or more logging targets
     * https://www.pantsbuild.org/v2.31/docs/reference-global#log_levels_by_target
     */
    log_levels_by_target?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Whether to show/hide logging done by 3rdparty Rust crates used by the Pants engine
     * https://www.pantsbuild.org/v2.31/docs/reference-global#log_show_rust_3rdparty
     */
    log_show_rust_3rdparty?: boolean;
    /**
     * Write logs to files under this directory
     * https://www.pantsbuild.org/v2.31/docs/reference-global#logdir
     */
    logdir?: string;
    /**
     * Run goals continuously as file changes are detected
     * https://www.pantsbuild.org/v2.31/docs/reference-global#loop
     */
    loop?: boolean;
    /**
     * The maximum number of times to loop when `--loop` is specified
     * https://www.pantsbuild.org/v2.31/docs/reference-global#loop_max
     */
    loop_max?: number;
    /**
     * Directory to use for named global caches for tools and processes with trusted, concurrency-safe caches
     * https://www.pantsbuild.org/v2.31/docs/reference-global#named_caches_dir
     */
    named_caches_dir?: string;
    /**
     * The name of the script or binary used to invoke Pants
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_bin_name
     */
    pants_bin_name?: string;
    /**
     * Paths to Pants config files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_config_files
     */
    pants_config_files?: unknown[];
    /**
     * Write end products, such as the results of `pants package`, to this dir
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_distdir
     */
    pants_distdir?: string;
    /**
     * Paths to ignore for all filesystem operations performed by pants (e.g
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_ignore
     */
    pants_ignore?: unknown[];
    /**
     * Include patterns from `.gitignore`, `.git/info/exclude`, and the global gitignore files in the option `[GLOBAL].pants_ignore`, which is used for Pants to ignore filesystem operations on those patterns
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_ignore_use_gitignore
     */
    pants_ignore_use_gitignore?: boolean;
    /**
     * When set, a base directory in which to store `--pants-workdir` contents
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_physical_workdir_base
     */
    pants_physical_workdir_base?: string;
    /**
     * The directory to use for tracking subprocess metadata
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_subprocessdir
     */
    pants_subprocessdir?: string;
    /**
     * Use this Pants version
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_version
     */
    pants_version?: string;
    /**
     * Write intermediate logs and output files to this dir
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pants_workdir
     */
    pants_workdir?: string;
    /**
     * Enables use of the Pants daemon (pantsd). pantsd can significantly improve runtime performance by lowering per-run startup cost, and by memoizing filesystem operations and rule execution
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsd
     */
    pantsd?: boolean;
    /**
     * Filesystem events matching any of these globs will trigger a daemon restart
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsd_invalidation_globs
     */
    pantsd_invalidation_globs?: unknown[];
    /**
     * The maximum memory usage of the pantsd process
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsd_max_memory_usage
     */
    pantsd_max_memory_usage?: string;
    /**
     * The port to bind the Pants nailgun server to
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsd_pailgun_port
     */
    pantsd_pailgun_port?: number;
    /**
     * The maximum amount of time to wait for the invocation to start until raising a timeout exception
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsd_timeout_when_multiple_invocations
     */
    pantsd_timeout_when_multiple_invocations?: number;
    /**
     * Use pantsrc files located at the paths specified in the global option `pantsrc_files`
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsrc
     */
    pantsrc?: boolean;
    /**
     * Override config with values from these files, using syntax matching that of `--pants-config-files`
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pantsrc_files
     */
    pantsrc_files?: unknown[];
    /**
     * Allow backends to be loaded from these plugins (usually released through PyPI). The default backends for each plugin will be loaded automatically
     * https://www.pantsbuild.org/v2.31/docs/reference-global#plugins
     */
    plugins?: unknown[];
    /**
     * Re-resolve plugins, even if previously resolved
     * https://www.pantsbuild.org/v2.31/docs/reference-global#plugins_force_resolve
     */
    plugins_force_resolve?: boolean;
    /**
     * Print the full exception stack trace for any errors
     * https://www.pantsbuild.org/v2.31/docs/reference-global#print_stacktrace
     */
    print_stacktrace?: boolean;
    /**
     * The cache namespace for process execution
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_execution_cache_namespace
     */
    process_execution_cache_namespace?: string;
    /**
     * The time in seconds to wait when gracefully shutting down an interactive process (such as one opened using `pants run`) before killing it
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_execution_graceful_shutdown_timeout
     */
    process_execution_graceful_shutdown_timeout?: number;
    /**
     * Whether or not to use nailgun to run JVM requests that are marked as supporting nailgun
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_execution_local_enable_nailgun
     */
    process_execution_local_enable_nailgun?: boolean;
    /**
     * Number of concurrent processes that may be executed locally
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_execution_local_parallelism
     */
    process_execution_local_parallelism?: number & string;
    /**
     * Number of concurrent processes that may be executed remotely
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_execution_remote_parallelism
     */
    process_execution_remote_parallelism?: number;
    /**
     * The default memory usage for a single "pooled" child process
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_per_child_memory_usage
     */
    process_per_child_memory_usage?: string;
    /**
     * The maximum memory usage for all "pooled" child processes
     * https://www.pantsbuild.org/v2.31/docs/reference-global#process_total_child_memory_usage
     */
    process_total_child_memory_usage?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Add these directories to PYTHONPATH to search for plugins
     * https://www.pantsbuild.org/v2.31/docs/reference-global#pythonpath
     */
    pythonpath?: unknown[];
    /**
     * Path to a PEM file containing CA certificates used for verifying secure connections to `[GLOBAL].remote_execution_address` and `[GLOBAL].remote_store_address`
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_ca_certs_path
     */
    remote_ca_certs_path?: string;
    /**
     * Whether to enable reading from a remote cache
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_cache_read
     */
    remote_cache_read?: boolean;
    /**
     * The number of concurrent requests allowed to the remote cache service
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_cache_rpc_concurrency
     */
    remote_cache_rpc_concurrency?: number;
    /**
     * Timeout value for remote cache RPCs in milliseconds
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_cache_rpc_timeout_millis
     */
    remote_cache_rpc_timeout_millis?: number;
    /**
     * How frequently to log remote cache failures at the `warn` log level
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_cache_warnings
     */
    remote_cache_warnings?: 'ignore' | 'first_only' | 'backoff' | 'always';
    /**
     * Whether to enable writing results to a remote cache
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_cache_write
     */
    remote_cache_write?: boolean;
    /**
     * Path to a PEM file containing client certificates used for verifying secure connections to `[GLOBAL].remote_execution_address` and `[GLOBAL].remote_store_address` when using client authentication (mTLS)
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_client_certs_path
     */
    remote_client_certs_path?: string;
    /**
     * Path to a PEM file containing a private key used for verifying secure connections to `[GLOBAL].remote_execution_address` and `[GLOBAL].remote_store_address` when using client authentication (mTLS)
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_client_key_path
     */
    remote_client_key_path?: string;
    /**
     * Enables remote workers for increased parallelism. (Alpha)
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution
     */
    remote_execution?: boolean;
    /**
     * The URI of a server/entity used as a remote execution scheduler
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_address
     */
    remote_execution_address?: string;
    /**
     * Sets the base path to use when setting up an append-only cache for a process running remotely
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_append_only_caches_base_path
     */
    remote_execution_append_only_caches_base_path?: string;
    /**
     * Platform properties to set on remote execution requests
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_extra_platform_properties
     */
    remote_execution_extra_platform_properties?: unknown[];
    /**
     * Headers to set on remote execution requests
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_headers
     */
    remote_execution_headers?: string;
    /**
     * Overall timeout in seconds for each remote execution request from time of submission
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_overall_deadline_secs
     */
    remote_execution_overall_deadline_secs?: number;
    /**
     * The number of concurrent requests allowed to the remote execution service
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_execution_rpc_concurrency
     */
    remote_execution_rpc_concurrency?: number;
    /**
     * Name of the remote instance to use by remote caching and remote execution
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_instance_name
     */
    remote_instance_name?: string;
    /**
     * An oauth token to use for gGRPC connections to `[GLOBAL].remote_execution_address` and `[GLOBAL].remote_store_address`
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_oauth_bearer_token
     */
    remote_oauth_bearer_token?: string;
    /**
     * The type of provider to use, if using a remote cache and/or remote execution, See https://www.pantsbuild.org/2.31/docs/using-pants/remote-caching-and-execution for details
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_provider
     */
    remote_provider?: 'reapi' | 'experimental-file' | 'experimental-github-actions-cache';
    /**
     * The URI of a server/entity used as a remote file store
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_address
     */
    remote_store_address?: string;
    /**
     * The maximum total size of blobs allowed to be sent in a single batch API call to the remote store
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_batch_api_size_limit
     */
    remote_store_batch_api_size_limit?: number;
    /**
     * Whether to enable batch load requests to the remote store
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_batch_load_enabled
     */
    remote_store_batch_load_enabled?: boolean;
    /**
     * Size in bytes of chunks transferred to/from the remote file store
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_chunk_bytes
     */
    remote_store_chunk_bytes?: number;
    /**
     * Headers to set on remote store requests
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_headers
     */
    remote_store_headers?: string;
    /**
     * The number of concurrent requests allowed to the remote store service
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_rpc_concurrency
     */
    remote_store_rpc_concurrency?: number;
    /**
     * Number of times to retry any RPC to the remote store before giving up
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_rpc_retries
     */
    remote_store_rpc_retries?: number;
    /**
     * Timeout value for remote store RPCs (not including streaming requests) in milliseconds
     * https://www.pantsbuild.org/v2.31/docs/reference-global#remote_store_rpc_timeout_millis
     */
    remote_store_rpc_timeout_millis?: number;
    /**
     * The number of threads to keep active and ready to execute `@rule` logic (see also: `--rule-threads-max`)
     * https://www.pantsbuild.org/v2.31/docs/reference-global#rule_threads_core
     */
    rule_threads_core?: number & string;
    /**
     * The maximum number of threads to use to execute `@rule` logic
     * https://www.pantsbuild.org/v2.31/docs/reference-global#rule_threads_max
     */
    rule_threads_max?: number;
    /**
     * Enables use of the sandboxer process
     * https://www.pantsbuild.org/v2.31/docs/reference-global#sandboxer
     */
    sandboxer?: boolean;
    /**
     * The time in seconds to wait for still-running "session end" tasks to complete before finishing completion of a Pants invocation. "Session end" tasks include, for example, writing data that was generated during the applicable Pants invocation to a configured remote cache
     * https://www.pantsbuild.org/v2.31/docs/reference-global#session_end_tasks_timeout
     */
    session_end_tasks_timeout?: number;
    /**
     * Display the target where a log message originates in that log message's output
     * https://www.pantsbuild.org/v2.31/docs/reference-global#show_log_target
     */
    show_log_target?: boolean;
    /**
     * Read additional specs (target addresses, files, and/or globs), one per line, from these files
     * https://www.pantsbuild.org/v2.31/docs/reference-global#spec_files
     */
    spec_files?: unknown[];
    /**
     * Option scopes to record in stats on run completion
     * https://www.pantsbuild.org/v2.31/docs/reference-global#stats_record_option_scopes
     */
    stats_record_option_scopes?: unknown[];
    /**
     * True if stats recording should be allowed to complete asynchronously when `pantsd` is enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-global#streaming_workunits_complete_async
     */
    streaming_workunits_complete_async?: boolean;
    /**
     * The level of workunits that will be reported to streaming workunit event receivers
     * https://www.pantsbuild.org/v2.31/docs/reference-global#streaming_workunits_level
     */
    streaming_workunits_level?: 'trace' | 'debug' | 'info' | 'warn' | 'error';
    /**
     * Interval in seconds between when streaming workunit event receivers will be polled
     * https://www.pantsbuild.org/v2.31/docs/reference-global#streaming_workunits_report_interval
     */
    streaming_workunits_report_interval?: number;
    /**
     * Paths that correspond with build roots for any subproject that this project depends on
     * https://www.pantsbuild.org/v2.31/docs/reference-global#subproject_roots
     */
    subproject_roots?: unknown[];
    /**
     * Include only targets with these tags (optional '+' prefix) or without these tags ('-' prefix)
     * https://www.pantsbuild.org/v2.31/docs/reference-global#tag
     */
    tag?: unknown[];
    /**
     * What to do when files and globs specified in BUILD files, such as in the `sources` field, cannot be found
     * https://www.pantsbuild.org/v2.31/docs/reference-global#unmatched_build_file_globs
     */
    unmatched_build_file_globs?: 'ignore' | 'warn' | 'error';
    /**
     * What to do when command line arguments, e.g. files and globs like `dir::`, cannot be found
     * https://www.pantsbuild.org/v2.31/docs/reference-global#unmatched_cli_globs
     */
    unmatched_cli_globs?: 'ignore' | 'warn' | 'error';
    /**
     * Verify that all config file values correspond to known options
     * https://www.pantsbuild.org/v2.31/docs/reference-global#verify_config
     */
    verify_config?: boolean;
    /**
     * Set to False if Pants should not watch the filesystem for changes. `pantsd` or `loop` may not be enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-global#watch_filesystem
     */
    watch_filesystem?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options related to sending anonymous stats to the Pants project, to aid development.
   */
  'anonymous-telemetry'?: {
    /**
     * Whether to send anonymous telemetry to the Pants project
     * https://www.pantsbuild.org/v2.31/docs/reference-anonymous-telemetry#enabled
     */
    enabled?: boolean;
    /**
     * An anonymized ID representing this repo
     * https://www.pantsbuild.org/v2.31/docs/reference-anonymous-telemetry#repo_id
     */
    repo_id?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Autoflake Python code formatter (https://github.com/myint/autoflake).
   *
   * This version of Pants uses `autoflake` version 2.3.1 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  autoflake?: {
    /**
     * Arguments to pass directly to Autoflake, e.g. `--autoflake-args='--remove-all-unused-imports --target-version=py37 --quiet'`
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#args
     */
    args?: unknown[];
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use Autoflake when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-autoflake#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The Black Python code formatter (https://black.readthedocs.io/).
   *
   * This version of Pants uses `black` version 24.10.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  black?: {
    /**
     * Arguments to pass directly to Black, e.g. `--black-args='--target-version=py37 --quiet'`
     * https://www.pantsbuild.org/v2.31/docs/reference-black#args
     */
    args?: unknown[];
    /**
     * Path to a TOML config file understood by Black (https://github.com/psf/black#configuration-format)
     * https://www.pantsbuild.org/v2.31/docs/reference-black#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant pyproject.toml config files during runs
     * https://www.pantsbuild.org/v2.31/docs/reference-black#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-black#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-black#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-black#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-black#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-black#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use Black when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-black#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * A tool/plugin for fixing BUILD file deprecations (where possible).
   *
   * This includes deprecations for:
   *
   *   - Renamed targets
   *   - Renamed fields
   */
  'build-deprecations-fixer'?: {
    /**
     * If true, don't use BUILD Deprecations Fixer when running `pants fix`
     * https://www.pantsbuild.org/v2.31/docs/reference-build-deprecations-fixer#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Buildifier is a tool for formatting BUILD files with a standard convention.
   *
   * Pants supports running Buildifier on your Pants BUILD files for several reasons:
   *   - You might like the style that buildifier uses.
   *   - You might be incrementally adopting Pants from Bazel, and are already using buildifier.
   *
   * Please note that there are differences from Bazel's BUILD files (which are Starlark) and Pants' BUILD files (which are Python), so buildifier may issue a syntax error. In practice, these errors should be rare. See https://bazel.build/rules/language#differences_with_python.
   */
  buildifier?: {
    /**
     * Arguments to pass directly to Buildifier, e.g. `--buildifier-args='-lint=fix'`
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#args
     */
    args?: unknown[];
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use Buildifier when running `pants fmt`
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of Buildifier is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of Buildifier
     * https://www.pantsbuild.org/v2.31/docs/reference-buildifier#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Tell Pants to detect what files and targets have changed from Git.
   *
   * See https://www.pantsbuild.org/2.31/docs/using-pants/advanced-target-selection.
   */
  changed?: {
    /**
     * Include direct or transitive dependents of changed targets
     * https://www.pantsbuild.org/v2.31/docs/reference-changed#dependents
     */
    dependents?: 'none' | 'direct' | 'transitive';
    /**
     * Calculate changes contained within a given Git spec (commit range/SHA/ref)
     * https://www.pantsbuild.org/v2.31/docs/reference-changed#diffspec
     */
    diffspec?: string;
    /**
     * Calculate changes since this Git spec (commit range/SHA/ref)
     * https://www.pantsbuild.org/v2.31/docs/reference-changed#since
     */
    since?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Run type checking or the lightest variant of compilation available for a language.
   */
  check?: {
    /**
     * Only run these checkers and skip all others
     * https://www.pantsbuild.org/v2.31/docs/reference-check#only
     */
    only?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Options for checking that external tool default locations are correctly typed.
   */
  'check-default-tools'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Options for configuring CLI behavior, such as command line aliases.
   */
  cli?: {
    /**
     * Register command line aliases
     * https://www.pantsbuild.org/v2.31/docs/reference-cli#alias
     */
    alias?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Generates a completion script for the specified shell. The script is printed to stdout.
   *
   * For example, `pants complete --shell=zsh > pants-completions.zsh` will generate a zsh completion script and write it to the file `pants-completions.zsh`. You can then source this file in your `.zshrc` file to enable completion for Pants.
   *
   * This command is also used by the completion scripts to generate the completion options using passthrough options. This usage is not intended for use by end users, but could be useful for building custom completion scripts.
   *
   * An example of this usage is in the bash completion script, where we use the following command: `pants complete -- ${COMP_WORDS[@]}`. This will generate the completion options for the current args, and then pass them to the bash completion script.
   */
  complete?: {
    /**
     * Which shell completion type should be printed to stdout
     * https://www.pantsbuild.org/v2.31/docs/reference-complete#shell
     */
    shell?: 'bash' | 'zsh';
    [k: string]: unknown | undefined;
  };
  /**
   * Count lines of code.
   */
  'count-loc'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A dependency resolver for the Maven ecosystem. (https://get-coursier.io/)
   */
  coursier?: {
    /**
     * The JVM index to be used by Coursier
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#jvm_index
     */
    jvm_index?: string;
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#known_versions
     */
    known_versions?: unknown[];
    /**
     * Maven style repositories to resolve artifacts from
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#repos
     */
    repos?: unknown[];
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of coursier is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of coursier
     * https://www.pantsbuild.org/v2.31/docs/reference-coursier#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration for Python test coverage measurement.
   *
   * This version of Pants uses `coverage` version 7.10.7 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  'coverage-py'?: {
    /**
     * Path to an INI or TOML config file understood by coverage.py (https://coverage.readthedocs.io/en/latest/config.html)
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant config files during runs (`.coveragerc`, `setup.cfg`, `tox.ini`, and `pyproject.toml`)
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#entry_point
     */
    entry_point?: string;
    /**
     * Fail if the total combined coverage percentage for all tests is less than this number
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#fail_under
     */
    fail_under?: number;
    /**
     * A list of Python modules or filesystem paths to use in the coverage report, e.g. `['helloworld_test', 'helloworld/util/dirutil']`
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#filter
     */
    filter?: unknown[];
    /**
     * If true, Pants will generate a global coverage report
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#global_report
     */
    global_report?: boolean;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * Path to write the Pytest Coverage report to
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#output_dir
     */
    output_dir?: string;
    /**
     * Which coverage report type(s) to emit
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#report
     */
    report?: 'console' | 'xml' | 'html' | 'raw' | 'json' | 'lcov';
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-coverage-py#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Options used to configure and launch a Debug Adapter server.
   *
   * See https://microsoft.github.io/debug-adapter-protocol/ for more information.
   */
  'debug-adapter'?: {
    /**
     * The hostname to use when launching the server
     * https://www.pantsbuild.org/v2.31/docs/reference-debug-adapter#host
     */
    host?: string;
    /**
     * The port to use when launching the server
     * https://www.pantsbuild.org/v2.31/docs/reference-debug-adapter#port
     */
    port?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * An implementation of the Debug Adapter Protocol for Python (https://github.com/microsoft/debugpy).
   *
   * This version of Pants uses `debugpy` version 1.6.7.post1 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  debugpy?: {
    /**
     * Arguments to pass directly to debugpy, e.g. `--debugpy-args='--log-to-stderr'`
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#args
     */
    args?: unknown[];
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-debugpy#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * List the dependencies of the input files/targets.
   */
  dependencies?: {
    /**
     * Include the input targets in the output, along with the dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-dependencies#closed
     */
    closed?: boolean;
    /**
     * Output format for listing dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-dependencies#format
     */
    format?: 'text' | 'json';
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-dependencies#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-dependencies#sep
     */
    sep?: string;
    /**
     * List all transitive dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-dependencies#transitive
     */
    transitive?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * List all targets that depend on any of the input files/targets.
   */
  dependents?: {
    /**
     * Include the input targets in the output, along with the dependents
     * https://www.pantsbuild.org/v2.31/docs/reference-dependents#closed
     */
    closed?: boolean;
    /**
     * Output format for listing dependents
     * https://www.pantsbuild.org/v2.31/docs/reference-dependents#format
     */
    format?: 'text' | 'json';
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-dependents#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-dependents#sep
     */
    sep?: string;
    /**
     * List all transitive dependents
     * https://www.pantsbuild.org/v2.31/docs/reference-dependents#transitive
     */
    transitive?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The Python docformatter tool (https://github.com/myint/docformatter).
   *
   * This version of Pants uses `docformatter` version 1.4 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  docformatter?: {
    /**
     * Arguments to pass directly to docformatter, e.g. `--docformatter-args='--wrap-summaries=100 --pre-summary-newline'`
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#args
     */
    args?: unknown[];
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use docformatter when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-docformatter#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for interacting with Docker.
   */
  docker?: {
    /**
     * Global build arguments (for Docker `--build-arg` options) to use for all `docker build` invocations
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#build_args
     */
    build_args?: unknown[];
    /**
     * Hosts entries to be added to the `/etc/hosts` file in all built images
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#build_hosts
     */
    build_hosts?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Do not use the Docker cache when building images
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#build_no_cache
     */
    build_no_cache?: boolean;
    /**
     * Global default value for `target_stage` on `docker_image` targets, overriding the field value on the targets, if there is a matching stage in the `Dockerfile`
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#build_target_stage
     */
    build_target_stage?: string;
    /**
     * Whether to log the Docker output to the console
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#build_verbose
     */
    build_verbose?: boolean;
    /**
     * Provide a default Docker build context root path for `docker_image` targets that does not specify their own `context_root` field
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#default_context_root
     */
    default_context_root?: string;
    /**
     * Configure the default repository name used in the Docker image tag
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#default_repository
     */
    default_repository?: string;
    /**
     * Environment variables to set for `docker` invocations
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#env_vars
     */
    env_vars?: unknown[];
    /**
     * The PATH value that will be used to find the Docker client and any tools required
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#executable_search_paths
     */
    executable_search_paths?: unknown[];
    /**
     * List any additional executables which are not mandatory for Docker to work, but which should be included if available
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#optional_tools
     */
    optional_tools?: unknown[];
    /**
     * If true, publish images non-interactively
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#publish_noninteractively
     */
    publish_noninteractively?: boolean;
    /**
     * Configure Docker registries
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#registries
     */
    registries?:
      | {
          [k: string]: unknown | undefined;
        }
      | string;
    /**
     * Additional arguments to use for `docker run` invocations
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#run_args
     */
    run_args?: unknown[];
    /**
     * When true and, the `docker_image` build fails, enrich the logs with suggestions for renaming source file COPY instructions where possible
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#suggest_renames
     */
    suggest_renames?: boolean;
    /**
     * If true, add `docker_image` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#tailor
     */
    tailor?: boolean;
    /**
     * List any additional executable tools required for Docker to work
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#tools
     */
    tools?: unknown[];
    /**
     * Use [buildx](https://github.com/docker/buildx#buildx) (and BuildKit) for builds
     * https://www.pantsbuild.org/v2.31/docs/reference-docker#use_buildx
     */
    use_buildx?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Used to parse Dockerfile build specs to infer their dependencies.
   *
   * This version of Pants uses `dockerfile` version 3.4.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  'dockerfile-parser'?: {
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-dockerfile-parser#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-dockerfile-parser#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-dockerfile-parser#requirements
     */
    requirements?: unknown[];
    /**
     * Use the new Rust-based, multithreaded, in-process dependency parser
     * https://www.pantsbuild.org/v2.31/docs/reference-dockerfile-parser#use_rust_parser
     */
    use_rust_parser?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * A highly experimental subsystem to allow setting environment variables and executable search paths for different environments, e.g. macOS vs. Linux.
   */
  'environments-preview'?: {
    /**
     * A mapping of logical names to addresses to environment targets
     * https://www.pantsbuild.org/v2.31/docs/reference-environments-preview#names
     */
    names?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Perform a deployment process.
   */
  'experimental-deploy'?: {
    /**
     * If true, perform a dry run without deploying anything
     * https://www.pantsbuild.org/v2.31/docs/reference-experimental-deploy#dry_run
     */
    dry_run?: boolean;
    /**
     * If false, don't publish target dependencies before deploying the target
     * https://www.pantsbuild.org/v2.31/docs/reference-experimental-deploy#publish_dependencies
     */
    publish_dependencies?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Run the Pants Explorer Web UI server.
   */
  'experimental-explorer'?: {
    /**
     * Server address to bind to
     * https://www.pantsbuild.org/v2.31/docs/reference-experimental-explorer#address
     */
    address?: string;
    /**
     * Server port to bind to
     * https://www.pantsbuild.org/v2.31/docs/reference-experimental-explorer#port
     */
    port?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Export Pants data for use in other tools, such as IDEs.
   *
   * :::caution Exporting tools requires creating a custom lockfile for them
   *
   * Follow [the instructions for creating tool lockfiles](../../docs/python/overview/lockfiles#lockfiles-for-tools)
   *
   * :::
   */
  export?: {
    /**
     * Export the specified binaries
     * https://www.pantsbuild.org/v2.31/docs/reference-export#bin
     */
    bin?: unknown[];
    /**
     * When exporting a mutable virtualenv for a resolve, do PEP-660 editable installs of all `python_distribution` targets that own code in the exported resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-export#py_editable_in_resolve
     */
    py_editable_in_resolve?: unknown[];
    /**
     * When exporting a mutable virtualenv for a resolve listed in this option, generate sources which result from code generation (for example, the `protobuf_sources` and `thrift_sources` target types) into the mutable virtualenv exported for that resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-export#py_generated_sources_in_resolve
     */
    py_generated_sources_in_resolve?: unknown[];
    /**
     * When exporting a mutable virtualenv for a resolve listed in this option, by default console script shebang lines will be made "hermetic"
     * https://www.pantsbuild.org/v2.31/docs/reference-export#py_non_hermetic_scripts_in_resolve
     */
    py_non_hermetic_scripts_in_resolve?: unknown[];
    /**
     * Export Python resolves using this format
     * https://www.pantsbuild.org/v2.31/docs/reference-export#py_resolve_format
     */
    py_resolve_format?: 'mutable_virtualenv' | 'symlinked_immutable_virtualenv';
    /**
     * Export the specified resolve(s)
     * https://www.pantsbuild.org/v2.31/docs/reference-export#resolve
     */
    resolve?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Write generated files to `dist/codegen` for use outside of Pants.
   */
  'export-codegen'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List all source and BUILD files a target depends on.
   */
  filedeps?: {
    /**
     * If True, output with absolute path
     * https://www.pantsbuild.org/v2.31/docs/reference-filedeps#absolute
     */
    absolute?: boolean;
    /**
     * Instead of outputting filenames, output the original globs used in the BUILD file
     * https://www.pantsbuild.org/v2.31/docs/reference-filedeps#globs
     */
    globs?: boolean;
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-filedeps#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-filedeps#sep
     */
    sep?: string;
    /**
     * If True, list files from all dependencies, including transitive dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-filedeps#transitive
     */
    transitive?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Filter the input targets based on various criteria.
   *
   * Most of the filtering options below are comma-separated lists of filtering criteria, with an implied logical OR between them, so that a target passes the filter if it matches any of the criteria in the list.
   *
   * A '-' prefix inverts the sense of the entire comma-separated list, so that a target passes the filter only if it matches _none_ of the criteria in the list.
   *
   * Each of the filtering options may be specified multiple times, with an implied logical AND between them.
   */
  filter?: {
    /**
     * Filter targets based on each target's address matching the provided regular expressions
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#address_regex
     */
    address_regex?: unknown[];
    /**
     * Filter to rendering only targets declared in BUILD files, only file-level targets, or all targets
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#granularity
     */
    granularity?: 'all' | 'file' | 'BUILD';
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#sep
     */
    sep?: string;
    /**
     * Filter targets based on whether any of each target's tags (in the target's `tags` field) matches the provided regular expressions
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#tag_regex
     */
    tag_regex?: unknown[];
    /**
     * Filter targets based each targets's target type, e.g. `resources` or `python_sources`
     * https://www.pantsbuild.org/v2.31/docs/reference-filter#target_type
     */
    target_type?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Autofix source code.
   *
   * This goal runs tools that make 'semantic' changes to source code, where the meaning of the code may change.
   *
   * See also:
   *
   * - [The `fmt` goal](https://www.pantsbuild.org/2.31/reference/goals/fix will run code-editing tools that may make only
   *   syntactic changes, not semantic ones. The `fix` includes running these `fmt` tools by
   *   default (see [the `skip_formatters` option](#skip_formatters) to control this).
   *
   * - [The `lint` goal](https://www.pantsbuild.org/2.31/reference/goals/lint) will validate code is formatted, by running these
   *   fixers and checking there's no change.
   *
   * - Documentation about formatters for various ecosystems, such as:
   *   [Python](https://www.pantsbuild.org/2.31/docs/python/overview/linters-and-formatters), [JVM](https://www.pantsbuild.org/jvm/java-and-scala#lint-and-format),
   *   [SQL](https://www.pantsbuild.org/2.31/docs/sql#enable-sqlfluff-linter)
   */
  fix?: {
    /**
     * The target number of files to be included in each fixer batch
     * https://www.pantsbuild.org/v2.31/docs/reference-fix#batch_size
     */
    batch_size?: number;
    /**
     * Only run these fixers and skip all others
     * https://www.pantsbuild.org/v2.31/docs/reference-fix#only
     */
    only?: unknown[];
    /**
     * If true, skip running all formatters
     * https://www.pantsbuild.org/v2.31/docs/reference-fix#skip_formatters
     */
    skip_formatters?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The Flake8 Python linter (https://flake8.pycqa.org/).
   *
   * This version of Pants uses `flake8` version 6.1.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  flake8?: {
    /**
     * Arguments to pass directly to Flake8, e.g. `--flake8-args='--ignore E123,W456 --enable-extensions H111'`
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#args
     */
    args?: unknown[];
    /**
     * Path to an INI config file understood by Flake8 (https://flake8.pycqa.org/en/latest/user/configuration.html)
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant config files during runs (`.flake8`, `flake8`, `setup.cfg`, and `tox.ini`)
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#entry_point
     */
    entry_point?: string;
    /**
     * Paths to extra files to include in the sandbox
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#extra_files
     */
    extra_files?: unknown[];
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use Flake8 when running `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#skip
     */
    skip?: boolean;
    /**
     * An optional list of `python_sources` target addresses to load first-party plugins
     * https://www.pantsbuild.org/v2.31/docs/reference-flake8#source_plugins
     */
    source_plugins?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Autoformat source code.
   *
   * This goal runs tools that make 'syntactic' changes to source code, where the meaning of the code doesn't (usually) change.
   *
   * See also:
   *
   * - [The `fix` goal](https://www.pantsbuild.org/2.31/reference/goals/fix) will run code-editing tools that may make semantic
   *   changes, not just syntactic ones.
   *
   * - [The `lint` goal](https://www.pantsbuild.org/2.31/reference/goals/lint) will validate code is formatted, by running these
   *   formatters and checking there's no change.
   *
   * - Documentation about formatters for various ecosystems, such as:
   *   [Python](https://www.pantsbuild.org/2.31/docs/python/overview/linters-and-formatters), [Go](https://www.pantsbuild.org/2.31/docs/go#gofmt),
   *   [JVM](https://www.pantsbuild.org/jvm/java-and-scala#lint-and-format), [Shell](https://www.pantsbuild.org/2.31/docs/shell#shfmt-autoformatter).
   */
  fmt?: {
    /**
     * The target number of files to be included in each formatter batch
     * https://www.pantsbuild.org/v2.31/docs/reference-fmt#batch_size
     */
    batch_size?: number;
    /**
     * Only run these formatters and skip all others
     * https://www.pantsbuild.org/v2.31/docs/reference-fmt#only
     */
    only?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Generate lockfiles for third-party dependencies.
   */
  'generate-lockfiles'?: {
    /**
     * If set, lockfile metadata will say to run this command to regenerate the lockfile, rather than running `pants generate-lockfiles --resolve=<name>` like normal
     * https://www.pantsbuild.org/v2.31/docs/reference-generate-lockfiles#custom_command
     */
    custom_command?: string;
    /**
     * Print a summary of changed distributions after generating the lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-generate-lockfiles#diff
     */
    diff?: boolean;
    /**
     * Include unchanged distributions in the diff summary output
     * https://www.pantsbuild.org/v2.31/docs/reference-generate-lockfiles#diff_include_unchanged
     */
    diff_include_unchanged?: boolean;
    /**
     * Only generate lockfiles for the specified resolve(s)
     * https://www.pantsbuild.org/v2.31/docs/reference-generate-lockfiles#resolve
     */
    resolve?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Generate test snapshots.
   */
  'generate-snapshots'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Run each command in a package described by a `//go:generate` directive. This is equivalent to running `go generate` on a Go package.
   *
   * Note: Just like with `go generate`, the `go-generate` goal is never run as part of the build and must be run manually to invoke the commands described by the `//go:generate` directives.
   *
   * See https://go.dev/blog/generate for details.
   */
  'go-generate'?: {
    /**
     * Environment variables to set when invoking generator programs
     * https://www.pantsbuild.org/v2.31/docs/reference-go-generate#env_vars
     */
    env_vars?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Options for Go tests.
   */
  'go-test'?: {
    /**
     * Arguments to pass directly to Go test binary, e.g. `--go-test-args='-run TestFoo -v'`
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#args
     */
    args?: unknown[];
    /**
     * Capture a goroutine blocking profile from the execution of the test runner
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#block_profile
     */
    block_profile?: boolean;
    /**
     * Coverage mode to use when running Go tests with coverage analysis enabled via `--test-use-coverage`
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#cover_mode
     */
    cover_mode?: 'set' | 'count' | 'atomic';
    /**
     * If true, then convert coverage reports to HTML format and write a `coverage.html` file next to the raw coverage data
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#coverage_html
     */
    coverage_html?: boolean;
    /**
     * Path to write the Go coverage reports to
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#coverage_output_dir
     */
    coverage_output_dir?: string;
    /**
     * A list of "import path patterns" for determining which import paths will be instrumented for code coverage
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#coverage_packages
     */
    coverage_packages?: unknown[];
    /**
     * Capture a CPU profile from the execution of the test runner
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#cpu_profile
     */
    cpu_profile?: boolean;
    /**
     * If true, then always enable interoperation between Go and the C/C++ "address sanitizer" when running tests regardless of the test-by-test `asan` field on the relevant `go_package` target
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#force_asan
     */
    force_asan?: boolean;
    /**
     * If true, then always enable interoperation between Go and the C/C++ "memory sanitizer" when running tests regardless of the test-by-test `msan` field on the relevant `go_package` target
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#force_msan
     */
    force_msan?: boolean;
    /**
     * If true, then always enable the Go data race detector when running tests regardless of the test-by-test `test_race` field on the relevant `go_package` target
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#force_race
     */
    force_race?: boolean;
    /**
     * Capture an allocation profile from the execution of the test runner after tests have passed
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#mem_profile
     */
    mem_profile?: boolean;
    /**
     * Capture a mutex contention profile from the execution of the test runner when all tests are complete
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#mutex_profile
     */
    mutex_profile?: boolean;
    /**
     * Write the test binary to the test extra output directory
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#output_test_binary
     */
    output_test_binary?: boolean;
    /**
     * If true, don't use Go test binary when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#skip
     */
    skip?: boolean;
    /**
     * Capture an execution trace from the execution of the test runner
     * https://www.pantsbuild.org/v2.31/docs/reference-go-test#trace
     */
    trace?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Gofmt-specific options.
   */
  gofmt?: {
    /**
     * Arguments to pass directly to gofmt, e.g. `--gofmt-args='-s -e'`
     * https://www.pantsbuild.org/v2.31/docs/reference-gofmt#args
     */
    args?: unknown[];
    /**
     * If true, don't use gofmt when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-gofmt#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for Golang support.
   */
  golang?: {
    /**
     * The path relative to an ASDF install directory to use to find the `bin` directory within an installed Go distribution
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#asdf_bin_relpath
     */
    asdf_bin_relpath?: string;
    /**
     * The ASDF tool name to use when searching for installed Go distributions using the ASDF tool manager (https://asdf-vm.com/)
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#asdf_tool_name
     */
    asdf_tool_name?: string;
    /**
     * Compiler options used when compiling C code when Cgo is enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_c_flags
     */
    cgo_c_flags?: unknown[];
    /**
     * Compiler options used when compiling C++ code when Cgo is enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_cxx_flags
     */
    cgo_cxx_flags?: unknown[];
    /**
     * Enable Cgo support, which allows Go and C code to interact
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_enabled
     */
    cgo_enabled?: boolean;
    /**
     * Name of the tool to use to compile fortran code included via CGo in a Go package
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_fortran_binary_name
     */
    cgo_fortran_binary_name?: string;
    /**
     * Compiler options used when compiling Fortran code when Cgo is enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_fortran_flags
     */
    cgo_fortran_flags?: unknown[];
    /**
     * Name of the tool to use to compile C code included via CGo in a Go package
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_gcc_binary_name
     */
    cgo_gcc_binary_name?: string;
    /**
     * Name of the tool to use to compile C++ code included via CGo in a Go package
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_gxx_binary_name
     */
    cgo_gxx_binary_name?: string;
    /**
     * Compiler options used when linking native code when Cgo is enabled
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_linker_flags
     */
    cgo_linker_flags?: unknown[];
    /**
     * A list of paths to search for tools needed by CGo (e.g., gcc, g++)
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#cgo_tool_search_paths
     */
    cgo_tool_search_paths?: unknown[];
    /**
     * Name of the tool to use as the "external linker" when invoking `go tool link`
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#external_linker_binary_name
     */
    external_linker_binary_name?: string;
    /**
     * List any additional executable tools required for the `go` tool to work
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#extra_tools
     */
    extra_tools?: unknown[];
    /**
     * A list of paths to search for Go and extra tools needed by go
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#go_search_paths
     */
    go_search_paths?: unknown[];
    /**
     * The minimum Go version the distribution discovered by Pants must support
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#minimum_expected_version
     */
    minimum_expected_version?: string;
    /**
     * Environment variables to set when invoking the `go` tool
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#subprocess_env_vars
     */
    subprocess_env_vars?: unknown[];
    /**
     * If true, add a `go_binary` target with the `tailor` goal in every directory with a `.go` file with `package main`
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#tailor_binary_targets
     */
    tailor_binary_targets?: boolean;
    /**
     * If true, add a `go_mod` target with the `tailor` goal wherever there is a `go.mod` file
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#tailor_go_mod_targets
     */
    tailor_go_mod_targets?: boolean;
    /**
     * If true, add a `go_package` target with the `tailor` goal in every directory with a `.go` file
     * https://www.pantsbuild.org/v2.31/docs/reference-golang#tailor_package_targets
     */
    tailor_package_targets?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Google Java Format (https://github.com/google/google-java-format)
   */
  'google-java-format'?: {
    /**
     * Use AOSP style instead of Google Style (4-space indentation). ("AOSP" is the Android Open Source Project.)
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#aosp
     */
    aosp?: boolean;
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `google-java-format` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#lockfile
     */
    lockfile?: string;
    /**
     * If true, don't use Google Java Format when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-google-java-format#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for the explorer GraphQL API.
   */
  graphql?: {
    /**
     * Open a new web browser tab with GraphiQL
     * https://www.pantsbuild.org/v2.31/docs/reference-graphql#open_graphiql
     */
    open_graphiql?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * A linter for Dockerfiles.
   */
  hadolint?: {
    /**
     * Arguments to pass directly to Hadolint, e.g. `--hadolint-args='--format json'`
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#args
     */
    args?: unknown[];
    /**
     * Path to an YAML config file understood by Hadolint (https://github.com/hadolint/hadolint#configure)
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include all relevant config files during runs (`.hadolint.yaml` and `.hadolint.yml`)
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#config_discovery
     */
    config_discovery?: boolean;
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use Hadolint when running `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of Hadolint is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of Hadolint
     * https://www.pantsbuild.org/v2.31/docs/reference-hadolint#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Display usage message.
   */
  help?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Help for advanced options.
   */
  'help-advanced'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Print a JSON object containing all help info.
   */
  'help-all'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * [Internal] Generate test lockfile fixtures for Pants tests.
   */
  'internal-generate-test-lockfile-fixtures'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The IPython enhanced REPL (https://ipython.org/).
   *
   * This version of Pants uses `ipython` version 8.18.1 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  ipython?: {
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-ipython#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-ipython#entry_point
     */
    entry_point?: string;
    /**
     * Whether to tell IPython not to put the CWD on the import path
     * https://www.pantsbuild.org/v2.31/docs/reference-ipython#ignore_cwd
     */
    ignore_cwd?: boolean;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-ipython#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-ipython#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * The Java Archive Tool
   */
  jar_tool?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-jar_tool#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `jar_tool` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-jar_tool#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-jar_tool#lockfile
     */
    lockfile?: string;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-jar_tool#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Jar Jar Abrams tool (https://github.com/eed3si9n/jarjar-abrams)
   */
  jarjar?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `jarjar` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#lockfile
     */
    lockfile?: string;
    /**
     * The strategy to use when processing class files that are in the wrong package
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#misplaced_class_strategy
     */
    misplaced_class_strategy?: 'fatal' | 'skip' | 'omit' | 'move';
    /**
     * Skip the processing of the JAR manifest
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#skip_manifest
     */
    skip_manifest?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-jarjar#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Dump source analysis for java_source[s] targets.
   */
  'java-dump-source-analysis'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Options controlling which dependencies will be inferred for Java targets.
   */
  'java-infer'?: {
    /**
     * Infer a target's dependencies by parsing consumed types from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-java-infer#consumed_types
     */
    consumed_types?: boolean;
    /**
     * Infer a target's dependencies by parsing import statements from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-java-infer#imports
     */
    imports?: boolean;
    /**
     * A dictionary mapping a Java package path to a JVM artifact coordinate (GROUP:ARTIFACT) without the version
     * https://www.pantsbuild.org/v2.31/docs/reference-java-infer#third_party_import_mapping
     */
    third_party_import_mapping?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Internal tool for parsing JVM sources to identify dependencies
   */
  'java-parser'?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-java-parser#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `java-parser` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-java-parser#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-java-parser#lockfile
     */
    lockfile?: string;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-java-parser#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The javac Java source compiler.
   */
  javac?: {
    /**
     * Arguments to pass directly to javac, e.g. `--javac-args='-g -deprecation'`
     * https://www.pantsbuild.org/v2.31/docs/reference-javac#args
     */
    args?: unknown[];
    /**
     * If true, add `java_sources` and `java_tests` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-javac#tailor_source_targets
     */
    tailor_source_targets?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The JUnit test framework (https://junit.org)
   */
  junit?: {
    /**
     * Arguments to pass directly to JUnit, e.g. `--junit-args='--disable-ansi-colors'`
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#args
     */
    args?: unknown[];
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `junit` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#lockfile
     */
    lockfile?: string;
    /**
     * If true, don't use JUnit when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-junit#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for general JVM functionality.
   *
   * JDK strings will be passed directly to Coursier's `--jvm` parameter. Run `cs java --available` to see a list of available JVM versions on your platform.
   *
   * If the string `'system'` is passed, Coursier's `--system-jvm` option will be used instead, but note that this can lead to inconsistent behavior since the JVM version will be whatever happens to be found first on the system's PATH.
   */
  jvm?: {
    /**
     * Extra JVM arguments to use when running tests in debug mode
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#debug_args
     */
    debug_args?: unknown[];
    /**
     * The default value used for the `resolve` and `compatible_resolves` fields
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#default_resolve
     */
    default_resolve?: string;
    /**
     * A list of patterns to exclude from all deploy jars
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#deploy_jar_exclude_files
     */
    deploy_jar_exclude_files?: unknown[];
    /**
     * List of JVM options to pass to all JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#global_options
     */
    global_options?: unknown[];
    /**
     * The JDK to use
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#jdk
     */
    jdk?: string;
    /**
     * The time in milliseconds to delay speculation of nailgun processes while reading from the remote cache
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#nailgun_remote_cache_speculation_delay
     */
    nailgun_remote_cache_speculation_delay?: number;
    /**
     * When enabled, JAR files produced by JVM tools will have timestamps stripped
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#reproducible_jars
     */
    reproducible_jars?: boolean;
    /**
     * A dictionary mapping resolve names to the path of their lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#resolves
     */
    resolves?: {
      [k: string]: unknown | undefined;
    };
    /**
     * The JDK to use when building and running Pants' internal JVM support code and other non-compiler tools
     * https://www.pantsbuild.org/v2.31/docs/reference-jvm#tool_jdk
     */
    tool_jdk?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Dump the JVM dependency inference symbol mapping.
   */
  'jvm-symbol-map'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Run linters/formatters/fixers in check mode.
   *
   * This goal runs tools that check code quality/styling etc, without changing that code. This includes running formatters and fixers, but instead of writing changes back to the workspace, Pants treats any changes they would make as a linting failure.
   *
   * See also:
   *
   * - [The `fmt` goal](https://www.pantsbuild.org/2.31/reference/goals/fix will save the the result of formatters
   *   (code-editing tools that make only "syntactic" changes) back to the workspace.
   *
   * - [The `fmt` goal](https://www.pantsbuild.org/2.31/reference/goals/fix will save the the result of fixers
   *   (code-editing tools that may make "semantic" changes too) back to the workspace.
   *
   * - Documentation about linters for various ecosystems, such as:
   *   [Python](https://www.pantsbuild.org/2.31/docs/python/overview/linters-and-formatters), [Go](https://www.pantsbuild.org/2.31/docs/go),
   *   [JVM](https://www.pantsbuild.org/jvm/java-and-scala#lint-and-format), [Shell](https://www.pantsbuild.org/2.31/docs/shell),
   *   [Docker](https://www.pantsbuild.org/2.31/docs/docker#linting-dockerfiles-with-hadolint).
   */
  lint?: {
    /**
     * The target number of files to be included in each linter batch
     * https://www.pantsbuild.org/v2.31/docs/reference-lint#batch_size
     */
    batch_size?: number;
    /**
     * Only run these linters and skip all others
     * https://www.pantsbuild.org/v2.31/docs/reference-lint#only
     */
    only?: unknown[];
    /**
     * If true, skip running all fixers in check-only mode
     * https://www.pantsbuild.org/v2.31/docs/reference-lint#skip_fixers
     */
    skip_fixers?: boolean;
    /**
     * If true, skip running all formatters in check-only mode
     * https://www.pantsbuild.org/v2.31/docs/reference-lint#skip_formatters
     */
    skip_formatters?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Lists all targets matching the file or target arguments.
   */
  list?: {
    /**
     * Print only targets that are documented with a description
     * https://www.pantsbuild.org/v2.31/docs/reference-list#documented
     */
    documented?: boolean;
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-list#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-list#sep
     */
    sep?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Migrate from `Get` syntax to call-by-name syntax (#19730). This is a **destructive** operation, so only run this on source controlled files that you are prepared to revert if necessary.
   *
   * This goal will attempt to migrate the set of paths/targets specified at the command line if they are part of the "migration plan". This migration does not add any new files, but instead modifies existing files in-place without any formatting. The resulting changes should be reviewed, tested, and formatted/linted before committing.
   *
   * The migration plan is a JSON representation of the rule graph, which is generated by the engine based on the active backends/rules in the project.
   *
   * Each item in the migration plan is a rule that contains the old `Get` syntax, the associated input/output types, and the new function to directly call. The migration plan can be dumped as JSON using the `--json` flag, which can be useful for debugging. For example:
   *
   * {
   *     "filepath": "src/python/pants/source/source_root.py",
   *     "function": "get_source_roots",
   *     "gets": [{
   *         "input_types": [{ "module": "pants.source.source_root", "name": "SourceRootsRequest" }],
   *         "output_type": { "module": "pants.source.source_root", "name": "OptionalSourceRootsResult" },
   *         "rule_dep": { "function": "get_optional_source_roots", "module": "pants.source.source_root" }
   *     }],
   *     "module": "pants.source.source_root"
   * }
   */
  'migrate-call-by-name'?: {
    /**
     * Dump the migration plan as JSON
     * https://www.pantsbuild.org/v2.31/docs/reference-migrate-call-by-name#json
     */
    json?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The MyPy Python type checker (http://mypy-lang.org/).
   *
   * This version of Pants uses `mypy` version 1.18.2 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  mypy?: {
    /**
     * Arguments to pass directly to MyPy, e.g. `--mypy-args='--python-version 3.7 --disallow-any-expr'`
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#args
     */
    args?: unknown[];
    /**
     * Path to a config file understood by MyPy (https://mypy.readthedocs.io/en/stable/config_file.html)
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant config files during runs (`mypy.ini`, `.mypy.ini`, and `setup.cfg`)
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use MyPy when running `pants check`
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#skip
     */
    skip?: boolean;
    /**
     * An optional list of `python_sources` target addresses to load first-party plugins
     * https://www.pantsbuild.org/v2.31/docs/reference-mypy#source_plugins
     */
    source_plugins?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * The Node.js Javascript runtime (including Corepack).
   */
  nodejs?: {
    /**
     * Environment variables to set for `corepack` invocations
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#corepack_env_vars
     */
    corepack_env_vars?: unknown[];
    /**
     * The PATH value that will be used to find any tools required to run nodejs processes
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#executable_search_paths
     */
    executable_search_paths?: unknown[];
    /**
     * Environment variables to set during package manager operations
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#extra_env_vars
     */
    extra_env_vars?: unknown[];
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#known_versions
     */
    known_versions?: unknown[];
    /**
     * List any additional executable which are not mandatory for node processes to work, but which should be included if available
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#optional_tools
     */
    optional_tools?: unknown[];
    /**
     * Default Node.js package manager to use
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#package_manager
     */
    package_manager?: string;
    /**
     * A mapping of package manager versions to semver releases
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#package_managers
     */
    package_managers?: {
      [k: string]: unknown | undefined;
    };
    /**
     * A mapping of names to lockfile paths used in your project
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#resolves
     */
    resolves?: {
      [k: string]: unknown | undefined;
    };
    /**
     * A list of paths to search for Node.js distributions
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#search_path
     */
    search_path?: unknown[];
    /**
     * List any additional executable tools required for node processes to work
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#tools
     */
    tools?: unknown[];
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#url_template
     */
    url_template?: string;
    /**
     * Use this version of nodejs
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Options controlling which dependencies will be inferred for javascript targets.
   */
  'nodejs-infer'?: {
    /**
     * Infer a target's imported dependencies by parsing import statements from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs-infer#imports
     */
    imports?: boolean;
    /**
     * Infer a `package_json`'s dependencies by parsing entry point statements from the package.json file
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs-infer#package_json_entry_points
     */
    package_json_entry_points?: boolean;
    /**
     * How to handle imports that don't have an inferable owner
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs-infer#unowned_dependency_behavior
     */
    unowned_dependency_behavior?: 'error' | 'warning' | 'ignore';
    [k: string]: unknown | undefined;
  };
  /**
   * Options for package.json script configured tests.
   *
   * Your preferred test runner is configured via the `package.json#scripts.test` field.
   *
   * The only expectation from pants is that the `test` script can accept a variadic number of path arguments, relative to the package.json, and that any configuration files are `file` dependencies to the `package_json`.
   *
   * Simple example:
   *
   * Consider a directory-layout:
   *
   * ```
   * ├── BUILD
   * ├── src/
   * │   ├── BUILD
   * │   ├── test/
   * │   │   ├── BUILD
   * │   │   └── index.test.js
   * │   └── index.js
   * └── package.json
   * ```
   *
   * where package.json contains
   *
   * ```json title="package.json"
   * {
   *     ...
   *     "scripts": {
   *         "test": "mocha"
   *     },
   *     "devDependencies: {
   *         ...
   *     }
   * }
   * ```
   *
   *
   * Executing `pants test src/test/index.test.js` will cause the equivalent of `mocha src/test/index.test.js` to run.
   */
  'nodejs-test'?: {
    /**
     * Path to write the NodeJS coverage reports to
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs-test#coverage_output_dir
     */
    coverage_output_dir?: string;
    /**
     * If true, don't use Node.js tests when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-nodejs-test#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Create a distributable package.
   */
  package?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List the paths between two addresses. Either address may represent a group of targets, e.g. `--from=src/app/main.py --to=src/library::`.
   */
  paths?: {
    /**
     * The path starting address
     * https://www.pantsbuild.org/v2.31/docs/reference-paths#from
     */
    from?: string;
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-paths#output_file
     */
    output_file?: string;
    /**
     * The path end address
     * https://www.pantsbuild.org/v2.31/docs/reference-paths#to
     */
    to?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Display BUILD target info
   */
  peek?: {
    /**
     * Whether to leave off values that match the target-defined default values
     * https://www.pantsbuild.org/v2.31/docs/reference-peek#exclude_defaults
     */
    exclude_defaults?: boolean;
    /**
     * Whether to include additional information generated by plugins
     * https://www.pantsbuild.org/v2.31/docs/reference-peek#include_additional_info
     */
    include_additional_info?: boolean;
    /**
     * Whether to include `_dependencies_rules`, `_dependents_rules` and `_applicable_dep_rules` that apply to the target and its dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-peek#include_dep_rules
     */
    include_dep_rules?: boolean;
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-peek#output_file
     */
    output_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * How Pants uses Pex to run Python subprocesses.
   */
  pex?: {
    /**
     * If warnings from Pex should be logged by Pants to the console
     * https://www.pantsbuild.org/v2.31/docs/reference-pex#emit_warnings
     */
    emit_warnings?: boolean;
    /**
     * The PATH value that will be used by the PEX subprocess and any subprocesses it spawns
     * https://www.pantsbuild.org/v2.31/docs/reference-pex#executable_search_paths
     */
    executable_search_paths?: unknown[];
    /**
     * When possible, use venvs whose site-packages directories are populated with symlinks
     * https://www.pantsbuild.org/v2.31/docs/reference-pex#venv_use_symlinks
     */
    venv_use_symlinks?: boolean;
    /**
     * Set the verbosity level of PEX logging, from 0 (no logging) up to 9 (max logging)
     * https://www.pantsbuild.org/v2.31/docs/reference-pex#verbosity
     */
    verbosity?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Default settings for creating PEX executables.
   */
  'pex-binary-defaults'?: {
    /**
     * Whether built PEX binaries should emit PEX warnings at runtime by default
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-binary-defaults#emit_warnings
     */
    emit_warnings?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The PEX (Python EXecutable) tool (https://github.com/pex-tool/pex).
   */
  'pex-cli'?: {
    /**
     * Arguments to pass directly to pex, e.g. `--pex-cli-args='--check=error --no-compile'`
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#global_args
     */
    global_args?: unknown[];
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#known_versions
     */
    known_versions?: unknown[];
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of pex is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of pex
     * https://www.pantsbuild.org/v2.31/docs/reference-pex-cli#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Formats files with a preamble, with the preamble looked up based on path.
   *
   * This is useful for things such as copyright headers or shebang lines.
   *
   * Pants substitutes the following identifiers (following Python's `string.Template` substitutions): - $year: The current year (only used when actually writing the year to the file).
   */
  preamble?: {
    /**
     * If true, don't use preamble when running `pants fmt`
     * https://www.pantsbuild.org/v2.31/docs/reference-preamble#skip
     */
    skip?: boolean;
    /**
     * Which preamble template to use based on the path globs (relative to the build root)
     * https://www.pantsbuild.org/v2.31/docs/reference-preamble#template_by_globs
     */
    template_by_globs?:
      | {
          [k: string]: unknown | undefined;
        }
      | string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Prettier utility for formatting JS/TS (and others) code (https://prettier.io/).
   */
  prettier?: {
    /**
     * Arguments to pass directly to Prettier, e.g. `--prettier-args='--version'`
     * https://www.pantsbuild.org/v2.31/docs/reference-prettier#args
     */
    args?: unknown[];
    /**
     * Override the binary to run for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-prettier#binary_name
     */
    binary_name?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve, instead of the version configured in this subsystem
     * https://www.pantsbuild.org/v2.31/docs/reference-prettier#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * If true, don't use Prettier when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-prettier#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool in the form package@version (e.g. prettier@3.6.2)
     * https://www.pantsbuild.org/v2.31/docs/reference-prettier#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Publish deliverables (assets, distributions, images, etc).
   */
  publish?: {
    /**
     * Show stdout/stderr when publishing with noninteractively
     * https://www.pantsbuild.org/v2.31/docs/reference-publish#noninteractive_process_output
     */
    noninteractive_process_output?: 'all' | 'failed' | 'none';
    /**
     * Filename for JSON structured publish information
     * https://www.pantsbuild.org/v2.31/docs/reference-publish#output
     */
    output?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Determine what Python interpreter constraints are used by files/targets.
   */
  'py-constraints'?: {
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-py-constraints#output_file
     */
    output_file?: string;
    /**
     * Output a CSV summary of interpreter constraints for your whole repository
     * https://www.pantsbuild.org/v2.31/docs/reference-py-constraints#summary
     */
    summary?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The PyOxidizer utility for packaging Python code in a Rust binary (https://pyoxidizer.readthedocs.io/en/stable/pyoxidizer.html).
   *
   * Used with the `pyoxidizer_binary` target.
   *
   * This version of Pants uses `pyoxidizer` version 0.24.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  pyoxidizer?: {
    /**
     * Arguments to pass directly to PyOxidizer, e.g. `--pyoxidizer-args='--release'`
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#args
     */
    args?: unknown[];
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-pyoxidizer#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * The pytest Python test framework (https://docs.pytest.org/).
   *
   * This version of Pants uses `pytest` version 8.4.2 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  pytest?: {
    /**
     * If true, treat pytest exit code 5 ("No tests were collected") as success
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#allow_empty_test_collection
     */
    allow_empty_test_collection?: boolean;
    /**
     * Arguments to pass directly to Pytest, e.g. `--pytest-args='-k test_foo --quiet'`
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#args
     */
    args?: unknown[];
    /**
     * Path to a config file understood by Pytest (https://docs.pytest.org/en/latest/reference/customize.html#configuration-file-formats)
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include all relevant Pytest config files (e.g. `pytest.ini`) during runs
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#entry_point
     */
    entry_point?: string;
    /**
     * If a non-empty string, the process execution slot id (an integer) will be exposed to tests under this environment variable name
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#execution_slot_var
     */
    execution_slot_var?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * The format of generated junit XML files
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#junit_family
     */
    junit_family?: string;
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use Pytest when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#skip
     */
    skip?: boolean;
    /**
     * If true, Pants will use `pytest-xdist` (https://pytest-xdist.readthedocs.io/en/latest/) to parallelize tests within each `python_test` target
     * https://www.pantsbuild.org/v2.31/docs/reference-pytest#xdist_enabled
     */
    xdist_enabled?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for Pants's Python backend.
   */
  python?: {
    /**
     * The default value used for the `resolve` field
     * https://www.pantsbuild.org/v2.31/docs/reference-python#default_resolve
     */
    default_resolve?: string;
    /**
     * The default value used for the `run_goal_use_sandbox` field of Python targets
     * https://www.pantsbuild.org/v2.31/docs/reference-python#default_run_goal_use_sandbox
     */
    default_run_goal_use_sandbox?: boolean;
    /**
     * For Python targets with both `resolve` and `interpreter_constraints` fields, default to using the `interpreter_constraints` field of the resolve if `interpreter_constraints` is not set on the target itself
     * https://www.pantsbuild.org/v2.31/docs/reference-python#default_to_resolve_interpreter_constraints
     */
    default_to_resolve_interpreter_constraints?: boolean;
    /**
     * Create targets for all Python lockfiles defined in `[python].resolves`
     * https://www.pantsbuild.org/v2.31/docs/reference-python#enable_lockfile_targets
     */
    enable_lockfile_targets?: boolean;
    /**
     * Set to true to enable lockfiles for user code
     * https://www.pantsbuild.org/v2.31/docs/reference-python#enable_resolves
     */
    enable_resolves?: boolean;
    /**
     * The Python interpreters your codebase is compatible with
     * https://www.pantsbuild.org/v2.31/docs/reference-python#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * All known Python major/minor interpreter versions that may be used by either your code or tools used by your code
     * https://www.pantsbuild.org/v2.31/docs/reference-python#interpreter_versions_universe
     */
    interpreter_versions_universe?: unknown[];
    /**
     * The behavior when a lockfile has requirements or interpreter constraints that are not compatible with what the current build is using
     * https://www.pantsbuild.org/v2.31/docs/reference-python#invalid_lockfile_behavior
     */
    invalid_lockfile_behavior?: 'error' | 'ignore' | 'warn';
    /**
     * If set, and if running on macOS Big Sur, use `macosx_10_16` as the platform when building wheels
     * https://www.pantsbuild.org/v2.31/docs/reference-python#macos_big_sur_compatibility
     */
    macos_big_sur_compatibility?: boolean;
    /**
     * Use this version of Pip for resolving requirements and generating lockfiles
     * https://www.pantsbuild.org/v2.31/docs/reference-python#pip_version
     */
    pip_version?: string;
    /**
     * Whether to use the standard Python command history file when running a repl
     * https://www.pantsbuild.org/v2.31/docs/reference-python#repl_history
     */
    repl_history?: boolean;
    /**
     * Whether to allow resolution of manylinux wheels when resolving requirements for foreign linux platforms
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolver_manylinux
     */
    resolver_manylinux?: string;
    /**
     * A mapping of logical names to lockfile paths used in your project
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves
     */
    resolves?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If False, Pants will not attempt to generate lockfiles for `[python].resolves` when running the `generate-lockfiles` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_generate_lockfiles
     */
    resolves_generate_lockfiles?: boolean;
    /**
     * The platforms the built PEX should be compatible with when generating lockfiles
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_complete_platforms
     */
    resolves_to_complete_platforms?: {
      [k: string]: unknown | undefined;
    };
    /**
     * When generating a resolve's lockfile, use a constraints file to pin the version of certain requirements
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_constraints_file
     */
    resolves_to_constraints_file?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Specifies requirements to exclude from a resolve and its
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_excludes
     */
    resolves_to_excludes?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Override the interpreter constraints to use when generating a resolve's lockfile with the `generate-lockfiles` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_interpreter_constraints
     */
    resolves_to_interpreter_constraints?: {
      [k: string]: unknown | undefined;
    };
    /**
     * The style of lock to generate
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_lock_style
     */
    resolves_to_lock_style?: {
      [k: string]: unknown | undefined;
    };
    /**
     * When generating a resolve's lockfile, do not use binary packages (i.e. wheels) for these 3rdparty project names
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_no_binary
     */
    resolves_to_no_binary?: {
      [k: string]: unknown | undefined;
    };
    /**
     * When generating a resolve's lockfile, do not use source packages (i.e. sdists) for these 3rdparty project names, e.g `['django', 'requests']`
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_only_binary
     */
    resolves_to_only_binary?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Specifies a transitive requirement to override in a resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_overrides
     */
    resolves_to_overrides?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Defines a limited scope to use a named find links repo or
     * https://www.pantsbuild.org/v2.31/docs/reference-python#resolves_to_sources
     */
    resolves_to_sources?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If enabled, when running binaries, tests, and repls, Pants will use the entire lockfile file instead of just the relevant subset
     * https://www.pantsbuild.org/v2.31/docs/reference-python#run_against_entire_lockfile
     */
    run_against_entire_lockfile?: boolean;
    /**
     * If set, lockfile metadata will be written to a separate sibling file, rather than prepended as a header to the lockfile (which has various disadvantages)
     * https://www.pantsbuild.org/v2.31/docs/reference-python#separate_lockfile_metadata_file
     */
    separate_lockfile_metadata_file?: boolean;
    /**
     * If true, don't add `python_sources` targets for `__init__.py` files that are both empty and where there are no other Python files in the directory
     * https://www.pantsbuild.org/v2.31/docs/reference-python#tailor_ignore_empty_init_files
     */
    tailor_ignore_empty_init_files?: boolean;
    /**
     * If true, add `pex_binary` targets for Python files named `__main__.py` or with a `__main__` clause with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#tailor_pex_binary_targets
     */
    tailor_pex_binary_targets?: boolean;
    /**
     * If true, add `resource` targets for marker files named `py.typed` with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#tailor_py_typed_targets
     */
    tailor_py_typed_targets?: boolean;
    /**
     * If true, add `python_requirements`, `poetry_requirements`, and `pipenv_requirements` target generators with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#tailor_requirements_targets
     */
    tailor_requirements_targets?: boolean;
    /**
     * If true, add `python_sources`, `python_tests`, and `python_test_utils` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-python#tailor_source_targets
     */
    tailor_source_targets?: boolean;
    /**
     * True if Pants should generate a deprecation warning when Python 2.x is used in interpreter constraints
     * https://www.pantsbuild.org/v2.31/docs/reference-python#warn_on_python2_usage
     */
    warn_on_python2_usage?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options used to locate Python interpreters.
   *
   * This subsystem controls where and how Pants will locate Python, but beyond that it does not control which Python interpreter versions are actually used for your code: see the `python` subsystem for that.
   */
  'python-bootstrap'?: {
    /**
     * A map from platform to the information needed to download Python Build Standalone
     * https://www.pantsbuild.org/v2.31/docs/reference-python-bootstrap#internal_python_build_standalone_info
     */
    internal_python_build_standalone_info?: {
      [k: string]: unknown | undefined;
    };
    /**
     * The names of Python binaries to search for
     * https://www.pantsbuild.org/v2.31/docs/reference-python-bootstrap#names
     */
    names?: unknown[];
    /**
     * A list of paths to search for Python interpreters
     * https://www.pantsbuild.org/v2.31/docs/reference-python-bootstrap#search_path
     */
    search_path?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Dump source analysis for python_source targets.
   */
  'python-dump-source-analysis'?: {
    /**
     * The type of information that should be returned
     * https://www.pantsbuild.org/v2.31/docs/reference-python-dump-source-analysis#analysis_flavor
     */
    analysis_flavor?: 'raw_dependency_inference' | 'dependency_inference';
    [k: string]: unknown | undefined;
  };
  /**
   * Options controlling which dependencies will be inferred for Python targets.
   */
  'python-infer'?: {
    /**
     * When multiple sources provide the same symbol, how to choose the provider to use
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#ambiguity_resolution
     */
    ambiguity_resolution?: 'none' | 'by_source_root';
    /**
     * Infer a target's asset dependencies based on strings that look like Posix filepaths, such as those given to `open` or `pkgutil.get_data`
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#assets
     */
    assets?: boolean;
    /**
     * If `--assets` is True, treat valid-looking strings with at least this many forward slash characters as potential assets
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#assets_min_slashes
     */
    assets_min_slashes?: number;
    /**
     * Infer a test target's dependencies on any `conftest.py` files in the current directory and ancestor directories
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#conftests
     */
    conftests?: boolean;
    /**
     * Infer dependencies on targets' entry points, e.g. `pex_binary`'s `entry_point` field, `python_aws_lambda_function`'s `handler` field and `python_distribution`'s `entry_points` field
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#entry_points
     */
    entry_points?: boolean;
    /**
     * Unowned imports that should be ignored
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#ignored_unowned_imports
     */
    ignored_unowned_imports?: unknown[];
    /**
     * Infer a target's imported dependencies by parsing import statements from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#imports
     */
    imports?: boolean;
    /**
     * Infer a target's dependencies on any `__init__.py` files in the packages it is located in (recursively upward in the directory structure)
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#init_files
     */
    init_files?: 'always' | 'content_only' | 'never';
    /**
     * Infer a target's dependencies based on strings that look like dynamic dependencies, such as Django settings files expressing dependencies as strings or pytest plugins listed in the `pytest_plugins` variable in a test module or a conftest file
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#string_imports
     */
    string_imports?: boolean;
    /**
     * If `--string-imports` is True, treat valid-looking strings with at least this many dots in them as potential dynamic dependencies
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#string_imports_min_dots
     */
    string_imports_min_dots?: number;
    /**
     * How to handle imports that don't have an inferable owner
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#unowned_dependency_behavior
     */
    unowned_dependency_behavior?: 'error' | 'warning' | 'ignore';
    /**
     * Use the new Rust-based, multithreaded, in-process dependency parser
     * https://www.pantsbuild.org/v2.31/docs/reference-python-infer#use_rust_parser
     */
    use_rust_parser?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for building native code using Python, e.g. when resolving distributions.
   */
  'python-native-code'?: {
    /**
     * Override the `CPPFLAGS` environment variable for any forked subprocesses
     * https://www.pantsbuild.org/v2.31/docs/reference-python-native-code#cpp_flags
     */
    cpp_flags?: unknown[];
    /**
     * Override the `LDFLAGS` environment variable for any forked subprocesses
     * https://www.pantsbuild.org/v2.31/docs/reference-python-native-code#ld_flags
     */
    ld_flags?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * External Python code repositories, such as PyPI.
   *
   * These options may be used to point to custom package indexes when resolving requirements.
   */
  'python-repos'?: {
    /**
     * URLs and/or file paths corresponding to pip's `--find-links` option
     * https://www.pantsbuild.org/v2.31/docs/reference-python-repos#find_links
     */
    find_links?: unknown[];
    /**
     * URLs of [PEP-503 compatible](https://peps.python.org/pep-0503/) code repository indexes to look for requirements
     * https://www.pantsbuild.org/v2.31/docs/reference-python-repos#indexes
     */
    indexes?: unknown[];
    /**
     * Mappings to facilitate using local Python requirements when the absolute file paths are different on different users' machines
     * https://www.pantsbuild.org/v2.31/docs/reference-python-repos#path_mappings
     */
    path_mappings?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Lint your code using regex patterns, e.g. to check for copyright headers.
   *
   * To activate this with the `lint` goal, you must set `[regex-lint].config`.
   *
   * Unlike other linters, this can run on files not owned by targets, such as BUILD files.
   */
  'regex-lint'?: {
    /**
     * Config schema is as follows:
     * https://www.pantsbuild.org/v2.31/docs/reference-regex-lint#config
     */
    config?:
      | {
          [k: string]: unknown | undefined;
        }
      | string;
    /**
     * How much detail to include in the result
     * https://www.pantsbuild.org/v2.31/docs/reference-regex-lint#detail_level
     */
    detail_level?: 'none' | 'summary' | 'nonmatching' | 'names' | 'all';
    /**
     * If true, don't use regex-lint when running `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-regex-lint#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Open a REPL with the specified code loadable.
   */
  repl?: {
    /**
     * Arguments to pass directly to the repl program, e.g. `--repl-args='-i helloworld/main.py'`
     * https://www.pantsbuild.org/v2.31/docs/reference-repl#args
     */
    args?: unknown[];
    /**
     * True if the REPL should be restarted if its inputs have changed
     * https://www.pantsbuild.org/v2.31/docs/reference-repl#restartable
     */
    restartable?: boolean;
    /**
     * Override the automatically-detected REPL program for the target(s) specified
     * https://www.pantsbuild.org/v2.31/docs/reference-repl#shell
     */
    shell?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * List the repo's registered source roots.
   */
  roots?: {
    /**
     * Output the goal's stdout to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-roots#output_file
     */
    output_file?: string;
    /**
     * String to use to separate lines in line-oriented output
     * https://www.pantsbuild.org/v2.31/docs/reference-roots#sep
     */
    sep?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Ruff Python formatter (https://github.com/astral-sh/ruff).
   */
  ruff?: {
    /**
     * Arguments to pass directly to Ruff, e.g. `--ruff-args='--exclude=foo --ignore=E501'`
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#args
     */
    args?: unknown[];
    /**
     * Path to the `pyproject.toml` or `ruff.toml` file to use for configuration (https://github.com/astral-sh/ruff#configuration)
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant config files during runs (`pyproject.toml`, and `ruff.toml`)
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#config_discovery
     */
    config_discovery?: boolean;
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use Ruff when running `pants fmt` and `pants fix` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of Ruff is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of Ruff
     * https://www.pantsbuild.org/v2.31/docs/reference-ruff#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Runs a binary target.
   *
   * This goal propagates the return code of the underlying executable.
   *
   * If your application can safely be restarted while it is running, you can pass `restartable=True` on your binary target (for supported types), and the `run` goal will automatically restart them as all relevant files change. This can be particularly useful for server applications.
   */
  run?: {
    /**
     * Arguments to pass directly to the executed target, e.g. `--run-args='val1 val2 --debug'`
     * https://www.pantsbuild.org/v2.31/docs/reference-run#args
     */
    args?: unknown[];
    /**
     * Run the interactive process using a Debug Adapter (https://microsoft.github.io/debug-adapter-protocol/) for the language if supported
     * https://www.pantsbuild.org/v2.31/docs/reference-run#debug_adapter
     */
    debug_adapter?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Scala programming language
   */
  scala?: {
    /**
     * If true, add `scala_sources`, `scala_junit_tests`, and `scalatest_tests` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-scala#tailor_source_targets
     */
    tailor_source_targets?: boolean;
    /**
     * A dictionary mapping the name of a resolve to the Scala version to use for all Scala targets consuming that resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-scala#version_for_resolve
     */
    version_for_resolve?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Dump source analysis for scala_source targets.
   */
  'scala-dump-source-analysis'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Options controlling which dependencies will be inferred for Scala targets.
   */
  'scala-infer'?: {
    /**
     * Infer a target's dependencies by parsing consumed types from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-infer#consumed_types
     */
    consumed_types?: boolean;
    /**
     * If true, add a dependency on all `scala_source` targets generated by the same `scala_sources` target generator
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-infer#force_add_siblings_as_dependencies
     */
    force_add_siblings_as_dependencies?: boolean;
    /**
     * Infer a target's dependencies by parsing import statements from sources
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-infer#imports
     */
    imports?: boolean;
    /**
     * Add dependency on the package object to every target
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-infer#package_objects
     */
    package_objects?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Internal tool for parsing Scala sources to identify dependencies
   */
  'scala-parser'?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-parser#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `scala-parser` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-parser#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-parser#lockfile
     */
    lockfile?: string;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scala-parser#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Scala compiler.
   */
  scalac?: {
    /**
     * Arguments to pass directly to scalac, e.g. `--scalac-args='-encoding UTF-8'`
     * https://www.pantsbuild.org/v2.31/docs/reference-scalac#args
     */
    args?: unknown[];
    /**
     * A dictionary mapping JVM resolve names to additional arguments to pass to `scalac` for that resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-scalac#args_for_resolve
     */
    args_for_resolve?: {
      [k: string]: unknown | undefined;
    };
    /**
     * A dictionary, whose keys are the names of each JVM resolve that requires default `scalac` plugins, and the value is a comma-separated string consisting of scalac plugin names
     * https://www.pantsbuild.org/v2.31/docs/reference-scalac#plugins_for_resolve
     */
    plugins_for_resolve?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * scalafix (https://scalacenter.github.io/scalafix/)
   */
  scalafix?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#artifacts
     */
    artifacts?: unknown[];
    /**
     * Name of a config file understood by scalafix (https://scalacenter.github.io/scalafix/docs/users/configuration.html)
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#config_file_name
     */
    config_file_name?: string;
    /**
     * List of JVM options to pass to `scalafix` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#lockfile
     */
    lockfile?: string;
    /**
     * Whether to ignore, error or show a warning when files are found that are not covered by the config file provided in `[scalafix].config_file_name` setting
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#orphan_files_behavior
     */
    orphan_files_behavior?: 'ignore' | 'error' | 'warn';
    /**
     * List of targets providing additional Scalafix rules
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#rule_targets
     */
    rule_targets?: unknown[];
    /**
     * Whether semantic rules are enabled or not
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#semantic_rules
     */
    semantic_rules?: boolean;
    /**
     * If true, don't use scalafix when running `pants fix` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafix#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * scalafmt (https://scalameta.org/scalafmt/)
   */
  scalafmt?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#artifacts
     */
    artifacts?: unknown[];
    /**
     * Name of a config file understood by scalafmt (https://scalameta.org/scalafmt/docs/configuration.html)
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#config_file_name
     */
    config_file_name?: string;
    /**
     * List of JVM options to pass to `scalafmt` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#lockfile
     */
    lockfile?: string;
    /**
     * Whether to ignore, error or show a warning when files are found that are not covered by the config file provided in `[scalafmt].config_file_name` setting
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#orphan_files_behavior
     */
    orphan_files_behavior?: 'ignore' | 'error' | 'warn';
    /**
     * If true, don't use scalafmt when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalafmt#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Scalatest test framework (https://www.scalatest.org/)
   */
  scalatest?: {
    /**
     * Arguments to pass directly to Scalatest, e.g. `--scalatest-args='-t $testname'`
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#args
     */
    args?: unknown[];
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `scalatest` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#lockfile
     */
    lockfile?: string;
    /**
     * If true, don't use Scalatest when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scalatest#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The Succinct Code Counter, aka `scc` (https://github.com/boyter/scc).
   */
  scc?: {
    /**
     * Arguments to pass directly to SCC, e.g. `--scc-args='--no-cocomo'`
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#args
     */
    args?: unknown[];
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#known_versions
     */
    known_versions?: unknown[];
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of SCC is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of SCC
     * https://www.pantsbuild.org/v2.31/docs/reference-scc#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Options to control how setup.py is generated from a `python_distribution` target.
   */
  'setup-py-generation'?: {
    /**
     * What version to set in `install_requires` when a `python_distribution` depends on other `python_distribution`s
     * https://www.pantsbuild.org/v2.31/docs/reference-setup-py-generation#first_party_dependency_version_scheme
     */
    first_party_dependency_version_scheme?: 'exact' | 'compatible' | 'any';
    /**
     * The default value for the `generate_setup` field on `python_distribution` targets
     * https://www.pantsbuild.org/v2.31/docs/reference-setup-py-generation#generate_setup_default
     */
    generate_setup_default?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Python setuptools, used to package `python_distribution` targets.
   *
   * This version of Pants uses `setuptools` version 80.9.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  setuptools?: {
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * A tool for generating versions from VCS metadata (https://github.com/pypa/setuptools_scm).
   *
   * This version of Pants uses `setuptools-scm` version 7.1.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  'setuptools-scm'?: {
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools-scm#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools-scm#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools-scm#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools-scm#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-setuptools-scm#requirements
     */
    requirements?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Options for Pants's Shell support.
   */
  'shell-setup'?: {
    /**
     * Infer Shell dependencies on other Shell files by analyzing `source` statements
     * https://www.pantsbuild.org/v2.31/docs/reference-shell-setup#dependency_inference
     */
    dependency_inference?: boolean;
    /**
     * The PATH value that will be used to find shells and to run certain processes like the shunit2 test runner
     * https://www.pantsbuild.org/v2.31/docs/reference-shell-setup#executable_search_paths
     */
    executable_search_paths?: unknown[];
    /**
     * If true, add `shunit2_tests` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-shell-setup#tailor_shunit2_tests
     */
    tailor_shunit2_tests?: boolean;
    /**
     * If true, add `shell_sources` targets with the `tailor` goal
     * https://www.pantsbuild.org/v2.31/docs/reference-shell-setup#tailor_sources
     */
    tailor_sources?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for Pants' Shell test support.
   */
  'shell-test'?: {
    /**
     * If true, don't use Test with shell scripts when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-shell-test#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * A linter for shell scripts.
   */
  shellcheck?: {
    /**
     * Arguments to pass directly to Shellcheck, e.g. `--shellcheck-args='-e SC20529'`
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#args
     */
    args?: unknown[];
    /**
     * If true, Pants will include all relevant `.shellcheckrc` and `shellcheckrc` files during runs
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#config_discovery
     */
    config_discovery?: boolean;
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use Shellcheck when running `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of Shellcheck is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of Shellcheck
     * https://www.pantsbuild.org/v2.31/docs/reference-shellcheck#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * An autoformatter for shell scripts (https://github.com/mvdan/sh).
   */
  shfmt?: {
    /**
     * Arguments to pass directly to shfmt, e.g. `--shfmt-args='-i 2'`
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#args
     */
    args?: unknown[];
    /**
     * If true, Pants will include all relevant `.editorconfig` files during runs
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#config_discovery
     */
    config_discovery?: boolean;
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use shfmt when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of shfmt is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of shfmt
     * https://www.pantsbuild.org/v2.31/docs/reference-shfmt#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * shUnit2 is a xUnit framework for Bourne based shell scripts (https://github.com/kward/shunit2)
   */
  shunit2?: {
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use shunit2 when running `pants test`
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of shunit2 is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of shunit2
     * https://www.pantsbuild.org/v2.31/docs/reference-shunit2#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration for roots of source trees.
   */
  source?: {
    /**
     * The presence of a file of this name in a directory indicates that the directory is a source root
     * https://www.pantsbuild.org/v2.31/docs/reference-source#marker_filenames
     */
    marker_filenames?: unknown[];
    /**
     * A list of source root suffixes
     * https://www.pantsbuild.org/v2.31/docs/reference-source#root_patterns
     */
    root_patterns?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * An aggregator for Pants stats, such as cache metrics.
   */
  stats?: {
    /**
     * Output format for reporting stats
     * https://www.pantsbuild.org/v2.31/docs/reference-stats#format
     */
    format?: 'text' | 'jsonlines';
    /**
     * At the end of the Pants run, log all counter metrics and summaries of observation histograms, e.g. the number of cache hits and the time saved by caching
     * https://www.pantsbuild.org/v2.31/docs/reference-stats#log
     */
    log?: boolean;
    /**
     * At the end of the Pants run, report a summary of memory usage
     * https://www.pantsbuild.org/v2.31/docs/reference-stats#memory_summary
     */
    memory_summary?: boolean;
    /**
     * Output the stats to this file
     * https://www.pantsbuild.org/v2.31/docs/reference-stats#output_file
     */
    output_file?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Reproducible Build Maven Plugin
   */
  'strip-jar'?: {
    /**
     * Artifact requirements for this tool using specified as either the address of a `jvm_artifact` target or, alternatively, as a colon-separated Maven coordinates (e.g., `group:name:version`)
     * https://www.pantsbuild.org/v2.31/docs/reference-strip-jar#artifacts
     */
    artifacts?: unknown[];
    /**
     * List of JVM options to pass to `strip-jar` JVM processes
     * https://www.pantsbuild.org/v2.31/docs/reference-strip-jar#jvm_options
     */
    jvm_options?: unknown[];
    /**
     * Path to a lockfile used for installing the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-strip-jar#lockfile
     */
    lockfile?: string;
    /**
     * Version string for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-strip-jar#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Environment settings for forked subprocesses.
   */
  'subprocess-environment'?: {
    /**
     * Environment variables to set for process invocations
     * https://www.pantsbuild.org/v2.31/docs/reference-subprocess-environment#env_vars
     */
    env_vars?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * System binaries related settings.
   */
  'system-binaries'?: {
    /**
     * The PATH value that will searched for executables
     * https://www.pantsbuild.org/v2.31/docs/reference-system-binaries#system_binary_paths
     */
    system_binary_paths?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * Auto-generate BUILD file targets for new source files.
   *
   * Each specific `tailor` implementation may be disabled through language-specific options, e.g. `[python].tailor_pex_binary_targets` and `[shell-setup].tailor`.
   */
  tailor?: {
    /**
     * A mapping from standard target type to custom type to use instead
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#alias_mapping
     */
    alias_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * A header, e.g., a copyright notice, to add to the content of created BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#build_file_header
     */
    build_file_header?: string;
    /**
     * The indent to use when auto-editing BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#build_file_indent
     */
    build_file_indent?: string;
    /**
     * The name to use for generated BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#build_file_name
     */
    build_file_name?: string;
    /**
     * Do not write changes to disk, only write back what would change
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#check
     */
    check?: boolean;
    /**
     * Do not add these target definitions
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#ignore_adding_targets
     */
    ignore_adding_targets?: unknown[];
    /**
     * Do not edit or create BUILD files at these paths
     * https://www.pantsbuild.org/v2.31/docs/reference-tailor#ignore_paths
     */
    ignore_paths?: unknown[];
    [k: string]: unknown | undefined;
  };
  /**
   * An autoformatter for TOML files (https://taplo.tamasfe.dev/)
   */
  taplo?: {
    /**
     * Arguments to pass directly to Taplo, e.g. `--taplo-args='--option=align_entries=false'`
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#args
     */
    args?: unknown[];
    /**
     * If true, Pants will include a `taplo.toml` or `.taplo.toml` file found in the build root during a run
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#config_discovery
     */
    config_discovery?: boolean;
    /**
     * A list of glob patterns of files to include/exclude in formatting relative to the build root
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#glob_pattern
     */
    glob_pattern?: unknown[];
    /**
     * Known versions to verify downloads against
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#known_versions
     */
    known_versions?: unknown[];
    /**
     * If true, don't use Taplo when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#skip
     */
    skip?: boolean;
    /**
     * A dictionary mapping platforms to strings to be used when generating the URL to download the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#url_platform_mapping
     */
    url_platform_mapping?: {
      [k: string]: unknown | undefined;
    };
    /**
     * URL to download the tool, either as a single binary file or a compressed file (e.g. zip file)
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#url_template
     */
    url_template?: string;
    /**
     * What action to take in case the requested version of Taplo is not supported
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#use_unsupported_version
     */
    use_unsupported_version?: 'error' | 'warning';
    /**
     * Use this version of Taplo
     * https://www.pantsbuild.org/v2.31/docs/reference-taplo#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Run tests.
   */
  test?: {
    /**
     * The number of attempts to run tests, in case of a test failure
     * https://www.pantsbuild.org/v2.31/docs/reference-test#attempts_default
     */
    attempts_default?: number;
    /**
     * The target maximum number of files to be included in each run of batch-enabled test runners
     * https://www.pantsbuild.org/v2.31/docs/reference-test#batch_size
     */
    batch_size?: number;
    /**
     * Run tests sequentially in an interactive process
     * https://www.pantsbuild.org/v2.31/docs/reference-test#debug
     */
    debug?: boolean;
    /**
     * Run tests sequentially in an interactive process, using a Debug Adapter (https://microsoft.github.io/debug-adapter-protocol/) for the language if supported
     * https://www.pantsbuild.org/v2.31/docs/reference-test#debug_adapter
     */
    debug_adapter?: boolean;
    /**
     * Report information about the test results
     * https://www.pantsbuild.org/v2.31/docs/reference-test#experimental_report_test_result_info
     */
    experimental_report_test_result_info?: boolean;
    /**
     * Additional environment variables to include in test processes
     * https://www.pantsbuild.org/v2.31/docs/reference-test#extra_env_vars
     */
    extra_env_vars?: unknown[];
    /**
     * Force the tests to run, even if they could be satisfied from cache
     * https://www.pantsbuild.org/v2.31/docs/reference-test#force
     */
    force?: boolean;
    /**
     * If a coverage report file is generated, open it on the local system if the system supports this
     * https://www.pantsbuild.org/v2.31/docs/reference-test#open_coverage
     */
    open_coverage?: boolean;
    /**
     * Show stdout/stderr for these tests
     * https://www.pantsbuild.org/v2.31/docs/reference-test#output
     */
    output?: 'all' | 'failed' | 'none';
    /**
     * Write test reports to `--report-dir`
     * https://www.pantsbuild.org/v2.31/docs/reference-test#report
     */
    report?: boolean;
    /**
     * Path to write test reports to
     * https://www.pantsbuild.org/v2.31/docs/reference-test#report_dir
     */
    report_dir?: string;
    /**
     * A shard specification of the form "k/N", where N is a positive integer and k is a non-negative integer less than N
     * https://www.pantsbuild.org/v2.31/docs/reference-test#shard
     */
    shard?: string;
    /**
     * If tests fail, show an appropriate `pants test ...` invocation to rerun just those tests
     * https://www.pantsbuild.org/v2.31/docs/reference-test#show_rerun_command
     */
    show_rerun_command?: boolean;
    /**
     * The default timeout (in seconds) for a test target if the `timeout` field is not set on the target
     * https://www.pantsbuild.org/v2.31/docs/reference-test#timeout_default
     */
    timeout_default?: number;
    /**
     * The maximum timeout (in seconds) that may be used on a test target
     * https://www.pantsbuild.org/v2.31/docs/reference-test#timeout_maximum
     */
    timeout_maximum?: number;
    /**
     * Enable test target timeouts
     * https://www.pantsbuild.org/v2.31/docs/reference-test#timeouts
     */
    timeouts?: boolean;
    /**
     * Generate a coverage report if the test runner supports it
     * https://www.pantsbuild.org/v2.31/docs/reference-test#use_coverage
     */
    use_coverage?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The utility for publishing Python distributions to PyPI and other Python repositories.
   *
   * This version of Pants uses `twine` version 4.0.2 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  twine?: {
    /**
     * Arguments to pass directly to Twine, e.g. `--twine-args='--skip-existing'`
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#args
     */
    args?: unknown[];
    /**
     * Path to a file containing PEM-format CA certificates used for verifying secure connections when publishing python distributions
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#ca_certs_path
     */
    ca_certs_path?: string;
    /**
     * Path to a .pypirc config file to use. (https://packaging.python.org/specifications/pypirc/)
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include all relevant config files during runs (`.pypirc`)
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use Twine when running `pants publish`
     * https://www.pantsbuild.org/v2.31/docs/reference-twine#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * TypeScript type checker (tsc).
   */
  typescript?: {
    /**
     * Override the binary to run for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-typescript#binary_name
     */
    binary_name?: string;
    /**
     * Extra arguments to pass to tsc when running in --build mode
     * https://www.pantsbuild.org/v2.31/docs/reference-typescript#extra_build_args
     */
    extra_build_args?: unknown[];
    /**
     * If specified, install the tool using the lockfile for this named resolve, instead of the version configured in this subsystem
     * https://www.pantsbuild.org/v2.31/docs/reference-typescript#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * If true, don't use TypeScript when running `pants check`
     * https://www.pantsbuild.org/v2.31/docs/reference-typescript#skip
     */
    skip?: boolean;
    /**
     * Version string for the tool in the form package@version (e.g. prettier@3.6.2)
     * https://www.pantsbuild.org/v2.31/docs/reference-typescript#version
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Format and fix safe deprecations in BUILD files.
   *
   * This does not handle the full Pants upgrade. You must still manually change `pants_version` in `pants.toml` and you may need to manually address some deprecations. See https://www.pantsbuild.org/2.31/docs/releases/upgrade-tips for upgrade tips.
   */
  'update-build-files'?: {
    /**
     * Do not write changes to disk, only write back what would change
     * https://www.pantsbuild.org/v2.31/docs/reference-update-build-files#check
     */
    check?: boolean;
    /**
     * Automatically fix deprecations, such as target type renames, that are safe because they do not change semantics
     * https://www.pantsbuild.org/v2.31/docs/reference-update-build-files#fix_safe_deprecations
     */
    fix_safe_deprecations?: boolean;
    /**
     * Format BUILD files using Black, Ruff or Yapf
     * https://www.pantsbuild.org/v2.31/docs/reference-update-build-files#fmt
     */
    fmt?: boolean;
    /**
     * Which formatter Pants should use to format BUILD files
     * https://www.pantsbuild.org/v2.31/docs/reference-update-build-files#formatter
     */
    formatter?: 'yapf' | 'black' | 'ruff' | 'buildifier';
    [k: string]: unknown | undefined;
  };
  /**
   * Display Pants version.
   */
  version?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Options for the visibility rules implementation of the dependency rules API.
   */
  visibility?: {
    /**
     * Visibility rules are enforced whenever dependencies are calculated unless `enforce` is set to false
     * https://www.pantsbuild.org/v2.31/docs/reference-visibility#enforce
     */
    enforce?: boolean;
    /**
     * If true, don't use Visibility Rules when running `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-visibility#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Workunit Logger subsystem. Useful for debugging pants itself.
   */
  'workunit-logger'?: {
    /**
     * Whether to enable workunit logging
     * https://www.pantsbuild.org/v2.31/docs/reference-workunit-logger#enabled
     */
    enabled?: boolean;
    /**
     * Where to write the log to
     * https://www.pantsbuild.org/v2.31/docs/reference-workunit-logger#logdir
     */
    logdir?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * A formatter for Python files (https://github.com/google/yapf).
   *
   * This version of Pants uses `yapf` version 0.43.0 by default. Use a dedicated lockfile and the `install_from_resolve` option to control this.
   */
  yapf?: {
    /**
     * Arguments to pass directly to yapf, e.g. `--yapf-args='--no-local-style'`
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#args
     */
    args?: unknown[];
    /**
     * Path to style file understood by yapf (https://github.com/google/yapf#formatting-style/)
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#config
     */
    config?: {
      [k: string]: unknown | undefined;
    };
    /**
     * If true, Pants will include any relevant config files during runs (`.style.yapf`, `pyproject.toml`, and `setup.cfg`)
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#config_discovery
     */
    config_discovery?: boolean;
    /**
     * The console script for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#console_script
     */
    console_script?: string;
    /**
     * The entry point for the tool
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#entry_point
     */
    entry_point?: string;
    /**
     * If specified, install the tool using the lockfile for this named resolve
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#install_from_resolve
     */
    install_from_resolve?: string;
    /**
     * Python interpreter constraints for this tool
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#interpreter_constraints
     */
    interpreter_constraints?: unknown[];
    /**
     * If `install_from_resolve` is specified, install these requirements, at the versions provided by the specified resolve's lockfile
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#requirements
     */
    requirements?: unknown[];
    /**
     * If true, don't use yapf when running `pants fmt` and `pants lint`
     * https://www.pantsbuild.org/v2.31/docs/reference-yapf#skip
     */
    skip?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
