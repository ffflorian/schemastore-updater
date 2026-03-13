/* eslint-disable */

/**
 * buf.work.yaml is used to define a workspace, which is an advanced local development feature. Workspaces make it possible to consolidate one or more modules into a single buildable unit. They also allow users to run buf operations across multiple modules with a single execution (such as buf lint).
 */
export interface BufWorkYaml {
  /**
   * Required. Defines the current configuration version. The only accepted value is v1.
   */
  version: 'v1';
  /**
   * Required. Lists the directories that define modules to be included in the workspace. The directory paths must be relative to the buf.work.yaml, and can't point to a location outside of the directory where your buf.work.yaml is.
   */
  directories: string[];
  [k: string]: unknown | undefined;
}
