/* eslint-disable */

export type TheTypeOfTheValue = string;
export type UserInterfaceLabelForTheValue = string;
export type WhetherTheDefinedTypeIsTranslatable = boolean;
export type TheTranslationContextTheSourceStringBelongsTo = string;
export type WhetherTheValueCanBeEmpty = boolean;
export type WhetherTheKeyIsRequired = boolean;
export type TheClassImplementingParsing = string;
export type TheDefinitionClass = string;
export type DeterminesHowTheSequenceShouldBeSorted = string;

export interface JSONSchemaForDrupalConfigurationSchemaFile {
  [k: string]: ConfigurationItem | undefined;
}
export interface ConfigurationItem {
  type?: TheTypeOfTheValue;
  label?: UserInterfaceLabelForTheValue;
  translatable?: WhetherTheDefinedTypeIsTranslatable;
  'translation context'?: TheTranslationContextTheSourceStringBelongsTo;
  nullable?: WhetherTheValueCanBeEmpty;
  requiredKey?: WhetherTheKeyIsRequired;
  class?: TheClassImplementingParsing;
  definition_class?: TheDefinitionClass;
  orderby?: DeterminesHowTheSequenceShouldBeSorted;
  constraints?: ValidationConstrains;
  sequence?: ConfigItem;
  mapping?: {
    [k: string]: ConfigItem;
  };
}
export interface ValidationConstrains {
  [k: string]: unknown | undefined;
}
export interface ConfigItem {
  type?: TheTypeOfTheValue;
  label?: UserInterfaceLabelForTheValue;
  translatable?: WhetherTheDefinedTypeIsTranslatable;
  'translation context'?: TheTranslationContextTheSourceStringBelongsTo;
  nullable?: WhetherTheValueCanBeEmpty;
  requiredKey?: WhetherTheKeyIsRequired;
  class?: TheClassImplementingParsing;
  definition_class?: TheDefinitionClass;
  orderby?: DeterminesHowTheSequenceShouldBeSorted;
  constraints?: ValidationConstrains;
  sequence?: ConfigItem;
  mapping?: {
    [k: string]: ConfigItem;
  };
}
