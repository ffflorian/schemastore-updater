/* eslint-disable */

export type SchemaForJasmineJSONConfigFile = RootItems & {
  env?: EnvItems;
  [k: string]: unknown | undefined;
} & EnvItems;

export interface RootItems {
  /**
   * Spec directory path relative to the current working dir when jasmine is executed.
   */
  spec_dir: string;
  /**
   * Array of filepaths (and globs) relative to spec_dir to include and exclude.
   */
  spec_files: string[];
  /**
   * Array of filepaths (and globs) relative to spec_dir to include before jasmine specs
   */
  helpers?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Configuration of the Jasmine environment
 */
export interface EnvItems {
  /**
   * Clean closures when a suite is done running (done by clearing the stored function reference). This prevents memory leaks, but you won't be able to run jasmine multiple times.
   */
  autoCleanClosure?: boolean;
  /**
   * Whether to fail the spec if it ran no expectations. By default a spec that ran no expectations is reported as passed. Setting this to true will report such spec as a failure.
   */
  failSpecWithNoExpectations?: boolean;
  /**
   * Whether or not reporters should hide disabled specs from their output. Currently only supported by Jasmine's HTMLReporter.
   */
  hideDisbaled?: boolean;
  /**
   * Whether to randomize spec execution order.
   */
  random?: boolean;
  /**
   * Seed to use as the basis of randomization. Null causes the seed to be determined randomly at the start of execution.
   */
  seed?: string | number | null;
  /**
   * Whether to stop execution of the suite after the first spec failure.
   */
  stopOnSpecFailure?: boolean;
  /**
   * Whether to cause specs to only have one expectation failure.
   */
  stopSpecOnExpectationFailure?: boolean;
  /**
   * Whether or not to issue warnings for certain deprecated functionality every time it's used. If not set or set to false, deprecation warnings for methods that tend to be called frequently will be issued only once or otherwise throttled to to prevent the suite output from being flooded with warnings.
   */
  verboseDeprication?: boolean;
  [k: string]: unknown | undefined;
}
