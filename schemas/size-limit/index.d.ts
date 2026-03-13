/* eslint-disable */

export type ConfigurationSection = {
  path: RelativePathToFiles | RelativePathsToFiles;
  import?: PartialImportToTestTreeShaking;
  limit?: SizeOrTimeLimitForFilesFromThePathOptionItShouldBeAStringWithANumberAndUnitSeparatedByASpace;
  name?: TheNameOfTheCurrentSectionItWillOnlyBeUsefulIfYouHaveMultipleSections;
  entry?: WhenUsingACustomWebpackConfigAWebpackEntryCouldBeGivenItCouldBeAStringOrAnArrayOfStringsByDefaultTheTotalSizeOfAllEntryPointsWillBeChecked;
  webpack?: WithFalseItWillDisableWebpack;
  running?: WithFalseItWillDisableCalculatingRunningTime;
  gzip?: WithFalseItWillDisableGzipCompression;
  brotli?: WithTrueItWillUseBrotliCompressionAndDisableGzipCompression;
  ignore?: AnArrayOfFilesAndDependenciesToExcludeFromTheProjectSizeCalculation[];
  [k: string]: unknown | undefined;
} & {
  [k: string]: unknown | undefined;
};
export type RelativePathToFiles = string;
export type PathOrGlobPattern = string;
export type RelativePathsToFiles = PathOrGlobPattern[];
export type PartialImportToTestTreeShaking =
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^/?([^/]+/)*[^/]+/?$".
       */
      [k: string]: string;
    };
export type SizeOrTimeLimitForFilesFromThePathOptionItShouldBeAStringWithANumberAndUnitSeparatedByASpace = string;
export type TheNameOfTheCurrentSectionItWillOnlyBeUsefulIfYouHaveMultipleSections = string;
export type WhenUsingACustomWebpackConfigAWebpackEntryCouldBeGivenItCouldBeAStringOrAnArrayOfStringsByDefaultTheTotalSizeOfAllEntryPointsWillBeChecked =
  string | string[];
export type WithFalseItWillDisableWebpack = boolean;
export type WithFalseItWillDisableCalculatingRunningTime = boolean;
export type WithFalseItWillDisableGzipCompression = boolean;
export type WithTrueItWillUseBrotliCompressionAndDisableGzipCompression = boolean;
export type AnArrayOfFilesAndDependenciesToExcludeFromTheProjectSizeCalculation = string;
export type JSONSchemaForConfigurationForSizeLimit = ConfigurationSection[];
