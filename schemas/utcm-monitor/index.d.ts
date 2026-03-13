/* eslint-disable */

/**
 * Schema for entity configurationMonitor
 */
export interface ConfigurationMonitorSchema {
  id?: string;
  displayName?: string;
  description?: string;
  parameters?: OpenComplexDictionaryTypeSchema;
  baseline?: ConfigurationBaselineSchema;
}
/**
 * Schema for entity openComplexDictionaryType
 */
export interface OpenComplexDictionaryTypeSchema {
  [k: string]: unknown | undefined;
}
/**
 * Schema for entity configurationBaseline
 */
export interface ConfigurationBaselineSchema {
  id?: string;
  displayName?: string;
  description?: string;
  parameters?: BaselineParameterSchema[];
  resources?: {
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
/**
 * Schema for entity baselineParameter
 */
export interface BaselineParameterSchema {
  displayName?: string;
  description?: string;
  parameterType?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
