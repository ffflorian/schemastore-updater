/* eslint-disable */

/**
 * Defines a check, failure of which leads to the restart of the service
 */
export type Probe = {
  /**
   * (optional) the initial delay to wait before starting to probe in seconds
   */
  initialDelay?: number;
  /**
   * (optional) the time in seconds to wait for an http response for each call to the probe endpoint
   */
  timeout?: number;
  /**
   * (optional) the number of times the probe is allowed to fail the health check before performing its duty (e.g., recreating a pod or marking a pod as unavailable)
   */
  failureThreshold?: number;
  /**
   * (optional) the number of times the probe has to pass the health check before performing its duty (e.g., marking a pod as available)
   */
  successThreshold?: number;
  [k: string]: unknown | undefined;
} & (
  | {
      /**
       * the url-path to http-GET for the check.
       */
      path: string;
      /**
       * the port on which to http-GET the path for checking this service
       */
      port: string;
      /**
       * (optional) the scheme used for the probe HTTP or HTTPS defaults to HTTP
       */
      scheme?: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * the port on which to tcp checking this service
       */
      tcpSocket: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * list of probe commands
       */
      commands: {
        /**
         * argument
         */
        arg?: string;
        [k: string]: unknown | undefined;
      }[];
      [k: string]: unknown | undefined;
    }
);
/**
 * A startup probe indicates whether the application within a container is started. All other probes are disabled until the startup succeeds
 */
export type Probe1 = {
  /**
   * (optional) the initial delay to wait before starting to probe in seconds
   */
  initialDelay?: number;
  /**
   * (optional) the time in seconds to wait for an http response for each call to the probe endpoint
   */
  timeout?: number;
  /**
   * (optional) the number of times the probe is allowed to fail the health check before performing its duty (e.g., recreating a pod or marking a pod as unavailable)
   */
  failureThreshold?: number;
  /**
   * (optional) the number of times the probe has to pass the health check before performing its duty (e.g., marking a pod as available)
   */
  successThreshold?: number;
  [k: string]: unknown | undefined;
} & (
  | {
      /**
       * the url-path to http-GET for the check.
       */
      path: string;
      /**
       * the port on which to http-GET the path for checking this service
       */
      port: string;
      /**
       * (optional) the scheme used for the probe HTTP or HTTPS defaults to HTTP
       */
      scheme?: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * the port on which to tcp checking this service
       */
      tcpSocket: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * list of probe commands
       */
      commands: {
        /**
         * argument
         */
        arg?: string;
        [k: string]: unknown | undefined;
      }[];
      [k: string]: unknown | undefined;
    }
);
/**
 * Defines a check, failure of which leads to the service not receiving any requests
 */
export type Probe2 = {
  /**
   * (optional) the initial delay to wait before starting to probe in seconds
   */
  initialDelay?: number;
  /**
   * (optional) the time in seconds to wait for an http response for each call to the probe endpoint
   */
  timeout?: number;
  /**
   * (optional) the number of times the probe is allowed to fail the health check before performing its duty (e.g., recreating a pod or marking a pod as unavailable)
   */
  failureThreshold?: number;
  /**
   * (optional) the number of times the probe has to pass the health check before performing its duty (e.g., marking a pod as available)
   */
  successThreshold?: number;
  [k: string]: unknown | undefined;
} & (
  | {
      /**
       * the url-path to http-GET for the check.
       */
      path: string;
      /**
       * the port on which to http-GET the path for checking this service
       */
      port: string;
      /**
       * (optional) the scheme used for the probe HTTP or HTTPS defaults to HTTP
       */
      scheme?: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * the port on which to tcp checking this service
       */
      tcpSocket: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * list of probe commands
       */
      commands: {
        /**
         * argument
         */
        arg?: string;
        [k: string]: unknown | undefined;
      }[];
      [k: string]: unknown | undefined;
    }
);
export type TemplateParameterReference = string;
/**
 * Host entries added to /etc/hosts file
 */
export type HostAliases = {
  /**
   * IP of the hostalias
   */
  ip?: string;
  hostnames?: {
    /**
     * Hostname
     */
    hostname?: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}[];
/**
 * Label for a desired node selector
 */
export type NodeSelector = {
  /**
   * nodeSelector key
   */
  key?: string;
  /**
   * nodeSelector value
   */
  value?: string;
  [k: string]: unknown | undefined;
} & unknown[];
/**
 * podAntiAffinity
 */
export type PodAntiAffinity = {
  /**
   * podAntiAffinity key
   */
  key?: string;
  /**
   * podAntiAffinity operator
   */
  operator?: string;
  /**
   * podAntiAffinity values
   */
  values?: string[];
  /**
   * podAntiAffinity topologyKey
   */
  topologyKey?: string;
  [k: string]: unknown | undefined;
} & unknown[];
/**
 * ports exposed by the service
 */
export type PortOverride = (
  | number
  | {
      /**
       * port number exposed by the container
       */
      port?: number;
      /**
       * port number exposed to clients (service port). If omitted implicitly equal to the port
       */
      externalPort?: number;
      /**
       * port number exposed on the Kubernetes cluster nodes. This generates a separate Service of type NodePort, if set.
       */
      nodePort?: number | TemplateParameterReference;
      /**
       * name of the port
       */
      portLabel?: string;
      [k: string]: unknown | undefined;
    }
)[];
/**
 * configuration files to be mapped into the pod
 */
export type ConfigFiles = {
  /**
   * name of the source file
   */
  source?: string;
  /**
   * name & path of the file inside the container
   */
  target?: string;
  /**
   * Whether the file is binary. Needed for kubernetes environments so that binaryData is used in the ConfigMap.
   */
  isBinaryFile?: boolean;
  [k: string]: unknown | undefined;
}[];
/**
 * secret files to be mounted in the pod
 */
export type SecretFiles = {
  /**
   * Name of the secret to be mounted. If no key and target specified, all the items of the secret will be mounted in the mount path.
   */
  secret: string;
  /**
   * Mount path in the target service-container where the secret files will be available.
   */
  mountPath: string;
  /**
   * (Optional) Specifies the use of a single item of the secret identified by its key.
   */
  key?: string;
  /**
   * (Optional) When using a specific secret item, then target file name needs to be specified.
   */
  target?: string;
  [k: string]: unknown | undefined;
}[];
/**
 * Volumes claimed by the service - these are usable cluster environments as well as docker-compose
 */
export type Volumes = {
  /**
   * existing pvc Name that is already existing on openshift
   */
  persistentVolumeClaimName?: string;
  /**
   * path onto which the volume will be mounted
   */
  path: string;
  /**
   * the requested size of the volume in Mega- or Giga-Byte. If this is specified, it will generate a volume-claim, if not an anonymous volume of type emptyDir will be created
   */
  size?: string;
  /**
   * whether or not the volume can be mounted by multiple nodes, generates a global volume for docker-compose environments
   */
  shared?: boolean;
  [k: string]: unknown | undefined;
}[];
export type Expose = Exposure | Exposure[];

/**
 * Definition of an application environment
 */
export interface EnvironmentDefinition {
  /**
   * the name of the application-(component) defined by this environment
   */
  app: string;
  /**
   * configuration sets, which can be referenced from the service definitions
   */
  'config-set'?: {
    [k: string]: ServiceConfiguration | undefined;
  };
  /**
   * list of services which are part of this environment
   */
  services?: (ServiceConfiguration1 & {
    /**
     * a convenient name, unique within the environment.
     */
    alias: string;
    /**
     * the name of the service, usually prefixed by the environment name to continue the historic way of supporting plain docker/docker-compose environments
     */
    name: string;
    /**
     * the hostname of the docker-container, to override the automatic created hostnames for docker-compose environments
     */
    hostname?: string;
    /**
     * the external name of the service, this is usually a DNS name for an external service, e.g. api.google.com
     */
    'external-name'?: string;
    /**
     * URL of the docker registry containing the services image
     */
    image?: string;
    /**
     * list of configuration sets to be applied to this service
     */
    'config-sets'?: string[];
    /**
     * Additional properties for routes
     */
    'exposed-route'?: {
      /**
       * the timeout in minutes or seconds (e.g. 10m, 10s)
       */
      timeout?: string;
      /**
       * the target path for url rewrites (replaces the entry path of the route)
       */
      'rewrite-target'?: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  })[];
  [k: string]: unknown | undefined;
}
/**
 * A set of service-configurations applied to several services in the same way.
 */
export interface ServiceConfiguration {
  /**
   * List of environment variables set in the Container/Pod
   */
  environment?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]:
      | {
          /**
           * the name of the secret to reference
           */
          keyRefName?: string;
          /**
           * the (entry) key of the referenced secret
           */
          key?: string;
        }
      | string
      | number
      | boolean;
  };
  /**
   * The entrypoint that is used to start the image (Only works with docker-compose and OpenShift
   */
  entrypoint?: string;
  additionalLabels?: {
    deployment?: Labels;
    service?: Labels1;
  };
  liveness?: Probe;
  startup?: Probe1;
  readiness?: Probe2;
  /**
   * How to roll out changed versions of the service (Recreate or Rolling)
   */
  deploymentStrategy?: {
    type?: 'Rolling' | 'Recreate';
    params?: {
      /**
       * Number of seconds to wait between pod updates
       */
      updatePeriodSeconds?: number;
      /**
       * Number of seconds to wait between evaluations of the deployment status
       */
      intervalSeconds?: number;
      /**
       * Time to wait for a successful scale-up before rolling back to the previous deployment
       */
      timeoutSeconds?: number | TemplateParameterReference;
      /**
       * Maximum temporary excess number of pods above the desired number of replicas
       */
      maxSurge?: number | TemplateParameterReference;
      /**
       * Maximum temporarily lacking pods compared to the desired number of replicas
       */
      maxUnavailable?: number | TemplateParameterReference;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * true, if this service needs a database schema to persist information.
   */
  needsDbSchema?: boolean;
  /**
   * Image pull policy for openshift. Default: IfNotPresent
   */
  'pull-policy'?: 'IfNotPresent' | 'Always';
  /**
   * The service account to use for Openshift.
   */
  'service-account'?: string;
  /**
   * The name of the service account to use for Openshift.
   */
  'service-account-name'?: string;
  'host-aliases'?: HostAliases;
  /**
   * Number of desired instances.
   */
  replicas?: number | string | TemplateParameterReference;
  resources?: ResourceSpec;
  deploymentResources?: ResourceSpec1;
  nodeSelector?: NodeSelector;
  /**
   * Tolerations section for Openshift
   */
  tolerations?: Toleration[];
  podAntiAffinity?: PodAntiAffinity;
  'port-override'?: PortOverride;
  /**
   * marks this service as 'network load-balanced'. On AWS this is a simple alternative to setting up a router and ingresses, which is the preferred method.
   */
  nlb?: boolean;
  'config-files'?: ConfigFiles;
  'secret-files'?: SecretFiles;
  volumes?:
    | Volumes
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Custom data object which will be passed as is into the render context
   */
  customData?: {
    [k: string]: unknown | undefined;
  };
  expose?: Expose;
  'template-parameters'?: TemplateParameter[];
  'external-port'?: number;
  'external-ip'?: string;
  /**
   * (K8s/OpenShift only) Indicates whether a service account token should be mounted
   */
  disableAutomountServiceAccountToken?: boolean;
  /**
   * (K8s/OpenShift only) Indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links
   */
  disableServiceLinks?: boolean;
  /**
   * (K8s/OpenShift only) The number of old ReplicationControllers to retain to allow for rollbacks
   */
  revisionHistoryLimit?: number;
  [k: string]: unknown | undefined;
}
/**
 * List of labels for deployments
 */
export interface Labels {
  /**
   * This interface was referenced by `Labels`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Labels1`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string;
}
/**
 * List of labels for services
 */
export interface Labels1 {
  /**
   * This interface was referenced by `Labels`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   *
   * This interface was referenced by `Labels1`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]: string;
}
/**
 * Specifies resource usage of a container instance
 */
export interface ResourceSpec {
  limits?: Resources;
  requests?: Resources1;
  [k: string]: unknown | undefined;
}
/**
 * Upper limits of resources available to a container instance
 */
export interface Resources {
  /**
   * The number of cores, can be specified as integer cores, or in milli-cores (eg: '100m')
   */
  cpu: TemplateParameterReference;
  /**
   * The amount of main memory in either of M,G (base 10) or Mi, Gi (base 2). (eg: '3Gi')
   */
  memory: TemplateParameterReference;
  [k: string]: unknown | undefined;
}
/**
 * Amount of resources necessary to run a container instance. Must be less than limits.
 */
export interface Resources1 {
  /**
   * The number of cores, can be specified as integer cores, or in milli-cores (eg: '100m')
   */
  cpu: TemplateParameterReference;
  /**
   * The amount of main memory in either of M,G (base 10) or Mi, Gi (base 2). (eg: '3Gi')
   */
  memory: TemplateParameterReference;
  [k: string]: unknown | undefined;
}
/**
 * Specifies resource usage of a deployment container instance
 */
export interface ResourceSpec1 {
  limits?: Resources;
  requests?: Resources1;
  [k: string]: unknown | undefined;
}
export interface Toleration {
  /**
   * Toleration key. The key is any string, up to 253 characters. The key must begin with a letter or number, and may contain letters, numbers, hyphens, dots, and underscores.
   */
  key?: string;
  /**
   * Toleration operator. The operator is one of the following: Equal or Exists
   */
  operator?: string;
  /**
   * Toleration value. The value is any string, up to 63 characters. The value must begin with a letter or number, and may contain letters, numbers, hyphens, dots, and underscores.
   */
  value?: string;
  /**
   * Toleration effect. The effect is one of the following: NoSchedule, PreferNoSchedule or NoExecute
   */
  effect?: string;
  [k: string]: unknown | undefined;
}
/**
 * defines, which endpoints, if any, to expose to the outside of the cluster
 */
export interface Exposure {
  /**
   * The host to be used for this exposure, the global cluster host is the default.
   */
  hostname?: string;
  /**
   * list of paths (path-beginnings) to be routed to this service
   */
  path: string[];
  /**
   * the internal port of the service that exposes the path
   */
  port?: number;
  /**
   * TLS termination on OpenShift
   */
  'tls-termination'?: 'edge' | 'passthrough' | 'reencrypt';
  [k: string]: unknown | undefined;
}
export interface TemplateParameter {
  name: string;
  value: string;
  description: string;
  [k: string]: unknown | undefined;
}
export interface ServiceConfiguration1 {
  /**
   * List of environment variables set in the Container/Pod
   */
  environment?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]:
      | {
          /**
           * the name of the secret to reference
           */
          keyRefName?: string;
          /**
           * the (entry) key of the referenced secret
           */
          key?: string;
        }
      | string
      | number
      | boolean;
  };
  /**
   * The entrypoint that is used to start the image (Only works with docker-compose and OpenShift
   */
  entrypoint?: string;
  additionalLabels?: {
    deployment?: Labels;
    service?: Labels1;
  };
  liveness?: Probe;
  startup?: Probe1;
  readiness?: Probe2;
  /**
   * How to roll out changed versions of the service (Recreate or Rolling)
   */
  deploymentStrategy?: {
    type?: 'Rolling' | 'Recreate';
    params?: {
      /**
       * Number of seconds to wait between pod updates
       */
      updatePeriodSeconds?: number;
      /**
       * Number of seconds to wait between evaluations of the deployment status
       */
      intervalSeconds?: number;
      /**
       * Time to wait for a successful scale-up before rolling back to the previous deployment
       */
      timeoutSeconds?: number | TemplateParameterReference;
      /**
       * Maximum temporary excess number of pods above the desired number of replicas
       */
      maxSurge?: number | TemplateParameterReference;
      /**
       * Maximum temporarily lacking pods compared to the desired number of replicas
       */
      maxUnavailable?: number | TemplateParameterReference;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * true, if this service needs a database schema to persist information.
   */
  needsDbSchema?: boolean;
  /**
   * Image pull policy for openshift. Default: IfNotPresent
   */
  'pull-policy'?: 'IfNotPresent' | 'Always';
  /**
   * The service account to use for Openshift.
   */
  'service-account'?: string;
  /**
   * The name of the service account to use for Openshift.
   */
  'service-account-name'?: string;
  'host-aliases'?: HostAliases;
  /**
   * Number of desired instances.
   */
  replicas?: number | string | TemplateParameterReference;
  resources?: ResourceSpec;
  deploymentResources?: ResourceSpec1;
  nodeSelector?: NodeSelector;
  /**
   * Tolerations section for Openshift
   */
  tolerations?: Toleration[];
  podAntiAffinity?: PodAntiAffinity;
  'port-override'?: PortOverride;
  /**
   * marks this service as 'network load-balanced'. On AWS this is a simple alternative to setting up a router and ingresses, which is the preferred method.
   */
  nlb?: boolean;
  'config-files'?: ConfigFiles;
  'secret-files'?: SecretFiles;
  volumes?:
    | Volumes
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Custom data object which will be passed as is into the render context
   */
  customData?: {
    [k: string]: unknown | undefined;
  };
  expose?: Expose;
  'template-parameters'?: TemplateParameter[];
  'external-port'?: number;
  'external-ip'?: string;
  /**
   * (K8s/OpenShift only) Indicates whether a service account token should be mounted
   */
  disableAutomountServiceAccountToken?: boolean;
  /**
   * (K8s/OpenShift only) Indicates whether information about services should be injected into pod's environment variables, matching the syntax of Docker links
   */
  disableServiceLinks?: boolean;
  /**
   * (K8s/OpenShift only) The number of old ReplicationControllers to retain to allow for rollbacks
   */
  revisionHistoryLimit?: number;
  [k: string]: unknown | undefined;
}
