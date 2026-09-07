/* eslint-disable */

/**
 * Configuration file for Emmet snippets and abbreviations.
 */
export interface EmmetSnippets {
  variables?: Variables;
  [k: string]: Syntax | Variables | undefined;
}
/**
 * Global Emmet variable map.
 */
export interface Variables {
  [k: string]: string | undefined;
}
/**
 * This interface was referenced by `EmmetSnippets`'s JSON-Schema definition
 * via the `patternProperty` "^(?!variables$).+$".
 */
export interface Syntax {
  snippets?: Snippets;
  abbreviations?: Snippets;
  /**
   * Name of a base syntax to inherit snippets from.
   */
  extends?: string;
  /**
   * Profile name for the current syntax.
   */
  profile?: string;
  filters?: string | string[];
}
/**
 * Map of Emmet snippet/abbreviation keys to expansion strings.
 */
export interface Snippets {
  /**
   * This interface was referenced by `Snippets`'s JSON-Schema definition
   * via the `patternProperty` "^.+$".
   */
  [k: string]: string | undefined;
}
