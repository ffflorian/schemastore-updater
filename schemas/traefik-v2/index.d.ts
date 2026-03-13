/* eslint-disable */

export interface TraefikV2StaticConfiguration {
  accessLog?: TypesAccessLog;
  api?: StaticAPI;
  certificatesResolvers?: {
    [k: string]: StaticCertificateResolver | undefined;
  };
  entryPoints?: {
    [k: string]: StaticEntryPoint | undefined;
  };
  experimental?: StaticExperimental;
  global?: StaticGlobal;
  hostResolver?: TypesHostResolverConfig;
  log?: TypesTraefikLog;
  metrics?: TypesMetrics;
  pilot?: StaticPilot;
  ping?: PingHandler;
  providers?: StaticProviders;
  serversTransport?: StaticServersTransport;
  tracing?: StaticTracing;
  [k: string]: unknown | undefined;
}
export interface TypesAccessLog {
  bufferingSize?: number;
  fields?: TypesAccessLogFields;
  filePath?: string;
  filters?: TypesAccessLogFilters;
  format?: string;
}
export interface TypesAccessLogFields {
  defaultMode?: string;
  headers?: TypesFieldHeaders;
  names?: {
    [k: string]: string | undefined;
  };
}
export interface TypesFieldHeaders {
  defaultMode?: string;
  names?: {
    [k: string]: string | undefined;
  };
}
export interface TypesAccessLogFilters {
  minDuration?: string;
  retryAttempts?: boolean;
  statusCodes?: string[] | null;
}
export interface StaticAPI {
  dashboard?: boolean;
  debug?: boolean;
  disableDashboardAd?: boolean;
  insecure?: boolean;
}
export interface StaticCertificateResolver {
  acme?: AcmeConfiguration;
}
export interface AcmeConfiguration {
  caServer?: string;
  certificatesDuration?: number;
  dnsChallenge?: AcmeDNSChallenge;
  eab?: AcmeEAB;
  email?: string;
  httpChallenge?: AcmeHTTPChallenge;
  keyType?: string;
  preferredChain?: string;
  storage?: string;
  tlsChallenge?: AcmeTLSChallenge;
}
export interface AcmeDNSChallenge {
  delayBeforeCheck?: string;
  disablePropagationCheck?: boolean;
  provider?: string;
  resolvers?: string[] | null;
}
export interface AcmeEAB {
  hmacEncoded?: string;
  kid?: string;
}
export interface AcmeHTTPChallenge {
  entryPoint?: string;
}
export interface AcmeTLSChallenge {}
export interface StaticEntryPoint {
  address?: string;
  allowACMEByPass?: boolean;
  forwardedHeaders?: StaticForwardedHeaders;
  http?: StaticHTTPConfig;
  http2?: StaticHTTP2Config;
  http3?: StaticHTTP3Config;
  proxyProtocol?: StaticProxyProtocol;
  transport?: StaticEntryPointsTransport;
  udp?: StaticUDPConfig;
}
export interface StaticForwardedHeaders {
  connection?: string[] | null;
  insecure?: boolean;
  trustedIPs?: string[] | null;
}
export interface StaticHTTPConfig {
  encodedCharacters?: StaticEncodedCharacters;
  encodeQuerySemicolons?: boolean;
  middlewares?: string[] | null;
  redirections?: StaticRedirections;
  tls?: StaticTLSConfig;
}
export interface StaticEncodedCharacters {
  allowEncodedSlash?: boolean;
  allowEncodedBackSlash?: boolean;
  allowEncodedNullCharacter?: boolean;
  allowEncodedSemicolon?: boolean;
  allowEncodedPercent?: boolean;
  allowEncodedQuestionMark?: boolean;
  allowEncodedHash?: boolean;
}
export interface StaticRedirections {
  entryPoint?: StaticRedirectEntryPoint;
}
export interface StaticRedirectEntryPoint {
  permanent?: boolean;
  priority?: number;
  scheme?: string;
  to?: string;
}
export interface StaticTLSConfig {
  certResolver?: string;
  domains?: TypesDomain[] | null;
  options?: string;
}
export interface TypesDomain {
  main?: string;
  sans?: string[] | null;
}
export interface StaticHTTP2Config {
  maxConcurrentStreams?: number;
}
export interface StaticHTTP3Config {
  advertisedPort?: number;
}
export interface StaticProxyProtocol {
  insecure?: boolean;
  trustedIPs?: string[] | null;
}
export interface StaticEntryPointsTransport {
  keepAliveMaxRequests?: number;
  keepAliveMaxTime?: string;
  lifeCycle?: StaticLifeCycle;
  respondingTimeouts?: StaticRespondingTimeouts;
}
export interface StaticLifeCycle {
  graceTimeOut?: string;
  requestAcceptGraceTimeout?: string;
}
export interface StaticRespondingTimeouts {
  idleTimeout?: string;
  readTimeout?: string;
  writeTimeout?: string;
}
export interface StaticUDPConfig {
  timeout?: string;
}
export interface StaticExperimental {
  http3?: boolean;
  kubernetesGateway?: boolean;
  localPlugins?: {
    [k: string]: PluginsLocalDescriptor | undefined;
  };
  plugins?: {
    [k: string]: PluginsDescriptor | undefined;
  };
}
export interface PluginsLocalDescriptor {
  moduleName?: string;
}
export interface PluginsDescriptor {
  moduleName?: string;
  version?: string;
}
export interface StaticGlobal {
  checkNewVersion?: boolean;
  sendAnonymousUsage?: boolean;
}
export interface TypesHostResolverConfig {
  cnameFlattening?: boolean;
  resolvConfig?: string;
  resolvDepth?: number;
}
export interface TypesTraefikLog {
  filePath?: string;
  format?: string;
  level?: string;
}
export interface TypesMetrics {
  datadog?: TypesDatadog;
  influxDB?: TypesInfluxDB;
  influxDB2?: TypesInfluxDB2;
  prometheus?: TypesPrometheus;
  statsD?: TypesStatsd;
}
export interface TypesDatadog {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  address?: string;
  prefix?: string;
  pushInterval?: string;
}
export interface TypesInfluxDB {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  additionalLabels?: {
    [k: string]: string | undefined;
  };
  address?: string;
  database?: string;
  password?: string;
  protocol?: string;
  pushInterval?: string;
  retentionPolicy?: string;
  username?: string;
}
export interface TypesInfluxDB2 {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  additionalLabels?: {
    [k: string]: string | undefined;
  };
  address?: string;
  bucket?: string;
  org?: string;
  pushInterval?: string;
  token?: string;
}
export interface TypesPrometheus {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  buckets?: number[] | null;
  entryPoint?: string;
  headerLabels?: {
    [k: string]: string | undefined;
  };
  manualRouting?: boolean;
}
export interface TypesStatsd {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  address?: string;
  prefix?: string;
  pushInterval?: string;
}
export interface StaticPilot {
  dashboard?: boolean;
  token?: string;
}
export interface PingHandler {
  entryPoint?: string;
  manualRouting?: boolean;
  terminatingStatusCode?: number;
}
export interface StaticProviders {
  consul?: ConsulProviderBuilder;
  consulCatalog?: ConsulcatalogProviderBuilder;
  docker?: DockerProvider;
  ecs?: EcsProvider;
  etcd?: EtcdProvider;
  file?: FileProvider;
  http?: HttpProvider;
  kubernetesCRD?: CrdProvider;
  kubernetesGateway?: GatewayProvider;
  kubernetesIngress?: IngressProvider;
  marathon?: MarathonProvider;
  nomad?: NomadProviderBuilder;
  plugin?: {
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  providersThrottleDuration?: string;
  rancher?: RancherProvider;
  redis?: RedisProvider;
  rest?: RestProvider;
  zooKeeper?: ZkProvider;
}
export interface ConsulProviderBuilder {
  endpoints?: string[] | null;
  namespace?: string;
  namespaces?: string[] | null;
  rootKey?: string;
  tls?: TypesClientTLS;
  token?: string;
}
export interface TypesClientTLS {
  ca?: string;
  caOptional?: boolean;
  cert?: string;
  insecureSkipVerify?: boolean;
  key?: string;
}
export interface ConsulcatalogProviderBuilder {
  cache?: boolean;
  connectAware?: boolean;
  connectByDefault?: boolean;
  constraints?: string;
  defaultRule?: string;
  endpoint?: ConsulcatalogEndpointConfig;
  exposedByDefault?: boolean;
  namespace?: string;
  namespaces?: string[] | null;
  prefix?: string;
  refreshInterval?: string;
  requireConsistent?: boolean;
  serviceName?: string;
  stale?: boolean;
  watch?: boolean;
}
export interface ConsulcatalogEndpointConfig {
  address?: string;
  datacenter?: string;
  endpointWaitTime?: string;
  httpAuth?: ConsulcatalogEndpointHTTPAuthConfig;
  scheme?: string;
  tls?: TypesClientTLS;
  token?: string;
}
export interface ConsulcatalogEndpointHTTPAuthConfig {
  password?: string;
  username?: string;
}
export interface DockerProvider {
  allowEmptyServices?: boolean;
  constraints?: string;
  defaultRule?: string;
  endpoint?: string;
  exposedByDefault?: boolean;
  httpClientTimeout?: string;
  network?: string;
  swarmMode?: boolean;
  swarmModeRefreshSeconds?: string;
  tls?: TypesClientTLS;
  useBindPortIP?: boolean;
  watch?: boolean;
}
export interface EcsProvider {
  accessKeyID?: string;
  autoDiscoverClusters?: boolean;
  clusters?: string[] | null;
  constraints?: string;
  defaultRule?: string;
  ecsAnywhere?: boolean;
  exposedByDefault?: boolean;
  refreshSeconds?: number;
  region?: string;
  secretAccessKey?: string;
}
export interface EtcdProvider {
  endpoints?: string[] | null;
  password?: string;
  rootKey?: string;
  tls?: TypesClientTLS;
  username?: string;
}
export interface FileProvider {
  debugLogGeneratedTemplate?: boolean;
  directory?: string;
  filename?: string;
  watch?: boolean;
}
export interface HttpProvider {
  endpoint: string;
  pollInterval?: string;
  pollTimeout?: string;
  tls?: TypesClientTLS;
}
export interface CrdProvider {
  allowCrossNamespace?: boolean;
  allowEmptyServices?: boolean;
  allowExternalNameServices?: boolean;
  certAuthFilePath?: string;
  endpoint?: string;
  ingressClass?: string;
  labelSelector?: string;
  namespaces?: string[] | null;
  throttleDuration?: string;
  token?: string;
}
export interface GatewayProvider {
  certAuthFilePath?: string;
  endpoint?: string;
  labelSelector?: string;
  namespaces?: string[] | null;
  throttleDuration?: string;
  token?: string;
}
export interface IngressProvider {
  allowEmptyServices?: boolean;
  allowExternalNameServices?: boolean;
  certAuthFilePath?: string;
  endpoint?: string;
  ingressClass?: string;
  ingressEndpoint?: IngressEndpointIngress;
  labelSelector?: string;
  namespaces?: string[] | null;
  throttleDuration?: string;
  token?: string;
}
export interface IngressEndpointIngress {
  hostname?: string;
  ip?: string;
  publishedService?: string;
}
export interface MarathonProvider {
  basic?: MarathonBasic;
  constraints?: string;
  dcosToken?: string;
  defaultRule?: string;
  dialerTimeout?: string;
  endpoint?: string;
  exposedByDefault?: boolean;
  forceTaskHostname?: boolean;
  keepAlive?: string;
  respectReadinessChecks?: boolean;
  responseHeaderTimeout?: string;
  tls?: TypesClientTLS;
  tlsHandshakeTimeout?: string;
  trace?: boolean;
  watch?: boolean;
}
export interface MarathonBasic {
  httpBasicAuthUser?: string;
  httpBasicPassword?: string;
}
export interface NomadProviderBuilder {
  constraints?: string;
  defaultRule?: string;
  endpoint?: NomadEndpointConfig;
  exposedByDefault?: boolean;
  namespace?: string;
  namespaces?: string[] | null;
  prefix?: string;
  refreshInterval?: string;
  stale?: boolean;
}
export interface NomadEndpointConfig {
  address?: string;
  endpointWaitTime?: string;
  region?: string;
  tls?: TypesClientTLS;
  token?: string;
}
export interface RancherProvider {
  constraints?: string;
  defaultRule?: string;
  enableServiceHealthFilter?: boolean;
  exposedByDefault?: boolean;
  intervalPoll?: boolean;
  prefix?: string;
  refreshSeconds?: number;
  watch?: boolean;
}
export interface RedisProvider {
  db?: number;
  endpoints?: string[] | null;
  password?: string;
  rootKey?: string;
  sentinel?: RedisSentinel;
  tls?: TypesClientTLS;
  username?: string;
}
export interface RedisSentinel {
  latencyStrategy?: boolean;
  masterName?: string;
  password?: string;
  randomStrategy?: boolean;
  replicaStrategy?: boolean;
  useDisconnectedReplicas?: boolean;
  username?: string;
}
export interface RestProvider {
  insecure?: boolean;
}
export interface ZkProvider {
  endpoints?: string[] | null;
  password?: string;
  rootKey?: string;
  username?: string;
}
export interface StaticServersTransport {
  forwardingTimeouts?: StaticForwardingTimeouts;
  insecureSkipVerify?: boolean;
  maxIdleConnsPerHost?: number;
  rootCAs?: string[] | null;
}
export interface StaticForwardingTimeouts {
  dialTimeout?: string;
  idleConnTimeout?: string;
  responseHeaderTimeout?: string;
}
export interface StaticTracing {
  datadog?: DatadogConfig;
  elastic?: ElasticConfig;
  haystack?: HaystackConfig;
  instana?: InstanaConfig;
  jaeger?: JaegerConfig;
  serviceName?: string;
  spanNameLimit?: number;
  zipkin?: ZipkinConfig;
}
export interface DatadogConfig {
  bagagePrefixHeaderName?: string;
  debug?: boolean;
  globalTag?: string;
  globalTags?: {
    [k: string]: string | undefined;
  };
  localAgentHostPort?: string;
  localAgentSocket?: string;
  parentIDHeaderName?: string;
  prioritySampling?: boolean;
  samplingPriorityHeaderName?: string;
  traceIDHeaderName?: string;
}
export interface ElasticConfig {
  secretToken?: string;
  serverURL?: string;
  serviceEnvironment?: string;
}
export interface HaystackConfig {
  baggagePrefixHeaderName?: string;
  globalTag?: string;
  localAgentHost?: string;
  localAgentPort?: number;
  parentIDHeaderName?: string;
  spanIDHeaderName?: string;
  traceIDHeaderName?: string;
}
export interface InstanaConfig {
  enableAutoProfile?: boolean;
  localAgentHost?: string;
  localAgentPort?: number;
  logLevel?: string;
}
export interface JaegerConfig {
  collector?: JaegerCollector;
  disableAttemptReconnecting?: boolean;
  gen128Bit?: boolean;
  localAgentHostPort?: string;
  propagation?: string;
  samplingParam?: number;
  samplingServerURL?: string;
  samplingType?: string;
  traceContextHeaderName?: string;
}
export interface JaegerCollector {
  endpoint?: string;
  password?: string;
  user?: string;
}
export interface ZipkinConfig {
  httpEndpoint?: string;
  id128Bit?: boolean;
  sameSpan?: boolean;
  sampleRate?: number;
}
