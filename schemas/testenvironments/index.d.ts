/* eslint-disable */

export type Config = {
  /**
   * User-friendly environment name that will appear in the TestExplorer list. It must be unique within a testEnvironments.json file.
   */
  name: string;
  /**
   * Path on the local machine (either absolute or relative to the solution directory) which is projected into the remote environment. If not specified, this will default to the repo root within the context of a git repo (on VS 17.1 and above). Outside a git repo, this would default to the solution directory.
   */
  localRoot?: string;
  [k: string]: unknown | undefined;
} & Config1;
export type Config1 = Docker | Wsl | Ssh | Remote;
export type Docker = {
  type?: 'docker';
  [k: string]: unknown | undefined;
} & Docker1;
export type Docker1 =
  | {
      /**
       * Name of a docker image to load in a docker env. dockerImage or dockerFile must be specified, but not both.
       */
      dockerImage: string;
      [k: string]: unknown | undefined;
    }
  | {
      /**
       * Path to a Dockerfile, relative to the solution directory, to build an image and load in a docker env. dockerImage or dockerFile must be specified, but not both.
       */
      dockerFile: string;
      [k: string]: unknown | undefined;
    };

export interface SchemaForVisualStudioSTestEnvironmentConfig {
  version?: string;
  environments?: Config[];
  [k: string]: unknown | undefined;
}
export interface Wsl {
  type?: 'wsl';
  /**
   * Name of the local WSL distribution in which to run the test environment.
   */
  wslDistribution: string;
  [k: string]: unknown | undefined;
}
export interface Ssh {
  type?: 'ssh';
  /**
   * A uri that specifies the connection to the remote machine. e.g. ssh://user@hostname:22
   */
  remoteUri: string;
  [k: string]: unknown | undefined;
}
export interface Remote {
  type?: 'remote';
  /**
   * A uri that specifies the connection to the remote machine. e.g. tcp://hostname:2358
   */
  remoteUri: string;
  [k: string]: unknown | undefined;
}
