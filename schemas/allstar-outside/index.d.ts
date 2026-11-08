/* eslint-disable */

export type AllstarOutsideCollaboratorsPolicyConfiguration = OrgConfig | RepoConfig;
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
   * Whether outside collaborators are allowed to have push access.
   */
  pushAllowed?: boolean;
  /**
   * Whether outside collaborators are allowed to have admin access.
   */
  adminAllowed?: boolean;
  /**
   * List of user-repo-access exemption entries. Only defined at org level.
   */
  exemptions?: OutsideExemption[];
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
export interface OutsideExemption {
  /**
   * GitHub username.
   */
  user?: string;
  /**
   * GitHub repository name.
   */
  repo?: string;
  /**
   * Allow push permission.
   */
  push?: boolean;
  /**
   * Allow admin permission.
   */
  admin?: boolean;
}
export interface RepoConfig {
  optConfig?: RepoOptConfig;
  /**
   * Override for org-level action when present.
   */
  action?: string;
  /**
   * Override for org-level pushAllowed when present.
   */
  pushAllowed?: boolean;
  /**
   * Override for org-level adminAllowed when present.
   */
  adminAllowed?: boolean;
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
