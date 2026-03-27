/* eslint-disable */

/**
 * A name of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#name
 */
export type Name = string;
/**
 * A command of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#command
 */
export type Command = string;
/**
 * Tags of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#tags
 */
export type Tags = string[];
/**
 * A description of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#description
 */
export type Description = string | null;
/**
 * A source url of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#source_url
 */
export type SourceUrl = string | null;
/**
 * An author of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#author
 */
export type Author = string | null;
/**
 * An author url of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#author_url
 */
export type AuthorUrl = string | null;
/**
 * Shells where the current workflow is valid
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#shells
 */
export type Shells = ('Zsh' | 'zsh' | 'Bash' | 'bash' | 'Fish' | 'fish')[];
/**
 * A default value of the current argument
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#argumentsdefault_value
 */
export type DefaultValue = boolean | number | string | null;
/**
 * Arguments of the current workflow
 * https://github.com/warpdotdev/warp-workflows/blob/main/FORMAT.md#arguments
 */
export type Arguments = {
  name: Name;
  description?: Description;
  default_value?: DefaultValue;
}[];

/**
 * A workflow
 */
export interface Workflow {
  name: Name;
  command: Command;
  tags?: Tags;
  description?: Description;
  source_url?: SourceUrl;
  author?: Author;
  author_url?: AuthorUrl;
  shells?: Shells;
  arguments?: Arguments;
}
