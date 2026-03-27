/* eslint-disable */

export type JSONSchemaForFoundryVTTWorldManifestFilesWorldJson =
  JSONSchemaForFoundryVTTManifestFilesModuleJsonSystemJsonOrWorldJsonThisIsTheBaseFromWhichOthersInherit & {
    /**
     * A public URL.
     */
    manifest?: string;
    /**
     * The game system name which this world relies upon
     */
    system: string;
    /**
     * A web URL or local file path which provides a background banner image
     */
    background?: string;
    /**
     * The version of the core software for which this world has been migrated
     */
    coreVersion: string | number;
    /**
     * The version of the game system for which this world has been migrated
     */
    systemVersion: string | number;
    /**
     * An ISO datetime string when the next game session is scheduled to occur
     */
    nextSession?: string | null;
    /**
     * Should user access keys be reset as part of the next launch?
     */
    resetKeys?: boolean;
    /**
     * Should the world launch in safe mode?
     */
    safeMode?: boolean;
    [k: string]: unknown | undefined;
  };
/**
 * A less common way of including Javascript with the increasing adoption of ESModules, this field allows you to define an array of JavaScript file paths which should be included whenever this package is being used. Each listed script path should be relative to the package root directory. All scripts which exist will be automatically included in the game session and loaded in their listed order.
 */
export type FileArray = string[];

export interface JSONSchemaForFoundryVTTManifestFilesModuleJsonSystemJsonOrWorldJsonThisIsTheBaseFromWhichOthersInherit {
  /**
   * Choose a unique package identifier. This must be an all lower-case string with no special characters and should use hyphens (not underscores) to separate multiple terms. This name must match exactly with the name of the parent directory within which you create the package.
   */
  id: string;
  /**
   * @deprecated
   */
  name?: string;
  /**
   * Provide a human readable title for the package which is displayed as the visible name for the package in the Setup menu and elsewhere.
   */
  title: string;
  /**
   * This field can contain a more lengthy description of the package. This text can be used to describe the functionality, list contact information, provide recommendations to contributors or testers, or any other information you feel is important to provide. This field can contain HTML to structure and style your text. For a system, this is also a good place to include any special licensing or attribution information that you need to distribute.
   */
  description: string;
  /**
   * @deprecated
   */
  author?: string;
  /**
   * An array listing each author as an object that contains a name and potentially some contact details.
   */
  authors?: {
    /**
     * The only required field for an author.  This can be your username, your full name, etc.
     */
    name: string;
    email?: string;
    /**
     * A public URL.
     */
    url?: string;
    discord?: string;
    flags?: Flags;
    /**
     * (Manifest+ field)
     */
    'ko-fi'?: string;
    /**
     * (Manifest+ field)
     */
    patreon?: string;
    /**
     * (Manifest+ field)
     */
    reddit?: string;
    /**
     * (Manifest+ field)
     */
    twitter?: string;
  }[];
  /**
   * A public URL that links to the repository or documentation pages for the package. This link will be displayed for users to allow them to find more information about your package. If your package is hosted in version control like GitHub or GitLab, linking to the repository in this field is a good choice.
   */
  url?: string;
  /**
   * A path to a license file relative to the root package folder or a publicly accessible URL which contains the software license that applies to this package.
   */
  license?: string;
  /**
   * A path to a read-me file relative to the root package folder or a publicly accessible URL which contains instructions or information about the package.
   */
  readme?: string;
  /**
   * A public URL.
   */
  bugs?: string;
  /**
   * A public URL.
   */
  changelog?: string;
  flags?: Flags;
  /**
   * (undocumented, intended to be used by core Foundry in the future)
   */
  media?: {
    type?: string;
    /**
     * A public URL.
     */
    url?: string;
    caption?: string;
    loop?: boolean;
    thumbnail?: string;
    flags?: Flags;
    [k: string]: unknown | undefined;
  }[];
  /**
   * The package version number can be a number or a string which denotes the version of your module/system/world. When making changes to your package, incrementing the version number in your manifest file is used to signal to users that an update is available. We discuss some supported options for versioning in the Introduction to Development article.
   */
  version: string | number;
  compatibility?: PackageCompatibility;
  /**
   * @deprecated
   */
  minimumCoreVersion?: string | number;
  /**
   * @deprecated
   */
  compatibleCoreVersion?: string | number;
  scripts?: FileArray;
  esmodules?: FileArray;
  styles?: FileArray;
  /**
   * A list of localization files that Foundry can use to translate strings.
   */
  languages?: {
    /**
     * A language code in lower-case letters, for example "en" for English. See https://en.wikipedia.org/wiki/List_of_ISO_639-2_codes
     */
    lang: string;
    /**
     * The formal and readable name for the language, for example "English".
     */
    name?: string;
    /**
     * Relative path to a file, case sensitive.
     */
    path: string;
    /**
     * (undocumented)
     */
    system?: string;
    /**
     * (undocumented)
     */
    module?: string;
    flags?: Flags;
  }[];
  /**
   * Packages may come bundled with Compendium packs which include game content for various Document types. Compendium packs are defined as objects which have their own internal metadata structure.
   */
  packs?: {
    /**
     * Name of the Compendium pack. This should be a lowercase string with no special characters other than hyphens.
     */
    name: string;
    /**
     * Human readable label of the Compendium pack. This is displayed in the Compendium sidebar.
     */
    label: string;
    /**
     * Relative path to a file, case sensitive.
     */
    path: string;
    /**
     * (undocumented, will hide pack from non-GMs)
     */
    private?: boolean;
    /**
     * Each Compendium pack must designate which type of Entity it contains.
     */
    type:
      | 'Actor'
      | 'Cards'
      | 'Adventure'
      | 'Item'
      | 'Journal'
      | 'JournalEntry'
      | 'Macro'
      | 'Playlist'
      | 'RollTable'
      | 'Table'
      | 'Scene';
    /**
     * @deprecated
     */
    entity?: string;
    /**
     * The id of the system/s the Compendium pack is created for. This ensures Foundry knows this Compendium only works for that system. This may be a string or an array of strings. Important: Actor, Item, and Adventure compendium packs MUST define a system field.
     */
    system?: string | string[];
    flags?: Flags;
  }[];
  /**
   * Packages can require modules, systems, or worlds be installed to allow their use. If a package has been installed with dependencies, but its dependencies are missing, it cannot be enabled.
   */
  relationships?: {
    /**
     * Will only allow the package to activated within Worlds which are running one of these systems and with a compatible version.
     */
    systems?: PackageRelationship[];
    /**
     * If a package has been installed with dependencies, but its dependencies are missing, it cannot be enabled.
     */
    requires?: PackageRelationship[];
    /**
     * (undocumented, intended to be used by core Foundry in the future)
     */
    recommends?: PackageRelationship[];
    /**
     * (undocumented, intended to be used by core Foundry in the future)
     */
    conflicts?: PackageRelationship[];
  };
  /**
   * @deprecated
   */
  dependencies?: {
    /**
     * ID of the package this package depends on.
     */
    id?: string;
    /**
     * ID of the package this package depends on.
     */
    name?: string;
    /**
     * The type of dependency.
     */
    type?: 'module' | 'system' | 'world';
    /**
     * A public URL.
     */
    manifest?: string;
  }[];
  /**
   * @deprecated
   */
  system?: string;
  /**
   * A package may request for a specialized socket namespace to be provided. If set to true, a socket event will be handled by the server with the name `system.${id}` (for a system) or `module.${id}` (for a module), and will transact a arbitrary data object by broadcasting that data to all connected clients. This allows the package to have a reserved channel for messaging events which are needed to coordinate actions across multiple connected clients.
   */
  socket?: boolean;
  /**
   * A public URL.
   */
  manifest?: string;
  /**
   * A public URL.
   */
  download?: string;
  /**
   * (undocumented, used for premium packages)
   */
  protected?: boolean;
  /**
   * (undocumented)
   */
  exclusive?: boolean;
  /**
   * (undocumented, intended to be used by core Foundry in the future)
   */
  persistentStorage?: boolean;
  /**
   * (intended to be used by core Foundry in the future, see Module Sub-Types article)
   */
  documentTypes?: {
    [k: string]: unknown | undefined;
  };
  /**
   * (Manifest+ field)
   */
  manifestPlusVersion?: string | number;
  /**
   * (Manifest+ field)
   */
  includes?: unknown[];
  /**
   * (Manifest+ field)
   */
  deprecated?: {
    [k: string]: unknown | undefined;
  };
  /**
   * (Manifest+ field)
   */
  conflicts?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Flag data.
 */
export interface Flags {
  [k: string]: unknown | undefined;
}
/**
 * The compatibility field is an object key for capturing the sub-fields which defines the limits of your package's compatibility based on Foundry Virtual Tabletop version.
 */
export interface PackageCompatibility {
  /**
   * The module will not function for versions earlier than this.
   */
  minimum?: string | number;
  /**
   * The module has been verified to be compatible up to this version.
   */
  verified?: string | number;
  /**
   * The module will not function for newer versions than this.
   */
  maximum?: string | number;
}
export interface PackageRelationship {
  /**
   * Dependency entries require the id attribute. If only an id is provided, additional details about the module will be discovered from the Foundry VTT website listing.
   */
  id: string;
  /**
   * The type attribute instructs FoundryVTT that the dependency may be on a different type of package. By default dependencies are assumed to be a module, so if you want to depend on a system or world you should be explicit.
   */
  type?: 'module' | 'system' | 'world';
  /**
   * The manifest attribute provides an explicit manifest url to be used for downloading the dependency. If a manifest is not provided, the dependency package must exist in the Foundry website directory.
   */
  manifest?: string;
  compatibility?: PackageCompatibility1;
  /**
   * (undocumented, intended to be used by core Foundry in the future)
   */
  reason?: string;
  flags?: Flags;
}
/**
 * As above, the compatibility of a dependency can be defined, ensuring that the dependency will not be installed if it does not meet the defined requirements.
 */
export interface PackageCompatibility1 {
  /**
   * The module will not function for versions earlier than this.
   */
  minimum?: string | number;
  /**
   * The module has been verified to be compatible up to this version.
   */
  verified?: string | number;
  /**
   * The module will not function for newer versions than this.
   */
  maximum?: string | number;
}
