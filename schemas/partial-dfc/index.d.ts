/* eslint-disable */

/**
 * Allow sections not defined in the configuration.
 */
export type AllowUndefinedSections = boolean;
/**
 * Require docstrings for all functions/methods.
 */
export type RequireDocstrings = boolean;
/**
 * Check docstrings for private members (starting with an underscore).
 */
export type CheckPrivateMembers = boolean;
/**
 * Validate that parameter types are provided in the docstring.
 */
export type ValidateParameterTypes = boolean;
/**
 * The style for reporting issues in optional sections.
 */
export type OptionalStyle = 'silent' | 'validate' | 'strict';
/**
 * Name of the docstring section.
 */
export type Name = string;
/**
 * Type of the section content.
 */
export type Type = 'free_text' | 'list_name' | 'list_type' | 'list_name_and_type';
/**
 * Order of the section in the docstring.
 */
export type Order = number | null;
/**
 * Admonition style for the section. Can be False (no admonition) or a string specifying the admonition type.
 */
export type Admonition = false | string;
/**
 * Prefix string for the admonition values.
 */
export type Prefix = string;
/**
 * Whether this section is required in the docstring.
 */
export type Required = boolean;
/**
 * Optional message for validation errors.
 */
export type Message = string;
/**
 * List of docstring section configurations.
 */
export type DocstringSections = {
  name: Name;
  type: Type;
  order?: Order;
  admonition?: Admonition;
  prefix?: Prefix;
  required?: Required;
  message?: Message;
}[];

export interface HttpsJsonSchemastoreOrgPartialDfcJson {
  allow_undefined_sections?: AllowUndefinedSections;
  require_docstrings?: RequireDocstrings;
  check_private?: CheckPrivateMembers;
  validate_param_types?: ValidateParameterTypes;
  optional_style?: OptionalStyle;
  sections?: DocstringSections;
}
