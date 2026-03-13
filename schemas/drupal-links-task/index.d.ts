/* eslint-disable */

export type TheStaticTitleForTheLocalTask = string;
export type TheTranslationContextForTheTitleValue = string;
export type TheNameOfTheRouteThisTaskLinksTo = string;
export type TheRouteNameWhereTheRootTabAppears = string;
export type ThePluginIDOfTheParentTab = string;
export type TheWeightOfTheTab = number;
export type ClassForTaskImplementations = string;
export type DeriverClass = string;
export type CacheTags = string[];

export interface JSONSchemaForDrupalTaskLinksFile {
  [k: string]:
    | {
        title?: TheStaticTitleForTheLocalTask;
        title_context?: TheTranslationContextForTheTitleValue;
        route_name?: TheNameOfTheRouteThisTaskLinksTo;
        route_parameters?: ParametersForRouteVariablesWhenGeneratingALink;
        base_route?: TheRouteNameWhereTheRootTabAppears;
        parent_id?: ThePluginIDOfTheParentTab;
        weight?: TheWeightOfTheTab;
        options?: ArrayOfLinkOptions;
        class?: ClassForTaskImplementations;
        deriver?: DeriverClass;
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
