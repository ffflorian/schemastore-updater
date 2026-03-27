/* eslint-disable */

/**
 * Defines an assembly in the Unity compilation pipeline
 */
export type UnityAssemblyDefinition = {
  includePlatforms?: {
    [k: string]: unknown | undefined;
  };
  excludePlatforms?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & {
  /**
   * The name of the assembly being defined
   */
  name: string;
  /**
   * The root namespace of the assembly. Requires Unity 2020.2
   */
  rootNamespace?: string;
  /**
   * A list of assembly names or assembly asset GUIDs to reference
   */
  references?: string[];
  includePlatforms?: PlatformValues;
  excludePlatforms?: PlatformValues;
  /**
   * Allow unsafe code
   */
  allowUnsafeCode?: boolean;
  /**
   * When true, this assembly definition is automatically referenced by predefined assemblies (Assembly-CSharp, Assembly-CSharp-firstpass, etc.)
   */
  autoReferenced?: boolean;
  /**
   * When true, no references to UnityEngine or UnityEditor will be added to this assembly project
   */
  noEngineReferences?: boolean;
  /**
   * When true, any references to precompiled assembly assets are manually chosen. When false, all precompiled assembly assets are automatically referenced
   */
  overrideReferences?: boolean & string;
  /**
   * A list of precompiled assembly assets that will be referenced. Only valid when overrideReferences is true
   */
  precompiledReferences?: unknown[];
  /**
   * A list of the C# compiler define symbols that must evaluate to true in order for the assembly to be compiled or referenced. Absence of a symbol can be checked with a bang symbol (!DEFINE)
   */
  defineConstraints?: unknown[];
  /**
   * Additional optional Unity features to reference
   */
  optionalUnityReferences?: 'TestAssemblies'[];
  /**
   * A set of expressions that will define a symbol in the C# project if a package or module version matches the given expression
   */
  versionDefines?: {
    /**
     * The package or module that will provide the version to be checked in the expression
     */
    name: string;
    /**
     * The semantic version range of the chosen package or module
     */
    expression: string;
    /**
     * The name of the define that is added to the project file when expression evaluates to true
     */
    define: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
};
/**
 * Platforms to target
 */
export type PlatformValues = (
  | 'Android'
  | 'Editor'
  | 'iOS'
  | 'LinuxStandalone32'
  | 'LinuxStandalone64'
  | 'LinuxStandaloneUniversal'
  | 'Lumin'
  | 'macOSStandalone'
  | 'Nintendo3DS'
  | 'PS4'
  | 'PSVita'
  | 'Stadia'
  | 'Switch'
  | 'tvOS'
  | 'WSA'
  | 'WebGL'
  | 'WindowsStandalone32'
  | 'WindowsStandalone64'
  | 'XboxOne'
)[];
