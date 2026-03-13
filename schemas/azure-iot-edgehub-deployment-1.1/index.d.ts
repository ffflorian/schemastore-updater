/* eslint-disable */

export interface JSONSchemaForAzureIoTEdgeHubDeploymentVersion11 {
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
  };
}
