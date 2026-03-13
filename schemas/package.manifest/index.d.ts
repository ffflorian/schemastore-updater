/* eslint-disable */

/**
 * This is the collection of prevalue fields.
 *
 * @minItems 1
 */
export type Fields = [
  {
    /**
     * A unique key for the prevalue field.
     */
    key?: string;
    /**
     * The user friendly label for the prevalue.
     */
    label?: string;
    /**
     * A more detailed description for the user.
     */
    description?: string;
    /**
     * The type of editor to use for this prevalue field.
     */
    view?: string;
    validation?: {
      type?: string;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  },
  ...{
    /**
     * A unique key for the prevalue field.
     */
    key?: string;
    /**
     * The user friendly label for the prevalue.
     */
    label?: string;
    /**
     * A more detailed description for the user.
     */
    description?: string;
    /**
     * The type of editor to use for this prevalue field.
     */
    view?: string;
    validation?: {
      type?: string;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  }[]
];

export interface JSONSchemaForUmbracoPackageManifestFiles {
  /**
   * The (NuGet) package ID, shown in the backoffice and included in package telemetry as unique identifier (supported in v12+). Also used to retrieve the assembly informational version if no explicit `version` and `versionAssemlbyName` is set.
   */
  id?: string;
  /**
   * The (friendly) package name, shown in the backoffice and included in package telemetry. If not specified, uses the directory name instead.
   */
  name?: string;
  /**
   * The package version, shown in the backoffice and included in package telemetry. If not specified, uses the `versionAssemblyName` or `id` to retrieve the assembly informational version.
   */
  version?: string;
  /**
   * The assembly name to retrieve the informational version, if no explicit `version` is set. If not specified, uses the `id` instead (supported in v12+).
   */
  versionAssemblyName?: string;
  /**
   * Allows you to opt-out of including your package in telemetry reports if set to false, defaults to true.
   */
  allowPackageTelemetry?: boolean;
  /**
   * The full path to an HTML view for your package to help users maintain configuration data when viewing installed packages in the backoffice.
   */
  packageView?: string;
  /**
   * Default: The assets will be bundled with the typical packages bundle. None: The assets in the package will not be processed at all and will all be requested as individual assets in debug and production. Independent: The packages assets will be processed as it's own separate bundle (in debug, files will not be processed).
   */
  bundleOptions?: 'Default' | 'None' | 'Independent';
  /**
   * A list of JavaScript files with full path to load in the backoffice.
   */
  javascript?: string[];
  /**
   * A list of CSS files with full path to load in the backoffice.
   */
  css?: string[];
  /**
   * Returns an array of editor objects, each object specifies an editor to make available to data types as an editor component. These editors are primarily property editors for content, media and members, but can also be made available as a macro parameter editor.
   *
   * @minItems 1
   */
  propertyEditors?: [Editors & PreValues, ...(Editors & PreValues)[]];
  /**
   * Returns an array of editor objects, each object specifies an editor to make available to macro parameters as an editor component. These editors work solely as parameter editors, and will not show up on the property editors list.
   *
   * @minItems 1
   */
  parameterEditors?: [Editors, ...Editors[]];
  /**
   * Returns an array of grid editor objects, each object specifies a grid editor to make available in the Grid Layout property editor.
   *
   * @minItems 1
   */
  gridEditors?: [GridEditor, ...GridEditor[]];
  /**
   * Returns an array of dashboards, each object specified a dashboard to make available in the backoffice.
   *
   * @minItems 1
   */
  dashboards?: [Dashboard, ...Dashboard[]];
  /**
   * Returns an array of sections/applications to add to the backoffice.
   *
   * @minItems 1
   */
  sections?: [Section, ...Section[]];
  /**
   * Returns an array of Content Apps to add to the backoffice.
   *
   * @minItems 1
   */
  contentApps?: [ContentApp, ...ContentApp[]];
  [k: string]: unknown | undefined;
}
export interface Editors {
  /**
   * This must be a unique alias to your property editor.
   */
  alias: string;
  /**
   * Provides a collection of default configuration values, in cases the property editor is not configured or is used a parameter editor, which doesn't allow configuration. The object is a key/value collection and must match the prevalue fields keys.
   */
  defaultConfig?: {
    [k: string]: unknown | undefined;
  };
  editor: Editor;
  /**
   * Enables the property editor as a macro parameter editor.
   */
  isParameterEditor?: boolean;
  /**
   * The friendly name of the property editor, shown in the backoffice.
   */
  name: string;
  /**
   * A CSS class for the icon to be used in the 'Select Editor' dialog, e.g. `icon-autofill`.
   */
  icon?: string;
  /**
   * The group to place this editor in within the 'Select Editor' dialog. Use a new group name or alternatively use an existing one such as `Pickers`.
   */
  group?: string;
  [k: string]: unknown | undefined;
}
/**
 * This describes details about the editor.
 */
export interface Editor {
  /**
   * This is the full path to the HTML view for your property editor.
   */
  view?: string;
  /**
   * If set to true, this hides the label for the property editor when used on a document type.
   */
  hideLabel?: boolean;
  /**
   * This is the type of data you want your property editor to save to the database.
   */
  valueType?: 'STRING' | 'JSON' | 'DATETIME' | 'TEXT' | 'INT';
  /**
   * Object describing required validators on the editor.
   */
  validation?: {
    [k: string]: unknown | undefined;
  };
  /**
   * If set to true, this makes the property editor read-only.
   */
  isReadOnly?: boolean;
  /**
   * If set to true, this will disable the default read-only overlay and requires the editor to implement support for this instead.
   */
  supportsReadOnly?: boolean;
}
export interface PreValues {
  /**
   * This is an object that stores an array of prevalue fields or options to configure your property editor.
   */
  prevalues?: {
    fields?: Fields;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface GridEditor {
  /**
   * The friendly name of the grid editor, shown in the backoffice.
   */
  name: string;
  /**
   * This must be a unique alias to your grid editor.
   */
  alias: string;
  /**
   * A CSS class for the icon to be used in the 'Select Editor' dialog, e.g. `icon-autofill`.
   */
  icon?: string;
  /**
   * This is backoffice HTML view for your grid editor. Either refers to one of the built-in view (textstring, rte, embed, macro, media) or the full path to a custom view, e.g. `~/App_Plugins/FolderName/editor.html`.
   */
  view: string;
  /**
   * This is front end Razor view for your grid editor. Accepts full path to a custom view, e.g. `~/App_Plugins/FolderName/editor.cshtml`.
   */
  render?: string;
  /**
   * Configuration for the grid editor. Can be used with textstring and media views or for custom configuration properties.
   */
  config?: {
    /**
     * If used with the textstring view, this accepts inline CSS to style the textstring box, e.g. `font-size: 30px; line-height: 40px; font-weight: bold;`.
     */
    style?: string;
    /**
     * If used with the textstring view, this allows wrapping the value in custom markup, e.g. `<h2>#value#</h2>`.
     */
    markup?: string;
    /**
     * If used with the media view, this accepts height and width key/value pairs for cropping.
     */
    size?: {
      /**
       * Height of image in pixels.
       */
      height?: number;
      /**
       * Width of image in pixels.
       */
      width?: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A dashboard to display contextual information when in a section/application.
 */
export interface Dashboard {
  /**
   * The alias of the dashboard which can be queried via the Dashboard Service API.
   */
  alias: string;
  /**
   * This is the full path to the HTML view for your dashboard.
   */
  view: string;
  /**
   * A list of section/application aliases that the dashboard should be visible in.
   *
   * @minItems 1
   */
  sections: [string, ...string[]];
  /**
   * The weight (sort order) of the dashboard. Defaults to 100 if not specified.
   */
  weight?: number;
  /**
   * A list of what user groups aliases are granted or denied permission to see the dashboard. All users will have access if not specified.
   *
   * @minItems 1
   */
  access?: [
    (
      | {
          [k: string]: unknown | undefined;
        }
      | {
          [k: string]: unknown | undefined;
        }
    ),
    ...(
      | {
          [k: string]: unknown | undefined;
        }
      | {
          [k: string]: unknown | undefined;
        }
    )[]
  ];
}
/**
 * A section/application to extend the backoffice.
 */
export interface Section {
  /**
   * The friendly name of the section/application, shown in the backoffice.
   */
  name: string;
  /**
   * The alias of the section/application which can be queried via the Section Service API.
   */
  alias: string;
}
/**
 * A section/application to extend the backoffice.
 */
export interface ContentApp {
  /**
   * The friendly name of the content app that appears under the icon.
   */
  name: string;
  /**
   * A unique alias of the content app.
   */
  alias: string;
  /**
   * A CSS class for the icon to be used for the content app, e.g. `icon-calculator`.
   */
  icon: string;
  /**
   * This is the full path to the HTML view for your content app.
   */
  view: string;
  /**
   * The weight (sort order) of the content app. Default is 0, use values between -99 and +99 to appear between the existing Content (-100) and Info (100) apps.
   */
  weight?: number;
  /**
   * A list of rules to show or hide the content app based on content, media and member types.
   */
  show?: string[];
}
