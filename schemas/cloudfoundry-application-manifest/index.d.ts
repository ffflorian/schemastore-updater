/* eslint-disable */

/**
 * Type of liveliness health check to perform; 'none' is deprecated and an alias to process. Default is 'port'.
 *
 * Liveness health checks are performed to validate that app instances are running. When liveness health checks fail, the app instance is marked as crashed and is restarted.
 */
export type HealthCheckType = 'port' | 'process' | 'http';
/**
 * Endpoint called to determine if the app is healthy when readiness-health-check-type='http'. Default is '/'.
 */
export type HealthCheckHTTPEndpoint = string;
/**
 * The timeout in seconds for individual health check requests for http and port health checks. Default is 1 (second).
 */
export type HealthCheckInvocationTimeout = number;
/**
 * The amount of time in seconds between starting individual health check requests for HTTP and port health checks. Default is 30 (seconds).
 */
export type HealthCheckInterval = number;
/**
 * Type of readiness health check to perform. Default is 'process'.
 *
 * Readiness health checks are performed to validate that app instances are ready to serve requests. When readiness health checks fail, the app instance is marked as not ready and removed from the route pool for the app.
 */
export type ReadinessHealthCheckType = 'port' | 'process' | 'http';
/**
 * Endpoint called to determine if the app is ready to serve requests when readiness-health-check-type='http'. Default is '/'.
 */
export type ReadinessHealthCheckHTTPEndpoint = string;
/**
 * The timeout in seconds for individual readiness health check requests for HTTP and port health checks. Default is 1 (second).
 */
export type ReadinessHealthCheckInvocationTimeout = number;
/**
 * The amount of time in seconds between starting individual readiness health check requests for HTTP and port health checks. Default is 30 (seconds).
 */
export type ReadinessHealthCheckInterval = number;
export type Service = ServiceClass | ServiceName;
export type ServiceName = string;

/**
 * A manifest describes a Cloud Foundry application and can be used to deploy it to a Foundation. For authoritative reference, see https://docs.cloudfoundry.org/devguide/deploy-apps/manifest-attributes.html.
 */
export interface CloudFoundryApplicationManifest {
  /**
   * The version of the manifest schema. Currently, the only valid version is 1.
   */
  version?: number;
  applications: Application[];
}
export interface Application {
  /**
   * Name of the app.
   */
  name: string;
  /**
   * `buildpacks` may contain:
   *
   * a) An empty array, which will automatically select the appropriate default buildpack according to the coding language;
   * b) An array of one or more URLs pointing to buildpacks;
   * c) An array of one or more installed buildpack names.
   */
  buildpacks?: string[];
  /**
   * The command used to start the process; this overrides start commands from Procfiles and buildpacks.
   */
  command?: string;
  /**
   * The disk limit for all instances of the web process. This attribute requires a unit of measurement: B, K, KB, M, MB, G, GB, T, or TB in upper case or lower case.
   */
  disk_quota?: string;
  docker?: Docker;
  env?: EnvironmentVariables;
  'health-check-type'?: HealthCheckType;
  'health-check-http-endpoint'?: HealthCheckHTTPEndpoint;
  'health-check-invocation-timeout'?: HealthCheckInvocationTimeout;
  'health-check-interval'?: HealthCheckInterval;
  'readiness-health-check-type'?: ReadinessHealthCheckType;
  'readiness-health-check-http-endpoint'?: ReadinessHealthCheckHTTPEndpoint;
  'readiness-health-check-invocation-timeout'?: ReadinessHealthCheckInvocationTimeout;
  'readiness-health-check-interval'?: ReadinessHealthCheckInterval;
  /**
   * The number of instances to run. Default is 1.
   */
  instances?: number;
  /**
   * The log-rate-limit-per-second attribute specifies the log rate limit for all instances of an app. This attribute requires a unit of measurement: B, K, KB, M, MB, G, or GB, in either uppercase or lowercase. Default is 16K.
   */
  'log-rate-limit-per-second'?: string;
  /**
   * The memory attribute specifies the memory limit for all instances of an app. This attribute requires a unit of measurement: M, MB, G, or GB, in either uppercase or lowercase. Default is 1G.
   */
  memory?: string;
  metadata?: Metadata;
  /**
   * When set to true, any routes specified with the `routes` attribute will be ignored and any existing routes will be removed. Default is false.
   */
  'no-route'?: boolean;
  /**
   * The path attribute tells Cloud Foundry the directory location in which it can find your app. The directory specified as the path, either as an attribute or as a parameter on the command line, becomes the location where the buildpack Detect script runs.
   */
  path?: string;
  /**
   * List of configurations for individual process types.
   */
  processes?: Process[];
  /**
   * Creates a random route for the app if true. If `routes` is specified, if the app already has routes, or if `no-route` is specified, this field is ignored regardless of its value. Default is false.
   */
  'random-route'?: boolean;
  /**
   * List declaring HTTP and TCP routes to be mapped to the app.
   */
  routes?: Route[];
  /**
   * Apps can bind to services such as databases, messaging, and key-value stores. The services block consists of a heading and one or more service instance names.
   */
  services?: Service[];
  /**
   * The sidecars attribute specifies additional processes to run in the same container as your app.
   */
  sidecars?: Sidecar[];
  /**
   * The root filesystem to use with the buildpack, for example cflinuxfs4.
   */
  stack?: string;
  /**
   * The duration in seconds that health checks can fail before the process is restarted. Default is 60 (seconds).
   */
  timeout?: number;
}
/**
 * If your app is contained in a Docker image, the docker attribute specifies it and an Docker user name (optional). This attribute is a combination of push options that include --docker-image and --docker-username.
 */
export interface Docker {
  image: string;
  username?: string;
}
/**
 * A key-value mapping of environment variables to be used for the app when running.
 */
export interface EnvironmentVariables {
  [k: string]: unknown | undefined;
}
/**
 * The metadata attribute tags your apps with additional information. You can specify two types of metadata: labels and annotations.
 */
export interface Metadata {
  annotations?: Annotations;
  labels?: Labels;
}
/**
 * Annotations allow you to add non-identifying metadata to Cloud Foundry resources. You cannot query based on annotations. Also, there are fewer restrictions for key-value pairs of annotations than there are for labels. For example, you can include contact information of persons responsible for the resource, or tool information for debugging purposes.
 */
export interface Annotations {
  [k: string]: unknown | undefined;
}
/**
 * Labels allow you to identify and select Cloud Foundry resources. For example, if you label all apps running in production or all spaces that contain Internet-facing apps, you can then search for them.
 */
export interface Labels {
  [k: string]: unknown | undefined;
}
/**
 * This configuration is for the individual process. Each process is created if it does not already exist. For backwards compatibility, the web process configuration may be placed at the top level of the application configuration, rather than listed under processes. However, if there is a process with type: web listed under processes, this configuration will override any at the top level.
 */
export interface Process {
  /**
   * The identifier for the processes to be configured.
   */
  type: string;
  /**
   * The command used to start the process; this overrides start commands from Procfiles and buildpacks.
   */
  command?: string;
  /**
   * The disk limit for all instances of the web process. This attribute requires a unit of measurement: B, K, KB, M, MB, G, GB, T, or TB in upper case or lower case.
   */
  disk_quota?: string;
  'health-check-type'?: HealthCheckType;
  'health-check-http-endpoint'?: HealthCheckHTTPEndpoint;
  'health-check-invocation-timeout'?: HealthCheckInvocationTimeout;
  'health-check-interval'?: HealthCheckInterval;
  'readiness-health-check-type'?: ReadinessHealthCheckType;
  'readiness-health-check-http-endpoint'?: ReadinessHealthCheckHTTPEndpoint;
  'readiness-health-check-invocation-timeout'?: ReadinessHealthCheckInvocationTimeout;
  'readiness-health-check-interval'?: ReadinessHealthCheckInterval;
  /**
   * The number of instances to run. Default is 1.
   */
  instances?: number;
  /**
   * The memory limit for all instances of the web process. This attribute requires a unit of measurement: B, K, KB, M, MB, G, GB, T, or TB in upper case or lower case.
   */
  memory?: string;
  /**
   * The log rate limit for all the instances of the process. This attribute requires a unit of measurement: B, K, KB, M, MB, G, GB, T, or TB in upper case or lower case, or -1 or 0.
   */
  'log-rate-limit-per-second'?: string;
  /**
   * Time in seconds at which the health-check will report failure. Default is 60 (seconds).
   */
  timeout?: number;
}
export interface Route {
  /**
   * The route URI. Example: host.domain.com.
   */
  route: string;
  /**
   * Protocol to use for this route.
   */
  protocol?: 'http2' | 'http1' | 'tcp';
}
export interface ServiceClass {
  /**
   * The name of the service instance to be bound to.
   */
  name: string;
  parameters?: ServiceParameters;
  /**
   * The name of the service binding to be created
   */
  binding_name?: string;
}
/**
 * A map of arbitrary key/value pairs to send to the service broker during binding.
 */
export interface ServiceParameters {
  [k: string]: unknown | undefined;
}
export interface Sidecar {
  /**
   * The identifier for the sidecars to be configured
   */
  name: string;
  /**
   * List of processes to associate sidecar with
   */
  process_types: string[];
  /**
   * The command used to start the sidecar
   */
  command: string;
  /**
   * Memory that the sidecar will be allocated
   */
  memory?: string;
}
