/* eslint-disable */

export interface HttpsJsonSchemastoreOrgJestJson {
  /**
   * Whether all imported modules in your tests should be mocked automatically. All modules used in your tests will have a replacement implementation, keeping the API surface.
   */
  automock?: boolean;
  /**
   * How many failures until jest stops running. Value of `true` is equivalent to 1.
   */
  bail?: boolean | number;
  /**
   * The directory where Jest should store its cached dependency information.
   */
  cacheDirectory?: string;
  /**
   * Whether to automatically clear mock calls and instances between every test.
   */
  clearMocks?: boolean;
  /**
   * Whether to collect coverage information while executing the test
   */
  collectCoverage?: boolean;
  /**
   * An array of glob patterns indicating a set of files for which coverage information should be collected.
   */
  collectCoverageFrom?: string[];
  /**
   * The directory where Jest should output its coverage files.
   */
  coverageDirectory?: string;
  /**
   * An array of regexp pattern strings that will be ignored when calculating coverage
   */
  coveragePathIgnorePatterns?: string[];
  /**
   * Indicates which provider should be used to instrument code for coverage.
   */
  coverageProvider?: 'babel' | 'v8';
  /**
   * A list of reporter names that Jest uses when writing coverage reports.
   */
  coverageReporters?: (
    | string
    | []
    | [string]
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ]
  )[];
  /**
   * An object that configures minimum threshold enforcement for coverage results.
   */
  coverageThreshold?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Enable the use of a custom dependency extractor.
   */
  dependencyExtractor?: string;
  /**
   * A custom label that is printed alongside a test while it is running.
   */
  displayName?:
    | string
    | {
        [k: string]: string | undefined;
      };
  /**
   * Whether calling deprecated APIs should throw an error.
   */
  errorOnDeprecated?: boolean;
  /**
   * Files extensions that Jest should treat as ESM.
   */
  extensionsToTreatAsEsm?: string[];
  /**
   * Customize the behavior of fake timers.
   */
  fakeTimers?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A list of regexp strings are added to code coverage; this overrides any previous ignored file patterns
   */
  forceCoverageMatch?: string[];
  /**
   * A set of global variables that need to be available in all test environments.
   */
  globals?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Use a custom global setup module to setup the global environment.
   */
  globalSetup?: string;
  /**
   * Use a custom global teardown module to teardown the global environment.
   */
  globalTeardown?: string;
  /**
   * Customize `jest-haste-map`, Jest's internal file crawler/cache system
   */
  haste?: {
    /**
     * Whether to hash functions using SHA1
     */
    computeSha1?: boolean;
    /**
     * The default platform
     */
    defaultPlatform?: string | null;
    /**
     * Whether to use Node's filesystem API instead of shelling out to `find`
     */
    forceNodeFilesystemAPI?: boolean;
    /**
     * Whether to follow symlinks when crawling the filesystem. This option cannot be used in projects that use watachman.
     */
    enableSymlinks?: boolean;
    /**
     * Path to a custom implementation of Haste.
     */
    hasteImplModulePath?: string;
    /**
     * A list of platforms to target.
     */
    platforms?: string[];
    /**
     * Whether to throw an error on module collision
     */
    throwOnModuleCollision?: boolean;
    /**
     * Path to a custom implementation of HasteMap.
     */
    hasteMapModulePath?: string;
    /**
     * Whether to retain all files, allowing e.g. search for tests in `node_modules`.
     */
    retainAllFiles?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
   * Whether to inject global variables into the global environment. Only supported if using the default `jest-circus` test runner.
   */
  injectGlobals?: boolean;
  /**
   * A number limiting the number of tests that are allowed to run at the same time when using `test.concurrent`. Any test above this limit will be queued and executed once a slot is released.
   */
  maxConcurrency?: number;
  /**
   * Specifies the maximum number of workers the worker-pool will spawn for running tests.
   */
  maxWorkers?: number | string;
  /**
   * An array of directory names to be searched recursively up from the requiring module's location.
   */
  moduleDirectories?: string[];
  /**
   * An array of file extensions your modules use.
   */
  moduleFileExtensions?: string[];
  /**
   * A map from regular expressions to module names that allow to stub out resources, like images or styles with a single module.
   */
  moduleNameMapper?: {
    [k: string]: unknown | undefined;
  };
  /**
   * An array of regexp pattern strings that are matched against all module paths before those paths are to be considered 'visible' to the module loader.
   */
  modulePathIgnorePatterns?: string[];
  /**
   * An array of directory names that should be used when resolving modules. This is an alternative API to `NODE_PATH`.
   */
  modulePaths?: string[];
  /**
   * Whether to use native OS notifications for test results. This requires the installation of the `node-notifier` package
   */
  notify?: boolean;
  /**
   * Specifies when notifications should be triggered.
   */
  notifyMode?: 'always' | 'failure' | 'success' | 'change' | 'success-change' | 'failure-change';
  /**
   * Print a warning indicating that there are probable open handles if Jest does not exit cleanly this number of milliseconds after it completes. Use `0` to disable the warning.
   */
  openHandlesTimeout?: number;
  /**
   * A preset that is used as a base for Jest's configuration.
   */
  preset?: string;
  /**
   * The path to a module that exports an object with a `format` method.
   */
  prettierPath?: string | null;
  /**
   * Jest will run tests in all of these specified projects at the same time.
   */
  projects?: string[];
  /**
   * Whether to randomize the order of the tests in a file.
   */
  randomize?: boolean;
  /**
   * A list of reporter names (and configuration) that Jest can use.
   */
  reporters?: (
    | string
    | []
    | [string]
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ]
  )[];
  /**
   * Automatically reset mock state before every test.
   */
  resetMocks?: boolean;
  /**
   * By default, each test file gets its own independent module registry. Setting this option to `true` resets the module registry before running each individual tes
   */
  resetModules?: boolean;
  /**
   * Use a custom resolver.
   */
  resolver?: string;
  /**
   * Automatically restore mock state and implementation before every test.
   */
  restoreMocks?: boolean;
  /**
   * The root directory that Jest should scan for tests and modules within.
   */
  rootDir?: string;
  /**
   * A list of paths to directories that Jest should use to search for files in.
   */
  roots?: string[];
  /**
   * The test environment that will be used for testing.
   */
  runner?: string;
  /**
   * @deprecated
   * DEPRECATED. Renamed to `sandboxInjectedGlobals` in Jest 28
   */
  extraGlobals?: {
    [k: string]: unknown | undefined;
  };
  /**
   * List of extra properties to be defined in the vm for faster lookups.
   */
  sandboxInjectedGlobals?: string[];
  /**
   * A list of paths to modules that run some code to configure or set up the testing environment.
   */
  setupFiles?: string[];
  /**
   * A list of paths to modules that run some code to configure or set up the testing framework before each test file in the suite is executed.
   */
  setupFilesAfterEnv?: string[];
  /**
   * Whether to print the seed in the test report summary.
   */
  showSeed?: boolean;
  /**
   * The number of seconds after which a test is considered as slow and reported as such in the results.
   */
  slowTestThreshold?: number;
  /**
   * Allows overriding specific snapshot formatting options documented in the `pretty-format readme`.
   */
  snapshotFormat?: {
    [k: string]: unknown | undefined;
  };
  /**
   * The path to a module that can resolve test<->snapshot path. This config option lets you customize where Jest stores snapshot files on disk.
   */
  snapshotResolver?: string;
  /**
   * A list of paths to snapshot serializer modules Jest should use for snapshot testing.
   */
  snapshotSerializers?: string[];
  /**
   * The test environment that will be used for testing.
   */
  testEnvironment?: string;
  /**
   * Options that will be passed to the `testEnvironment`.
   */
  testEnvironmentOptions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Exit code of `jest` command if the test run failed.
   */
  testFailureExitCode?: number;
  /**
   * The glob patterns Jest uses to detect test files.
   */
  testMatch?: string[];
  /**
   * An array of regexp pattern strings that are matched against all test paths before executing the test. If the test path matches any of the patterns, it will be skipped.
   */
  testPathIgnorePatterns?: string[];
  /**
   * The pattern or patterns Jest uses to detect test files.
   */
  testRegex?: string;
  /**
   * Use a custom results processor.
   */
  testResultsProcessor?: string;
  /**
   * Use a custom test runner.
   */
  testRunner?: string;
  /**
   * Use a custom test sequencer.
   */
  testSequencer?: string;
  /**
   * Default timeout of a test in milliseconds.
   */
  testTimeout?: number;
  /**
   * A map from regular expressions to paths to transformers.
   */
  transform?: {
    [k: string]: unknown | undefined;
  };
  /**
   * An array of regexp pattern strings that are matched against all source file paths before transformation. If the file path matches any of the patterns, it will not be transformed.
   */
  transformIgnorePatterns?: string[];
  /**
   * An array of regexp pattern strings that are matched against all modules before the module loader will automatically return a mock for them. If a module's path matches any of the patterns in this list, it will not be automatically mocked by the module loader.
   */
  unmockedModulePathPatterns?: string[];
  /**
   * Indicates whether each individual test should be reported during the run. All errors will also still be shown on the bottom after execution.
   */
  verbose?: boolean;
  /**
   * An array of RegExp patterns that are matched against all source file paths before re-running tests in watch mode. If the file path matches any of the patterns, when it is updated, it will not trigger a re-run of tests.
   */
  watchPathIgnorePatterns?: string[];
  /**
   * Enable custom watch plugins
   */
  watchPlugins?: string[];
  /**
   * Whether to use `watchman` for file crawling.
   */
  watchman?: boolean;
  /**
   * Specifies the memory limit for workers before they are recycled.
   */
  workerIdleMemoryLimit?: number | string;
  /**
   * Comment
   */
  '//'?: string;
  /**
   * Whether to use worker threads for parallelization. Child processes are used by default.
   */
  workerThreads?: boolean;
  [k: string]: unknown | undefined;
}
