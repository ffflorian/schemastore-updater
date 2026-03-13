/* eslint-disable */

export type TheStaticTitleForTheLocalAction = string;
export type TheTranslationContextForTheTitleValue = string;
export type TheRouteNameUsedToGenerateALink = string;
export type TheWeightOfTheLocalAction = number;
export type TheRouteNamesWhereThisLocalActionAppears = string[];
export type ClassForLocalActionImplementations = string;
export type DeriverClass = string;
export type CacheTags = string[];

export interface JSONSchemaForDrupalActionLinksFile {
  [k: string]:
    | {
        title?: TheStaticTitleForTheLocalAction;
        title_context?: TheTranslationContextForTheTitleValue;
        route_name?: TheRouteNameUsedToGenerateALink;
        route_parameters?: RouteParametersForGeneratingALink;
        weight?: TheWeightOfTheLocalAction;
        options?: ArrayOfLinkOptions;
        appears_on?: TheRouteNamesWhereThisLocalActionAppears;
        class?: ClassForLocalActionImplementations;
        deriver?: DeriverClass;
        cache_tags?: CacheTags;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface RouteParametersForGeneratingALink {
  [k: string]: unknown | undefined;
}
export interface ArrayOfLinkOptions {
  [k: string]: unknown | undefined;
}
