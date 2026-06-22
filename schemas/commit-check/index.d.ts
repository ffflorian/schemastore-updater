/* eslint-disable */

/**
 * Configuration for commit-check, a commit message, branch naming, and push linter
 * https://github.com/commit-check/commit-check
 */
export interface CommitCheck {
  /**
   * Inherit configuration from a parent file. Supports github: shorthand (e.g., github:owner/repo:path/to/cchk.toml), HTTPS URL, or local file path.
   * https://github.com/commit-check/commit-check/blob/main/docs/configuration.rst#organization-level-configuration-inherit_from
   */
  inherit_from?: string;
  commit?: CommitRules;
  branch?: BranchRules;
  push?: PushRules;
  [k: string]: unknown | undefined;
}
/**
 * Settings for commit message validation.
 * https://github.com/commit-check/commit-check/blob/main/docs/configuration.rst
 */
export interface CommitRules {
  /**
   * Enforce Conventional Commits specification.
   * https://www.conventionalcommits.org
   */
  conventional_commits?: boolean;
  /**
   * Custom regex pattern for commit message validation. When set (non-empty), this replaces the auto-generated Conventional Commits regex entirely. Useful for enforcing custom formats such as JIRA smart commits (e.g., ^PROJ-\\d+: .+).
   */
  message_pattern?: string;
  /**
   * Subject must start with a capital letter.
   */
  subject_capitalized?: boolean;
  /**
   * Subject must be in imperative mood.
   * https://github.com/commit-check/commit-check/blob/main/commit_check/imperatives.py
   */
  subject_imperative?: boolean;
  /**
   * Maximum length of the subject line. No limit by default.
   */
  subject_max_length?: number;
  /**
   * Minimum length of the subject line. No limit by default.
   */
  subject_min_length?: number;
  /**
   * Allowed commit types when conventional_commits is true.
   */
  allow_commit_types?: string[];
  /**
   * Allow merge commits.
   */
  allow_merge_commits?: boolean;
  /**
   * Allow revert commits.
   */
  allow_revert_commits?: boolean;
  /**
   * Allow empty commits.
   */
  allow_empty_commits?: boolean;
  /**
   * Allow fixup commits (e.g., fixup! <commit message>).
   */
  allow_fixup_commits?: boolean;
  /**
   * Allow work-in-progress commits (e.g., WIP: <commit message>).
   */
  allow_wip_commits?: boolean;
  /**
   * Require a body in the commit message.
   */
  require_body?: boolean;
  /**
   * Require Signed-off-by line in the commit message footer.
   */
  require_signed_off_by?: boolean;
  /**
   * List of commit authors or co-authors (Co-authored-by: lines) to bypass all commit checks. Useful for bots (e.g., dependabot[bot], coderabbitai[bot]).
   */
  ignore_authors?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Settings for branch naming validation.
 * https://conventional-branch.github.io/
 */
export interface BranchRules {
  /**
   * Enforce Conventional Branch specification.
   * https://conventional-branch.github.io/
   */
  conventional_branch?: boolean;
  /**
   * Allowed branch types when conventional_branch is true.
   */
  allow_branch_types?: string[];
  /**
   * Additional standalone branch names allowed when conventional_branch is true (e.g., ["develop", "staging"]). By default, master, main, HEAD, and PR-* are always allowed.
   */
  allow_branch_names?: string[];
  /**
   * Target branch for rebase requirement. If not set, no rebase validation is performed.
   */
  require_rebase_target?: string;
  /**
   * List of authors to bypass branch checks.
   */
  ignore_authors?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Settings for push validation (pre-push hook).
 * https://github.com/commit-check/commit-check
 */
export interface PushRules {
  /**
   * Allow force pushes. Set to false to block force pushes when used as a pre-push hook or with --no-force-push.
   */
  allow_force_push?: boolean;
  [k: string]: unknown | undefined;
}
