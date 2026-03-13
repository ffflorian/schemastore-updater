/* eslint-disable */

/**
 * This interface was referenced by `ModuleSettings`'s JSON-Schema definition
 * via the `patternProperty` "^(createoptions|createOptions)[0-9]*$".
 */
export type CreateOptions =
  | {
      [k: string]: unknown | undefined;
    }
  | string;

export interface JSONSchemaForAzureIoTEdgeDeploymentTemplateVersion30EdgeAgentSchemaV11EdgeHubSchemaV11 {
  modulesContent: TheConfigurationForAllTheModules;
  [k: string]: unknown | undefined;
}
export interface TheConfigurationForAllTheModules {
  $edgeAgent: ConfigurationForTheEdgeAgentModule;
  $edgeHub?: ConfigurationForTheEdgeHubModule;
  [k: string]: unknown | undefined;
}
export interface ConfigurationForTheEdgeAgentModule {
  'properties.desired': {
    schemaVersion: string;
    runtime: Runtime;
    systemModules: {
      edgeAgent: {
        type: 'docker';
        settings: ModuleSettings;
        env?: Env;
        imagePullPolicy?: 'never' | 'on-create';
        [k: string]: unknown | undefined;
      };
      edgeHub: TheEdgehubSchema;
      [k: string]: unknown | undefined;
    };
    modules: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z0-9_-]+$".
       */
      [k: string]: {
        version?: string;
        type: 'docker';
        status: 'running' | 'stopped';
        restartPolicy: 'never' | 'on-failure' | 'on-unhealthy' | 'always';
        env?: Env;
        settings: ModuleSettings;
        imagePullPolicy?: 'never' | 'on-create';
        startupOrder?: number;
        [k: string]: unknown | undefined;
      };
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Runtime {
  type: 'docker';
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
  };
}
export interface ModuleSettings {
  image: string;
  [k: string]: CreateOptions;
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
  type: 'docker';
  settings: ModuleSettings;
  env?: Env;
  status: 'running' | 'stopped';
  restartPolicy: 'never' | 'on-failure' | 'on-unhealthy' | 'always';
  imagePullPolicy?: 'never' | 'on-create';
  startupOrder?: number;
  [k: string]: unknown | undefined;
}
export interface ConfigurationForTheEdgeHubModule {
  'properties.desired': {
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
    };
  };
}
