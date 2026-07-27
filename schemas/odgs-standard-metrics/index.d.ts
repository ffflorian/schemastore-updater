/* eslint-disable */

/**
 * Open Data Governance Standard (ODGS) metric definitions — KPI logic, lineage, and compliance mappings.
 */
export type ODGSStandardMetrics = ODGSStandardMetric[];

/**
 * A single metric definition in the ODGS Legislative plane.
 */
export interface ODGSStandardMetric {
  metric_id: string;
  urn?: string;
  name: string;
  domain: string;
  definition?: string;
  description?: string;
  icon?: string;
  owner?: string;
  calculation_logic?: {
    [k: string]: unknown | undefined;
  };
  abstract_calculation?: string;
  sql_pattern?: string;
  dax_pattern?: string;
  example?: string;
  interpretation?: string;
  targetIndustries?: string[];
  criticalDqDimensionIds?: (string | number)[];
  /**
   * Bindings to enterprise frameworks (APQC, DAMA DMBOK, BIAN, CDMC), e.g. dama_id.
   */
  framework_tags?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
