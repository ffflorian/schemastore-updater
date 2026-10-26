/* eslint-disable */

/**
 * Haijun Box plugin manifest for extending Haijun Box CLI capabilities. Haijun Box is a CLI desktop AI assistant.
 */
export interface HttpsJsonSchemastoreOrgHaijunBoxJson {
  /**
   * JSON Schema reference for editor autocomplete/validation
   */
  $schema?: string;
  /**
   * Manifest schema version
   */
  schema_version: 'v1';
  /**
   * Human-readable name of the plugin (shown in plugin list)
   */
  name_for_human: string;
  /**
   * Unique identifier used by the AI model to reference this plugin
   */
  name_for_model: string;
  /**
   * Human-readable description of what the plugin does
   */
  description_for_human: string;
  /**
   * Description used by the AI model to understand when and how to use this plugin
   */
  description_for_model: string;
  /**
   * Authentication configuration for the plugin API
   */
  auth: {
    /**
     * Authentication type
     */
    type: 'none' | 'service_http' | 'user_http' | 'oauth';
    /**
     * OAuth authorization type (when type is oauth)
     */
    authorization_type?: 'bearer' | 'basic';
    /**
     * OAuth authorization URL
     */
    authorization_url?: string;
    /**
     * OAuth client URL
     */
    client_url?: string;
    /**
     * OAuth scopes
     */
    scope?: string;
    /**
     * Verification tokens for webhook authentication
     */
    verification_tokens?: {
      [k: string]: string | undefined;
    };
    /**
     * Additional authentication instructions
     */
    instructions?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * API configuration for the plugin
   */
  api: {
    /**
     * API specification type
     */
    type: 'openapi';
    /**
     * URL to the OpenAPI specification (JSON or YAML)
     */
    url: string;
    /**
     * Whether the API requires user authentication
     */
    has_user_authentication?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * URL to the plugin logo image (recommended: 512x512 PNG)
   */
  logo_url?: string;
  /**
   * Contact email for support or feedback
   */
  contact_email?: string;
  /**
   * URL to legal information (terms of service, privacy policy)
   */
  legal_info_url?: string;
  /**
   * Maximum number of instances of this plugin that can be active simultaneously
   */
  max_instances?: number;
  /**
   * Whether the plugin is enabled by default when installed
   */
  enabled_by_default?: boolean;
  /**
   * Categories for plugin discovery and organization
   */
  categories?: (
    | 'productivity'
    | 'development'
    | 'communication'
    | 'data'
    | 'utilities'
    | 'entertainment'
    | 'education'
    | 'finance'
    | 'health'
    | 'other'
  )[];
  /**
   * Keywords for plugin discovery
   *
   * @maxItems 10
   */
  keywords?:
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
   * Tools provided by this plugin that the AI can use
   */
  tools?: {
    /**
     * Unique tool name (used in function calls)
     */
    name: string;
    /**
     * Tool description for the AI model
     */
    description: string;
    /**
     * Tool parameters in JSON Schema format
     */
    parameters?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  }[];
  /**
   * Other plugins required by this plugin
   */
  dependencies?: string[];
  /**
   * System permissions requested by this plugin
   */
  permissions?: ('file_read' | 'file_write' | 'network' | 'shell' | 'clipboard' | 'notification')[];
}
