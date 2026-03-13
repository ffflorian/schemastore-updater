/* eslint-disable */

export type TheHumanReadableName = string;
export type ADescriptionForAdvancedLayouts = string;
export type TheHumanReadableCategoryName = string;
export type TheTemplateFileToRenderThisLayout = string;
export type TheThemeHookUsedToRenderThisLayout = string;
export type PathToResourcesLikeIconOrTemplate = string;
export type TheAssetLibrary = string;
export type ThePathToThePreviewImage = string;
export type TheIconMap = string[][];
export type TheHumanReadableName1 = string;
export type TheDefaultRegion = string;
export type PluginClass = string;

export interface JSONSchemaForDrupalLayoutsFile {
  [k: string]:
    | {
        label?: TheHumanReadableName;
        description?: ADescriptionForAdvancedLayouts;
        category?: TheHumanReadableCategoryName;
        template?: TheTemplateFileToRenderThisLayout;
        theme_hook?: TheThemeHookUsedToRenderThisLayout;
        path?: PathToResourcesLikeIconOrTemplate;
        library?: TheAssetLibrary;
        icon?: ThePathToThePreviewImage;
        icon_map?: TheIconMap;
        regions?: ListOfRegionsInThisLayout;
        default_region?: TheDefaultRegion;
        class?: PluginClass;
      }
    | undefined;
}
export interface ListOfRegionsInThisLayout {
  [k: string]:
    | {
        label?: TheHumanReadableName1;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
