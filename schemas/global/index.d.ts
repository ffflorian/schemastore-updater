/* eslint-disable */

export interface JSONSchemaForTheNETGlobalConfigurationFile {
  /**
   * Specify information about the SDK.
   */
  sdk?: {
    /**
     * The version of the SDK to use.
     */
    version?: string;
    allowPrerelease?: boolean;
    /**
     * The roll-forward policy when selecting an SDK version, either as a fallback to accommodate missing a specific SDK version or as a directive to use a later version.
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
    [k: string]: unknown | undefined;
  };
  /**
   * Specify information related to testing
   */
  test?: {
    /**
     * The test runner/platform used by 'dotnet test' command.
     */
    runner?: 'Microsoft.Testing.Platform' | 'VSTest';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
