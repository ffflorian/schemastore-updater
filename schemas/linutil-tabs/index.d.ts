/* eslint-disable */

/**
 * The directories of tabs
 *
 * @minItems 1
 */
export type Directories = [DirectoryEntry, ...DirectoryEntry[]];
/**
 * The directory entry of a tab
 */
export type DirectoryEntry = string;

/**
 * Tab data
 */
export interface TabData {
  directories: Directories;
}
