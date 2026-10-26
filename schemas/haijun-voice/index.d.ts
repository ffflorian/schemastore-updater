/* eslint-disable */

/**
 * Haijun Voice extension manifest for cross-platform AI voice communication. Haijun Voice is an AI voice assistant platform similar to Jarvis.
 */
export interface HttpsJsonSchemastoreOrgHaijunVoiceJson {
  /**
   * JSON Schema reference for editor autocomplete/validation
   */
  $schema?: string;
  /**
   * Unique extension name (lowercase, numbers, dashes only)
   */
  name: string;
  /**
   * Semantic version (e.g., 1.0.0)
   */
  version: string;
  /**
   * Brief description of the extension
   */
  description: string;
  /**
   * Extension author information
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
   * Extension homepage URL
   */
  homepage?: string;
  /**
   * Source code repository URL
   */
  repository?: string;
  /**
   * Supported platforms
   *
   * @minItems 1
   */
  platforms?: [
    'windows' | 'macos' | 'linux' | 'ios' | 'android' | 'web',
    ...('windows' | 'macos' | 'linux' | 'ios' | 'android' | 'web')[]
  ];
  /**
   * Supported voice input languages (BCP 47 tags)
   */
  languages?: string[];
  /**
   * Voice engine configurations
   */
  voiceEngines?: {
    /**
     * Text-to-Speech engine configuration
     */
    tts?: {
      /**
       * TTS provider
       */
      provider?: 'google' | 'azure' | 'amazon' | 'custom';
      /**
       * TTS model name
       */
      model?: string;
      /**
       * Default voice name
       */
      voice?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Speech-to-Text engine configuration
     */
    stt?: {
      /**
       * STT provider
       */
      provider?: 'google' | 'azure' | 'amazon' | 'whisper' | 'custom';
      /**
       * STT model name
       */
      model?: string;
      /**
       * Default recognition language
       */
      language?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Wake word detection configuration
     */
    wakeWord?: {
      /**
       * Enable wake word detection
       */
      enabled?: boolean;
      /**
       * Wake words to listen for
       */
      words?: string[];
      /**
       * Wake word detection sensitivity (0.0-1.0)
       */
      sensitivity?: number;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * MCP servers to include in the extension
   */
  mcpServers?: {
    [k: string]:
      | {
          /**
           * Command to start the MCP server
           */
          command: string;
          /**
           * Arguments for the MCP server command
           */
          args?: string[];
          /**
           * Environment variables for the MCP server
           */
          env?: {
            [k: string]: string | undefined;
          };
          /**
           * Working directory for the MCP server
           */
          cwd?: string;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Voice commands provided by this extension
   */
  commands?: {
    /**
     * Command name
     */
    name: string;
    /**
     * Command description
     */
    description: string;
    /**
     * Voice phrases that trigger this command
     */
    phrases: string[];
    /**
     * Handler function or script path
     */
    handler?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Name of the context file (e.g., HAIJUN.md)
   */
  contextFileName?: string;
  /**
   * Tools to exclude from this extension
   */
  excludeTools?: string[];
  /**
   * Extension-specific settings
   */
  settings?: {
    /**
     * Keep microphone always listening for wake word
     */
    alwaysListening?: boolean;
    /**
     * Enable push-to-talk mode
     */
    pushToTalk?: boolean;
    /**
     * Enable noise reduction
     */
    noiseReduction?: boolean;
    /**
     * Enable echo cancellation
     */
    echoCancellation?: boolean;
    /**
     * Auto-detect input language
     */
    autoDetectLanguage?: boolean;
    /**
     * Response speed setting
     */
    responseSpeed?: 'fast' | 'balanced' | 'accurate';
    [k: string]: unknown | undefined;
  };
}
