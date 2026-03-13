/* eslint-disable */

/**
 * A recipe for Sourcehut CI service
 */
export interface SourcehutBuildManifest {
  /**
   * Which OS image to build in
   */
  image: string;
  /**
   * A list of packages to install on the image
   */
  packages?: string[];
  /**
   * A list of extra repositories to enable with the image's package manager
   */
  repositories?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A list of repositories to clone into the home directory of the build user in the build environment
   */
  sources?: string[];
  /**
   * A list of scripts to execute in the build environment
   */
  tasks?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A list of triggers to execute post-build, which can be used to send emails or do other post-build tasks
   */
  triggers?: {
    action: 'email' | 'webhook';
    condition: 'always' | 'failure' | 'success';
    [k: string]: unknown | undefined;
  }[];
  /**
   * A list of key/value pairs for options to set in the build environment via ~/.buildenv
   */
  environment?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of secret UUIDs to be added to the guest during the build
   */
  secrets?: string[];
  [k: string]: unknown | undefined;
}
