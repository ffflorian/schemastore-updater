/* eslint-disable */

/**
 * Container App versioned application definition.
 * Defines the desired state of an immutable revision.
 * Any changes to this section Will result in a new revision being created
 */
export interface HttpsJsonSchemastoreOrgAzureContainerappTemplateJson {
  /**
   * List of container definitions for the Container App
   */
  containers?:
    | {
        /**
         * Container start command arguments
         */
        args?: string[] | string;
        /**
         * Container start command
         */
        command?: string[] | string;
        /**
         * Container environment variables
         */
        env?:
          | {
              /**
               * Environment variable name
               */
              name?: string;
              /**
               * Name of the Container App secret from which to pull the environment variable value
               */
              secretRef?: string;
              /**
               * Non-secret environment variable value
               */
              value?: string;
            }[]
          | string;
        /**
         * Container image tag
         */
        image?: string;
        /**
         * Custom container name
         */
        name?: string;
        /**
         * List of probes for the container
         */
        probes?:
          | {
              /**
               * Minimum consecutive failures for the probe to be considered failed after having succeeded. Defaults to 3. Minimum value is 1. Maximum value is 10
               */
              failureThreshold?: number | string;
              /**
               * HTTPGet specifies the http request to perform
               */
              httpGet?:
                | {
                    /**
                     * Host name to connect to, defaults to the pod IP. You probably want to set "Host" in httpHeaders instead
                     */
                    host?: string;
                    /**
                     * Custom headers to set in the request. HTTP allows repeated headers
                     */
                    httpHeaders?:
                      | {
                          /**
                           * The header field name
                           */
                          name?: string;
                          /**
                           * The header field value
                           */
                          value?: string;
                        }[]
                      | string;
                    /**
                     * Path to access on the HTTP server
                     */
                    path?: string;
                    /**
                     * Name or number of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME
                     */
                    port?: number | string;
                    /**
                     * Scheme to use for connecting to the host. Defaults to HTTP
                     */
                    scheme?: ('HTTP' | 'HTTPS') | string;
                  }
                | string;
              /**
               * Number of seconds after the container has started before liveness probes are initiated. Minimum value is 1. Maximum value is 60
               */
              initialDelaySeconds?: number | string;
              /**
               * How often (in seconds) to perform the probe. Default to 10 seconds. Minimum value is 1. Maximum value is 240
               */
              periodSeconds?: number | string;
              /**
               * Minimum consecutive successes for the probe to be considered successful after having failed. Defaults to 1. Must be 1 for liveness and startup. Minimum value is 1. Maximum value is 10
               */
              successThreshold?: number | string;
              /**
               * TCPSocket specifies an action involving a TCP port. TCP hooks not yet supported
               */
              tcpSocket?:
                | {
                    /**
                     * Optional: Host name to connect to, defaults to the pod IP
                     */
                    host?: string;
                    /**
                     * Number or name of the port to access on the container. Number must be in the range 1 to 65535. Name must be an IANA_SVC_NAME
                     */
                    port?: number | string;
                  }
                | string;
              /**
               * Optional duration in seconds the pod needs to terminate gracefully upon probe failure. The grace period is the duration in seconds after the processes running in the pod are sent a termination signal and the time when the processes are forcibly halted with a kill signal. Set this value longer than the expected cleanup time for your process. If this value is nil, the pod's terminationGracePeriodSeconds will be used. Otherwise, this value overrides the value provided by the pod spec. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). This is an alpha field and requires enabling ProbeTerminationGracePeriod feature gate. Maximum value is 3600 seconds (1 hour)
               */
              terminationGracePeriodSeconds?: number | null | string;
              /**
               * Number of seconds after which the probe times out. Defaults to 1 second. Minimum value is 1. Maximum value is 240
               */
              timeoutSeconds?: number | string;
              /**
               * The type of probe
               */
              type?: ('Liveness' | 'Readiness' | 'Startup') | string;
            }[]
          | string;
        /**
         * Container App container resource requirements
         */
        resources?:
          | {
              /**
               * Required CPU in cores, e.g. 0.5
               */
              cpu?: number | string;
              /**
               * Required memory, e.g. "250Mb"
               */
              memory?: string;
              /**
               * UNDOCUMENTED. The total amount of storage available to each replica
               */
              ephemeralStorage?: string;
            }
          | string;
        /**
         * Container volume mounts
         */
        volumeMounts?:
          | {
              /**
               * Path within the container at which the volume should be mounted.Must not contain ':'
               */
              mountPath?: string;
              /**
               * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root)
               */
              subPath?: string;
              /**
               * This must match the Name of a Volume
               */
              volumeName?: string;
            }[]
          | string;
      }[]
    | string;
  /**
   * List of specialized containers that run before app containers
   */
  initContainers?:
    | null
    | {
        /**
         * Container start command arguments
         */
        args?: string[] | string;
        /**
         * Container start command
         */
        command?: string[] | string;
        /**
         * Container environment variables
         */
        env?:
          | {
              /**
               * Environment variable name
               */
              name?: string;
              /**
               * Name of the Container App secret from which to pull the environment variable value
               */
              secretRef?: string;
              /**
               * Non-secret environment variable value
               */
              value?: string;
            }[]
          | string;
        /**
         * Container image tag
         */
        image?: string;
        /**
         * Custom container name
         */
        name?: string;
        /**
         * Container App container resource requirements
         */
        resources?:
          | {
              /**
               * Required CPU in cores, e.g. 0.5
               */
              cpu?: number | string;
              /**
               * Required memory, e.g. "250Mb"
               */
              memory?: string;
            }
          | string;
        /**
         * Container volume mounts
         */
        volumeMounts?:
          | {
              /**
               * Path within the container at which the volume should be mounted.Must not contain ':'
               */
              mountPath?: string;
              /**
               * Path within the volume from which the container's volume should be mounted. Defaults to "" (volume's root)
               */
              subPath?: string;
              /**
               * This must match the Name of a Volume
               */
              volumeName?: string;
            }[]
          | string;
      }[]
    | string;
  /**
   * User friendly suffix that is appended to the revision name
   */
  revisionSuffix?: string;
  /**
   * Container App scaling configurations
   */
  scale?:
    | {
        /**
         * Optional. Maximum number of container replicas. Defaults to 10 if not set
         */
        maxReplicas?: number | string;
        /**
         * Optional. Minimum number of container replicas
         */
        minReplicas?: number | null | string;
        /**
         * Scaling rules
         */
        rules?:
          | {
              /**
               * Container App container Azure Queue based scaling rule
               */
              azureQueue?:
                | {
                    /**
                     * Authentication secrets for the queue scale rule
                     */
                    auth?:
                      | {
                          /**
                           * Name of the secret from which to pull the auth params
                           */
                          secretRef?: string;
                          /**
                           * Trigger Parameter that uses the secret
                           */
                          triggerParameter?: string;
                        }[]
                      | string;
                    /**
                     * Queue length
                     */
                    queueLength?: number | string;
                    /**
                     * Queue name
                     */
                    queueName?: string;
                  }
                | string;
              /**
               * Container App container Custom scaling rule
               */
              custom?:
                | {
                    /**
                     * Authentication secrets for the custom scale rule
                     */
                    auth?:
                      | {
                          /**
                           * Name of the secret from which to pull the auth params
                           */
                          secretRef?: string;
                          /**
                           * Trigger Parameter that uses the secret
                           */
                          triggerParameter?: string;
                        }[]
                      | string;
                    /**
                     * Metadata properties to describe custom scale rule
                     */
                    metadata?:
                      | {
                          [k: string]: string | undefined;
                        }
                      | string;
                    /**
                     * Type of the custom scale rule
                     * eg: azure-servicebus, redis etc
                     */
                    type?: string;
                  }
                | string;
              /**
               * Container App container Http scaling rule
               */
              http?:
                | {
                    /**
                     * Authentication secrets for the custom scale rule
                     */
                    auth?:
                      | {
                          /**
                           * Name of the secret from which to pull the auth params
                           */
                          secretRef?: string;
                          /**
                           * Trigger Parameter that uses the secret
                           */
                          triggerParameter?: string;
                        }[]
                      | string;
                    /**
                     * Metadata properties to describe http scale rule
                     */
                    metadata?:
                      | {
                          [k: string]: string | undefined;
                        }
                      | string;
                  }
                | string;
              /**
               * Scale Rule Name
               */
              name?: string;
              /**
               * Container App container Tcp scaling rule
               */
              tcp?:
                | {
                    /**
                     * Authentication secrets for the tcp scale rule
                     */
                    auth?:
                      | {
                          /**
                           * Name of the secret from which to pull the auth params
                           */
                          secretRef?: string;
                          /**
                           * Trigger Parameter that uses the secret
                           */
                          triggerParameter?: string;
                        }[]
                      | string;
                    /**
                     * Metadata properties to describe tcp scale rule
                     */
                    metadata?:
                      | {
                          [k: string]: string | undefined;
                        }
                      | string;
                  }
                | string;
            }[]
          | null
          | string;
      }
    | string;
  /**
   * List of container app services bound to the app
   */
  serviceBinds?:
    | {
        /**
         * Name of the service bind
         */
        name?: string;
        /**
         * Resource id of the target service
         */
        serviceId?: string;
      }[]
    | null
    | string;
  /**
   * Optional duration in seconds the Container App Instance needs to terminate gracefully. Value must be non-negative integer. The value zero indicates stop immediately via the kill signal (no opportunity to shut down). If this value is nil, the default grace period will be used instead. Set this value longer than the expected cleanup time for your process. Defaults to 30 seconds
   */
  terminationGracePeriodSeconds?: number | null | string;
  /**
   * List of volume definitions for the Container App
   */
  volumes?:
    | {
        /**
         * Mount options used while mounting the AzureFile. Must be a comma-separated string
         */
        mountOptions?: string;
        /**
         * Volume name
         */
        name?: string;
        /**
         * List of secrets to be added in volume. If no secrets are provided, all secrets in collection will be added to volume
         */
        secrets?:
          | {
              /**
               * Path to project secret to. If no path is provided, path defaults to name of secret listed in secretRef
               */
              path?: string;
              /**
               * Name of the Container App secret from which to pull the secret value
               */
              secretRef?: string;
            }[]
          | string;
        /**
         * Name of storage resource. No need to provide for EmptyDir and Secret
         */
        storageName?: string;
        /**
         * Storage type for the volume. If not provided, use EmptyDir
         */
        storageType?: ('AzureFile' | 'EmptyDir' | 'Secret') | string;
      }[]
    | null
    | string;
  [k: string]: unknown | undefined;
}
