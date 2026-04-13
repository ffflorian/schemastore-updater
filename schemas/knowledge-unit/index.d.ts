/* eslint-disable */

/**
 * A verified knowledge artifact produced through structured multi-model deliberation, as defined in draft-farley-acta-knowledge-units-00 (IETF Internet-Draft).
 */
export interface KnowledgeUnit {
  /**
   * Unique identifier. Format: ku- followed by 12 alphanumeric characters.
   */
  id: string;
  /**
   * Schema version number. Current version is 1.
   */
  version: 1;
  /**
   * The definitive question this KU answers.
   */
  canonical_question: string;
  /**
   * Topic classification.
   */
  domain?:
    | 'technology'
    | 'science'
    | 'health'
    | 'policy'
    | 'economics'
    | 'agent_security'
    | 'agent_governance'
    | 'research'
    | 'engineering';
  /**
   * Additional classification labels for cross-domain discovery.
   */
  tags?: string[];
  /**
   * Structural classification of agreement among participating models.
   */
  consensus_level: 'unanimous' | 'strong' | 'split' | 'divergent';
  /**
   * Points where all participating models converge.
   */
  agreed: (
    | string
    | {
        claim: string;
        confidence?: 'high' | 'medium' | 'low';
        evidence?: string;
        source_refs?: string[];
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Points where models diverge, with per-model positions.
   */
  disputed?: {
    claim: string;
    positions: {
      [k: string]: string | undefined;
    };
    significance?: 'core' | 'framing' | 'edge_case';
    [k: string]: unknown | undefined;
  }[];
  /**
   * Points that no model could resolve with confidence.
   */
  uncertain?: (
    | string
    | {
        claim: string;
        reason?: string;
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Editorial summary. NOT canonical - the agreed/disputed/uncertain arrays are authoritative.
   */
  synthesis?: string;
  /**
   * Model identifiers (provider/model format).
   *
   * @minItems 2
   */
  models_used: [string, string, ...string[]];
  /**
   * ISO 8601 date of the model roster snapshot.
   */
  roster_version?: string;
  /**
   * SHA-256 hash of the sorted models_used array.
   */
  roster_hash?: string;
  /**
   * Deliberation process template used.
   */
  process_template: string;
  /**
   * Total tokens consumed across all rounds and models.
   */
  total_tokens?: number;
  /**
   * Total API cost in US cents.
   */
  total_cost_cents?: number;
  /**
   * Source documents with content hashes for freshness validation.
   */
  sources?: {
    uri: string;
    title?: string;
    content_hash: string;
    ingested_at: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Primary source URL (backwards compatibility).
   */
  source_url?: string;
  /**
   * Primary source title (backwards compatibility).
   */
  source_title?: string;
  /**
   * Current lifecycle state.
   */
  status: 'active' | 'stale' | 'superseded';
  /**
   * ISO 8601 datetime after which this KU should be considered potentially stale.
   */
  fresh_until: string;
  /**
   * Expected rate of change for this knowledge domain.
   */
  volatility?: 'stable' | 'evolving' | 'volatile';
  /**
   * ID of the KU this KU replaces.
   */
  supersedes?: string | null;
  /**
   * ID of a parent KU from which this question was derived.
   */
  parent_ku_id?: string | null;
  /**
   * ISO 8601 datetime of publication.
   */
  published_at?: string;
  /**
   * Aggregate Ed25519 signature over the receipt chain hash.
   */
  receipt_sig: string;
  /**
   * Key identifier for the signing key.
   */
  receipt_kid: string;
  /**
   * SHA-256 hash of the chained per-round receipt hashes.
   */
  receipt_hash: string;
  /**
   * Typed relations to other Knowledge Units.
   */
  relations?: {
    target_ku_id: string;
    relation: 'supports' | 'contradicts' | 'refines' | 'extends' | 'depends_on';
    claims?: string[];
    [k: string]: unknown | undefined;
  }[];
}
