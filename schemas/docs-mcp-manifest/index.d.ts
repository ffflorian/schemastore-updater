/* eslint-disable */

/**
 * Docs MCP configuration file (.docs-mcp.json) that controls how documentation is chunked, tagged, and indexed for search.
 */
export interface HttpsJsonSchemastoreOrgDocsMcpManifestJson {
  /**
   * Key-value pairs attached to every chunk produced from this directory tree. Each key becomes a filterable taxonomy dimension exposed as an enum parameter on the search tool.
   */
  metadata?: {
    [k: string]: string | undefined;
  };
  /**
   * Per-file-pattern overrides for chunking strategy and metadata. Evaluated top-to-bottom; last match wins.
   */
  overrides?: {
    /**
     * Metadata key-value pairs merged with root metadata for matching files (override keys win). Each key becomes a filterable taxonomy dimension in the search API.
     */
    metadata?: {
      [k: string]: string | undefined;
    };
    /**
     * A glob pattern matched against file paths relative to the directory containing the manifest.
     */
    pattern: string;
    /**
     * Chunking strategy override for files matching this pattern. Replaces the root strategy entirely.
     */
    strategy?: {
      /**
       * The heading level at which to split markdown into chunks. 'h1' splits at top-level headings, 'h2'/'h3' at progressively finer granularity, and 'file' treats the entire file as one chunk.
       */
      chunk_by: 'h1' | 'h2' | 'h3' | 'file';
      /**
       * Maximum chunk size in characters. Chunks exceeding this limit are split at the next available boundary to prevent oversized results.
       */
      max_chunk_size?: number;
      /**
       * Minimum chunk size in characters. Trailing chunks smaller than this are merged into the preceding chunk to avoid fragments.
       */
      min_chunk_size?: number;
    };
  }[];
  /**
   * Default chunking strategy applied to all files in this directory tree unless overridden by a more specific rule.
   */
  strategy?: {
    /**
     * The heading level at which to split markdown into chunks. 'h1' splits at top-level headings, 'h2'/'h3' at progressively finer granularity, and 'file' treats the entire file as one chunk.
     */
    chunk_by: 'h1' | 'h2' | 'h3' | 'file';
    /**
     * Maximum chunk size in characters. Chunks exceeding this limit are split at the next available boundary to prevent oversized results.
     */
    max_chunk_size?: number;
    /**
     * Minimum chunk size in characters. Trailing chunks smaller than this are merged into the preceding chunk to avoid fragments.
     */
    min_chunk_size?: number;
  };
  /**
   * Schema version. Must be '1'.
   */
  version: '1';
}
