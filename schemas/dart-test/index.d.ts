/* eslint-disable */

/**
 * Configuration for Dart tests
 */
export type DartTestYaml = TestConfiguration & {
  include?: string;
  paths?: string[];
  /**
   * Filename pattern that the test runner uses to find test files in directories.
   */
  filename?: string;
  /**
   * Only run tests whose names match the given regular expressions A test's name must match all regular expressions in names in order to be run.
   */
  names?: string[];
  /**
   * This field causes the runner to only run tests whose names contain the given strings. A test's name must contain all strings in order to be run.
   */
  plain_names?: string[];
  /**
   * This field causes the runner to only run tests whose tags match the given boolean selector.
   */
  include_tags?: string;
  /**
   * This field causes the runner to only run tests whose tags match the given boolean selector. This takes precedence over include_tags
   */
  exclude_tags?: string;
  /**
   * The platforms on which tests should be run.
   */
  platforms?: string[];
  /**
   * The default number of test suites to run in parallel. This defaults to approximately half the number of processors on the current machine. Setting it to 1 will disable concurrency
   */
  concurrency?: number;
  /**
   * Indicates that the test runner should pause for debugging after each test suite is loaded but before its tests are executed. This disables concurrency and timeouts.
   */
  pause_after_load?: boolean;
  /**
   * Run tests even if they're marked as skipped.
   */
  run_skipped?: boolean;
  /**
   * This field indicates the default reporter to use.
   */
  reporter?: string;
  /**
   * Specifies additional reporters that will write their output to a file rather than stdout
   */
  file_reporters?: {
    [k: string]: string | undefined;
  };
  fold_stack_frames?: FoldStackFrameOptions;
  /**
   * This field specifies the path of the HTML template to be used for tests run in an HTML environment.
   */
  custom_html_template_path?: string;
  presets?: {
    [k: string]: RunnerConfiguration | undefined;
  };
  /**
   * Commonly used in a preset, it can be used to enable present inheritance by adding the configuration from another preset.
   */
  add_presets?: string[];
  /**
   * Applies test or runner options when a specific operating system is used
   */
  on_os?: {
    [k: string]: RunnerConfiguration | undefined;
  };
  override_platforms?: {
    [k: string]:
      | {
          settings?: SettingsForBrowsersAndNodeJs;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  define_platforms?: {
    [k: string]:
      | {
          name?: string;
          extends?: string;
          settings?: SettingsForBrowsersAndNodeJs;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  [k: string]: unknown | undefined;
};
export type Timeout = NoTimeout | ExactTimeout | MultiplicativeTimeout;
/**
 * Indicates that tests should never time out.
 */
export type NoTimeout = 'none';
/**
 * Exact timeout duration for a test.
 */
export type ExactTimeout = string;
/**
 * Timeout is applied as a multiple of the default value (30 seconds)
 */
export type MultiplicativeTimeout = string;
/**
 * This field controls whether or not traces caused by errors are trimmed to remove internal stack frames. This includes frames from the Dart core libraries, the stack_trace package, and the test package itself.
 */
export type RemoveInternalStackFrames = boolean;
/**
 * Disabling stack trace chaining will improve performance for heavily async code at the cost of debuggability.
 */
export type WhetherStackTracesAreChained = boolean;
/**
 * Whether or not stack traces caused by errors while running Dart compiled to JS are converted back to Dart style.
 */
export type ConvertJSTracesToDartTraces = boolean;
export type Skip = SkipTheTestIfTrue | ReasonForSkippingTheTest;
export type SkipTheTestIfTrue = boolean;
export type ReasonForSkippingTheTest = string;
export type _TestConfigurationInner = TestConfiguration1 & {
  /**
   * A preset used in a test configuration can contain test configuration.
   */
  presets?: {
    [k: string]: TestConfiguration1 | undefined;
  };
  /**
   * Applies test options when a specific operating system is used
   */
  on_os?: {
    [k: string]: TestConfiguration1 | undefined;
  };
  [k: string]: unknown | undefined;
};
export type FoldStackFrameOptions =
  | {
      except?: string[];
    }
  | {
      only?: string[];
    };
export type RunnerConfiguration = TestConfiguration & {
  include?: string;
  paths?: string[];
  /**
   * Filename pattern that the test runner uses to find test files in directories.
   */
  filename?: string;
  /**
   * Only run tests whose names match the given regular expressions A test's name must match all regular expressions in names in order to be run.
   */
  names?: string[];
  /**
   * This field causes the runner to only run tests whose names contain the given strings. A test's name must contain all strings in order to be run.
   */
  plain_names?: string[];
  /**
   * This field causes the runner to only run tests whose tags match the given boolean selector.
   */
  include_tags?: string;
  /**
   * This field causes the runner to only run tests whose tags match the given boolean selector. This takes precedence over include_tags
   */
  exclude_tags?: string;
  /**
   * The platforms on which tests should be run.
   */
  platforms?: string[];
  /**
   * The default number of test suites to run in parallel. This defaults to approximately half the number of processors on the current machine. Setting it to 1 will disable concurrency
   */
  concurrency?: number;
  /**
   * Indicates that the test runner should pause for debugging after each test suite is loaded but before its tests are executed. This disables concurrency and timeouts.
   */
  pause_after_load?: boolean;
  /**
   * Run tests even if they're marked as skipped.
   */
  run_skipped?: boolean;
  /**
   * This field indicates the default reporter to use.
   */
  reporter?: string;
  /**
   * Specifies additional reporters that will write their output to a file rather than stdout
   */
  file_reporters?: {
    [k: string]: string | undefined;
  };
  fold_stack_frames?: FoldStackFrameOptions;
  /**
   * This field specifies the path of the HTML template to be used for tests run in an HTML environment.
   */
  custom_html_template_path?: string;
  presets?: {
    [k: string]: RunnerConfiguration | undefined;
  };
  /**
   * Commonly used in a preset, it can be used to enable present inheritance by adding the configuration from another preset.
   */
  add_presets?: string[];
  /**
   * Applies test or runner options when a specific operating system is used
   */
  on_os?: {
    [k: string]: RunnerConfiguration | undefined;
  };
  override_platforms?: {
    [k: string]:
      | {
          settings?: SettingsForBrowsersAndNodeJs;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  define_platforms?: {
    [k: string]:
      | {
          name?: string;
          extends?: string;
          settings?: SettingsForBrowsersAndNodeJs;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  [k: string]: unknown | undefined;
};
/**
 * The arguments are parsed in the same way as the POSIX shell
 */
export type ExtraArgumentsToTheExecutable = string;
/**
 * The executable to run. Can be a plain basename, an absolute path or a relative path on Windows.
 */
export type Executable = string;
export type RunTheBrowserInHeadlessMode = boolean;

export interface TestConfiguration {
  timeout?: Timeout;
  verbose_trace?: RemoveInternalStackFrames;
  chain_stack_traces?: WhetherStackTracesAreChained;
  js_trace?: ConvertJSTracesToDartTraces;
  skip?: Skip;
  /**
   * This field controls how many times a test is retried upon failure.
   */
  retry?: number;
  test_on?: string;
  tags?: {
    [k: string]: _TestConfigurationInner | undefined;
  };
  /**
   * Adds additional tags. This is usually used in a tag definition to enable tag inheritance.
   */
  add_tags?: string[];
  on_platform?: {
    [k: string]: _TestConfigurationInner | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface TestConfiguration1 {
  timeout?: Timeout;
  verbose_trace?: RemoveInternalStackFrames;
  chain_stack_traces?: WhetherStackTracesAreChained;
  js_trace?: ConvertJSTracesToDartTraces;
  skip?: Skip;
  /**
   * This field controls how many times a test is retried upon failure.
   */
  retry?: number;
  test_on?: string;
  tags?: {
    [k: string]: _TestConfigurationInner | undefined;
  };
  /**
   * Adds additional tags. This is usually used in a tag definition to enable tag inheritance.
   */
  add_tags?: string[];
  on_platform?: {
    [k: string]: _TestConfigurationInner | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface SettingsForBrowsersAndNodeJs {
  arguments?: ExtraArgumentsToTheExecutable;
  executable?:
    | Executable
    | {
        linux?: Executable;
        mac_os?: Executable;
        windows?: Executable;
      };
  headless?: RunTheBrowserInHeadlessMode;
}
