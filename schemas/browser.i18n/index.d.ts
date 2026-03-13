/* eslint-disable */

export interface BrowserI18NMessagesJsonTranslationFile {
  [k: string]: TranslationEntry;
}
/**
 * Translation key
 *
 * This interface was referenced by `BrowserI18NMessagesJsonTranslationFile`'s JSON-Schema definition
 * via the `patternProperty` "^(?!@@)[@a-zA-Z0-9_-]+$".
 */
export interface TranslationEntry {
  /**
   * Translation string
   */
  message: string;
  /**
   * (optional): Description of this string for the translator team
   */
  description?: string;
  placeholders?: Placeholders;
}
/**
 * (optional): List of placeholders that can be used in the message.
 */
export interface Placeholders {
  [k: string]: Placeholder;
}
/**
 * Placeholder key
 *
 * This interface was referenced by `Placeholders`'s JSON-Schema definition
 * via the `patternProperty` "^(?!@@)[@a-zA-Z0-9_-]+$".
 */
export interface Placeholder {
  /**
   * Value to insert. It can contain a variable $1
   */
  content: string;
  /**
   * (optional) example of this placeholder
   */
  example?: string;
}
