/* eslint-disable */

export type HowToFormatTestsOutput = string;
export type PathsToExecute = string[];
export type SuiteContexts = (
  | string
  | {
      [k: string]: unknown | undefined;
    }
)[];

export interface JSONSchemaForBehatConfigurationFiles {
  default?: DefaultProfile;
  imports?: string[];
  [k: string]: ProfileName | undefined;
}
export interface DefaultProfile {
  autoload?: {
    [k: string]: string | undefined;
  };
  formatters?: HowToFormatTestsOutput;
  suites?: TestSuites;
  extensions?: BehatExtensions;
  [k: string]: unknown | undefined;
}
export interface TestSuites {
  [k: string]: TestSuite | undefined;
}
export interface TestSuite {
  paths?: PathsToExecute;
  contexts?: SuiteContexts;
  filters?: SuiteFilters;
  [k: string]: unknown | undefined;
}
export interface SuiteFilters {
  tags?: string;
  role?: string;
  [k: string]: unknown | undefined;
}
export interface BehatExtensions {
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | undefined;
}
export interface ProfileName {
  autoload?: {
    [k: string]: string | undefined;
  };
  formatters?: HowToFormatTestsOutput;
  suites?: TestSuites;
  extensions?: BehatExtensions;
  [k: string]: unknown | undefined;
}
