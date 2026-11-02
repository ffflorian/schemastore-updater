/* eslint-disable */

export type Promtail = {
  global?: Global;
  server?: Server;
  /**
   * Describes how Promtail connects to multiple instances of Grafana Loki, sending logs to each. If one of the remote Loki servers fails to respond or responds with any error which is retryable, this will impact sending logs to any other configured remote Loki servers, because sending is done on a single thread. It is generally recommended to run multiple Promtail clients in parallel if you want to send to multiple remote Loki instances.
   */
  clients?: Client[];
  positions?: Positions;
  /**
   * Describes how Promtail can scrape logs from a series of targets using a specified discovery method. Promtail uses the same scrape_configs as Prometheus.
   */
  scrape_configs?: ScrapeConfig[];
  limits_config?: LimitsConfig;
  target_config?: TargetConfig;
  options?: Options;
  tracing?: Tracing;
} | null;
export type PipelineStage =
  | DockerStage
  | CriStage
  | RegexStage
  | JsonStage
  | TemplateStage
  | MatchStage
  | TimestampStage
  | OutputStage
  | LabelsStage
  | MetricsStage
  | TenantStage
  | ReplaceStage;
export type Metric = CounterMetric | GaugeMetric | HistogramMetric;
/**
 * Describes how to transform logs from targets.
 */
export type PipelineStages = PipelineStage[];

/**
 * Configures global settings which impact all targets.
 */
export interface Global {
  file_watch_config?: FileWatchConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configure how log files from disk are polled for changes.
 */
export interface FileWatchConfig {
  /**
   * Minimum frequency to poll for files. Any time file changes are detected, the poll frequency gets reset to this duration. Default: 250ms.
   */
  min_poll_frequency?: string;
  /**
   * Maximum frequency to poll for files. Any time no file changes are detected, the poll frequency doubles in value up to this value. Default: 250ms.
   */
  max_poll_frequency?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures the server for Promtail.
 */
export interface Server {
  /**
   * Disable the HTTP and gRPC server. Default: false.
   */
  disable?: boolean;
  /**
   * Enable the /debug/fgprof and /debug/pprof endpoints for profiling. Default: false.
   */
  profiling_enabled?: boolean;
  /**
   * HTTP server listen address.
   */
  http_listen_address?: string;
  /**
   * HTTP server listen port (0 means a random port). Default: 80.
   */
  http_listen_port?: number;
  /**
   * gRPC server listen address.
   */
  grpc_listen_address?: string;
  /**
   * gRPC server listen port (0 means a random port). Default: 9095.
   */
  grpc_listen_port?: number;
  /**
   * Register instrumentation handlers (/metrics, etc.). Default: true.
   */
  register_instrumentation?: boolean;
  /**
   * Timeout for graceful shutdowns. Default: 30s.
   */
  graceful_shutdown_timeout?: string;
  /**
   * Read timeout for the HTTP server. Default: 30s.
   */
  http_server_read_timeout?: string;
  /**
   * Write timeout for the HTTP server. Default: 30s.
   */
  http_server_write_timeout?: string;
  /**
   * Idle timeout for the HTTP server. Default: 120s.
   */
  http_server_idle_timeout?: string;
  /**
   * Maximum gRPC message size that can be received. Default: 4194304.
   */
  grpc_server_max_recv_msg_size?: number;
  /**
   * Maximum gRPC message size that can be sent. Default: 4194304.
   */
  grpc_server_max_send_msg_size?: number;
  /**
   * Limit on the number of concurrent streams for gRPC calls (0 = unlimited). Default: 100.
   */
  grpc_server_max_concurrent_streams?: number;
  /**
   * Log only messages with the given severity or above. Default: "info".
   */
  log_level?: 'debug' | 'info' | 'warn' | 'error';
  /**
   * Base path to serve all API routes from (e.g., /v1/).
   */
  http_path_prefix?: string;
  /**
   * Whether target managers are checked for Promtail readiness. If set to false the check is ignored. Default: true.
   */
  health_check_target?: boolean;
  /**
   * Enable configuration reload via HTTP request. Default: false.
   */
  enable_runtime_reload?: boolean;
  [k: string]: unknown | undefined;
}
export interface Client {
  /**
   * The URL where Loki is listening. If Loki is running in microservices mode, this is the HTTP URL for the Distributor. The path to the push API needs to be included. Example: http://example.com:3100/loki/api/v1/push
   */
  url?: string;
  /**
   * Custom HTTP headers to be sent along with each push request. Headers that are set by Promtail itself (e.g. X-Scope-OrgID) cannot be overwritten.
   */
  headers?: {
    [k: string]: string | undefined;
  };
  /**
   * The tenant ID used by default to push logs to Loki. If omitted or empty it assumes Loki is running in single-tenant mode and no X-Scope-OrgID header is sent.
   */
  tenant_id?: string;
  /**
   * Maximum amount of time to wait before sending a batch, even if that batch isn't full. Default: 1s.
   */
  batchwait?: string;
  /**
   * Maximum batch size (in bytes) of logs to accumulate before sending the batch to Loki. Default: 1048576.
   */
  batchsize?: number;
  basic_auth?: BasicAuth;
  oauth2?: Oauth2;
  /**
   * Bearer token to send to the server.
   */
  bearer_token?: string;
  /**
   * File containing the bearer token to send to the server.
   */
  bearer_token_file?: string;
  /**
   * HTTP proxy server to use to connect to the server.
   */
  proxy_url?: string;
  tls_config?: TlsConfig;
  backoff_config?: BackoffConfig;
  /**
   * Disables retries of batches that Loki responds to with a 429 status code (TooManyRequests). This reduces impacts on batches from other tenants. Default: false.
   */
  drop_rate_limited_batches?: boolean;
  /**
   * Static labels to add to all logs being sent to Loki. These can also be specified from the command line with -client.external-labels.
   */
  external_labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Maximum time to wait for a server to respond to a request. Default: 10s.
   */
  timeout?: string;
  [k: string]: unknown | undefined;
}
/**
 * If using basic auth, configures the username and password sent.
 */
export interface BasicAuth {
  /**
   * The username to use for basic auth.
   */
  username?: string;
  /**
   * The password to use for basic auth.
   */
  password?: string;
  /**
   * The file containing the password for basic auth.
   */
  password_file?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization.
 */
export interface Oauth2 {
  /**
   * Client id for OAuth 2.0.
   */
  client_id?: string;
  /**
   * Client secret for OAuth 2.0. Mutually exclusive with `client_secret_file`.
   */
  client_secret?: string;
  /**
   * Read the client secret from a file. Mutually exclusive with `client_secret`.
   */
  client_secret_file?: string;
  /**
   * Optional scopes for the token request.
   */
  scopes?: string[];
  /**
   * The URL to fetch the token from.
   */
  token_url?: string;
  /**
   * Optional parameters to append to the token URL.
   */
  endpoint_params?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * If connecting to a TLS server, configures how the TLS authentication handshake will operate.
 */
export interface TlsConfig {
  /**
   * The CA file to use to verify the server.
   */
  ca_file?: string;
  /**
   * The cert file to send to the server for client auth.
   */
  cert_file?: string;
  /**
   * The key file to send to the server for client auth.
   */
  key_file?: string;
  /**
   * Validates that the server name in the server's certificate is this value.
   */
  server_name?: string;
  /**
   * If true, ignores the server certificate being signed by an unknown CA. Default: false.
   */
  insecure_skip_verify?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configures how to retry requests to Loki when a request fails.
 */
export interface BackoffConfig {
  /**
   * Initial backoff time between retries. Default: 500ms.
   */
  min_period?: string;
  /**
   * Maximum backoff time between retries. Default: 5m.
   */
  max_period?: string;
  /**
   * Maximum number of retries to do. Default: 10.
   */
  max_retries?: number;
  [k: string]: unknown | undefined;
}
/**
 * Describes how to save read file offsets to disk.
 */
export interface Positions {
  /**
   * Location of the positions file. Default: "/var/log/positions.yaml".
   */
  filename?: string;
  /**
   * How often to update the positions file. Default: 10s.
   */
  sync_period?: string;
  /**
   * Whether to ignore and later overwrite positions files that are corrupted. Default: false.
   */
  ignore_invalid_yaml?: boolean;
  [k: string]: unknown | undefined;
}
export interface ScrapeConfig {
  /**
   * Name to identify this scrape config in the Promtail UI.
   */
  job_name?: string;
  pipeline_stages?: PipelineStages;
  decompression?: Decompression;
  journal?: Journal;
  /**
   * Describes from which encoding a scraped file should be converted. Accepts an IANA encoding name.
   */
  encoding?: string;
  syslog?: Syslog;
  loki_push_api?: LokiPushApi;
  windows_events?: WindowsEvents;
  gcplog?: Gcplog;
  azure_event_hubs?: AzureEventHubs;
  kafka?: Kafka;
  gelf?: Gelf;
  cloudflare?: Cloudflare;
  heroku_drain?: HerokuDrain;
  /**
   * Describes how to relabel targets to determine if they should be processed.
   */
  relabel_configs?: RelabelConfig[];
  /**
   * Static targets to scrape.
   */
  static_configs?: StaticConfig[];
  /**
   * Files containing targets to scrape.
   */
  file_sd_configs?: FileSdConfig[];
  /**
   * Describes how to discover Kubernetes services running on the same host.
   */
  kubernetes_sd_configs?: KubernetesSdConfig[];
  /**
   * Describes how to use the Consul Catalog API to discover services registered with the consul cluster.
   */
  consul_sd_configs?: ConsulSdConfig[];
  /**
   * Describes how to use the Consul Agent API to discover services registered with the consul agent running on the same host as Promtail.
   */
  consulagent_sd_configs?: ConsulagentSdConfig[];
  /**
   * Describes how to use the Docker daemon API to discover containers running on the same host as Promtail.
   */
  docker_sd_configs?: DockerSdConfig[];
  [k: string]: unknown | undefined;
}
export interface DockerStage {
  /**
   * The Docker stage parses the contents of logs from Docker containers. It automatically extracts the `time` into the logs timestamp, `stream` into a label, and `log` field into the output.
   */
  docker: {
    [k: string]: unknown | undefined;
  };
}
export interface CriStage {
  /**
   * The CRI stage parses the contents of logs from CRI containers. It automatically extracts the `time` into the logs timestamp, `stream` into a label, and the remaining message into the output.
   */
  cri: {
    [k: string]: unknown | undefined;
  };
}
export interface RegexStage {
  regex: {
    /**
     * The RE2 regular expression. Each capture group must be named.
     */
    expression: string;
    /**
     * Name from extracted data to parse. If empty, uses the log message.
     */
    source?: string;
  };
}
export interface JsonStage {
  json: {
    /**
     * Set of key/value pairs of JMESPath expressions. The key will be the key in the extracted data while the expression will be the value, evaluated as a JMESPath from the source data.
     */
    expressions?: {
      [k: string]: string | undefined;
    };
    /**
     * Name from extracted data to parse. If empty, uses the log message.
     */
    source?: string;
  };
}
export interface TemplateStage {
  template: {
    /**
     * Name from extracted data to parse. If the key in extracted data doesn't exist, an entry for it will be created.
     */
    source: string;
    /**
     * Go template string to use. In addition to normal template functions, ToLower, ToUpper, Replace, Trim, TrimLeft, TrimRight, TrimPrefix, TrimSuffix, and TrimSpace are available as functions.
     */
    template: string;
  };
}
export interface MatchStage {
  match: {
    /**
     * LogQL stream selector.
     */
    selector: string;
    /**
     * Names the pipeline. When defined, creates an additional label in the pipeline_duration_seconds histogram, where the value is concatenated with job_name using an underscore.
     */
    pipeline_name?: string;
    stages?: PipelineStages;
  };
}
export interface TimestampStage {
  timestamp: {
    /**
     * Name from extracted data to use for the timestamp.
     */
    source: string;
    /**
     * Determines how to parse the time string. Can use pre-defined formats by name: ANSIC, UnixDate, RubyDate, RFC822, RFC822Z, RFC850, RFC1123, RFC1123Z, RFC3339, RFC3339Nano, Unix, UnixMs, UnixUs, UnixNs.
     */
    format: string;
    /**
     * IANA Timezone Database string.
     */
    location?: string;
  };
}
export interface OutputStage {
  output: {
    /**
     * Name from extracted data to use for the log entry.
     */
    source: string;
  };
}
export interface LabelsStage {
  /**
   * The labels stage takes data from the extracted map and sets additional labels on the log entry. The key is REQUIRED and the name for the label that will be created. The value is optional and will be the name from extracted data whose value will be used for the value of the label. If empty, the value will be inferred to be the same as the key.
   */
  labels: {
    [k: string]: string | undefined;
  };
}
export interface MetricsStage {
  /**
   * The metrics stage allows for defining metrics from the extracted data. The key is the name of the metric and the value is a specific metric type. Created metrics are not pushed to Loki and are instead exposed via Promtail's /metrics endpoint.
   */
  metrics: {
    [k: string]: Metric | undefined;
  };
}
export interface CounterMetric {
  /**
   * The metric type. Must be Counter.
   */
  type?: 'Counter';
  /**
   * Describes the metric.
   */
  description?: string;
  /**
   * Key from the extracted data map to use for the metric, defaulting to the metric's name if not present.
   */
  source?: string;
  config?: {
    /**
     * Filters down source data and only changes the metric if the targeted value exactly matches the provided string. If not present, all data will match.
     */
    value?: string;
    /**
     * Must be either "inc" or "add" (case insensitive). If inc is chosen, the metric value will increase by 1 for each log line received that passed the filter. If add is chosen, the extracted value must be convertible to a positive float and its value will be added to the metric.
     */
    action?: 'inc' | 'add';
  };
  [k: string]: unknown | undefined;
}
export interface GaugeMetric {
  /**
   * The metric type. Must be Gauge.
   */
  type?: 'Gauge';
  /**
   * Describes the metric.
   */
  description?: string;
  /**
   * Key from the extracted data map to use for the metric, defaulting to the metric's name if not present.
   */
  source?: string;
  config?: {
    /**
     * Filters down source data and only changes the metric if the targeted value exactly matches the provided string. If not present, all data will match.
     */
    value?: string;
    /**
     * Must be "set", "inc", "dec", "add", or "sub". If add, set, or sub is chosen, the extracted value must be convertible to a positive float. inc and dec will increment or decrement the metric's value by 1 respectively.
     */
    action?: 'set' | 'inc' | 'dec' | 'add' | 'sub';
  };
  [k: string]: unknown | undefined;
}
export interface HistogramMetric {
  /**
   * The metric type. Must be Histogram.
   */
  type?: 'Histogram';
  /**
   * Describes the metric.
   */
  description?: string;
  /**
   * Key from the extracted data map to use for the metric, defaulting to the metric's name if not present.
   */
  source?: string;
  config?: {
    /**
     * Filters down source data and only changes the metric if the targeted value exactly matches the provided string. If not present, all data will match.
     */
    value?: string;
    /**
     * Must be either "inc" or "add" (case insensitive). If inc is chosen, the metric value will increase by 1 for each log line received that passed the filter. If add is chosen, the extracted value must be convertible to a positive float and its value will be added to the metric.
     */
    action?: 'inc' | 'add';
    /**
     * Holds all the numbers in which to bucket the metric.
     */
    buckets?: number[];
  };
  [k: string]: unknown | undefined;
}
export interface TenantStage {
  tenant: {
    /**
     * Name from labels whose value should be set as tenant ID. Mutually exclusive with `source` and `value`.
     */
    label?: string;
    /**
     * Name from extracted data whose value should be set as tenant ID. Mutually exclusive with `label` and `value`.
     */
    source?: string;
    /**
     * Value to use to set the tenant ID when this stage is executed. Useful when this stage is included within a conditional pipeline with "match".
     */
    value?: string;
  };
}
export interface ReplaceStage {
  replace: {
    /**
     * The RE2 regular expression. Each named capture group will be added to extracted. Each capture group and named capture group will be replaced with the value given in `replace`.
     */
    expression: string;
    /**
     * Name from extracted data to parse. If empty, uses the log message. The replaced value will be assigned back to the source key.
     */
    source?: string;
    /**
     * Value to which the captured group will be replaced. An empty value will remove the captured group from the log line.
     */
    replace?: string;
  };
}
/**
 * Defines decompression behavior for the given scrape target.
 */
export interface Decompression {
  /**
   * Whether decompression should be tried or not. Default: false.
   */
  enabled?: boolean;
  /**
   * Initial delay to wait before starting the decompression. Especially useful in scenarios where compressed files are found before the compression is finished. Default: 0s.
   */
  initial_delay?: string;
  /**
   * Compression format. Supported formats are: 'gz', 'bz2' and 'z'. Default: "".
   */
  format?: string;
  [k: string]: unknown | undefined;
}
/**
 * Describes how to scrape logs from the journal.
 */
export interface Journal {
  /**
   * When true, log messages from the journal are passed through the pipeline as a JSON message with all of the journal entries' original fields. When false, the log message is the text content of the MESSAGE field from the journal entry. Default: false.
   */
  json?: boolean;
  /**
   * The oldest relative time from process start that will be read and sent to Loki. Default: 7h.
   */
  max_age?: string;
  /**
   * Label map to add to every log coming out of the journal.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Get labels from the journal.
   */
  relabel_configs?: RelabelConfig[];
  /**
   * Path to a directory to read entries from. Defaults to system paths (/var/log/journal and /run/log/journal) when empty.
   */
  path?: string;
  [k: string]: unknown | undefined;
}
export interface RelabelConfig {
  /**
   * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
   */
  source_labels?: string[];
  /**
   * Separator placed between concatenated source label values. Default: ";".
   */
  separator?: string;
  /**
   * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
   */
  target_label?: string;
  /**
   * Regular expression against which the extracted value is matched. Default: (.*).
   */
  regex?: string;
  /**
   * Modulus to take of the hash of the source label values. Required for the hashmod action.
   */
  modulus?: number;
  /**
   * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available. Default: $1.
   */
  replacement?: string;
  /**
   * Action to perform based on regex matching. Default: replace.
   */
  action?: 'replace' | 'keep' | 'drop' | 'hashmod' | 'labelmap' | 'labeldrop' | 'labelkeep';
  [k: string]: unknown | undefined;
}
/**
 * Describes how to receive logs from syslog.
 */
export interface Syslog {
  /**
   * TCP address to listen on. Has the format of "host:port".
   */
  listen_address?: string;
  tls_config?: TlsConfig;
  /**
   * The idle timeout for tcp syslog connections. Default: 120 seconds.
   */
  idle_timeout?: string;
  /**
   * Whether to convert syslog structured data to labels. A structured data entry of [example@99999 test="yes"] would become the label `__syslog_message_sd_example_99999_test` with the value "yes".
   */
  label_structured_data?: boolean;
  /**
   * Label map to add to every log message.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Promtail should pass on the timestamp from the incoming syslog message. When false, or if no timestamp is present on the syslog message, Promtail will assign the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  /**
   * Sets the maximum limit to the length of syslog messages.
   */
  max_message_length?: number;
  syslog_format?: {
    /**
     * Defines the used syslog format at the target. Default: "rfc5424".
     */
    type?: string;
  };
  /**
   * Defines whether the full RFC5424 formatted syslog message should be pushed to Loki.
   */
  use_rfc5424_message?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Describes how to receive logs via the Loki push API, e.g. from other Promtails or the Docker Logging Driver.
 */
export interface LokiPushApi {
  server?: Server;
  /**
   * Label map to add to every log line sent to the push API.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * If Promtail should pass on the timestamp from the incoming log or not. When false Promtail assigns the current timestamp to the log when it was processed. Does not apply to the plaintext endpoint on `/promtail/api/v1/raw`. Default: false.
   */
  use_incoming_timestamp?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Describes how to scrape logs from the Windows event logs.
 */
export interface WindowsEvents {
  /**
   * LCID (Locale ID) for event rendering. 1033 forces English language, 0 uses the default Windows locale. Default: 0.
   */
  locale?: number;
  /**
   * Name of the event log, used only if xpath_query is empty. Example: "Application".
   */
  eventlog_name?: string;
  /**
   * XPath query in short form like "Event/System[EventID=999]" or a full XML Query. Default: "*".
   */
  xpath_query?: string;
  /**
   * Sets the bookmark location on the filesystem. The bookmark contains the current position of the target in XML. When restarting or rolling out Promtail, the target will continue to scrape events where it left off based on the bookmark position.
   */
  bookmark_path?: string;
  /**
   * The interval at which Promtail looks for new events. Default: 3s.
   */
  poll_interval?: string;
  /**
   * Allows excluding the XML event data. Default: false.
   */
  exclude_event_data?: boolean;
  /**
   * Allows excluding the human-friendly event message. Default: false.
   */
  exclude_event_message?: boolean;
  /**
   * Allows excluding the user data of each Windows event. Default: false.
   */
  exclude_user_data?: boolean;
  /**
   * Label map to add to every log line read from the Windows event log.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Promtail should pass on the timestamp from the incoming log or not. When false Promtail assigns the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration describing how to pull/receive Google Cloud Platform (GCP) logs.
 */
export interface Gcplog {
  /**
   * Type of subscription used to fetch logs from GCP. Can be either `pull` (default) or `push`. Default: "pull".
   */
  subscription_type?: 'pull' | 'push';
  /**
   * If the subscription_type is pull, the GCP project ID.
   */
  project_id?: string;
  /**
   * If the subscription_type is pull, the GCP PubSub subscription from where Promtail will pull logs.
   */
  subscription?: string;
  server?: Server;
  /**
   * Whether Promtail should pass on the timestamp from the incoming GCP Log message. When false, or if no timestamp is present in the GCP Log message, Promtail will assign the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  /**
   * Force Promtail to send the full line from Cloud Logging even if `textPayload` is available. By default, if `textPayload` is present in the line, then it is used as the log line. Default: false.
   */
  use_full_line?: boolean;
  /**
   * If the subscription_type is push, configures an HTTP handler timeout. If processing the incoming GCP Logs request takes longer than the configured duration, the server will abort and respond with a 503 HTTP status code. Default: 0 (no timeout).
   */
  push_timeout?: string;
  /**
   * Label map to add to every log message.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration describing how to get Azure Event Hubs messages.
 */
export interface AzureEventHubs {
  /**
   * Event Hubs namespace host name. Typically looks like <your-namespace>.servicebus.windows.net:9093.
   */
  fully_qualified_namespace: string;
  /**
   * Event Hubs to consume.
   */
  event_hubs: string[];
  /**
   * Event Hubs connection string for authentication on Azure Cloud. Default: "range".
   */
  connection_string: string;
  /**
   * The consumer group id. Default: "promtail".
   */
  group_id?: string;
  /**
   * Whether Promtail should pass on the timestamp from the incoming message or not. When false Promtail assigns the current timestamp to the log when it is processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  /**
   * If true, Promtail ignores messages that do not match the schema for Azure resource logs. Default: false.
   */
  disallow_custom_messages?: boolean;
  /**
   * Labels to associate with each log line.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Describes how to fetch logs from Kafka via a consumer group.
 */
export interface Kafka {
  /**
   * The list of brokers to connect to Kafka.
   */
  brokers?: string[];
  /**
   * The list of Kafka topics to consume. If a topic starts with `^` then a regular expression (RE2) is used to match topics.
   */
  topics?: string[];
  /**
   * The Kafka consumer group id. Default: "promtail".
   */
  group_id?: string;
  /**
   * The consumer group rebalancing strategy to use. Default: "range".
   */
  assignor?: 'range' | 'sticky' | 'roundrobin';
  /**
   * Kafka version to connect to. Default: "2.2.1".
   */
  version?: string;
  authentication?: {
    /**
     * Authentication type. Supported values: none, ssl, sasl. Default: "none".
     */
    type?: 'none' | 'ssl' | 'sasl';
    tls_config?: TlsConfig;
    sasl_config?: {
      /**
       * SASL mechanism. Supported values: PLAIN, SCRAM-SHA-256, SCRAM-SHA-512. Default: "PLAIN".
       */
      mechanism?: 'PLAIN' | 'SCRAM-SHA-256' | 'SCRAM-SHA-512';
      /**
       * The user name to use for SASL authentication.
       */
      user?: string;
      /**
       * The password to use for SASL authentication.
       */
      password?: string;
      /**
       * If true, SASL authentication is executed over TLS. Default: false.
       */
      use_tls?: boolean;
      /**
       * The CA file to use to verify the server.
       */
      ca_file?: string;
      /**
       * Validates that the server name in the server's certificate is this value.
       */
      server_name?: string;
      /**
       * If true, ignores the server certificate being signed by an unknown CA. Default: false.
       */
      insecure_skip_verify?: boolean;
    };
  };
  /**
   * Label map to add to every log line read from Kafka.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Promtail should pass on the timestamp from the incoming log or not. When false Promtail assigns the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Describes how to receive logs from a GELF client.
 */
export interface Gelf {
  /**
   * UDP address to listen on. Has the format of "host:port". Default: 0.0.0.0:12201.
   */
  listen_address?: string;
  /**
   * Label map to add to every log message.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Promtail should pass on the timestamp from the incoming GELF message. When false, or if no timestamp is present on the GELF message, Promtail will assign the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration describing how to pull logs from Cloudflare.
 */
export interface Cloudflare {
  /**
   * The Cloudflare API token to use.
   */
  api_token: string;
  /**
   * The Cloudflare zone id to pull logs for.
   */
  zone_id: string;
  /**
   * The time range to pull logs for. Default: 1m.
   */
  pull_range?: string;
  /**
   * The quantity of workers that will pull logs. Default: 3.
   */
  workers?: number;
  /**
   * The type list of fields to fetch for logs. Supported values: default, minimal, extended, all, custom. Default: default.
   */
  fields_type?: 'default' | 'minimal' | 'extended' | 'all' | 'custom';
  /**
   * The additional list of fields to supplement those provided via `fields_type`.
   */
  additional_fields?: string[];
  /**
   * Label map to add to every log message.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration describing how to pull logs from a Heroku LogPlex drain.
 */
export interface HerokuDrain {
  server?: Server;
  /**
   * Label map to add to every log message.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether Promtail should pass on the timestamp from the incoming Heroku drain message. When false, or if no timestamp is present in the syslog message, Promtail assigns the current timestamp to the log when it was processed. Default: false.
   */
  use_incoming_timestamp?: boolean;
  [k: string]: unknown | undefined;
}
export interface StaticConfig {
  /**
   * Configures the discovery to look on the current machine. This is required by the Prometheus service discovery code but doesn't really apply to Promtail which can only look at files on the local machine. As such it should only have the value of localhost, or it can be excluded entirely and a default value of localhost will be applied.
   */
  targets?: string[];
  /**
   * Defines a file to scrape and an optional set of additional labels to apply to all streams defined by the files from __path__.
   */
  labels?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface FileSdConfig {
  /**
   * Patterns for files from which target groups are extracted. The last path segment may contain a single `*` that matches any character sequence.
   */
  files?: string[];
  /**
   * Refresh interval to re-read the files. Default: 5m.
   */
  refresh_interval?: string;
  [k: string]: unknown | undefined;
}
export interface KubernetesSdConfig {
  /**
   * The Kubernetes API server address. If left empty, Promtail is assumed to run inside the cluster and will discover the API server automatically and use the pod's CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/.
   */
  api_server?: string;
  /**
   * The Kubernetes role of entities that should be discovered.
   */
  role: 'endpoints' | 'service' | 'pod' | 'node' | 'ingress';
  basic_auth?: BasicAuth;
  /**
   * Optional bearer token authentication information.
   */
  bearer_token?: string;
  /**
   * Optional bearer token file authentication information.
   */
  bearer_token_file?: string;
  /**
   * Optional proxy URL.
   */
  proxy_url?: string;
  tls_config?: TlsConfig;
  namespaces?: {
    /**
     * Optional namespace discovery. If omitted, all namespaces are used.
     */
    names?: string[];
  };
  /**
   * Optional label and field selectors to limit the discovery process to a subset of available resources. The endpoints role supports pod, service, and endpoint selectors.
   */
  selectors?: {
    /**
     * Optional label and field selectors to limit the discovery process to a subset of available resources.
     */
    role?: string;
    /**
     * Label selector.
     */
    label?: string;
    /**
     * Field selector.
     */
    field?: string;
  }[];
  [k: string]: unknown | undefined;
}
export interface ConsulSdConfig {
  /**
   * The information to access the Consul Catalog API. Default: "localhost:8500".
   */
  server?: string;
  /**
   * Consul ACL token.
   */
  token?: string;
  /**
   * The datacenter to query.
   */
  datacenter?: string;
  /**
   * The URL scheme to use. Default: "http".
   */
  scheme?: string;
  /**
   * The username for Consul basic authentication.
   */
  username?: string;
  /**
   * The password for Consul basic authentication.
   */
  password?: string;
  tls_config?: TlsConfig;
  /**
   * A list of services for which targets are retrieved. If omitted, all services are scraped.
   */
  services?: string[];
  /**
   * An optional list of tags used to filter nodes for a given service. Services must contain all tags in the list.
   */
  tags?: string[];
  /**
   * Node metadata key/value pairs to filter nodes for a given service.
   */
  node_meta?: {
    [k: string]: string | undefined;
  };
  /**
   * The string by which Consul tags are joined into the tag label. Default: ",".
   */
  tag_separator?: string;
  /**
   * Allow stale Consul results. Will reduce load on Consul. Default: true.
   */
  allow_stale?: boolean;
  /**
   * The time after which the provided names are refreshed. On large setups it might be a good idea to increase this value because the catalog changes all the time. Default: 30s.
   */
  refresh_interval?: string;
  [k: string]: unknown | undefined;
}
export interface ConsulagentSdConfig {
  /**
   * The information to access the Consul Agent API. Default: "localhost:8500".
   */
  server?: string;
  /**
   * Consul ACL token.
   */
  token?: string;
  /**
   * The datacenter to query.
   */
  datacenter?: string;
  /**
   * The URL scheme to use. Default: "http".
   */
  scheme?: string;
  /**
   * The username for Consul basic authentication.
   */
  username?: string;
  /**
   * The password for Consul basic authentication.
   */
  password?: string;
  tls_config?: TlsConfig;
  /**
   * A list of services for which targets are retrieved. If omitted, all services are scraped.
   */
  services?: string[];
  /**
   * An optional list of tags used to filter nodes for a given service. Services must contain all tags in the list.
   */
  tags?: string[];
  /**
   * Node metadata key/value pairs to filter nodes for a given service.
   */
  node_meta?: {
    [k: string]: string | undefined;
  };
  /**
   * The string by which Consul tags are joined into the tag label. Default: ",".
   */
  tag_separator?: string;
  [k: string]: unknown | undefined;
}
export interface DockerSdConfig {
  /**
   * Address of the Docker daemon. Use unix:///var/run/docker.sock for a local setup.
   */
  host: string;
  /**
   * Optional proxy URL.
   */
  proxy_url?: string;
  tls_config?: TlsConfig;
  /**
   * The port to scrape metrics from, when `role` is nodes, and for discovered tasks and services that don't have published ports. Default: 80.
   */
  port?: number;
  /**
   * The host to use if the container is in host networking mode. Default: "localhost".
   */
  host_networking_host?: string;
  /**
   * Sorts all non-nil networks in ascending order based on network name and gets the first network if the container has multiple networks defined, thus avoiding collecting duplicate targets. Default: true.
   */
  match_first_network?: boolean;
  /**
   * Optional filters to limit the discovery process to a subset of available resources.
   */
  filters?: {
    /**
     * The name of the filter.
     */
    name?: string;
    /**
     * The values of the filter.
     */
    values?: string[];
    [k: string]: unknown | undefined;
  }[];
  /**
   * The time after which the containers are refreshed. Default: 60s.
   */
  refresh_interval?: string;
  basic_auth?: BasicAuth;
  authorization?: Authorization;
  oauth2?: Oauth21;
  /**
   * Configure whether HTTP requests follow HTTP 3xx redirects. Default: true.
   */
  follow_redirects?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Optional `Authorization` header configuration. Note that `basic_auth` and `authorization` options are mutually exclusive.
 */
export interface Authorization {
  /**
   * Sets the authentication type. Default: Bearer.
   */
  type?: string;
  /**
   * Sets the credentials. It is mutually exclusive with `credentials_file`.
   */
  credentials?: string;
  /**
   * Sets the credentials to the credentials read from the configured file. It is mutually exclusive with `credentials`.
   */
  credentials_file?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization.
 */
export interface Oauth21 {
  /**
   * Client id for OAuth 2.0.
   */
  client_id?: string;
  /**
   * Client secret for OAuth 2.0. Mutually exclusive with `client_secret_file`.
   */
  client_secret?: string;
  /**
   * Read the client secret from a file. Mutually exclusive with `client_secret`.
   */
  client_secret_file?: string;
  /**
   * Optional scopes for the token request.
   */
  scopes?: string[];
  /**
   * The URL to fetch the token from.
   */
  token_url?: string;
  /**
   * Optional parameters to append to the token URL.
   */
  endpoint_params?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configures global limits for this instance of Promtail.
 */
export interface LimitsConfig {
  /**
   * When true, enforces rate limiting on this instance of Promtail. Default: false.
   */
  readline_rate_enabled?: boolean;
  /**
   * The rate limit (in log lines per second) that this instance of Promtail may push to Loki. Default: 10000.
   */
  readline_rate?: number;
  /**
   * The cap in the quantity of burst lines that this instance of Promtail may push to Loki. Default: 10000.
   */
  readline_burst?: number;
  /**
   * When true, exceeding the rate limit causes this instance of Promtail to discard log lines. When false, Promtail temporarily holds off on sending the log lines and retries later. Default: true.
   */
  readline_rate_drop?: boolean;
  /**
   * Limits the maximum number of active streams. Limiting the number of streams is useful as a mechanism to limit memory usage by Promtail, which helps to avoid OOM scenarios. 0 means it is disabled.
   */
  max_streams?: number;
  /**
   * Maximum log line byte size allowed without dropping. Example: 256kb, 2M. 0 to disable. If disabled, targets may apply default buffer size safety limits.
   */
  max_line_size?: number;
  /**
   * Whether to truncate lines that exceed max_line_size. No effect if max_line_size is disabled. Default: false.
   */
  max_line_size_truncate?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configures how tailed targets will be watched.
 */
export interface TargetConfig {
  /**
   * Period to resync directories being watched and files being tailed to discover new ones or stop watching removed ones. Default: "10s".
   */
  sync_period?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configures additional Promtail configurations.
 */
export interface Options {
  [k: string]: unknown | undefined;
}
/**
 * Configures tracing support.
 */
export interface Tracing {
  /**
   * When true, configures tracing for Jaeger. Currently, limited to configuration per environment variables only. Default: false.
   */
  enabled?: boolean;
  [k: string]: unknown | undefined;
}
