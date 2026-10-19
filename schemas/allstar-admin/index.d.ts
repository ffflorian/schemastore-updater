/* eslint-disable */

export type AllstarRepositoryAdministratorsPolicyConfiguration = OrgConfig | RepoConfig;
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
   * Whether repositories are allowed to have no administrators.
   */
  ownerlessAllowed?: boolean;
  /**
   * Whether users are allowed to be admins on a repository. If false then only teams can be admins.
   */
  userAdminsAllowed?: boolean;
  /**
   * Maximum number of users with admin permissions allowed on a repository. Takes effect only if greater than zero.
   */
  maxNumberUserAdmins?: number;
  /**
   * Whether teams are allowed to be admins on a repository. If false then only users can be admins.
   */
  teamAdminsAllowed?: boolean;
  /**
   * Maximum number of teams with admin permissions allowed on a repository. Takes effect only if greater than zero.
   */
  maxNumberAdminTeams?: number;
  /**
   * List of exemption entries for repositories and admin allowances. Only defined at org level.
   */
  exemptions?: AdministratorExemption[];
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
export interface AdministratorExemption {
  /**
   * GitHub repository name. Globs are allowed.
   */
  repo?: string;
  /**
   * Whether repositories are allowed to have no administrators.
   */
  ownerlessAllowed?: boolean;
  /**
   * Whether users are allowed to be admins on the repository. If false then only teams can be admins.
   */
  userAdminsAllowed?: boolean;
  /**
   * Specific users allowed to administer this repository. Overrides the boolean setting userAdminsAllowed.
   */
  userAdmins?: string[];
  /**
   * Maximum number of users with admin permissions allowed on this repository. Takes effect only if greater than zero.
   */
  maxNumberUserAdmins?: number;
  /**
   * Whether teams are allowed to be admins on the repository. If false then only users can be admins.
   */
  teamAdminsAllowed?: boolean;
  /**
   * Specific teams allowed to administer this repository. Overrides the boolean setting teamAdminsAllowed.
   */
  teamAdmins?: string[];
  /**
   * Maximum number of teams with admin permissions allowed on this repository. Takes effect only if greater than zero.
   */
  maxNumberAdminTeams?: number;
}
export interface RepoConfig {
  optConfig?: RepoOptConfig;
  /**
   * Override for org-level action when present.
   */
  action?: string;
  /**
   * Override for org-level ownerlessAllowed when present.
   */
  ownerlessAllowed?: boolean;
  /**
   * Override for org-level userAdminsAllowed when present.
   */
  userAdminsAllowed?: boolean;
  /**
   * Override for org-level maxNumberUserAdmins when present.
   */
  maxNumberUserAdmins?: number;
  /**
   * Override for org-level teamAdminsAllowed when present.
   */
  teamAdminsAllowed?: boolean;
  /**
   * Override for org-level maxNumberAdminTeams when present.
   */
  maxNumberAdminTeams?: number;
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
