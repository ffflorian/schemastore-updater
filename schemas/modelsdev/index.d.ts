/* eslint-disable */

export type StringSet = string[];

/**
 * Configuration for models, a terminal user interface and CLI for browsing AI models, benchmarks, coding agents, and provider statuses.
 * https://github.com/reyamira/models/wiki/Configuration
 */
export interface ModelsConfiguration {
  config_version?: number;
  agents?: {
    tracked?: StringSet;
    excluded?: StringSet;
    custom?: CustomAgent[];
    [k: string]: unknown | undefined;
  };
  cache?: {
    /**
     * GitHub cache time-to-live in seconds.
     */
    github_ttl_seconds?: number;
    [k: string]: unknown | undefined;
  };
  display?: {
    default_tab?: string;
    [k: string]: unknown | undefined;
  };
  status?: {
    tracked?: StringSet;
    [k: string]: unknown | undefined;
  };
  aliases?: {
    agents?: string;
    benchmarks?: string;
    status?: string;
    [k: string]: unknown | undefined;
  };
  benchmarks?: {
    /**
     * Visible benchmark metric columns keyed by data-source id.
     */
    columns?: {
      [k: string]: StringSet;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface CustomAgent {
  name: string;
  /**
   * GitHub repository in owner/name form.
   */
  repo: string;
  agent_type?: 'cli' | 'ide';
  binary?: string;
  version_command?: string[];
  [k: string]: unknown | undefined;
}
