/* eslint-disable */

export type JSONSchemaForDrupalExtensionInfoFile = {
  [k: string]: unknown | undefined;
} & {
  name: TheHumanReadableName;
  type: 'module' | 'theme' | 'profile' | 'theme_engine';
  core?: string;
  core_version_requirement: SemanticCoreVersionRequirement;
  description?: ExtensionDescription;
  package?: AKeyThatAllowsToGroupExtensionTogetherAnAdministrativePages;
  version?: TheVersionOfTheExtension;
  project?: TheMachineNameOfExtensionProjectOnDrupalOrg;
  datestamp?: TheDateAndTimeWhenTheExtensionWasPackaged;
  hidden?: DoNotTheExtensionInAdminInterface;
  php?: TheMinimalPHPVersionThatIsRequiredForThisExtension;
  [k: string]: unknown | undefined;
};
export type TheHumanReadableName = string;
export type SemanticCoreVersionRequirement = string;
export type ExtensionDescription = string;
export type AKeyThatAllowsToGroupExtensionTogetherAnAdministrativePages = string;
export type TheVersionOfTheExtension = string;
export type TheMachineNameOfExtensionProjectOnDrupalOrg = string;
export type TheDateAndTimeWhenTheExtensionWasPackaged = number;
export type DoNotTheExtensionInAdminInterface = boolean;
export type TheMinimalPHPVersionThatIsRequiredForThisExtension = string | number;
