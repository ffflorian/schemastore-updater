/* eslint-disable */

export type AllstarBranchProtectionPolicyConfiguration = OrgConfig | RepoConfig;
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
   * Enforce policy on default branch.
   */
  enforceDefault?: boolean;
  /**
   * Map of repositories to lists of branches. Non-default branches where the policy is enforced (for example, release branches).
   */
  enforceBranches?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Enforce approval on pull requests. When false, approvalCount is always zero.
   */
  requireApproval?: boolean;
  /**
   * Enforce code owner reviews on pull requests. If true, requireApproval must also be true.
   */
  requireCodeOwnerReviews?: boolean;
  /**
   * Number of required pull request approvals.
   */
  approvalCount?: number;
  /**
   * Require approvals to be dismissed when a pull request is updated.
   */
  dismissStale?: boolean;
  /**
   * Block force pushes.
   */
  blockForce?: boolean;
  /**
   * Require that branches are up to date before merging. Used only if requireStatusChecks is set.
   */
  requireUpToDateBranch?: boolean;
  /**
   * List of status checks required to merge into the protected branch. Each entry specifies a context, and optionally an appID.
   */
  requireStatusChecks?: StatusCheck[];
  /**
   * Apply branch protection rules to administrators as well.
   */
  enforceOnAdmins?: boolean;
  /**
   * Require signed commits on protected branches.
   */
  requireSignedCommits?: boolean;
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
export interface StatusCheck {
  /**
   * Status check name that should be required.
   */
  context?: string;
  /**
   * GitHub App ID that must set the status check. When omitted, any app can provide the required status check.
   */
  appID?: number | null;
}
export interface RepoConfig {
  optConfig?: RepoOptConfig;
  /**
   * Override for org-level action when present.
   */
  action?: string;
  /**
   * Override for org-level enforceDefault when present.
   */
  enforceDefault?: boolean;
  /**
   * Additional branches to enforce beyond the org-level list. Does not override the org list.
   */
  enforceBranches?: string[];
  /**
   * Override for org-level requireApproval when present.
   */
  requireApproval?: boolean;
  /**
   * Override for org-level requireCodeOwnerReviews when present.
   */
  requireCodeOwnerReviews?: boolean;
  /**
   * Override for org-level approvalCount when present.
   */
  approvalCount?: number;
  /**
   * Override for org-level dismissStale when present.
   */
  dismissStale?: boolean;
  /**
   * Override for org-level blockForce when present.
   */
  blockForce?: boolean;
  /**
   * Override for org-level enforceOnAdmins when present.
   */
  enforceOnAdmins?: boolean;
  /**
   * Override for org-level requireUpToDateBranch when present.
   */
  requireUpToDateBranch?: boolean;
  /**
   * Override for org-level requireStatusChecks. Omitting takes org-level as is; an empty list overrides to empty.
   */
  requireStatusChecks?: StatusCheck[];
  /**
   * Override for org-level requireSignedCommits when present.
   */
  requireSignedCommits?: boolean;
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
