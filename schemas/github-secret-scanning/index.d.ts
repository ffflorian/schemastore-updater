/* eslint-disable */

/**
 * Configuration for excluding paths from GitHub secret scanning alerts and push protection.
 */
export interface GitHubSecretScanningYml {
  /**
   * Paths and glob patterns to exclude from GitHub secret scanning. GitHub only uses the first 1,000 entries.
   *
   * @minItems 1
   * @maxItems 1000
   */
  'paths-ignore': [string, ...string[]];
}
