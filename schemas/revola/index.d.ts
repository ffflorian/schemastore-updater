/* eslint-disable */

/**
 * Configuration file for Revola
 */
export interface RevolaConfiguration {
  /**
   * Path to the JSON schema for IDE autocompletion.
   */
  $schema?: string;
  /**
   * Controls the verbosity of Revola logging output.
   */
  logLevel?: 'trace' | 'debug' | 'info' | 'success' | 'warn' | 'error' | 'fatal' | 'silent';
  /**
   * Preset configuration allowing a single value or a unique array values.
   */
  preset?: ('node' | 'deno' | 'git') | ('node' | 'deno')[];
  /**
   * Configuration for versioning behavior.
   */
  version?: {
    /**
     * Determines how the next version is calculated.
     */
    strategy?: 'semver';
    /**
     * The default level to bump the version when using the "semver" strategy.
     */
    defaultBump?: string;
  };
  /**
   * Configuration for Git-related settings in Revola.
   */
  git?: {
    /**
     * If true, Revola will check for a clean working directory before performing versioning operations.
     */
    cleanWorkingDirectory?: boolean;
    /**
     * If true, Revola will check for an upstream branch and push to it by default when pushing new versions.
     */
    upstream?: boolean;
    /**
     * Overrides Git author identity ONLY for release commits (does not modify global Git config).
     */
    author?: {
      /**
       * Name to use for release commits.
       */
      name?: string;
      /**
       * Email to use for release commits.
       */
      email?: string;
    };
    /**
     * The branch on which to perform versioning operations.
     */
    targetBranch?: string;
    /**
     * If true, Revola will stage all changes before committing the new version.
     */
    add?: boolean;
    /**
     * If true, Revola will commit the new version.
     */
    commit?: boolean;
    commitMessage?: string;
    /**
     * If true, Revola will push the new version to the remote repository.
     */
    push?: boolean;
    /**
     * If true, Revola will create a Git tag for the new version (e.g: v1.2.3).
     */
    tag?: boolean;
    /**
     * Template for Git tag names.
     */
    tagFormat?: string;
    /**
     * The annotation to use for Git tags created by Revola.
     */
    tagAnnotation?: string;
    /**
     * If true, Revola will create a Git tag for major version releases (e.g: v1.2.3 -> v1).
     */
    tagMajor?: boolean;
    /**
     * If true, Revola will create a Git tag for minor version releases (e.g: v1.2.3 -> v1.2).
     */
    tagMinor?: boolean;
  };
  /**
   * npm publish configuration
   */
  npm?: {
    /**
     * Whether to publish to npm.
     */
    publish?: boolean;
    /**
     * The npm registry URL to publish to.
     */
    registry?: string;
    /**
     * Environment variable name that holds the registry auth token.
     */
    tokenRef?: string;
    /**
     * The package manager used to invoke the npm publish command.
     */
    packageManager?: 'npm' | 'pnpm' | 'yarn' | 'bun';
    /**
     * The dist-tag to publish under (e.g. latest, next, beta).
     */
    tag?: string;
    /**
     * Package access level on npm.
     */
    access?: 'public' | 'restricted';
    /**
     * Whether to publish with npm provenance (requires CI environment).
     */
    provenance?: boolean;
  };
  /**
   * jsr publish configuration
   */
  jsr?: {
    /**
     * Whether to publish to JSR.
     */
    publish?: boolean;
    /**
     * Additional arguments to pass to the JSR publish command.
     */
    publishArgs?: ('--allow-dirty' | '--allow-slow-types' | '--no-provenance')[];
    /**
     * Environment variable name that holds the registry auth token (e.g. "JSR_TOKEN").
     */
    tokenRef?: string;
    /**
     * The package manager used to invoke the JSR publish command.
     */
    packageManager?: 'deno' | 'npx';
  };
  /**
   * Changelog configuration
   */
  changelog?: {
    /**
     * Whether to generate/update the changelog.
     */
    enabled?: boolean;
    /**
     * Path to the changelog file.
     */
    file?: string;
    /**
     * Template for release title.
     */
    title?: string;
    /**
     * List of commit types to include in the changelog. If empty or not provided, all commit types are included. The order matters and determines how sections are organized in the final changelog.
     */
    includeTypes?: (
      | 'feat'
      | 'fix'
      | 'docs'
      | 'style'
      | 'refactor'
      | 'perf'
      | 'test'
      | 'build'
      | 'ci'
      | 'chore'
      | 'revert'
      | 'deps'
      | 'config'
      | 'security'
      | 'types'
      | 'lint'
      | 'format'
      | 'release'
      | 'meta'
      | 'infra'
      | 'hotfix'
      | 'version'
      | 'workflow'
      | 'package'
      | 'workspace'
      | 'api'
      | 'BREAKING CHANGE'
      | 'db'
      | 'data'
      | 'ui'
      | 'ux'
      | 'accessibility'
      | 'backend'
      | 'frontend'
      | 'logging'
      | 'monitoring'
      | 'stability'
      | 'optimization'
      | 'dx'
      | 'tooling'
      | 'scripts'
      | 'cleanup'
      | 'migration'
      | 'rollback'
    )[];
  };
  /**
   * Shell commands to run at various lifecycle stages. Each key is a lifecycle hook name and the value is the command(s) to run.
   */
  hooks?: {
    [k: string]: (string | [string, ...string[]]) | undefined;
  };
  /**
   * Defines plugins where each key is a plugin name and the value is its configuration object.
   */
  plugins?: {
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
}
