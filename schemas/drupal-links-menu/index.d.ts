/* eslint-disable */

export type TheStaticTitleForTheMenuLink = string;
export type TheTranslationContextForTheTitleValue = string;
export type TheDescription = string;
export type TheTranslationContextForTheDescriptionValue = string;
export type TheNameOfTheRouteThisLinksToUnlessItSExternal = string;
export type ThePluginIDOfTheParentTab = string;
export type TheNameOfTheMenuForThisLink = string;
export type TheExternalURLIfThisLinkHasOne = string;
export type TheWeightOfTheLink = number;
export type ClassForTaskImplementations = string;
export type TheNameOfTheModuleProvidingThisLink = string;
export type ShowTheLinkAsExpanded = boolean | number;
export type TheStatusOfTheLink = boolean | number;
export type DeriverClass = string;
export type CacheTags = string[];

export interface JSONSchemaForDrupalMenuLinksFile {
  [k: string]:
    | {
        title?: TheStaticTitleForTheMenuLink;
        title_context?: TheTranslationContextForTheTitleValue;
        description?: TheDescription;
        description_context?: TheTranslationContextForTheDescriptionValue;
        route_name?: TheNameOfTheRouteThisLinksToUnlessItSExternal;
        route_parameters?: ParametersForRouteVariablesWhenGeneratingALink;
        parent?: ThePluginIDOfTheParentTab;
        menu_name?: TheNameOfTheMenuForThisLink;
        url?: TheExternalURLIfThisLinkHasOne;
        weight?: TheWeightOfTheLink;
        options?: ArrayOfLinkOptions;
        class?: ClassForTaskImplementations;
        form_class?: ClassForTaskImplementations;
        provider?: TheNameOfTheModuleProvidingThisLink;
        metadata?: {
          [k: string]: unknown | undefined;
        };
        expanded?: ShowTheLinkAsExpanded;
        enabled?: TheStatusOfTheLink;
        deriver?: DeriverClass;
        position?: string;
        cache_tags?: CacheTags;
      }
    | undefined;
}
export interface ParametersForRouteVariablesWhenGeneratingALink {
  [k: string]: unknown | undefined;
}
export interface ArrayOfLinkOptions {
  [k: string]: unknown | undefined;
}
