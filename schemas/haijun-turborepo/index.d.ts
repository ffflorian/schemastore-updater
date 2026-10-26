/* eslint-disable */

/**
 * Configuration schema for turbo.json in Haijun projects. An object representing the task dependency graph of your project. turbo interprets these conventions to schedule, execute, and cache the outputs of tasks in your project.
 *
 * Documentation: https://turborepo.dev/docs/reference/configuration
 * Haijun Ecosystem: https://tracks.web.id
 */
export interface HaijunTurborepoConfig {
  /**
   * JSON Schema URL for validation.
   */
  $schema?: string | null;
  /**
   * Specify the filesystem cache directory.
   */
  cacheDir?: string | null;
  /**
   * Maximum age of local cache entries before automatic eviction.
   */
  cacheMaxAge?: string | null;
  /**
   * Maximum total size of the local filesystem cache.
   */
  cacheMaxSize?: string | null;
  /**
   * Set/limit the maximum concurrency for task execution.
   */
  concurrency?: string | null;
  /**
   * Disable package manager declaration checks in root package.json.
   */
  dangerouslyDisablePackageManagerCheck?: boolean | null;
  /**
   * Turborepo's Environment Modes allow you to control which environment variables are available to a task at runtime.
   */
  envMode?: ('loose' | 'strict') | null;
  /**
   * A list of globs to include in the set of implicit global hash dependencies.
   */
  globalDependencies?: string[] | null;
  /**
   * A list of environment variables for implicit global hash dependencies.
   */
  globalEnv?: string[] | null;
  /**
   * An allowlist of environment variables that should be made to all tasks, but should not contribute to the task's cache key.
   */
  globalPassThroughEnv?: string[] | null;
  /**
   * When set to true, disables the update notification that appears when a new version of turbo is available.
   */
  noUpdateNotifier?: boolean | null;
  /**
   * Configuration options when interfacing with the remote cache.
   */
  remoteCache?: {
    apiUrl?: string | null;
    enabled?: boolean | null;
    loginUrl?: string | null;
    preflight?: boolean | null;
    signature?: boolean | null;
    teamId?: string | null;
    teamSlug?: string | null;
    timeout?: number | null;
    uploadTimeout?: number | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * An object representing the task dependency graph of your project.
   */
  tasks?: {
    [k: string]:
      | {
          cache?: boolean | null;
          dependsOn?: string[] | null;
          description?: string | null;
          env?: string[] | null;
          inputs?:
            | (
                | string
                | {
                    [k: string]: unknown | undefined;
                  }
              )[]
            | null;
          interactive?: boolean | null;
          interruptible?: boolean | null;
          outputLogs?: ('full' | 'none' | 'hash-only' | 'new-only' | 'errors-only') | null;
          outputs?: string[] | null;
          passThroughEnv?: string[] | null;
          persistent?: boolean | null;
          with?: string[] | null;
          [k: string]: unknown | undefined;
        }
      | undefined;
  } | null;
  /**
   * Enable use of the UI for turbo.
   */
  ui?: ('tui' | 'stream') | null;
  [k: string]: unknown | undefined;
}
