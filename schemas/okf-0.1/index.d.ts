/* eslint-disable */

/**
 * JSON graph representation of an Open Knowledge Format (OKF) bundle. Produced by the `okf graph` command.
 */
export interface OKFKnowledgeGraph {
  /**
   * Schema version of this OKF graph format.
   */
  version: '0.1';
  /**
   * UTC timestamp when the graph was generated.
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
 * Index-driven navigation tree reflecting SPEC §6 directory indexes (and synthetic listings when index.md is missing). Present only when the graph was produced with --nav / includeNav. Producer contract: root node has kind "dir" and id ""; kind "dir" always includes body; empty group/orphans nodes are never emitted; directories never appear in nodes[].
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
   * The concept type from frontmatter (e.g. 'BigQuery Table', 'Reference').
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
   * Timestamp from frontmatter.
   */
  timestamp?: string;
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
