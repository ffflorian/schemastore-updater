/* eslint-disable */

/**
 * JSON graph representation of an Open Knowledge Format (OKF) v0.2 bundle. Produced by the `okf graph` command.
 */
export interface OKFKnowledgeGraph {
  /**
   * Schema version of this OKF graph format.
   */
  version: '0.2';
  generated?: ActorEvent;
  /**
   * UTC timestamp when the graph was generated. Same instant as generated.at.
   */
  timestamp?: string;
  /**
   * Optional object containing custom properties passed via -p when generating the graph. Only present when such properties were provided.
   */
  bundle?: {
    [k: string]: unknown | undefined;
  };
  nav?: NavNode;
  /**
   * List of concept nodes in the knowledge graph.
   */
  nodes: Node[];
  /**
   * Directed edges representing links between concepts.
   */
  edges: Edge[];
  [k: string]: unknown | undefined;
}
/**
 * An actor and optional timestamp (generated.by / verified[].by). Actor convention: <producer>/<version>, human:<id>, process:<id>.
 */
export interface ActorEvent {
  /**
   * Actor that performed the action.
   */
  by?: string;
  /**
   * When the action occurred.
   */
  at?: string;
  [k: string]: unknown | undefined;
}
/**
 * Index-driven navigation tree reflecting SPEC §8 directory indexes (and synthetic listings when index.md is missing). Present only when the graph was produced with --nav / includeNav. Producer contract: root node has kind "dir" and id ""; kind "dir" always includes body; empty group/orphans nodes are never emitted; directories never appear in nodes[].
 */
export interface NavNode {
  /**
   * group/orphans are non-routeable grouping headers; dir and concept are navigable.
   */
  kind: 'group' | 'dir' | 'concept' | 'orphans';
  /**
   * Concept id, or directory path relative to bundle root (empty string for root). Omitted for group and orphans.
   */
  id?: string;
  /**
   * Display label (index link text, section heading, or derived title).
   */
  label?: string;
  /**
   * Optional short description from index entry or concept frontmatter.
   */
  description?: string;
  /**
   * Index markdown for kind=dir (authored after optional root frontmatter strip, or synthetic listing). Parallel to node.body.
   */
  body?: string;
  /**
   * True when body/children were synthesized because index.md was missing.
   */
  synthetic?: boolean;
  /**
   * Child nav nodes (groups, dirs, concepts, trailing orphans).
   */
  children?: NavNode1[];
  [k: string]: unknown | undefined;
}
/**
 * A node in the index-driven navigation tree. Directories are not concepts (reserved index.md).
 */
export interface NavNode1 {
  /**
   * group/orphans are non-routeable grouping headers; dir and concept are navigable.
   */
  kind: 'group' | 'dir' | 'concept' | 'orphans';
  /**
   * Concept id, or directory path relative to bundle root (empty string for root). Omitted for group and orphans.
   */
  id?: string;
  /**
   * Display label (index link text, section heading, or derived title).
   */
  label?: string;
  /**
   * Optional short description from index entry or concept frontmatter.
   */
  description?: string;
  /**
   * Index markdown for kind=dir (authored after optional root frontmatter strip, or synthetic listing). Parallel to node.body.
   */
  body?: string;
  /**
   * True when body/children were synthesized because index.md was missing.
   */
  synthetic?: boolean;
  /**
   * Child nav nodes (groups, dirs, concepts, trailing orphans).
   */
  children?: NavNode1[];
  [k: string]: unknown | undefined;
}
/**
 * A knowledge concept node.
 */
export interface Node {
  /**
   * Unique identifier for the concept (path without .md extension).
   */
  id: string;
  /**
   * Short unique slug for the node (e.g. 'f', 'fc', 'fl'). Computed for compact/URL-friendly references (e.g. #fragments). Stable for a given set of concepts.
   */
  slug?: string;
  /**
   * The concept type from frontmatter (e.g. 'BigQuery Table', 'Reference', 'Attested Computation').
   */
  type: string;
  /**
   * Display title from frontmatter.
   */
  title?: string;
  /**
   * Short description from frontmatter.
   */
  description?: string;
  /**
   * Canonical URI for the underlying resource, if any.
   */
  resource?: string;
  /**
   * Tags from frontmatter.
   */
  tags?: string[];
  /**
   * Last meaningful content change: generated.at when present, otherwise the legacy timestamp field.
   */
  timestamp?: string;
  generated?: ActorEvent1;
  /**
   * Normalized list of verification events. A bare mapping in YAML is lifted to a one-element list.
   */
  verified?: ActorEvent2[];
  /**
   * Provenance sources from frontmatter, or synthesized from a legacy # Citations heading.
   */
  sources?: SourceEntry[];
  usageWindow?: UsageWindow1;
  /**
   * Lifecycle status. Omitted when absent (consumers treat absent as stable).
   */
  status?: 'draft' | 'stable' | 'deprecated';
  /**
   * Absolute date (YYYY-MM-DD). Content is stale on or after this day.
   */
  staleAfter?: string;
  /**
   * Derived at generate time: today >= staleAfter. Only present when staleAfter is set.
   */
  stale?: boolean;
  /**
   * Derived from verified per OKF §5.3. Always emitted.
   */
  trustTier?: 'unverified' | 'machine-confirmed' | 'human-reviewed';
  /**
   * Attested Computation runtime (e.g. bigquery, dbt, python).
   */
  runtime?: string;
  parameters?: ComputationParameter[];
  /**
   * Optional path to the computation file (when not inlined under # Computation).
   */
  computation?: string;
  executor?: ExecutorContract;
  attester?: AttesterContract;
  /**
   * Full markdown body (only present when --body / includeBody was used).
   */
  body?: string;
  /**
   * Optional display label (falls back to derived values).
   */
  label?: string;
  /**
   * Relative path to the source .md file within the bundle.
   */
  path?: string;
  /**
   * Total number of connected edges (in + out).
   */
  degree?: number;
  /**
   * Number of incoming edges.
   */
  in?: number;
  /**
   * Number of outgoing edges.
   */
  out?: number;
  /**
   * PageRank weight (0-1).
   */
  weight?: number;
  /**
   * Rank order by weight.
   */
  rank?: number;
  [k: string]: unknown | undefined;
}
/**
 * How the current concept content was produced (frontmatter generated).
 */
export interface ActorEvent1 {
  /**
   * Actor that performed the action.
   */
  by?: string;
  /**
   * When the action occurred.
   */
  at?: string;
  [k: string]: unknown | undefined;
}
/**
 * An actor and optional timestamp (generated.by / verified[].by). Actor convention: <producer>/<version>, human:<id>, process:<id>.
 */
export interface ActorEvent2 {
  /**
   * Actor that performed the action.
   */
  by?: string;
  /**
   * When the action occurred.
   */
  at?: string;
  [k: string]: unknown | undefined;
}
/**
 * A provenance source (frontmatter sources[] or a legacy # Citations link).
 */
export interface SourceEntry {
  id?: string;
  resource?: string;
  title?: string;
  author?: string;
  usageCount?: number;
  lastModified?: string;
  usageWindow?: UsageWindow;
  [k: string]: unknown | undefined;
}
/**
 * Date range framing usage_count signals.
 */
export interface UsageWindow {
  from?: string;
  to?: string;
  [k: string]: unknown | undefined;
}
/**
 * Date range framing usage_count signals.
 */
export interface UsageWindow1 {
  from?: string;
  to?: string;
  [k: string]: unknown | undefined;
}
export interface ComputationParameter {
  name?: string;
  type?: string;
  required?: boolean;
  [k: string]: unknown | undefined;
}
export interface ExecutorContract {
  resource?: string;
  receipt?: string[];
  [k: string]: unknown | undefined;
}
export interface AttesterContract {
  resource?: string;
  [k: string]: unknown | undefined;
}
/**
 * A directed link from one concept to another.
 */
export interface Edge {
  /**
   * Source node id.
   */
  source: string;
  /**
   * Target node id.
   */
  target: string;
  /**
   * Short stable identifier for the edge.
   */
  id: string;
  /**
   * Human-readable label for the edge (often link text or target title).
   */
  label?: string;
  [k: string]: unknown | undefined;
}
