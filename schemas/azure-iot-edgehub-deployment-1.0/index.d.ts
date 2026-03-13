/* eslint-disable */

export interface JSONSchemaForAzureIoTEdgeHubDeploymentVersion10 {
  $edgeHub: ConfigurationForTheEdgeHubModule;
}
export interface ConfigurationForTheEdgeHubModule {
  'properties.desired': {
    schemaVersion: string;
    routes: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
    storeAndForwardConfiguration?: {
      timeToLiveSecs: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
