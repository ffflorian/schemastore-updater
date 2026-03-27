/* eslint-disable */

/**
 * A list of hooks that will be executed for the MTA.
 */
export type Hooks = {
  /**
   * An internal name which can be used for documentation purposes and shown by the deployer.
   */
  name: string;
  /**
   * Defines the type of action that should be executed by the deployer.
   */
  type: 'task';
  /**
   * A list of strings that define the points at which the hook must be executed.
   */
  phases?: (
    | 'deploy.application.before-stop'
    | 'blue-green.application.before-stop.idle'
    | 'blue-green.application.before-stop.live'
    | 'deploy.application.after-stop'
    | 'blue-green.application.after-stop.idle'
    | 'blue-green.application.after-stop.live'
    | 'deploy.application.before-unmap-routes'
    | 'blue-green.application.before-unmap-routes.live'
    | 'blue-green.application.before-unmap-routes.idle'
    | 'deploy.application.before-start'
    | 'blue-green.application.before-start.idle'
    | 'blue-green.application.before-start.live'
  )[];
  parameters?: HooksParameters;
  'parameters-metadata'?: PropertiesMetadata1;
  /**
   * List of names either matching a resource name or a provided dependency name provided within the same MTA that are required by this hook.
   */
  requires?: {
    /**
     * An MTA internal name which must match either a provided name, or a resource name within the same MTA.
     */
    name: string;
    /**
     * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the hook at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
     */
    parameters?: {
      [k: string]: unknown | undefined;
    };
    'parameters-metadata'?: PropertiesMetadata2;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}[];
/**
 * Configuration parameters that are used when deploying the module to the target runtime environment.
 */
export type ModuleParameters = ModuleParametersCf | ModuleParametersXsa | ModuleParametersCfXsa;
/**
 * [CF] An array of buildpacks. If a buildpack parameter already exists, it will be overwritten by the buildpacks listed in the buildpacks parameter.
 */
export type ModuleParametersBuildpacks = string[];
/**
 * [CF] The domains on which the idle application will be available during blue-green deploy.
 */
export type ModuleParametersDomains = string[];
/**
 * [CF] The hostnames or subdomain where the idle application will be available during blue-green deploy.
 */
export type ModuleParametersHosts = string[];
/**
 * [CF] Valid for blue-green deployment with temporary routes.
 */
export type ModuleParametersIdleRoutes = {
  'idle-route': string;
  [k: string]: unknown | undefined;
}[];
/**
 * [CF/XSA] Restart app if environment variables change.
 */
export type ModuleParametersRestartOnEnvChange = {
  /**
   * Restart on vcap-application env change
   */
  'vcap-application'?: boolean;
  /**
   * Restart on vcap-services env change
   */
  'vcap-services'?: boolean;
  /**
   * Restart on user-provided env change
   */
  'user-provided'?: boolean;
  [k: string]: unknown | undefined;
}[];
/**
 * [CF/XSA] A parameter that lists multiple HTTP routes.
 */
export type ModuleParametersRoutes = {
  route: string;
  protocol?: ('http1' | 'http2') & string;
  'no-hostname'?: boolean;
  /**
   * [CF] Apply namespace to application routes.
   */
  'apply-namespace'?: boolean;
  [k: string]: unknown | undefined;
}[];
/**
 * [CF/XSA] Specify tasks available for execution in the current droplet of the application.
 */
export type ModuleParametersTasks = {
  /**
   * [CF/XSA] The task name.
   */
  name: string;
  /**
   * [CF/XSA] The command to be executed.
   */
  command: string;
  /**
   * [CF/XSA] Defines the memory that is available to the Cloud Foundry task.
   */
  memory?: string;
  /**
   * [CF/XSA] Defines the disk space that is available to the Cloud Foundry task.
   */
  'disk-quota'?: string;
  [k: string]: unknown | undefined;
}[];
/**
 * List of names either matching a resource name or a name provided by another module within the same MTA that are required by this module.
 */
export type ModuleRequires = {
  /**
   * An MTA internal name which must match either a provided name, a resource name, or a module name within the same MTA.
   */
  name: string;
  /**
   * All required and found configuration data sets will be assembled into a JSON array and provided to the module by the lookup name as specified by the value of 'list'.
   */
  list?: string;
  /**
   * Required properties can be mapped from provided properties. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  'properties-metadata'?: PropertiesMetadata5;
  parameters?: ModuleRequiresParameters;
  'parameters-metadata'?: PropertiesMetadata6;
  [k: string]: unknown | undefined;
}[];
/**
 * List of provided names (MTA internal) to which properties can be attached
 */
export type ModuleProvides = {
  /**
   * An MTA internal name which can used by a requiring module.
   */
  name: string;
  /**
   * Indicates, that the provided properties shall be made publicly available by the deployer. Default value is false.
   */
  public?: boolean;
  /**
   * Property names and values make up the configuration data which is to be provided to requiring modules at runtime
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  'properties-metadata'?: PropertiesMetadata7;
  parameters?: ModuleProvidesParameters;
  'parameters-metadata'?: PropertiesMetadata8;
  [k: string]: unknown | undefined;
}[];
/**
 * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to requiring modules at runtime. Untyped resources cannot have parameters.
 */
export type ResourceParameters = ResourceParametersCf | ResourceParametersCfXsa | ResourceParametersXsa;
/**
 * List of names either matching a resource name or a name provided by another resource within the same MTA that are required by this resource.
 */
export type ResourceRequires = {
  /**
   * An MTA internal name which must match either a provided name, or a resource name within the same MTA.
   */
  name: string;
  /**
   * Required properties can be mapped from provided properties. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  'properties-metadata'?: PropertiesMetadata11;
  /**
   * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the resource at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
   */
  parameters?: {
    [k: string]: unknown | undefined;
  };
  'parameters-metadata'?: PropertiesMetadata12;
  [k: string]: unknown | undefined;
}[];

/**
 * MTA deployment descriptor schema v3.3. Contains Cloud Foundry and XSA specific types and parameters.
 */
export interface MtadYamlV33 {
  /**
   * Used to indicate to an MTA processing tool (e.g. a deployer), which schema version was taken as the base when authoring a descriptor.
   */
  '_schema-version': string;
  /**
   * A globally unique ID of this MTA. Unlimited string of unicode characters.
   */
  ID: string;
  /**
   * Application version. Shall follow the semantic versioning standard.
   */
  version: string;
  /**
   * A non-translatable description of this MTA. This is not a text for application users.
   */
  description?: string;
  /**
   * The provider or vendor of this software.
   */
  provider?: string;
  /**
   * A copyright statement from the provider.
   */
  copyright?: string;
  /**
   * Global parameters related to the MTA application.
   */
  parameters?: {
    /**
     * Apply namespace to application names, service names and application routes.
     */
    'apply-namespace'?: ApplyNamespaceValues[];
    /**
     * [CF] Defines how long, in seconds, your application can take during staging before the MTA operation times out.
     */
    'apps-stage-timeout'?: number;
    /**
     * [CF] Defines how long, in seconds, your application can take to start before the MTA operation times out.
     */
    'apps-start-timeout'?: number;
    /**
     * [CF] Defines how long, in seconds, your application can take to execute a task before the MTA operation times out
     */
    'apps-task-execution-timeout'?: number;
    /**
     * [CF] Defines how long, in seconds, you can upload your application binary before the MTA operation times out.
     */
    'apps-upload-timeout'?: number;
    /**
     * [CF/XSA] Defines if parallel deployment of modules is enabled. When enabled, modules without explicitly set deployed-after parameter are deployed in parallel.
     */
    'enable-parallel-deployments'?: boolean;
    /**
     * [CF/XSA] Indicates if the existing routes of all applications within that MTA should be kept.
     */
    'keep-existing-routes'?: boolean;
    /**
     * [CF] Enables dependency-aware stop ordering during the final phase of blue-green deployments.
     */
    'bg-dependency-aware-stop-order'?: boolean;
    [k: string]: unknown | undefined;
  };
  'parameters-metadata'?: PropertiesMetadata;
  hooks?: Hooks;
  /**
   * A list of modules to be deployed by the MTA application.
   */
  modules?: {
    /**
     * The module name which must be unique and cannot be the same as any provided property set or resource name.
     */
    name: string;
    /**
     * The module type that defines the design-time tools for the module.
     */
    type: (
      | 'application'
      | 'binary'
      | 'business-logging'
      | 'com.sap.application.content'
      | 'com.sap.html5.application-content'
      | 'com.sap.portal.site-content'
      | 'com.sap.xs.hdi'
      | 'com.sap.xs.hdi-dynamic'
      | 'com.sap.xs.hdi-zdm'
      | 'com.sap.xs.sds'
      | 'com.sap.xs.dwf'
      | 'javascript.nodejs'
      | 'nodejs'
      | 'native'
      | 'custom'
      | 'java'
      | 'java.tomcat'
      | 'java.tomee'
      | 'python'
      | 'ruby'
      | 'go'
      | 'php'
      | 'dotnet_core'
      | 'staticfile'
      | string
    ) &
      string;
    /**
     * A free text describing this module.
     */
    description?: string;
    /**
     * The path to a folder that contains the module artifacts.
     */
    path?: string;
    /**
     * A list containing the names of the modules that must be deployed prior to this one.
     */
    'deployed-after'?: string[];
    /**
     * A collection of key-value pairs that are available to the module at runtime.
     */
    properties?: {
      [k: string]: unknown | undefined;
    };
    'properties-metadata'?: PropertiesMetadata3;
    parameters?: ModuleParameters;
    'parameters-metadata'?: PropertiesMetadata4;
    hooks?: Hooks;
    requires?: ModuleRequires;
    provides?: ModuleProvides;
    [k: string]: unknown | undefined;
  }[];
  /**
   * A list of resources to be deployed by the MTA application.
   */
  resources?: {
    /**
     * The resource name which must be unique and cannot be the same as any provided property set or resource name.
     */
    name: string;
    /**
     * The resource type that defines the design-time tools for the resource.
     */
    type?: (
      | (
          | 'org.cloudfoundry.managed-service'
          | 'org.cloudfoundry.existing-service'
          | 'org.cloudfoundry.existing-service-key'
          | 'org.cloudfoundry.user-provided-service'
          | 'configuration'
        )
      | string
    ) &
      string;
    /**
     * If a resource is declared to be active, it is allocated and bound according to declared requirements. Default value is true.
     */
    active?: boolean;
    /**
     * A resource can be declared to be optional, if the MTA can compensate for its non-existence. Default value is false.
     */
    optional?: boolean;
    /**
     * A free text describing this resource.
     */
    description?: string;
    /**
     * A list containing the names of the resources that must be processed prior to this one.
     */
    'processed-after'?: string[];
    /**
     * Property names and values make up the configuration data which is to be provided to requiring modules at runtime.
     */
    properties?: {
      [k: string]: unknown | undefined;
    };
    'properties-metadata'?: PropertiesMetadata9;
    parameters?: ResourceParameters;
    'parameters-metadata'?: PropertiesMetadata10;
    hooks?: Hooks;
    requires?: ResourceRequires;
    [k: string]: unknown | undefined;
  }[];
  /**
   * A list of custom module type definitions that will be used by the MTA application.
   */
  'module-types'?: {
    /**
     *  An MTA internal name of the module type that will be specified in the 'type' element of modules consuming it.
     */
    name: string;
    /**
     * The name of the extended type. Can be another module type defined in this descriptor or one of the default types supported by the deployer.
     */
    extends: string;
    /**
     * A collection of key-value pairs that will be inherited by all modules of this type.
     */
    properties?: {
      [k: string]: unknown | undefined;
    };
    'properties-metadata'?: PropertiesMetadata13;
    /**
     * Configuration parameters that will be inherited in all modules of this type.
     */
    parameters?: {
      [k: string]: unknown | undefined;
    };
    'parameters-metadata'?: PropertiesMetadata14;
    [k: string]: unknown | undefined;
  }[];
  /**
   * A list of custom resource type definitions that will be used by the MTA application.
   */
  'resource-types'?: {
    /**
     *  An MTA internal name of the resource type that will be specified in the 'type' element of resources consuming it.
     */
    name: string;
    /**
     * The name of the extended type. Can be another resource type defined in this descriptor or one of the default types supported by the deployer.
     */
    extends: string;
    /**
     * A collection of key-value pairs that will be inherited by all resources of this type.
     */
    properties?: {
      [k: string]: unknown | undefined;
    };
    'properties-metadata'?: PropertiesMetadata15;
    /**
     * Configuration parameters that will be inherited in all resources of this type.
     */
    parameters?: {
      [k: string]: unknown | undefined;
    };
    'parameters-metadata'?: PropertiesMetadata16;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
export interface ApplyNamespaceValues {
  /**
   * Apply namespace to application names.
   */
  'app-names'?: boolean;
  /**
   * Apply namespace to service names.
   */
  'service-names'?: boolean;
  /**
   * Apply namespace to application routes.
   */
  'app-routes'?: boolean;
  /**
   * Apply namespace as suffix.
   */
  'as-suffix'?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the MTA's parameters.
 */
export interface PropertiesMetadata {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Configuration parameters that are used when executing the hook to the target runtime environment.
 */
export interface HooksParameters {
  /**
   * Defines the name of the Cloud Foundry task that should be executed.
   */
  name?: string;
  /**
   * Defines the actual command that is executed as a Cloud Foundry task.
   */
  command: string;
  /**
   * [CF/XSA] Defines the memory that is available to the Cloud Foundry task.
   */
  memory?: string;
  /**
   * [CF/XSA] Defines the disk space that is available to the Cloud Foundry task.
   */
  'disk-quota'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the hook's parameters.
 */
export interface PropertiesMetadata1 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the hook's parameters.
 */
export interface PropertiesMetadata2 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the module's properties.
 */
export interface PropertiesMetadata3 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface ModuleParametersCf {
  'app-features'?: ModuleParametersAppFeatures;
  /**
   * [CF] Apply namespace to application name.
   */
  'apply-namespace'?: boolean;
  buildpacks?: ModuleParametersBuildpacks;
  /**
   * [CF] Specifies whether a service broker should be registered for the application module; default value is: false.
   */
  'create-service-broker'?: boolean;
  docker?: ModuleParametersDocker;
  /**
   * [CF] Enables or disables the parallel binding or unbinding of services during deployment.
   */
  'enable-parallel-service-bindings'?: boolean;
  /**
   * [CF] The timeout in seconds for individual health check requests for http and port health checks.
   */
  'health-check-invocation-timeout'?: number;
  /**
   * [CF] The idle domain on which the idle application will be available during blue-green deploy.
   */
  'idle-domain'?: string;
  'idle-domains'?: ModuleParametersDomains;
  /**
   * [CF] The hostname or subdomain where the idle application will be available during blue-green deploy.
   */
  'idle-host'?: string;
  'idle-hosts'?: ModuleParametersHosts;
  'idle-routes'?: ModuleParametersIdleRoutes;
  'keep-existing'?: ModuleParametersKeepExisting;
  /**
   * [CF] The endpoint called to determine if the app is ready for HTTP checks.
   */
  'readiness-health-check-http-endpoint'?: string;
  /**
   * [CF] Interval in seconds between individual readiness health check requests.
   */
  'readiness-health-check-interval'?: number;
  /**
   * [CF] Timeout in seconds for individual readiness health check requests.
   */
  'readiness-health-check-invocation-timeout'?: number;
  /**
   * [CF] The type of health check to be performed on the module: http, port, or process.
   */
  'readiness-health-check-type'?: 'port' | 'http' | 'process';
  /**
   * [CF] Timeout in seconds for executing a task.
   */
  'task-execution-timeout'?: number;
  /**
   * [CF] Timeout in seconds for uploading application binary.
   */
  'upload-timeout'?: number;
  /**
   * [CF] Skip the deployment of the application.
   */
  'skip-deploy'?: boolean;
  /**
   * [CF] Defines which prebuilt root file system (rootfs) to use.
   */
  stack?: string;
  /**
   * [CF] Defines staging timeout in seconds.
   */
  'stage-timeout'?: number;
  /**
   * [CF] Defines start timeout in seconds.
   */
  'start-timeout'?: number;
  [k: string]: unknown | undefined;
}
/**
 * [CF] A set of features that can be enabled for the application module (This is not applicable for module type com.sap.application.content). The features are not mandatory and can be used to enable additional functionality for the application.
 */
export interface ModuleParametersAppFeatures {
  /**
   * Enable SSH access to the application.
   */
  ssh?: boolean;
  /**
   * Enable file-based VCAP service bindings for the app.
   */
  'file-based-vcap-services'?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * [CF] Creates a module from a docker image. When using a docker image parameter, the module content is not needed.
 */
export interface ModuleParametersDocker {
  /**
   * An image parameter is a docker image from the Docker Hub or somewhere else. eg. cloudfoundry/test-app
   */
  image?: string;
  /**
   * The username is optional, but if a Docker image from a private repository is uploaded, then it is mandatory.
   */
  username?: string;
  /**
   * The password is optional, but if a Docker image from a private repository is uploaded, then it is mandatory.
   */
  password?: string;
  [k: string]: unknown | undefined;
}
/**
 * [CF] Defines application attributes kept after deployment or blue-green deployment.
 */
export interface ModuleParametersKeepExisting {
  /**
   * Keep the existing environment
   */
  env?: boolean;
  /**
   * Keep the existing Service bindings
   */
  'service-bindings'?: boolean;
  /**
   * Keep the existing routes
   */
  routes?: boolean;
  [k: string]: unknown | undefined;
}
export interface ModuleParametersXsa {
  /**
   * [XSA] Check the deployment (process) id when checking the application execution status
   */
  'check-deploy-id'?: boolean;
  /**
   * [XSA] After start and upon completion, application sets [success | failure]-marker in a log message
   */
  'execute-app'?: boolean;
  /**
   * [XSA] The failure marker in the log files for application execution.
   */
  'failure-marker'?: string;
  /**
   * [XSA] Overwrite the default port of application.
   */
  port?: number;
  /**
   * [XSA] Overwrite the default ports of application.
   *
   * @minItems 1
   */
  ports?: [number, ...number[]];
  /**
   * [XSA] Stop the application after execution.
   */
  'stop-app'?: boolean;
  /**
   * [XSA] The success marker in logfiles for application execution.
   */
  'success-marker'?: string;
  /**
   * [XSA] Use TCP type routes for all application routes if there is domains parameters with multiple values.
   */
  tcp?: boolean;
  /**
   * [XSA] Create a TCPS route (and use TLS with SSL termination at the platform router) for all app routes where there are 'hosts' and domains parameters with multiple values.
   */
  tcps?: boolean;
  /**
   * [XSA] Run blue-green deployment in zero-downtime-maintenance mode
   */
  'zdm-mode'?: boolean;
  [k: string]: unknown | undefined;
}
export interface ModuleParametersCfXsa {
  /**
   * [CF/XSA] The name of the application in the Cloud Foundry environment to be deployed for this module, based on the module name.
   */
  'app-name'?: string;
  /**
   * [CF/XSA] The name or URL of a custom buildpack required by the application.
   */
  buildpack?: string;
  /**
   * [CF/XSA] A custom command required to start the application.
   */
  command?: string;
  /**
   * [CF/XSA] Defines the dependency type.
   */
  'dependency-type'?: 'hard' | 'soft';
  /**
   * [CF/XSA] The disk space that will be available to the application.
   */
  'disk-quota'?: string;
  /**
   * [CF/XSA] The domain on which the application will be available later.
   */
  domain?: string;
  domains?: ModuleParametersDomains;
  /**
   * [CF/XSA] Enables use of SSH within an application.
   */
  'enable-ssh'?: boolean;
  /**
   * [CF/XSA] Defines how the module will be monitored for availability.
   */
  'health-check-type'?: 'port' | 'process' | 'http';
  /**
   * [CF/XSA] The timeout between starting an app and the first healthy response.
   */
  'health-check-timeout'?: number;
  /**
   * [CF/XSA] The hostname or subdomain where an application is available later.
   */
  host?: string;
  hosts?: ModuleParametersHosts;
  /**
   * [CF/XSA] The number of application instances that will be started during deployment.
   */
  instances?: number;
  /**
   * [CF/XSA] Keep existing routes even if not defined within the descriptors.
   */
  'keep-existing-routes'?: boolean;
  /**
   * [CF/XSA] Defines the memory allocated to the application.
   */
  memory?: string;
  /**
   * [CF/XSA] Defines if a route should be assigned to the application.
   */
  'no-route'?: boolean;
  /**
   * [CF/XSA] Start/do not start the application during deployment.
   */
  'no-start'?: boolean;
  'restart-on-env-change'?: ModuleParametersRestartOnEnvChange;
  /**
   * [CF/XSA] The context 'route-path' part of the default URI.
   */
  'route-path'?: string;
  routes?: ModuleParametersRoutes;
  /**
   * [CF/XSA] The password used for authentication by the XS controller at the service broker.
   */
  'service-broker-password'?: string;
  /**
   * [CF/XSA] Makes the service plans of the broker visible only within the targeted space.
   */
  'service-broker-space-scoped'?: boolean;
  /**
   * [CF/XSA] The URL to register service requests.
   */
  'service-broker-url'?: string;
  /**
   * [CF/XSA] The name of the user required for authentication by the XS controller.
   */
  'service-broker-user'?: string;
  tasks?: ModuleParametersTasks;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the module's parameters.
 */
export interface PropertiesMetadata4 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the required dependency's properties.
 */
export interface PropertiesMetadata5 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the module at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
 */
export interface ModuleRequiresParameters {
  /**
   * [CF] Specify that the resource would be used as a target for the module content deployment.
   */
  'content-target'?: boolean;
  /**
   * [CF] Provide a binding name for the association between an application and a service instance.
   */
  'binding-name'?: string;
  /**
   * [CF] If this parameter is set to true, the service keys used during the content deployment are deleted once the deployment is completed. The parameter is valid only for modules with direct content deployment.
   */
  'delete-service-key-after-deployment'?: boolean;
  /**
   * [CF/XSA] Used when consuming an existing service key. Specifies the name of the environment variable that will contain the service key's credentials.
   */
  'env-var-name'?: string;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the required dependency's parameters.
 */
export interface PropertiesMetadata6 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the provided dependency's properties.
 */
export interface PropertiesMetadata7 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Parameters can be used to influence the behavior of tools which interpret this descriptor. Parameters are not made available to the module at runtime. Provided property values can be accessed by "~{<provided-property-name>}". Such expressions can be part of an arbitrary string
 */
export interface ModuleProvidesParameters {
  visibility?: ResourceConfigurationTarget[];
  /**
   * [CF] Valid for blue-green deployment. Specify this parameter if you want to provide the routes specified in the descriptor.
   */
  'use-live-routes'?: boolean;
  [k: string]: unknown | undefined;
}
export interface ResourceConfigurationTarget {
  /**
   * [CF/XSA] The org in which the configuration will be looked for
   */
  org?: string;
  /**
   * [CF/XSA] The space in which the configuration will be looked for
   */
  space?: string;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the provided dependency's parameters.
 */
export interface PropertiesMetadata8 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the resource's properties.
 */
export interface PropertiesMetadata9 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface ResourceParametersCf {
  /**
   * [CF] Apply namespace to service name.
   */
  'apply-namespace'?: boolean;
  /**
   * [CF] URL to which logs for bound applications are streamed.
   */
  'syslog-drain-url'?: string;
  'skip-service-updates'?: ResourceSkipServiceUpdates;
  'fail-on-service-update'?: ResourceFailOnServiceUpdate;
  [k: string]: unknown | undefined;
}
/**
 * [CF] Map value, containing the service components (parameters, plan, tags) to skip when updating a service.
 */
export interface ResourceSkipServiceUpdates {
  /**
   * The configuration parameters which will be passed to the service broker.
   */
  parameters?: boolean;
  /**
   * The service plan.
   */
  plan?: boolean;
  /**
   * The custom tags for a service instance.
   */
  tags?: boolean;
  /**
   * URL to which logs for bound applications are streamed.
   */
  'syslog-drain-url'?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * [CF] Map value specifying which service components (parameters, plan, tags) should cause the deployment to fail if their update fails.
 */
export interface ResourceFailOnServiceUpdate {
  /**
   * Specifies whether the deployment should fail if updating the service instance parameters fails.
   */
  parameters?: boolean;
  /**
   * Specifies whether the deployment should fail if updating the service plan fails.
   */
  plan?: boolean;
  /**
   * Specifies whether the deployment should fail if updating the service tags fails.
   */
  tags?: boolean;
  [k: string]: unknown | undefined;
}
export interface ResourceParametersCfXsa {
  /**
   * [CF/XSA] Name of the service to create.
   */
  service?: (
    | (
        | 'application-logs'
        | 'auditlog'
        | 'rabbitmq'
        | 'autoscaler'
        | 'portal-services'
        | 'fs-storage'
        | 'hana'
        | 'jobscheduler'
        | 'xsuaa'
        | 'connectivity'
        | 'destination'
        | 'feature-flags'
        | 'redis'
        | 'ml-foundation-services'
        | 'mongodb'
        | 'objectstore'
        | 'postgresql'
      )
    | string
  ) &
    string;
  /**
   * [CF/XSA] Used when consuming an existing service key. Specifies the name of the service key.
   */
  'service-key-name'?: string;
  /**
   * [CF/XSA] Service instance name. Default value is the resource name.
   */
  'service-name'?: string;
  /**
   * [CF/XSA] The name of the service broker to be used.
   */
  'service-broker'?: string;
  /**
   * [CF/XSA] Name of the service plan to be used.
   */
  'service-plan'?: string;
  /**
   * [CF/XSA] Some services employ a list of custom tags to parse <VCAP_SERVICES> for credentials.
   */
  'service-tags'?: string[];
  /**
   * [CF/XSA] A globally unique ID (GUID) for your Fiori LaunchPad site.
   */
  siteId?: string;
  /**
   * [CF/XSA] Map value containing the service creation configuration, e.g., url and user credentials (user and password).
   */
  config?: {
    [k: string]: unknown | undefined;
  };
  /**
   * [CF/XSA] When used for cross-MTA dependency resolution, the provider-nid is always 'mta'.
   */
  'provider-nid'?: 'mta';
  /**
   * [CF/XSA] The resource from the provider MTA <mta-id>:<mta-provides-dependency-name>.
   */
  'provider-id'?: string;
  /**
   * [CF/XSA] The version of the provider MTA.
   */
  version?: string;
  target?: ResourceConfigurationTarget1;
  [k: string]: unknown | undefined;
}
/**
 * [CF/XSA] The name of the organization and space in which the provider MTA is deployed.
 */
export interface ResourceConfigurationTarget1 {
  /**
   * [CF/XSA] The org in which the configuration will be looked for
   */
  org?: string;
  /**
   * [CF/XSA] The space in which the configuration will be looked for
   */
  space?: string;
  [k: string]: unknown | undefined;
}
export interface ResourceParametersXsa {
  /**
   * [XSA] The relative path from the MTA root directory to a file in the same application project, which contains information used to create or update parameters of an XS advanced service represented by the MTA resource.
   */
  'config-path'?: string;
  /**
   * [XSA] The unique ID of a database instance (other than the default) that hosts the run-time to which you want to deploy an application.
   */
  database_id?: string;
  /**
   * [XSA] List of alternatives for a default service offering defined in the deploy service configuration. If a default service offering does not exist for the current org/space or creating a service fails (with a specific error), service alternatives are used. The order of service alternatives is considered.
   *
   * @minItems 1
   */
  'service-alternatives'?: [string, ...string[]];
  /**
   * [XSA] A globally unique ID (GUID) for your Fiori LaunchPad site
   */
  siteId?: string;
  [k: string]: unknown | undefined;
}
/**
 * Additional information about the resource's parameters.
 */
export interface PropertiesMetadata10 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the required dependency's properties.
 */
export interface PropertiesMetadata11 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the required dependency's parameters.
 */
export interface PropertiesMetadata12 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the module type's properties.
 */
export interface PropertiesMetadata13 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the module's parameters.
 */
export interface PropertiesMetadata14 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the resource type's properties.
 */
export interface PropertiesMetadata15 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * Additional information about the resource's parameters.
 */
export interface PropertiesMetadata16 {
  [k: string]:
    | {
        /**
         * Default value is true.
         */
        overwritable?: boolean;
        /**
         * Default value is false.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
