/* eslint-disable */

/**
 * Enumerates build target types.
 */
export type BuildTargetType = 'Unknown' | 'Game' | 'Server' | 'Client' | 'Editor' | 'Program';
/**
 * Available build configurations. Mirrored from `UnrealTargetConfiguration`.
 */
export type BuildConfiguration = 'Unknown' | 'Debug' | 'DebugGame' | 'Development' | 'Shipping' | 'Test';

/**
 * Descriptor for plugins. Contains all the information contained within a `.uplugin` file.
 */
export interface JSONSchemaForUnrealEngineUplugin {
  /**
   * Determine the initial feature state for a built-in plugin
   */
  BuiltInInitialFeatureState?: 'Installed' | 'Registered' | 'Loaded' | 'Active';
  /**
   * Can this plugin contain content?
   */
  CanContainContent?: boolean;
  /**
   * Can this plugin contain Verse code?
   */
  CanContainVerse?: boolean;
  /**
   * When true, this plugin's modules will not be loaded automatically nor will it's content be mounted automatically.
   */
  ExplicitlyLoaded?: boolean;
  /**
   * When true, an empty SupportedTargetPlatforms is interpreted as 'no platforms' with the expectation that explicit platforms will be added in plugin platform extensions
   */
  HasExplicitPlatforms?: boolean;
  /**
   * Signifies that the plugin was installed on top of the engine
   */
  Installed?: boolean;
  /**
   * Marks the plugin as beta in the UI
   */
  IsBetaVersion?: boolean;
  /**
   * Marks the plugin as experimental in the UI
   */
  IsExperimentalVersion?: boolean;
  /**
   * For auto-generated plugins that should not be listed in the plugin browser for users to disable freely.
   */
  IsHidden?: boolean;
  /**
   * If true, this plugin from a platform extension extending another plugin
   */
  bIsPluginExtension?: boolean;
  /**
   * For plugins that are under a platform folder (eg. /PS4/), determines whether compiling the plugin requires the build platform and/or SDK to be available
   */
  RequiresBuildPlatform?: boolean;
  /**
   * The name of the category this plugin
   */
  Category?: string;
  /**
   * The company or individual who created this plugin.
   */
  CreatedBy?: string;
  /**
   * Hyperlink URL string for the company or individual who created this plugin. This is optional.
   */
  CreatedByURL?: string;
  /**
   * Description of the plugin
   */
  Description?: string;
  /**
   * Documentation URL string.
   */
  DocsURL?: string;
  /**
   * Optional custom virtual path to display in editor to better organize.
   */
  EditorCustomVirtualPath?: string;
  /**
   * Whether this plugin should be enabled by default for all projects
   */
  EnabledByDefault?: boolean;
  /**
   * Version of the engine that this plugin is compatible with
   */
  EngineVersion?: string;
  /**
   * Descriptor version number.
   */
  FileVersion: number;
  /**
   * Friendly name of the plugin
   */
  FriendlyName?: string;
  /**
   * List of all localization targets associated with this plugin
   */
  LocalizationTargets?: {
    /**
     * When should the localization data associated with a target should be loaded?
     */
    LoadingPolicy: 'Never' | 'Always' | 'Editor' | 'Game' | 'PropertyNames' | 'ToolTips' | 'Max';
    /**
     * Name of this target
     */
    Name: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Marketplace URL for this plugin.
   */
  MarketplaceURL?: string;
  /**
   * List of all modules associated with this plugin
   */
  Modules?: ModuleDescriptor[];
  /**
   * If specified, this is the real plugin that this one is just extending
   */
  ParentPluginName?: string;
  /**
   * Plugins used by this plugin
   */
  Plugins?: PluginReferenceDescriptor[];
  /**
   * Post-build steps for each host platform
   */
  PostBuildSteps?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Pre-build steps for each host platform
   */
  PreBuildSteps?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of programs that are supported by this plugin.
   */
  SupportedPrograms?: string[];
  /**
   * Controls a subset of platforms that can use this plugin, and which ones will stage the `.uplugin` file and content files.
   */
  SupportedTargetPlatforms?: string[];
  /**
   * Support URL/email for this plugin.
   */
  SupportURL?: string;
  /**
   * Version number for the plugin.
   */
  Version?: number;
  /**
   * Name of the version for this plugin.
   */
  VersionName?: string;
}
/**
 * Description of a loadable module.
 */
export interface ModuleDescriptor {
  /**
   * List of additional dependencies for building this module.
   */
  AdditionalDependencies?: string[];
  /**
   * When true, an empty PlatformAllowList is interpreted as 'no platforms' with the expectation that explicit platforms will be added in plugin extensions
   */
  HasExplicitPlatforms?: boolean;
  /**
   * When should the module be loaded during the startup sequence? This is sort of an advanced setting.
   */
  LoadingPhase?:
    | 'EarliestPossible'
    | 'PostConfigInit'
    | 'PostSplashScreen'
    | 'PreEarlyLoadingScreen'
    | 'PreLoadingScreen'
    | 'PreDefault'
    | 'Default'
    | 'PostDefault'
    | 'PostEngineInit'
    | 'None'
    | 'Max';
  /**
   * Name of this module
   */
  Name?: string;
  /**
   * List of allowed platforms
   */
  PlatformAllowList?: string[];
  /**
   * List of disallowed platforms
   */
  PlatformDenyList?: string[];
  /**
   * List of allowed programs
   */
  ProgramAllowList?: string[];
  /**
   * List of disallowed programs
   */
  ProgramDenyList?: string[];
  /**
   * List of allowed targets
   */
  TargetAllowList?: BuildTargetType[];
  /**
   * List of allowed target configurations
   */
  TargetConfigurationAllowList?: BuildConfiguration[];
  /**
   * List of disallowed target configurations
   */
  TargetConfigurationDenyList?: BuildConfiguration[];
  /**
   * List of disallowed targets
   */
  TargetDenyList?: BuildTargetType[];
  /**
   * Usage type of module
   */
  Type?:
    | 'Runtime'
    | 'RuntimeNoCommandlet'
    | 'RuntimeAndProgram'
    | 'CookedOnly'
    | 'UncookedOnly'
    | 'Developer'
    | 'DeveloperTool'
    | 'Editor'
    | 'EditorNoCommandlet'
    | 'EditorAndProgram'
    | 'Program'
    | 'ServerOnly'
    | 'ClientOnly'
    | 'ClientOnlyNoCommandlet'
    | 'Max';
  [k: string]: unknown | undefined;
}
/**
 * Descriptor for a plugin reference.
 */
export interface PluginReferenceDescriptor {
  /**
   * Whether it should be enabled by default
   */
  Enabled: boolean;
  /**
   * When true, empty `SupportedTargetPlatforms` and `PlatformAllowList` are interpreted as *no platforms* with the expectation that explicit platforms will be added in plugin platform extensions
   */
  HasExplicitPlatforms?: boolean;
  /**
   * Whether this plugin is optional, and the game should silently ignore it not being present
   */
  Optional?: boolean;
  /**
   * Description of the plugin for users that do not have it installed.
   */
  Description?: string;
  /**
   * URL for this plugin on the marketplace, if the user doesn't have it installed.
   */
  MarketplaceURL?: string;
  /**
   * Name of the plugin
   */
  Name: string;
  /**
   * List of allowed platforms
   */
  PlatformAllowList?: string[];
  /**
   * List of disallowed platforms
   */
  PlatformDenyList?: string[];
  /**
   * List of allowed targets
   */
  TargetAllowList?: BuildTargetType[];
  /**
   * List of allowed target configurations
   */
  TargetConfigurationAllowList?: BuildConfiguration[];
  /**
   * List of disallowed target configurations
   */
  TargetConfigurationDenyList?: BuildConfiguration[];
  /**
   * List of disallowed targets
   */
  TargetDenyList?: BuildTargetType[];
  [k: string]: unknown | undefined;
}
