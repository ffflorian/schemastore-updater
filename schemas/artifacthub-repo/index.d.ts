/* eslint-disable */

export interface AnArtifactHubConfigFile {
  /**
   * An identifier of the Artifact Hub repository where the packages will be published to
   */
  repositoryID?: string;
  /**
   * Repository owners
   */
  owners?: Owner[];
  /**
   * Packages that should not be indexed by Artifact Hub
   */
  ignore?: Package[];
}
/**
 * A repository owner
 */
export interface Owner {
  /**
   * A repository owner name
   */
  name?: string;
  /**
   * A repository owner email
   */
  email?: string;
}
/**
 * A package
 */
export interface Package {
  /**
   * A package name
   */
  name: string;
  /**
   * Regular expression
   */
  version?: string;
}
