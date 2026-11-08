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
   * Files or directories to compile, relative to the config file.
   */
  sources?: string[];
  /**
   * Glob patterns for files to leave out of sources, relative to the config file (e.g. "** /*.png", "src/art/**").
   */
  exclude?: string[];
  /**
   * Output file path, relative to the config file; "-" for standard output.
   */
  output?: string;
  /**
   * Output mode.
   */
  outputMode?: 'html' | 'twee3' | 'twee1' | 'twine2-archive' | 'twine1-archive' | 'json';
  /**
   * Story format ID (e.g. 'sugarcube-2'). Overrides StoryData's format; without it, StoryData's format decides, and 'sugarcube-2' when StoryData names none.
   */
  formatId?: string;
  /**
   * Name of the starting passage. Overrides StoryData's start; without it, StoryData's start decides, and 'Start' when StoryData names none.
   */
  startPassage?: string;
  /**
   * Extra directories to search for story formats, relative to the config file.
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
   * Module files to inject into <head>, relative to the config file.
   */
  modules?: string[];
  /**
   * Raw HTML file to append to <head>, relative to the config file.
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
   * Milliseconds each story format request (an index or a format.js) may take before it fails with a warning and the next source is tried. 0 turns the limit off.
   */
  formatFetchTimeout?: number;
  /**
   * Milliseconds the search for the story format may take in all, over every request. When it passes, the format URLs and indices not yet asked are read from the download cache only. 0 turns the limit off.
   */
  formatResolutionTimeout?: number;
  /**
   * Ask the Story Formats Archive indices after formatIndices. false: only the configured indices and URLs are asked.
   */
  useDefaultFormatIndices?: boolean;
  /**
   * Map alias tags to canonical special tags (e.g. { "library": "script" }). Tags are non-empty and hold no whitespace.
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
