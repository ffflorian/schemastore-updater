/* eslint-disable */

export interface HttpsJsonSchemastoreOrgOneChangelogSchema01Json {
  /**
   * Short description of change
   */
  name: string;
  /**
   * Jira issue key
   */
  jira?: string;
  tag: 'PATCH' | 'MINOR' | 'MAJOR';
  /**
   * Indicates changes in front (app) apis
   */
  apiChange?: boolean;
  /**
   * Indicates changes in integration apis
   */
  integrationApiChange?: boolean;
  /**
   * Detailed description of change
   */
  description?: string;
  [k: string]: unknown | undefined;
}
