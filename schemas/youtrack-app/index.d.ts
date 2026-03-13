/* eslint-disable */

export type Url = string;

/**
 * Schema for the JetBrains YouTrack app manifest file
 */
export interface JetBrainsYouTrackAppManifestSchema {
  /**
   * The URL for the JSON schema that defines the structure of the manifest file.
   */
  $schema?: string;
  /**
   * The prefix for AI tool names in the app. The prefix is intended to separate the custom tools from the YouTrack predefined tools and avoid name collisions with other apps. If not set, the app name will be used as a prefix.
   */
  aiToolPrefix?: string;
  /**
   * The name of the app. This is used as a unique identifier in YouTrack.
   */
  name: string;
  /**
   * The title of the app. This is a user-friendly name that is shown in the JetBrains Marketplace and the YouTrack UI.
   */
  title?: string;
  /**
   * The description of the app. You can see this description in the app details on the Apps administration page.
   */
  description?: string;
  /**
   * The version number assigned to the app package in major.minor.bugfix format. The default value is '0.0.0'.
   */
  version?: string;
  /**
   * An object that contains the description of the app vendor.
   */
  vendor?: {
    name: string;
    url?: Url;
    email?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The name of the file with the app icon. Store this file at the root level of the app package.
   */
  icon?: string;
  /**
   * The name of the file with the app icon for the dark theme. Store this file at the root level of the app package. If you don't include a separate icon for the dark theme, YouTrack will use the icon image for both dark and light themes.
   */
  iconDark?: string;
  /**
   * The minimum YouTrack version with which the app is compatible. If you attempt to upload or install an app in a YouTrack installation that runs a version lower than the value specified in the manifest, the operation fails.
   */
  minYouTrackVersion?: string;
  /**
   * The maximum YouTrack version with which the app is compatible. If you attempt to upload or install an app in a YouTrack installation that runs a version higher than the value specified in the manifest, the operation fails.
   */
  maxYouTrackVersion?: string;
  /**
   * A description of changes available in a specific version of the app. This information is only displayed in the JetBrains Marketplace.
   */
  changeNotes?: string;
  /**
   * The website for the app. For example, a GitHub page or landing page for your company or product.
   */
  url?: string;
  visual?: boolean;
  /**
   * An array of widget objects included in the app. Each widget represents a frontend extension.
   *
   * @minItems 1
   */
  widgets?: [
    {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    },
    ...({
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    } & {
      [k: string]: unknown | undefined;
    })[]
  ];
  [k: string]: unknown | undefined;
}
