/* eslint-disable */

/**
 * ODGS business-entity ontology graph for AI graph traversal.
 */
export interface ODGSOntologyGraph {
  meta?: {
    schema_version?: string;
    project_name: string;
    description?: string;
    urn_format?: string;
    [k: string]: unknown | undefined;
  };
  domains?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
      source_file?: string;
      urn_prefix: string;
      [k: string]: unknown | undefined;
    };
  };
  relationship_types?: {
    type: string;
    description?: string;
    [k: string]: unknown | undefined;
  }[];
  graph_edges: (
    | {
        comment: string;
        [k: string]: unknown | undefined;
      }
    | {
        link_id: string;
        source_urn: string;
        target_urn: string;
        relationship: string;
        [k: string]: unknown | undefined;
      }
  )[];
  [k: string]: unknown | undefined;
}
