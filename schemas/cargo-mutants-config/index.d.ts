/* eslint-disable */

/**
 * Choice of tool to use to run tests.
 */
export type TestTool = 'cargo' | 'nextest';

/**
 * cargo-mutants configuration, read by default from `.cargo/mutants.toml`.
 *
 * See <https://mutants.rs/>.
 */
export interface CargoMutantsConfig {
  /**
   * Pass extra args to every cargo invocation.
   */
  additional_cargo_args?: string[];
  /**
   * Pass extra args to cargo test.
   */
  additional_cargo_test_args?: string[];
  /**
   * Build timeout multiplier, relative to the baseline 'cargo build'.
   */
  build_timeout_multiplier?: number | null;
  /**
   * Pass `--cap-lints` to rustc.
   */
  cap_lints?: boolean;
  /**
   * Copy `.git` and other VCS directories to the build directory.
   */
  copy_vcs?: boolean | null;
  /**
   * Generate these error values from functions returning Result.
   */
  error_values?: string[];
  /**
   * Generate mutants from source files matching these globs.
   */
  examine_globs?: string[];
  /**
   * Examine only mutants matching these regexps.
   */
  examine_re?: string[];
  /**
   * Exclude mutants from source files matching these globs.
   */
  exclude_globs?: string[];
  /**
   * Exclude mutants from source files matches these regexps.
   */
  exclude_re?: string[];
  /**
   * Minimum test timeout, in seconds, as a floor on the autoset value.
   */
  minimum_test_timeout?: number | null;
  /**
   * Output directory.
   */
  output?: string | null;
  /**
   * Cargo profile.
   */
  profile?: string | null;
  /**
   * Skip calls to functions or methods with these names.
   *
   * This is combined with values from the --skip-calls argument.
   */
  skip_calls?: string[];
  /**
   * Use built-in defaults for `skip_calls` in addition to any explicit values.
   */
  skip_calls_defaults?: boolean | null;
  /**
   * Run tests from these packages for all mutants.
   */
  test_package?: string[];
  /**
   * Choice of test tool: cargo or nextest.
   */
  test_tool?: TestTool | null;
  /**
   * Run tests from all packages in the workspace, not just the mutated package.
   *
   * Overrides `test_package`.
   */
  test_workspace?: boolean | null;
  /**
   * Timeout multiplier, relative to the baseline 'cargo test'.
   */
  timeout_multiplier?: number | null;
  [k: string]: unknown | undefined;
}
