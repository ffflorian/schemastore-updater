/* eslint-disable */

/**
 * Tracks are Markdown-based knowledge modules for AI agents. They provide context, instructions, and capabilities to AI systems.
 */
export interface HttpsJsonSchemastoreOrgTracksJson {
  /**
   * JSON Schema reference for editor autocomplete/validation
   */
  $schema?: string;
  /**
   * Unique track identifier
   */
  name: string;
  /**
   * Semantic version (e.g., 1.0.0)
   */
  version: string;
  /**
   * Brief description of what this track provides
   */
  description?: string;
  /**
   * Track author information
   */
  author?: {
    /**
     * Author name
     */
    name: string;
    /**
     * Author email
     */
    email?: string;
    /**
     * Author website or GitHub profile
     */
    url?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * SPDX license identifier
   */
  license?: string;
  /**
   * Track homepage or documentation URL
   */
  homepage?: string;
  /**
   * Source code repository URL
   */
  repository?: string;
  /**
   * Track type
   */
  type?: 'knowledge' | 'instruction' | 'capability' | 'workflow' | 'integration' | 'template';
  /**
   * Track category for organization
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
   * Tags for discovery and categorization
   *
   * @maxItems 20
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
    | [string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [string, string, string, string, string, string, string, string, string, string, string, string, string, string]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ]
    | [
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string,
        string
      ];
  /**
   * Files included in this track
   */
  files?: {
    /**
     * Main entry point file (TRACK.md)
     */
    main?: string;
    /**
     * README file path
     */
    readme?: string;
    /**
     * Context/instructions file for AI
     */
    context?: string;
    /**
     * Example files directory
     */
    examples?: string;
    /**
     * Asset files directory
     */
    assets?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Other tracks required by this track
   */
  dependencies?: {
    /**
     * Track name
     */
    name: string;
    /**
     * Version constraint (semver range)
     */
    version?: string;
    /**
     * Whether this dependency is optional
     */
    optional?: boolean;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Patterns that trigger this track to be loaded
   */
  triggers?: {
    /**
     * File patterns that trigger this track
     */
    filePatterns?: string[];
    /**
     * Keywords that trigger this track
     */
    keywords?: string[];
    /**
     * Programming languages that trigger this track
     */
    languages?: string[];
    /**
     * Frameworks that trigger this track
     */
    frameworks?: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Tools provided by this track
   */
  tools?: {
    /**
     * Tool name
     */
    name: string;
    /**
     * Tool description
     */
    description: string;
    /**
     * Shell command to execute
     */
    command?: string;
    /**
     * Script file path
     */
    script?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Prompt templates provided by this track
   */
  prompts?: {
    /**
     * Prompt name
     */
    name: string;
    /**
     * Prompt description
     */
    description: string;
    /**
     * Prompt template with {{variable}} placeholders
     */
    template: string;
    /**
     * Template variables
     */
    variables?: {
      /**
       * Variable name
       */
      name: string;
      /**
       * Variable description
       */
      description?: string;
      /**
       * Whether variable is required
       */
      required?: boolean;
      /**
       * Default value
       */
      default?: string;
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  }[];
  /**
   * Additional metadata
   */
  metadata?: {
    /**
     * Creation date (ISO 8601)
     */
    created?: string;
    /**
     * Last update date (ISO 8601)
     */
    updated?: string;
    /**
     * Download count
     */
    downloads?: number;
    /**
     * Average rating (0-5)
     */
    rating?: number;
    [k: string]: unknown | undefined;
  };
}
