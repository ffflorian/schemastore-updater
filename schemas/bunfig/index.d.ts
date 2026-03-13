/* eslint-disable */

/**
 * Bun configuration schema for `bunfig.toml`. See https://bun.sh/docs/runtime/bunfig
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
   * Configure how Bun maps file extensions to loaders. This is useful for loading files that aren't natively supported by Bun
   * https://bun.sh/docs/runtime/bunfig#loader
   */
  loader?: {
    [k: string]:
      | (
          | 'jsx'
          | 'js'
          | 'ts'
          | 'tsx'
          | 'css'
          | 'file'
          | 'json'
          | 'toml'
          | 'wasm'
          | 'napi'
          | 'base64'
          | 'dataurl'
          | 'text'
        )
      | undefined;
  };
  /**
   * The `telemetry` field permit to enable/disable the analytics records. Bun records bundle timings (so we can answer with data, "is Bun getting faster?") and feature usage (e.g., "are people actually using macros?"). The request body size is about 60 bytes, so it's not a lot of data. By default the telemetry is enabled.
   * https://bun.sh/docs/runtime/bunfig#telemetry
   */
  telemetry?: boolean;
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
     * To specify a coverage threshold. By default, no threshold is set. If your test suite does not meet or exceed this threshold, `bun test` will exit with a non-zero exit code to indicate the failure
     * https://bun.sh/docs/runtime/bunfig#test-coveragethreshold
     */
    coverageThreshold?:
      | number
      | {
          [k: string]: unknown | undefined;
        };
    /**
     * Whether to skip test files when computing coverage statistics. Default false
     * https://bun.sh/docs/runtime/bunfig#test-coverageskiptestfiles
     */
    coverageSkipTestFiles?: boolean;
    /**
     * By default, coverage reports will be printed to the console. For persistent code coverage reports in CI environments and for other tools use `lcov`
     * https://bun.sh/docs/runtime/bunfig#test-coveragereporter
     */
    coverageReporter?: ('text' | 'lcov')[];
    /**
     * Set path where coverage reports will be saved. Please notice, that it works only for persistent `coverageReporter` like `lcov`
     * https://bun.sh/docs/runtime/bunfig#test-coveragedir
     */
    coverageDir?: string;
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
     * If false, generate a binary `bun.lockb` instead of a text-based `bun.lock` file when running `bun install` and no lockfile is present
     * Default `true` (since Bun v1.2)
     * https://bun.sh/docs/runtime/bunfig#install-savetextlockfile
     */
    saveTextLockfile?: boolean;
    /**
     * To configure Bun's package auto-install behavior. Default `"auto"` — when no `node_modules` folder is found, Bun will automatically install dependencies on the fly during execution
     * https://bun.sh/docs/runtime/bunfig#install-auto
     */
    auto?: 'auto' | 'force' | 'disable' | 'fallback';
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
        };
    /**
     * To configure a registry for a particular scope (e.g. `@myorg/<package>`) use `install.scopes`. You can reference environment variables with `$variable` notation
     * https://bun.sh/docs/runtime/bunfig#install-scopes
     */
    scopes?: {
      [k: string]: unknown | undefined;
    };
    /**
     * The CA certificate as a string
     * https://bun.sh/docs/runtime/bunfig#install-ca-and-install-cafile
     */
    ca?: string;
    /**
     * A path to a CA certificate file. The file can contain multiple certificates.
     * https://bun.sh/docs/runtime/bunfig#install-ca-and-install-cafile
     */
    cafile?: string;
    /**
     * To configure the cache behavior
     * https://bun.sh/docs/runtime/bunfig#install-cache
     */
    cache?: {
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
     * Configure the default linker strategy. Default `"hoisted"`
     * https://bun.sh/docs/runtime/bunfig#install-linker
     */
    linker?: 'hoisted' | 'isolated';
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
   * The `bun run` command can be configured under the `[run]` section. These apply to the `bun run` command and the `bun` command when running a file or executable or script.
   *
   * Currently, `bunfig.toml` isn't always automatically loaded for `bun run` in a local project (it does check for a global `bunfig.toml`), so you might still need to pass `-c` or `-c=bunfig.toml` to use these settings
   * https://bun.sh/docs/runtime/bunfig#bun-run
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
  };
  [k: string]: unknown | undefined;
}
