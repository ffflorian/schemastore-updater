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
  Actions: ((
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
  ) & {
    /**
     * The unique identifier of the action. It must be a uniform type identifier (UTI) that contains only lowercase alphanumeric characters (a-z, 0-9), hyphen (-), and period (.). The string must be in reverse-DNS format. For example, if your domain is `elgato.com` and you create a plugin named `Hello` with the action `My Action`, you could assign the string `com.elgato.hello.myaction` as your action's Unique Identifier.
     */
    UUID: string;
    /**
     * The name of the action. This string is visible to the user in the actions list.
     */
    Name: string;
    /**
     * The relative path to a PNG image without the .png extension. This image is displayed in the actions list. The PNG image should be a 20pt x 20pt image. You should provide @1x and @2x versions of the image. The Stream Deck application takes care of loading the appropriate version of the image. This icon is not required for actions not visible in the actions list (`VisibleInActionsList` set to false).
     */
    Icon?: string;
    States: {
      /**
       * The default image for the state. When a user sets a custom image on the primary state, Stream Deck will automatically set the secondary state to a darker version of the same icon.
       */
      Image: string;
      /**
       * This can be used if you want to provide a different image for the state when the action is displayed in a Multi-Action.
       */
      MultiActionImage?: string;
      /**
       * Displayed in the dropdown menu in the Multi-action. For example, the Game Capture Record action has Start and Stop. If the name is not provided, the state will not appear in the Multi-Action.
       */
      Name?: string;
      /**
       * Default title.
       */
      Title?: string;
      /**
       * Boolean to show or hide the title
       */
      ShowTitle?: string;
      /**
       * Default title color.
       */
      TitleColor?: string;
      /**
       * Default font family for the title.
       */
      FontFamily?:
        | 'Arial'
        | 'Arial Black'
        | 'Comic Sans MS'
        | 'Courier'
        | 'Courier New'
        | 'Georgia'
        | 'Impact'
        | 'Microsoft Sans Serif'
        | 'Symbol'
        | 'Tahoma'
        | 'Times New Roman'
        | 'Trebuchet MS'
        | 'Verdana'
        | 'Webdings'
        | 'Wingdings';
      /**
       * Default title vertical alignment.
       */
      TitleAlignment?: 'top' | 'bottom' | 'middle';
      /**
       * Default font style for the title. Note that some fonts might not support all values.
       */
      FontStyle?: 'Regular' | 'Bold' | 'Italic' | 'Bold Italic';
      /**
       * Default font size for the title.
       */
      FontSize?: string;
      /**
       * Boolean to have an underline under the title.
       */
      FontUnderline?: boolean;
      [k: string]: unknown | undefined;
    }[];
    /**
     * This can override PropertyInspectorPath member from the plugin if you wish to have a different PropertyInspectorPath based on the action. The relative path to the Property Inspector HTML file if your plugin wants to display some custom settings in the Property Inspector.
     */
    PropertyInspectorPath?: string;
    /**
     * Boolean to prevent the action from being used in a Multi Action.
     */
    SupportedInMultiActions?: boolean;
    /**
     * The string is displayed as a tooltip when the user leaves the mouse over your action in the actions list.
     */
    Tooltip?: string;
    /**
     * Boolean to disable image caching.
     */
    DisableCaching?: boolean;
    /**
     * Determines whether the state of the action should automatically toggle when the user presses the action; only applies to actions that have two states defined.
     */
    DisableAutomaticStates?: boolean;
    /**
     * Boolean to hide the action in the actions list. This can be used for a plugin that only works with a specific profile.
     */
    VisibleInActionsList?: boolean;
    /**
     * Boolean to disable the title field for users in the property inspector.
     */
    UserTitleEnabled?: boolean;
    /**
     * Specifies an array of controllers.
     */
    Controllers?: ('Keypad' | 'Encoder')[];
    /**
     * Used to describe and configure the dial and display segment on Stream Deck +.
     */
    Encoder?: {
      /**
       * The default background image for the encoders touch display slot.
       */
      background?: string;
      /**
       * The default icon found in the property inspector, dial stack image, and the layout. If no icon is set Stream Deck will use the action list icon.
       */
      Icon?: string;
      /**
       * A string containing the name of a built-in layout or the partial path to a JSON file with a custom layout definition. You can dynamically change the layout with with setFeedbackLayout event. The default layout is the Icon Layout ($X1).
       */
      layout?: string;
      /**
       * The color that will be used in the dial stack as background color.
       */
      StackColor?: string;
      /**
       * Used to describe encoder actions in the property inspector.
       */
      TriggerDescription?: {
        /**
         * Describe the rotation.
         */
        Rotate?: string;
        /**
         * Describe the encoder push.
         */
        Push?: string;
        /**
         * Describe the touch.
         */
        Touch?: string;
        /**
         * Describe the long touch.
         */
        LongTouch?: string;
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  })[];
  [k: string]: unknown | undefined;
}
