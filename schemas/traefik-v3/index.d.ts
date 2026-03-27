/* eslint-disable */

export interface TraefikV3StaticConfiguration {
  accessLog?: TypesAccessLog;
  api?: StaticAPI;
  certificatesResolvers?: {
    [k: string]: StaticCertificateResolver | undefined;
  };
  core?: StaticCore;
  entryPoints?: {
    [k: string]: StaticEntryPoint | undefined;
  };
  experimental?: StaticExperimental;
  global?: StaticGlobal;
  hostResolver?: TypesHostResolverConfig;
  log?: TypesTraefikLog;
  metrics?: TypesMetrics;
  ping?: PingHandler;
  providers?: StaticProviders;
  serversTransport?: StaticServersTransport;
  spiffe?: StaticSpiffeClientConfig;
  tcpServersTransport?: StaticTCPServersTransport;
  tracing?: StaticTracing;
  [k: string]: unknown | undefined;
}
export interface TypesAccessLog {
  addInternals?: boolean;
  dualOutput?: boolean;
  bufferingSize?: number;
  fields?: TypesAccessLogFields;
  filePath?: string;
  filters?: TypesAccessLogFilters;
  format?: string;
  otlp?: TypesOTelLog;
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
export interface TypesOTelLog {
  grpc?: TypesOTelGRPC;
  http?: TypesOTelHTTP;
  resourceAttributes?: {
    [k: string]: string | undefined;
  };
  serviceName?: string;
}
export interface TypesOTelGRPC {
  endpoint?: string;
  headers?: {
    [k: string]: string | undefined;
  };
  insecure?: boolean;
  tls?: TypesClientTLS;
}
export interface TypesClientTLS {
  ca?: string;
  cert?: string;
  insecureSkipVerify?: boolean;
  key?: string;
}
export interface TypesOTelHTTP {
  endpoint?: string;
  headers?: {
    [k: string]: string | undefined;
  };
  tls?: TypesClientTLS;
}
export interface StaticAPI {
  basePath?: string;
  dashboard?: boolean;
  debug?: boolean;
  disableDashboardAd?: boolean;
  insecure?: boolean;
}
export interface StaticCertificateResolver {
  acme?: AcmeConfiguration;
  tailscale?: CertificateResolverTailscaleStruct;
}
export interface AcmeConfiguration {
  caCertificates?: string[] | null;
  caServer?: string;
  caServerName?: string;
  caSystemCertPool?: boolean;
  certificatesDuration?: number;
  clientResponseHeaderTimeout?: string;
  clientTimeout?: string;
  disableCommonName?: boolean;
  dnsChallenge?: AcmeDNSChallenge;
  eab?: AcmeEAB;
  /**
   * Email address used for ACME account registration. This is the contact email for the certificate authority.
   */
  email?: string;
  /**
   * Email addresses to include in the Certificate Signing Request (CSR). These are different from the ACME registration email and are embedded in the certificate itself.
   */
  emailAddresses?: string[] | null;
  httpChallenge?: AcmeHTTPChallenge;
  keyType?: string;
  preferredChain?: string;
  profile?: string;
  storage?: string;
  tlsChallenge?: AcmeTLSChallenge;
}
export interface AcmeDNSChallenge {
  /**
   * DEPRECATED. Delay before checking propagation. Use acme.dnsChallenge.propagation.delayBeforeChecks instead.
   */
  delayBeforeCheck?: string;
  /**
   * DEPRECATED. Disable propagation check. Use acme.dnsChallenge.propagation.disableChecks instead.
   */
  disablePropagationCheck?: boolean;
  propagation?: AcmePropagation;
  provider?: string;
  resolvers?: string[] | null;
}
export interface AcmePropagation {
  delayBeforeChecks?: string;
  disableANSChecks?: boolean;
  disableChecks?: boolean;
  requireAllRNS?: boolean;
}
export interface AcmeEAB {
  hmacEncoded?: string;
  kid?: string;
}
export interface AcmeHTTPChallenge {
  /**
   * Delay between the creation of the challenge and the validation (duration format, e.g., 30s, 1m).
   */
  delay?: string;
  entryPoint?: string;
}
export interface AcmeTLSChallenge {
  /**
   * Delay between the creation of the challenge and the validation (duration format, e.g., 30s, 1m).
   */
  delay?: string;
}
export interface CertificateResolverTailscaleStruct {}
export interface StaticCore {
  defaultRuleSyntax?: string;
}
export interface StaticEntryPoint {
  address?: string;
  allowACMEByPass?: boolean;
  asDefault?: boolean;
  forwardedHeaders?: StaticForwardedHeaders;
  http?: StaticHTTPConfig;
  http2?: StaticHTTP2Config;
  http3?: StaticHTTP3Config;
  observability?: StaticObservabilityConfig;
  proxyProtocol?: StaticProxyProtocol;
  reusePort?: boolean;
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
  maxHeaderBytes?: number;
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
export interface StaticObservabilityConfig {
  accessLogs?: boolean;
  metrics?: boolean;
  tracing?: boolean;
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
  abortOnPluginFailure?: boolean;
  fastProxy?: StaticFastProxyConfig;
  kubernetesGateway?: boolean;
  localPlugins?: {
    [k: string]: PluginsLocalDescriptor | undefined;
  };
  otlplogs?: boolean;
  plugins?: {
    [k: string]: PluginsDescriptor | undefined;
  };
}
export interface StaticFastProxyConfig {
  debug?: boolean;
}
export interface PluginsLocalDescriptor {
  moduleName?: string;
  settings?: PluginsSettings;
}
export interface PluginsSettings {
  envs?: string[] | null;
  mounts?: string[] | null;
}
export interface PluginsDescriptor {
  moduleName?: string;
  settings?: PluginsSettings;
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
  compress?: boolean;
  filePath?: string;
  format?: string;
  level?: string;
  maxAge?: number;
  maxBackups?: number;
  maxSize?: number;
  noColor?: boolean;
  otlp?: TypesOTelLog;
}
export interface TypesMetrics {
  addInternals?: boolean;
  datadog?: TypesDatadog;
  influxDB2?: TypesInfluxDB2;
  otlp?: TypesOTLP;
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
export interface TypesOTLP {
  addEntryPointsLabels?: boolean;
  addRoutersLabels?: boolean;
  addServicesLabels?: boolean;
  explicitBoundaries?: number[] | null;
  grpc?: TypesOTelGRPC;
  http?: TypesOTelHTTP;
  pushInterval?: string;
  serviceName?: string;
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
  nomad?: NomadProviderBuilder;
  plugin?: {
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  providersThrottleDuration?: string;
  redis?: RedisProvider;
  rest?: RestProvider;
  swarm?: DockerSwarmProvider;
  zooKeeper?: ZkProvider;
}
export interface ConsulProviderBuilder {
  endpoints?: string[] | null;
  namespaces?: string[] | null;
  rootKey?: string;
  tls?: TypesClientTLS;
  token?: string;
}
export interface ConsulcatalogProviderBuilder {
  cache?: boolean;
  connectAware?: boolean;
  connectByDefault?: boolean;
  constraints?: string;
  defaultRule?: string;
  endpoint?: ConsulcatalogEndpointConfig;
  exposedByDefault?: boolean;
  namespaces?: string[] | null;
  prefix?: string;
  refreshInterval?: string;
  requireConsistent?: boolean;
  serviceName?: string;
  stale?: boolean;
  strictChecks?: string[] | null;
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
  password?: string;
  tls?: TypesClientTLS;
  useBindPortIP?: boolean;
  username?: string;
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
  healthyTasksOnly?: boolean;
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
  headers?: {
    [k: string]: string | undefined;
  };
  pollInterval?: string;
  pollTimeout?: string;
  tls?: TypesClientTLS;
}
export interface CrdProvider {
  allowCrossNamespace?: boolean;
  allowEmptyServices?: boolean;
  allowExternalNameServices?: boolean;
  certAuthFilePath?: string;
  disableClusterScopeResources?: boolean;
  endpoint?: string;
  ingressClass?: string;
  labelSelector?: string;
  namespaces?: string[] | null;
  nativeLBByDefault?: boolean;
  throttleDuration?: string;
  token?: string;
}
export interface GatewayProvider {
  certAuthFilePath?: string;
  endpoint?: string;
  experimentalChannel?: boolean;
  labelSelector?: string;
  namespaces?: string[] | null;
  nativeLBByDefault?: boolean;
  statusAddress?: GatewayStatusAddress;
  throttleDuration?: string;
  token?: string;
}
export interface GatewayStatusAddress {
  hostname?: string;
  ip?: string;
  service?: GatewayServiceRef;
}
export interface GatewayServiceRef {
  name?: string;
  namespace?: string;
}
export interface IngressProvider {
  allowEmptyServices?: boolean;
  allowExternalNameServices?: boolean;
  certAuthFilePath?: string;
  disableClusterScopeResources?: boolean;
  disableIngressClassLookup?: boolean;
  endpoint?: string;
  ingressClass?: string;
  ingressEndpoint?: IngressEndpointIngress;
  labelSelector?: string;
  namespaces?: string[] | null;
  nativeLBByDefault?: boolean;
  throttleDuration?: string;
  token?: string;
}
export interface IngressEndpointIngress {
  hostname?: string;
  ip?: string;
  publishedService?: string;
}
export interface NomadProviderBuilder {
  allowEmptyServices?: boolean;
  constraints?: string;
  defaultRule?: string;
  endpoint?: NomadEndpointConfig;
  exposedByDefault?: boolean;
  namespaces?: string[] | null;
  prefix?: string;
  refreshInterval?: string;
  stale?: boolean;
  throttleDuration?: string;
  watch?: boolean;
}
export interface NomadEndpointConfig {
  address?: string;
  endpointWaitTime?: string;
  region?: string;
  tls?: TypesClientTLS;
  token?: string;
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
export interface DockerSwarmProvider {
  allowEmptyServices?: boolean;
  constraints?: string;
  defaultRule?: string;
  endpoint?: string;
  exposedByDefault?: boolean;
  httpClientTimeout?: string;
  network?: string;
  password?: string;
  refreshSeconds?: string;
  tls?: TypesClientTLS;
  useBindPortIP?: boolean;
  username?: string;
  watch?: boolean;
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
  spiffe?: StaticSpiffe;
}
export interface StaticForwardingTimeouts {
  dialTimeout?: string;
  idleConnTimeout?: string;
  responseHeaderTimeout?: string;
}
export interface StaticSpiffe {
  ids?: string[] | null;
  trustDomain?: string;
}
export interface StaticSpiffeClientConfig {
  workloadAPIAddr?: string;
}
export interface StaticTCPServersTransport {
  dialKeepAlive?: string;
  dialTimeout?: string;
  terminationDelay?: string;
  tls?: StaticTLSClientConfig;
}
export interface StaticTLSClientConfig {
  insecureSkipVerify?: boolean;
  rootCAs?: string[] | null;
  spiffe?: StaticSpiffe;
}
export interface StaticTracing {
  addInternals?: boolean;
  capturedRequestHeaders?: string[] | null;
  capturedResponseHeaders?: string[] | null;
  globalAttributes?: {
    [k: string]: string | undefined;
  };
  otlp?: TypesOTelTracing;
  resourceAttributes?: {
    [k: string]: string | undefined;
  };
  safeQueryParams?: string[] | null;
  sampleRate?: number;
  serviceName?: string;
}
export interface TypesOTelTracing {
  grpc?: TypesOTelGRPC;
  http?: TypesOTelHTTP;
}
