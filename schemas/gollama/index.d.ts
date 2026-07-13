/* eslint-disable */

/**
 * Configuration for gollama, a terminal user interface for managing Ollama models.
 * https://github.com/sammcj/gollama#configuration
 */
export interface GollamaConfiguration {
  /**
   * Columns to show in the model list.
   */
  columns?: string[];
  /**
   * API key sent to Ollama-compatible endpoints.
   */
  ollama_api_key?: string;
  /**
   * Ollama API URL.
   */
  ollama_api_url?: string;
  /**
   * Directory containing Ollama model files.
   */
  ollama_models_dir?: string;
  /**
   * Logging level.
   */
  log_level?: string;
  /**
   * Path to the log file.
   */
  log_file_path?: string;
  /**
   * Default model sort order.
   */
  sort_order?: string;
  /**
   * String to strip from model names for display.
   */
  strip_string?: string;
  /**
   * Editor command used when opening files.
   */
  editor?: string;
  /**
   * Theme name.
   */
  theme?: string;
  /**
   * Docker container name used when managing models through Docker.
   */
  docker_container?: string;
  [k: string]: unknown | undefined;
}
