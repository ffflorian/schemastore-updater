/* eslint-disable */

/**
 * The web template type. Use 'functional' for custom site components and 'layout' for custom layouts.
 */
export type Type = 'functional' | 'layout';
/**
 * The id of the param. This correlates with the liquid tag's key for this property
 */
export type Id = string;
/**
 * The editable properties of the web template. These will be customizable in Studio
 */
export type Params = {
  id: Id;
  /**
   * The label displayed when editing a property in Studio. If no displayName is given, the label will fallback on the id
   */
  displayName?: string;
  /**
   * The description to be displayed in the tooltip when editing a property in Studio. If no description is given, no tooltip will be displayed
   */
  description?: string;
  /**
   * Used to specify a property that correlates to a table's logical name
   */
  type?: 'table';
  [k: string]: unknown | undefined;
}[];

export interface RootSchema {
  type: Type;
  /**
   * The display name of the web template
   */
  displayName?: string;
  /**
   * The description of the web template
   */
  description?: string;
  /**
   * An array of table logical names that are used in the web template
   */
  tables?: string[];
  params?: Params;
}
