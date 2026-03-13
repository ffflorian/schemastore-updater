/* eslint-disable */

export type TheLibraryVersion = string | number;
export type TheLibraryRepositoryURL = string;
export type TheHumanReadableNameOfTheLicense = string;
export type TheURLOfTheLicenseFileInformationForTheVersionOfTheLibraryUsed = string;
export type ABooleanForWhetherThisLibraryIsGPLCompatible = boolean;
export type ABooleanForWhetherTheScriptMustBeIncludedInTheHeader = boolean;
export type TheSMACSSGroupInWhichTheAssetIsPlaced = number;
export type MediaType = 'all' | 'screen' | 'print' | 'speech';
export type ListLibrariesThatShouldBeLoadedAlongWithThisLibrary = string[];

export interface JSONSchemaForDrupalLibrariesFile {
  [k: string]:
    | {
        version?: TheLibraryVersion;
        remote?: TheLibraryRepositoryURL;
        license?: {
          name?: TheHumanReadableNameOfTheLicense;
          url?: TheURLOfTheLicenseFileInformationForTheVersionOfTheLibraryUsed;
          'gpl-compatible'?: ABooleanForWhetherThisLibraryIsGPLCompatible;
        };
        header?: ABooleanForWhetherTheScriptMustBeIncludedInTheHeader;
        drupalSettings?: SettingsThatNeedsToBeAttachedToDrupalSettingsObjectInJavaScript;
        js?: ListOfJavaScriptFilesToLoad;
        css?: ListOfCSSFilesToLoad;
        dependencies?: ListLibrariesThatShouldBeLoadedAlongWithThisLibrary;
      }
    | undefined;
}
export interface SettingsThatNeedsToBeAttachedToDrupalSettingsObjectInJavaScript {
  [k: string]: unknown | undefined;
}
export interface ListOfJavaScriptFilesToLoad {
  [k: string]: File | undefined;
}
export interface File {
  cache?: boolean;
}
export interface ListOfCSSFilesToLoad {
  base?: CssFiles;
  layout?: CssFiles;
  component?: CssFiles;
  theme?: CssFiles;
  state?: CssFiles;
  [k: string]: unknown | undefined;
}
export interface CssFiles {
  [k: string]: File1 | undefined;
}
export interface File1 {
  group?: TheSMACSSGroupInWhichTheAssetIsPlaced;
  media?: MediaType;
}
