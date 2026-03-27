/* eslint-disable */

/**
 * A complete Vector configuration.
 */
export type HttpsJsonSchemastoreOrgVectorJson = {
  /**
   * API options.
   */
  api?: {
    /**
     * The socket address to listen on for the API endpoint.
     */
    address?: null | string;
    /**
     * Whether or not the API endpoint is available.
     */
    enabled?: boolean;
    /**
     * Whether or not the GraphQL endpoint is enabled
     */
    graphql?: boolean;
    /**
     * Whether or not to expose the GraphQL playground on the API endpoint.
     */
    playground?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * All configured enrichment tables.
   */
  enrichment_tables?: {
    /**
     * Fully resolved enrichment table component.
     */
    [k: string]:
      | (
          | (VectorEnrichmentTablesFileFileConfig & {
              /**
               * Exposes data from a static file as an enrichment table.
               */
              type: 'file';
              [k: string]: unknown | undefined;
            })
          | ExposesDataFromAMaxMindMaxmindGeoIP2Geoip2DatabaseAsAnEnrichmentTable
          | ExposesDataFromAMaxMindMaxmindDatabaseAsAnEnrichmentTable
        )
      | undefined;
  };
  /**
   * Healthcheck options.
   */
  healthchecks?: {
    enabled?: WhetherOrNotHealthchecksAreEnabledForAllSinks;
    require_healthy?: WhetherOrNotToRequireASinkToReportAsBeingHealthyDuringStartup;
    [k: string]: unknown | undefined;
  };
  provider?: OptionalConfigurationProviderToUse;
  /**
   * Schema options.
   */
  schema?: {
    /**
     * Whether or not schema is enabled.
     */
    enabled?: boolean;
    /**
     * Whether or not to enable log namespacing.
     */
    log_namespace?: boolean | null;
    /**
     * Whether or not schema validation is enabled.
     */
    validation?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * All configured secrets backends.
   */
  secret?: {
    /**
     * Configurable secret backends in Vector.
     */
    [k: string]:
      | (
          | (VectorSecretsFileFileBackend & {
              /**
               * File.
               */
              type: 'file';
              [k: string]: unknown | undefined;
            })
          | (VectorSecretsDirectoryDirectoryBackend & {
              /**
               * Directory.
               */
              type: 'directory';
              [k: string]: unknown | undefined;
            })
          | (VectorSecretsExecExecBackend & {
              /**
               * Exec.
               */
              type: 'exec';
              [k: string]: unknown | undefined;
            })
          | (({
              /**
               * Configuration of the authentication strategy for interacting with AWS services.
               */
              auth?:
                | {
                    /**
                     * The AWS access key ID.
                     */
                    access_key_id: string;
                    assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                    external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                    region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                    /**
                     * The AWS secret access key.
                     */
                    secret_access_key: string;
                    [k: string]: unknown | undefined;
                  }
                | AuthenticateUsingCredentialsStoredInAFile
                | {
                    assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                    external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                    /**
                     * Configuration for authenticating with AWS through IMDS.
                     */
                    imds?: {
                      /**
                       * Connect timeout for IMDS.
                       */
                      connect_timeout_seconds?: number;
                      /**
                       * Number of IMDS retries for fetching tokens and metadata.
                       */
                      max_attempts?: number;
                      /**
                       * Read timeout for IMDS.
                       */
                      read_timeout_seconds?: number;
                      [k: string]: unknown | undefined;
                    };
                    load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                    region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                    [k: string]: unknown | undefined;
                  }
                | {
                    /**
                     * Configuration for authenticating with AWS through IMDS.
                     */
                    imds?: {
                      /**
                       * Connect timeout for IMDS.
                       */
                      connect_timeout_seconds?: number;
                      /**
                       * Number of IMDS retries for fetching tokens and metadata.
                       */
                      max_attempts?: number;
                      /**
                       * Read timeout for IMDS.
                       */
                      read_timeout_seconds?: number;
                      [k: string]: unknown | undefined;
                    };
                    load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                    region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                    [k: string]: unknown | undefined;
                  };
              /**
               * ID of the secret to resolve.
               */
              secret_id: string;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
              [k: string]: unknown | undefined;
            } & VectorAwsRegionRegionOrEndpoint) & {
              /**
               * AWS Secrets Manager.
               */
              type: 'aws_secrets_manager';
              [k: string]: unknown | undefined;
            })
          | (VectorSecretsTestTestBackend & {
              /**
               * Test.
               */
              type: 'test';
              [k: string]: unknown | undefined;
            })
        )
      | undefined;
  };
  /**
   * All configured sinks.
   */
  sinks?: {
    [k: string]: VectorConfigSinkSinkOuterAllocStringString | undefined;
  };
  /**
   * All configured sources.
   */
  sources?: {
    [k: string]: VectorConfigSourceSourceOuter | undefined;
  };
  /**
   * All configured unit tests.
   */
  tests?: {
    input?: AUnitTestInput;
    inputs?: AUnitTestInput2;
    /**
     * The name of the unit test.
     */
    name: string;
    /**
     * A set of component outputs that should not have emitted any events.
     */
    no_outputs_from?: string[];
    outputs?: AUnitTestOutput;
    [k: string]: unknown | undefined;
  }[];
  /**
   * All configured transforms.
   */
  transforms?: {
    [k: string]: VectorConfigTransformTransformOuterAllocStringString | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForAllSinksByDefault;
  data_dir?: TheDirectoryUsedForPersistingVectorStateData;
  expire_metrics?: TheAmountOfTimeInSecondsThatInternalMetricsWillPersistAfterHavingNotBeenUpdatedBeforeTheyExpireAndAreRemoved;
  expire_metrics_secs?: TheAmountOfTimeInSecondsThatInternalMetricsWillPersistAfterHavingNotBeenUpdatedBeforeTheyExpireAndAreRemoved1;
  log_schema?: DefaultLogSchemaForAllEvents;
  proxy?: ProxyConfiguration4;
  telemetry?: TelemetryOptions;
  timezone?: TheNameOfTheTimeZoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone;
  [k: string]: unknown | undefined;
};
/**
 * When set to `true`, the first row of the CSV file will be read as the header row, and
 * the values will be used for the names of each column. This is the default behavior.
 *
 * When set to `false`, columns are referred to by their numerical index.
 */
export type WhetherOrNotTheFileContainsColumnHeaders = boolean;
/**
 * [csv]: https://wikipedia.org/wiki/Comma-separated_values
 */
export type DecodesTheFileAsACSVCsvCommaSeparatedValuesFile1 = 'csv';
/**
 * Currently, only [CSV][csv] files are supported.
 *
 * [csv]: https://en.wikipedia.org/wiki/Comma-separated_values
 */
export type ThePathOfTheEnrichmentTableFile = string;
/**
 * [maxmind]: https://www.maxmind.com/
 * [geoip2]: https://www.maxmind.com/en/geoip2-databases
 */
export type ExposesDataFromAMaxMindMaxmindGeoIP2Geoip2DatabaseAsAnEnrichmentTable =
  VectorEnrichmentTablesGeoipGeoipConfig & {
    type: ExposesDataFromAMaxMindMaxmindGeoIP2Geoip2DatabaseAsAnEnrichmentTable1;
    [k: string]: unknown | undefined;
  };
/**
 * MaxMind includes localized versions of some of the fields within their database, such as
 * country name. This setting can control which of those localized versions are returned by the
 * transform.
 *
 * More information on which portions of the geolocation data are localized, and what languages
 * are available, can be found [here][locale_docs].
 *
 * [locale_docs]: https://support.maxmind.com/hc/en-us/articles/4414877149467-IP-Geolocation-Data#h_01FRRGRYTGZB29ERDBZCX3MR8Q
 */
export type TheLocaleToUseWhenQueryingTheDatabase = string;
/**
 * Other databases, such as the country database, are not supported.
 * `mmdb` enrichment table can be used for other databases.
 *
 * [geoip2]: https://dev.maxmind.com/geoip/geoip2/downloadable
 * [geolite2]: https://dev.maxmind.com/geoip/geoip2/geolite2/#Download_Access
 */
export type PathToTheMaxMindGeoIP2Geoip2OrGeoLite2BinaryCityDatabaseFileGeolite2GeoLite2CityMmdb = string;
/**
 * [maxmind]: https://www.maxmind.com/
 * [geoip2]: https://www.maxmind.com/en/geoip2-databases
 */
export type ExposesDataFromAMaxMindMaxmindGeoIP2Geoip2DatabaseAsAnEnrichmentTable1 = 'geoip';
/**
 * [maxmind]: https://www.maxmind.com/
 */
export type ExposesDataFromAMaxMindMaxmindDatabaseAsAnEnrichmentTable = VectorEnrichmentTablesMmdbMmdbConfig & {
  type: ExposesDataFromAMaxMindMaxmindDatabaseAsAnEnrichmentTable1;
  [k: string]: unknown | undefined;
};
/**
 * [maxmind]: https://maxmind.com
 */
export type PathToTheMaxMindMaxmindDatabase = string;
/**
 * [maxmind]: https://www.maxmind.com/
 */
export type ExposesDataFromAMaxMindMaxmindDatabaseAsAnEnrichmentTable1 = 'mmdb';
/**
 * Can be overridden on a per-sink basis.
 */
export type WhetherOrNotHealthchecksAreEnabledForAllSinks = boolean;
/**
 * When enabled and a sink reports not being healthy, Vector will exit during start-up.
 *
 * Can be alternatively set, and overridden by, the `--require-healthy` command-line flag.
 */
export type WhetherOrNotToRequireASinkToReportAsBeingHealthyDuringStartup = boolean;
/**
 * Configuration providers allow sourcing configuration information from a source other than
 * the typical configuration files that must be passed to Vector.
 */
export type OptionalConfigurationProviderToUse =
  | null
  | (({
      /**
       * How often to poll the provider, in seconds.
       */
      poll_interval_secs?: number;
      proxy?: ProxyConfiguration;
      /**
       * Request settings.
       */
      request?: {
        /**
         * HTTP headers to add to the request.
         */
        headers?: {
          [k: string]: string | undefined;
        };
        [k: string]: unknown | undefined;
      };
      /**
       * URL for the HTTP provider.
       */
      url?: string | null;
      [k: string]: unknown | undefined;
    } & (null | VectorCoreTlsSettingsTlsConfig)) & {
      /**
       * HTTP.
       */
      type: 'http';
      [k: string]: unknown | undefined;
    });
/**
 * Must be a valid URI string.
 */
export type ProxyEndpointToUseWhenProxyingHTTPTraffic = string | null;
/**
 * Must be a valid URI string.
 */
export type ProxyEndpointToUseWhenProxyingHTTPSTraffic = string | null;
/**
 * Multiple patterns are allowed:
 *
 * | Pattern             | Example match                                                               |
 * | ------------------- | --------------------------------------------------------------------------- |
 * | Domain names        | `example.com` matches requests to `example.com`                     |
 * | Wildcard domains    | `.example.com` matches requests to `example.com` and its subdomains |
 * | IP addresses        | `127.0.0.1` matches requests to `127.0.0.1`                         |
 * | [CIDR][cidr] blocks | `192.168.0.0/16` matches requests to any IP addresses in this range     |
 * | Splat               | `*` matches all hosts                                                   |
 *
 * [cidr]: https://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing
 */
export type AListOfHostsToAvoidProxying = string[];
/**
 * Declare the supported ALPN protocols, which are used during negotiation with peer. They are prioritized in the order
 * that they are defined.
 */
export type SetsTheListOfSupportedALPNProtocols = string[] | null;
/**
 * The certificate must be in the DER or PEM (X.509) format. Additionally, the certificate can be provided as an inline string in PEM format.
 */
export type AbsolutePathToAnAdditionalCACertificateFile = null | StdlibPathBuf;
/**
 * A file path.
 */
export type StdlibPathBuf = string;
/**
 * The certificate must be in DER, PEM (X.509), or PKCS#12 format. Additionally, the certificate can be provided as
 * an inline string in PEM format.
 *
 * If this is set, and is not a PKCS#12 archive, `key_file` must also be set.
 */
export type AbsolutePathToACertificateFileUsedToIdentifyThisServer = null | StdlibPathBuf;
/**
 * The key must be in DER or PEM (PKCS#8) format. Additionally, the key can be provided as an inline string in PEM format.
 */
export type AbsolutePathToAPrivateKeyFileUsedToIdentifyThisServer = null | StdlibPathBuf;
/**
 * This has no effect unless `key_file` is set.
 */
export type PassphraseUsedToUnlockTheEncryptedKeyFile = string | null;
/**
 * Only relevant for outgoing connections.
 */
export type ServerNameToUseWhenUsingServerNameIndicationSNI = string | null;
/**
 * If enabled, certificates must not be expired and must be issued by a trusted
 * issuer. This verification operates in a hierarchical manner, checking that the leaf certificate (the
 * certificate presented by the client/server) is not only valid, but that the issuer of that certificate is also valid, and
 * so on until the verification process reaches a root certificate.
 *
 * Do NOT set this to `false` unless you understand the risks of not verifying the validity of certificates.
 */
export type EnablesCertificateVerificationForComponentsThatCreateAServerThisRequiresThatTheClientConnectionsHaveAValidClientCertificateForComponentsThatInitiateRequestsThisValidatesThatTheUpstreamHasAValidCertificate =
  boolean | null;
/**
 * If enabled, the hostname used to connect to the remote host must be present in the TLS certificate presented by
 * the remote host, either as the Common Name or as an entry in the Subject Alternative Name extension.
 *
 * Only relevant for outgoing connections.
 *
 * Do NOT set this to `false` unless you understand the risks of not verifying the remote hostname.
 */
export type EnablesHostnameVerification = boolean | null;
/**
 * The path to the script or binary must be the first argument.
 */
export type CommandArgumentsToExecute = string[];
/**
 * [iam_role]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
 */
export type TheARNOfAnIAMRoleIamRoleToAssume = string | null;
/**
 * [external_id]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_create_for-user_externalid.html
 */
export type TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume = string | null;
/**
 * If not set, this will default to the configured region
 * for the service itself.
 *
 * [aws_region]: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints
 */
export type TheAWSRegionAwsRegionToSendSTSRequestsTo = string | null;
/**
 * Used to select AWS credentials from a provided credentials file.
 */
export type TheCredentialsProfileToUse = string;
/**
 * [iam_role]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
 */
export type TheARNOfAnIAMRoleIamRoleToAssume1 = string;
/**
 * Relevant when the default credentials chain or `assume_role` is used.
 */
export type TimeoutForAssumingTheRoleInSeconds = number | null;
/**
 * Relevant when the default credentials chain or `assume_role` is used.
 */
export type TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds = number | null;
/**
 * TLS configuration.
 */
export type CoreOptionOptionVectorCoreTlsSettingsTlsConfig = null | VectorCoreTlsSettingsTlsConfig;
/**
 * [aws_region]: https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints
 */
export type TheAWSRegionAwsRegionOfTheTargetService = string | null;
/**
 * Fully resolved sink component.
 */
export type VectorConfigSinkSinkOuterAllocStringString =
  | ({
      buffer?: ConfiguresTheBufferingBehaviorForThisSink;
      graph?: ExtraGraphConfiguration;
      /**
       * Healthcheck configuration.
       */
      healthcheck?: {
        /**
         * Whether or not to check the health of the sink when Vector starts up.
         */
        enabled?: boolean;
        uri?: TheFullURIToMakeHTTPHealthcheckRequestsTo;
        [k: string]: unknown | undefined;
      };
      healthcheck_uri?: TheFullURIToMakeHTTPHealthcheckRequestsTo;
      inputs: AListOfUpstreamSourceSourcesOrTransformTransformsIDs;
      proxy?: ProxyConfiguration1;
      [k: string]: unknown | undefined;
    } & (
      | (ConfigurationForTheAmqpSink & {
          /**
           * Send events to AMQP 0.9.1 compatible brokers like RabbitMQ.
           */
          type: 'amqp';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksAppsignalConfigAppsignalConfig & {
          /**
           * Deliver log and metric event data to AppSignal.
           */
          type: 'appsignal';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink2;
          assume_role?: TheARNOfAnIAMRoleIamRoleToAssumeAtStartup;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          compression?: CompressionConfiguration;
          create_missing_group?: DynamicallyCreateALogGroupLogGroupIfItDoesNotAlreadyExist;
          create_missing_stream?: DynamicallyCreateALogStreamLogStreamIfItDoesNotAlreadyExist;
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          group_name: ATemplatedField;
          /**
           * Outbound HTTP request settings.
           */
          request?: {
            /**
             * Additional HTTP headers to add to every HTTP request.
             */
            headers?: {
              [k: string]: string | undefined;
            };
            [k: string]: unknown | undefined;
          } & MiddlewareSettingsForOutboundRequests1;
          /**
           * Retention policy configuration for AWS CloudWatch Log Group
           */
          retention?: {
            /**
             * If retention is enabled, the number of days to retain logs for.
             */
            days?: number;
            /**
             * Whether or not to set a retention policy when creating a new Log Group.
             */
            enabled?: boolean;
            [k: string]: unknown | undefined;
          };
          stream_name: ATemplatedField;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & TheAWSRegionAwsRegionOfTheTargetService1) & {
          /**
           * Publish log events to AWS CloudWatch Logs.
           */
          type: 'aws_cloudwatch_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink3;
          assume_role?: TheARNOfAnIAMRoleIamRoleToAssumeAtStartup;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          compression?: CompressionConfiguration;
          default_namespace: TheDefaultNamespaceNamespaceToUseForMetricsThatDoNotHaveOne;
          request?: MiddlewareSettingsForOutboundRequests2;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & TheAWSRegionAwsRegionOfTheTargetService2) & {
          /**
           * Publish metric events to AWS CloudWatch Metrics.
           */
          type: 'aws_cloudwatch_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        } & ({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink4;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          compression?: CompressionConfiguration;
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          partition_key_field?: TheLogFieldUsedAsTheKinesisRecordSPartitionKeyValue;
          request?: MiddlewareSettingsForOutboundRequests3;
          /**
           * Whether or not to retry successful requests containing partial failures.
           */
          request_retry_partial?: boolean;
          stream_name: TheStreamNameStreamNameOfTheTargetKinesisFirehoseDeliveryStream;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint1)) & {
          /**
           * Publish logs to AWS Kinesis Data Firehose topics.
           */
          type: 'aws_kinesis_firehose';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        } & ({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink4;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          compression?: CompressionConfiguration;
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          partition_key_field?: TheLogFieldUsedAsTheKinesisRecordSPartitionKeyValue;
          request?: MiddlewareSettingsForOutboundRequests3;
          /**
           * Whether or not to retry successful requests containing partial failures.
           */
          request_retry_partial?: boolean;
          stream_name: TheStreamNameStreamNameOfTheTargetKinesisFirehoseDeliveryStream;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint1)) & {
          /**
           * Publish logs to AWS Kinesis Streams topics.
           */
          type: 'aws_kinesis_streams';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink5;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings;
          bucket: TheS3BucketName;
          compression?: CompressionConfiguration;
          filename_append_uuid?: WhetherOrNotToAppendAUUIDV4TokenToTheEndOfTheObjectKey;
          filename_extension?: TheFilenameExtensionToUseInTheObjectKey;
          filename_time_format?: TheTimestampFormatForTheTimeComponentOfTheObjectKey;
          force_path_style?: SpecifiesWhichAddressingStyleToUse;
          key_prefix?: APrefixToApplyToAllObjectKeys;
          request?: MiddlewareSettingsForOutboundRequests4;
          timezone?: TimezoneToUseForAnyDateSpecifiersInTemplateStrings;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & {
          acl?: CannedACLToApplyToTheCreatedObjects;
          content_encoding?: OverridesWhatContentEncodingHasBeenAppliedToTheObject;
          content_type?: OverridesTheMIMETypeOfTheObject;
          grant_full_control?: GrantsREADREAD_ACPAndWRITE_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee;
          grant_read?: GrantsREADPermissionsOnTheCreatedObjectsToTheNamedGrantee;
          grant_read_acp?: GrantsREAD_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee;
          grant_write_acp?: GrantsWRITE_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee;
          server_side_encryption?: AWSS3ServerSideEncryptionAlgorithms;
          ssekms_key_id?: SpecifiesTheIDOfTheAWSKeyManagementServiceAWSKMSSymmetricalCustomerManagedCustomerMasterKeyCMKThatIsUsedForTheCreatedObjects;
          storage_class?: TheStorageClassForTheCreatedObjects;
          /**
           * The tag-set for the object.
           */
          tags?: {
            [k: string]: string | undefined;
          } | null;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint2 &
          VectorCodecsEncodingConfigEncodingConfigWithFraming) & {
          /**
           * Store observability events in the AWS S3 object storage system.
           */
          type: 'aws_s3';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * The ARN of the Amazon SNS topic to which messages are sent.
           */
          topic_arn: string;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint3 &
          VectorSinksAwsSSConfigBaseSSSinkConfig) & {
          /**
           * Publish observability events to AWS Simple Notification Service topics.
           */
          type: 'aws_sns';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * The URL of the Amazon SQS queue to which messages are sent.
           */
          queue_url: string;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint4 &
          VectorSinksAwsSSConfigBaseSSSinkConfig1) & {
          /**
           * Publish observability events to AWS Simple Queue Service topics.
           */
          type: 'aws_sqs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksAxiomAxiomConfig & {
          /**
           * Deliver log events to Axiom.
           */
          type: 'axiom';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink8;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings1;
          blob_append_uuid?: WhetherOrNotToAppendAUUIDV4TokenToTheEndOfTheBlobKey;
          blob_prefix?: ATemplatedField;
          blob_time_format?: TheTimestampFormatForTheTimeComponentOfTheBlobKey;
          compression?: CompressionConfiguration;
          connection_string?: TheAzureBlobStorageAccountConnectionString;
          /**
           * The Azure Blob Storage Account container name.
           */
          container_name: string;
          endpoint?: TheAzureBlobStorageEndpointURL;
          request?: MiddlewareSettingsForOutboundRequests6;
          storage_account?: TheAzureBlobStorageAccountName;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming1) & {
          /**
           * Store your observability data in Azure Blob Storage.
           */
          type: 'azure_blob';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksAzureMonitorLogsConfigAzureMonitorLogsConfig & {
          /**
           * Publish log events to the Azure Monitor Logs service.
           */
          type: 'azure_monitor_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksBlackholeConfigBlackholeConfig & {
          /**
           * Send observability events nowhere, which can be useful for debugging purposes.
           */
          type: 'blackhole';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksClickhouseConfigClickhouseConfig & {
          /**
           * Deliver log data to a ClickHouse database.
           */
          type: 'clickhouse';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink12;
          target?: TheStandardStreamStandardStreamsToWriteTo;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming2) & {
          /**
           * Display observability events in the console, which can be useful for debugging purposes.
           */
          type: 'console';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksDatabendConfigDatabendConfig & {
          /**
           * Deliver log data to a Databend database.
           */
          type: 'databend';
          [k: string]: unknown | undefined;
        })
      | (({
          request?: MiddlewareSettingsForOutboundRequests10;
          [k: string]: unknown | undefined;
        } & VectorSinksDatadogLocalDatadogCommonConfig) & {
          /**
           * Publish observability events to the Datadog Events API.
           */
          type: 'datadog_events';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          compression?: CompressionConfiguration8;
          encoding?: VectorCodecsEncodingTransformerTransformer3;
          /**
           * Outbound HTTP request settings.
           */
          request?: {
            /**
             * Additional HTTP headers to add to every HTTP request.
             */
            headers?: {
              [k: string]: string | undefined;
            };
            [k: string]: unknown | undefined;
          } & MiddlewareSettingsForOutboundRequests1;
          [k: string]: unknown | undefined;
        } & VectorSinksDatadogLocalDatadogCommonConfig1) & {
          /**
           * Publish log events to Datadog.
           */
          type: 'datadog_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          default_namespace?: SetsTheDefaultNamespaceForAnyMetricsSent;
          request?: MiddlewareSettingsForOutboundRequests11;
          [k: string]: unknown | undefined;
        } & VectorSinksDatadogLocalDatadogCommonConfig2) & {
          /**
           * Publish metric events to Datadog.
           */
          type: 'datadog_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          compression?: CompressionConfiguration10;
          request?: MiddlewareSettingsForOutboundRequests12;
          [k: string]: unknown | undefined;
        } & VectorSinksDatadogLocalDatadogCommonConfig3) & {
          /**
           * Publish trace events to Datadog.
           */
          type: 'datadog_traces';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksElasticsearchConfigElasticsearchConfig & {
          /**
           * Index observability events in Elasticsearch.
           */
          type: 'elasticsearch';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink16;
          /**
           * Compression configuration.
           */
          compression?: GzipGzipCompression | ZstandardZstdCompression | 'none';
          idle_timeout_secs?: TheAmountOfTimeThatAFileCanBeIdleAndStayOpen;
          internal_metrics?: VectorInternalEventsFileFileInternalMetricsConfig;
          path: ATemplatedField;
          timezone?: TimezoneToUseForAnyDateSpecifiersInTemplateStrings;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming3) & {
          /**
           * Output observability events into files.
           */
          type: 'file';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink17;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          compression?: CompressionConfiguration12;
          /**
           * The Unique identifier (UUID) corresponding to the Chronicle instance.
           */
          customer_id: string;
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          /**
           * The endpoint to send data to.
           */
          endpoint?: string | null;
          /**
           * A set of labels that are attached to each batch of events.
           */
          labels?: {
            [k: string]: string | undefined;
          } | null;
          log_type: ATemplatedField;
          namespace?: ATemplatedField16;
          /**
           * The GCP region to use.
           */
          region?: null | ('eu' | 'us' | 'asia');
          request?: MiddlewareSettingsForOutboundRequests13;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorGcpGcpAuthConfig) & {
          /**
           * Store unstructured log events in Google Chronicle.
           */
          type: 'gcp_chronicle_unstructured';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink18;
          acl?: ThePredefinedACLToApplyToCreatedObjects;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings2;
          /**
           * The GCS bucket name.
           */
          bucket: string;
          compression?: CompressionConfiguration;
          /**
           * API endpoint for Google Cloud Storage
           */
          endpoint?: string;
          filename_append_uuid?: WhetherOrNotToAppendAUUIDV4TokenToTheEndOfTheObjectKey;
          filename_extension?: TheFilenameExtensionToUseInTheObjectKey;
          filename_time_format?: TheTimestampFormatForTheTimeComponentOfTheObjectKey;
          key_prefix?: APrefixToApplyToAllObjectKeys1;
          metadata?: TheSetOfMetadataKeyValuePairsForTheCreatedObjects;
          request?: MiddlewareSettingsForOutboundRequests14;
          storage_class?: TheStorageClassForCreatedObjects;
          timezone?: TimezoneToUseForAnyDateSpecifiersInTemplateStrings;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming4 &
          VectorGcpGcpAuthConfig1) & {
          /**
           * Store observability events in GCP Cloud Storage.
           */
          type: 'gcp_cloud_storage';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink19;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          endpoint?: TheEndpointToWhichToPublishEvents;
          /**
           * The project name to which to publish events.
           */
          project: string;
          request?: MiddlewareSettingsForOutboundRequests15;
          /**
           * TLS configuration.
           */
          tls?: null | VectorCoreTlsSettingsTlsConfig;
          /**
           * The topic within the project to which to publish events.
           */
          topic: string;
          [k: string]: unknown | undefined;
        } & VectorGcpGcpAuthConfig2) & {
          /**
           * Publish observability events to GCP's Pub/Sub messaging system.
           */
          type: 'gcp_pubsub';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink20;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings5;
          encoding?: VectorCodecsEncodingTransformerTransformer5;
          log_id: ATemplatedField;
          request?: MiddlewareSettingsForOutboundRequests16;
          resource: AMonitoredResource;
          severity_key?: TheFieldOfTheLogEventFromWhichToTakeTheOutgoingLogSSeverityField;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & (
          | TheBillingAccountIDToWhichToPublishLogs
          | TheFolderIDToWhichToPublishLogs
          | TheOrganizationIDToWhichToPublishLogs
          | TheProjectIDToWhichToPublishLogs
        ) &
          VectorGcpGcpAuthConfig3) & {
          /**
           * Deliver logs to GCP's Cloud Operations suite.
           */
          type: 'gcp_stackdriver_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink21;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          default_namespace?: TheDefaultNamespaceToUseForMetricsThatDoNotHaveOne;
          project_id: TheProjectIDToWhichToPublishMetrics;
          request?: MiddlewareSettingsForOutboundRequests17;
          resource: AMonitoredResource1;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorGcpGcpAuthConfig4) & {
          /**
           * Deliver metrics to GCP's Cloud Monitoring system.
           */
          type: 'gcp_stackdriver_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksGreptimedbMetricsConfigGreptimeDBConfig & {
          /**
           * Ingest metrics data into GreptimeDB.
           */
          type: 'greptimedb';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksGreptimedbLogsConfigGreptimeDBLogsConfig & {
          /**
           * Ingest logs data into GreptimeDB.
           */
          type: 'greptimedb_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksGreptimedbMetricsConfigGreptimeDBMetricsConfig & {
          /**
           * Ingest metrics data into GreptimeDB.
           */
          type: 'greptimedb_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksHoneycombConfigHoneycombConfig & {
          /**
           * Deliver log events to Honeycomb.
           */
          type: 'honeycomb';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink25;
          auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings6;
          compression?: CompressionConfiguration;
          /**
           * @deprecated
           * A list of custom headers to add to each request.
           */
          headers?: {
            [k: string]: string | undefined;
          } | null;
          method?: HTTPMethod;
          payload_prefix?: AStringToPrefixThePayloadWith;
          payload_suffix?: AStringToSuffixThePayloadWith;
          /**
           * Outbound HTTP request settings.
           */
          request?: {
            /**
             * Additional HTTP headers to add to every HTTP request.
             */
            headers?: {
              [k: string]: string | undefined;
            };
            [k: string]: unknown | undefined;
          } & MiddlewareSettingsForOutboundRequests1;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          uri: TheURIComponentOfARequest;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming5) & {
          /**
           * Deliver observability event data to an HTTP server.
           */
          type: 'http';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksHumioLogsHumioLogsConfig & {
          /**
           * Deliver log event data to Humio.
           */
          type: 'humio_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink27;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings1;
          compression?: CompressionConfiguration;
          endpoint?: TheBaseURLOfTheHumioInstance;
          event_type?: TheTypeOfEventsSentToThisSinkHumioUsesThisAsTheNameOfTheParserToUseToIngestTheData;
          host_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToHumio;
          index?: OptionalNameOfTheRepositoryToIngestInto;
          indexed_fields?: EventFieldsToBeAddedToHumioSExtraFields;
          request?: MiddlewareSettingsForOutboundRequests22;
          source?: TheSourceOfEventsSentToThisSink;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          /**
           * Wrapper for sensitive strings containing credentials
           */
          token: string;
          [k: string]: unknown | undefined;
        } & VectorTransformsMetricToLogMetricToLogConfig1) & {
          /**
           * Deliver metric event data to Humio.
           */
          type: 'humio_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink28;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          encoding?: VectorCodecsEncodingTransformerTransformer8;
          endpoint: TheEndpointToSendDataTo;
          host_key?: UseThisOptionToCustomizeTheKeyContainingTheHostname;
          /**
           * The name of the InfluxDB measurement that is written to.
           */
          measurement?: string | null;
          message_key?: UseThisOptionToCustomizeTheKeyContainingTheMessage;
          namespace?: TheNamespaceOfTheMeasurementNameToUse;
          request?: MiddlewareSettingsForOutboundRequests23;
          source_type_key?: UseThisOptionToCustomizeTheKeyContainingTheSourceType;
          tags?: TheListOfNamesOfLogFieldsThatShouldBeAddedAsTagsToEachMeasurement;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & CoreOptionOptionVectorSinksInfluxdbInfluxDb1Settings &
          CoreOptionOptionVectorSinksInfluxdbInfluxDb2Settings) & {
          /**
           * Deliver log event data to InfluxDB.
           */
          type: 'influxdb_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink29;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          default_namespace?: SetsTheDefaultNamespaceForAnyMetricsSent;
          endpoint: TheEndpointToSendDataTo;
          /**
           * The list of quantiles to calculate when sending distribution metrics.
           */
          quantiles?: number[];
          request?: MiddlewareSettingsForOutboundRequests24;
          /**
           * A map of additional tags, in the key/value pair format, to add to each measurement.
           */
          tags?: {
            [k: string]: string | undefined;
          } | null;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & CoreOptionOptionVectorSinksInfluxdbInfluxDb1Settings &
          CoreOptionOptionVectorSinksInfluxdbInfluxDb2Settings) & {
          /**
           * Deliver metric event data to InfluxDB.
           */
          type: 'influxdb_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink30;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          bootstrap_servers: ACommaSeparatedListOfKafkaBootstrapServers;
          /**
           * Supported compression types for Kafka.
           */
          compression?: 'none' | 'gzip' | 'snappy' | 'lz4' | 'zstd';
          /**
           * Configures how events are encoded into raw bytes.
           */
          encoding: (
            | EncodesAnEventAsAnApacheAvroApacheAvroMessage
            | ({
                /**
                 * The CEF Serializer Options.
                 */
                cef: {
                  /**
                   * Unique identifier for each event type. Identifies the type of event reported.
                   * The value length must be less than or equal to 1023.
                   */
                  device_event_class_id: string;
                  /**
                   * Identifies the product of a vendor.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_product: string;
                  /**
                   * Identifies the vendor of the product.
                   * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                   * The value length must be less than or equal to 63.
                   */
                  device_vendor: string;
                  /**
                   * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                   * The value length must be less than or equal to 31.
                   */
                  device_version: string;
                  /**
                   * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                   * The event can have any number of key-value pairs in any order.
                   */
                  extensions?: {
                    [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                  };
                  /**
                   * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                   * with prefix default to `PathPrefix::Event`
                   */
                  name: string;
                  severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                  /**
                   * CEF Version. Can be either 0 or 1.
                   * Equals to "0" by default.
                   */
                  version: 'V0' | 'V1';
                  [k: string]: unknown | undefined;
                };
                [k: string]: unknown | undefined;
              } & {
                /**
                 * Encodes an event as a CEF (Common Event Format) formatted message.
                 */
                codec: 'cef';
                [k: string]: unknown | undefined;
              })
            | EncodesAnEventAsACSVMessage
            | EncodesAnEventAsAGELFGelfMessage
            | EncodesAnEventAsJSONJson
            | EncodesAnEventAsALogfmtLogfmtMessage
            | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
            | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
            | EncodesAnEventAsAProtobufProtobufMessage
            | NoEncoding
            | PlainTextEncoding
          ) & {
            /**
             * List of fields that are excluded from the encoded event.
             */
            except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * List of fields that are included in the encoded event.
             */
            only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
            /**
             * Format used for timestamp fields.
             */
            timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
            [k: string]: unknown | undefined;
          };
          headers_key?: TheLogFieldNameToUseForTheKafkaHeaders;
          healthcheck_topic?: TheTopicNameToUseForHealthcheckIfOmittedTopicIsUsedThisOptionHelpsPreventHealthcheckWarningsWhenTopicIsTemplated;
          key_field?: TheLogFieldNameOrTagKeyToUseForTheTopicKey;
          librdkafka_options?: AMapOfAdvancedOptionsToPassDirectlyToTheUnderlyingLibrdkafkaClient;
          /**
           * Local message timeout, in milliseconds.
           */
          message_timeout_ms?: number;
          /**
           * Default timeout, in milliseconds, for network requests.
           */
          socket_timeout_ms?: number;
          topic: ATemplatedField;
          [k: string]: unknown | undefined;
        } & VectorKafkaKafkaAuthConfig) & {
          /**
           * Publish observability event data to Apache Kafka topics.
           */
          type: 'kafka';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksMezmoLogdnaConfig & {
          /**
           * Deliver log event data to LogDNA.
           */
          type: 'logdna';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksLokiConfigLokiConfig & {
          /**
           * Deliver log event data to the Loki aggregation system.
           */
          type: 'loki';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksMezmoMezmoConfig & {
          /**
           * Deliver log event data to Mezmo.
           */
          type: 'mezmo';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksMqttConfigMqttSinkConfig & {
          /**
           * This component is missing a description.
           */
          type: 'mqtt';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksNatsConfigNatsSinkConfig & {
          /**
           * Publish observability data to subjects on the NATS messaging system.
           */
          type: 'nats';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksNewRelicConfigNewRelicConfig & {
          /**
           * Deliver events to New Relic.
           */
          type: 'new_relic';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksOpentelemetryOpenTelemetryConfig & {
          /**
           * Deliver OTLP data over HTTP.
           */
          type: 'opentelemetry';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksPapertrailPapertrailConfig & {
          /**
           * Deliver log events to Papertrail from SolarWinds.
           */
          type: 'papertrail';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksPrometheusExporterPrometheusExporterConfig & {
          /**
           * Expose metric events on a Prometheus compatible endpoint.
           */
          type: 'prometheus_exporter';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksPrometheusRemoteWriteConfigRemoteWriteConfig & {
          /**
           * Deliver metric data to a Prometheus remote write endpoint.
           */
          type: 'prometheus_remote_write';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksPulsarConfigPulsarSinkConfig & {
          /**
           * Publish observability events to Apache Pulsar topics.
           */
          type: 'pulsar';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksRedisConfigRedisSinkConfig & {
          /**
           * Publish observability data to Redis.
           */
          type: 'redis';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksSematextLogsSematextLogsConfig & {
          /**
           * Publish log events to Sematext.
           */
          type: 'sematext_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksSematextMetricsSematextMetricsConfig & {
          /**
           * Publish metric events to Sematext.
           */
          type: 'sematext_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink43;
          [k: string]: unknown | undefined;
        } & (
          | (({
              address: TheAddressToConnectTo;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              send_buffer_bytes?: TheSizeOfTheSocketSSendBuffer;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
              [k: string]: unknown | undefined;
            } & VectorCodecsEncodingConfigEncodingConfigWithFraming6) & {
              /**
               * Send over TCP.
               */
              mode: 'tcp';
              [k: string]: unknown | undefined;
            })
          | (({
              /**
               * Configures how events are encoded into raw bytes.
               */
              encoding: (
                | EncodesAnEventAsAnApacheAvroApacheAvroMessage
                | ({
                    /**
                     * The CEF Serializer Options.
                     */
                    cef: {
                      /**
                       * Unique identifier for each event type. Identifies the type of event reported.
                       * The value length must be less than or equal to 1023.
                       */
                      device_event_class_id: string;
                      /**
                       * Identifies the product of a vendor.
                       * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                       * The value length must be less than or equal to 63.
                       */
                      device_product: string;
                      /**
                       * Identifies the vendor of the product.
                       * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
                       * The value length must be less than or equal to 63.
                       */
                      device_vendor: string;
                      /**
                       * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
                       * The value length must be less than or equal to 31.
                       */
                      device_version: string;
                      /**
                       * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
                       * The event can have any number of key-value pairs in any order.
                       */
                      extensions?: {
                        [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
                      };
                      /**
                       * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
                       * with prefix default to `PathPrefix::Event`
                       */
                      name: string;
                      severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
                      /**
                       * CEF Version. Can be either 0 or 1.
                       * Equals to "0" by default.
                       */
                      version: 'V0' | 'V1';
                      [k: string]: unknown | undefined;
                    };
                    [k: string]: unknown | undefined;
                  } & {
                    /**
                     * Encodes an event as a CEF (Common Event Format) formatted message.
                     */
                    codec: 'cef';
                    [k: string]: unknown | undefined;
                  })
                | EncodesAnEventAsACSVMessage
                | EncodesAnEventAsAGELFGelfMessage
                | EncodesAnEventAsJSONJson
                | EncodesAnEventAsALogfmtLogfmtMessage
                | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
                | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
                | EncodesAnEventAsAProtobufProtobufMessage
                | NoEncoding
                | PlainTextEncoding
              ) & {
                /**
                 * List of fields that are excluded from the encoded event.
                 */
                except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
                /**
                 * List of fields that are included in the encoded event.
                 */
                only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
                /**
                 * Format used for timestamp fields.
                 */
                timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            } & {
              address: TheAddressToConnectTo;
              send_buffer_bytes?: TheSizeOfTheSocketSSendBuffer;
              [k: string]: unknown | undefined;
            }) & {
              /**
               * Send over UDP.
               */
              mode: 'udp';
              [k: string]: unknown | undefined;
            })
          | (({
              path: TheUnixSocketPath;
              [k: string]: unknown | undefined;
            } & VectorCodecsEncodingConfigEncodingConfigWithFraming7) & {
              /**
               * Send over a Unix domain socket (UDS), in stream mode.
               */
              mode: 'unix_stream';
              [k: string]: unknown | undefined;
            })
          | (({
              path: TheUnixSocketPath;
              [k: string]: unknown | undefined;
            } & VectorCodecsEncodingConfigEncodingConfigWithFraming8) & {
              /**
               * Send over a Unix domain socket (UDS), in datagram mode.
               * Unavailable on macOS, due to send(2)'s apparent non-blocking behavior,
               * resulting in ENOBUFS errors which we currently don't handle.
               */
              mode: 'unix_datagram';
              [k: string]: unknown | undefined;
            })
        )) & {
          /**
           * Deliver logs to a remote socket endpoint.
           */
          type: 'socket';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksSplunkHecLogsConfigHecLogsSinkConfig & {
          /**
           * Deliver log data to Splunk's HTTP Event Collector.
           */
          type: 'splunk_hec_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksSplunkHecMetricsConfigHecMetricsSinkConfig & {
          /**
           * Deliver metric data to Splunk's HTTP Event Collector.
           */
          type: 'splunk_hec_metrics';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink45;
          /**
           * Event batching behavior.
           */
          batch?: {
            max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
            /**
             * The maximum size of a batch before it is flushed.
             */
            max_events?: number | null;
            /**
             * The maximum age of a batch before it is flushed.
             */
            timeout_secs?: number | null;
            [k: string]: unknown | undefined;
          };
          default_namespace?: SetsTheDefaultNamespaceForAnyMetricsSent;
          [k: string]: unknown | undefined;
        } & (
          | ({
              address: TheAddressToConnectTo;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              send_buffer_size?: TheSizeOfTheSocketSSendBuffer;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Send over TCP.
               */
              mode: 'tcp';
              [k: string]: unknown | undefined;
            })
          | ({
              address: TheAddressToConnectTo;
              send_buffer_size?: TheSizeOfTheSocketSSendBuffer;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Send over UDP.
               */
              mode: 'udp';
              [k: string]: unknown | undefined;
            })
          | ({
              path: TheUnixSocketPath;
              send_buffer_size?: TheSizeOfTheSocketSSendBuffer;
              /**
               * The Unix socket mode to use.
               */
              unix_mode?: 'Datagram' | 'Stream';
              [k: string]: unknown | undefined;
            } & {
              /**
               * Send over a Unix domain socket (UDS).
               */
              mode: 'unix';
              [k: string]: unknown | undefined;
            })
        )) & {
          /**
           * Deliver metric data to a StatsD aggregator.
           */
          type: 'statsd';
          [k: string]: unknown | undefined;
        })
      | (VectorConfigUnitTestUnitTestComponentsUnitTestSinkConfig & {
          /**
           * Unit test.
           */
          type: 'unit_test';
          [k: string]: unknown | undefined;
        })
      | (VectorConfigUnitTestUnitTestComponentsUnitTestStreamSinkConfig & {
          /**
           * Unit test stream.
           */
          type: 'unit_test_stream';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksVectorConfigVectorConfig & {
          /**
           * Relay observability data to a Vector instance.
           */
          type: 'vector';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink47;
          batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings3;
          compression?: CompressionConfiguration;
          endpoint?: AnHDFSClusterConsistsOfASingleNameNodeAMasterServerThatManagesTheFileSystemNamespaceAndRegulatesAccessToFilesByClients;
          prefix?: APrefixToApplyToAllKeys;
          root?: TheRootPathForWebHDFS;
          [k: string]: unknown | undefined;
        } & VectorCodecsEncodingConfigEncodingConfigWithFraming9) & {
          /**
           * WebHDFS.
           */
          type: 'webhdfs';
          [k: string]: unknown | undefined;
        })
      | (VectorSinksWebsocketConfigWebSocketSinkConfig & {
          /**
           * Deliver observability event data to a websocket listener.
           */
          type: 'websocket';
          [k: string]: unknown | undefined;
        })
    ))
  | undefined;
/**
 * More information about the individual buffer types, and buffer behavior, can be found in the
 * [Buffering Model][buffering_model] section.
 *
 * [buffering_model]: /docs/about/under-the-hood/architecture/buffering-model/
 */
export type ConfiguresTheBufferingBehaviorForThisSink =
  | (EventsAreBufferedInMemory | EventsAreBufferedOnDisk)
  | (EventsAreBufferedInMemory2 | EventsAreBufferedOnDisk2)[];
/**
 * This is more performant, but less durable. Data will be lost if Vector is restarted
 * forcefully or crashes.
 */
export type EventsAreBufferedInMemory1 = 'memory';
/**
 * This applies backpressure up the topology, signalling that sources should slow down
 * the acceptance/consumption of events. This means that while no data is lost, data will pile
 * up at the edge.
 */
export type WaitForFreeSpaceInTheBuffer = 'block';
/**
 * The event will be intentionally dropped. This mode is typically used when performance is the
 * highest priority, and it is preferable to temporarily lose events rather than cause a
 * slowdown in the acceptance/consumption of events.
 */
export type DropsTheEventInsteadOfWaitingForFreeSpaceInBuffer = 'drop_newest';
/**
 * If the current buffer stage is full, attempt to send this event to the next buffer stage.
 * That stage may also be configured overflow, and so on, but ultimately the last stage in a
 * buffer topology must use one of the other handling behaviors. This means that next stage may
 * potentially be able to buffer the event, but it may also block or drop the event.
 *
 * This mode can only be used when two or more buffer stages are configured.
 */
export type OverflowsToTheNextStageInTheBufferTopology = 'overflow';
/**
 * Must be at least ~256 megabytes (268435488 bytes).
 */
export type TheMaximumSizeOfTheBufferOnDisk = number;
/**
 * This is less performant, but more durable. Data that has been synchronized to disk will not
 * be lost if Vector is restarted forcefully or crashes.
 *
 * Data is synchronized to disk every 500ms.
 */
export type EventsAreBufferedOnDisk1 = 'disk';
/**
 * This is more performant, but less durable. Data will be lost if Vector is restarted
 * forcefully or crashes.
 */
export type EventsAreBufferedInMemory3 = 'memory';
/**
 * This is less performant, but more durable. Data that has been synchronized to disk will not
 * be lost if Vector is restarted forcefully or crashes.
 *
 * Data is synchronized to disk every 500ms.
 */
export type EventsAreBufferedOnDisk3 = 'disk';
/**
 * This must be a valid URI, which requires at least the scheme and host. All other
 * components -- port, path, etc -- are allowed as well.
 */
export type TheFullURIToMakeHTTPHealthcheckRequestsTo = (null | TheURIComponentOfARequest) &
  (((null | TheURIComponentOfARequest) & string) | (null & (null | TheURIComponentOfARequest)));
export type TheURIComponentOfARequest = string;
/**
 * Wildcards (`*`) are supported.
 *
 * See [configuration][configuration] for more info.
 *
 * [sources]: https://vector.dev/docs/reference/configuration/sources/
 * [transforms]: https://vector.dev/docs/reference/configuration/transforms/
 * [configuration]: https://vector.dev/docs/reference/configuration/
 */
export type AListOfUpstreamSourceSourcesOrTransformTransformsIDs = string[];
/**
 * Supports AMQP version 0.9.1
 */
export type ConfigurationForTheAmqpSink = {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  exchange: ATemplatedField;
  properties?: ConfigureTheAMQPMessageProperties;
  routing_key?: ATemplatedField1;
  [k: string]: unknown | undefined;
} & VectorAmqpAmqpConfig;
/**
 * When enabled for a sink, any source connected to that sink, where the source supports
 * end-to-end acknowledgements as well, waits for events to be acknowledged by **all
 * connected** sinks before acknowledging them at the source.
 *
 * Enabling or disabling acknowledgements at the sink level takes precedence over any global
 * [`acknowledgements`][global_acks] configuration.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 */
export type WhetherOrNotEndToEndAcknowledgementsAreEnabled = boolean | null;
/**
 * [apache_avro]: https://avro.apache.org/
 */
export type EncodesAnEventAsAnApacheAvroApacheAvroMessage1 = 'avro';
/**
 * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
 * with prefix default to `PathPrefix::Event`
 */
export type VectorLookupLookupV2ConfigTargetPath = string | undefined;
/**
 * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
 * with prefix default to `PathPrefix::Event`
 */
export type ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent =
  string;
/**
 * This codec must be configured with fields to encode.
 */
export type EncodesAnEventAsACSVMessage = CodecsEncodingFormatCsvCsvSerializerConfig & {
  codec: EncodesAnEventAsACSVMessage1;
  [k: string]: unknown | undefined;
};
/**
 * This is enabled by default, but it may be disabled. When disabled, quotes in
 * field data are escaped instead of doubled.
 */
export type EnableDoubleQuoteEscapes = boolean;
/**
 * In some variants of CSV, quotes are escaped using a special escape character
 * like \ (instead of escaping quotes by doubling them).
 *
 * To use this, `double_quotes` needs to be disabled as well otherwise it is ignored.
 */
export type TheEscapeCharacterToUseWhenWritingCSV = number;
/**
 * If a field is not present in the event, the output will be an empty string.
 *
 * Values of type `Array`, `Object`, and `Regex` are not supported and the
 * output will be an empty string.
 */
export type ConfiguresTheFieldsThatWillBeEncodedAsWellAsTheOrderInWhichTheyAppearInTheOutput =
  | VectorLookupLookupV2ConfigTargetPath
  | undefined[];
/**
 * This codec must be configured with fields to encode.
 */
export type EncodesAnEventAsACSVMessage1 = 'csv';
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's encoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export type EncodesAnEventAsAGELFGelfMessage1 = 'gelf';
/**
 * [json]: https://www.json.org/
 */
export type EncodesAnEventAsJSONJson = CodecsEncodingFormatJsonJsonSerializerConfig & {
  codec: EncodesAnEventAsJSONJson1;
  [k: string]: unknown | undefined;
};
/**
 * When set to `single`, only the last non-bare value of tags are displayed with the
 * metric.  When set to `full`, all metric tags are exposed as separate assignments.
 */
export type ControlsHowMetricTagValuesAreEncoded = 'single' | 'full';
/**
 * [json]: https://www.json.org/
 */
export type EncodesAnEventAsJSONJson1 = 'json';
/**
 * [logfmt]: https://brandur.org/logfmt
 */
export type EncodesAnEventAsALogfmtLogfmtMessage1 = 'logfmt';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf1 = 'native';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type EncodesAnEventInTheNativeJSONFormatVectorNativeJson1 = 'native_json';
/**
 * [protobuf]: https://protobuf.dev/
 */
export type EncodesAnEventAsAProtobufProtobufMessage = {
  /**
   * Options for the Protobuf serializer.
   */
  protobuf: {
    desc_file: ThePathToTheProtobufDescriptorSetFile;
    /**
     * The name of the message type to use for serializing.
     */
    message_type: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: EncodesAnEventAsAProtobufProtobufMessage1;
  [k: string]: unknown | undefined;
};
/**
 * A file path.
 */
export type ThePathToTheProtobufDescriptorSetFile = string;
/**
 * [protobuf]: https://protobuf.dev/
 */
export type EncodesAnEventAsAProtobufProtobufMessage1 = 'protobuf';
/**
 * This encoding uses the `message` field of a log event.
 *
 * Be careful if you are modifying your log events (for example, by using a `remap`
 * transform) and removing the message field while doing additional parsing on it, as this
 * could lead to the encoding emitting empty strings for the given event.
 */
export type NoEncoding1 = 'raw_message';
/**
 * This encoding uses the `message` field of a log event. For metrics, it uses an
 * encoding that resembles the Prometheus export format.
 *
 * Be careful if you are modifying your log events (for example, by using a `remap`
 * transform) and removing the message field while doing additional parsing on it, as this
 * could lead to the encoding emitting empty strings for the given event.
 */
export type PlainTextEncoding = {
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  [k: string]: unknown | undefined;
} & {
  codec: PlainTextEncoding1;
  [k: string]: unknown | undefined;
};
/**
 * This encoding uses the `message` field of a log event. For metrics, it uses an
 * encoding that resembles the Prometheus export format.
 *
 * Be careful if you are modifying your log events (for example, by using a `remap`
 * transform) and removing the message field while doing additional parsing on it, as this
 * could lead to the encoding emitting empty strings for the given event.
 */
export type PlainTextEncoding1 = 'text';
/**
 * A wrapper around `OwnedValuePath` that allows it to be used in Vector config.
 * This requires a valid path to be used. If you want to allow optional paths,
 * use [optional_path::OptionalValuePath].
 */
export type VectorLookupLookupV2ConfigValuePath = string;
/**
 * The exchange to publish messages to.
 */
export type ATemplatedField = string;
/**
 * AMQP message properties.
 */
export type ConfigureTheAMQPMessageProperties = null | ConfigureTheAMQPMessageProperties1;
/**
 * Template used to generate a routing key which corresponds to a queue binding.
 */
export type ATemplatedField1 = null | ATemplatedField;
/**
 * The URI has the format of
 * `amqp://<user>:<password>@<host>:<port>/<vhost>?timeout=<seconds>`.
 *
 * The default vhost can be specified by using a value of `%2f`.
 *
 * To connect over TLS, a scheme of `amqps` can be specified instead. For example,
 * `amqps://...`. Additional TLS settings, such as client certificate verification, can be
 * configured under the `tls` section.
 */
export type URIForTheAMQPServer = string;
/**
 * This is based on the uncompressed size of the batched events, before they are
 * serialized/compressed.
 */
export type TheMaximumSizeOfABatchThatIsProcessedByASink = number | null;
/**
 * All compression algorithms use the default compression level unless otherwise specified.
 */
export type CompressionConfiguration =
  | ('none' | GzipGzipCompression | ZlibZlibCompression | ZstandardZstdCompression | SnappySnappyCompression)
  | {
      /**
       * Compression algorithm.
       */
      algorithm:
        | 'none'
        | GzipGzipCompression
        | ZlibZlibCompression
        | ZstandardZstdCompression
        | SnappySnappyCompression;
      level?: VectorSinksUtilBufferCompressionCompressionLevel;
      [k: string]: unknown | undefined;
    };
/**
 * [gzip]: https://www.gzip.org/
 */
export type GzipGzipCompression = 'gzip';
/**
 * [zlib]: https://zlib.net/
 */
export type ZlibZlibCompression = 'zlib';
/**
 * [zstd]: https://facebook.github.io/zstd/
 */
export type ZstandardZstdCompression = 'zstd';
/**
 * [snappy]: https://github.com/google/snappy/blob/main/docs/README.md
 */
export type SnappySnappyCompression = 'snappy';
/**
 * Compression level.
 */
export type VectorSinksUtilBufferCompressionCompressionLevel =
  | 'none'
  | 'fast'
  | 'best'
  | 'default'
  | 0
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21;
/**
 * Valid values are greater than `0` and less than `1`. Smaller values cause the algorithm to scale back rapidly
 * when latency increases.
 *
 * Note that the new limit is rounded down after applying this ratio.
 */
export type TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit = number;
/**
 * Valid values are greater than `0` and less than `1`.
 *
 * ARC uses an exponentially weighted moving average (EWMA) of past RTT measurements as a reference to compare with
 * the current RTT. Smaller values cause this reference to adjust more slowly, which may be useful if a service has
 * unusually high response variability.
 */
export type TheWeightingOfNewMeasurementsComparedToOlderMeasurements = number;
/**
 * It is recommended to set this value to your service's average limit if you're seeing that it takes a
 * long time to ramp up adaptive concurrency after a restart. You can find this value by looking at the
 * `adaptive_concurrency_limit` metric.
 */
export type TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency = number;
/**
 * The adaptive request concurrency limit will not go above this bound. This is put in place as a safeguard.
 */
export type TheMaximumConcurrencyLimit = number;
/**
 * Valid values are greater than or equal to `0`, and we expect reasonable values to range from `1.0` to `3.0`.
 *
 * When calculating the past RTT average, we also compute a secondary “deviation” value that indicates how variable
 * those values are. We use that deviation when comparing the past RTT average to the current measurements, so we
 * can ignore increases in RTT that are within an expected range. This factor is used to scale up the deviation to
 * an appropriate range.  Larger values cause the algorithm to ignore larger increases in the RTT.
 */
export type ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous = number;
/**
 * Only one request can be outstanding at any given time.
 */
export type AFixedConcurrencyOf1 = 'none';
/**
 * [arc]: https://vector.dev/docs/about/under-the-hood/networking/arc/
 */
export type ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature = 'adaptive';
/**
 * After the first retry has failed, the fibonacci sequence is used to select future backoffs.
 */
export type TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest = number;
/**
 * The random delay is anywhere from 0 up to the maximum current delay calculated by the backoff
 * strategy.
 *
 * Incorporating full jitter into your backoff strategy can greatly reduce the likelihood
 * of creating accidental denial of service (DoS) conditions against your own systems when
 * many clients are recovering from a failure state.
 */
export type FullJitter = 'Full';
/**
 * Datadog highly recommends that you do not lower this value below the service's internal timeout, as this could
 * create orphaned requests, pile on retries, and result in duplicate data downstream.
 */
export type TheTimeARequestCanTakeBeforeBeingAborted = number;
/**
 * Configures the TLS options for incoming/outgoing connections.
 */
export type CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig = null | VectorCoreTlsSettingsTlsEnableableConfig;
/**
 * Configures the TLS options for incoming/outgoing connections.
 */
export type VectorCoreTlsSettingsTlsEnableableConfig = {
  enabled?: WhetherOrNotToRequireTLSForIncomingOrOutgoingConnections;
  [k: string]: unknown | undefined;
} & VectorCoreTlsSettingsTlsConfig1;
/**
 * When enabled and used for incoming connections, an identity certificate is also required. See `tls.crt_file` for
 * more information.
 */
export type WhetherOrNotToRequireTLSForIncomingOrOutgoingConnections = boolean | null;
/**
 * [iam_role]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
 */
export type TheARNOfAnIAMRoleIamRoleToAssumeAtStartup = string | null;
/**
 * This ignores `create_missing_stream` directly after creating the group and creates
 * the first stream.
 *
 * [log_group]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html
 */
export type DynamicallyCreateALogGroupLogGroupIfItDoesNotAlreadyExist = boolean;
/**
 * [log_stream]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html
 */
export type DynamicallyCreateALogStreamLogStreamIfItDoesNotAlreadyExist = boolean;
/**
 * Metrics with the same name can only be differentiated by their namespace, and not all
 * metrics have their own namespace.
 *
 * [namespace]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/cloudwatch_concepts.html#Namespace
 */
export type TheDefaultNamespaceNamespaceToUseForMetricsThatDoNotHaveOne = string;
/**
 * If not specified, a unique partition key is generated for each Kinesis record.
 */
export type TheLogFieldUsedAsTheKinesisRecordSPartitionKeyValue = null | VectorLookupLookupV2ConfigValuePath;
/**
 * [stream_name]: https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/Working-with-log-groups-and-streams.html
 */
export type TheStreamNameStreamNameOfTheTargetKinesisFirehoseDeliveryStream = string;
/**
 * This must not include a leading `s3://` or a trailing `/`.
 */
export type TheS3BucketName = string;
/**
 * The UUID is appended to the timestamp portion of the object key, such that if the object key
 * generated is `date=2022-07-18/1658176486`, setting this field to `true` results
 * in an object key that looks like `date=2022-07-18/1658176486-30f6652c-71da-4f9f-800d-a1189c47c547`.
 *
 * This ensures there are no name collisions, and can be useful in high-volume workloads where
 * object keys must be unique.
 */
export type WhetherOrNotToAppendAUUIDV4TokenToTheEndOfTheObjectKey = boolean;
/**
 * This overrides setting the extension based on the configured `compression`.
 */
export type TheFilenameExtensionToUseInTheObjectKey = string | null;
/**
 * By default, object keys are appended with a timestamp that reflects when the objects are
 * sent to S3, such that the resulting object key is functionally equivalent to joining the key
 * prefix with the formatted timestamp, such as `date=2022-07-18/1658176486`.
 *
 * This would represent a `key_prefix` set to `date=%F/` and the timestamp of Mon Jul 18 2022
 * 20:34:44 GMT+0000, with the `filename_time_format` being set to `%s`, which renders
 * timestamps in seconds since the Unix epoch.
 *
 * Supports the common [`strftime`][chrono_strftime_specifiers] specifiers found in most
 * languages.
 *
 * When set to an empty string, no timestamp is appended to the key prefix.
 *
 * [chrono_strftime_specifiers]: https://docs.rs/chrono/latest/chrono/format/strftime/index.html#specifiers
 */
export type TheTimestampFormatForTheTimeComponentOfTheObjectKey = string;
/**
 * This controls if the bucket name is in the hostname or part of the URL.
 */
export type SpecifiesWhichAddressingStyleToUse = boolean;
/**
 * Prefixes are useful for partitioning objects, such as by creating an object key that
 * stores objects under a particular directory. If using a prefix for this purpose, it must end
 * in `/` to act as a directory path. A trailing `/` is **not** automatically added.
 */
export type APrefixToApplyToAllObjectKeys = string;
/**
 * This can refer to any valid timezone as defined in the [TZ database][tzdb], or "local" which refers to the system local timezone. It will default to the [globally configured timezone](https://vector.dev/docs/reference/configuration/global-options/#timezone).
 *
 * [tzdb]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type TimezoneToUseForAnyDateSpecifiersInTemplateStrings =
  null | TimezoneToUseForAnyDateSpecifiersInTemplateStrings1;
/**
 * This can refer to any valid timezone as defined in the [TZ database][tzdb], or "local" which refers to the system local timezone. It will default to the [globally configured timezone](https://vector.dev/docs/reference/configuration/global-options/#timezone).
 *
 * [tzdb]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type TimezoneToUseForAnyDateSpecifiersInTemplateStrings1 = 'local' | ANamedTimezone;
/**
 * Must be a valid name in the [TZ database][tzdb].
 *
 * [tzdb]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type ANamedTimezone = string;
/**
 * For more information, see [Canned ACL][canned_acl].
 *
 * [canned_acl]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
 */
export type CannedACLToApplyToTheCreatedObjects = null | S3CannedACLs;
/**
 * For more information, see [Canned ACL][canned_acl].
 *
 * [canned_acl]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#canned-acl
 */
export type S3CannedACLs =
  | BucketObjectArePrivate
  | BucketObjectCanBeReadPublicly
  | BucketObjectCanBeReadAndWrittenPublicly
  | BucketObjectArePrivateAndReadableByEC2
  | BucketObjectCanBeReadByAuthenticatedUsers
  | ObjectIsPrivateExceptToTheBucketOwner
  | ObjectIsSemiPrivate
  | BucketCanHaveLogsWritten;
/**
 * The bucket/object owner is granted the `FULL_CONTROL` permission, and no one else has
 * access.
 *
 * This is the default.
 */
export type BucketObjectArePrivate = 'private';
/**
 * The bucket/object owner is granted the `FULL_CONTROL` permission, and anyone in the
 * `AllUsers` grantee group is granted the `READ` permission.
 */
export type BucketObjectCanBeReadPublicly = 'public-read';
/**
 * The bucket/object owner is granted the `FULL_CONTROL` permission, and anyone in the
 * `AllUsers` grantee group is granted the `READ` and `WRITE` permissions.
 *
 * This is generally not recommended.
 */
export type BucketObjectCanBeReadAndWrittenPublicly = 'public-read-write';
/**
 * The bucket/object owner is granted the `FULL_CONTROL` permission, and the AWS EC2 service is
 * granted the `READ` permission for the purpose of reading Amazon Machine Image (AMI) bundles
 * from the given bucket.
 */
export type BucketObjectArePrivateAndReadableByEC2 = 'aws-exec-read';
/**
 * The bucket/object owner is granted the `FULL_CONTROL` permission, and anyone in the
 * `AuthenticatedUsers` grantee group is granted the `READ` permission.
 */
export type BucketObjectCanBeReadByAuthenticatedUsers = 'authenticated-read';
/**
 * The object owner is granted the `FULL_CONTROL` permission, and the bucket owner is granted the `READ` permission.
 *
 * Only relevant when specified for an object: this canned ACL is otherwise ignored when
 * specified for a bucket.
 */
export type ObjectIsPrivateExceptToTheBucketOwner = 'bucket-owner-read';
/**
 * Both the object owner and bucket owner are granted the `FULL_CONTROL` permission.
 *
 * Only relevant when specified for an object: this canned ACL is otherwise ignored when
 * specified for a bucket.
 */
export type ObjectIsSemiPrivate = 'bucket-owner-full-control';
/**
 * The `LogDelivery` grantee group is granted `WRITE` and `READ_ACP` permissions.
 *
 * Only relevant when specified for a bucket: this canned ACL is otherwise ignored when
 * specified for an object.
 *
 * For more information about logs, see [Amazon S3 Server Access Logging][serverlogs].
 *
 * [serverlogs]: https://docs.aws.amazon.com/AmazonS3/latest/dev/ServerLogs.html
 */
export type BucketCanHaveLogsWritten = 'log-delivery-write';
/**
 * Directly comparable to the `Content-Encoding` HTTP header.
 *
 * If not specified, the compression scheme used dictates this value.
 */
export type OverridesWhatContentEncodingHasBeenAppliedToTheObject = string | null;
/**
 * Directly comparable to the `Content-Type` HTTP header.
 *
 * If not specified, the compression scheme used dictates this value.
 * When `compression` is set to `none`, the value `text/x-log` is used.
 */
export type OverridesTheMIMETypeOfTheObject = string | null;
/**
 * This allows the grantee to read the created objects and their metadata, as well as read and
 * modify the ACL on the created objects.
 *
 * [grantee]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee
 */
export type GrantsREADREAD_ACPAndWRITE_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee = string | null;
/**
 * This allows the grantee to read the created objects and their metadata.
 *
 * [grantee]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee
 */
export type GrantsREADPermissionsOnTheCreatedObjectsToTheNamedGrantee = string | null;
/**
 * This allows the grantee to read the ACL on the created objects.
 *
 * [grantee]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee
 */
export type GrantsREAD_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee = string | null;
/**
 * This allows the grantee to modify the ACL on the created objects.
 *
 * [grantee]: https://docs.aws.amazon.com/AmazonS3/latest/dev/acl-overview.html#specifying-grantee
 */
export type GrantsWRITE_ACPPermissionsOnTheCreatedObjectsToTheNamedGrantee = string | null;
/**
 * The Server-side Encryption algorithm used when storing these objects.
 */
export type AWSS3ServerSideEncryptionAlgorithms = null | AWSS3ServerSideEncryptionAlgorithms1;
/**
 * More information on each algorithm can be found in the [AWS documentation][aws_docs].
 *
 * [aws_docs]: https://docs.aws.amazon.com/AmazonS3/latest/userguide/serv-side-encryption.html
 */
export type AWSS3ServerSideEncryptionAlgorithms1 =
  | EachObjectIsEncryptedWithAES256UsingAUniqueKey
  | EachObjectIsEncryptedWithAES256UsingKeysManagedByAWSKMS;
/**
 * This corresponds to the `SSE-S3` option.
 */
export type EachObjectIsEncryptedWithAES256UsingAUniqueKey = 'AES256';
/**
 * Depending on whether or not a KMS key ID is specified, this corresponds either to the
 * `SSE-KMS` option (keys generated/managed by KMS) or the `SSE-C` option (keys generated by
 * the customer, managed by KMS).
 */
export type EachObjectIsEncryptedWithAES256UsingKeysManagedByAWSKMS = 'aws:kms';
/**
 * Only applies when `server_side_encryption` is configured to use KMS.
 *
 * If not specified, Amazon S3 uses the AWS managed CMK in AWS to protect the data.
 */
export type SpecifiesTheIDOfTheAWSKeyManagementServiceAWSKMSSymmetricalCustomerManagedCustomerMasterKeyCMKThatIsUsedForTheCreatedObjects =
  string | null;
/**
 * See the [S3 Storage Classes][s3_storage_classes] for more details.
 *
 * [s3_storage_classes]: https://docs.aws.amazon.com/AmazonS3/latest/dev/storage-class-intro.html
 */
export type TheStorageClassForTheCreatedObjects =
  | 'STANDARD'
  | 'REDUCED_REDUNDANCY'
  | 'INTELLIGENT_TIERING'
  | 'STANDARD_IA'
  | 'EXPRESS_ONEZONE'
  | 'ONEZONE_IA'
  | 'GLACIER'
  | 'GLACIER_IR'
  | 'DEEP_ARCHIVE';
/**
 * The prefix is a 32-bit unsigned integer, little endian.
 */
export type EventDataIsPrefixedWithItsLengthInBytes = {
  length_delimited: CodecsCommonLengthDelimitedLengthDelimitedCoderOptions;
  [k: string]: unknown | undefined;
} & {
  method: EventDataIsPrefixedWithItsLengthInBytes1;
  [k: string]: unknown | undefined;
};
/**
 * The prefix is a 32-bit unsigned integer, little endian.
 */
export type EventDataIsPrefixedWithItsLengthInBytes1 = 'length_delimited';
/**
 * This value is a template which should result in a unique string for each event. See the [AWS
 * documentation][deduplication_id_docs] for more about how AWS does message deduplication.
 *
 * [deduplication_id_docs]: https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/using-messagededuplicationid-property.html
 */
export type TheMessageDeduplicationIDValueToAllowAWSToIdentifyDuplicateMessages = string | null;
/**
 * Can be applied only to FIFO queues.
 */
export type TheTagThatSpecifiesThatAMessageBelongsToASpecificMessageGroup = string | null;
/**
 * Only required when using personal tokens.
 */
export type TheAxiomOrganizationID = string | null;
/**
 * TLS configuration.
 */
export type TheTLSSettingsForTheConnection = null | VectorCoreTlsSettingsTlsConfig;
/**
 * Only required if not using Axiom Cloud.
 */
export type URIOfTheAxiomEndpointToSendDataTo = string | null;
/**
 * The UUID is appended to the timestamp portion of the object key, such that if the blob key
 * generated is `date=2022-07-18/1658176486`, setting this field to `true` results
 * in an blob key that looks like
 * `date=2022-07-18/1658176486-30f6652c-71da-4f9f-800d-a1189c47c547`.
 *
 * This ensures there are no name collisions, and can be useful in high-volume workloads where
 * blob keys must be unique.
 */
export type WhetherOrNotToAppendAUUIDV4TokenToTheEndOfTheBlobKey = boolean | null;
/**
 * By default, blob keys are appended with a timestamp that reflects when the blob are sent to
 * Azure Blob Storage, such that the resulting blob key is functionally equivalent to joining
 * the blob prefix with the formatted timestamp, such as `date=2022-07-18/1658176486`.
 *
 * This would represent a `blob_prefix` set to `date=%F/` and the timestamp of Mon Jul 18 2022
 * 20:34:44 GMT+0000, with the `filename_time_format` being set to `%s`, which renders
 * timestamps in seconds since the Unix epoch.
 *
 * Supports the common [`strftime`][chrono_strftime_specifiers] specifiers found in most
 * languages.
 *
 * When set to an empty string, no timestamp is appended to the blob prefix.
 *
 * [chrono_strftime_specifiers]: https://docs.rs/chrono/latest/chrono/format/strftime/index.html#specifiers
 */
export type TheTimestampFormatForTheTimeComponentOfTheBlobKey = string | null;
/**
 * Authentication with an access key or shared access signature (SAS)
 * are supported authentication methods. If using a non-account SAS,
 * healthchecks will fail and will need to be disabled by setting
 * `healthcheck.enabled` to `false` for this sink
 *
 * When generating an account SAS, the following are the minimum required option
 * settings for Vector to access blob storage and pass a health check.
 * | Option                 | Value              |
 * | ---------------------- | ------------------ |
 * | Allowed services       | Blob               |
 * | Allowed resource types | Container & Object |
 * | Allowed permissions    | Read & Create      |
 *
 * Either `storage_account`, or this field, must be specified.
 */
export type TheAzureBlobStorageAccountConnectionString = null | VectorCommonSensitiveStringSensitiveString;
/**
 * Wrapper for sensitive strings containing credentials
 */
export type VectorCommonSensitiveStringSensitiveString = string;
/**
 * This is used to override the default blob storage endpoint URL in cases where you are using
 * credentials read from the environment/managed identities or access tokens without using an
 * explicit connection_string (which already explicitly supports overriding the blob endpoint
 * URL).
 *
 * This may only be used with `storage_account` and is ignored when used with
 * `connection_string`.
 */
export type TheAzureBlobStorageEndpointURL = string | null;
/**
 * Attempts to load credentials for the account in the following ways, in order:
 *
 * - read from environment variables ([more information][env_cred_docs])
 * - looks for a [Managed Identity][managed_ident_docs]
 * - uses the `az` CLI tool to get an access token ([more information][az_cli_docs])
 *
 * Either `connection_string`, or this field, must be specified.
 *
 * [env_cred_docs]: https://docs.rs/azure_identity/latest/azure_identity/struct.EnvironmentCredential.html
 * [managed_ident_docs]: https://docs.microsoft.com/en-us/azure/active-directory/managed-identities-azure-resources/overview
 * [az_cli_docs]: https://docs.microsoft.com/en-us/cli/azure/account?view=azure-cli-latest#az-account-get-access-token
 */
export type TheAzureBlobStorageAccountName = string | null;
/**
 * [resource_id]: https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-collector-api#request-headers
 */
export type TheResourceIDResourceIdOfTheAzureResourceTheDataShouldBeAssociatedWith = string | null;
/**
 * [uniq_id]: https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-collector-api#request-uri-parameters
 */
export type TheUniqueIdentifierUniqIdForTheLogAnalyticsWorkspace = string;
/**
 * [alt_host]: https://docs.azure.cn/en-us/articles/guidance/developerdifferences#check-endpoints-in-azure
 */
export type AlternativeHostAltHostForDedicatedAzureRegions = string;
/**
 * Can only contain letters, numbers, and underscores (_), and may not exceed 100 characters.
 *
 * [record_type]: https://docs.microsoft.com/en-us/azure/azure-monitor/platform/data-collector-api#request-headers
 */
export type TheRecordTypeRecordTypeOfTheDataThatIsBeingSubmitted = string;
/**
 * Wrapper for sensitive strings containing credentials
 */
export type ThePrimaryOrTheSecondaryKeySharedKeyForTheLogAnalyticsWorkspace = string;
/**
 * The setting of `log_schema.timestamp_key`, usually `timestamp`, is used here by default.
 * This field should be used in rare cases where `TimeGenerated` should point to a specific log
 * field. For example, use this field to set the log field `source_timestamp` as holding the
 * value that should be used as `TimeGenerated` on the Azure side.
 *
 * [1]: https://learn.microsoft.com/en-us/azure/azure-monitor/logs/log-standard-columns#timegenerated
 */
export type UseThisOptionToCustomizeTheLogFieldUsedAsTimeGenerated1InAzure =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type VectorLookupLookupV2OptionalPathOptionalValuePath = string;
/**
 * Set to `0` (default) to disable reporting.
 */
export type TheIntervalBetweenReportingASummaryOfActivity = number;
/**
 * By default, there is no limit.
 */
export type TheNumberOfEventsPerSecondThatTheSinkIsAllowedToConsume = number | null;
/**
 * HTTP authentication should be used with HTTPS only, as the authentication credentials are passed as an
 * HTTP header without any additional encryption beyond what is provided by the transport itself.
 */
export type ConfigurationOfTheAuthenticationStrategyForHTTPRequests =
  null | ConfigurationOfTheAuthenticationStrategyForHTTPRequests1;
/**
 * HTTP authentication should be used with HTTPS only, as the authentication credentials are passed as an
 * HTTP header without any additional encryption beyond what is provided by the transport itself.
 */
export type ConfigurationOfTheAuthenticationStrategyForHTTPRequests1 = BasicAuthentication | BearerAuthentication;
/**
 * The username and password are concatenated and encoded via [base64][base64].
 *
 * [base64]: https://en.wikipedia.org/wiki/Base64
 */
export type BasicAuthentication1 = 'basic';
/**
 * The bearer token value (OAuth2, JWT, etc.) is passed as-is.
 */
export type BearerAuthentication1 = 'bearer';
/**
 * The database that contains the table that data is inserted into.
 */
export type ATemplatedField6 = null | ATemplatedField;
/**
 * The format to parse input data.
 */
export type DataFormat = 'json_each_row' | 'json_as_object' | 'json_as_string';
/**
 * If left unspecified, use the default provided by the `ClickHouse` server.
 */
export type SetsInputFormatSkipUnknownFieldsAllowingClickHouseToDiscardFieldsNotPresentInTheTableSchema =
  | boolean
  | null;
/**
 * [standard_streams]: https://en.wikipedia.org/wiki/Standard_streams
 */
export type TheStandardStreamStandardStreamsToWriteTo = WriteOutputToSTDOUTStdout | WriteOutputToSTDERRStderr;
/**
 * [stdout]: https://en.wikipedia.org/wiki/Standard_streams#Standard_output_(stdout)
 */
export type WriteOutputToSTDOUTStdout = 'stdout';
/**
 * [stderr]: https://en.wikipedia.org/wiki/Standard_streams#Standard_error_(stderr)
 */
export type WriteOutputToSTDERRStderr = 'stderr';
/**
 * This codec must be configured with fields to encode.
 */
export type EncodesAnEventAsACSVMessage2 = CodecsEncodingFormatCsvCsvSerializerConfig1 & {
  codec: EncodesAnEventAsACSVMessage3;
  [k: string]: unknown | undefined;
};
/**
 * This codec must be configured with fields to encode.
 */
export type EncodesAnEventAsACSVMessage3 = 'csv';
/**
 * [json]: https://www.json.org/
 */
export type EncodesAnEventAsJSONJson2 = CodecsEncodingFormatJsonJsonSerializerConfig1 & {
  codec: EncodesAnEventAsJSONJson3;
  [k: string]: unknown | undefined;
};
/**
 * [json]: https://www.json.org/
 */
export type EncodesAnEventAsJSONJson3 = 'json';
/**
 * If an event has a Datadog [API key][api_key] set explicitly in its metadata, it takes
 * precedence over this setting.
 *
 * This value can also be set by specifying the `DD_API_KEY` environment variable.
 * The value specified here takes precedence over the environment variable.
 *
 * [api_key]: https://docs.datadoghq.com/api/?lang=bash#authentication
 * [global_options]: /docs/reference/configuration/global-options/#datadog
 */
export type TheDefaultDatadogAPIKeyApiKeyToUseInAuthenticationOfHTTPRequests =
  null | VectorCommonSensitiveStringSensitiveString;
/**
 * The endpoint must contain an HTTP scheme, and may specify a hostname or IP
 * address and port. The API path should NOT be specified as this is handled by
 * the sink.
 *
 * If set, overrides the `site` option.
 */
export type TheEndpointToSendObservabilityDataTo = string | null;
/**
 * This value can also be set by specifying the `DD_SITE` environment variable.
 * The value specified here takes precedence over the environment variable.
 *
 * If not specified by the environment variable, a default value of
 * `datadoghq.com` is taken.
 *
 * [dd_site]: https://docs.datadoghq.com/getting_started/site
 */
export type TheDatadogSiteDdSiteToSendObservabilityDataTo = string | null;
/**
 * All compression algorithms use the default compression level unless otherwise specified.
 */
export type CompressionConfiguration8 = null | CompressionConfiguration9;
/**
 * All compression algorithms use the default compression level unless otherwise specified.
 */
export type CompressionConfiguration9 =
  | ('none' | GzipGzipCompression | ZlibZlibCompression | ZstandardZstdCompression | SnappySnappyCompression)
  | {
      /**
       * Compression algorithm.
       */
      algorithm:
        | 'none'
        | GzipGzipCompression
        | ZlibZlibCompression
        | ZstandardZstdCompression
        | SnappySnappyCompression;
      level?: VectorSinksUtilBufferCompressionCompressionLevel;
      [k: string]: unknown | undefined;
    };
/**
 * This namespace is only used if a metric has no existing namespace. When a namespace is
 * present, it is used as a prefix to the metric name, and separated with a period (`.`).
 */
export type SetsTheDefaultNamespaceForAnyMetricsSent = string | null;
/**
 * All compression algorithms use the default compression level unless otherwise specified.
 */
export type CompressionConfiguration10 = null | CompressionConfiguration9;
/**
 * Amazon OpenSearch Serverless requires this option to be set to `auto` (the default).
 */
export type TheAPIVersionOfElasticsearch = AutoDetectTheAPIVersion | 'v6' | 'v7' | 'v8';
/**
 * If the [cluster state version endpoint][es_version] isn't reachable, a warning is logged to
 * stdout, and the version is assumed to be V6 if the `suppress_type_name` option is set to
 * `true`. Otherwise, the version is assumed to be V8. In the future, the sink instead
 * returns an error during configuration parsing, since a wrongly assumed version could lead to
 * incorrect API calls.
 *
 * [es_version]: https://www.elastic.co/guide/en/elasticsearch/reference/current/cluster-state.html#cluster-state-api-path-params
 */
export type AutoDetectTheAPIVersion = 'auto';
/**
 * [iam_role]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
 */
export type TheARNOfAnIAMRoleIamRoleToAssume3 = string;
/**
 * Version field value.
 */
export type ATemplatedField10 = null | ATemplatedField;
/**
 * Possible values are `internal`, `external` or `external_gt` and `external_gte`.
 *
 * [es_index_versioning]: https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-index_.html#index-versioning
 */
export type VersionType = 'internal' | 'external' | 'external_gte';
/**
 * The format of the data stream name is `<type>-<dataset>-<namespace>`, where each value comes
 * from the `data_stream` configuration field of the same name.
 *
 * If enabled, the value of the `data_stream.type`, `data_stream.dataset`, and
 * `data_stream.namespace` event fields are used if they are present. Otherwise, the values
 * set in this configuration are used.
 */
export type AutomaticallyRoutesEventsByDerivingTheDataStreamNameUsingSpecificEventFields = boolean;
/**
 * This ensures that fields match the name of the data stream that is receiving events.
 */
export type AutomaticallyAddsAndSyncsTheDataStreamEventFieldsIfTheyAreMissingFromTheEvent = boolean;
/**
 * This is only relevant for Elasticsearch <= 6.X. If you are using >= 7.0 you do not need to
 * set this option since Elasticsearch has removed it.
 *
 * [doc_type]: https://www.elastic.co/guide/en/elasticsearch/reference/6.8/actions-index.html
 */
export type TheDocTypeDocTypeForYourIndexData = string;
/**
 * The endpoint must contain an HTTP scheme, and may specify a
 * hostname or IP address and port.
 */
export type TheElasticsearchEndpointToSendLogsTo = string | null;
/**
 * The endpoint must contain an HTTP scheme, and may specify a
 * hostname or IP address and port.
 */
export type AListOfElasticsearchEndpointsToSendLogsTo = string[];
/**
 * By default, the `_id` field is not set, which allows Elasticsearch to set this
 * automatically. Setting your own Elasticsearch IDs can [hinder performance][perf_doc].
 *
 * [es_id]: https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-id-field.html
 * [perf_doc]: https://www.elastic.co/guide/en/elasticsearch/reference/master/tune-for-indexing-speed.html#_use_auto_generated_ids
 */
export type TheNameOfTheEventKeyThatShouldMapToElasticsearchSIdFieldEsId = null | VectorLookupLookupV2ConfigValuePath;
/**
 * If present, the value of the tag is set on the generated log event in the `host` field,
 * where the field key uses the [global `host_key` option][global_log_schema_host_key].
 *
 * [global_log_schema_host_key]: https://vector.dev/docs/reference/configuration//global-options#log_schema.host_key
 */
export type NameOfTheTagInTheMetricToUseForTheSourceHost = string | null;
/**
 * This overrides the [global `timezone`][global_timezone] option. The time zone name may be
 * any name in the [TZ database][tz_database] or `local` to indicate system local time.
 *
 * [global_timezone]: https://vector.dev/docs/reference/configuration//global-options#timezone
 * [tz_database]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type TheNameOfTheTimeZoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone =
  null | TimezoneToUseForAnyDateSpecifiersInTemplateStrings1;
/**
 * Elasticsearch Data Streams only support the `create` action.
 */
export type IngestsDocumentsInBulkUsingTheBulkAPICreateAction = 'data_stream';
/**
 * To avoid duplicates in Elasticsearch, please use option `id_key`.
 */
export type WhetherOrNotToRetrySuccessfulRequestsContainingPartialFailures = boolean;
/**
 * The `type` field was deprecated in Elasticsearch 7.x and removed in Elasticsearch 8.x.
 *
 * If enabled, the `doc_type` option is ignored.
 */
export type WhetherOrNotToSendTheTypeFieldToElasticsearch = boolean;
/**
 * After not receiving any events in this amount of time, the file is flushed and closed.
 */
export type TheAmountOfTimeThatAFileCanBeIdleAndStayOpen = number;
/**
 * This is useful for distinguishing between different files while monitoring. However, the tag's
 * cardinality is unbounded.
 */
export type WhetherOrNotToIncludeTheFileTagOnTheComponentSCorrespondingInternalMetrics = boolean;
/**
 * All compression algorithms use the default compression level unless otherwise specified.
 */
export type CompressionConfiguration12 =
  | ('none' | GzipGzipCompression)
  | {
      /**
       * Compression algorithm.
       */
      algorithm: 'none' | GzipGzipCompression;
      level?: VectorSinksUtilBufferCompressionCompressionLevel;
      [k: string]: unknown | undefined;
    };
/**
 * User-configured environment namespace to identify the data domain the logs originated from.
 */
export type ATemplatedField16 = null | ATemplatedField;
/**
 * Either an API key or a path to a service account credentials JSON file can be specified.
 *
 * If both are unset, the `GOOGLE_APPLICATION_CREDENTIALS` environment variable is checked for a filename. If no
 * filename is named, an attempt is made to fetch an instance service account for the compute instance the program is
 * running on. If this is not on a GCE instance, then you must define it with an API key or service account
 * credentials JSON file.
 *
 * [gcp_api_key]: https://cloud.google.com/docs/authentication/api-keys
 */
export type AnAPIKeyGcpApiKey = null | VectorCommonSensitiveStringSensitiveString;
/**
 * Either an API key or a path to a service account credentials JSON file can be specified.
 *
 * If both are unset, the `GOOGLE_APPLICATION_CREDENTIALS` environment variable is checked for a filename. If no
 * filename is named, an attempt is made to fetch an instance service account for the compute instance the program is
 * running on. If this is not on a GCE instance, then you must define it with an API key or service account
 * credentials JSON file.
 *
 * [gcp_service_account_credentials]: https://cloud.google.com/docs/authentication/production#manually
 */
export type PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile = string | null;
/**
 * For more information, see [Predefined ACLs][predefined_acls].
 *
 * [predefined_acls]: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl
 */
export type ThePredefinedACLToApplyToCreatedObjects = null | GCSPredefinedACLs;
/**
 * For more information, see [Predefined ACLs][predefined_acls].
 *
 * [predefined_acls]: https://cloud.google.com/storage/docs/access-control/lists#predefined-acl
 */
export type GCSPredefinedACLs =
  | BucketObjectCanBeReadByAuthenticatedUsers
  | ObjectIsSemiPrivate
  | ObjectIsPrivateExceptToTheBucketOwner
  | BucketObjectArePrivate
  | BucketObjectArePrivateWithinTheProject
  | BucketObjectCanBeReadPublicly;
/**
 * Project owners and project editors are granted the `OWNER` permission, and anyone who is
 * part of the project team is granted the `READER` permission.
 *
 * This is the default.
 */
export type BucketObjectArePrivateWithinTheProject = 'project-private';
/**
 * Prefixes are useful for partitioning objects, such as by creating an object key that
 * stores objects under a particular directory. If using a prefix for this purpose, it must end
 * in `/` in order to act as a directory path. A trailing `/` is **not** automatically added.
 */
export type APrefixToApplyToAllObjectKeys1 = string | null;
/**
 * For more information, see the [custom metadata][custom_metadata] documentation.
 *
 * [custom_metadata]: https://cloud.google.com/storage/docs/metadata#custom-metadata
 */
export type TheSetOfMetadataKeyValuePairsForTheCreatedObjects = {
  [k: string]: string | undefined;
} | null;
/**
 * For more information, see the [storage classes][storage_classes] documentation.
 *
 * [storage_classes]: https://cloud.google.com/storage/docs/storage-classes
 */
export type TheStorageClassForCreatedObjects = null | GCSStorageClasses;
/**
 * For more information, see [Storage classes][storage_classes].
 *
 * [storage_classes]: https://cloud.google.com/storage/docs/storage-classes
 */
export type GCSStorageClasses = StandardStorage | 'NEARLINE' | 'COLDLINE' | 'ARCHIVE';
/**
 * This is the default.
 */
export type StandardStorage = 'STANDARD';
/**
 * The scheme (`http` or `https`) must be specified. No path should be included since the paths defined
 * by the [`GCP Pub/Sub`][pubsub_api] API are used.
 *
 * The trailing slash `/` must not be included.
 *
 * [pubsub_api]: https://cloud.google.com/pubsub/docs/reference/rest
 */
export type TheEndpointToWhichToPublishEvents = string;
/**
 * The monitored resource to associate the logs with.
 */
export type AMonitoredResource = {
  type: TheMonitoredResourceType;
  [k: string]: unknown | undefined;
} & {
  [k: string]: ATemplatedField;
};
/**
 * For example, the type of a Compute Engine VM instance is `gce_instance`.
 * See the [Google Cloud Platform monitored resource documentation][gcp_resources] for
 * more details.
 *
 * [gcp_resources]: https://cloud.google.com/monitoring/api/resources
 */
export type TheMonitoredResourceType = string;
/**
 * The named field is removed from the log event if present, and must be either an integer
 * between 0 and 800 or a string containing one of the [severity level names][sev_names] (case
 * is ignored) or a common prefix such as `err`.
 *
 * If no severity key is specified, the severity of outgoing records is set to 0 (`DEFAULT`).
 *
 * See the [GCP Stackdriver Logging LogSeverity description][logsev_docs] for more details on
 * the value of the `severity` field.
 *
 * [sev_names]: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
 * [logsev_docs]: https://cloud.google.com/logging/docs/reference/v2/rest/v2/LogEntry#logseverity
 */
export type TheFieldOfTheLogEventFromWhichToTakeTheOutgoingLogSSeverityField =
  null | VectorLookupLookupV2ConfigValuePath;
/**
 * Metrics with the same name can only be differentiated by their namespace, and not all
 * metrics have their own namespace.
 */
export type TheDefaultNamespaceToUseForMetricsThatDoNotHaveOne = string;
/**
 * See the [Google Cloud Platform project management documentation][project_docs] for more details.
 *
 * [project_docs]: https://cloud.google.com/resource-manager/docs/creating-managing-projects
 */
export type TheProjectIDToWhichToPublishMetrics = string;
/**
 * The monitored resource to associate the metrics with.
 */
export type AMonitoredResource1 = {
  type: TheMonitoredResourceType;
  [k: string]: unknown | undefined;
} & {
  [k: string]: string | undefined;
};
/**
 * Default to `public`, the default database of GreptimeDB.
 *
 * Database can be created via `create database` statement on
 * GreptimeDB. If you are using GreptimeCloud, use `dbname` from the
 * connection information of your instance.
 *
 * [database]: https://docs.greptime.com/user-guide/concepts/key-concepts#database
 */
export type TheGreptimeDBDatabaseDatabaseNameToConnect = string;
/**
 * This sink uses GreptimeDB's gRPC interface for data ingestion. By
 * default, GreptimeDB listens to port 4001 for gRPC protocol.
 *
 * The address _must_ include a port.
 */
export type TheHostAndPortOfGreptimeDBGRPCService = string;
/**
 * This is to keep consistency with GreptimeDB's naming pattern. By
 * default, this sink will use `val` for value column name, and `ts` for
 * time index name. When turned on, `greptime_value` and
 * `greptime_timestamp` will be used for these names.
 *
 * If you are using this Vector sink together with other data ingestion
 * sources of GreptimeDB, like Prometheus Remote Write and Influxdb Line
 * Protocol, it is highly recommended to turn on this.
 *
 * Also if there is a tag name conflict from your data source, for
 * example, you have a tag named as `val` or `ts`, you need to turn on
 * this option to avoid the conflict.
 *
 * Default to `false` for compatibility.
 */
export type UseGreptimeSPrefixedNamingForTimeIndexAndValueColumns = boolean | null;
/**
 * This is required if your instance has authentication enabled.
 */
export type ThePasswordForYourGreptimeDBInstance = null | VectorCommonSensitiveStringSensitiveString;
/**
 * This is required if your instance has authentication enabled.
 */
export type TheUsernameForYourGreptimeDBInstance = string | null;
/**
 * Pipeline version to be used for the logs.
 */
export type ATemplatedField20 = null | ATemplatedField;
/**
 * The HTTP method to use when making the request.
 */
export type HTTPMethod = 'get' | 'head' | 'post' | 'put' | 'delete' | 'options' | 'trace' | 'patch';
/**
 * This option is ignored if the encoding is not character delimited JSON.
 *
 * If specified, the `payload_suffix` must also be specified and together they must produce a valid JSON object.
 */
export type AStringToPrefixThePayloadWith = string;
/**
 * This option is ignored if the encoding is not character delimited JSON.
 *
 * If specified, the `payload_prefix` must also be specified and together they must produce a valid JSON object.
 */
export type AStringToSuffixThePayloadWith = string;
/**
 * The scheme (`http` or `https`) must be specified. No path should be included since the paths defined
 * by the [`Splunk`][splunk] API are used.
 *
 * [splunk]: https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints
 */
export type TheBaseURLOfTheHumioInstance = string;
/**
 * If unset, Humio defaults it to none.
 */
export type TheTypeOfEventsSentToThisSinkHumioUsesThisAsTheNameOfTheParserToUseToIngestTheData =
  null | ATemplatedField;
/**
 * By default, the [global `log_schema.host_key` option][global_host_key] is used if log
 * events are Legacy namespaced, or the semantic meaning of "host" is used, if defined.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToHumio = string;
/**
 * In public-facing APIs, this must (if present) be equal to the repository used to create the ingest token used for authentication.
 *
 * In private cluster setups, Humio can be configured to allow these to be different.
 *
 * For more information, see [Humio’s Format of Data][humio_data_format].
 *
 * [humio_data_format]: https://docs.humio.com/integrations/data-shippers/hec/#format-of-data
 */
export type OptionalNameOfTheRepositoryToIngestInto = null | ATemplatedField;
/**
 * Can be used to tag events by specifying fields starting with `#`.
 *
 * For more information, see [Humio’s Format of Data][humio_data_format].
 *
 * [humio_data_format]: https://docs.humio.com/integrations/data-shippers/hec/#format-of-data
 */
export type EventFieldsToBeAddedToHumioSExtraFields = VectorLookupLookupV2ConfigValuePath[];
/**
 * Typically the filename the logs originated from. Maps to `@source` in Humio.
 */
export type TheSourceOfEventsSentToThisSink = null | ATemplatedField;
/**
 * By default, either the [global `log_schema.timestamp_key` option][global_timestamp_key] is used
 * if log events are Legacy namespaced, or the semantic meaning of "timestamp" is used, if defined.
 *
 * [global_timestamp_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.timestamp_key
 */
export type OverridesTheNameOfTheLogFieldUsedToRetrieveTheTimestampToSendToHumioWhenSetToATimestampIsNotSetInTheEventsSentToHumio =
  string;
/**
 * This should be a full HTTP URI, including the scheme, host, and port.
 */
export type TheEndpointToSendDataTo = string;
/**
 * The setting of `log_schema.host_key`, usually `host`, is used here by default.
 */
export type UseThisOptionToCustomizeTheKeyContainingTheHostname =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * The setting of `log_schema.message_key`, usually `message`, is used here by default.
 */
export type UseThisOptionToCustomizeTheKeyContainingTheMessage =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * When specified, the measurement name is `<namespace>.vector`.
 */
export type TheNamespaceOfTheMeasurementNameToUse = string | null;
/**
 * The setting of `log_schema.source_type_key`, usually `source_type`, is used here by default.
 */
export type UseThisOptionToCustomizeTheKeyContainingTheSourceType =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * By default Vector adds `metric_type` as well as the configured `log_schema.host_key` and
 * `log_schema.source_type_key` options.
 */
export type TheListOfNamesOfLogFieldsThatShouldBeAddedAsTagsToEachMeasurement = string[];
/**
 * Configuration settings for InfluxDB v0.x/v1.x.
 */
export type CoreOptionOptionVectorSinksInfluxdbInfluxDb1Settings = null | {
  consistency?: TheConsistencyLevelToUseForWrites;
  database: TheNameOfTheDatabaseToWriteInto;
  password?: ThePasswordToAuthenticateWith;
  retention_policy_name?: TheTargetRetentionPolicyForWrites;
  username?: TheUsernameToAuthenticateWith;
  [k: string]: unknown | undefined;
};
/**
 * Only relevant when using InfluxDB v0.x/v1.x.
 */
export type TheConsistencyLevelToUseForWrites = string | null;
/**
 * Only relevant when using InfluxDB v0.x/v1.x.
 */
export type TheNameOfTheDatabaseToWriteInto = string;
/**
 * Only relevant when using InfluxDB v0.x/v1.x.
 */
export type ThePasswordToAuthenticateWith = null | VectorCommonSensitiveStringSensitiveString;
/**
 * Only relevant when using InfluxDB v0.x/v1.x.
 */
export type TheTargetRetentionPolicyForWrites = string | null;
/**
 * Only relevant when using InfluxDB v0.x/v1.x.
 */
export type TheUsernameToAuthenticateWith = string | null;
/**
 * Configuration settings for InfluxDB v2.x.
 */
export type CoreOptionOptionVectorSinksInfluxdbInfluxDb2Settings = null | {
  bucket: TheNameOfTheBucketToWriteInto;
  org: TheNameOfTheOrganizationToWriteInto;
  token: TheTokenTokenDocsToAuthenticateWith;
  [k: string]: unknown | undefined;
};
/**
 * Only relevant when using InfluxDB v2.x and above.
 */
export type TheNameOfTheBucketToWriteInto = string;
/**
 * Only relevant when using InfluxDB v2.x and above.
 */
export type TheNameOfTheOrganizationToWriteInto = string;
/**
 * Wrapper for sensitive strings containing credentials
 */
export type TheTokenTokenDocsToAuthenticateWith = string;
/**
 * These are the servers in a Kafka cluster that a client should use to bootstrap its
 * connection to the cluster, allowing discovery of all the other hosts in the cluster.
 *
 * Must be in the form of `host:port`, and comma-separated.
 */
export type ACommaSeparatedListOfKafkaBootstrapServers = string;
/**
 * If omitted, no headers are written.
 */
export type TheLogFieldNameToUseForTheKafkaHeaders = null | string;
/**
 * It is ignored when healthcheck is disabled.
 */
export type TheTopicNameToUseForHealthcheckIfOmittedTopicIsUsedThisOptionHelpsPreventHealthcheckWarningsWhenTopicIsTemplated =
  string | null;
/**
 * If the field does not exist in the log or in the tags, a blank value is used. If
 * unspecified, the key is not sent.
 *
 * Kafka uses a hash of the key to choose the partition or uses round-robin if the record has
 * no key.
 */
export type TheLogFieldNameOrTagKeyToUseForTheTopicKey = null | string;
/**
 * Only `PLAIN`- and `SCRAM`-based mechanisms are supported when configuring SASL authentication using `sasl.*`. For
 * other mechanisms, `librdkafka_options.*` must be used directly to configure other `librdkafka`-specific values.
 * If using `sasl.kerberos.*` as an example, where `*` is `service.name`, `principal`, `kinit.md`, etc., then
 * `librdkafka_options.*` as a result becomes `librdkafka_options.sasl.kerberos.service.name`,
 * `librdkafka_options.sasl.kerberos.principal`, etc.
 *
 * See the [librdkafka documentation](https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md) for details.
 *
 * SASL authentication is not supported on Windows.
 */
export type EnablesSASLAuthentication = boolean | null;
/**
 * Some sources may generate events with timestamps that aren't in chronological order. Even though the
 * sink sorts the events before sending them to Loki, there is a chance that another event could come in
 * that is out of order with the latest events sent to Loki. Prior to Loki 2.4.0, this
 * was not supported and would result in an error during the push request.
 *
 * If you're using Loki 2.4.0 or newer, `Accept` is the preferred action, which lets Loki handle
 * any necessary sorting/reordering. If you're using an earlier version, then you must use `Drop`
 * or `RewriteTimestamp` depending on which option makes the most sense for your use case.
 */
export type OutOfOrderEventBehavior = AcceptTheEvent | 'rewrite_timestamp' | 'drop';
/**
 * The event is not dropped and is sent without modification.
 *
 * Requires Loki 2.4.0 or newer.
 */
export type AcceptTheEvent = 'accept';
/**
 * The timestamp is still sent as event metadata for Loki to use for indexing.
 */
export type WhetherOrNotToRemoveTheTimestampFromTheEventPayload = boolean;
/**
 * When running Loki locally, a tenant ID is not required.
 *
 * [tenant_id]: https://grafana.com/docs/loki/latest/operations/multi-tenancy/
 */
export type TheTenantIDTenantIdToSpecifyInRequestsToLoki = null | ATemplatedField;
/**
 * Configuration of the authentication strategy when interacting with NATS.
 */
export type CoreOptionOptionVectorNatsNatsAuthConfig =
  | null
  | (
      | {
          /**
           * Username/password authentication.
           */
          strategy: 'user_password';
          /**
           * Username and password configuration.
           */
          user_password: {
            /**
             * Wrapper for sensitive strings containing credentials
             */
            password: string;
            /**
             * Username.
             */
            user: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Token authentication.
           */
          strategy: 'token';
          /**
           * Token configuration.
           */
          token: {
            /**
             * Wrapper for sensitive strings containing credentials
             */
            value: string;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Credentials file configuration.
           */
          credentials_file: {
            /**
             * Path to credentials file.
             */
            path: string;
            [k: string]: unknown | undefined;
          };
          /**
           * Credentials file authentication. (JWT-based)
           */
          strategy: 'credentials_file';
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * NKeys configuration.
           */
          nkey: {
            nkey: User;
            seed: Seed;
            [k: string]: unknown | undefined;
          };
          /**
           * NKey authentication.
           */
          strategy: 'nkey';
          [k: string]: unknown | undefined;
        }
    );
/**
 * Conceptually, this is equivalent to a public key.
 */
export type User = string;
/**
 * Conceptually, this is equivalent to a private key.
 */
export type Seed = string;
/**
 * [nats_connection_name]: https://docs.nats.io/using-nats/developer/connecting/name
 */
export type ANATSNameNatsConnectionNameAssignedToTheNATSConnection = string;
/**
 * If set, the `subject` must belong to an existing JetStream stream.
 *
 * [jetstream]: https://docs.nats.io/nats-concepts/jetstream
 */
export type SendMessagesUsingJetstreamJetstream = boolean;
/**
 * The URL must take the form of `nats://server:port`.
 * If the port is not specified it defaults to 4222.
 *
 * [nats_url]: https://docs.nats.io/using-nats/developer/connecting#nats-url
 */
export type TheNATSURLNatsUrlToConnectTo = string;
/**
 * TCP keepalive settings for socket-based components.
 */
export type CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig = null | {
  /**
   * The time to wait before starting to send TCP keepalive probes on an idle connection.
   */
  time_secs?: number | null;
  [k: string]: unknown | undefined;
};
/**
 * The metrics are exposed at the typical Prometheus exporter path, `/metrics`.
 */
export type TheAddressToExposeForScraping = string;
/**
 * [dist_metric_docs]: https://vector.dev/docs/about/under-the-hood/architecture/data-model/metric/#distribution
 */
export type DefaultBucketsToUseForAggregatingDistributionDistMetricDocsMetricsIntoHistograms = number[];
/**
 * This namespace is only used if a metric has no existing namespace. When a namespace is
 * present, it is used as a prefix to the metric name, and separated with an underscore (`_`).
 *
 * It should follow the Prometheus [naming conventions][prom_naming_docs].
 *
 * [prom_naming_docs]: https://prometheus.io/docs/practices/naming/#metric-names
 */
export type TheDefaultNamespaceForAnyMetricsSent = string | null;
/**
 * While distributions as a lossless way to represent a set of samples for a
 * metric is supported, Prometheus clients (the application being scraped, which is this sink) must
 * aggregate locally into either an aggregated histogram or aggregated summary.
 *
 * [dist_metric_docs]: https://vector.dev/docs/about/under-the-hood/architecture/data-model/metric/#distribution
 * [prom_agg_hist_docs]: https://prometheus.io/docs/concepts/metric_types/#histogram
 * [prom_agg_summ_docs]: https://prometheus.io/docs/concepts/metric_types/#summary
 */
export type WhetherOrNotToRenderDistributionsDistMetricDocsAsAnAggregatedHistogramPromAggHistDocsOrAggregatedSummaryPromAggSummDocs =
  boolean;
/**
 * On the flush interval, if a metric has not been seen since the last flush interval, it is
 * considered expired and is removed.
 *
 * Be sure to configure this value higher than your client’s scrape interval.
 */
export type TheIntervalInSecondsOnWhichMetricsAreFlushed = number;
/**
 * [dist_metric_docs]: https://vector.dev/docs/about/under-the-hood/architecture/data-model/metric/#distribution
 */
export type QuantilesToUseForAggregatingDistributionDistMetricDocsMetricsIntoASummary = number[];
/**
 * This can sometimes be useful when the source of metrics leads to their timestamps being too
 * far in the past for Prometheus to allow them, such as when aggregating metrics over long
 * time periods, or when replaying old metrics from a disk buffer.
 */
export type SuppressesTimestampsOnThePrometheusOutput = boolean;
/**
 * A bearer token (OAuth2, JWT, etc) is passed as-is.
 */
export type BearerAuthentication3 = 'bearer';
/**
 * [iam_role]: https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html
 */
export type TheARNOfAnIAMRoleIamRoleToAssume5 = string;
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export type CoreOptionOptionVectorAwsRegionRegionOrEndpoint = null | VectorAwsRegionRegionOrEndpoint5;
/**
 * If set, a header named `X-Scope-OrgID` is added to outgoing requests with the value of this setting.
 *
 * This may be used by Cortex or other remote services to identify the tenant making the request.
 */
export type TheTenantIDToSend = null | ATemplatedField;
/**
 * This can be used either for basic authentication (username/password) or JWT authentication.
 * When used for JWT, the value should be `token`.
 */
export type BasicAuthenticationNameUsername = string | null;
/**
 * A data URL is also supported.
 */
export type TheCredentialsURL = string;
/**
 * This can be used either for basic authentication (username/password) or JWT authentication.
 * When used for JWT, the value should be the signed JWT, in the compact representation.
 */
export type BasicAuthenticationPasswordToken = null | VectorCommonSensitiveStringSensitiveString;
/**
 * Note this is an unsigned 32 bit integer which is a smaller capacity than
 * many of the other sink batch settings.
 */
export type TheMaximumAmountOfEventsInABatchBeforeItIsFlushed = number | null;
/**
 * The endpoint should specify the pulsar protocol and port.
 */
export type TheEndpointToWhichThePulsarClientShouldConnectTo = string;
/**
 * If the field does not exist in the log event or metric tags, a blank value will be used.
 *
 * If omitted, the key is not sent.
 *
 * Pulsar uses a hash of the key to choose the topic-partition or uses round-robin if the record has no key.
 */
export type TheLogFieldNameOrTagsKeyToUseForThePartitionKey = null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type VectorLookupLookupV2OptionalPathOptionalTargetPath = string;
/**
 * If omitted, no properties will be written.
 */
export type TheLogFieldNameToUseForThePulsarPropertiesKey = null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
/**
 * This resembles a deque, where messages can be popped and pushed from either end.
 *
 * This is the default.
 */
export type TheRedisListType = 'list';
/**
 * Redis channels function in a pub/sub fashion, allowing many-to-many broadcasting and receiving.
 */
export type TheRedisChannelType = 'channel';
/**
 * The URL _must_ take the form of `protocol://server:port/db` where the protocol can either be
 * `redis` or `rediss` for connections secured via TLS.
 */
export type TheURLOfTheRedisEndpointToConnectTo = string;
/**
 * This pushes messages onto the tail of the list.
 *
 * This is the default.
 */
export type UseTheRpushMethod = 'rpush';
/**
 * This pushes messages onto the head of the list.
 */
export type UseTheLpushMethod = 'lpush';
/**
 * Setting this option overrides the `region` option.
 */
export type TheEndpointToSendDataTo3 = string | null;
/**
 * This namespace is only used if a metric has no existing namespace. When a namespace is
 * present, it is used as a prefix to the metric name, and separated with a period (`.`).
 */
export type SetsTheDefaultNamespaceForAnyMetricsSent2 = string;
/**
 * Setting this option overrides the `region` option.
 */
export type TheEndpointToSendDataTo4 = string | null;
/**
 * Both IP address and hostname are accepted formats.
 *
 * The address _must_ include a port.
 */
export type TheAddressToConnectTo = string;
/**
 * If set, the value of the setting is passed via the `SO_SNDBUF` option.
 */
export type TheSizeOfTheSocketSSendBuffer = number | null;
/**
 * A file path.
 */
export type TheUnixSocketPath = string;
/**
 * [splunk_indexer_ack_docs]: https://docs.splunk.com/Documentation/Splunk/8.2.3/Data/AboutHECIDXAck
 */
export type ControlsIfTheSinkIntegratesWithSplunkHECIndexerAcknowledgementsSplunkIndexerAckDocsForEndToEndAcknowledgements =
  boolean;
/**
 * Once reached, the sink begins applying backpressure.
 */
export type TheMaximumNumberOfPendingAcknowledgementsFromEventsSentToTheSplunkHECCollector = number;
/**
 * This option is only relevant to Splunk v8.x and above, and is only applied when
 * `endpoint_target` is set to `event`.
 *
 * Setting this to `true` causes Splunk to extract the timestamp from the message text
 * rather than use the timestamp embedded in the event. The timestamp must be in the format
 * `yyyy-mm-dd hh:mm:ss`.
 */
export type PassesTheAutoExtractTimestampOptionToSplunk = boolean | null;
/**
 * Wrapper for sensitive strings containing credentials
 */
export type DefaultSplunkHECToken = string;
/**
 * The scheme (`http` or `https`) must be specified. No path should be included since the paths defined
 * by the [`Splunk`][splunk] API are used.
 *
 * [splunk]: https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/HECRESTendpoints
 */
export type TheBaseURLOfTheSplunkInstance = string;
/**
 * When the raw endpoint is used, configured [event metadata][event_metadata_docs] is sent as
 * query parameters on the request, except for the `timestamp` field.
 *
 * [raw_endpoint_docs]: https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fraw
 * [event_metadata_docs]: https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata
 */
export type EventsAreSentToTheRawEndpointRawEndpointDocs = 'raw';
/**
 * When the event endpoint is used, configured [event metadata][event_metadata_docs] is sent
 * directly with each event.
 *
 * [event_endpoint_docs]: https://docs.splunk.com/Documentation/Splunk/8.0.0/RESTREF/RESTinput#services.2Fcollector.2Fevent
 * [event_metadata_docs]: https://docs.splunk.com/Documentation/Splunk/latest/Data/FormateventsforHTTPEventCollector#Event_metadata
 */
export type EventsAreSentToTheEventEndpointEventEndpointDocs = 'event';
/**
 * By default, the [global `log_schema.host_key` option][global_host_key] is used if log
 * events are Legacy namespaced, or the semantic meaning of "host" is used, if defined.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToSplunkHEC =
  null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
/**
 * If not specified, the default index defined within Splunk is used.
 */
export type TheNameOfTheIndexToSendEventsTo = null | ATemplatedField;
/**
 * [splunk_field_index_docs]: https://docs.splunk.com/Documentation/Splunk/8.0.0/Data/IFXandHEC
 */
export type FieldsToBeAddedToSplunkIndexSplunkFieldIndexDocs = VectorLookupLookupV2ConfigValuePath[];
/**
 * If unset, Splunk defaults to `httpevent`.
 */
export type TheSourcetypeOfEventsSentToThisSink = null | ATemplatedField;
/**
 * By default, either the [global `log_schema.timestamp_key` option][global_timestamp_key] is used
 * if log events are Legacy namespaced, or the semantic meaning of "timestamp" is used, if defined.
 *
 * [global_timestamp_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.timestamp_key
 */
export type OverridesTheNameOfTheLogFieldUsedToRetrieveTheTimestampToSendToSplunkHECWhenSetToATimestampIsNotSetInTheEventsSentToSplunkHEC =
  null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToSplunkHEC1 = string;
/**
 * If not specified, the default index defined within Splunk is used.
 */
export type TheNameOfTheIndexWhereToSendTheEventsTo = null | ATemplatedField;
/**
 * Both IP address and hostname are accepted formats.
 *
 * The address _must_ include a port.
 */
export type TheDownstreamVectorAddressToWhichToConnect = string;
/**
 * If set to `true`, requests are compressed with [`gzip`][gzip_docs].
 *
 * [gzip_docs]: https://www.gzip.org/
 */
export type WhetherOrNotToCompressRequests = boolean;
/**
 * The endpoint is the HDFS's web restful HTTP API endpoint.
 *
 * For more information, see the [HDFS Architecture][hdfs_arch] documentation.
 *
 * [hdfs_arch]: https://hadoop.apache.org/docs/r3.3.4/hadoop-project-dist/hadoop-hdfs/HdfsDesign.html#NameNode_and_DataNodes
 */
export type AnHDFSClusterConsistsOfASingleNameNodeAMasterServerThatManagesTheFileSystemNamespaceAndRegulatesAccessToFilesByClients =
  string;
/**
 * Prefixes are useful for partitioning objects, such as by creating a blob key that
 * stores blobs under a particular directory. If using a prefix for this purpose, it must end
 * in `/` to act as a directory path. A trailing `/` is **not** automatically added.
 *
 * The final file path is in the format of `{root}/{prefix}{suffix}`.
 */
export type APrefixToApplyToAllKeys = string;
/**
 * Must be a valid directory.
 *
 * The final file path is in the format of `{root}/{prefix}{suffix}`.
 */
export type TheRootPathForWebHDFS = string;
/**
 * If this option is not configured, pings are not sent on an interval.
 *
 * If the `ping_timeout` is not set, pings are still sent but there is no expectation of pong
 * response times.
 *
 * [ping]: https://www.rfc-editor.org/rfc/rfc6455#section-5.5.2
 */
export type TheIntervalInSecondsBetweenSendingPingPingSToTheRemotePeer = number | null;
/**
 * If a response is not received within this time, the connection is re-established.
 *
 * [pong]: https://www.rfc-editor.org/rfc/rfc6455#section-5.5.3
 */
export type TheNumberOfSecondsToWaitForAPongPongResponseFromTheRemotePeer = number | null;
/**
 * This should include the protocol and host, but can also include the port, path, and any other valid part of a URI.
 */
export type TheWebSocketURIToConnectTo = string;
/**
 * Fully resolved source component.
 */
export type VectorConfigSourceSourceOuter =
  | ({
      graph?: ExtraGraphConfiguration1;
      proxy?: ProxyConfiguration2;
      [k: string]: unknown | undefined;
    } & (
      | (ConfigurationForTheAmqpSource & {
          /**
           * Collect events from AMQP 0.9.1 compatible brokers like RabbitMQ.
           */
          type: 'amqp';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesApacheMetricsApacheMetricsConfig & {
          /**
           * Collect metrics from Apache's HTTPD server.
           */
          type: 'apache_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesAwsEcsMetricsAwsEcsMetricsSourceConfig & {
          /**
           * Collect Docker container stats for tasks running in AWS ECS and AWS Fargate.
           */
          type: 'aws_ecs_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesAwsKinesisFirehoseAwsKinesisFirehoseConfig & {
          /**
           * Collect logs from AWS Kinesis Firehose.
           */
          type: 'aws_kinesis_firehose';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource2;
          assume_role?: TheARNOfAnIAMRoleIamRoleToAssumeAtStartup;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          /**
           * The compression scheme used for decompressing objects retrieved from S3.
           */
          compression?: AutomaticallyAttemptToDetermineTheCompressionScheme | 'none' | 'gzip' | 'zstd';
          /**
           * Configures how events are decoded from raw bytes.
           */
          decoding?:
            | {
                /**
                 * Uses the raw bytes as-is.
                 */
                codec: 'bytes';
                [k: string]: unknown | undefined;
              }
            | DecodesTheRawBytesAsJSONJson
            | DecodesTheRawBytesAsProtobufProtobuf
            | DecodesTheRawBytesAsASyslogMessage
            | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
            | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
            | DecodesTheRawBytesAsAGELFGelfMessage
            | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
            | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
            | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
          framing?: FramingConfiguration;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          multiline?: MultilineAggregationConfiguration;
          /**
           * Configuration options for SQS.
           */
          sqs?:
            | null
            | ({
                client_concurrency?: NumberOfConcurrentTasksToCreateForPollingTheQueueForMessages;
                delete_failed_message?: WhetherToDeleteNonRetryableMessages;
                delete_message?: WhetherToDeleteTheMessageOnceItIsProcessed;
                max_number_of_messages?: MaximumNumberOfMessagesToPollFromSQSInABatch;
                poll_secs?: HowLongToWaitWhilePollingTheQueueForNewMessagesInSeconds;
                /**
                 * The URL of the SQS queue to poll for bucket notifications.
                 */
                queue_url: string;
                /**
                 * TLS configuration.
                 */
                tls_options?: null | VectorCoreTlsSettingsTlsConfig;
                visibility_timeout_secs?: TheVisibilityTimeoutToUseForMessagesInSeconds;
                [k: string]: unknown | undefined;
              } & (null | {
                connect_timeout_seconds?: TheConnectionTimeoutForAWSRequests;
                operation_timeout_seconds?: TheOperationTimeoutForAWSRequests;
                read_timeout_seconds?: TheReadTimeoutForAWSRequests;
                [k: string]: unknown | undefined;
              }));
          /**
           * The strategy to use to consume objects from S3.
           */
          strategy?: ConsumesObjectsByProcessingBucketNotificationEventsSentToAnAWSSQSQueueAwsSqs;
          tls_options?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint6) & {
          /**
           * Collect logs from AWS S3.
           */
          type: 'aws_s3';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource3;
          /**
           * Configuration of the authentication strategy for interacting with AWS services.
           */
          auth?:
            | {
                /**
                 * The AWS access key ID.
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * The AWS secret access key.
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              };
          client_concurrency?: NumberOfConcurrentTasksToCreateForPollingTheQueueForMessages;
          /**
           * Configures how events are decoded from raw bytes.
           */
          decoding?:
            | {
                /**
                 * Uses the raw bytes as-is.
                 */
                codec: 'bytes';
                [k: string]: unknown | undefined;
              }
            | DecodesTheRawBytesAsJSONJson
            | DecodesTheRawBytesAsProtobufProtobuf
            | DecodesTheRawBytesAsASyslogMessage
            | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
            | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
            | DecodesTheRawBytesAsAGELFGelfMessage
            | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
            | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
            | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
          delete_message?: WhetherToDeleteTheMessageOnceItIsProcessed;
          framing?: FramingConfiguration;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          poll_secs?: HowLongToWaitWhilePollingTheQueueForNewMessagesInSeconds;
          /**
           * The URL of the SQS queue to poll for messages.
           */
          queue_url: string;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          visibility_timeout_secs?: TheVisibilityTimeoutToUseForMessagesInSeconds;
          [k: string]: unknown | undefined;
        } & VectorAwsRegionRegionOrEndpoint7) & {
          /**
           * Collect logs from AWS SQS.
           */
          type: 'aws_sqs';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesDatadogAgentDatadogAgentConfig & {
          /**
           * Receive logs, metrics, and traces collected by a Datadog Agent.
           */
          type: 'datadog_agent';
          [k: string]: unknown | undefined;
        })
      | (({
          count?: TheTotalNumberOfLinesToOutput;
          /**
           * Configures how events are decoded from raw bytes.
           */
          decoding?:
            | {
                /**
                 * Uses the raw bytes as-is.
                 */
                codec: 'bytes';
                [k: string]: unknown | undefined;
              }
            | DecodesTheRawBytesAsJSONJson
            | DecodesTheRawBytesAsProtobufProtobuf
            | DecodesTheRawBytesAsASyslogMessage
            | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
            | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
            | DecodesTheRawBytesAsAGELFGelfMessage
            | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
            | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
            | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
          framing?: FramingConfiguration;
          interval?: TheAmountOfTimeInSecondsToPauseBetweenEachBatchOfOutputLines;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          [k: string]: unknown | undefined;
        } & (
          | {
              /**
               * Lines are chosen at random from the list specified using `lines`.
               */
              format: 'shuffle';
              /**
               * The list of lines to output.
               */
              lines: string[];
              /**
               * If `true`, each output line starts with an increasing sequence number, beginning with 0.
               */
              sequence?: boolean;
              [k: string]: unknown | undefined;
            }
          | RandomlyGeneratedLogsInApacheCommonApacheCommonFormat
          | RandomlyGeneratedLogsInApacheErrorApacheErrorFormat
          | RandomlyGeneratedLogsInSyslogFormatRFC5424Syslog_5424
          | RandomlyGeneratedLogsInSyslogFormatRFC3164Syslog_3164
          | RandomlyGeneratedHTTPServerLogsInJSONJsonFormat
        )) & {
          /**
           * Generate fake log events, which can be useful for testing and demos.
           */
          type: 'demo_logs';
          [k: string]: unknown | undefined;
        })
      | (({
          host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheSourcePathToEachEvent;
          /**
           * The namespace to use for logs. This overrides the global settings.
           */
          log_namespace?: boolean | null;
          /**
           * Whether to downcase all DNSTAP hostnames received for consistency
           */
          lowercase_hostnames?: boolean;
          /**
           * Maximum number of frames that can be processed concurrently.
           */
          max_frame_handling_tasks?: number | null;
          max_frame_length?: MaximumDNSTAPFrameLengthThatTheSourceAccepts;
          /**
           * Whether or not to concurrently process DNSTAP frames.
           */
          multithreaded?: boolean | null;
          raw_data_only?: WhetherOrNotToSkipParsingOrDecodingOfDNSTAPFrames;
          [k: string]: unknown | undefined;
        } & (
          | ({
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * The maximum number of TCP connections that are allowed at any given time.
               */
              connection_limit?: number | null;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              max_connection_duration_secs?: MaximumDurationToKeepEachConnectionOpenConnectionsOpenForLongerThanThisDurationAreClosed;
              permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
              port_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostSPortToEachEvent;
              /**
               * The size of the receive buffer used for each connection.
               */
              receive_buffer_bytes?: number | null;
              /**
               * The timeout before a connection is forcefully closed during shutdown.
               */
              shutdown_timeout_secs?: number;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on TCP.
               */
              mode: 'tcp';
              [k: string]: unknown | undefined;
            })
          | ({
              socket_file_mode?: UnixFileModeBitsToBeAppliedToTheUnixSocketFileAsItsDesignatedFilePermissions;
              socket_path: AbsolutePathToTheSocketFileToReadDNSTAPDataFrom;
              socket_receive_buffer_size?: TheSizeInBytesOfTheReceiveBufferUsedForTheSocket;
              socket_send_buffer_size?: TheSizeInBytesOfTheSendBufferUsedForTheSocket;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on a Unix domain socket
               */
              mode: 'unix';
              [k: string]: unknown | undefined;
            })
        )) & {
          /**
           * Collect DNS logs from a dnstap-compatible server.
           */
          type: 'dnstap';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesDockerLogsDockerLogsConfig & {
          /**
           * Collect container logs from a Docker Daemon.
           */
          type: 'docker_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesEventstoredbMetricsEventStoreDbConfig & {
          /**
           * Receive metrics from collected by a EventStoreDB.
           */
          type: 'eventstoredb_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesExecExecConfig & {
          /**
           * Collect output from a process running on the host.
           */
          type: 'exec';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesFileFileConfig & {
          /**
           * Collect logs from files.
           */
          type: 'file';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesFileDescriptorsFileDescriptorFileDescriptorSourceConfig & {
          /**
           * Collect logs from a file descriptor.
           */
          type: 'file_descriptor';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesFluentFluentConfig & {
          /**
           * Collect logs from a Fluentd or Fluent Bit agent.
           */
          type: 'fluent';
          [k: string]: unknown | undefined;
        })
      | (({
          ack_deadline_seconds?: TheAcknowledgementDeadlineInSecondsToUseForThisStream;
          ack_deadline_secs?: TheAcknowledgementDeadlineInSecondsToUseForThisStream1;
          acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource7;
          /**
           * Configures how events are decoded from raw bytes.
           */
          decoding?:
            | {
                /**
                 * Uses the raw bytes as-is.
                 */
                codec: 'bytes';
                [k: string]: unknown | undefined;
              }
            | DecodesTheRawBytesAsJSONJson
            | DecodesTheRawBytesAsProtobufProtobuf
            | DecodesTheRawBytesAsASyslogMessage
            | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
            | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
            | DecodesTheRawBytesAsAGELFGelfMessage
            | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
            | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
            | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
          /**
           * The endpoint from which to pull data.
           */
          endpoint?: string;
          framing?: FramingConfiguration;
          full_response_size?: TheNumberOfMessagesInAResponseToMarkAStreamAsBusyThisIsUsedToDetermineIfMoreStreamsShouldBeStarted;
          /**
           * The amount of time, in seconds, with no received activity
           * before sending a keepalive request. If this is set larger than
           * `60`, you may see periodic errors sent from the server.
           */
          keepalive_secs?: number;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          /**
           * The maximum number of concurrent stream connections to open at once.
           */
          max_concurrency?: number;
          /**
           * How often to poll the currently active streams to see if they
           * are all busy and so open a new stream.
           */
          poll_time_seconds?: number;
          /**
           * The project name from which to pull logs.
           */
          project: string;
          /**
           * @deprecated
           * The amount of time, in seconds, to wait between retry attempts after an error.
           */
          retry_delay_seconds?: number | null;
          /**
           * The amount of time, in seconds, to wait between retry attempts after an error.
           */
          retry_delay_secs?: number;
          /**
           * The subscription within the project which is configured to receive logs.
           */
          subscription: string;
          tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
          [k: string]: unknown | undefined;
        } & VectorGcpGcpAuthConfig5) & {
          /**
           * Fetch observability events from GCP's Pub/Sub messaging system.
           */
          type: 'gcp_pubsub';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesHerokuLogsLogplexConfig & {
          /**
           * Collect logs from Heroku's Logplex, the router responsible for receiving logs from your Heroku apps.
           */
          type: 'heroku_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesHostMetricsHostMetricsConfig & {
          /**
           * Collect metric data from the local system.
           */
          type: 'host_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesHttpServerHttpConfig & {
          /**
           * Host an HTTP endpoint to receive logs.
           */
          type: 'http';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesHttpClientClientHttpClientConfig & {
          /**
           * Pull observability data from an HTTP server at a configured interval.
           */
          type: 'http_client';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesHttpServerSimpleHttpConfig & {
          /**
           * Host an HTTP endpoint to receive logs.
           */
          type: 'http_server';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesInternalLogsInternalLogsConfig & {
          /**
           * Expose internal log messages emitted by the running Vector instance.
           */
          type: 'internal_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesInternalMetricsInternalMetricsConfig & {
          /**
           * Expose internal metrics emitted by the running Vector instance.
           */
          type: 'internal_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesJournaldJournaldConfig & {
          /**
           * Collect logs from JournalD.
           */
          type: 'journald';
          [k: string]: unknown | undefined;
        })
      | (({
          acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource11;
          auto_offset_reset?: IfOffsetsForConsumerGroupDoNotExistSetThemUsingThisStrategy;
          bootstrap_servers: ACommaSeparatedListOfKafkaBootstrapServers;
          /**
           * The frequency that the consumer offsets are committed (written) to offset storage.
           */
          commit_interval_ms?: number;
          /**
           * Configures how events are decoded from raw bytes.
           */
          decoding?:
            | {
                /**
                 * Uses the raw bytes as-is.
                 */
                codec: 'bytes';
                [k: string]: unknown | undefined;
              }
            | DecodesTheRawBytesAsJSONJson
            | DecodesTheRawBytesAsProtobufProtobuf
            | DecodesTheRawBytesAsASyslogMessage
            | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
            | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
            | DecodesTheRawBytesAsAGELFGelfMessage
            | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
            | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
            | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
          drain_timeout_ms?: TimeoutToDrainPendingAcknowledgementsDuringShutdownOrAKafkaConsumerGroupRebalance;
          /**
           * Maximum time the broker may wait to fill the response.
           */
          fetch_wait_max_ms?: number;
          framing?: FramingConfiguration;
          /**
           * The consumer group name to be used to consume events from Kafka.
           */
          group_id: string;
          headers_key?: OverridesTheNameOfTheLogFieldUsedToAddTheHeadersToEachEvent;
          key_field?: OverridesTheNameOfTheLogFieldUsedToAddTheMessageKeyToEachEvent;
          librdkafka_options?: AdvancedOptionsSetDirectlyOnTheUnderlyingLibrdkafkaClient;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          /**
           * Metrics (beta) configuration.
           */
          metrics?: {
            /**
             * Expose topic lag metrics for all topics and partitions. Metric names are `kafka_consumer_lag`.
             */
            topic_lag_metric: boolean;
            [k: string]: unknown | undefined;
          };
          offset_key?: OverridesTheNameOfTheLogFieldUsedToAddTheOffsetToEachEvent;
          partition_key?: OverridesTheNameOfTheLogFieldUsedToAddThePartitionToEachEvent;
          /**
           * The Kafka session timeout.
           */
          session_timeout_ms?: number;
          /**
           * Timeout for network requests.
           */
          socket_timeout_ms?: number;
          topic_key?: OverridesTheNameOfTheLogFieldUsedToAddTheTopicToEachEvent;
          topics: TheKafkaTopicsNamesToReadEventsFrom;
          [k: string]: unknown | undefined;
        } & VectorKafkaKafkaAuthConfig1) & {
          /**
           * Collect logs from Apache Kafka.
           */
          type: 'kafka';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesKubernetesLogsConfig & {
          /**
           * Collect Pod logs from Kubernetes Nodes.
           */
          type: 'kubernetes_logs';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesLogstashLogstashConfig & {
          /**
           * Collect logs from a Logstash agent.
           */
          type: 'logstash';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesMongodbMetricsMongoDbMetricsConfig & {
          /**
           * Collect metrics from the MongoDB database.
           */
          type: 'mongodb_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesNatsNatsSourceConfig & {
          /**
           * Read observability data from subjects on the NATS messaging system.
           */
          type: 'nats';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesNginxMetricsNginxMetricsConfig & {
          /**
           * Collect metrics from NGINX.
           */
          type: 'nginx_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesOpentelemetryOpentelemetryConfig & {
          /**
           * Receive OTLP data through gRPC or HTTP.
           */
          type: 'opentelemetry';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesPostgresqlMetricsPostgresqlMetricsConfig & {
          /**
           * Collect metrics from the PostgreSQL database.
           */
          type: 'postgresql_metrics';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesPrometheusPushgatewayPrometheusPushgatewayConfig & {
          /**
           * Receive metrics via the Prometheus Pushgateway protocol.
           */
          type: 'prometheus_pushgateway';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesPrometheusRemoteWritePrometheusRemoteWriteConfig & {
          /**
           * Receive metric via the Prometheus Remote Write protocol.
           */
          type: 'prometheus_remote_write';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesPrometheusScrapePrometheusScrapeConfig & {
          /**
           * Collect metrics from Prometheus exporters.
           */
          type: 'prometheus_scrape';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesPulsarPulsarSourceConfig & {
          /**
           * Collect logs from Apache Pulsar.
           */
          type: 'pulsar';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesRedisRedisSourceConfig & {
          /**
           * Collect observability data from Redis.
           */
          type: 'redis';
          [k: string]: unknown | undefined;
        })
      | ((
          | ({
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * The maximum number of TCP connections that are allowed at any given time.
               */
              connection_limit?: number | null;
              /**
               * Configures how events are decoded from raw bytes.
               */
              decoding?:
                | {
                    /**
                     * Uses the raw bytes as-is.
                     */
                    codec: 'bytes';
                    [k: string]: unknown | undefined;
                  }
                | DecodesTheRawBytesAsJSONJson
                | DecodesTheRawBytesAsProtobufProtobuf
                | DecodesTheRawBytesAsASyslogMessage
                | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
                | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
                | DecodesTheRawBytesAsAGELFGelfMessage
                | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
                | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
                | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
              framing?: FramingConfiguration6;
              host_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              /**
               * The namespace to use for logs. This overrides the global setting.
               */
              log_namespace?: boolean | null;
              max_connection_duration_secs?: MaximumDurationToKeepEachConnectionOpenConnectionsOpenForLongerThanThisDurationAreClosed;
              permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
              port_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostSPortToEachEvent;
              /**
               * The size of the receive buffer used for each connection.
               */
              receive_buffer_bytes?: number | null;
              /**
               * The timeout before a connection is forcefully closed during shutdown.
               */
              shutdown_timeout_secs?: number;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on TCP.
               */
              mode: 'tcp';
              [k: string]: unknown | undefined;
            })
          | ({
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * Configures how events are decoded from raw bytes.
               */
              decoding?:
                | {
                    /**
                     * Uses the raw bytes as-is.
                     */
                    codec: 'bytes';
                    [k: string]: unknown | undefined;
                  }
                | DecodesTheRawBytesAsJSONJson
                | DecodesTheRawBytesAsProtobufProtobuf
                | DecodesTheRawBytesAsASyslogMessage
                | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
                | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
                | DecodesTheRawBytesAsAGELFGelfMessage
                | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
                | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
                | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
              framing?: FramingConfiguration6;
              host_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent;
              /**
               * The namespace to use for logs. This overrides the global setting.
               */
              log_namespace?: boolean | null;
              max_length?: TheMaximumBufferSizeOfIncomingMessages;
              port_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostSPortToEachEvent;
              /**
               * The size of the receive buffer used for the listening socket.
               */
              receive_buffer_bytes?: number | null;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on UDP.
               */
              mode: 'udp';
              [k: string]: unknown | undefined;
            })
          | ({
              /**
               * Configures how events are decoded from raw bytes.
               */
              decoding?:
                | {
                    /**
                     * Uses the raw bytes as-is.
                     */
                    codec: 'bytes';
                    [k: string]: unknown | undefined;
                  }
                | DecodesTheRawBytesAsJSONJson
                | DecodesTheRawBytesAsProtobufProtobuf
                | DecodesTheRawBytesAsASyslogMessage
                | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
                | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
                | DecodesTheRawBytesAsAGELFGelfMessage
                | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
                | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
                | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
              framing?: FramingConfiguration15;
              host_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent2;
              /**
               * The namespace to use for logs. This overrides the global setting.
               */
              log_namespace?: boolean | null;
              path: TheUnixSocketPath;
              socket_file_mode?: UnixFileModeBitsToBeAppliedToTheUnixSocketFileAsItsDesignatedFilePermissions;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on a Unix domain socket (UDS), in datagram mode.
               */
              mode: 'unix_datagram';
              [k: string]: unknown | undefined;
            })
          | ({
              /**
               * Configures how events are decoded from raw bytes.
               */
              decoding?:
                | {
                    /**
                     * Uses the raw bytes as-is.
                     */
                    codec: 'bytes';
                    [k: string]: unknown | undefined;
                  }
                | DecodesTheRawBytesAsJSONJson
                | DecodesTheRawBytesAsProtobufProtobuf
                | DecodesTheRawBytesAsASyslogMessage
                | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
                | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
                | DecodesTheRawBytesAsAGELFGelfMessage
                | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
                | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
                | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
              framing?: FramingConfiguration16;
              host_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent3;
              /**
               * The namespace to use for logs. This overrides the global setting.
               */
              log_namespace?: boolean | null;
              path: TheUnixSocketPath;
              socket_file_mode?: UnixFileModeBitsToBeAppliedToTheUnixSocketFileAsItsDesignatedFilePermissions;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on a Unix domain socket (UDS), in stream mode.
               */
              mode: 'unix_stream';
              [k: string]: unknown | undefined;
            })
        ) & {
          /**
           * Collect logs over a socket.
           */
          type: 'socket';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesSplunkHecSplunkConfig & {
          /**
           * Receive logs from Splunk.
           */
          type: 'splunk_hec';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesStaticMetricsStaticMetricsConfig & {
          /**
           * Produce static metrics defined in configuration.
           */
          type: 'static_metrics';
          [k: string]: unknown | undefined;
        })
      | ((
          | ({
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * The maximum number of TCP connections that are allowed at any given time.
               */
              connection_limit?: number | null;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
              /**
               * The size of the receive buffer used for each connection.
               */
              receive_buffer_bytes?: number | null;
              /**
               * Whether or not to sanitize incoming statsd key names. When "true", keys are sanitized by:
               * - "/" is replaced with "-"
               * - All whitespace is replaced with "_"
               * - All non alphanumeric characters (A-Z, a-z, 0-9, _, or -) are removed.
               */
              sanitize?: boolean;
              /**
               * The timeout before a connection is forcefully closed during shutdown.
               */
              shutdown_timeout_secs?: number;
              /**
               * TlsEnableableConfig for `sources`, adding metadata from the client certificate.
               */
              tls?:
                | null
                | ({
                    /**
                     * Event field for client certificate metadata.
                     */
                    client_metadata_key?: null | VectorLookupLookupV2OptionalPathOptionalValuePath;
                    [k: string]: unknown | undefined;
                  } & ({
                    enabled?: WhetherOrNotToRequireTLSForIncomingOrOutgoingConnections;
                    [k: string]: unknown | undefined;
                  } & VectorCoreTlsSettingsTlsConfig1));
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on TCP.
               */
              mode: 'tcp';
              [k: string]: unknown | undefined;
            })
          | ({
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * The size of the receive buffer used for each connection.
               */
              receive_buffer_bytes?: number | null;
              sanitize?: boolean;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on UDP.
               */
              mode: 'udp';
              [k: string]: unknown | undefined;
            })
          | ({
              path: TheUnixSocketPath;
              sanitize?: boolean;
              [k: string]: unknown | undefined;
            } & {
              /**
               * Listen on a Unix domain Socket (UDS).
               */
              mode: 'unix';
              [k: string]: unknown | undefined;
            })
        ) & {
          /**
           * Collect metrics emitted by the StatsD aggregator.
           */
          type: 'statsd';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesFileDescriptorsStdinStdinConfig & {
          /**
           * Collect logs sent via stdin.
           */
          type: 'stdin';
          [k: string]: unknown | undefined;
        })
      | (({
          host_key?: OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent;
          /**
           * The namespace to use for logs. This overrides the global setting.
           */
          log_namespace?: boolean | null;
          max_length?: TheMaximumBufferSizeOfIncomingMessagesInBytes;
          [k: string]: unknown | undefined;
        } & (
          | {
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * The maximum number of TCP connections that are allowed at any given time.
               */
              connection_limit?: number | null;
              keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
              /**
               * Listen on TCP.
               */
              mode: 'tcp';
              permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
              receive_buffer_bytes?: TheSizeOfTheReceiveBufferUsedForEachConnection;
              tls?: CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig;
              [k: string]: unknown | undefined;
            }
          | {
              address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
              /**
               * Listen on UDP.
               */
              mode: 'udp';
              receive_buffer_bytes?: TheSizeOfTheReceiveBufferUsedForTheListeningSocket;
              [k: string]: unknown | undefined;
            }
          | ListenOnUDSUnixDomainSocketThisOnlySupportsUnixStreamSockets
        )) & {
          /**
           * Collect logs sent via Syslog.
           */
          type: 'syslog';
          [k: string]: unknown | undefined;
        })
      | (VectorConfigUnitTestUnitTestComponentsUnitTestSourceConfig & {
          /**
           * Unit test.
           */
          type: 'unit_test';
          [k: string]: unknown | undefined;
        })
      | (VectorConfigUnitTestUnitTestComponentsUnitTestStreamSourceConfig & {
          /**
           * Unit test stream.
           */
          type: 'unit_test_stream';
          [k: string]: unknown | undefined;
        })
      | (VectorSourcesVectorVectorConfig & {
          /**
           * Collect observability data from a Vector instance.
           */
          type: 'vector';
          [k: string]: unknown | undefined;
        })
    ))
  | undefined;
/**
 * Supports AMQP version 0.9.1
 */
export type ConfigurationForTheAmqpSource = {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource;
  /**
   * The identifier for the consumer.
   */
  consumer?: string;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  exchange_key?: string;
  framing?: FramingConfiguration;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  offset_key?: string;
  /**
   * The name of the queue to consume.
   */
  queue?: string;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  routing_key_field?: string;
  [k: string]: unknown | undefined;
} & VectorAmqpAmqpConfig1;
/**
 * [json]: https://www.json.org/
 */
export type DecodesTheRawBytesAsJSONJson = {
  /**
   * JSON-specific decoding options.
   */
  json?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsJSONJson1;
  [k: string]: unknown | undefined;
};
/**
 * When true, invalid UTF-8 sequences are replaced with the [`U+FFFD REPLACEMENT CHARACTER`][U+FFFD].
 *
 * [U+FFFD]: https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character
 */
export type DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing = boolean;
/**
 * [json]: https://www.json.org/
 */
export type DecodesTheRawBytesAsJSONJson1 = 'json';
/**
 * [protobuf]: https://protobuf.dev/
 */
export type DecodesTheRawBytesAsProtobufProtobuf = {
  /**
   * Protobuf-specific decoding options.
   */
  protobuf?: {
    /**
     * A file path.
     */
    desc_file: string;
    /**
     * message type. e.g package.message
     */
    message_type: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsProtobufProtobuf1;
  [k: string]: unknown | undefined;
};
/**
 * [protobuf]: https://protobuf.dev/
 */
export type DecodesTheRawBytesAsProtobufProtobuf1 = 'protobuf';
/**
 * Decodes either as the [RFC 3164][rfc3164]-style format ("old" style) or the
 * [RFC 5424][rfc5424]-style format ("new" style, includes structured data).
 *
 * [rfc3164]: https://www.ietf.org/rfc/rfc3164.txt
 * [rfc5424]: https://www.ietf.org/rfc/rfc5424.txt
 */
export type DecodesTheRawBytesAsASyslogMessage = {
  /**
   * Syslog-specific decoding options.
   */
  syslog?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsASyslogMessage1;
  [k: string]: unknown | undefined;
};
/**
 * Decodes either as the [RFC 3164][rfc3164]-style format ("old" style) or the
 * [RFC 5424][rfc5424]-style format ("new" style, includes structured data).
 *
 * [rfc3164]: https://www.ietf.org/rfc/rfc3164.txt
 * [rfc5424]: https://www.ietf.org/rfc/rfc5424.txt
 */
export type DecodesTheRawBytesAsASyslogMessage1 = 'syslog';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf1 = 'native';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson = {
  /**
   * Vector's native JSON-specific decoding options.
   */
  native_json?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson1;
  [k: string]: unknown | undefined;
};
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson1 = 'native_json';
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's decoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export type DecodesTheRawBytesAsAGELFGelfMessage = {
  /**
   * GELF-specific decoding options.
   */
  gelf?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAGELFGelfMessage1;
  [k: string]: unknown | undefined;
};
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's decoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export type DecodesTheRawBytesAsAGELFGelfMessage1 = 'gelf';
/**
 * [influxdb]: https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol
 */
export type DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage = {
  /**
   * Influxdb-specific decoding options.
   */
  influxdb?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage1;
  [k: string]: unknown | undefined;
};
/**
 * [influxdb]: https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol
 */
export type DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage1 = 'influxdb';
/**
 * [apache_avro]: https://avro.apache.org/
 */
export type DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage1 = 'avro';
/**
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram = {
  /**
   * VRL-specific decoding options.
   */
  vrl: {
    source: TheVectorRemapLanguageVrlVRLProgramToExecuteForEachEventNoteThatTheFinalContentsOfTheTargetWillBeUsedAsTheDecodingResultCompilationErrorOrUseOfAbortInAProgramWillResultInADecodingError;
    timezone?: TheNameOfTheTimezoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZoneTheTimeZoneNameMayBeAnyNameInTheTZDatabaseTzDatabaseOrLocalToIndicateSystemLocalTime;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram1;
  [k: string]: unknown | undefined;
};
/**
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type TheVectorRemapLanguageVrlVRLProgramToExecuteForEachEventNoteThatTheFinalContentsOfTheTargetWillBeUsedAsTheDecodingResultCompilationErrorOrUseOfAbortInAProgramWillResultInADecodingError =
  string;
/**
 * If not set, `local` will be used.
 *
 * [tz_database]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type TheNameOfTheTimezoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZoneTheTimeZoneNameMayBeAnyNameInTheTZDatabaseTzDatabaseOrLocalToIndicateSystemLocalTime =
  null | TimezoneToUseForAnyDateSpecifiersInTemplateStrings1;
/**
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram1 = 'vrl';
/**
 * Framing handles how events are separated when encoded in a raw byte form, where each event is
 * a frame that must be prefixed, or delimited, in a way that marks where an event begins and
 * ends within the byte stream.
 */
export type FramingConfiguration =
  | {
      /**
       * Byte frames are passed through as-is according to the underlying I/O boundaries (for example, split between messages or stream segments).
       */
      method: 'bytes';
      [k: string]: unknown | undefined;
    }
  | ({
      /**
       * Options for the character delimited decoder.
       */
      character_delimited: {
        /**
         * The character that delimits byte sequences.
         */
        delimiter: number;
        max_length?: TheMaximumLengthOfTheByteBuffer;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are delimited by a chosen character.
       */
      method: 'character_delimited';
      [k: string]: unknown | undefined;
    })
  | ({
      length_delimited: CodecsCommonLengthDelimitedLengthDelimitedCoderOptions1;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are prefixed by an unsigned big-endian 32-bit integer indicating the length.
       */
      method: 'length_delimited';
      [k: string]: unknown | undefined;
    })
  | ({
      /**
       * Options for the newline delimited decoder.
       */
      newline_delimited?: {
        max_length?: TheMaximumLengthOfTheByteBuffer;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are delimited by a newline character.
       */
      method: 'newline_delimited';
      [k: string]: unknown | undefined;
    })
  | ByteFramesAccordingToTheOctetCountingOctetCountingFormat
  | ByteFramesWhichAreChunkedGELFMessages;
/**
 * This length does *not* include the trailing delimiter.
 *
 * By default, there is no maximum length enforced. If events are malformed, this can lead to
 * additional resource usage as events continue to be buffered in memory, and can potentially
 * lead to memory exhaustion in extreme cases.
 *
 * If there is a risk of processing malformed data, such as logs with user-controlled input,
 * consider setting the maximum length to a reasonably large value as a safety net. This
 * ensures that processing is not actually unbounded.
 */
export type TheMaximumLengthOfTheByteBuffer = number | null;
/**
 * [octet_counting]: https://tools.ietf.org/html/rfc6587#section-3.4.1
 */
export type ByteFramesAccordingToTheOctetCountingOctetCountingFormat = {
  /**
   * Options for the octet counting decoder.
   */
  octet_counting?: {
    /**
     * The maximum length of the byte buffer.
     */
    max_length?: number | null;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  method: ByteFramesAccordingToTheOctetCountingOctetCountingFormat1;
  [k: string]: unknown | undefined;
};
/**
 * [octet_counting]: https://tools.ietf.org/html/rfc6587#section-3.4.1
 */
export type ByteFramesAccordingToTheOctetCountingOctetCountingFormat1 = 'octet_counting';
/**
 * [chunked_gelf]: https://go2docs.graylog.org/current/getting_in_log_data/gelf.html
 */
export type ByteFramesWhichAreChunkedGELFMessages = {
  /**
   * Options for the chunked GELF decoder.
   */
  chunked_gelf?: {
    /**
     * Decompression configuration for GELF messages.
     */
    decompression?: 'Auto' | 'Gzip' | 'Zlib' | 'None';
    max_length?: TheMaximumLengthOfASingleGELFMessageInBytesMessagesLongerThanThisLengthWillBeDroppedIfThisOptionIsNotSetTheDecoderDoesNotLimitTheLengthOfMessagesAndThePerMessageMemoryIsUnbounded;
    /**
     * The maximum number of pending incomplete messages. If this limit is reached, the decoder starts
     * dropping chunks of new messages, ensuring the memory usage of the decoder's state is bounded.
     * If this option is not set, the decoder does not limit the number of pending messages and the memory usage
     * of its messages buffer can grow unbounded. This matches Graylog Server's behavior.
     */
    pending_messages_limit?: number | null;
    /**
     * The timeout, in seconds, for a message to be fully received. If the timeout is reached, the
     * decoder drops all the received chunks of the timed out message.
     */
    timeout_secs?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  method: ByteFramesWhichAreChunkedGELFMessages1;
  [k: string]: unknown | undefined;
};
/**
 * Note that a message can be composed of multiple chunks and this limit is applied to the whole
 * message, not to individual chunks.
 *
 * This limit takes only into account the message's payload and the GELF header bytes are excluded from the calculation.
 * The message's payload is the concatenation of all the chunks' payloads.
 */
export type TheMaximumLengthOfASingleGELFMessageInBytesMessagesLongerThanThisLengthWillBeDroppedIfThisOptionIsNotSetTheDecoderDoesNotLimitTheLengthOfMessagesAndThePerMessageMemoryIsUnbounded =
  number | null;
/**
 * [chunked_gelf]: https://go2docs.graylog.org/current/getting_in_log_data/gelf.html
 */
export type ByteFramesWhichAreChunkedGELFMessages1 = 'chunked_gelf';
/**
 * Disabled if empty.
 */
export type TheNamespaceOfTheMetric = string;
/**
 * If empty, the URI is automatically discovered based on the latest version detected.
 *
 * By default:
 * - The version 4 endpoint base URI is stored in the environment variable `ECS_CONTAINER_METADATA_URI_V4`.
 * - The version 3 endpoint base URI is stored in the environment variable `ECS_CONTAINER_METADATA_URI`.
 * - The version 2 endpoint base URI is `169.254.170.2/v2/`.
 */
export type BaseURIOfTheTaskMetadataEndpoint = string;
/**
 * If empty, the version is automatically discovered based on environment variables.
 *
 * By default:
 * - Version 4 is used if the environment variable `ECS_CONTAINER_METADATA_URI_V4` is defined.
 * - Version 3 is used if the environment variable `ECS_CONTAINER_METADATA_URI_V4` is not defined, but the
 *   environment variable `ECS_CONTAINER_METADATA_URI` _is_ defined.
 * - Version 2 is used if neither of the environment variables `ECS_CONTAINER_METADATA_URI_V4` or
 *   `ECS_CONTAINER_METADATA_URI` are defined.
 */
export type TheVersionOfTheTaskMetadataEndpointToUse = Version2 | Version3 | Version4;
/**
 * More information about version 2 of the task metadata endpoint can be found [here][endpoint_v2].
 *
 * [endpoint_v2]: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-metadata-endpoint-v2.html
 */
export type Version2 = 'v2';
/**
 * More information about version 3 of the task metadata endpoint can be found [here][endpoint_v3].
 *
 * [endpoint_v3]: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-metadata-endpoint-v3.html
 */
export type Version3 = 'v3';
/**
 * More information about version 4 of the task metadata endpoint can be found [here][endpoint_v4].
 *
 * [endpoint_v4]: https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-metadata-endpoint-v4.html
 */
export type Version4 = 'v4';
/**
 * AWS Kinesis Firehose can be configured to pass along a user-configurable access key with each request. If
 * configured, `access_key` should be set to the same value. Otherwise, all requests are allowed.
 */
export type AnAccessKeyToAuthenticateRequestsAgainst = null | VectorCommonSensitiveStringSensitiveString;
/**
 * AWS Kinesis Firehose can be configured to pass along a user-configurable access key with each request. If
 * configured, `access_keys` should be set to the same value. Otherwise, all requests are allowed.
 */
export type AListOfAccessKeysToAuthenticateRequestsAgainst = VectorCommonSensitiveStringSensitiveString[] | null;
/**
 * A value of 0.1 means that the actual duration will be between 90% and 110% of the
 * specified maximum duration.
 */
export type TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue = number;
/**
 * Only applies to HTTP/0.9, HTTP/1.0, and HTTP/1.1 requests.
 *
 * A random jitter configured by `max_connection_age_jitter_factor` is added
 * to the specified duration to spread out connection storms.
 */
export type TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature =
  number | null;
/**
 * Some services, like AWS CloudWatch Logs, [compresses the events with gzip][events_with_gzip],
 * before sending them AWS Kinesis Firehose. This option can be used to automatically decompress
 * them before forwarding them to the next component.
 *
 * Note that this is different from [Content encoding option][encoding_option] of the
 * Firehose HTTP endpoint destination. That option controls the content encoding of the entire HTTP request.
 *
 * [events_with_gzip]: https://docs.aws.amazon.com/firehose/latest/dev/writing-with-cloudwatch-logs.html
 * [encoding_option]: https://docs.aws.amazon.com/firehose/latest/dev/create-destination.html#create-destination-http
 */
export type TheCompressionSchemeToUseForDecompressingRecordsWithinTheFirehoseMessage =
  | AutomaticallyAttemptToDetermineTheCompressionScheme
  | 'none'
  | 'gzip';
/**
 * The compression scheme of the object is determined by looking at its file signature, also known
 * as [magic bytes][magic_bytes].
 *
 * If the record fails to decompress with the discovered format, the record is forwarded as is.
 * Thus, if you know the records are always gzip encoded (for example, if they are coming from AWS CloudWatch Logs),
 * set `gzip` in this field so that any records that are not-gzipped are rejected.
 *
 * [magic_bytes]: https://en.wikipedia.org/wiki/List_of_file_signatures
 */
export type AutomaticallyAttemptToDetermineTheCompressionScheme = 'auto';
/**
 * If set to `true`, when incoming requests contains an access key sent by AWS Firehose, it is kept in the
 * event secrets as "aws_kinesis_firehose_access_key".
 */
export type WhetherOrNotToStoreTheAWSFirehoseAccessKeyInEventSecrets = boolean;
/**
 * If not specified, multiline aggregation is disabled.
 */
export type MultilineAggregationConfiguration = null | {
  condition_pattern: RegularExpressionPatternThatIsUsedToDetermineWhetherOrNotMoreLinesShouldBeRead;
  mode: AggregationMode;
  /**
   * Regular expression pattern that is used to match the start of a new message.
   */
  start_pattern: string;
  timeout_ms: TheMaximumAmountOfTimeToWaitForTheNextAdditionalLineInMilliseconds;
  [k: string]: unknown | undefined;
};
/**
 * This setting must be configured in conjunction with `mode`.
 */
export type RegularExpressionPatternThatIsUsedToDetermineWhetherOrNotMoreLinesShouldBeRead = string;
/**
 * This setting must be configured in conjunction with `condition_pattern`.
 */
export type AggregationMode =
  | AllConsecutiveLinesMatchingThisPatternAreIncludedInTheGroup
  | AllConsecutiveLinesMatchingThisPatternPlusOneAdditionalLineAreIncludedInTheGroup
  | AllConsecutiveLinesNotMatchingThisPatternAreIncludedInTheGroup
  | AllConsecutiveLinesUpToAndIncludingTheFirstLineMatchingThisPatternAreIncludedInTheGroup;
/**
 * The first line (the line that matched the start pattern) does not need to match the `ContinueThrough` pattern.
 *
 * This is useful in cases such as a Java stack trace, where some indicator in the line (such as a leading
 * whitespace) indicates that it is an extension of the proceeding line.
 */
export type AllConsecutiveLinesMatchingThisPatternAreIncludedInTheGroup = 'continue_through';
/**
 * This is useful in cases where a log message ends with a continuation marker, such as a backslash, indicating
 * that the following line is part of the same message.
 */
export type AllConsecutiveLinesMatchingThisPatternPlusOneAdditionalLineAreIncludedInTheGroup = 'continue_past';
/**
 * This is useful where a log line contains a marker indicating that it begins a new message.
 */
export type AllConsecutiveLinesNotMatchingThisPatternAreIncludedInTheGroup = 'halt_before';
/**
 * This is useful where a log line ends with a termination marker, such as a semicolon.
 */
export type AllConsecutiveLinesUpToAndIncludingTheFirstLineMatchingThisPatternAreIncludedInTheGroup = 'halt_with';
/**
 * Once this timeout is reached, the buffered message is guaranteed to be flushed, even if incomplete.
 */
export type TheMaximumAmountOfTimeToWaitForTheNextAdditionalLineInMilliseconds = number;
/**
 * Defaults to the number of available CPUs on the system.
 *
 * Should not typically need to be changed, but it can sometimes be beneficial to raise this
 * value when there is a high rate of messages being pushed into the queue and the objects
 * being fetched are small. In these cases, system resources may not be fully utilized without
 * fetching more messages per second, as the SQS message consumption rate affects the S3 object
 * retrieval rate.
 */
export type NumberOfConcurrentTasksToCreateForPollingTheQueueForMessages = number | null;
/**
 * If a message is rejected by the sink and not retryable, it is deleted from the queue.
 */
export type WhetherToDeleteNonRetryableMessages = boolean;
/**
 * It can be useful to set this to `false` for debugging or during the initial setup.
 */
export type WhetherToDeleteTheMessageOnceItIsProcessed = boolean;
/**
 * Defaults to 10
 *
 * Should be set to a smaller value when the files are large to help prevent the ingestion of
 * one file from causing the other files to exceed the visibility_timeout. Valid values are 1 - 10
 */
export type MaximumNumberOfMessagesToPollFromSQSInABatch = number;
/**
 * Generally, this should not be changed unless instructed to do so, as if messages are available,
 * they are always consumed, regardless of the value of `poll_secs`.
 */
export type HowLongToWaitWhilePollingTheQueueForNewMessagesInSeconds = number;
/**
 * This controls how long a message is left unavailable after it is received. If a message is received, and
 * takes longer than `visibility_timeout_secs` to process and delete the message from the queue, it is made available again for another consumer.
 *
 * This can happen if there is an issue between consuming a message and deleting it.
 */
export type TheVisibilityTimeoutToUseForMessagesInSeconds = number;
/**
 * Limits the amount of time allowed to initiate a socket connection.
 */
export type TheConnectionTimeoutForAWSRequests = number | null;
/**
 * Limits the amount of time allowed for an operation to be fully serviced; an
 * operation represents the full request/response lifecycle of a call to a service.
 * Take care when configuring this settings to allow enough time for the polling
 * interval configured in `poll_secs`
 */
export type TheOperationTimeoutForAWSRequests = number | null;
/**
 * Limits the amount of time allowed to read the first byte of a response from the
 * time the request is initiated. Take care when configuring this settings to allow
 * enough time for the polling interval configured in `poll_secs`
 */
export type TheReadTimeoutForAWSRequests = number | null;
/**
 * [aws_sqs]: https://aws.amazon.com/sqs/
 */
export type ConsumesObjectsByProcessingBucketNotificationEventsSentToAnAWSSQSQueueAwsSqs = 'sqs';
/**
 * It _must_ include a port.
 */
export type TheSocketAddressToAcceptConnectionsOn = string;
/**
 * For a source component named `agent`, the received logs, metrics (beta), and traces (alpha) can then be
 * configured as input to other components by specifying `agent.logs`, `agent.metrics`, and
 * `agent.traces`, respectively.
 */
export type IfThisIsSetToTrueLogsMetricsBetaAndTracesAlphaAreSentToDifferentOutputs = boolean;
/**
 * By default, the source continuously prints logs (infinitely).
 */
export type TheTotalNumberOfLinesToOutput = number;
/**
 * The default is one batch per second. To remove the delay and output batches as quickly as possible, set
 * `interval` to `0.0`.
 */
export type TheAmountOfTimeInSecondsToPauseBetweenEachBatchOfOutputLines = number;
/**
 * [apache_common]: https://httpd.apache.org/docs/current/logs.html#common
 */
export type RandomlyGeneratedLogsInApacheCommonApacheCommonFormat1 = 'apache_common';
/**
 * [apache_error]: https://httpd.apache.org/docs/current/logs.html#errorlog
 */
export type RandomlyGeneratedLogsInApacheErrorApacheErrorFormat1 = 'apache_error';
/**
 * [syslog_5424]: https://tools.ietf.org/html/rfc5424
 */
export type RandomlyGeneratedLogsInSyslogFormatRFC5424Syslog_54241 = 'syslog';
/**
 * [syslog_3164]: https://tools.ietf.org/html/rfc3164
 */
export type RandomlyGeneratedLogsInSyslogFormatRFC3164Syslog_31641 = 'bsd_syslog';
/**
 * [json]: https://en.wikipedia.org/wiki/JSON
 */
export type RandomlyGeneratedHTTPServerLogsInJSONJsonFormat1 = 'json';
/**
 * The value is the socket path itself.
 *
 * By default, the [global `log_schema.host_key` option][global_host_key] is used.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheSourcePathToEachEvent =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * If any frame is longer than this, it is discarded.
 */
export type MaximumDNSTAPFrameLengthThatTheSourceAccepts = number;
/**
 * If set to `true`, frames are not parsed or decoded. The raw frame data is set as a field on the event
 * (called `rawData`) and encoded as a base64 string.
 */
export type WhetherOrNotToSkipParsingOrDecodingOfDNSTAPFrames = boolean | null;
/**
 * If a socket address is used, it _must_ include a port.
 */
export type TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation = string;
/**
 * This is helpful for load balancing long-lived connections.
 */
export type MaximumDurationToKeepEachConnectionOpenConnectionsOpenForLongerThanThisDurationAreClosed = number | null;
/**
 * List of allowed origin IP networks. IP addresses must be in CIDR notation.
 */
export type CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig = null | string[];
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddThePeerHostSPortToEachEvent = string;
/**
 * TlsEnableableConfig for `sources`, adding metadata from the client certificate.
 */
export type CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig =
  | null
  | ({
      /**
       * Event field for client certificate metadata.
       */
      client_metadata_key?: null | VectorLookupLookupV2OptionalPathOptionalValuePath;
      [k: string]: unknown | undefined;
    } & ({
      enabled?: WhetherOrNotToRequireTLSForIncomingOrOutgoingConnections;
      [k: string]: unknown | undefined;
    } & VectorCoreTlsSettingsTlsConfig1));
/**
 * Note: The file mode value can be specified in any numeric format supported by your configuration
 * language, but it is most intuitive to use an octal number.
 */
export type UnixFileModeBitsToBeAppliedToTheUnixSocketFileAsItsDesignatedFilePermissions = number | null;
/**
 * A file path.
 */
export type AbsolutePathToTheSocketFileToReadDNSTAPDataFrom = string;
/**
 * This should not typically needed to be changed.
 */
export type TheSizeInBytesOfTheReceiveBufferUsedForTheSocket = number | null;
/**
 * This should not typically needed to be changed.
 */
export type TheSizeInBytesOfTheSendBufferUsedForTheSocket = number | null;
/**
 * Use an HTTPS URL to enable TLS encryption.
 *
 * If absent, the `DOCKER_HOST` environment variable is used. If `DOCKER_HOST` is also absent,
 * the default Docker local socket (`/var/run/docker.sock` on Unix platforms,
 * `//./pipe/docker_engine` on Windows) is used.
 */
export type DockerHostToConnectTo = string | null;
/**
 * Matching is prefix first, so specifying a value of `foo` would match any container named `foo` as well as any
 * container whose name started with `foo`. This applies equally whether matching container IDs or names.
 *
 * By default, the source collects logs for all containers. If `exclude_containers` is configured, any
 * container that matches a configured exclusion is excluded even if it is also included with
 * `include_containers`, so care should be taken when using prefix matches as they cannot be overridden by a
 * corresponding entry in `include_containers`, for example, excluding `foo` by attempting to include `foo-specific-id`.
 *
 * This can be used in conjunction with `include_containers`.
 */
export type AListOfContainerIDsOrNamesOfContainersToExcludeFromLogCollection = string[] | null;
/**
 * By default, the [global `log_schema.host_key` option][global_host_key] is used.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * Matching is prefix first, so specifying a value of `foo` would match any container named `foo` as well as any
 * container whose name started with `foo`. This applies equally whether matching container IDs or names.
 *
 * By default, the source collects logs for all containers. If `include_containers` is configured, only
 * containers that match a configured inclusion and are also not excluded get matched.
 *
 * This can be used in conjunction with `exclude_containers`.
 */
export type AListOfContainerIDsOrNamesOfContainersToIncludeInLogCollection = string[] | null;
/**
 * If not provided, all images are included.
 */
export type AListOfImageNamesToMatchAgainst = string[] | null;
/**
 * Labels should follow the syntax described in the [Docker object labels](https://docs.docker.com/config/labels-custom-metadata/) documentation.
 */
export type AListOfContainerObjectLabelsToMatchAgainstWhenFilteringRunningContainers = string[] | null;
/**
 * If `auto_partial_merge` is disabled, partial events are emitted with a log field, set by this
 * configuration value, indicating that the event is not complete.
 */
export type OverridesTheNameOfTheLogFieldUsedToMarkAnEventAsPartial = string | null;
/**
 * Only relevant when connecting to Docker with an HTTPS URL.
 *
 * If not configured, the environment variable `DOCKER_CERT_PATH` is used. If `DOCKER_CERT_PATH` is absent, then` DOCKER_CONFIG` is used. If both environment variables are absent, the certificates in `~/.docker/` are read.
 */
export type ConfigurationOfTLSWhenConnectingToTheDockerDaemon =
  null | ConfigurationOfTLSWhenConnectingToTheDockerDaemon1;
/**
 * By default, `eventstoredb` is used.
 */
export type OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource = string | null;
/**
 * Framing handles how events are separated when encoded in a raw byte form, where each event is
 * a frame that must be prefixed, or delimited, in a way that marks where an event begins and
 * ends within the byte stream.
 */
export type FramingConfiguration6 = null | FramingConfiguration7;
/**
 * Framing handles how events are separated when encoded in a raw byte form, where each event is
 * a frame that must be prefixed, or delimited, in a way that marks where an event begins and
 * ends within the byte stream.
 */
export type FramingConfiguration7 =
  | {
      /**
       * Byte frames are passed through as-is according to the underlying I/O boundaries (for example, split between messages or stream segments).
       */
      method: 'bytes';
      [k: string]: unknown | undefined;
    }
  | ({
      /**
       * Options for the character delimited decoder.
       */
      character_delimited: {
        /**
         * The character that delimits byte sequences.
         */
        delimiter: number;
        max_length?: TheMaximumLengthOfTheByteBuffer;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are delimited by a chosen character.
       */
      method: 'character_delimited';
      [k: string]: unknown | undefined;
    })
  | ({
      length_delimited: CodecsCommonLengthDelimitedLengthDelimitedCoderOptions2;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are prefixed by an unsigned big-endian 32-bit integer indicating the length.
       */
      method: 'length_delimited';
      [k: string]: unknown | undefined;
    })
  | ({
      /**
       * Options for the newline delimited decoder.
       */
      newline_delimited?: {
        max_length?: TheMaximumLengthOfTheByteBuffer;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    } & {
      /**
       * Byte frames which are delimited by a newline character.
       */
      method: 'newline_delimited';
      [k: string]: unknown | undefined;
    })
  | ByteFramesAccordingToTheOctetCountingOctetCountingFormat2
  | ByteFramesWhichAreChunkedGELFMessages2;
/**
 * [octet_counting]: https://tools.ietf.org/html/rfc6587#section-3.4.1
 */
export type ByteFramesAccordingToTheOctetCountingOctetCountingFormat2 = {
  /**
   * Options for the octet counting decoder.
   */
  octet_counting?: {
    /**
     * The maximum length of the byte buffer.
     */
    max_length?: number | null;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  method: ByteFramesAccordingToTheOctetCountingOctetCountingFormat3;
  [k: string]: unknown | undefined;
};
/**
 * [octet_counting]: https://tools.ietf.org/html/rfc6587#section-3.4.1
 */
export type ByteFramesAccordingToTheOctetCountingOctetCountingFormat3 = 'octet_counting';
/**
 * [chunked_gelf]: https://go2docs.graylog.org/current/getting_in_log_data/gelf.html
 */
export type ByteFramesWhichAreChunkedGELFMessages2 = {
  /**
   * Options for the chunked GELF decoder.
   */
  chunked_gelf?: {
    /**
     * Decompression configuration for GELF messages.
     */
    decompression?: 'Auto' | 'Gzip' | 'Zlib' | 'None';
    max_length?: TheMaximumLengthOfASingleGELFMessageInBytesMessagesLongerThanThisLengthWillBeDroppedIfThisOptionIsNotSetTheDecoderDoesNotLimitTheLengthOfMessagesAndThePerMessageMemoryIsUnbounded;
    /**
     * The maximum number of pending incomplete messages. If this limit is reached, the decoder starts
     * dropping chunks of new messages, ensuring the memory usage of the decoder's state is bounded.
     * If this option is not set, the decoder does not limit the number of pending messages and the memory usage
     * of its messages buffer can grow unbounded. This matches Graylog Server's behavior.
     */
    pending_messages_limit?: number | null;
    /**
     * The timeout, in seconds, for a message to be fully received. If the timeout is reached, the
     * decoder drops all the received chunks of the timed out message.
     */
    timeout_secs?: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  method: ByteFramesWhichAreChunkedGELFMessages3;
  [k: string]: unknown | undefined;
};
/**
 * [chunked_gelf]: https://go2docs.graylog.org/current/getting_in_log_data/gelf.html
 */
export type ByteFramesWhichAreChunkedGELFMessages3 = 'chunked_gelf';
/**
 * If the command takes longer than `exec_interval_secs` to run, it is killed.
 */
export type TheIntervalInSecondsBetweenScheduledCommandRuns = number;
/**
 * By default, the [global `data_dir` option][global_data_dir] is used.
 * Make sure the running user has write permissions to this directory.
 *
 * If this directory is specified, then Vector will attempt to create it.
 *
 * [global_data_dir]: https://vector.dev/docs/reference/configuration/global-options/#data_dir
 */
export type TheDirectoryUsedToPersistFileCheckpointPositions = null | StdlibPathBuf;
/**
 * Takes one of the encoding [label strings](https://encoding.spec.whatwg.org/#concept-encoding-get) defined as
 * part of the [Encoding Standard](https://encoding.spec.whatwg.org/).
 *
 * When set, the messages are transcoded from the specified encoding to UTF-8, which is the encoding that is
 * assumed internally for string-like data. Enable this transcoding operation if you need your data to
 * be in UTF-8 for further processing. At the time of transcoding, any malformed sequences (that can't be mapped to
 * UTF-8) is replaced with the Unicode [REPLACEMENT
 * CHARACTER](https://en.wikipedia.org/wiki/Specials_(Unicode_block)#Replacement_character) and warnings are
 * logged.
 */
export type EncodingOfTheSourceMessages = string;
/**
 * Takes precedence over the `include` option. Note: The `exclude` patterns are applied _after_ the attempt to glob everything
 * in `include`. This means that all files are first matched by `include` and then filtered by the `exclude`
 * patterns. This can be impactful if `include` contains directories with contents that are not accessible.
 */
export type ArrayOfFilePatternsToExcludeGlobbingHttpsVectorDevDocsReferenceConfigurationSourcesFileGlobbingIsSupported =
  StdlibPathBuf[];
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheFilePathToEachEvent = string;
/**
 * This is important for `checkpointing` when file rotation is used.
 */
export type ConfigurationForHowFilesShouldBeIdentified =
  | {
      /**
       * Maximum number of bytes to use, from the lines that are read, for generating the checksum.
       */
      bytes?: number | null;
      ignored_header_bytes?: TheNumberOfBytesToSkipAheadOrIgnoreWhenReadingTheDataUsedForGeneratingTheChecksumIfTheFileIsCompressedTheNumberOfBytesReferToTheHeaderInTheUncompressedContentOnlyGzipIsSupportedAtThisTime;
      lines?: TheNumberOfLinesToReadForGeneratingTheChecksum;
      /**
       * Read lines from the beginning of the file and compute a checksum over them.
       */
      strategy: 'checksum';
      [k: string]: unknown | undefined;
    }
  | UseTheDeviceAndInodeInodeAsTheIdentifier;
/**
 * This can be helpful if all files share a common header that should be skipped.
 */
export type TheNumberOfBytesToSkipAheadOrIgnoreWhenReadingTheDataUsedForGeneratingTheChecksumIfTheFileIsCompressedTheNumberOfBytesReferToTheHeaderInTheUncompressedContentOnlyGzipIsSupportedAtThisTime =
  number;
/**
 * The number of lines are determined from the uncompressed content if the file is compressed. Only
 * gzip is supported at this time.
 *
 * If the file has less than this amount of lines, it won’t be read at all.
 */
export type TheNumberOfLinesToReadForGeneratingTheChecksum = number;
/**
 * [inode]: https://en.wikipedia.org/wiki/Inode
 */
export type UseTheDeviceAndInodeInodeAsTheIdentifier1 = 'device_and_inode';
/**
 * This controls the interval at which files are searched. A higher value results in greater
 * chances of some short-lived files being missed between searches, but a lower value increases
 * the performance impact of file discovery.
 */
export type TheDelayBetweenFileDiscoveryCalls = number;
/**
 * Checkpoints are still written normally.
 */
export type WhetherOrNotToIgnoreExistingCheckpointsWhenDeterminingWhereToStartReadingAFile = boolean | null;
/**
 * This may be useful when used with source directories containing dangling symlinks.
 */
export type IgnoreMissingFilesWhenFingerprinting = boolean;
/**
 * This protects against malformed lines or tailing incorrect files.
 */
export type TheMaximumSizeOfALineBeforeItIsDiscarded = number;
/**
 * This allows distributing the reads more or less evenly across
 * the files.
 */
export type MaxAmountOfBytesToReadFromASingleFileBeforeSwitchingOverToTheNextFileNoteThisDoesNotApplyWhenOldestFirstIsTrue =
  number;
/**
 * The value is the byte offset of the start of the line within the file.
 *
 * Off by default, the offset is only added to the event if this is set.
 */
export type EnablesAddingTheFileOffsetToEachEventAndSetsTheNameOfTheLogFieldUsed =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * If not specified, files are not removed.
 */
export type AfterReachingEOFTheNumberOfSecondsToWaitBeforeRemovingTheFileUnlessNewDataIsWritten = number | null;
/**
 * Messages larger than this are truncated.
 */
export type TheMaximumBufferSizeInBytesOfIncomingMessages = number;
/**
 * This generally should not need to be changed.
 */
export type TheSizeOfTheReceiveBufferUsedForEachConnection = number | null;
/**
 * Messages that are not acknowledged when this deadline expires may be retransmitted.
 */
export type TheAcknowledgementDeadlineInSecondsToUseForThisStream = number | null;
/**
 * Messages that are not acknowledged when this deadline expires may be retransmitted.
 */
export type TheAcknowledgementDeadlineInSecondsToUseForThisStream1 = number;
/**
 * The GCP Pub/Sub servers send responses with 100 or more messages when
 * the subscription is busy.
 */
export type TheNumberOfMessagesInAResponseToMarkAStreamAsBusyThisIsUsedToDetermineIfMoreStreamsShouldBeStarted = number;
/**
 * HTTP Basic authentication configuration.
 */
export type CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig = null | {
  /**
   * Wrapper for sensitive strings containing credentials
   */
  password: string;
  /**
   * The username for basic authentication.
   */
  username: string;
  [k: string]: unknown | undefined;
};
/**
 * Accepts the wildcard (`*`) character for query parameters matching a specified pattern.
 *
 * Specifying "*" results in all query parameters included in the log event.
 *
 * These override any values included in the body with conflicting names.
 */
export type AListOfURLQueryParametersToIncludeInTheLogEvent = string[];
/**
 * This collector is only available on Linux systems, and only supports either version 2 or hybrid cgroups.
 */
export type OptionsForTheCgroupsControllerGroupsMetricsCollector =
  null | OptionsForTheCgroupsControllerGroupsMetricsCollector1;
/**
 * The patterns are matched using globbing.
 */
export type AnyPatternsWhichShouldBeExcluded = ACompiledUnixShellStylePattern[] | null;
/**
 * - `?` matches any single character.
 * - `*` matches any (possibly empty) sequence of characters.
 * - `**` matches the current directory and arbitrary subdirectories. This sequence must form a single path component,
 *   so both `**a` and `b**` are invalid and will result in an error. A sequence of more than two consecutive `*`
 *   characters is also invalid.
 * - `[...]` matches any character inside the brackets. Character sequences can also specify ranges of characters, as
 *   ordered by Unicode, so e.g. `[0-9]` specifies any character between 0 and 9 inclusive. An unclosed bracket is
 *   invalid.
 * - `[!...]` is the negation of `[...]`, i.e. it matches any characters not in the brackets.
 *
 * The metacharacters `?`, `*`, `[`, `]` can be matched by using brackets (e.g. `[?]`). When a `]` occurs immediately
 * following `[` or `[!` then it is interpreted as being part of, rather then ending, the character set, so `]` and NOT
 * `]` can be matched by `[]]` and `[!]]` respectively. The `-` character can be specified inside a character sequence
 * pattern by placing it at the start or the end, e.g. `[abc-]`.
 */
export type ACompiledUnixShellStylePattern = string;
/**
 * The patterns are matched using globbing.
 */
export type AnyPatternsWhichShouldBeIncluded = ACompiledUnixShellStylePattern[] | null;
/**
 * A value of `1` means the root or named cgroup.
 */
export type TheNumberOfLevelsOfTheCgroupsHierarchyForWhichToReportMetrics = number;
/**
 * Defaults to all collectors.
 */
export type TheListOfHostMetricCollectorServicesToUse =
  | (
      | MetricsRelatedToLinuxControlGroups
      | 'cpu'
      | 'process'
      | 'disk'
      | 'filesystem'
      | 'load'
      | 'host'
      | 'memory'
      | 'network'
    )[]
  | null;
/**
 * Only available on Linux.
 */
export type MetricsRelatedToLinuxControlGroups = 'cgroups';
/**
 * It _must_ include a port.
 */
export type TheSocketAddressToListenForConnectionsOn = string;
/**
 * [json]: https://www.json.org/
 */
export type DecodesTheRawBytesAsJSONJson2 = {
  /**
   * JSON-specific decoding options.
   */
  json?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsJSONJson3;
  [k: string]: unknown | undefined;
};
/**
 * [json]: https://www.json.org/
 */
export type DecodesTheRawBytesAsJSONJson3 = 'json';
/**
 * [protobuf]: https://protobuf.dev/
 */
export type DecodesTheRawBytesAsProtobufProtobuf2 = {
  /**
   * Protobuf-specific decoding options.
   */
  protobuf?: {
    /**
     * A file path.
     */
    desc_file: string;
    /**
     * message type. e.g package.message
     */
    message_type: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsProtobufProtobuf3;
  [k: string]: unknown | undefined;
};
/**
 * [protobuf]: https://protobuf.dev/
 */
export type DecodesTheRawBytesAsProtobufProtobuf3 = 'protobuf';
/**
 * Decodes either as the [RFC 3164][rfc3164]-style format ("old" style) or the
 * [RFC 5424][rfc5424]-style format ("new" style, includes structured data).
 *
 * [rfc3164]: https://www.ietf.org/rfc/rfc3164.txt
 * [rfc5424]: https://www.ietf.org/rfc/rfc5424.txt
 */
export type DecodesTheRawBytesAsASyslogMessage2 = {
  /**
   * Syslog-specific decoding options.
   */
  syslog?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsASyslogMessage3;
  [k: string]: unknown | undefined;
};
/**
 * Decodes either as the [RFC 3164][rfc3164]-style format ("old" style) or the
 * [RFC 5424][rfc5424]-style format ("new" style, includes structured data).
 *
 * [rfc3164]: https://www.ietf.org/rfc/rfc3164.txt
 * [rfc5424]: https://www.ietf.org/rfc/rfc5424.txt
 */
export type DecodesTheRawBytesAsASyslogMessage3 = 'syslog';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf3 = 'native';
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson2 = {
  /**
   * Vector's native JSON-specific decoding options.
   */
  native_json?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson3;
  [k: string]: unknown | undefined;
};
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export type DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson3 = 'native_json';
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's decoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export type DecodesTheRawBytesAsAGELFGelfMessage2 = {
  /**
   * GELF-specific decoding options.
   */
  gelf?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAGELFGelfMessage3;
  [k: string]: unknown | undefined;
};
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's decoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export type DecodesTheRawBytesAsAGELFGelfMessage3 = 'gelf';
/**
 * [influxdb]: https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol
 */
export type DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage2 = {
  /**
   * Influxdb-specific decoding options.
   */
  influxdb?: {
    lossy?: DeterminesWhetherOrNotToReplaceInvalidUTF8SequencesInsteadOfFailing;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage3;
  [k: string]: unknown | undefined;
};
/**
 * [influxdb]: https://docs.influxdata.com/influxdb/cloud/reference/syntax/line-protocol
 */
export type DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage3 = 'influxdb';
/**
 * [apache_avro]: https://avro.apache.org/
 */
export type DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage3 = 'avro';
/**
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram2 = {
  /**
   * VRL-specific decoding options.
   */
  vrl: {
    source: TheVectorRemapLanguageVrlVRLProgramToExecuteForEachEventNoteThatTheFinalContentsOfTheTargetWillBeUsedAsTheDecodingResultCompilationErrorOrUseOfAbortInAProgramWillResultInADecodingError;
    timezone?: TheNameOfTheTimezoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZoneTheTimeZoneNameMayBeAnyNameInTheTZDatabaseTzDatabaseOrLocalToIndicateSystemLocalTime;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  codec: DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram3;
  [k: string]: unknown | undefined;
};
/**
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram3 = 'vrl';
/**
 * For `json` and `ndjson` encodings, the fields of the JSON objects are output as separate fields.
 */
export type TheExpectedEncodingOfReceivedData = null | ('text' | 'ndjson' | 'json' | 'binary');
/**
 * Accepts the wildcard (`*`) character for headers matching a specified pattern.
 *
 * Specifying "*" results in all headers included in the log event.
 *
 * These headers are not included in the JSON payload if a field with a conflicting name exists.
 */
export type AListOfHTTPHeadersToIncludeInTheLogEvent = string[];
/**
 * If set to `true`, only requests using the exact URL path specified in `path` are accepted. Otherwise,
 * requests sent to a URL path that starts with the value of `path` are accepted.
 *
 * With `strict_path` set to `false` and `path` set to `""`, the configured HTTP source accepts requests from
 * any URL path.
 */
export type WhetherOrNotToTreatTheConfiguredPathAsAnAbsolutePath = boolean;
/**
 * The full path must be specified.
 */
export type TheHTTPEndpointToCollectEventsFrom = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheCurrentProcessIDToEachEvent = string;
/**
 * The value is the peer host's address, including the port. For example, `1.2.3.4:9000`.
 *
 * By default, the [global `log_schema.host_key` option][global_host_key] is used.
 *
 * Set to `""` to suppress this key.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheTagUsedToAddThePeerHostToEachMetric =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * By default, this is not set and the tag is not automatically added.
 */
export type SetsTheNameOfTheTagToUseToAddTheCurrentProcessIDToEachMetric = string | null;
/**
 * This option limits the size of the batch.
 */
export type TheSystemdJournalIsReadInBatchesAndACheckpointIsSetAtTheEndOfEachBatch = number;
/**
 * [cursor]: https://www.freedesktop.org/software/systemd/man/latest/systemd.journal-fields.html#Address%20Fields
 * [get_cursor]: https://www.freedesktop.org/software/systemd/man/latest/sd_journal_get_cursor.html
 */
export type WhetherToEmitThe__CURSORFieldCursorSeeAlsoSdJournalGetCursorGetCursor = boolean;
/**
 * Unit names lacking a `.` have `.service` appended to make them a valid service unit
 * name.
 */
export type AListOfUnitNamesToExcludeFromMonitoring = string[];
/**
 * If specified, it is merged to the command line arguments as-is.
 */
export type AListOfExtraCommandLineArgumentsToPassToJournalctl = string[];
/**
 * If empty or not present, all units are accepted.
 *
 * Unit names lacking a `.` have `.service` appended to make them a valid service unit name.
 */
export type AListOfUnitNamesToMonitor = string[];
/**
 * If not set, `journalctl` uses the default system journal path.
 */
export type TheFullPathOfTheJournalDirectory = null | StdlibPathBuf;
/**
 * This value is passed to `journalctl` through the [`--namespace` option][journalctl-namespace-option].
 * If not set, `journalctl` uses the default namespace.
 *
 * [journal-namespace]: https://www.freedesktop.org/software/systemd/man/systemd-journald.service.html#Journal%20Namespaces
 * [journalctl-namespace-option]: https://www.freedesktop.org/software/systemd/man/journalctl.html#--namespace=NAMESPACE
 */
export type TheJournalNamespaceJournalNamespace = string | null;
/**
 * If not set, a search is done for the `journalctl` path.
 */
export type TheFullPathOfTheJournalctlExecutable = null | StdlibPathBuf;
/**
 * Has no effect unless the value of the field is already an integer.
 */
export type EnablesRemappingThePRIORITYFieldFromAnIntegerToStringValue = boolean;
/**
 * See the [librdkafka documentation](https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md) for the `auto.offset.reset` option for further clarification.
 */
export type IfOffsetsForConsumerGroupDoNotExistSetThemUsingThisStrategy = string;
/**
 * When Vector shuts down or the Kafka consumer group revokes partitions from this
 * consumer, wait a maximum of `drain_timeout_ms` for the source to
 * process pending acknowledgements. Must be less than `session_timeout_ms`
 * to ensure the consumer is not excluded from the group during a rebalance.
 *
 * Default value is half of `session_timeout_ms`.
 */
export type TimeoutToDrainPendingAcknowledgementsDuringShutdownOrAKafkaConsumerGroupRebalance = number | null;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheHeadersToEachEvent = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheMessageKeyToEachEvent = string;
/**
 * See the [librdkafka documentation](https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md) for details.
 */
export type AdvancedOptionsSetDirectlyOnTheUnderlyingLibrdkafkaClient = {
  [k: string]: string | undefined;
} | null;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheOffsetToEachEvent = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddThePartitionToEachEvent = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheTopicToEachEvent = string;
/**
 * Regular expression syntax is supported if the topic begins with `^`.
 */
export type TheKafkaTopicsNamesToReadEventsFrom = string[];
/**
 * Partial events are messages that were split by the Kubernetes Container Runtime
 * log driver.
 */
export type WhetherOrNotToAutomaticallyMergePartialEvents = boolean;
/**
 * A longer delay allows for continued enrichment of logs after the originating Pod is
 * removed. If relevant metadata has been removed, the log is forwarded un-enriched and a
 * warning is emitted.
 */
export type HowLongToDelayRemovingMetadataEntriesFromTheCacheWhenAPodDeletionEventEventIsReceivedFromTheWatchStream =
  number;
/**
 * The built-in Node filter uses `self_node_name` to only watch Pods located on the same Node.
 *
 * [field_selector]: https://kubernetes.io/docs/concepts/overview/working-with-objects/field-selectors/
 * [node]: https://kubernetes.io/docs/concepts/architecture/nodes/
 */
export type SpecifiesTheFieldSelectorFieldSelectorToFilterPodsWithToBeUsedInAdditionToTheBuiltInNodeNodeFilter = string;
/**
 * [label_selector]: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 * [pods]: https://kubernetes.io/docs/concepts/workloads/pods/
 * [exclude]: https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/#pod-exclusion
 */
export type SpecifiesTheLabelSelectorLabelSelectorToFilterPodsPodsWithToBeUsedInAdditionToTheBuiltInExcludeExcludeFilter =
  string;
/**
 * [label_selector]: https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#label-selectors
 * [namespaces]: https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/
 * [exclude]: https://vector.dev/docs/reference/configuration/sources/kubernetes_logs/#namespace-exclusion
 */
export type SpecifiesTheLabelSelectorLabelSelectorToFilterNamespacesNamespacesWithToBeUsedInAdditionToTheBuiltInExcludeExcludeFilter =
  string;
/**
 * This is quite efficient, yet might still create some load on the
 * file system; in addition, it is currently coupled with checksum dumping
 * in the underlying file server, so setting it too low may introduce
 * a significant overhead.
 */
export type TheIntervalAtWhichTheFileSystemIsPolledToIdentifyNewFilesToReadFrom = number;
/**
 * This is useful to compute the latency between important event processing
 * stages. For example, the time delta between when a log line was written and when it was
 * processed by the `kubernetes_logs` source.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddTheIngestionTimestampToEachEvent =
  null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
/**
 * If not set, a connection to Kubernetes is made using the in-cluster configuration.
 *
 * [kubeconfig]: https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/
 */
export type OptionalPathToAReadableKubeconfigKubeconfigFile = null | StdlibPathBuf;
/**
 * This protects against malformed lines or tailing incorrect files.
 */
export type TheMaximumNumberOfBytesALineCanContainBeforeBeingDiscarded = number;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheNamespaceSLabels = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheNodeSLabels = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheContainerSID = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheContainerSImage = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheContainerSImageID = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForTheContainerSName = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSAnnotations = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSIPv4Address = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSIPv4AndIPv6Addresses = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSLabels = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSName = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSNamespace = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSNodeName = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSOwnerReference = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type EventFieldForThePodSUID = string;
/**
 * Configured to use an environment variable by default, to be evaluated to a value provided by
 * Kubernetes at Pod creation.
 *
 * [node]: https://kubernetes.io/docs/concepts/architecture/nodes/
 */
export type TheNameOfTheKubernetesNodeNodeThatIsRunning = string;
/**
 * Each endpoint must be in the [Connection String URI Format](https://www.mongodb.com/docs/manual/reference/connection-string/).
 */
export type AListOfMongoDBInstancesToScrape = string[];
/**
 * If set to an empty string, no namespace is added to the metrics.
 *
 * By default, `mongodb` is used.
 */
export type OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource1 = string;
/**
 * [nats_connection_name]: https://docs.nats.io/using-nats/developer/connecting/name
 */
export type ANameNatsConnectionNameAssignedToTheNATSConnection = string;
/**
 * [nats_subject]: https://docs.nats.io/nats-concepts/subjects
 */
export type TheNATSSubjectNatsSubjectToPullMessagesFrom = string;
/**
 * This value determines how many messages the NATS subscriber buffers
 * before incoming messages are dropped.
 *
 * See the [async_nats documentation][async_nats_subscription_capacity] for more information.
 *
 * [async_nats_subscription_capacity]: https://docs.rs/async-nats/latest/async_nats/struct.ConnectOptions.html#method.subscription_capacity
 */
export type TheBufferCapacityOfTheUnderlyingNATSSubscriber = number;
/**
 * The URL takes the form of `nats://server:port`.
 * If the port is not specified it defaults to 4222.
 */
export type TheNATSURLToConnectTo = string;
/**
 * Each endpoint must be a valid HTTP/HTTPS URI pointing to an NGINX instance that has the
 * `ngx_http_stub_status_module` module enabled.
 */
export type AListOfNGINXInstancesToScrape = string[];
/**
 * If set to an empty string, no namespace is added to the metrics.
 *
 * By default, `nginx` is used.
 */
export type OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource2 = string;
/**
 * Each endpoint must be in the [Connection URI
 * format](https://www.postgresql.org/docs/current/libpq-connect.html#id-1.7.3.8.3.6).
 */
export type AListOfPostgreSQLInstancesToScrape = string[];
/**
 * Specifying `""` includes metrics where `datname` is `NULL`.
 *
 * This can be used in conjunction with `include_databases`.
 */
export type AListOfDatabasesToMatchByUsingPOSIXRegularExpressionsHttpsWwwPostgresqlOrgDocsCurrentFunctionsMatchingHtmlFUNCTIONSPOSIXREGEXPAgainstTheDatnameColumnForWhichYouDonTWantToCollectMetricsFrom =
  string[] | null;
/**
 * If not set, metrics are collected from all databases. Specifying `""` includes metrics where `datname` is
 * `NULL`.
 *
 * This can be used in conjunction with `exclude_databases`.
 */
export type AListOfDatabasesToMatchByUsingPOSIXRegularExpressionsHttpsWwwPostgresqlOrgDocsCurrentFunctionsMatchingHtmlFUNCTIONSPOSIXREGEXPAgainstTheDatnameColumnForWhichYouWantToCollectMetricsFrom =
  string[] | null;
/**
 * A file path.
 */
export type AbsolutePathToAnAdditionalCACertificateFile1 = string;
/**
 * Only applies to counters and histograms as gauges and summaries can't be
 * meaningfully aggregated.
 */
export type WhetherToAggregateValuesAcrossPushes = boolean;
/**
 * The tag value is the endpoint of the scraped instance.
 */
export type TheTagNameAddedToEachEventRepresentingTheScrapedInstanceSEndpoint = string | null;
/**
 * If `true`, the new tag is not added if the scraped metric has the tag already. If `false`, the conflicting tag
 * is renamed by prepending `exported_` to the original name.
 *
 * This matches Prometheus’ `honor_labels` configuration.
 */
export type ControlsHowTagConflictsAreHandledIfTheScrapedSourceHasTagsToBeAdded = boolean;
/**
 * The tag value is the host and port of the scraped instance.
 */
export type TheTagNameAddedToEachEventRepresentingTheScrapedInstanceSHostPort = string | null;
/**
 * This can be used either for basic authentication (username/password) or JWT authentication.
 * When used for JWT, the value should be `token`.
 */
export type BasicAuthenticationNameUsername1 = string;
/**
 * Wrapper for sensitive strings containing credentials
 */
export type BasicAuthenticationPasswordToken1 = string;
/**
 * The broker follows descending priorities. For example, 0=max-priority, 1, 2,...
 *
 * In Shared subscription type, the broker first dispatches messages to the max priority level consumers if they have permits. Otherwise, the broker considers next priority level consumers.
 */
export type TheConsumerSPriorityLevel = number | null;
/**
 * This is based on Redis' Pub/Sub capabilities.
 */
export type TheChannelDataType = 'channel';
/**
 * The value is the Redis key that the event was read from.
 *
 * By default, this is not set and the field is not automatically added.
 */
export type SetsTheNameOfTheLogFieldToUseToAddTheKeyToEachEvent =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * The URL must take the form of `protocol://server:port/db` where the `protocol` can either be `redis` or `rediss` for connections secured using TLS.
 */
export type TheRedisURLToConnectTo = string;
/**
 * The value will be the peer host's address, including the port i.e. `1.2.3.4:9000`.
 *
 * By default, the [global `log_schema.host_key` option][global_host_key] is used.
 *
 * Set to `""` to suppress this key.
 *
 * [global_host_key]: https://vector.dev/docs/reference/configuration/global-options/#log_schema.host_key
 */
export type OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent =
  null | VectorLookupLookupV2OptionalPathOptionalValuePath;
/**
 * Messages larger than this are truncated.
 */
export type TheMaximumBufferSizeOfIncomingMessages = number;
/**
 * Framing handles how events are separated when encoded in a raw byte form, where each event is
 * a frame that must be prefixed, or delimited, in a way that marks where an event begins and
 * ends within the byte stream.
 */
export type FramingConfiguration15 = null | FramingConfiguration7;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent2 = string;
/**
 * Framing handles how events are separated when encoded in a raw byte form, where each event is
 * a frame that must be prefixed, or delimited, in a way that marks where an event begins and
 * ends within the byte stream.
 */
export type FramingConfiguration16 = null | FramingConfiguration7;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type OverridesTheNameOfTheLogFieldUsedToAddThePeerHostToEachEvent3 = string;
/**
 * A channel is idling if it is not used for sending data or querying acknowledgement statuses.
 */
export type WhetherOrNotToRemoveChannelsAfterIdlingForMaxIdleTimeSeconds = boolean;
/**
 * Channels can potentially idle for longer than this setting but clients should not rely on such behavior.
 *
 * Minimum of `1`.
 */
export type TheAmountOfTimeInSecondsAChannelIsAllowedToIdleBeforeRemoval = number;
/**
 * Minimum of `1`.
 */
export type TheMaximumNumberOfSplunkHECChannelsClientsCanUseWithThisSource = number;
/**
 * Equivalent to the `max_number_of_acked_requests_pending_query` Splunk HEC setting.
 *
 * Minimum of `1`.
 */
export type TheMaximumNumberOfAcknowledgementStatusesPendingQueryAcrossAllChannels = number;
/**
 * Equivalent to the `max_number_of_acked_requests_pending_query_per_ack_channel` Splunk HEC setting.
 *
 * Minimum of `1`.
 */
export type TheMaximumNumberOfAcknowledgementStatusesPendingQueryForASingleChannel = number;
/**
 * If set to `true`, when incoming requests contain a Splunk HEC token, the token used is kept in the
 * event metadata and preferentially used if the event is sent to a Splunk HEC sink.
 */
export type WhetherOrNotToForwardTheSplunkHECAuthenticationTokenWithEvents = boolean;
/**
 * If supplied, incoming requests must supply this token in the `Authorization` header, just as a client would if
 * it was communicating with the Splunk HEC endpoint directly.
 *
 * If _not_ supplied, the `Authorization` header is ignored and requests are not authenticated.
 */
export type OptionalAuthorizationToken = null | VectorCommonSensitiveStringSensitiveString;
/**
 * If supplied, incoming requests must supply one of these tokens in the `Authorization` header, just as a client
 * would if it was communicating with the Splunk HEC endpoint directly.
 *
 * If _not_ supplied, the `Authorization` header is ignored and requests are not authenticated.
 */
export type AListOfValidAuthorizationTokens = VectorCommonSensitiveStringSensitiveString[] | null;
/**
 * Kind of the static metric - either absolute or incremental
 */
export type MetricKind = 'incremental' | 'absolute';
/**
 * The buckets within this histogram.
 */
export type AHistogramBucket = AHistogramBucket1[];
/**
 * This value must be between 0.0 and 1.0, inclusive.
 */
export type TheValueOfTheQuantile = number;
/**
 * The quantiles measured from this summary.
 */
export type ASingleQuantileObservation = ASingleQuantileObservation1[];
/**
 * Messages larger than this are truncated.
 */
export type TheMaximumBufferSizeOfIncomingMessagesInBytes = number;
/**
 * This should not typically needed to be changed.
 */
export type TheSizeOfTheReceiveBufferUsedForTheListeningSocket = number | null;
/**
 * For Unix datagram sockets, use the `socket` source instead.
 */
export type ListenOnUDSUnixDomainSocketThisOnlySupportsUnixStreamSockets1 = 'unix';
/**
 * An input event to test against.
 */
export type AUnitTestInput = null | AUnitTestInput1;
/**
 * Only relevant when `type` is `log`.
 */
export type TheSetOfLogFieldsToUseWhenCreatingALogInputEvent = {
  /**
   * Value for a log field.
   */
  [k: string]: (string | number | boolean) | undefined;
} | null;
/**
 * Only relevant when `type` is `metric`.
 */
export type TheMetricToUseAsAnInputEvent =
  | null
  | (({
      /**
       * Tags for a metric series.
       */
      tags?: null | {
        /**
         * Tag values for a metric series.  This may be empty, a single value, or a set of values. This is
         * used to provide the storage for `TagValueSet`.
         */
        [k: string]:
          | (
              | 'Empty'
              | {
                  /**
                   * A single tag value, either a bare tag or a value.
                   */
                  Single: null | string;
                  [k: string]: unknown | undefined;
                }
              | {
                  Set: (null | string)[];
                  [k: string]: unknown | undefined;
                }
            )
          | undefined;
      };
      [k: string]: unknown | undefined;
    } & {
      name: TheNameOfTheMetric;
      namespace?: TheNamespaceOfTheMetric2;
      [k: string]: unknown | undefined;
    }) &
      ({
        kind: MetricKind;
        [k: string]: unknown | undefined;
      } & {
        interval_ms?: TheIntervalInMillisecondsOfThisMetric;
        timestamp?: TheTimestampOfWhenTheMetricWasCreated;
        [k: string]: unknown | undefined;
      } & (
          | {
              counter: {
                /**
                 * The value of the counter.
                 */
                value: number;
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              gauge: {
                /**
                 * The value of the gauge.
                 */
                value: number;
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              set: {
                /**
                 * The values in the set.
                 */
                values: string[];
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | {
              distribution: {
                /**
                 * The observed values within this distribution.
                 */
                samples: {
                  /**
                   * The rate at which the value was observed.
                   */
                  rate: number;
                  /**
                   * The value of the observation.
                   */
                  value: number;
                  [k: string]: unknown | undefined;
                }[];
                /**
                 * The type of statistics to derive for this distribution.
                 */
                statistic: 'histogram' | 'summary';
                [k: string]: unknown | undefined;
              };
              [k: string]: unknown | undefined;
            }
          | ASetOfObservationsWhichAreCountedIntoBuckets
          | ASetOfObservationsWhichAreRepresentedByQuantiles
          | ADataStructureThatCanAnswerQuestionsAboutTheCumulativeDistributionOfTheContainedSamplesInSpaceEfficientWay
        )));
/**
 * This would typically be a name for the metric itself, unrelated to where the metric
 * originates from. For example, if the metric represented the amount of used system memory, it
 * may be called `memory.used`.
 */
export type TheNameOfTheMetric = string;
/**
 * Namespace represents a grouping for a metric where the name itself may otherwise be too
 * generic. For example, while the name of a metric may be `memory.used` for the amount of used
 * system memory, the namespace could differentiate that by being `system` for the total amount
 * of used memory across the system, or `vector` for the amount of used system memory specific
 * to Vector, and so on.
 */
export type TheNamespaceOfTheMetric2 = string | null;
/**
 * Intervals represent the time window over which this metric applies, and is generally only
 * used for tracking rates (change over time) on counters.
 */
export type TheIntervalInMillisecondsOfThisMetric = number | null;
/**
 * Metrics may sometimes have no timestamp, or have no meaningful value if the metric is an
 * aggregation or transformed heavily enough from its original form such that the original
 * timestamp would not represent a meaningful value.
 */
export type TheTimestampOfWhenTheMetricWasCreated = string | null;
/**
 * Only relevant when `type` is `vrl`.
 */
export type TheVrlExpressionToGenerateTheInputEvent = string | null;
/**
 * Can be either `raw`, `vrl`, `log`, or `metric.
 */
export type TheTypeOfTheInputEvent = string;
/**
 * Use this only when the input event should be a raw event (i.e. unprocessed/undecoded log
 * event) and when the input type is set to `raw`.
 */
export type TheRawStringValueToUseAsTheInputEvent = string | null;
/**
 * A set of input events to test against.
 */
export type AUnitTestInput2 = AUnitTestInput1[];
/**
 * Many methods exist for matching events, such as using a VRL expression, a Datadog Search query string,
 * or hard-coded matchers like "must be a metric" or "fields A, B, and C must match these constraints".
 *
 * As VRL is the most common way to apply conditions to events, this type provides a shortcut to define VRL expressions
 * directly in the configuration by passing the VRL expression as a string:
 *
 * ```toml
 * condition = '.message == "hooray"'
 * ```
 *
 * When other condition types are required, they can be specified with an enum-style notation:
 *
 * ```toml
 * condition.type = 'datadog_search'
 * condition.source = 'NOT "foo"'
 * ```
 */
export type AnEventMatchingCondition = string | AnEventMatchingCondition1;
/**
 * A fully-specified condition.
 */
export type AnEventMatchingCondition1 =
  | {
      /**
       * Matches an event if it is a log.
       */
      type: 'is_log';
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Matches an event if it is a metric.
       */
      type: 'is_metric';
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Matches an event if it is a trace.
       */
      type: 'is_trace';
      [k: string]: unknown | undefined;
    }
  | ({
      /**
       * The runtime to use for executing VRL code.
       */
      runtime?: string;
      /**
       * The VRL boolean expression.
       */
      source: string;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Matches an event with a [Vector Remap Language](https://vector.dev/docs/reference/vrl) (VRL) [boolean expression](https://vector.dev/docs/reference/vrl#boolean-expressions).
       */
      type: 'vrl';
      [k: string]: unknown | undefined;
    })
  | ({
      /**
       * The query string.
       */
      source: string;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Matches an event with a [Datadog Search](https://docs.datadoghq.com/logs/explorer/search_syntax/) query.
       */
      type: 'datadog_search';
      [k: string]: unknown | undefined;
    });
/**
 * A set of expected output events after the test has run.
 */
export type AUnitTestOutput = AUnitTestOutput1[];
/**
 * Fully resolved transform component.
 */
export type VectorConfigTransformTransformOuterAllocStringString =
  | ({
      graph?: ExtraGraphConfiguration2;
      inputs: AListOfUpstreamSourceSourcesOrTransformTransformsIDs;
      [k: string]: unknown | undefined;
    } & (
      | (VectorTransformsAggregateAggregateConfig & {
          /**
           * Aggregate metrics passing through a topology.
           */
          type: 'aggregate';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsAwsEc2MetadataEc2Metadata & {
          /**
           * Parse metadata emitted by AWS EC2 instances.
           */
          type: 'aws_ec2_metadata';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsDedupeConfigDedupeConfig & {
          /**
           * Deduplicate logs passing through a topology.
           */
          type: 'dedupe';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsExclusiveRouteConfigExclusiveRouteConfig & {
          /**
           * Split a stream of events into unique sub-streams based on user-supplied conditions.
           */
          type: 'exclusive_route';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsFilterFilterConfig & {
          /**
           * Filter events based on a set of conditions.
           */
          type: 'filter';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsLogToMetricLogToMetricConfig & {
          /**
           * Convert log events to metric events.
           */
          type: 'log_to_metric';
          [k: string]: unknown | undefined;
        })
      | ((
          | ({
              version?: TransformAPIVersion;
              [k: string]: unknown | undefined;
            } & {
              search_dirs?: AListOfDirectoriesToSearchWhenLoadingALuaFileViaTheRequireFunction;
              /**
               * The Lua program to execute for each event.
               */
              source: string;
              [k: string]: unknown | undefined;
            })
          | ({
              version: TransformAPIVersion1;
              [k: string]: unknown | undefined;
            } & {
              hooks: LifecycleHooks;
              metric_tag_values?: WhenSetToSingleMetricTagValuesAreExposedAsSingleStringsTheSameAsTheyWereBeforeThisConfigOptionTagsWithMultipleValuesShowTheLastAssignedValueAndNullValuesAreIgnored;
              search_dirs?: AListOfDirectoriesToSearchWhenLoadingALuaFileViaTheRequireFunction1;
              source?: TheLuaProgramToInitializeTheTransformWith;
              /**
               * A list of timers which should be configured and executed periodically.
               */
              timers?: {
                handler: TheHandlerFunctionWhichIsCalledWhenTheTimerTicks;
                /**
                 * The interval to execute the handler, in seconds.
                 */
                interval_seconds: number;
                [k: string]: unknown | undefined;
              }[];
              [k: string]: unknown | undefined;
            })
        ) & {
          /**
           * Modify event data using the Lua programming language.
           */
          type: 'lua';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsMetricToLogMetricToLogConfig2 & {
          /**
           * Convert metric events to log events.
           */
          type: 'metric_to_log';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsReduceConfigReduceConfig & {
          /**
           * Collapse multiple log events into a single event based on a set of conditions and merge strategies.
           */
          type: 'reduce';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsRemapRemapConfig & {
          /**
           * Modify your observability data as it passes through your topology using Vector Remap Language (VRL).
           */
          type: 'remap';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsRouteRouteConfig & {
          /**
           * Split a stream of events into multiple sub-streams based on user-supplied conditions.
           */
          type: 'route';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsSampleConfigSampleConfig & {
          /**
           * Sample events from an event stream based on supplied criteria and at a configurable rate.
           */
          type: 'sample';
          [k: string]: unknown | undefined;
        })
      | (({
          /**
           * Possible actions to take when an event arrives that would exceed the cardinality limit for one
           * or more of its tags.
           */
          limit_exceeded_action?: 'drop_tag' | 'drop_event';
          /**
           * How many distinct values to accept for any given key.
           */
          value_limit?: number;
          [k: string]: unknown | undefined;
        } & (TracksCardinalityExactly | TracksCardinalityProbabilistically)) & {
          /**
           * Limit the cardinality of tags on metrics events as a safeguard against cardinality explosion.
           */
          type: 'tag_cardinality_limit';
          [k: string]: unknown | undefined;
        })
      | (VectorTransformsThrottleThrottleConfig & {
          /**
           * Rate limit logs passing through a topology.
           */
          type: 'throttle';
          [k: string]: unknown | undefined;
        })
    ))
  | undefined;
/**
 * During this time frame, metrics (beta) with the same series data (name, namespace, tags, and so on) are aggregated.
 */
export type TheIntervalBetweenFlushesInMilliseconds = number;
/**
 * Some of the functions may only function on incremental and some only on absolute metrics.
 */
export type FunctionToUseForAggregation =
  | 'Auto'
  | 'Sum'
  | 'Latest'
  | 'Count'
  | 'Diff'
  | 'Max'
  | 'Min'
  | 'Mean'
  | 'Stdev';
/**
 * When no field matching configuration is specified, events are matched using the `timestamp`,
 * `host`, and `message` fields from an event. The specific field names used are those set in
 * the global [`log schema`][global_log_schema] configuration.
 *
 * [global_log_schema]: https://vector.dev/docs/reference/configuration/global-options/#log_schema
 */
export type OptionsToControlWhatFieldsToMatchAgainst = null | OptionsToControlWhatFieldsToMatchAgainst1;
/**
 * When no field matching configuration is specified, events are matched using the `timestamp`,
 * `host`, and `message` fields from an event. The specific field names used are those set in
 * the global [`log schema`][global_log_schema] configuration.
 *
 * [global_log_schema]: https://vector.dev/docs/reference/configuration/global-options/#log_schema
 */
export type OptionsToControlWhatFieldsToMatchAgainst1 =
  | {
      /**
       * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
       * with prefix default to `PathPrefix::Event`
       */
      match: VectorLookupLookupV2ConfigTargetPath | undefined[];
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
       * with prefix default to `PathPrefix::Event`
       */
      ignore: VectorLookupLookupV2ConfigTargetPath | undefined[];
      [k: string]: unknown | undefined;
    };
/**
 * The `_unmatched` name is reserved and thus cannot be used as route ID.
 *
 * Each route can then be referenced as an input by other components with the name
 *  `<transform_name>.<name>`. If an event doesn’t match any route,
 * it is sent to the `<transform_name>._unmatched` output.
 */
export type TheNameOfTheRouteIsAlsoTheNameOfTheTransformPort = string;
/**
 * This is an example JSON representation of a counter with the following properties:
 *
 * - `counter`: An object with a single property `value` representing the counter value, in this case, `10.0`).
 * - `kind`: A string indicating the kind of counter, in this case, "incremental".
 * - `name`: A string representing the name of the counter, here set to "test.transform.counter".
 * - `tags`: An object containing additional tags such as "env" and "host".
 *
 * Objects that can be processed include counter, histogram, gauge, set and summary.
 */
export type SettingThisFlagChangesTheBehaviorOfThisTransformationBrPNotablyTheMetricsFieldWillBeIgnoredPPAllIncomingEventsWillBeProcessedAndIfPossibleTheyWillBeConvertedToLogEventsOtherwiseOnlyItemsSpecifiedInTheMetricsFieldWillBeProcessedPPreClassChromaCodeClassLanguageTomlDataLangTomlUseSerdeJsonJsonLetJsonEventJsonCounterValue100KindIncrementalNameTestTransformCounterTagsEnvTestEnvHostLocalhostCodePre =
  boolean | null;
/**
 * If not specified, `field` is used as the name of the metric.
 */
export type OverridesTheNameOfTheCounter = null | ATemplatedField;
/**
 * Sets the namespace for the metric.
 */
export type ATemplatedField30 = null | ATemplatedField;
/**
 * Both keys and values can be templated, allowing you to attach dynamic tags to events.
 */
export type TagsToApplyToTheMetric = {
  [k: string]: SpecificationOfTheValueOfACreatedTag | undefined;
} | null;
/**
 * This may be a single value, a `null` for a bare tag, or an array of either.
 */
export type SpecificationOfTheValueOfACreatedTag = (ATemplatedField31 | ATemplatedField32[]) | undefined;
/**
 * A single tag value.
 */
export type ATemplatedField31 = null | ATemplatedField;
/**
 * In many cases, components can be configured so that part of the component's functionality can be
 * customized on a per-event basis. For example, you have a sink that writes events to a file and you want to
 * specify which file an event should go to by using an event field as part of the
 * input to the filename used.
 *
 * By using `Template`, users can specify either fixed strings or templated strings. Templated strings use a common syntax to
 * refer to fields in an event that is used as the input data when rendering the template. An example of a fixed string
 * is `my-file.log`. An example of a template string is `my-file-{{key}}.log`, where `{{key}}`
 * is the key's value when the template is rendered into a string.
 */
export type ATemplatedField32 = null | ATemplatedField;
/**
 * Specifying this version ensures that backward compatibility is not broken.
 */
export type TransformAPIVersion = null | LuaTransformAPIVersion1;
/**
 * This version is deprecated and will be removed in a future version.
 */
export type LuaTransformAPIVersion1 = '1';
/**
 * If not specified, the modules are looked up in the configuration directories.
 */
export type AListOfDirectoriesToSearchWhenLoadingALuaFileViaTheRequireFunction = string[];
/**
 * Specifying this version ensures that backward compatibility is not broken.
 */
export type TransformAPIVersion1 = '2';
/**
 * It can produce new events using the `emit` function.
 *
 * This can either be inline Lua that defines a closure to use, or the name of the Lua function to call. In both
 * cases, the closure/function takes a single parameter, `emit`, which is a reference to a function for emitting events.
 */
export type TheFunctionCalledWhenTheFirstEventComesInBeforeHooksProcessIsCalled = string | null;
/**
 * It can produce new events using the `emit` function.
 *
 * This can either be inline Lua that defines a closure to use, or the name of the Lua function to call. In both
 * cases, the closure/function takes two parameters. The first parameter, `event`, is the event being processed,
 * while the second parameter, `emit`, is a reference to a function for emitting events.
 */
export type TheFunctionCalledForEachIncomingEvent = string;
/**
 * It can produce new events using the `emit` function.
 *
 * This can either be inline Lua that defines a closure to use, or the name of the Lua function to call. In both
 * cases, the closure/function takes a single parameter, `emit`, which is a reference to a function for emitting events.
 */
export type TheFunctionCalledWhenTheTransformIsStopped = string | null;
/**
 * When set to `full`, all metric tags are exposed as arrays of either string or null
 * values.
 */
export type WhenSetToSingleMetricTagValuesAreExposedAsSingleStringsTheSameAsTheyWereBeforeThisConfigOptionTagsWithMultipleValuesShowTheLastAssignedValueAndNullValuesAreIgnored =
  'single' | 'full';
/**
 * If not specified, the modules are looked up in the configuration directories.
 */
export type AListOfDirectoriesToSearchWhenLoadingALuaFileViaTheRequireFunction1 = StdlibPathBuf[];
/**
 * The program can be used to import external dependencies, as well as define the functions
 * used for the various lifecycle hooks. However, it's not strictly required, as the lifecycle
 * hooks can be configured directly with inline Lua source for each respective hook.
 */
export type TheLuaProgramToInitializeTheTransformWith = string | null;
/**
 * It can produce new events using the `emit` function.
 *
 * This can either be inline Lua that defines a closure to use, or the name of the Lua function
 * to call. In both cases, the closure/function takes a single parameter, `emit`, which is a
 * reference to a function for emitting events.
 */
export type TheHandlerFunctionWhichIsCalledWhenTheTimerTicks = string;
/**
 * If this condition resolves to `true` for an event, the current transaction is immediately
 * flushed with this event.
 */
export type AConditionUsedToDistinguishTheFinalEventOfATransaction = null | AnEventMatchingCondition4;
/**
 * Many methods exist for matching events, such as using a VRL expression, a Datadog Search query string,
 * or hard-coded matchers like "must be a metric" or "fields A, B, and C must match these constraints".
 *
 * As VRL is the most common way to apply conditions to events, this type provides a shortcut to define VRL expressions
 * directly in the configuration by passing the VRL expression as a string:
 *
 * ```toml
 * condition = '.message == "hooray"'
 * ```
 *
 * When other condition types are required, they can be specified with an enum-style notation:
 *
 * ```toml
 * condition.type = 'datadog_search'
 * condition.source = 'NOT "foo"'
 * ```
 */
export type AnEventMatchingCondition4 = string | AnEventMatchingCondition5;
/**
 * A fully-specified condition.
 */
export type AnEventMatchingCondition5 =
  | {
      /**
       * Matches an event if it is a log.
       */
      type: 'is_log';
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Matches an event if it is a metric.
       */
      type: 'is_metric';
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Matches an event if it is a trace.
       */
      type: 'is_trace';
      [k: string]: unknown | undefined;
    }
  | ({
      /**
       * The runtime to use for executing VRL code.
       */
      runtime?: string;
      /**
       * The VRL boolean expression.
       */
      source: string;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Matches an event with a [Vector Remap Language](https://vector.dev/docs/reference/vrl) (VRL) [boolean expression](https://vector.dev/docs/reference/vrl#boolean-expressions).
       */
      type: 'vrl';
      [k: string]: unknown | undefined;
    })
  | ({
      /**
       * The query string.
       */
      source: string;
      [k: string]: unknown | undefined;
    } & {
      /**
       * Matches an event with a [Datadog Search](https://docs.datadoghq.com/logs/explorer/search_syntax/) query.
       */
      type: 'datadog_search';
      [k: string]: unknown | undefined;
    });
/**
 * Each group with matching values for the specified keys is reduced independently, allowing
 * you to keep independent event streams separate. When no fields are specified, all events
 * are combined in a single group.
 *
 * For example, if `group_by = ["host", "region"]`, then all incoming events that have the same
 * host and region are grouped together before being reduced.
 */
export type AnOrderedListOfFieldsByWhichToGroupEvents = string[];
/**
 * Works as a way to coalesce by not retaining `null`.
 */
export type DiscardAllButTheLastValueFound = 'retain';
/**
 * If this condition resolves to `true` for an event, the previous transaction is flushed
 * (without this event) and a new transaction is started.
 */
export type AConditionUsedToDistinguishTheFirstEventOfATransaction = null | AnEventMatchingCondition4;
/**
 * If a VRL program is manually aborted (using [`abort`][vrl_docs_abort]) when
 * processing an event, this option controls whether the original, unmodified event is sent
 * downstream without any modifications or if it is dropped.
 *
 * Additionally, dropped events can potentially be diverted to a specially-named output for
 * further logging and analysis by setting `reroute_dropped`.
 *
 * [vrl_docs_abort]: https://vector.dev/docs/reference/vrl/expressions/#abort
 */
export type DropsAnyEventThatIsManuallyAbortedDuringProcessing = boolean;
/**
 * Normally, if a VRL program encounters an error when processing an event, the original,
 * unmodified event is sent downstream. In some cases, you may not want to send the event
 * any further, such as if certain transformation or enrichment is strictly required. Setting
 * `drop_on_error` to `true` allows you to ensure these events do not get processed any
 * further.
 *
 * Additionally, dropped events can potentially be diverted to a specially named output for
 * further logging and analysis by setting `reroute_dropped`.
 */
export type DropsAnyEventThatEncountersAnErrorDuringProcessing = boolean;
/**
 * If a relative path is provided, its root is the current working directory.
 *
 * Required if `source` is missing.
 *
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type FilePathToTheVectorRemapLanguageVrlVRLProgramToExecuteForEachEvent = null | StdlibPathBuf;
/**
 * If a relative path is provided, its root is the current working directory.
 *
 * Required if `source` or `file` are missing.
 *
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type FilePathsToTheVectorRemapLanguageVrlVRLProgramsToExecuteForEachEvent = StdlibPathBuf[] | null;
/**
 * When using `drop_on_error` or `drop_on_abort`, events that are "dropped" are processed no
 * further. In some cases, it may be desirable to keep the events around for further analysis,
 * debugging, or retrying.
 *
 * In these cases, `reroute_dropped` can be set to `true` which forwards the original event
 * to a specially-named output, `dropped`. The original event is annotated with additional
 * fields describing why the event was dropped.
 */
export type ReroutesDroppedEventsToANamedOutputInsteadOfHaltingProcessingOnThem = boolean;
/**
 * Required if `file` is missing.
 *
 * [vrl]: https://vector.dev/docs/reference/vrl
 */
export type TheVectorRemapLanguageVrlVRLProgramToExecuteForEachEvent = string | null;
/**
 * This overrides the [global `timezone`][global_timezone] option. The time zone name may be
 * any name in the [TZ database][tz_database], or `local` to indicate system local time.
 *
 * [global_timezone]: https://vector.dev/docs/reference/configuration//global-options#timezone
 * [tz_database]: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
 */
export type TheNameOfTheTimezoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone =
  null | TimezoneToUseForAnyDateSpecifiersInTemplateStrings1;
/**
 * Normally, if an event doesn't match any defined route, it is sent to the `<transform_name>._unmatched`
 * output for further processing. In some cases, you may want to simply discard unmatched events and not
 * process them any further.
 *
 * In these cases, `reroute_unmatched` can be set to `false` to disable the `<transform_name>._unmatched`
 * output and instead silently discard any unmatched events.
 */
export type ReroutesUnmatchedEventsToANamedOutputInsteadOfSilentlyDiscardingThem = boolean;
/**
 * A logical condition used to exclude events from sampling.
 */
export type AnEventMatchingCondition6 = null | AnEventMatchingCondition4;
/**
 * In many cases, components can be configured so that part of the component's functionality can be
 * customized on a per-event basis. For example, you have a sink that writes events to a file and you want to
 * specify which file an event should go to by using an event field as part of the
 * input to the filename used.
 *
 * By using `Template`, users can specify either fixed strings or templated strings. Templated strings use a common syntax to
 * refer to fields in an event that is used as the input data when rendering the template. An example of a fixed string
 * is `my-file.log`. An example of a template string is `my-file-{{key}}.log`, where `{{key}}`
 * is the key's value when the template is rendered into a string.
 */
export type ATemplatedField33 = null | ATemplatedField;
/**
 * Each unique value for the key creates a bucket of related events to be sampled together
 * and the rate is applied to the buckets themselves to sample `1/N` buckets.  The overall rate
 * of sampling may differ from the configured one if values in the field are not uniformly
 * distributed. If left unspecified, or if the event doesn’t have `key_field`, then the
 * event is sampled independently.
 *
 * This can be useful to, for example, ensure that all logs for a given transaction are
 * sampled together, but that overall `1/N` transactions are sampled.
 */
export type TheNameOfTheFieldWhoseValueIsHashedToDetermineIfTheEventShouldBeSampled = string | null;
/**
 * For example, `rate = 1500` means 1 out of every 1500 events are forwarded and the rest are
 * dropped.
 */
export type TheRateAtWhichEventsAreForwardedExpressedAs1N = number;
/**
 * This mode has higher memory requirements than `probabilistic`, but never falsely outputs
 * metrics with new tags after the limit has been hit.
 */
export type TracksCardinalityExactly1 = 'exact';
/**
 * This mode has lower memory requirements than `exact`, but may occasionally allow metric
 * events to pass through the transform even when they contain new tags that exceed the
 * configured limit. The rate at which this happens can be controlled by changing the value of
 * `cache_size_per_key`.
 */
export type TracksCardinalityProbabilistically = {
  cache_size_per_key?: TheSizeOfTheCacheForDetectingDuplicateTagsInBytes;
  [k: string]: unknown | undefined;
} & {
  mode: TracksCardinalityProbabilistically1;
  [k: string]: unknown | undefined;
};
/**
 * The larger the cache size, the less likely it is to have a false positive, or a case where
 * we allow a new value for tag even after we have reached the configured limits.
 */
export type TheSizeOfTheCacheForDetectingDuplicateTagsInBytes = number;
/**
 * This mode has lower memory requirements than `exact`, but may occasionally allow metric
 * events to pass through the transform even when they contain new tags that exceed the
 * configured limit. The rate at which this happens can be controlled by changing the value of
 * `cache_size_per_key`.
 */
export type TracksCardinalityProbabilistically1 = 'probabilistic';
/**
 * A logical condition used to exclude events from sampling.
 */
export type AnEventMatchingCondition7 = null | AnEventMatchingCondition4;
/**
 * If true, the counter will be incremented for each discarded event, including the key value
 * associated with the discarded event. If false, the counter will not be emitted. Instead, the
 * number of discarded events can be seen through the `component_discarded_events_total` internal
 * metric.
 *
 * Note that this defaults to false because the `key` tag has potentially unbounded cardinality.
 * Only set this to true if you know that the number of unique keys is bounded.
 */
export type WhetherOrNotToEmitTheEventsDiscardedTotalInternalMetricWithTheKeyTag = boolean;
/**
 * In many cases, components can be configured so that part of the component's functionality can be
 * customized on a per-event basis. For example, you have a sink that writes events to a file and you want to
 * specify which file an event should go to by using an event field as part of the
 * input to the filename used.
 *
 * By using `Template`, users can specify either fixed strings or templated strings. Templated strings use a common syntax to
 * refer to fields in an event that is used as the input data when rendering the template. An example of a fixed string
 * is `my-file.log`. An example of a template string is `my-file-{{key}}.log`, where `{{key}}`
 * is the key's value when the template is rendered into a string.
 */
export type ATemplatedField34 = null | ATemplatedField;
/**
 * Each unique key has its own `threshold`.
 */
export type TheNumberOfEventsAllowedForAGivenBucketPerConfiguredWindowSecs = number;
/**
 * This is the directory where Vector will store any state data, such as disk buffers, file
 * checkpoints, and more.
 *
 * Vector must have write permissions to this directory.
 */
export type TheDirectoryUsedForPersistingVectorStateData = null | StdlibPathBuf;
/**
 * Deprecated: use expire_metrics_secs instead
 */
export type TheAmountOfTimeInSecondsThatInternalMetricsWillPersistAfterHavingNotBeenUpdatedBeforeTheyExpireAndAreRemoved =
  null | {
    nsecs: number;
    secs: number;
    [k: string]: unknown | undefined;
  };
/**
 * Set this to a value larger than your `internal_metrics` scrape interval (default 5 minutes)
 * that metrics live long enough to be emitted and captured,
 */
export type TheAmountOfTimeInSecondsThatInternalMetricsWillPersistAfterHavingNotBeenUpdatedBeforeTheyExpireAndAreRemoved1 =
  number | null;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type TheNameOfTheEventFieldToTreatAsTheHostWhichSentTheMessage = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type TheNameOfTheEventFieldToTreatAsTheEventMessage = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type TheNameOfTheEventFieldToSetTheEventMetadataIn = string;
/**
 * An optional path that deserializes an empty string to `None`.
 */
export type TheNameOfTheEventFieldToSetTheSourceIdentifierIn = string;

/**
 * Configuration for the `file` enrichment table.
 */
export interface VectorEnrichmentTablesFileFileConfig {
  /**
   * File-specific settings.
   */
  file: {
    /**
     * File encoding configuration.
     */
    encoding: DecodesTheFileAsACSVCsvCommaSeparatedValuesFile;
    path: ThePathOfTheEnrichmentTableFile;
    [k: string]: unknown | undefined;
  };
  schema?: KeyValuePairsRepresentingMappedLogFieldNamesAndTypes;
  [k: string]: unknown | undefined;
}
/**
 * [csv]: https://wikipedia.org/wiki/Comma-separated_values
 */
export interface DecodesTheFileAsACSVCsvCommaSeparatedValuesFile {
  /**
   * The delimiter used to separate fields in each row of the CSV file.
   */
  delimiter?: string;
  include_headers?: WhetherOrNotTheFileContainsColumnHeaders;
  type: DecodesTheFileAsACSVCsvCommaSeparatedValuesFile1;
  [k: string]: unknown | undefined;
}
/**
 * This is used to coerce log fields from strings into their proper types. The available types are listed in the `Types` list below.
 *
 * Timestamp coercions need to be prefaced with `timestamp|`, for example `"timestamp|%F"`. Timestamp specifiers can use either of the following:
 *
 * 1. One of the built-in-formats listed in the `Timestamp Formats` table below.
 * 2. The [time format specifiers][chrono_fmt] from Rust’s `chrono` library.
 *
 * ### Types
 *
 * - **`bool`**
 * - **`string`**
 * - **`float`**
 * - **`integer`**
 * - **`date`**
 * - **`timestamp`** (see the table below for formats)
 *
 * ### Timestamp Formats
 *
 * | Format               | Description                                                                      | Example                          |
 * |----------------------|----------------------------------------------------------------------------------|----------------------------------|
 * | `%F %T`              | `YYYY-MM-DD HH:MM:SS`                                                            | `2020-12-01 02:37:54`            |
 * | `%v %T`              | `DD-Mmm-YYYY HH:MM:SS`                                                           | `01-Dec-2020 02:37:54`           |
 * | `%FT%T`              | [ISO 8601][iso8601]/[RFC 3339][rfc3339], without time zone                       | `2020-12-01T02:37:54`            |
 * | `%FT%TZ`             | [ISO 8601][iso8601]/[RFC 3339][rfc3339], UTC                                     | `2020-12-01T09:37:54Z`           |
 * | `%+`                 | [ISO 8601][iso8601]/[RFC 3339][rfc3339], UTC, with time zone                     | `2020-12-01T02:37:54-07:00`      |
 * | `%a, %d %b %Y %T`    | [RFC 822][rfc822]/[RFC 2822][rfc2822], without time zone                         | `Tue, 01 Dec 2020 02:37:54`      |
 * | `%a %b %e %T %Y`     | [ctime][ctime] format                                                            | `Tue Dec 1 02:37:54 2020`        |
 * | `%s`                 | [UNIX timestamp][unix_ts]                                                        | `1606790274`                     |
 * | `%a %d %b %T %Y`     | [date][date] command, without time zone                                          | `Tue 01 Dec 02:37:54 2020`       |
 * | `%a %d %b %T %Z %Y`  | [date][date] command, with time zone                                             | `Tue 01 Dec 02:37:54 PST 2020`   |
 * | `%a %d %b %T %z %Y`  | [date][date] command, with numeric time zone                                     | `Tue 01 Dec 02:37:54 -0700 2020` |
 * | `%a %d %b %T %#z %Y` | [date][date] command, with numeric time zone (minutes can be missing or present) | `Tue 01 Dec 02:37:54 -07 2020`   |
 *
 * [date]: https://man7.org/linux/man-pages/man1/date.1.html
 * [ctime]: https://www.cplusplus.com/reference/ctime
 * [unix_ts]: https://en.wikipedia.org/wiki/Unix_time
 * [rfc822]: https://tools.ietf.org/html/rfc822#section-5
 * [rfc2822]: https://tools.ietf.org/html/rfc2822#section-3.3
 * [iso8601]: https://en.wikipedia.org/wiki/ISO_8601
 * [rfc3339]: https://tools.ietf.org/html/rfc3339
 * [chrono_fmt]: https://docs.rs/chrono/latest/chrono/format/strftime/index.html#specifiers
 */
export interface KeyValuePairsRepresentingMappedLogFieldNamesAndTypes {
  [k: string]: string | undefined;
}
/**
 * Configuration for the `geoip` enrichment table.
 */
export interface VectorEnrichmentTablesGeoipGeoipConfig {
  locale?: TheLocaleToUseWhenQueryingTheDatabase;
  path: PathToTheMaxMindGeoIP2Geoip2OrGeoLite2BinaryCityDatabaseFileGeolite2GeoLite2CityMmdb;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `mmdb` enrichment table.
 */
export interface VectorEnrichmentTablesMmdbMmdbConfig {
  path: PathToTheMaxMindMaxmindDatabase;
  [k: string]: unknown | undefined;
}
/**
 * Configure to proxy traffic through an HTTP(S) proxy when making external requests.
 *
 * Similar to common proxy configuration convention, you can set different proxies
 * to use based on the type of traffic being proxied. You can also set specific hosts that
 * should not be proxied.
 */
export interface ProxyConfiguration {
  /**
   * Enables proxying support.
   */
  enabled?: boolean;
  http?: ProxyEndpointToUseWhenProxyingHTTPTraffic;
  https?: ProxyEndpointToUseWhenProxyingHTTPSTraffic;
  no_proxy?: AListOfHostsToAvoidProxying;
  [k: string]: unknown | undefined;
}
/**
 * TLS configuration.
 */
export interface VectorCoreTlsSettingsTlsConfig {
  alpn_protocols?: SetsTheListOfSupportedALPNProtocols;
  ca_file?: AbsolutePathToAnAdditionalCACertificateFile;
  crt_file?: AbsolutePathToACertificateFileUsedToIdentifyThisServer;
  key_file?: AbsolutePathToAPrivateKeyFileUsedToIdentifyThisServer;
  key_pass?: PassphraseUsedToUnlockTheEncryptedKeyFile;
  server_name?: ServerNameToUseWhenUsingServerNameIndicationSNI;
  verify_certificate?: EnablesCertificateVerificationForComponentsThatCreateAServerThisRequiresThatTheClientConnectionsHaveAValidClientCertificateForComponentsThatInitiateRequestsThisValidatesThatTheUpstreamHasAValidCertificate;
  verify_hostname?: EnablesHostnameVerification;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `file` secrets backend.
 */
export interface VectorSecretsFileFileBackend {
  /**
   * A file path.
   */
  path: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `directory` secrets backend.
 */
export interface VectorSecretsDirectoryDirectoryBackend {
  /**
   * A file path.
   */
  path: string;
  /**
   * Remove trailing whitespace from file contents.
   */
  remove_trailing_whitespace?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `exec` secrets backend.
 */
export interface VectorSecretsExecExecBackend {
  command: CommandArgumentsToExecute;
  /**
   * The timeout, in seconds, to wait for the command to complete.
   */
  timeout?: number;
  [k: string]: unknown | undefined;
}
/**
 * Additionally, the specific credential profile to use can be set.
 * The file format must match the credentials file format outlined in
 * <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html>.
 */
export interface AuthenticateUsingCredentialsStoredInAFile {
  /**
   * Path to the credentials file.
   */
  credentials_file: string;
  profile?: TheCredentialsProfileToUse;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `test` secrets backend.
 */
export interface VectorSecretsTestTestBackend {
  /**
   * Fixed value to replace all secrets with.
   */
  replacement: string;
  [k: string]: unknown | undefined;
}
/**
 * This is more performant, but less durable. Data will be lost if Vector is restarted
 * forcefully or crashes.
 */
export interface EventsAreBufferedInMemory {
  /**
   * The maximum number of events allowed in the buffer.
   */
  max_events?: number;
  type: EventsAreBufferedInMemory1;
  /**
   * Event handling behavior when a buffer is full.
   */
  when_full?:
    | WaitForFreeSpaceInTheBuffer
    | DropsTheEventInsteadOfWaitingForFreeSpaceInBuffer
    | OverflowsToTheNextStageInTheBufferTopology;
  [k: string]: unknown | undefined;
}
/**
 * This is less performant, but more durable. Data that has been synchronized to disk will not
 * be lost if Vector is restarted forcefully or crashes.
 *
 * Data is synchronized to disk every 500ms.
 */
export interface EventsAreBufferedOnDisk {
  max_size: TheMaximumSizeOfTheBufferOnDisk;
  type: EventsAreBufferedOnDisk1;
  /**
   * Event handling behavior when a buffer is full.
   */
  when_full?:
    | WaitForFreeSpaceInTheBuffer
    | DropsTheEventInsteadOfWaitingForFreeSpaceInBuffer
    | OverflowsToTheNextStageInTheBufferTopology;
  [k: string]: unknown | undefined;
}
/**
 * This is more performant, but less durable. Data will be lost if Vector is restarted
 * forcefully or crashes.
 */
export interface EventsAreBufferedInMemory2 {
  /**
   * The maximum number of events allowed in the buffer.
   */
  max_events?: number;
  type: EventsAreBufferedInMemory3;
  /**
   * Event handling behavior when a buffer is full.
   */
  when_full?:
    | WaitForFreeSpaceInTheBuffer
    | DropsTheEventInsteadOfWaitingForFreeSpaceInBuffer
    | OverflowsToTheNextStageInTheBufferTopology;
  [k: string]: unknown | undefined;
}
/**
 * This is less performant, but more durable. Data that has been synchronized to disk will not
 * be lost if Vector is restarted forcefully or crashes.
 *
 * Data is synchronized to disk every 500ms.
 */
export interface EventsAreBufferedOnDisk2 {
  max_size: TheMaximumSizeOfTheBufferOnDisk;
  type: EventsAreBufferedOnDisk3;
  /**
   * Event handling behavior when a buffer is full.
   */
  when_full?:
    | WaitForFreeSpaceInTheBuffer
    | DropsTheEventInsteadOfWaitingForFreeSpaceInBuffer
    | OverflowsToTheNextStageInTheBufferTopology;
  [k: string]: unknown | undefined;
}
/**
 * Configure output for component when generated with graph command
 */
export interface ExtraGraphConfiguration {
  node_attributes?: NodeAttributesToAddToThisComponentSNodeInResultingGraph;
  [k: string]: unknown | undefined;
}
/**
 * They are added to the node as provided
 */
export interface NodeAttributesToAddToThisComponentSNodeInResultingGraph {
  [k: string]: string | undefined;
}
/**
 * Configure to proxy traffic through an HTTP(S) proxy when making external requests.
 *
 * Similar to common proxy configuration convention, you can set different proxies
 * to use based on the type of traffic being proxied. You can also set specific hosts that
 * should not be proxied.
 */
export interface ProxyConfiguration1 {
  /**
   * Enables proxying support.
   */
  enabled?: boolean;
  http?: ProxyEndpointToUseWhenProxyingHTTPTraffic;
  https?: ProxyEndpointToUseWhenProxyingHTTPSTraffic;
  no_proxy?: AListOfHostsToAvoidProxying;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * [apache_avro]: https://avro.apache.org/
 */
export interface EncodesAnEventAsAnApacheAvroApacheAvroMessage {
  /**
   * Apache Avro-specific encoder options.
   */
  avro: {
    /**
     * The Avro schema.
     */
    schema: string;
    [k: string]: unknown | undefined;
  };
  codec: EncodesAnEventAsAnApacheAvroApacheAvroMessage1;
  [k: string]: unknown | undefined;
}
/**
 * Config used to build a `CsvSerializer`.
 */
export interface CodecsEncodingFormatCsvCsvSerializerConfig {
  /**
   * The CSV Serializer Options.
   */
  csv: {
    /**
     * Set the capacity (in bytes) of the internal buffer used in the CSV writer.
     * This defaults to a reasonable setting.
     */
    capacity?: number;
    /**
     * The field delimiter to use when writing CSV.
     */
    delimiter?: number;
    double_quote?: EnableDoubleQuoteEscapes;
    escape?: TheEscapeCharacterToUseWhenWritingCSV;
    fields: ConfiguresTheFieldsThatWillBeEncodedAsWellAsTheOrderInWhichTheyAppearInTheOutput;
    /**
     * The quote character to use when writing CSV.
     */
    quote?: number;
    /**
     * The quoting style to use when writing CSV data.
     */
    quote_style?: 'always' | 'necessary' | 'non_numeric' | 'never';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * This codec is experimental for the following reason:
 *
 * The GELF specification is more strict than the actual Graylog receiver.
 * Vector's encoder currently adheres more strictly to the GELF spec, with
 * the exception that some characters such as `@`  are allowed in field names.
 *
 * Other GELF codecs such as Loki's, use a [Go SDK][implementation] that is maintained
 * by Graylog, and is much more relaxed than the GELF spec.
 *
 * Going forward, Vector will use that [Go SDK][implementation] as the reference implementation, which means
 * the codec may continue to relax the enforcement of specification.
 *
 * [gelf]: https://docs.graylog.org/docs/gelf
 * [implementation]: https://github.com/Graylog2/go-gelf/blob/v2/gelf/reader.go
 */
export interface EncodesAnEventAsAGELFGelfMessage {
  codec: EncodesAnEventAsAGELFGelfMessage1;
  [k: string]: unknown | undefined;
}
/**
 * Config used to build a `JsonSerializer`.
 */
export interface CodecsEncodingFormatJsonJsonSerializerConfig {
  /**
   * Options for the JsonSerializer.
   */
  json?: {
    /**
     * Whether to use pretty JSON formatting.
     */
    pretty?: boolean;
    [k: string]: unknown | undefined;
  };
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  [k: string]: unknown | undefined;
}
/**
 * [logfmt]: https://brandur.org/logfmt
 */
export interface EncodesAnEventAsALogfmtLogfmtMessage {
  codec: EncodesAnEventAsALogfmtLogfmtMessage1;
  [k: string]: unknown | undefined;
}
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export interface EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf {
  codec: EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf1;
  [k: string]: unknown | undefined;
}
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_json]: https://github.com/vectordotdev/vector/blob/master/lib/codecs/tests/data/native_encoding/schema.cue
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export interface EncodesAnEventInTheNativeJSONFormatVectorNativeJson {
  codec: EncodesAnEventInTheNativeJSONFormatVectorNativeJson1;
  [k: string]: unknown | undefined;
}
/**
 * This encoding uses the `message` field of a log event.
 *
 * Be careful if you are modifying your log events (for example, by using a `remap`
 * transform) and removing the message field while doing additional parsing on it, as this
 * could lead to the encoding emitting empty strings for the given event.
 */
export interface NoEncoding {
  codec: NoEncoding1;
  [k: string]: unknown | undefined;
}
/**
 * AMQP properties configuration.
 */
export interface ConfigureTheAMQPMessageProperties1 {
  /**
   * Content-Encoding for the AMQP messages.
   */
  content_encoding?: string | null;
  /**
   * Content-Type for the AMQP messages.
   */
  content_type?: string | null;
  /**
   * Expiration for AMQP messages (in milliseconds)
   */
  expiration_ms?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * AMQP connection options.
 */
export interface VectorAmqpAmqpConfig {
  connection_string: URIForTheAMQPServer;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `appsignal` sink.
 */
export interface VectorSinksAppsignalConfigAppsignalConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink1;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  compression?: CompressionConfiguration;
  encoding?: VectorCodecsEncodingTransformerTransformer;
  /**
   * The URI for the AppSignal API to send data to.
   */
  endpoint?: string;
  /**
   * A valid app-level AppSignal Push API key.
   */
  push_api_key: string;
  request?: MiddlewareSettingsForOutboundRequests;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink1 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * TLS configuration.
 */
export interface VectorCoreTlsSettingsTlsConfig1 {
  alpn_protocols?: SetsTheListOfSupportedALPNProtocols;
  ca_file?: AbsolutePathToAnAdditionalCACertificateFile;
  crt_file?: AbsolutePathToACertificateFileUsedToIdentifyThisServer;
  key_file?: AbsolutePathToAPrivateKeyFileUsedToIdentifyThisServer;
  key_pass?: PassphraseUsedToUnlockTheEncryptedKeyFile;
  server_name?: ServerNameToUseWhenUsingServerNameIndicationSNI;
  verify_certificate?: EnablesCertificateVerificationForComponentsThatCreateAServerThisRequiresThatTheClientConnectionsHaveAValidClientCertificateForComponentsThatInitiateRequestsThisValidatesThatTheUpstreamHasAValidCertificate;
  verify_hostname?: EnablesHostnameVerification;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink2 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests1 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters1;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters1 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * [aws_region]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html
 */
export interface TheAWSRegionAwsRegionOfTheTargetService1 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink3 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests2 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters2;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters2 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * [aws_region]: https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/Concepts.RegionsAndAvailabilityZones.html
 */
export interface TheAWSRegionAwsRegionOfTheTargetService2 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink4 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests3 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint1 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink5 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests4 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint2 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Options for the length delimited decoder.
 */
export interface CodecsCommonLengthDelimitedLengthDelimitedCoderOptions {
  /**
   * Length field byte order (little or big endian)
   */
  length_field_is_big_endian?: boolean;
  /**
   * Number of bytes representing the field length
   */
  length_field_length?: number;
  /**
   * Number of bytes in the header before the length field
   */
  length_field_offset?: number;
  /**
   * Maximum frame length
   */
  max_frame_length?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint3 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Base Configuration `aws_s_s` for sns and sqs sink.
 */
export interface VectorSinksAwsSSConfigBaseSSSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink6;
  assume_role?: TheARNOfAnIAMRoleIamRoleToAssumeAtStartup;
  /**
   * Configuration of the authentication strategy for interacting with AWS services.
   */
  auth?:
    | {
        /**
         * The AWS access key ID.
         */
        access_key_id: string;
        assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
        external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        /**
         * The AWS secret access key.
         */
        secret_access_key: string;
        [k: string]: unknown | undefined;
      }
    | AuthenticateUsingCredentialsStoredInAFile
    | {
        assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
        external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
        /**
         * Configuration for authenticating with AWS through IMDS.
         */
        imds?: {
          /**
           * Connect timeout for IMDS.
           */
          connect_timeout_seconds?: number;
          /**
           * Number of IMDS retries for fetching tokens and metadata.
           */
          max_attempts?: number;
          /**
           * Read timeout for IMDS.
           */
          read_timeout_seconds?: number;
          [k: string]: unknown | undefined;
        };
        load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Configuration for authenticating with AWS through IMDS.
         */
        imds?: {
          /**
           * Connect timeout for IMDS.
           */
          connect_timeout_seconds?: number;
          /**
           * Number of IMDS retries for fetching tokens and metadata.
           */
          max_attempts?: number;
          /**
           * Read timeout for IMDS.
           */
          read_timeout_seconds?: number;
          [k: string]: unknown | undefined;
        };
        load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        [k: string]: unknown | undefined;
      };
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  message_deduplication_id?: TheMessageDeduplicationIDValueToAllowAWSToIdentifyDuplicateMessages;
  message_group_id?: TheTagThatSpecifiesThatAMessageBelongsToASpecificMessageGroup;
  request?: MiddlewareSettingsForOutboundRequests5;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink6 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests5 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint4 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Base Configuration `aws_s_s` for sns and sqs sink.
 */
export interface VectorSinksAwsSSConfigBaseSSSinkConfig1 {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink6;
  assume_role?: TheARNOfAnIAMRoleIamRoleToAssumeAtStartup;
  /**
   * Configuration of the authentication strategy for interacting with AWS services.
   */
  auth?:
    | {
        /**
         * The AWS access key ID.
         */
        access_key_id: string;
        assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
        external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        /**
         * The AWS secret access key.
         */
        secret_access_key: string;
        [k: string]: unknown | undefined;
      }
    | AuthenticateUsingCredentialsStoredInAFile
    | {
        assume_role: TheARNOfAnIAMRoleIamRoleToAssume1;
        external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
        /**
         * Configuration for authenticating with AWS through IMDS.
         */
        imds?: {
          /**
           * Connect timeout for IMDS.
           */
          connect_timeout_seconds?: number;
          /**
           * Number of IMDS retries for fetching tokens and metadata.
           */
          max_attempts?: number;
          /**
           * Read timeout for IMDS.
           */
          read_timeout_seconds?: number;
          [k: string]: unknown | undefined;
        };
        load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Configuration for authenticating with AWS through IMDS.
         */
        imds?: {
          /**
           * Connect timeout for IMDS.
           */
          connect_timeout_seconds?: number;
          /**
           * Number of IMDS retries for fetching tokens and metadata.
           */
          max_attempts?: number;
          /**
           * Read timeout for IMDS.
           */
          read_timeout_seconds?: number;
          [k: string]: unknown | undefined;
        };
        load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
        region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
        [k: string]: unknown | undefined;
      };
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  message_deduplication_id?: TheMessageDeduplicationIDValueToAllowAWSToIdentifyDuplicateMessages;
  message_group_id?: TheTagThatSpecifiesThatAMessageBelongsToASpecificMessageGroup;
  request?: MiddlewareSettingsForOutboundRequests5;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `axiom` sink.
 */
export interface VectorSinksAxiomAxiomConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink7;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings;
  compression?: CompressionConfiguration;
  /**
   * The Axiom dataset to write to.
   */
  dataset: string;
  org_id?: TheAxiomOrganizationID;
  /**
   * Outbound HTTP request settings.
   */
  request?: {
    /**
     * Additional HTTP headers to add to every HTTP request.
     */
    headers?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  } & MiddlewareSettingsForOutboundRequests1;
  tls?: TheTLSSettingsForTheConnection;
  /**
   * The Axiom API token.
   */
  token: string;
  url?: URIOfTheAxiomEndpointToSendDataTo;
  [k: string]: unknown | undefined;
}
/**
 * Controls how acknowledgements are handled for this sink.
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink7 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * The batch settings for the sink.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink8 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings1 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests6 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters3;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters3 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming1 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `azure_monitor_logs` sink.
 */
export interface VectorSinksAzureMonitorLogsConfigAzureMonitorLogsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink9;
  azure_resource_id?: TheResourceIDResourceIdOfTheAzureResourceTheDataShouldBeAssociatedWith;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings1;
  customer_id: TheUniqueIdentifierUniqIdForTheLogAnalyticsWorkspace;
  encoding?: VectorCodecsEncodingTransformerTransformer1;
  host?: AlternativeHostAltHostForDedicatedAzureRegions;
  log_type: TheRecordTypeRecordTypeOfTheDataThatIsBeingSubmitted;
  request?: MiddlewareSettingsForOutboundRequests7;
  shared_key: ThePrimaryOrTheSecondaryKeySharedKeyForTheLogAnalyticsWorkspace;
  time_generated_key?: UseThisOptionToCustomizeTheLogFieldUsedAsTimeGenerated1InAzure;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink9 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings1 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer1 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests7 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `blackhole` sink.
 */
export interface VectorSinksBlackholeConfigBlackholeConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink10;
  print_interval_secs?: TheIntervalBetweenReportingASummaryOfActivity;
  rate?: TheNumberOfEventsPerSecondThatTheSinkIsAllowedToConsume;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink10 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `clickhouse` sink.
 */
export interface VectorSinksClickhouseConfigClickhouseConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink11;
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings2;
  compression?: CompressionConfiguration;
  database?: ATemplatedField6;
  /**
   * Sets `date_time_input_format` to `best_effort`, allowing ClickHouse to properly parse RFC3339/ISO 8601.
   */
  date_time_best_effort?: boolean;
  encoding?: VectorCodecsEncodingTransformerTransformer2;
  endpoint: TheURIComponentOfARequest;
  format?: DataFormat;
  /**
   * Sets `insert_distributed_one_random_shard`, allowing ClickHouse to insert data into a random shard when using Distributed Table Engine.
   */
  insert_random_shard?: boolean;
  request?: MiddlewareSettingsForOutboundRequests8;
  skip_unknown_fields?: SetsInputFormatSkipUnknownFieldsAllowingClickHouseToDiscardFieldsNotPresentInTheTableSchema;
  table: ATemplatedField;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink11 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * The username and password are concatenated and encoded via [base64][base64].
 *
 * [base64]: https://en.wikipedia.org/wiki/Base64
 */
export interface BasicAuthentication {
  /**
   * Wrapper for sensitive strings containing credentials
   */
  password: string;
  strategy: BasicAuthentication1;
  /**
   * The basic authentication username.
   */
  user: string;
  [k: string]: unknown | undefined;
}
/**
 * The bearer token value (OAuth2, JWT, etc.) is passed as-is.
 */
export interface BearerAuthentication {
  strategy: BearerAuthentication1;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  token: string;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings2 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer2 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests8 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink12 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming2 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `databend` sink.
 */
export interface VectorSinksDatabendConfigDatabendConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink13;
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings3;
  /**
   * Compression configuration.
   */
  compression?: 'none' | GzipGzipCompression;
  /**
   * The database that contains the table that data is inserted into. Overrides the database in DSN.
   */
  database?: string | null;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding?: (EncodesAnEventAsACSVMessage2 | EncodesAnEventAsJSONJson2) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheURIComponentOfARequest;
  /**
   * Defines how missing fields are handled for NDJson.
   * Refer to https://docs.databend.com/sql/sql-reference/file-format-options#null_field_as
   */
  missing_field_as?: 'ERROR' | 'NULL' | 'FIELD_DEFAULT' | 'TYPE_DEFAULT';
  request?: MiddlewareSettingsForOutboundRequests9;
  /**
   * The table that data is inserted into.
   */
  table: string;
  /**
   * @deprecated
   * TLS configuration.
   */
  tls?: null | VectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink13 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings3 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Options for the CSV encoder.
 */
export interface CodecsEncodingFormatCsvCsvSerializerConfig1 {
  /**
   * The CSV Serializer Options.
   */
  csv: {
    /**
     * Set the capacity (in bytes) of the internal buffer used in the CSV writer.
     * This defaults to a reasonable setting.
     */
    capacity?: number;
    /**
     * The field delimiter to use when writing CSV.
     */
    delimiter?: number;
    double_quote?: EnableDoubleQuoteEscapes;
    escape?: TheEscapeCharacterToUseWhenWritingCSV;
    fields: ConfiguresTheFieldsThatWillBeEncodedAsWellAsTheOrderInWhichTheyAppearInTheOutput;
    /**
     * The quote character to use when writing CSV.
     */
    quote?: number;
    /**
     * The quoting style to use when writing CSV data.
     */
    quote_style?: 'always' | 'necessary' | 'non_numeric' | 'never';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Encoding options specific to the Json serializer.
 */
export interface CodecsEncodingFormatJsonJsonSerializerConfig1 {
  /**
   * Options for the JsonSerializer.
   */
  json?: {
    /**
     * Whether to use pretty JSON formatting.
     */
    pretty?: boolean;
    [k: string]: unknown | undefined;
  };
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests9 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests10 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Shared configuration for Datadog sinks.
 * Contains the maximum set of common settings that applies to all DD sink components.
 */
export interface VectorSinksDatadogLocalDatadogCommonConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink14;
  default_api_key?: TheDefaultDatadogAPIKeyApiKeyToUseInAuthenticationOfHTTPRequests;
  endpoint?: TheEndpointToSendObservabilityDataTo;
  site?: TheDatadogSiteDdSiteToSendObservabilityDataTo;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink14 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer3 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Shared configuration for Datadog sinks.
 * Contains the maximum set of common settings that applies to all DD sink components.
 */
export interface VectorSinksDatadogLocalDatadogCommonConfig1 {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink14;
  default_api_key?: TheDefaultDatadogAPIKeyApiKeyToUseInAuthenticationOfHTTPRequests;
  endpoint?: TheEndpointToSendObservabilityDataTo;
  site?: TheDatadogSiteDdSiteToSendObservabilityDataTo;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests11 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Shared configuration for Datadog sinks.
 * Contains the maximum set of common settings that applies to all DD sink components.
 */
export interface VectorSinksDatadogLocalDatadogCommonConfig2 {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink14;
  default_api_key?: TheDefaultDatadogAPIKeyApiKeyToUseInAuthenticationOfHTTPRequests;
  endpoint?: TheEndpointToSendObservabilityDataTo;
  site?: TheDatadogSiteDdSiteToSendObservabilityDataTo;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests12 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Shared configuration for Datadog sinks.
 * Contains the maximum set of common settings that applies to all DD sink components.
 */
export interface VectorSinksDatadogLocalDatadogCommonConfig3 {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink14;
  default_api_key?: TheDefaultDatadogAPIKeyApiKeyToUseInAuthenticationOfHTTPRequests;
  endpoint?: TheEndpointToSendObservabilityDataTo;
  site?: TheDatadogSiteDdSiteToSendObservabilityDataTo;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `elasticsearch` sink.
 */
export interface VectorSinksElasticsearchConfigElasticsearchConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink15;
  api_version?: TheAPIVersionOfElasticsearch;
  /**
   * Elasticsearch Authentication strategies.
   */
  auth?:
    | null
    | (
        | {
            /**
             * Wrapper for sensitive strings containing credentials
             */
            password: string;
            /**
             * HTTP Basic Authentication.
             */
            strategy: 'basic';
            /**
             * Basic authentication username.
             */
            user: string;
            [k: string]: unknown | undefined;
          }
        | ((
            | {
                /**
                 * Wrapper for sensitive strings containing credentials
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * Wrapper for sensitive strings containing credentials
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile1
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume3;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
          ) & {
            /**
             * Amazon OpenSearch Service-specific authentication.
             */
            strategy: 'aws';
            [k: string]: unknown | undefined;
          })
      );
  /**
   * Configuration of the region/endpoint to use when interacting with an AWS service.
   */
  aws?: null | VectorAwsRegionRegionOrEndpoint5;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings4;
  /**
   * Elasticsearch bulk mode configuration.
   */
  bulk?: {
    action?: ATemplatedField;
    index?: ATemplatedField;
    /**
     * The default index to write events to if the template in `bulk.index` cannot be resolved
     */
    template_fallback_index?: string | null;
    version?: ATemplatedField10;
    version_type?: VersionType;
    [k: string]: unknown | undefined;
  };
  compression?: CompressionConfiguration;
  /**
   * Elasticsearch data stream mode configuration.
   */
  data_stream?: null | {
    auto_routing?: AutomaticallyRoutesEventsByDerivingTheDataStreamNameUsingSpecificEventFields;
    dataset?: ATemplatedField;
    namespace?: ATemplatedField;
    sync_fields?: AutomaticallyAddsAndSyncsTheDataStreamEventFieldsIfTheyAreMissingFromTheEvent;
    type?: ATemplatedField;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for determining the health of an endpoint.
   */
  distribution?: null | {
    /**
     * Initial delay between attempts to reactivate endpoints once they become unhealthy.
     */
    retry_initial_backoff_secs?: number;
    /**
     * Maximum delay between attempts to reactivate endpoints once they become unhealthy.
     */
    retry_max_duration_secs?: number;
    [k: string]: unknown | undefined;
  };
  doc_type?: TheDocTypeDocTypeForYourIndexData;
  encoding?: VectorCodecsEncodingTransformerTransformer4;
  endpoint?: TheElasticsearchEndpointToSendLogsTo;
  endpoints?: AListOfElasticsearchEndpointsToSendLogsTo;
  id_key?: TheNameOfTheEventKeyThatShouldMapToElasticsearchSIdFieldEsId;
  /**
   * Configuration for the `metric_to_log` transform.
   */
  metrics?: null | VectorTransformsMetricToLogMetricToLogConfig;
  /**
   * Elasticsearch Indexing mode.
   */
  mode?: 'bulk' | IngestsDocumentsInBulkUsingTheBulkAPICreateAction;
  /**
   * Amazon OpenSearch service type
   */
  opensearch_service_type?: 'managed' | 'serverless';
  /**
   * The name of the pipeline to apply.
   */
  pipeline?: string | null;
  /**
   * Custom parameters to add to the query string for each HTTP request sent to Elasticsearch.
   */
  query?: {
    [k: string]: string | undefined;
  } | null;
  /**
   * Outbound HTTP request settings.
   */
  request?: {
    /**
     * Additional HTTP headers to add to every HTTP request.
     */
    headers?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  } & MiddlewareSettingsForOutboundRequests1;
  request_retry_partial?: WhetherOrNotToRetrySuccessfulRequestsContainingPartialFailures;
  suppress_type_name?: WhetherOrNotToSendTheTypeFieldToElasticsearch;
  /**
   * TLS configuration.
   */
  tls?: null | VectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink15 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Additionally, the specific credential profile to use can be set.
 * The file format must match the credentials file format outlined in
 * <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html>.
 */
export interface AuthenticateUsingCredentialsStoredInAFile1 {
  /**
   * Path to the credentials file.
   */
  credentials_file: string;
  profile?: TheCredentialsProfileToUse;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint5 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings4 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer4 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `metric_to_log` transform.
 */
export interface VectorTransformsMetricToLogMetricToLogConfig {
  host_tag?: NameOfTheTagInTheMetricToUseForTheSourceHost;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  timezone?: TheNameOfTheTimeZoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink16 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of internal metrics for file-based components.
 */
export interface VectorInternalEventsFileFileInternalMetricsConfig {
  include_file_tag?: WhetherOrNotToIncludeTheFileTagOnTheComponentSCorrespondingInternalMetrics;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming3 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink17 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests13 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters4;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters4 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink18 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings2 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests14 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters5;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters5 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming4 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig1 {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink19 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests15 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig2 {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink20 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings5 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer5 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests16 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters6;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters6 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Exactly one of `billing_account_id`, `folder_id`, `organization_id`, or `project_id` must be set.
 */
export interface TheBillingAccountIDToWhichToPublishLogs {
  billing_account_id: string;
  [k: string]: unknown | undefined;
}
/**
 * See the [Google Cloud Platform folder documentation][folder_docs] for more details.
 *
 * Exactly one of `billing_account_id`, `folder_id`, `organization_id`, or `project_id` must be set.
 *
 * [folder_docs]: https://cloud.google.com/resource-manager/docs/creating-managing-folders
 */
export interface TheFolderIDToWhichToPublishLogs {
  folder_id: string;
  [k: string]: unknown | undefined;
}
/**
 * This would be the identifier assigned to your organization on Google Cloud Platform.
 *
 * Exactly one of `billing_account_id`, `folder_id`, `organization_id`, or `project_id` must be set.
 */
export interface TheOrganizationIDToWhichToPublishLogs {
  organization_id: string;
  [k: string]: unknown | undefined;
}
/**
 * See the [Google Cloud Platform project management documentation][project_docs] for more details.
 *
 * Exactly one of `billing_account_id`, `folder_id`, `organization_id`, or `project_id` must be set.
 *
 * [project_docs]: https://cloud.google.com/resource-manager/docs/creating-managing-projects
 */
export interface TheProjectIDToWhichToPublishLogs {
  project_id: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig3 {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink21 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests17 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters7;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters7 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig4 {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `greptimedb` sink.
 */
export interface VectorSinksGreptimedbMetricsConfigGreptimeDBConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink22;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksGreptimedbGreptimeDBDefaultBatchSettings;
  dbname?: TheGreptimeDBDatabaseDatabaseNameToConnect;
  endpoint: TheHostAndPortOfGreptimeDBGRPCService;
  /**
   * Set gRPC compression encoding for the request
   * Default to none, `gzip` or `zstd` is supported.
   */
  grpc_compression?: string | null;
  new_naming?: UseGreptimeSPrefixedNamingForTimeIndexAndValueColumns;
  password?: ThePasswordForYourGreptimeDBInstance;
  request?: MiddlewareSettingsForOutboundRequests18;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  username?: TheUsernameForYourGreptimeDBInstance;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink22 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksGreptimedbGreptimeDBDefaultBatchSettings {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests18 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `greptimedb_logs` sink.
 */
export interface VectorSinksGreptimedbLogsConfigGreptimeDBLogsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink23;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksGreptimedbGreptimeDBDefaultBatchSettings1;
  compression?: CompressionConfiguration;
  dbname?: ATemplatedField;
  encoding?: VectorCodecsEncodingTransformerTransformer6;
  /**
   * The endpoint of the GreptimeDB server.
   */
  endpoint: string;
  /**
   * Custom parameters to add to the query string for each HTTP request sent to GreptimeDB.
   */
  extra_params?: {
    [k: string]: string | undefined;
  } | null;
  password?: ThePasswordForYourGreptimeDBInstance;
  pipeline_name?: ATemplatedField;
  pipeline_version?: ATemplatedField20;
  request?: MiddlewareSettingsForOutboundRequests19;
  table: ATemplatedField;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  username?: TheUsernameForYourGreptimeDBInstance;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink23 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksGreptimedbGreptimeDBDefaultBatchSettings1 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer6 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests19 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration items for GreptimeDB
 */
export interface VectorSinksGreptimedbMetricsConfigGreptimeDBMetricsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink22;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksGreptimedbGreptimeDBDefaultBatchSettings;
  dbname?: TheGreptimeDBDatabaseDatabaseNameToConnect;
  endpoint: TheHostAndPortOfGreptimeDBGRPCService;
  /**
   * Set gRPC compression encoding for the request
   * Default to none, `gzip` or `zstd` is supported.
   */
  grpc_compression?: string | null;
  new_naming?: UseGreptimeSPrefixedNamingForTimeIndexAndValueColumns;
  password?: ThePasswordForYourGreptimeDBInstance;
  request?: MiddlewareSettingsForOutboundRequests18;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  username?: TheUsernameForYourGreptimeDBInstance;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `honeycomb` sink.
 */
export interface VectorSinksHoneycombConfigHoneycombConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink24;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  api_key: string;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  compression?: CompressionConfiguration;
  /**
   * The dataset to which logs are sent.
   */
  dataset: string;
  encoding?: VectorCodecsEncodingTransformerTransformer7;
  /**
   * Honeycomb's endpoint to send logs to
   */
  endpoint?: string;
  request?: MiddlewareSettingsForOutboundRequests20;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink24 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer7 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests20 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink25 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings6 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming5 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `humio_logs` sink.
 */
export interface VectorSinksHumioLogsHumioLogsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink26;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings;
  compression?: CompressionConfiguration;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint?: TheBaseURLOfTheHumioInstance;
  event_type?: TheTypeOfEventsSentToThisSinkHumioUsesThisAsTheNameOfTheParserToUseToIngestTheData;
  host_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToHumio;
  index?: OptionalNameOfTheRepositoryToIngestInto;
  indexed_fields?: EventFieldsToBeAddedToHumioSExtraFields;
  request?: MiddlewareSettingsForOutboundRequests21;
  source?: TheSourceOfEventsSentToThisSink;
  timestamp_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheTimestampToSendToHumioWhenSetToATimestampIsNotSetInTheEventsSentToHumio;
  /**
   * Overrides the name of the log field used to retrieve the nanosecond-enabled timestamp to send to Humio.
   */
  timestamp_nanos_key?: string | null;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  token: string;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink26 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests21 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink27 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings1 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests22 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `metric_to_log` transform.
 */
export interface VectorTransformsMetricToLogMetricToLogConfig1 {
  host_tag?: NameOfTheTagInTheMetricToUseForTheSourceHost;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  timezone?: TheNameOfTheTimeZoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink28 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer8 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests23 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink29 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests24 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink30 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * For more information on configuration options, see [Configuration properties][config_props_docs].
 *
 * [config_props_docs]: https://github.com/edenhill/librdkafka/blob/master/CONFIGURATION.md
 */
export interface AMapOfAdvancedOptionsToPassDirectlyToTheUnderlyingLibrdkafkaClient {
  [k: string]: string | undefined;
}
/**
 * Kafka authentication configuration.
 */
export interface VectorKafkaKafkaAuthConfig {
  /**
   * Configuration for SASL authentication when interacting with Kafka.
   */
  sasl?: null | {
    enabled?: EnablesSASLAuthentication;
    /**
     * The SASL mechanism to use.
     */
    mechanism?: string | null;
    /**
     * The SASL password.
     */
    password?: null | VectorCommonSensitiveStringSensitiveString;
    /**
     * The SASL username.
     */
    username?: string | null;
    [k: string]: unknown | undefined;
  };
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `logdna` sink.
 */
export interface VectorSinksMezmoLogdnaConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink31;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  api_key: string;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings7;
  /**
   * The default app that is set for events that do not contain a `file` or `app` field.
   */
  default_app?: string;
  /**
   * The default environment that is set for events that do not contain an `env` field.
   */
  default_env?: string;
  encoding?: VectorCodecsEncodingTransformerTransformer9;
  endpoint?: TheURIComponentOfARequest;
  hostname: ATemplatedField;
  /**
   * The IP address that is attached to each batch of events.
   */
  ip?: string | null;
  /**
   * The MAC address that is attached to each batch of events.
   */
  mac?: string | null;
  request?: MiddlewareSettingsForOutboundRequests25;
  /**
   * The tags that are attached to each batch of events.
   */
  tags?: ATemplatedField[] | null;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink31 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings7 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer9 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests25 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `loki` sink.
 */
export interface VectorSinksLokiConfigLokiConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink32;
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  compression?: CompressionConfiguration;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheURIComponentOfARequest;
  labels?: ASetOfLabelsThatAreAttachedToEachBatchOfEvents;
  out_of_order_action?: OutOfOrderEventBehavior;
  /**
   * The path to use in the URL of the Loki instance.
   */
  path?: string;
  /**
   * Whether or not to delete fields from the event when they are used as labels.
   */
  remove_label_fields?: boolean;
  /**
   * Whether or not to delete fields from the event when they are used in structured metadata.
   */
  remove_structured_metadata_fields?: boolean;
  remove_timestamp?: WhetherOrNotToRemoveTheTimestampFromTheEventPayload;
  request?: MiddlewareSettingsForOutboundRequests26;
  structured_metadata?: StructuredMetadataThatIsAttachedToEachBatchOfEvents;
  tenant_id?: TheTenantIDTenantIdToSpecifyInRequestsToLoki;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink32 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Both keys and values are templateable, which enables you to attach dynamic labels to events.
 *
 * Valid label keys include `*`, and prefixes ending with `*`, to allow for the expansion of
 * objects into multiple labels. See [Label expansion][label_expansion] for more information.
 *
 * Note: If the set of labels has high cardinality, this can cause drastic performance issues
 * with Loki. To prevent this from happening, reduce the number of unique label keys and
 * values.
 *
 * [label_expansion]: https://vector.dev/docs/reference/configuration/sinks/loki/#label-expansion
 */
export interface ASetOfLabelsThatAreAttachedToEachBatchOfEvents {
  [k: string]: ATemplatedField;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests26 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Both keys and values are templateable, which enables you to attach dynamic structured metadata to events.
 *
 * Valid metadata keys include `*`, and prefixes ending with `*`, to allow for the expansion of
 * objects into multiple metadata entries. This follows the same logic as [Label expansion][label_expansion].
 *
 * [label_expansion]: https://vector.dev/docs/reference/configuration/sinks/loki/#label-expansion
 */
export interface StructuredMetadataThatIsAttachedToEachBatchOfEvents {
  [k: string]: ATemplatedField;
}
/**
 * Configuration for the `mezmo` (formerly `logdna`) sink.
 */
export interface VectorSinksMezmoMezmoConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink31;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  api_key: string;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings7;
  /**
   * The default app that is set for events that do not contain a `file` or `app` field.
   */
  default_app?: string;
  /**
   * The default environment that is set for events that do not contain an `env` field.
   */
  default_env?: string;
  encoding?: VectorCodecsEncodingTransformerTransformer9;
  endpoint?: TheURIComponentOfARequest;
  hostname: ATemplatedField;
  /**
   * The IP address that is attached to each batch of events.
   */
  ip?: string | null;
  /**
   * The MAC address that is attached to each batch of events.
   */
  mac?: string | null;
  request?: MiddlewareSettingsForOutboundRequests25;
  /**
   * The tags that are attached to each batch of events.
   */
  tags?: ATemplatedField[] | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `mqtt` sink
 */
export interface VectorSinksMqttConfigMqttSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink33;
  /**
   * If set to true, the MQTT session is cleaned on login.
   */
  clean_session?: boolean;
  /**
   * MQTT client ID.
   */
  client_id?: string | null;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * MQTT server address (The broker’s domain name or IP address).
   */
  host: string;
  /**
   * Connection keep-alive interval.
   */
  keep_alive?: number;
  /**
   * MQTT password.
   */
  password?: string | null;
  /**
   * TCP port of the MQTT server to connect to.
   */
  port?: number;
  /**
   * Supported Quality of Service types for MQTT.
   */
  quality_of_service?: 'atleastonce' | 'atmostonce' | 'exactlyonce';
  /**
   * Whether the messages should be retained by the server
   */
  retain?: boolean;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  topic: ATemplatedField;
  /**
   * MQTT username.
   */
  user?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink33 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `nats` sink.
 */
export interface VectorSinksNatsConfigNatsSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink34;
  auth?: CoreOptionOptionVectorNatsNatsAuthConfig;
  connection_name?: ANATSNameNatsConnectionNameAssignedToTheNATSConnection;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  jetstream?: SendMessagesUsingJetstreamJetstream;
  request?: MiddlewareSettingsForOutboundRequests27;
  subject: ATemplatedField;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  url: TheNATSURLNatsUrlToConnectTo;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink34 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests27 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters8;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters8 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `new_relic` sink.
 */
export interface VectorSinksNewRelicConfigNewRelicConfig {
  /**
   * Wrapper for sensitive strings containing credentials
   */
  account_id: string;
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink35;
  /**
   * New Relic API endpoint.
   */
  api: 'events' | 'metrics' | 'logs';
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  compression?: CompressionConfiguration;
  encoding?: VectorCodecsEncodingTransformerTransformer10;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  license_key: string;
  /**
   * New Relic region.
   */
  region?: null | ('us' | 'eu');
  request?: MiddlewareSettingsForOutboundRequests28;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink35 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer10 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests28 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `OpenTelemetry` sink.
 */
export interface VectorSinksOpentelemetryOpenTelemetryConfig {
  /**
   * Protocol configuration
   */
  protocol: ({
    acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink25;
    auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
    batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings6;
    compression?: CompressionConfiguration;
    /**
     * @deprecated
     * A list of custom headers to add to each request.
     */
    headers?: {
      [k: string]: string | undefined;
    } | null;
    method?: HTTPMethod;
    payload_prefix?: AStringToPrefixThePayloadWith;
    payload_suffix?: AStringToSuffixThePayloadWith;
    /**
     * Outbound HTTP request settings.
     */
    request?: {
      /**
       * Additional HTTP headers to add to every HTTP request.
       */
      headers?: {
        [k: string]: string | undefined;
      };
      [k: string]: unknown | undefined;
    } & MiddlewareSettingsForOutboundRequests1;
    tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
    uri: TheURIComponentOfARequest;
    [k: string]: unknown | undefined;
  } & VectorCodecsEncodingConfigEncodingConfigWithFraming5) & {
    /**
     * Send data over HTTP.
     */
    type: 'http';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `papertrail` sink.
 */
export interface VectorSinksPapertrailPapertrailConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink36;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheURIComponentOfARequest;
  keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
  process?: ATemplatedField;
  /**
   * Configures the send buffer size using the `SO_SNDBUF` option on the socket.
   */
  send_buffer_bytes?: number | null;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink36 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `prometheus_exporter` sink.
 */
export interface VectorSinksPrometheusExporterPrometheusExporterConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink37;
  address?: TheAddressToExposeForScraping;
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  buckets?: DefaultBucketsToUseForAggregatingDistributionDistMetricDocsMetricsIntoHistograms;
  default_namespace?: TheDefaultNamespaceForAnyMetricsSent;
  distributions_as_summaries?: WhetherOrNotToRenderDistributionsDistMetricDocsAsAnAggregatedHistogramPromAggHistDocsOrAggregatedSummaryPromAggSummDocs;
  flush_period_secs?: TheIntervalInSecondsOnWhichMetricsAreFlushed;
  quantiles?: QuantilesToUseForAggregatingDistributionDistMetricDocsMetricsIntoASummary;
  suppress_timestamp?: SuppressesTimestampsOnThePrometheusOutput;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink37 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `prometheus_remote_write` sink.
 */
export interface VectorSinksPrometheusRemoteWriteConfigRemoteWriteConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink38;
  /**
   * Authentication strategies.
   */
  auth?:
    | null
    | (
        | {
            /**
             * Basic authentication password.
             */
            password: string;
            /**
             * HTTP Basic Authentication.
             */
            strategy: 'basic';
            /**
             * Basic authentication username.
             */
            user: string;
            [k: string]: unknown | undefined;
          }
        | BearerAuthentication2
        | ((
            | {
                /**
                 * Wrapper for sensitive strings containing credentials
                 */
                access_key_id: string;
                assume_role?: TheARNOfAnIAMRoleIamRoleToAssume;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                /**
                 * Wrapper for sensitive strings containing credentials
                 */
                secret_access_key: string;
                [k: string]: unknown | undefined;
              }
            | AuthenticateUsingCredentialsStoredInAFile2
            | {
                assume_role: TheARNOfAnIAMRoleIamRoleToAssume5;
                external_id?: TheOptionalUniqueExternalIDInConjunctionWithRoleToAssume;
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForAssumingTheRoleInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
            | {
                /**
                 * Configuration for authenticating with AWS through IMDS.
                 */
                imds?: {
                  /**
                   * Connect timeout for IMDS.
                   */
                  connect_timeout_seconds?: number;
                  /**
                   * Number of IMDS retries for fetching tokens and metadata.
                   */
                  max_attempts?: number;
                  /**
                   * Read timeout for IMDS.
                   */
                  read_timeout_seconds?: number;
                  [k: string]: unknown | undefined;
                };
                load_timeout_secs?: TimeoutForSuccessfullyLoadingAnyCredentialsInSeconds;
                region?: TheAWSRegionAwsRegionToSendSTSRequestsTo;
                [k: string]: unknown | undefined;
              }
          ) & {
            /**
             * Amazon Prometheus Service-specific authentication.
             */
            strategy: 'aws';
            [k: string]: unknown | undefined;
          })
      );
  aws?: CoreOptionOptionVectorAwsRegionRegionOrEndpoint;
  /**
   * The batch config for remote write.
   */
  batch?: {
    /**
     * Whether or not to aggregate metrics within a batch.
     */
    aggregate?: boolean;
    [k: string]: unknown | undefined;
  } & {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  buckets?: DefaultBucketsToUseForAggregatingDistributionDistMetricDocsMetricsIntoHistograms;
  compression?: CompressionConfiguration;
  default_namespace?: TheDefaultNamespaceForAnyMetricsSent;
  endpoint: TheEndpointToSendDataTo;
  quantiles?: QuantilesToUseForAggregatingDistributionDistMetricDocsMetricsIntoASummary;
  request?: MiddlewareSettingsForOutboundRequests29;
  tenant_id?: TheTenantIDToSend;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink38 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * A bearer token (OAuth2, JWT, etc) is passed as-is.
 */
export interface BearerAuthentication2 {
  strategy: BearerAuthentication3;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  token: string;
  [k: string]: unknown | undefined;
}
/**
 * Additionally, the specific credential profile to use can be set.
 * The file format must match the credentials file format outlined in
 * <https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html>.
 */
export interface AuthenticateUsingCredentialsStoredInAFile2 {
  /**
   * Path to the credentials file.
   */
  credentials_file: string;
  profile?: TheCredentialsProfileToUse;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests29 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `pulsar` sink.
 */
export interface VectorSinksPulsarConfigPulsarSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink39;
  /**
   * Authentication configuration.
   */
  auth?: null | {
    name?: BasicAuthenticationNameUsername;
    /**
     * OAuth2-specific authentication configuration.
     */
    oauth2?: null | {
      /**
       * The OAuth2 audience.
       */
      audience?: string | null;
      credentials_url: TheCredentialsURL;
      /**
       * The issuer URL.
       */
      issuer_url: string;
      /**
       * The OAuth2 scope.
       */
      scope?: string | null;
      [k: string]: unknown | undefined;
    };
    token?: BasicAuthenticationPasswordToken;
    [k: string]: unknown | undefined;
  };
  /**
   * Event batching behavior.
   */
  batch?: {
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_bytes?: number | null;
    max_events?: TheMaximumAmountOfEventsInABatchBeforeItIsFlushed;
    [k: string]: unknown | undefined;
  };
  /**
   * Supported compression types for Pulsar.
   */
  compression?: 'none' | 'lz4' | 'zlib' | 'zstd' | 'snappy';
  /**
   * Custom connection retry options configuration for the Pulsar client.
   */
  connection_retry_options?: null | {
    /**
     * Time limit to establish a connection.
     */
    connection_timeout_secs?: number | null;
    /**
     * Keep-alive interval for each broker connection.
     */
    keep_alive_secs?: number | null;
    /**
     * Maximum delay between reconnection retries.
     */
    max_backoff_secs?: number | null;
    /**
     * Maximum number of connection retries.
     */
    max_retries?: number | null;
    /**
     * Minimum delay between connection retries.
     */
    min_backoff_ms?: number | null;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheEndpointToWhichThePulsarClientShouldConnectTo;
  partition_key_field?: TheLogFieldNameOrTagsKeyToUseForThePartitionKey;
  /**
   * The name of the producer. If not specified, the default name assigned by Pulsar is used.
   */
  producer_name?: string | null;
  properties_key?: TheLogFieldNameToUseForThePulsarPropertiesKey;
  topic: ATemplatedField;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink39 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `redis` sink.
 */
export interface VectorSinksRedisConfigRedisSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink40;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  /**
   * Redis data type to store messages in.
   */
  data_type?: TheRedisListType | TheRedisChannelType;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheURLOfTheRedisEndpointToConnectTo;
  key: ATemplatedField;
  /**
   * List-specific options.
   */
  list_option?: null | {
    /**
     * The method to use for pushing messages into a `list`.
     */
    method: UseTheRpushMethod | UseTheLpushMethod;
    [k: string]: unknown | undefined;
  };
  request?: MiddlewareSettingsForOutboundRequests30;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink40 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests30 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters9;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * These parameters typically do not require changes from the default, and incorrect values can lead to meta-stable or
 * unstable performance and sink behavior. Proceed with caution.
 */
export interface ConfigurationOfAdaptiveConcurrencyParameters9 {
  decrease_ratio?: TheFractionOfTheCurrentValueToSetTheNewConcurrencyLimitWhenDecreasingTheLimit;
  ewma_alpha?: TheWeightingOfNewMeasurementsComparedToOlderMeasurements;
  initial_concurrency?: TheInitialConcurrencyLimitToUseIfNotSpecifiedTheInitialLimitWillBe1NoConcurrency;
  max_concurrency_limit?: TheMaximumConcurrencyLimit;
  rtt_deviation_scale?: ScaleOfRTTDeviationsWhichAreNotConsideredAnomalous;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `sematext_logs` sink.
 */
export interface VectorSinksSematextLogsSematextLogsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink41;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings8;
  encoding?: VectorCodecsEncodingTransformerTransformer11;
  endpoint?: TheEndpointToSendDataTo3;
  /**
   * The Sematext region to send data to.
   */
  region?: 'us' | 'eu';
  request?: MiddlewareSettingsForOutboundRequests31;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  token: string;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink41 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchRealtimeSizeBasedDefaultBatchSettings8 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Transformations to prepare an event for serialization.
 */
export interface VectorCodecsEncodingTransformerTransformer11 {
  /**
   * List of fields that are excluded from the encoded event.
   */
  except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * List of fields that are included in the encoded event.
   */
  only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
  /**
   * Format used for timestamp fields.
   */
  timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests31 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `sematext_metrics` sink.
 */
export interface VectorSinksSematextMetricsSematextMetricsConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink42;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  default_namespace: SetsTheDefaultNamespaceForAnyMetricsSent2;
  endpoint?: TheEndpointToSendDataTo4;
  /**
   * The Sematext region to send data to.
   */
  region?: 'us' | 'eu';
  request?: MiddlewareSettingsForOutboundRequests32;
  /**
   * Wrapper for sensitive strings containing credentials
   */
  token: string;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink42 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests32 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink43 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming6 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming7 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming8 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `splunk_hec_logs` sink.
 */
export interface VectorSinksSplunkHecLogsConfigHecLogsSinkConfig {
  /**
   * Splunk HEC acknowledgement configuration.
   */
  acknowledgements?: {
    indexer_acknowledgements_enabled?: ControlsIfTheSinkIntegratesWithSplunkHECIndexerAcknowledgementsSplunkIndexerAckDocsForEndToEndAcknowledgements;
    max_pending_acks?: TheMaximumNumberOfPendingAcknowledgementsFromEventsSentToTheSplunkHECCollector;
    /**
     * The amount of time to wait between queries to the Splunk HEC indexer acknowledgement endpoint.
     */
    query_interval?: number;
    /**
     * The maximum number of times an acknowledgement ID is queried for its status.
     */
    retry_limit?: number;
    [k: string]: unknown | undefined;
  } & ControlsHowAcknowledgementsAreHandledForThisSink44;
  auto_extract_timestamp?: PassesTheAutoExtractTimestampOptionToSplunk;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings2;
  compression?: CompressionConfiguration;
  default_token: DefaultSplunkHECToken;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  endpoint: TheBaseURLOfTheSplunkInstance;
  /**
   * Splunk HEC endpoint configuration.
   */
  endpoint_target?: EventsAreSentToTheRawEndpointRawEndpointDocs | EventsAreSentToTheEventEndpointEventEndpointDocs;
  host_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToSplunkHEC;
  index?: TheNameOfTheIndexToSendEventsTo;
  indexed_fields?: FieldsToBeAddedToSplunkIndexSplunkFieldIndexDocs;
  request?: MiddlewareSettingsForOutboundRequests33;
  source?: TheSourceOfEventsSentToThisSink;
  sourcetype?: TheSourcetypeOfEventsSentToThisSink;
  timestamp_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheTimestampToSendToSplunkHECWhenSetToATimestampIsNotSetInTheEventsSentToSplunkHEC;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink44 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings2 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests33 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the `splunk_hec_metrics` sink.
 */
export interface VectorSinksSplunkHecMetricsConfigHecMetricsSinkConfig {
  /**
   * Splunk HEC acknowledgement configuration.
   */
  acknowledgements?: {
    indexer_acknowledgements_enabled?: ControlsIfTheSinkIntegratesWithSplunkHECIndexerAcknowledgementsSplunkIndexerAckDocsForEndToEndAcknowledgements;
    max_pending_acks?: TheMaximumNumberOfPendingAcknowledgementsFromEventsSentToTheSplunkHECCollector;
    /**
     * The amount of time to wait between queries to the Splunk HEC indexer acknowledgement endpoint.
     */
    query_interval?: number;
    /**
     * The maximum number of times an acknowledgement ID is queried for its status.
     */
    retry_limit?: number;
    [k: string]: unknown | undefined;
  } & ControlsHowAcknowledgementsAreHandledForThisSink44;
  batch?: VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings3;
  compression?: CompressionConfiguration;
  default_namespace?: SetsTheDefaultNamespaceForAnyMetricsSent;
  default_token: DefaultSplunkHECToken;
  endpoint: TheBaseURLOfTheSplunkInstance;
  host_key?: OverridesTheNameOfTheLogFieldUsedToRetrieveTheHostnameToSendToSplunkHEC1;
  index?: TheNameOfTheIndexWhereToSendTheEventsTo;
  request?: MiddlewareSettingsForOutboundRequests34;
  source?: TheSourceOfEventsSentToThisSink;
  sourcetype?: TheSourcetypeOfEventsSentToThisSink;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksSplunkHecCommonUtilSplunkHecDefaultBatchSettings3 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests34 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink45 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `unit_test` sink.
 */
export interface VectorConfigUnitTestUnitTestComponentsUnitTestSinkConfig {
  /**
   * Name of the test that this sink is being used for.
   */
  test_name: string;
  /**
   * List of names of the transform/branch associated with this sink.
   */
  transform_ids: string[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `unit_test_stream` sink.
 */
export interface VectorConfigUnitTestUnitTestComponentsUnitTestStreamSinkConfig {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `vector` sink.
 */
export interface VectorSinksVectorConfigVectorConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink46;
  address: TheDownstreamVectorAddressToWhichToConnect;
  /**
   * Event batching behavior.
   */
  batch?: {
    max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
    /**
     * The maximum size of a batch before it is flushed.
     */
    max_events?: number | null;
    /**
     * The maximum age of a batch before it is flushed.
     */
    timeout_secs?: number | null;
    [k: string]: unknown | undefined;
  };
  compression?: WhetherOrNotToCompressRequests;
  request?: MiddlewareSettingsForOutboundRequests35;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  /**
   * Version of the configuration.
   */
  version?: null | '2';
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink46 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Various settings can be configured, such as concurrency and rate limits, timeouts, retry behavior, etc.
 *
 * Note that the retry backoff policy follows the Fibonacci sequence.
 */
export interface MiddlewareSettingsForOutboundRequests35 {
  adaptive_concurrency?: ConfigurationOfAdaptiveConcurrencyParameters;
  /**
   * Configuration for outbound request concurrency.
   *
   * This can be set either to one of the below enum values or to a positive integer, which denotes
   * a fixed concurrency limit.
   */
  concurrency?: AFixedConcurrencyOf1 | ConcurrencyWillBeManagedByVectorSAdaptiveRequestConcurrencyArcFeature | number;
  /**
   * The time window used for the `rate_limit_num` option.
   */
  rate_limit_duration_secs?: number;
  /**
   * The maximum number of requests allowed within the `rate_limit_duration_secs` time window.
   */
  rate_limit_num?: number;
  /**
   * The maximum number of retries to make for failed requests.
   */
  retry_attempts?: number;
  retry_initial_backoff_secs?: TheAmountOfTimeToWaitBeforeAttemptingTheFirstRetryForAFailedRequest;
  /**
   * The jitter mode to use for retry backoff behavior.
   */
  retry_jitter_mode?: 'None' | FullJitter;
  /**
   * The maximum amount of time to wait between retries.
   */
  retry_max_duration_secs?: number;
  timeout_secs?: TheTimeARequestCanTakeBeforeBeingAborted;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink47 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Event batching behavior.
 */
export interface VectorSinksUtilBatchBatchConfigVectorSinksUtilBatchBulkSizeBasedDefaultBatchSettings3 {
  max_bytes?: TheMaximumSizeOfABatchThatIsProcessedByASink;
  /**
   * The maximum size of a batch before it is flushed.
   */
  max_events?: number | null;
  /**
   * The maximum age of a batch before it is flushed.
   */
  timeout_secs?: number | null;
  [k: string]: unknown | undefined;
}
/**
 * Encoding configuration.
 */
export interface VectorCodecsEncodingConfigEncodingConfigWithFraming9 {
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  /**
   * Framing configuration.
   */
  framing?:
    | null
    | (
        | {
            /**
             * Event data is not delimited at all.
             */
            method: 'bytes';
            [k: string]: unknown | undefined;
          }
        | ({
            /**
             * Options for the character delimited encoder.
             */
            character_delimited: {
              /**
               * The ASCII (7-bit) character that delimits byte sequences.
               */
              delimiter: number;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          } & {
            /**
             * Event data is delimited by a single ASCII (7-bit) character.
             */
            method: 'character_delimited';
            [k: string]: unknown | undefined;
          })
        | EventDataIsPrefixedWithItsLengthInBytes
        | {
            /**
             * Event data is delimited by a newline (LF) character.
             */
            method: 'newline_delimited';
            [k: string]: unknown | undefined;
          }
      );
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `websocket` sink.
 */
export interface VectorSinksWebsocketConfigWebSocketSinkConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledForThisSink48;
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  /**
   * Configures how events are encoded into raw bytes.
   */
  encoding: (
    | EncodesAnEventAsAnApacheAvroApacheAvroMessage
    | ({
        /**
         * The CEF Serializer Options.
         */
        cef: {
          /**
           * Unique identifier for each event type. Identifies the type of event reported.
           * The value length must be less than or equal to 1023.
           */
          device_event_class_id: string;
          /**
           * Identifies the product of a vendor.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_product: string;
          /**
           * Identifies the vendor of the product.
           * The part of a unique device identifier. No two products can use the same combination of device vendor and device product.
           * The value length must be less than or equal to 63.
           */
          device_vendor: string;
          /**
           * Identifies the version of the problem. In combination with device product and vendor, it composes the unique id of the device that sends messages.
           * The value length must be less than or equal to 31.
           */
          device_version: string;
          /**
           * The collection of key-value pairs. Keys are the keys of the extensions, and values are paths that point to the extension values of a log event.
           * The event can have any number of key-value pairs in any order.
           */
          extensions?: {
            [k: string]: VectorLookupLookupV2ConfigTargetPath | undefined;
          };
          /**
           * A wrapper around `OwnedTargetPath` that allows it to be used in Vector config
           * with prefix default to `PathPrefix::Event`
           */
          name: string;
          severity: ThisIsAPathThatPointsToTheFieldOfALogEventThatReflectsImportanceOfTheEventReflectsImportanceOfTheEvent;
          /**
           * CEF Version. Can be either 0 or 1.
           * Equals to "0" by default.
           */
          version: 'V0' | 'V1';
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      } & {
        /**
         * Encodes an event as a CEF (Common Event Format) formatted message.
         */
        codec: 'cef';
        [k: string]: unknown | undefined;
      })
    | EncodesAnEventAsACSVMessage
    | EncodesAnEventAsAGELFGelfMessage
    | EncodesAnEventAsJSONJson
    | EncodesAnEventAsALogfmtLogfmtMessage
    | EncodesAnEventInTheNativeProtocolBuffersFormatVectorNativeProtobuf
    | EncodesAnEventInTheNativeJSONFormatVectorNativeJson
    | EncodesAnEventAsAProtobufProtobufMessage
    | NoEncoding
    | PlainTextEncoding
  ) & {
    /**
     * List of fields that are excluded from the encoded event.
     */
    except_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * List of fields that are included in the encoded event.
     */
    only_fields?: VectorLookupLookupV2ConfigValuePath[] | null;
    /**
     * Format used for timestamp fields.
     */
    timestamp_format?: null | ('unix' | 'rfc3339' | 'unix_ms' | 'unix_us' | 'unix_ns' | 'unix_float');
    [k: string]: unknown | undefined;
  };
  ping_interval?: TheIntervalInSecondsBetweenSendingPingPingSToTheRemotePeer;
  ping_timeout?: TheNumberOfSecondsToWaitForAPongPongResponseFromTheRemotePeer;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  uri: TheWebSocketURIToConnectTo;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForThisSink48 {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * Configure output for component when generated with graph command
 */
export interface ExtraGraphConfiguration1 {
  node_attributes?: NodeAttributesToAddToThisComponentSNodeInResultingGraph;
  [k: string]: unknown | undefined;
}
/**
 * Configure to proxy traffic through an HTTP(S) proxy when making external requests.
 *
 * Similar to common proxy configuration convention, you can set different proxies
 * to use based on the type of traffic being proxied. You can also set specific hosts that
 * should not be proxied.
 */
export interface ProxyConfiguration2 {
  /**
   * Enables proxying support.
   */
  enabled?: boolean;
  http?: ProxyEndpointToUseWhenProxyingHTTPTraffic;
  https?: ProxyEndpointToUseWhenProxyingHTTPSTraffic;
  no_proxy?: AListOfHostsToAvoidProxying;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export interface DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf {
  codec: DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf1;
  [k: string]: unknown | undefined;
}
/**
 * [apache_avro]: https://avro.apache.org/
 */
export interface DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage {
  /**
   * Apache Avro-specific encoder options.
   */
  avro: {
    /**
     * The Avro schema definition.
     * Please note that the following [`apache_avro::types::Value`] variants are currently *not* supported:
     * * `Date`
     * * `Decimal`
     * * `Duration`
     * * `Fixed`
     * * `TimeMillis`
     */
    schema: string;
    /**
     * For Avro datum encoded in Kafka messages, the bytes are prefixed with the schema ID.  Set this to true to strip the schema ID prefix.
     * According to [Confluent Kafka's document](https://docs.confluent.io/platform/current/schema-registry/fundamentals/serdes-develop/index.html#wire-format).
     */
    strip_schema_id_prefix: boolean;
    [k: string]: unknown | undefined;
  };
  codec: DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage1;
  [k: string]: unknown | undefined;
}
/**
 * Options for the length delimited decoder.
 */
export interface CodecsCommonLengthDelimitedLengthDelimitedCoderOptions1 {
  /**
   * Length field byte order (little or big endian)
   */
  length_field_is_big_endian?: boolean;
  /**
   * Number of bytes representing the field length
   */
  length_field_length?: number;
  /**
   * Number of bytes in the header before the length field
   */
  length_field_offset?: number;
  /**
   * Maximum frame length
   */
  max_frame_length?: number;
  [k: string]: unknown | undefined;
}
/**
 * AMQP connection options.
 */
export interface VectorAmqpAmqpConfig1 {
  connection_string: URIForTheAMQPServer;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `apache_metrics` source.
 */
export interface VectorSourcesApacheMetricsApacheMetricsConfig {
  /**
   * The list of `mod_status` endpoints to scrape metrics from.
   */
  endpoints: string[];
  namespace?: TheNamespaceOfTheMetric;
  /**
   * The interval between scrapes.
   */
  scrape_interval_secs?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `aws_ecs_metrics` source.
 */
export interface VectorSourcesAwsEcsMetricsAwsEcsMetricsSourceConfig {
  endpoint?: BaseURIOfTheTaskMetadataEndpoint;
  namespace?: TheNamespaceOfTheMetric;
  /**
   * The interval between scrapes, in seconds.
   */
  scrape_interval_secs?: number;
  version?: TheVersionOfTheTaskMetadataEndpointToUse;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `aws_kinesis_firehose` source.
 */
export interface VectorSourcesAwsKinesisFirehoseAwsKinesisFirehoseConfig {
  access_key?: AnAccessKeyToAuthenticateRequestsAgainst;
  access_keys?: AListOfAccessKeysToAuthenticateRequestsAgainst;
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource1;
  /**
   * The socket address to listen for connections on.
   */
  address: string;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  framing?: FramingConfiguration;
  keepalive?: VectorHttpKeepaliveConfig;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  record_compression?: TheCompressionSchemeToUseForDecompressingRecordsWithinTheFirehoseMessage;
  store_access_key: WhetherOrNotToStoreTheAWSFirehoseAccessKeyInEventSecrets;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource1 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource2 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint6 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource3 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the region/endpoint to use when interacting with an AWS service.
 */
export interface VectorAwsRegionRegionOrEndpoint7 {
  /**
   * Custom endpoint for use with AWS-compatible services.
   */
  endpoint?: string | null;
  region?: TheAWSRegionAwsRegionOfTheTargetService;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `datadog_agent` source.
 */
export interface VectorSourcesDatadogAgentDatadogAgentConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource4;
  address: TheSocketAddressToAcceptConnectionsOn;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  /**
   * If this is set to `true`, logs are not accepted by the component.
   */
  disable_logs?: boolean;
  /**
   * If this is set to `true`, metrics (beta) are not accepted by the component.
   */
  disable_metrics?: boolean;
  /**
   * If this is set to `true`, traces (alpha) are not accepted by the component.
   */
  disable_traces?: boolean;
  framing?: FramingConfiguration;
  keepalive?: VectorHttpKeepaliveConfig1;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  multiple_outputs?: IfThisIsSetToTrueLogsMetricsBetaAndTracesAlphaAreSentToDifferentOutputs;
  /**
   * If this is set to `true`, when log events contain the field `ddtags`, the string value that
   * contains a list of key:value pairs set by the Agent is parsed and expanded into an array.
   */
  parse_ddtags?: boolean;
  /**
   * If this is set to `true`, when incoming events contain a Datadog API key, it is
   * stored in the event metadata and used if the event is sent to a Datadog sink.
   */
  store_api_key?: boolean;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource4 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig1 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * [apache_common]: https://httpd.apache.org/docs/current/logs.html#common
 */
export interface RandomlyGeneratedLogsInApacheCommonApacheCommonFormat {
  format: RandomlyGeneratedLogsInApacheCommonApacheCommonFormat1;
  [k: string]: unknown | undefined;
}
/**
 * [apache_error]: https://httpd.apache.org/docs/current/logs.html#errorlog
 */
export interface RandomlyGeneratedLogsInApacheErrorApacheErrorFormat {
  format: RandomlyGeneratedLogsInApacheErrorApacheErrorFormat1;
  [k: string]: unknown | undefined;
}
/**
 * [syslog_5424]: https://tools.ietf.org/html/rfc5424
 */
export interface RandomlyGeneratedLogsInSyslogFormatRFC5424Syslog_5424 {
  format: RandomlyGeneratedLogsInSyslogFormatRFC5424Syslog_54241;
  [k: string]: unknown | undefined;
}
/**
 * [syslog_3164]: https://tools.ietf.org/html/rfc3164
 */
export interface RandomlyGeneratedLogsInSyslogFormatRFC3164Syslog_3164 {
  format: RandomlyGeneratedLogsInSyslogFormatRFC3164Syslog_31641;
  [k: string]: unknown | undefined;
}
/**
 * [json]: https://en.wikipedia.org/wiki/JSON
 */
export interface RandomlyGeneratedHTTPServerLogsInJSONJsonFormat {
  format: RandomlyGeneratedHTTPServerLogsInJSONJsonFormat1;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `docker_logs` source.
 */
export interface VectorSourcesDockerLogsDockerLogsConfig {
  /**
   * Enables automatic merging of partial events.
   */
  auto_partial_merge?: boolean;
  docker_host?: DockerHostToConnectTo;
  exclude_containers?: AListOfContainerIDsOrNamesOfContainersToExcludeFromLogCollection;
  host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent;
  include_containers?: AListOfContainerIDsOrNamesOfContainersToIncludeInLogCollection;
  include_images?: AListOfImageNamesToMatchAgainst;
  include_labels?: AListOfContainerObjectLabelsToMatchAgainstWhenFilteringRunningContainers;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  multiline?: MultilineAggregationConfiguration;
  partial_event_marker_field?: OverridesTheNameOfTheLogFieldUsedToMarkAnEventAsPartial;
  /**
   * The amount of time to wait before retrying after an error.
   */
  retry_backoff_secs?: number;
  tls?: ConfigurationOfTLSWhenConnectingToTheDockerDaemon;
  [k: string]: unknown | undefined;
}
/**
 * Only relevant when connecting to Docker with an HTTPS URL.
 *
 * If not configured, the environment variable `DOCKER_CERT_PATH` is used. If `DOCKER_CERT_PATH` is absent, then` DOCKER_CONFIG` is used. If both environment variables are absent, the certificates in `~/.docker/` are read.
 */
export interface ConfigurationOfTLSWhenConnectingToTheDockerDaemon1 {
  /**
   * A file path.
   */
  ca_file: string;
  /**
   * A file path.
   */
  crt_file: string;
  /**
   * A file path.
   */
  key_file: string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `eventstoredb_metrics` source.
 */
export interface VectorSourcesEventstoredbMetricsEventStoreDbConfig {
  default_namespace?: OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource;
  /**
   * Endpoint to scrape stats from.
   */
  endpoint?: string;
  /**
   * The interval between scrapes, in seconds.
   */
  scrape_interval_secs?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `exec` source.
 */
export interface VectorSourcesExecExecConfig {
  /**
   * Whether or not to clear the environment before setting custom environment variables.
   */
  clear_environment?: boolean;
  /**
   * The command to run, plus any arguments required.
   */
  command: string[];
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  /**
   * Custom environment variables to set or update when running the command.
   * If a variable name already exists in the environment, its value is replaced.
   */
  environment?: {
    [k: string]: string | undefined;
  } | null;
  framing?: FramingConfiguration6;
  /**
   * Whether or not the output from stderr should be included when generating events.
   */
  include_stderr?: boolean;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * The maximum buffer size allowed before a log event is generated.
   */
  maximum_buffer_size_bytes?: number;
  /**
   * Mode of operation for running the command.
   */
  mode: 'scheduled' | 'streaming';
  /**
   * Configuration options for scheduled commands.
   */
  scheduled?: null | {
    exec_interval_secs?: TheIntervalInSecondsBetweenScheduledCommandRuns;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration options for streaming commands.
   */
  streaming?: null | {
    /**
     * The amount of time, in seconds, before rerunning a streaming command that exited.
     */
    respawn_interval_secs?: number;
    /**
     * Whether or not the command should be rerun if the command exits.
     */
    respawn_on_exit?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * The directory in which to run the command.
   */
  working_directory?: null | StdlibPathBuf;
  [k: string]: unknown | undefined;
}
/**
 * Options for the length delimited decoder.
 */
export interface CodecsCommonLengthDelimitedLengthDelimitedCoderOptions2 {
  /**
   * Length field byte order (little or big endian)
   */
  length_field_is_big_endian?: boolean;
  /**
   * Number of bytes representing the field length
   */
  length_field_length?: number;
  /**
   * Number of bytes in the header before the length field
   */
  length_field_offset?: number;
  /**
   * Maximum frame length
   */
  max_frame_length?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `file` source.
 */
export interface VectorSourcesFileFileConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource5;
  data_dir?: TheDirectoryUsedToPersistFileCheckpointPositions;
  /**
   * Character set encoding.
   */
  encoding?: null | {
    charset: EncodingOfTheSourceMessages;
    [k: string]: unknown | undefined;
  };
  exclude?: ArrayOfFilePatternsToExcludeGlobbingHttpsVectorDevDocsReferenceConfigurationSourcesFileGlobbingIsSupported;
  file_key?: OverridesTheNameOfTheLogFieldUsedToAddTheFilePathToEachEvent;
  fingerprint?: ConfigurationForHowFilesShouldBeIdentified;
  glob_minimum_cooldown_ms?: TheDelayBetweenFileDiscoveryCalls;
  host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent;
  ignore_checkpoints?: WhetherOrNotToIgnoreExistingCheckpointsWhenDeterminingWhereToStartReadingAFile;
  ignore_not_found?: IgnoreMissingFilesWhenFingerprinting;
  /**
   * Ignore files with a data modification date older than the specified number of seconds.
   */
  ignore_older_secs?: number | null;
  /**
   * Array of file patterns to include. [Globbing](https://vector.dev/docs/reference/configuration/sources/file/#globbing) is supported.
   */
  include: StdlibPathBuf[];
  internal_metrics?: VectorInternalEventsFileFileInternalMetricsConfig1;
  /**
   * String sequence used to separate one file line from another.
   */
  line_delimiter?: string;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  max_line_bytes?: TheMaximumSizeOfALineBeforeItIsDiscarded;
  max_read_bytes?: MaxAmountOfBytesToReadFromASingleFileBeforeSwitchingOverToTheNextFileNoteThisDoesNotApplyWhenOldestFirstIsTrue;
  /**
   * @deprecated
   * String value used to identify the start of a multi-line message.
   */
  message_start_indicator?: string | null;
  /**
   * @deprecated
   * How long to wait for more data when aggregating a multi-line message, in milliseconds.
   */
  multi_line_timeout?: number;
  multiline?: MultilineAggregationConfiguration;
  offset_key?: EnablesAddingTheFileOffsetToEachEventAndSetsTheNameOfTheLogFieldUsed;
  /**
   * Instead of balancing read capacity fairly across all watched files, prioritize draining the oldest files before moving on to read data from more recent files.
   */
  oldest_first?: boolean;
  /**
   * File position to use when reading a new file.
   */
  read_from?: 'beginning' | 'end';
  remove_after_secs?: AfterReachingEOFTheNumberOfSecondsToWaitBeforeRemovingTheFileUnlessNewDataIsWritten;
  /**
   * How long to keep an open handle to a rotated log file.
   * The default value represents "no limit"
   */
  rotate_wait_secs?: number;
  /**
   * @deprecated
   * Whether or not to start reading from the beginning of a new file.
   */
  start_at_beginning?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource5 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * [inode]: https://en.wikipedia.org/wiki/Inode
 */
export interface UseTheDeviceAndInodeInodeAsTheIdentifier {
  strategy: UseTheDeviceAndInodeInodeAsTheIdentifier1;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of internal metrics for file-based components.
 */
export interface VectorInternalEventsFileFileInternalMetricsConfig1 {
  include_file_tag?: WhetherOrNotToIncludeTheFileTagOnTheComponentSCorrespondingInternalMetrics;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `file_descriptor` source.
 */
export interface VectorSourcesFileDescriptorsFileDescriptorFileDescriptorSourceConfig {
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  /**
   * The file descriptor number to read from.
   */
  fd: number;
  framing?: FramingConfiguration6;
  host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  max_length?: TheMaximumBufferSizeInBytesOfIncomingMessages;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `fluent` source.
 */
export interface VectorSourcesFluentFluentConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource6;
  address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
  /**
   * The maximum number of TCP connections that are allowed at any given time.
   */
  connection_limit?: number | null;
  keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
  receive_buffer_bytes?: TheSizeOfTheReceiveBufferUsedForEachConnection;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource6 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource7 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the authentication strategy for interacting with GCP services.
 */
export interface VectorGcpGcpAuthConfig5 {
  api_key?: AnAPIKeyGcpApiKey;
  credentials_path?: PathToAServiceAccountGcpServiceAccountCredentialsCredentialsJSONFile;
  /**
   * Skip all authentication handling. For use with integration tests only.
   */
  skip_authentication?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for `heroku_logs` source.
 */
export interface VectorSourcesHerokuLogsLogplexConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource8;
  /**
   * The socket address to listen for connections on.
   */
  address: string;
  auth?: CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  framing?: FramingConfiguration;
  keepalive?: VectorHttpKeepaliveConfig2;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  query_parameters?: AListOfURLQueryParametersToIncludeInTheLogEvent;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource8 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig2 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `host_metrics` source.
 */
export interface VectorSourcesHostMetricsHostMetricsConfig {
  cgroups?: OptionsForTheCgroupsControllerGroupsMetricsCollector;
  collectors?: TheListOfHostMetricCollectorServicesToUse;
  /**
   * Options for the disk metrics collector.
   */
  disk?: {
    devices?: VectorSourcesHostMetricsFilterList1;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for the filesystem metrics collector.
   */
  filesystem?: {
    devices?: VectorSourcesHostMetricsFilterList2;
    filesystems?: VectorSourcesHostMetricsFilterList3;
    mountpoints?: VectorSourcesHostMetricsFilterList4;
    [k: string]: unknown | undefined;
  };
  /**
   * Overrides the default namespace for the metrics emitted by the source.
   */
  namespace?: string | null;
  /**
   * Options for the network metrics collector.
   */
  network?: {
    devices?: VectorSourcesHostMetricsFilterList5;
    [k: string]: unknown | undefined;
  };
  /**
   * Options for the process metrics collector.
   */
  process?: {
    processes?: VectorSourcesHostMetricsFilterList6;
    [k: string]: unknown | undefined;
  };
  /**
   * The interval between metric gathering, in seconds.
   */
  scrape_interval_secs?: number;
  [k: string]: unknown | undefined;
}
/**
 * This collector is only available on Linux systems, and only supports either version 2 or hybrid cgroups.
 */
export interface OptionsForTheCgroupsControllerGroupsMetricsCollector1 {
  /**
   * The base cgroup name to provide metrics for.
   */
  base?: null | StdlibPathBuf;
  /**
   * Base cgroup directory, for testing use only
   */
  base_dir?: null | StdlibPathBuf;
  groups?: VectorSourcesHostMetricsFilterList;
  levels?: TheNumberOfLevelsOfTheCgroupsHierarchyForWhichToReportMetrics;
  [k: string]: unknown | undefined;
}
/**
 * Lists of cgroup name patterns to include or exclude in gathering
 * usage metrics.
 */
export interface VectorSourcesHostMetricsFilterList {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of device name patterns to include or exclude in gathering
 * I/O utilization metrics.
 */
export interface VectorSourcesHostMetricsFilterList1 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of device name patterns to include or exclude in gathering
 * usage metrics.
 */
export interface VectorSourcesHostMetricsFilterList2 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of filesystem name patterns to include or exclude in gathering
 * usage metrics.
 */
export interface VectorSourcesHostMetricsFilterList3 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of mount point path patterns to include or exclude in gathering
 * usage metrics.
 */
export interface VectorSourcesHostMetricsFilterList4 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of device name patterns to include or exclude in gathering
 * network utilization metrics.
 */
export interface VectorSourcesHostMetricsFilterList5 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Lists of process name patterns to include or exclude.
 */
export interface VectorSourcesHostMetricsFilterList6 {
  excludes?: AnyPatternsWhichShouldBeExcluded;
  includes?: AnyPatternsWhichShouldBeIncluded;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `http` source.
 */
export interface VectorSourcesHttpServerHttpConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource9;
  address: TheSocketAddressToListenForConnectionsOn;
  auth?: CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | null
    | (
        | {
            /**
             * Uses the raw bytes as-is.
             */
            codec: 'bytes';
            [k: string]: unknown | undefined;
          }
        | DecodesTheRawBytesAsJSONJson2
        | DecodesTheRawBytesAsProtobufProtobuf2
        | DecodesTheRawBytesAsASyslogMessage2
        | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf2
        | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson2
        | DecodesTheRawBytesAsAGELFGelfMessage2
        | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage2
        | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage2
        | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram2
      );
  encoding?: TheExpectedEncodingOfReceivedData;
  framing?: FramingConfiguration6;
  headers?: AListOfHTTPHeadersToIncludeInTheLogEvent;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  host_key?: string;
  keepalive?: VectorHttpKeepaliveConfig3;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * Specifies the action of the HTTP request.
   */
  method?: 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  /**
   * The URL path on which log event POST requests are sent.
   */
  path?: string;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  path_key?: string;
  query_parameters?: AListOfURLQueryParametersToIncludeInTheLogEvent;
  /**
   * Specifies the HTTP response status code that will be returned on successful requests.
   */
  response_code?: number;
  strict_path?: WhetherOrNotToTreatTheConfiguredPathAsAnAbsolutePath;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource9 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * This codec is **[experimental][experimental]**.
 *
 * [vector_native_protobuf]: https://github.com/vectordotdev/vector/blob/master/lib/vector-core/proto/event.proto
 * [experimental]: https://vector.dev/highlights/2022-03-31-native-event-codecs
 */
export interface DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf2 {
  codec: DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf3;
  [k: string]: unknown | undefined;
}
/**
 * [apache_avro]: https://avro.apache.org/
 */
export interface DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage2 {
  /**
   * Apache Avro-specific encoder options.
   */
  avro: {
    /**
     * The Avro schema definition.
     * Please note that the following [`apache_avro::types::Value`] variants are currently *not* supported:
     * * `Date`
     * * `Decimal`
     * * `Duration`
     * * `Fixed`
     * * `TimeMillis`
     */
    schema: string;
    /**
     * For Avro datum encoded in Kafka messages, the bytes are prefixed with the schema ID.  Set this to true to strip the schema ID prefix.
     * According to [Confluent Kafka's document](https://docs.confluent.io/platform/current/schema-registry/fundamentals/serdes-develop/index.html#wire-format).
     */
    strip_schema_id_prefix: boolean;
    [k: string]: unknown | undefined;
  };
  codec: DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage3;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig3 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `http_client` source.
 */
export interface VectorSourcesHttpClientClientHttpClientConfig {
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  /**
   * Decoder to use on the HTTP responses.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  endpoint: TheHTTPEndpointToCollectEventsFrom;
  framing?: FramingConfiguration;
  headers?: HeadersToApplyToTheHTTPRequests;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * Specifies the method of the HTTP request.
   */
  method?: 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  query?: CustomParametersForTheHTTPRequestQueryString;
  /**
   * The interval between scrapes. Requests are run concurrently so if a scrape takes longer
   * than the interval a new scrape will be started. This can take extra resources, set the timeout
   * to a value lower than the scrape interval to prevent this from happening.
   */
  scrape_interval_secs?: number;
  /**
   * The timeout for each scrape request.
   */
  scrape_timeout_secs?: number;
  /**
   * TLS configuration.
   */
  tls?: null | VectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * One or more values for the same header can be provided.
 */
export interface HeadersToApplyToTheHTTPRequests {
  [k: string]: string[] | undefined;
}
/**
 * One or more values for the same parameter key can be provided.
 *
 * The parameters provided in this option are appended to any parameters
 * manually provided in the `endpoint` option.
 */
export interface CustomParametersForTheHTTPRequestQueryString {
  [k: string]: string[] | undefined;
}
/**
 * Configuration for the `http_server` source.
 */
export interface VectorSourcesHttpServerSimpleHttpConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource9;
  address: TheSocketAddressToListenForConnectionsOn;
  auth?: CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | null
    | (
        | {
            /**
             * Uses the raw bytes as-is.
             */
            codec: 'bytes';
            [k: string]: unknown | undefined;
          }
        | DecodesTheRawBytesAsJSONJson2
        | DecodesTheRawBytesAsProtobufProtobuf2
        | DecodesTheRawBytesAsASyslogMessage2
        | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf2
        | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson2
        | DecodesTheRawBytesAsAGELFGelfMessage2
        | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage2
        | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage2
        | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram2
      );
  encoding?: TheExpectedEncodingOfReceivedData;
  framing?: FramingConfiguration6;
  headers?: AListOfHTTPHeadersToIncludeInTheLogEvent;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  host_key?: string;
  keepalive?: VectorHttpKeepaliveConfig3;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * Specifies the action of the HTTP request.
   */
  method?: 'HEAD' | 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'OPTIONS';
  /**
   * The URL path on which log event POST requests are sent.
   */
  path?: string;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  path_key?: string;
  query_parameters?: AListOfURLQueryParametersToIncludeInTheLogEvent;
  /**
   * Specifies the HTTP response status code that will be returned on successful requests.
   */
  response_code?: number;
  strict_path?: WhetherOrNotToTreatTheConfiguredPathAsAnAbsolutePath;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `internal_logs` source.
 */
export interface VectorSourcesInternalLogsInternalLogsConfig {
  host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  pid_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentProcessIDToEachEvent;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `internal_metrics` source.
 */
export interface VectorSourcesInternalMetricsInternalMetricsConfig {
  /**
   * Overrides the default namespace for the metrics emitted by the source.
   */
  namespace?: string;
  /**
   * The interval between metric gathering, in seconds.
   */
  scrape_interval_secs?: number;
  /**
   * Tag configuration for the `internal_metrics` source.
   */
  tags?: {
    host_key?: OverridesTheNameOfTheTagUsedToAddThePeerHostToEachMetric;
    pid_key?: SetsTheNameOfTheTagToUseToAddTheCurrentProcessIDToEachMetric;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `journald` source.
 */
export interface VectorSourcesJournaldJournaldConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource10;
  batch_size?: TheSystemdJournalIsReadInBatchesAndACheckpointIsSetAtTheEndOfEachBatch;
  /**
   * Only include entries that occurred after the current boot of the system.
   */
  current_boot_only?: boolean;
  data_dir?: TheDirectoryUsedToPersistFileCheckpointPositions;
  emit_cursor?: WhetherToEmitThe__CURSORFieldCursorSeeAlsoSdJournalGetCursorGetCursor;
  exclude_matches?: AListOfSetsOfFieldValuePairsThatIfAnyArePresentInAJournalEntryExcludesTheEntryFromThisSource;
  exclude_units?: AListOfUnitNamesToExcludeFromMonitoring;
  extra_args?: AListOfExtraCommandLineArgumentsToPassToJournalctl;
  include_matches?: AListOfSetsOfFieldValuePairsToMonitor;
  include_units?: AListOfUnitNamesToMonitor;
  journal_directory?: TheFullPathOfTheJournalDirectory;
  journal_namespace?: TheJournalNamespaceJournalNamespace;
  journalctl_path?: TheFullPathOfTheJournalctlExecutable;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  remap_priority?: EnablesRemappingThePRIORITYFieldFromAnIntegerToStringValue;
  /**
   * Only include entries that appended to the journal after the entries have been read.
   */
  since_now?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource10 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * If `exclude_units` is specified, it is merged into this list.
 */
export interface AListOfSetsOfFieldValuePairsThatIfAnyArePresentInAJournalEntryExcludesTheEntryFromThisSource {
  [k: string]: string[] | undefined;
}
/**
 * If empty or not present, all journal fields are accepted.
 *
 * If `include_units` is specified, it is merged into this list.
 */
export interface AListOfSetsOfFieldValuePairsToMonitor {
  [k: string]: string[] | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource11 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Kafka authentication configuration.
 */
export interface VectorKafkaKafkaAuthConfig1 {
  /**
   * Configuration for SASL authentication when interacting with Kafka.
   */
  sasl?: null | {
    enabled?: EnablesSASLAuthentication;
    /**
     * The SASL mechanism to use.
     */
    mechanism?: string | null;
    /**
     * The SASL password.
     */
    password?: null | VectorCommonSensitiveStringSensitiveString;
    /**
     * The SASL username.
     */
    username?: string | null;
    [k: string]: unknown | undefined;
  };
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `kubernetes_logs` source.
 */
export interface VectorSourcesKubernetesLogsConfig {
  auto_partial_merge?: WhetherOrNotToAutomaticallyMergePartialEvents;
  data_dir?: TheDirectoryUsedToPersistFileCheckpointPositions;
  delay_deletion_ms?: HowLongToDelayRemovingMetadataEntriesFromTheCacheWhenAPodDeletionEventEventIsReceivedFromTheWatchStream;
  /**
   * A list of glob patterns to exclude from reading the files.
   */
  exclude_paths_glob_patterns?: StdlibPathBuf[];
  extra_field_selector?: SpecifiesTheFieldSelectorFieldSelectorToFilterPodsWithToBeUsedInAdditionToTheBuiltInNodeNodeFilter;
  extra_label_selector?: SpecifiesTheLabelSelectorLabelSelectorToFilterPodsPodsWithToBeUsedInAdditionToTheBuiltInExcludeExcludeFilter;
  extra_namespace_label_selector?: SpecifiesTheLabelSelectorLabelSelectorToFilterNamespacesNamespacesWithToBeUsedInAdditionToTheBuiltInExcludeExcludeFilter;
  fingerprint_lines?: TheNumberOfLinesToReadForGeneratingTheChecksum;
  glob_minimum_cooldown_ms?: TheIntervalAtWhichTheFileSystemIsPolledToIdentifyNewFilesToReadFrom;
  /**
   * Ignore files with a data modification date older than the specified number of seconds.
   */
  ignore_older_secs?: number | null;
  /**
   * A list of glob patterns to include while reading the files.
   */
  include_paths_glob_patterns?: StdlibPathBuf[];
  ingestion_timestamp_field?: OverridesTheNameOfTheLogFieldUsedToAddTheIngestionTimestampToEachEvent;
  internal_metrics?: VectorInternalEventsFileFileInternalMetricsConfig2;
  kube_config_file?: OptionalPathToAReadableKubeconfigKubeconfigFile;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  max_line_bytes?: TheMaximumNumberOfBytesALineCanContainBeforeBeingDiscarded;
  max_read_bytes?: MaxAmountOfBytesToReadFromASingleFileBeforeSwitchingOverToTheNextFileNoteThisDoesNotApplyWhenOldestFirstIsTrue;
  /**
   * Configuration for how the events are enriched with Namespace metadata.
   */
  namespace_annotation_fields?: {
    namespace_labels?: EventFieldForTheNamespaceSLabels;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration for how the events are enriched with Node metadata.
   */
  node_annotation_fields?: {
    node_labels?: EventFieldForTheNodeSLabels;
    [k: string]: unknown | undefined;
  };
  /**
   * Instead of balancing read capacity fairly across all watched files, prioritize draining the oldest files before moving on to read data from more recent files.
   */
  oldest_first?: boolean;
  /**
   * Configuration for how the events are enriched with Pod metadata.
   */
  pod_annotation_fields?: {
    container_id?: EventFieldForTheContainerSID;
    container_image?: EventFieldForTheContainerSImage;
    container_image_id?: EventFieldForTheContainerSImageID;
    container_name?: EventFieldForTheContainerSName;
    pod_annotations?: EventFieldForThePodSAnnotations;
    pod_ip?: EventFieldForThePodSIPv4Address;
    pod_ips?: EventFieldForThePodSIPv4AndIPv6Addresses;
    pod_labels?: EventFieldForThePodSLabels;
    pod_name?: EventFieldForThePodSName;
    pod_namespace?: EventFieldForThePodSNamespace;
    pod_node_name?: EventFieldForThePodSNodeName;
    pod_owner?: EventFieldForThePodSOwnerReference;
    pod_uid?: EventFieldForThePodSUID;
    [k: string]: unknown | undefined;
  };
  /**
   * File position to use when reading a new file.
   */
  read_from?: 'beginning' | 'end';
  /**
   * How long to keep an open handle to a rotated log file.
   * The default value represents "no limit"
   */
  rotate_wait_secs?: number;
  self_node_name?: TheNameOfTheKubernetesNodeNodeThatIsRunning;
  timezone?: TimezoneToUseForAnyDateSpecifiersInTemplateStrings;
  /**
   * Determines if requests to the kube-apiserver can be served by a cache.
   */
  use_apiserver_cache?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of internal metrics for file-based components.
 */
export interface VectorInternalEventsFileFileInternalMetricsConfig2 {
  include_file_tag?: WhetherOrNotToIncludeTheFileTagOnTheComponentSCorrespondingInternalMetrics;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `logstash` source.
 */
export interface VectorSourcesLogstashLogstashConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource12;
  address: TheSocketAddressToListenForConnectionsOnOrSystemdNToUseTheNthSocketPassedBySystemdSocketActivation;
  /**
   * The maximum number of TCP connections that are allowed at any given time.
   */
  connection_limit?: number | null;
  keepalive?: CoreOptionOptionVectorCoreTcpTcpKeepaliveConfig;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  permit_origin?: CoreOptionOptionVectorCoreIpallowlistIpAllowlistConfig;
  /**
   * The size of the receive buffer used for each connection.
   */
  receive_buffer_bytes?: number | null;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsSourceConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource12 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `mongodb_metrics` source.
 */
export interface VectorSourcesMongodbMetricsMongoDbMetricsConfig {
  endpoints: AListOfMongoDBInstancesToScrape;
  namespace?: OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource1;
  /**
   * The interval between scrapes, in seconds.
   */
  scrape_interval_secs?: number;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `nats` source.
 */
export interface VectorSourcesNatsNatsSourceConfig {
  auth?: CoreOptionOptionVectorNatsNatsAuthConfig;
  connection_name: ANameNatsConnectionNameAssignedToTheNATSConnection;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  framing?: FramingConfiguration;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * The NATS queue group to join.
   */
  queue?: string | null;
  subject: TheNATSSubjectNatsSubjectToPullMessagesFrom;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  subject_key_field?: string;
  subscriber_capacity?: TheBufferCapacityOfTheUnderlyingNATSSubscriber;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  url: TheNATSURLToConnectTo;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `nginx_metrics` source.
 */
export interface VectorSourcesNginxMetricsNginxMetricsConfig {
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  endpoints: AListOfNGINXInstancesToScrape;
  namespace?: OverridesTheDefaultNamespaceForTheMetricsEmittedByTheSource2;
  /**
   * The interval between scrapes.
   */
  scrape_interval_secs?: number;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `opentelemetry` source.
 */
export interface VectorSourcesOpentelemetryOpentelemetryConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource13;
  /**
   * Configuration for the `opentelemetry` gRPC server.
   */
  grpc: {
    address: TheSocketAddressToListenForConnectionsOn;
    /**
     * Configures the TLS options for incoming/outgoing connections.
     */
    tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration for the `opentelemetry` HTTP server.
   */
  http: {
    address: TheSocketAddressToListenForConnectionsOn;
    headers?: AListOfHTTPHeadersToIncludeInTheLogEvent;
    keepalive?: VectorHttpKeepaliveConfig4;
    /**
     * Configures the TLS options for incoming/outgoing connections.
     */
    tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
    [k: string]: unknown | undefined;
  };
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource13 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig4 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `postgresql_metrics` source.
 */
export interface VectorSourcesPostgresqlMetricsPostgresqlMetricsConfig {
  endpoints: AListOfPostgreSQLInstancesToScrape;
  exclude_databases?: AListOfDatabasesToMatchByUsingPOSIXRegularExpressionsHttpsWwwPostgresqlOrgDocsCurrentFunctionsMatchingHtmlFUNCTIONSPOSIXREGEXPAgainstTheDatnameColumnForWhichYouDonTWantToCollectMetricsFrom;
  include_databases?: AListOfDatabasesToMatchByUsingPOSIXRegularExpressionsHttpsWwwPostgresqlOrgDocsCurrentFunctionsMatchingHtmlFUNCTIONSPOSIXREGEXPAgainstTheDatnameColumnForWhichYouWantToCollectMetricsFrom;
  /**
   * Overrides the default namespace for the metrics emitted by the source.
   */
  namespace?: string;
  /**
   * The interval between scrapes.
   */
  scrape_interval_secs?: number;
  /**
   * Configuration of TLS when connecting to PostgreSQL.
   */
  tls?: null | {
    ca_file: AbsolutePathToAnAdditionalCACertificateFile1;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `prometheus_pushgateway` source.
 */
export interface VectorSourcesPrometheusPushgatewayPrometheusPushgatewayConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource14;
  address: TheSocketAddressToAcceptConnectionsOn;
  aggregate_metrics?: WhetherToAggregateValuesAcrossPushes;
  auth?: CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig;
  keepalive?: VectorHttpKeepaliveConfig5;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource14 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig5 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `prometheus_remote_write` source.
 */
export interface VectorSourcesPrometheusRemoteWritePrometheusRemoteWriteConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource15;
  address: TheSocketAddressToAcceptConnectionsOn;
  auth?: CoreOptionOptionVectorSourcesUtilHttpAuthHttpSourceAuthConfig;
  keepalive?: VectorHttpKeepaliveConfig6;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource15 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig6 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `prometheus_scrape` source.
 */
export interface VectorSourcesPrometheusScrapePrometheusScrapeConfig {
  auth?: ConfigurationOfTheAuthenticationStrategyForHTTPRequests;
  endpoint_tag?: TheTagNameAddedToEachEventRepresentingTheScrapedInstanceSEndpoint;
  /**
   * Endpoints to scrape metrics from.
   */
  endpoints: string[];
  honor_labels?: ControlsHowTagConflictsAreHandledIfTheScrapedSourceHasTagsToBeAdded;
  instance_tag?: TheTagNameAddedToEachEventRepresentingTheScrapedInstanceSHostPort;
  query?: CustomParametersForTheScrapeRequestQueryString;
  /**
   * The interval between scrapes. Requests are run concurrently so if a scrape takes longer
   * than the interval a new scrape will be started. This can take extra resources, set the timeout
   * to a value lower than the scrape interval to prevent this from happening.
   */
  scrape_interval_secs?: number;
  /**
   * The timeout for each scrape request.
   */
  scrape_timeout_secs?: number;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsConfig;
  [k: string]: unknown | undefined;
}
/**
 * One or more values for the same parameter key can be provided. The parameters provided in this option are
 * appended to any parameters manually provided in the `endpoints` option. This option is especially useful when
 * scraping the `/federate` endpoint.
 */
export interface CustomParametersForTheScrapeRequestQueryString {
  [k: string]: string[] | undefined;
}
/**
 * Configuration for the `pulsar` source.
 */
export interface VectorSourcesPulsarPulsarSourceConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource16;
  /**
   * Authentication configuration.
   */
  auth?:
    | null
    | (
        | {
            name: BasicAuthenticationNameUsername1;
            token: BasicAuthenticationPasswordToken1;
            [k: string]: unknown | undefined;
          }
        | {
            /**
             * OAuth2-specific authentication configuration.
             */
            oauth2: {
              /**
               * The OAuth2 audience.
               */
              audience?: string | null;
              credentials_url: TheCredentialsURL;
              /**
               * The issuer URL.
               */
              issuer_url: string;
              /**
               * The OAuth2 scope.
               */
              scope?: string | null;
              [k: string]: unknown | undefined;
            };
            [k: string]: unknown | undefined;
          }
      );
  /**
   * Max count of messages in a batch.
   */
  batch_size?: number | null;
  /**
   * The Pulsar consumer name.
   */
  consumer_name?: string | null;
  /**
   * Dead Letter Queue policy configuration.
   */
  dead_letter_queue_policy?: null | {
    /**
     * Name of the dead letter topic where the failing messages will be sent.
     */
    dead_letter_topic: string;
    /**
     * Maximum number of times that a message will be redelivered before being sent to the dead letter queue.
     */
    max_redeliver_count: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  /**
   * The endpoint to which the Pulsar client should connect to.
   */
  endpoint: string;
  framing?: FramingConfiguration;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  priority_level?: TheConsumerSPriorityLevel;
  /**
   * The Pulsar subscription name.
   */
  subscription_name?: string | null;
  /**
   * The Pulsar topic names to read events from.
   */
  topics: string[];
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource16 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `redis` source.
 */
export interface VectorSourcesRedisRedisSourceConfig {
  /**
   * The Redis data type (`list` or `channel`) to use.
   */
  data_type?: 'list' | TheChannelDataType;
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  framing?: FramingConfiguration;
  /**
   * The Redis key to read messages from.
   */
  key: string;
  /**
   * Options for the Redis `list` data type.
   */
  list?: null | {
    /**
     * Method for getting events from the `list` data type.
     */
    method: 'lpop' | 'rpop';
    [k: string]: unknown | undefined;
  };
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  redis_key?: SetsTheNameOfTheLogFieldToUseToAddTheKeyToEachEvent;
  url: TheRedisURLToConnectTo;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `splunk_hec` source.
 */
export interface VectorSourcesSplunkHecSplunkConfig {
  /**
   * Acknowledgement configuration for the `splunk_hec` source.
   */
  acknowledgements?: {
    ack_idle_cleanup?: WhetherOrNotToRemoveChannelsAfterIdlingForMaxIdleTimeSeconds;
    /**
     * Enables end-to-end acknowledgements.
     */
    enabled?: boolean | null;
    max_idle_time?: TheAmountOfTimeInSecondsAChannelIsAllowedToIdleBeforeRemoval;
    max_number_of_ack_channels?: TheMaximumNumberOfSplunkHECChannelsClientsCanUseWithThisSource;
    max_pending_acks?: TheMaximumNumberOfAcknowledgementStatusesPendingQueryAcrossAllChannels;
    max_pending_acks_per_channel?: TheMaximumNumberOfAcknowledgementStatusesPendingQueryForASingleChannel;
    [k: string]: unknown | undefined;
  };
  address?: TheSocketAddressToListenForConnectionsOn;
  keepalive?: VectorHttpKeepaliveConfig7;
  /**
   * The namespace to use for logs. This overrides the global settings.
   */
  log_namespace?: boolean | null;
  store_hec_token?: WhetherOrNotToForwardTheSplunkHECAuthenticationTokenWithEvents;
  tls?: CoreOptionOptionVectorCoreTlsSettingsTlsEnableableConfig;
  token?: OptionalAuthorizationToken;
  valid_tokens?: AListOfValidAuthorizationTokens;
  [k: string]: unknown | undefined;
}
/**
 * Configuration of HTTP server keepalive parameters.
 */
export interface VectorHttpKeepaliveConfig7 {
  max_connection_age_jitter_factor?: TheFactorByWhichToJitterTheMaxConnectionAgeSecsValue;
  max_connection_age_secs?: TheMaximumAmountOfTimeAConnectionMayExistBeforeItIsClosedBySendingAConnectionCloseHeaderOnTheHTTPResponseSetThisToALargeValueLike100000000ToDisableThisFeature;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `static_metrics` source.
 */
export interface VectorSourcesStaticMetricsStaticMetricsConfig {
  /**
   * The interval between metric emitting, in seconds.
   */
  interval_secs?: number;
  /**
   * Tag configuration for the `internal_metrics` source.
   */
  metrics?: {
    kind: MetricKind;
    /**
     * Name of the static metric
     */
    name: string;
    /**
     * Key-value pairs representing tags and their values to add to the metric.
     */
    tags?: {
      [k: string]: string | undefined;
    };
    /**
     * "Observed" value of the static metric
     */
    value:
      | {
          counter: {
            /**
             * The value of the counter.
             */
            value: number;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          gauge: {
            /**
             * The value of the gauge.
             */
            value: number;
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          set: {
            /**
             * The values in the set.
             */
            values: string[];
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | {
          distribution: {
            /**
             * The observed values within this distribution.
             */
            samples: {
              /**
               * The rate at which the value was observed.
               */
              rate: number;
              /**
               * The value of the observation.
               */
              value: number;
              [k: string]: unknown | undefined;
            }[];
            /**
             * The type of statistics to derive for this distribution.
             */
            statistic: 'histogram' | 'summary';
            [k: string]: unknown | undefined;
          };
          [k: string]: unknown | undefined;
        }
      | ASetOfObservationsWhichAreCountedIntoBuckets
      | ASetOfObservationsWhichAreRepresentedByQuantiles
      | ADataStructureThatCanAnswerQuestionsAboutTheCumulativeDistributionOfTheContainedSamplesInSpaceEfficientWay;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Overrides the default namespace for the metrics emitted by the source.
   */
  namespace?: string;
  [k: string]: unknown | undefined;
}
/**
 * It also contains the total count of all observations and their sum to allow calculating the mean.
 */
export interface ASetOfObservationsWhichAreCountedIntoBuckets {
  aggregated_histogram: {
    buckets: AHistogramBucket;
    /**
     * The total number of observations contained within this histogram.
     */
    count: number;
    /**
     * The sum of all observations contained within this histogram.
     */
    sum: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Histogram buckets represent the `count` of observations where the value of the observations does
 * not exceed the specified `upper_limit`.
 */
export interface AHistogramBucket1 {
  /**
   * The number of values tracked in this bucket.
   */
  count: number;
  /**
   * The upper limit of values in the bucket.
   */
  upper_limit: number;
  [k: string]: unknown | undefined;
}
/**
 * Each quantile contains the upper value of the quantile (0 <= φ <= 1). It also contains the total count of all
 * observations and their sum to allow calculating the mean.
 */
export interface ASetOfObservationsWhichAreRepresentedByQuantiles {
  aggregated_summary: {
    /**
     * The total number of observations contained within this summary.
     */
    count: number;
    quantiles: ASingleQuantileObservation;
    /**
     * The sum of all observations contained within this histogram.
     */
    sum: number;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Quantiles themselves are "cut points dividing the range of a probability distribution into
 * continuous intervals with equal probabilities". [[1][quantiles_wikipedia]].
 *
 * We use quantiles to measure the value along these probability distributions for representing
 * client-side aggregations of distributions, which represent a collection of observations over a
 * specific time window.
 *
 * In general, we typically use the term "quantile" to represent the concept of _percentiles_,
 * which deal with whole integers -- 0, 1, 2, .., 99, 100 -- even though quantiles are
 * floating-point numbers and can represent higher-precision cut points, such as 0.9999, or the
 * 99.99th percentile.
 *
 * [quantiles_wikipedia]: https://en.wikipedia.org/wiki/Quantile
 */
export interface ASingleQuantileObservation1 {
  quantile: TheValueOfTheQuantile;
  /**
   * The estimated value of the given quantile within the probability distribution.
   */
  value: number;
  [k: string]: unknown | undefined;
}
/**
 * Sketches represent the data in a way that queries over it have bounded error guarantees without needing to hold
 * every single sample in memory. They are also, typically, able to be merged with other sketches of the same type
 * such that client-side _and_ server-side aggregation can be accomplished without loss of accuracy in the queries.
 */
export interface ADataStructureThatCanAnswerQuestionsAboutTheCumulativeDistributionOfTheContainedSamplesInSpaceEfficientWay {
  sketch: {
    /**
     * A generalized metrics sketch.
     */
    sketch: DDSketchDdsketchImplementationBasedOnTheDatadogAgentDdagent;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * While DDSketch has open-source implementations based on the white paper, the version used in
 * the Datadog Agent itself is subtly different. This version is suitable for sending directly
 * to Datadog's sketch ingest endpoint.
 *
 * [ddsketch]: https://www.vldb.org/pvldb/vol12/p2195-masson.pdf
 * [ddagent]: https://github.com/DataDog/datadog-agent
 */
export interface DDSketchDdsketchImplementationBasedOnTheDatadogAgentDdagent {
  AgentDDSketch: DDSketchDdsketchImplementationBasedOnTheDatadogAgentDdagent1;
  [k: string]: unknown | undefined;
}
/**
 * This implementation is subtly different from the open-source implementations of `DDSketch`, as
 * Datadog made some slight tweaks to configuration values and in-memory layout to optimize it for
 * insertion performance within the agent.
 *
 * We've mimicked the agent version of `DDSketch` here in order to support a future where we can
 * take sketches shipped by the agent, handle them internally, merge them, and so on, without any
 * loss of accuracy, eventually forwarding them to Datadog ourselves.
 *
 * As such, this implementation is constrained in the same ways: the configuration parameters
 * cannot be changed, the collapsing strategy is fixed, and we support a limited number of methods
 * for inserting into the sketch.
 *
 * Importantly, we have a special function, again taken from the agent version, to allow us to
 * interpolate histograms, specifically our own aggregated histograms, into a sketch so that we can
 * emit useful default quantiles, rather than having to ship the buckets -- upper bound and count
 * -- to a downstream system that might have no native way to do the same thing, basically
 * providing no value as they have no way to render useful data from them.
 *
 * [ddsketch]: https://www.vldb.org/pvldb/vol12/p2195-masson.pdf
 * [ddagent]: https://github.com/DataDog/datadog-agent
 */
export interface DDSketchDdsketchImplementationBasedOnTheDatadogAgentDdagent1 {
  /**
   * The average value of all observations within the sketch.
   */
  avg: number;
  bins: ASplitRepresentationOfSketchBins;
  /**
   * The number of observations within the sketch.
   */
  count: number;
  /**
   * The maximum value of all observations within the sketch.
   */
  max: number;
  /**
   * The minimum value of all observations within the sketch.
   */
  min: number;
  /**
   * The sum of all observations within the sketch.
   */
  sum: number;
  [k: string]: unknown | undefined;
}
/**
 * The bins within the sketch.
 */
export interface ASplitRepresentationOfSketchBins {
  /**
   * The bin keys.
   */
  k: number[];
  /**
   * The bin counts.
   */
  n: number[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `stdin` source.
 */
export interface VectorSourcesFileDescriptorsStdinStdinConfig {
  /**
   * Configures how events are decoded from raw bytes.
   */
  decoding?:
    | {
        /**
         * Uses the raw bytes as-is.
         */
        codec: 'bytes';
        [k: string]: unknown | undefined;
      }
    | DecodesTheRawBytesAsJSONJson
    | DecodesTheRawBytesAsProtobufProtobuf
    | DecodesTheRawBytesAsASyslogMessage
    | DecodesTheRawBytesAsNativeProtocolBuffersFormatVectorNativeProtobuf
    | DecodesTheRawBytesAsNativeJSONFormatVectorNativeJson
    | DecodesTheRawBytesAsAGELFGelfMessage
    | DecodesTheRawBytesAsAnInfluxdbLineProtocolInfluxdbMessage
    | DecodesTheRawBytesAsAsAnApacheAvroApacheAvroMessage
    | DecodesTheRawBytesAsAStringAndPassesThemAsInputToAVRLVrlProgram;
  framing?: FramingConfiguration6;
  host_key?: OverridesTheNameOfTheLogFieldUsedToAddTheCurrentHostnameToEachEvent;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  max_length?: TheMaximumBufferSizeInBytesOfIncomingMessages;
  [k: string]: unknown | undefined;
}
/**
 * For Unix datagram sockets, use the `socket` source instead.
 */
export interface ListenOnUDSUnixDomainSocketThisOnlySupportsUnixStreamSockets {
  mode: ListenOnUDSUnixDomainSocketThisOnlySupportsUnixStreamSockets1;
  path: TheUnixSocketPath;
  socket_file_mode?: UnixFileModeBitsToBeAppliedToTheUnixSocketFileAsItsDesignatedFilePermissions;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `unit_test` source.
 */
export interface VectorConfigUnitTestUnitTestComponentsUnitTestSourceConfig {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `unit_test_stream` source.
 */
export interface VectorConfigUnitTestUnitTestComponentsUnitTestStreamSourceConfig {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `vector` source.
 */
export interface VectorSourcesVectorVectorConfig {
  acknowledgements?: ControlsHowAcknowledgementsAreHandledByThisSource17;
  address: TheSocketAddressToListenForConnectionsOn;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  /**
   * Configures the TLS options for incoming/outgoing connections.
   */
  tls?: null | VectorCoreTlsSettingsTlsEnableableConfig;
  /**
   * Version of the configuration.
   */
  version?: null | '2';
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * This setting is **deprecated** in favor of enabling `acknowledgements` at the [global][global_acks] or sink level.
 *
 * Enabling or disabling acknowledgements at the source level has **no effect** on acknowledgement behavior.
 *
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how event acknowledgement is handled.
 *
 * [global_acks]: https://vector.dev/docs/reference/configuration/global-options/#acknowledgements
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledByThisSource17 {
  /**
   * Whether or not end-to-end acknowledgements are enabled for this source.
   */
  enabled?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * An input describes not only the type of event to insert, but also which transform within the
 * configuration to insert it to.
 */
export interface AUnitTestInput1 {
  /**
   * The name of the transform to insert the input event to.
   */
  insert_at: string;
  log_fields?: TheSetOfLogFieldsToUseWhenCreatingALogInputEvent;
  metric?: TheMetricToUseAsAnInputEvent;
  source?: TheVrlExpressionToGenerateTheInputEvent;
  type?: TheTypeOfTheInputEvent;
  value?: TheRawStringValueToUseAsTheInputEvent;
  [k: string]: unknown | undefined;
}
/**
 * An output describes what we expect a transform to emit when fed a certain event, or events, when
 * running a unit test.
 */
export interface AUnitTestOutput1 {
  /**
   * The conditions to run against the output to validate that they were transformed as expected.
   */
  conditions?: AnEventMatchingCondition[] | null;
  /**
   * The transform outputs to extract events from.
   */
  extract_from: string | string[];
  [k: string]: unknown | undefined;
}
/**
 * Configure output for component when generated with graph command
 */
export interface ExtraGraphConfiguration2 {
  node_attributes?: NodeAttributesToAddToThisComponentSNodeInResultingGraph;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `aggregate` transform.
 */
export interface VectorTransformsAggregateAggregateConfig {
  interval_ms?: TheIntervalBetweenFlushesInMilliseconds;
  mode?: FunctionToUseForAggregation;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `aws_ec2_metadata` transform.
 */
export interface VectorTransformsAwsEc2MetadataEc2Metadata {
  /**
   * Overrides the default EC2 metadata endpoint.
   */
  endpoint?: string;
  /**
   * A list of metadata fields to include in each transformed event.
   */
  fields?: string[];
  /**
   * Sets a prefix for all event fields added by the transform.
   */
  namespace?: null | VectorLookupLookupV2OptionalPathOptionalTargetPath;
  proxy?: ProxyConfiguration3;
  /**
   * The interval between querying for updated metadata, in seconds.
   */
  refresh_interval_secs?: number;
  /**
   * The timeout for querying the EC2 metadata endpoint, in seconds.
   */
  refresh_timeout_secs?: number;
  /**
   * Requires the transform to be able to successfully query the EC2 metadata before starting to process the data.
   */
  required?: boolean;
  /**
   * A list of instance tags to include in each transformed event.
   */
  tags?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Configure to proxy traffic through an HTTP(S) proxy when making external requests.
 *
 * Similar to common proxy configuration convention, you can set different proxies
 * to use based on the type of traffic being proxied. You can also set specific hosts that
 * should not be proxied.
 */
export interface ProxyConfiguration3 {
  /**
   * Enables proxying support.
   */
  enabled?: boolean;
  http?: ProxyEndpointToUseWhenProxyingHTTPTraffic;
  https?: ProxyEndpointToUseWhenProxyingHTTPSTraffic;
  no_proxy?: AListOfHostsToAvoidProxying;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `dedupe` transform.
 */
export interface VectorTransformsDedupeConfigDedupeConfig {
  /**
   * Caching configuration for deduplication.
   */
  cache?: {
    /**
     * Number of events to cache and use for comparing incoming events to previously seen events.
     */
    num_events: number;
    [k: string]: unknown | undefined;
  };
  fields?: OptionsToControlWhatFieldsToMatchAgainst;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `route` transform.
 */
export interface VectorTransformsExclusiveRouteConfigExclusiveRouteConfig {
  /**
   * An array of named routes. The route names are expected to be unique.
   */
  routes: {
    condition: AnEventMatchingCondition;
    name: TheNameOfTheRouteIsAlsoTheNameOfTheTransformPort;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `filter` transform.
 */
export interface VectorTransformsFilterFilterConfig {
  condition: AnEventMatchingCondition;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `log_to_metric` transform.
 */
export interface VectorTransformsLogToMetricLogToMetricConfig {
  all_metrics?: SettingThisFlagChangesTheBehaviorOfThisTransformationBrPNotablyTheMetricsFieldWillBeIgnoredPPAllIncomingEventsWillBeProcessedAndIfPossibleTheyWillBeConvertedToLogEventsOtherwiseOnlyItemsSpecifiedInTheMetricsFieldWillBeProcessedPPreClassChromaCodeClassLanguageTomlDataLangTomlUseSerdeJsonJsonLetJsonEventJsonCounterValue100KindIncrementalNameTestTransformCounterTagsEnvTestEnvHostLocalhostCodePre;
  /**
   * A list of metrics to generate.
   */
  metrics: ({
    field: ATemplatedField;
    name?: OverridesTheNameOfTheCounter;
    namespace?: ATemplatedField30;
    tags?: TagsToApplyToTheMetric;
    [k: string]: unknown | undefined;
  } & (
    | ({
        /**
         * Increments the counter by the value in `field`, instead of only by `1`.
         */
        increment_by_value?: boolean;
        kind?: MetricKind;
        [k: string]: unknown | undefined;
      } & {
        /**
         * A counter.
         */
        type: 'counter';
        [k: string]: unknown | undefined;
      })
    | {
        /**
         * A histogram.
         */
        type: 'histogram';
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * A gauge.
         */
        type: 'gauge';
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * A set.
         */
        type: 'set';
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * A summary.
         */
        type: 'summary';
        [k: string]: unknown | undefined;
      }
  ))[];
  [k: string]: unknown | undefined;
}
/**
 * These hooks can be set to perform additional processing during the lifecycle of the transform.
 */
export interface LifecycleHooks {
  init?: TheFunctionCalledWhenTheFirstEventComesInBeforeHooksProcessIsCalled;
  process: TheFunctionCalledForEachIncomingEvent;
  shutdown?: TheFunctionCalledWhenTheTransformIsStopped;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `metric_to_log` transform.
 */
export interface VectorTransformsMetricToLogMetricToLogConfig2 {
  host_tag?: NameOfTheTagInTheMetricToUseForTheSourceHost;
  /**
   * The namespace to use for logs. This overrides the global setting.
   */
  log_namespace?: boolean | null;
  metric_tag_values?: ControlsHowMetricTagValuesAreEncoded;
  timezone?: TheNameOfTheTimeZoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `reduce` transform.
 */
export interface VectorTransformsReduceConfigReduceConfig {
  /**
   * If supplied, every time this interval elapses for a given grouping, the reduced value
   * for that grouping is flushed. Checked every flush_period_ms.
   */
  end_every_period_ms?: number | null;
  ends_when?: AConditionUsedToDistinguishTheFinalEventOfATransaction;
  /**
   * The maximum period of time to wait after the last event is received, in milliseconds, before
   * a combined event should be considered complete.
   */
  expire_after_ms?: number;
  /**
   * The interval to check for and flush any expired events, in milliseconds.
   */
  flush_period_ms?: number;
  group_by?: AnOrderedListOfFieldsByWhichToGroupEvents;
  /**
   * The maximum number of events to group together.
   */
  max_events?: number | null;
  merge_strategies?: AMapOfFieldNamesToCustomMergeStrategies;
  starts_when?: AConditionUsedToDistinguishTheFirstEventOfATransaction;
  [k: string]: unknown | undefined;
}
/**
 * For each field specified, the given strategy is used for combining events rather than
 * the default behavior.
 *
 * The default behavior is as follows:
 *
 * - The first value of a string field is kept and subsequent values are discarded.
 * - For timestamp fields the first is kept and a new field `[field-name]_end` is added with
 *   the last received timestamp value.
 * - Numeric values are summed.
 * - For nested paths, the field value is retrieved and then reduced using the default strategies mentioned above (unless explicitly specified otherwise).
 */
export interface AMapOfFieldNamesToCustomMergeStrategies {
  /**
   * Strategies for merging events.
   */
  [k: string]:
    | (
        | 'discard'
        | DiscardAllButTheLastValueFound
        | 'sum'
        | 'max'
        | 'min'
        | 'array'
        | 'concat'
        | 'concat_newline'
        | 'concat_raw'
        | 'shortest_array'
        | 'longest_array'
        | 'flat_unique'
      )
    | undefined;
}
/**
 * Configuration for the `remap` transform.
 */
export interface VectorTransformsRemapRemapConfig {
  drop_on_abort?: DropsAnyEventThatIsManuallyAbortedDuringProcessing;
  drop_on_error?: DropsAnyEventThatEncountersAnErrorDuringProcessing;
  file?: FilePathToTheVectorRemapLanguageVrlVRLProgramToExecuteForEachEvent;
  files?: FilePathsToTheVectorRemapLanguageVrlVRLProgramsToExecuteForEachEvent;
  metric_tag_values?: WhenSetToSingleMetricTagValuesAreExposedAsSingleStringsTheSameAsTheyWereBeforeThisConfigOptionTagsWithMultipleValuesShowTheLastAssignedValueAndNullValuesAreIgnored;
  reroute_dropped?: ReroutesDroppedEventsToANamedOutputInsteadOfHaltingProcessingOnThem;
  /**
   * The runtime to use for executing VRL code.
   */
  runtime?: string;
  source?: TheVectorRemapLanguageVrlVRLProgramToExecuteForEachEvent;
  timezone?: TheNameOfTheTimezoneToApplyToTimestampConversionsThatDoNotContainAnExplicitTimeZone;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `route` transform.
 */
export interface VectorTransformsRouteRouteConfig {
  reroute_unmatched?: ReroutesUnmatchedEventsToANamedOutputInsteadOfSilentlyDiscardingThem;
  route?: AMapFromRouteIdentifiersToLogicalConditionsEachConditionRepresentsAFilterWhichIsAppliedToEachEvent;
  [k: string]: unknown | undefined;
}
/**
 * The following identifiers are reserved output names and thus cannot be used as route IDs:
 * - `_unmatched`
 * - `_default`
 *
 * Each route can then be referenced as an input by other components with the name
 * `<transform_name>.<route_id>`. If an event doesn’t match any route, and if `reroute_unmatched`
 * is set to `true` (the default), it is sent to the `<transform_name>._unmatched` output.
 * Otherwise, the unmatched event is instead silently discarded.
 */
export interface AMapFromRouteIdentifiersToLogicalConditionsEachConditionRepresentsAFilterWhichIsAppliedToEachEvent {
  [k: string]: AnEventMatchingCondition;
}
/**
 * Configuration for the `sample` transform.
 */
export interface VectorTransformsSampleConfigSampleConfig {
  exclude?: AnEventMatchingCondition6;
  group_by?: ATemplatedField33;
  key_field?: TheNameOfTheFieldWhoseValueIsHashedToDetermineIfTheEventShouldBeSampled;
  rate: TheRateAtWhichEventsAreForwardedExpressedAs1N;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  sample_rate_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * This mode has higher memory requirements than `probabilistic`, but never falsely outputs
 * metrics with new tags after the limit has been hit.
 */
export interface TracksCardinalityExactly {
  mode: TracksCardinalityExactly1;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the `throttle` transform.
 */
export interface VectorTransformsThrottleThrottleConfig {
  exclude?: AnEventMatchingCondition7;
  /**
   * Configuration of internal metrics for the Throttle transform.
   */
  internal_metrics?: {
    emit_events_discarded_per_key?: WhetherOrNotToEmitTheEventsDiscardedTotalInternalMetricWithTheKeyTag;
    [k: string]: unknown | undefined;
  };
  key_field?: ATemplatedField34;
  threshold: TheNumberOfEventsAllowedForAGivenBucketPerConfiguredWindowSecs;
  /**
   * The time window in which the configured `threshold` is applied, in seconds.
   */
  window_secs: number;
  [k: string]: unknown | undefined;
}
/**
 * See [End-to-end Acknowledgements][e2e_acks] for more information on how Vector handles event
 * acknowledgement.
 *
 * [e2e_acks]: https://vector.dev/docs/about/under-the-hood/architecture/end-to-end-acknowledgements/
 */
export interface ControlsHowAcknowledgementsAreHandledForAllSinksByDefault {
  enabled?: WhetherOrNotEndToEndAcknowledgementsAreEnabled;
  [k: string]: unknown | undefined;
}
/**
 * This is used if a component does not have its own specific log schema. All events use a log
 * schema, whether or not the default is used, to assign event fields on incoming events.
 */
export interface DefaultLogSchemaForAllEvents {
  host_key?: TheNameOfTheEventFieldToTreatAsTheHostWhichSentTheMessage;
  message_key?: TheNameOfTheEventFieldToTreatAsTheEventMessage;
  metadata_key?: TheNameOfTheEventFieldToSetTheEventMetadataIn;
  source_type_key?: TheNameOfTheEventFieldToSetTheSourceIdentifierIn;
  /**
   * An optional path that deserializes an empty string to `None`.
   */
  timestamp_key?: string;
  [k: string]: unknown | undefined;
}
/**
 * Configure to proxy traffic through an HTTP(S) proxy when making external requests.
 *
 * Similar to common proxy configuration convention, you can set different proxies
 * to use based on the type of traffic being proxied. You can also set specific hosts that
 * should not be proxied.
 */
export interface ProxyConfiguration4 {
  /**
   * Enables proxying support.
   */
  enabled?: boolean;
  http?: ProxyEndpointToUseWhenProxyingHTTPTraffic;
  https?: ProxyEndpointToUseWhenProxyingHTTPSTraffic;
  no_proxy?: AListOfHostsToAvoidProxying;
  [k: string]: unknown | undefined;
}
/**
 * Determines whether `source` and `service` tags should be emitted with the
 * `component_sent_*` and `component_received_*` events.
 */
export interface TelemetryOptions {
  /**
   * Configures whether to emit certain tags
   */
  tags?: {
    /**
     * True if the `service` tag should be emitted
     * in the `component_received_*` and `component_sent_*`
     * telemetry.
     */
    emit_service?: boolean;
    /**
     * True if the `source` tag should be emitted
     * in the `component_received_*` and `component_sent_*`
     * telemetry.
     */
    emit_source?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
