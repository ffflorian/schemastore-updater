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
  overrideDescription?: string[] | string;
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
  overrideDescription?: string[] | string;
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
 * If set to `true` then Renovate creates draft PRs, instead of normal status PRs.
 * See also: https://docs.renovatebot.com/configuration-options/#draftpr
 */
export type DraftPR = boolean;
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
export type JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom42 = {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  ansible?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  apm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  batect?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bitbucket-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  circleci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  composer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  copier?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deno?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  'deps-edn'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  description?: Description;
  devbox?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  dockerfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom42;
  env?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  followTag?: FollowTag;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkProcessing?: ForkProcessing;
  fvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  'github-actions'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitlabci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includePaths?: IncludePaths;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  meteor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minimumReleaseAgeBuffer?: MinimumReleaseAgeBuffer;
  minor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  osgi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  overrideDescription?: OverrideDescription;
  packageRules?: PackageRules;
  patch?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pin?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  printConfig?: PrintConfig;
  proto?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  regex?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom111;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  sbt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  schedule?: Schedule;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  timezone?: Timezone;
  toolSettings?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  unity3d?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  userStrings?: UserStrings;
  velaci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  xcodegen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  [k: string]: unknown | undefined;
} | null;
/**
 * A file matching any of these glob patterns will not be committed, even if the file has been updated.
 * See also: https://docs.renovatebot.com/configuration-options/#excludecommitpaths
 */
export type ExcludeCommitPaths = string[];
/**
 * Expand the configured code owner groups into a full list of group members.
 * See also: https://docs.renovatebot.com/configuration-options/#expandcodeownersgroups
 */
export type ExpandCodeOwnersGroups = boolean;
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
 * Disallow maintainers to push to Renovate pull requests when running in fork mode.
 * See also: https://docs.renovatebot.com/configuration-options/#forkmodedisallowmaintaineredits
 */
export type ForkModeDisallowMaintainerEdits = boolean;
/**
 * Whether to process forked repositories. By default, all forked repositories are skipped when in `autodiscover` mode.
 * See also: https://docs.renovatebot.com/configuration-options/#forkprocessing
 */
export type ForkProcessing = 'auto' | 'enabled' | 'disabled';
/**
 * Author to use for Git commits. Must conform to [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322).
 * See also: https://docs.renovatebot.com/configuration-options/#gitauthor
 */
export type GitAuthor = string;
/**
 * Git author emails ignored by Renovate. Entries can be exact [RFC5322](https://datatracker.ietf.org/doc/html/rfc5322) strings, glob patterns, or regex patterns using Renovate regex syntax.
 * See also: https://docs.renovatebot.com/configuration-options/#gitignoredauthors
 */
export type GitIgnoredAuthors = string[];
/**
 * Ignore approval rules for MRs created by Renovate, which is useful for automerge.
 * See also: https://docs.renovatebot.com/configuration-options/#gitlabignoreapprovals
 */
export type GitLabIgnoreApprovals = boolean;
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
 * Whether requests to this host may reach internal addresses when `internalHostAccess=block`. Only honored from the self-hosted administrator's own configuration, or from inherited config when `inheritConfigTrusted=true`.
 * See also: https://docs.renovatebot.com/self-hosted-configuration/#hostrulesallowinternal
 */
export type AllowInternal = boolean;
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
 * Include package files only within these defined paths.
 * See also: https://docs.renovatebot.com/configuration-options/#includepaths
 */
export type IncludePaths = string[];
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
  overrideDescription?: string[] | string;
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
 * Extra time added to `minimumReleaseAge` before an update is considered stable.
 * See also: https://docs.renovatebot.com/configuration-options/#minimumreleaseagebuffer
 */
export type MinimumReleaseAgeBuffer = string;
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
 * Use vulnerability alerts from `osv.dev`.
 * See also: https://docs.renovatebot.com/configuration-options/#osvvulnerabilityalerts
 */
export type OsvVulnerabilityAlerts = boolean;
/**
 * Description which replaces the descriptions of any presets which this config extends.
 * See also: https://docs.renovatebot.com/configuration-options/#overridedescription
 */
export type OverrideDescription = string[] | string;
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
  overrideDescription?: string[] | string;
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
 * Whether to add digests to Dockerfile source images.
 * See also: https://docs.renovatebot.com/configuration-options/#pindigests
 */
export type PinDigests = boolean;
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
  | 'gomodTidyAll'
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
 * If enabled, Renovate logs the fully resolved config for each repository, plus the fully resolved presets.
 * See also: https://docs.renovatebot.com/configuration-options/#printconfig
 */
export type PrintConfig = boolean;
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
 * Label to request a rebase from Renovate.
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
  overrideDescription?: string[] | string;
  abortIgnoreStatusCodes?: AbortIgnoreStatusCodes;
  abortOnError?: AbortOnError;
  allowInternal?: AllowInternal;
  artifactAuth?: ArtifactAuth;
  authType?: AuthType;
  concurrentRequestLimit?: ConcurrentRequestLimit;
  dnsCache?: DnsCache;
  enableHttp2?: EnableHttp2;
  enabled?: Enabled;
  headers?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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

export interface JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  ansible?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  apm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  batect?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bitbucket-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  circleci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  composer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  copier?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deno?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  'deps-edn'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  description?: Description;
  devbox?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  dockerfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom42;
  env?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  followTag?: FollowTag;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkProcessing?: ForkProcessing;
  fvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  'github-actions'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitlabci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includePaths?: IncludePaths;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  meteor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minimumReleaseAgeBuffer?: MinimumReleaseAgeBuffer;
  minor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  osgi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  overrideDescription?: OverrideDescription;
  packageRules?: PackageRules;
  patch?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pin?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  printConfig?: PrintConfig;
  proto?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  regex?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom111;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  sbt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  schedule?: Schedule;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  timezone?: Timezone;
  toolSettings?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  unity3d?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  userStrings?: UserStrings;
  velaci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  xcodegen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  [k: string]: unknown | undefined;
}
/**
 * Configuration object to define language or manager version constraints.
 * See also: https://docs.renovatebot.com/configuration-options/#constraints
 */
export interface Constraints {
  /**
   * A constraint for the `apm` Containerbase tool
   */
  apm?: string;
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
   * A constraint for the `gh` Containerbase tool
   */
  gh?: string;
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
   * Used in the `github-actions` manager to specify a release tag for the [`github/gh-actions-lock`](https://github.com/github/gh-actions-lock) `gh` CLI extension, which regenerates `.github/workflows/actions.lock`.
   *
   * Must be a full release tag, prefixed with `v`, such as `v0.1.7`. Set it to an empty string to always install the latest release.
   */
  ghActionsLock?: string;
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
   * Note that this is prefixed with a `%` to explicitly note that this is not a tool that Containerbase knows.
   */
  '%goMod'?: string;
}
/**
 * Override the versioning scheme used when filtering releases by specific constraint names. Does not apply to tools.
 * See also: https://docs.renovatebot.com/configuration-options/#constraintsversioning
 */
export interface ConstraintsVersioning {
  /**
   * Used in the `github-actions` manager to specify a release tag for the [`github/gh-actions-lock`](https://github.com/github/gh-actions-lock) `gh` CLI extension, which regenerates `.github/workflows/actions.lock`.
   *
   * Must be a full release tag, prefixed with `v`, such as `v0.1.7`. Set it to an empty string to always install the latest release.
   */
  ghActionsLock?: string;
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
   * Note that this is prefixed with a `%` to explicitly note that this is not a tool that Containerbase knows.
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
 * Aliases for registries.
 * See also: https://docs.renovatebot.com/configuration-options/#registryaliases
 */
export interface JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom111 {
  abandonmentThreshold?: AbandonmentThreshold;
  addLabels?: AddLabels;
  additionalBranchPrefix?: AdditionalBranchPrefix;
  additionalReviewers?: AdditionalReviewers;
  ansible?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'ansible-galaxy'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ant?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  apm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  argocd?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  asdf?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  assignAutomerge?: AssignAutomerge;
  assignees?: Assignees;
  assigneesFromCodeOwners?: AssigneesFromCodeOwners;
  assigneesSampleSize?: AssigneesSampleSize;
  autoApprove?: AutoApprove;
  autoReplaceGlobalMatch?: AutoReplaceGlobalMatch;
  automerge?: Automerge;
  automergeComment?: AutomergeComment;
  automergeSchedule?: AutomergeSchedule;
  automergeStrategy?: AutomergeStrategy;
  automergeType?: AutomergeType;
  'azure-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  azureWorkItemId?: AzureWorkItemId;
  azureWorkItemType?: AzureWorkItemType;
  baseBranchPatterns?: BaseBranchPatterns;
  batect?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'batect-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazel?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bazel-module'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bazelisk?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bbAutoResolvePrTasks?: BbAutoResolvePrTasks;
  bbUseDefaultReviewers?: BbUseDefaultReviewers;
  bbUseDevelopmentBranch?: BbUseDevelopmentBranch;
  bicep?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bitbucket-pipelines'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bitrise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  branchConcurrentLimit?: BranchConcurrentLimit;
  branchName?: BranchName;
  branchNameStrict?: BranchNameStrict;
  branchPrefix?: BranchPrefix;
  branchPrefixOld?: BranchPrefixOld;
  branchTopic?: BranchTopic;
  buildkite?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  buildpacks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bumpVersion?: BumpVersion;
  bumpVersions?: BumpVersions;
  bun?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'bun-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  bundler?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cake?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cargo?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cdnurl?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  circleci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cloneSubmodules?: CloneSubmodules;
  cloneSubmodulesFilter?: CloneSubmodulesFilter;
  cloudbuild?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cocoapods?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  composer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  composerIgnorePlatformReqs?: ComposerIgnorePlatformReqs;
  conan?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  confidential?: Confidential;
  configFileNames?: ConfigFileNames;
  configMigration?: ConfigMigration;
  configValidationError?: ConfigValidationError;
  configWarningReuseIssue?: ConfigWarningReuseIssue;
  constraints?: Constraints;
  constraintsFiltering?: ConstraintsFiltering;
  constraintsVersioning?: ConstraintsVersioning;
  copier?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  cpanfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crossplane?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  crow?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customDatasources?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  customManagers?: CustomManagers;
  customizeDashboard?: CustomizeDashboard;
  defaultRegistryUrls?: DefaultRegistryUrls;
  deno?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
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
  'deps-edn'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  description?: Description;
  devbox?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  devcontainer?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  digest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'docker-compose'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  dockerfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  draftPR?: DraftPR;
  droneci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  enabled?: Enabled;
  enabledManagers?: EnabledManagers;
  encrypted?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom42;
  env?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  excludeCommitPaths?: ExcludeCommitPaths;
  expandCodeOwnersGroups?: ExpandCodeOwnersGroups;
  extends?: Extends;
  extractVersion?: ExtractVersion;
  fetchChangeLogs?: FetchChangeLogs;
  filterUnavailableUsers?: FilterUnavailableUsers;
  fleet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  flux?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  followTag?: FollowTag;
  forkModeDisallowMaintainerEdits?: ForkModeDisallowMaintainerEdits;
  forkProcessing?: ForkProcessing;
  fvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'git-submodules'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitAuthor?: GitAuthor;
  gitIgnoredAuthors?: GitIgnoredAuthors;
  gitLabIgnoreApprovals?: GitLabIgnoreApprovals;
  'github-actions'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gitlabci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gitlabci-include'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  glasskube?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gleam?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  goGetDirs?: GoGetDirs;
  gomod?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  gradle?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'gradle-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  group?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  groupName?: GroupName;
  groupSingleUpdates?: GroupSingleUpdates;
  groupSlug?: GroupSlug;
  hashedBranchLength?: HashedBranchLength;
  'haskell-cabal'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-requirements'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'helm-values'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmfile?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmsman?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  helmv3?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hermit?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'homeassistant-manifest'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  homebrew?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  hostRules?: HostRules;
  html?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ignoreDeprecated?: IgnoreDeprecated;
  ignoreDeps?: IgnoreDeps;
  ignorePaths?: IgnorePaths;
  ignorePlugins?: IgnorePlugins;
  ignorePresets?: IgnorePresets;
  ignoreReviewers?: IgnoreReviewers;
  ignoreScripts?: IgnoreScripts;
  ignoreTests?: IgnoreTests;
  ignoreUnstable?: IgnoreUnstable;
  includePaths?: IncludePaths;
  internalChecksAsSuccess?: InternalChecksAsSuccess;
  internalChecksFilter?: InternalChecksFilter;
  jenkins?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  jsonata?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'jsonnet-bundler'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  keepUpdatedLabel?: KeepUpdatedLabel;
  'kotlin-script'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kubernetes?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  kustomize?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  labels?: Labels;
  leiningen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  lockFileMaintenance?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  logLevelRemap?: LogLevelRemap;
  major?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maven?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'maven-wrapper'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  maxMajorIncrement?: MaxMajorIncrement;
  meteor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  milestone?: Milestone;
  minimumGroupSize?: MinimumGroupSize;
  minimumReleaseAge?: MinimumReleaseAge;
  minimumReleaseAgeBehaviour?: MinimumReleaseAgeBehaviour;
  minimumReleaseAgeBuffer?: MinimumReleaseAgeBuffer;
  minor?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mint?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mise?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  mode?: Mode;
  nix?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nodenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  npmToken?: NpmToken;
  npmrc?: Npmrc;
  npmrcMerge?: NpmrcMerge;
  nuget?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  nvm?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  ocb?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboarding?: Onboarding;
  onboardingAutoCloseAge?: OnboardingAutoCloseAge;
  onboardingBranch?: OnboardingBranch;
  onboardingCommitMessage?: OnboardingCommitMessage;
  onboardingConfig?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  onboardingConfigFileName?: OnboardingConfigFileName;
  onboardingNoDeps?: OnboardingNoDeps;
  onboardingPrTitle?: OnboardingPrTitle;
  osgi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  osvVulnerabilityAlerts?: OsvVulnerabilityAlerts;
  overrideDescription?: OverrideDescription;
  packageRules?: PackageRules;
  patch?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep621?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pep723?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pin?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigest?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pinDigests?: PinDigests;
  'pip-compile'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_requirements?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pip_setup?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pipenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pixi?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  platformAutomerge?: PlatformAutomerge;
  platformCommit?: PlatformCommit;
  poetry?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  postUpdateOptions?: PostUpdateOptions;
  postUpgradeTasks?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  prBodyColumns?: PrBodyColumns;
  prBodyDefinitions?: PrBodyDefinitions;
  prBodyHeadingDefinitions?: PrBodyHeadingDefinitions;
  prBodyNotes?: PrBodyNotes;
  prBodyTemplate?: PrBodyTemplate;
  prConcurrentLimit?: PrConcurrentLimit;
  prCreation?: PrCreation;
  prFooter?: PrFooter;
  prHeader?: PrHeader;
  prHourlyLimit?: PrHourlyLimit;
  prNotPendingHours?: PrNotPendingHours;
  prTitle?: PrTitle;
  prTitleStrict?: PrTitleStrict;
  'pre-commit'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  printConfig?: PrintConfig;
  proto?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pruneBranchAfterAutomerge?: PruneBranchAfterAutomerge;
  pruneStaleBranches?: PruneStaleBranches;
  pub?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  puppet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  pyenv?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  quadlet?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rangeStrategy?: RangeStrategy;
  rebaseLabel?: RebaseLabel;
  rebaseWhen?: RebaseWhen;
  recreateWhen?: RecreateWhen;
  regex?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  registryAliases?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom111;
  registryUrls?: RegistryUrls;
  'renovate-config'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacement?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  replacementApproach?: ReplacementApproach;
  requireConfig?: RequireConfig;
  respectLatest?: RespectLatest;
  reviewers?: Reviewers;
  reviewersFromCodeOwners?: ReviewersFromCodeOwners;
  reviewersSampleSize?: ReviewersSampleSize;
  rollback?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  rollbackPrs?: RollbackPrs;
  'ruby-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'runtime-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'rust-toolchain'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  sbt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  scalafmt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  schedule?: Schedule;
  semanticCommitScope?: SemanticCommitScope;
  semanticCommitType?: SemanticCommitType;
  semanticCommits?: SemanticCommits;
  separateMajorMinor?: SeparateMajorMinor;
  separateMinorPatch?: SeparateMinorPatch;
  separateMultipleMajor?: SeparateMultipleMajor;
  separateMultipleMinor?: SeparateMultipleMinor;
  'setup-cfg'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  skipArtifactsUpdate?: SkipArtifactsUpdate;
  skipInstalls?: SkipInstalls;
  smithy?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckNames?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  statusCheckWhen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  stopUpdatingLabel?: StopUpdatingLabel;
  suppressNotifications?: SuppressNotifications;
  sveltos?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  swift?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  tekton?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terraform?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terraform-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  terragrunt?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'terragrunt-version'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  'tflint-plugin'?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  timezone?: Timezone;
  toolSettings?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  travis?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  typst?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  unity3d?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  updateInternalDeps?: UpdateInternalDeps;
  updateNotScheduled?: UpdateNotScheduled;
  updatePinnedDependencies?: UpdatePinnedDependencies;
  useBaseBranchConfig?: UseBaseBranchConfig;
  userStrings?: UserStrings;
  velaci?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  vendir?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  versionCompatibility?: VersionCompatibility;
  /**
   * Versioning to use for filtering and comparisons.
   * See also: https://docs.renovatebot.com/configuration-options/#versioning
   */
  versioning?: Versioning & Versioning1;
  vulnerabilityAlerts?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  woodpecker?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  xcodegen?: JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom;
  [k: string]:
    | string
    | AbandonmentThreshold
    | AddLabels
    | AdditionalReviewers
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | AssignAutomerge
    | Assignees
    | AssigneesSampleSize
    | AutomergeSchedule
    | AutomergeStrategy
    | AutomergeType
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | AzureWorkItemId
    | BaseBranchPatterns
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | BranchConcurrentLimit
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | BumpVersion
    | BumpVersions
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | CloneSubmodulesFilter
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | CommitMessageLowerCase
    | CommitTrailers
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | ComposerIgnorePlatformReqs
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | ConfigFileNames
    | Constraints
    | ConstraintsFiltering
    | ConstraintsVersioning
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | CustomManagers
    | CustomizeDashboard
    | DefaultRegistryUrls
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | DependencyDashboardCategory
    | DependencyDashboardLabels
    | DependencyDashboardOSVVulnerabilitySummary
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | Description
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | EnabledManagers
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom42
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | ExcludeCommitPaths
    | Extends
    | FetchChangeLogs
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | ForkProcessing
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | GitIgnoredAuthors
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | GoGetDirs
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | GroupName
    | GroupSlug
    | HashedBranchLength
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | HostRules
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | IgnoreDeps
    | IgnorePaths
    | IgnorePresets
    | IgnoreReviewers
    | IncludePaths
    | InternalChecksFilter
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | Labels
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | LogLevelRemap
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | Milestone
    | MinimumReleaseAge
    | MinimumReleaseAgeBehaviour
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | Mode
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | OnboardingAutoCloseAge
    | OnboardingCommitMessage
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | OnboardingNoDeps
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | OverrideDescription
    | PackageRules
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | PlatformCommit
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | PostUpdateOptions
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | PrBodyColumns
    | PrBodyDefinitions
    | PrBodyHeadingDefinitions
    | PrBodyNotes
    | PrCreation
    | PrTitle
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | RangeStrategy
    | RebaseWhen
    | RecreateWhen
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom111
    | RegistryUrls
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | ReplacementApproach
    | RequireConfig
    | Reviewers
    | ReviewersSampleSize
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | Schedule
    | SemanticCommits
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | SkipInstalls
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | SuppressNotifications
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | UseBaseBranchConfig
    | UserStrings
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | (Versioning & Versioning1)
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | JSONSchemaForRenovate441054ConfigFilesWithInheritConfigOptionsHttpsRenovatebotCom
    | undefined;
}
/**
 * User-facing strings for the Renovate comment when a PR is closed.
 * See also: https://docs.renovatebot.com/configuration-options/#userstrings
 */
export interface UserStrings {
  [k: string]: unknown | undefined;
}
