/* eslint-disable */

/**
 * Listening address.
 */
export type ListenAddr = string;
export type Mode = 'measure' | 'enforce';
/**
 * Expose query plan
 */
export type ExposeQueryPlanConfig = boolean;
export type Source =
  | {
      /**
       * HTTP header expected to contain JWT
       */
      name?: string;
      /**
       * Header value prefix
       */
      value_prefix?: string;
      type: 'header';
    }
  | {
      /**
       * Name of the cookie containing the JWT
       */
      name: string;
      type: 'cookie';
    };
export type OnError = 'Continue' | 'Error';
export type AuthConfig = {
  aws_sig_v4: AWSSigV4Config;
};
/**
 * Configure AWS sigv4 auth.
 */
export type AWSSigV4Config =
  | {
      hardcoded: AWSSigV4HardcodedConfig;
    }
  | {
      default_chain: DefaultChainConfig;
    };
export type ErrorLocation = 'errors' | 'extensions' | 'disabled';
export type Http2Config = 'enable' | 'disable' | 'http2only';
export type DnsResolutionStrategy = 'ipv4_only' | 'ipv6_only' | 'ipv4_and_ipv6' | 'ipv6_then_ipv4' | 'ipv4_then_ipv6';
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionRouterSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [RouterSelectorOrValue, RouterSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [RouterSelectorOrValue, RouterSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [RouterSelectorOrValue, RouterSelectorOrValue];
    }
  | {
      exists: RouterSelector;
    }
  | {
      all: ConditionRouterSelector[];
    }
  | {
      any: ConditionRouterSelector[];
    }
  | {
      not: ConditionRouterSelector;
    }
  | 'true'
  | 'false';
export type RouterSelectorOrValue = AttributeValue | RouterSelector;
export type AttributeValue = boolean | number | string | AttributeArray;
export type AttributeArray = boolean[] | number[] | string[];
export type RouterSelector =
  | {
      /**
       * The name of the baggage item.
       */
      baggage: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of the environment variable
       */
      env: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      error: ErrorRepr;
    }
  | {
      on_graphql_error: boolean;
    }
  | {
      /**
       * The operation name from the query.
       */
      operation_name: OperationName;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of the request header.
       */
      request_header: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The request context key.
       */
      request_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The request method enabled or not
       */
      request_method: boolean;
    }
  | {
      /**
       * The response body enabled or not
       */
      response_body: boolean;
    }
  | {
      /**
       * The router response body json path of the chunks.
       */
      response_errors: string;
    }
  | {
      /**
       * The name of the request header.
       */
      response_header: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The response context key.
       */
      response_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The http response status code.
       */
      response_status: ResponseStatus;
    }
  | {
      /**
       * Extract router overhead duration in seconds
       */
      router_overhead: boolean;
    }
  | {
      /**
       * The mode for extracting active subgraph request information
       */
      active_subgraph_requests: ActiveSubgraphRequests;
    }
  | string
  | {
      /**
       * A static value
       */
      static: AttributeValue;
    }
  | {
      /**
       * Apollo Studio operation id
       */
      studio_operation_id: boolean;
    }
  | {
      /**
       * The format of the trace ID.
       */
      trace_id: TraceIdFormat;
    };
export type ErrorRepr = 'reason';
export type OperationName = 'string' | 'hash';
export type ResponseStatus = 'code' | 'reason';
export type ActiveSubgraphRequests = 'count' | 'bool';
export type TraceIdFormat = 'hexadecimal' | 'open_telemetry' | 'decimal' | 'datadog' | 'uuid';
/**
 * Configures the context
 */
export type ContextConf = boolean | NewContextConf;
/**
 * Configures the context
 */
export type NewContextConf =
  | 'all'
  | 'deprecated'
  | {
      selective: string[];
    };
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionSupergraphSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [SupergraphSelectorOrValue, SupergraphSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [SupergraphSelectorOrValue, SupergraphSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [SupergraphSelectorOrValue, SupergraphSelectorOrValue];
    }
  | {
      exists: SupergraphSelector;
    }
  | {
      all: ConditionSupergraphSelector[];
    }
  | {
      any: ConditionSupergraphSelector[];
    }
  | {
      not: ConditionSupergraphSelector;
    }
  | 'true'
  | 'false';
export type SupergraphSelectorOrValue = AttributeValue | SupergraphSelector;
export type SupergraphSelector =
  | {
      /**
       * The operation name from the query.
       */
      operation_name: OperationName;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The operation kind from the query (query|mutation|subscription).
       */
      operation_kind: OperationKind;
    }
  | {
      /**
       * The graphql query.
       */
      query: Query;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of a graphql query variable.
       */
      query_variable: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of the request header.
       */
      request_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of the response header.
       */
      response_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The http response status code.
       */
      response_status: ResponseStatus;
    }
  | {
      /**
       * The request context key.
       */
      request_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The response context key.
       */
      response_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The supergraph response body json path of the chunks.
       */
      response_data: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The supergraph response body json path of the chunks.
       */
      response_errors: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of the baggage item.
       */
      baggage: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of the environment variable
       */
      env: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | string
  | {
      /**
       * A static value
       */
      static: AttributeValue;
    }
  | {
      /**
       * Boolean set to true if the response body contains graphql error
       */
      on_graphql_error: boolean;
    }
  | {
      /**
       * Critical error if it happens
       */
      error: ErrorRepr;
    }
  | {
      /**
       * The cost value to select, one of: estimated, actual, delta.
       */
      cost: CostValue;
    }
  | {
      /**
       * Boolean returning true if it's the primary response and not events like subscription events or deferred responses
       */
      is_primary_response: boolean;
    };
export type OperationKind = 'string';
export type Query = 'string' | 'aliases' | 'depth' | 'height' | 'root_fields';
export type CostValue = 'estimated' | 'actual' | 'delta' | 'result';
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionSubgraphSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [SubgraphSelectorOrValue, SubgraphSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [SubgraphSelectorOrValue, SubgraphSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [SubgraphSelectorOrValue, SubgraphSelectorOrValue];
    }
  | {
      exists: SubgraphSelector;
    }
  | {
      all: ConditionSubgraphSelector[];
    }
  | {
      any: ConditionSubgraphSelector[];
    }
  | {
      not: ConditionSubgraphSelector;
    }
  | 'true'
  | 'false';
export type SubgraphSelectorOrValue = AttributeValue | SubgraphSelector;
export type SubgraphSelector =
  | {
      /**
       * The operation name from the subgraph query.
       */
      subgraph_operation_name: OperationName;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The kind of the subgraph operation (query|mutation|subscription).
       */
      subgraph_operation_kind: OperationKind;
    }
  | {
      /**
       * The subgraph name
       */
      subgraph_name: boolean;
    }
  | {
      /**
       * The graphql query to the subgraph.
       */
      subgraph_query: SubgraphQuery;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of a subgraph query variable.
       */
      subgraph_query_variable: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The subgraph response body json path.
       */
      subgraph_response_data: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The subgraph response body json path.
       */
      subgraph_response_errors: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of a subgraph request header.
       */
      subgraph_request_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of a subgraph response header.
       */
      subgraph_response_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The subgraph http response status code.
       */
      subgraph_response_status: ResponseStatus;
    }
  | {
      /**
       * The subgraph http resend count
       */
      subgraph_resend_count: boolean;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The supergraph query operation name.
       */
      supergraph_operation_name: OperationName;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The supergraph query operation kind (query|mutation|subscription).
       */
      supergraph_operation_kind: OperationKind;
    }
  | {
      /**
       * The supergraph query to the subgraph.
       */
      supergraph_query: Query;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The supergraph query variable name.
       */
      supergraph_query_variable: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The supergraph request header name.
       */
      supergraph_request_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The request context key.
       */
      request_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The response context key.
       */
      response_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * Boolean set to true if the response body contains graphql error
       */
      subgraph_on_graphql_error: boolean;
    }
  | {
      /**
       * The name of the baggage item.
       */
      baggage: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The name of the environment variable
       */
      env: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | string
  | {
      /**
       * A static value
       */
      static: AttributeValue;
    }
  | {
      /**
       * Critical error if it happens
       */
      error: ErrorRepr;
    }
  | {
      /**
       * Select if you want to get cache hit or cache miss
       */
      cache: CacheKind;
      /**
       * Specify the entity type on which you want the cache data. (default: all)
       */
      entity_type?: EntityType | null;
    }
  | {
      /**
       * Select if you want to get response cache hit or response cache miss
       */
      response_cache: CacheKind;
      /**
       * Specify the entity type on which you want the cache data. (default: all)
       */
      entity_type?: EntityType | null;
    }
  | {
      /**
       * Select if you want to know if it's a cache hit (all data coming from cache), miss (all data coming from subgraph) or partial_hit (not all entities are coming from cache for example)
       */
      response_cache_status: CacheStatus;
      /**
       * Specify the entity type on which you want the cache data status. (default: all)
       */
      entity_type?: EntityType | null;
    }
  | {
      /**
       * Select data you want from the computed cache control from response caching
       */
      response_cache_control: CacheControlSelector;
    };
export type SubgraphQuery = 'string';
export type CacheKind = 'hit' | 'miss';
export type EntityType = All | string;
export type All = 'all';
export type CacheStatus = 'hit' | 'miss' | 'partial_hit' | 'status';
export type CacheControlSelector = 'scope' | 'no_store' | 'max_age';
export type Mode2 = 'measure' | 'enforce';
/**
 * Algorithm for calculating the cost of an incoming query.
 */
export type StrategyConfig = {
  static_estimated: {
    /**
     * The assumed length of lists returned by the operation.
     */
    list_size: number;
    /**
     * The maximum cost of a query
     */
    max: number;
  };
};
/**
 * Forbid mutations configuration
 */
export type ForbidMutationsConfig = boolean;
export type Operation =
  | {
      insert: Insert;
    }
  | {
      remove: Remove;
    }
  | {
      propagate: Propagate;
    };
/**
 * Insert header
 */
export type Insert = InsertStatic | InsertFromContext | InsertFromBody;
/**
 * Remove header
 */
export type Remove =
  | {
      /**
       * Remove a header given a header name
       */
      named: string;
    }
  | {
      /**
       * Remove a header given a regex matching against the header name
       */
      matching: string;
    };
/**
 * Propagate header
 */
export type Propagate =
  | {
      /**
       * The source header name
       */
      named: string;
      /**
       * An optional target header name
       */
      rename?: string | null;
      /**
       * Default value for the header.
       */
      default?: string | null;
    }
  | {
      /**
       * The regex on header name
       */
      matching: string;
    };
export type ErrorMode =
  | boolean
  | {
      /**
       * Allow specific extension keys
       */
      allow_extensions_keys: string[];
      /**
       * redact error messages for all subgraphs
       */
      redact_message: boolean;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Deny specific extension keys
       */
      deny_extensions_keys: string[];
      /**
       * redact error messages for all subgraphs
       */
      redact_message: boolean;
      [k: string]: unknown | undefined;
    };
export type SubgraphConfig2 =
  | (
      | boolean
      | {
          /**
           * Allow specific extension keys for a subgraph. Will extending global allow list or override a global deny list
           */
          allow_extensions_keys: string[];
          /**
           * Redact error messages for a subgraph
           */
          redact_message?: boolean | null;
          /**
           * Exclude specific extension keys from global allow/deny list
           */
          exclude_global_keys?: string[];
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Allow specific extension keys for a subgraph. Will extending global deny list or override a global allow list
           */
          deny_extensions_keys: string[];
          /**
           * Redact error messages for a subgraph
           */
          redact_message?: boolean | null;
          /**
           * Exclude specific extension keys from global allow/deny list
           */
          exclude_global_keys?: string[];
          [k: string]: unknown | undefined;
        }
      | {
          /**
           * Redact error messages for a subgraph
           */
          redact_message?: boolean | null;
          /**
           * Exclude specific extension keys from global allow/deny list
           */
          exclude_global_keys?: string[];
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
/**
 * Subgraph URL mappings
 */
export type Conf2 = {
  [k: string]: string | undefined;
};
/**
 * Per subgraph configuration for entity caching
 */
export type Ttl = string;
/**
 * Supported mode for a multipart request
 */
export type MultipartRequestMode = 'stream';
export type HeartbeatInterval = Disabled | Enabled | string;
export type Disabled = 'disabled';
export type Enabled = 'enabled';
export type WebSocketProtocol = 'graphql_ws' | 'graphql_transport_ws';
export type SamplerOption = number | Sampler;
export type Sampler = 'always_on' | 'always_off';
export type Protocol = 'grpc' | 'http';
/**
 * Forward headers
 */
export type ForwardHeaders =
  | 'none'
  | 'all'
  | {
      /**
       * Send only the headers specified
       */
      only: string[];
    }
  | {
      /**
       * Send all headers except those specified
       */
      except: string[];
    };
/**
 * Forward GraphQL variables
 */
export type ForwardValues =
  | 'none'
  | 'all'
  | {
      /**
       * Send only the variables specified
       */
      only: string[];
    }
  | {
      /**
       * Send all variables except those specified
       */
      except: string[];
    };
/**
 * Allow some error fields to be send to Apollo Studio even when `redact` is true.
 */
export type ErrorRedactionPolicy = 'strict' | 'extended';
/**
 * Extended Open Telemetry error metrics mode
 */
export type ExtendedErrorMetricsMode = 'disabled' | 'enabled';
/**
 * Apollo usage report signature normalization algorithm
 */
export type ApolloSignatureNormalizationAlgorithm = 'legacy' | 'enhanced';
/**
 * Apollo usage report reference generation modes.
 */
export type ApolloMetricsReferenceMode = 'extended' | 'standard';
export type LoggingFormat =
  | {
      json: {
        /**
         * Include the timestamp with the log event. (default: true)
         */
        display_timestamp?: boolean;
        /**
         * Include the target with the log event. (default: true)
         */
        display_target?: boolean;
        /**
         * Include the level with the log event. (default: true)
         */
        display_level?: boolean;
        /**
         * Include the thread_id with the log event.
         */
        display_thread_id?: boolean;
        /**
         * Include the thread_name with the log event.
         */
        display_thread_name?: boolean;
        /**
         * Include the filename with the log event.
         */
        display_filename?: boolean;
        /**
         * Include the line number with the log event.
         */
        display_line_number?: boolean;
        /**
         * Include the current span in this log event.
         */
        display_current_span?: boolean;
        /**
         * Include all of the containing span information with the log event. (default: true)
         */
        display_span_list?: boolean;
        /**
         * Include the resource with the log event. (default: true)
         */
        display_resource?: boolean;
        /**
         * Include the trace id (if any) with the log event. (default: true)
         */
        display_trace_id?: DisplayTraceIdFormat;
        /**
         * Include the span id (if any) with the log event. (default: true)
         */
        display_span_id?: boolean;
        /**
         * List of span attributes to attach to the json log object
         */
        span_attributes?: string[];
      };
    }
  | 'json'
  | {
      text: {
        /**
         * Process ansi escapes (default: true)
         */
        ansi_escape_codes?: boolean;
        /**
         * Include the timestamp with the log event. (default: true)
         */
        display_timestamp?: boolean;
        /**
         * Include the target with the log event.
         */
        display_target?: boolean;
        /**
         * Include the level with the log event. (default: true)
         */
        display_level?: boolean;
        /**
         * Include the thread_id with the log event.
         */
        display_thread_id?: boolean;
        /**
         * Include the thread_name with the log event.
         */
        display_thread_name?: boolean;
        /**
         * Include the filename with the log event.
         */
        display_filename?: boolean;
        /**
         * Include the line number with the log event.
         */
        display_line_number?: boolean;
        /**
         * Include the service namespace with the log event.
         */
        display_service_namespace?: boolean;
        /**
         * Include the service name with the log event.
         */
        display_service_name?: boolean;
        /**
         * Include the resource with the log event.
         */
        display_resource?: boolean;
        /**
         * Include the current span in this log event. (default: true)
         */
        display_current_span?: boolean;
        /**
         * Include all of the containing span information with the log event. (default: true)
         */
        display_span_list?: boolean;
        /**
         * Include the trace id (if any) with the log event. (default: false)
         */
        display_trace_id?: DisplayTraceIdFormat;
        /**
         * Include the span id (if any) with the log event. (default: false)
         */
        display_span_id?: boolean;
      };
    }
  | 'text';
export type DisplayTraceIdFormat = TraceIdFormat | boolean;
export type MetricAggregation =
  | {
      histogram: {
        buckets: number[];
      };
    }
  | 'drop';
export type Temporality = 'cumulative' | 'delta';
export type ResourceSelectorConfig = 'all' | 'none';
export type UriEndpoint = string;
export type StandardEventConfigRouterSelector =
  | EventLevelConfig
  | {
      level: EventLevelConfig;
      condition: ConditionRouterSelector;
      [k: string]: unknown | undefined;
    };
/**
 * Log level configuration for events. Use "off" to not log the event, or a level name to log the
 * event at that level and above.
 */
export type EventLevelConfig = 'info' | 'warn' | 'error' | 'off';
/**
 * When to trigger the event.
 */
export type EventOn = 'request' | 'response' | 'event_response' | 'error';
export type StandardAttribute =
  | boolean
  | {
      alias: string;
    };
export type StandardEventConfigSupergraphSelector =
  | EventLevelConfig
  | {
      level: EventLevelConfig;
      condition: ConditionSupergraphSelector;
      [k: string]: unknown | undefined;
    };
export type StandardEventConfigSubgraphSelector =
  | EventLevelConfig
  | {
      level: EventLevelConfig;
      condition: ConditionSubgraphSelector;
      [k: string]: unknown | undefined;
    };
export type StandardEventConfigConnectorSelector =
  | EventLevelConfig
  | {
      level: EventLevelConfig;
      condition: ConditionConnectorSelector;
      [k: string]: unknown | undefined;
    };
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionConnectorSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [ConnectorSelectorOrValue, ConnectorSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [ConnectorSelectorOrValue, ConnectorSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [ConnectorSelectorOrValue, ConnectorSelectorOrValue];
    }
  | {
      exists: ConnectorSelector;
    }
  | {
      all: ConditionConnectorSelector[];
    }
  | {
      any: ConditionConnectorSelector[];
    }
  | {
      not: ConditionConnectorSelector;
    }
  | 'true'
  | 'false';
export type ConnectorSelectorOrValue = AttributeValue | ConnectorSelector;
export type ConnectorSelector =
  | {
      /**
       * The subgraph name
       */
      subgraph_name: boolean;
    }
  | {
      /**
       * The connector source.
       */
      connector_source: ConnectorSource;
    }
  | {
      /**
       * The name of a connector HTTP request header.
       */
      connector_http_request_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of a connector HTTP response header.
       */
      connector_http_response_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The connector HTTP response status code.
       */
      connector_http_response_status: ResponseStatus;
    }
  | {
      /**
       * The connector HTTP method.
       */
      connector_http_method: boolean;
    }
  | {
      /**
       * The connector URL template.
       */
      connector_url_template: boolean;
    }
  | {
      /**
       * A static value
       */
      static: AttributeValue;
    }
  | {
      /**
       * Critical error if it happens
       */
      error: ErrorRepr;
    }
  | {
      /**
       * Request mapping problems, if any
       */
      connector_request_mapping_problems: MappingProblems;
    }
  | {
      /**
       * Response mapping problems, if any
       */
      connector_response_mapping_problems: MappingProblems;
    }
  | {
      /**
       * The request context key.
       */
      request_context: string;
      /**
       * Optional default value.
       */
      default?: AttributeValue | null;
    }
  | {
      /**
       * The supergraph query operation name.
       */
      supergraph_operation_name: OperationName;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The supergraph query operation kind (query|mutation|subscription).
       */
      supergraph_operation_kind: OperationKind;
    }
  | {
      /**
       * Boolean set to true if the response's `is_successful` condition is false. If this is not
       * set, returns true when the response contains a non-200 status code
       */
      connector_on_response_error: boolean;
    };
export type ConnectorSource = 'name';
export type MappingProblems = 'problems' | 'count' | 'boolean';
/**
 * Span mode to create new or deprecated spans
 */
export type SpanMode = 'deprecated' | 'spec_compliant';
export type DefaultAttributeRequirementLevel = 'none' | 'required' | 'recommended';
export type ConditionalRouterSelector =
  | (
      | RouterSelector
      | {
          condition?: ConditionRouterSelector;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type ConditionalSupergraphSelector =
  | (
      | SupergraphSelector
      | {
          condition?: ConditionSupergraphSelector;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type ConditionalSubgraphSelector =
  | (
      | SubgraphSelector
      | {
          condition?: ConditionSubgraphSelector;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type ConditionalConnectorSelector =
  | (
      | ConnectorSelector
      | {
          condition?: ConditionConnectorSelector;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type ConditionalHttpClientSelector =
  | (
      | HttpClientSelector
      | {
          condition?: ConditionHttpClientSelector;
          [k: string]: unknown | undefined;
        }
    )
  | undefined;
export type HttpClientSelector =
  | {
      /**
       * The name of the request header.
       */
      request_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    }
  | {
      /**
       * The name of the response header.
       */
      response_header: string;
      /**
       * Optional default value.
       */
      default?: string | null;
    };
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionHttpClientSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [HttpClientSelectorOrValue, HttpClientSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [HttpClientSelectorOrValue, HttpClientSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [HttpClientSelectorOrValue, HttpClientSelectorOrValue];
    }
  | {
      exists: HttpClientSelector;
    }
  | {
      all: ConditionHttpClientSelector[];
    }
  | {
      any: ConditionHttpClientSelector[];
    }
  | {
      not: ConditionHttpClientSelector;
    }
  | 'true'
  | 'false';
export type HttpClientSelectorOrValue = AttributeValue | HttpClientSelector;
export type StandardInstrumentExtendedRouterAttributesWithRouterSelector =
  | null
  | boolean
  | {
      attributes: ExtendedRouterAttributesWithRouterSelector;
    };
export type StandardInstrumentActiveRequestsAttributes =
  | null
  | boolean
  | {
      attributes: ActiveRequestsAttributes;
    };
export type StandardInstrumentExtendedRouterOverheadAttributesWithRouterSelector =
  | null
  | boolean
  | {
      attributes: ExtendedRouterOverheadAttributesWithRouterSelector;
    };
export type InstrumentType = 'counter' | 'histogram';
export type RouterValue = Standard | RouterSelector;
export type Standard = 'duration' | 'unit';
export type StandardInstrumentExtendedSupergraphAttributesWithSupergraphSelector =
  | null
  | boolean
  | {
      attributes: ExtendedSupergraphAttributesWithSupergraphSelector;
    };
export type SupergraphValue = Standard | Event5 | SupergraphSelector;
export type Event5 =
  | 'event_duration'
  | 'event_unit'
  | {
      event_custom: SupergraphSelector;
    };
export type StandardInstrumentExtendedSubgraphAttributesWithSubgraphSelector =
  | null
  | boolean
  | {
      attributes: ExtendedSubgraphAttributesWithSubgraphSelector;
    };
export type SubgraphValue = Standard | SubgraphSelector;
export type StandardInstrumentExtendedConnectorAttributesWithConnectorSelector =
  | null
  | boolean
  | {
      attributes: ExtendedConnectorAttributesWithConnectorSelector;
    };
export type ConnectorValue = Standard | ConnectorSelector;
export type StandardInstrumentExtendedGraphQLAttributesWithGraphQLSelector =
  | null
  | boolean
  | {
      attributes: ExtendedGraphQLAttributesWithGraphQLSelector;
    };
export type GraphQLSelector =
  | (
      | {
          list_length: ListLength;
        }
      | {
          field_name: FieldName;
        }
      | {
          field_type: FieldType;
        }
      | {
          type_name: TypeName;
        }
      | {
          /**
           * The operation name from the query.
           */
          operation_name: OperationName;
          /**
           * Optional default value.
           */
          default?: string | null;
        }
      | {
          /**
           * A static value
           */
          static: AttributeValue;
        }
    )
  | undefined;
export type ListLength = 'value';
export type FieldName = 'string';
export type FieldType = 'name' | 'type';
export type TypeName = 'string';
export type GraphQLValue = StandardUnit | GraphQLSelector | undefined;
export type StandardUnit = 'unit';
/**
 * Specify a condition for when an [instrument][] should be mutated or an [event][] should be triggered.
 *
 * [instrument]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/instruments
 * [event]: https://www.apollographql.com/docs/graphos/routing/observability/telemetry/instrumentation/events
 */
export type ConditionGraphQLSelector =
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      eq: [GraphQLSelectorOrValue, GraphQLSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      gt: [GraphQLSelectorOrValue, GraphQLSelectorOrValue];
    }
  | {
      /**
       * @minItems 2
       * @maxItems 2
       */
      lt: [GraphQLSelectorOrValue, GraphQLSelectorOrValue];
    }
  | {
      exists: GraphQLSelector | undefined;
    }
  | {
      all: ConditionGraphQLSelector[];
    }
  | {
      any: ConditionGraphQLSelector[];
    }
  | {
      not: ConditionGraphQLSelector;
    }
  | 'true'
  | 'false';
export type GraphQLSelectorOrValue = AttributeValue | GraphQLSelector | undefined;
export type StandardInstrumentExtendedCacheAttributesWithSubgraphSelector =
  | null
  | boolean
  | {
      attributes: ExtendedCacheAttributesWithSubgraphSelector;
    };
export type Compression = 'gzip' | 'deflate' | 'br' | 'identity';
export type BatchingMode = 'batch_http_link';
/**
 * Per subgraph configuration for response caching
 */
export type Ttl2 = string;

/**
 * The configuration for the router.
 *
 * Can be created through `serde::Deserialize` from various formats,
 * or inline in Rust code with `serde_json::json!` and `serde_json::from_value`.
 */
export interface Configuration {
  health_check?: HealthCheckConfig;
  /**
   * Sandbox configuration
   */
  sandbox?: Sandbox;
  /**
   * Homepage configuration
   */
  homepage?: Homepage;
  /**
   * Configuration for the server
   */
  server?: Server;
  /**
   * Configuration for the supergraph
   */
  supergraph?: Supergraph;
  /**
   * Cross origin request headers.
   */
  cors?: Cors;
  tls?: Tls;
  /**
   * Configures automatic persisted queries
   */
  apq?: Apq;
  /**
   * Configures managed persisted queries
   */
  persisted_queries?: PersistedQueries;
  limits?: LimitsConfig;
  /**
   * Configuration for chaos testing, trying to reproduce bugs that require uncommon conditions.
   * You probably don’t want this in production!
   */
  experimental_chaos?: Config;
  /**
   * Plugin configuration
   */
  plugins?: Plugins;
  authentication?: AuthenticationConfig;
  authorization?: AuthorizationConfig;
  connectors?: ConnectorsConfig;
  coprocessor?: CoprocessorConfig;
  csrf?: CSRFConfig;
  demand_control?: DemandControlConfig;
  enhanced_client_awareness?: Config4;
  experimental_diagnostics?: Config5;
  fleet_detector?: Conf;
  forbid_mutations?: ForbidMutationsConfig;
  headers?: HeadersConfig;
  include_subgraph_errors?: IncludeSubgraphErrorsConfig;
  license_enforcement?: LicenseEnforcementConfig;
  override_subgraph_url?: Conf2;
  preview_entity_cache?: Config6;
  preview_file_uploads?: FileUploadsConfig;
  progressive_override?: Config9;
  rhai?: RhaiConfig;
  subscription?: SubscriptionConfig;
  telemetry?: TelemetryConfig;
  traffic_shaping?: TrafficShapingConfig;
  /**
   * Batching configuration.
   */
  batching?: Batching;
  /**
   * Type conditioned fetching configuration.
   */
  experimental_type_conditioned_fetching?: boolean;
}
/**
 * Configuration options pertaining to the health component.
 */
export interface HealthCheckConfig {
  /**
   * The socket address and port to listen on
   * Defaults to 127.0.0.1:8088
   */
  listen?: ListenAddr;
  /**
   * Set to false to disable the health check
   */
  enabled?: boolean;
  /**
   * Optionally set a custom healthcheck path
   * Defaults to /health
   */
  path?: string;
  /**
   * Optionally specify readiness configuration
   */
  readiness?: ReadinessConfig;
}
/**
 * Configuration options pertaining to the readiness health sub-component.
 */
export interface ReadinessConfig {
  /**
   * The readiness interval configuration
   */
  interval?: ReadinessIntervalConfig;
  /**
   * How many rejections are allowed in an interval (default: 100)
   * If this number is exceeded, the router will start to report unready.
   */
  allowed?: number;
}
/**
 * Configuration options pertaining to the readiness health interval sub-component.
 */
export interface ReadinessIntervalConfig {
  /**
   * The sampling interval (default: 5s)
   */
  sampling?: string | null;
  /**
   * The unready interval (default: 2 * sampling interval)
   */
  unready?: string | null;
}
/**
 * Configuration options pertaining to the sandbox page.
 */
export interface Sandbox {
  /**
   * Set to true to enable sandbox
   */
  enabled?: boolean;
}
/**
 * Configuration options pertaining to the home page.
 */
export interface Homepage {
  /**
   * Set to false to disable the homepage
   */
  enabled?: boolean;
  /**
   * Graph reference
   * This will allow you to redirect from the Apollo Router landing page back to Apollo Studio Explorer
   */
  graph_ref?: string | null;
}
export interface Server {
  /**
   * The server http configuration
   */
  http?: ServerHttpConfig;
}
/**
 * Configuration for HTTP
 */
export interface ServerHttpConfig {
  /**
   * Header read timeout in human-readable format; defaults to 10s
   */
  header_read_timeout?: string;
}
/**
 * Configuration options pertaining to the supergraph server component.
 */
export interface Supergraph {
  /**
   * The socket address and port to listen on
   * Defaults to 127.0.0.1:4000
   */
  listen?: ListenAddr;
  /**
   * The timeout for shutting down connections during a router shutdown or a schema reload.
   */
  connection_shutdown_timeout?: string;
  /**
   * The HTTP path on which GraphQL requests will be served.
   * default: "/"
   */
  path?: string;
  /**
   * Enable introspection
   * Default: false
   */
  introspection?: boolean;
  /**
   * Enable QP generation of fragments for subgraph requests
   * Default: true
   */
  generate_query_fragments?: boolean;
  /**
   * Set to false to disable defer support
   */
  defer_support?: boolean;
  /**
   * Query planning options
   */
  query_planning?: QueryPlanning;
  /**
   * abort request handling when the client drops the connection.
   * Default: false.
   * When set to true, some parts of the request pipeline like telemetry will not work properly,
   * but request handling will stop immediately when the client connection is closed.
   */
  early_cancel?: boolean;
  /**
   * Enable errors generated during response reformatting and result coercion to be returned in
   * responses.
   * Default: false
   * All subgraph responses are checked and corrected to ensure alignment with the schema and
   * query. When enabled, misaligned values will generate errors which are included in errors
   * array in the response.
   */
  enable_result_coercion_errors?: boolean;
  /**
   * Log a message if the client closes the connection before the response is sent.
   * Default: false.
   */
  experimental_log_on_broken_pipe?: boolean;
}
/**
 * Query planning cache configuration
 */
export interface QueryPlanning {
  /**
   * Cache configuration
   */
  cache?: QueryPlanCache;
  /**
   * Warms up the cache on reloads by running the query plan over
   * a list of the most used queries (from the in memory cache)
   * Configures the number of queries warmed up. Defaults to 1/3 of
   * the in memory cache
   */
  warmed_up_queries?: number | null;
  /**
   * Sets a limit to the number of generated query plans.
   * The planning process generates many different query plans as it
   * explores the graph, and the list can grow large. By using this
   * limit, we prevent that growth and still get a valid query plan,
   * but it may not be the optimal one.
   *
   * The default limit is set to 10000, but it may change in the future
   */
  experimental_plans_limit?: number | null;
  /**
   * Before creating query plans, for each path of fields in the query we compute all the
   * possible options to traverse that path via the subgraphs. Multiple options can arise because
   * fields in the path can be provided by multiple subgraphs, and abstract types (i.e. unions
   * and interfaces) returned by fields sometimes require the query planner to traverse through
   * each constituent object type. The number of options generated in this computation can grow
   * large if the schema or query are sufficiently complex, and that will increase the time spent
   * planning.
   *
   * This config allows specifying a per-path limit to the number of options considered. If any
   * path's options exceeds this limit, query planning will abort and the operation will fail.
   *
   * The default value is None, which specifies no limit.
   */
  experimental_paths_limit?: number | null;
  /**
   * If cache warm up is configured, this will allow the router to keep a query plan created with
   * the old schema, if it determines that the schema update does not affect the corresponding query
   */
  experimental_reuse_query_plans?: boolean;
  /**
   * Configures cooperative cancellation of query planning
   *
   * See [`CooperativeCancellation`] for more details.
   */
  experimental_cooperative_cancellation?: CooperativeCancellation;
}
/**
 * Cache configuration
 */
export interface QueryPlanCache {
  /**
   * Configures the in memory cache (always active)
   */
  in_memory?: InMemoryCache;
  /**
   * Configures and activates the Redis cache
   */
  redis?: QueryPlanRedisCache | null;
}
/**
 * In memory cache configuration
 */
export interface InMemoryCache {
  /**
   * Number of entries in the Least Recently Used cache
   */
  limit: number;
}
/**
 * Redis cache configuration
 */
export interface QueryPlanRedisCache {
  /**
   * List of URLs to the Redis cluster
   */
  urls: string[];
  /**
   * Redis username if not provided in the URLs. This field takes precedence over the username in the URL
   */
  username?: string | null;
  /**
   * Redis password if not provided in the URLs. This field takes precedence over the password in the URL
   */
  password?: string | null;
  /**
   * Redis request timeout (default: 500ms)
   */
  timeout?: string | null;
  /**
   * TTL for entries
   */
  ttl?: string | null;
  /**
   * namespace used to prefix Redis keys
   */
  namespace?: string | null;
  /**
   * TLS client configuration
   */
  tls?: TlsClient | null;
  /**
   * Prevents the router from starting if it cannot connect to Redis
   */
  required_to_start?: boolean;
  /**
   * When a TTL is set on a key, reset it when reading the data from that key
   */
  reset_ttl?: boolean;
  /**
   * The size of the Redis connection pool
   */
  pool_size?: number;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface TlsClient {
  /**
   * list of certificate authorities in PEM format
   */
  certificate_authorities?: string | null;
  /**
   * client certificate authentication
   */
  client_authentication?: TlsClientAuth | null;
}
/**
 * TLS client authentication
 */
export interface TlsClientAuth {
  /**
   * list of certificates in PEM format
   */
  certificate_chain: string;
  /**
   * key in PEM format
   */
  key: string;
}
export interface CooperativeCancellation {
  /**
   * When true, cooperative cancellation is enabled.
   */
  enabled?: boolean;
  /**
   * When enabled, this sets whether the router will cancel query planning or
   * merely emit a metric when it would have happened.
   */
  mode?: Mode & string;
  /**
   * Enable timeout for query planning.
   */
  timeout?: string | null;
}
/**
 * Cross origin request configuration.
 */
export interface Cors {
  /**
   * Set to true to allow any origin. Defaults to false. This is the only way to allow Origin: null.
   */
  allow_any_origin?: boolean;
  /**
   * Set to true to add the `Access-Control-Allow-Credentials` header.
   */
  allow_credentials?: boolean;
  /**
   * The headers to allow.
   *
   * If this value is not set, the router will mirror client's `Access-Control-Request-Headers`.
   *
   * Note that if you set headers here,
   * you also want to have a look at your `CSRF` plugins configuration,
   * and make sure you either:
   * - accept `x-apollo-operation-name` AND / OR `apollo-require-preflight`
   * - defined `csrf` required headers in your yml configuration, as shown in the
   *   `examples/cors-and-csrf/custom-headers.router.yaml` files.
   */
  allow_headers?: string[];
  /**
   * Which response headers should be made available to scripts running in the browser,
   * in response to a cross-origin request.
   */
  expose_headers?: string[] | null;
  /**
   * Allowed request methods. See module documentation for default behavior.
   */
  methods?: string[];
  /**
   * The `Access-Control-Max-Age` header value in time units
   */
  max_age?: string;
  /**
   * The origin(s) to allow requests from. The router matches request origins against policies
   * in order, first by exact match, then by regex. See module documentation for default behavior.
   */
  policies?: Policy[] | null;
}
/**
 * Configuration for a specific set of origins
 */
export interface Policy {
  /**
   * Set to true to add the `Access-Control-Allow-Credentials` header for these origins
   */
  allow_credentials?: boolean | null;
  /**
   * The headers to allow for these origins
   */
  allow_headers?: string[];
  /**
   * Which response headers should be made available to scripts running in the browser
   */
  expose_headers?: string[];
  /**
   * Regex patterns to match origins against.
   */
  match_origins?: string[];
  /**
   * The `Access-Control-Max-Age` header value in time units
   */
  max_age?: string;
  /**
   * Allowed request methods for these origins.
   */
  methods?: string[] | null;
  /**
   * The origins to allow requests from.
   */
  origins?: string[];
  /**
   * When `Some`, the `Access-Control-Allow-Private-Network` header will be added as well as the
   * respective headers contained within the policy.
   */
  private_network_access?: PrivateNetworkAccessPolicy | null;
}
export interface PrivateNetworkAccessPolicy {
  /**
   * When specified, the `Private-Network-Access-ID` header will be added with the given ID.
   * The ID must be a 48-bit value presented as 6 hexadecimal bytes separated by colons, e.g.
   * `01:23:45:67:89:0A`.
   */
  access_id?: string | null;
  /**
   * When `Some`, the `Private-Network-Access-Name` header will be added with the given name.
   * The name can be at most 248 UTF-8 code units and match a RegEx equivalent to the ECMAScript
   * RegEx `/^[a-z0-9_-.]+$/.`
   */
  access_name?: string | null;
}
/**
 * TLS related configuration options.
 */
export interface Tls {
  /**
   * TLS server configuration
   *
   * This will affect the GraphQL endpoint and any other endpoint targeting the same listen address.
   */
  supergraph?: TlsSupergraph | null;
  /**
   * Outgoing TLS configuration to subgraphs.
   */
  subgraph?: SubgraphTlsClientConfiguration;
  /**
   * Outgoing TLS configuration to Apollo Connectors.
   */
  connector?: ConnectorConfiguration;
}
/**
 * Configuration options pertaining to the supergraph server component.
 */
export interface TlsSupergraph {
  /**
   * server certificate in PEM format
   */
  certificate: string;
  /**
   * server key in PEM format
   */
  key: string;
  /**
   * list of certificate authorities in PEM format
   */
  certificate_chain: string;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface SubgraphTlsClientConfiguration {
  /**
   * options applying to all subgraphs
   */
  all?: TlsClient;
  /**
   * per subgraph options
   */
  subgraphs?: {
    [k: string]: TlsClient;
  };
  [k: string]: unknown | undefined;
}
export interface ConnectorConfiguration {
  /**
   * Map of subgraph_name.connector_source_name to configuration
   */
  sources?: {
    [k: string]: TlsClient;
  };
  /**
   * Options applying to all sources
   */
  all?: TlsClient;
  [k: string]: unknown | undefined;
}
/**
 * Automatic Persisted Queries (APQ) configuration
 */
export interface Apq {
  /**
   * Activates Automatic Persisted Queries (enabled by default)
   */
  enabled?: boolean;
  router?: Router;
  subgraph?: SubgraphSubgraphApqConfiguration;
}
/**
 * Router level (APQ) configuration
 */
export interface Router {
  cache?: Cache;
}
/**
 * Cache configuration
 */
export interface Cache {
  /**
   * Configures the in memory cache (always active)
   */
  in_memory?: InMemoryCache;
  /**
   * Configures and activates the Redis cache
   */
  redis?: RedisCache | null;
}
/**
 * Redis cache configuration
 */
export interface RedisCache {
  /**
   * List of URLs to the Redis cluster
   */
  urls: string[];
  /**
   * Redis username if not provided in the URLs. This field takes precedence over the username in the URL
   */
  username?: string | null;
  /**
   * Redis password if not provided in the URLs. This field takes precedence over the password in the URL
   */
  password?: string | null;
  /**
   * Redis request timeout (default: 500ms)
   */
  timeout?: string | null;
  /**
   * TTL for entries
   */
  ttl?: string | null;
  /**
   * namespace used to prefix Redis keys
   */
  namespace?: string | null;
  /**
   * TLS client configuration
   */
  tls?: TlsClient | null;
  /**
   * Prevents the router from starting if it cannot connect to Redis
   */
  required_to_start?: boolean;
  /**
   * When a TTL is set on a key, reset it when reading the data from that key
   */
  reset_ttl?: boolean;
  /**
   * The size of the Redis connection pool
   */
  pool_size?: number;
  /**
   * Interval for collecting Redis metrics (default: 1s)
   */
  metrics_interval?: string | null;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface SubgraphSubgraphApqConfiguration {
  /**
   * options applying to all subgraphs
   */
  all?: SubgraphApq;
  /**
   * per subgraph options
   */
  subgraphs?: {
    [k: string]: SubgraphApq;
  };
  [k: string]: unknown | undefined;
}
/**
 * Subgraph level Automatic Persisted Queries (APQ) configuration
 */
export interface SubgraphApq {
  /**
   * Enable
   */
  enabled?: boolean;
}
/**
 * Persisted Queries (PQ) configuration
 */
export interface PersistedQueries {
  /**
   * Activates Persisted Queries (disabled by default)
   */
  enabled?: boolean;
  /**
   * Enabling this field configures the router to log any freeform GraphQL request that is not in the persisted query list
   */
  log_unknown?: boolean;
  /**
   * Restricts execution of operations that are not found in the Persisted Query List
   */
  safelist?: PersistedQueriesSafelist;
  /**
   * Experimental feature to prewarm the query plan cache with persisted queries
   */
  experimental_prewarm_query_plan_cache?: PersistedQueriesPrewarmQueryPlanCache;
  /**
   * Enables using a local copy of the persisted query manifest to safelist operations
   */
  local_manifests?: string[] | null;
  /**
   * Enables hot reloading of the local persisted query manifests
   */
  hot_reload?: boolean;
}
/**
 * Persisted Queries (PQ) Safelisting configuration
 */
export interface PersistedQueriesSafelist {
  /**
   * Enables using the persisted query list as a safelist (disabled by default)
   */
  enabled?: boolean;
  /**
   * Enabling this field configures the router to reject any request that does not include the persisted query ID
   */
  require_id?: boolean;
}
/**
 * Persisted Queries (PQ) query plan cache prewarm configuration
 */
export interface PersistedQueriesPrewarmQueryPlanCache {
  /**
   * Enabling this field uses the persisted query list to pre-warm the query planner cache on startup (disabled by default)
   */
  on_startup?: boolean;
  /**
   * Enabling this field uses the persisted query list to pre-warm the query planner cache on schema and config changes (enabled by default)
   */
  on_reload?: boolean;
}
/**
 * Configuration for operation limits, parser limits, HTTP limits, etc.
 */
export interface LimitsConfig {
  /**
   * If set, requests with operations deeper than this maximum
   * are rejected with a HTTP 400 Bad Request response and GraphQL error with
   * `"extensions": {"code": "MAX_DEPTH_LIMIT"}`
   *
   * Counts depth of an operation, looking at its selection sets,˛
   * including fields in fragments and inline fragments. The following
   * example has a depth of 3.
   *
   * ```graphql
   * query getProduct {
   *   book { # 1
   *     ...bookDetails
   *   }
   * }
   *
   * fragment bookDetails on Book {
   *   details { # 2
   *     ... on ProductDetailsBook {
   *       country # 3
   *     }
   *   }
   * }
   * ```
   */
  max_depth?: number | null;
  /**
   * If set, requests with operations higher than this maximum
   * are rejected with a HTTP 400 Bad Request response and GraphQL error with
   * `"extensions": {"code": "MAX_DEPTH_LIMIT"}`
   *
   * Height is based on simple merging of fields using the same name or alias,
   * but only within the same selection set.
   * For example `name` here is only counted once and the query has height 3, not 4:
   *
   * ```graphql
   * query {
   *     name { first }
   *     name { last }
   * }
   * ```
   *
   * This may change in a future version of Apollo Router to do
   * [full field merging across fragments][merging] instead.
   *
   * [merging]: https://spec.graphql.org/October2021/#sec-Field-Selection-Merging]
   */
  max_height?: number | null;
  /**
   * If set, requests with operations with more root fields than this maximum
   * are rejected with a HTTP 400 Bad Request response and GraphQL error with
   * `"extensions": {"code": "MAX_ROOT_FIELDS_LIMIT"}`
   *
   * This limit counts only the top level fields in a selection set,
   * including fragments and inline fragments.
   */
  max_root_fields?: number | null;
  /**
   * If set, requests with operations with more aliases than this maximum
   * are rejected with a HTTP 400 Bad Request response and GraphQL error with
   * `"extensions": {"code": "MAX_ALIASES_LIMIT"}`
   */
  max_aliases?: number | null;
  /**
   * If set to true (which is the default is dev mode),
   * requests that exceed a `max_*` limit are *not* rejected.
   * Instead they are executed normally, and a warning is logged.
   */
  warn_only?: boolean;
  /**
   * Limit recursion in the GraphQL parser to protect against stack overflow.
   * default: 500
   */
  parser_max_recursion?: number;
  /**
   * Limit the number of tokens the GraphQL parser processes before aborting.
   */
  parser_max_tokens?: number;
  /**
   * Limit the size of incoming HTTP requests read from the network,
   * to protect against running out of memory. Default: 2000000 (2 MB)
   */
  http_max_request_bytes?: number;
  /**
   * Limit the maximum number of headers of incoming HTTP1 requests. Default is 100.
   *
   * If router receives more headers than the buffer size, it responds to the client with
   * "431 Request Header Fields Too Large".
   */
  http1_max_request_headers?: number | null;
  /**
   * Limit the maximum buffer size for the HTTP1 connection.
   *
   * Default is ~400kib.
   */
  http1_max_request_buf_size?: string | null;
  /**
   * For HTTP2, limit the header list to a threshold of bytes. Default is 16kb.
   *
   * If router receives more headers than allowed size of the header list, it responds to the client with
   * "431 Request Header Fields Too Large".
   */
  http2_max_headers_list_bytes?: string | null;
  /**
   * Limit the depth of nested list fields in introspection queries
   * to protect avoid generating huge responses. Returns a GraphQL
   * error with `{ message: "Maximum introspection depth exceeded" }`
   * when nested fields exceed the limit.
   * Default: true
   */
  introspection_max_depth?: boolean;
}
/**
 * Configuration for chaos testing, trying to reproduce bugs that require uncommon conditions.
 * You probably don't want this in production!
 *
 * ## How Chaos Reloading Works
 *
 * The chaos system automatically captures and replays the last known schema and configuration
 * events to force hot reloads even when the underlying content hasn't actually changed. This
 * is particularly useful for memory leak detection during hot reload scenarios.
 * If configured, it will activate upon the first config event that is encountered.
 *
 * ### Schema Reloading (`force_schema_reload`)
 * When enabled, the router will periodically replay the last schema event with a timestamp
 * comment injected into the SDL (e.g., `# Chaos reload timestamp: 1234567890`). This ensures
 * the schema is seen as "different" and triggers a full hot reload, even though the functional
 * schema content is identical.
 *
 * ### Configuration Reloading (`force_config_reload`)
 * When enabled, the router will periodically replay the last configuration event. The
 * configuration is cloned and re-emitted, which triggers the router's configuration change
 * detection and reload logic.
 *
 * ### Example Usage
 * ```yaml
 * experimental_chaos:
 *   force_schema_reload: "30s"    # Trigger schema reload every 30 seconds
 *   force_config_reload: "2m"     # Trigger config reload every 2 minutes
 * ```
 */
export interface Config {
  /**
   * Force a hot reload of the schema at regular intervals by injecting a timestamp comment
   * into the SDL. This ensures schema reloads occur even when the functional schema content
   * hasn't changed, which is useful for testing memory leaks during schema hot reloads.
   *
   * The system automatically captures the last schema event and replays it with a timestamp
   * comment added to make it appear "different" to the reload detection logic.
   */
  force_schema_reload?: string | null;
  /**
   * Force a hot reload of the configuration at regular intervals by replaying the last
   * configuration event. This triggers the router's configuration change detection even
   * when the configuration content hasn't actually changed.
   *
   * The system automatically captures the last configuration event and replays it to
   * force configuration reload processing.
   */
  force_config_reload?: string | null;
}
export interface Plugins {
  'experimental.broken'?: Config2;
  'experimental.expose_query_plan'?: ExposeQueryPlanConfig;
  'experimental.record'?: RecordConfig;
  'experimental.restricted'?: Config3;
}
/**
 * This is a broken plugin for testing purposes only.
 */
export interface Config2 {
  /**
   * Enable the broken plugin.
   */
  enabled: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Request recording configuration.
 */
export interface RecordConfig {
  /**
   * The recording plugin is disabled by default.
   */
  enabled: boolean;
  /**
   * The path to the directory where recordings will be stored. Defaults to
   * the current working directory.
   */
  storage_path?: string | null;
}
/**
 * Restricted plugin (for testing purposes only)
 */
export interface Config3 {
  /**
   * Enable the restricted plugin (for testing purposes only)
   */
  enabled: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Authentication
 */
export interface AuthenticationConfig {
  /**
   * Router configuration
   */
  router?: AuthenticationRouterConfig | null;
  /**
   * Subgraph configuration
   */
  subgraph?: AuthenticationSubgraphConfig | null;
  /**
   * Connector configuration
   */
  connector?: AuthenticationConnectorConfig | null;
}
export interface AuthenticationRouterConfig {
  /**
   * The JWT configuration
   */
  jwt: JWTConf;
}
export interface JWTConf {
  /**
   * List of JWKS used to verify tokens
   */
  jwks: JwksConf[];
  /**
   * HTTP header expected to contain JWT
   */
  header_name?: string;
  /**
   * Header value prefix
   */
  header_value_prefix?: string;
  /**
   * Whether to ignore any mismatched prefixes
   */
  ignore_other_prefixes?: boolean;
  /**
   * Alternative sources to extract the JWT
   */
  sources?: Source[];
  /**
   * Control the behavior when an error occurs during the authentication process.
   *
   * Defaults to `Error`. When set to `Continue`, requests that fail JWT authentication will
   * continue to be processed by the router, but without the JWT claims in the context. When set
   * to `Error`, requests that fail JWT authentication will be rejected with a HTTP 403 error.
   */
  on_error?: OnError;
}
export interface JwksConf {
  /**
   * Retrieve the JWK Set
   */
  url: string;
  /**
   * Polling interval for each JWKS endpoint in human-readable format; defaults to 60s
   */
  poll_interval?: string;
  /**
   * Expected issuers for tokens verified by that JWKS
   *
   * If not specified, the issuer will not be checked.
   */
  issuers?: string[] | null;
  /**
   * Expected audiences for tokens verified by that JWKS
   *
   * If not specified, the audience will not be checked.
   */
  audiences?: string[] | null;
  /**
   * List of accepted algorithms. Possible values are `HS256`, `HS384`, `HS512`, `ES256`, `ES384`, `RS256`, `RS384`, `RS512`, `PS256`, `PS384`, `PS512`, `EdDSA`
   */
  algorithms?: string[] | null;
  /**
   * List of headers to add to the JWKS request
   */
  headers?: Header[];
}
/**
 * Insert a header
 */
export interface Header {
  /**
   * The name of the header
   */
  name: string;
  /**
   * The value for the header
   */
  value: string;
}
/**
 * Configure subgraph authentication
 */
export interface AuthenticationSubgraphConfig {
  /**
   * Configuration that will apply to all subgraphs.
   */
  all?: AuthConfig | null;
  /**
   * Create a configuration that will apply only to a specific subgraph.
   */
  subgraphs?: {
    [k: string]: AuthConfig;
  };
}
/**
 * Hardcoded Config using access_key and secret.
 * Prefer using DefaultChain instead.
 */
export interface AWSSigV4HardcodedConfig {
  /**
   * The ID for this access key.
   */
  access_key_id: string;
  /**
   * The secret key used to sign requests.
   */
  secret_access_key: string;
  /**
   * The AWS region this chain applies to.
   */
  region: string;
  /**
   * The service you're trying to access, eg: "s3", "vpc-lattice-svcs", etc.
   */
  service_name: string;
  /**
   * Specify assumed role configuration.
   */
  assume_role?: AssumeRoleProvider | null;
}
/**
 * Specify assumed role configuration.
 */
export interface AssumeRoleProvider {
  /**
   * Amazon Resource Name (ARN)
   * for the role assumed when making requests
   */
  role_arn: string;
  /**
   * Uniquely identify a session when the same role is assumed by different principals or for different reasons.
   */
  session_name: string;
  /**
   * Unique identifier that might be required when you assume a role in another account.
   */
  external_id?: string | null;
}
/**
 * Configuration of the DefaultChainProvider
 */
export interface DefaultChainConfig {
  /**
   * The AWS region this chain applies to.
   */
  region: string;
  /**
   * The profile name used by this provider
   */
  profile_name?: string | null;
  /**
   * The service you're trying to access, eg: "s3", "vpc-lattice-svcs", etc.
   */
  service_name: string;
  /**
   * Specify assumed role configuration.
   */
  assume_role?: AssumeRoleProvider | null;
}
/**
 * Configure connector authentication
 */
export interface AuthenticationConnectorConfig {
  /**
   * Create a configuration that will apply only to a specific source.
   */
  sources?: {
    [k: string]: AuthConfig;
  };
}
/**
 * Authorization plugin
 */
export interface AuthorizationConfig {
  /**
   * Reject unauthenticated requests
   */
  require_authentication?: boolean;
  /**
   * `@authenticated`, `@requiresScopes` and `@policy` directives
   */
  directives?: AuthorizationDirectivesConfig;
  [k: string]: unknown | undefined;
}
export interface AuthorizationDirectivesConfig {
  /**
   * enables the `@authenticated` and `@requiresScopes` directives
   */
  enabled?: boolean;
  /**
   * generates the authorization error messages without modying the query
   */
  dry_run?: boolean;
  /**
   * refuse a query entirely if any part would be filtered
   */
  reject_unauthorized?: boolean;
  /**
   * authorization errors behaviour
   */
  errors?: AuthorizationErrorConfig;
  [k: string]: unknown | undefined;
}
export interface AuthorizationErrorConfig {
  /**
   * log authorization errors
   */
  log?: boolean;
  /**
   * location of authorization errors in the GraphQL response
   */
  response?: ErrorLocation & string;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for Apollo Connectors.
 *
 * https://www.apollographql.com/docs/graphos/routing/configuration/yaml#connectors
 */
export interface ConnectorsConfig {
  /**
   * @deprecated
   * A map of subgraph name to connectors config for that subgraph
   */
  subgraphs?: {
    [k: string]: SubgraphConnectorConfiguration | undefined;
  };
  /**
   * Map of subgraph_name.connector_source_name to source configuration
   */
  sources?: {
    [k: string]: SourceConfiguration | undefined;
  };
  /**
   * Enables connector debugging information on response extensions if the feature is enabled
   */
  debug_extensions?: boolean;
  /**
   * The maximum number of requests for a connector source
   */
  max_requests_per_operation_per_source?: number | null;
  /**
   * When enabled, adds an entry to the context for use in coprocessors
   *
   * ```json
   * {
   *   "context": {
   *     "entries": {
   *       "apollo_connectors::sources_in_query_plan": [
   *         { "subgraph_name": "subgraph", "source_name": "source" }
   *       ]
   *     }
   *   }
   * }
   * ```
   */
  expose_sources_in_context?: boolean;
  /**
   * @deprecated
   * Enables Connect spec v0.2 during the preview.
   */
  preview_connect_v0_2?: boolean | null;
  /**
   * @deprecated
   * Feature gate for Connect spec v0.3. Set to `true` to enable the using
   * the v0.3 spec during the preview phase.
   */
  preview_connect_v0_3?: boolean | null;
  /**
   * Feature gate for Connect spec v0.3. Set to `true` to enable the using
   * the v0.3 spec during the preview phase.
   */
  preview_connect_v0_4?: boolean | null;
}
/**
 * Configuration for a connector subgraph
 */
export interface SubgraphConnectorConfiguration {
  /**
   * Other values that can be used by connectors via `{$config.<key>}`
   */
  $config?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A map of `@source(name:)` to configuration for that source
   */
  sources?: {
    [k: string]: SourceConfiguration | undefined;
  };
}
/**
 * Configuration for a `@source` directive
 */
export interface SourceConfiguration {
  /**
   * Other values that can be used by connectors via `{$config.<key>}`
   */
  $config?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Override the `@source(http: {baseURL:})`
   */
  override_url?: string | null;
  /**
   * The maximum number of requests for this source
   */
  max_requests_per_operation?: number | null;
}
/**
 * Configures the externalization plugin
 */
export interface CoprocessorConfig {
  /**
   * The url you'd like to offload processing to (can be overridden per-stage)
   */
  url: string;
  client?: Client | null;
  /**
   * The timeout for external requests
   */
  timeout?: string;
  /**
   * Response validation defaults to true
   */
  response_validation?: boolean;
  /**
   * The router stage request/response configuration
   */
  router?: RouterStage;
  /**
   * The supergraph stage request/response configuration
   */
  supergraph?: SupergraphStage;
  /**
   * The execution stage request/response configuration
   */
  execution?: ExecutionStage;
  /**
   * The subgraph stage request/response configuration
   */
  subgraph?: SubgraphStages;
}
/**
 * HTTP client configuration for coprocessors.
 */
export interface Client {
  /**
   * Use HTTP/2 to communicate with the coprocessor.
   */
  experimental_http2?: Http2Config | null;
  /**
   * Specify a DNS resolution strategy to use when resolving the coprocessor URL.
   */
  dns_resolution_strategy?: DnsResolutionStrategy | null;
}
export interface RouterStage {
  /**
   * The request configuration
   */
  request?: RouterRequestConf;
  /**
   * The response configuration
   */
  response?: RouterResponseConf;
  [k: string]: unknown | undefined;
}
/**
 * What information is passed to a router request/response stage
 */
export interface RouterRequestConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionRouterSelector | null;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the path
   */
  path?: boolean;
  /**
   * Send the method
   */
  method?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * What information is passed to a router request/response stage
 */
export interface RouterResponseConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionRouterSelector;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the HTTP status
   */
  status_code?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
export interface SupergraphStage {
  /**
   * The request configuration
   */
  request?: SupergraphRequestConf;
  response?: SupergraphResponseConf;
  [k: string]: unknown | undefined;
}
/**
 * What information is passed to a router request/response stage
 */
export interface SupergraphRequestConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionSupergraphSelector;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the method
   */
  method?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * What information is passed to a router request/response stage
 */
export interface SupergraphResponseConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionSupergraphSelector;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the HTTP status
   */
  status_code?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
export interface ExecutionStage {
  /**
   * The request configuration
   */
  request?: ExecutionRequestConf;
  response?: ExecutionResponseConf;
  [k: string]: unknown | undefined;
}
/**
 * What information is passed to a router request/response stage
 */
export interface ExecutionRequestConf {
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the method
   */
  method?: boolean;
  /**
   * Send the query plan
   */
  query_plan?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * What information is passed to a router request/response stage
 */
export interface ExecutionResponseConf {
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the SDL
   */
  sdl?: boolean;
  /**
   * Send the HTTP status
   */
  status_code?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * What information is passed to a subgraph request/response stage
 */
export interface SubgraphStages {
  all?: SubgraphStage;
}
/**
 * What information is passed to a subgraph request/response stage
 */
export interface SubgraphStage {
  request?: SubgraphRequestConf;
  response?: SubgraphResponseConf;
}
/**
 * What information is passed to a subgraph request/response stage
 */
export interface SubgraphRequestConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionSubgraphSelector;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the subgraph URI
   */
  uri?: boolean;
  /**
   * Send the method URI
   */
  method?: boolean;
  /**
   * Send the service name
   */
  service_name?: boolean;
  /**
   * Send the subgraph request id
   */
  subgraph_request_id?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * What information is passed to a subgraph request/response stage
 */
export interface SubgraphResponseConf {
  /**
   * Condition to trigger this stage
   */
  condition?: ConditionSubgraphSelector;
  /**
   * Send the headers
   */
  headers?: boolean;
  /**
   * Send the context
   */
  context?: ContextConf;
  /**
   * Send the body
   */
  body?: boolean;
  /**
   * Send the service name
   */
  service_name?: boolean;
  /**
   * Send the http status
   */
  status_code?: boolean;
  /**
   * Send the subgraph request id
   */
  subgraph_request_id?: boolean;
  /**
   * The coprocessor URL for this stage (overrides the global URL if specified)
   */
  url?: string | null;
}
/**
 * CSRF protection configuration.
 *
 * See <https://owasp.org/www-community/attacks/csrf> for an explanation on CSRF attacks.
 */
export interface CSRFConfig {
  /**
   * The CSRF plugin is enabled by default.
   *
   * Setting `unsafe_disabled: true` *disables* CSRF protection.
   */
  unsafe_disabled?: boolean;
  /**
   * Override the headers to check for by setting
   * custom_headers
   * Note that if you set required_headers here,
   * you may also want to have a look at your `CORS` configuration,
   * and make sure you either:
   * - did not set any `allow_headers` list (so it defaults to `mirror_request`)
   * - added your required headers to the allow_headers list, as shown in the
   *   `examples/cors-and-csrf/custom-headers.router.yaml` files.
   */
  required_headers?: string[];
}
/**
 * Demand control configuration
 */
export interface DemandControlConfig {
  /**
   * Enable demand control
   */
  enabled: boolean;
  /**
   * The mode that the demand control plugin should operate in.
   * - Measure: The plugin will measure the cost of incoming requests but not reject them.
   * - Enforce: The plugin will enforce the cost of incoming requests and reject them if the algorithm indicates that they should be rejected.
   */
  mode: Mode2;
  /**
   * The strategy used to reject requests.
   */
  strategy: StrategyConfig;
}
/**
 * The enhanced client-awareness plugin has no configuration.
 */
export interface Config4 {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the diagnostics plugin
 *
 * **Platform Requirements**: This plugin is supported on all platforms.
 * Heap dump functionality is only available on Linux platforms due to
 * jemalloc requirements. Other diagnostic features work across platforms.
 */
export interface Config5 {
  /**
   * Enable the diagnostics plugin
   */
  enabled?: boolean;
  /**
   * The socket address and port to listen on
   * Defaults to 127.0.0.1:8089
   * Do not expose this endpoint to the internet as it exposes sensitive information.
   */
  listen?: ListenAddr;
  /**
   * Directory path for memory dump files
   * Defaults to "/tmp/router-diagnostics" on Unix, or temp directory on other platforms
   *
   * This directory will be created automatically if it doesn't exist.
   * Note: Memory dumps are only generated on Linux platforms.
   */
  output_directory?: string;
}
/**
 * The fleet detector plugin has no configuration.
 */
export interface Conf {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for header propagation
 */
export interface HeadersConfig {
  /**
   * Rules to apply to all subgraphs
   */
  all?: HeadersLocation | null;
  /**
   * Rules to specific subgraphs
   */
  subgraphs?: {
    [k: string]: HeadersLocation;
  };
  /**
   * Rules for connectors
   */
  connector?: ConnectorHeadersConfiguration;
}
export interface HeadersLocation {
  /**
   * Propagate/Insert/Remove headers from request
   */
  request: Operation[];
}
/**
 * Insert static header
 */
export interface InsertStatic {
  /**
   * The name of the header
   */
  name: string;
  /**
   * The value for the header
   */
  value: string;
}
/**
 * Insert header with a value coming from context key
 */
export interface InsertFromContext {
  /**
   * Specify header name
   */
  name: string;
  /**
   * Specify context key to fetch value
   */
  from_context: string;
}
/**
 * Insert header with a value coming from body
 */
export interface InsertFromBody {
  /**
   * The target header name
   */
  name: string;
  /**
   * The path in the request body
   */
  path: string;
  /**
   * The default if the path in the body did not resolve to an element
   */
  default?: string | null;
}
export interface ConnectorHeadersConfiguration {
  /**
   * Map of subgraph_name.connector_source_name to configuration
   */
  sources?: {
    [k: string]: HeadersLocation;
  };
  /**
   * Options applying to all sources across all subgraphs
   */
  all?: HeadersLocation | null;
}
/**
 * Configuration for exposing errors that originate from subgraphs
 */
export interface IncludeSubgraphErrorsConfig {
  /**
   * Global configuration for error redaction. Applies to all subgraphs.
   */
  all?: ErrorMode & boolean;
  /**
   * Overrides global configuration on a per-subgraph basis
   */
  subgraphs?: {
    [k: string]: SubgraphConfig2 | undefined;
  };
}
/**
 * The license enforcement plugin has no configuration.
 */
export interface LicenseEnforcementConfig {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for entity caching
 */
export interface Config6 {
  /**
   * Enable or disable the entity caching feature
   */
  enabled?: boolean;
  /**
   * Expose cache keys in context
   */
  expose_keys_in_context?: boolean;
  /**
   * Configure invalidation per subgraph
   */
  subgraph: SubgraphSubgraphConfiguration;
  /**
   * Global invalidation configuration
   */
  invalidation?: InvalidationEndpointConfig | null;
  /**
   * Entity caching evaluation metrics
   */
  metrics?: Metrics;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface SubgraphSubgraphConfiguration {
  /**
   * options applying to all subgraphs
   */
  all?: Subgraph;
  /**
   * per subgraph options
   */
  subgraphs?: {
    [k: string]: Subgraph;
  };
  [k: string]: unknown | undefined;
}
/**
 * Per subgraph configuration for entity caching
 */
export interface Subgraph {
  /**
   * Redis configuration
   */
  redis?: RedisCache | null;
  /**
   * expiration for all keys for this subgraph, unless overridden by the `Cache-Control` header in subgraph responses
   */
  ttl?: Ttl | null;
  /**
   * activates caching for this subgraph, overrides the global configuration
   */
  enabled?: boolean | null;
  /**
   * Context key used to separate cache sections per user
   */
  private_id?: string | null;
  /**
   * Invalidation configuration
   */
  invalidation?: SubgraphInvalidationConfig | null;
}
export interface SubgraphInvalidationConfig {
  /**
   * Enable the invalidation
   */
  enabled?: boolean;
  /**
   * Shared key needed to request the invalidation endpoint
   */
  shared_key?: string;
}
export interface InvalidationEndpointConfig {
  /**
   * Specify on which path you want to listen for invalidation endpoint.
   */
  path: string;
  /**
   * Listen address on which the invalidation endpoint must listen.
   */
  listen: ListenAddr;
  /**
   * Number of keys to return at once from a redis SCAN command
   */
  scan_count?: number;
  /**
   * Number of concurrent invalidation requests
   */
  concurrent_requests?: number;
}
/**
 * Per subgraph configuration for entity caching
 */
export interface Metrics {
  /**
   * enables metrics evaluating the benefits of entity caching
   */
  enabled?: boolean;
  /**
   * Metrics counter TTL
   */
  ttl?: Ttl | null;
  /**
   * Adds the entity type name to attributes. This can greatly increase the cardinality
   */
  separate_per_type?: boolean;
}
/**
 * Configuration for File Uploads plugin
 */
export interface FileUploadsConfig {
  /**
   * Whether the file upload plugin should be enabled (default: false)
   */
  enabled: boolean;
  /**
   * Supported protocol configurations for file uploads
   */
  protocols: FileUploadProtocols;
}
/**
 * Configuration for the various protocols supported by the file upload plugin
 */
export interface FileUploadProtocols {
  /**
   * Configuration for multipart requests.
   *
   * This protocol conforms to [jaydenseric's multipart spec](https://github.com/jaydenseric/graphql-multipart-request-spec)
   */
  multipart: MultipartRequest;
}
/**
 * Configuration for a multipart request for file uploads.
 *
 * This protocol conforms to [jaydenseric's multipart spec](https://github.com/jaydenseric/graphql-multipart-request-spec)
 */
export interface MultipartRequest {
  /**
   * Whether to enable the multipart protocol for file uploads (default: true)
   */
  enabled?: boolean;
  /**
   * The supported mode for the request (default: [MultipartRequestMode::Stream])
   */
  mode?: MultipartRequestMode;
  /**
   * Resource limits for multipart requests
   */
  limits?: MultipartRequestLimits;
}
/**
 * Request limits for a multipart request
 */
export interface MultipartRequestLimits {
  /**
   * The maximum amount of files allowed for a single query (default: 4)
   */
  max_files: number;
  /**
   * The maximum size of each file, in bytes (default: 5MB)
   */
  max_file_size: string;
}
/**
 * Configuration for the progressive override plugin
 */
export interface Config9 {
  [k: string]: unknown | undefined;
}
/**
 * Configuration for the Rhai Plugin
 */
export interface RhaiConfig {
  /**
   * The directory where Rhai scripts can be found
   */
  scripts?: string | null;
  /**
   * The main entry point for Rhai script evaluation
   */
  main?: string | null;
}
/**
 * Subscriptions configuration
 */
export interface SubscriptionConfig {
  /**
   * Enable subscription
   */
  enabled?: boolean;
  /**
   * Select a subscription mode (callback or passthrough)
   */
  mode?: SubscriptionModeConfig;
  /**
   * Configure subgraph subscription deduplication
   */
  deduplication?: DeduplicationConfig;
  /**
   * This is a limit to only have maximum X opened subscriptions at the same time. By default if it's not set there is no limit.
   */
  max_opened_subscriptions?: number | null;
  /**
   * It represent the capacity of the in memory queue to know how many events we can keep in a buffer
   */
  queue_capacity?: number | null;
}
export interface SubscriptionModeConfig {
  /**
   * Enable callback mode for subgraph(s)
   */
  callback?: CallbackMode | null;
  /**
   * Enable passthrough mode for subgraph(s)
   */
  passthrough?: SubgraphPassthroughMode | null;
}
/**
 * Using a callback url
 */
export interface CallbackMode {
  /**
   * URL used to access this router instance, including the path configured on the Router
   */
  public_url: string;
  /**
   * Heartbeat interval for callback mode (default: 5secs)
   */
  heartbeat_interval?: HeartbeatInterval & string;
  /**
   * Listen address on which the callback must listen (default: 127.0.0.1:4000)
   */
  listen?: ListenAddr | null;
  /**
   * Specify on which path you want to listen for callbacks (default: /callback)
   */
  path?: string | null;
  /**
   * Specify on which subgraph we enable the callback mode for subscription
   * If empty it applies to all subgraphs (passthrough mode takes precedence)
   */
  subgraphs?: string[];
}
export interface SubgraphPassthroughMode {
  /**
   * Configuration for all subgraphs
   */
  all?: WebSocketConfiguration | null;
  /**
   * Configuration for specific subgraphs
   */
  subgraphs?: {
    [k: string]: WebSocketConfiguration;
  };
}
/**
 * WebSocket configuration for a specific subgraph
 */
export interface WebSocketConfiguration {
  /**
   * Path on which WebSockets are listening
   */
  path?: string | null;
  /**
   * Which WebSocket GraphQL protocol to use for this subgraph possible values are: 'graphql_ws' | 'graphql_transport_ws' (default: graphql_ws)
   */
  protocol?: WebSocketProtocol & string;
  /**
   * Heartbeat interval for graphql-ws protocol (default: disabled)
   */
  heartbeat_interval?: HeartbeatInterval & string;
}
/**
 * Subscription deduplication configuration
 */
export interface DeduplicationConfig {
  /**
   * Enable subgraph subscription deduplication. When enabled, multiple identical requests to the same subgraph will share one WebSocket connection in passthrough mode.
   * (default: true)
   */
  enabled?: boolean;
  /**
   * List of headers to ignore for deduplication. Even if these headers are different, the subscription request is considered identical.
   * For example, if you forward the "User-Agent" header, but the subgraph doesn't depend on the value of that header,
   * adding it to this list will let the router dedupe subgraph subscriptions even if the header value is different.
   */
  ignored_headers?: string[];
}
/**
 * Telemetry configuration
 */
export interface TelemetryConfig {
  /**
   * Apollo reporting configuration
   */
  apollo?: ApolloTelemetryConfig;
  /**
   * Instrumentation configuration
   */
  exporters?: Exporters;
  /**
   * Instrumentation configuration
   */
  instrumentation?: Instrumentation;
}
export interface ApolloTelemetryConfig {
  /**
   * The Apollo Studio endpoint for exporting traces and metrics.
   */
  endpoint?: string;
  /**
   * The Apollo Studio endpoint for exporting traces and metrics.
   */
  experimental_otlp_endpoint?: string;
  /**
   * The name of the header to extract from requests when populating 'client name' for traces and metrics in Apollo Studio.
   */
  client_name_header?: string | null;
  /**
   * The name of the header to extract from requests when populating 'client version' for traces and metrics in Apollo Studio.
   */
  client_version_header?: string | null;
  /**
   * The buffer size for sending traces to Apollo. Increase this if you are experiencing lost traces.
   */
  buffer_size?: number;
  /**
   * Field level instrumentation for subgraphs via ftv1. ftv1 tracing can cause performance issues as it is transmitted in band with subgraph responses.
   */
  field_level_instrumentation_sampler?: SamplerOption;
  /**
   * Percentage of traces to send via the OTel protocol when sending to Apollo Studio.
   */
  otlp_tracing_sampler?: SamplerOption;
  /**
   * OTLP protocol used for OTel traces.
   * Note this only applies if OTel traces are enabled and is only intended for use in tests.
   */
  experimental_otlp_tracing_protocol?: Protocol & string;
  /**
   * OTLP protocol used for OTel metrics.
   * Note this is only intended for use in tests.
   */
  experimental_otlp_metrics_protocol?: Protocol & string;
  /**
   * To configure which request header names and values are included in trace data that's sent to Apollo Studio.
   */
  send_headers?: ForwardHeaders;
  /**
   * To configure which GraphQL variable values are included in trace data that's sent to Apollo Studio
   */
  send_variable_values?: ForwardValues;
  /**
   * Configuration for tracing.
   */
  tracing?: TracingConfiguration;
  /**
   * Configuration for metrics.
   */
  metrics?: MetricsConfiguration;
  /**
   * Configure the way errors are transmitted to Apollo Studio
   */
  errors?: ErrorsConfiguration;
  /**
   * Set the signature normalization algorithm to use when sending Apollo usage reports.
   */
  signature_normalization_algorithm?: ApolloSignatureNormalizationAlgorithm & string;
  /**
   * Set the Apollo usage report reference reporting mode to use.
   */
  metrics_reference_mode?: ApolloMetricsReferenceMode;
  /**
   * Enable field metrics that are generated without FTV1 to be sent to Apollo Studio.
   */
  experimental_local_field_metrics?: boolean;
  /**
   * Enable sending additional subgraph metrics to Apollo Studio via OTLP
   */
  subgraph_metrics?: boolean;
}
export interface TracingConfiguration {
  /**
   * Configuration for tracing batch processor.
   */
  batch_processor?: BatchProcessorConfig;
}
/**
 * Batch processor configuration
 */
export interface BatchProcessorConfig {
  /**
   * The delay interval in milliseconds between two consecutive processing
   * of batches. The default value is 5 seconds.
   */
  scheduled_delay?: string;
  /**
   * The maximum queue size to buffer spans for delayed processing. If the
   * queue gets full it drops the spans. The default value is 2048.
   */
  max_queue_size?: number;
  /**
   * The maximum number of spans to process in a single batch. If there are
   * more than one batch worth of spans then it processes multiple batches
   * of spans one batch after the other without any delay. The default value
   * is 512.
   */
  max_export_batch_size?: number;
  /**
   * The maximum duration to export a batch of data.
   * The default value is 30 seconds.
   */
  max_export_timeout?: string;
  /**
   * Maximum number of concurrent exports
   *
   * Limits the number of spawned tasks for exports and thus memory consumed
   * by an exporter. A value of 1 will cause exports to be performed
   * synchronously on the BatchSpanProcessor task.
   * The default is 1.
   */
  max_concurrent_exports?: number;
  [k: string]: unknown | undefined;
}
export interface MetricsConfiguration {
  /**
   * Configuration for exporting metrics via OTLP.
   */
  otlp?: OtlpMetricsConfiguration;
  /**
   * Configuration for exporting metrics via Apollo usage reports.
   */
  usage_reports?: UsageReportsMetricsConfiguration;
}
export interface OtlpMetricsConfiguration {
  /**
   * Batch processor config for OTLP metrics.
   */
  batch_processor?: OtlpMetricsBatchProcessorConfiguration;
}
export interface OtlpMetricsBatchProcessorConfiguration {
  /**
   * The delay interval in milliseconds between two consecutive processing
   * of batches. The default value is 5 seconds.
   */
  scheduled_delay?: string;
  /**
   * The maximum duration to export a batch of data.
   * The default value is 30 seconds.
   */
  max_export_timeout?: string;
  [k: string]: unknown | undefined;
}
export interface UsageReportsMetricsConfiguration {
  /**
   * Batch processor config for Apollo usage report metrics.
   */
  batch_processor?: ApolloUsageReportsBatchProcessorConfiguration;
}
export interface ApolloUsageReportsBatchProcessorConfiguration {
  /**
   * The delay interval in milliseconds between two consecutive processing
   * of batches. The default value is 5 seconds.
   */
  scheduled_delay?: string;
  /**
   * The maximum queue size to buffer spans for delayed processing. If the
   * queue gets full it drops the reports. The default value is 2048.
   */
  max_queue_size?: number;
  /**
   * The maximum duration to export a batch of data.
   * The default value is 30 seconds.
   */
  max_export_timeout?: string;
  [k: string]: unknown | undefined;
}
export interface ErrorsConfiguration {
  /**
   * Handling of errors coming from subgraph
   */
  subgraph?: SubgraphErrorConfig;
  /**
   * Send error metrics via OTLP with additional dimensions [`extensions.service`, `extensions.code`]
   */
  preview_extended_error_metrics?: ExtendedErrorMetricsMode;
}
export interface SubgraphErrorConfig {
  /**
   * Handling of errors coming from all subgraphs
   */
  all?: ErrorConfiguration;
  /**
   * Handling of errors coming from specified subgraphs
   */
  subgraphs?: {
    [k: string]: ErrorConfiguration;
  };
}
export interface ErrorConfiguration {
  /**
   * Send subgraph errors to Apollo Studio
   */
  send?: boolean;
  /**
   * Redact subgraph errors to Apollo Studio
   */
  redact?: boolean;
  /**
   * Allows additional dimension `extensions.code` to be sent with errors
   * even when `redact` is set to `true`.  Has no effect when `redact` is false.
   */
  redaction_policy?: ErrorRedactionPolicy;
}
/**
 * Exporter configuration
 */
export interface Exporters {
  /**
   * Logging configuration
   */
  logging?: Logging;
  /**
   * Metrics configuration
   */
  metrics?: Metrics2;
  /**
   * Tracing configuration
   */
  tracing?: Tracing;
}
/**
 * Logging configuration.
 */
export interface Logging {
  /**
   * Common configuration
   */
  common?: LoggingCommon;
  /**
   * Settings for logging to stdout.
   */
  stdout?: StdOut;
}
export interface LoggingCommon {
  /**
   * Set a service.name resource in your metrics
   */
  service_name?: string | null;
  /**
   * Set a service.namespace attribute in your metrics
   */
  service_namespace?: string | null;
  /**
   * The Open Telemetry resource
   */
  resource?: {
    [k: string]: AttributeValue;
  };
}
export interface StdOut {
  /**
   * Set to true to log to stdout.
   */
  enabled?: boolean;
  /**
   * The format to log to stdout.
   */
  format?: LoggingFormat;
  /**
   * The format to log to stdout when you're running on an interactive terminal. When configured it will automatically use this `tty_format`` instead of the original `format` when an interactive terminal is detected
   */
  tty_format?: LoggingFormat | null;
  /**
   * Log rate limiting. The limit is set per type of log message
   */
  rate_limit?: RateLimit;
}
export interface RateLimit {
  /**
   * Set to true to limit the rate of log messages
   */
  enabled?: boolean;
  /**
   * Number of log lines allowed in interval per message
   */
  capacity?: number;
  /**
   * Interval for rate limiting
   */
  interval?: string;
}
/**
 * Metrics configuration
 */
export interface Metrics2 {
  /**
   * Common metrics configuration across all exporters
   */
  common?: MetricsCommon;
  /**
   * Open Telemetry native exporter configuration
   */
  otlp?: OTLPConfig;
  /**
   * Prometheus exporter configuration
   */
  prometheus?: PrometheusMetricsConfig;
}
export interface MetricsCommon {
  /**
   * Set a service.name resource in your metrics
   */
  service_name?: string | null;
  /**
   * Set a service.namespace attribute in your metrics
   */
  service_namespace?: string | null;
  /**
   * The Open Telemetry resource
   */
  resource?: {
    [k: string]: AttributeValue;
  };
  /**
   * Custom buckets for all histograms
   */
  buckets?: number[];
  /**
   * Views applied on metrics
   */
  views?: MetricView[];
}
export interface MetricView {
  /**
   * The instrument name you're targeting
   */
  name: string;
  /**
   * Rename the metric to this name
   *
   * This allows you to customize metric names for both OTLP and Prometheus exporters.
   * Note: Prometheus will apply additional transformations (dots to underscores, unit suffixes).
   * Apollo metrics are not affected by this rename - they will retain original names.
   */
  rename?: string | null;
  /**
   * New description to set to the instrument
   */
  description?: string | null;
  /**
   * New unit to set to the instrument
   */
  unit?: string | null;
  /**
   * New aggregation settings to set
   */
  aggregation?: MetricAggregation | null;
  /**
   * An allow-list of attribute keys that will be preserved for the instrument.
   *
   * Any attribute recorded for the instrument with a key not in this set will be
   * dropped. If the set is empty, all attributes will be dropped, if `None` all
   * attributes will be kept.
   */
  allowed_attribute_keys?: string[] | null;
}
export interface OTLPConfig {
  /**
   * Enable otlp
   */
  enabled: boolean;
  /**
   * The endpoint to send data to
   */
  endpoint?: string | null;
  /**
   * The protocol to use when sending data
   */
  protocol?: Protocol & string;
  /**
   * gRPC configuration settings
   */
  grpc?: GrpcExporter;
  /**
   * HTTP configuration settings
   */
  http?: HttpExporter;
  /**
   * Batch processor settings
   */
  batch_processor?: BatchProcessorConfig;
  /**
   * Temporality for export (default: `Cumulative`).
   * Note that when exporting to Datadog agent use `Delta`.
   */
  temporality?: Temporality & string;
}
export interface GrpcExporter {
  /**
   * The optional domain name for tls config.
   * Note that domain name is will be defaulted to match the endpoint is not explicitly set.
   */
  domain_name?: string | null;
  /**
   * The optional certificate authority (CA) certificate to be used in TLS configuration.
   */
  ca?: string | null;
  /**
   * The optional cert for tls config
   */
  cert?: string | null;
  /**
   * The optional private key file for TLS configuration.
   */
  key?: string | null;
  /**
   * gRPC metadata
   */
  metadata?: {
    [k: string]: unknown | undefined;
  };
}
export interface HttpExporter {
  /**
   * Headers to send on report requests
   */
  headers?: {
    [k: string]: string | undefined;
  };
}
/**
 * Prometheus configuration
 */
export interface PrometheusMetricsConfig {
  /**
   * Set to true to enable
   */
  enabled?: boolean;
  /**
   * resource_selector is used to select which resource to export with every metrics.
   */
  resource_selector?: ResourceSelectorConfig;
  /**
   * The listen address
   */
  listen?: ListenAddr;
  /**
   * The path where prometheus will be exposed
   */
  path?: string;
}
/**
 * Tracing configuration
 */
export interface Tracing {
  /**
   * A way to expose trace id in response headers
   */
  experimental_response_trace_id?: ExposeTraceId;
  /**
   * Propagation configuration
   */
  propagation?: Propagation;
  /**
   * Common configuration
   */
  common?: TracingCommon;
  /**
   * OpenTelemetry native exporter configuration
   */
  otlp?: OTLPConfig;
  /**
   * Zipkin exporter configuration
   */
  zipkin?: ZipkinConfig;
  /**
   * Datadog exporter configuration
   */
  datadog?: DatadogConfig;
}
export interface ExposeTraceId {
  /**
   * Expose the trace_id in response headers
   */
  enabled?: boolean;
  /**
   * Choose the header name to expose trace_id (default: apollo-trace-id)
   */
  header_name?: string | null;
  /**
   * Format of the trace ID in response headers
   */
  format?: TraceIdFormat;
}
/**
 * Configure propagation of traces. In general you won't have to do this as these are automatically configured
 * along with any exporter you configure.
 */
export interface Propagation {
  /**
   * Select a custom request header to set your own trace_id (header value must be convertible from hexadecimal to set a correct trace_id)
   */
  request?: RequestPropagation;
  /**
   * Propagate baggage https://www.w3.org/TR/baggage/
   */
  baggage?: boolean;
  /**
   * Propagate trace context https://www.w3.org/TR/trace-context/
   */
  trace_context?: boolean;
  /**
   * Propagate Jaeger
   */
  jaeger?: boolean;
  /**
   * Propagate Datadog
   */
  datadog?: boolean;
  /**
   * Propagate Zipkin
   */
  zipkin?: boolean;
  /**
   * Propagate AWS X-Ray
   */
  aws_xray?: boolean;
}
export interface RequestPropagation {
  /**
   * Choose the header name to expose trace_id (default: apollo-trace-id)
   */
  header_name: string;
  /**
   * The trace ID format that will be used when propagating to subgraph services.
   */
  format?: TraceIdFormat;
}
export interface TracingCommon {
  /**
   * The trace service name
   */
  service_name?: string | null;
  /**
   * The trace service namespace
   */
  service_namespace?: string | null;
  /**
   * The sampler, always_on, always_off or a decimal between 0.0 and 1.0
   */
  sampler?: SamplerOption;
  /**
   * Use datadog agent sampling. This means that all spans will be sent to the Datadog agent
   * and the `sampling.priority` attribute will be used to control if the span will then be sent to Datadog
   */
  preview_datadog_agent_sampling?: boolean | null;
  /**
   * Whether to use parent based sampling
   */
  parent_based_sampler?: boolean;
  /**
   * The maximum events per span before discarding
   */
  max_events_per_span?: number;
  /**
   * The maximum attributes per span before discarding
   */
  max_attributes_per_span?: number;
  /**
   * The maximum links per span before discarding
   */
  max_links_per_span?: number;
  /**
   * The maximum attributes per event before discarding
   */
  max_attributes_per_event?: number;
  /**
   * The maximum attributes per link before discarding
   */
  max_attributes_per_link?: number;
  /**
   * The Open Telemetry resource
   */
  resource?: {
    [k: string]: AttributeValue;
  };
}
export interface ZipkinConfig {
  /**
   * Enable zipkin
   */
  enabled: boolean;
  /**
   * The endpoint to send to
   */
  endpoint?: UriEndpoint;
  /**
   * Batch processor configuration
   */
  batch_processor?: BatchProcessorConfig;
}
export interface DatadogConfig {
  /**
   * Enable datadog
   */
  enabled: boolean;
  /**
   * The endpoint to send to
   */
  endpoint?: UriEndpoint;
  /**
   * batch processor configuration
   */
  batch_processor?: BatchProcessorConfig;
  /**
   * Enable datadog span mapping for span name and resource name.
   */
  enable_span_mapping?: boolean;
  /**
   * Fixes the span names, this means that the APM view will show the original span names in the operation dropdown.
   */
  fixed_span_names?: boolean;
  /**
   * Custom mapping to be used as the resource field in spans, defaults to:
   * router -> http.route
   * supergraph -> graphql.operation.name
   * query_planning -> graphql.operation.name
   * subgraph -> subgraph.name
   * subgraph_request -> subgraph.name
   * http_request -> http.route
   */
  resource_mapping?: {
    [k: string]: string | undefined;
  };
  /**
   * Which spans will be eligible for span stats to be collected for viewing in the APM view.
   * Defaults to true for `request`, `router`, `query_parsing`, `supergraph`, `execution`, `query_planning`, `subgraph`, `subgraph_request`, `connect`, `connect_request` and `http_request`.
   */
  span_metrics?: {
    [k: string]: boolean | undefined;
  };
}
/**
 * Instrumentation configuration
 */
export interface Instrumentation {
  /**
   * Event configuration
   */
  events?: Events;
  /**
   * Span configuration
   */
  spans?: Spans;
  /**
   * Instrument configuration
   */
  instruments?: InstrumentsConfig;
}
/**
 * Events are
 */
export interface Events {
  /**
   * Router service events
   */
  router?: ExtendedRouterEventsConfigWithEvent;
  /**
   * Subgraph service events
   */
  supergraph?: ExtendedSupergraphEventsConfigWithEvent;
  /**
   * Supergraph service events
   */
  subgraph?: ExtendedSubgraphEventsConfigWithEvent;
  /**
   * Connector events
   */
  connector?: ExtendedConnectorEventsConfigWithEvent;
}
export interface ExtendedRouterEventsConfigWithEvent {
  /**
   * Log the router request
   */
  request?: StandardEventConfigRouterSelector;
  /**
   * Log the router response
   */
  response?: StandardEventConfigRouterSelector;
  /**
   * Log the router error
   */
  error?: StandardEventConfigRouterSelector;
  [k: string]: Event | undefined;
}
/**
 * An event that can be logged as part of a trace.
 * The event has an implicit `type` attribute that matches the name of the event in the yaml
 * and a message that can be used to provide additional information.
 */
export interface Event {
  /**
   * The log level of the event.
   */
  level: EventLevelConfig;
  /**
   * The event message.
   */
  message: string;
  /**
   * When to trigger the event.
   */
  on: EventOn;
  /**
   * The event attributes.
   */
  attributes?: ExtendedRouterAttributesWithRouterSelector;
  /**
   * The event conditions.
   */
  condition?: ConditionRouterSelector;
  [k: string]: unknown | undefined;
}
/**
 * Common attributes for http server and client.
 * See https://opentelemetry.io/docs/specs/semconv/http/http-spans/#common-attributes
 */
export interface ExtendedRouterAttributesWithRouterSelector {
  /**
   * The datadog trace ID.
   * This can be output in logs and used to correlate traces in Datadog.
   */
  'dd.trace_id'?: StandardAttribute | null;
  /**
   * The OpenTelemetry trace ID.
   * This can be output in logs.
   */
  trace_id?: StandardAttribute | null;
  /**
   * All key values from trace baggage.
   */
  baggage?: boolean | null;
  /**
   * Describes a class of error the operation ended with.
   * Examples:
   *
   * * timeout
   * * name_resolution_error
   * * 500
   *
   * Requirement level: Conditionally Required: If request has ended with an error.
   */
  'error.type'?: StandardAttribute | null;
  /**
   * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the Content-Length header. For requests using transport encoding, this should be the compressed size.
   * Examples:
   *
   * * 3495
   *
   * Requirement level: Recommended
   */
  'http.request.body.size'?: StandardAttribute | null;
  /**
   * HTTP request method.
   * Examples:
   *
   * * GET
   * * POST
   * * HEAD
   *
   * Requirement level: Required
   */
  'http.request.method'?: StandardAttribute | null;
  /**
   * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the Content-Length header. For requests using transport encoding, this should be the compressed size.
   * Examples:
   *
   * * 3495
   *
   * Requirement level: Recommended
   */
  'http.response.body.size'?: StandardAttribute | null;
  /**
   * HTTP response status code.
   * Examples:
   *
   * * 200
   *
   * Requirement level: Conditionally Required: If and only if one was received/sent.
   */
  'http.response.status_code'?: StandardAttribute | null;
  /**
   * OSI application layer or non-OSI equivalent.
   * Examples:
   *
   * * http
   * * spdy
   *
   * Requirement level: Recommended: if not default (http).
   */
  'network.protocol.name'?: StandardAttribute | null;
  /**
   * Version of the protocol specified in network.protocol.name.
   * Examples:
   *
   * * 1.0
   * * 1.1
   * * 2
   * * 3
   *
   * Requirement level: Recommended
   */
  'network.protocol.version'?: StandardAttribute | null;
  /**
   * OSI transport layer.
   * Examples:
   *
   * * tcp
   * * udp
   *
   * Requirement level: Conditionally Required
   */
  'network.transport'?: StandardAttribute | null;
  /**
   * OSI network layer or non-OSI equivalent.
   * Examples:
   *
   * * ipv4
   * * ipv6
   *
   * Requirement level: Recommended
   */
  'network.type'?: StandardAttribute | null;
  /**
   * The matched route (path template in the format used by the respective server framework).
   * Examples:
   *
   * * /graphql
   *
   * Requirement level: Conditionally Required: If and only if it’s available
   */
  'http.route'?: StandardAttribute | null;
  /**
   * Local socket address. Useful in case of a multi-IP host.
   * Examples:
   *
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Opt-In
   */
  'network.local.address'?: StandardAttribute | null;
  /**
   * Local socket port. Useful in case of a multi-port host.
   * Examples:
   *
   * * 65123
   *
   * Requirement level: Opt-In
   */
  'network.local.port'?: StandardAttribute | null;
  /**
   * Peer address of the network connection - IP address or Unix domain socket name.
   * Examples:
   *
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Recommended
   */
  'network.peer.address'?: StandardAttribute | null;
  /**
   * Peer port number of the network connection.
   * Examples:
   *
   * * 65123
   *
   * Requirement level: Recommended
   */
  'network.peer.port'?: StandardAttribute | null;
  /**
   * Name of the local HTTP server that received the request.
   * Examples:
   *
   * * example.com
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Recommended
   */
  'server.address'?: StandardAttribute | null;
  /**
   * Port of the local HTTP server that received the request.
   * Examples:
   *
   * * 80
   * * 8080
   * * 443
   *
   * Requirement level: Recommended
   */
  'server.port'?: StandardAttribute | null;
  /**
   * The URI path component
   * Examples:
   *
   * * /search
   *
   * Requirement level: Required
   */
  'url.path'?: StandardAttribute | null;
  /**
   * The URI query component
   * Examples:
   *
   * * q=OpenTelemetry
   *
   * Requirement level: Conditionally Required: If and only if one was received/sent.
   */
  'url.query'?: StandardAttribute | null;
  /**
   * The URI scheme component identifying the used protocol.
   * Examples:
   *
   * * http
   * * https
   *
   * Requirement level: Required
   */
  'url.scheme'?: StandardAttribute | null;
  /**
   * Value of the HTTP User-Agent header sent by the client.
   * Examples:
   *
   * * CERN-LineMode/2.15
   * * libwww/2.17b3
   *
   * Requirement level: Recommended
   */
  'user_agent.original'?: StandardAttribute | null;
  [k: string]: RouterSelector;
}
export interface ExtendedSupergraphEventsConfigWithEvent {
  /**
   * Log the supergraph request
   */
  request?: StandardEventConfigSupergraphSelector;
  /**
   * Log the supergraph response
   */
  response?: StandardEventConfigSupergraphSelector;
  /**
   * Log the supergraph error
   */
  error?: StandardEventConfigSupergraphSelector;
  [k: string]: Event2 | undefined;
}
/**
 * An event that can be logged as part of a trace.
 * The event has an implicit `type` attribute that matches the name of the event in the yaml
 * and a message that can be used to provide additional information.
 */
export interface Event2 {
  /**
   * The log level of the event.
   */
  level: EventLevelConfig;
  /**
   * The event message.
   */
  message: string;
  /**
   * When to trigger the event.
   */
  on: EventOn;
  /**
   * The event attributes.
   */
  attributes?: ExtendedSupergraphAttributesWithSupergraphSelector;
  /**
   * The event conditions.
   */
  condition?: ConditionSupergraphSelector;
  [k: string]: unknown | undefined;
}
/**
 * Attributes for Cost
 */
export interface ExtendedSupergraphAttributesWithSupergraphSelector {
  /**
   * The GraphQL document being executed.
   * Examples:
   *
   * * `query findBookById { bookById(id: ?) { name } }`
   *
   * Requirement level: Recommended
   */
  'graphql.document'?: StandardAttribute | null;
  /**
   * The name of the operation being executed.
   * Examples:
   *
   * * findBookById
   *
   * Requirement level: Recommended
   */
  'graphql.operation.name'?: StandardAttribute | null;
  /**
   * The type of the operation being executed.
   * Examples:
   *
   * * query
   * * subscription
   * * mutation
   *
   * Requirement level: Recommended
   */
  'graphql.operation.type'?: StandardAttribute | null;
  /**
   * The estimated cost of the operation using the currently configured cost model
   */
  'cost.estimated'?: StandardAttribute | null;
  /**
   * The actual cost of the operation using the currently configured cost model
   */
  'cost.actual'?: StandardAttribute | null;
  /**
   * The delta (estimated - actual) cost of the operation using the currently configured cost model
   */
  'cost.delta'?: StandardAttribute | null;
  /**
   * The cost result, this is an error code returned by the cost calculation or COST_OK
   */
  'cost.result'?: StandardAttribute | null;
  [k: string]: SupergraphSelector;
}
export interface ExtendedSubgraphEventsConfigWithEvent {
  /**
   * Log the subgraph request
   */
  request?: StandardEventConfigSubgraphSelector;
  /**
   * Log the subgraph response
   */
  response?: StandardEventConfigSubgraphSelector;
  /**
   * Log the subgraph error
   */
  error?: StandardEventConfigSubgraphSelector;
  [k: string]: Event3 | undefined;
}
/**
 * An event that can be logged as part of a trace.
 * The event has an implicit `type` attribute that matches the name of the event in the yaml
 * and a message that can be used to provide additional information.
 */
export interface Event3 {
  /**
   * The log level of the event.
   */
  level: EventLevelConfig;
  /**
   * The event message.
   */
  message: string;
  /**
   * When to trigger the event.
   */
  on: EventOn;
  /**
   * The event attributes.
   */
  attributes?: ExtendedSubgraphAttributesWithSubgraphSelector;
  /**
   * The event conditions.
   */
  condition?: ConditionSubgraphSelector;
  [k: string]: unknown | undefined;
}
export interface ExtendedSubgraphAttributesWithSubgraphSelector {
  /**
   * The name of the subgraph
   * Examples:
   *
   * * products
   *
   * Requirement level: Required
   */
  'subgraph.name'?: StandardAttribute | null;
  /**
   * The GraphQL document being executed.
   * Examples:
   *
   * * `query findBookById { bookById(id: ?) { name } }`
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.document'?: StandardAttribute | null;
  /**
   * The name of the operation being executed.
   * Examples:
   *
   * * findBookById
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.operation.name'?: StandardAttribute | null;
  /**
   * The type of the operation being executed.
   * Examples:
   *
   * * query
   * * subscription
   * * mutation
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.operation.type'?: StandardAttribute | null;
  /**
   * The number of times the request has been resent
   */
  'http.request.resend_count'?: StandardAttribute | null;
  [k: string]: SubgraphSelector;
}
export interface ExtendedConnectorEventsConfigWithEvent {
  /**
   * Log the connector HTTP request
   */
  request?: StandardEventConfigConnectorSelector;
  /**
   * Log the connector HTTP response
   */
  response?: StandardEventConfigConnectorSelector;
  /**
   * Log the connector HTTP error
   */
  error?: StandardEventConfigConnectorSelector;
  [k: string]: Event4 | undefined;
}
/**
 * An event that can be logged as part of a trace.
 * The event has an implicit `type` attribute that matches the name of the event in the yaml
 * and a message that can be used to provide additional information.
 */
export interface Event4 {
  /**
   * The log level of the event.
   */
  level: EventLevelConfig;
  /**
   * The event message.
   */
  message: string;
  /**
   * When to trigger the event.
   */
  on: EventOn;
  /**
   * The event attributes.
   */
  attributes?: ExtendedConnectorAttributesWithConnectorSelector;
  /**
   * The event conditions.
   */
  condition?: ConditionConnectorSelector;
  [k: string]: unknown | undefined;
}
export interface ExtendedConnectorAttributesWithConnectorSelector {
  /**
   * The name of the subgraph containing the connector
   * Examples:
   *
   * * posts
   *
   * Requirement level: Required
   */
  'subgraph.name'?: StandardAttribute | null;
  /**
   * The name of the source for this connector, if defined
   * Examples:
   *
   * * posts_api
   *
   * Requirement level: Conditionally Required: If the connector has a source defined
   */
  'connector.source.name'?: StandardAttribute | null;
  /**
   * The HTTP method for the connector
   * Examples:
   *
   * * GET
   * * POST
   *
   * Requirement level: Required
   */
  'connector.http.method'?: StandardAttribute | null;
  /**
   * The connector URL template, relative to the source base URL if one is defined
   * Examples:
   *
   * * /users/{$this.id!}/post
   *
   * Requirement level: Required
   */
  'connector.url.template'?: StandardAttribute | null;
  [k: string]: ConnectorSelector;
}
export interface Spans {
  /**
   * Use new OpenTelemetry spec compliant span attributes or preserve existing. This will be defaulted in future to `spec_compliant`, eventually removed in future.
   */
  mode?: SpanMode;
  /**
   * The attributes to include by default in spans based on their level as specified in the otel semantic conventions and Apollo documentation.
   */
  default_attribute_requirement_level?: DefaultAttributeRequirementLevel;
  /**
   * Configuration of router spans.
   * Log events inherit attributes from the containing span, so attributes configured here will be included on log events for a request.
   * Router spans contain http request and response information and therefore contain http specific attributes.
   */
  router?: RouterSpans;
  /**
   * Configuration of supergraph spans.
   * Supergraph spans contain information about the graphql request and response and therefore contain graphql specific attributes.
   */
  supergraph?: SupergraphSpans;
  /**
   * Attributes to include on the subgraph span.
   * Subgraph spans contain information about the subgraph request and response and therefore contain subgraph specific attributes.
   */
  subgraph?: SubgraphSpans;
  /**
   * Attributes to include on the connector span.
   * Connector spans contain information about the connector request and response and therefore contain connector specific attributes.
   */
  connector?: ConnectorSpans;
  /**
   * Attributes to include on the HTTP client span.
   * HTTP client spans contain information about HTTP requests made to subgraphs, including any changes made by Rhai scripts.
   */
  http_client?: HttpClientSpans;
}
export interface RouterSpans {
  /**
   * Custom attributes that are attached to the router span.
   */
  attributes?: ExtendedRouterAttributesWithConditionalRouterSelector;
}
/**
 * Common attributes for http server and client.
 * See https://opentelemetry.io/docs/specs/semconv/http/http-spans/#common-attributes
 */
export interface ExtendedRouterAttributesWithConditionalRouterSelector {
  /**
   * The datadog trace ID.
   * This can be output in logs and used to correlate traces in Datadog.
   */
  'dd.trace_id'?: StandardAttribute | null;
  /**
   * The OpenTelemetry trace ID.
   * This can be output in logs.
   */
  trace_id?: StandardAttribute | null;
  /**
   * All key values from trace baggage.
   */
  baggage?: boolean | null;
  /**
   * Describes a class of error the operation ended with.
   * Examples:
   *
   * * timeout
   * * name_resolution_error
   * * 500
   *
   * Requirement level: Conditionally Required: If request has ended with an error.
   */
  'error.type'?: StandardAttribute | null;
  /**
   * The size of the request payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the Content-Length header. For requests using transport encoding, this should be the compressed size.
   * Examples:
   *
   * * 3495
   *
   * Requirement level: Recommended
   */
  'http.request.body.size'?: StandardAttribute | null;
  /**
   * HTTP request method.
   * Examples:
   *
   * * GET
   * * POST
   * * HEAD
   *
   * Requirement level: Required
   */
  'http.request.method'?: StandardAttribute | null;
  /**
   * The size of the response payload body in bytes. This is the number of bytes transferred excluding headers and is often, but not always, present as the Content-Length header. For requests using transport encoding, this should be the compressed size.
   * Examples:
   *
   * * 3495
   *
   * Requirement level: Recommended
   */
  'http.response.body.size'?: StandardAttribute | null;
  /**
   * HTTP response status code.
   * Examples:
   *
   * * 200
   *
   * Requirement level: Conditionally Required: If and only if one was received/sent.
   */
  'http.response.status_code'?: StandardAttribute | null;
  /**
   * OSI application layer or non-OSI equivalent.
   * Examples:
   *
   * * http
   * * spdy
   *
   * Requirement level: Recommended: if not default (http).
   */
  'network.protocol.name'?: StandardAttribute | null;
  /**
   * Version of the protocol specified in network.protocol.name.
   * Examples:
   *
   * * 1.0
   * * 1.1
   * * 2
   * * 3
   *
   * Requirement level: Recommended
   */
  'network.protocol.version'?: StandardAttribute | null;
  /**
   * OSI transport layer.
   * Examples:
   *
   * * tcp
   * * udp
   *
   * Requirement level: Conditionally Required
   */
  'network.transport'?: StandardAttribute | null;
  /**
   * OSI network layer or non-OSI equivalent.
   * Examples:
   *
   * * ipv4
   * * ipv6
   *
   * Requirement level: Recommended
   */
  'network.type'?: StandardAttribute | null;
  /**
   * The matched route (path template in the format used by the respective server framework).
   * Examples:
   *
   * * /graphql
   *
   * Requirement level: Conditionally Required: If and only if it’s available
   */
  'http.route'?: StandardAttribute | null;
  /**
   * Local socket address. Useful in case of a multi-IP host.
   * Examples:
   *
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Opt-In
   */
  'network.local.address'?: StandardAttribute | null;
  /**
   * Local socket port. Useful in case of a multi-port host.
   * Examples:
   *
   * * 65123
   *
   * Requirement level: Opt-In
   */
  'network.local.port'?: StandardAttribute | null;
  /**
   * Peer address of the network connection - IP address or Unix domain socket name.
   * Examples:
   *
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Recommended
   */
  'network.peer.address'?: StandardAttribute | null;
  /**
   * Peer port number of the network connection.
   * Examples:
   *
   * * 65123
   *
   * Requirement level: Recommended
   */
  'network.peer.port'?: StandardAttribute | null;
  /**
   * Name of the local HTTP server that received the request.
   * Examples:
   *
   * * example.com
   * * 10.1.2.80
   * * /tmp/my.sock
   *
   * Requirement level: Recommended
   */
  'server.address'?: StandardAttribute | null;
  /**
   * Port of the local HTTP server that received the request.
   * Examples:
   *
   * * 80
   * * 8080
   * * 443
   *
   * Requirement level: Recommended
   */
  'server.port'?: StandardAttribute | null;
  /**
   * The URI path component
   * Examples:
   *
   * * /search
   *
   * Requirement level: Required
   */
  'url.path'?: StandardAttribute | null;
  /**
   * The URI query component
   * Examples:
   *
   * * q=OpenTelemetry
   *
   * Requirement level: Conditionally Required: If and only if one was received/sent.
   */
  'url.query'?: StandardAttribute | null;
  /**
   * The URI scheme component identifying the used protocol.
   * Examples:
   *
   * * http
   * * https
   *
   * Requirement level: Required
   */
  'url.scheme'?: StandardAttribute | null;
  /**
   * Value of the HTTP User-Agent header sent by the client.
   * Examples:
   *
   * * CERN-LineMode/2.15
   * * libwww/2.17b3
   *
   * Requirement level: Recommended
   */
  'user_agent.original'?: StandardAttribute | null;
  [k: string]: ConditionalRouterSelector | undefined;
}
export interface SupergraphSpans {
  /**
   * Custom attributes that are attached to the supergraph span.
   */
  attributes?: ExtendedSupergraphAttributesWithConditionalSupergraphSelector;
}
/**
 * Attributes for Cost
 */
export interface ExtendedSupergraphAttributesWithConditionalSupergraphSelector {
  /**
   * The GraphQL document being executed.
   * Examples:
   *
   * * `query findBookById { bookById(id: ?) { name } }`
   *
   * Requirement level: Recommended
   */
  'graphql.document'?: StandardAttribute | null;
  /**
   * The name of the operation being executed.
   * Examples:
   *
   * * findBookById
   *
   * Requirement level: Recommended
   */
  'graphql.operation.name'?: StandardAttribute | null;
  /**
   * The type of the operation being executed.
   * Examples:
   *
   * * query
   * * subscription
   * * mutation
   *
   * Requirement level: Recommended
   */
  'graphql.operation.type'?: StandardAttribute | null;
  /**
   * The estimated cost of the operation using the currently configured cost model
   */
  'cost.estimated'?: StandardAttribute | null;
  /**
   * The actual cost of the operation using the currently configured cost model
   */
  'cost.actual'?: StandardAttribute | null;
  /**
   * The delta (estimated - actual) cost of the operation using the currently configured cost model
   */
  'cost.delta'?: StandardAttribute | null;
  /**
   * The cost result, this is an error code returned by the cost calculation or COST_OK
   */
  'cost.result'?: StandardAttribute | null;
  [k: string]: ConditionalSupergraphSelector | undefined;
}
export interface SubgraphSpans {
  /**
   * Custom attributes that are attached to the subgraph span.
   */
  attributes?: ExtendedSubgraphAttributesWithConditionalSubgraphSelector;
}
export interface ExtendedSubgraphAttributesWithConditionalSubgraphSelector {
  /**
   * The name of the subgraph
   * Examples:
   *
   * * products
   *
   * Requirement level: Required
   */
  'subgraph.name'?: StandardAttribute | null;
  /**
   * The GraphQL document being executed.
   * Examples:
   *
   * * `query findBookById { bookById(id: ?) { name } }`
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.document'?: StandardAttribute | null;
  /**
   * The name of the operation being executed.
   * Examples:
   *
   * * findBookById
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.operation.name'?: StandardAttribute | null;
  /**
   * The type of the operation being executed.
   * Examples:
   *
   * * query
   * * subscription
   * * mutation
   *
   * Requirement level: Recommended
   */
  'subgraph.graphql.operation.type'?: StandardAttribute | null;
  /**
   * The number of times the request has been resent
   */
  'http.request.resend_count'?: StandardAttribute | null;
  [k: string]: ConditionalSubgraphSelector | undefined;
}
export interface ConnectorSpans {
  /**
   * Custom attributes that are attached to the connector span.
   */
  attributes?: ExtendedConnectorAttributesWithConditionalConnectorSelector;
}
export interface ExtendedConnectorAttributesWithConditionalConnectorSelector {
  /**
   * The name of the subgraph containing the connector
   * Examples:
   *
   * * posts
   *
   * Requirement level: Required
   */
  'subgraph.name'?: StandardAttribute | null;
  /**
   * The name of the source for this connector, if defined
   * Examples:
   *
   * * posts_api
   *
   * Requirement level: Conditionally Required: If the connector has a source defined
   */
  'connector.source.name'?: StandardAttribute | null;
  /**
   * The HTTP method for the connector
   * Examples:
   *
   * * GET
   * * POST
   *
   * Requirement level: Required
   */
  'connector.http.method'?: StandardAttribute | null;
  /**
   * The connector URL template, relative to the source base URL if one is defined
   * Examples:
   *
   * * /users/{$this.id!}/post
   *
   * Requirement level: Required
   */
  'connector.url.template'?: StandardAttribute | null;
  [k: string]: ConditionalConnectorSelector | undefined;
}
export interface HttpClientSpans {
  /**
   * Custom attributes that are attached to the HTTP client span.
   */
  attributes?: ExtendedHttpClientAttributesWithConditionalHttpClientSelector;
}
export interface ExtendedHttpClientAttributesWithConditionalHttpClientSelector {
  [k: string]: ConditionalHttpClientSelector | undefined;
}
export interface InstrumentsConfig {
  /**
   * The attributes and instruments to include by default in instruments based on their level as specified in the otel semantic conventions and Apollo documentation.
   */
  default_requirement_level?: DefaultAttributeRequirementLevel;
  /**
   * Router service instruments. For more information see documentation on Router lifecycle.
   */
  router?: ExtendedRouterInstrumentsConfigWithInstrument;
  /**
   * Supergraph service instruments. For more information see documentation on Router lifecycle.
   */
  supergraph?: ExtendedSupergraphInstrumentsConfigWithInstrument;
  /**
   * Subgraph service instruments. For more information see documentation on Router lifecycle.
   */
  subgraph?: ExtendedSubgraphInstrumentsConfigWithInstrument;
  /**
   * Connector service instruments.
   */
  connector?: ExtendedConnectorInstrumentsConfigWithInstrument;
  /**
   * GraphQL response field instruments.
   */
  graphql?: ExtendedGraphQLInstrumentsConfigWithInstrument;
  /**
   * Cache instruments
   */
  cache?: ExtendedCacheInstrumentsConfigWithInstrument;
}
export interface ExtendedRouterInstrumentsConfigWithInstrument {
  /**
   * Histogram of server request duration
   */
  'http.server.request.duration'?: StandardInstrumentExtendedRouterAttributesWithRouterSelector;
  /**
   * Counter of active requests
   */
  'http.server.active_requests'?: StandardInstrumentActiveRequestsAttributes;
  /**
   * Histogram of server request body size
   */
  'http.server.request.body.size'?: StandardInstrumentExtendedRouterAttributesWithRouterSelector;
  /**
   * Histogram of server response body size
   */
  'http.server.response.body.size'?: StandardInstrumentExtendedRouterAttributesWithRouterSelector;
  /**
   * Histogram of router overhead (time not spent in subgraph requests)
   */
  'apollo.router.overhead'?: StandardInstrumentExtendedRouterOverheadAttributesWithRouterSelector;
  [k: string]: Instrument | undefined;
}
export interface ActiveRequestsAttributes {
  /**
   * The HTTP request method
   */
  'http.request.method'?: boolean;
  /**
   * The server address
   */
  'server.address'?: boolean;
  /**
   * The server port
   */
  'server.port'?: boolean;
  /**
   * The URL scheme
   */
  'url.scheme'?: boolean;
}
/**
 * Empty attributes struct for router overhead - no standard attributes, only custom selectors
 */
export interface ExtendedRouterOverheadAttributesWithRouterSelector {
  [k: string]: RouterSelector;
}
export interface Instrument {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: RouterValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedRouterAttributesWithRouterSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionRouterSelector;
}
export interface ExtendedSupergraphInstrumentsConfigWithInstrument {
  /**
   * A histogram of the estimated cost of the operation using the currently configured cost model
   */
  'cost.estimated'?: StandardInstrumentExtendedSupergraphAttributesWithSupergraphSelector;
  /**
   * A histogram of the actual cost of the operation using the currently configured cost model
   */
  'cost.actual'?: StandardInstrumentExtendedSupergraphAttributesWithSupergraphSelector;
  /**
   * A histogram of the delta between the estimated and actual cost of the operation using the currently configured cost model
   */
  'cost.delta'?: StandardInstrumentExtendedSupergraphAttributesWithSupergraphSelector;
  [k: string]: Instrument2 | undefined;
}
export interface Instrument2 {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: SupergraphValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedSupergraphAttributesWithSupergraphSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionSupergraphSelector;
}
export interface ExtendedSubgraphInstrumentsConfigWithInstrument {
  /**
   * Histogram of client request duration
   */
  'http.client.request.duration'?: StandardInstrumentExtendedSubgraphAttributesWithSubgraphSelector;
  /**
   * Histogram of client request body size
   */
  'http.client.request.body.size'?: StandardInstrumentExtendedSubgraphAttributesWithSubgraphSelector;
  /**
   * Histogram of client response body size
   */
  'http.client.response.body.size'?: StandardInstrumentExtendedSubgraphAttributesWithSubgraphSelector;
  [k: string]: Instrument3 | undefined;
}
export interface Instrument3 {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: SubgraphValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedSubgraphAttributesWithSubgraphSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionSubgraphSelector;
}
export interface ExtendedConnectorInstrumentsConfigWithInstrument {
  /**
   * Histogram of client request duration
   */
  'http.client.request.duration'?: StandardInstrumentExtendedConnectorAttributesWithConnectorSelector;
  /**
   * Histogram of client request body size
   */
  'http.client.request.body.size'?: StandardInstrumentExtendedConnectorAttributesWithConnectorSelector;
  /**
   * Histogram of client response body size
   */
  'http.client.response.body.size'?: StandardInstrumentExtendedConnectorAttributesWithConnectorSelector;
  [k: string]: Instrument4 | undefined;
}
export interface Instrument4 {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: ConnectorValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedConnectorAttributesWithConnectorSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionConnectorSelector;
}
export interface ExtendedGraphQLInstrumentsConfigWithInstrument {
  /**
   * A histogram of the length of a selected field in the GraphQL response
   */
  'list.length'?: StandardInstrumentExtendedGraphQLAttributesWithGraphQLSelector;
  /**
   * A counter of the number of times a field is used.
   */
  'field.execution'?: StandardInstrumentExtendedGraphQLAttributesWithGraphQLSelector;
  [k: string]: Instrument5 | undefined;
}
export interface ExtendedGraphQLAttributesWithGraphQLSelector {
  /**
   * The GraphQL field name
   */
  'graphql.field.name'?: StandardAttribute | null;
  /**
   * The GraphQL field type
   */
  'graphql.field.type'?: StandardAttribute | null;
  /**
   * If the field is a list, the length of the list
   */
  'graphql.list.length'?: StandardAttribute | null;
  /**
   * The GraphQL operation name
   */
  'graphql.operation.name'?: StandardAttribute | null;
  /**
   * The GraphQL type name
   */
  'graphql.type.name'?: StandardAttribute | null;
  [k: string]: GraphQLSelector | undefined;
}
export interface Instrument5 {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: GraphQLValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedGraphQLAttributesWithGraphQLSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionGraphQLSelector;
}
export interface ExtendedCacheInstrumentsConfigWithInstrument {
  /**
   * A counter of times we have a cache hit or cache miss (deprecated)
   */
  'apollo.router.operations.entity.cache'?: StandardInstrumentExtendedCacheAttributesWithSubgraphSelector;
  /**
   * A counter of times we have a cache hit or cache miss
   */
  'apollo.router.response.cache'?: StandardInstrumentExtendedCacheAttributesWithSubgraphSelector;
  [k: string]: Instrument6 | undefined;
}
export interface ExtendedCacheAttributesWithSubgraphSelector {
  /**
   * Entity type
   */
  'graphql.type.name'?: StandardAttribute | null;
  [k: string]: SubgraphSelector;
}
export interface Instrument6 {
  /**
   * The type of instrument.
   */
  type: InstrumentType;
  /**
   * The value of the instrument.
   */
  value: SubgraphValue;
  /**
   * The description of the instrument.
   */
  description: string;
  /**
   * The units of the instrument, e.g. "ms", "bytes", "requests".
   */
  unit: string;
  /**
   * Attributes to include on the instrument.
   */
  attributes?: ExtendedCacheAttributesWithSubgraphSelector;
  /**
   * The instrument conditions.
   */
  condition?: ConditionSubgraphSelector;
}
/**
 * Configuration for the traffic shaping plugin
 */
export interface TrafficShapingConfig {
  /**
   * Applied at the router level
   */
  router?: RouterShaping | null;
  /**
   * Applied on all subgraphs
   */
  all?: SubgraphShaping | null;
  /**
   * Applied on specific subgraphs
   */
  subgraphs?: {
    [k: string]: SubgraphShaping;
  };
  /**
   * Applied on specific subgraphs
   */
  connector?: ConnectorsShapingConfig;
  /**
   * DEPRECATED, now always enabled: Enable variable deduplication optimization when sending requests to subgraphs (https://github.com/apollographql/router/issues/87)
   */
  deduplicate_variables?: boolean | null;
}
export interface RouterShaping {
  /**
   * The global concurrency limit
   */
  concurrency_limit?: number | null;
  /**
   * Enable global rate limiting
   */
  global_rate_limit?: RateLimitConf | null;
  /**
   * Enable timeout for incoming requests
   */
  timeout?: string;
}
export interface RateLimitConf {
  /**
   * Number of requests allowed
   */
  capacity: number;
  /**
   * Per interval
   */
  interval: string;
}
/**
 * Traffic shaping options
 */
export interface SubgraphShaping {
  /**
   * Enable query deduplication
   */
  deduplicate_query?: boolean | null;
  /**
   * Enable compression for subgraphs (available compressions are deflate, br, gzip)
   */
  compression?: Compression | null;
  /**
   * Enable global rate limiting
   */
  global_rate_limit?: RateLimitConf | null;
  /**
   * Enable timeout for incoming requests
   */
  timeout?: string;
  /**
   * Enable HTTP2 for subgraphs
   */
  experimental_http2?: Http2Config | null;
  /**
   * DNS resolution strategy for subgraphs
   */
  dns_resolution_strategy?: DnsResolutionStrategy | null;
}
export interface ConnectorsShapingConfig {
  /**
   * Applied on all connectors
   */
  all?: ConnectorShaping | null;
  /**
   * Applied on specific connector sources
   */
  sources?: {
    [k: string]: ConnectorShaping;
  };
}
export interface ConnectorShaping {
  /**
   * Enable compression for connectors (available compressions are deflate, br, gzip)
   */
  compression?: Compression | null;
  /**
   * Enable global rate limiting
   */
  global_rate_limit?: RateLimitConf | null;
  /**
   * Enable timeout for connectors requests
   */
  timeout?: string;
  /**
   * Enable HTTP2 for connectors
   */
  experimental_http2?: Http2Config | null;
  /**
   * DNS resolution strategy for connectors
   */
  dns_resolution_strategy?: DnsResolutionStrategy | null;
}
/**
 * Configuration for Batching
 */
export interface Batching {
  /**
   * Activates Batching (disabled by default)
   */
  enabled?: boolean;
  /**
   * Batching mode
   */
  mode: BatchingMode;
  /**
   * Subgraph options for batching
   */
  subgraph?: SubgraphCommonBatchingConfigConfiguration | null;
  /**
   * Maximum size for a batch
   */
  maximum_size?: number | null;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface SubgraphCommonBatchingConfigConfiguration {
  /**
   * options applying to all subgraphs
   */
  all?: CommonBatchingConfig;
  /**
   * per subgraph options
   */
  subgraphs?: {
    [k: string]: CommonBatchingConfig;
  };
  [k: string]: unknown | undefined;
}
/**
 * Common options for configuring subgraph batching
 */
export interface CommonBatchingConfig {
  /**
   * Whether this batching config should be enabled
   */
  enabled: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration for one subgraph for the `mock_subgraphs` plugin
 */
export interface SubgraphConfig {
  /**
   * HTTP headers for the subgraph response
   */
  headers?: {
    [k: string]: string | undefined;
  };
  /**
   * Data for `query` operations (excluding the special `_entities` field)
   *
   * In maps nested in this one (but not at the top level), the `__cacheTags` key is special.
   * Instead of representing a field that can be selected, when its parent field is selected
   * its value is expected to be an array which is appended
   * to the `response.extensions["apolloCacheTags"]` array.
   */
  query?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Data for `mutation` operations
   */
  mutation?: {
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Entities that can be queried through Federation’s special `_entities` field
   *
   * In maps directly in the top-level `Vec` (but not in other maps nested deeper),
   * the `__cacheTags` key is special.
   * Instead of representing a field that can be selected, when its parent entity is selected
   * its contents are added to the `response.extensions["apolloEntityCacheTags"]` array.
   */
  entities?: {
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration for response caching
 *
 * This interface was referenced by `Configuration`'s JSON-Schema definition
 * via the `patternProperty` "^preview_response_cache$".
 */
export interface Config7 {
  /**
   * Enable or disable the response caching feature
   */
  enabled?: boolean;
  /**
   * Enable debug mode for the debugger
   */
  debug?: boolean;
  /**
   * Configure invalidation per subgraph
   */
  subgraph: SubgraphSubgraphConfiguration2;
  /**
   * Global invalidation configuration
   */
  invalidation?: InvalidationEndpointConfig2 | null;
  /**
   * Buffer size for known private queries (default: 2048)
   */
  private_queries_buffer_size?: number;
}
/**
 * Configuration options pertaining to the subgraph server component.
 */
export interface SubgraphSubgraphConfiguration2 {
  /**
   * options applying to all subgraphs
   */
  all?: Subgraph2;
  /**
   * per subgraph options
   */
  subgraphs?: {
    [k: string]: Subgraph2;
  };
  [k: string]: unknown | undefined;
}
/**
 * Per subgraph configuration for response caching
 */
export interface Subgraph2 {
  /**
   * Redis configuration
   */
  redis?: Config8 | null;
  /**
   * expiration for all keys for this subgraph, unless overridden by the `Cache-Control` header in subgraph responses
   */
  ttl?: Ttl2 | null;
  /**
   * activates caching for this subgraph, overrides the global configuration
   */
  enabled?: boolean | null;
  /**
   * Context key used to separate cache sections per user
   */
  private_id?: string | null;
  /**
   * Invalidation configuration
   */
  invalidation?: SubgraphInvalidationConfig2 | null;
}
/**
 * Redis cache configuration
 */
export interface Config8 {
  /**
   * List of URLs to the Redis cluster
   */
  urls: string[];
  /**
   * Redis username if not provided in the URLs. This field takes precedence over the username in the URL
   */
  username?: string | null;
  /**
   * Redis password if not provided in the URLs. This field takes precedence over the password in the URL
   */
  password?: string | null;
  /**
   * Timeout for Redis fetch commands (default: 150ms)
   */
  fetch_timeout?: string | null;
  /**
   * Timeout for Redis insert commands (default: 500ms)
   *
   * Inserts are processed asynchronously, so this will not affect response duration.
   */
  insert_timeout?: string | null;
  /**
   * Timeout for Redis invalidation commands (default: 1s)
   */
  invalidate_timeout?: string | null;
  /**
   * Timeout for Redis maintenance commands (default: 500ms)
   *
   * Maintenance tasks are processed asynchronously, so this will not affect response duration.
   */
  maintenance_timeout?: string | null;
  /**
   * namespace used to prefix Redis keys
   */
  namespace?: string | null;
  /**
   * TLS client configuration
   */
  tls?: TlsClient | null;
  /**
   * Prevents the router from starting if it cannot connect to Redis
   */
  required_to_start?: boolean;
  /**
   * The size of the Redis connection pool (default: 5)
   */
  pool_size?: number;
  /**
   * Interval for collecting Redis metrics (default: 1s)
   */
  metrics_interval?: string | null;
}
export interface SubgraphInvalidationConfig2 {
  /**
   * Enable the invalidation
   */
  enabled?: boolean;
  /**
   * Shared key needed to request the invalidation endpoint
   */
  shared_key?: string;
}
export interface InvalidationEndpointConfig2 {
  /**
   * Specify on which path you want to listen for invalidation endpoint.
   */
  path: string;
  /**
   * Listen address on which the invalidation endpoint must listen.
   */
  listen: ListenAddr;
}
