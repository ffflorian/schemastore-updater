/* eslint-disable */

/**
 * Enumerates build target types.
 */
export type BuildTargetType = 'Unknown' | 'Game' | 'Server' | 'Client' | 'Editor' | 'Program';
/**
 * Available build configurations. Mirrored from UnrealTargetConfiguration.
 */
export type BuildConfiguration = 'Unknown' | 'Debug' | 'DebugGame' | 'Development' | 'Shipping' | 'Test';

/**
 * Descriptor for projects. Contains all the information contained within a .uproject file.
 */
export interface JSONSchemaForUnrealEngineUproject {
  /**
   * List of additional directoreis to scan for plugins
   */
  AdditionalPluginDirectories?: string[];
  /**
   * Indicates that enabled by default engine plugins should not be enabled unless explicitly enabled by the project or target files.
   */
  DisableEnginePluginsByDefault?: boolean;
  /**
   * Indicates if this project is an Enterprise project.
   */
  IsEnterpriseProject?: boolean;
  /**
   * Category to show under the project browser.
   */
  Category?: string;
  /**
   * Description to show in the project browser.
   */
  Description?: string;
  /**
   * The engine to open this project with. Either <major>.<minor> version (4.27, 5.4, etc), unique Engine identifier, blank for directory-based discovery, or relative path.
   */
  EngineAssociation: string;
  /**
   * A hash that is used to determine if the project was forked from a sample.
   */
  EpicSampleNameHash?: number;
  /**
   * Descriptor version number.
   */
  FileVersion: number;
  /**
   * List of all modules associated with this project.
   */
  Modules?: ModuleDescriptor[];
  /**
   * List of plugins for this project (may be enabled/disabled).
   */
  Plugins?: PluginReferenceDescriptor[];
  /**
   * Custom steps to execute after building targets in this project.
   */
  PostBuildSteps?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Custom steps to execute before building targets in this project.
   */
  PreBuildSteps?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Array of platforms that this project is targeting.
   */
  TargetPlatforms?: string[];
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
   * When true, an empty PlatformAllowList is interpreted as 'no platforms' with the expectation that explicit platforms will be added in plugin extensions.
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
   * Name of this module.
   */
  Name?: string;
  /**
   * List of allowed platforms.
   */
  PlatformAllowList?: string[];
  /**
   * List of disallowed platforms.
   */
  PlatformDenyList?: string[];
  /**
   * List of allowed programs.
   */
  ProgramAllowList?: string[];
  /**
   * List of disallowed programs.
   */
  ProgramDenyList?: string[];
  /**
   * List of allowed targets.
   */
  TargetAllowList?: BuildTargetType[];
  /**
   * List of allowed target configurations.
   */
  TargetConfigurationAllowList?: BuildConfiguration[];
  /**
   * List of disallowed target configurations.
   */
  TargetConfigurationDenyList?: BuildConfiguration[];
  /**
   * List of disallowed targets.
   */
  TargetDenyList?: BuildTargetType[];
  /**
   * Usage type of module.
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
   * Whether it should be enabled by default.
   */
  Enabled: boolean;
  /**
   * When true, empty SupportedTargetPlatforms and PlatformAllowList are interpreted as 'no platforms' with the expectation that explicit platforms will be added in plugin platform extensions.
   */
  HasExplicitPlatforms?: boolean;
  /**
   * Whether this plugin is optional, and the game should silently ignore it not being present.
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
   * Name of the plugin.
   */
  Name: string;
  /**
   * List of allowed platforms.
   */
  PlatformAllowList?: string[];
  /**
   * List of disallowed platforms.
   */
  PlatformDenyList?: string[];
  /**
   * List of allowed targets.
   */
  TargetAllowList?: BuildTargetType[];
  /**
   * List of allowed target configurations.
   */
  TargetConfigurationAllowList?: BuildConfiguration[];
  /**
   * List of disallowed target configurations.
   */
  TargetConfigurationDenyList?: BuildConfiguration[];
  /**
   * List of disallowed targets.
   */
  TargetDenyList?: BuildTargetType[];
  [k: string]: unknown | undefined;
}
