/* eslint-disable */

export type TechniqueFormat = number;
/**
 * Technique, must match the '^[a-zA-Z0-9_]+$' pattern
 */
export type Id = string;
/**
 * Human readable technique name
 */
export type Name = string;
/**
 * Single line description of what the technique does
 */
export type Description = string;
/**
 * Technique documentation in Markdown format
 */
export type Documentation = string;
/**
 * UUID identifying the parameter
 */
export type TechniqueParameterId = string;
/**
 * Technique parameter description
 */
export type TechniqueParameterDescription = string;
/**
 * Technique parameter documentation, nor in Markdown format
 */
export type TechniqueParameterDocumentation = string;
/**
 * Technique parameter name, must match the '^[a-zA-Z0-9_]+$' pattern
 */
export type TechniqueParameterName = string;
/**
 * Technique parameter type, only 'multiline-string' is currently supported for techniques visible in the technique editor
 */
export type TechniqueParameterType =
  | null
  | 'string'
  | 'multiline-string'
  | 'json'
  | 'yaml'
  | 'boolean'
  | 'mail'
  | 'ip'
  | 'ipv4'
  | 'ipv6'
  | 'integer'
  | 'size-b'
  | 'size-kb'
  | 'size-mb'
  | 'size-gb'
  | 'size-tb'
  | 'permissions'
  | 'shared-file'
  | 'password';
/**
 * Default value of the parameter
 */
export type TechniqueParameterDefaultValue = string | boolean | number;
export type TechniqueParameterAllowEmptyConstraint = boolean;
export type TechniqueParameterPasswordHashesConstraint = (
  | null
  | 'pre-hashed'
  | 'plain'
  | 'unix-crypt-des'
  | 'md5'
  | 'sha1'
  | 'sha256'
  | 'sha512'
  | 'md5-crypt'
  | 'sha256-crypt'
  | 'sha512-crypt'
  | 'md5-crypt-aix'
  | 'sha256-crypt-aix'
  | 'sha512-crypt-aix'
)[];
export type TechniqueParameterRegexConstraintPattern = string;
export type TechniqueParameterRegexConstraintErrorMessage = string;
export type TechniqueParameterSelectConstraint = {
  name?: string;
  value: string;
  [k: string]: unknown | undefined;
}[];
/**
 * List of the technique parameters
 */
export type Params = TechniqueParameter[];
/**
 * Rudder category to put the technique in
 */
export type Category = string;
/**
 * Technique version in the 'X.Y' format
 */
export type Version = string;
/**
 * List of block or method calls, can not be empty
 *
 * @minItems 1
 */
export type Items = [BlockOrMethodCall, ...BlockOrMethodCall[]];
export type BlockOrMethodCall = BlockCall | MethodCall;
export type BlockCallId = string;
export type BlockCallPolicyMode = 'audit' | 'enforce' | 'none';
export type BlockCallCondition = string | boolean;
export type BlockReportingMode =
  | {
      mode: 'worst-case-weighted-one' | 'worst-case-weighted-sum' | 'disabled' | 'enabled' | 'weighted';
    }
  | {
      id: Uuid;
      mode: 'focus';
    };
export type Uuid = string;
export type MethodCallName = string;
export type NameOfTheMethodToCall = string;
export type MethodCallId = string;
export type MethodCallPolicyModeOverride = 'audit' | 'enforce' | 'none';
/**
 * Method call optional condition
 */
export type Condition = string | boolean;

/**
 * A Rudder technique
 */
export interface RudderTechnique {
  format?: TechniqueFormat;
  id: Id;
  name: Name;
  description?: Description;
  documentation?: Documentation;
  tags?: Tags;
  params?: Params;
  category?: Category;
  version: Version;
  items: Items;
}
/**
 * Optional key-value metadata
 */
export interface Tags {
  [k: string]: unknown | undefined;
}
export interface TechniqueParameter {
  id?: TechniqueParameterId;
  description?: TechniqueParameterDescription;
  documentation?: TechniqueParameterDocumentation;
  name: TechniqueParameterName;
  type?: TechniqueParameterType;
  default?: TechniqueParameterDefaultValue;
  constraints?: TechniqueParameterConstraint;
}
/**
 * Additional checks on the parameter value when directives are computed
 */
export interface TechniqueParameterConstraint {
  allow_empty?: TechniqueParameterAllowEmptyConstraint;
  password_hashes?: TechniqueParameterPasswordHashesConstraint;
  regex?: TechniqueParameterRegexConstraint;
  select?: TechniqueParameterSelectConstraint;
}
export interface TechniqueParameterRegexConstraint {
  value: TechniqueParameterRegexConstraintPattern;
  error_message?: TechniqueParameterRegexConstraintErrorMessage;
  [k: string]: unknown | undefined;
}
export interface BlockCall {
  items: BlockOrMethodCall[];
  name?: Name;
  id?: BlockCallId;
  tags?: BlockCallTags;
  policy_mode_override?: BlockCallPolicyMode;
  condition?: BlockCallCondition;
  reporting?: BlockReportingMode;
}
export interface BlockCallTags {
  [k: string]: unknown | undefined;
}
export interface MethodCall {
  name?: MethodCallName;
  method: NameOfTheMethodToCall;
  params: TechniqueParams;
  id?: MethodCallId;
  tags?: MethodCallTags;
  policy_mode_override?: MethodCallPolicyModeOverride;
  condition?: Condition;
  reporting?: MethodReportingMode;
}
/**
 * parameters passed to the method
 */
export interface TechniqueParams {
  [k: string]: unknown | undefined;
}
export interface MethodCallTags {
  [k: string]: unknown | undefined;
}
export interface MethodReportingMode {
  mode?: 'disabled' | 'enabled';
  [k: string]: unknown | undefined;
}
