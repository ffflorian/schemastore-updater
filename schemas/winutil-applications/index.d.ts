/* eslint-disable */

/**
 * A description of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Description = string;
/**
 * A category of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Category =
  | 'Browsers'
  | 'Communications'
  | 'Development'
  | 'Document'
  | 'Games'
  | 'Microsoft Tools'
  | 'Multimedia Tools'
  | 'Pro Tools'
  | 'Utilities';
/**
 * A link of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Link = string;
/**
 * A Chocolatey package name of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Choco = string;
/**
 * A WinGet package name of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Winget = string;
/**
 * A label of an application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export type Content = string;

/**
 * Applications
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 */
export interface Applications {
  [k: string]: Application;
}
/**
 * An application
 * https://github.com/ChrisTitusTech/winutil/blob/main/config/applications.json
 *
 * This interface was referenced by `Applications`'s JSON-Schema definition
 * via the `patternProperty` ".".
 */
export interface Application {
  description: Description;
  category: Category;
  link: Link;
  choco: Choco;
  winget: Winget;
  content: Content;
}
