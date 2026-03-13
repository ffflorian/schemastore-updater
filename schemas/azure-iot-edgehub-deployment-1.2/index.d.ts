/* eslint-disable */

export type Policy = {
  operations?: string[];
  resources?: string[];
}[];

export interface JSONSchemaForAzureIoTEdgeHubDeploymentVersion12 {
  $edgeHub: ConfigurationForTheEdgeHubModule;
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
    mqttBroker?: {
      bridges?: {
        endpoint?: string;
        settings?: {
          direction?: string;
          topic?: string;
          inPrefix?: string;
          outPrefix?: string;
        }[];
      }[];
      authorizations?: {
        identities?: string[];
        allow?: Policy;
        deny?: Policy;
      }[];
    };
  };
}
