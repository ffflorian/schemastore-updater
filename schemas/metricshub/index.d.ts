/* eslint-disable */

/**
 * Logger Level (Default: error)
 */
export type LoggerLevel = 'all' | 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal' | 'off';
/**
 * Sets the cycle that MetricsHub uses to perform discoveries and detect new components in your monitored environment. By default, MetricsHub runs a discovery after 30 collects.
 */
export type DiscoveryCycle = number;
/**
 * Enables or disables self monitoring signals. E.g. job duration metrics.
 */
export type EnableSelfMonitoring = boolean;
/**
 * Sequential mode. This forces all network calls to be ordered in a sequential order.
 */
export type Sequential = boolean;
/**
 * Resolve hostnames to FQDN (Default: false).
 */
export type ResolveHostnameToFqdn = boolean;
/**
 * The hostname to which the query is sent.
 */
export type Hostname = unknown[] | string;
/**
 * An array of retry intervals (in milliseconds) between request retries.
 *
 * @minItems 1
 */
export type RetryIntervals = [number, ...number[]];
/**
 * Forces a specific namespace for connectors that perform namespace auto-detection (Advanced).
 */
export type Namespace = string;
export type Computes = (
  | {
      type?: 'add' | 'divide' | 'multiply' | 'subtract';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Number Value
       */
      value?: string | number;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'and' | 'prepend' | 'append';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * String Value
       */
      value?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'arrayTranslate';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Translation Table Name
       */
      translationTable?: string;
      /**
       * Array Separator
       */
      arraySeparator?: string;
      /**
       * Result Separator
       */
      resultSeparator?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'awk';
      /**
       * Awk Script Name
       */
      script?: string;
      /**
       * Exclude Lines Matching
       */
      exclude?: string;
      /**
       * Keep Lines Matching
       */
      keep?: string;
      /**
       * Column Separator
       */
      separators?: string;
      /**
       * Column Computed
       */
      selectColumns?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'convert';
      /**
       * Column Computed
       */
      column?: number;
      conversion?: 'hex2Dec' | 'array2SimpleStatus';
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'duplicateColumn';
      /**
       * Column Computed
       */
      column?: number;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'excludeOnlyMatchingLines' | 'keepOnlyMatchingLines';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Regular Expression To Match
       */
      regExp?: string;
      /**
       * Value List To Match
       */
      valueList?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'extract';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Subcolumn Extracted
       */
      subColumn?: number;
      /**
       * Subcolumn Separators
       */
      subSeparators?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'extractPropertyFromWbemPath';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Property Extracted
       */
      property?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'json2Csv';
      /**
       * JSON Entry Key
       */
      entryKey?: string;
      /**
       * Properties To Capture
       */
      properties?: string;
      /**
       * Column Separator
       */
      separator?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'perBitTranslation';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * List Of Bits
       */
      bitList?: string;
      /**
       * Translation Table Name
       */
      translationTable?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'replace';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Value Replaced
       */
      existingValue?: string;
      /**
       * New Value
       */
      newValue?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'substring';
      /**
       * Column Computed
       */
      column?: number;
      /**
       * Starting Character Index
       */
      start?: string;
      /**
       * Substring Length
       */
      length?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'translate';
      /**
       * Column Computed
       */
      column?: number;
      translationTable?:
        | string
        | {
            /**
             * Translation key-value pairs
             */
            [k: string]: (string | number) | undefined;
          };
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'xml2Csv';
      /**
       * XML Record Tag
       */
      recordTag?: string;
      /**
       * Properties To Capture
       */
      properties?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'encode';
      /**
       * The column index used for the Encode computation.
       */
      column?: number;
      /**
       * The encoding algorithm or format to apply (base64 or url).
       */
      encoding?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'decode';
      /**
       * The column index used for the Decode computation.
       */
      column?: number;
      /**
       * The encoding algorithm or format to reverse (base64 or url).
       */
      encoding?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'excludeMatchingLines';
      /**
       * The column from which to extract values for matching.
       */
      column?: number;
      /**
       * The regular expression pattern to match against the column values.
       */
      regExp?: string;
      /**
       * The list of values to match against the column values.
       */
      valueList?: string;
      [k: string]: unknown | undefined;
    }
  | {
      type?: 'keepColumns';
      /**
       * The column numbers to be kept in the KeepColumns computation (comma-separated list).
       */
      columnNumbers?: string;
      [k: string]: unknown | undefined;
    }
)[];
/**
 * HTTP Method
 */
export type HttpMethod = 'get' | 'post' | 'delete' | 'put';
/**
 * Result Content Expected
 */
export type ResultContent = 'http_status' | 'header' | 'body' | 'all';
/**
 * Represents the possible compression methods for the state set metrics.
 */
export type StateSetCompression = 'none' | 'suppressZeros';
/**
 * Monitor inclusion or exclusion in data collection. This parameter accepts '+<monitor_name>' for inclusion and '!<monitor_name>' for exclusion.
 *
 * @minItems 1
 */
export type MonitorFilters = [string, ...string[]];

export interface HttpsJsonSchemastoreOrgMetricshubJson {
  /**
   * Job Pool Size
   */
  jobPoolSize?: number;
  loggerLevel?: LoggerLevel;
  /**
   * Output directory
   */
  outputDirectory?: string;
  /**
   * Sets the collect period that MetricsHub uses to collects metrics from the monitored resources (Default: 2m).
   */
  collectPeriod?: number | string;
  discoveryCycle?: DiscoveryCycle;
  /**
   * Alerting System Configuration
   */
  alertingSystemConfig?: {
    /**
     * If true, disables the alerting system
     */
    disable?: boolean;
    /**
     * Problem alerts template
     */
    problemTemplate?: string;
    [k: string]: unknown | undefined;
  };
  enableSelfMonitoring?: EnableSelfMonitoring;
  sequential?: Sequential;
  resolveHostnameToFqdn?: ResolveHostnameToFqdn;
  /**
   * Sets how long until the job times out (Default: 5m).
   */
  jobTimeout?: number | string;
  /**
   * Customizes the OpenTelemetry Collector sub-process.
   */
  otelCollector?: {
    /**
     * Overrides the OpenTelemetry Collector command line.
     */
    commandLine?: string[];
    /**
     * Configures the OpenTelemetry Collector environment variables.
     */
    environment?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Configures where to print the OpenTelemetry Collector's output (Default: log).
     */
    output?: 'log' | 'console' | 'silent';
    /**
     * Configures the working directory of the OpenTelemetry Collector.
     */
    workingDir?: string;
    /**
     * Disables the OpenTelemetry Collector (Default: false).
     */
    disabled?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Internal OpenTelemetry SDK configuration
   */
  otel?: {
    /**
     * The OTLP metrics endpoint URL. Must be an http or https URL, depending on whether TLS is used. For gRPC, the URL is http://localhost:4317 and for HTTP/Protobuf it's http://localhost:4318/v1/metrics
     */
    'otel.exporter.otlp.metrics.endpoint'?: string;
    /**
     * Property used to configure the transport protocol to use on OTLP metric requests
     */
    'otel.exporter.otlp.metrics.protocol'?: 'grpc' | 'http/protobuf' | 'noop';
    /**
     * Path to a PEM-formatted file containing trusted certificates for verifying the OTLP server TLS credentials.
     */
    'otel.exporter.otlp.metrics.certificate'?: string;
    /**
     * Custom headers to send with OTLP metric requests, typically for authentication.
     */
    'otel.exporter.otlp.metrics.headers'?: string;
    /**
     * Timeout for OTLP metric requests (in seconds).
     */
    'otel.exporter.otlp.metrics.timeout'?: string;
    /**
     * Exporter pool size. Determines how many metric export operations can run in parallel.
     */
    'otel.exporter.otlp.metrics.pool.size'?: number;
    /**
     * When enabled, all resource attributes will be added as attributes on each exported metric.
     */
    'otel.exporter.otlp.metrics.append_resource_attributes'?: boolean;
    /**
     * Additional OpenTelemetry configuration properties.
     */
    [k: string]: string | undefined;
  };
  /**
   * Web configuration loaded by default. Represents key-value pairs used for web-related settings.
   */
  web?: {
    /**
     * Server port number.
     */
    'server.port'?: string;
    /**
     * Spring application banner mode (supported values: console, log, off).
     */
    'spring.main.banner-mode'?: string;
    /**
     * Enable or disable the MCP server.
     */
    'spring.ai.mcp.server.enabled'?: boolean;
    /**
     * Enable communication over STDIO.
     */
    'spring.ai.mcp.server.stdio'?: boolean;
    /**
     * MCP server name.
     */
    'spring.ai.mcp.server.name'?: string;
    /**
     * Notify on resource changes.
     */
    'spring.ai.mcp.server.resource-change-notification'?: boolean;
    /**
     * Notify on tool changes.
     */
    'spring.ai.mcp.server.tool-change-notification'?: boolean;
    /**
     * Notify on prompt changes.
     */
    'spring.ai.mcp.server.prompt-change-notification'?: boolean;
    /**
     * SSE endpoint for server events.
     */
    'spring.ai.mcp.server.sse-endpoint'?: string;
    /**
     * SSE endpoint for messages.
     */
    'spring.ai.mcp.server.sse-message-endpoint'?: string;
    /**
     * MCP server type (sync or async).
     */
    'spring.ai.mcp.server.type'?: string;
    /**
     * Enable completion capability.
     */
    'spring.ai.mcp.server.capabilities.completion'?: boolean;
    /**
     * Enable prompt capability.
     */
    'spring.ai.mcp.server.capabilities.prompt'?: boolean;
    /**
     * Enable resource capability.
     */
    'spring.ai.mcp.server.capabilities.resource'?: boolean;
    /**
     * Enable tool capability.
     */
    'spring.ai.mcp.server.capabilities.tool'?: boolean;
    /**
     * Request timeout duration.
     */
    'spring.ai.mcp.server.request-timeout'?: number | string;
    /**
     * JSON Web Token short expire value (jwt).
     */
    'jwt.short_expire'?: number;
    /**
     * JSON Web Token long expire value (refresh).
     */
    'jwt.long_expire'?: number;
    /**
     * Secret key used for signing JWT tokens.
     */
    'jwt.secret'?: string;
    /**
     * Enable/disable TLS for the embedded web server; false uses HTTP (Default: true).
     */
    'tls.enabled'?: boolean;
    /**
     * Keystore path (supports classpath:); uses bundled keystore by default (Default: classpath:m8b-keystore.p12).
     */
    'tls.keystore.path'?: string;
    /**
     * Keystore password (also used as key password) (Default: NOPWD).
     */
    'tls.keystore.password'?: string;
    /**
     * Optional key password; falls back to keystore password when not set.
     */
    'tls.keystore.key-password'?: string;
    /**
     * Optional key alias; if unset, first suitable private-key entry is used.
     */
    'tls.keystore.key-alias'?: string;
    /**
     * Maximum tool output bytes (Default: 10485760).
     */
    'ai.openai.tool-output.max-tool-output-bytes'?: number;
    /**
     * Safety delta bytes (Default: 2097152).
     */
    'ai.openai.tool-output.safety-delta-bytes'?: number;
    /**
     * Base temporary directory (Default: ${java.io.tmpdir}/metricshub/ai).
     */
    'ai.openai.tool-output.base-temp-dir'?: string;
    /**
     * OpenAI API key.
     */
    'ai.openai.api-key'?: string;
    /**
     * OpenAI model name (Default: gpt-5.2).
     */
    'ai.openai.model'?: string;
    /**
     * Enable OpenAI reasoning (Default: true).
     */
    'ai.openai.reasoning.enabled'?: boolean;
    /**
     * Reasoning effort (Default: MEDIUM).
     */
    'ai.openai.reasoning.effort'?: 'HIGH' | 'LOW' | 'MINIMAL' | 'NONE' | 'XHIGH' | 'MEDIUM';
    /**
     * Reasoning summary (Default: AUTO).
     */
    'ai.openai.reasoning.summary'?: 'CONCISE' | 'DETAILED' | 'AUTO';
    /**
     * Web configuration key-value pair.
     */
    [k: string]: string | undefined;
  };
  /**
   * Top level attributes
   */
  attributes?: {
    /**
     * Attribute key-value pair
     */
    [k: string]: (string | number) | undefined;
  };
  /**
   * Top level metrics
   */
  metrics?: {
    /**
     * Metrics key-value pair
     */
    [k: string]: (string | number) | undefined;
  };
  resources?: Resources;
  /**
   * Contains Resource Groups
   */
  resourceGroups?: {
    /**
     * Resource Group name
     */
    [k: string]:
      | {
          loggerLevel?: LoggerLevel;
          /**
           * Output directory
           */
          outputDirectory?: string;
          /**
           * Sets the collect period that MetricsHub uses to collects metrics from the monitored resources (Default: 2m).
           */
          collectPeriod?: number | string;
          discoveryCycle?: DiscoveryCycle;
          /**
           * Alerting System Configuration
           */
          alertingSystemConfig?: {
            /**
             * If true, disables the alerting system
             */
            disable?: boolean;
            /**
             * Problem alerts template
             */
            problemTemplate?: string;
            [k: string]: unknown | undefined;
          };
          enableSelfMonitoring?: EnableSelfMonitoring;
          sequential?: Sequential;
          resolveHostnameToFqdn?: ResolveHostnameToFqdn;
          /**
           * Sets how long until the job times out (Default: 5m).
           */
          jobTimeout?: number | string;
          /**
           * Resource group attributes
           */
          attributes?: {
            /**
             * Attribute key-value pair
             */
            [k: string]: (string | number | unknown[]) | undefined;
          };
          /**
           * Resource group metrics
           */
          metrics?: {
            /**
             * Metrics key-value pair
             */
            [k: string]: (string | number) | undefined;
          };
          resources?: Resources;
          stateSetCompression?: StateSetCompression;
          monitorFilters?: MonitorFilters;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * MetricsHub License
   */
  license?: {
    /**
     * The name of the product the license is for.
     */
    product?: string;
    /**
     * The name of the organization the license is for.
     */
    organization?: string;
    /**
     * The expiration date of the license in the format yyyy-MM-dd.
     */
    expiresOn?: string;
    /**
     * The maximum number of resources the license covers.
     */
    resources?: number;
    /**
     * The license key
     */
    key?: string;
    [k: string]: unknown | undefined;
  };
  stateSetCompression?: StateSetCompression;
  /**
   * The path of the custom connectors directory, connectors will also be loaded from the default directory.
   */
  patchDirectory?: string;
  monitorFilters?: MonitorFilters;
  [k: string]: unknown | undefined;
}
/**
 * Contains Resources
 */
export interface Resources {
  /**
   * Resource name
   */
  [k: string]:
    | {
        loggerLevel?: LoggerLevel;
        /**
         * Output directory
         */
        outputDirectory?: string;
        /**
         * Sets the collect period that MetricsHub uses to collects metrics from the monitored resources (Default: 2m).
         */
        collectPeriod?: number | string;
        discoveryCycle?: DiscoveryCycle;
        /**
         * Alerting System Configuration
         */
        alertingSystemConfig?: {
          /**
           * If true, disables the alerting system
           */
          disable?: boolean;
          /**
           * Problem alerts template
           */
          problemTemplate?: string;
          [k: string]: unknown | undefined;
        };
        enableSelfMonitoring?: EnableSelfMonitoring;
        sequential?: Sequential;
        resolveHostnameToFqdn?: ResolveHostnameToFqdn;
        /**
         * Sets how long until the job times out (Default: 5m).
         */
        jobTimeout?: number | string;
        /**
         * Resource attributes
         */
        attributes?: {
          /**
           * Attribute key-value pair
           */
          [k: string]: (string | number | unknown[]) | undefined;
        };
        /**
         * Resource metrics
         */
        metrics?: {
          /**
           * Metrics key-value pair
           */
          [k: string]: (string | number) | undefined;
        };
        /**
         * Protocols Used
         */
        protocols?: {
          /**
           * Configures the HTTP protocol to access the host.
           */
          http?: {
            /**
             * Sets the username used to establish the connection with the host through the HTTP protocol.
             */
            username?: string;
            /**
             * Sets the password used to establish the connection with the host through the HTTP protocol.
             */
            password?: string;
            /**
             * Sets how long until the HTTP request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Enables HTTPS to access the host (Default: true).
             */
            https?: boolean;
            /**
             * Sets the HTTPS port number used to perform HTTP requests (Default: 443).
             */
            port?: number;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the IPMI protocol to access the host.
           */
          ipmi?: {
            /**
             * Sets the username used to establish the connection with the host through the IPMI protocol.
             */
            username?: string;
            /**
             * Sets the username used to establish the connection with the host through the IPMI protocol.
             */
            password?: string;
            /**
             * Sets how long until the IPMI request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * BMC Key used to establish the connection with the host through the IPMI protocol.
             */
            bmcKey?: string;
            /**
             * Skip Authentication
             */
            skipAuth?: boolean;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the OS Command protocol to access the host.
           */
          osCommand?: {
            /**
             * Sets how long until the local OS Command times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets if sudo needs to be used for the local OS Command (Default: false).
             */
            useSudo?: boolean;
            /**
             * Sets the list of commands for which sudo is required.
             */
            useSudoCommands?: string[];
            /**
             * Sets the sudo command to be used for the host to be monitored (Default: sudo).
             */
            sudoCommand?: string;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the Ping protocol to access the host.
           */
          ping?: {
            hostname?: Hostname;
            /**
             * Sets how long until the ping times out (Default: 5s).
             */
            timeout?: number | string;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the SNMP protocol to access the host.
           */
          snmp?: {
            /**
             * Sets the version of the SNMP protocol (Default: v1).
             */
            version?: 'v1' | 'v2c';
            /**
             * Sets the SNMP Community string to use to perform queries (Default: public).
             */
            community?: string;
            /**
             * Sets how long until the SNMP request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the SNMP port number used to perform SNMP queries (Default: 161).
             */
            port?: number;
            hostname?: Hostname;
            retryIntervals?: RetryIntervals;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the SNMPv3 protocol to access the host.
           */
          snmpv3?: {
            /**
             * Sets the username to use for performing the SNMPv3 query.
             */
            username?: string;
            /**
             * Sets the password to use for performing the SNMPv3 query.
             */
            password?: string;
            /**
             * Sets the privacy password to use for performing the SNMPv3 query.
             */
            privacyPassword?: string;
            /**
             * Sets how long until the SNMPv3 request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the SNMP port number used to perform SNMP queries (Default: 161).
             */
            port?: number;
            /**
             * Sets the context name.
             */
            contextName?: string;
            /**
             * Sets the SNMPv3 authentication type. (MD5, SHA, SHA256, SHA512, SHA384, SHA224 or NO_AUTH).
             */
            authType?: 'NO_AUTH' | 'MD5' | 'SHA' | 'SHA256' | 'SHA512' | 'SHA224' | 'SHA384';
            /**
             * Sets the SNMPv3 encryption type. (AES, DES or none).
             */
            privacy?: 'DES' | 'AES' | 'none';
            retryIntervals?: RetryIntervals;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the SSH protocol to access the host.
           */
          ssh?: {
            /**
             * Sets the username to use for performing the SSH query.
             */
            username?: string;
            /**
             * Sets the password to use for performing the SSH query.
             */
            password?: string;
            /**
             * Sets how long until the command times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the sudo command to be used.
             */
            sudoCommand?: string;
            /**
             * Sets if sudo needs to be used for the SSH Command (Default: false).
             */
            useSudo?: boolean;
            /**
             * Sets the list of commands for which sudo is required.
             */
            useSudoCommands?: string[];
            /**
             * Sets the private Key File to use to establish the connection to the host through the SSH protocol.
             */
            privateKey?: string;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the WBEM protocol to access the host.
           */
          wbem?: {
            namespace?: Namespace;
            /**
             * Sets the password used to establish the connection with the host through the WBEM protocol.
             */
            password?: string;
            /**
             * Sets the HTTPS port number used to perform WBEM queries (Default: 5989 for HTTPS or 5988 for HTTP).
             */
            port?: number;
            /**
             * Sets the protocol used to access the host (Default: https).
             */
            protocol?: 'http' | 'https';
            /**
             * Sets how long until the WBEM request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the username used to establish the connection with the host through the WBEM protocol.
             */
            username?: string;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the WinRM protocol to access the host.
           */
          winrm?: {
            namespace?: Namespace;
            /**
             * Sets the password used to establish the connection with the host through the WinRM protocol.
             */
            password?: string;
            /**
             * Sets the HTTPS port number used to perform WinRM queries (Default: 5989 for HTTPS or 5988 for HTTP).
             */
            port?: number;
            /**
             * Sets the protocol used to access the host (Default: https).
             */
            protocol?: 'http' | 'https';
            /**
             * Sets how long until the WinRM request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the username used to establish the connection with the host through the WinRM protocol.
             */
            username?: string;
            /**
             * Authentication Type
             */
            authentications?: ('ntlm' | 'kerberos')[];
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the WMI protocol to access the host.
           */
          wmi?: {
            namespace?: Namespace;
            /**
             * Sets the password used to establish the connection with the host through the WMI protocol.
             */
            password?: string;
            /**
             * Sets how long until the WMI request times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Sets the username used to establish the connection with the host through the WMI protocol.
             */
            username?: string;
            hostname?: Hostname;
            [k: string]: unknown | undefined;
          };
          /**
           * Configuration for JDBC connection.
           */
          jdbc?: {
            hostname?: Hostname;
            /**
             * How long until the SQL query times out (Default: 120s).
             */
            timeout?: number | string;
            /**
             * Name used to authenticate against the database.
             */
            username?: string;
            /**
             * Password used to authenticate against the database.
             */
            password?: string;
            /**
             * The JDBC connection URL to access the database.
             */
            url?: string;
            /**
             * The type of database (e.g., postgresql, oracle, mssql, informix, h2, mysql).
             */
            type?: string;
            /**
             * The port number used to connect to the database.
             */
            port?: number;
            /**
             * The name of the database instance to connect to on the server.
             */
            database?: string;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures the JMX protocol to access the host using Java Management Extensions (JMX). Used for monitoring Java applications via MBean access.
           */
          jmx?: {
            /**
             * The hostname to which the query is sent.
             */
            hostname?: unknown[] | string;
            /**
             * Sets the JMX port number used to perform the connection (Default: 1099).
             */
            port?: number;
            /**
             * Username used to authenticate the JMX connection (optional).
             */
            username?: string;
            /**
             * Password used to authenticate the JMX connection (optional).
             */
            password?: string;
            /**
             * Specifies how long until the JMX connection attempt times out (Default: 30s).
             */
            timeout?: number | string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        };
        /**
         * Custom connector configurations keyed by their ID including variables (Advanced).
         */
        additionalConnectors?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^[a-zA-Z0-9_.-]+$".
           */
          [k: string]: {
            /**
             * Specifies the connector ID to use. Defaults to the key name if not specified.
             */
            uses?: string;
            /**
             * Key-value pairs for connector-specific variables.
             */
            variables?: {
              /**
               * Variable key-value pair
               */
              [k: string]: string | undefined;
            };
            /**
             * Set to false for auto-detection only, defaults to true if not specified.
             */
            force?: boolean;
          };
        };
        /**
         * Defines the list of connectors to include, exclude, or force. Each entry is a connector ID or a tag with an optional prefix to control behavior.
         *
         * Prefixes:
         * - (none)  Add the connector by its ID for automatic detection.
         * - `#`       Include all connectors that have the specified tag.
         * - `!#`      Exclude all connectors that have the specified tag.
         * - `+`       Force-enable the specified connector (included even if not auto-detected).
         * - `!`       Exclude the specified connector by its ID.
         *
         * Examples:
         * - `mysql`        Include the connector with ID mysql.
         * - `#database`    Include all connectors tagged database.
         * - `!#beta`       Exclude all connectors tagged beta.
         * - `+aws`         Force-enable the aws connector.
         * - `!gcp`         Exclude the gcp connector.
         */
        connectors?: string[];
        /**
         * Monitor Identity Properties
         */
        monitors?: {
          [k: string]:
            | {
                /**
                 * Monitor job keys used to create the monitor id
                 */
                keys?: string[];
                /**
                 * Discovery monitoring job
                 */
                discovery?: {
                  sources?: Sources;
                  metrics?: Metrics;
                  /**
                   * Discovery Mapping
                   */
                  mapping?: {
                    source?: string;
                    /**
                     * Discovery Attributes
                     */
                    attributes?: {
                      /**
                       * ID
                       */
                      id?: string;
                      /**
                       * Display Name
                       */
                      name?: string;
                      [k: string]: string | undefined;
                    };
                    /**
                     * Discovery Metrics
                     */
                    metrics?: string;
                    conditionalCollection?: {
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  };
                  [k: string]: unknown | undefined;
                };
                /**
                 * Collect monitoring job
                 */
                collect?: {
                  sources?: Sources;
                  /**
                   * Collect Instance Type
                   */
                  type?: 'monoInstance' | 'multiInstance';
                  /**
                   * Collect Mapping
                   */
                  mapping?: {
                    source?: string;
                    /**
                     * Collect Attributes
                     */
                    attributes?: {
                      /**
                       * ID
                       */
                      id?: string;
                      [k: string]: string | undefined;
                    };
                    /**
                     * Collect Metrics
                     */
                    metrics?: {
                      [k: string]: string | undefined;
                    };
                    legacyTextParameters?: {
                      StatusInformation?: string;
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  };
                  [k: string]: unknown | undefined;
                };
                /**
                 * Simple monitoring job
                 */
                simple?: {
                  sources?: Sources;
                  metrics?: Metrics;
                  /**
                   * Discovery Mapping
                   */
                  mapping?: {
                    source?: string;
                    /**
                     * Discovery Attributes
                     */
                    attributes?: {
                      /**
                       * ID
                       */
                      id?: string;
                      /**
                       * Display Name
                       */
                      name?: string;
                      [k: string]: string | undefined;
                    };
                    /**
                     * Discovery Metrics
                     */
                    metrics?: {
                      [k: string]: string | undefined;
                    };
                    conditionalCollection?: {
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  };
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              }
            | undefined;
        };
        stateSetCompression?: StateSetCompression;
        monitorFilters?: MonitorFilters;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Contains Sources
 */
export interface Sources {
  /**
   * Source Name
   */
  [k: string]:
    | (
        | {
            type?: 'http';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            method?: HttpMethod;
            /**
             * HTTP Url
             */
            url?: string;
            /**
             * HTTP Path
             */
            path?: string;
            /**
             * HTTP Header
             */
            header?: string;
            /**
             * HTTP Body
             */
            body?: string;
            /**
             * HTTP Authentication Token
             */
            authenticationToken?: string;
            resultContent?: ResultContent;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'ipmi';
            forceSerialization?: boolean;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'commandLine';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * The Command Line to Execute
             */
            commandLine?: string;
            /**
             * The Command Line Timeout
             */
            timeout?: number | string;
            /**
             * Command Executed On Local Agent
             */
            executeLocally?: boolean;
            /**
             * Exclude Lines Matching
             */
            exclude?: string;
            /**
             * Keep Lines Matching
             */
            keep?: string;
            /**
             * Begin At Line Number
             */
            beginAtLineNumber?: number;
            /**
             * End At Line Number
             */
            endAtLineNumber?: number;
            /**
             * Column Separator
             */
            separators?: string;
            /**
             * Columns Selected
             */
            selectColumns?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'copy';
            /**
             * Source Copied
             */
            from?: string;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'static';
            /**
             * Source Value
             */
            value?: string;
            computes?: Computes;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpGet';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * OID Queried
             */
            oid?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'snmpTable';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * OID Queried
             */
            oid?: string;
            /**
             * Columns Selected
             */
            selectColumns?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'tableJoin';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * Left Table
             */
            leftTable?: string;
            /**
             * Right Table
             */
            rightTable?: string;
            /**
             * Left Key Column
             */
            leftKeyColumn?: number;
            /**
             * Right Key Column
             */
            rightKeyColumn?: number;
            /**
             * Line Used If No Matches From Right Table
             */
            defaultRightLine?: string;
            /**
             * Is WBEM Identifier
             */
            isWbemKey?: boolean;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'tableUnion';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * Tables To Be Concatenated
             */
            tables?: string[];
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wbem';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * WBEM Query
             */
            query?: string;
            /**
             * WBEM Namespace
             */
            namespace?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'wmi';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * WMI Query
             */
            query?: string;
            /**
             * WMI Namespace
             */
            namespace?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'internalDbQuery';
            forceSerialization?: boolean;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * The list of tables to be used in the internal database query (SQL)
             */
            tables?: {
              /**
               * Source to be used as a table
               */
              source?: string;
              /**
               * Alias for the table
               */
              alias?: string;
              /**
               * SQL table columns
               */
              columns?: {
                /**
                 * Column name
                 */
                name?: string;
                /**
                 * SQL column type
                 */
                type?: string;
                /**
                 * Column number in the source
                 */
                number?: number;
                [k: string]: unknown | undefined;
              }[];
              [k: string]: unknown | undefined;
            }[];
            computes?: Computes;
            /**
             * Internal database SQL Query
             */
            query?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'sql';
            forceSerialization?: boolean;
            computes?: Computes;
            /**
             * SQL Query
             */
            query?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'awk';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * The AWK script to be executed for the computation task.
             */
            script?: string;
            /**
             * The input on which to execute the AWK task.
             */
            input?: string;
            /**
             * The separators parameter for the AWK task.
             */
            separators?: string;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'jmx';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * The ObjectName pattern to query (JMX MBean name).
             */
            objectName?: string;
            /**
             * The list of attributes to fetch from the MBean.
             */
            attributes?: string[];
            /**
             * Optional list of key property names (e.g., 'scope', 'name') to include as extra columns.
             */
            keyProperties?: string[];
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'eventLog';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * Windows Event Log name
             */
            logName?: string;
            /**
             * List of event IDs to filter
             */
            eventIds?: string[];
            /**
             * List of event sources to filter
             */
            sources?: string[];
            /**
             * List of event log levels to filter. Accepts level names (e.g., 'error', 'warn', 'info', 'success', 'failure') or numeric codes (1-5).
             */
            levels?: (string | number)[];
            /**
             * Maximum number of events to retrieve per poll (default: 50, -1 for unlimited)
             */
            maxEventsPerPoll?: number;
            [k: string]: unknown | undefined;
          }
        | {
            type?: 'file';
            forceSerialization?: boolean;
            computes?: Computes;
            executeForEachEntryOf?: ExecuteForEachEntryOf;
            /**
             * File path patterns to read (e.g., C:\logs\*.log, /var/log/app/*.log). Supports wildcards.
             */
            paths?: string[];
            maxSizePerPoll?: number | string;
            /**
             * Processing mode: LOG for incremental reading with cursors, or FLAT for full-file read on each poll (default: LOG).
             */
            mode?: 'LOG' | 'FLAT';
            [k: string]: unknown | undefined;
          }
      )
    | undefined;
}
/**
 * Execute For Each Entry
 */
export interface ExecuteForEachEntryOf {
  source?: string;
  concatMethod?:
    | ('list' | 'json_array' | 'json_array_extended')
    | {
        concatStart?: string;
        concatEnd?: string;
        [k: string]: unknown | undefined;
      };
  [k: string]: unknown | undefined;
}
/**
 * Metric definitions describing the collected OpenTelemetry metrics and their metadata (unit, description, and type).
 */
export interface Metrics {
  [k: string]:
    | {
        /**
         * The measurement unit of the metric (e.g., 'Cel', 's', 'By'). Default is an empty string.
         */
        unit?: string;
        /**
         * A human-readable explanation of what the metric measures and its context.
         */
        description?: string;
        /**
         * Defines the metric type being collected. Can be a simple string type (Gauge, Counter, UpDownCounter) or an object with state set mapping.
         */
        type?:
          | ('Gauge' | 'Counter' | 'UpDownCounter')
          | {
              /**
               * A list defining the possible states that this metric can represent (e.g., ['ok', 'degraded', 'failed']). Typically used when the metric indicates a binary value (0 or 1) corresponding to each defined state.
               */
              stateSet?: unknown[];
              /**
               * Specifies the output metric type when 'stateSet' is defined. Determines how the resulting metric will be emitted in OpenTelemetry.
               */
              output?: 'Gauge' | 'Counter' | 'UpDownCounter';
              [k: string]: unknown | undefined;
            };
        [k: string]: unknown | undefined;
      }
    | undefined;
}
