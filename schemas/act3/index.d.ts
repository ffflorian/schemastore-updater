/* eslint-disable */

/**
 * Configuration for act3, a terminal user interface for tracking GitHub Actions workflow runs.
 * https://github.com/dhth/act3#usage
 */
export interface Act3Configuration {
  /**
   * GitHub Actions workflows to track.
   */
  workflows?: Workflow[];
  [k: string]: unknown | undefined;
}
export interface Workflow {
  /**
   * GitHub Actions workflow ID.
   */
  id: string;
  /**
   * GitHub repository in owner/name form.
   */
  repo: string;
  /**
   * Display name for the workflow.
   */
  name: string;
  /**
   * Optional key used to disambiguate workflows with the same name.
   */
  key?: string;
  /**
   * Optional HTTPS URL template associated with the workflow.
   */
  url?: string;
  [k: string]: unknown | undefined;
}
