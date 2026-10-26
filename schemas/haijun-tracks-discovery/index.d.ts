/* eslint-disable */

/**
 * Discovery index for Haijun Tracks. Adapted from Agent Tracks Discovery 0.2.0 spec. Lists all published tracks with metadata, distribution URLs (TRACK.md), and integrity digests. Haijun Tracks are Markdown-based knowledge modules (TRACK.md) replacing TRACK.md.
 */
export interface HaijunTracksDiscoveryIndex {
  /**
   * JSON Schema URI for this discovery index (Haijun Tracks Discovery)
   */
  $schema?: string;
  /**
   * List of published Haijun Tracks (adapted from 'tracks' in agentskills.io spec). Each entry corresponds to a TRACK.md track.
   */
  tracks: {
    /**
     * Track slug / unique identifier (kebab-case). Original spec field 'name' for track; renamed for track. Must be unique within the index.
     */
    name: string;
    /**
     * Distribution type for the track. 'track-md' = TRACK.md fetched on demand (analogous to 'track-md'), 'archive' = packaged archive (ZIP/TAR) download.
     */
    type?: 'track-md' | 'archive';
    /**
     * Human-readable description of what the track does and when to use it. Adapted from track description (1-1024 chars recommended).
     */
    description: string;
    /**
     * URL to the track's TRACK.md file (for track-md) or archive file (for archive). Original spec used TRACK.md URL; adapted to TRACK.md. Typically hosted at /.well-known/haijun-tracks/<slug>/TRACK.md or /.well-known/agent-tracks/<slug>/TRACK.md
     */
    url: string;
    /**
     * Integrity digest for the track content (sha256 hash hex). Format: 'sha256:<hex>'. Allows agents to detect changes. Same as agentskills.io spec digest.
     */
    digest: string;
    /**
     * Track version (semver). Optional but recommended for Haijun registry.
     */
    version?: string;
    /**
     * SPDX license identifier for the track
     */
    license?: string;
    /**
     * Tags for track categorization and discovery (Haijun-specific extension)
     *
     * @maxItems 10
     */
    tags?:
      | []
      | [string]
      | [string, string]
      | [string, string, string]
      | [string, string, string, string]
      | [string, string, string, string, string]
      | [string, string, string, string, string, string]
      | [string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string]
      | [string, string, string, string, string, string, string, string, string, string];
    /**
     * Track author information (Haijun extension)
     */
    author?: {
      name: string;
      email?: string;
      url?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Track homepage or documentation URL
     */
    homepage?: string;
    /**
     * Source repository URL for the track
     */
    repository?: string;
    /**
     * Additional metadata for the track (Haijun extension)
     */
    metadata?: {
      /**
       * Human-readable display name
       */
      displayName?: string;
      /**
       * Track category
       */
      category?:
        | 'programming'
        | 'documentation'
        | 'data-science'
        | 'devops'
        | 'security'
        | 'ai-ml'
        | 'web'
        | 'mobile'
        | 'cloud'
        | 'database'
        | 'testing'
        | 'productivity'
        | 'communication'
        | 'other';
      /**
       * Creation date (ISO 8601)
       */
      created?: string;
      /**
       * Last update date (ISO 8601)
       */
      updated?: string;
      [k: string]: unknown | undefined;
    };
  }[];
  /**
   * Index-level metadata (Haijun extension, optional)
   */
  metadata?: {
    /**
     * Generation timestamp (ISO 8601)
     */
    generated?: string;
    /**
     * Publisher organization
     */
    publisher?: string;
    /**
     * Publisher URL (replaces agentskills.io publisher reference)
     */
    publisherUrl?: string;
    /**
     * Registry base URL for Haijun Tracks (replaces https://schemas.agentskills.io)
     */
    registry?: string;
    /**
     * Discovery index format version (mirrors 0.2.0 from agentskills.io)
     */
    version?: string;
    [k: string]: unknown | undefined;
  };
}
