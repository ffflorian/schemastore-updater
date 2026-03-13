/* eslint-disable */

/**
 * Configuration file for twee-ts, a TypeScript Twee-to-HTML compiler.
 */
export interface TweeTsConfiguration {
  /**
   * JSON Schema reference for editor support.
   */
  $schema?: string;
  /**
   * Files or directories to compile.
   */
  sources?: string[];
  /**
   * Output file path.
   */
  output?: string;
  /**
   * Output mode.
   */
  outputMode?: 'html' | 'twee3' | 'twee1' | 'twine2-archive' | 'twine1-archive' | 'json';
  /**
   * Story format directory ID (e.g. 'sugarcube-2').
   */
  formatId?: string;
  /**
   * Name of the starting passage.
   */
  startPassage?: string;
  /**
   * Extra directories to search for story formats.
   */
  formatPaths?: string[];
  /**
   * URLs to SFA-compatible index.json files for remote format lookup.
   */
  formatIndices?: string[];
  /**
   * Direct URLs to format.js files.
   */
  formatUrls?: string[];
  /**
   * Also search TWEEGO_PATH env for formats.
   */
  useTweegoPath?: boolean;
  /**
   * Module files to inject into <head>.
   */
  modules?: string[];
  /**
   * Raw HTML file to append to <head>.
   */
  headFile?: string;
  /**
   * Trim passage whitespace.
   */
  trim?: boolean;
  /**
   * Twee2 compatibility mode.
   */
  twee2Compat?: boolean;
  /**
   * Enable debug/test mode option.
   */
  testMode?: boolean;
  /**
   * Disable remote format fetching.
   */
  noRemote?: boolean;
  /**
   * Map alias tags to canonical special tags (e.g. { "library": "script" }).
   */
  tagAliases?: {
    [k: string]: string | undefined;
  };
  /**
   * Emit source file and line as data- attributes on passage elements.
   */
  sourceInfo?: boolean;
  /**
   * Word counting method. 'tweego': NFKD normalize, divide chars by 5 (matches Tweego). 'whitespace': split on whitespace after stripping comments and markup.
   */
  wordCountMethod?: 'tweego' | 'whitespace';
}
