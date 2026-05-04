/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTunnelhubJson {
  package: {
    artifact: string;
  };
  configuration: {
    entrypoint: string;
    memorySize: number;
    runtime: 'nodejs18.x' | 'nodejs20.x' | 'nodejs22.x' | 'nodejs24.x';
    runtimeEngine: 'LAMBDA' | 'ECS_FARGATE';
    timeout?: number;
    lambdaLayers?: unknown;
    environmentVariables?: {
      [k: string]: string | undefined;
    };
    /**
     * Whether to run Lambda in VPC. If true and vpcConfig is not provided, uses tenant settings or environment variables as fallback.
     */
    runInVpc?: boolean;
    vpcConfig?: {
      securityGroupIds: string[];
      subnetIds: string[];
    };
    stsAccess?: {
      /**
       * @minItems 1
       */
      assumeRoles: [string, ...string[]];
    };
  };
  service: {
    region?: string;
    type: 'automation' | 'api';
    uuid: string;
  };
}
