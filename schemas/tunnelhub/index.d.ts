/* eslint-disable */

export interface HttpsJsonSchemastoreOrgTunnelhubJson {
  package: {
    artifact: string;
  };
  configuration: {
    entrypoint: string;
    memorySize: number;
    runtime:
      | 'dotnet6'
      | 'dotnetcore1.0'
      | 'dotnetcore2.0'
      | 'dotnetcore2.1'
      | 'dotnetcore3.1'
      | 'go1.x'
      | 'java11'
      | 'java17'
      | 'java8'
      | 'java8.al2'
      | 'nodejs'
      | 'nodejs10.x'
      | 'nodejs12.x'
      | 'nodejs14.x'
      | 'nodejs16.x'
      | 'nodejs18.x'
      | 'nodejs20.x'
      | 'nodejs22.x'
      | 'nodejs4.3'
      | 'nodejs4.3-edge'
      | 'nodejs6.10'
      | 'nodejs8.10'
      | 'provided'
      | 'provided.al2'
      | 'python2.7'
      | 'python3.10'
      | 'python3.11'
      | 'python3.6'
      | 'python3.7'
      | 'python3.8'
      | 'python3.9'
      | 'ruby2.5'
      | 'ruby2.7'
      | 'ruby3.2';
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
