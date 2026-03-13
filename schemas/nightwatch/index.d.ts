/* eslint-disable */

export interface HttpsJsonSchemastoreOrgNightwatchJson {
  /**
   * Location(s) where custom commands will be loaded from.
   */
  custom_commands_path?: null | string | string[];
  /**
   * Location(s) where custom assertions will be loaded from.
   */
  custom_assertions_path?: null | string | string[];
  /**
   * Location(s) where page object files will be loaded from.
   */
  page_objects_path?: null | string | unknown[];
  /**
   * Location of an external globals module which will be loaded and made available to the test as a property globals on the main client instance.
   */
  globals_path?: null | string;
  /**
   * An object which will be made available on the main test api, throughout the test execution
   */
  globals?: {
    /**
     * This controls whether to abort the test execution when an assertion failed and skip the rest. It's being used in waitFor commands and expect assertions
     */
    abortOnAssertionFailure?: boolean;
    /**
     * This controls whether to abort the test execution when an element cannot be located; an error is logged in all cases, but this also enables skipping the rest of the testcase; It's being used in element commands such as .click() or .getText()
     */
    abortOnElementLocateError?: boolean;
    /**
     * This will overwrite the default polling interval (currently 500ms) for waitFor commands and expect assertions that use retry
     */
    waitForConditionPollInterval?: number;
    /**
     * Default timeout value in milliseconds for waitFor commands and implicit waitFor value for expect assertions
     */
    waitForConditionTimeout?: number;
    /**
     * This will cause waitFor commands on elements to throw an error if multiple elements are found using the given locate strategy and selector
     */
    throwOnMultipleElementsReturned?: boolean;
    /**
     * By default a warning is printed if multiple elements are found using the given locate strategy and selector; set this to true to suppress those warnings
     */
    suppressWarningsOnMultipleElementsReturned?: boolean;
    /**
     * Controls the timeout value for async hooks. Expects the done() callback to be invoked within this time or an error is thrown
     */
    asyncHookTimeout?: number;
    /**
     * Controls the timeout value for when running async unit tests. Expects the done() callback to be invoked within this time or an error is thrown
     */
    unitTestsTimeout?: number;
    /**
     * Controls the timeout value for when executing the global async reporter. Expects the done() callback to be invoked within this time or an error is thrown
     */
    customReporterCallbackTimeout?: number;
    /**
     * Automatically retrying failed assertions - You can tell Nightwatch to automatically retry failed assertions until a given timeout is reached, before the test runner gives up and fails the test.
     */
    retryAssertionTimeout?: number;
    reporter?: unknown;
    [k: string]: unknown | undefined;
  };
  /**
   * Configuration settings for the dotenv module - a zero-dependency module that loads environment variables from a .env file into process.env. More details on https://www.npmjs.com/package/dotenv
   */
  dotenv?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Persist the same globals object between runs or have a (deep) copy of it per each test; this can be useful when persisting data between test suites is needed, such as a cookie or session information
   */
  persist_globals?: boolean;
  /**
   * The location where the JUnit XML report files will be saved. Set this to false if you want to disable XML reporting
   */
  output_folder?: string;
  /**
   * A string or array of folders (excluding subfolders) where the tests are located.
   */
  src_folders?: null | string | string[];
  /**
   * Used when running in parallel to determine if the output should be collected and displayed at the end.
   */
  live_output?: boolean;
  /**
   * Used to disable colored output in the terminal.
   */
  disable_colors?: boolean;
  /**
   * Used when running in parallel to specify the delay (in milliseconds) between starting the child processes
   */
  parallel_process_delay?: number;
  /**
   * An object containing Selenium Server related configuration options
   */
  selenium?: {
    start_process?: boolean;
    cli_args?:
      | {
          [k: string]: unknown | undefined;
        }
      | unknown[];
    server_path?: null | string;
    log_path?: string | boolean;
    port?: unknown;
    check_process_delay?: number;
    max_status_poll_tries?: number;
    status_poll_interval?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Whether or not to automatically start the Selenium/WebDriver session. If running unit tests, this should be set tot false.
   */
  start_session?: boolean;
  /**
   * End the session automatically when the test is being terminated, usually after a failed assertion.
   */
  end_session_on_fail?: boolean;
  /**
   * Skip the remaining test cases from the current test suite, when one test case fails.
   */
  skip_testcases_on_fail?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Whether or not to run individual test files in parallel.
   */
  test_workers?:
    | boolean
    | {
        enabled?: boolean;
        /**
         * Automatically compute the number of workers based on CPU cores with "auto" or manually specify the number of workers
         */
        workers?: string | number;
        /**
         * Pass node arguments to individual workers (all of the process.execArgv using "auto" or selectively pass node arguments via ["--inspect"])
         */
        node_options?: string | string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Specifies which test runner to use: default|mocha
   */
  test_runner?: string;
  /**
   * Defines options used to connect to the WebDriver/Selenium server
   */
  webdriver?: {
    start_process?: boolean;
    cli_args?:
      | {
          [k: string]: unknown | undefined;
        }
      | unknown[];
    server_path?: null | string;
    log_path?: string;
    use_legacy_jsonwire?: unknown;
    /**
     * Time to wait (in ms) before starting to check the Webdriver server is up and running
     */
    check_process_delay?: number;
    /**
     * Maximum number of ping status check attempts before returning a timeout error
     */
    max_status_poll_tries?: number;
    /**
     * Interval (in ms) to use between status ping checks when checking if the Webdriver server is up and running
     */
    status_poll_interval?: number;
    /**
     * The entire time (in ms) to wait for the Node.js process to be created and running (default is 2 min), including spawning the child process and checking the status
     */
    process_create_timeout?: number;
    host?: unknown;
    port?: unknown;
    ssl?: unknown;
    proxy?: unknown;
    timeout_options?: {
      timeout?: unknown;
      retry_attempts?: unknown;
      [k: string]: unknown | undefined;
    };
    default_path_prefix?: unknown;
    username?: unknown;
    access_key?: unknown;
    [k: string]: unknown | undefined;
  };
  test_settings?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A url which can be used later in the tests as the main url to load.
   */
  launch_url?: string;
  /**
   * set to false if you want to show the extended http traffic command logs from the WebDriver server.
   */
  silent?: boolean;
  /**
   * Used to disable terminal output completely.
   */
  output?: boolean;
  /**
   * Set this to false if you'd like to only see the test case name displayed and pass/fail status.
   */
  detailed_output?: boolean;
  /**
   * Set this to true if you'd like to see timestamps next to the logging output
   */
  output_timestamp?: boolean;
  /**
   * Set this to true if you'd like to not display errors during the execution of the test (they are shown at the end always).
   */
  disable_error_log?: boolean;
  /**
   * Take error and failure screenshots during test execution
   */
  screenshots?: boolean;
  /**
   * Used to enable showing the Base64 image data in the (verbose) log when taking screenshots.
   */
  log_screenshot_data?: boolean;
  desiredCapabilities?: {
    browserName?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * An array of folders or file patterns to be skipped (relative to the main source folder).
   */
  exclude?: null | string[];
  /**
   * Folder or file pattern to be used when loading the tests. Files that don't match this pattern will be ignored.
   */
  filter?: null | string;
  /**
   * Skip a group of tests (a subfolder); can be a list of comma-separated values (no space)
   */
  skipgroup?: string;
  sync_test_names?: boolean;
  /**
   * Skip tests by tag name; can be a list of comma-separated values (no space)
   */
  skiptags?: string;
  /**
   * Use xpath as the default locator strategy
   */
  use_xpath?: boolean;
  parallel_mode?: boolean;
  report_prefix?: string;
  unit_tests_mode?: boolean;
  default_reporter?: string;
  [k: string]: unknown | undefined;
}
