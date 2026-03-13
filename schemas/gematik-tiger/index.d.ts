/* eslint-disable */

export type CfgExternalJarOptionsNullable = {
  activateLogs?: boolean;
  activateWorkflowLogs?: boolean;
  arguments?: string[] | null;
  options?: string[] | null;
  workingDir?: string | null;
  [k: string]: unknown | undefined;
} & CfgExternalJarOptionsNullable1;
export type CfgExternalJarOptionsNullable1 = {
  activateLogs?: boolean;
  activateWorkflowLogs?: boolean;
  arguments?: string[] | null;
  options?: string[] | null;
  workingDir?: string | null;
  [k: string]: unknown | undefined;
} | null;
export type CfgHelmChartOptionsNullable = {
  context?: string | null;
  debug?: boolean;
  exposedPorts?: string[] | null;
  healthcheckPods?: string[] | null;
  logPods?: string[] | null;
  nameSpace?: string | null;
  podName?: string | null;
  values?: string[] | null;
  workingDir?: string | null;
  [k: string]: unknown | undefined;
} & CfgHelmChartOptionsNullable1;
export type CfgHelmChartOptionsNullable1 = {
  context?: string | null;
  debug?: boolean;
  exposedPorts?: string[] | null;
  healthcheckPods?: string[] | null;
  logPods?: string[] | null;
  nameSpace?: string | null;
  podName?: string | null;
  values?: string[] | null;
  workingDir?: string | null;
  [k: string]: unknown | undefined;
} | null;
export type TigerProxyConfigurationNullable = {
  activateForwardAllLogging?: boolean;
  activateRbelParsing?: boolean;
  activateRbelParsingFor?: string[] | null;
  activateTlsTermination?: boolean;
  activateTrafficLogging?: boolean;
  adminPort?: number;
  connectionTimeoutInSeconds?: number;
  directReverseProxy?: DirectReverseProxyInfoNullable;
  downloadInitialTrafficFromEndpoints?: boolean;
  failOnOfflineTrafficEndpoints?: boolean;
  fileSaveInfo?: TigerFileSaveInfoNullable;
  forwardToProxy?: ForwardProxyInfoNullable;
  keyFolders?: string[] | null;
  localResources?: boolean;
  maximumPartialMessageAgeInSeconds?: number;
  maximumTrafficDownloadPageSize?: number;
  modifications?: RbelModificationDescription[] | null;
  name?: string | null;
  notes?: TigerProxyNoteCommand[] | null;
  parsingShouldBlockCommunication?: boolean;
  password?: string | null;
  perMessageBufferSizeInMb?: number;
  proxiedServer?: string | null;
  proxiedServerProtocol?: string | null;
  proxyLogLevel?: string | null;
  proxyPort?: number | null;
  proxyRoutes?: TigerConfigurationRoute[] | null;
  rbelBufferSizeInMb?: number;
  rewriteHostHeader?: boolean;
  rewriteLocationHeader?: boolean;
  skipDisplayWhenMessageLargerThanKb?: number;
  skipParsingWhenMessageLargerThanKb?: number;
  skipTrafficEndpointsSubscription?: boolean;
  stompClientBufferSizeInMb?: number;
  tls?: TigerTlsConfigurationNullable;
  trafficDownloadPageSize?: number;
  trafficEndpointConfiguration?: TrafficEndpointConfigurationNullable;
  trafficEndpointFilterString?: string | null;
  trafficEndpoints?: string[] | null;
  username?: string | null;
  [k: string]: unknown | undefined;
} & TigerProxyConfigurationNullable1;
export type DirectReverseProxyInfoNullable = {
  hostname?: string | null;
  ignoreConnectionErrors?: boolean;
  port?: number | null;
  [k: string]: unknown | undefined;
} & DirectReverseProxyInfoNullable1;
export type DirectReverseProxyInfoNullable1 = {
  hostname?: string | null;
  ignoreConnectionErrors?: boolean;
  port?: number | null;
  [k: string]: unknown | undefined;
} | null;
export type TigerFileSaveInfoNullable = {
  clearFileOnBoot?: boolean;
  filename?: string | null;
  readFilter?: string | null;
  sourceFile?: string | null;
  writeToFile?: boolean;
  [k: string]: unknown | undefined;
} & TigerFileSaveInfoNullable1;
export type TigerFileSaveInfoNullable1 = {
  clearFileOnBoot?: boolean;
  filename?: string | null;
  readFilter?: string | null;
  sourceFile?: string | null;
  writeToFile?: boolean;
  [k: string]: unknown | undefined;
} | null;
export type ForwardProxyInfoNullable = {
  hostname?: string | null;
  noProxyHosts?: string[] | null;
  password?: string | null;
  port?: number | null;
  type?: TigerProxyTypeNullable;
  username?: string | null;
  [k: string]: unknown | undefined;
} & ForwardProxyInfoNullable1;
export type TigerProxyTypeNullable = null | ('http' | 'https');
export type ForwardProxyInfoNullable1 = {
  hostname?: string | null;
  noProxyHosts?: string[] | null;
  password?: string | null;
  port?: number | null;
  type?: TigerProxyTypeNullable;
  username?: string | null;
  [k: string]: unknown | undefined;
} | null;
export type TigerRouteAuthenticationConfigurationNullable = {
  bearerToken?: string | null;
  password?: string | null;
  username?: string | null;
  [k: string]: unknown | undefined;
} & TigerRouteAuthenticationConfigurationNullable1;
export type TigerRouteAuthenticationConfigurationNullable1 = {
  bearerToken?: string | null;
  password?: string | null;
  username?: string | null;
  [k: string]: unknown | undefined;
} | null;
export type TigerTlsConfigurationNullable = {
  allowGenericFallbackIdentity?: boolean;
  alternativeNames?: string[] | null;
  clientSslSuites?: string[] | null;
  clientSupportedGroups?: string[] | null;
  domainName?: string | null;
  forwardMutualTlsIdentity?: TigerConfigurationPkiIdentityNullable;
  masterSecretsFile?: string | null;
  ocspSignerIdentity?: TigerConfigurationPkiIdentityNullable;
  serverIdentities?: TigerConfigurationPkiIdentity[] | null;
  serverIdentity?: TigerConfigurationPkiIdentityNullable;
  serverRootCa?: TigerConfigurationPkiIdentityNullable;
  serverSslSuites?: string[] | null;
  serverTlsProtocols?: string[] | null;
  [k: string]: unknown | undefined;
} & TigerTlsConfigurationNullable1;
export type TigerConfigurationPkiIdentityNullable = null | TigerConfigurationPkiIdentity;
export type X509CertificateNullable = null | X509Certificate;
export type TigerPkiIdentityInformationNullable = {
  filenames?: string[] | null;
  password?: string | null;
  storeType?: StoreTypeNullable;
  [k: string]: unknown | undefined;
} & TigerPkiIdentityInformationNullable1;
export type StoreTypeNullable = null | ('PKCS12' | 'JKS' | 'BKS' | 'PKCS8' | 'PKCS1');
export type TigerPkiIdentityInformationNullable1 = {
  filenames?: string[] | null;
  password?: string | null;
  storeType?: StoreTypeNullable;
  [k: string]: unknown | undefined;
} | null;
export type PrivateKeyNullable = {
  [k: string]: unknown | undefined;
} | null;
export type TigerTlsConfigurationNullable1 = {
  allowGenericFallbackIdentity?: boolean;
  alternativeNames?: string[] | null;
  clientSslSuites?: string[] | null;
  clientSupportedGroups?: string[] | null;
  domainName?: string | null;
  forwardMutualTlsIdentity?: TigerConfigurationPkiIdentityNullable;
  masterSecretsFile?: string | null;
  ocspSignerIdentity?: TigerConfigurationPkiIdentityNullable;
  serverIdentities?: TigerConfigurationPkiIdentity[] | null;
  serverIdentity?: TigerConfigurationPkiIdentityNullable;
  serverRootCa?: TigerConfigurationPkiIdentityNullable;
  serverSslSuites?: string[] | null;
  serverTlsProtocols?: string[] | null;
  [k: string]: unknown | undefined;
} | null;
export type TrafficEndpointConfigurationNullable = {
  name?: string | null;
  stompTopic?: string | null;
  wsEndpoint?: string | null;
  [k: string]: unknown | undefined;
} & TrafficEndpointConfigurationNullable1;
export type TrafficEndpointConfigurationNullable1 = {
  name?: string | null;
  stompTopic?: string | null;
  wsEndpoint?: string | null;
  [k: string]: unknown | undefined;
} | null;
export type TigerProxyConfigurationNullable1 = {
  activateForwardAllLogging?: boolean;
  activateRbelParsing?: boolean;
  activateRbelParsingFor?: string[] | null;
  activateTlsTermination?: boolean;
  activateTrafficLogging?: boolean;
  adminPort?: number;
  connectionTimeoutInSeconds?: number;
  directReverseProxy?: DirectReverseProxyInfoNullable;
  downloadInitialTrafficFromEndpoints?: boolean;
  failOnOfflineTrafficEndpoints?: boolean;
  fileSaveInfo?: TigerFileSaveInfoNullable;
  forwardToProxy?: ForwardProxyInfoNullable;
  keyFolders?: string[] | null;
  localResources?: boolean;
  maximumPartialMessageAgeInSeconds?: number;
  maximumTrafficDownloadPageSize?: number;
  modifications?: RbelModificationDescription[] | null;
  name?: string | null;
  notes?: TigerProxyNoteCommand[] | null;
  parsingShouldBlockCommunication?: boolean;
  password?: string | null;
  perMessageBufferSizeInMb?: number;
  proxiedServer?: string | null;
  proxiedServerProtocol?: string | null;
  proxyLogLevel?: string | null;
  proxyPort?: number | null;
  proxyRoutes?: TigerConfigurationRoute[] | null;
  rbelBufferSizeInMb?: number;
  rewriteHostHeader?: boolean;
  rewriteLocationHeader?: boolean;
  skipDisplayWhenMessageLargerThanKb?: number;
  skipParsingWhenMessageLargerThanKb?: number;
  skipTrafficEndpointsSubscription?: boolean;
  stompClientBufferSizeInMb?: number;
  tls?: TigerTlsConfigurationNullable;
  trafficDownloadPageSize?: number;
  trafficEndpointConfiguration?: TrafficEndpointConfigurationNullable;
  trafficEndpointFilterString?: string | null;
  trafficEndpoints?: string[] | null;
  username?: string | null;
  [k: string]: unknown | undefined;
} | null;

/**
 * A configuration file for the test environment of the gematik Tiger test platform
 */
export interface TigerEnvironmentConfiguration {
  localProxyActive?: boolean;
  servers?: MapStringCfgServerNullable;
  tigerProxy?: TigerProxyConfigurationNullable;
  [k: string]: unknown | undefined;
}
export interface MapStringCfgServerNullable {
  [k: string]: CfgServer | undefined;
}
export interface CfgServer {
  active?: boolean;
  dependsUpon?: string | null;
  environment?: string[] | null;
  exports?: string[] | null;
  externalJarOptions?: CfgExternalJarOptionsNullable;
  healthcheckReturnCode?: number | null;
  healthcheckUrl?: string | null;
  helmChartOptions?: CfgHelmChartOptionsNullable;
  hostname?: string | null;
  logFile?: string | null;
  source?: string[] | null;
  startupPollIntervalMs?: number | null;
  startupTimeoutSec?: number | null;
  tigerProxyConfiguration?: TigerProxyConfigurationNullable;
  type?: string | null;
  uiRank?: number;
  urlMappings?: string[] | null;
  version?: string | null;
  [k: string]: unknown | undefined;
}
export interface RbelModificationDescription {
  condition?: string | null;
  deleteAfterNExecutions?: number | null;
  name?: string | null;
  regexFilter?: string | null;
  replaceWith?: string | null;
  targetElement?: string | null;
  [k: string]: unknown | undefined;
}
export interface TigerProxyNoteCommand {
  jexlCriterion?: string | null;
  message?: string | null;
  [k: string]: unknown | undefined;
}
export interface TigerConfigurationRoute {
  authentication?: TigerRouteAuthenticationConfigurationNullable;
  criterions?: string[] | null;
  disableRbelLogging?: boolean;
  from?: string | null;
  hosts?: string[] | null;
  to?: string[] | null;
  [k: string]: unknown | undefined;
}
export interface TigerConfigurationPkiIdentity {
  certificate?: X509CertificateNullable;
  certificateChain?: X509Certificate[] | null;
  fileLoadingInformation?: TigerPkiIdentityInformationNullable;
  keyId?: string | null;
  privateKey?: PrivateKeyNullable;
  [k: string]: unknown | undefined;
}
export interface X509Certificate {
  type?: string | null;
  [k: string]: unknown | undefined;
}
