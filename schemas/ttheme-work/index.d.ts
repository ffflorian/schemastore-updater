/* eslint-disable */

export type Id = string;
/**
 * One booru tag, as the site spells it
 */
export type Tag = string;

/**
 * One work — a series, a game, a franchise — and its characters, in the order its cast is listed: commons/works/<work>.toml in the ttheme repository, or works/<work>.toml in a marketplace that proposes a work or a character the commons does not hold yet. Its file name is the work's id
 * https://github.com/kecan0406/ttheme/blob/main/CONTRIBUTING.md#works-and-characters
 */
export interface TthemeWork {
  /**
   * This file's JSON Schema, for editor completion and checks; ttheme ignores it
   */
  $schema?: string;
  /**
   * The work's name as lists show it, its shelf ordered by it
   */
  name: string;
  /**
   * The work's title in its original language, shown dim beside its name
   */
  native?: string;
  /**
   * Whose colors stand for the work: one of its characters, as <work>/<character>, or the work itself; without it, its first character
   */
  lead?: string;
  /**
   * The work's characters, in the order its cast is listed, which cast order sorts its palettes by
   */
  character?: {
    /**
     * The character's id within the work: a palette of it names <work>/<id> as its subject
     */
    id: string;
    /**
     * The character's names in the work's original language, the full name first, then any other it goes by; search matches them
     *
     * @minItems 1
     */
    native?: [string, ...string[]];
    /**
     * The character's danbooru tag, which says who the character is: one character has one tag across the commons. find searches it for pictures, and it names the character in every language
     */
    danbooru?: string;
    /**
     * Other works in the commons whose shelves list this character too, as their ids
     */
    also?: Id[];
    /**
     * The character's tag on sites that name it otherwise, which find searches there in place of the danbooru tag: one tag, or a list find searches together (two on danbooru, any number on konachan and yande.re, one on zerochan); an empty list skips the site
     */
    sites?: {
      [k: string]: Tag | Tag[] | undefined;
    };
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
