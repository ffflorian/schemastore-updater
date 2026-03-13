/* eslint-disable */

/**
 * 10 character TeamID followed by AppID
 */
export type TeamIDAndAppID = string;
/**
 * Array of multiple AppIDs
 */
export type AppIDs = TeamIDAndAppID[];
/**
 * Array of AppIDs
 *
 * @minItems 1
 */
export type AppIDs1 = [TeamIDAndAppID, ...TeamIDAndAppID[]];
/**
 * Array of paths to be matched against
 *
 * @minItems 1
 */
export type Paths = [Path, ...Path[]];
/**
 * Single unique path to be matched against
 */
export type Path = string;
/**
 * Array of path components to be matched, available in later versions
 *
 * @minItems 1
 */
export type URIComponents = [AppIDComponent, ...AppIDComponent[]];
/**
 * Define path matching
 */
export type PathComponent = string;
/**
 * Define fragment matching
 */
export type FragmentComponent = string;
/**
 * Define Query matching
 */
export type QueryComponent =
  | {
      [k: string]: unknown | undefined;
    }
  | string;
/**
 * Whether to exclude a specific match
 */
export type ExclusionFlag = boolean;

/**
 * Apple Universal Links Config Schema
 */
export interface AppleUniversalLinksConfig {
  webcredentials?: WebcredentialsConfig;
  appclips?: AppClipConfig;
  applinks: UniversalinkConfigurations;
}
/**
 * Apple Webcredentials Config Schema
 */
export interface WebcredentialsConfig {
  apps?: AppIDs;
  [k: string]: unknown | undefined;
}
/**
 * Apple AppClip Config Schema
 */
export interface AppClipConfig {
  apps?: AppIDs;
  [k: string]: unknown | undefined;
}
/**
 * Universalink Configurations Schema
 */
export interface UniversalinkConfigurations {
  /**
   * Always empty [] for UniversaLink, can be omitted in later versions
   */
  apps?: unknown[];
  /**
   * AppIDs's Universalink URI Matching Configuration
   *
   * @minItems 1
   */
  details: [AppIDSMatchingDetails, ...AppIDSMatchingDetails[]];
}
/**
 * Details of specific AppIDs uri matching configuration
 */
export interface AppIDSMatchingDetails {
  appIDs?: AppIDs1;
  appID?: TeamIDAndAppID;
  paths?: Paths;
  components?: URIComponents;
}
/**
 * A component for uri matching
 */
export interface AppIDComponent {
  '/'?: PathComponent;
  '#'?: FragmentComponent;
  '?'?: QueryComponent;
  exclude?: ExclusionFlag;
}
