/* eslint-disable */

/**
 * Contact links
 * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
 *
 * @minItems 1
 */
export type ContactLinks = [
  {
    /**
     * A link title
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    name: string;
    /**
     * A link URL
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    url: string;
    /**
     * A link description
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    about: string;
  },
  ...{
    /**
     * A link title
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    name: string;
    /**
     * A link URL
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    url: string;
    /**
     * A link description
     * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
     */
    about: string;
  }[]
];

export interface GitHubIssueTemplateChooserConfigFileSchema {
  /**
   * Specify whether allow blank issue creation
   * https://docs.github.com/en/communities/using-templates-to-encourage-useful-issues-and-pull-requests/configuring-issue-templates-for-your-repository#configuring-the-template-chooser
   */
  blank_issues_enabled?: boolean;
  contact_links?: ContactLinks;
}
