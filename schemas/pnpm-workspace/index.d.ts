/* eslint-disable */

/**
 * Define dependency version ranges as reusable constants,
 * for later reference in package.json files.
 * This (singular) field creates a catalog named default.
 *
 */
export type Dependency = {
  [k: string]: string | undefined;
} | null;

/**
 * JSON schema for pnpm-workspace.yaml files
 */
export interface PnpmWorkspaceSpecification {
  /**
   * Workspace package paths. Glob patterns are supported
   */
  packages?: string[];
  catalog?: Dependency;
  /**
   * Define arbitrarily named catalogs
   */
  catalogs?: {
    [k: string]: Catalog | undefined;
  } | null;
  /**
   * Controlling if and how dependencies are added to the default catalog
   */
  catalogMode?: 'strict' | 'prefer' | 'manual';
  /**
   * When set to `true`, pnpm will remove unused catalog entries during installation.
   */
  cleanupUnusedCatalogs?: boolean;
  /**
   * A list of package names that are allowed to be executed during installation.
   */
  onlyBuiltDependencies?: string[];
  /**
   * Used to override any dependency in the dependency graph.
   */
  overrides?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Used to extend the existing package definitions with additional information.
   */
  packageExtensions?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.+$".
     */
    [k: string]: {
      dependencies?: Dependency1;
      optionalDependencies?: OptionalDependency;
      peerDependencies?: PeerDependency;
      peerDependenciesMeta?: PeerDependencyMeta;
    };
  };
  peerDependencyRules?: {
    /**
     * pnpm will not print warnings about missing peer dependencies from this list.
     */
    ignoreMissing?: string[];
    /**
     * Unmet peer dependency warnings will not be printed for peer dependencies of the specified range.
     */
    allowedVersions?: {
      [k: string]: unknown | undefined;
    };
    /**
     * Any peer dependency matching the pattern will be resolved from any version, regardless of the range specified in "peerDependencies".
     */
    allowAny?: string[];
  };
  /**
   * A list of dependencies to run builds for.
   */
  neverBuiltDependencies?: string[];
  /**
   * If set to true, all build scripts (e.g. preinstall, install, postinstall) from dependencies will run automatically, without requiring approval.
   */
  dangerouslyAllowAllBuilds?: boolean;
  /**
   * Specifies a JSON file that lists the only packages permitted to run installation scripts during the pnpm install process.
   */
  onlyBuiltDependenciesFile?: string;
  /**
   * A list of package names that should not be built during installation.
   */
  ignoredBuiltDependencies?: string[];
  /**
   * A list of deprecated versions that the warnings are suppressed.
   */
  allowedDeprecatedVersions?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of dependencies that are patched.
   */
  patchedDependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied. (Previously named "allowNonAppliedPatches")
   */
  allowUnusedPatches?: boolean;
  /**
   * When true, installation won't fail if some of the patches from the "patchedDependencies" field were not applied.
   */
  allowNonAppliedPatches?: boolean;
  /**
   * Default is undefined. Errors out when a patch with an exact version or version range fails. Ignores failures from name-only patches. When true, prints a warning instead of failing when any patch cannot be applied. When false, errors out for any patch failure.
   */
  ignorePatchFailures?: boolean;
  updateConfig?: {
    /**
     * A list of packages that should be ignored when running "pnpm outdated" or "pnpm update --latest".
     */
    ignoreDependencies?: string[];
  };
  /**
   * Config dependencies allow you to share and centralize configuration files, settings, and hooks across multiple projects. They are installed before all regular dependencies ('dependencies', 'devDependencies', 'optionalDependencies'), making them ideal for setting up custom hooks, patches, and catalog entries.
   */
  configDependencies?: {
    [k: string]: unknown | undefined;
  };
  auditConfig?: {
    /**
     * A list of CVE IDs that will be ignored by "pnpm audit".
     */
    ignoreCves?: string[];
    /**
     * A list of GHSA Codes that will be ignored by "pnpm audit".
     */
    ignoreGhsas?: string[];
  };
  /**
   * A list of scripts that must exist in each project.
   */
  requiredScripts?: string[];
  /**
   * Specifies architectures for which you'd like to install optional dependencies, even if they don't match the architecture of the system running the install.
   */
  supportedArchitectures?: {
    os?: string[];
    cpu?: string[];
    libc?: string[];
  };
  /**
   * A list of optional dependencies that the install should be skipped.
   */
  ignoredOptionalDependencies?: string[];
  executionEnv?: {
    /**
     * Specifies which exact Node.js version should be used for the project's runtime.
     */
    nodeVersion?: string;
  };
  /**
   * When true, all dependencies are hoisted to node_modules/.pnpm/node_modules.
   */
  hoist?: boolean;
  /**
   * When true, packages from the workspaces are symlinked to either <workspace_root>/node_modules/.pnpm/node_modules or to <workspace_root>/node_modules depending on other hoisting settings (hoistPattern and publicHoistPattern).
   */
  hoistWorkspacePackages?: boolean;
  /**
   * Tells pnpm which packages should be hoisted to node_modules/.pnpm/node_modules
   */
  hoistPattern?: string[];
  /**
   * Unlike hoistPattern, which hoists dependencies to a hidden modules directory inside the virtual store, publicHoistPattern hoists dependencies matching the pattern to the root modules directory.
   */
  publicHoistPattern?: string[];
  /**
   * By default, pnpm creates a semistrict node_modules, meaning dependencies have access to undeclared dependencies but modules outside of node_modules do not.
   */
  shamefullyHoist?: boolean;
  /**
   * The directory in which dependencies will be installed (instead of node_modules).
   */
  modulesDir?: string;
  /**
   * Defines what linker should be used for installing Node packages.
   */
  nodeLinker?: 'isolated' | 'hoisted' | 'pnp';
  /**
   * When symlink is set to false, pnpm creates a virtual store directory without any symlinks. It is a useful setting together with nodeLinker=pnp.
   */
  symlink?: boolean;
  /**
   * When false, pnpm will not write any files to the modules directory (node_modules).
   */
  enableModulesDir?: boolean;
  /**
   * The directory with links to the store.
   */
  virtualStoreDir?: string;
  /**
   * Sets the maximum allowed length of directory names inside the virtual store directory (node_modules/.pnpm).
   */
  virtualStoreDirMaxLength?: number;
  /**
   * Controls the way packages are imported from the store (if you want to disable symlinks inside node_modules, then you need to change the nodeLinker setting, not this one).
   */
  packageImportMethod?: 'auto' | 'hardlink' | 'copy' | 'clone' | 'clone-or-copy';
  /**
   * The time in minutes after which orphan packages from the modules directory should be removed.
   */
  modulesCacheMaxAge?: number;
  /**
   * The time in minutes after which dlx cache expires.
   */
  dlxCacheMaxAge?: number;
  /**
   * The location where all the packages are saved on the disk.
   */
  storeDir?: string;
  /**
   * By default, if a file in the store has been modified, the content of this file is checked before linking it to a project's node_modules.
   */
  verifyStoreIntegrity?: boolean;
  /**
   * Some registries allow the exact same content to be published under different package names and/or versions.
   */
  strictStorePkgContentCheck?: boolean;
  /**
   * When enabled, node_modules contains only symlinks to a central virtual store, rather than to node_modules/.pnpm.
   */
  enableGlobalVirtualStore?: boolean;
  /**
   * When set to false, pnpm won't read or generate a pnpm-lock.yaml file.
   */
  lockfile?: boolean;
  /**
   * When set to true and the available pnpm-lock.yaml satisfies the package.json dependencies directive, a headless installation is performed.
   */
  preferFrozenLockfile?: boolean;
  /**
   * Add the full URL to the package's tarball to every entry in pnpm-lock.yaml.
   */
  lockfileIncludeTarballUrl?: boolean;
  /**
   * When set to true, the generated lockfile name after installation will be named based on the current branch name to completely avoid merge conflicts.
   */
  gitBranchLockfile?: boolean;
  /**
   * This configuration matches the current branch name to determine whether to merge all git branch lockfile files.
   */
  mergeGitBranchLockfilesBranchPattern?: unknown[] | null;
  /**
   * Max length of the peer IDs suffix added to dependency keys in the lockfile. If the suffix is longer, it is replaced with a hash.
   */
  peersSuffixMaxLength?: number;
  /**
   * The base URL of the npm package registry (trailing slash included).
   */
  registry?: string;
  /**
   * The Certificate Authority signing certificate that is trusted for SSL connections to the registry.
   */
  ca?: string;
  /**
   * A path to a file containing one or multiple Certificate Authority signing certificates.
   */
  cafile?: string;
  /**
   * A client certificate to pass when accessing the registry.
   */
  cert?: string;
  /**
   * A client key to pass when accessing the registry.
   */
  key?: string;
  /**
   * When fetching dependencies that are Git repositories, if the host is listed in this setting, pnpm will use shallow cloning to fetch only the needed commit, not all the history.
   */
  gitShallowHosts?: string[];
  /**
   * A proxy to use for outgoing HTTPS requests. If the HTTPS_PROXY, https_proxy, HTTP_PROXY or http_proxy environment variables are set, their values will be used instead.
   */
  httpsProxy?: string;
  /**
   * A proxy to use for outgoing http requests. If the HTTP_PROXY or http_proxy environment variables are set, proxy settings will be honored by the underlying request library.
   */
  proxy?: string;
  /**
   * The IP address of the local interface to use when making connections to the npm registry.
   */
  localAddress?: string;
  /**
   * The maximum number of connections to use per origin (protocol/host/port combination).
   */
  maxsockets?: number;
  /**
   * A comma-separated string of domain extensions that a proxy should not be used for.
   */
  noproxy?: string;
  /**
   * Whether or not to do SSL key validation when making requests to the registry via HTTPS.
   */
  strictSsl?: boolean;
  /**
   * Controls the maximum number of HTTP(S) requests to process simultaneously.
   */
  networkConcurrency?: number;
  /**
   * How many times to retry if pnpm fails to fetch from the registry.
   */
  fetchRetries?: number;
  /**
   * The exponential factor for retry backoff.
   */
  fetchRetryFactor?: number;
  /**
   * The minimum (base) timeout for retrying requests.
   */
  fetchRetryMintimeout?: number;
  /**
   * The maximum fallback timeout to ensure the retry factor does not make requests too long.
   */
  fetchRetryMaxtimeout?: number;
  /**
   * The maximum amount of time to wait for HTTP requests to complete.
   */
  fetchTimeout?: number;
  /**
   * When true, any missing non-optional peer dependencies are automatically installed.
   */
  autoInstallPeers?: boolean;
  /**
   * When this setting is set to true, packages with peer dependencies will be deduplicated after peers resolution.
   */
  dedupePeerDependents?: boolean;
  /**
   * If this is enabled, commands will fail if there is a missing or invalid peer dependency in the tree.
   */
  strictPeerDependencies?: boolean;
  /**
   * When enabled, dependencies of the root workspace project are used to resolve peer dependencies of any projects in the workspace.
   */
  resolvePeersFromWorkspaceRoot?: boolean;
  /**
   * Controls colors in the output.
   */
  color?: 'always' | 'auto' | 'never';
  /**
   * Any logs at or higher than the given level will be shown.
   */
  loglevel?: 'debug' | 'info' | 'warn' | 'error';
  /**
   * Experimental option that enables beta features of the CLI.
   */
  useBetaCli?: boolean;
  /**
   * If this is enabled, the primary behaviour of pnpm install becomes that of pnpm install -r, meaning the install is performed on all workspace or subdirectory packages.
   */
  recursiveInstall?: boolean;
  /**
   * If this is enabled, pnpm will not install any package that claims to not be compatible with the current Node version.
   */
  engineStrict?: boolean;
  /**
   * The location of the npm binary that pnpm uses for some actions, like publishing.
   */
  npmPath?: string;
  /**
   * If this setting is disabled, pnpm will not fail if a different package manager is specified in the packageManager field of package.json. When enabled, only the package name is checked (since pnpm v9.2.0), so you can still run any version of pnpm regardless of the version specified in the packageManager field.
   */
  packageManagerStrict?: boolean;
  /**
   * When enabled, pnpm will fail if its version doesn't exactly match the version specified in the packageManager field of package.json.
   */
  packageManagerStrictVersion?: boolean;
  /**
   * When enabled, pnpm will automatically download and run the version of pnpm specified in the packageManager field of package.json.
   */
  managePackageManagerVersions?: boolean;
  /**
   * Do not execute any scripts defined in the project package.json and its dependencies.
   */
  ignoreScripts?: boolean;
  /**
   * Do not execute any scripts of the installed packages. Scripts of the projects are executed.
   */
  ignoreDepScripts?: boolean;
  /**
   * The maximum number of child processes to allocate simultaneously to build node_modules.
   */
  childConcurrency?: number;
  /**
   * Use and cache the results of (pre/post)install hooks.
   */
  sideEffectsCache?: boolean;
  /**
   * Only use the side effects cache if present, do not create it for new packages.
   */
  sideEffectsCacheReadonly?: boolean;
  /**
   * Set to true to enable UID/GID switching when running package scripts. If set explicitly to false, then installing as a non-root user will fail.
   */
  unsafePerm?: boolean;
  /**
   * Options to pass through to Node.js via the NODE_OPTIONS environment variable.
   */
  nodeOptions?: string;
  /**
   * This setting allows the checking of the state of dependencies before running scripts.
   */
  verifyDepsBeforeRun?: 'install' | 'warn' | 'error' | 'prompt' | false;
  /**
   * When strictDepBuilds is enabled, the installation will exit with a non-zero exit code if any dependencies have unreviewed build scripts (aka postinstall scripts).
   */
  strictDepBuilds?: boolean;
  /**
   * Specifies which exact Node.js version should be used for the project's runtime.
   */
  useNodeVersion?: string;
  /**
   * The Node.js version to use when checking a package's engines setting.
   */
  nodeVersion?: string;
  /**
   * If this is enabled, locally available packages are linked to node_modules instead of being downloaded from the registry.
   */
  linkWorkspacePackages?: boolean | 'deep';
  /**
   * Enables hard-linking of all local workspace dependencies instead of symlinking them.
   */
  injectWorkspacePackages?: boolean;
  /**
   * Injected workspace dependencies are collections of hardlinks, which don't add or remove the files when their sources change.
   */
  syncInjectedDepsAfterScripts?: string[];
  /**
   * If this is enabled, local packages from the workspace are preferred over packages from the registry, even if there is a newer version of the package in the registry.
   */
  preferWorkspacePackages?: boolean;
  /**
   * If this is enabled, pnpm creates a single pnpm-lock.yaml file in the root of the workspace.
   */
  sharedWorkspaceLockfile?: boolean;
  /**
   * This setting controls how dependencies that are linked from the workspace are added to package.json.
   */
  saveWorkspaceProtocol?: boolean | 'rolling';
  /**
   * When executing commands recursively in a workspace, execute them on the root workspace project as well.
   */
  includeWorkspaceRoot?: boolean;
  /**
   * When set to true, no workspace cycle warnings will be printed.
   */
  ignoreWorkspaceCycles?: boolean;
  /**
   * Adding a new dependency to the root workspace package fails, unless the --ignore-workspace-root-check or -w flag is used.
   */
  ignoreWorkspaceRootCheck?: boolean;
  /**
   * When set to true, installation will fail if the workspace has cycles.
   */
  disallowWorkspaceCycles?: boolean;
  /**
   * Set the maximum number of tasks to run simultaneously. For unlimited concurrency use Infinity. You can set the value to <= 0 and it will use amount of CPU cores of the host minus the absolute value of the provided number as: max(1, (number of cores) - abs(workspaceConcurrency)).
   */
  workspaceConcurrency?: number;
  /**
   * If true, pnpm will fail if no packages match the filter
   */
  failIfNoMatch?: boolean;
  /**
   * By default, pnpm deploy will try creating a dedicated lockfile from a shared lockfile for deployment. If this setting is set to true, the legacy deploy behavior will be used.
   */
  forceLegacyDeploy?: boolean;
  /**
   * Configure how versions of packages installed to a package.json file get prefixed.
   */
  savePrefix?: '^' | '~' | '';
  /**
   * If you pnpm add a package and you don't provide a specific version, then it will install the package at the version registered under the tag from this setting.
   */
  tag?: string;
  /**
   * Specify a custom directory to store global packages.
   */
  globalDir?: string;
  /**
   * Allows to set the target directory for the bin files of globally installed packages.
   */
  globalBinDir?: string;
  /**
   * The location where all the packages are saved on the disk.
   */
  stateDir?: string;
  /**
   * The location of the cache (package metadata and dlx).
   */
  cacheDir?: string;
  /**
   * When true, all the output is written to stderr.
   */
  useStderr?: boolean;
  /**
   * When true, pnpm will check for updates to the installed packages and notify the user.
   */
  updateNotifier?: boolean;
  /**
   * Create symlinks to executables in node_modules/.bin instead of command shims. This setting is ignored on Windows, where only command shims work.
   */
  preferSymlinkedExecutables?: boolean;
  /**
   * During installation the dependencies of some packages are automatically patched. If you want to disable this, set this config to false.
   */
  ignoreCompatibilityDb?: boolean;
  /**
   * Determines how pnpm resolves dependencies, See https://pnpm.io/settings#resolutionmode
   */
  resolutionMode?: 'highest' | 'time-based' | 'lowest-direct';
  /**
   * Set this to true if the registry that you are using returns the "time" field in the abbreviated metadata.
   */
  registrySupportsTimeField?: boolean;
  /**
   * When false, the NODE_PATH environment variable is not set in the command shims.
   */
  extendNodePath?: boolean;
  /**
   * When deploying a package or installing a local package, all files of the package are copied.
   */
  deployAllFiles?: boolean;
  /**
   * When set to true, dependencies that are already symlinked to the root node_modules directory of the workspace will not be symlinked to subproject node_modules directories.
   */
  dedupeDirectDeps?: boolean;
  /**
   * When this setting is enabled, dependencies that are injected will be symlinked from the workspace whenever possible.
   */
  dedupeInjectedDeps?: boolean;
  /**
   * When enabled, a fast check will be performed before proceeding to installation. This way a repeat install or an install on a project with everything up-to-date becomes a lot faster.
   */
  optimisticRepeatInstall?: boolean;
  /**
   * Check if current branch is your publish branch, clean, and up-to-date with remote.
   */
  gitChecks?: boolean;
  /**
   * The primary branch of the repository which is used for publishing the latest changes.
   */
  publishBranch?: string;
  /**
   * The location of the local pnpmfile.
   */
  pnpmfile?: string;
  /**
   * The location of a global pnpmfile. A global pnpmfile is used by all projects during installation.
   */
  globalPnpmfile?: string;
  /**
   * .pnpmfile.cjs will be ignored. Useful together with --ignore-scripts when you want to make sure that no script gets executed during install.
   */
  ignorePnpmfile?: boolean;
  /**
   * The generated patch file will be saved to this directory.
   */
  patchesDir?: string;
  /**
   * When true, pnpm will run any pre/post scripts automatically.
   */
  enablePrePostScripts?: boolean;
  /**
   * The shell to use for scripts run with the pnpm run command.
   */
  scriptShell?: string;
  /**
   * When true, pnpm will use a JavaScript implementation of a bash-like shell to execute scripts.
   */
  shellEmulator?: boolean;
  /**
   * Saved dependencies will be configured with an exact version rather than using pnpm's default semver range operator.
   */
  saveExact?: boolean;
  /**
   * minimumReleaseAge defines the minimum number of minutes that must pass after a version is published before pnpm will install it. This applies to all dependencies, including transitive ones.
   */
  minimumReleaseAge?: number;
  /**
   * If you set `minimumReleaseAge` but need certain dependencies to always install the newest version immediately, you can list them under `minimumReleaseAgeExclude`. The exclusion works by `package name` and applies to all versions of that package.
   */
  minimumReleaseAgeExclude?: string[];
  /**
   * Bypass staleness checks for cached data. Missing data will still be requested from the server.
   */
  preferOffline?: boolean;
  /**
   * When set to no-downgrade, pnpm will fail if a package's trust level has decreased compared to previous releases. For example, if a package was previously published by a trusted publisher but now only has provenance or no trust evidence, installation will fail. This helps prevent installing potentially compromised versions.
   */
  trustPolicy?: 'off' | 'no-downgrade';
  /**
   * You can now list one or more specific packages or versions that pnpm should allow to install, even if those packages don't satisfy the trust policy requirement.
   */
  trustPolicyExclude?: string[];
  /**
   * A map of package matchers to explicitly allow (`true`) or disallow (`false`) script execution. This field replaces `onlyBuiltDependencies` and `ignoredBuiltDependencies` (which are also deprecated by this new setting), providing a single source of truth.
   */
  allowBuilds?: {
    [k: string]: unknown | undefined;
  };
  /**
   * When set to true, it prevents the resolution of exotic protocols (like git+ssh: or direct https: tarballs) in transitive dependencies. Only direct dependencies are allowed to use exotic sources.
   */
  blockExoticSubdeps?: boolean;
  /**
   * Allows ignoring the trust policy check for packages published more than the specified number of minutes ago. This is useful when enabling strict trust policies, as it allows older versions of packages (which may lack a process for publishing with signatures or provenance) to be installed without manual exclusion, assuming they are safe due to their age.
   */
  trustPolicyIgnoreAfter?: number;
  /**
   * Controls the level of issues reported by `pnpm audit`. When set to 'low', all vulnerabilities are reported. When set to 'moderate', 'high', or 'critical', only vulnerabilities with that severity or higher are reported.
   */
  auditLevel?: 'low' | 'moderate' | 'high' | 'critical';
  /**
   * When enabled, peer dependency suffixes use version-only identifiers (`name@version`) instead of full dep paths, eliminating nested suffixes like `(foo@1.0.0(bar@2.0.0))`. This dramatically reduces the number of package instances in projects with many recursive peer dependencies.
   */
  dedupePeers?: boolean;
  /**
   * Automatically loads a curated list of known-good packages from `@pnpm/plugin-trusted-deps` into `allowBuilds`. User-configured `allowBuilds` entries take precedence over the defaults. Set `allowBuildsOfTrustedDeps: false` to disable this behavior.
   */
  allowBuildsOfTrustedDeps?: boolean;
}
/**
 * Define dependency version ranges as reusable constants,
 * for later reference in package.json files.
 * This (singular) field creates a catalog named default.
 *
 */
export interface Catalog {
  [k: string]: string | undefined;
}
/**
 * Dependencies are specified with a simple hash of package name to version range.
 * The version range is a string which has one or more space-separated descriptors.
 * Dependencies can also be identified with a tarball or git URL.
 *
 */
export interface Dependency1 {
  [k: string]: string | undefined;
}
/**
 * Specifies dependencies that are optional for your project. These dependencies are attempted to be installed during the npm install process, but if they fail to install, the installation process will not fail.
 */
export interface OptionalDependency {
  [k: string]: string | undefined;
}
/**
 * Specifies dependencies that are required by the package but are expected to be provided by the consumer of the package.
 */
export interface PeerDependency {
  [k: string]: string | undefined;
}
/**
 * When a user installs your package, warnings are emitted if packages specified in "peerDependencies" are not already installed. The "peerDependenciesMeta" field serves to provide more information on how your peer dependencies are utilized. Most commonly, it allows peer dependencies to be marked as optional. Metadata for this field is specified with a simple hash of the package name to a metadata object.
 */
export interface PeerDependencyMeta {
  [k: string]:
    | {
        /**
         * Specifies that this peer dependency is optional and should not be installed automatically.
         */
        optional?: boolean;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
