/* eslint-disable */

/**
 * Configuration schema for Sake, Swift-based utility for managing project commands
 */
export interface SakeConfigurationFile {
  /**
   * Strategy for converting command names
   */
  case_converting_strategy?: 'keepOriginal' | 'toSnakeCase' | 'toKebabCase';
  /**
   * Path to the SakeApp package
   */
  sake_app_path?: string;
  /**
   * Path to the prebuilt SakeApp executable
   */
  sake_app_prebuilt_binary_path?: string;
}
