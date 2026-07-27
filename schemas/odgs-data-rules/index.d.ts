/* eslint-disable */

/**
 * ODGS validation and permissibility rules — mechanically executable data governance constraints.
 */
export type ODGSDataRules = ODGSStandardDataRule[];

/**
 * A single rule definition in the ODGS Judiciary plane.
 */
export interface ODGSStandardDataRule {
  rule_id: string;
  urn?: string;
  name: string;
  definition?: string;
  description?: string;
  domain?: string;
  businessRule?: string;
  /**
   * HARD_STOP: unconditional halt. SOFT_STOP: halt unless override token provided. WARNING: logged, non-blocking. INFO: informational only.
   */
  severity?: 'HARD_STOP' | 'SOFT_STOP' | 'WARNING' | 'INFO';
  logic_expression?: string;
  calculation_logic?: string;
  requires_human_review?: boolean;
  /**
   * Rule URNs that must pass before this rule is evaluated (a DAG for evaluation ordering).
   */
  depends_on?: string[];
  /**
   * Semantic version of the rule definition, tracked in S-Cert audit logs.
   */
  version?: string;
  effective_from?: string;
  effective_to?: string;
  icon?: string;
  owner?: string;
  exampleGood?: string;
  examplePoor?: string;
  targetIndustries?: string[];
  improvesDqDimensionIds?: (string | number)[];
  /**
   * SHA-256 hash of the rule's legislative provenance, for drift detection.
   */
  semantic_hash?: string;
  metadata?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Bindings to enterprise frameworks (APQC, DAMA DMBOK, BIAN, CDMC).
   */
  framework_tags?: {
    [k: string]: unknown | undefined;
  };
  /**
   * References to sovereign/internal definitions this rule is bound to.
   */
  sovereign_refs?: {
    urn?: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
