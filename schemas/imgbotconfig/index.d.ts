/* eslint-disable */

export type LimitsThePRsFromImgbotToOnceADayOnceAWeekOrOnceAMonthRespectivelyTheDefaultBehaviorIsToReceiveImgbotPRsAsImagesRequireOptimization =
  'daily' | 'weekly' | 'monthly';
export type AcceptsTheSyntaxForSearchPatternOnDirectoryEnumerateFiles = string;
export type LimitsTheImagesOptimizedByImgbotByEssentiallyIgnoringThem =
  AcceptsTheSyntaxForSearchPatternOnDirectoryEnumerateFiles[];
export type OptInToUseLossyCompressionAlgorithmsTheDefaultBehaviourWithoutThisSettingIsLossLessCompression =
  | boolean
  | ('true' | 'false');
export type OptInToAlsoCompressWikiRepoTheDefaultBehaviourIsOptOut = boolean | ('true' | 'false');
export type CanBeUsedToLimitTheFrequencyOfPRsImgbotWillOpenOverTime = number;

export interface JSONSchemaForConfigurationForImgBot {
  schedule?: LimitsThePRsFromImgbotToOnceADayOnceAWeekOrOnceAMonthRespectivelyTheDefaultBehaviorIsToReceiveImgbotPRsAsImagesRequireOptimization;
  ignoredFiles?: LimitsTheImagesOptimizedByImgbotByEssentiallyIgnoringThem;
  aggressiveCompression?: OptInToUseLossyCompressionAlgorithmsTheDefaultBehaviourWithoutThisSettingIsLossLessCompression;
  compressWiki?: OptInToAlsoCompressWikiRepoTheDefaultBehaviourIsOptOut;
  minKBReduced?: CanBeUsedToLimitTheFrequencyOfPRsImgbotWillOpenOverTime;
  [k: string]: unknown | undefined;
}
