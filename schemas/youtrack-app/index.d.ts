/* eslint-disable */

export type Url = string;
export type ExtensionPoints =
  | 'ADMINISTRATION_MENU_ITEM'
  | 'ARTICLE_ABOVE_ACTIVITY_STREAM'
  | 'ARTICLE_BELOW_SUMMARY'
  | 'ARTICLE_OPTIONS_MENU_ITEM'
  | 'DASHBOARD_WIDGET'
  | 'HELPDESK_CHANNEL'
  | 'ISSUE_ABOVE_ACTIVITY_STREAM'
  | 'ISSUE_BELOW_SUMMARY'
  | 'ISSUE_FIELD_PANEL_FIRST'
  | 'ISSUE_FIELD_PANEL_LAST'
  | 'ISSUE_OPTIONS_MENU_ITEM'
  | 'MAIN_MENU_ITEM'
  | 'MARKDOWN'
  | 'PROJECT_TAB'
  | 'PROJECT_SETTINGS'
  | 'USER_CARD'
  | 'USER_PROFILE_SETTINGS';
export type Permissions =
  | 'READ_PROJECT_BASIC'
  | 'CREATE_PROJECT'
  | 'READ_PROJECT'
  | 'UPDATE_PROJECT'
  | 'DELETE_PROJECT'
  | 'CREATE_ARTICLE'
  | 'READ_ARTICLE'
  | 'UPDATE_ARTICLE'
  | 'DELETE_ARTICLE'
  | 'CREATE_ARTICLE_COMMENT'
  | 'READ_ARTICLE_COMMENT'
  | 'UPDATE_ARTICLE_COMMENT'
  | 'DELETE_ARTICLE_COMMENT'
  | 'READ_USERGROUP'
  | 'CREATE_USERGROUP'
  | 'UPDATE_USERGROUP'
  | 'DELETE_USERGROUP'
  | 'READ_ORGANIZATION'
  | 'UPDATE_ORGANIZATION'
  | 'CREATE_ORGANIZATION'
  | 'DELETE_ORGANIZATION'
  | 'UPDATE_PROFILE'
  | 'READ_USER_BASIC'
  | 'READ_USER'
  | 'UPDATE_USER'
  | 'CREATE_USER'
  | 'DELETE_USER'
  | 'READ_ROLE'
  | 'MANAGE_ROLE'
  | 'ADMIN_READ_APP'
  | 'ADMIN_UPDATE_APP'
  | 'READ_ISSUE'
  | 'PRIVATE_READ_ISSUE'
  | 'UPDATE_ISSUE'
  | 'CREATE_ISSUE'
  | 'DELETE_ISSUE'
  | 'LINK_ISSUE'
  | 'PRIVATE_UPDATE_ISSUE'
  | 'APPLY_COMMANDS_SILENTLY'
  | 'VIEW_WATCHERS'
  | 'UPDATE_WATCHERS'
  | 'VIEW_VOTERS'
  | 'CREATE_ATTACHMENT_ISSUE'
  | 'UPDATE_ATTACHMENT_ISSUE'
  | 'DELETE_ATTACHMENT_ISSUE'
  | 'CREATE_COMMENT'
  | 'READ_COMMENT'
  | 'UPDATE_COMMENT'
  | 'DELETE_COMMENT'
  | 'UPDATE_NOT_OWN_COMMENT'
  | 'DELETE_NOT_OWN_COMMENT'
  | 'READ_HIDDEN_STUFF'
  | 'CREATE_WATCH_FOLDER'
  | 'UPDATE_WATCH_FOLDER'
  | 'DELETE_WATCH_FOLDER'
  | 'SHARE_WATCH_FOLDER'
  | 'READ_WORK_ITEM'
  | 'UPDATE_WORK_ITEM'
  | 'CREATE_WORK_ITEM'
  | 'CREATE_NOT_OWN_WORK_ITEM'
  | 'UPDATE_NOT_OWN_WORK_ITEM';

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
      /**
       * The unique key identifier of the widget. This is a mandatory field that must be unique within the app.
       */
      key: string;
      /**
       * The name of the widget shown in the app settings in YouTrack.
       */
      name: string;
      /**
       * The path to the index.html file that defines the content and structure of the widget. The path is relative to the widgets folder inside the app package.
       */
      indexPath: string;
      /**
       * The location in the YouTrack UI where the widget will be embedded.
       */
      extensionPoint: ExtensionPoints & string;
      /**
       * The description of the widget.
       */
      description?: string;
      /**
       * The relative path to the file with the icon for the widget inside the app package.
       */
      iconPath?: string;
      /**
       * The set of permissions required to view and use the widget. Depending on the app scope, these permissions can be required at the global or project level.
       *
       * @minItems 1
       */
      permissions?: [Permissions, ...Permissions[]];
      /**
       * Controls the global top bar for full screen widgets. If set to false, the app must implement a visually consistent custom header or breadcrumbs.
       */
      showHeader?: boolean;
      [k: string]: unknown | undefined;
    },
    ...({
      /**
       * The unique key identifier of the widget. This is a mandatory field that must be unique within the app.
       */
      key: string;
      /**
       * The name of the widget shown in the app settings in YouTrack.
       */
      name: string;
      /**
       * The path to the index.html file that defines the content and structure of the widget. The path is relative to the widgets folder inside the app package.
       */
      indexPath: string;
      /**
       * The location in the YouTrack UI where the widget will be embedded.
       */
      extensionPoint: ExtensionPoints & string;
      /**
       * The description of the widget.
       */
      description?: string;
      /**
       * The relative path to the file with the icon for the widget inside the app package.
       */
      iconPath?: string;
      /**
       * The set of permissions required to view and use the widget. Depending on the app scope, these permissions can be required at the global or project level.
       *
       * @minItems 1
       */
      permissions?: [Permissions, ...Permissions[]];
      /**
       * Controls the global top bar for full screen widgets. If set to false, the app must implement a visually consistent custom header or breadcrumbs.
       */
      showHeader?: boolean;
      [k: string]: unknown | undefined;
    })[]
  ];
  [k: string]: unknown | undefined;
}
