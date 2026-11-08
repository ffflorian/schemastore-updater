/* eslint-disable */

export type Setting = {
  /**
   * Type of the setting.
   */
  type: ('bool' | 'color' | 'int' | 'number' | 'page' | 'string' | 'stringlist' | 'text' | 'url') | string;
  /**
   * Default value.
   */
  default: {
    [k: string]: unknown | undefined;
  };
  /**
   * Label in the backend.
   */
  label?: string;
  /**
   * Description in the backend, Markdown allowed.
   */
  description?: string;
  /**
   * Makes the setting read-only in the backend.
   */
  readonly?: boolean;
  /**
   * Category of the setting.
   */
  category?: string;
  /**
   * Tags for filtering in the backend.
   */
  tags?:
    | string[]
    | {
        [k: string]: string | undefined;
      };
  /**
   * Allowed values, as list or mapped to labels.
   */
  enum?:
    | (string | number | boolean)[]
    | {
        [k: string]: string | null | undefined;
      };
  /**
   * Options of the setting type.
   */
  options?: {
    [k: string]: unknown | undefined;
  };
};
/**
 * Category of settings.
 */
export type Category = {
  /**
   * Label in the backend.
   */
  label?: string;
  /**
   * Description in the backend.
   */
  description?: string;
  /**
   * Identifier of a registered icon.
   */
  icon?: string;
  /**
   * Identifier of the parent category.
   */
  parent?: string;
} | null;

/**
 * Settings of a site set in Configuration/Sets/<SetFolder>/settings.definitions.yaml.
 */
export interface TYPO3SiteSetSettingsDefinitions {
  /**
   * Settings, keyed by identifier like "my-extension.header.color".
   */
  settings: {
    [k: string]: Setting | undefined;
  };
  /**
   * Categories of settings, keyed by identifier.
   */
  categories?: {
    [k: string]: Category | undefined;
  };
}
