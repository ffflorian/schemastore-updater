/* eslint-disable */

/**
 * JSON schema for pytest configuration options under `[tool.pytest]` in `pyproject.toml`.
 */
export type HttpsJsonSchemastoreOrgPartialPytestJson = LegacyConfig | Config;
/**
 * The `ini_options` table is used as a bridge between the existing `pytest.ini` configuration system and future configuration formats. `pytest.ini` takes precedence over `[tool.pytest.ini_options]` in `pyproject.toml`.
 */
export type BridgeConfigurationOptionsForPytestIniFile = IniOptionsPytest & IniOptionsAsyncio;
/**
 * Direct key configuration with proper TOML types (pytest >=9)
 * https://docs.pytest.org/en/stable/reference/reference.html#configuration-options
 */
export type Config = ConfigOptionsPytest & ConfigOptionsAsyncio;

/**
 * @deprecated
 * Legacy configuration using ini_options table (pytest <9)
 */
export interface LegacyConfig {
  ini_options: BridgeConfigurationOptionsForPytestIniFile;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 */
export interface IniOptionsPytest {
  /**
   * Add the specified OPTS to the set of command line arguments as if they had been specified by the user.
   */
  addopts?: string[] | string;
  /**
   * Sets the directory where the cache plugin's content is stored.
   */
  cache_dir?: string;
  /**
   * Settings this to false will make pytest collect classes/functions from test files _only_ if they are defined in that file (as opposed to imported there).
   */
  collect_imported_tests?: ('true' | 'false') | boolean;
  /**
   * Controls if pytest should attempt to identify namespace packages when collecting Python modules.
   */
  consider_namespace_packages?: ('true' | 'false') | boolean;
  /**
   * Sets console output style during test execution.
   */
  console_output_style?: 'classic' | 'progress' | 'progress-even-when-capture-no' | 'count' | 'times';
  /**
   * pytest by default escapes any non-ascii characters used in unicode strings for the parametrization because it has several downsides. If however you would like to use unicode strings in parametrization and see them in the terminal as is (non-escaped), use this option in your configuration file
   */
  disable_test_id_escaping_and_forfeit_all_rights_to_community_support?: ('true' | 'false') | boolean;
  /**
   * Default encoding to use to decode text files with docstrings.
   */
  doctest_encoding?: string;
  /**
   * One or more doctest flag names from the standard doctest module.
   */
  doctest_optionflags?: string[] | string;
  /**
   * Allows to pick the action for empty parametersets in parameterization.
   */
  empty_parameter_set_mark?: 'skip' | 'xfail' | 'fail_at_collect';
  /**
   * Enables the pytest_assertion_pass hook. Make sure to delete any previously generated .pyc cache files.
   */
  enable_assertion_pass_hook?: ('true' | 'false') | boolean;
  /**
   * Exit the pytest process after the per-test timeout is reached by passing exit=True to the faulthandler.dump_traceback_later() function. This is particularly useful to avoid wasting CI resources for test suites that are prone to putting the main Python interpreter into a deadlock state.
   */
  faulthandler_exit_on_timeout?: ('true' | 'false') | boolean;
  /**
   * Dumps the tracebacks of all threads if a test takes longer than X seconds to run (including fixture setup and teardown). Implemented using the faulthandler.dump_traceback_later() function, so all caveats there apply.
   */
  faulthandler_timeout?: string | number;
  /**
   * Sets a list of filters and actions that should be taken for matched warnings. By default all warnings emitted during the test session will be displayed in a summary at the end of the test session.
   */
  filterwarnings?: string[] | string;
  /**
   * Configures how durations are recorded into the JUnit XML report:
   */
  junit_duration_report?: 'total' | 'call';
  /**
   * Configures the format of the generated JUnit XML file.
   */
  junit_family?: 'legacy' | 'xunit1' | 'xunit2';
  /**
   * If junit_logging is enabled, configures if the captured output should be written to the JUnit XML file for passing tests.
   */
  junit_log_passing_tests?: ('true' | 'false') | boolean;
  /**
   * Configures if captured output should be written to the JUnit XML file.
   */
  junit_logging?: 'no' | 'log' | 'system-out' | 'system-err' | 'out-err' | 'all';
  /**
   * To set the name of the root test suite xml item, you can configure the junit_suite_name option in your config file.
   */
  junit_suite_name?: string;
  /**
   * Allow selective auto-indentation of multiline log messages.
   */
  log_auto_indent?: ('true' | 'false' | 'On' | 'Off') | string | number;
  /**
   * Enable log display during test run (also known as "live logging").
   */
  log_cli?: ('true' | 'false') | boolean;
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for live logging.
   */
  log_cli_date_format?: string;
  /**
   * Sets a logging-compatible string used to format live logging messages.
   */
  log_cli_format?: string;
  /**
   * Sets the minimum log message level that should be captured for live logging. The integer value or the names of the levels can be used.
   */
  log_cli_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for logging capture.
   */
  log_date_format?: string;
  /**
   * Sets a file name relative to the current working directory where log messages should be written to, in addition to the other logging facilities that are active.
   */
  log_file?: string;
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for the logging file.
   */
  log_file_date_format?: string;
  /**
   * Sets a logging-compatible string used to format logging messages redirected to the logging file.
   */
  log_file_format?: string;
  /**
   * Sets the minimum log message level that should be captured for the logging file. The integer value or the names of the levels can be used.
   */
  log_file_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * Sets the mode that the logging file is opened with. The options are 'w' to recreate the file (the default) or 'a' to append to the file.
   */
  log_file_mode?: 'a' | 'w';
  /**
   * Sets a logging-compatible string used to format captured logging messages.
   */
  log_format?: string;
  /**
   * Sets the minimum log message level that should be captured for logging capture. The integer value or the names of the levels can be used.
   */
  log_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * When the strict_markers configuration option is set, only known markers - defined in code by core pytest or some plugin - are allowed. You can list additional markers in this setting to add them to the whitelist, in which case you probably want to set strict_markers to true to avoid future regressions.
   */
  markers?: string[] | string;
  /**
   * Specifies a minimal pytest version required for running tests.
   */
  minversion?: string;
  /**
   * Set the directory basename patterns to avoid when recursing for test discovery. The individual (fnmatch-style) patterns are applied to the basename of a directory to decide if to recurse into it.
   */
  norecursedirs?: string[] | string;
  /**
   * One or more name prefixes or glob-style patterns determining which classes are considered for test collection. Search for multiple glob patterns by adding a space between patterns. By default, pytest will consider any class prefixed with Test as a test collection.
   */
  python_classes?: string[] | string;
  /**
   * One or more Glob-style file patterns determining which python files are considered as test modules.
   */
  python_files?: string[] | string;
  /**
   * One or more name prefixes or glob-patterns determining which test functions and methods are considered tests. Search for multiple glob patterns by adding a space between patterns. By default, pytest will consider any function prefixed with test as a test.
   */
  python_functions?: string[] | string;
  /**
   * Sets list of directories that should be added to the python search path. Directories will be added to the head of sys.path. Similar to the PYTHONPATH environment variable, the directories will be included in where Python will look for imported modules. Paths are relative to the rootdir directory.
   */
  pythonpath?: string[] | string;
  /**
   * A list of plugins that must be present for pytest to run. Plugins can be listed with or without version specifiers directly following their name.
   */
  required_plugins?: string[] | string;
  /**
   * If set to true, enable 'strict mode', which enables a number of other strict options.
   */
  strict?: ('true' | 'false') | boolean;
  /**
   * If set to true, any warnings encountered while parsing the pytest section of the configuration file will raise errors.
   */
  strict_config?: ('true' | 'false') | boolean;
  /**
   * If set to true, markers not registered in the markers section of the configuration file will raise errors.
   */
  strict_markers?: ('true' | 'false') | boolean;
  /**
   * If set to true, pytest emits an error if it detects non-unique parameter set IDs. If not set (the default), pytest automatically handles this by adding 0, 1, … to duplicate IDs, making them unique.
   */
  strict_parametrization_ids?: ('true' | 'false') | boolean;
  /**
   * If set to true, tests marked with @pytest.mark.xfail that actually succeed will by default fail the test suite.
   */
  strict_xfail?: ('true' | 'false') | boolean;
  /**
   * Sets list of directories that should be searched for tests when no specific directories, files or test ids are given in the command line when executing pytest from the rootdir directory. File system paths may use shell-style wildcards, including the recursive ** pattern. Useful when all project tests are in a known location to speed up test collection and to avoid picking up undesired tests by accident.
   */
  testpaths?: string[] | string;
  /**
   * How many sessions should we keep the tmp_path directories, according to tmp_path_retention_policy.
   */
  tmp_path_retention_count?: string | number;
  /**
   * Controls which directories created by the tmp_path fixture are kept around, based on test outcome.
   */
  tmp_path_retention_policy?: 'all' | 'failed' | 'none';
  /**
   * Controls maximum number of characters to truncate assertion message contents. Setting value to 0 disables the character limit for truncation.
   */
  truncation_limit_chars?: string | number;
  /**
   * Controls maximum number of linesto truncate assertion message contents. Setting value to 0 disables the lines limit for truncation.
   */
  truncation_limit_lines?: string | number;
  /**
   * List of fixtures that will be applied to all test functions; this is semantically the same to apply the @pytest.mark.usefixtures marker to all test functions.
   */
  usefixtures?: string[] | string;
  /**
   * Set a verbosity level specifically for assertion related output, overriding the application wide level.
   */
  verbosity_assertions?: string | number | 'auto';
  /**
   * Set the verbosity level specifically for passed subtests. A value of 1 or higher will show output for passed subtests (failed subtests are always reported). Passed subtests output can be suppressed with the value 0, which overwrites the -v command-line option.
   */
  verbosity_subtests?: string | number | 'auto';
  /**
   * Set a verbosity level specifically for test case execution related output, overriding the application wide level.
   */
  verbosity_test_cases?: string | number | 'auto';
  /**
   * @deprecated
   * DEPRECATED. Alias for strict_xfail. If true, test suite will fail if a test marked with `@pytest.mark.xfail` unexpectedly passes.
   */
  xfail_strict?: ('true' | 'false') | boolean;
  [k: string]: unknown | undefined;
}
/**
 * @deprecated
 * Configuration options for pytest-asyncio.
 * https://pytest-asyncio.readthedocs.io/en/latest/reference/configuration.html
 */
export interface IniOptionsAsyncio {
  /**
   * Default event loop scope of asynchronous fixtures. When this configuration option is unset, it defaults to the fixture scope. In future versions of pytest-asyncio, the value will default to function when unset
   */
  asyncio_default_fixture_loop_scope?: 'function' | 'class' | 'module' | 'package' | 'session';
  /**
   * Default event loop scope of asynchronous tests. When this configuration option is unset, it default to function scope
   */
  asyncio_default_test_loop_scope?: 'function' | 'class' | 'module' | 'package' | 'session';
  /**
   * Enables asyncio debug mode for the default event loop used by asynchronous tests and fixtures.
   */
  asyncio_debug?: ('true' | 'false') | boolean;
  /**
   * Sets the asyncio mode for pytest-asyncio.
   */
  asyncio_mode?: ('auto' | 'strict') & string;
  [k: string]: unknown | undefined;
}
export interface ConfigOptionsPytest {
  /**
   * Add the specified OPTS to the set of command line arguments as if they had been specified by the user.
   */
  addopts?: string[];
  /**
   * Sets the directory where the cache plugin’s content is stored.
   */
  cache_dir?: string;
  /**
   * Settings this to false will make pytest collect classes/functions from test files _only_ if they are defined in that file (as opposed to imported there).
   */
  collect_imported_tests?: boolean;
  /**
   * Controls if pytest should attempt to identify namespace packages when collecting Python modules.
   */
  consider_namespace_packages?: boolean;
  /**
   * Sets console output style during test execution.
   */
  console_output_style?: 'classic' | 'progress' | 'progress-even-when-capture-no' | 'count' | 'times';
  /**
   * pytest by default escapes any non-ascii characters used in unicode strings for the parametrization because it has several downsides. If however you would like to use unicode strings in parametrization and see them in the terminal as is (non-escaped), use this option in your configuration file
   */
  disable_test_id_escaping_and_forfeit_all_rights_to_community_support?: boolean;
  /**
   * Default encoding to use to decode text files with docstrings.
   */
  doctest_encoding?: string;
  /**
   * One or more doctest flag names from the standard doctest module.
   */
  doctest_optionflags?: string[];
  /**
   * Allows to pick the action for empty parametersets in parameterization.
   */
  empty_parameter_set_mark?: 'skip' | 'xfail' | 'fail_at_collect';
  /**
   * Enables the pytest_assertion_pass hook. Make sure to delete any previously generated .pyc cache files.
   */
  enable_assertion_pass_hook?: boolean;
  /**
   * Exit the pytest process after the per-test timeout is reached by passing exit=True to the faulthandler.dump_traceback_later() function. This is particularly useful to avoid wasting CI resources for test suites that are prone to putting the main Python interpreter into a deadlock state.
   */
  faulthandler_exit_on_timeout?: boolean;
  /**
   * Dumps the tracebacks of all threads if a test takes longer than X seconds to run (including fixture setup and teardown). Implemented using the faulthandler.dump_traceback_later() function, so all caveats there apply.
   */
  faulthandler_timeout?: number;
  /**
   * Sets a list of filters and actions that should be taken for matched warnings. By default all warnings emitted during the test session will be displayed in a summary at the end of the test session.
   */
  filterwarnings?: string[];
  /**
   * Configures how durations are recorded into the JUnit XML report:
   */
  junit_duration_report?: 'total' | 'call';
  /**
   * Configures the format of the generated JUnit XML file.
   */
  junit_family?: 'legacy' | 'xunit1' | 'xunit2';
  /**
   * If junit_logging is enabled, configures if the captured output should be written to the JUnit XML file for passing tests.
   */
  junit_log_passing_tests?: boolean;
  /**
   * Configures if captured output should be written to the JUnit XML file.
   */
  junit_logging?: 'no' | 'log' | 'system-out' | 'system-err' | 'out-err' | 'all';
  /**
   * To set the name of the root test suite xml item, you can configure the junit_suite_name option in your config file.
   */
  junit_suite_name?: string;
  /**
   * Allow selective auto-indentation of multiline log messages.
   */
  log_auto_indent?: boolean | number | ('On' | 'Off');
  /**
   * Enable log display during test run (also known as “live logging”).
   */
  log_cli?: boolean;
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for live logging.
   */
  log_cli_date_format?: string;
  /**
   * Sets a logging-compatible string used to format live logging messages.
   */
  log_cli_format?: string;
  /**
   * Sets the minimum log message level that should be captured for live logging. The integer value or the names of the levels can be used.
   */
  log_cli_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for logging capture.
   */
  log_date_format?: string;
  /**
   * Sets a file name relative to the current working directory where log messages should be written to, in addition to the other logging facilities that are active.
   */
  log_file?: string;
  /**
   * Sets a time.strftime()-compatible string that will be used when formatting dates for the logging file.
   */
  log_file_date_format?: string;
  /**
   * Sets a logging-compatible string used to format logging messages redirected to the logging file.
   */
  log_file_format?: string;
  /**
   * Sets the minimum log message level that should be captured for the logging file. The integer value or the names of the levels can be used.
   */
  log_file_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * Sets the mode that the logging file is opened with. The options are 'w' to recreate the file (the default) or 'a' to append to the file.
   */
  log_file_mode?: 'a' | 'w';
  /**
   * Sets a logging-compatible string used to format captured logging messages.
   */
  log_format?: string;
  /**
   * Sets the minimum log message level that should be captured for logging capture. The integer value or the names of the levels can be used.
   */
  log_level?: number | ('CRITICAL' | 'ERROR' | 'WARNING' | 'INFO' | 'DEBUG' | 'NOTSET') | ('FATAL' | 'WARN');
  /**
   * When the strict_markers configuration option is set, only known markers - defined in code by core pytest or some plugin - are allowed. You can list additional markers in this setting to add them to the whitelist, in which case you probably want to set strict_markers to true to avoid future regressions.
   */
  markers?: string[];
  /**
   * Specifies a minimal pytest version required for running tests.
   */
  minversion?: string;
  /**
   * Set the directory basename patterns to avoid when recursing for test discovery. The individual (fnmatch-style) patterns are applied to the basename of a directory to decide if to recurse into it.
   */
  norecursedirs?: string[];
  /**
   * One or more name prefixes or glob-style patterns determining which classes are considered for test collection. Search for multiple glob patterns by adding a space between patterns. By default, pytest will consider any class prefixed with Test as a test collection.
   */
  python_classes?: string[];
  /**
   * One or more Glob-style file patterns determining which python files are considered as test modules.
   */
  python_files?: string[];
  /**
   * One or more name prefixes or glob-patterns determining which test functions and methods are considered tests. Search for multiple glob patterns by adding a space between patterns. By default, pytest will consider any function prefixed with test as a test.
   */
  python_functions?: string[];
  /**
   * Sets list of directories that should be added to the python search path. Directories will be added to the head of sys.path. Similar to the PYTHONPATH environment variable, the directories will be included in where Python will look for imported modules. Paths are relative to the rootdir directory.
   */
  pythonpath?: string[];
  /**
   * A list of plugins that must be present for pytest to run. Plugins can be listed with or without version specifiers directly following their name.
   */
  required_plugins?: string[];
  /**
   * If set to true, enable 'strict mode', which enables a number of other strict options.
   */
  strict?: boolean;
  /**
   * If set to true, any warnings encountered while parsing the pytest section of the configuration file will raise errors.
   */
  strict_config?: boolean;
  /**
   * If set to true, markers not registered in the markers section of the configuration file will raise errors.
   */
  strict_markers?: boolean;
  /**
   * If set to true, pytest emits an error if it detects non-unique parameter set IDs. If not set (the default), pytest automatically handles this by adding 0, 1, … to duplicate IDs, making them unique.
   */
  strict_parametrization_ids?: boolean;
  /**
   * If set to true, tests marked with @pytest.mark.xfail that actually succeed will by default fail the test suite.
   */
  strict_xfail?: boolean;
  /**
   * Sets list of directories that should be searched for tests when no specific directories, files or test ids are given in the command line when executing pytest from the rootdir directory. File system paths may use shell-style wildcards, including the recursive ** pattern. Useful when all project tests are in a known location to speed up test collection and to avoid picking up undesired tests by accident.
   */
  testpaths?: string[];
  /**
   * How many sessions should we keep the tmp_path directories, according to tmp_path_retention_policy.
   */
  tmp_path_retention_count?: string;
  /**
   * Controls which directories created by the tmp_path fixture are kept around, based on test outcome.
   */
  tmp_path_retention_policy?: 'all' | 'failed' | 'none';
  /**
   * Controls maximum number of characters to truncate assertion message contents. Setting value to 0 disables the character limit for truncation.
   */
  truncation_limit_chars?: number;
  /**
   * Controls maximum number of linesto truncate assertion message contents. Setting value to 0 disables the lines limit for truncation.
   */
  truncation_limit_lines?: number;
  /**
   * List of fixtures that will be applied to all test functions; this is semantically the same to apply the @pytest.mark.usefixtures marker to all test functions.
   */
  usefixtures?: string[];
  /**
   * Set a verbosity level specifically for assertion related output, overriding the application wide level.
   */
  verbosity_assertions?: string | 'auto';
  /**
   * Set the verbosity level specifically for passed subtests. A value of 1 or higher will show output for passed subtests (failed subtests are always reported). Passed subtests output can be suppressed with the value 0, which overwrites the -v command-line option.
   */
  verbosity_subtests?: number | 'auto';
  /**
   * Set a verbosity level specifically for test case execution related output, overriding the application wide level.
   */
  verbosity_test_cases?: number | 'auto';
  /**
   * @deprecated
   * DEPRECATED. Alias for strict_xfail. If true, test suite will fail if a test marked with `@pytest.mark.xfail` unexpectedly passes.
   */
  xfail_strict?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Configuration options for pytest-asyncio.
 * https://pytest-asyncio.readthedocs.io/en/latest/reference/configuration.html
 */
export interface ConfigOptionsAsyncio {
  /**
   * Default event loop scope of asynchronous fixtures. When this configuration option is unset, it defaults to the fixture scope. In future versions of pytest-asyncio, the value will default to function when unset
   */
  asyncio_default_fixture_loop_scope?: 'function' | 'class' | 'module' | 'package' | 'session';
  /**
   * Default event loop scope of asynchronous tests. When this configuration option is unset, it default to function scope
   */
  asyncio_default_test_loop_scope?: 'function' | 'class' | 'module' | 'package' | 'session';
  /**
   * Enables asyncio debug mode for the default event loop used by asynchronous tests and fixtures.
   */
  asyncio_debug?: boolean;
  /**
   * Sets the asyncio mode for pytest-asyncio.
   */
  asyncio_mode?: ('auto' | 'strict') & string;
  [k: string]: unknown | undefined;
}
