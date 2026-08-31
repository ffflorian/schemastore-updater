/* eslint-disable */

export interface JSONSchemaForNETCLITemplateHostFiles {
  symbolInfo?: {
    [k: string]: SymbolInfo | undefined;
  };
  usageExamples?: string[];
  [k: string]: unknown | undefined;
}
export interface SymbolInfo {
  isHidden?: boolean | string;
  longName?: string;
  shortName?: string;
  [k: string]: unknown | undefined;
}
