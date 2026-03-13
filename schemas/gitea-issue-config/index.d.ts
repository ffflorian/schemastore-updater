/* eslint-disable */

/**
 * Contact links
 * https://docs.gitea.com/usage/issue-pull-request-templates#possible-options
 *
 * @minItems 1
 */
export type ContactLinks = [
  {
    /**
     * The name of your link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    name: string;
    /**
     * The URL of your Link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    url: string;
    /**
     * A short description of your Link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    about: string;
  },
  ...{
    /**
     * The name of your link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    name: string;
    /**
     * The URL of your Link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    url: string;
    /**
     * A short description of your Link
     * https://docs.gitea.com/usage/issue-pull-request-templates#contact-link
     */
    about: string;
  }[]
];

export interface GiteaIssueTemplateChooserConfigFileSchema {
  /**
   * Specify whether forms have to be used or blank issue are allowed
   * https://docs.gitea.com/usage/issue-pull-request-templates#possible-options
   */
  blank_issues_enabled?: boolean;
  contact_links?: ContactLinks;
}
