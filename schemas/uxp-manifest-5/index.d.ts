/* eslint-disable */

/**
 * A unique identifier for this plug-in. A globally unique ID may be obtained from Adobe's Developer Distribution portal
 * https://developer.adobe.com/distribute/home
 */
export type PlugInID = string;
/**
 * The name of this plug-in. It should match the project name from Adobe's Developer Distribution portal
 */
export type PlugInName = string;
/**
 * The current version number of this plug-in, in the format "major.minor.patch", where "minor" and "patch" are optional
 */
export type PlugInVersion = string;
/**
 * The version of this UXP manifest file (5)
 */
export type ManifestVersion = 5;
/**
 * Relative path to the plug-in initialization file, which must be either a JavaScript program or an HTML document
 */
export type MainEntryPoint = string;
/**
 * The icon width in logical pixels
 */
export type IconWidth = number;
/**
 * The icon's height in logical pixels
 */
export type IconHeight = number;
/**
 * Relative base path of the icon files, excluding the "@1x" scale descriptor. For example, use "icons/icons.png" for the true file names "icons/icons@1x.png" and "icons/icons@2x.png"
 */
export type BaseIconPath = string;
/**
 * A list of image scales provided. The image file names must suffix the base name with "@(scale)x"; for example, "icons/icon@1x.png" and "icons/icon@2x.png" for scales [1, 2]
 *
 * @minItems 1
 */
export type AvailableIconScales = [number, ...number[]];
/**
 * A list of user interface themes that contrast well enough with this icon
 */
export type SupportedThemes =
  | ['lightest' | 'light' | 'dark' | 'darkest', ...('lightest' | 'light' | 'dark' | 'darkest')[]]
  | unknown[];
/**
 * Specifies the contexts in which this icon should be displayed
 */
export type IconSpecies = (['generic'] | ['toolbar'] | ['pluginList']) & unknown[];
/**
 * An icon representing the plug-in as a whole, adapted to different themes. Must be of the "pluginList" species and 24x24 in size
 */
export type PlugInIcons = (IconDefinition & {
  species?: ['pluginList'];
  [k: string]: unknown | undefined;
})[];
/**
 * The host program(s) this plug-in is intended to run on. An array may only be provided during development; a single host must be specified when submitting to the plug-in marketplace
 */
export type HostProgram = HostDefinition | HostDefinition1[];
/**
 * The host program
 */
export type App = (AdobePhotoshop | AdobeInDesign | AdobeXD) & string;
export type AdobePhotoshop = 'PS';
export type AdobeInDesign = 'ID';
export type AdobeXD = 'XD';
/**
 * The minimum host version required to run this plug-in. At least two segments must be specified
 */
export type MinimumVersion = string;
/**
 * The maximum host version supported by this plug-in. At least two segments ("x.y") must be specified
 */
export type MaximumVersion = string;
/**
 * A list of commands and panels that this plug-in provides
 */
export type EntryPoints = (
  | {
      [k: string]: unknown | undefined;
    }
  | {
      type?: {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
)[];
/**
 * A list of host names that the plug-in may send requests to, or "all"
 */
export type AllowedDomainNames = string[] | 'all';
/**
 * Allows the plug-in to access the clipboard
 */
export type ClipboardAccess = ('read' | 'readAndWrite') & string;
/**
 * Allows the plug-in to access the local file system
 */
export type LocalFileSystemAccess = ('plugin' | 'request' | 'fullAccess') & string;
/**
 * A list of URI schemes that the plug-in may launch
 */
export type AllowedURISchemes = string[];
/**
 * A list of allowed file extensions that the plug-in may launch when using the "file://" schema
 */
export type AllowedFileExtensions = string[];
/**
 * Allows the plug-in to evaluate code from strings, including JavaScript eval() and HTML inline event handlers
 */
export type StringBasedEvaluation = boolean;
/**
 * A list of host names that the plug-in may request within WebViews
 */
export type AllowedDomainNames1 = string[];
/**
 * This feature is only available from UXP 7.3. Allows the plug-in to identify the current user's Creative Cloud account
 * https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#guid
 */
export type UserIdentification = boolean;
/**
 * Enables the usage of Spectrum Web Components as custom HTML elements
 * https://developer.adobe.com/photoshop/uxp/2022/uxp-api/reference-spectrum/swc/
 */
export type EnableSpectrumWebComponents = boolean;
/**
 * Enables the usage of CSS variables (custom attributes) for the "fill" attribute in SVG elements
 */
export type EnableCSSVariablesForFillAttribute = boolean;
/**
 * The default string in case the user's language is unsupported
 */
export type DefaultString = string;
/**
 * The string as translated to a language
 */
export type Translation = string | undefined;

export interface AdobeUXPPlugInManifest {
  id: PlugInID;
  name: PlugInName;
  version: PlugInVersion;
  manifestVersion: ManifestVersion;
  main?: MainEntryPoint;
  icons?: PlugInIcons;
  host?: HostProgram;
  entrypoints: EntryPoints;
  requiredPermissions?: {
    network?: NetworkAccess;
    clipboard?: ClipboardAccess;
    localFileSystem?: LocalFileSystemAccess;
    launchProcess?: ProcessLaunching;
    allowCodeGenerationFromStrings?: StringBasedEvaluation;
    ipc?: InterPluginCommunication;
    webview?: WebViewSupport;
    enableUserInfo?: UserIdentification;
  };
  featureFlags?: ExperimentalFeatureFlags;
  strings?: LocalizedStrings;
}
export interface IconDefinition {
  width: IconWidth;
  height: IconHeight;
  path: BaseIconPath;
  scale?: AvailableIconScales;
  theme?: SupportedThemes;
  species?: IconSpecies;
}
export interface HostDefinition {
  app: App;
  minVersion: MinimumVersion;
  maxVersion?: MaximumVersion;
  [k: string]: unknown | undefined;
}
export interface HostDefinition1 {
  app: App;
  minVersion: MinimumVersion;
  maxVersion?: MaximumVersion;
  [k: string]: unknown | undefined;
}
/**
 * Allows the plug-in to access the network
 */
export interface NetworkAccess {
  domains: AllowedDomainNames;
}
/**
 * Allows the plug-in to launch external processes through associated schemes and file extensions
 */
export interface ProcessLaunching {
  schemes: AllowedURISchemes;
  extensions: AllowedFileExtensions;
}
/**
 * Allows the plug-in to communicate with other plug-ins
 */
export interface InterPluginCommunication {
  /**
   * Enables this permission
   */
  enablePluginCommunication: boolean;
}
/**
 * This feature is only available from UXP 6.0. Allows the plug-in to use WebViews
 * https://developer.adobe.com/photoshop/uxp/2022/guides/uxp_guide/uxp-misc/manifest-v5/#webviews
 */
export interface WebViewSupport {
  /**
   * Enables this permission
   */
  allow: 'yes';
  domains: AllowedDomainNames1;
}
/**
 * Enables specific experimental features for this plug-in
 * https://developer.adobe.com/indesign/uxp/plugins/concepts/manifest/#featureflags
 */
export interface ExperimentalFeatureFlags {
  enableSWCSupport?: EnableSpectrumWebComponents;
  enableFillAsCustomAttribute?: EnableCSSVariablesForFillAttribute;
  [k: string]: unknown | undefined;
}
/**
 * Specifies a set of localized strings that may be reused in other parts of the manifest file by specifying the string name as a value (for example "'label': 'my-string'"), such as panel menus and command names
 * https://developer.adobe.com/indesign/uxp/plugins/concepts/manifest/#stringsdefinition
 */
export interface LocalizedStrings {
  [k: string]: LocalizedString | undefined;
}
/**
 * Specifies a localized text string
 */
export interface LocalizedString {
  default: DefaultString;
  [k: string]: Translation | undefined;
}
