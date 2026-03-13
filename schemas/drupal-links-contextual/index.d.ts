/* eslint-disable */

export type TheStaticTitleForTheLocalAction = string;
export type TheTranslationContextForTheTitleValue = string;
export type TheRouteNameUsedToGenerateALink = string;
export type TheContextualLinksGroup = string;
export type TheWeightOfTheLocalAction = number;
export type ClassForLocalActionImplementations = string;
export type DeriverClass = string;
export type CacheTags = string[];

export interface JSONSchemaForDrupalContextualLinksFile {
  [k: string]:
    | {
        title?: TheStaticTitleForTheLocalAction;
        title_context?: TheTranslationContextForTheTitleValue;
        route_name?: TheRouteNameUsedToGenerateALink;
        route_parameters?: RouteParametersForGeneratingALink;
        group?: TheContextualLinksGroup;
        weight?: TheWeightOfTheLocalAction;
        options?: ArrayOfLinkOptions;
        class?: ClassForLocalActionImplementations;
        deriver?: DeriverClass;
        cache_tags?: CacheTags;
      }
    | undefined;
}
export interface RouteParametersForGeneratingALink {
  [k: string]: unknown | undefined;
}
export interface ArrayOfLinkOptions {
  [k: string]: unknown | undefined;
}
