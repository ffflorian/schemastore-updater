/* eslint-disable */

/**
 * Glob patterns for paths whose commits should be included.
 */
export type StringArray = string[];

/**
 * Configuration for git-cliff, a changelog generator that follows Conventional Commits.
 * https://git-cliff.org/docs/configuration/
 */
export interface GitCliffConfiguration {
  /**
   * Optional schema URL for editor integrations.
   */
  $schema?: string;
  changelog?: Changelog;
  git?: Git;
  remote?: RemoteConfig;
  bump?: Bump;
  [k: string]: unknown | undefined;
}
/**
 * Configuration options for changelog generation.
 */
export interface Changelog {
  /**
   * Header template rendered at the beginning of the changelog.
   */
  header?: string | null;
  /**
   * Body template rendered for each release.
   */
  body?: string;
  /**
   * Footer template rendered at the end of the changelog.
   */
  footer?: string | null;
  /**
   * Whether to remove leading and trailing whitespace from the changelog body.
   */
  trim?: boolean;
  /**
   * Whether to render the body template even if there are no releases to process.
   */
  render_always?: boolean;
  /**
   * Regex-based processors applied after changelog rendering.
   */
  postprocessors?: TextProcessor[];
  /**
   * Output file path for the changelog.
   */
  output?: string | null;
  [k: string]: unknown | undefined;
}
export interface TextProcessor {
  /**
   * Rust regex pattern to match text.
   */
  pattern: string;
  /**
   * Replacement text.
   */
  replace?: string | null;
  /**
   * Command used to transform the matched text.
   */
  replace_command?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Git parsing and filtering options.
 */
export interface Git {
  /**
   * Custom commit processing pipeline.
   */
  processing_order?:
    | ('commit_preprocessors' | 'split_commits' | 'conventional_commits' | 'commit_parsers' | 'link_parsers')[]
    | null;
  /**
   * Whether to parse commits according to the Conventional Commits specification.
   */
  conventional_commits?: boolean;
  /**
   * Whether all included commits must be conventional.
   */
  require_conventional?: boolean;
  /**
   * Whether to exclude commits that are not conventional.
   */
  filter_unconventional?: boolean;
  /**
   * Whether each line of a commit should be processed as an individual commit message.
   */
  split_commits?: boolean;
  /**
   * Regex-based processors applied before commit parsing.
   */
  commit_preprocessors?: TextProcessor[];
  /**
   * Commit parser rules that classify, scope, or skip commits.
   */
  commit_parsers?: CommitParser[];
  /**
   * Whether breaking changes are protected from being skipped by commit parsers.
   */
  protect_breaking_commits?: boolean;
  /**
   * Regex-based parsers that extract links from commit messages.
   */
  link_parsers?: LinkParser[];
  /**
   * Whether commits not matched by a commit parser are filtered out.
   */
  filter_commits?: boolean;
  /**
   * Whether git-cliff should fail when an included commit is not matched by any parser.
   */
  fail_on_unmatched_commit?: boolean;
  /**
   * Rust regex pattern for selecting release tags.
   */
  tag_pattern?: string | null;
  /**
   * Rust regex pattern for tags to skip.
   */
  skip_tags?: string | null;
  /**
   * Rust regex pattern for tags to ignore.
   */
  ignore_tags?: string | null;
  /**
   * Rust regex pattern for tags to count.
   */
  count_tags?: string | null;
  /**
   * Whether to include only tags that belong to the current branch.
   */
  use_branch_tags?: boolean;
  /**
   * Whether releases are processed in topological order instead of chronological order.
   */
  topo_order?: boolean;
  /**
   * Whether commits are processed in topological order instead of chronological order.
   */
  topo_order_commits?: boolean;
  /**
   * Ordering for commits inside each release section.
   */
  sort_commits?: 'oldest' | 'newest';
  /**
   * Maximum number of commits included in the generated changelog.
   */
  limit_commits?: number | null;
  /**
   * Whether to read and process submodule commits.
   */
  recurse_submodules?: boolean | null;
  include_paths?: StringArray;
  exclude_paths?: StringArray;
  [k: string]: unknown | undefined;
}
export interface CommitParser {
  /**
   * Commit SHA to match.
   */
  sha?: string | null;
  /**
   * Rust regex pattern matched against the commit message.
   */
  message?: string | null;
  /**
   * Rust regex pattern matched against the commit body.
   */
  body?: string | null;
  /**
   * Rust regex pattern matched against the commit footer.
   */
  footer?: string | null;
  /**
   * Changelog group assigned to matching commits.
   */
  group?: string | null;
  /**
   * Default scope assigned when a matching commit has no scope.
   */
  default_scope?: string | null;
  /**
   * Scope assigned to matching commits.
   */
  scope?: string | null;
  /**
   * Whether to skip matching commits.
   */
  skip?: boolean | null;
  /**
   * Commit context field to match.
   */
  field?: string | null;
  /**
   * Rust regex pattern matched against the configured field.
   */
  pattern?: string | null;
  [k: string]: unknown | undefined;
}
export interface LinkParser {
  /**
   * Rust regex pattern used to find links in commit messages.
   */
  pattern: string;
  /**
   * URL template for generated links.
   */
  href: string;
  /**
   * Optional text template for generated links.
   */
  text?: string | null;
  [k: string]: unknown | undefined;
}
/**
 * Git remote integration options.
 */
export interface RemoteConfig {
  /**
   * Whether to disable external calls even when remotes are configured.
   */
  offline?: boolean;
  github?: Remote;
  gitlab?: Remote;
  gitea?: Remote;
  bitbucket?: Remote;
  azure_devops?: Remote;
  [k: string]: unknown | undefined;
}
export interface Remote {
  /**
   * Remote owner or organization.
   */
  owner: string;
  /**
   * Remote repository name.
   */
  repo: string;
  /**
   * Access token for the remote.
   */
  token?: string | null;
  /**
   * API URL for the remote.
   */
  api_url?: string | null;
  /**
   * Whether to use the platform native certificate store.
   */
  native_tls?: boolean | null;
  [k: string]: unknown | undefined;
}
/**
 * Version bumping options.
 */
export interface Bump {
  /**
   * Whether feature commits always trigger a minor version bump.
   */
  features_always_bump_minor?: boolean | null;
  /**
   * Whether breaking changes always trigger a major version bump.
   */
  breaking_always_bump_major?: boolean | null;
  /**
   * Initial version used when no tags are found.
   */
  initial_tag?: string | null;
  /**
   * Rust regex pattern for custom commit types that trigger major increments.
   */
  custom_major_increment_regex?: string | null;
  /**
   * Rust regex pattern for custom commit types that trigger minor increments.
   */
  custom_minor_increment_regex?: string | null;
  /**
   * Rust regex pattern for commit types that do not increment the version.
   */
  no_increment_regex?: string | null;
  /**
   * Forced version bump type.
   */
  bump_type?: ('major' | 'minor' | 'patch') | null;
  [k: string]: unknown | undefined;
}
