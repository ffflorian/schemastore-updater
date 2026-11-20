/* eslint-disable */

export type Bool = boolean;
export type StringArray = string | string[];
export type Int = number;
export type String = string;

/**
 * A JSON schema describing a .mocharc.[json|yml|yaml] file
 */
export interface MochaJSConfigurationFileSchema {
  'allow-uncaught'?: Bool;
  'async-only'?: Bool;
  bail?: Bool;
  'check-leaks'?: Bool;
  delay?: Bool;
  exit?: Bool;
  'forbid-only'?: Bool;
  'forbid-pending'?: Bool;
  global?: StringArray;
  jobs?: Int;
  parallel?: Bool;
  retries?: Int;
  /**
   * Specify "slow" test threshold, in milliseconds or as a duration string like "75ms"
   * https://mochajs.org/running/cli/#--slow-ms--s-ms
   */
  slow?: Int | String;
  /**
   * Specify test timeout threshold, in milliseconds or as a duration string like "2s". 0 or false disables timeouts
   * https://mochajs.org/running/cli/#--timeout-ms--t-ms
   */
  timeout?: Int | String | false;
  ui?: String;
  color?: Bool;
  diff?: Bool;
  'full-trace'?: Bool;
  growl?: Bool;
  'inline-diffs'?: Bool;
  reporter?: String;
  'reporter-option'?: StringArray;
  config?: String;
  package?: String;
  extension?: StringArray;
  file?: StringArray;
  ignore?: StringArray;
  recursive?: Bool;
  require?: StringArray;
  sort?: Bool;
  watch?: Bool;
  'watch-files'?: StringArray;
  'watch-ignore'?: StringArray;
  fgrep?: String;
  grep?: String;
  invert?: Bool;
  spec?: StringArray;
  'enable-source-maps'?: Bool;
  /**
   * Clear the terminal before each run when watch is set
   */
  'clear-screen'?: boolean;
  /**
   * Report tests without executing them
   */
  'dry-run'?: boolean;
  /**
   * Report tests as failed when affected by hook failures (before/beforeEach)
   */
  'fail-hook-affected-tests'?: boolean;
  /**
   * Fail test run if no test(s) encountered
   */
  'fail-zero'?: boolean;
  /**
   * Node or V8 option (no leading "--")
   */
  'node-option'?: string | string[];
  /**
   * Do not fail the test run if tests failed
   */
  'pass-on-failing-test-suite'?: boolean;
  /**
   * Use POSIX and UNIX shell exit codes as Mocha's return value
   */
  'posix-exit-codes'?: boolean;
  [k: string]: unknown | undefined;
}
