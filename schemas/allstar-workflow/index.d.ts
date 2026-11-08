/* eslint-disable */

export type AllstarDangerousWorkflowPolicyConfiguration = OrgConfig | RepoConfig;
/**
 * OptOutStrategy : set to true to change from opt-in to opt-out.
 */
export type OptOutStrategy = boolean;
/**
 * OptInRepos is the list of repos to opt-in when in opt-in strategy.
 */
export type OptInRepos = string[];
/**
 * OptOutRepos is the list of repos to opt-out when in opt-out strategy.
 */
export type OptOutRepos = string[];
/**
 * OptOutPrivateRepos : set to true to not access private repos.
 */
export type OptOutPrivateRepos = boolean;
/**
 * OptOutPublicRepos : set to true to not access public repos.
 */
export type OptOutPublicRepos = boolean;
/**
 * OptOutArchivedRepos : set to true to opt-out archived repositories.
 */
export type OptOutArchivedRepos = boolean;
/**
 * OptOutForkedRepos : set to true to opt-out forked repositories.
 */
export type OptOutForkedRepos = boolean;
/**
 * DisableRepoOverride : set to true to disallow repos from opt-in/out in their config.
 */
export type DisableRepoOverride = boolean;
/**
 * The GitHub owner/repository containing the base configuration. The file at the same path is merged first, then values in this file override it. See https://github.com/ossf/allstar#org-level-base-and-merge-configuration-location.
 */
export type BaseConfig = string;

export interface OrgConfig {
  optConfig: OrgOptConfig;
  /**
   * Which action to take. Default log; other options include issue.
   */
  action: string;
  /**
   * Comma-separated branch list to scan for dangerous workflows. Empty scans all branches. The string default will be replaced with the git default branch. Must use refs/remotes/origin/branch_name format.
   */
  branchList?: string;
  baseConfig?: BaseConfig;
}
/**
 * OptConfig contains the opt in/out configuration.
 */
export interface OrgOptConfig {
  optOutStrategy?: OptOutStrategy;
  optInRepos?: OptInRepos;
  optOutRepos?: OptOutRepos;
  optOutPrivateRepos?: OptOutPrivateRepos;
  optOutPublicRepos?: OptOutPublicRepos;
  optOutArchivedRepos?: OptOutArchivedRepos;
  optOutForkedRepos?: OptOutForkedRepos;
  disableRepoOverride?: DisableRepoOverride;
}
export interface RepoConfig {
  optConfig?: RepoOptConfig;
  /**
   * Override for org-level action when present.
   */
  action?: string;
  /**
   * Comma-separated branch list to scan for dangerous workflows. Empty scans all branches. The string default will be replaced with the git default branch. Must use refs/remotes/origin/branch_name format. Repo-level list is additive to org-level list.
   */
  branchList?: string;
}
/**
 * Repository-level opt-in and opt-out settings.
 */
export interface RepoOptConfig {
  /**
   * Opt in this repository when the organization uses opt-in strategy.
   */
  optIn?: boolean;
  /**
   * Opt out this repository when the organization uses opt-out strategy.
   */
  optOut?: boolean;
}
