/* eslint-disable */

export interface SchemaForAWSCDKContextFilesCdkJson {
  app?: string;
  build?: string;
  versionReporting?: boolean;
  watch?: {
    include?: string[];
    exclude?: string[];
    [k: string]: unknown | undefined;
  };
  context?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
