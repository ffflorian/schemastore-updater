/* eslint-disable */

/**
 * Configuration for safebox to deploy parameters to various parameter stores
 */
export interface HttpsJsonSchemastoreOrgSafeboxSchemaV100Json {
  /**
   * Name of the service. parameters will be prefixed by the value provided
   */
  service: string;
  /**
   * Deploy parameters to the given provider. Eg. ssm, secrets-manager
   */
  provider: 'ssm' | 'secrets-manager';
  /**
   * Region to deploy the parameters to. Eg. us-east-1
   */
  region?:
    | (
        | 'us-east-2'
        | 'us-east-1'
        | 'us-west-1'
        | 'us-west-2'
        | 'af-south-1'
        | 'ap-east-1'
        | 'ap-south-2'
        | 'ap-southeast-3'
        | 'ap-southeast-4'
        | 'ap-south-1'
        | 'ap-northeast-3'
        | 'ap-northeast-2'
        | 'ap-northeast-1'
        | 'ap-southeast-1'
        | 'ap-southeast-2'
        | 'ca-central-1'
        | 'eu-central-1'
        | 'eu-west-1'
        | 'eu-west-2'
        | 'eu-south-1'
        | 'eu-west-3'
        | 'eu-south-2'
        | 'eu-north-1'
        | 'eu-central-2'
        | 'me-south-1'
        | 'me-central-1'
        | 'sa-east-1'
        | 'us-gov-east-1'
        | 'us-gov-west-1'
      )
    | string;
  /**
   * Prefix to apply to all parameters. Does not apply for shared
   */
  prefix?: string;
  /**
   * Generate different files based on the parameter name and values
   */
  generate?: {
    /**
     * Type of file to generate
     */
    type: 'json' | 'yaml' | 'dotenv' | 'types-node';
    /**
     * Full path with filename for writing the output
     */
    path: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Cloudformation stack names. Any output values from the stacks can be interpolated. Eg. DB_NAME: "{{.myDbName}}"
   * myDbName is the output of one of the cloudformation stacks
   */
  'cloudformation-stacks'?: string[];
  /**
   * Parameters to deploy as non secret. You can also specify stage specific key value pairs. Same key in the defaults will be ignored and stage specific value will be used.
   */
  config?: {
    /**
     * parameter name and value. Output is /<stage>/<service>/<param name>
     */
    defaults?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Params that are to be shared between multiple services. The parameter name won't be prefixed by service name. Output is /<stage>/shared/<param name>
     */
    shared?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Parameters to deploy as secret. You cannot specify stage specific key value pairs. Value is the description. You will need to run safebox deploy in prompt mode to provide the actual value.
   */
  secret?: {
    /**
     * parameter name and value. Output is /<stage>/<service>/<param name>
     */
    defaults?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Params that are to be shared between multiple services. The parameter name won't be prefixed by service name. Output is /<stage>/shared/<param name>
     */
    shared?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
}
