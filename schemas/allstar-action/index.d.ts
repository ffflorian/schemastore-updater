/* eslint-disable */

export type AllstarActionPolicyConfiguration = OrgConfig;
/**
 * The GitHub owner/repository containing the base configuration. The file at the same path is merged first, then values in this file override it. See https://github.com/ossf/allstar#org-level-base-and-merge-configuration-location.
 */
export type BaseConfig = string;

export interface OrgConfig {
  /**
   * Which action to take. Default log; other options include issue.
   */
  action: string;
  /**
   * Set of RuleGroups to employ during checks. Evaluated in order.
   */
  groups: RuleGroup[];
  baseConfig?: BaseConfig;
}
export interface RuleGroup {
  /**
   * Name used to identify the RuleGroup.
   */
  name?: string;
  /**
   * Set of RepoSelectors to decide whether a repo qualifies for this RuleGroup. If empty, select all repos.
   */
  repos?: RepoSelector[];
  /**
   * Set of rules to apply for this RuleGroup. Rules are applied by priority. Allow and require rules are evaluated before deny rules at each priority tier.
   */
  rules?: Rule[];
}
export interface RepoSelector {
  /**
   * Repo name in glob format.
   */
  name?: string;
  /**
   * Set of programming languages.
   */
  language?: string[];
  /**
   * Set of RepoSelectors targeting repos that should not be matched by this selector.
   */
  exclude?: RepoSelector[];
}
export interface Rule {
  /**
   * Name used to identify the rule.
   */
  name?: string;
  /**
   * Type of rule.
   */
  method?: 'require' | 'allow' | 'deny';
  /**
   * Priority tier identifier applied to the rule.
   */
  priority?: 'urgent' | 'high' | 'medium' | 'low';
  /**
   * Actions is a set of ActionSelectors. If nil, all Actions will be selected.
   */
  actions?: {
    /**
     * Action name in glob format.
     */
    name?: string;
    /**
     * Semver condition or commit ref. Default empty targets any version.
     */
    version?: string;
  }[];
  /**
   * Whether the rule's actions must be part of a passing workflow on latest commit.
   */
  mustPass?: boolean;
  /**
   * Whether all listed actions should be required rather than just one.
   */
  requireAll?: boolean;
}
