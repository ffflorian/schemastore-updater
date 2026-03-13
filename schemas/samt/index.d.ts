/* eslint-disable */

export interface HttpsJsonSchemastoreOrgSamtJson {
  /**
   * Path to the source directory, defaults to ./src
   */
  source?: string;
  /**
   * The default repositories to use if no repository is specified for a plugin
   */
  repositories?: {
    /**
     * The url to the maven repository to use, defaults to https://repo.maven.apache.org/maven2
     */
    maven?: string;
  };
  plugins?: (
    | {
        type: 'local';
        path: string;
      }
    | {
        type: 'maven';
        groupId: string;
        artifactId: string;
        version: string;
        repository?: string;
      }
    | {
        type: 'gradle';
        dependency: string;
        repository?: string;
      }
  )[];
  /**
   * Which SAMT generators to use
   */
  generators?: {
    name: string;
    output?: string;
    options?: {
      [k: string]: string | undefined;
    };
  }[];
}
