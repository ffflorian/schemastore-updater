/* eslint-disable */

/**
 * A form item
 * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
 */
export type FormItem = FormItem1;
/**
 * A form item type
 * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
 */
export type Type = 'checkboxes' | 'dropdown' | 'input' | 'markdown' | 'textarea';
export type Assignee = string;

export interface GitHubIssueFormsConfigFileSchema {
  /**
   * An issue template name
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   */
  name: string;
  /**
   * An issue template description
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   */
  about: string;
  /**
   * An issue template body
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   *
   * @minItems 1
   */
  body: [FormItem, ...FormItem[]];
  /**
   * An issue template assignees
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   */
  assignees?: Assignee | [Assignee, ...Assignee[]];
  /**
   * An issue template labels
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   *
   * @minItems 1
   */
  labels?: [string, ...string[]];
  /**
   * An issue template title
   * https://docs.gitea.com/next/usage/issue-pull-request-templates#syntax-for-yaml-template
   */
  title?: string;
}
export interface FormItem1 {
  type: Type;
  [k: string]: unknown | undefined;
}
