/* eslint-disable */

/**
 * Site set in Configuration/Sets/<SetFolder>/config.yaml.
 */
export interface TYPO3SiteSetConfiguration {
  /**
   * Unique name like "my-vendor/my-set".
   */
  name: string;
  /**
   * Label in the backend.
   */
  label?: string;
  /**
   * Labels file of the set.
   */
  labels?: string;
  /**
   * Sets loaded before this set.
   */
  dependencies?: string[];
  /**
   * Like dependencies, but missing sets are ignored.
   */
  optionalDependencies?: string[];
  /**
   * Hides the set in the backend.
   */
  hidden?: boolean;
  /**
   * Folder with setup.typoscript and constants.typoscript.
   */
  typoscript?: string | null;
  /**
   * Page TSconfig file.
   */
  pagets?: string | null;
}
