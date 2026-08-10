/* eslint-disable */

export interface JSONSchemaForTheNETGlobalConfigurationFile {
  /**
   * Specifies information about the .NET SDK to select.
   * https://learn.microsoft.com/dotnet/core/tools/global-json#sdk
   */
  sdk?: {
    /**
     * The version of the .NET SDK to use. A full version number is required; wildcards and version ranges aren't supported.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#version
     */
    version?: string;
    /**
     * Whether the SDK resolver should consider prerelease versions when selecting the SDK version to use.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#allowprerelease
     */
    allowPrerelease?: boolean;
    /**
     * The roll-forward policy to use when selecting an SDK version. A version must also be specified unless this is set to 'latestMajor'. When omitted, the effective policy is 'patch' if a version is specified and 'latestMajor' otherwise.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#rollforward
     */
    rollForward?:
      | 'patch'
      | 'feature'
      | 'minor'
      | 'major'
      | 'latestPatch'
      | 'latestFeature'
      | 'latestMinor'
      | 'latestMajor'
      | 'disable';
    /**
     * The locations to consider when searching for a compatible .NET SDK. Paths can be absolute, relative to global.json, or the special value '$host$'. Available since .NET 10 SDK.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#paths
     */
    paths?: string[];
    /**
     * A custom error message to display when the SDK resolver can't find a compatible .NET SDK. Available since .NET 10 SDK.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#errormessage
     */
    errorMessage?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Controls project SDK versions in one place rather than in each individual project. Each property name is a project SDK name and its value is the version to use.
   * https://learn.microsoft.com/dotnet/core/tools/global-json#msbuild-sdks
   */
  'msbuild-sdks'?: {
    [k: string]: string | undefined;
  };
  /**
   * Specifies information about tests.
   * https://learn.microsoft.com/dotnet/core/tools/global-json#test
   */
  test?: {
    /**
     * The test runner that the 'dotnet test' command uses to discover and run tests. Available since .NET 10 SDK.
     * https://learn.microsoft.com/dotnet/core/tools/global-json#runner
     */
    runner?: 'Microsoft.Testing.Platform' | 'VSTest';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
