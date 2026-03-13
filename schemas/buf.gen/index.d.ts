/* eslint-disable */

/**
 * buf.gen.yaml is a configuration file used by the buf generate command to generate integration code for the languages of your choice.
 */
export interface BufGenYaml {
  /**
   * Required. Defines the current configuration version. Accepted values are `v2`, `v1`, or `v1beta1`.
   */
  version?: 'v2' | 'v1' | 'v1beta1';
  [k: string]: unknown | undefined;
}
