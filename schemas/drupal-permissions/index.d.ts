/* eslint-disable */

export type ACallbackThatReturnArrayOfPermissions = string;
export type ListOfPermissionCallbacks = ACallbackThatReturnArrayOfPermissions[];
export type TheHumanReadableNameOfThePermission = string;
export type ADescriptionOfWhatThePermissionDoes = string;
/**
 * This should be used for permissions that have inherent security risks across a variety of potential use cases (for example, the "administer filters" and "bypass node access" permissions provided by Drupal core).
 */
export type RestrictAccessToThisPermissionToTrustedUsers = boolean;

export interface JSONSchemaForDrupalPermissionsFile {
  permission_callbacks?: ListOfPermissionCallbacks;
  [k: string]: PermissionDefinition | undefined;
}
export interface PermissionDefinition {
  title: TheHumanReadableNameOfThePermission;
  description?: ADescriptionOfWhatThePermissionDoes;
  'restrict access'?: RestrictAccessToThisPermissionToTrustedUsers;
}
