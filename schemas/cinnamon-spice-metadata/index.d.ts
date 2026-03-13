/* eslint-disable */

/**
 * A UUID of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Uuid = string;
/**
 * A name of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Name = string;
/**
 * A description of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Description = string;
/**
 * Comments of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Comments = string;
/**
 * A site of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Website = string;
/**
 * A URL of repository of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Url = string;
/**
 * A site of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Website1 = string;
/**
 * Versions of Cinnamon supported by the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 *
 * @minItems 1
 */
export type ShellVersion = [string, ...string[]];
/**
 * An author of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Author = string;
/**
 * Contributors of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type Contributors = string;
/**
 * Whether to prevent decorations of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type PreventDecorations = boolean;
/**
 * Whether to allow several versions of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type MultiVersion = true;
/**
 * A count of maximum instances of the extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export type MaximumInstances = number;

/**
 * Metadata of Cinnamon extension
 * https://projects.linuxmint.com/reference/git/cinnamon-tutorials/write-applet.html
 */
export interface ExtensionMetadata {
  uuid: Uuid;
  name: Name;
  description: Description;
  comments?: Comments;
  website?: Website;
  url?: Url;
  version?: Website1;
  'shell-version'?: ShellVersion;
  author?: Author;
  contributors?: Contributors;
  'prevent-decorations'?: PreventDecorations;
  multiversion?: MultiVersion;
  'max-instances'?: MaximumInstances;
}
