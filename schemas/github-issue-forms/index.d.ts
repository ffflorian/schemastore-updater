/* eslint-disable */

export type Assignee = string;
/**
 * A form item
 * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-githubs-form-schema#about-githubs-form-schema
 */
export type FormItem = {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};

export interface GitHubIssueFormsConfigFileSchema {
  /**
   * An issue template name
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   */
  name: string;
  /**
   * An issue template description
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   */
  description: string;
  /**
   * An issue template title
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   */
  title?: string;
  /**
   * An issue template labels
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   */
  labels?: [string, ...string[]] | string;
  /**
   * Projects that any issues created with this template will automatically be added to.
   */
  projects?: string[];
  /**
   * An issue template assignees
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   */
  assignees?: Assignee | [Assignee, ...Assignee[]];
  /**
   * An issue type, currently in beta
   * https://github.com/orgs/community/discussions/139933
   */
  type?: string;
  /**
   * An issue template body
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/syntax-for-issue-forms#top-level-syntax
   *
   * @minItems 1
   */
  body: [FormItem, ...FormItem[]];
}
