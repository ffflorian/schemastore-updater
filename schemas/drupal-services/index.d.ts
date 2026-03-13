/* eslint-disable */

export type ServiceClass = string;
export type ParentServiceToExtend = string;
export type AFactoryToCreateTheObject = string | unknown[];
export type ServiceNameToDecorate = string;
export type AFlagIndicatingThatTheServiceIsDeprecated = string;
export type LazyServiceInstantiation = boolean;
export type SharedService = boolean;
export type AbstractService = boolean;
export type AFlagIndicationThatTheServiceCannotBeAccessedDirectlyFromTheContainerObject = boolean;
export type AShortcutToAccessSomeServices = string;
export type ServiceArguments = unknown[];
export type ACallableToConfigureAServiceAfterItsInstantiation = string[];
export type ListOfTagsTellDrupalThatYourServiceCanBeProcessedInSomeSpecialWay = {
  name?: string;
  call?: string;
  alias?: string;
  required?: boolean;
  tag?: string;
  priority?: number;
  default_backend?: string;
  responder?: boolean;
  format?: string;
  applies_to?: string;
  provider_id?: string;
  needs_incoming_request?: boolean;
  scheme?: string;
  [k: string]: unknown | undefined;
}[];
export type MethodsToSetOptionalDependencies = unknown[];

export interface JSONSchemaForDrupalServicesFile {
  parameters?: ServiceParameters;
  services?: {
    [k: string]:
      | {
          class?: ServiceClass;
          parent?: ParentServiceToExtend;
          factory?: AFactoryToCreateTheObject;
          decorates?: ServiceNameToDecorate;
          deprecated?: AFlagIndicatingThatTheServiceIsDeprecated;
          lazy?: LazyServiceInstantiation;
          shared?: SharedService;
          abstract?: AbstractService;
          public?: AFlagIndicationThatTheServiceCannotBeAccessedDirectlyFromTheContainerObject;
          alias?: AShortcutToAccessSomeServices;
          arguments?: ServiceArguments;
          configurator?: ACallableToConfigureAServiceAfterItsInstantiation;
          tags?: ListOfTagsTellDrupalThatYourServiceCanBeProcessedInSomeSpecialWay;
          calls?: MethodsToSetOptionalDependencies;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
export interface ServiceParameters {
  [k: string]: unknown | undefined;
}
