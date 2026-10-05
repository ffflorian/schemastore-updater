/* eslint-disable */

/**
 * Flags packages that have not been updated within this period as abandoned.
 * See also: https://docs.renovatebot.com/configuration-options/#abandonmentthreshold
 */
export type AbandonmentThreshold = string | null;
/**
 * Labels to add to Pull Request.
 * See also: https://docs.renovatebot.com/configuration-options/#addlabels
 */
export type AddLabels = string[];
/**
 * Additional string value to be appended to `branchPrefix`.
 * See also: https://docs.renovatebot.com/configuration-options/#additionalbranchprefix
 */
export type AdditionalBranchPrefix = string;
/**
 * Additional reviewers for Pull Requests (in contrast to `reviewers`, this option adds to the existing reviewer list, rather than replacing it).
 * See also: https://docs.renovatebot.com/configuration-options/#additionalreviewers
 */
export type AdditionalReviewers = string[];
/**
 * Set this to `true` to allow custom crate registries.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowcustomcrateregistries
 */
export type AllowCustomCrateRegistries = boolean;
/**
 * Set this to `true` if repositories are allowed to run install plugins.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowplugins
 */
export type AllowPlugins = boolean;
/**
 * Set this to `true` if repositories are allowed to run install scripts.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowscripts
 */
export type AllowScripts = boolean;
/**
 * Whether to run commands for `postUpgradeTasks` inside a shell. This has security implications, as it means that they can call out to other commands or access shell variables. It is difficult to craft an `allowedCommands` regex to restrict this.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowshellexecutorforpostupgradecommands
 */
export type AllowShellExecutorForPostUpgradeCommands = boolean;
/**
 * A list of regular expressions that decide which commands are allowed in post-upgrade tasks.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowedcommands
 */
export type AllowedCommands = string[];
/**
 * List of allowed patterns for environment variable names in repository env config.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowedenv
 */
export type AllowedEnv = string[];
/**
 * List of allowed patterns for header names in repository hostRules config.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowedheaders
 */
export type AllowedHeaders = string[];
/**
 * List of possibly unsafe executions which are permitted to run. This enables global control over any implicit commands
 *         which are run as part of a renovate run. This is similar to `allowedCommands` but is specifically used to control executions
 *         which run automatically, and are not explicitly added in `postUpgradeTasks`
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#allowedunsafeexecutions
 */
export type AllowedUnsafeExecutions = ('bazelModDeps' | 'goGenerate' | 'gradleWrapper' | 'mise' | 'pixi')[];
/**
 * Assign reviewers and assignees even if the PR is to be automerged.
 * See also: https://docs.renovatebot.com/configuration-options/#assignautomerge
 */
export type AssignAutomerge = boolean;
/**
 * Assignees for Pull Request (either username or email address depending on the platform).
 * See also: https://docs.renovatebot.com/configuration-options/#assignees
 */
export type Assignees = string[];
/**
 * Determine assignees based on configured code owners and changes in PR.
 * See also: https://docs.renovatebot.com/configuration-options/#assigneesfromcodeowners
 */
export type AssigneesFromCodeOwners = boolean;
/**
 * Take a random sample of given size from `assignees`.
 * See also: https://docs.renovatebot.com/configuration-options/#assigneessamplesize
 */
export type AssigneesSampleSize = number | null;
/**
 * Set to `true` to automatically approve PRs.
 * See also: https://docs.renovatebot.com/configuration-options/#autoapprove
 */
export type AutoApprove = boolean;
/**
 * Control whether replacement regular expressions are global matches or only the first match.
 * See also: https://docs.renovatebot.com/configuration-options/#autoreplaceglobalmatch
 */
export type AutoReplaceGlobalMatch = boolean;
/**
 * Autodiscover all repositories.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscover
 */
export type Autodiscover = boolean;
/**
 * Filter the list of autodiscovered repositories.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscoverfilter
 */
export type AutodiscoverFilter = AutodiscoverFilter1 & AutodiscoverFilter2;
export type AutodiscoverFilter1 = string[] | string;
export type AutodiscoverFilter2 = ((string[] | string) & unknown[]) | (null & (string[] | string));
/**
 * Filter the list of autodiscovered repositories by namespaces.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscovernamespaces
 */
export type AutodiscoverNamespaces = string[] | null;
/**
 * Filter the list of autodiscovered repositories by project names.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscoverprojects
 */
export type AutodiscoverProjects = string[] | null;
/**
 * The order method for autodiscover server side repository search.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscoverrepoorder
 */
export type AutodiscoverRepoOrder = ('asc' | 'desc') | null;
/**
 * The sort method for autodiscover server side repository search.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscoverreposort
 */
export type AutodiscoverRepoSort =
  ('alpha' | 'created' | 'created_at' | 'updated' | 'updated_at' | 'size' | 'id') | null;
/**
 * Filter the list of autodiscovered repositories by topics.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#autodiscovertopics
 */
export type AutodiscoverTopics = string[] | null;
/**
 * Whether to automerge branches/PRs automatically, without human intervention.
 * See also: https://docs.renovatebot.com/configuration-options/#automerge
 */
export type Automerge = boolean;
/**
 * PR comment to add to trigger automerge. Only used if `automergeType=pr-comment`.
 * See also: https://docs.renovatebot.com/configuration-options/#automergecomment
 */
export type AutomergeComment = string;
/**
 * Limit automerge to these times of day or week.
 * See also: https://docs.renovatebot.com/configuration-options/#automergeschedule
 */
export type AutomergeSchedule = string[] | string;
/**
 * The merge strategy to use when automerging PRs. Used only if `automergeType=pr`.
 * See also: https://docs.renovatebot.com/configuration-options/#automergestrategy
 */
export type AutomergeStrategy = 'auto' | 'fast-forward' | 'merge-commit' | 'rebase' | 'rebase-merge' | 'squash';
/**
 * How to automerge, if enabled.
 * See also: https://docs.renovatebot.com/configuration-options/#automergetype
 */
export type AutomergeType = 'branch' | 'pr' | 'pr-comment';
/**
 * The id of an existing work item on Azure Boards to link to each PR.
 * See also: https://docs.renovatebot.com/configuration-options/#azureworkitemid
 */
export type AzureWorkItemId = number;
/**
 * The work item type Renovate uses for its issues (e.g. the Dependency Dashboard) on Azure DevOps.
 * See also: https://docs.renovatebot.com/configuration-options/#azureworkitemtype
 */
export type AzureWorkItemType = string;
/**
 * List of one or more custom base branches defined as exact strings and/or via regex expressions.
 * See also: https://docs.renovatebot.com/configuration-options/#basebranchpatterns
 */
export type BaseBranchPatterns = string[];
/**
 * The base directory for Renovate to store local files, including repository files and cache. If left empty, Renovate will create its own temporary directory to use.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#basedir
 */
export type BaseDir = string;
/**
 * The PR tasks will be automatically completed after the PR is raised.
 * See also: https://docs.renovatebot.com/configuration-options/#bbautoresolveprtasks
 */
export type BbAutoResolvePrTasks = boolean;
/**
 * Use the default reviewers (Bitbucket only).
 * See also: https://docs.renovatebot.com/configuration-options/#bbusedefaultreviewers
 */
export type BbUseDefaultReviewers = boolean;
/**
 * Use the repository's [development branch](https://support.atlassian.com/bitbucket-cloud/docs/branch-a-repository/#The-branching-model) as the repository's default branch.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#bbusedevelopmentbranch
 */
export type BbUseDevelopmentBranch = boolean;
/**
 * Controls how third-party tools like npm or Gradle are called: directly, via Docker sidecar containers, or via dynamic install.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#binarysource
 */
export type BinarySource = 'global' | 'docker' | 'install' | 'hermit';
/**
 * Limit to a maximum of x concurrent branches. 0 means no limit, `null` (default) inherits value from `prConcurrentLimit`.
 * See also: https://docs.renovatebot.com/configuration-options/#branchconcurrentlimit
 */
export type BranchConcurrentLimit = number | null;
/**
 * Branch name template.
 * See also: https://docs.renovatebot.com/configuration-options/#branchname
 */
export type BranchName = string;
/**
 * Whether to be strict about the use of special characters within the branch name.
 * See also: https://docs.renovatebot.com/configuration-options/#branchnamestrict
 */
export type BranchNameStrict = boolean;
/**
 * Prefix to use for all branch names.
 * See also: https://docs.renovatebot.com/configuration-options/#branchprefix
 */
export type BranchPrefix = string;
/**
 * Old branchPrefix value to check for existing PRs.
 * See also: https://docs.renovatebot.com/configuration-options/#branchprefixold
 */
export type BranchPrefixOld = string;
/**
 * Branch topic.
 * See also: https://docs.renovatebot.com/configuration-options/#branchtopic
 */
export type BranchTopic = string;
/**
 * Bump the version in the package file being updated.
 * See also: https://docs.renovatebot.com/configuration-options/#bumpversion
 */
export type BumpVersion = 'major' | 'minor' | 'patch' | 'prerelease';
export type BumpType = ('major' | 'minor' | 'patch' | 'sync') | string;
export type BumpType1 = string;
/**
 * A list of patterns to match files that contain the version string.
 * See also: https://docs.renovatebot.com/configuration-options/#bumpversionsfilepatterns
 */
export type FilePatterns = string[];
/**
 * Queries to use. Valid only within `bumpVersions` or `customManagers` object. Templating is supported within `bumpVersions` only.
 * See also: https://docs.renovatebot.com/configuration-options/#bumpversionsmatchstrings
 */
export type MatchStrings = string[];
/**
 * A name for the bumpVersion config. This is used for logging and debugging.
 * See also: https://docs.renovatebot.com/configuration-options/#bumpversionsname
 */
export type Name = string;
/**
 * A list of bumpVersion config options to bump generic version numbers.
 * See also: https://docs.renovatebot.com/configuration-options/#bumpversions
 */
export type BumpVersions = {
  description?: string[] | string;
  /**
   * The semver level to use when bumping versions. This is used by the `bumpVersions` feature.
   * See also: https://docs.renovatebot.com/configuration-options/#bumpversionsbumptype
   */
  bumpType?: BumpType & BumpType1;
  filePatterns?: FilePatterns;
  matchStrings?: MatchStrings;
  name?: Name;
  [k: string]: unknown | undefined;
}[];
/**
 * The directory where Renovate stores its cache. If left empty, Renovate creates a subdirectory within the `baseDir`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#cachedir
 */
export type CacheDir = string;
/**
 * Maximum duration in minutes to keep datasource cache entries.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#cachehardttlminutes
 */
export type CacheHardTtlMinutes = number;
/**
 * Cache private packages in the datasource cache. This is useful for self-hosted setups
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#cacheprivatepackages
 */
export type CachePrivatePackages = boolean;
/**
 * A list of branch names to mark for creation or rebasing as if it was selected in the Dependency Dashboard issue.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#checkedbranches
 */
export type CheckedBranches = string[];
/**
 * Set to `true` to initialize submodules during repository clone.
 * See also: https://docs.renovatebot.com/configuration-options/#clonesubmodules
 */
export type CloneSubmodules = boolean;
/**
 * List of submodules names or patterns to clone when cloneSubmodules=true.
 * See also: https://docs.renovatebot.com/configuration-options/#clonesubmodulesfilter
 */
export type CloneSubmodulesFilter = string[];
/**
 * Commit message body template. Will be appended to commit message, separated by two line returns.
 * See also: https://docs.renovatebot.com/configuration-options/#commitbody
 */
export type CommitBody = string;
/**
 * If enabled, append a table in the commit message body describing all updates in the commit.
 * See also: https://docs.renovatebot.com/configuration-options/#commitbodytable
 */
export type CommitBodyTable = boolean;
/**
 * Rate limit commits to maximum x per hour. 0 means no limit.
 * See also: https://docs.renovatebot.com/configuration-options/#commithourlylimit
 */
export type CommitHourlyLimit = number;
/**
 * Message to use for commit messages and pull request titles.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessage
 */
export type CommitMessage = string;
/**
 * Action verb to use in commit messages and PR titles.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessageaction
 */
export type CommitMessageAction = string;
/**
 * Extra description used after the commit message topic - typically the version.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessageextra
 */
export type CommitMessageExtra = string;
/**
 * Lowercase PR- and commit titles.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessagelowercase
 */
export type CommitMessageLowerCase = 'auto' | 'never';
/**
 * Prefix to add to start of commit messages and PR titles. Uses a semantic prefix if `semanticCommits` is enabled.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessageprefix
 */
export type CommitMessagePrefix = string;
/**
 * Suffix to add to end of commit messages and PR titles.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessagesuffix
 */
export type CommitMessageSuffix = string;
/**
 * The upgrade topic/noun used in commit messages and PR titles.
 * See also: https://docs.renovatebot.com/configuration-options/#commitmessagetopic
 */
export type CommitMessageTopic = string;
/**
 * Structured git trailers (`Key: value` lines) to add in the final block of the commit message.
 * See also: https://docs.renovatebot.com/configuration-options/#committrailers
 */
export type CommitTrailers = string[] | null;
/**
 * Configure use of `--ignore-platform-reqs` or `--ignore-platform-req` for the Composer package manager.
 * See also: https://docs.renovatebot.com/configuration-options/#composerignoreplatformreqs
 */
export type ComposerIgnorePlatformReqs = string[];
/**
 * If enabled, issues created by Renovate are set as confidential.
 * See also: https://docs.renovatebot.com/configuration-options/#confidential
 */
export type Confidential = boolean;
/**
 * List of filenames where repository config will be stored.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#configfilenames
 */
export type ConfigFileNames = string[] | null;
/**
 * Enable this to get config migration PRs when needed.
 * See also: https://docs.renovatebot.com/configuration-options/#configmigration
 */
export type ConfigMigration = boolean;
/**
 * If enabled, config validation errors will be reported as errors instead of warnings, and Renovate will exit with a non-zero exit code.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#configvalidationerror
 */
export type ConfigValidationError = boolean;
/**
 * Set this to `true` to make Renovate reuse/reopen an existing closed Config Warning issue, instead of opening a new one each time.
 * See also: https://docs.renovatebot.com/configuration-options/#configwarningreuseissue
 */
export type ConfigWarningReuseIssue = boolean;
/**
 * Perform release filtering based on language constraints.
 * See also: https://docs.renovatebot.com/configuration-options/#constraintsfiltering
 */
export type ConstraintsFiltering = 'none' | 'strict';
/**
 * The directory where Renovate stores its containerbase cache. If left empty, Renovate creates a subdirectory within the `cacheDir`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#containerbasedir
 */
export type ContainerbaseDir = string;
/**
 * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersautoreplacestringtemplate
 */
export type AutoReplaceStringTemplate = string;
/**
 * Optional `currentValue` for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagerscurrentvaluetemplate
 */
export type CurrentValueTemplate = string;
/**
 * Custom manager to use. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagerscustomtype
 */
export type CustomType = 'jsonata' | 'regex';
/**
 * Optional datasource for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersdatasourcetemplate
 */
export type DatasourceTemplate = string;
/**
 * Optional depName for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersdepnametemplate
 */
export type DepNameTemplate = string;
/**
 * Optional `depType` for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersdeptypetemplate
 */
export type DepTypeTemplate = string;
/**
 * Optional `extractVersion` for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersextractversiontemplate
 */
export type ExtractVersionTemplate = string;
/**
 * It specifies the syntax of the package file being managed by the custom JSONata manager.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersfileformat
 */
export type FileFormat = 'json' | 'toml' | 'yaml';
/**
 * RegEx (`re2`) and glob patterns for matching manager files.
 * See also: https://docs.renovatebot.com/configuration-options/#ansiblemanagerfilepatterns
 */
export type ManagerFilePatterns = string[] | string;
/**
 * Strategy how to interpret matchStrings.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersmatchstringsstrategy
 */
export type MatchStringsStrategy = 'any' | 'recursive' | 'combination';
/**
 * Optional packageName for extracted dependencies, else defaults to `depName` value. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagerspackagenametemplate
 */
export type PackageNameTemplate = string;
/**
 * Optional registry URL for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersregistryurltemplate
 */
export type RegistryUrlTemplate = string;
/**
 * Optional versioning for extracted dependencies. Valid only within a `customManagers` object.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagersversioningtemplate
 */
export type VersioningTemplate = string;
/**
 * Custom managers using regex matching.
 * See also: https://docs.renovatebot.com/configuration-options/#custommanagers
 */
export type CustomManagers = {
  description?: string[] | string;
  autoReplaceStringTemplate?: AutoReplaceStringTemplate;
  currentValueTemplate?: CurrentValueTemplate;
  customType?: CustomType;
  datasourceTemplate?: DatasourceTemplate;
  depNameTemplate?: DepNameTemplate;
  depTypeTemplate?: DepTypeTemplate;
  extractVersionTemplate?: ExtractVersionTemplate;
  fileFormat?: FileFormat;
  managerFilePatterns?: ManagerFilePatterns;
  matchStrings?: MatchStrings;
  matchStringsStrategy?: MatchStringsStrategy;
  packageNameTemplate?: PackageNameTemplate;
  registryUrlTemplate?: RegistryUrlTemplate;
  versioningTemplate?: VersioningTemplate;
  [k: string]: unknown | undefined;
}[];
/**
 * List of registry URLs to use as the default for a datasource.
 * See also: https://docs.renovatebot.com/configuration-options/#defaultregistryurls
 */
export type DefaultRegistryUrls = string[] | null;
/**
 * If set to `true`, Renovate tries to delete the additional self-hosted config file after reading it.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#deleteadditionalconfigfile
 */
export type DeleteAdditionalConfigFile = boolean;
/**
 * If set to `true`, Renovate tries to delete the self-hosted config file after reading it.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#deleteconfigfile
 */
export type DeleteConfigFile = boolean;
/**
 * Whether to create a "Dependency Dashboard" issue in the repository.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboard
 */
export type DependencyDashboard = boolean;
/**
 * Controls if updates need manual approval from the Dependency Dashboard issue before PRs are created.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardapproval
 */
export type DependencyDashboardApproval = boolean;
/**
 * Set to `true` to let Renovate close the Dependency Dashboard issue if there are no more updates.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardautoclose
 */
export type DependencyDashboardAutoclose = boolean;
/**
 * The category to group branches on the Dependency Dashboard issue.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardcategory
 */
export type DependencyDashboardCategory = string | null;
/**
 * Any text added here will be placed last in the Dependency Dashboard issue body, with a divider separator before it.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardfooter
 */
export type DependencyDashboardFooter = string;
/**
 * Any text added here will be placed first in the Dependency Dashboard issue body.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardheader
 */
export type DependencyDashboardHeader = string;
/**
 * These labels will always be applied on the Dependency Dashboard issue, even when they have been removed manually.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardlabels
 */
export type DependencyDashboardLabels = string[] | null;
/**
 * Control if the Dependency Dashboard issue lists CVEs supplied by [osv.dev](https://osv.dev).
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardosvvulnerabilitysummary
 */
export type DependencyDashboardOSVVulnerabilitySummary = 'none' | 'all' | 'unresolved';
/**
 * Controls whether abandoned packages are reported in the dependency dashboard.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardreportabandonment
 */
export type DependencyDashboardReportAbandonment = boolean;
/**
 * Title for the Dependency Dashboard issue.
 * See also: https://docs.renovatebot.com/configuration-options/#dependencydashboardtitle
 */
export type DependencyDashboardTitle = string;
/**
 * Plain text description for a config or preset.
 * See also: https://docs.renovatebot.com/configuration-options/#description
 */
export type Description = string[] | string;
/**
 * If `true`, Renovate tries to detect global manager configuration from the file system.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#detectglobalmanagerconfig
 */
export type DetectGlobalManagerConfig = boolean;
/**
 * If `true`, Renovate tries to detect host rules from environment variables.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#detecthostrulesfromenv
 */
export type DetectHostRulesFromEnv = boolean;
/**
 * Change this value to add a prefix to the Renovate Docker sidecar container names and labels.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dockerchildprefix
 */
export type DockerChildPrefix = string;
/**
 * Pass CLI flags to `docker run` command when `binarySource=docker`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dockerclioptions
 */
export type DockerCliOptions = string;
/**
 * By default, Renovate fetches up to 20 pages of Docker tags from registries. But you can set your own limit with this config option.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dockermaxpages
 */
export type DockerMaxPages = number;
/**
 * Change this value to override the default Renovate sidecar image.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dockersidecarimage
 */
export type DockerSidecarImage = string;
/**
 * Set the `UID` and `GID` for Docker-based binaries if you use `binarySource=docker`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dockeruser
 */
export type DockerUser = string;
/**
 * If set to `true` then Renovate creates draft PRs, instead of normal status PRs.
 * See also: https://docs.renovatebot.com/configuration-options/#draftpr
 */
export type DraftPR = boolean;
/**
 * If enabled, perform a dry run by logging messages instead of creating/updating/deleting branches and PRs.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#dryrun
 */
export type DryRun = ('extract' | 'lookup' | 'full') | null;
/**
 * Enable or disable corresponding functionality.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesenabled
 */
export type Enabled = boolean;
/**
 * A list of package managers to enable. Only managers on the list are enabled.
 * See also: https://docs.renovatebot.com/configuration-options/#enabledmanagers
 */
export type EnabledManagers = string[];
/**
 * An object containing configuration encrypted with project key.
 * See also: https://docs.renovatebot.com/configuration-options/#encrypted
 */
export type JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom43 = {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  allowCustomCrateRegistries?: AllowCustomCrateRegistries;
  allowPlugins?: AllowPlugins;
  allowScripts?: AllowScripts;
  allowShellExecutorForPostUpgradeCommands?: AllowShellExecutorForPostUpgradeCommands;
  allowedCommands?: AllowedCommands;
  allowedEnv?: AllowedEnv;
  allowedHeaders?: AllowedHeaders;
  allowedUnsafeExecutions?: AllowedUnsafeExecutions;
  ansible?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  autodiscover?: Autodiscover;
  autodiscoverFilter?: AutodiscoverFilter;
  autodiscoverNamespaces?: AutodiscoverNamespaces;
  autodiscoverProjects?: AutodiscoverProjects;
  autodiscoverRepoOrder?: AutodiscoverRepoOrder;
  autodiscoverRepoSort?: AutodiscoverRepoSort;
  autodiscoverTopics?: AutodiscoverTopics;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  baseDir?: BaseDir;
  batect?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  binarySource?: BinarySource;
  'bitbucket-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cacheDir?: CacheDir;
  cacheHardTtlMinutes?: CacheHardTtlMinutes;
  cachePrivatePackages?: CachePrivatePackages;
  cacheTtlOverride?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  checkedBranches?: CheckedBranches;
  circleci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  commitBody?: CommitBody;
  commitBodyTable?: CommitBodyTable;
  commitHourlyLimit?: CommitHourlyLimit;
  commitMessage?: CommitMessage;
  commitMessageAction?: CommitMessageAction;
  commitMessageExtra?: CommitMessageExtra;
  commitMessageLowerCase?: CommitMessageLowerCase;
  commitMessagePrefix?: CommitMessagePrefix;
  commitMessageSuffix?: CommitMessageSuffix;
  commitMessageTopic?: CommitMessageTopic;
  commitTrailers?: CommitTrailers;
  composer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  containerbaseDir?: ContainerbaseDir;
  copier?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deleteAdditionalConfigFile?: DeleteAdditionalConfigFile;
  deleteConfigFile?: DeleteConfigFile;
  deno?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dependencyDashboard?: DependencyDashboard;
  dependencyDashboardApproval?: DependencyDashboardApproval;
  dependencyDashboardAutoclose?: DependencyDashboardAutoclose;
  dependencyDashboardCategory?: DependencyDashboardCategory;
  dependencyDashboardFooter?: DependencyDashboardFooter;
  dependencyDashboardHeader?: DependencyDashboardHeader;
  dependencyDashboardLabels?: DependencyDashboardLabels;
  dependencyDashboardOSVVulnerabilitySummary?: DependencyDashboardOSVVulnerabilitySummary;
  dependencyDashboardReportAbandonment?: DependencyDashboardReportAbandonment;
  dependencyDashboardTitle?: DependencyDashboardTitle;
  'deps-edn'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  description?: Description;
  detectGlobalManagerConfig?: DetectGlobalManagerConfig;
  detectHostRulesFromEnv?: DetectHostRulesFromEnv;
  devbox?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dockerChildPrefix?: DockerChildPrefix;
  dockerCliOptions?: DockerCliOptions;
  dockerMaxPages?: DockerMaxPages;
  dockerSidecarImage?: DockerSidecarImage;
  dockerUser?: DockerUser;
  dockerfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dryRun?: DryRun;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom43;
  encryptedWarning?: EncryptedWarning;
  endpoint?: Endpoint;
  env?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  executionTimeout?: ExecutionTimeout;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  exposeAllEnv?: ExposeAllEnv;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  followTag?: FollowTag;
  force?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  forceCli?: ForceCli;
  forkCreation?: ForkCreation;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkOrg?: ForkOrg;
  forkProcessing?: ForkProcessing;
  forkToken?: ForkToken;
  fvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  gitNoVerify?: GitNoVerify;
  gitPrivateKey?: GitPrivateKey;
  gitPrivateKeyPassphrase?: GitPrivateKeyPassphrase;
  gitTimeout?: GitTimeout;
  gitUrl?: GitUrl;
  'github-actions'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  githubTokenWarn?: GithubTokenWarn;
  gitlabci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  globalExtends?: GlobalExtends;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  httpCacheTtlDays?: HttpCacheTtlDays;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePrAuthor?: IgnorePrAuthor;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includeMirrors?: IncludeMirrors;
  includePaths?: IncludePaths;
  inheritConfig?: InheritConfig;
  inheritConfigFileName?: InheritConfigFileName;
  inheritConfigRepoName?: InheritConfigRepoName;
  inheritConfigStrict?: InheritConfigStrict;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  logContext?: LogContext;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  mergeConfidenceDatasources?: MergeConfidenceDatasources;
  mergeConfidenceEndpoint?: MergeConfidenceEndpoint;
  meteor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  onboardingRebaseCheckbox?: OnboardingRebaseCheckbox;
  optimizeForDisabled?: OptimizeForDisabled;
  osgi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  packageRules?: PackageRules;
  password?: Password;
  patch?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  persistRepoData?: PersistRepoData;
  pin?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  platform?: Platform;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prCacheSyncMaxPages?: PrCacheSyncMaxPages;
  prCommitsPerRunLimit?: PrCommitsPerRunLimit;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  presetCachePersistence?: PresetCachePersistence;
  printConfig?: PrintConfig;
  privateKey?: PrivateKey;
  privateKeyOld?: PrivateKeyOld;
  privateKeyPath?: PrivateKeyPath;
  privateKeyPathOld?: PrivateKeyPathOld;
  processEnv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  productLinks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  proto?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseAllOpenBranches?: RebaseAllOpenBranches;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  redisPrefix?: RedisPrefix;
  redisUrl?: RedisUrl;
  regex?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  reportFormatting?: ReportFormatting;
  reportPath?: ReportPath;
  reportType?: ReportType;
  repositories?: Repositories;
  repositoryCache?: RepositoryCache;
  repositoryCacheForceLocal?: RepositoryCacheForceLocal;
  repositoryCacheType?: RepositoryCacheType;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  s3Endpoint?: S3Endpoint;
  s3PathStyle?: S3PathStyle;
  sbt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  schedule?: Schedule;
  secrets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  timezone?: Timezone;
  token?: Token;
  toolSettings?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  unicodeEmoji?: UnicodeEmoji;
  unity3d?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  useCloudMetadataServices?: UseCloudMetadataServices;
  userAgent?: UserAgent;
  userStrings?: UserStrings;
  username?: Username;
  variables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  velaci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  writeDiscoveredRepos?: WriteDiscoveredRepos;
  xcodegen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  [k: string]: unknown | undefined;
} | null;
/**
 * Warning text to use if encrypted config is found.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#encryptedwarning
 */
export type EncryptedWarning = string;
/**
 * Custom endpoint to use.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#endpoint
 */
export type Endpoint = string | null;
/**
 * A file matching any of these glob patterns will not be committed, even if the file has been updated.
 * See also: https://docs.renovatebot.com/configuration-options/#excludecommitpaths
 */
export type ExcludeCommitPaths = string[];
/**
 * Default execution timeout in minutes for child processes Renovate creates.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#executiontimeout
 */
export type ExecutionTimeout = number;
/**
 * Expand the configured code owner groups into a full list of group members.
 * See also: https://docs.renovatebot.com/configuration-options/#expandcodeownersgroups
 */
export type ExpandCodeOwnersGroups = boolean;
/**
 * Set this to `true` to allow passing of all environment variables to package managers.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#exposeallenv
 */
export type ExposeAllEnv = boolean;
/**
 * Configuration presets to use or extend.
 * See also: https://docs.renovatebot.com/configuration-options/#extends
 */
export type Extends =
  | (
      | (
          | 'config:best-practices'
          | 'config:recommended'
          | 'mergeConfidence:all-badges'
          | 'abandonments:recommended'
          | 'group:all'
          | 'replacements:all'
          | 'security:minimumReleaseAgeNpm'
          | 'security:only-security-updates'
        )
      | string
    )[]
  | string;
/**
 * A regex (`re2`) to extract a version from a datasource's raw version string.
 * See also: https://docs.renovatebot.com/configuration-options/#extractversion
 */
export type ExtractVersion = string;
/**
 * Controls if and when changelogs/release notes are fetched.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesfetchchangelogs
 */
export type FetchChangeLogs = 'off' | 'branch' | 'pr';
/**
 * Filter reviewers and assignees based on their availability.
 * See also: https://docs.renovatebot.com/configuration-options/#filterunavailableusers
 */
export type FilterUnavailableUsers = boolean;
/**
 * If defined, packages will follow this release tag exactly.
 * See also: https://docs.renovatebot.com/configuration-options/#followtag
 */
export type FollowTag = string;
/**
 * Decides if CLI configuration options are moved to the `force` config section.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#forcecli
 */
export type ForceCli = boolean;
/**
 * Whether to create forks as needed at runtime when running in "fork mode".
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#forkcreation
 */
export type ForkCreation = boolean;
/**
 * Disallow maintainers to push to Renovate pull requests when running in fork mode.
 * See also: https://docs.renovatebot.com/configuration-options/#forkmodedisallowmaintaineredits
 */
export type ForkModeDisallowMaintainerEdits = boolean;
/**
 * The preferred organization to create or find forked repositories, when in fork mode.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#forkorg
 */
export type ForkOrg = string;
/**
 * Whether to process forked repositories. By default, all forked repositories are skipped when in `autodiscover` mode.
 * See also: https://docs.renovatebot.com/configuration-options/#forkprocessing
 */
export type ForkProcessing = 'auto' | 'enabled' | 'disabled';
/**
 * Set a personal access token here to enable "fork mode".
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#forktoken
 */
export type ForkToken = string;
/**
 * Author to use for Git commits. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
 * See also: https://docs.renovatebot.com/configuration-options/#gitauthor
 */
export type GitAuthor = string;
/**
 * Git authors which are ignored by Renovate. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
 * See also: https://docs.renovatebot.com/configuration-options/#gitignoredauthors
 */
export type GitIgnoredAuthors = string[];
/**
 * Ignore approval rules for MRs created by Renovate, which is useful for automerge.
 * See also: https://docs.renovatebot.com/configuration-options/#gitlabignoreapprovals
 */
export type GitLabIgnoreApprovals = boolean;
/**
 * Which Git commands will be run with the `--no-verify` option.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#gitnoverify
 */
export type GitNoVerify = ((('commit' | 'push') | string) & string)[] | ((('commit' | 'push') | string) & string);
/**
 * PGP key to use for signing Git commits.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#gitprivatekey
 */
export type GitPrivateKey = string;
/**
 * Passphrase for the `gitPrivateKey`
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#gitprivatekeypassphrase
 */
export type GitPrivateKeyPassphrase = string;
/**
 * Configure the timeout with a number of milliseconds to wait for a Git task.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#gittimeout
 */
export type GitTimeout = number;
/**
 * Overrides the default resolution for Git remote, e.g. to switch GitLab from HTTPS to SSH-based.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#giturl
 */
export type GitUrl = 'default' | 'ssh' | 'endpoint';
/**
 * Display warnings about GitHub token not being set.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#githubtokenwarn
 */
export type GithubTokenWarn = boolean;
/**
 * Configuration presets to use or extend for a self-hosted config.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#globalextends
 */
export type GlobalExtends = string[];
/**
 * Directory pattern to run `go get` on.
 * See also: https://docs.renovatebot.com/configuration-options/#gogetdirs
 */
export type GoGetDirs = string[];
/**
 * Human understandable name for the dependency group.
 * See also: https://docs.renovatebot.com/configuration-options/#groupname
 */
export type GroupName = string | null;
/**
 * Apply group settings even when the group contains only one update.
 * See also: https://docs.renovatebot.com/configuration-options/#groupsingleupdates
 */
export type GroupSingleUpdates = boolean;
/**
 * Slug to use for group (e.g. in branch name). Slug is calculated from `groupName` if `null`.
 * See also: https://docs.renovatebot.com/configuration-options/#groupslug
 */
export type GroupSlug = string | null;
/**
 * If enabled, branch names will use a hashing function to ensure each branch has that length.
 * See also: https://docs.renovatebot.com/configuration-options/#hashedbranchlength
 */
export type HashedBranchLength = number | null;
/**
 * A list of HTTP status codes safe to ignore even when `abortOnError=true`.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesabortignorestatuscodes
 */
export type AbortIgnoreStatusCodes = number[];
/**
 * If enabled, Renovate aborts its run when HTTP request errors occur.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesabortonerror
 */
export type AbortOnError = boolean;
/**
 * A list of package managers to enable artifact auth. Only managers on the list are enabled. All are enabled if `null`.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesartifactauth
 */
export type ArtifactAuth = 'composer'[] | null;
/**
 * Authentication type for HTTP header. e.g. `"Bearer"` or `"Basic"`. Use `"Token-Only"` to use only the token without an authorization type.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesauthtype
 */
export type AuthType = string;
/**
 * Limit concurrent requests per host.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesconcurrentrequestlimit
 */
export type ConcurrentRequestLimit = number | null;
/**
 * Enable got DNS cache.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesdnscache
 */
export type DnsCache = boolean;
/**
 * Enable got HTTP/2 support.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesenablehttp2
 */
export type EnableHttp2 = boolean;
/**
 * Maximum duration in days to keep HTTP cache entries.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#httpcachettldays
 */
export type HttpCacheTtlDays = number;
/**
 * Avoid upgrading from a non-deprecated version to a deprecated one.
 * See also: https://docs.renovatebot.com/configuration-options/#ignoredeprecated
 */
export type IgnoreDeprecated = boolean;
/**
 * Dependencies to ignore.
 * See also: https://docs.renovatebot.com/configuration-options/#ignoredeps
 */
export type IgnoreDeps = string[];
/**
 * Skip any package file whose path matches one of these. Can be a string or glob pattern.
 * See also: https://docs.renovatebot.com/configuration-options/#ignorepaths
 */
export type IgnorePaths = string[];
/**
 * Set this to `true` if `allowPlugins=true` but you wish to skip running plugins when updating lock files.
 * See also: https://docs.renovatebot.com/configuration-options/#ignoreplugins
 */
export type IgnorePlugins = boolean;
/**
 * Set to `true` to fetch the entire list of PRs instead of only those authored by the Renovate user.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#ignoreprauthor
 */
export type IgnorePrAuthor = boolean;
/**
 * A list of presets to ignore, including any that are nested inside an `extends` array.
 * See also: https://docs.renovatebot.com/configuration-options/#ignorepresets
 */
export type IgnorePresets = string[] | string;
/**
 * Reviewers to be ignored in PR reviewers presence (either username or email address depending on the platform).
 * See also: https://docs.renovatebot.com/configuration-options/#ignorereviewers
 */
export type IgnoreReviewers = string[];
/**
 * Set this to `false` if `allowScripts=true` and you wish to run scripts when updating lock files.
 * See also: https://docs.renovatebot.com/configuration-options/#ignorescripts
 */
export type IgnoreScripts = boolean;
/**
 * Set to `true` to enable automerging without tests.
 * See also: https://docs.renovatebot.com/configuration-options/#ignoretests
 */
export type IgnoreTests = boolean;
/**
 * Ignore versions with unstable SemVer.
 * See also: https://docs.renovatebot.com/configuration-options/#ignoreunstable
 */
export type IgnoreUnstable = boolean;
/**
 * Whether to process repositories that are mirrors. By default, repositories that are mirrors are skipped.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#includemirrors
 */
export type IncludeMirrors = boolean;
/**
 * Include package files only within these defined paths.
 * See also: https://docs.renovatebot.com/configuration-options/#includepaths
 */
export type IncludePaths = string[];
/**
 * If `true`, Renovate will inherit configuration from the `inheritConfigFileName` file in `inheritConfigRepoName`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#inheritconfig
 */
export type InheritConfig = boolean;
/**
 * Renovate will look for this config file name in the `inheritConfigRepoName`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#inheritconfigfilename
 */
export type InheritConfigFileName = string;
/**
 * Renovate will look in this repo for the `inheritConfigFileName`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#inheritconfigreponame
 */
export type InheritConfigRepoName = string;
/**
 * If `true`, any `inheritedConfig` fetch error will result in an aborted run.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#inheritconfigstrict
 */
export type InheritConfigStrict = boolean;
/**
 * Whether to consider passing internal checks such as `minimumReleaseAge` when determining branch status.
 * See also: https://docs.renovatebot.com/configuration-options/#internalchecksassuccess
 */
export type InternalChecksAsSuccess = boolean;
/**
 * When and how to filter based on internal checks.
 * See also: https://docs.renovatebot.com/configuration-options/#internalchecksfilter
 */
export type InternalChecksFilter = 'strict' | 'flexible' | 'none';
/**
 * If set, users can add this label to PRs to request they be kept updated with the base branch.
 * See also: https://docs.renovatebot.com/configuration-options/#keepupdatedlabel
 */
export type KeepUpdatedLabel = string;
/**
 * Labels to set in Pull Request.
 * See also: https://docs.renovatebot.com/configuration-options/#labels
 */
export type Labels = string[];
/**
 * Add a global or per-repo log context to each log entry.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#logcontext
 */
export type LogContext = string | null;
/**
 * Regex/minimatch expression to match against log message.
 * See also: https://docs.renovatebot.com/configuration-options/#loglevelremapmatchmessage
 */
export type MatchMessage = string;
/**
 * New log level to use if matchMessage matches.
 * See also: https://docs.renovatebot.com/configuration-options/#loglevelremapnewloglevel
 */
export type NewLogLevel = 'trace' | 'debug' | 'info' | 'warn' | 'error' | 'fatal';
/**
 * Remap log levels to different levels.
 * See also: https://docs.renovatebot.com/configuration-options/#loglevelremap
 */
export type LogLevelRemap = {
  description?: string[] | string;
  matchMessage?: MatchMessage;
  newLogLevel?: NewLogLevel;
  [k: string]: unknown | undefined;
}[];
/**
 * Limit the maximum major version increment allowed. Set to 0 to disable.
 * See also: https://docs.renovatebot.com/configuration-options/#maxmajorincrement
 */
export type MaxMajorIncrement = number;
/**
 * If set, Renovate will query the merge-confidence JSON API only for datasources that are part of this list.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#mergeconfidencedatasources
 */
export type MergeConfidenceDatasources = ('go' | 'maven' | 'npm' | 'nuget' | 'packagist' | 'pypi' | 'rubygems')[];
/**
 * If set, Renovate will query this API for Merge Confidence data.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#mergeconfidenceendpoint
 */
export type MergeConfidenceEndpoint = string;
/**
 * The number of a milestone. If set, the milestone will be set when Renovate creates the PR.
 * See also: https://docs.renovatebot.com/configuration-options/#milestone
 */
export type Milestone = number | null;
/**
 * The minimum number of updates which must be in a group for branches to be created.
 * See also: https://docs.renovatebot.com/configuration-options/#minimumgroupsize
 */
export type MinimumGroupSize = number;
/**
 * Time required before a new release is considered stable.
 * See also: https://docs.renovatebot.com/configuration-options/#minimumreleaseage
 */
export type MinimumReleaseAge = string | null;
/**
 * When set in conjunction with `minimumReleaseAge`, controls whether the `releaseTimestamp` for a dependency update is required.
 * See also: https://docs.renovatebot.com/configuration-options/#minimumreleaseagebehaviour
 */
export type MinimumReleaseAgeBehaviour = 'timestamp-required' | 'timestamp-optional';
/**
 * Mode of operation.
 * See also: https://docs.renovatebot.com/configuration-options/#mode
 */
export type Mode = 'full' | 'silent';
/**
 * npm token used to authenticate with the default registry.
 * See also: https://docs.renovatebot.com/configuration-options/#npmtoken
 */
export type NpmToken = string;
/**
 * String copy of `.npmrc` file. Use `\n` instead of line breaks.
 * See also: https://docs.renovatebot.com/configuration-options/#npmrc
 */
export type Npmrc = string;
/**
 * Whether to merge `config.npmrc` with repo `.npmrc` content if both are found.
 * See also: https://docs.renovatebot.com/configuration-options/#npmrcmerge
 */
export type NpmrcMerge = boolean;
/**
 * Require a Configuration PR first.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboarding
 */
export type Onboarding = boolean;
/**
 * Maximum number of days after which Renovate will stop trying to onboard the repository, and will close any existing onboarding PRs
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingautocloseage
 */
export type OnboardingAutoCloseAge = number | null;
/**
 * Change this value to override the default onboarding branch name.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingbranch
 */
export type OnboardingBranch = string;
/**
 * Change this value to override the default onboarding commit message.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingcommitmessage
 */
export type OnboardingCommitMessage = string | null;
/**
 * Change this value to override the default onboarding config file name.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingconfigfilename
 */
export type OnboardingConfigFileName = string;
/**
 * Onboard the repository even if no dependencies are found.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingnodeps
 */
export type OnboardingNoDeps = 'auto' | 'enabled' | 'disabled';
/**
 * Change this value to override the default onboarding PR title.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingprtitle
 */
export type OnboardingPrTitle = string;
/**
 * Set to enable rebase/retry markdown checkbox for onboarding PRs.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#onboardingrebasecheckbox
 */
export type OnboardingRebaseCheckbox = boolean;
/**
 * Set to `true` to perform a check for disabled config prior to cloning.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#optimizefordisabled
 */
export type OptimizeForDisabled = boolean;
/**
 * Use vulnerability alerts from `osv.dev`.
 * See also: https://docs.renovatebot.com/configuration-options/#osvvulnerabilityalerts
 */
export type OsvVulnerabilityAlerts = boolean;
/**
 * A version range or regex pattern capturing allowed versions for dependencies.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesallowedversions
 */
export type AllowedVersions = string;
/**
 * Set a custom URL for the changelog. Renovate will put this URL in the PR body text.
 * See also: https://docs.renovatebot.com/configuration-options/#packageruleschangelogurl
 */
export type ChangelogUrl = string;
/**
 * List of strings containing exact matches (e.g. `["main"]`) and/or regex expressions (e.g. `["/^release/.* /"]`). Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchbasebranches
 */
export type MatchBaseBranches = string[] | string;
/**
 * List of categories to match (for example: `["python"]`). Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchcategories
 */
export type MatchCategories = string[] | string;
/**
 * Merge confidence levels to match against (`low`, `neutral`, `high`, `very high`). Valid only within `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchconfidence
 */
export type MatchConfidence =
  | ((('low' | 'neutral' | 'high' | 'very high') | string) & string)[]
  | ((('low' | 'neutral' | 'high' | 'very high') | string) & string);
/**
 * Matches the current age of the package derived from its release timestamp. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchcurrentage
 */
export type MatchCurrentAge = string;
/**
 * A regex or glob pattern to match against the raw `currentValue` string of a dependency. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchcurrentvalue
 */
export type MatchCurrentValue = string;
/**
 * A version, or range of versions, to match against the current version of a package. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchcurrentversion
 */
export type MatchCurrentVersion = string;
/**
 * List of datasources to match (e.g. `["orb"]`). Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchdatasources
 */
export type MatchDatasources = string[] | string;
/**
 * Dep names to match. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchdepnames
 */
export type MatchDepNames = string[] | string;
/**
 * List of depTypes to match (e.g. [`peerDependencies`]). Valid only within `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchdeptypes
 */
export type MatchDepTypes = string[] | string;
/**
 * List of patterns to match against package and lock file paths. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchfilenames
 */
export type MatchFileNames = string[];
/**
 * A JSONata expression to match against the full config object. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchjsonata
 */
export type MatchJsonata = string[];
/**
 * List of package managers to match (e.g. `["pipenv"]`). Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchmanagers
 */
export type MatchManagers = string[] | string;
/**
 * A regex or glob pattern to match against the raw `newValue` string of a dependency. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchnewvalue
 */
export type MatchNewValue = string;
/**
 * Package names to match. Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchpackagenames
 */
export type MatchPackageNames = string[] | string;
/**
 * A list of URLs (or URL patterns) to match against registryUrls.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchregistryurls
 */
export type MatchRegistryUrls = string[] | string;
/**
 * List of repositories to match (e.g. `["** /*-archived"]`). Valid only within a `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchrepositories
 */
export type MatchRepositories = string[] | string;
/**
 * A list of exact match URLs (or URL patterns) to match sourceUrl against.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchsourceurls
 */
export type MatchSourceUrls = string[] | string;
/**
 * Update types to match against (`major`, `minor`, `pin`, `pinDigest`, etc). Valid only within `packageRules` object.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesmatchupdatetypes
 */
export type MatchUpdateTypes =
  | ((
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
        )
      | string
    ) &
      string)[]
  | ((
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
        )
      | string
    ) &
      string);
/**
 * Override the datasource value.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesoverridedatasource
 */
export type OverrideDatasource = string;
/**
 * Override the depName value.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesoverridedepname
 */
export type OverrideDepName = string;
/**
 * Override the packageName value.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesoverridepackagename
 */
export type OverridePackageName = string;
/**
 * Set sorting priority for PR creation. PRs with higher priority are created first, negative priority last.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesprpriority
 */
export type PrPriority = number;
/**
 * The name of the new dependency that replaces the old deprecated dependency.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesreplacementname
 */
export type ReplacementName = string;
/**
 * Controls what the replacement package name.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesreplacementnametemplate
 */
export type ReplacementNameTemplate = string;
/**
 * The version of the new dependency that replaces the old deprecated dependency.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesreplacementversion
 */
export type ReplacementVersion = string;
/**
 * Template field for the version of the new dependency that replaces the old deprecated dependency.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulesreplacementversiontemplate
 */
export type ReplacementVersionTemplate = string;
/**
 * The source directory in which the package is present at its source.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulessourcedirectory
 */
export type SourceDirectory = string;
/**
 * The source URL of the package.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerulessourceurl
 */
export type SourceUrl = string;
/**
 * Rules for matching packages.
 * See also: https://docs.renovatebot.com/configuration-options/#packagerules
 */
export type PackageRules = {
  description?: string[] | string;
  allowedVersions?: AllowedVersions;
  changelogUrl?: ChangelogUrl;
  enabled?: Enabled;
  fetchChangeLogs?: FetchChangeLogs;
  matchBaseBranches?: MatchBaseBranches;
  matchCategories?: MatchCategories;
  matchConfidence?: MatchConfidence;
  matchCurrentAge?: MatchCurrentAge;
  matchCurrentValue?: MatchCurrentValue;
  matchCurrentVersion?: MatchCurrentVersion;
  matchDatasources?: MatchDatasources;
  matchDepNames?: MatchDepNames;
  matchDepTypes?: MatchDepTypes;
  matchFileNames?: MatchFileNames;
  matchJsonata?: MatchJsonata;
  matchManagers?: MatchManagers;
  matchNewValue?: MatchNewValue;
  matchPackageNames?: MatchPackageNames;
  matchRegistryUrls?: MatchRegistryUrls;
  matchRepositories?: MatchRepositories;
  matchSourceUrls?: MatchSourceUrls;
  matchUpdateTypes?: MatchUpdateTypes;
  overrideDatasource?: OverrideDatasource;
  overrideDepName?: OverrideDepName;
  overridePackageName?: OverridePackageName;
  prPriority?: PrPriority;
  replacementName?: ReplacementName;
  replacementNameTemplate?: ReplacementNameTemplate;
  replacementVersion?: ReplacementVersion;
  replacementVersionTemplate?: ReplacementVersionTemplate;
  sourceDirectory?: SourceDirectory;
  sourceUrl?: SourceUrl;
  [k: string]: unknown | undefined;
}[];
/**
 * Password for authentication.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#password
 */
export type Password = string;
/**
 * If set to `true`: keep repository data between runs instead of deleting the data.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#persistrepodata
 */
export type PersistRepoData = boolean;
/**
 * Whether to add digests to Dockerfile source images.
 * See also: https://docs.renovatebot.com/configuration-options/#pindigests
 */
export type PinDigests = boolean;
/**
 * Platform type of repository.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#platform
 */
export type Platform =
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
  | 'scm-manager';
/**
 * Controls if platform-native auto-merge is used.
 * See also: https://docs.renovatebot.com/configuration-options/#platformautomerge
 */
export type PlatformAutomerge = boolean;
/**
 * Use platform API to perform commits instead of using Git directly.
 * See also: https://docs.renovatebot.com/configuration-options/#platformcommit
 */
export type PlatformCommit = 'auto' | 'disabled' | 'enabled';
/**
 * Enable post-update options to be run after package/artifact updating.
 * See also: https://docs.renovatebot.com/configuration-options/#postupdateoptions
 */
export type PostUpdateOptions = (
  | 'bundlerConservative'
  | 'composerWithAll'
  | 'composerNoMinimalChanges'
  | 'dotnetWorkloadRestore'
  | 'gomodMassage'
  | 'gomodTidy'
  | 'gomodTidy1.17'
  | 'gomodTidyE'
  | 'gomodUpdateImportPaths'
  | 'gomodSkipVendor'
  | 'gomodVendor'
  | 'goGenerate'
  | 'helmUpdateSubChartArchives'
  | 'kustomizeInflateHelmCharts'
  | 'npmDedupe'
  | 'npmInstallTwice'
  | 'pnpmDedupe'
  | 'yarnDedupeFewer'
  | 'yarnDedupeHighest'
)[];
/**
 * List of columns to use in PR bodies.
 * See also: https://docs.renovatebot.com/configuration-options/#prbodycolumns
 */
export type PrBodyColumns = string[];
/**
 * List of extra notes or templates to include in the Pull Request body.
 * See also: https://docs.renovatebot.com/configuration-options/#prbodynotes
 */
export type PrBodyNotes = string[] | string;
/**
 * Pull Request body template. Controls which sections are rendered in the body of the pull request.
 * See also: https://docs.renovatebot.com/configuration-options/#prbodytemplate
 */
export type PrBodyTemplate = string;
/**
 * Maximum number of pages to fetch when syncing the pull request cache.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#prcachesyncmaxpages
 */
export type PrCacheSyncMaxPages = number;
/**
 * Set the maximum number of commits per Renovate run. By default there is no limit.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#prcommitsperrunlimit
 */
export type PrCommitsPerRunLimit = number;
/**
 * Limit to a maximum of x concurrent branches/PRs. 0 means no limit.
 * See also: https://docs.renovatebot.com/configuration-options/#prconcurrentlimit
 */
export type PrConcurrentLimit = number;
/**
 * When to create the PR for a branch.
 * See also: https://docs.renovatebot.com/configuration-options/#prcreation
 */
export type PrCreation = 'immediate' | 'not-pending' | 'status-success' | 'approval';
/**
 * Text added here will be placed last in the PR body, with a divider separator before it.
 * See also: https://docs.renovatebot.com/configuration-options/#prfooter
 */
export type PrFooter = string;
/**
 * Text added here will be placed first in the PR body.
 * See also: https://docs.renovatebot.com/configuration-options/#prheader
 */
export type PrHeader = string;
/**
 * Rate limit PRs to maximum x created per hour. 0 means no limit.
 * See also: https://docs.renovatebot.com/configuration-options/#prhourlylimit
 */
export type PrHourlyLimit = number;
/**
 * Timeout in hours for when `prCreation=not-pending`.
 * See also: https://docs.renovatebot.com/configuration-options/#prnotpendinghours
 */
export type PrNotPendingHours = number;
/**
 * Pull Request title template. Inherits from `commitMessage` if null.
 * See also: https://docs.renovatebot.com/configuration-options/#prtitle
 */
export type PrTitle = string | null;
/**
 * Whether to bypass appending extra context to the Pull Request title.
 * See also: https://docs.renovatebot.com/configuration-options/#prtitlestrict
 */
export type PrTitleStrict = boolean;
/**
 * Cache resolved presets in package cache.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#presetcachepersistence
 */
export type PresetCachePersistence = boolean;
/**
 * If enabled, Renovate logs the fully resolved config for each repository, plus the fully resolved presets.
 * See also: https://docs.renovatebot.com/configuration-options/#printconfig
 */
export type PrintConfig = boolean;
/**
 * Server-side private key.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#privatekey
 */
export type PrivateKey = string;
/**
 * Secondary or old private key to try.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#privatekeyold
 */
export type PrivateKeyOld = string;
/**
 * Path to the Server-side private key.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#privatekeypath
 */
export type PrivateKeyPath = string;
/**
 * Path to the Server-side old private key.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#privatekeypathold
 */
export type PrivateKeyPathOld = string;
/**
 * Set to `true` to enable branch pruning after automerging.
 * See also: https://docs.renovatebot.com/configuration-options/#prunebranchafterautomerge
 */
export type PruneBranchAfterAutomerge = boolean;
/**
 * Set to `false` to disable pruning stale branches.
 * See also: https://docs.renovatebot.com/configuration-options/#prunestalebranches
 */
export type PruneStaleBranches = boolean;
/**
 * Determines how to modify or update existing ranges.
 * See also: https://docs.renovatebot.com/configuration-options/#rangestrategy
 */
export type RangeStrategy = 'auto' | 'pin' | 'bump' | 'replace' | 'widen' | 'update-lockfile' | 'in-range-only';
/**
 * Rebase all open branches at once, as if the rebase-all-open-PRs checkbox was selected in the Dependency Dashboard issue.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#rebaseallopenbranches
 */
export type RebaseAllOpenBranches = boolean;
/**
 * Label to request a rebase from Renovate bot.
 * See also: https://docs.renovatebot.com/configuration-options/#rebaselabel
 */
export type RebaseLabel = string;
/**
 * Controls when Renovate rebases an existing branch.
 * See also: https://docs.renovatebot.com/configuration-options/#rebasewhen
 */
export type RebaseWhen = 'auto' | 'never' | 'conflicted' | 'behind-base-branch' | 'automerging';
/**
 * Recreate PRs even if same ones were closed previously.
 * See also: https://docs.renovatebot.com/configuration-options/#recreatewhen
 */
export type RecreateWhen = 'auto' | 'always' | 'never';
/**
 * Key prefix for redis cache entries.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#redisprefix
 */
export type RedisPrefix = string;
/**
 * If set, this Redis URL will be used for caching instead of the file system.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#redisurl
 */
export type RedisUrl = string;
/**
 * List of URLs to try for dependency lookup. Package manager specific.
 * See also: https://docs.renovatebot.com/configuration-options/#registryurls
 */
export type RegistryUrls = string[] | null;
/**
 * Select whether to perform a direct replacement or alias replacement.
 * See also: https://docs.renovatebot.com/configuration-options/#replacementapproach
 */
export type ReplacementApproach = 'replace' | 'alias';
/**
 * If set to `true`, Renovate will format the report JSON with Prettier before writing.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#reportformatting
 */
export type ReportFormatting = boolean;
/**
 * Path to where the file should be written. In case of `s3` this has to be a full S3 URI.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#reportpath
 */
export type ReportPath = string | null;
/**
 * Set how, or if, reports should be generated.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#reporttype
 */
export type ReportType = ('logging' | 'file' | 's3') | null;
/**
 * List of Repositories.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#repositories
 */
export type Repositories = string[];
/**
 * This option decides if Renovate uses a JSON cache to speed up extractions.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#repositorycache
 */
export type RepositoryCache = 'disabled' | 'enabled' | 'reset';
/**
 * If set to `true`, Renovate will persist repository cache locally after uploading to S3.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#repositorycacheforcelocal
 */
export type RepositoryCacheForceLocal = boolean;
/**
 * Set the type of renovate repository cache if `repositoryCache` is enabled.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#repositorycachetype
 */
export type RepositoryCacheType = string;
/**
 * Controls Renovate's behavior regarding repository config files such as `renovate.json`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#requireconfig
 */
export type RequireConfig = 'required' | 'optional' | 'ignored';
/**
 * Ignore versions newer than npm "latest" version.
 * See also: https://docs.renovatebot.com/configuration-options/#respectlatest
 */
export type RespectLatest = boolean;
/**
 * Requested reviewers for Pull Requests (either username or email address depending on the platform).
 * See also: https://docs.renovatebot.com/configuration-options/#reviewers
 */
export type Reviewers = string[];
/**
 * Determine reviewers based on configured code owners and changes in PR.
 * See also: https://docs.renovatebot.com/configuration-options/#reviewersfromcodeowners
 */
export type ReviewersFromCodeOwners = boolean;
/**
 * Take a random sample of given size from `reviewers`.
 * See also: https://docs.renovatebot.com/configuration-options/#reviewerssamplesize
 */
export type ReviewersSampleSize = number | null;
/**
 * Create PRs to roll back versions if the current version is not found in the registry.
 * See also: https://docs.renovatebot.com/configuration-options/#rollbackprs
 */
export type RollbackPrs = boolean;
/**
 * If set, Renovate will use this string as the `endpoint` when creating the AWS S3 client instance.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#s3endpoint
 */
export type S3Endpoint = string;
/**
 * If set, Renovate will enable `forcePathStyle` when creating the AWS S3 client instance.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#s3pathstyle
 */
export type S3PathStyle = boolean;
/**
 * Limit branch creation to these times of day or week.
 * See also: https://docs.renovatebot.com/configuration-options/#schedule
 */
export type Schedule = string[] | string;
/**
 * Commit scope to use if Semantic Commits are enabled.
 * See also: https://docs.renovatebot.com/configuration-options/#semanticcommitscope
 */
export type SemanticCommitScope = string;
/**
 * Commit type to use if Semantic Commits is enabled.
 * See also: https://docs.renovatebot.com/configuration-options/#semanticcommittype
 */
export type SemanticCommitType = string;
/**
 * Enable Semantic Commit prefixes for commits and PR titles.
 * See also: https://docs.renovatebot.com/configuration-options/#semanticcommits
 */
export type SemanticCommits = 'auto' | 'enabled' | 'disabled';
/**
 * If set to `false`, Renovate will upgrade dependencies to their latest release only. Renovate will not separate major or minor branches.
 * See also: https://docs.renovatebot.com/configuration-options/#separatemajorminor
 */
export type SeparateMajorMinor = boolean;
/**
 * If set to `true`, Renovate will separate `minor` and `patch` updates into separate branches.
 * See also: https://docs.renovatebot.com/configuration-options/#separateminorpatch
 */
export type SeparateMinorPatch = boolean;
/**
 * If set to `true`, PRs will be raised separately for each available `major` upgrade version.
 * See also: https://docs.renovatebot.com/configuration-options/#separatemultiplemajor
 */
export type SeparateMultipleMajor = boolean;
/**
 * If set to `true`, Renovate creates separate PRs for each `minor` stream.
 * See also: https://docs.renovatebot.com/configuration-options/#separatemultipleminor
 */
export type SeparateMultipleMinor = boolean;
/**
 * Skip Renovate's automatic artifact updating.
 * See also: https://docs.renovatebot.com/configuration-options/#skipartifactsupdate
 */
export type SkipArtifactsUpdate = boolean;
/**
 * Skip installing modules/dependencies if lock file updating is possible without a full install.
 * See also: https://docs.renovatebot.com/configuration-options/#skipinstalls
 */
export type SkipInstalls = boolean | null;
/**
 * Label to make Renovate stop updating a PR.
 * See also: https://docs.renovatebot.com/configuration-options/#stopupdatinglabel
 */
export type StopUpdatingLabel = string;
/**
 * Options to suppress various types of warnings and other notifications.
 * See also: https://docs.renovatebot.com/configuration-options/#suppressnotifications
 */
export type SuppressNotifications = (
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
/**
 * Must conform to [IANA Time Zone](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format.
 * See also: https://docs.renovatebot.com/configuration-options/#timezone
 */
export type Timezone = string;
/**
 * Repository Auth Token.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#token
 */
export type Token = string;
/**
 * Enable or disable Unicode emoji.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#unicodeemoji
 */
export type UnicodeEmoji = boolean;
/**
 * Whether to update internal dep versions in a monorepo. Works on Yarn Workspaces.
 * See also: https://docs.renovatebot.com/configuration-options/#updateinternaldeps
 */
export type UpdateInternalDeps = boolean;
/**
 * Whether to update branches when not scheduled. Renovate will not create branches outside of the schedule.
 * See also: https://docs.renovatebot.com/configuration-options/#updatenotscheduled
 */
export type UpdateNotScheduled = boolean;
/**
 * Whether to update pinned (single version) dependencies or not.
 * See also: https://docs.renovatebot.com/configuration-options/#updatepinneddependencies
 */
export type UpdatePinnedDependencies = boolean;
/**
 * Whether to read configuration from base branches instead of only the default branch.
 * See also: https://docs.renovatebot.com/configuration-options/#usebasebranchconfig
 */
export type UseBaseBranchConfig = 'merge' | 'none';
/**
 * If `false`, Renovate does not try to access cloud metadata services.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#usecloudmetadataservices
 */
export type UseCloudMetadataServices = boolean;
/**
 * Sets the `user-agent` header to be sent with HTTP requests. Supports `{{renovateVersion}}` as a template variable for the current Renovate version.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#useragent
 */
export type UserAgent = string;
/**
 * Username for authentication.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#username
 */
export type Username = string;
/**
 * A regex (`re2`) with named capture groups to show how version and compatibility are split from a raw version string.
 * See also: https://docs.renovatebot.com/configuration-options/#versioncompatibility
 */
export type VersionCompatibility = string;
export type Versioning =
  | (
      | 'apk'
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
      | 'deno'
      | 'devbox'
      | 'docker'
      | 'elm'
      | 'exact'
      | 'git'
      | 'github-actions'
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
      | 'paket'
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
      | 'rust-release-channel'
      | 'same-major'
      | 'semver'
      | 'semver-coerced'
      | 'semver-partial'
      | 'swift'
      | 'ubuntu'
      | 'unity3d'
      | 'unity3d-packages'
    )
  | string;
export type Versioning1 = string;
/**
 * Writes discovered repositories to a JSON file and then exit.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#writediscoveredrepos
 */
export type WriteDiscoveredRepos = string;
/**
 * hostType for a package rule. Can be a platform name or a datasource name.
 * See also: https://docs.renovatebot.com/configuration-options/#hostruleshosttype
 */
export type HostType = string;
/**
 * The certificate chains in PEM format.
 * See also: https://docs.renovatebot.com/configuration-options/#hostruleshttpscertificate
 */
export type HttpsCertificate = string | null;
/**
 * The overriding trusted CA certificate.
 * See also: https://docs.renovatebot.com/configuration-options/#hostruleshttpscertificateauthority
 */
export type HttpsCertificateAuthority = string | null;
/**
 * The private key in PEM format.
 * See also: https://docs.renovatebot.com/configuration-options/#hostruleshttpsprivatekey
 */
export type HttpsPrivateKey = string | null;
/**
 * Explicitly turn on insecure Docker registry access (HTTP).
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesinsecureregistry
 */
export type InsecureRegistry = boolean;
/**
 * Enable HTTP keep-alive for hosts.
 * See also: https://docs.renovatebot.com/configuration-options/#hostruleskeepalive
 */
export type KeepAlive = boolean;
/**
 * A domain name, host name or base URL to match against.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesmatchhost
 */
export type MatchHost = string;
/**
 * Limit requests rate per host.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesmaxrequestspersecond
 */
export type MaxRequestsPerSecond = number;
/**
 * Maximum retry-after header value to wait for before retrying a failed request.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesmaxretryafter
 */
export type MaxRetryAfter = number;
/**
 * Match against requests that only read data and do not mutate anything.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulesreadonly
 */
export type ReadOnly = boolean;
/**
 * Timeout (in milliseconds) for queries to external endpoints.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrulestimeout
 */
export type Timeout = number;
/**
 * Host rules/configuration including credentials.
 * See also: https://docs.renovatebot.com/configuration-options/#hostrules
 */
export type HostRules = {
  description?: string[] | string;
  abortIgnoreStatusCodes?: AbortIgnoreStatusCodes;
  abortOnError?: AbortOnError;
  artifactAuth?: ArtifactAuth;
  authType?: AuthType;
  concurrentRequestLimit?: ConcurrentRequestLimit;
  dnsCache?: DnsCache;
  enableHttp2?: EnableHttp2;
  enabled?: Enabled;
  headers?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hostType?: HostType;
  httpsCertificate?: HttpsCertificate;
  httpsCertificateAuthority?: HttpsCertificateAuthority;
  httpsPrivateKey?: HttpsPrivateKey;
  insecureRegistry?: InsecureRegistry;
  keepAlive?: KeepAlive;
  matchHost?: MatchHost;
  maxRequestsPerSecond?: MaxRequestsPerSecond;
  maxRetryAfter?: MaxRetryAfter;
  readOnly?: ReadOnly;
  timeout?: Timeout;
  [k: string]: unknown | undefined;
}[];

export interface JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  allowCustomCrateRegistries?: AllowCustomCrateRegistries;
  allowPlugins?: AllowPlugins;
  allowScripts?: AllowScripts;
  allowShellExecutorForPostUpgradeCommands?: AllowShellExecutorForPostUpgradeCommands;
  allowedCommands?: AllowedCommands;
  allowedEnv?: AllowedEnv;
  allowedHeaders?: AllowedHeaders;
  allowedUnsafeExecutions?: AllowedUnsafeExecutions;
  ansible?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  autodiscover?: Autodiscover;
  autodiscoverFilter?: AutodiscoverFilter;
  autodiscoverNamespaces?: AutodiscoverNamespaces;
  autodiscoverProjects?: AutodiscoverProjects;
  autodiscoverRepoOrder?: AutodiscoverRepoOrder;
  autodiscoverRepoSort?: AutodiscoverRepoSort;
  autodiscoverTopics?: AutodiscoverTopics;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  baseDir?: BaseDir;
  batect?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  binarySource?: BinarySource;
  'bitbucket-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cacheDir?: CacheDir;
  cacheHardTtlMinutes?: CacheHardTtlMinutes;
  cachePrivatePackages?: CachePrivatePackages;
  cacheTtlOverride?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  checkedBranches?: CheckedBranches;
  circleci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  commitBody?: CommitBody;
  commitBodyTable?: CommitBodyTable;
  commitHourlyLimit?: CommitHourlyLimit;
  commitMessage?: CommitMessage;
  commitMessageAction?: CommitMessageAction;
  commitMessageExtra?: CommitMessageExtra;
  commitMessageLowerCase?: CommitMessageLowerCase;
  commitMessagePrefix?: CommitMessagePrefix;
  commitMessageSuffix?: CommitMessageSuffix;
  commitMessageTopic?: CommitMessageTopic;
  commitTrailers?: CommitTrailers;
  composer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  containerbaseDir?: ContainerbaseDir;
  copier?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deleteAdditionalConfigFile?: DeleteAdditionalConfigFile;
  deleteConfigFile?: DeleteConfigFile;
  deno?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dependencyDashboard?: DependencyDashboard;
  dependencyDashboardApproval?: DependencyDashboardApproval;
  dependencyDashboardAutoclose?: DependencyDashboardAutoclose;
  dependencyDashboardCategory?: DependencyDashboardCategory;
  dependencyDashboardFooter?: DependencyDashboardFooter;
  dependencyDashboardHeader?: DependencyDashboardHeader;
  dependencyDashboardLabels?: DependencyDashboardLabels;
  dependencyDashboardOSVVulnerabilitySummary?: DependencyDashboardOSVVulnerabilitySummary;
  dependencyDashboardReportAbandonment?: DependencyDashboardReportAbandonment;
  dependencyDashboardTitle?: DependencyDashboardTitle;
  'deps-edn'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  description?: Description;
  detectGlobalManagerConfig?: DetectGlobalManagerConfig;
  detectHostRulesFromEnv?: DetectHostRulesFromEnv;
  devbox?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dockerChildPrefix?: DockerChildPrefix;
  dockerCliOptions?: DockerCliOptions;
  dockerMaxPages?: DockerMaxPages;
  dockerSidecarImage?: DockerSidecarImage;
  dockerUser?: DockerUser;
  dockerfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dryRun?: DryRun;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom43;
  encryptedWarning?: EncryptedWarning;
  endpoint?: Endpoint;
  env?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  executionTimeout?: ExecutionTimeout;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  exposeAllEnv?: ExposeAllEnv;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  followTag?: FollowTag;
  force?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  forceCli?: ForceCli;
  forkCreation?: ForkCreation;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkOrg?: ForkOrg;
  forkProcessing?: ForkProcessing;
  forkToken?: ForkToken;
  fvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  gitNoVerify?: GitNoVerify;
  gitPrivateKey?: GitPrivateKey;
  gitPrivateKeyPassphrase?: GitPrivateKeyPassphrase;
  gitTimeout?: GitTimeout;
  gitUrl?: GitUrl;
  'github-actions'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  githubTokenWarn?: GithubTokenWarn;
  gitlabci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  globalExtends?: GlobalExtends;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  httpCacheTtlDays?: HttpCacheTtlDays;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePrAuthor?: IgnorePrAuthor;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includeMirrors?: IncludeMirrors;
  includePaths?: IncludePaths;
  inheritConfig?: InheritConfig;
  inheritConfigFileName?: InheritConfigFileName;
  inheritConfigRepoName?: InheritConfigRepoName;
  inheritConfigStrict?: InheritConfigStrict;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  logContext?: LogContext;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  mergeConfidenceDatasources?: MergeConfidenceDatasources;
  mergeConfidenceEndpoint?: MergeConfidenceEndpoint;
  meteor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  onboardingRebaseCheckbox?: OnboardingRebaseCheckbox;
  optimizeForDisabled?: OptimizeForDisabled;
  osgi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  packageRules?: PackageRules;
  password?: Password;
  patch?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  persistRepoData?: PersistRepoData;
  pin?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  platform?: Platform;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prCacheSyncMaxPages?: PrCacheSyncMaxPages;
  prCommitsPerRunLimit?: PrCommitsPerRunLimit;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  presetCachePersistence?: PresetCachePersistence;
  printConfig?: PrintConfig;
  privateKey?: PrivateKey;
  privateKeyOld?: PrivateKeyOld;
  privateKeyPath?: PrivateKeyPath;
  privateKeyPathOld?: PrivateKeyPathOld;
  processEnv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  productLinks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  proto?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseAllOpenBranches?: RebaseAllOpenBranches;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  redisPrefix?: RedisPrefix;
  redisUrl?: RedisUrl;
  regex?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  reportFormatting?: ReportFormatting;
  reportPath?: ReportPath;
  reportType?: ReportType;
  repositories?: Repositories;
  repositoryCache?: RepositoryCache;
  repositoryCacheForceLocal?: RepositoryCacheForceLocal;
  repositoryCacheType?: RepositoryCacheType;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  s3Endpoint?: S3Endpoint;
  s3PathStyle?: S3PathStyle;
  sbt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  schedule?: Schedule;
  secrets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  timezone?: Timezone;
  token?: Token;
  toolSettings?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  unicodeEmoji?: UnicodeEmoji;
  unity3d?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  useCloudMetadataServices?: UseCloudMetadataServices;
  userAgent?: UserAgent;
  userStrings?: UserStrings;
  username?: Username;
  variables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  velaci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  writeDiscoveredRepos?: WriteDiscoveredRepos;
  xcodegen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  [k: string]: unknown | undefined;
}
/**
 * Configuration object to define language or manager version constraints.
 * See also: https://docs.renovatebot.com/configuration-options/#constraints
 */
export interface Constraints {
  /**
   * A constraint for the `bazelisk` Containerbase tool
   */
  bazelisk?: string;
  /**
   * A constraint for the `bun` Containerbase tool
   */
  bun?: string;
  /**
   * A constraint for the `bundler` Containerbase tool
   */
  bundler?: string;
  /**
   * A constraint for the `cocoapods` Containerbase tool
   */
  cocoapods?: string;
  /**
   * A constraint for the `composer` Containerbase tool
   */
  composer?: string;
  /**
   * A constraint for the `conan` Containerbase tool
   */
  conan?: string;
  /**
   * A constraint for the `copier` Containerbase tool
   */
  copier?: string;
  /**
   * A constraint for the `corepack` Containerbase tool
   */
  corepack?: string;
  /**
   * A constraint for the `deno` Containerbase tool
   */
  deno?: string;
  /**
   * A constraint for the `devbox` Containerbase tool
   */
  devbox?: string;
  /**
   * A constraint for the `dotnet` Containerbase tool
   */
  dotnet?: string;
  /**
   * A constraint for the `erlang` Containerbase tool
   */
  erlang?: string;
  /**
   * A constraint for the `elixir` Containerbase tool
   */
  elixir?: string;
  /**
   * A constraint for the `flux` Containerbase tool
   */
  flux?: string;
  /**
   * A constraint for the `gleam` Containerbase tool
   */
  gleam?: string;
  /**
   * A constraint for the `golang` Containerbase tool
   */
  golang?: string;
  /**
   * A constraint for the `gradle` Containerbase tool
   */
  gradle?: string;
  /**
   * A constraint for the `hashin` Containerbase tool
   */
  hashin?: string;
  /**
   * A constraint for the `helm` Containerbase tool
   */
  helm?: string;
  /**
   * A constraint for the `helmfile` Containerbase tool
   */
  helmfile?: string;
  /**
   * A constraint for the `java` Containerbase tool
   */
  java?: string;
  /**
   * A constraint for the `java-maven` Containerbase tool
   */
  'java-maven'?: string;
  /**
   * A constraint for the `jb` Containerbase tool
   */
  jb?: string;
  /**
   * A constraint for the `kustomize` Containerbase tool
   */
  kustomize?: string;
  /**
   * A constraint for the `maven` Containerbase tool
   */
  maven?: string;
  /**
   * A constraint for the `mise` Containerbase tool
   */
  mise?: string;
  /**
   * A constraint for the `nix` Containerbase tool
   */
  nix?: string;
  /**
   * A constraint for the `node` Containerbase tool
   */
  node?: string;
  /**
   * A constraint for the `npm` Containerbase tool
   */
  npm?: string;
  /**
   * A constraint for the `pdm` Containerbase tool
   */
  pdm?: string;
  /**
   * A constraint for the `php` Containerbase tool
   */
  php?: string;
  /**
   * A constraint for the `pip-tools` Containerbase tool
   */
  'pip-tools'?: string;
  /**
   * A constraint for the `pipenv` Containerbase tool
   */
  pipenv?: string;
  /**
   * A constraint for the `pnpm` Containerbase tool
   */
  pnpm?: string;
  /**
   * A constraint for the `pixi` Containerbase tool
   */
  pixi?: string;
  /**
   * A constraint for the `poetry` Containerbase tool
   */
  poetry?: string;
  /**
   * A constraint for the `python` Containerbase tool
   */
  python?: string;
  /**
   * A constraint for the `ruby` Containerbase tool. Also used in the `rubygems` Datasource
   */
  ruby?: string;
  /**
   * A constraint for the `rust` Containerbase tool
   */
  rust?: string;
  /**
   * A constraint for the `uv` Containerbase tool
   */
  uv?: string;
  /**
   * A constraint for the `yarn` Containerbase tool
   */
  yarn?: string;
  /**
   * A constraint for the `yarn-slim` Containerbase tool
   */
  'yarn-slim'?: string;
  /**
   * A constraint for the `dart` Containerbase tool
   */
  dart?: string;
  /**
   * A constraint for the `flutter` Containerbase tool
   */
  flutter?: string;
  /**
   * A constraint for the `vendir` Containerbase tool
   */
  vendir?: string;
  /**
   * Used in the `gomod` manager to specify the version of the Go toolchain to use.
   *
   * In precedence order:
   *
   * 1. config: `constraints.go`
   * 1. `go.mod`: `toolchain` directive
   * 1. `go.mod`: `go` directive
   *
   * NOTE that the `constraints.golang` is not used (https://github.com/renovatebot/renovate/issues/42601)
   *
   */
  go?: string;
  /**
   * Used in the `gomod` manager to specify a tag for [`github.com/marwan-at-work/mod`](https://github.com/marwan-at-work/mod).
   *
   * Must be prefixed with `v`.
   */
  gomodMod?: string;
  /**
   * Used in the `jenkins-plugins` datasource to specify a minimum version of Jenkins that a plugin must support.
   */
  jenkins?: string;
  /**
   * Used in the `pip-compile` manager to specify a version of `pip-tools` to use. @deprecated TODO remove in #42599
   */
  pipTools?: string;
  /**
   * Used in the `rubygems` datasource to specify the `platform` that the Gem dependency supports.
   */
  platform?: string;
  /**
   * Used in the `rubygems` datasource to specify the version of the `rubygems` tool that is needed to use this Gem.
   */
  rubygems?: string;
  /**
   * Used in the `npm` manager to track the version of VSCode that the package is compatible with.
   */
  vscode?: string;
  /**
   * Used in the `nuget` manager to track .NET SDK version required.
   */
  'dotnet-sdk'?: string;
  /**
   * Used in the `cpanfile` manager to track Perl version required.
   */
  perl?: string;
  /**
   * Used in the `gomod` manager to determine the [minimum version of Go required to use this module](https://go.dev/ref/mod#go-mod-file-go).
   *
   * Note that this is prefixed with a `%` to explicilty note that this is not a tool that Containerbase knows.
   */
  '%goMod'?: string;
}
/**
 * Override the versioning scheme used when filtering releases by specific constraint names. Does not apply to tools.
 * See also: https://docs.renovatebot.com/configuration-options/#constraintsversioning
 */
export interface ConstraintsVersioning {
  /**
   * Used in the `gomod` manager to specify the version of the Go toolchain to use.
   *
   * In precedence order:
   *
   * 1. config: `constraints.go`
   * 1. `go.mod`: `toolchain` directive
   * 1. `go.mod`: `go` directive
   *
   * NOTE that the `constraints.golang` is not used (https://github.com/renovatebot/renovate/issues/42601)
   *
   */
  go?: string;
  /**
   * Used in the `gomod` manager to specify a tag for [`github.com/marwan-at-work/mod`](https://github.com/marwan-at-work/mod).
   *
   * Must be prefixed with `v`.
   */
  gomodMod?: string;
  /**
   * Used in the `jenkins-plugins` datasource to specify a minimum version of Jenkins that a plugin must support.
   */
  jenkins?: string;
  /**
   * Used in the `pip-compile` manager to specify a version of `pip-tools` to use. @deprecated TODO remove in #42599
   */
  pipTools?: string;
  /**
   * Used in the `rubygems` datasource to specify the `platform` that the Gem dependency supports.
   */
  platform?: string;
  /**
   * Used in the `rubygems` datasource to specify the version of the `rubygems` tool that is needed to use this Gem.
   */
  rubygems?: string;
  /**
   * Used in the `npm` manager to track the version of VSCode that the package is compatible with.
   */
  vscode?: string;
  /**
   * Used in the `nuget` manager to track .NET SDK version required.
   */
  'dotnet-sdk'?: string;
  /**
   * Used in the `cpanfile` manager to track Perl version required.
   */
  perl?: string;
  /**
   * Used in the `gomod` manager to determine the [minimum version of Go required to use this module](https://go.dev/ref/mod#go-mod-file-go).
   *
   * Note that this is prefixed with a `%` to explicilty note that this is not a tool that Containerbase knows.
   */
  '%goMod'?: string;
}
/**
 * Customize sections in the Dependency Dashboard issue.
 * See also: https://docs.renovatebot.com/configuration-options/#customizedashboard
 */
export interface CustomizeDashboard {
  [k: string]: string | undefined;
}
/**
 * Define presets here which have been removed or renamed and should be migrated automatically.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#migratepresets
 */
export interface JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82 {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  allowCustomCrateRegistries?: AllowCustomCrateRegistries;
  allowPlugins?: AllowPlugins;
  allowScripts?: AllowScripts;
  allowShellExecutorForPostUpgradeCommands?: AllowShellExecutorForPostUpgradeCommands;
  allowedCommands?: AllowedCommands;
  allowedEnv?: AllowedEnv;
  allowedHeaders?: AllowedHeaders;
  allowedUnsafeExecutions?: AllowedUnsafeExecutions;
  ansible?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  autodiscover?: Autodiscover;
  autodiscoverFilter?: AutodiscoverFilter;
  autodiscoverNamespaces?: AutodiscoverNamespaces;
  autodiscoverProjects?: AutodiscoverProjects;
  autodiscoverRepoOrder?: AutodiscoverRepoOrder;
  autodiscoverRepoSort?: AutodiscoverRepoSort;
  autodiscoverTopics?: AutodiscoverTopics;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  baseDir?: BaseDir;
  batect?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  binarySource?: BinarySource;
  'bitbucket-pipelines'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cacheDir?: CacheDir;
  cacheHardTtlMinutes?: CacheHardTtlMinutes;
  cachePrivatePackages?: CachePrivatePackages;
  cacheTtlOverride?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  checkedBranches?: CheckedBranches;
  circleci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  commitBody?: CommitBody;
  commitBodyTable?: CommitBodyTable;
  commitHourlyLimit?: CommitHourlyLimit;
  commitMessage?: CommitMessage;
  commitMessageAction?: CommitMessageAction;
  commitMessageExtra?: CommitMessageExtra;
  commitMessageLowerCase?: CommitMessageLowerCase;
  commitMessagePrefix?: CommitMessagePrefix;
  commitMessageSuffix?: CommitMessageSuffix;
  commitMessageTopic?: CommitMessageTopic;
  commitTrailers?: CommitTrailers;
  composer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  containerbaseDir?: ContainerbaseDir;
  copier?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customEnvVariables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deleteAdditionalConfigFile?: DeleteAdditionalConfigFile;
  deleteConfigFile?: DeleteConfigFile;
  deno?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dependencyDashboard?: DependencyDashboard;
  dependencyDashboardApproval?: DependencyDashboardApproval;
  dependencyDashboardAutoclose?: DependencyDashboardAutoclose;
  dependencyDashboardCategory?: DependencyDashboardCategory;
  dependencyDashboardFooter?: DependencyDashboardFooter;
  dependencyDashboardHeader?: DependencyDashboardHeader;
  dependencyDashboardLabels?: DependencyDashboardLabels;
  dependencyDashboardOSVVulnerabilitySummary?: DependencyDashboardOSVVulnerabilitySummary;
  dependencyDashboardReportAbandonment?: DependencyDashboardReportAbandonment;
  dependencyDashboardTitle?: DependencyDashboardTitle;
  'deps-edn'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  description?: Description;
  detectGlobalManagerConfig?: DetectGlobalManagerConfig;
  detectHostRulesFromEnv?: DetectHostRulesFromEnv;
  devbox?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dockerChildPrefix?: DockerChildPrefix;
  dockerCliOptions?: DockerCliOptions;
  dockerMaxPages?: DockerMaxPages;
  dockerSidecarImage?: DockerSidecarImage;
  dockerUser?: DockerUser;
  dockerfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  dryRun?: DryRun;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom43;
  encryptedWarning?: EncryptedWarning;
  endpoint?: Endpoint;
  env?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  executionTimeout?: ExecutionTimeout;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  exposeAllEnv?: ExposeAllEnv;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  followTag?: FollowTag;
  force?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  forceCli?: ForceCli;
  forkCreation?: ForkCreation;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkOrg?: ForkOrg;
  forkProcessing?: ForkProcessing;
  forkToken?: ForkToken;
  fvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  gitNoVerify?: GitNoVerify;
  gitPrivateKey?: GitPrivateKey;
  gitPrivateKeyPassphrase?: GitPrivateKeyPassphrase;
  gitTimeout?: GitTimeout;
  gitUrl?: GitUrl;
  'github-actions'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  githubTokenWarn?: GithubTokenWarn;
  gitlabci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  globalExtends?: GlobalExtends;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  httpCacheTtlDays?: HttpCacheTtlDays;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePrAuthor?: IgnorePrAuthor;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includeMirrors?: IncludeMirrors;
  includePaths?: IncludePaths;
  inheritConfig?: InheritConfig;
  inheritConfigFileName?: InheritConfigFileName;
  inheritConfigRepoName?: InheritConfigRepoName;
  inheritConfigStrict?: InheritConfigStrict;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  logContext?: LogContext;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  mergeConfidenceDatasources?: MergeConfidenceDatasources;
  mergeConfidenceEndpoint?: MergeConfidenceEndpoint;
  meteor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  migratePresets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minor?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  onboardingRebaseCheckbox?: OnboardingRebaseCheckbox;
  optimizeForDisabled?: OptimizeForDisabled;
  osgi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  packageRules?: PackageRules;
  password?: Password;
  patch?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  persistRepoData?: PersistRepoData;
  pin?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  platform?: Platform;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prCacheSyncMaxPages?: PrCacheSyncMaxPages;
  prCommitsPerRunLimit?: PrCommitsPerRunLimit;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  presetCachePersistence?: PresetCachePersistence;
  printConfig?: PrintConfig;
  privateKey?: PrivateKey;
  privateKeyOld?: PrivateKeyOld;
  privateKeyPath?: PrivateKeyPath;
  privateKeyPathOld?: PrivateKeyPathOld;
  processEnv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  productLinks?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  proto?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseAllOpenBranches?: RebaseAllOpenBranches;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  redisPrefix?: RedisPrefix;
  redisUrl?: RedisUrl;
  regex?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  reportFormatting?: ReportFormatting;
  reportPath?: ReportPath;
  reportType?: ReportType;
  repositories?: Repositories;
  repositoryCache?: RepositoryCache;
  repositoryCacheForceLocal?: RepositoryCacheForceLocal;
  repositoryCacheType?: RepositoryCacheType;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  s3Endpoint?: S3Endpoint;
  s3PathStyle?: S3PathStyle;
  sbt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  schedule?: Schedule;
  secrets?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  timezone?: Timezone;
  token?: Token;
  toolSettings?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  unicodeEmoji?: UnicodeEmoji;
  unity3d?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  useCloudMetadataServices?: UseCloudMetadataServices;
  userAgent?: UserAgent;
  userStrings?: UserStrings;
  username?: Username;
  variables?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82;
  velaci?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  writeDiscoveredRepos?: WriteDiscoveredRepos;
  xcodegen?: JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom;
  [k: string]:
    | string
    | AbandonmentThreshold
    | AddLabels
    | AdditionalReviewers
    | AllowCustomCrateRegistries
    | AllowedCommands
    | AllowedEnv
    | AllowedHeaders
    | AllowedUnsafeExecutions
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Assignees
    | AssigneesSampleSize
    | AutodiscoverFilter
    | AutodiscoverNamespaces
    | AutodiscoverProjects
    | AutodiscoverRepoOrder
    | AutodiscoverRepoSort
    | AutodiscoverTopics
    | AutomergeSchedule
    | AutomergeStrategy
    | AutomergeType
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | AzureWorkItemId
    | BaseBranchPatterns
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | BinarySource
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | BranchConcurrentLimit
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | BumpVersion
    | BumpVersions
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | CheckedBranches
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | CloneSubmodulesFilter
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | CommitMessageLowerCase
    | CommitTrailers
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | ComposerIgnorePlatformReqs
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | ConfigFileNames
    | Constraints
    | ConstraintsFiltering
    | ConstraintsVersioning
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | CustomManagers
    | CustomizeDashboard
    | DefaultRegistryUrls
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | DependencyDashboardCategory
    | DependencyDashboardLabels
    | DependencyDashboardOSVVulnerabilitySummary
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Description
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | DryRun
    | EnabledManagers
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom43
    | Endpoint
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | ExcludeCommitPaths
    | Extends
    | FetchChangeLogs
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | ForkProcessing
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | GitIgnoredAuthors
    | GitNoVerify
    | GitUrl
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | GlobalExtends
    | GoGetDirs
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | GroupName
    | GroupSlug
    | HashedBranchLength
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | HostRules
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | IgnoreDeps
    | IgnorePaths
    | IgnorePresets
    | IgnoreReviewers
    | IncludePaths
    | InternalChecksFilter
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Labels
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | LogContext
    | LogLevelRemap
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | MergeConfidenceDatasources
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | Milestone
    | MinimumReleaseAge
    | MinimumReleaseAgeBehaviour
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Mode
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | OnboardingAutoCloseAge
    | OnboardingCommitMessage
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | OnboardingNoDeps
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | PackageRules
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Platform
    | PlatformCommit
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | PostUpdateOptions
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | PrBodyColumns
    | PrBodyDefinitions
    | PrBodyHeadingDefinitions
    | PrBodyNotes
    | PrCreation
    | PrTitle
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | RangeStrategy
    | RebaseWhen
    | RecreateWhen
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | RegistryUrls
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | ReplacementApproach
    | ReportPath
    | ReportType
    | Repositories
    | RepositoryCache
    | RequireConfig
    | Reviewers
    | ReviewersSampleSize
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | Schedule
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | SemanticCommits
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | SkipInstalls
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | SuppressNotifications
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | UseBaseBranchConfig
    | UserStrings
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom82
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | (Versioning & Versioning1)
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | JSONSchemaForRenovate432880GlobalSelfHostingConfigurationHttpsRenovatebotCom
    | undefined;
}
/**
 * Table column definitions to use in PR tables.
 * See also: https://docs.renovatebot.com/configuration-options/#prbodydefinitions
 */
export interface PrBodyDefinitions {
  [k: string]: unknown | undefined;
}
/**
 * Table header definitions to use in PR tables.
 * See also: https://docs.renovatebot.com/configuration-options/#prbodyheadingdefinitions
 */
export interface PrBodyHeadingDefinitions {
  [k: string]: unknown | undefined;
}
/**
 * User-facing strings for the Renovate comment when a PR is closed.
 * See also: https://docs.renovatebot.com/configuration-options/#userstrings
 */
export interface UserStrings {
  [k: string]: unknown | undefined;
}
