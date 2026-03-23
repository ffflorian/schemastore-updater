/* eslint-disable */

/**
 * Schema version. Use 1 for current specification.
 */
export type Version = number;
/**
 * Path within the repository where the application resides (used in monorepo setups)
 */
export type AppRoot = string;
/**
 * Custom HTTP response headers (legacy; consider using customHttp.yml instead)
 */
export type CustomHeaders = CustomHeaderEntry[];

/**
 * Build settings for AWS Amplify Console. See https://docs.aws.amazon.com/amplify/latest/userguide/build-settings.html
 */
export interface AWSAmplifyBuildSpecificationAmplifyYml {
  version?: Version;
  appRoot?: AppRoot;
  env?: Env;
  backend?: Backend;
  frontend?: Frontend;
  test?: Test;
  /**
   * List of applications for monorepo support
   */
  applications?: Application[];
  customHeaders?: CustomHeaders;
  [k: string]: unknown | undefined;
}
/**
 * Environment configuration
 */
export interface Env {
  /**
   * Key-value pairs of environment variables
   */
  variables?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Backend build configuration
 */
export interface Backend {
  phases?: BuildPhases;
  [k: string]: unknown | undefined;
}
/**
 * Build phases with preBuild, build, and postBuild steps
 */
export interface BuildPhases {
  preBuild?: Phase;
  build?: Phase1;
  postBuild?: Phase2;
  [k: string]: unknown | undefined;
}
/**
 * Commands to run before the build
 */
export interface Phase {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Build commands
 */
export interface Phase1 {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Commands to run after the build
 */
export interface Phase2 {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Frontend build configuration
 */
export interface Frontend {
  /**
   * Path to run install/build from (lowercase variant)
   */
  buildpath?: string;
  /**
   * Path to run install/build from (camelCase variant)
   */
  buildPath?: string;
  phases?: BuildPhases;
  artifacts?: FrontendArtifacts;
  cache?: Cache;
  [k: string]: unknown | undefined;
}
/**
 * Build output artifacts configuration
 */
export interface FrontendArtifacts {
  /**
   * Files to include in the build artifact (e.g., '** /*' for all files)
   */
  files?: string[];
  /**
   * Whether to flatten the directory structure of artifacts
   */
  'discard-paths'?: boolean | string;
  /**
   * Directory containing the build output
   */
  baseDirectory?: string;
  [k: string]: unknown | undefined;
}
/**
 * Cache configuration for speeding up builds
 */
export interface Cache {
  /**
   * Paths to cache between builds (must be relative to project root)
   */
  paths?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Test build configuration
 */
export interface Test {
  phases?: TestPhases;
  artifacts?: TestArtifacts;
  [k: string]: unknown | undefined;
}
/**
 * Test phases with preTest, test, and postTest steps
 */
export interface TestPhases {
  preTest?: Phase3;
  test?: Phase4;
  postTest?: Phase5;
  [k: string]: unknown | undefined;
}
/**
 * Commands to run before tests
 */
export interface Phase3 {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Test commands
 */
export interface Phase4 {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Commands to run after tests
 */
export interface Phase5 {
  /**
   * Shell commands to execute in this phase
   */
  commands?: string[];
  /**
   * Runtime versions to use (e.g., nodejs: 18)
   */
  'runtime-versions'?: {
    [k: string]: (string | number) | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Test output artifacts configuration
 */
export interface TestArtifacts {
  /**
   * Test output files to capture (e.g., screenshots, videos)
   */
  files?: string[];
  /**
   * Path to the test report configuration file
   */
  configFilePath?: string;
  /**
   * Directory containing the test output
   */
  baseDirectory?: string;
  [k: string]: unknown | undefined;
}
/**
 * A single application configuration within a monorepo
 */
export interface Application {
  appRoot: AppRoot;
  env?: Env;
  backend?: Backend;
  frontend?: Frontend;
  test?: Test;
  customHeaders?: CustomHeaders;
  [k: string]: unknown | undefined;
}
/**
 * A custom HTTP response header rule
 */
export interface CustomHeaderEntry {
  /**
   * URL path pattern to match
   */
  pattern: string;
  /**
   * Headers to apply for matching requests
   */
  headers: {
    /**
     * Header name
     */
    key: string;
    /**
     * Header value
     */
    value: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
