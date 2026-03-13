/* eslint-disable */

export type Label = string;
/**
 * Sets the labels if "first-timers-only" is not what you are looking for.
 */
export type Labels = Label[];
/**
 * The path to your template, relative from the repository root.
 */
export type Template = string;
/**
 * Specify a different repository than where the problem is. The bot must be installed on the configured repository.
 */
export type Repository = string;

/**
 * A bot that helps onboarding new open-source contributors.
 */
export interface FirstTimersBot {
  labels?: Labels;
  template?: Template;
  repository?: Repository;
}
