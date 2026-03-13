/* eslint-disable */

export interface JSONSchemaForVisualStudioLiveShareConfigFiles {
  /**
   * An array of globs which indicate the files that should be completely unavailable to guests when you share (e.g. secrets).
   */
  excludeFiles?: string[];
  /**
   * Indicates how .gitignore files should be treated with respects to excluding/hiding files from guests.
   */
  gitignore?: 'none' | 'hide' | 'exclude';
  /**
   * An array of globs which indicate the files that should be hidden from guest's file trees, but still accessible (e.g. when following the host).
   */
  hideFiles?: string[];
  [k: string]: unknown | undefined;
}
