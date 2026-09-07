/* eslint-disable */

/**
 * Number of days of inactivity before an Issue or Pull Request becomes stale.
 */
export type DaysUntilStale = number;
/**
 * Number of days of inactivity before an Issue or Pull Request with the stale label is closed.
 */
export type DaysUntilClose = number | boolean;
export type Label = string;
/**
 * Only issues or pull requests with all of these labels are check if stale.
 */
export type OnlyLabels = Label[];
/**
 * Issues or Pull Requests with these labels will never be considered stale.
 */
export type ExemptLabels = Label[];
/**
 * Set to true to ignore issues in a milestone.
 */
export type ExemptProjects = boolean;
/**
 * Set to true to ignore issues with an assignee.
 */
export type ExemptAssignees = boolean;
/**
 * Label to use when marking as stale.
 */
export type StaleLabel = string;
/**
 * Comment to post when marking as stale.
 */
export type MarkComment = string | boolean;
/**
 * Comment to post when removing the stale label.
 */
export type UnmarkComment = string | boolean;
/**
 * Comment to post when closing a stale issue or pull request.
 */
export type ClosedComment = string | boolean;
/**
 * Limit the number of actions per hour.
 */
export type LimitPerRun = number;
/**
 * Limit to only issues or pulls requests.
 */
export type Only = 'issues' | 'pulls';

/**
 * A GitHub app that closes abandoned issues and pull requests
 */
export interface HttpsJsonSchemastoreOrgStaleJson {
  pulls?: Pulls;
  issues?: Issues;
  [k: string]: unknown | undefined;
}
/**
 * Specify configuration settings that are specific to pull requests.
 */
export interface Pulls {
  daysUntilStale?: DaysUntilStale;
  daysUntilClose?: DaysUntilClose;
  onlyLabels?: OnlyLabels;
  exemptLabels?: ExemptLabels;
  exemptProjects?: ExemptProjects;
  exemptAssignees?: ExemptAssignees;
  staleLabel?: StaleLabel;
  markComment?: MarkComment;
  unmarkComment?: UnmarkComment;
  closeComment?: ClosedComment;
  limitPerRun?: LimitPerRun;
  only?: Only;
  [k: string]: unknown | undefined;
}
/**
 * Specify configuration settings that are specific to issues.
 */
export interface Issues {
  daysUntilStale?: DaysUntilStale;
  daysUntilClose?: DaysUntilClose;
  onlyLabels?: OnlyLabels;
  exemptLabels?: ExemptLabels;
  exemptProjects?: ExemptProjects;
  exemptAssignees?: ExemptAssignees;
  staleLabel?: StaleLabel;
  markComment?: MarkComment;
  unmarkComment?: UnmarkComment;
  closeComment?: ClosedComment;
  limitPerRun?: LimitPerRun;
  only?: Only;
  [k: string]: unknown | undefined;
}
