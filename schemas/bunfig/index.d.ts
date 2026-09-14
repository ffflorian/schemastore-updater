/* eslint-disable */

/**
 * Bun configuration schema for `bunfig.toml`.
 * https://bun.com/docs/runtime/bunfig
 */
export interface BunConfiguration {
  /**
   * An array or string of scripts/plugins to run before running the file or script
   * https://bun.sh/docs/runtime/bunfig#preload
   */
  preload?: string[] | string;
  /**
   * Configure how Bun handles JSX. You can also set these fields in the `compilerOptions` of your `tsconfig.json`, but they are supported here as well for non-TypeScript projects
   * https://bun.sh/docs/runtime/bunfig#jsx
   * https://www.typescriptlang.org/tsconfig/#jsx
   */
  jsx?: string;
  /**
   * Specify the function that is used to create JSX elements
   * https://www.typescriptlang.org/tsconfig#jsxFactory
   */
  jsxFactory?: string;
  /**
   * Specify the function that is used for JSX fragments
   * https://www.typescriptlang.org/tsconfig#jsxFragment
   */
  jsxFragment?: string;
  /**
   * Specify the module specifier to be used for importing the JSX factory functions
   * https://www.typescriptlang.org/tsconfig#jsxImportSource
   */
  jsxImportSource?: string;
  /**
   * Enable `smol` mode. This reduces memory usage at the cost of performance
   * https://bun.sh/docs/runtime/bunfig#smol
   */
  smol?: boolean;
  /**
   * Set the log level. This can be one of `"debug"`, `"warn"`, or `"error"`
   * https://bun.sh/docs/runtime/bunfig#loglevel
   */
  logLevel?: 'debug' | 'warn' | 'error';
  /**
   * The `define` field allows you to replace certain global identifiers with constant expressions. Bun will replace any usage of the identifier with the expression. The expression should be a JSON string
   * https://bun.sh/docs/runtime/bunfig#define
   */
  define?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Map file extensions to Bun's built-in loaders.
   * https://bun.com/docs/bundler/loaders
   */
  loader?: {
    [k: string]:
      | 'jsx'
      | 'js'
      | 'ts'
      | 'tsx'
      | 'css'
      | 'file'
      | 'json'
      | 'jsonc'
      | 'json5'
      | 'toml'
      | 'yaml'
      | 'xml'
      | 'wasm'
      | 'napi'
      | 'base64'
      | 'dataurl'
      | 'text'
      | 'sqlite'
      | 'sqlite_embedded'
      | 'html'
      | 'md'
      | 'sh'
      | 'mjs'
      | 'cjs'
      | 'cts'
      | 'mts'
      | 'node'
      | 'txt'
      | 'markdown'
      | undefined;
  };
  /**
   * Configure Bun's debugging tools.
   * https://bun.com/docs/runtime/utils#bunopenineditor
   */
  debug?: {
    /**
     * Set the editor that Bun.openInEditor() opens.
     * https://bun.com/docs/runtime/utils#bunopenineditor
     */
    editor?: string;
  };
  /**
   * The `telemetry` field permit to enable/disable the analytics records. Bun records bundle timings (so we can answer with data, "is Bun getting faster?") and feature usage (e.g., "are people actually using macros?"). The request body size is about 60 bytes, so it's not a lot of data. By default the telemetry is enabled.
   * https://bun.sh/docs/runtime/bunfig#telemetry
   */
  telemetry?: boolean;
  /**
   * Configure automatic `.env` file loading. By default, Bun automatically loads `.env` files.
   * https://bun.sh/docs/runtime/bunfig#env
   */
  env?:
    | boolean
    | {
        /**
         * Enable or disable automatic default `.env` file loading.
         * https://bun.sh/docs/runtime/bunfig#env
         */
        file?: boolean;
      };
  /**
   * Configure console output behavior.
   * https://bun.sh/docs/runtime/bunfig#console
   */
  console?: {
    /**
     * Set the default depth for `console.log()` object inspection. Default `2`
     * https://bun.sh/docs/runtime/bunfig#console-depth
     */
    depth?: number;
  };
  /**
   * Options for `Bun.serve` and `bun run` when serving HTTP.
   * https://bun.com/docs/runtime/bunfig#serve
   */
  serve?: {
    /**
     * The default port for `Bun.serve` to listen on. Default `3000`. Can also be set via the `BUN_PORT` or `PORT` environment variables, or the `--port` flag.
     * https://bun.com/docs/runtime/bunfig#serve-port
     */
    port?: number;
    /**
     * Configure how Bun serves and bundles static routes.
     * https://bun.com/docs/bundler/fullstack#plugins
     */
    static?: {
      /**
       * Load plugins to bundle static routes.
       * https://bun.com/docs/bundler/fullstack#plugins
       */
      plugins?: string | string[];
      /**
       * Select how Bun emits sourcemaps for static routes.
       * https://bun.com/docs/bundler/fullstack#sourcemaps
       */
      sourcemap?: boolean | ('none' | 'linked' | 'inline' | 'external');
      /**
       * Select which environment variables Bun inlines into static routes. Use `inline` for all variables, `disable` for none, or a prefix with `*` for matching variables.
       * https://bun.com/docs/bundler/fullstack#inline-environment-variables
       */
      env?:
        | boolean
        | ((
            | ('inline' | 'disable')
            | {
                [k: string]: unknown | undefined;
              }
          ) &
            string);
      [k: string]: unknown | undefined;
    };
  };
  /**
   * Test runner
   * https://bun.sh/docs/runtime/bunfig#test-runner
   */
  test?: {
    /**
     * The root directory to run tests from. Default `.`
     * https://bun.sh/docs/runtime/bunfig#test-root
     */
    root?: string;
    /**
     * Same as the top-level `preload` field, but only applies to `bun test`
     * https://bun.sh/docs/runtime/bunfig#test-preload
     */
    preload?: string[] | string;
    /**
     * Exclude files and directories from test discovery using glob patterns. Can be a single string pattern or an array of patterns.
     * https://bun.sh/docs/runtime/bunfig#test-pathignorepatterns
     */
    pathIgnorePatterns?: string | string[];
    /**
     * Same as the top-level `smol` field, but only applies to `bun test`
     * https://bun.sh/docs/runtime/bunfig#test-smol
     */
    smol?: boolean;
    /**
     * Enables coverage reporting. Default `false`. Use `--coverage` to override
     * https://bun.sh/docs/runtime/bunfig#test-coverage
     */
    coverage?: boolean;
    /**
     * Exclude specific files or file patterns from coverage reports using glob patterns. Can be a single string pattern or an array of patterns.
     * https://bun.sh/docs/runtime/bunfig#test-coveragepathignorepatterns
     */
    coveragePathIgnorePatterns?: string | string[];
    /**
     * Set a coverage threshold for all metrics or for individual metrics. A test run fails if coverage does not meet the threshold.
     * https://bun.com/docs/test/configuration#coverage-thresholds
     */
    coverageThreshold?:
      | number
      | {
          /**
           * Set the minimum line coverage.
           * https://bun.com/docs/test/configuration#coverage-thresholds
           */
          lines?: number;
          /**
           * Set the minimum function coverage.
           * https://bun.com/docs/test/configuration#coverage-thresholds
           */
          functions?: number;
          /**
           * Set the minimum statement coverage. Bun accepts this value but does not enforce it.
           * https://bun.com/docs/test/configuration#coverage-thresholds
           */
          statements?: number;
        };
    /**
     * Whether to skip test files when computing coverage statistics. Default false
     * https://bun.sh/docs/runtime/bunfig#test-coverageskiptestfiles
     */
    coverageSkipTestFiles?: boolean;
    /**
     * Whether to report coverage against transpiled output instead of remapping line numbers through sourcemaps back to the original source. Default `false`. Primarily useful for debugging.
     * https://bun.com/docs/runtime/bunfig#test-coverageignoresourcemaps
     */
    coverageIgnoreSourcemaps?: boolean;
    /**
     * Select console or LCOV coverage reports. Use one reporter name or an array of names.
     * https://bun.com/docs/test/code-coverage#coverage-reporters
     */
    coverageReporter?: ('text' | 'lcov') | ('text' | 'lcov')[];
    /**
     * Set path where coverage reports will be saved. Please notice, that it works only for persistent `coverageReporter` like `lcov`
     * https://bun.sh/docs/runtime/bunfig#test-coveragedir
     */
    coverageDir?: string;
    /**
     * Run tests in random order. Default `false`
     * https://bun.sh/docs/runtime/bunfig#test-randomize
     */
    randomize?: boolean;
    /**
     * Set the random seed for test randomization. This requires `randomize` to be `true`.
     * https://bun.sh/docs/runtime/bunfig#test-seed
     */
    seed?: number;
    /**
     * Re-run each test file a specified number of times. Default `0` (run once).
     * https://bun.sh/docs/runtime/bunfig#test-reruneach
     */
    rerunEach?: number;
    /**
     * Default retry count for all tests. Failed tests will be retried up to this many times. Default `0` (no retries).
     * https://bun.sh/docs/runtime/bunfig#test-retry
     */
    retry?: number;
    /**
     * Select test files that run tests concurrently. Use one glob or an array of globs.
     * https://bun.com/docs/test/configuration#concurrenttestglob
     */
    concurrentTestGlob?: string | [string, ...string[]];
    /**
     * When enabled, only failed tests are displayed in the output. Default `false`
     * https://bun.sh/docs/runtime/bunfig#test-onlyfailures
     */
    onlyFailures?: boolean;
    /**
     * Configure the test reporter settings.
     * https://bun.sh/docs/runtime/bunfig#test-reporter
     */
    reporter?: {
      /**
       * Enable the dots reporter. Default `false`
       * https://bun.sh/docs/runtime/bunfig#test-reporter-dots
       */
      dots?: boolean;
      /**
       * Enable JUnit XML reporting and set the output file path.
       * https://bun.sh/docs/runtime/bunfig#test-reporter-junit
       */
      junit?: string;
    };
    /**
     * Set the default timeout in milliseconds for all tests. This can be overridden by individual tests. Default `5000`
     * https://bun.com/docs/test/configuration#default-timeout
     */
    timeout?: number;
  };
  /**
   * Package management is a complex issue; to support a range of use cases, the behavior of `bun install` can be configured under the `[install]` section
   * https://bun.sh/docs/runtime/bunfig#package-manager
   */
  install?: {
    /**
     * Whether to install optional dependencies. Default `true`
     * https://bun.sh/docs/runtime/bunfig#install-optional
     */
    optional?: boolean;
    /**
     * Whether to install development dependencies. Default `true`
     * https://bun.sh/docs/runtime/bunfig#install-dev
     */
    dev?: boolean;
    /**
     * Whether to install peer dependencies. Default `true`
     * https://bun.sh/docs/runtime/bunfig#install-peer
     */
    peer?: boolean;
    /**
     * Whether bun install will run in "production mode". Default `false`
     *
     * In production mode, `"devDependencies"` are not installed. You can use `--production` in the CLI to override this setting
     * https://bun.sh/docs/runtime/bunfig#install-production
     */
    production?: boolean;
    /**
     * Whether to set an exact version in package.json. Default `false`
     *
     * By default Bun uses caret ranges; if the `latest` version of a package is `2.4.1`, the version range in your `package.json` will be `^2.4.1`. This indicates that any version from `2.4.1` up to (but not including) `3.0.0` is acceptable
     * https://bun.sh/docs/runtime/bunfig#install-exact
     */
    exact?: boolean;
    /**
     * Whether to skip lifecycle scripts during install. Default `false`. Equivalent to the `--ignore-scripts` flag.
     *
     * When `true`, Bun will not run any `preinstall` / `install` / `postinstall` / `prepare` scripts — both for your project and for packages in `trustedDependencies`.
     * https://bun.com/docs/runtime/bunfig#install-ignorescripts
     */
    ignoreScripts?: boolean;
    /**
     * The maximum number of concurrent lifecycle scripts to run at once. Defaults to two times the number of CPU cores. Equivalent to the `--concurrent-scripts` flag.
     * https://bun.com/docs/runtime/bunfig#install-concurrentscripts
     */
    concurrentScripts?: number;
    /**
     * If false, generate a binary `bun.lockb` instead of a text-based `bun.lock` file when running `bun install` and no lockfile is present
     * Default `true` (since Bun v1.2)
     * https://bun.sh/docs/runtime/bunfig#install-savetextlockfile
     */
    saveTextLockfile?: boolean;
    /**
     * Set auto-install behavior. The default `"auto"` installs dependencies when `node_modules` is absent. Bun also accepts a boolean.
     * https://bun.com/docs/runtime/bunfig#install-auto
     */
    auto?: boolean | ('auto' | 'force' | 'disable' | 'fallback');
    /**
     * Configure how Bun resolves package versions against the npm registry when running scripts. Default `"online"`.
     *
     * - `"online"` — Check the registry for stale packages as needed.
     * - `"offline"` — Skip staleness checks and resolve packages from the local cache. Equivalent to `--prefer-offline`.
     * - `"latest"` — Always check npm for the latest matching versions. Equivalent to `--prefer-latest`.
     * https://bun.com/docs/runtime/bunfig#install-prefer
     */
    prefer?: 'online' | 'offline' | 'latest';
    /**
     * Use only packages and metadata in the local cache. Fail if an item is missing. Default `false`.
     * https://bun.com/docs/runtime/bunfig#install-offline
     */
    offline?: boolean;
    /**
     * When true, `bun install` will not update `bun.lock`. Default `false`. If `package.json` and the existing `bun.lock` are not in agreement, this will error
     * https://bun.sh/docs/runtime/bunfig#install-frozenlockfile
     */
    frozenLockfile?: boolean;
    /**
     * Whether `bun install` will actually install dependencies. Default `false`. When true, it's equivalent to setting `--dry-run` on all `bun install` commands
     * https://bun.sh/docs/runtime/bunfig#install-dryrun
     */
    dryRun?: boolean;
    /**
     * To configure the directory where Bun puts globally installed packages
     * https://bun.sh/docs/runtime/bunfig#install-globaldir
     */
    globalDir?: string;
    /**
     * To configure the directory where Bun installs globally installed binaries and CLIs
     * https://bun.sh/docs/runtime/bunfig#install-globalbindir
     */
    globalBinDir?: string;
    /**
     * The default registry is `https://registry.npmjs.org/`. This can be globally configured in `bunfig.toml`
     * https://bun.sh/docs/runtime/bunfig#install-registry
     */
    registry?:
      | string
      | {
          /**
           * The URL of the registry
           * https://bun.sh/docs/runtime/bunfig#install-registry
           */
          url?: string;
          /**
           * The token to use for authentication
           * https://bun.sh/docs/runtime/bunfig#install-registry
           */
          token?: string;
          /**
           * Set the registry user name.
           * https://bun.com/docs/pm/npmrc#configure-options-for-a-specific-registry
           */
          username?: string;
          /**
           * Set the registry password.
           * https://bun.com/docs/pm/npmrc#configure-options-for-a-specific-registry
           */
          password?: string;
        };
    /**
     * Whether to link workspace packages from the monorepo root to their respective `node_modules` directories. Default `true`
     * https://bun.sh/docs/runtime/bunfig#install-linkworkspacepackages
     */
    linkWorkspacePackages?: boolean;
    /**
     * To configure a registry for a particular scope (e.g. `@myorg/<package>`) use `install.scopes`. You can reference environment variables with `$variable` notation
     * https://bun.sh/docs/runtime/bunfig#install-scopes
     */
    scopes?: {
      /**
       * The default registry is `https://registry.npmjs.org/`. This can be globally configured in `bunfig.toml`
       * https://bun.sh/docs/runtime/bunfig#install-registry
       */
      [k: string]:
        | string
        | {
            /**
             * The URL of the registry
             * https://bun.sh/docs/runtime/bunfig#install-registry
             */
            url?: string;
            /**
             * The token to use for authentication
             * https://bun.sh/docs/runtime/bunfig#install-registry
             */
            token?: string;
            /**
             * Set the registry user name.
             * https://bun.com/docs/pm/npmrc#configure-options-for-a-specific-registry
             */
            username?: string;
            /**
             * Set the registry password.
             * https://bun.com/docs/pm/npmrc#configure-options-for-a-specific-registry
             */
            password?: string;
          }
        | undefined;
    };
    /**
     * Set one CA certificate or an array of certificates.
     * https://bun.com/docs/runtime/bunfig#install-ca-and-install-cafile
     */
    ca?: string | string[];
    /**
     * A path to a CA certificate file. The file can contain multiple certificates.
     * https://bun.sh/docs/runtime/bunfig#install-ca-and-install-cafile
     */
    cafile?: string;
    /**
     * Configure the cache with an object. Bun also accepts a directory string or `false` to disable both caches.
     * https://bun.com/docs/runtime/bunfig#install-cache
     */
    cache?:
      | boolean
      | string
      | {
          /**
           * The directory to use for the cache
           * https://bun.sh/docs/runtime/bunfig#install-cache
           */
          dir?: string;
          /**
           * When true, don't load from the global cache.
           *
           * Bun may still write to `node_modules/.cache`
           * https://bun.sh/docs/runtime/bunfig#install-cache
           */
          disable?: boolean;
          /**
           * When true, always resolve the latest versions from the registry
           * https://bun.sh/docs/runtime/bunfig#install-cache
           */
          disableManifest?: boolean;
        };
    /**
     * To configure lockfile behavior, use the `install.lockfile` section
     * https://bun.sh/docs/runtime/bunfig#install-lockfile
     */
    lockfile?: {
      /**
       * Whether to generate a lockfile on `bun install`. Default `true`
       * https://bun.sh/docs/runtime/bunfig#install-lockfile
       */
      save?: boolean;
      /**
       * Whether to generate a non-Bun lockfile alongside `bun.lock`. (A `bun.lock` will always be created.) Currently `"yarn"` is the only supported value
       * https://bun.sh/docs/runtime/bunfig#install-lockfile
       */
      print?: 'yarn';
    };
    /**
     * Set how Bun links dependencies into `node_modules`. New workspaces use `"isolated"`; new single-package projects and existing projects use `"hoisted"`.
     * https://bun.com/docs/runtime/bunfig#install-linker
     */
    linker?: 'hoisted' | 'isolated';
    /**
     * When using the `"isolated"` linker, share package installations across projects in a global virtual store at `<cache>/links/` and link `node_modules/.bun/<pkg>@<ver>` into it instead of materializing each package into the project. Default `false`. Can also be set with the `BUN_INSTALL_GLOBAL_STORE` environment variable.
     * https://bun.com/docs/runtime/bunfig#install-globalstore
     */
    globalStore?: boolean;
    /**
     * When using the `"isolated"` linker, packages matching these glob patterns are hoisted to the root `node_modules` directory so they can be resolved by any package in the project. Default `[]`. Similar to pnpm's `public-hoist-pattern`.
     * https://bun.com/docs/runtime/bunfig#install-publichoistpattern
     */
    publicHoistPattern?: string[];
    /**
     * When using the `"isolated"` linker, Bun links matching packages into the fallback directory (`node_modules/.bun/node_modules`). By default, Bun links all packages, equivalent to `["*"]`.
     * https://bun.com/docs/runtime/bunfig#install-hoistpattern
     */
    hoistPattern?: string[];
    /**
     * Create a fallback directory for packages in isolated installs. Default `true`. Set to `false` to prevent undeclared packages from resolving through this directory.
     * https://bun.com/docs/runtime/bunfig#install-hoist
     */
    hoist?: boolean;
    /**
     * Set the log level for `bun install`. This can be one of `"debug"`, `"warn"`, or `"error"`.
     * https://bun.com/docs/runtime/bunfig#install-loglevel
     */
    logLevel?: 'debug' | 'warn' | 'error';
    /**
     * Security configuration for package installation
     * https://bun.sh/docs/runtime/bunfig#install-security-scanner
     */
    security?: {
      /**
       * The security scanner to use during certain package manager commands.
       * https://bun.sh/docs/runtime/bunfig#install-security-scanner
       */
      scanner?: string;
    };
    /**
     * Configure a minimum age (in seconds) for npm package versions. Package versions published more recently than this threshold will be filtered out during installation. Default is null (disabled)
     * https://bun.com/docs/runtime/bunfig#install-minimumreleaseage
     */
    minimumReleaseAge?: number;
    /**
     * Packages that bypass the minimumReleaseAge requirement and can install immediately.
     * https://bun.com/docs/runtime/bunfig#install-minimumreleaseage
     */
    minimumReleaseAgeExcludes?: string[];
  };
  /**
   * Configure `bun run` and the `bun` command when they run a file, script, or executable. Bun loads the local project's `bunfig.toml` for these commands.
   * https://bun.com/docs/runtime/bunfig#bun-run
   */
  run?: {
    /**
     * The shell to use when running package.json scripts via `bun run` or `bun`. On Windows, this defaults to `"bun"` and on other platforms it defaults to `"system"`
     * https://bun.sh/docs/runtime/bunfig#run-shell-use-the-system-shell-or-bun-s-shell
     */
    shell?: 'system' | 'bun';
    /**
     * Auto alias `node` to `bun`
     *
     * When `true`, this prepends `$PATH` with a `node` symlink that points to the `bun` binary for all scripts or executables invoked by `bun run` or `bun`
     * This means that if you have a script that runs `node`, it will actually run `bun` instead, without needing to change your script. This works recursively, so if your script runs another script that runs `node`, it will also run `bun` instead. This applies to shebangs as well, so if you have a script with a shebang that points to `node`, it will actually run `bun` instead.
     * By default, this is enabled if `node` is not already in your `$PATH`
     * https://bun.sh/docs/runtime/bunfig#run-bun-auto-alias-node-to-bun
     */
    bun?: boolean;
    /**
     * When `true`, suppresses the output of the command being run by `bun run` or `bun`
     * https://bun.sh/docs/runtime/bunfig#run-silent-suppress-reporting-the-command-being-run
     */
    silent?: boolean;
    /**
     * The number of lines of script output shown per script when using `--filter`. Default `10`. Set to `0` to show all lines. Equivalent to the `--elide-lines` flag.
     * https://bun.com/docs/runtime/bunfig#run-elide-lines-truncate-filtered-output
     */
    'elide-lines'?: number;
    /**
     * When `true`, Bun watches the process that spawned it and exits as soon as that parent goes away — even if the parent was `SIGKILL`ed and never got a chance to forward a signal. On its own exit, Bun also recursively `SIGKILL`s every descendant process so nothing it spawned outlives it. Useful when Bun is launched by a supervisor (Electron, a CI runner, a thin shim) that may be force-killed.
     *
     * Linux and macOS only (no-op on Windows and other platforms). Equivalent to the `--no-orphans` CLI flag or the `BUN_FEATURE_FLAG_NO_ORPHANS=1` environment variable.
     * https://bun.com/docs/runtime/bunfig#run-noorphans-don-t-leave-orphan-processes-behind
     */
    noOrphans?: boolean;
  };
  [k: string]: unknown | undefined;
}
