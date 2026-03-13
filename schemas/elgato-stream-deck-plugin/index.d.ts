/* eslint-disable */

/**
 * Manifest files for plugins built for the Elgato Stream Deck SDK
 */
export interface ElgatoStreamDeckManifest {
  /**
   * The author of the plugin. This string is displayed to the user in the Stream Deck store.
   */
  Author?: string;
  /**
   * The relative path to the HTML/binary file containing the plugin code.
   */
  CodePath: string;
  /**
   * Provides a general description of what the plugin does. This string is displayed to the user in the Stream Deck store.
   */
  Description: string;
  /**
   * The relative path to an image without the extension. This image is displayed in the Stream Deck marketplace. SVGs are preferred. If not, the PNG image should be 288 x 288 px, and you should provide @1x and @2x (288 x 288 px & 576 x 576 px respectively). The Stream Deck application takes care of loading the appropriate version of the image.
   */
  Icon: string;
  /**
   * The name of the plugin. This string is displayed to the user in the Stream Deck store.
   */
  Name: string;
  /**
   * Plugin's semantic version (1.0.0).
   */
  Version: string;
  /**
   * The current SDK version is 2.
   */
  SDKVersion: number;
  /**
   * The list of operating systems & versions supported by the plugin.
   *
   * @minItems 1
   */
  OS: [
    {
      Platform: 'mac' | 'windows';
      /**
       * The minimum version of the operating system that the plugin requires. Example: For Windows 10, you can use `10`. For macOS 10.11, you can use `10.11`.
       */
      MinimumVersion: string;
      [k: string]: unknown | undefined;
    },
    ...{
      Platform: 'mac' | 'windows';
      /**
       * The minimum version of the operating system that the plugin requires. Example: For Windows 10, you can use `10`. For macOS 10.11, you can use `10.11`.
       */
      MinimumVersion: string;
      [k: string]: unknown | undefined;
    }[]
  ];
  /**
   * Indicates which version of the Stream Deck application is required to install the plugin.
   */
  Software: {
    /**
     * The minimum version of the operating system that the plugin requires. For Windows 10, you can use “10”. For macOS 10.11, you can use “10.11”.
     */
    MinimumVersion?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * The name of the custom category in which the actions should be listed. This string is visible to the user in the actions list. If you don't provide a category, the actions will appear inside a "Custom" category.
   */
  Category?: string;
  /**
   * The relative path to a PNG image without the .png extension. This image is used in the actions list. The PNG image should be a 28pt x 28pt image. You should provide @1x and @2x versions of the image. The Stream Deck application takes care of loading the appropriate version of the image.
   */
  CategoryIcon?: string;
  /**
   * Override CodePath for macOS.
   */
  CodePathMac?: string;
  /**
   * Override CodePath for Windows.
   */
  CodePathWin?: string;
  /**
   * Specifies an array of profiles. A plugin can have one or more profiles proposed to the user on installation. This lets you create full screen plugins.
   */
  Profiles?: {
    /**
     * The filename of the profile.
     */
    Name: string;
    /**
     * Type of device.
     */
    DeviceType: number;
    /**
     * Boolean to mark the profile as read-only.
     */
    Readonly?: boolean;
    /**
     * Boolean to prevent Stream Deck from automatically switching to this profile when installed.
     */
    DontAutoSwitchWhenInstalled?: boolean;
    [k: string]: unknown | undefined;
  }[];
  /**
   * The relative path to the Property Inspector HTML file if your plugin wants to display some custom settings in the Property Inspector. If missing, the plugin will have an empty Property Inspector.
   */
  PropertyInspectorPath?: string;
  /**
   * Specify the default window size when a Javascript plugin or Property Inspector opens a window using window.open(). The default value is [500, 650].
   *
   * @minItems 2
   * @maxItems 2
   */
  DefaultWindowSize?: [number, number];
  /**
   * A site to provide more information about the plugin.
   */
  URL?: string;
  /**
   * List of application identifiers to monitor (applications launched or terminated). See the `applicationDidLaunch` and `applicationDidTerminate` events.
   */
  ApplicationsToMonitor?: {
    mac?: string[];
    windows?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Specifies an array of actions. A plugin can indeed have one or multiple actions. For example, the “Game Capture” plugin has six actions: Scene, Record, Screenshot, Flashback Recording, Stream, Live Commentary.
   */
  Actions: (
    | {
        /**
         * The relative path to a PNG image without the .png extension. This image is displayed in the actions list. The PNG image should be a 20pt x 20pt image. You should provide @1x and @2x versions of the image. The Stream Deck application takes care of loading the appropriate version of the image. This icon is not required for actions not visible in the actions list (`VisibleInActionsList` set to false).
         */
        Icon: string;
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Boolean to hide the action in the actions list. This can be used for a plugin that only works with a specific profile.
         */
        VisibleInActionsList: false;
        [k: string]: unknown | undefined;
      }
  )[];
  [k: string]: unknown | undefined;
}
