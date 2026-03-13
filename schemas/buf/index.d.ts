/* eslint-disable */

/**
 * buf.yaml is used to define a module. It's the primary configuration file, and is responsible for the module's name, dependencies, and lint and breaking configuration.
 */
export interface BufYaml {
  /**
   * The version key is required, and defines the current configuration version. The accepted values are `v2`, `v1`, and `v1beta1`.
   */
  version: 'v2' | 'v1' | 'v1beta1';
  [k: string]: unknown | undefined;
}
