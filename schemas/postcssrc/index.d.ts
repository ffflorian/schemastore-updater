/* eslint-disable */

export type ConfigPlugin =
  | {
      [k: string]: unknown | undefined;
    }
  | false;

export interface HttpsJsonSchemastoreOrgPostcssrcJson {
  /**
   * A special syntax parser (for example, SCSS).
   */
  parser?: string | false;
  /**
   * A special syntax output generator (for example, Midas).
   */
  stringifier?: string | false;
  /**
   * An object providing a syntax parser and a stringifier.
   */
  syntax?: string | false;
  /**
   * Source map options.
   */
  map?: false | 'absolute' | 'inline' | 'sourcesContent';
  /**
   * The input file name (most runners set it automatically).
   */
  from?: string;
  /**
   * The output file name (most runners set it automatically).
   */
  to?: string;
  plugins?:
    | ConfigPlugin[]
    | {
        [k: string]: ConfigPlugin;
      };
}
