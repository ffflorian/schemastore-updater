/* eslint-disable */

export type AllstarScorecardPolicyConfiguration = OrgConfig | RepoConfig;
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
   * List of check names to run from OpenSSF Scorecard. Must match the name used in the check's registration.
   */
  checks?: string[];
  /**
   * Score threshold that checks must meet to pass the policy. Default is the maximum result score defined by scorecard.
   */
  threshold?: number;
  upload?: UploadConfig;
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
/**
 * Configures evidence upload. When SARIF is enabled, results are sent to GitHub's Code Scanning API, and the GitHub App must have the security_events: write permission (see https://github.com/ossf/allstar/blob/main/operator.md).
 */
export interface UploadConfig {
  /**
   * Whether to upload SARIF results to GitHub's Code Scanning API. The GitHub App needs the security_events: write permission when enabled.
   */
  sarif?: boolean;
}
export interface RepoConfig {
  optConfig?: RepoOptConfig;
  /**
   * Override for org-level action when present.
   */
  action?: string;
  /**
   * Override for org-level checks when present.
   */
  checks?: string[] | null;
  /**
   * Override for org-level threshold when present.
   */
  threshold?: number;
  upload?: UploadConfig;
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
