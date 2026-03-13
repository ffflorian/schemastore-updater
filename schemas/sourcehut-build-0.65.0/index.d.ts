/* eslint-disable */

/**
 * A recipe for Sourcehut CI service. For details, see https://man.sr.ht/builds.sr.ht/manifest.md.
 */
export interface SourcehutBuildManifest {
  /**
   * Which OS image to build in. A list of available build images can be found at https://man.sr.ht/builds.sr.ht/compatibility.md
   */
  image: string;
  /**
   * Which architecture to build for. See https://man.sr.ht/builds.sr.ht/compatibility.md for a list of available architectures.
   */
  arch?: string;
  /**
   * A list of packages to install on the image. For image-specific details, consult https://man.sr.ht/builds.sr.ht/compatibility.md
   */
  packages?: string[];
  /**
   * A list of extra repositories to enable with the image's package manager. The specific format varies by base image, consult https://man.sr.ht/builds.sr.ht/compatibility.md for details.
   */
  repositories?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of files to extract from the completed build environment and make available for downloading from the jobs page. Artifacts are only uploaded for successful jobs and are pruned after 90 days.
   * Note that the file names are interpreted literally: do not use ~ or any shell code. If a relative path is used (e.g. example/my-artifact.tar.gz), it will be interpreted relative to the build user's home directory.
   */
  artifacts?: string[];
  /**
   * Whether to keep the build VM alive after all of the tasks have finished, even if it doesn't fail, so you can SSH in. You can also SSH in before the tasks have finished and tail the output of the build in your terminal. Learn more at https://man.sr.ht/builds.sr.ht/build-ssh.md
   */
  shell?: boolean;
  /**
   * A list of repositories to clone into the home directory of the build user in the build environment. Optionally, prefix the protocol with the source control management scheme, to specify a protocol other than git. To specify a non-default git revision, append #commit-object to the repository.
   */
  sources?: string[];
  /**
   * A list of scripts to execute in the build environment.
   * Task names must use only lowercase alphanumeric characters, underscores or dashes and must be <=128 characters in length. Tasks are executed in the order specified.
   * Each task is run in a separate login session, so if you modify the groups of the build user they will be effective starting from the subsequent task.
   *
   * @minItems 1
   */
  tasks: [
    {
      [k: string]: string | undefined;
    },
    ...{
      [k: string]: string | undefined;
    }[]
  ];
  /**
   * A list of triggers to execute post-build, which can be used to send emails or do other post-build tasks.
   * Learn more at https://man.sr.ht/builds.sr.ht/triggers.md
   */
  triggers?: {
    /**
     * Trigger type
     */
    action: 'email' | 'webhook';
    /**
     * When to execute this trigger
     */
    condition: 'always' | 'failure' | 'success';
    [k: string]: unknown | undefined;
  }[];
  /**
   * A list of key/value pairs for options to set in the build environment via ~/.buildenv
   */
  environment?: {
    [k: string]: string | undefined;
  };
  /**
   * List of secret UUIDs to be added to the guest during the build. Learn more at https://man.sr.ht/builds.sr.ht/#secrets
   */
  secrets?: string[];
  /**
   * If present, and secrets are enabled for this build, an OAuth 2.0 bearer token is generated for this build with the given string as the list of grants. The acurl command may be used in the task scripts to perform authenticated GraphAL API requests (https://man.sr.ht/graphql.md).
   */
  oauth?: string;
  [k: string]: unknown | undefined;
}
