/* eslint-disable */

/**
 * The name of a tab
 */
export type Name = string;
/**
 * Whether the tab entries should be able to multi select
 */
export type MultiSelectable = boolean;
/**
 * The data of a tab
 *
 * @minItems 1
 */
export type Data = [DataEntry, ...DataEntry[]];
/**
 * The script run of a tab entry
 */
export type Script = string;
/**
 * Description of the tab entry
 */
export type Description = string;
/**
 * The task list of a tab entry
 */
export type TaskList = string;
/**
 * Preconditions of a tab entry
 *
 * @minItems 1
 */
export type Preconditions = [PreconditionEntry, ...PreconditionEntry[]];
/**
 * Whether to require the condition to match or not for a precondition entry
 */
export type Matches = boolean;
/**
 * The environment variable of a data
 */
export type Environment = string;
/**
 * The command pre-condition of a data
 */
export type CommandExists = null;
/**
 * The file pre-condition of a data
 */
export type File = string;
/**
 * The values of a tab precondition entry
 *
 * @minItems 1
 */
export type Values = [Entry, ...Entry[]];
/**
 * The entry of values
 */
export type Entry = string;
/**
 * The entries of a tab entry
 *
 * @minItems 1
 */
export type Entries = [Entry1, ...Entry1[]];

/**
 * Tab data
 */
export interface TabData {
  name: Name;
  multi_selectable?: MultiSelectable;
  data: Data;
}
/**
 * The data entry of a tab
 */
export interface DataEntry {
  name?: Name;
  script?: Script;
  description?: Description;
  task_list?: TaskList;
  preconditions?: Preconditions;
  entries?: Entries;
}
/**
 * The precondition entry of a tab entry
 */
export interface PreconditionEntry {
  matches?: Matches;
  data?: Data1;
  values?: Values;
}
/**
 * The data of a tab precondition entry
 */
export interface Data1 {
  environment?: Environment;
  command_exists?: CommandExists;
  file?: File;
}
/**
 * The entry
 */
export interface Entry1 {
  name?: Name;
  script?: Script;
  matches?: Matches;
  description?: Description;
  task_list?: TaskList;
}
