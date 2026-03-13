/* eslint-disable */

/**
 * List of arguments to used when launched.
 */
export type Args = string[];
/**
 * A connection string that can be used to connect to this resource.
 */
export type ConnectionString = string;
/**
 * A list of bind mounts associated with this resource when deployed.
 */
export type BindMounts = {
  /**
   * The source path on the host which is mounted into the container.
   */
  source: string;
  /**
   * The target within the container where the volume is mounted.
   */
  target: string;
  /**
   * Flag indicating whether the mount is read-only.
   */
  readOnly: boolean;
}[];
/**
 * A list of volumes associated with this resource when deployed.
 */
export type Volumes = {
  /**
   * The name of the volume.
   */
  name: string;
  /**
   * The target within the container where the volume is mounted.
   */
  target: string;
  /**
   * Flag indicating whether the mount is read-only.
   */
  readOnly: boolean;
}[];
export type ResourceAzureBicepV1 = ResourceAzureBicep & {
  type?: 'azure.bicep.v1';
  scope?: {
    /**
     * The name of the resource group to deploy the resource to.
     */
    resourceGroup?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
};
/**
 * A value that can be referenced via an expression in the manifest
 */
export type Value = string;
/**
 * Identifies the filter to apply to the referenced parameter value (for example, 'uri').
 */
export type AnnotatedStringFilter = 'uri';

/**
 * Defines the .NET Aspire 8.0 deployment manifest JSON schema.
 */
export interface HttpsJsonSchemastoreOrgAspire80Json {
  /**
   * Contains the set of resources deployable as part of this manifest. Each property is a distinct resource.
   */
  resources: {
    [k: string]:
      | (
          | {
              type: 'dockerfile.v0';
              /**
               * The file path to the Dockerfile to be built into a container image.
               */
              path: string;
              /**
               * A directory path used as the context for building the Dockerfile into a container image.
               */
              context: string;
              env?: Env;
              bindings?: Bindings;
              buildArgs?: BuildArgs;
            }
          | {
              type: 'container.v0';
              /**
               * A string representing the container image to be used.
               */
              image: string;
              /**
               * The entrypoint to use for the container image when executed.
               */
              entrypoint?: string;
              args?: Args;
              connectionString?: ConnectionString;
              env?: Env;
              bindings?: Bindings;
              bindMounts?: BindMounts;
              volumes?: Volumes;
              build?: never;
            }
          | {
              [k: string]: unknown | undefined;
            }
          | {
              type: 'project.v0';
              /**
               * The path to the project file. Relative paths are interpreted as being relative to the location of the manifest file.
               */
              path: string;
              args?: Args;
              env?: Env;
              bindings?: Bindings;
            }
          | {
              type: 'project.v1';
              /**
               * The path to the project file. Relative paths are interpreted as being relative to the location of the manifest file.
               */
              path: string;
              deployment?: ResourceAzureBicep | ResourceAzureBicepV1;
              args?: Args;
              env?: Env;
              bindings?: Bindings;
            }
          | {
              type: 'executable.v0';
              /**
               * The path to the working directory. Should be interpreted as being relative to the AppHost directory.
               */
              workingDirectory: string;
              /**
               * The path to the command. Should be interpreted as being relative to the AppHost directory.
               */
              command: string;
              args?: Args;
              env?: Env;
              bindings?: Bindings;
            }
          | {
              type?: 'value.v0';
              connectionString: ConnectionString;
            }
          | {
              type?: 'parameter.v0';
              value: Value;
              connectionString?: ConnectionString;
              /**
               * Defines a set of input values which need to be either generated or prompted by the deployment tool. This is typically used for environment specific configuration values or secrets.
               */
              inputs: {
                [k: string]:
                  | {
                      /**
                       * The type of the value to be prompted or generated. Currently only 'string'' is supported.
                       */
                      type: 'string';
                      /**
                       * Flag indicating whether the value should be treated as a secret. Deployment tools should note this value to take appropriate precautions when prompting, storing, and transmitting this value.
                       */
                      secret?: boolean;
                      default?:
                        | {
                            generate: {
                              /**
                               * The minimum length of the generated value.
                               */
                              minLength: number;
                              /**
                               * Indicates whether lower case characters are allowed in the generated value.
                               */
                              lower?: boolean;
                              /**
                               * Indicates whether upper case characters are allowed in the generated value.
                               */
                              upper?: boolean;
                              /**
                               * Indicates whether numeric characters are allowed in the generated value.
                               */
                              numeric?: boolean;
                              /**
                               * Indicates whether special characters are allowed in the generated value.
                               */
                              special?: boolean;
                              /**
                               * Specifies the minimum number of lower case characters that must appear in the generated value.
                               */
                              minLower?: number;
                              /**
                               * Specifies the minimum number of upper case characters that must appear in the generated value.
                               */
                              minUpper?: number;
                              /**
                               * Specifies the minimum number of numeric characters that must appear in the generated value.
                               */
                              minNumeric?: number;
                              /**
                               * Specifies the minimum number of special characters that must appear in the generated value.
                               */
                              minSpecial?: number;
                              [k: string]: unknown | undefined;
                            };
                            additionalProperties?: never;
                            [k: string]: unknown | undefined;
                          }
                        | {
                            /**
                             * The default value to use if the parameter is not provided at deployment time.
                             */
                            value: string;
                            [k: string]: unknown | undefined;
                          };
                    }
                  | undefined;
              };
            }
          | {
              type: 'annotated.string';
              value: Value;
              filter: AnnotatedStringFilter;
            }
          | {
              type?: 'dapr.v0';
              /**
               * Dapr specific configuration.
               */
              dapr: {
                application: string;
                appId: string;
                components: string[];
              };
            }
          | {
              type?: 'dapr.component.v0';
              daprComponent: {
                type?: string;
              };
            }
          | ResourceAzureBicep
          | ResourceAzureBicepV1
          | {
              type: 'aws.cloudformation.stack.v0';
              'stack-name': string;
              references?: {
                'target-resource'?: string;
              }[];
            }
          | {
              type: 'aws.cloudformation.template.v0';
              'stack-name': string;
              'template-path': string;
              references?: {
                'target-resource'?: string;
              }[];
            }
          | {
              type: string;
              [k: string]: unknown | undefined;
            }
        )
      | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A list of environment variables which are inserted into the resource at runtime.
 */
export interface Env {
  [k: string]: string | undefined;
}
/**
 * A list of port bindings for the resource when it is deployed.
 */
export interface Bindings {
  [k: string]:
    | {
        /**
         * The scheme used in URIs for this binding.
         */
        scheme: 'http' | 'https' | 'tcp' | 'udp';
        /**
         * The protocol used for this binding (only 'tcp' or 'udp' are valid).
         */
        protocol: 'tcp' | 'udp';
        /**
         * Additional information describing the transport (e.g. HTTP/2).
         */
        transport: 'http' | 'http2' | 'tcp';
        /**
         * A flag indicating whether this binding is exposed externally when deployed.
         */
        external?: boolean;
        /**
         * The port that the workload (e.g. container) is listening on.
         */
        targetPort?: number;
        /**
         * The port that the workload (e.g. container) is exposed as to other resources and externally.
         */
        port?: number;
      }
    | undefined;
}
/**
 * A list of build arguments which are used during container build (for dockerfile.v0 resource type).
 */
export interface BuildArgs {
  [k: string]: string | undefined;
}
/**
 * Represents a resource that is deployed using Azure Bicep.
 */
export interface ResourceAzureBicep {
  type?: 'azure.bicep.v0';
  /**
   * Path to the Bicep file to be used for deployment.
   */
  path: string;
  connectionString?: ConnectionString;
  /**
   * A list of parameters which are passed to Azure deployment.
   */
  params?: {
    [k: string]:
      | (
          | unknown[]
          | boolean
          | number
          | {
              [k: string]: unknown | undefined;
            }
          | string
        )
      | undefined;
  };
}
