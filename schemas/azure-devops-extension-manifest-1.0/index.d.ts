/* eslint-disable */

/**
 * Base class for extension properties which are shared by the extension manifest and the extension model
 */
export interface HttpsJsonSchemastoreOrgAzureDevopsExtensionManifest10Json {
  /**
   * Array of links to external metadata badges like TravisCI, Appveyor, and so on, from the approved badges sites.
   */
  badges?: Badge[];
  /**
   * Uri used as base for other relative uri's defined in extension
   */
  baseUri?: string;
  branding?: Branding;
  /**
   * Array of strings representing the categories your extension belongs to. At least one category must be provided and there's no limit to how many categories you may include. Valid values: Azure Repos, Azure Boards, Azure Pipelines, Azure Test Plans, and Azure Artifacts.
   *
   * @minItems 1
   */
  categories?: [
    'Azure Repos' | 'Azure Boards' | 'Azure Pipelines' | 'Azure Test Plans' | 'Azure Artifacts',
    ...('Azure Repos' | 'Azure Boards' | 'Azure Pipelines' | 'Azure Test Plans' | 'Azure Artifacts')[]
  ];
  /**
   * List of shared constraints defined by this extension
   */
  constraints?: ContributionConstraint[];
  content?: Content;
  /**
   * List of contribution types defined by this extension
   */
  contributionTypes?: ContributionType[];
  /**
   * List of contributions made by this extension
   */
  contributions?: Contribution[];
  /**
   * List of explicit demands required by this extension
   */
  demands?: string[];
  /**
   * A few sentences describing the extensions. Limited to 200 characters.
   */
  description?: string;
  eventCallbacks?: ExtensionEventCallbackCollection;
  /**
   * Secondary location that can be used as base for other relative uri's defined in extension
   */
  fallbackBaseUri?: string;
  /**
   * The files section is where you reference any files you wish to include in your extension.
   */
  files?: File[];
  /**
   * Dictionary of icons representing the extension.
   */
  icons?: {
    /**
     * 128x128 pixels
     */
    default?: string;
    [k: string]: string | undefined;
  };
  /**
   * The extension's identifier.
   */
  id?: string;
  /**
   * Language Culture Name set by the Gallery
   */
  language?: string;
  licensing?: ExtensionLicensing;
  /**
   * Version of the extension manifest format/content. Should be 1.
   */
  manifestVersion?: number;
  /**
   * A short, human-readable name of the extension. Limited to 200 characters.
   */
  name?: string;
  /**
   * Dictionary of links that help users learn more about your extension, get support, and move.
   */
  links?: {
    getstarted?: Link;
    learn?: Link;
    license?: Link;
    privacypolicy?: Link;
    support?: Link;
    [k: string]: Link;
  };
  /**
   * The identifier of the publisher. This identifier must match the identifier the extension is published under.
   */
  publisher?: string;
  /**
   * Dictionary of properties describing the source code repository for the extension.
   */
  repository?: {
    /**
     * Type of repository. Example: git.
     */
    type?: string;
    /**
     * Absolute URL of the repository.
     */
    uri?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Default user claims applied to all contributions (except the ones which have been specified restrictedTo explicitly) to control the visibility of a contribution.
   */
  restrictedTo?: string[];
  /**
   * List of all oauth scopes required by this extension
   */
  scopes?: string[];
  /**
   * Array of images that couldn't be included in your content.
   */
  screenshots?: Content1[];
  /**
   * The ServiceInstanceType(Guid) of the VSTS service that must be available to an account in order for the extension to be installed
   */
  serviceInstanceType?: string;
  /**
   * Array of string tags to help users find your extension.
   */
  tags?: string[];
  /**
   * The products and services supported by your integration or extension.
   *
   * @minItems 1
   */
  targets?: [Target, ...Target[]];
  /**
   * A string specifying the version of an extension. Should be in the format major.minor.patch.
   */
  version?: string;
  [k: string]: unknown | undefined;
}
/**
 * A link to external metadata badge.
 */
export interface Badge {
  /**
   * Link the user navigates to when selecting the badge.
   */
  href?: string;
  /**
   * The absolute URL of the badge image to be displayed.
   */
  uri: string;
  /**
   * Description of the badge, to be displayed on hover.
   */
  description?: string;
  [k: string]: unknown | undefined;
}
/**
 * Dictionary of brand-related properties.
 */
export interface Branding {
  /**
   * Primary color of the extension or publisher; can be a hex (#ff00ff), RGB (rgb(100,200,50)), or supported HTML color names (blue).
   */
  color?: string;
  /**
   * Complements the color; use dark for dark branding colors, or light for lighter branding colors.
   */
  theme?: 'dark' | 'light';
  [k: string]: unknown | undefined;
}
/**
 * Specifies a constraint that can be used to dynamically include/exclude a given contribution
 */
export interface ContributionConstraint {
  /**
   * An optional property that can be specified to group constraints together. All constraints within a group are AND'd together (all must be evaluate to True in order for the contribution to be included). Different groups of constraints are OR'd (only one group needs to evaluate to True for the contribution to be included).
   */
  group?: number;
  /**
   * Fully qualified identifier of a shared constraint
   */
  id?: string;
  /**
   * If true, negate the result of the filter (include the contribution if the applied filter returns false instead of true)
   */
  inverse?: boolean;
  /**
   * Name of the IContributionFilter plugin
   */
  name?: string;
  /**
   * Properties that are fed to the contribution filter class
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Constraints can be optionally be applied to one or more of the relationships defined in the contribution. If no relationships are defined then all relationships are associated with the constraint. This means the default behaviour will eliminate the contribution from the tree completely if the constraint is applied.
   */
  relationships?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Dictionary of content files that describe your extension to users.
 */
export interface Content {
  details?: Content1;
  [k: string]: Content1;
}
/**
 * A content file that describes the extension to users.
 */
export interface Content1 {
  /**
   * The path to the file in the extension.
   */
  path: string;
  [k: string]: unknown | undefined;
}
/**
 * A contribution type, given by a json schema
 */
export interface ContributionType {
  /**
   * Description of the contribution/type
   */
  description?: string;
  /**
   * Fully qualified identifier of the contribution/type
   */
  id?: string;
  /**
   * Controls whether or not contributions of this type have the type indexed for queries. This allows clients to find all extensions that have a contribution of this type.  NOTE: Only TrustedPartners are allowed to specify indexed contribution types.
   */
  indexed?: boolean;
  /**
   * Friendly name of the contribution/type
   */
  name?: string;
  /**
   * Describes the allowed properties for this contribution type
   */
  properties?: {
    [k: string]: ContributionPropertyDescription | undefined;
  };
  /**
   * VisibleTo can be used to restrict whom can reference a given contribution/type. This value should be a list of publishers or extensions access is restricted too.  Examples: "ms" - Means only the "ms" publisher can reference this. "ms.vss-web" - Means only the "vss-web" extension from the "ms" publisher can reference this.
   */
  visibleTo?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Description about a property of a contribution type
 */
export interface ContributionPropertyDescription {
  /**
   * Description of the property
   */
  description?: string;
  /**
   * Name of the property
   */
  name?: string;
  /**
   * True if this property is required
   */
  required?: boolean;
  /**
   * The type of value used for this property
   */
  type?: 0 | 1 | 128 | 16 | 2 | 256 | 32 | 4 | 512 | 64 | 8;
  [k: string]: unknown | undefined;
}
/**
 * An individual contribution made by an extension
 */
export interface Contribution {
  /**
   * List of constraints (filters) that should be applied to the availability of this contribution
   */
  constraints?: ContributionConstraint[];
  /**
   * Description of the contribution/type
   */
  description?: string;
  /**
   * Fully qualified identifier of the contribution/type
   */
  id: string;
  /**
   * Includes is a set of contributions that should have this contribution included in their targets list.
   */
  includes?: string[];
  /**
   * Properties/attributes of this contribution
   */
  properties?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of demanded claims in order for the user to see this contribution (like anonymous, public, member...).
   */
  restrictedTo?: string[];
  /**
   * The ids of the contribution(s) that this contribution targets. (parent contributions)
   */
  targets: string[];
  /**
   * Id of the Contribution Type
   */
  type: string;
  /**
   * VisibleTo can be used to restrict whom can reference a given contribution/type. This value should be a list of publishers or extensions access is restricted too.  Examples: "ms" - Means only the "ms" publisher can reference this. "ms.vss-web" - Means only the "vss-web" extension from the "ms" publisher can reference this.
   */
  visibleTo?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Collection of endpoints that get called when particular extension events occur
 */
export interface ExtensionEventCallbackCollection {
  postDisable?: ExtensionEventCallback;
  postEnable?: ExtensionEventCallback1;
  postInstall?: ExtensionEventCallback2;
  postUninstall?: ExtensionEventCallback3;
  postUpdate?: ExtensionEventCallback4;
  preInstall?: ExtensionEventCallback5;
  versionCheck?: ExtensionEventCallback6;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension disable has occurred.
 */
export interface ExtensionEventCallback {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension enable has occurred.
 */
export interface ExtensionEventCallback1 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension install has completed.
 */
export interface ExtensionEventCallback2 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension uninstall has occurred.
 */
export interface ExtensionEventCallback3 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension update has occurred.
 */
export interface ExtensionEventCallback4 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * Optional.  Defines an endpoint that gets called via a POST request to notify that an extension install is about to occur.  Response indicates whether to proceed or abort.
 */
export interface ExtensionEventCallback5 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
/**
 * For multi-version extensions, defines an endpoint that gets called via an OPTIONS request to determine the particular version of the extension to be used
 */
export interface ExtensionEventCallback6 {
  /**
   * The uri of the endpoint that is hit when an event occurs
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
export interface File {
  /**
   * Path to resource on disk, which can be relative to your root directory.
   */
  path: string;
  /**
   * (optional) Set to true if you want your file to be URL-addressable. Defaults to false.
   */
  addressable?: boolean;
  /**
   * (optional) Path to the resource within the package. Defaults to the relative path on disk from your root directory.
   */
  packagePath?: string;
  /**
   * (optional) MIME type of the file. Defaults to a best guess based on the file extension and OS settings.
   */
  contentType?: string;
  /**
   * (optional) Specify the value of the Type attribute of the asset entry in the VSIX manifest. Can also be an array of strings, in which case multiple asset entries get added for this file. Defaults to the packagePath.
   */
  assetType?: string;
  /**
   * (optional) Language of this asset. Localized files are served based on the Accept-Language header. Leave blank to signify this file is in the default (or fallback) language. Localized versions of the same file should have the same assetType.
   */
  lang?: string;
  [k: string]: unknown | undefined;
}
/**
 * How this extension behaves with respect to licensing
 */
export interface ExtensionLicensing {
  /**
   * A list of contributions which deviate from the default licensing behavior
   */
  overrides?: LicensingOverride[];
  [k: string]: unknown | undefined;
}
/**
 * Maps a contribution to a licensing behavior
 */
export interface LicensingOverride {
  /**
   * How the inclusion of this contribution should change based on licensing
   */
  behavior?: 0 | 1 | 2;
  /**
   * Fully qualified contribution id which we want to define licensing behavior for
   */
  id?: string;
  [k: string]: unknown | undefined;
}
export interface Link {
  /**
   * The absolute URL of the link.
   */
  uri?: string;
  [k: string]: unknown | undefined;
}
export interface Target {
  id:
    | 'Microsoft.VisualStudio.Services'
    | 'Microsoft.TeamFoundation.Server'
    | 'Microsoft.VisualStudio.Services.Integration'
    | 'Microsoft.TeamFoundation.Server.Integration';
  [k: string]: unknown | undefined;
}
