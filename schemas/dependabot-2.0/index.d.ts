/* eslint-disable */

export type GitHubDependabotV2Config = {
  [k: string]: unknown | undefined;
} & {
  version: ConfigFileVersion;
  /**
   * Enable ecosystems that have beta-level support
   */
  'enable-beta-ecosystems'?: boolean;
  updates: PackageEcosystem[];
  registries?: Registry;
  /**
   * Define groups that span multiple package ecosystems, allowing consolidated pull requests across different ecosystems
   */
  'multi-ecosystem-groups'?: {
    [k: string]: MultiEcosystemGroup | undefined;
  };
};
/**
 * Dependabot configuration files require this key, and its value must be 2
 */
export type ConfigFileVersion = 2;
/**
 * Element for each one package manager that you want GitHub Dependabot to monitor for new versions
 */
export type PackageEcosystem = {
  [k: string]: unknown | undefined;
};

/**
 * The top-level registries key is optional. It allows you to specify authentication details that Dependabot can use to access private package registries.
 */
export interface Registry {
  [k: string]:
    | {
        /**
         * Identifies the type of registry.
         */
        type:
          | 'cargo-registry'
          | 'composer-repository'
          | 'docker-registry'
          | 'git'
          | 'goproxy-server'
          | 'hex-organization'
          | 'hex-repository'
          | 'helm-registry'
          | 'maven-repository'
          | 'npm-registry'
          | 'nuget-feed'
          | 'pub-repository'
          | 'python-index'
          | 'rubygems-server'
          | 'terraform-registry';
        /**
         * The URL to use to access the dependencies in this registry. The protocol is optional. If not specified, 'https://' is assumed. Dependabot adds or ignores trailing slashes as required.
         */
        url: string;
        /**
         * The username that Dependabot uses to access the registry.
         */
        username?: string;
        /**
         * A reference to a Dependabot secret containing the password for the specified user.
         */
        password?: string;
        /**
         * A reference to a Dependabot secret containing an access key for this registry.
         */
        key?: string;
        /**
         * A reference to a Dependabot secret containing an access token for this registry.
         */
        token?: string;
        /**
         * For registries with type: python-index, if the boolean value is true, pip resolves dependencies by using the specified URL rather than the base URL of the Python Package Index (by default https://pypi.org/simple).
         */
        'replaces-base'?: boolean;
        organization?: string;
        repo?: string;
        'auth-key'?: string;
        'public-key-fingerprint'?: string;
        /**
         * The name of the cargo registry.
         */
        registry?: string;
        /**
         * The tenant ID for Azure OIDC authentication.
         */
        'tenant-id'?: string;
        /**
         * The client ID for Azure OIDC authentication.
         */
        'client-id'?: string;
        /**
         * The JFrog OIDC provider name for authentication.
         */
        'jfrog-oidc-provider-name'?: string;
        /**
         * The identity mapping name for JFrog OIDC authentication.
         */
        'identity-mapping-name'?: string;
        /**
         * The audience for OIDC or AWS authentication.
         */
        audience?: string;
        /**
         * The AWS region for AWS CodeArtifact authentication.
         */
        'aws-region'?: string;
        /**
         * The AWS account ID for AWS CodeArtifact authentication.
         */
        'account-id'?: string;
        /**
         * The AWS role name for AWS CodeArtifact authentication.
         */
        'role-name'?: string;
        /**
         * The domain for AWS CodeArtifact authentication.
         */
        domain?: string;
        /**
         * The domain owner for AWS CodeArtifact authentication.
         */
        'domain-owner'?: string;
      }
    | undefined;
}
/**
 * Define a group that spans multiple package ecosystems, allowing consolidated pull requests across different ecosystems
 */
export interface MultiEcosystemGroup {
  /**
   * Schedule preferences for the group
   */
  schedule: {
    [k: string]: unknown | undefined;
  };
  /**
   * Labels to set on pull requests (additive - merges with ecosystem-level labels)
   *
   * @minItems 0
   */
  labels?: string[];
  /**
   * Assignees to set on pull requests (additive - merges with ecosystem-level assignees)
   *
   * @minItems 1
   */
  assignees?: [string, ...string[]];
  /**
   * Associate all pull requests raised for this group with a milestone. You need to specify the numeric identifier of the milestone and not its label.
   */
  milestone?: number;
  /**
   * Specify a different branch for manifest files and for pull requests.
   */
  'target-branch'?: string;
  /**
   * Commit message preferences for the group
   */
  'commit-message'?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Pull request branch name preferences for the group
   */
  'pull-request-branch-name'?: {
    /**
     * Change separator for PR branch name
     */
    separator: '-' | '_' | '/';
  };
  /**
   * Limit number of open pull requests for version updates.
   */
  'open-pull-requests-limit'?: number;
  /**
   * Specify the semantic versioning update types for the group.
   *
   * @minItems 1
   */
  'update-types'?: ['major' | 'minor' | 'patch', ...('major' | 'minor' | 'patch')[]];
  /**
   * Specify a dependency type to be included in the group.
   */
  'dependency-type'?: 'production' | 'development';
  /**
   * Exclude certain dependencies from the group.
   *
   * @minItems 1
   */
  'exclude-patterns'?: [string, ...string[]];
}
