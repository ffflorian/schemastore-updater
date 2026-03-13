/* eslint-disable */

/**
 * Tool access permission for a custom mode
 */
export type Permission = SimplePermission | EditPermissionWithPathRestrictions;
export type SimplePermission = 'read' | 'edit' | 'browser' | 'command' | 'mcp';

/**
 * Schema for Roo Coder custom mode configuration files. Roo Coder is an AI-powered coding assistant that can be extended with custom modes to specialize its behavior for specific tasks. See https://docs.roocode.com/features/custom-modes for documentation.
 */
export interface RooCoderCustomModes {
  /**
   * Array of custom mode definitions
   *
   * @minItems 1
   */
  customModes: [CustomMode, ...CustomMode[]];
}
/**
 * Definition of a custom mode in Roo Coder
 */
export interface CustomMode {
  /**
   * Unique internal identifier for the mode. Must contain only lowercase letters, numbers, and hyphens.
   */
  slug: string;
  /**
   * Display name for the mode in the Roo Coder UI. Can include spaces, capitalization, and emojis.
   */
  name: string;
  /**
   * Core identity and expertise of the mode. The first sentence becomes the default mode summary.
   */
  roleDefinition: string;
  /**
   * Guidance for when to use this mode. Used by the Orchestrator mode and for mode switching suggestions.
   */
  whenToUse?: string;
  /**
   * Additional behavioral guidelines for the mode. Supports markdown formatting for structured instructions.
   */
  customInstructions?: string;
  /**
   * Allowed toolsets and file access permissions for this mode
   */
  groups?: Permission[];
}
/**
 * Edit permission with optional file path restrictions using regex patterns
 */
export interface EditPermissionWithPathRestrictions {
  /**
   * Must be 'edit' for path-restricted edit permissions
   */
  type: 'edit';
  /**
   * Regex patterns for allowed file paths. If specified, only files matching these patterns can be edited.
   */
  allowedPaths?: string[];
  /**
   * Regex patterns for disallowed file paths. Files matching these patterns cannot be edited even if they match allowedPaths.
   */
  disallowedPaths?: string[];
}
