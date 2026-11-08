/* eslint-disable */

/**
 * File storages in config/system/file-storages.yaml.
 */
export type TYPO3FileStorages = {
  imports?: TYPO3YAMLImports;
  /**
   * File storages, keyed by numeric ID.
   */
  storages?: {
    [k: string]: Storage | undefined;
  };
} | null;
/**
 * Other YAML files to include.
 */
export type TYPO3YAMLImports = {
  /**
   * Absolute, relative or "EXT:" path of the file.
   */
  resource: string;
  /**
   * Treats resource as a pattern like "*.yaml".
   */
  glob?: boolean;
}[];
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[1-9][0-9]*$".
 */
export type Storage = {
  /**
   * Name in the backend.
   */
  name?: string;
  /**
   * Driver of the storage.
   */
  driver?: 'Local' | string;
  /**
   * Marks the default storage.
   */
  default?: BooleanLike & boolean;
  /**
   * Shows the storage in the file browser.
   */
  browsable?: BooleanLike & boolean;
  /**
   * Files are publicly accessible through a URL.
   */
  public?: BooleanLike & boolean;
  /**
   * Allows changing files.
   */
  writable?: BooleanLike & boolean;
  /**
   * Makes the storage available.
   */
  online?: BooleanLike & boolean;
  /**
   * Extracts file metadata automatically.
   */
  autoExtractMetadata?: BooleanLike & boolean;
  /**
   * Folder for processed files like resized images.
   */
  processingFolder?: string;
  /**
   * Allowed file extensions.
   */
  allowedFileExtensions?: string[] | string;
  /**
   * Options of the driver.
   */
  configuration?: {
    [k: string]: unknown | undefined;
  };
};
/**
 * Boolean, 0/1, text like "off" or a placeholder.
 */
export type BooleanLike =
  boolean | (0 | 1 | '0' | '1' | 'true' | 'false' | 'on' | 'off' | 'yes' | 'no' | '') | Placeholder;
/**
 * Placeholder like %env(MY_VARIABLE)%.
 */
export type Placeholder = string;
