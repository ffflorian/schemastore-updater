/* eslint-disable */

/**
 * Prometheus configuration file
 */
export type Prometheus = {
  /**
   * The global configuration specifies parameters that are valid in all other configuration contexts. They also serve as defaults for other configuration sections.
   */
  global?: {
    /**
     * How frequently to scrape targets by default.
     */
    scrape_interval?: string | null;
    /**
     * How long until a scrape request times out.
     */
    scrape_timeout?: string | null;
    /**
     * How frequently to evaluate rules.
     */
    evaluation_interval?: string | null;
    external_labels?: Labels;
    /**
     * File to which PromQL queries are logged. Reloading the configuration will reopen the file.
     */
    query_log_file?: string | null;
    /**
     * An uncompressed response body larger than this many bytes will cause the scrape to fail. 0 means no limit. Example: 100MB.
     */
    body_size_limit?: string | null;
    /**
     * Per-scrape limit on number of scraped samples that will be accepted. If more than this number of samples are present after metric relabelling the entire scrape will be treated as failed. 0 means no limit.
     */
    sample_limit?: number | null;
    /**
     * Per-scrape limit on number of labels that will be accepted for a sample. If more than this number of labels are present post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_limit?: number | null;
    /**
     * Per-scrape limit on length of labels name that will be accepted for a sample. If a label name is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_name_length_limit?: number | null;
    /**
     * Per-scrape limit on length of labels value that will be accepted for a sample. If a label value is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
     */
    label_value_length_limit?: number | null;
    /**
     * Per-scrape config limit on number of unique targets that will be accepted. If more than this number of targets are present after target relabeling, Prometheus will mark the targets as failed without scraping them. 0 means no limit.
     */
    target_limit?: number | null;
  } | null;
  /**
   * Rule files specifies a list of globs. Rules and alerts are read from all matching files.
   */
  rule_files?: FilepathGlob[] | null;
  /**
   * Settings related to the remote write feature.
   */
  remote_write?:
    | (Auth & {
        /**
         * The URL of the endpoint to send samples to.
         */
        url: string;
        /**
         * Timeout for requests to the remote write endpoint.
         */
        remote_timeout?: string | null;
        /**
         * Custom HTTP headers to be sent along with each remote write request. Be aware that headers that are set by Prometheus itself can't be overwritten.
         */
        headers?: {
          [k: string]: string | undefined;
        } | null;
        write_relabel_configs?: RelabelConfigs;
        /**
         * Name of the remote write config, which if specified must be unique among remote write configs. The name will be used in metrics and logging in place of a generated value to help users distinguish between remote write configs.
         */
        name?: string | null;
        /**
         * Enables sending of exemplars over remote write. Note that exemplar storage itself must be enabled for exemplars to be scraped in the first place.
         */
        send_exemplars?: boolean | null;
        basic_auth?: BasicAuth;
        authorization?: Authorization;
        sigv4?: Sigv4;
        azuread?: Azuread;
        google_iam?: GoogleIam;
        oauth2?: Oauth2;
        bearer_token?: BearerToken;
        bearer_token_file?: BearerTokenFile;
        tls_config?: TlsConfig;
        /**
         * Optional proxy URL.
         */
        proxy_url?: string | null;
        /**
         * Configure whether HTTP requests follow HTTP 3xx redirects.
         */
        follow_redirects?: boolean | null;
        /**
         * Configures the queue used to write to remote storage.
         */
        queue_config?: {
          /**
           * Number of samples to buffer per shard before we block reading of more samples from the WAL. It is recommended to have enough capacity in each shard to buffer several requests to keep throughput up while processing occasional slow remote requests.
           */
          capacity?: number | null;
          /**
           * Maximum number of shards, i.e. amount of concurrency.
           */
          max_shards?: number | null;
          /**
           * Minimum number of shards, i.e. amount of concurrency.
           */
          min_shards?: number | null;
          /**
           * Maximum number of samples per send.
           */
          max_samples_per_send?: number | null;
          /**
           * Maximum time a sample will wait in buffer.
           */
          batch_send_deadline?: string | null;
          /**
           * Initial retry delay. Gets doubled for every retry.
           */
          min_backoff?: string | null;
          /**
           * Maximum retry delay.
           */
          max_backoff?: string | null;
          /**
           * Retry upon receiving a 429 status code from the remote-write storage.
           */
          retry_on_http_429?: boolean | null;
          /**
           * If set, any sample that is older than sample_age_limit will not be sent to the remote storage.
           */
          sample_age_limit?: string | null;
        } | null;
        /**
         * Configures the sending of series metadata to remote storage.
         */
        metadata_config?: {
          /**
           * Whether metric metadata is sent to remote storage or not.
           */
          send?: boolean | null;
          /**
           * How frequently metric metadata is sent to remote storage.
           */
          send_interval?: string | null;
          /**
           * Maximum number of samples per send.
           */
          max_samples_per_send?: number | null;
        } | null;
      })[]
    | null;
  /**
   * Settings related to the remote read feature.
   */
  remote_read?:
    | (Auth & {
        /**
         * The URL of the endpoint to query from.
         */
        url: string;
        /**
         * Name of the remote read config, which if specified must be unique among remote read configs. The name will be used in metrics and logging in place of a generated value to help users distinguish between remote read configs.
         */
        name?: string | null;
        required_matchers?: Labels;
        /**
         * Timeout for requests to the remote read endpoint.
         */
        remote_timeout?: string | null;
        /**
         * Custom HTTP headers to be sent along with each remote read request. Be aware that headers that are set by Prometheus itself can't be overwritten.
         */
        headers?: {
          [k: string]: string | undefined;
        } | null;
        /**
         * Whether reads should be made for queries for time ranges that the local storage should have complete data for.
         */
        read_recent?: boolean | null;
        basic_auth?: BasicAuth;
        authorization?: Authorization;
        oauth2?: Oauth2;
        bearer_token?: BearerToken;
        bearer_token_file?: BearerTokenFile;
        tls_config?: TlsConfig;
        /**
         * Optional proxy URL.
         */
        proxy_url?: string | null;
        /**
         * Configure whether HTTP requests follow HTTP 3xx redirects.
         */
        follow_redirects?: boolean | null;
      })[]
    | null;
  /**
   * Scrape config files specifies a list of globs. Scrape configs are read from all matching files and appended to the list of scrape configs.
   */
  scrape_config_files?: FilepathGlob[] | null;
  /**
   * A list of scrape configurations.
   */
  scrape_configs?:
    | (Auth & {
        /**
         * The job name assigned to scraped metrics by default. Must be unique across all scrape configurations.
         */
        job_name: string;
        /**
         * How frequently to scrape targets from this job. Defaults to `global.scrape_interval`.
         */
        scrape_interval?: string | null;
        /**
         * Per-scrape timeout when scraping this job. Defaults to `global.scrape_timeout`.
         */
        scrape_timeout?: string | null;
        /**
         * Controls whether to scrape a target's native histograms.
         */
        scrape_native_histograms?: boolean | null;
        /**
         * Fallback protocol to use if a scrape returns blank, unparsable, or otherwise invalid Content-Type.
         */
        fallback_scrape_protocol?:
          | (
              | 'OpenMetricsText0.0.1'
              | 'OpenMetricsText1.0.0'
              | 'PrometheusProto'
              | 'PrometheusText0.0.4'
              | 'PrometheusText1.0.0'
            )
          | null;
        /**
         * The HTTP resource path on which to fetch metrics from targets.
         */
        metrics_path?: string | null;
        /**
         * Controls how Prometheus handles conflicts between labels that are already present in scraped data and labels that Prometheus would attach server-side ("job" and "instance" labels, manually configured target labels, and labels generated by service discovery implementations).
         */
        honor_labels?: boolean | null;
        /**
         * Controls whether Prometheus respects the timestamps present in scraped data.
         */
        honor_timestamps?: boolean | null;
        /**
         * Configures the protocol scheme used for requests.
         */
        scheme?: 'http' | 'https' | null;
        /**
         * Optional HTTP URL parameters.
         */
        params?: {
          [k: string]: string[] | undefined;
        } | null;
        basic_auth?: BasicAuth;
        authorization?: Authorization;
        oauth2?: Oauth2;
        bearer_token?: BearerToken;
        bearer_token_file?: BearerTokenFile;
        /**
         * Configure whether scrape requests follow HTTP 3xx redirects.
         */
        follow_redirects?: boolean | null;
        tls_config?: TlsConfig;
        /**
         * Optional proxy URL.
         */
        proxy_url?: string | null;
        azure_sd_configs?: AzureSdConfigs;
        consul_sd_configs?: ConsulSdConfigs;
        digitalocean_sd_configs?: DigitaloceanSdConfigs;
        docker_sd_configs?: DockerSdConfigs;
        dockerswarm_sd_configs?: DockerswarmSdConfigs;
        dns_sd_configs?: DnsSdConfigs;
        ec2_sd_configs?: Ec2SdConfigs;
        eureka_sd_configs?: EurekaSdConfigs;
        file_sd_configs?: FileSdConfigs;
        gce_sd_configs?: GceSdConfigs;
        hetzner_sd_configs?: HetznerSdConfigs;
        http_sd_configs?: HttpSdConfigs;
        kubernetes_sd_configs?: KubernetesSdConfigs;
        kuma_sd_configs?: KumaSdConfigs;
        lightsail_sd_configs?: LightsailSdConfigs;
        linode_sd_configs?: LinodeSdConfigs;
        marathon_sd_configs?: MarathonSdConfigs;
        nerve_sd_configs?: NerveSdConfigs;
        openstack_sd_configs?: OpenstackSdConfigs;
        puppetdb_sd_configs?: PuppetdbSdConfigs;
        scaleway_sd_configs?: ScalewaySdConfigs;
        serverset_sd_configs?: ServersetSdConfigs;
        triton_sd_configs?: TritonSdConfigs;
        uyuni_sd_configs?: UyuniSdConfigs;
        static_configs?: StaticConfigs;
        relabel_configs?: RelabelConfigs;
        metric_relabel_configs?: RelabelConfigs;
        /**
         * An uncompressed response body larger than this many bytes will cause the scrape to fail. 0 means no limit. Example: 100MB.
         */
        body_size_limit?: string | null;
        /**
         * Per-scrape limit on number of scraped samples that will be accepted. If more than this number of samples are present after metric relabelling the entire scrape will be treated as failed. 0 means no limit.
         */
        sample_limit?: number | null;
        /**
         * Per-scrape limit on number of labels that will be accepted for a sample. If more than this number of labels are present post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
         */
        label_limit?: number | null;
        /**
         * Per-scrape limit on length of labels name that will be accepted for a sample. If a label name is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
         */
        label_name_length_limit?: number | null;
        /**
         * Per-scrape limit on length of labels value that will be accepted for a sample. If a label value is longer than this number post metric-relabeling, the entire scrape will be treated as failed. 0 means no limit.
         */
        label_value_length_limit?: number | null;
        /**
         * Per-scrape config limit on number of unique targets that will be accepted. If more than this number of targets are present after target relabeling, Prometheus will mark the targets as failed without scraping them. 0 means no limit.
         */
        target_limit?: number | null;
      })[]
    | null;
  /**
   * Alerting specifies settings related to the Alertmanager.
   */
  alerting?: {
    alert_relabel_configs?: RelabelConfigs;
    alertmanagers?:
      | (Auth & {
          /**
           * Per-target Alertmanager timeout when pushing alerts.
           */
          timeout?: string | null;
          /**
           * The api version of Alertmanager.
           */
          api_version?: string | null;
          /**
           * Prefix for the HTTP path alerts are pushed to.
           */
          path_prefix?: string | null;
          /**
           * Configures the protocol scheme used for requests.
           */
          scheme?: 'http' | 'https' | null;
          basic_auth?: BasicAuth;
          authorization?: Authorization;
          oauth2?: Oauth2;
          bearer_token?: BearerToken;
          bearer_token_file?: BearerTokenFile;
          tls_config?: TlsConfig;
          /**
           * Optional proxy URL.
           */
          proxy_url?: string | null;
          /**
           * Configure whether HTTP requests follow HTTP 3xx redirects.
           */
          follow_redirects?: boolean | null;
          azure_sd_configs?: AzureSdConfigs;
          consul_sd_configs?: ConsulSdConfigs;
          digitalocean_sd_configs?: DigitaloceanSdConfigs;
          docker_sd_configs?: DockerSdConfigs;
          dockerswarm_sd_configs?: DockerswarmSdConfigs;
          dns_sd_configs?: DnsSdConfigs;
          ec2_sd_configs?: Ec2SdConfigs;
          eureka_sd_configs?: EurekaSdConfigs;
          file_sd_configs?: FileSdConfigs;
          gce_sd_configs?: GceSdConfigs;
          hetzner_sd_configs?: HetznerSdConfigs;
          http_sd_configs?: HttpSdConfigs;
          kubernetes_sd_configs?: KubernetesSdConfigs;
          kuma_sd_configs?: KumaSdConfigs;
          lightsail_sd_configs?: LightsailSdConfigs;
          linode_sd_configs?: LinodeSdConfigs;
          marathon_sd_configs?: MarathonSdConfigs;
          nerve_sd_configs?: NerveSdConfigs;
          openstack_sd_configs?: OpenstackSdConfigs;
          puppetdb_sd_configs?: PuppetdbSdConfigs;
          scaleway_sd_configs?: ScalewaySdConfigs;
          serverset_sd_configs?: ServersetSdConfigs;
          triton_sd_configs?: TritonSdConfigs;
          uyuni_sd_configs?: UyuniSdConfigs;
          static_configs?: StaticConfigs;
          relabel_configs?: RelabelConfigs;
          [k: string]: unknown | undefined;
        })[]
      | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Storage related settings that are runtime reloadable.
   */
  storage?: {
    tsdb?: {
      /**
       * Configures how old an out-of-order/out-of-bounds sample can be w.r.t. the TSDB max time.
       */
      out_of_order_time_window?: string | null;
    } | null;
    exemplars?: {
      /**
       * Configures the maximum size of the circular buffer used to store exemplars for all series. Resizable during runtime.
       */
      max_exemplars?: number | null;
    } | null;
  } | null;
} | null;
/**
 * The labels to add to any time series or alerts when communicating with external systems (federation, remote storage, Alertmanager).
 */
export type Labels = {
  [k: string]: LabelValue | undefined;
} | null;
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[a-zA-Z_][a-zA-Z0-9_]*$".
 */
export type LabelValue = string;
export type FilepathGlob = string;
export type Auth = {
  [k: string]: unknown | undefined;
};
/**
 * List of remote write relabel configurations.
 */
export type RelabelConfigs =
  | {
      /**
       * The source labels select values from existing labels. Their content is concatenated using the configured separator and matched against the configured regular expression for the replace, keep, and drop actions.
       */
      source_labels?: LabelName[];
      /**
       * Separator placed between concatenated source label values.
       */
      separator?: string;
      /**
       * Label to which the resulting value is written in a replace action. It is mandatory for replace actions. Regex capture groups are available.
       */
      target_label?: string;
      /**
       * Regular expression against which the extracted value is matched.
       */
      regex?: string;
      /**
       * Modulus to take of the hash of the source label values.
       */
      modulus?: number;
      /**
       * Replacement value against which a regex replace is performed if the regular expression matches. Regex capture groups are available.
       */
      replacement?: string;
      /**
       * Action to perform based on regex matching.
       */
      action?:
        | 'replace'
        | 'lowercase'
        | 'uppercase'
        | 'keep'
        | 'drop'
        | 'keepequal'
        | 'dropequal'
        | 'hashmod'
        | 'labelmap'
        | 'labeldrop'
        | 'labelkeep';
      [k: string]: unknown | undefined;
    }[]
  | null;
export type LabelName = string;
/**
 * Sets the `Authorization` header on every remote write request with the configured username and password. password and password_file are mutually exclusive.
 */
export type BasicAuth = BasicAuth1 & BasicAuth2;
export type BasicAuth1 =
  | {
      password: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      password_file: unknown;
      [k: string]: unknown | undefined;
    };
export type BasicAuth2 =
  | ((
      | {
          password: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          password_file: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      username: string;
      password?: string | null;
      username_file?: Filepath;
      password_file?: Filepath;
    })
  | (null &
      (
        | {
            password: unknown;
            [k: string]: unknown | undefined;
          }
        | {
            password_file: unknown;
            [k: string]: unknown | undefined;
          }
      ));
export type Filepath = string | null;
/**
 * Sets the `Authorization` header on every scrape request with the configured credentials.
 */
export type Authorization = Authorization1 & Authorization2;
export type Authorization1 =
  | {
      credentials: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      credentials_file: unknown;
      [k: string]: unknown | undefined;
    };
export type Authorization2 =
  | ((
      | {
          credentials: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          credentials_file: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      /**
       * Sets the authentication type of the request.
       */
      type?: string | null;
      /**
       * Sets the credentials of the request. It is mutually exclusive with `credentials_file`.
       */
      credentials?: string | null;
      /**
       * Sets the credentials of the request with the credentials read from the configured file. It is mutually exclusive with `credentials`.
       */
      credentials_file?: string | null;
    })
  | (null &
      (
        | {
            credentials: unknown;
            [k: string]: unknown | undefined;
          }
        | {
            credentials_file: unknown;
            [k: string]: unknown | undefined;
          }
      ));
/**
 * Optionally configures AWS's Signature Verification 4 signing process to sign requests.
 */
export type Sigv4 = {
  /**
   * The AWS region. If blank, the region from the default credentials chain is used.
   */
  region?: string | null;
  /**
   * The AWS API keys. If blank, the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are used.
   */
  access_key?: string | null;
  /**
   * The AWS API keys. If blank, the environment variables `AWS_ACCESS_KEY_ID` and `AWS_SECRET_ACCESS_KEY` are used.
   */
  secret_key?: string | null;
  /**
   * Named AWS profile used to authenticate.
   */
  profile?: string | null;
  /**
   * AWS Role ARN, an alternative to using AWS API keys.
   */
  role_arn?: string | null;
} | null;
/**
 * Optionally configure AzureAD.
 */
export type Azuread = {
  cloud?: ['AzurePublic', 'AzureChina', 'AzureGovernment'];
  managed_identity?: {
    client_id?: string;
    [k: string]: unknown | undefined;
  };
  oauth2?: {
    client_id?: string;
    client_secret?: string | null;
    tenant_id?: string;
    [k: string]: unknown | undefined;
  };
  sdk?: {
    tenant_id?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} | null;
/**
 * Optional OAuth 2.0 configuration. Cannot be used at the same time as basic_auth or authorization.
 */
export type Oauth2 = Oauth21 & Oauth22;
export type Oauth21 =
  | {
      client_secret: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      client_secret_file: unknown;
      [k: string]: unknown | undefined;
    };
export type Oauth22 =
  | ((
      | {
          client_secret: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          client_secret_file: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      client_id: string;
      client_secret?: string | null;
      /**
       * Read the client secret from a file. It is mutually exclusive with `client_secret`.
       */
      client_secret_file?: string | null;
      /**
       * Scopes for the token request.
       */
      scopes?: (string | null)[] | null;
      /**
       * The URL to fetch the token from.
       */
      token_url: string;
      /**
       * Optional parameters to append to the token URL.
       */
      endpoint_params?: {
        [k: string]: string | undefined;
      } | null;
      tls_config?: TlsConfig;
    })
  | (null &
      (
        | {
            client_secret: unknown;
            [k: string]: unknown | undefined;
          }
        | {
            client_secret_file: unknown;
            [k: string]: unknown | undefined;
          }
      ));
/**
 * Configures the token request's TLS settings.
 */
export type TlsConfig = {
  /**
   * CA certificate to validate API server certificate with.
   */
  ca_file?: string | null;
  /**
   * Certificate file for client cert authentication to the server.
   */
  cert_file?: string | null;
  /**
   * Key file for client cert authentication to the server.
   */
  key_file?: string | null;
  /**
   * ServerName extension to indicate the name of the server.
   */
  server_name?: string | null;
  /**
   * Disable validation of the server certificate.
   */
  insecure_skip_verify?: boolean | null;
} | null;
/**
 * Sets the `Authorization` header on every scrape request with the configured bearer token. It is mutually exclusive with `bearer_token_file`.
 */
export type BearerToken = string | null;
/**
 * Sets the `Authorization` header on every scrape request with the bearer token read from the configured file. It is mutually exclusive with `bearer_token`.
 */
export type BearerTokenFile = string | null;
/**
 * List of Azure service discovery configurations.
 */
export type AzureSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Consul service discovery configurations.
 */
export type ConsulSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of DigitalOcean service discovery configurations.
 */
export type DigitaloceanSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Docker service discovery configurations.
 */
export type DockerSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Docker Swarm service discovery configurations.
 */
export type DockerswarmSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of DNS service discovery configurations.
 */
export type DnsSdConfigs =
  | {
      /**
       * A list of DNS domain names to be queried.
       *
       * @minItems 1
       */
      names: [string, ...string[]];
      /**
       * The type of DNS query to perform. One of SRV, A, or AAAA.
       */
      type?: ('SRV' | 'A' | 'AAAA') | null;
      /**
       * The port number used if the query type is not SRV.
       */
      port?: number | null;
      /**
       * The time after which the provided names are refreshed.
       */
      refresh_interval?: string | null;
    }[]
  | null;
/**
 * List of EC2 service discovery configurations.
 */
export type Ec2SdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Eureka service discovery configurations.
 */
export type EurekaSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of file service discovery configurations.
 */
export type FileSdConfigs =
  | {
      /**
       * Patterns for files from which target groups are extracted. Where the pattern may be a path ending in .json, .yml or .yaml. The last path segment may contain a single * that matches any character sequence, e.g. my/path/tg_*.json.
       *
       * @minItems 1
       */
      files?: [string, ...string[]];
      /**
       * Refresh interval to re-read the files.
       */
      refresh_interval?: string | null;
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of GCE service discovery configurations.
 */
export type GceSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Hetzner service discovery configurations.
 */
export type HetznerSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of HTTP service discovery configurations.
 */
export type HttpSdConfigs =
  | (Auth & {
      /**
       * URL from which the targets are fetched.
       */
      url: string;
      /**
       * Refresh interval to re-query the endpoint.
       */
      refresh_interval?: string | null;
      basic_auth?: BasicAuth;
      authorization?: Authorization;
      oauth2?: Oauth2;
      bearer_token?: BearerToken;
      bearer_token_file?: BearerTokenFile;
      /**
       * Optional proxy URL.
       */
      proxy_url?: string | null;
      /**
       * Configure whether HTTP requests follow HTTP 3xx redirects.
       */
      follow_redirects?: boolean | null;
      tls_config?: TlsConfig;
    })[]
  | null;
/**
 * List of Kubernetes service discovery configurations.
 */
export type KubernetesSdConfigs =
  | (Auth & {
      /**
       * The API server addresses. If left empty, Prometheus is assumed to run inside of the cluster and will discover API servers automatically and use the pod's CA certificate and bearer token file at /var/run/secrets/kubernetes.io/serviceaccount/.
       */
      api_server?: string | null;
      /**
       * The Kubernetes role of entities that should be discovered. One of endpoints, service, pod, node, or ingress.
       */
      role?: 'endpointslice' | 'endpoints' | 'service' | 'pod' | 'node' | 'ingress';
      kubeconfig_file?: Filepath;
      basic_auth?: BasicAuth;
      authorization?: Authorization;
      oauth2?: Oauth2;
      bearer_token?: BearerToken;
      bearer_token_file?: BearerTokenFile;
      /**
       * Optional proxy URL.
       */
      proxy_url?: string | null;
      /**
       * Configure whether scrape requests follow HTTP 3xx redirects.
       */
      follow_redirects?: boolean | null;
      tls_config?: TlsConfig;
      /**
       * Optional namespace discovery. If omitted, all namespaces are used.
       */
      namespaces?: {
        own_namespace?: boolean;
        names?: string[];
      } | null;
      /**
       * Optional label and field selectors to limit the discovery process to a subset of available resources.
       */
      selectors?:
        | {
            role: string;
            label?: string | null;
            field?: string | null;
          }[]
        | null;
    })[]
  | null;
/**
 * List of Kuma service discovery configurations.
 */
export type KumaSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Lightsail service discovery configurations.
 */
export type LightsailSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Linode service discovery configurations.
 */
export type LinodeSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Marathon service discovery configurations.
 */
export type MarathonSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of AirBnB's Nerve service discovery configurations.
 */
export type NerveSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of OpenStack service discovery configurations.
 */
export type OpenstackSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of PuppetDB service discovery configurations.
 */
export type PuppetdbSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Scaleway service discovery configurations.
 */
export type ScalewaySdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Zookeeper Serverset service discovery configurations.
 */
export type ServersetSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Triton service discovery configurations.
 */
export type TritonSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of Uyuni service discovery configurations.
 */
export type UyuniSdConfigs =
  | {
      [k: string]: unknown | undefined;
    }[]
  | null;
/**
 * List of labeled statically configured targets for this job.
 */
export type StaticConfigs =
  | {
      /**
       * The targets specified by the static config.
       */
      targets?: string[] | null;
      labels?: Labels;
      [k: string]: unknown | undefined;
    }[]
  | null;

export interface GoogleIam {
  credentials_file?: string;
  [k: string]: unknown | undefined;
}
