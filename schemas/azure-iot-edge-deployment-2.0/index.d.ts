/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export type ModuleType = "docker";
export type CreateOptions = string;
export type ImagePullPolicy = "never" | "on-create";
export type Status = "running" | "stopped";
export type RestartPolicy = "never" | "on-failure" | "on-unhealthy" | "always";

export interface JSONSchemaForAzureIoTEdgeDeploymentVersion20 {
  modulesContent: TheConfigurationForAllTheModules;
}
export interface TheConfigurationForAllTheModules {
  $edgeAgent: ConfigurationForTheEdgeAgentModule;
  $edgeHub: ConfigurationForTheEdgeHubModule;
  /**
   * This interface was referenced by `TheConfigurationForAllTheModules`'s JSON-Schema definition
   * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
   */
  [k: string]: {
    "properties.desired": {
      [k: string]: unknown;
    };
  };
}
export interface ConfigurationForTheEdgeAgentModule {
  "properties.desired": {
    schemaVersion: string;
    runtime: {
      type: ModuleType;
      settings: {
        minDockerVersion?: string;
        loggingOptions?: string;
        registryCredentials?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^[^\.\$# ]+$".
           */
          [k: string]: {
            username: string;
            password: string;
            address: string;
          };
        };
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[^\.\$# ]+$".
         */
        [k: string]:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[^\.\$# ]+$".
       */
      [k: string]:
        | unknown[]
        | boolean
        | number
        | null
        | {
            [k: string]: unknown;
          }
        | string;
    };
    systemModules: {
      edgeAgent: {
        type: ModuleType;
        settings: ModuleSettings;
        env?: Env;
        imagePullPolicy?: ImagePullPolicy;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[^\.\$# ]+$".
         */
        [k: string]:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
      edgeHub: TheEdgehubSchema;
    };
    modules: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
       */
      [k: string]: {
        version?: string;
        type: ModuleType;
        status: Status;
        restartPolicy: RestartPolicy;
        env?: Env;
        settings: ModuleSettings;
        imagePullPolicy?: ImagePullPolicy;
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^[^\.\$# ]+$".
         */
        [k: string]:
          | unknown[]
          | boolean
          | number
          | null
          | {
              [k: string]: unknown;
            }
          | string;
      };
    };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[^\.\$# ]+$".
     */
    [k: string]:
      | unknown[]
      | boolean
      | number
      | null
      | {
          [k: string]: unknown;
        }
      | string;
  };
}
export interface ModuleSettings {
  image: string;
  createOptions?: CreateOptions;
  /**
   * This interface was referenced by `ModuleSettings`'s JSON-Schema definition
   * via the `patternProperty` "^[^\.\$# ]+$".
   */
  [k: string]:
    | unknown[]
    | boolean
    | number
    | null
    | {
        [k: string]: unknown;
      }
    | string;
}
export interface Env {
  /**
   * This interface was referenced by `Env`'s JSON-Schema definition
   * via the `patternProperty` "^[^\+#$\s\.]+$".
   */
  [k: string]: {
    value: number | string | boolean;
  };
}
export interface TheEdgehubSchema {
  type: ModuleType;
  settings: ModuleSettings;
  env?: Env;
  status: Status;
  restartPolicy: RestartPolicy;
  imagePullPolicy?: ImagePullPolicy;
  /**
   * This interface was referenced by `TheEdgehubSchema`'s JSON-Schema definition
   * via the `patternProperty` "^[^\.\$# ]+$".
   */
  [k: string]:
    | unknown[]
    | boolean
    | number
    | null
    | {
        [k: string]: unknown;
      }
    | string;
}
export interface ConfigurationForTheEdgeHubModule {
  "properties.desired": {
    schemaVersion: string;
    routes: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[^\.\$# ]+$".
       */
      [k: string]:
        | {
            route: string;
            priority?: number;
            timeToLiveSecs?: number;
          }
        | string;
    };
    storeAndForwardConfiguration?: {
      timeToLiveSecs: number;
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[^\.\$# ]+$".
       */
      [k: string]:
        | unknown[]
        | boolean
        | number
        | null
        | {
            [k: string]: unknown;
          }
        | string;
    };
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[^\.\$# ]+$".
     */
    [k: string]:
      | unknown[]
      | boolean
      | number
      | null
      | {
          [k: string]: unknown;
        }
      | string;
  };
}
