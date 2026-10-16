/* eslint-disable */

/**
 * An object containing configuration encrypted with project key.
 */
export type JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom41 = {
  /**
   * Flags packages that have not been updated within this period as abandoned.
   */
  abandonmentThreshold?: string | null;
  /**
   * Labels to add to Pull Request.
   */
  addLabels?: string[];
  /**
   * Additional string value to be appended to `branchPrefix`.
   */
  additionalBranchPrefix?: string;
  /**
   * Additional reviewers for Pull Requests (in contrast to `reviewers`, this option adds to the existing reviewer list, rather than replacing it).
   */
  additionalReviewers?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow custom crate registries.
   */
  allowCustomCrateRegistries?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install plugins.
   */
  allowPlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install scripts.
   */
  allowScripts?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of regular expressions that decide which commands are allowed in post-upgrade tasks.
   */
  allowedCommands?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for environment variable names in repository env config.
   */
  allowedEnv?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for header names in repository hostRules config.
   */
  allowedHeaders?: string[];
  ansible?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Assign reviewers and assignees even if the PR is to be automerged.
   */
  assignAutomerge?: boolean;
  /**
   * Assignees for Pull Request (either username or email address depending on the platform).
   */
  assignees?: string[];
  /**
   * Determine assignees based on configured code owners and changes in PR.
   */
  assigneesFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `assignees`.
   */
  assigneesSampleSize?: number | null;
  /**
   * Set to `true` to automatically approve PRs.
   */
  autoApprove?: boolean;
  /**
   * Control whether replacement regular expressions are global matches or only the first match.
   */
  autoReplaceGlobalMatch?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Autodiscover all repositories.
   */
  autodiscover?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories.
   */
  autodiscoverFilter?: (string[] | string) & (unknown[] | null);
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by namespaces.
   */
  autodiscoverNamespaces?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by project names.
   */
  autodiscoverProjects?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The order method for autodiscover server side repository search.
   */
  autodiscoverRepoOrder?: ('asc' | 'desc') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The sort method for autodiscover server side repository search.
   */
  autodiscoverRepoSort?: ('alpha' | 'created' | 'updated' | 'size' | 'id') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by topics.
   */
  autodiscoverTopics?: string[] | null;
  /**
   * Whether to automerge branches/PRs automatically, without human intervention.
   */
  automerge?: boolean;
  /**
   * PR comment to add to trigger automerge. Only used if `automergeType=pr-comment`.
   */
  automergeComment?: string;
  /**
   * Limit automerge to these times of day or week.
   */
  automergeSchedule?: string[] | string;
  /**
   * The merge strategy to use when automerging PRs. Used only if `automergeType=pr`.
   */
  automergeStrategy?: 'auto' | 'fast-forward' | 'merge-commit' | 'rebase' | 'rebase-merge' | 'squash';
  /**
   * How to automerge, if enabled.
   */
  automergeType?: 'branch' | 'pr' | 'pr-comment';
  'azure-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The id of an existing work item on Azure Boards to link to each PR.
   */
  azureWorkItemId?: number;
  /**
   * List of one or more custom base branches defined as exact strings and/or via regex expressions.
   */
  baseBranchPatterns?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The base directory for Renovate to store local files, including repository files and cache. If left empty, Renovate will create its own temporary directory to use.
   */
  baseDir?: string;
  batect?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The PR tasks will be automatically completed after the PR is raised.
   */
  bbAutoResolvePrTasks?: boolean;
  /**
   * Use the default reviewers (Bitbucket only).
   */
  bbUseDefaultReviewers?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Use the repository's [development branch](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/#The-branching-model) as the repository's default branch.
   */
  bbUseDevelopmentBranch?: boolean;
  bicep?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls how third-party tools like npm or Gradle are called: directly, via Docker sidecar containers, or via dynamic install.
   */
  binarySource?: 'global' | 'docker' | 'install' | 'hermit';
  'bitbucket-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit to a maximum of x concurrent branches. 0 means no limit, `null` (default) inherits value from `prConcurrentLimit`.
   */
  branchConcurrentLimit?: number | null;
  /**
   * Branch name template.
   */
  branchName?: string;
  /**
   * Whether to be strict about the use of special characters within the branch name.
   */
  branchNameStrict?: boolean;
  /**
   * Prefix to use for all branch names.
   */
  branchPrefix?: string;
  /**
   * Old branchPrefix value to check for existing PRs.
   */
  branchPrefixOld?: string;
  /**
   * Branch topic.
   */
  branchTopic?: string;
  buildkite?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Bump the version in the package file being updated.
   */
  bumpVersion?: 'major' | 'minor' | 'patch' | 'prerelease';
  /**
   * A list of bumpVersion config options to bump generic version numbers.
   */
  bumpVersions?: {
    description?: string[] | string;
    /**
     * The semver level to use when bumping versions. This is used by the `bumpVersions` feature.
     */
    bumpType?: string;
    /**
     * A list of patterns to match files that contain the version string.
     */
    filePatterns?: string[];
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * A name for the bumpVersion config. This is used for logging and debugging.
     */
    name?: string;
    [k: string]: unknown | undefined;
  }[];
  bun?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its cache. If left empty, Renovate creates a subdirectory within the `baseDir`.
   */
  cacheDir?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in minutes to keep datasource cache entries.
   */
  cacheHardTtlMinutes?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache private packages in the datasource cache. This is useful for self-hosted setups
   */
  cachePrivatePackages?: boolean;
  cacheTtlOverride?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of branch names to mark for creation or rebasing as if it was selected in the Dependency Dashboard issue.
   */
  checkedBranches?: string[];
  circleci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Set to `true` to initialize submodules during repository clone.
   */
  cloneSubmodules?: boolean;
  /**
   * List of submodules names or patterns to clone when cloneSubmodules=true.
   */
  cloneSubmodulesFilter?: string[];
  cloudbuild?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Commit message body template. Will be appended to commit message, separated by two line returns.
   */
  commitBody?: string;
  /**
   * If enabled, append a table in the commit message body describing all updates in the commit.
   */
  commitBodyTable?: boolean;
  /**
   * Message to use for commit messages and pull request titles.
   */
  commitMessage?: string;
  /**
   * Action verb to use in commit messages and PR titles.
   */
  commitMessageAction?: string;
  /**
   * Extra description used after the commit message topic - typically the version.
   */
  commitMessageExtra?: string;
  /**
   * Lowercase PR- and commit titles.
   */
  commitMessageLowerCase?: 'auto' | 'never';
  /**
   * Prefix to add to start of commit messages and PR titles. Uses a semantic prefix if `semanticCommits` is enabled.
   */
  commitMessagePrefix?: string;
  /**
   * Suffix to add to end of commit messages and PR titles.
   */
  commitMessageSuffix?: string;
  /**
   * The upgrade topic/noun used in commit messages and PR titles.
   */
  commitMessageTopic?: string;
  composer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Configure use of `--ignore-platform-reqs` or `--ignore-platform-req` for the Composer package manager.
   */
  composerIgnorePlatformReqs?: string[];
  conan?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If enabled, issues created by Renovate are set as confidential.
   */
  confidential?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of filenames where repository config will be stored.
   */
  configFileNames?: string[] | null;
  /**
   * Enable this to get config migration PRs when needed.
   */
  configMigration?: boolean;
  /**
   * Set this to `true` to make Renovate reuse/reopen an existing closed Config Warning issue, instead of opening a new one each time.
   */
  configWarningReuseIssue?: boolean;
  /**
   * Configuration object to define language or manager version constraints.
   */
  constraints?: {
    [k: string]: string | undefined;
  };
  /**
   * Perform release filtering based on language constraints.
   */
  constraintsFiltering?: 'none' | 'strict';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its containerbase cache. If left empty, Renovate creates a subdirectory within the `cacheDir`.
   */
  containerbaseDir?: string;
  copier?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Custom managers using regex matching.
   */
  customManagers?: {
    description?: string[] | string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    autoReplaceStringTemplate?: string;
    /**
     * Optional `currentValue` for extracted dependencies. Valid only within a `customManagers` object.
     */
    currentValueTemplate?: string;
    /**
     * Custom manager to use. Valid only within a `customManagers` object.
     */
    customType?: 'jsonata' | 'regex';
    /**
     * Optional datasource for extracted dependencies. Valid only within a `customManagers` object.
     */
    datasourceTemplate?: string;
    /**
     * Optional depName for extracted dependencies. Valid only within a `customManagers` object.
     */
    depNameTemplate?: string;
    /**
     * Optional `depType` for extracted dependencies. Valid only within a `customManagers` object.
     */
    depTypeTemplate?: string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    extractVersionTemplate?: string;
    /**
     * It specifies the syntax of the package file being managed by the custom JSONata manager.
     */
    fileFormat?: 'json' | 'toml' | 'yaml';
    /**
     * RegEx (`re2`) and glob patterns for matching manager files.
     */
    managerFilePatterns?: string[] | string;
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * Strategy how to interpret matchStrings.
     */
    matchStringsStrategy?: 'any' | 'recursive' | 'combination';
    /**
     * Optional packageName for extracted dependencies, else defaults to `depName` value. Valid only within a `customManagers` object.
     */
    packageNameTemplate?: string;
    /**
     * Optional registry URL for extracted dependencies. Valid only within a `customManagers` object.
     */
    registryUrlTemplate?: string;
    /**
     * Optional versioning for extracted dependencies. Valid only within a `customManagers` object.
     */
    versioningTemplate?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Customize sections in the Dependency Dashboard issue.
   */
  customizeDashboard?: {
    [k: string]: string | undefined;
  };
  /**
   * List of registry URLs to use as the default for a datasource.
   */
  defaultRegistryUrls?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the additional self-hosted config file after reading it.
   */
  deleteAdditionalConfigFile?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the self-hosted config file after reading it.
   */
  deleteConfigFile?: boolean;
  /**
   * Whether to create a "Dependency Dashboard" issue in the repository.
   */
  dependencyDashboard?: boolean;
  /**
   * Controls if updates need manual approval from the Dependency Dashboard issue before PRs are created.
   */
  dependencyDashboardApproval?: boolean;
  /**
   * Set to `true` to let Renovate close the Dependency Dashboard issue if there are no more updates.
   */
  dependencyDashboardAutoclose?: boolean;
  /**
   * The category to group branches on the Dependency Dashboard issue.
   */
  dependencyDashboardCategory?: string | null;
  /**
   * Any text added here will be placed last in the Dependency Dashboard issue body, with a divider separator before it.
   */
  dependencyDashboardFooter?: string;
  /**
   * Any text added here will be placed first in the Dependency Dashboard issue body.
   */
  dependencyDashboardHeader?: string;
  /**
   * These labels will always be applied on the Dependency Dashboard issue, even when they have been removed manually.
   */
  dependencyDashboardLabels?: string[] | null;
  /**
   * Control if the Dependency Dashboard issue lists CVEs supplied by [osv.dev](https://osv.dev).
   */
  dependencyDashboardOSVVulnerabilitySummary?: 'none' | 'all' | 'unresolved';
  /**
   * Controls whether abandoned packages are reported in the dependency dashboard.
   */
  dependencyDashboardReportAbandonment?: boolean;
  /**
   * Title for the Dependency Dashboard issue.
   */
  dependencyDashboardTitle?: string;
  'deps-edn'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Plain text description for a config or preset.
   */
  description?: string[] | string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect global manager configuration from the file system.
   */
  detectGlobalManagerConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect host rules from environment variables.
   */
  detectHostRulesFromEnv?: boolean;
  devbox?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to add a prefix to the Renovate Docker sidecar container names and labels.
   */
  dockerChildPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Pass CLI flags to `docker run` command when `binarySource=docker`.
   */
  dockerCliOptions?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * By default, Renovate fetches up to 20 pages of Docker tags from registries. But you can set your own limit with this config option.
   */
  dockerMaxPages?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default Renovate sidecar image.
   */
  dockerSidecarImage?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the `UID` and `GID` for Docker-based binaries if you use `binarySource=docker`.
   */
  dockerUser?: string;
  dockerfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set to `true` then Renovate creates draft PRs, instead of normal status PRs.
   */
  draftPR?: boolean;
  droneci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If enabled, perform a dry run by logging messages instead of creating/updating/deleting branches and PRs.
   */
  dryRun?: ('extract' | 'lookup' | 'full') | null;
  /**
   * Enable or disable corresponding functionality.
   */
  enabled?: boolean;
  /**
   * A list of package managers to enable. Only managers on the list are enabled.
   */
  enabledManagers?: string[];
  encrypted?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom41;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Warning text to use if encrypted config is found.
   */
  encryptedWarning?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Custom endpoint to use.
   */
  endpoint?: string | null;
  env?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A file matching any of these glob patterns will not be committed, even if the file has been updated.
   */
  excludeCommitPaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Default execution timeout in minutes for child processes Renovate creates.
   */
  executionTimeout?: number;
  /**
   * Expand the configured code owner groups into a full list of group members.
   */
  expandCodeOwnersGroups?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow passing of all environment variables to package managers.
   */
  exposeAllEnv?: boolean;
  /**
   * Configuration presets to use or extend.
   */
  extends?: string[] | string;
  /**
   * A regex (`re2`) to extract a version from a datasource's raw version string.
   */
  extractVersion?: string;
  /**
   * Controls if and when changelogs/release notes are fetched.
   */
  fetchChangeLogs?: 'off' | 'branch' | 'pr';
  /**
   * Filter reviewers and assignees based on their availability.
   */
  filterUnavailableUsers?: boolean;
  fleet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If defined, packages will follow this release tag exactly.
   */
  followTag?: string;
  force?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Decides if CLI configuration options are moved to the `force` config section.
   */
  forceCli?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to create forks as needed at runtime when running in "fork mode".
   */
  forkCreation?: boolean;
  /**
   * Disallow maintainers to push to Renovate pull requests when running in fork mode.
   */
  forkModeDisallowMaintainerEdits?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The preferred organization to create or find forked repositories, when in fork mode.
   */
  forkOrg?: string;
  /**
   * Whether to process forked repositories. By default, all forked repositories are skipped when in `autodiscover` mode.
   */
  forkProcessing?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set a personal access token here to enable "fork mode".
   */
  forkToken?: string;
  fvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Author to use for Git commits. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitAuthor?: string;
  /**
   * Git authors which are ignored by Renovate. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitIgnoredAuthors?: string[];
  /**
   * Ignore approval rules for MRs created by Renovate, which is useful for automerge.
   */
  gitLabIgnoreApprovals?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Which Git commands will be run with the `--no-verify` option.
   */
  gitNoVerify?: ('commit' | 'push')[] | ('commit' | 'push');
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * PGP key to use for signing Git commits.
   */
  gitPrivateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Passphrase for the `gitPrivateKey`
   */
  gitPrivateKeyPassphrase?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configure the timeout with a number of milliseconds to wait for a Git task.
   */
  gitTimeout?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Overrides the default resolution for Git remote, e.g. to switch GitLab from HTTPS to SSH-based.
   */
  gitUrl?: 'default' | 'ssh' | 'endpoint';
  'github-actions'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Display warnings about GitHub token not being set.
   */
  githubTokenWarn?: boolean;
  gitlabci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configuration presets to use or extend for a self-hosted config.
   */
  globalExtends?: string[];
  /**
   * Directory pattern to run `go get` on.
   */
  goGetDirs?: string[];
  gomod?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Human understandable name for the dependency group.
   */
  groupName?: string | null;
  /**
   * Slug to use for group (e.g. in branch name). Slug is calculated from `groupName` if `null`.
   */
  groupSlug?: string | null;
  /**
   * If enabled, branch names will use a hashing function to ensure each branch has that length.
   */
  hashedBranchLength?: number | null;
  'haskell-cabal'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Host rules/configuration including credentials.
   */
  hostRules?: {
    description?: string[] | string;
    /**
     * A list of HTTP status codes safe to ignore even when `abortOnError=true`.
     */
    abortIgnoreStatusCodes?: number[];
    /**
     * If enabled, Renovate aborts its run when HTTP request errors occur.
     */
    abortOnError?: boolean;
    /**
     * A list of package managers to enable artifact auth. Only managers on the list are enabled. All are enabled if `null`.
     */
    artifactAuth?: 'composer'[] | null;
    /**
     * Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
     */
    authType?: string;
    /**
     * Limit concurrent requests per host.
     */
    concurrentRequestLimit?: number | null;
    /**
     * Enable got DNS cache.
     */
    dnsCache?: boolean;
    /**
     * Enable got HTTP/2 support.
     */
    enableHttp2?: boolean;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    headers?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
    /**
     * hostType for a package rule. Can be a platform name or a datasource name.
     */
    hostType?: string;
    /**
     * The certificate chains in PEM format.
     */
    httpsCertificate?: string | null;
    /**
     * The overriding trusted CA certificate.
     */
    httpsCertificateAuthority?: string | null;
    /**
     * The private key in PEM format.
     */
    httpsPrivateKey?: string | null;
    /**
     * Explicitly turn on insecure Docker registry access (HTTP).
     */
    insecureRegistry?: boolean;
    /**
     * Enable HTTP keep-alive for hosts.
     */
    keepAlive?: boolean;
    /**
     * A domain name, host name or base URL to match against.
     */
    matchHost?: string;
    /**
     * Limit requests rate per host.
     */
    maxRequestsPerSecond?: number;
    /**
     * Maximum retry-after header value to wait for before retrying a failed request.
     */
    maxRetryAfter?: number;
    /**
     * Match against requests that only read data and do not mutate anything.
     */
    readOnly?: boolean;
    /**
     * Timeout (in milliseconds) for queries to external endpoints.
     */
    timeout?: number;
    [k: string]: unknown | undefined;
  }[];
  html?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in days to keep HTTP cache entries.
   */
  httpCacheTtlDays?: number;
  /**
   * Avoid upgrading from a non-deprecated version to a deprecated one.
   */
  ignoreDeprecated?: boolean;
  /**
   * Dependencies to ignore.
   */
  ignoreDeps?: string[];
  /**
   * Skip any package file whose path matches one of these. Can be a string or glob pattern.
   */
  ignorePaths?: string[];
  /**
   * Set this to `true` if `allowPlugins=true` but you wish to skip running plugins when updating lock files.
   */
  ignorePlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to fetch the entire list of PRs instead of only those authored by the Renovate user.
   */
  ignorePrAuthor?: boolean;
  /**
   * A list of presets to ignore, including any that are nested inside an `extends` array.
   */
  ignorePresets?: string[] | string;
  /**
   * Reviewers to be ignored in PR reviewers presence (either username or email address depending on the platform).
   */
  ignoreReviewers?: string[];
  /**
   * Set this to `false` if `allowScripts=true` and you wish to run scripts when updating lock files.
   */
  ignoreScripts?: boolean;
  /**
   * Set to `true` to enable automerging without tests.
   */
  ignoreTests?: boolean;
  /**
   * Ignore versions with unstable SemVer.
   */
  ignoreUnstable?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to process repositories that are mirrors. By default, repositories that are mirrors are skipped.
   */
  includeMirrors?: boolean;
  /**
   * Include package files only within these defined paths.
   */
  includePaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate will inherit configuration from the `inheritConfigFileName` file in `inheritConfigRepoName`.
   */
  inheritConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look for this config file name in the `inheritConfigRepoName`.
   */
  inheritConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look in this repo for the `inheritConfigFileName`.
   */
  inheritConfigRepoName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, any `inheritedConfig` fetch error will result in an aborted run.
   */
  inheritConfigStrict?: boolean;
  /**
   * Whether to consider passing internal checks such as `minimumReleaseAge` when determining branch status.
   */
  internalChecksAsSuccess?: boolean;
  /**
   * When and how to filter based on internal checks.
   */
  internalChecksFilter?: 'strict' | 'flexible' | 'none';
  jenkins?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set, users can add this label to PRs to request they be kept updated with the base branch.
   */
  keepUpdatedLabel?: string;
  'kotlin-script'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Labels to set in Pull Request.
   */
  labels?: string[];
  leiningen?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Add a global or per-repo log context to each log entry.
   */
  logContext?: string | null;
  /**
   * Remap log levels to different levels.
   */
  logLevelRemap?: {
    description?: string[] | string;
    /**
     * Regex/minimatch expression to match against log message.
     */
    matchMessage?: string;
    /**
     * New log level to use if matchMessage matches.
     */
    newLogLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
    [k: string]: unknown | undefined;
  }[];
  major?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query the merge-confidence JSON API only for datasources that are part of this list.
   */
  mergeConfidenceDatasources?: ('go' | 'maven' | 'npm' | 'nuget' | 'packagist' | 'pypi' | 'rubygems')[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query this API for Merge Confidence data.
   */
  mergeConfidenceEndpoint?: string;
  meteor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * The number of a milestone. If set, the milestone will be set when Renovate creates the PR.
   */
  milestone?: number | null;
  /**
   * The minimum number of updates which must be in a group for branches to be created.
   */
  minimumGroupSize?: number;
  /**
   * Time required before a new release is considered stable.
   */
  minimumReleaseAge?: string | null;
  /**
   * When set in conjunction with `minimumReleaseAge`, controls whether the `releaseTimestamp` for a dependency update is required.
   */
  minimumReleaseAgeBehaviour?: 'timestamp-required' | 'timestamp-optional';
  minor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Mode of operation.
   */
  mode?: 'full' | 'silent';
  nix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * npm token used to authenticate with the default registry.
   */
  npmToken?: string;
  /**
   * String copy of `.npmrc` file. Use `\n` instead of line breaks.
   */
  npmrc?: string;
  /**
   * Whether to merge `config.npmrc` with repo `.npmrc` content if both are found.
   */
  npmrcMerge?: boolean;
  nuget?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Require a Configuration PR first.
   */
  onboarding?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding branch name.
   */
  onboardingBranch?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding commit message.
   */
  onboardingCommitMessage?: string | null;
  onboardingConfig?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding config file name.
   */
  onboardingConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Onboard the repository even if no dependencies are found.
   */
  onboardingNoDeps?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding PR title.
   */
  onboardingPrTitle?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to enable rebase/retry markdown checkbox for onboarding PRs.
   */
  onboardingRebaseCheckbox?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to perform a check for disabled config prior to cloning.
   */
  optimizeForDisabled?: boolean;
  osgi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Use vulnerability alerts from `osv.dev`.
   */
  osvVulnerabilityAlerts?: boolean;
  /**
   * Rules for matching packages.
   */
  packageRules?: {
    description?: string[] | string;
    /**
     * A version range or regex pattern capturing allowed versions for dependencies.
     */
    allowedVersions?: string;
    /**
     * Set a custom URL for the changelog. Renovate will put this URL in the PR body text.
     */
    changelogUrl?: string;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    /**
     * List of strings containing exact matches (e.g. `["main"]`) and/or regex expressions (e.g. `["/^release/.* /"]`). Valid only within a `packageRules` object.
     */
    matchBaseBranches?: string[] | string;
    /**
     * List of categories to match (for example: `["python"]`). Valid only within a `packageRules` object.
     */
    matchCategories?: string[] | string;
    /**
     * Merge confidence levels to match against (`low`, `neutral`, `high`, `very high`). Valid only within `packageRules` object.
     */
    matchConfidence?: ('low' | 'neutral' | 'high' | 'very high')[] | ('low' | 'neutral' | 'high' | 'very high');
    /**
     * Matches the current age of the package derived from its release timestamp. Valid only within a `packageRules` object.
     */
    matchCurrentAge?: string;
    /**
     * A regex or glob pattern to match against the raw `currentValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchCurrentValue?: string;
    /**
     * A version, or range of versions, to match against the current version of a package. Valid only within a `packageRules` object.
     */
    matchCurrentVersion?: string;
    /**
     * List of datasources to match (e.g. `["orb"]`). Valid only within a `packageRules` object.
     */
    matchDatasources?: string[] | string;
    /**
     * Dep names to match. Valid only within a `packageRules` object.
     */
    matchDepNames?: string[] | string;
    /**
     * List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
     */
    matchDepTypes?: string[] | string;
    /**
     * List of strings to do an exact match against package and lock files with full path. Only works inside a `packageRules` object.
     */
    matchFileNames?: string[];
    /**
     * A JSONata expression to match against the full config object. Valid only within a `packageRules` object.
     */
    matchJsonata?: string[];
    /**
     * List of package managers to match (e.g. `["pipenv"]`). Valid only within a `packageRules` object.
     */
    matchManagers?: string[] | string;
    /**
     * A regex or glob pattern to match against the raw `newValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchNewValue?: string;
    /**
     * Package names to match. Valid only within a `packageRules` object.
     */
    matchPackageNames?: string[] | string;
    /**
     * List of repositories to match (e.g. `["** /*-archived"]`). Valid only within a `packageRules` object.
     */
    matchRepositories?: string[] | string;
    /**
     * A list of exact match URLs (or URL patterns) to match sourceUrl against.
     */
    matchSourceUrls?: string[] | string;
    /**
     * Update types to match against (`major`, `minor`, `pin`, `pinDigest`, etc). Valid only within `packageRules` object.
     */
    matchUpdateTypes?:
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        )[]
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        );
    /**
     * Override the datasource value.
     */
    overrideDatasource?: string;
    /**
     * Override the depName value.
     */
    overrideDepName?: string;
    /**
     * Override the packageName value.
     */
    overridePackageName?: string;
    /**
     * Set sorting priority for PR creation. PRs with higher priority are created first, negative priority last.
     */
    prPriority?: number;
    /**
     * The name of the new dependency that replaces the old deprecated dependency.
     */
    replacementName?: string;
    /**
     * Controls what the replacement package name.
     */
    replacementNameTemplate?: string;
    /**
     * The version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersion?: string;
    /**
     * Template field for the version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersionTemplate?: string;
    /**
     * The source directory in which the package is present at its source.
     */
    sourceDirectory?: string;
    /**
     * The source URL of the package.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Password for authentication.
   */
  password?: string;
  patch?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`: keep repository data between runs instead of deleting the data.
   */
  persistRepoData?: boolean;
  pin?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to add digests to Dockerfile source images.
   */
  pinDigests?: boolean;
  'pip-compile'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Platform type of repository.
   */
  platform?:
    | 'azure'
    | 'bitbucket'
    | 'bitbucket-server'
    | 'codecommit'
    | 'forgejo'
    | 'gerrit'
    | 'gitea'
    | 'github'
    | 'gitlab'
    | 'local';
  /**
   * Controls if platform-native auto-merge is used.
   */
  platformAutomerge?: boolean;
  /**
   * Use platform API to perform commits instead of using Git directly.
   */
  platformCommit?: 'auto' | 'disabled' | 'enabled';
  poetry?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Enable post-update options to be run after package/artifact updating.
   */
  postUpdateOptions?: (
    | 'bundlerConservative'
    | 'composerWithAll'
    | 'dotnetWorkloadRestore'
    | 'gomodMassage'
    | 'gomodTidy'
    | 'gomodTidy1.17'
    | 'gomodTidyE'
    | 'gomodUpdateImportPaths'
    | 'gomodSkipVendor'
    | 'gomodVendor'
    | 'helmUpdateSubChartArchives'
    | 'kustomizeInflateHelmCharts'
    | 'npmDedupe'
    | 'npmInstallTwice'
    | 'pnpmDedupe'
    | 'yarnDedupeFewer'
    | 'yarnDedupeHighest'
  )[];
  postUpgradeTasks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * List of columns to use in PR bodies.
   */
  prBodyColumns?: string[];
  /**
   * Table column definitions to use in PR tables.
   */
  prBodyDefinitions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of extra notes or templates to include in the Pull Request body.
   */
  prBodyNotes?: string[] | string;
  /**
   * Pull Request body template. Controls which sections are rendered in the body of the pull request.
   */
  prBodyTemplate?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the maximum number of commits per Renovate run. By default there is no limit.
   */
  prCommitsPerRunLimit?: number;
  /**
   * Limit to a maximum of x concurrent branches/PRs. 0 means no limit.
   */
  prConcurrentLimit?: number;
  /**
   * When to create the PR for a branch.
   */
  prCreation?: 'immediate' | 'not-pending' | 'status-success' | 'approval';
  /**
   * Text added here will be placed last in the PR body, with a divider separator before it.
   */
  prFooter?: string;
  /**
   * Text added here will be placed first in the PR body.
   */
  prHeader?: string;
  /**
   * Rate limit PRs to maximum x created per hour. 0 means no limit.
   */
  prHourlyLimit?: number;
  /**
   * Timeout in hours for when `prCreation=not-pending`.
   */
  prNotPendingHours?: number;
  /**
   * Pull Request title template. Inherits from `commitMessage` if null.
   */
  prTitle?: string | null;
  /**
   * Whether to bypass appending extra context to the Pull Request title.
   */
  prTitleStrict?: boolean;
  'pre-commit'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache resolved presets in package cache.
   */
  presetCachePersistence?: boolean;
  /**
   * If enabled, Renovate logs the fully resolved config for each repository, plus the fully resolved presets.
   */
  printConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Server-side private key.
   */
  privateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Secondary or old private key to try.
   */
  privateKeyOld?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side private key.
   */
  privateKeyPath?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side old private key.
   */
  privateKeyPathOld?: string;
  processEnv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  productLinks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Set to `true` to enable branch pruning after automerging.
   */
  pruneBranchAfterAutomerge?: boolean;
  /**
   * Set to `false` to disable pruning stale branches.
   */
  pruneStaleBranches?: boolean;
  pub?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Determines how to modify or update existing ranges.
   */
  rangeStrategy?: 'auto' | 'pin' | 'bump' | 'replace' | 'widen' | 'update-lockfile' | 'in-range-only';
  /**
   * Label to request a rebase from Renovate bot.
   */
  rebaseLabel?: string;
  /**
   * Controls when Renovate rebases an existing branch.
   */
  rebaseWhen?: 'auto' | 'never' | 'conflicted' | 'behind-base-branch' | 'automerging';
  /**
   * Recreate PRs even if same ones were closed previously.
   */
  recreateWhen?: 'auto' | 'always' | 'never';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Key prefix for redis cache entries.
   */
  redisPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, this Redis URL will be used for caching instead of the file system.
   */
  redisUrl?: string;
  regex?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * List of URLs to try for dependency lookup. Package manager specific.
   */
  registryUrls?: string[] | null;
  'renovate-config-presets'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Select whether to perform a direct replacement or alias replacement.
   */
  replacementApproach?: 'replace' | 'alias';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to where the file should be written. In case of `s3` this has to be a full S3 URI.
   */
  reportPath?: string | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set how, or if, reports should be generated.
   */
  reportType?: ('logging' | 'file' | 's3') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of Repositories.
   */
  repositories?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * This option decides if Renovate uses a JSON cache to speed up extractions.
   */
  repositoryCache?: 'disabled' | 'enabled' | 'reset';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the type of renovate repository cache if `repositoryCache` is enabled.
   */
  repositoryCacheType?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls Renovate's behavior regarding repository config files such as `renovate.json`.
   */
  requireConfig?: 'required' | 'optional' | 'ignored';
  /**
   * Ignore versions newer than npm "latest" version.
   */
  respectLatest?: boolean;
  /**
   * Requested reviewers for Pull Requests (either username or email address depending on the platform).
   */
  reviewers?: string[];
  /**
   * Determine reviewers based on configured code owners and changes in PR.
   */
  reviewersFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `reviewers`.
   */
  reviewersSampleSize?: number | null;
  rollback?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Create PRs to roll back versions if the current version is not found in the registry.
   */
  rollbackPrs?: boolean;
  'ruby-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will use this string as the `endpoint` when creating the AWS S3 client instance.
   */
  s3Endpoint?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will enable `forcePathStyle` when creating the AWS S3 client instance.
   */
  s3PathStyle?: boolean;
  sbt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit branch creation to these times of day or week.
   */
  schedule?: string[] | string;
  secrets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Commit scope to use if Semantic Commits are enabled.
   */
  semanticCommitScope?: string;
  /**
   * Commit type to use if Semantic Commits is enabled.
   */
  semanticCommitType?: string;
  /**
   * Enable Semantic Commit prefixes for commits and PR titles.
   */
  semanticCommits?: 'auto' | 'enabled' | 'disabled';
  /**
   * If set to `false`, Renovate will upgrade dependencies to their latest release only. Renovate will not separate major or minor branches.
   */
  separateMajorMinor?: boolean;
  /**
   * If set to `true`, Renovate will separate `minor` and `patch` updates into separate branches.
   */
  separateMinorPatch?: boolean;
  /**
   * If set to `true`, PRs will be raised separately for each available `major` upgrade version.
   */
  separateMultipleMajor?: boolean;
  /**
   * If set to `true`, Renovate creates separate PRs for each `minor` stream.
   */
  separateMultipleMinor?: boolean;
  'setup-cfg'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Skip Renovate's automatic artifact updating.
   */
  skipArtifactsUpdate?: boolean;
  /**
   * Skip installing modules/dependencies if lock file updating is possible without a full install.
   */
  skipInstalls?: boolean | null;
  statusCheckNames?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Label to make Renovate stop updating a PR.
   */
  stopUpdatingLabel?: string;
  /**
   * Options to suppress various types of warnings and other notifications.
   */
  suppressNotifications?: (
    | 'artifactErrors'
    | 'branchAutomergeFailure'
    | 'configErrorIssue'
    | 'dependencyLookupWarnings'
    | 'lockFileErrors'
    | 'missingCredentialsError'
    | 'onboardingClose'
    | 'prEditedNotification'
    | 'prIgnoreNotification'
  )[];
  sveltos?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Must conform to [IANA Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
   */
  timezone?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Repository Auth Token.
   */
  token?: string;
  travis?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Enable or disable Unicode emoji.
   */
  unicodeEmoji?: boolean;
  unity3d?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to update internal dep versions in a monorepo. Works on Yarn Workspaces.
   */
  updateInternalDeps?: boolean;
  /**
   * Whether to update branches when not scheduled. Renovate will not create branches outside of the schedule.
   */
  updateNotScheduled?: boolean;
  /**
   * Whether to update pinned (single version) dependencies or not.
   */
  updatePinnedDependencies?: boolean;
  /**
   * Whether to read configuration from base branches instead of only the default branch.
   */
  useBaseBranchConfig?: 'merge' | 'none';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `false`, Renovate does not try to access cloud metadata services.
   */
  useCloudMetadataServices?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to any string, Renovate will use this as the `user-agent` it sends with HTTP requests.
   */
  userAgent?: string | null;
  /**
   * User-facing strings for the Renovate comment when a PR is closed.
   */
  userStrings?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Username for authentication.
   */
  username?: string;
  variables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  velaci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A regex (`re2`) with named capture groups to show how version and compatibility are split from a raw version string.
   */
  versionCompatibility?: string;
  /**
   * Versioning to use for filtering and comparisons.
   */
  versioning?: (
    | (
        | 'aws-eks-addon'
        | 'aws-machine-image'
        | 'azure-rest-api'
        | 'bazel-module'
        | 'cargo'
        | 'composer'
        | 'conan'
        | 'conda'
        | 'deb'
        | 'debian'
        | 'devbox'
        | 'docker'
        | 'git'
        | 'glasskube'
        | 'go-mod-directive'
        | 'gradle'
        | 'hashicorp'
        | 'helm'
        | 'hermit'
        | 'hex'
        | 'ivy'
        | 'kubernetes-api'
        | 'lambda-node'
        | 'loose'
        | 'maven'
        | 'nixpkgs'
        | 'node'
        | 'npm'
        | 'nuget'
        | 'pep440'
        | 'perl'
        | 'poetry'
        | 'pvp'
        | 'python'
        | 'redhat'
        | 'regex'
        | 'rez'
        | 'rpm'
        | 'ruby'
        | 'same-major'
        | 'semver'
        | 'semver-coerced'
        | 'semver-partial'
        | 'swift'
        | 'ubuntu'
        | 'unity3d'
        | 'unity3d-packages'
      )
    | string
  ) &
    string;
  vulnerabilityAlerts?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Writes discovered repositories to a JSON file and then exit.
   */
  writeDiscoveredRepos?: string;
  [k: string]: unknown | undefined;
} | null;

export interface JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom {
  /**
   * Flags packages that have not been updated within this period as abandoned.
   */
  abandonmentThreshold?: string | null;
  /**
   * Labels to add to Pull Request.
   */
  addLabels?: string[];
  /**
   * Additional string value to be appended to `branchPrefix`.
   */
  additionalBranchPrefix?: string;
  /**
   * Additional reviewers for Pull Requests (in contrast to `reviewers`, this option adds to the existing reviewer list, rather than replacing it).
   */
  additionalReviewers?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow custom crate registries.
   */
  allowCustomCrateRegistries?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install plugins.
   */
  allowPlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install scripts.
   */
  allowScripts?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of regular expressions that decide which commands are allowed in post-upgrade tasks.
   */
  allowedCommands?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for environment variable names in repository env config.
   */
  allowedEnv?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for header names in repository hostRules config.
   */
  allowedHeaders?: string[];
  ansible?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Assign reviewers and assignees even if the PR is to be automerged.
   */
  assignAutomerge?: boolean;
  /**
   * Assignees for Pull Request (either username or email address depending on the platform).
   */
  assignees?: string[];
  /**
   * Determine assignees based on configured code owners and changes in PR.
   */
  assigneesFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `assignees`.
   */
  assigneesSampleSize?: number | null;
  /**
   * Set to `true` to automatically approve PRs.
   */
  autoApprove?: boolean;
  /**
   * Control whether replacement regular expressions are global matches or only the first match.
   */
  autoReplaceGlobalMatch?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Autodiscover all repositories.
   */
  autodiscover?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories.
   */
  autodiscoverFilter?: (string[] | string) & (unknown[] | null);
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by namespaces.
   */
  autodiscoverNamespaces?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by project names.
   */
  autodiscoverProjects?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The order method for autodiscover server side repository search.
   */
  autodiscoverRepoOrder?: ('asc' | 'desc') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The sort method for autodiscover server side repository search.
   */
  autodiscoverRepoSort?: ('alpha' | 'created' | 'updated' | 'size' | 'id') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by topics.
   */
  autodiscoverTopics?: string[] | null;
  /**
   * Whether to automerge branches/PRs automatically, without human intervention.
   */
  automerge?: boolean;
  /**
   * PR comment to add to trigger automerge. Only used if `automergeType=pr-comment`.
   */
  automergeComment?: string;
  /**
   * Limit automerge to these times of day or week.
   */
  automergeSchedule?: string[] | string;
  /**
   * The merge strategy to use when automerging PRs. Used only if `automergeType=pr`.
   */
  automergeStrategy?: 'auto' | 'fast-forward' | 'merge-commit' | 'rebase' | 'rebase-merge' | 'squash';
  /**
   * How to automerge, if enabled.
   */
  automergeType?: 'branch' | 'pr' | 'pr-comment';
  'azure-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The id of an existing work item on Azure Boards to link to each PR.
   */
  azureWorkItemId?: number;
  /**
   * List of one or more custom base branches defined as exact strings and/or via regex expressions.
   */
  baseBranchPatterns?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The base directory for Renovate to store local files, including repository files and cache. If left empty, Renovate will create its own temporary directory to use.
   */
  baseDir?: string;
  batect?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The PR tasks will be automatically completed after the PR is raised.
   */
  bbAutoResolvePrTasks?: boolean;
  /**
   * Use the default reviewers (Bitbucket only).
   */
  bbUseDefaultReviewers?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Use the repository's [development branch](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/#The-branching-model) as the repository's default branch.
   */
  bbUseDevelopmentBranch?: boolean;
  bicep?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls how third-party tools like npm or Gradle are called: directly, via Docker sidecar containers, or via dynamic install.
   */
  binarySource?: 'global' | 'docker' | 'install' | 'hermit';
  'bitbucket-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit to a maximum of x concurrent branches. 0 means no limit, `null` (default) inherits value from `prConcurrentLimit`.
   */
  branchConcurrentLimit?: number | null;
  /**
   * Branch name template.
   */
  branchName?: string;
  /**
   * Whether to be strict about the use of special characters within the branch name.
   */
  branchNameStrict?: boolean;
  /**
   * Prefix to use for all branch names.
   */
  branchPrefix?: string;
  /**
   * Old branchPrefix value to check for existing PRs.
   */
  branchPrefixOld?: string;
  /**
   * Branch topic.
   */
  branchTopic?: string;
  buildkite?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Bump the version in the package file being updated.
   */
  bumpVersion?: 'major' | 'minor' | 'patch' | 'prerelease';
  /**
   * A list of bumpVersion config options to bump generic version numbers.
   */
  bumpVersions?: {
    description?: string[] | string;
    /**
     * The semver level to use when bumping versions. This is used by the `bumpVersions` feature.
     */
    bumpType?: string;
    /**
     * A list of patterns to match files that contain the version string.
     */
    filePatterns?: string[];
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * A name for the bumpVersion config. This is used for logging and debugging.
     */
    name?: string;
    [k: string]: unknown | undefined;
  }[];
  bun?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its cache. If left empty, Renovate creates a subdirectory within the `baseDir`.
   */
  cacheDir?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in minutes to keep datasource cache entries.
   */
  cacheHardTtlMinutes?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache private packages in the datasource cache. This is useful for self-hosted setups
   */
  cachePrivatePackages?: boolean;
  cacheTtlOverride?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of branch names to mark for creation or rebasing as if it was selected in the Dependency Dashboard issue.
   */
  checkedBranches?: string[];
  circleci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Set to `true` to initialize submodules during repository clone.
   */
  cloneSubmodules?: boolean;
  /**
   * List of submodules names or patterns to clone when cloneSubmodules=true.
   */
  cloneSubmodulesFilter?: string[];
  cloudbuild?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Commit message body template. Will be appended to commit message, separated by two line returns.
   */
  commitBody?: string;
  /**
   * If enabled, append a table in the commit message body describing all updates in the commit.
   */
  commitBodyTable?: boolean;
  /**
   * Message to use for commit messages and pull request titles.
   */
  commitMessage?: string;
  /**
   * Action verb to use in commit messages and PR titles.
   */
  commitMessageAction?: string;
  /**
   * Extra description used after the commit message topic - typically the version.
   */
  commitMessageExtra?: string;
  /**
   * Lowercase PR- and commit titles.
   */
  commitMessageLowerCase?: 'auto' | 'never';
  /**
   * Prefix to add to start of commit messages and PR titles. Uses a semantic prefix if `semanticCommits` is enabled.
   */
  commitMessagePrefix?: string;
  /**
   * Suffix to add to end of commit messages and PR titles.
   */
  commitMessageSuffix?: string;
  /**
   * The upgrade topic/noun used in commit messages and PR titles.
   */
  commitMessageTopic?: string;
  composer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Configure use of `--ignore-platform-reqs` or `--ignore-platform-req` for the Composer package manager.
   */
  composerIgnorePlatformReqs?: string[];
  conan?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If enabled, issues created by Renovate are set as confidential.
   */
  confidential?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of filenames where repository config will be stored.
   */
  configFileNames?: string[] | null;
  /**
   * Enable this to get config migration PRs when needed.
   */
  configMigration?: boolean;
  /**
   * Set this to `true` to make Renovate reuse/reopen an existing closed Config Warning issue, instead of opening a new one each time.
   */
  configWarningReuseIssue?: boolean;
  /**
   * Configuration object to define language or manager version constraints.
   */
  constraints?: {
    [k: string]: string | undefined;
  };
  /**
   * Perform release filtering based on language constraints.
   */
  constraintsFiltering?: 'none' | 'strict';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its containerbase cache. If left empty, Renovate creates a subdirectory within the `cacheDir`.
   */
  containerbaseDir?: string;
  copier?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Custom managers using regex matching.
   */
  customManagers?: {
    description?: string[] | string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    autoReplaceStringTemplate?: string;
    /**
     * Optional `currentValue` for extracted dependencies. Valid only within a `customManagers` object.
     */
    currentValueTemplate?: string;
    /**
     * Custom manager to use. Valid only within a `customManagers` object.
     */
    customType?: 'jsonata' | 'regex';
    /**
     * Optional datasource for extracted dependencies. Valid only within a `customManagers` object.
     */
    datasourceTemplate?: string;
    /**
     * Optional depName for extracted dependencies. Valid only within a `customManagers` object.
     */
    depNameTemplate?: string;
    /**
     * Optional `depType` for extracted dependencies. Valid only within a `customManagers` object.
     */
    depTypeTemplate?: string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    extractVersionTemplate?: string;
    /**
     * It specifies the syntax of the package file being managed by the custom JSONata manager.
     */
    fileFormat?: 'json' | 'toml' | 'yaml';
    /**
     * RegEx (`re2`) and glob patterns for matching manager files.
     */
    managerFilePatterns?: string[] | string;
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * Strategy how to interpret matchStrings.
     */
    matchStringsStrategy?: 'any' | 'recursive' | 'combination';
    /**
     * Optional packageName for extracted dependencies, else defaults to `depName` value. Valid only within a `customManagers` object.
     */
    packageNameTemplate?: string;
    /**
     * Optional registry URL for extracted dependencies. Valid only within a `customManagers` object.
     */
    registryUrlTemplate?: string;
    /**
     * Optional versioning for extracted dependencies. Valid only within a `customManagers` object.
     */
    versioningTemplate?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Customize sections in the Dependency Dashboard issue.
   */
  customizeDashboard?: {
    [k: string]: string | undefined;
  };
  /**
   * List of registry URLs to use as the default for a datasource.
   */
  defaultRegistryUrls?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the additional self-hosted config file after reading it.
   */
  deleteAdditionalConfigFile?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the self-hosted config file after reading it.
   */
  deleteConfigFile?: boolean;
  /**
   * Whether to create a "Dependency Dashboard" issue in the repository.
   */
  dependencyDashboard?: boolean;
  /**
   * Controls if updates need manual approval from the Dependency Dashboard issue before PRs are created.
   */
  dependencyDashboardApproval?: boolean;
  /**
   * Set to `true` to let Renovate close the Dependency Dashboard issue if there are no more updates.
   */
  dependencyDashboardAutoclose?: boolean;
  /**
   * The category to group branches on the Dependency Dashboard issue.
   */
  dependencyDashboardCategory?: string | null;
  /**
   * Any text added here will be placed last in the Dependency Dashboard issue body, with a divider separator before it.
   */
  dependencyDashboardFooter?: string;
  /**
   * Any text added here will be placed first in the Dependency Dashboard issue body.
   */
  dependencyDashboardHeader?: string;
  /**
   * These labels will always be applied on the Dependency Dashboard issue, even when they have been removed manually.
   */
  dependencyDashboardLabels?: string[] | null;
  /**
   * Control if the Dependency Dashboard issue lists CVEs supplied by [osv.dev](https://osv.dev).
   */
  dependencyDashboardOSVVulnerabilitySummary?: 'none' | 'all' | 'unresolved';
  /**
   * Controls whether abandoned packages are reported in the dependency dashboard.
   */
  dependencyDashboardReportAbandonment?: boolean;
  /**
   * Title for the Dependency Dashboard issue.
   */
  dependencyDashboardTitle?: string;
  'deps-edn'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Plain text description for a config or preset.
   */
  description?: string[] | string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect global manager configuration from the file system.
   */
  detectGlobalManagerConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect host rules from environment variables.
   */
  detectHostRulesFromEnv?: boolean;
  devbox?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to add a prefix to the Renovate Docker sidecar container names and labels.
   */
  dockerChildPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Pass CLI flags to `docker run` command when `binarySource=docker`.
   */
  dockerCliOptions?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * By default, Renovate fetches up to 20 pages of Docker tags from registries. But you can set your own limit with this config option.
   */
  dockerMaxPages?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default Renovate sidecar image.
   */
  dockerSidecarImage?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the `UID` and `GID` for Docker-based binaries if you use `binarySource=docker`.
   */
  dockerUser?: string;
  dockerfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set to `true` then Renovate creates draft PRs, instead of normal status PRs.
   */
  draftPR?: boolean;
  droneci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If enabled, perform a dry run by logging messages instead of creating/updating/deleting branches and PRs.
   */
  dryRun?: ('extract' | 'lookup' | 'full') | null;
  /**
   * Enable or disable corresponding functionality.
   */
  enabled?: boolean;
  /**
   * A list of package managers to enable. Only managers on the list are enabled.
   */
  enabledManagers?: string[];
  encrypted?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom41;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Warning text to use if encrypted config is found.
   */
  encryptedWarning?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Custom endpoint to use.
   */
  endpoint?: string | null;
  env?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A file matching any of these glob patterns will not be committed, even if the file has been updated.
   */
  excludeCommitPaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Default execution timeout in minutes for child processes Renovate creates.
   */
  executionTimeout?: number;
  /**
   * Expand the configured code owner groups into a full list of group members.
   */
  expandCodeOwnersGroups?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow passing of all environment variables to package managers.
   */
  exposeAllEnv?: boolean;
  /**
   * Configuration presets to use or extend.
   */
  extends?: string[] | string;
  /**
   * A regex (`re2`) to extract a version from a datasource's raw version string.
   */
  extractVersion?: string;
  /**
   * Controls if and when changelogs/release notes are fetched.
   */
  fetchChangeLogs?: 'off' | 'branch' | 'pr';
  /**
   * Filter reviewers and assignees based on their availability.
   */
  filterUnavailableUsers?: boolean;
  fleet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If defined, packages will follow this release tag exactly.
   */
  followTag?: string;
  force?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Decides if CLI configuration options are moved to the `force` config section.
   */
  forceCli?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to create forks as needed at runtime when running in "fork mode".
   */
  forkCreation?: boolean;
  /**
   * Disallow maintainers to push to Renovate pull requests when running in fork mode.
   */
  forkModeDisallowMaintainerEdits?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The preferred organization to create or find forked repositories, when in fork mode.
   */
  forkOrg?: string;
  /**
   * Whether to process forked repositories. By default, all forked repositories are skipped when in `autodiscover` mode.
   */
  forkProcessing?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set a personal access token here to enable "fork mode".
   */
  forkToken?: string;
  fvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Author to use for Git commits. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitAuthor?: string;
  /**
   * Git authors which are ignored by Renovate. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitIgnoredAuthors?: string[];
  /**
   * Ignore approval rules for MRs created by Renovate, which is useful for automerge.
   */
  gitLabIgnoreApprovals?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Which Git commands will be run with the `--no-verify` option.
   */
  gitNoVerify?: ('commit' | 'push')[] | ('commit' | 'push');
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * PGP key to use for signing Git commits.
   */
  gitPrivateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Passphrase for the `gitPrivateKey`
   */
  gitPrivateKeyPassphrase?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configure the timeout with a number of milliseconds to wait for a Git task.
   */
  gitTimeout?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Overrides the default resolution for Git remote, e.g. to switch GitLab from HTTPS to SSH-based.
   */
  gitUrl?: 'default' | 'ssh' | 'endpoint';
  'github-actions'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Display warnings about GitHub token not being set.
   */
  githubTokenWarn?: boolean;
  gitlabci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configuration presets to use or extend for a self-hosted config.
   */
  globalExtends?: string[];
  /**
   * Directory pattern to run `go get` on.
   */
  goGetDirs?: string[];
  gomod?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Human understandable name for the dependency group.
   */
  groupName?: string | null;
  /**
   * Slug to use for group (e.g. in branch name). Slug is calculated from `groupName` if `null`.
   */
  groupSlug?: string | null;
  /**
   * If enabled, branch names will use a hashing function to ensure each branch has that length.
   */
  hashedBranchLength?: number | null;
  'haskell-cabal'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Host rules/configuration including credentials.
   */
  hostRules?: {
    description?: string[] | string;
    /**
     * A list of HTTP status codes safe to ignore even when `abortOnError=true`.
     */
    abortIgnoreStatusCodes?: number[];
    /**
     * If enabled, Renovate aborts its run when HTTP request errors occur.
     */
    abortOnError?: boolean;
    /**
     * A list of package managers to enable artifact auth. Only managers on the list are enabled. All are enabled if `null`.
     */
    artifactAuth?: 'composer'[] | null;
    /**
     * Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
     */
    authType?: string;
    /**
     * Limit concurrent requests per host.
     */
    concurrentRequestLimit?: number | null;
    /**
     * Enable got DNS cache.
     */
    dnsCache?: boolean;
    /**
     * Enable got HTTP/2 support.
     */
    enableHttp2?: boolean;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    headers?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
    /**
     * hostType for a package rule. Can be a platform name or a datasource name.
     */
    hostType?: string;
    /**
     * The certificate chains in PEM format.
     */
    httpsCertificate?: string | null;
    /**
     * The overriding trusted CA certificate.
     */
    httpsCertificateAuthority?: string | null;
    /**
     * The private key in PEM format.
     */
    httpsPrivateKey?: string | null;
    /**
     * Explicitly turn on insecure Docker registry access (HTTP).
     */
    insecureRegistry?: boolean;
    /**
     * Enable HTTP keep-alive for hosts.
     */
    keepAlive?: boolean;
    /**
     * A domain name, host name or base URL to match against.
     */
    matchHost?: string;
    /**
     * Limit requests rate per host.
     */
    maxRequestsPerSecond?: number;
    /**
     * Maximum retry-after header value to wait for before retrying a failed request.
     */
    maxRetryAfter?: number;
    /**
     * Match against requests that only read data and do not mutate anything.
     */
    readOnly?: boolean;
    /**
     * Timeout (in milliseconds) for queries to external endpoints.
     */
    timeout?: number;
    [k: string]: unknown | undefined;
  }[];
  html?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in days to keep HTTP cache entries.
   */
  httpCacheTtlDays?: number;
  /**
   * Avoid upgrading from a non-deprecated version to a deprecated one.
   */
  ignoreDeprecated?: boolean;
  /**
   * Dependencies to ignore.
   */
  ignoreDeps?: string[];
  /**
   * Skip any package file whose path matches one of these. Can be a string or glob pattern.
   */
  ignorePaths?: string[];
  /**
   * Set this to `true` if `allowPlugins=true` but you wish to skip running plugins when updating lock files.
   */
  ignorePlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to fetch the entire list of PRs instead of only those authored by the Renovate user.
   */
  ignorePrAuthor?: boolean;
  /**
   * A list of presets to ignore, including any that are nested inside an `extends` array.
   */
  ignorePresets?: string[] | string;
  /**
   * Reviewers to be ignored in PR reviewers presence (either username or email address depending on the platform).
   */
  ignoreReviewers?: string[];
  /**
   * Set this to `false` if `allowScripts=true` and you wish to run scripts when updating lock files.
   */
  ignoreScripts?: boolean;
  /**
   * Set to `true` to enable automerging without tests.
   */
  ignoreTests?: boolean;
  /**
   * Ignore versions with unstable SemVer.
   */
  ignoreUnstable?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to process repositories that are mirrors. By default, repositories that are mirrors are skipped.
   */
  includeMirrors?: boolean;
  /**
   * Include package files only within these defined paths.
   */
  includePaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate will inherit configuration from the `inheritConfigFileName` file in `inheritConfigRepoName`.
   */
  inheritConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look for this config file name in the `inheritConfigRepoName`.
   */
  inheritConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look in this repo for the `inheritConfigFileName`.
   */
  inheritConfigRepoName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, any `inheritedConfig` fetch error will result in an aborted run.
   */
  inheritConfigStrict?: boolean;
  /**
   * Whether to consider passing internal checks such as `minimumReleaseAge` when determining branch status.
   */
  internalChecksAsSuccess?: boolean;
  /**
   * When and how to filter based on internal checks.
   */
  internalChecksFilter?: 'strict' | 'flexible' | 'none';
  jenkins?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set, users can add this label to PRs to request they be kept updated with the base branch.
   */
  keepUpdatedLabel?: string;
  'kotlin-script'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Labels to set in Pull Request.
   */
  labels?: string[];
  leiningen?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Add a global or per-repo log context to each log entry.
   */
  logContext?: string | null;
  /**
   * Remap log levels to different levels.
   */
  logLevelRemap?: {
    description?: string[] | string;
    /**
     * Regex/minimatch expression to match against log message.
     */
    matchMessage?: string;
    /**
     * New log level to use if matchMessage matches.
     */
    newLogLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
    [k: string]: unknown | undefined;
  }[];
  major?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query the merge-confidence JSON API only for datasources that are part of this list.
   */
  mergeConfidenceDatasources?: ('go' | 'maven' | 'npm' | 'nuget' | 'packagist' | 'pypi' | 'rubygems')[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query this API for Merge Confidence data.
   */
  mergeConfidenceEndpoint?: string;
  meteor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * The number of a milestone. If set, the milestone will be set when Renovate creates the PR.
   */
  milestone?: number | null;
  /**
   * The minimum number of updates which must be in a group for branches to be created.
   */
  minimumGroupSize?: number;
  /**
   * Time required before a new release is considered stable.
   */
  minimumReleaseAge?: string | null;
  /**
   * When set in conjunction with `minimumReleaseAge`, controls whether the `releaseTimestamp` for a dependency update is required.
   */
  minimumReleaseAgeBehaviour?: 'timestamp-required' | 'timestamp-optional';
  minor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Mode of operation.
   */
  mode?: 'full' | 'silent';
  nix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * npm token used to authenticate with the default registry.
   */
  npmToken?: string;
  /**
   * String copy of `.npmrc` file. Use `\n` instead of line breaks.
   */
  npmrc?: string;
  /**
   * Whether to merge `config.npmrc` with repo `.npmrc` content if both are found.
   */
  npmrcMerge?: boolean;
  nuget?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Require a Configuration PR first.
   */
  onboarding?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding branch name.
   */
  onboardingBranch?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding commit message.
   */
  onboardingCommitMessage?: string | null;
  onboardingConfig?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding config file name.
   */
  onboardingConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Onboard the repository even if no dependencies are found.
   */
  onboardingNoDeps?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding PR title.
   */
  onboardingPrTitle?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to enable rebase/retry markdown checkbox for onboarding PRs.
   */
  onboardingRebaseCheckbox?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to perform a check for disabled config prior to cloning.
   */
  optimizeForDisabled?: boolean;
  osgi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Use vulnerability alerts from `osv.dev`.
   */
  osvVulnerabilityAlerts?: boolean;
  /**
   * Rules for matching packages.
   */
  packageRules?: {
    description?: string[] | string;
    /**
     * A version range or regex pattern capturing allowed versions for dependencies.
     */
    allowedVersions?: string;
    /**
     * Set a custom URL for the changelog. Renovate will put this URL in the PR body text.
     */
    changelogUrl?: string;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    /**
     * List of strings containing exact matches (e.g. `["main"]`) and/or regex expressions (e.g. `["/^release/.* /"]`). Valid only within a `packageRules` object.
     */
    matchBaseBranches?: string[] | string;
    /**
     * List of categories to match (for example: `["python"]`). Valid only within a `packageRules` object.
     */
    matchCategories?: string[] | string;
    /**
     * Merge confidence levels to match against (`low`, `neutral`, `high`, `very high`). Valid only within `packageRules` object.
     */
    matchConfidence?: ('low' | 'neutral' | 'high' | 'very high')[] | ('low' | 'neutral' | 'high' | 'very high');
    /**
     * Matches the current age of the package derived from its release timestamp. Valid only within a `packageRules` object.
     */
    matchCurrentAge?: string;
    /**
     * A regex or glob pattern to match against the raw `currentValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchCurrentValue?: string;
    /**
     * A version, or range of versions, to match against the current version of a package. Valid only within a `packageRules` object.
     */
    matchCurrentVersion?: string;
    /**
     * List of datasources to match (e.g. `["orb"]`). Valid only within a `packageRules` object.
     */
    matchDatasources?: string[] | string;
    /**
     * Dep names to match. Valid only within a `packageRules` object.
     */
    matchDepNames?: string[] | string;
    /**
     * List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
     */
    matchDepTypes?: string[] | string;
    /**
     * List of strings to do an exact match against package and lock files with full path. Only works inside a `packageRules` object.
     */
    matchFileNames?: string[];
    /**
     * A JSONata expression to match against the full config object. Valid only within a `packageRules` object.
     */
    matchJsonata?: string[];
    /**
     * List of package managers to match (e.g. `["pipenv"]`). Valid only within a `packageRules` object.
     */
    matchManagers?: string[] | string;
    /**
     * A regex or glob pattern to match against the raw `newValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchNewValue?: string;
    /**
     * Package names to match. Valid only within a `packageRules` object.
     */
    matchPackageNames?: string[] | string;
    /**
     * List of repositories to match (e.g. `["** /*-archived"]`). Valid only within a `packageRules` object.
     */
    matchRepositories?: string[] | string;
    /**
     * A list of exact match URLs (or URL patterns) to match sourceUrl against.
     */
    matchSourceUrls?: string[] | string;
    /**
     * Update types to match against (`major`, `minor`, `pin`, `pinDigest`, etc). Valid only within `packageRules` object.
     */
    matchUpdateTypes?:
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        )[]
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        );
    /**
     * Override the datasource value.
     */
    overrideDatasource?: string;
    /**
     * Override the depName value.
     */
    overrideDepName?: string;
    /**
     * Override the packageName value.
     */
    overridePackageName?: string;
    /**
     * Set sorting priority for PR creation. PRs with higher priority are created first, negative priority last.
     */
    prPriority?: number;
    /**
     * The name of the new dependency that replaces the old deprecated dependency.
     */
    replacementName?: string;
    /**
     * Controls what the replacement package name.
     */
    replacementNameTemplate?: string;
    /**
     * The version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersion?: string;
    /**
     * Template field for the version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersionTemplate?: string;
    /**
     * The source directory in which the package is present at its source.
     */
    sourceDirectory?: string;
    /**
     * The source URL of the package.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Password for authentication.
   */
  password?: string;
  patch?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`: keep repository data between runs instead of deleting the data.
   */
  persistRepoData?: boolean;
  pin?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to add digests to Dockerfile source images.
   */
  pinDigests?: boolean;
  'pip-compile'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Platform type of repository.
   */
  platform?:
    | 'azure'
    | 'bitbucket'
    | 'bitbucket-server'
    | 'codecommit'
    | 'forgejo'
    | 'gerrit'
    | 'gitea'
    | 'github'
    | 'gitlab'
    | 'local';
  /**
   * Controls if platform-native auto-merge is used.
   */
  platformAutomerge?: boolean;
  /**
   * Use platform API to perform commits instead of using Git directly.
   */
  platformCommit?: 'auto' | 'disabled' | 'enabled';
  poetry?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Enable post-update options to be run after package/artifact updating.
   */
  postUpdateOptions?: (
    | 'bundlerConservative'
    | 'composerWithAll'
    | 'dotnetWorkloadRestore'
    | 'gomodMassage'
    | 'gomodTidy'
    | 'gomodTidy1.17'
    | 'gomodTidyE'
    | 'gomodUpdateImportPaths'
    | 'gomodSkipVendor'
    | 'gomodVendor'
    | 'helmUpdateSubChartArchives'
    | 'kustomizeInflateHelmCharts'
    | 'npmDedupe'
    | 'npmInstallTwice'
    | 'pnpmDedupe'
    | 'yarnDedupeFewer'
    | 'yarnDedupeHighest'
  )[];
  postUpgradeTasks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * List of columns to use in PR bodies.
   */
  prBodyColumns?: string[];
  /**
   * Table column definitions to use in PR tables.
   */
  prBodyDefinitions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of extra notes or templates to include in the Pull Request body.
   */
  prBodyNotes?: string[] | string;
  /**
   * Pull Request body template. Controls which sections are rendered in the body of the pull request.
   */
  prBodyTemplate?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the maximum number of commits per Renovate run. By default there is no limit.
   */
  prCommitsPerRunLimit?: number;
  /**
   * Limit to a maximum of x concurrent branches/PRs. 0 means no limit.
   */
  prConcurrentLimit?: number;
  /**
   * When to create the PR for a branch.
   */
  prCreation?: 'immediate' | 'not-pending' | 'status-success' | 'approval';
  /**
   * Text added here will be placed last in the PR body, with a divider separator before it.
   */
  prFooter?: string;
  /**
   * Text added here will be placed first in the PR body.
   */
  prHeader?: string;
  /**
   * Rate limit PRs to maximum x created per hour. 0 means no limit.
   */
  prHourlyLimit?: number;
  /**
   * Timeout in hours for when `prCreation=not-pending`.
   */
  prNotPendingHours?: number;
  /**
   * Pull Request title template. Inherits from `commitMessage` if null.
   */
  prTitle?: string | null;
  /**
   * Whether to bypass appending extra context to the Pull Request title.
   */
  prTitleStrict?: boolean;
  'pre-commit'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache resolved presets in package cache.
   */
  presetCachePersistence?: boolean;
  /**
   * If enabled, Renovate logs the fully resolved config for each repository, plus the fully resolved presets.
   */
  printConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Server-side private key.
   */
  privateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Secondary or old private key to try.
   */
  privateKeyOld?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side private key.
   */
  privateKeyPath?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side old private key.
   */
  privateKeyPathOld?: string;
  processEnv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  productLinks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Set to `true` to enable branch pruning after automerging.
   */
  pruneBranchAfterAutomerge?: boolean;
  /**
   * Set to `false` to disable pruning stale branches.
   */
  pruneStaleBranches?: boolean;
  pub?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Determines how to modify or update existing ranges.
   */
  rangeStrategy?: 'auto' | 'pin' | 'bump' | 'replace' | 'widen' | 'update-lockfile' | 'in-range-only';
  /**
   * Label to request a rebase from Renovate bot.
   */
  rebaseLabel?: string;
  /**
   * Controls when Renovate rebases an existing branch.
   */
  rebaseWhen?: 'auto' | 'never' | 'conflicted' | 'behind-base-branch' | 'automerging';
  /**
   * Recreate PRs even if same ones were closed previously.
   */
  recreateWhen?: 'auto' | 'always' | 'never';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Key prefix for redis cache entries.
   */
  redisPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, this Redis URL will be used for caching instead of the file system.
   */
  redisUrl?: string;
  regex?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * List of URLs to try for dependency lookup. Package manager specific.
   */
  registryUrls?: string[] | null;
  'renovate-config-presets'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Select whether to perform a direct replacement or alias replacement.
   */
  replacementApproach?: 'replace' | 'alias';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to where the file should be written. In case of `s3` this has to be a full S3 URI.
   */
  reportPath?: string | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set how, or if, reports should be generated.
   */
  reportType?: ('logging' | 'file' | 's3') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of Repositories.
   */
  repositories?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * This option decides if Renovate uses a JSON cache to speed up extractions.
   */
  repositoryCache?: 'disabled' | 'enabled' | 'reset';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the type of renovate repository cache if `repositoryCache` is enabled.
   */
  repositoryCacheType?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls Renovate's behavior regarding repository config files such as `renovate.json`.
   */
  requireConfig?: 'required' | 'optional' | 'ignored';
  /**
   * Ignore versions newer than npm "latest" version.
   */
  respectLatest?: boolean;
  /**
   * Requested reviewers for Pull Requests (either username or email address depending on the platform).
   */
  reviewers?: string[];
  /**
   * Determine reviewers based on configured code owners and changes in PR.
   */
  reviewersFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `reviewers`.
   */
  reviewersSampleSize?: number | null;
  rollback?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Create PRs to roll back versions if the current version is not found in the registry.
   */
  rollbackPrs?: boolean;
  'ruby-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will use this string as the `endpoint` when creating the AWS S3 client instance.
   */
  s3Endpoint?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will enable `forcePathStyle` when creating the AWS S3 client instance.
   */
  s3PathStyle?: boolean;
  sbt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit branch creation to these times of day or week.
   */
  schedule?: string[] | string;
  secrets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Commit scope to use if Semantic Commits are enabled.
   */
  semanticCommitScope?: string;
  /**
   * Commit type to use if Semantic Commits is enabled.
   */
  semanticCommitType?: string;
  /**
   * Enable Semantic Commit prefixes for commits and PR titles.
   */
  semanticCommits?: 'auto' | 'enabled' | 'disabled';
  /**
   * If set to `false`, Renovate will upgrade dependencies to their latest release only. Renovate will not separate major or minor branches.
   */
  separateMajorMinor?: boolean;
  /**
   * If set to `true`, Renovate will separate `minor` and `patch` updates into separate branches.
   */
  separateMinorPatch?: boolean;
  /**
   * If set to `true`, PRs will be raised separately for each available `major` upgrade version.
   */
  separateMultipleMajor?: boolean;
  /**
   * If set to `true`, Renovate creates separate PRs for each `minor` stream.
   */
  separateMultipleMinor?: boolean;
  'setup-cfg'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Skip Renovate's automatic artifact updating.
   */
  skipArtifactsUpdate?: boolean;
  /**
   * Skip installing modules/dependencies if lock file updating is possible without a full install.
   */
  skipInstalls?: boolean | null;
  statusCheckNames?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Label to make Renovate stop updating a PR.
   */
  stopUpdatingLabel?: string;
  /**
   * Options to suppress various types of warnings and other notifications.
   */
  suppressNotifications?: (
    | 'artifactErrors'
    | 'branchAutomergeFailure'
    | 'configErrorIssue'
    | 'dependencyLookupWarnings'
    | 'lockFileErrors'
    | 'missingCredentialsError'
    | 'onboardingClose'
    | 'prEditedNotification'
    | 'prIgnoreNotification'
  )[];
  sveltos?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Must conform to [IANA Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
   */
  timezone?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Repository Auth Token.
   */
  token?: string;
  travis?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Enable or disable Unicode emoji.
   */
  unicodeEmoji?: boolean;
  unity3d?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to update internal dep versions in a monorepo. Works on Yarn Workspaces.
   */
  updateInternalDeps?: boolean;
  /**
   * Whether to update branches when not scheduled. Renovate will not create branches outside of the schedule.
   */
  updateNotScheduled?: boolean;
  /**
   * Whether to update pinned (single version) dependencies or not.
   */
  updatePinnedDependencies?: boolean;
  /**
   * Whether to read configuration from base branches instead of only the default branch.
   */
  useBaseBranchConfig?: 'merge' | 'none';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `false`, Renovate does not try to access cloud metadata services.
   */
  useCloudMetadataServices?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to any string, Renovate will use this as the `user-agent` it sends with HTTP requests.
   */
  userAgent?: string | null;
  /**
   * User-facing strings for the Renovate comment when a PR is closed.
   */
  userStrings?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Username for authentication.
   */
  username?: string;
  variables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  velaci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A regex (`re2`) with named capture groups to show how version and compatibility are split from a raw version string.
   */
  versionCompatibility?: string;
  /**
   * Versioning to use for filtering and comparisons.
   */
  versioning?: (
    | (
        | 'aws-eks-addon'
        | 'aws-machine-image'
        | 'azure-rest-api'
        | 'bazel-module'
        | 'cargo'
        | 'composer'
        | 'conan'
        | 'conda'
        | 'deb'
        | 'debian'
        | 'devbox'
        | 'docker'
        | 'git'
        | 'glasskube'
        | 'go-mod-directive'
        | 'gradle'
        | 'hashicorp'
        | 'helm'
        | 'hermit'
        | 'hex'
        | 'ivy'
        | 'kubernetes-api'
        | 'lambda-node'
        | 'loose'
        | 'maven'
        | 'nixpkgs'
        | 'node'
        | 'npm'
        | 'nuget'
        | 'pep440'
        | 'perl'
        | 'poetry'
        | 'pvp'
        | 'python'
        | 'redhat'
        | 'regex'
        | 'rez'
        | 'rpm'
        | 'ruby'
        | 'same-major'
        | 'semver'
        | 'semver-coerced'
        | 'semver-partial'
        | 'swift'
        | 'ubuntu'
        | 'unity3d'
        | 'unity3d-packages'
      )
    | string
  ) &
    string;
  vulnerabilityAlerts?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Writes discovered repositories to a JSON file and then exit.
   */
  writeDiscoveredRepos?: string;
  [k: string]: unknown | undefined;
}
/**
 * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
 *
 * Define presets here which have been removed or renamed and should be migrated automatically.
 */
export interface JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79 {
  /**
   * Flags packages that have not been updated within this period as abandoned.
   */
  abandonmentThreshold?: string | null;
  /**
   * Labels to add to Pull Request.
   */
  addLabels?: string[];
  /**
   * Additional string value to be appended to `branchPrefix`.
   */
  additionalBranchPrefix?: string;
  /**
   * Additional reviewers for Pull Requests (in contrast to `reviewers`, this option adds to the existing reviewer list, rather than replacing it).
   */
  additionalReviewers?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow custom crate registries.
   */
  allowCustomCrateRegistries?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install plugins.
   */
  allowPlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` if repositories are allowed to run install scripts.
   */
  allowScripts?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of regular expressions that decide which commands are allowed in post-upgrade tasks.
   */
  allowedCommands?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for environment variable names in repository env config.
   */
  allowedEnv?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of allowed patterns for header names in repository hostRules config.
   */
  allowedHeaders?: string[];
  ansible?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Assign reviewers and assignees even if the PR is to be automerged.
   */
  assignAutomerge?: boolean;
  /**
   * Assignees for Pull Request (either username or email address depending on the platform).
   */
  assignees?: string[];
  /**
   * Determine assignees based on configured code owners and changes in PR.
   */
  assigneesFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `assignees`.
   */
  assigneesSampleSize?: number | null;
  /**
   * Set to `true` to automatically approve PRs.
   */
  autoApprove?: boolean;
  /**
   * Control whether replacement regular expressions are global matches or only the first match.
   */
  autoReplaceGlobalMatch?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Autodiscover all repositories.
   */
  autodiscover?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories.
   */
  autodiscoverFilter?: (string[] | string) & (unknown[] | null);
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by namespaces.
   */
  autodiscoverNamespaces?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by project names.
   */
  autodiscoverProjects?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The order method for autodiscover server side repository search.
   */
  autodiscoverRepoOrder?: ('asc' | 'desc') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The sort method for autodiscover server side repository search.
   */
  autodiscoverRepoSort?: ('alpha' | 'created' | 'updated' | 'size' | 'id') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Filter the list of autodiscovered repositories by topics.
   */
  autodiscoverTopics?: string[] | null;
  /**
   * Whether to automerge branches/PRs automatically, without human intervention.
   */
  automerge?: boolean;
  /**
   * PR comment to add to trigger automerge. Only used if `automergeType=pr-comment`.
   */
  automergeComment?: string;
  /**
   * Limit automerge to these times of day or week.
   */
  automergeSchedule?: string[] | string;
  /**
   * The merge strategy to use when automerging PRs. Used only if `automergeType=pr`.
   */
  automergeStrategy?: 'auto' | 'fast-forward' | 'merge-commit' | 'rebase' | 'rebase-merge' | 'squash';
  /**
   * How to automerge, if enabled.
   */
  automergeType?: 'branch' | 'pr' | 'pr-comment';
  'azure-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The id of an existing work item on Azure Boards to link to each PR.
   */
  azureWorkItemId?: number;
  /**
   * List of one or more custom base branches defined as exact strings and/or via regex expressions.
   */
  baseBranchPatterns?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The base directory for Renovate to store local files, including repository files and cache. If left empty, Renovate will create its own temporary directory to use.
   */
  baseDir?: string;
  batect?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * The PR tasks will be automatically completed after the PR is raised.
   */
  bbAutoResolvePrTasks?: boolean;
  /**
   * Use the default reviewers (Bitbucket only).
   */
  bbUseDefaultReviewers?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Use the repository's [development branch](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/#The-branching-model) as the repository's default branch.
   */
  bbUseDevelopmentBranch?: boolean;
  bicep?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls how third-party tools like npm or Gradle are called: directly, via Docker sidecar containers, or via dynamic install.
   */
  binarySource?: 'global' | 'docker' | 'install' | 'hermit';
  'bitbucket-pipelines'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit to a maximum of x concurrent branches. 0 means no limit, `null` (default) inherits value from `prConcurrentLimit`.
   */
  branchConcurrentLimit?: number | null;
  /**
   * Branch name template.
   */
  branchName?: string;
  /**
   * Whether to be strict about the use of special characters within the branch name.
   */
  branchNameStrict?: boolean;
  /**
   * Prefix to use for all branch names.
   */
  branchPrefix?: string;
  /**
   * Old branchPrefix value to check for existing PRs.
   */
  branchPrefixOld?: string;
  /**
   * Branch topic.
   */
  branchTopic?: string;
  buildkite?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Bump the version in the package file being updated.
   */
  bumpVersion?: 'major' | 'minor' | 'patch' | 'prerelease';
  /**
   * A list of bumpVersion config options to bump generic version numbers.
   */
  bumpVersions?: {
    description?: string[] | string;
    /**
     * The semver level to use when bumping versions. This is used by the `bumpVersions` feature.
     */
    bumpType?: string;
    /**
     * A list of patterns to match files that contain the version string.
     */
    filePatterns?: string[];
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * A name for the bumpVersion config. This is used for logging and debugging.
     */
    name?: string;
    [k: string]: unknown | undefined;
  }[];
  bun?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its cache. If left empty, Renovate creates a subdirectory within the `baseDir`.
   */
  cacheDir?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in minutes to keep datasource cache entries.
   */
  cacheHardTtlMinutes?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache private packages in the datasource cache. This is useful for self-hosted setups
   */
  cachePrivatePackages?: boolean;
  cacheTtlOverride?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * A list of branch names to mark for creation or rebasing as if it was selected in the Dependency Dashboard issue.
   */
  checkedBranches?: string[];
  circleci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Set to `true` to initialize submodules during repository clone.
   */
  cloneSubmodules?: boolean;
  /**
   * List of submodules names or patterns to clone when cloneSubmodules=true.
   */
  cloneSubmodulesFilter?: string[];
  cloudbuild?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Commit message body template. Will be appended to commit message, separated by two line returns.
   */
  commitBody?: string;
  /**
   * If enabled, append a table in the commit message body describing all updates in the commit.
   */
  commitBodyTable?: boolean;
  /**
   * Message to use for commit messages and pull request titles.
   */
  commitMessage?: string;
  /**
   * Action verb to use in commit messages and PR titles.
   */
  commitMessageAction?: string;
  /**
   * Extra description used after the commit message topic - typically the version.
   */
  commitMessageExtra?: string;
  /**
   * Lowercase PR- and commit titles.
   */
  commitMessageLowerCase?: 'auto' | 'never';
  /**
   * Prefix to add to start of commit messages and PR titles. Uses a semantic prefix if `semanticCommits` is enabled.
   */
  commitMessagePrefix?: string;
  /**
   * Suffix to add to end of commit messages and PR titles.
   */
  commitMessageSuffix?: string;
  /**
   * The upgrade topic/noun used in commit messages and PR titles.
   */
  commitMessageTopic?: string;
  composer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Configure use of `--ignore-platform-reqs` or `--ignore-platform-req` for the Composer package manager.
   */
  composerIgnorePlatformReqs?: string[];
  conan?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If enabled, issues created by Renovate are set as confidential.
   */
  confidential?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of filenames where repository config will be stored.
   */
  configFileNames?: string[] | null;
  /**
   * Enable this to get config migration PRs when needed.
   */
  configMigration?: boolean;
  /**
   * Set this to `true` to make Renovate reuse/reopen an existing closed Config Warning issue, instead of opening a new one each time.
   */
  configWarningReuseIssue?: boolean;
  /**
   * Configuration object to define language or manager version constraints.
   */
  constraints?: {
    [k: string]: string | undefined;
  };
  /**
   * Perform release filtering based on language constraints.
   */
  constraintsFiltering?: 'none' | 'strict';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The directory where Renovate stores its containerbase cache. If left empty, Renovate creates a subdirectory within the `cacheDir`.
   */
  containerbaseDir?: string;
  copier?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Custom managers using regex matching.
   */
  customManagers?: {
    description?: string[] | string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    autoReplaceStringTemplate?: string;
    /**
     * Optional `currentValue` for extracted dependencies. Valid only within a `customManagers` object.
     */
    currentValueTemplate?: string;
    /**
     * Custom manager to use. Valid only within a `customManagers` object.
     */
    customType?: 'jsonata' | 'regex';
    /**
     * Optional datasource for extracted dependencies. Valid only within a `customManagers` object.
     */
    datasourceTemplate?: string;
    /**
     * Optional depName for extracted dependencies. Valid only within a `customManagers` object.
     */
    depNameTemplate?: string;
    /**
     * Optional `depType` for extracted dependencies. Valid only within a `customManagers` object.
     */
    depTypeTemplate?: string;
    /**
     * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
     */
    extractVersionTemplate?: string;
    /**
     * It specifies the syntax of the package file being managed by the custom JSONata manager.
     */
    fileFormat?: 'json' | 'toml' | 'yaml';
    /**
     * RegEx (`re2`) and glob patterns for matching manager files.
     */
    managerFilePatterns?: string[] | string;
    /**
     * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
     */
    matchStrings?: string[];
    /**
     * Strategy how to interpret matchStrings.
     */
    matchStringsStrategy?: 'any' | 'recursive' | 'combination';
    /**
     * Optional packageName for extracted dependencies, else defaults to `depName` value. Valid only within a `customManagers` object.
     */
    packageNameTemplate?: string;
    /**
     * Optional registry URL for extracted dependencies. Valid only within a `customManagers` object.
     */
    registryUrlTemplate?: string;
    /**
     * Optional versioning for extracted dependencies. Valid only within a `customManagers` object.
     */
    versioningTemplate?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Customize sections in the Dependency Dashboard issue.
   */
  customizeDashboard?: {
    [k: string]: string | undefined;
  };
  /**
   * List of registry URLs to use as the default for a datasource.
   */
  defaultRegistryUrls?: string[] | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the additional self-hosted config file after reading it.
   */
  deleteAdditionalConfigFile?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`, Renovate tries to delete the self-hosted config file after reading it.
   */
  deleteConfigFile?: boolean;
  /**
   * Whether to create a "Dependency Dashboard" issue in the repository.
   */
  dependencyDashboard?: boolean;
  /**
   * Controls if updates need manual approval from the Dependency Dashboard issue before PRs are created.
   */
  dependencyDashboardApproval?: boolean;
  /**
   * Set to `true` to let Renovate close the Dependency Dashboard issue if there are no more updates.
   */
  dependencyDashboardAutoclose?: boolean;
  /**
   * The category to group branches on the Dependency Dashboard issue.
   */
  dependencyDashboardCategory?: string | null;
  /**
   * Any text added here will be placed last in the Dependency Dashboard issue body, with a divider separator before it.
   */
  dependencyDashboardFooter?: string;
  /**
   * Any text added here will be placed first in the Dependency Dashboard issue body.
   */
  dependencyDashboardHeader?: string;
  /**
   * These labels will always be applied on the Dependency Dashboard issue, even when they have been removed manually.
   */
  dependencyDashboardLabels?: string[] | null;
  /**
   * Control if the Dependency Dashboard issue lists CVEs supplied by [osv.dev](https://osv.dev).
   */
  dependencyDashboardOSVVulnerabilitySummary?: 'none' | 'all' | 'unresolved';
  /**
   * Controls whether abandoned packages are reported in the dependency dashboard.
   */
  dependencyDashboardReportAbandonment?: boolean;
  /**
   * Title for the Dependency Dashboard issue.
   */
  dependencyDashboardTitle?: string;
  'deps-edn'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Plain text description for a config or preset.
   */
  description?: string[] | string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect global manager configuration from the file system.
   */
  detectGlobalManagerConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate tries to detect host rules from environment variables.
   */
  detectHostRulesFromEnv?: boolean;
  devbox?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to add a prefix to the Renovate Docker sidecar container names and labels.
   */
  dockerChildPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Pass CLI flags to `docker run` command when `binarySource=docker`.
   */
  dockerCliOptions?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * By default, Renovate fetches up to 20 pages of Docker tags from registries. But you can set your own limit with this config option.
   */
  dockerMaxPages?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default Renovate sidecar image.
   */
  dockerSidecarImage?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the `UID` and `GID` for Docker-based binaries if you use `binarySource=docker`.
   */
  dockerUser?: string;
  dockerfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set to `true` then Renovate creates draft PRs, instead of normal status PRs.
   */
  draftPR?: boolean;
  droneci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If enabled, perform a dry run by logging messages instead of creating/updating/deleting branches and PRs.
   */
  dryRun?: ('extract' | 'lookup' | 'full') | null;
  /**
   * Enable or disable corresponding functionality.
   */
  enabled?: boolean;
  /**
   * A list of package managers to enable. Only managers on the list are enabled.
   */
  enabledManagers?: string[];
  encrypted?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom41;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Warning text to use if encrypted config is found.
   */
  encryptedWarning?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Custom endpoint to use.
   */
  endpoint?: string | null;
  env?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A file matching any of these glob patterns will not be committed, even if the file has been updated.
   */
  excludeCommitPaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Default execution timeout in minutes for child processes Renovate creates.
   */
  executionTimeout?: number;
  /**
   * Expand the configured code owner groups into a full list of group members.
   */
  expandCodeOwnersGroups?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set this to `true` to allow passing of all environment variables to package managers.
   */
  exposeAllEnv?: boolean;
  /**
   * Configuration presets to use or extend.
   */
  extends?: string[] | string;
  /**
   * A regex (`re2`) to extract a version from a datasource's raw version string.
   */
  extractVersion?: string;
  /**
   * Controls if and when changelogs/release notes are fetched.
   */
  fetchChangeLogs?: 'off' | 'branch' | 'pr';
  /**
   * Filter reviewers and assignees based on their availability.
   */
  filterUnavailableUsers?: boolean;
  fleet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If defined, packages will follow this release tag exactly.
   */
  followTag?: string;
  force?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Decides if CLI configuration options are moved to the `force` config section.
   */
  forceCli?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to create forks as needed at runtime when running in "fork mode".
   */
  forkCreation?: boolean;
  /**
   * Disallow maintainers to push to Renovate pull requests when running in fork mode.
   */
  forkModeDisallowMaintainerEdits?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * The preferred organization to create or find forked repositories, when in fork mode.
   */
  forkOrg?: string;
  /**
   * Whether to process forked repositories. By default, all forked repositories are skipped when in `autodiscover` mode.
   */
  forkProcessing?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set a personal access token here to enable "fork mode".
   */
  forkToken?: string;
  fvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Author to use for Git commits. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitAuthor?: string;
  /**
   * Git authors which are ignored by Renovate. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
   */
  gitIgnoredAuthors?: string[];
  /**
   * Ignore approval rules for MRs created by Renovate, which is useful for automerge.
   */
  gitLabIgnoreApprovals?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Which Git commands will be run with the `--no-verify` option.
   */
  gitNoVerify?: ('commit' | 'push')[] | ('commit' | 'push');
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * PGP key to use for signing Git commits.
   */
  gitPrivateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Passphrase for the `gitPrivateKey`
   */
  gitPrivateKeyPassphrase?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configure the timeout with a number of milliseconds to wait for a Git task.
   */
  gitTimeout?: number;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Overrides the default resolution for Git remote, e.g. to switch GitLab from HTTPS to SSH-based.
   */
  gitUrl?: 'default' | 'ssh' | 'endpoint';
  'github-actions'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Display warnings about GitHub token not being set.
   */
  githubTokenWarn?: boolean;
  gitlabci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Configuration presets to use or extend for a self-hosted config.
   */
  globalExtends?: string[];
  /**
   * Directory pattern to run `go get` on.
   */
  goGetDirs?: string[];
  gomod?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Human understandable name for the dependency group.
   */
  groupName?: string | null;
  /**
   * Slug to use for group (e.g. in branch name). Slug is calculated from `groupName` if `null`.
   */
  groupSlug?: string | null;
  /**
   * If enabled, branch names will use a hashing function to ensure each branch has that length.
   */
  hashedBranchLength?: number | null;
  'haskell-cabal'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Host rules/configuration including credentials.
   */
  hostRules?: {
    description?: string[] | string;
    /**
     * A list of HTTP status codes safe to ignore even when `abortOnError=true`.
     */
    abortIgnoreStatusCodes?: number[];
    /**
     * If enabled, Renovate aborts its run when HTTP request errors occur.
     */
    abortOnError?: boolean;
    /**
     * A list of package managers to enable artifact auth. Only managers on the list are enabled. All are enabled if `null`.
     */
    artifactAuth?: 'composer'[] | null;
    /**
     * Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
     */
    authType?: string;
    /**
     * Limit concurrent requests per host.
     */
    concurrentRequestLimit?: number | null;
    /**
     * Enable got DNS cache.
     */
    dnsCache?: boolean;
    /**
     * Enable got HTTP/2 support.
     */
    enableHttp2?: boolean;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    headers?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
    /**
     * hostType for a package rule. Can be a platform name or a datasource name.
     */
    hostType?: string;
    /**
     * The certificate chains in PEM format.
     */
    httpsCertificate?: string | null;
    /**
     * The overriding trusted CA certificate.
     */
    httpsCertificateAuthority?: string | null;
    /**
     * The private key in PEM format.
     */
    httpsPrivateKey?: string | null;
    /**
     * Explicitly turn on insecure Docker registry access (HTTP).
     */
    insecureRegistry?: boolean;
    /**
     * Enable HTTP keep-alive for hosts.
     */
    keepAlive?: boolean;
    /**
     * A domain name, host name or base URL to match against.
     */
    matchHost?: string;
    /**
     * Limit requests rate per host.
     */
    maxRequestsPerSecond?: number;
    /**
     * Maximum retry-after header value to wait for before retrying a failed request.
     */
    maxRetryAfter?: number;
    /**
     * Match against requests that only read data and do not mutate anything.
     */
    readOnly?: boolean;
    /**
     * Timeout (in milliseconds) for queries to external endpoints.
     */
    timeout?: number;
    [k: string]: unknown | undefined;
  }[];
  html?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Maximum duration in days to keep HTTP cache entries.
   */
  httpCacheTtlDays?: number;
  /**
   * Avoid upgrading from a non-deprecated version to a deprecated one.
   */
  ignoreDeprecated?: boolean;
  /**
   * Dependencies to ignore.
   */
  ignoreDeps?: string[];
  /**
   * Skip any package file whose path matches one of these. Can be a string or glob pattern.
   */
  ignorePaths?: string[];
  /**
   * Set this to `true` if `allowPlugins=true` but you wish to skip running plugins when updating lock files.
   */
  ignorePlugins?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to fetch the entire list of PRs instead of only those authored by the Renovate user.
   */
  ignorePrAuthor?: boolean;
  /**
   * A list of presets to ignore, including any that are nested inside an `extends` array.
   */
  ignorePresets?: string[] | string;
  /**
   * Reviewers to be ignored in PR reviewers presence (either username or email address depending on the platform).
   */
  ignoreReviewers?: string[];
  /**
   * Set this to `false` if `allowScripts=true` and you wish to run scripts when updating lock files.
   */
  ignoreScripts?: boolean;
  /**
   * Set to `true` to enable automerging without tests.
   */
  ignoreTests?: boolean;
  /**
   * Ignore versions with unstable SemVer.
   */
  ignoreUnstable?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Whether to process repositories that are mirrors. By default, repositories that are mirrors are skipped.
   */
  includeMirrors?: boolean;
  /**
   * Include package files only within these defined paths.
   */
  includePaths?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, Renovate will inherit configuration from the `inheritConfigFileName` file in `inheritConfigRepoName`.
   */
  inheritConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look for this config file name in the `inheritConfigRepoName`.
   */
  inheritConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Renovate will look in this repo for the `inheritConfigFileName`.
   */
  inheritConfigRepoName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `true`, any `inheritedConfig` fetch error will result in an aborted run.
   */
  inheritConfigStrict?: boolean;
  /**
   * Whether to consider passing internal checks such as `minimumReleaseAge` when determining branch status.
   */
  internalChecksAsSuccess?: boolean;
  /**
   * When and how to filter based on internal checks.
   */
  internalChecksFilter?: 'strict' | 'flexible' | 'none';
  jenkins?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * If set, users can add this label to PRs to request they be kept updated with the base branch.
   */
  keepUpdatedLabel?: string;
  'kotlin-script'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Labels to set in Pull Request.
   */
  labels?: string[];
  leiningen?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Add a global or per-repo log context to each log entry.
   */
  logContext?: string | null;
  /**
   * Remap log levels to different levels.
   */
  logLevelRemap?: {
    description?: string[] | string;
    /**
     * Regex/minimatch expression to match against log message.
     */
    matchMessage?: string;
    /**
     * New log level to use if matchMessage matches.
     */
    newLogLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
    [k: string]: unknown | undefined;
  }[];
  major?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query the merge-confidence JSON API only for datasources that are part of this list.
   */
  mergeConfidenceDatasources?: ('go' | 'maven' | 'npm' | 'nuget' | 'packagist' | 'pypi' | 'rubygems')[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will query this API for Merge Confidence data.
   */
  mergeConfidenceEndpoint?: string;
  meteor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * The number of a milestone. If set, the milestone will be set when Renovate creates the PR.
   */
  milestone?: number | null;
  /**
   * The minimum number of updates which must be in a group for branches to be created.
   */
  minimumGroupSize?: number;
  /**
   * Time required before a new release is considered stable.
   */
  minimumReleaseAge?: string | null;
  /**
   * When set in conjunction with `minimumReleaseAge`, controls whether the `releaseTimestamp` for a dependency update is required.
   */
  minimumReleaseAgeBehaviour?: 'timestamp-required' | 'timestamp-optional';
  minor?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Mode of operation.
   */
  mode?: 'full' | 'silent';
  nix?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * npm token used to authenticate with the default registry.
   */
  npmToken?: string;
  /**
   * String copy of `.npmrc` file. Use `\n` instead of line breaks.
   */
  npmrc?: string;
  /**
   * Whether to merge `config.npmrc` with repo `.npmrc` content if both are found.
   */
  npmrcMerge?: boolean;
  nuget?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Require a Configuration PR first.
   */
  onboarding?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding branch name.
   */
  onboardingBranch?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding commit message.
   */
  onboardingCommitMessage?: string | null;
  onboardingConfig?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding config file name.
   */
  onboardingConfigFileName?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Onboard the repository even if no dependencies are found.
   */
  onboardingNoDeps?: 'auto' | 'enabled' | 'disabled';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Change this value to override the default onboarding PR title.
   */
  onboardingPrTitle?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to enable rebase/retry markdown checkbox for onboarding PRs.
   */
  onboardingRebaseCheckbox?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set to `true` to perform a check for disabled config prior to cloning.
   */
  optimizeForDisabled?: boolean;
  osgi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Use vulnerability alerts from `osv.dev`.
   */
  osvVulnerabilityAlerts?: boolean;
  /**
   * Rules for matching packages.
   */
  packageRules?: {
    description?: string[] | string;
    /**
     * A version range or regex pattern capturing allowed versions for dependencies.
     */
    allowedVersions?: string;
    /**
     * Set a custom URL for the changelog. Renovate will put this URL in the PR body text.
     */
    changelogUrl?: string;
    /**
     * Enable or disable corresponding functionality.
     */
    enabled?: boolean;
    /**
     * List of strings containing exact matches (e.g. `["main"]`) and/or regex expressions (e.g. `["/^release/.* /"]`). Valid only within a `packageRules` object.
     */
    matchBaseBranches?: string[] | string;
    /**
     * List of categories to match (for example: `["python"]`). Valid only within a `packageRules` object.
     */
    matchCategories?: string[] | string;
    /**
     * Merge confidence levels to match against (`low`, `neutral`, `high`, `very high`). Valid only within `packageRules` object.
     */
    matchConfidence?: ('low' | 'neutral' | 'high' | 'very high')[] | ('low' | 'neutral' | 'high' | 'very high');
    /**
     * Matches the current age of the package derived from its release timestamp. Valid only within a `packageRules` object.
     */
    matchCurrentAge?: string;
    /**
     * A regex or glob pattern to match against the raw `currentValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchCurrentValue?: string;
    /**
     * A version, or range of versions, to match against the current version of a package. Valid only within a `packageRules` object.
     */
    matchCurrentVersion?: string;
    /**
     * List of datasources to match (e.g. `["orb"]`). Valid only within a `packageRules` object.
     */
    matchDatasources?: string[] | string;
    /**
     * Dep names to match. Valid only within a `packageRules` object.
     */
    matchDepNames?: string[] | string;
    /**
     * List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
     */
    matchDepTypes?: string[] | string;
    /**
     * List of strings to do an exact match against package and lock files with full path. Only works inside a `packageRules` object.
     */
    matchFileNames?: string[];
    /**
     * A JSONata expression to match against the full config object. Valid only within a `packageRules` object.
     */
    matchJsonata?: string[];
    /**
     * List of package managers to match (e.g. `["pipenv"]`). Valid only within a `packageRules` object.
     */
    matchManagers?: string[] | string;
    /**
     * A regex or glob pattern to match against the raw `newValue` string of a dependency. Valid only within a `packageRules` object.
     */
    matchNewValue?: string;
    /**
     * Package names to match. Valid only within a `packageRules` object.
     */
    matchPackageNames?: string[] | string;
    /**
     * List of repositories to match (e.g. `["** /*-archived"]`). Valid only within a `packageRules` object.
     */
    matchRepositories?: string[] | string;
    /**
     * A list of exact match URLs (or URL patterns) to match sourceUrl against.
     */
    matchSourceUrls?: string[] | string;
    /**
     * Update types to match against (`major`, `minor`, `pin`, `pinDigest`, etc). Valid only within `packageRules` object.
     */
    matchUpdateTypes?:
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        )[]
      | (
          | 'major'
          | 'minor'
          | 'patch'
          | 'pin'
          | 'pinDigest'
          | 'digest'
          | 'lockFileMaintenance'
          | 'rollback'
          | 'bump'
          | 'replacement'
        );
    /**
     * Override the datasource value.
     */
    overrideDatasource?: string;
    /**
     * Override the depName value.
     */
    overrideDepName?: string;
    /**
     * Override the packageName value.
     */
    overridePackageName?: string;
    /**
     * Set sorting priority for PR creation. PRs with higher priority are created first, negative priority last.
     */
    prPriority?: number;
    /**
     * The name of the new dependency that replaces the old deprecated dependency.
     */
    replacementName?: string;
    /**
     * Controls what the replacement package name.
     */
    replacementNameTemplate?: string;
    /**
     * The version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersion?: string;
    /**
     * Template field for the version of the new dependency that replaces the old deprecated dependency.
     */
    replacementVersionTemplate?: string;
    /**
     * The source directory in which the package is present at its source.
     */
    sourceDirectory?: string;
    /**
     * The source URL of the package.
     */
    sourceUrl?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Password for authentication.
   */
  password?: string;
  patch?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to `true`: keep repository data between runs instead of deleting the data.
   */
  persistRepoData?: boolean;
  pin?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to add digests to Dockerfile source images.
   */
  pinDigests?: boolean;
  'pip-compile'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Platform type of repository.
   */
  platform?:
    | 'azure'
    | 'bitbucket'
    | 'bitbucket-server'
    | 'codecommit'
    | 'forgejo'
    | 'gerrit'
    | 'gitea'
    | 'github'
    | 'gitlab'
    | 'local';
  /**
   * Controls if platform-native auto-merge is used.
   */
  platformAutomerge?: boolean;
  /**
   * Use platform API to perform commits instead of using Git directly.
   */
  platformCommit?: 'auto' | 'disabled' | 'enabled';
  poetry?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Enable post-update options to be run after package/artifact updating.
   */
  postUpdateOptions?: (
    | 'bundlerConservative'
    | 'composerWithAll'
    | 'dotnetWorkloadRestore'
    | 'gomodMassage'
    | 'gomodTidy'
    | 'gomodTidy1.17'
    | 'gomodTidyE'
    | 'gomodUpdateImportPaths'
    | 'gomodSkipVendor'
    | 'gomodVendor'
    | 'helmUpdateSubChartArchives'
    | 'kustomizeInflateHelmCharts'
    | 'npmDedupe'
    | 'npmInstallTwice'
    | 'pnpmDedupe'
    | 'yarnDedupeFewer'
    | 'yarnDedupeHighest'
  )[];
  postUpgradeTasks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * List of columns to use in PR bodies.
   */
  prBodyColumns?: string[];
  /**
   * Table column definitions to use in PR tables.
   */
  prBodyDefinitions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of extra notes or templates to include in the Pull Request body.
   */
  prBodyNotes?: string[] | string;
  /**
   * Pull Request body template. Controls which sections are rendered in the body of the pull request.
   */
  prBodyTemplate?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the maximum number of commits per Renovate run. By default there is no limit.
   */
  prCommitsPerRunLimit?: number;
  /**
   * Limit to a maximum of x concurrent branches/PRs. 0 means no limit.
   */
  prConcurrentLimit?: number;
  /**
   * When to create the PR for a branch.
   */
  prCreation?: 'immediate' | 'not-pending' | 'status-success' | 'approval';
  /**
   * Text added here will be placed last in the PR body, with a divider separator before it.
   */
  prFooter?: string;
  /**
   * Text added here will be placed first in the PR body.
   */
  prHeader?: string;
  /**
   * Rate limit PRs to maximum x created per hour. 0 means no limit.
   */
  prHourlyLimit?: number;
  /**
   * Timeout in hours for when `prCreation=not-pending`.
   */
  prNotPendingHours?: number;
  /**
   * Pull Request title template. Inherits from `commitMessage` if null.
   */
  prTitle?: string | null;
  /**
   * Whether to bypass appending extra context to the Pull Request title.
   */
  prTitleStrict?: boolean;
  'pre-commit'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Cache resolved presets in package cache.
   */
  presetCachePersistence?: boolean;
  /**
   * If enabled, Renovate logs the fully resolved config for each repository, plus the fully resolved presets.
   */
  printConfig?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Server-side private key.
   */
  privateKey?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Secondary or old private key to try.
   */
  privateKeyOld?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side private key.
   */
  privateKeyPath?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to the Server-side old private key.
   */
  privateKeyPathOld?: string;
  processEnv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  productLinks?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Set to `true` to enable branch pruning after automerging.
   */
  pruneBranchAfterAutomerge?: boolean;
  /**
   * Set to `false` to disable pruning stale branches.
   */
  pruneStaleBranches?: boolean;
  pub?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Determines how to modify or update existing ranges.
   */
  rangeStrategy?: 'auto' | 'pin' | 'bump' | 'replace' | 'widen' | 'update-lockfile' | 'in-range-only';
  /**
   * Label to request a rebase from Renovate bot.
   */
  rebaseLabel?: string;
  /**
   * Controls when Renovate rebases an existing branch.
   */
  rebaseWhen?: 'auto' | 'never' | 'conflicted' | 'behind-base-branch' | 'automerging';
  /**
   * Recreate PRs even if same ones were closed previously.
   */
  recreateWhen?: 'auto' | 'always' | 'never';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Key prefix for redis cache entries.
   */
  redisPrefix?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, this Redis URL will be used for caching instead of the file system.
   */
  redisUrl?: string;
  regex?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * List of URLs to try for dependency lookup. Package manager specific.
   */
  registryUrls?: string[] | null;
  'renovate-config-presets'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Select whether to perform a direct replacement or alias replacement.
   */
  replacementApproach?: 'replace' | 'alias';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Path to where the file should be written. In case of `s3` this has to be a full S3 URI.
   */
  reportPath?: string | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set how, or if, reports should be generated.
   */
  reportType?: ('logging' | 'file' | 's3') | null;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * List of Repositories.
   */
  repositories?: string[];
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * This option decides if Renovate uses a JSON cache to speed up extractions.
   */
  repositoryCache?: 'disabled' | 'enabled' | 'reset';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Set the type of renovate repository cache if `repositoryCache` is enabled.
   */
  repositoryCacheType?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Controls Renovate's behavior regarding repository config files such as `renovate.json`.
   */
  requireConfig?: 'required' | 'optional' | 'ignored';
  /**
   * Ignore versions newer than npm "latest" version.
   */
  respectLatest?: boolean;
  /**
   * Requested reviewers for Pull Requests (either username or email address depending on the platform).
   */
  reviewers?: string[];
  /**
   * Determine reviewers based on configured code owners and changes in PR.
   */
  reviewersFromCodeOwners?: boolean;
  /**
   * Take a random sample of given size from `reviewers`.
   */
  reviewersSampleSize?: number | null;
  rollback?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Create PRs to roll back versions if the current version is not found in the registry.
   */
  rollbackPrs?: boolean;
  'ruby-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will use this string as the `endpoint` when creating the AWS S3 client instance.
   */
  s3Endpoint?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set, Renovate will enable `forcePathStyle` when creating the AWS S3 client instance.
   */
  s3PathStyle?: boolean;
  sbt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Limit branch creation to these times of day or week.
   */
  schedule?: string[] | string;
  secrets?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  /**
   * Commit scope to use if Semantic Commits are enabled.
   */
  semanticCommitScope?: string;
  /**
   * Commit type to use if Semantic Commits is enabled.
   */
  semanticCommitType?: string;
  /**
   * Enable Semantic Commit prefixes for commits and PR titles.
   */
  semanticCommits?: 'auto' | 'enabled' | 'disabled';
  /**
   * If set to `false`, Renovate will upgrade dependencies to their latest release only. Renovate will not separate major or minor branches.
   */
  separateMajorMinor?: boolean;
  /**
   * If set to `true`, Renovate will separate `minor` and `patch` updates into separate branches.
   */
  separateMinorPatch?: boolean;
  /**
   * If set to `true`, PRs will be raised separately for each available `major` upgrade version.
   */
  separateMultipleMajor?: boolean;
  /**
   * If set to `true`, Renovate creates separate PRs for each `minor` stream.
   */
  separateMultipleMinor?: boolean;
  'setup-cfg'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Skip Renovate's automatic artifact updating.
   */
  skipArtifactsUpdate?: boolean;
  /**
   * Skip installing modules/dependencies if lock file updating is possible without a full install.
   */
  skipInstalls?: boolean | null;
  statusCheckNames?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Label to make Renovate stop updating a PR.
   */
  stopUpdatingLabel?: string;
  /**
   * Options to suppress various types of warnings and other notifications.
   */
  suppressNotifications?: (
    | 'artifactErrors'
    | 'branchAutomergeFailure'
    | 'configErrorIssue'
    | 'dependencyLookupWarnings'
    | 'lockFileErrors'
    | 'missingCredentialsError'
    | 'onboardingClose'
    | 'prEditedNotification'
    | 'prIgnoreNotification'
  )[];
  sveltos?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Must conform to [IANA Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
   */
  timezone?: string;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Repository Auth Token.
   */
  token?: string;
  travis?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Enable or disable Unicode emoji.
   */
  unicodeEmoji?: boolean;
  unity3d?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Whether to update internal dep versions in a monorepo. Works on Yarn Workspaces.
   */
  updateInternalDeps?: boolean;
  /**
   * Whether to update branches when not scheduled. Renovate will not create branches outside of the schedule.
   */
  updateNotScheduled?: boolean;
  /**
   * Whether to update pinned (single version) dependencies or not.
   */
  updatePinnedDependencies?: boolean;
  /**
   * Whether to read configuration from base branches instead of only the default branch.
   */
  useBaseBranchConfig?: 'merge' | 'none';
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If `false`, Renovate does not try to access cloud metadata services.
   */
  useCloudMetadataServices?: boolean;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * If set to any string, Renovate will use this as the `user-agent` it sends with HTTP requests.
   */
  userAgent?: string | null;
  /**
   * User-facing strings for the Renovate comment when a PR is closed.
   */
  userStrings?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Username for authentication.
   */
  username?: string;
  variables?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79;
  velaci?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * A regex (`re2`) with named capture groups to show how version and compatibility are split from a raw version string.
   */
  versionCompatibility?: string;
  /**
   * Versioning to use for filtering and comparisons.
   */
  versioning?: (
    | (
        | 'aws-eks-addon'
        | 'aws-machine-image'
        | 'azure-rest-api'
        | 'bazel-module'
        | 'cargo'
        | 'composer'
        | 'conan'
        | 'conda'
        | 'deb'
        | 'debian'
        | 'devbox'
        | 'docker'
        | 'git'
        | 'glasskube'
        | 'go-mod-directive'
        | 'gradle'
        | 'hashicorp'
        | 'helm'
        | 'hermit'
        | 'hex'
        | 'ivy'
        | 'kubernetes-api'
        | 'lambda-node'
        | 'loose'
        | 'maven'
        | 'nixpkgs'
        | 'node'
        | 'npm'
        | 'nuget'
        | 'pep440'
        | 'perl'
        | 'poetry'
        | 'pvp'
        | 'python'
        | 'redhat'
        | 'regex'
        | 'rez'
        | 'rpm'
        | 'ruby'
        | 'same-major'
        | 'semver'
        | 'semver-coerced'
        | 'semver-partial'
        | 'swift'
        | 'ubuntu'
        | 'unity3d'
        | 'unity3d-packages'
      )
    | string
  ) &
    string;
  vulnerabilityAlerts?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
  /**
   * Deprecated: This configuration option is only intended to be used with 'global' configuration when self-hosting, not used in a repository configuration file. Renovate likely won't use the configuration, and these fields will be removed from the repository configuration documentation in Renovate v43 (https://github.com/renovatebot/renovate/issues/38728)
   *
   * Writes discovered repositories to a JSON file and then exit.
   */
  writeDiscoveredRepos?: string;
  [k: string]:
    | string
    | null
    | string[]
    | boolean
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | number
    | ((string[] | string) & (unknown[] | null))
    | 'asc'
    | 'desc'
    | 'alpha'
    | 'created'
    | 'updated'
    | 'size'
    | 'id'
    | 'auto'
    | 'fast-forward'
    | 'merge-commit'
    | 'rebase'
    | 'rebase-merge'
    | 'squash'
    | 'branch'
    | 'pr'
    | 'pr-comment'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'global'
    | 'docker'
    | 'install'
    | 'hermit'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'major'
    | 'minor'
    | 'patch'
    | 'prerelease'
    | {
        description?: string[] | string;
        /**
         * The semver level to use when bumping versions. This is used by the `bumpVersions` feature.
         */
        bumpType?: string;
        /**
         * A list of patterns to match files that contain the version string.
         */
        filePatterns?: string[];
        /**
         * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
         */
        matchStrings?: string[];
        /**
         * A name for the bumpVersion config. This is used for logging and debugging.
         */
        name?: string;
        [k: string]: unknown | undefined;
      }[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'never'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        [k: string]: string | undefined;
      }
    | 'none'
    | 'strict'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        description?: string[] | string;
        /**
         * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
         */
        autoReplaceStringTemplate?: string;
        /**
         * Optional `currentValue` for extracted dependencies. Valid only within a `customManagers` object.
         */
        currentValueTemplate?: string;
        /**
         * Custom manager to use. Valid only within a `customManagers` object.
         */
        customType?: 'jsonata' | 'regex';
        /**
         * Optional datasource for extracted dependencies. Valid only within a `customManagers` object.
         */
        datasourceTemplate?: string;
        /**
         * Optional depName for extracted dependencies. Valid only within a `customManagers` object.
         */
        depNameTemplate?: string;
        /**
         * Optional `depType` for extracted dependencies. Valid only within a `customManagers` object.
         */
        depTypeTemplate?: string;
        /**
         * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
         */
        extractVersionTemplate?: string;
        /**
         * It specifies the syntax of the package file being managed by the custom JSONata manager.
         */
        fileFormat?: 'json' | 'toml' | 'yaml';
        /**
         * RegEx (`re2`) and glob patterns for matching manager files.
         */
        managerFilePatterns?: string[] | string;
        /**
         * Queries to use. Valid only within `bumpVersions` or `customManagers` object.
         */
        matchStrings?: string[];
        /**
         * Strategy how to interpret matchStrings.
         */
        matchStringsStrategy?: 'any' | 'recursive' | 'combination';
        /**
         * Optional packageName for extracted dependencies, else defaults to `depName` value. Valid only within a `customManagers` object.
         */
        packageNameTemplate?: string;
        /**
         * Optional registry URL for extracted dependencies. Valid only within a `customManagers` object.
         */
        registryUrlTemplate?: string;
        /**
         * Optional versioning for extracted dependencies. Valid only within a `customManagers` object.
         */
        versioningTemplate?: string;
        [k: string]: unknown | undefined;
      }[]
    | 'all'
    | 'unresolved'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'extract'
    | 'lookup'
    | 'full'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom41
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'off'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'enabled'
    | 'disabled'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | ('commit' | 'push')[]
    | 'commit'
    | 'push'
    | 'default'
    | 'ssh'
    | 'endpoint'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        description?: string[] | string;
        /**
         * A list of HTTP status codes safe to ignore even when `abortOnError=true`.
         */
        abortIgnoreStatusCodes?: number[];
        /**
         * If enabled, Renovate aborts its run when HTTP request errors occur.
         */
        abortOnError?: boolean;
        /**
         * A list of package managers to enable artifact auth. Only managers on the list are enabled. All are enabled if `null`.
         */
        artifactAuth?: 'composer'[] | null;
        /**
         * Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
         */
        authType?: string;
        /**
         * Limit concurrent requests per host.
         */
        concurrentRequestLimit?: number | null;
        /**
         * Enable got DNS cache.
         */
        dnsCache?: boolean;
        /**
         * Enable got HTTP/2 support.
         */
        enableHttp2?: boolean;
        /**
         * Enable or disable corresponding functionality.
         */
        enabled?: boolean;
        headers?: JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom;
        /**
         * hostType for a package rule. Can be a platform name or a datasource name.
         */
        hostType?: string;
        /**
         * The certificate chains in PEM format.
         */
        httpsCertificate?: string | null;
        /**
         * The overriding trusted CA certificate.
         */
        httpsCertificateAuthority?: string | null;
        /**
         * The private key in PEM format.
         */
        httpsPrivateKey?: string | null;
        /**
         * Explicitly turn on insecure Docker registry access (HTTP).
         */
        insecureRegistry?: boolean;
        /**
         * Enable HTTP keep-alive for hosts.
         */
        keepAlive?: boolean;
        /**
         * A domain name, host name or base URL to match against.
         */
        matchHost?: string;
        /**
         * Limit requests rate per host.
         */
        maxRequestsPerSecond?: number;
        /**
         * Maximum retry-after header value to wait for before retrying a failed request.
         */
        maxRetryAfter?: number;
        /**
         * Match against requests that only read data and do not mutate anything.
         */
        readOnly?: boolean;
        /**
         * Timeout (in milliseconds) for queries to external endpoints.
         */
        timeout?: number;
        [k: string]: unknown | undefined;
      }[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'flexible'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        description?: string[] | string;
        /**
         * Regex/minimatch expression to match against log message.
         */
        matchMessage?: string;
        /**
         * New log level to use if matchMessage matches.
         */
        newLogLevel?: 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
        [k: string]: unknown | undefined;
      }[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | ('go' | 'maven' | 'npm' | 'nuget' | 'packagist' | 'pypi' | 'rubygems')[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | 'timestamp-required'
    | 'timestamp-optional'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'silent'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        description?: string[] | string;
        /**
         * A version range or regex pattern capturing allowed versions for dependencies.
         */
        allowedVersions?: string;
        /**
         * Set a custom URL for the changelog. Renovate will put this URL in the PR body text.
         */
        changelogUrl?: string;
        /**
         * Enable or disable corresponding functionality.
         */
        enabled?: boolean;
        /**
         * List of strings containing exact matches (e.g. `["main"]`) and/or regex expressions (e.g. `["/^release/.* /"]`). Valid only within a `packageRules` object.
         */
        matchBaseBranches?: string[] | string;
        /**
         * List of categories to match (for example: `["python"]`). Valid only within a `packageRules` object.
         */
        matchCategories?: string[] | string;
        /**
         * Merge confidence levels to match against (`low`, `neutral`, `high`, `very high`). Valid only within `packageRules` object.
         */
        matchConfidence?: ('low' | 'neutral' | 'high' | 'very high')[] | ('low' | 'neutral' | 'high' | 'very high');
        /**
         * Matches the current age of the package derived from its release timestamp. Valid only within a `packageRules` object.
         */
        matchCurrentAge?: string;
        /**
         * A regex or glob pattern to match against the raw `currentValue` string of a dependency. Valid only within a `packageRules` object.
         */
        matchCurrentValue?: string;
        /**
         * A version, or range of versions, to match against the current version of a package. Valid only within a `packageRules` object.
         */
        matchCurrentVersion?: string;
        /**
         * List of datasources to match (e.g. `["orb"]`). Valid only within a `packageRules` object.
         */
        matchDatasources?: string[] | string;
        /**
         * Dep names to match. Valid only within a `packageRules` object.
         */
        matchDepNames?: string[] | string;
        /**
         * List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
         */
        matchDepTypes?: string[] | string;
        /**
         * List of strings to do an exact match against package and lock files with full path. Only works inside a `packageRules` object.
         */
        matchFileNames?: string[];
        /**
         * A JSONata expression to match against the full config object. Valid only within a `packageRules` object.
         */
        matchJsonata?: string[];
        /**
         * List of package managers to match (e.g. `["pipenv"]`). Valid only within a `packageRules` object.
         */
        matchManagers?: string[] | string;
        /**
         * A regex or glob pattern to match against the raw `newValue` string of a dependency. Valid only within a `packageRules` object.
         */
        matchNewValue?: string;
        /**
         * Package names to match. Valid only within a `packageRules` object.
         */
        matchPackageNames?: string[] | string;
        /**
         * List of repositories to match (e.g. `["** /*-archived"]`). Valid only within a `packageRules` object.
         */
        matchRepositories?: string[] | string;
        /**
         * A list of exact match URLs (or URL patterns) to match sourceUrl against.
         */
        matchSourceUrls?: string[] | string;
        /**
         * Update types to match against (`major`, `minor`, `pin`, `pinDigest`, etc). Valid only within `packageRules` object.
         */
        matchUpdateTypes?:
          | (
              | 'major'
              | 'minor'
              | 'patch'
              | 'pin'
              | 'pinDigest'
              | 'digest'
              | 'lockFileMaintenance'
              | 'rollback'
              | 'bump'
              | 'replacement'
            )[]
          | (
              | 'major'
              | 'minor'
              | 'patch'
              | 'pin'
              | 'pinDigest'
              | 'digest'
              | 'lockFileMaintenance'
              | 'rollback'
              | 'bump'
              | 'replacement'
            );
        /**
         * Override the datasource value.
         */
        overrideDatasource?: string;
        /**
         * Override the depName value.
         */
        overrideDepName?: string;
        /**
         * Override the packageName value.
         */
        overridePackageName?: string;
        /**
         * Set sorting priority for PR creation. PRs with higher priority are created first, negative priority last.
         */
        prPriority?: number;
        /**
         * The name of the new dependency that replaces the old deprecated dependency.
         */
        replacementName?: string;
        /**
         * Controls what the replacement package name.
         */
        replacementNameTemplate?: string;
        /**
         * The version of the new dependency that replaces the old deprecated dependency.
         */
        replacementVersion?: string;
        /**
         * Template field for the version of the new dependency that replaces the old deprecated dependency.
         */
        replacementVersionTemplate?: string;
        /**
         * The source directory in which the package is present at its source.
         */
        sourceDirectory?: string;
        /**
         * The source URL of the package.
         */
        sourceUrl?: string;
        [k: string]: unknown | undefined;
      }[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'azure'
    | 'bitbucket'
    | 'bitbucket-server'
    | 'codecommit'
    | 'forgejo'
    | 'gerrit'
    | 'gitea'
    | 'github'
    | 'gitlab'
    | 'local'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | (
        | 'bundlerConservative'
        | 'composerWithAll'
        | 'dotnetWorkloadRestore'
        | 'gomodMassage'
        | 'gomodTidy'
        | 'gomodTidy1.17'
        | 'gomodTidyE'
        | 'gomodUpdateImportPaths'
        | 'gomodSkipVendor'
        | 'gomodVendor'
        | 'helmUpdateSubChartArchives'
        | 'kustomizeInflateHelmCharts'
        | 'npmDedupe'
        | 'npmInstallTwice'
        | 'pnpmDedupe'
        | 'yarnDedupeFewer'
        | 'yarnDedupeHighest'
      )[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | {
        [k: string]: unknown | undefined;
      }
    | 'immediate'
    | 'not-pending'
    | 'status-success'
    | 'approval'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'pin'
    | 'bump'
    | 'replace'
    | 'widen'
    | 'update-lockfile'
    | 'in-range-only'
    | 'conflicted'
    | 'behind-base-branch'
    | 'automerging'
    | 'always'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'alias'
    | 'logging'
    | 'file'
    | 's3'
    | 'reset'
    | 'required'
    | 'optional'
    | 'ignored'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | (
        | 'artifactErrors'
        | 'branchAutomergeFailure'
        | 'configErrorIssue'
        | 'dependencyLookupWarnings'
        | 'lockFileErrors'
        | 'missingCredentialsError'
        | 'onboardingClose'
        | 'prEditedNotification'
        | 'prIgnoreNotification'
      )[]
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | 'merge'
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom79
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | ((
        | (
            | 'aws-eks-addon'
            | 'aws-machine-image'
            | 'azure-rest-api'
            | 'bazel-module'
            | 'cargo'
            | 'composer'
            | 'conan'
            | 'conda'
            | 'deb'
            | 'debian'
            | 'devbox'
            | 'docker'
            | 'git'
            | 'glasskube'
            | 'go-mod-directive'
            | 'gradle'
            | 'hashicorp'
            | 'helm'
            | 'hermit'
            | 'hex'
            | 'ivy'
            | 'kubernetes-api'
            | 'lambda-node'
            | 'loose'
            | 'maven'
            | 'nixpkgs'
            | 'node'
            | 'npm'
            | 'nuget'
            | 'pep440'
            | 'perl'
            | 'poetry'
            | 'pvp'
            | 'python'
            | 'redhat'
            | 'regex'
            | 'rez'
            | 'rpm'
            | 'ruby'
            | 'same-major'
            | 'semver'
            | 'semver-coerced'
            | 'semver-partial'
            | 'swift'
            | 'ubuntu'
            | 'unity3d'
            | 'unity3d-packages'
          )
        | string
      ) &
        string)
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | JSONSchemaForRenovate411731ConfigFilesHttpsRenovatebotCom
    | undefined;
}
