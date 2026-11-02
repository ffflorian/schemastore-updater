/* eslint-disable */

/**
 * The scripts to run when the environment is activated
 */
export type Scripts = string[];
/**
 * A git branch to use
 */
export type Branch = string;
/**
 * The build string of the package
 */
export type Build = string;
/**
 * The build number of the package, can be a spec like `>=1` or `<=10` or `1`
 */
export type BuildNumber = string;
/**
 * The channel the packages needs to be fetched from
 */
export type Channel = string;
/**
 * Optional extra dependencies to select for the package
 */
export type Extras = string[];
/**
 * The file name of the package
 */
export type FileName = string;
/**
 * Plain string flags used to select package variants
 */
export type Flags = string[];
/**
 * The git URL to the repo
 */
export type Git = string;
/**
 * If `true` Git LFS objects are fetched during the checkout
 */
export type Lfs = boolean;
/**
 * The license of the package
 */
export type License = string;
/**
 * The license family of the package
 */
export type LicenseFamily = string;
/**
 * The md5 hash of the package
 */
export type Md5 = string;
/**
 * The authors of the project. Can be a list of strings or { workspace = true } to inherit from workspace
 */
export type Authors = string[] | WorkspaceInheritance;
/**
 * Must be true to inherit from workspace
 */
export type Workspace = true;
/**
 * The md5 hash of the package
 */
export type Md51 = string;
/**
 * A short description of the project. Can be a string or { workspace = true } to inherit from workspace
 */
export type Description = string | WorkspaceInheritance;
/**
 * The URL of the documentation of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Documentation = string | WorkspaceInheritance;
/**
 * The URL of the homepage of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Homepage = string | WorkspaceInheritance;
/**
 * `true` uses the default bounds; a table configures them.
 */
export type PinCompatible = true | PinTable;
/**
 * Pin the exact version and build string. Cannot be combined with the bounds or `build`.
 */
export type Exact = boolean;
/**
 * Lower bound of the pinned range: a pin expression like `x.x` (number of version segments to keep) or a literal version.
 */
export type LowerBound = string;
/**
 * Upper bound of the pinned range: a pin expression like `x` (the segment to bump, exclusive) or a literal version.
 */
export type UpperBound = string;
/**
 * The license of the project; we advise using an [SPDX](https://spdx.org/licenses/) identifier. Can be a string or { workspace = true } to inherit from workspace
 */
export type License2 = string | WorkspaceInheritance;
/**
 * The path to the license file of the project. Can be a path or { workspace = true } to inherit from workspace
 */
export type LicenseFile = string | WorkspaceInheritance;
/**
 * The name of the package. Can be a string or { workspace = true } to inherit from workspace
 */
export type Name = string | WorkspaceInheritance;
/**
 * Whether a workspace-wide `pixi publish` publishes this package. Packages that do not opt in with `publish = true` are left out of the publish set.
 */
export type Publish = boolean;
/**
 * The path to the readme file of the project. Can be a path or { workspace = true } to inherit from workspace
 */
export type Readme = string | WorkspaceInheritance;
/**
 * The URL of the repository of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Repository = string | WorkspaceInheritance;
/**
 * `true` uses the default bounds; a table configures them.
 */
export type PinSubpackage = true | PinTable;
/**
 * The version of the project; we advise use of [SemVer](https://semver.org). Can be a string or { workspace = true } to inherit from workspace
 */
export type Version = string | WorkspaceInheritance;
/**
 * The path to the package
 */
export type Path = string;
/**
 * A git SHA revision to use
 */
export type Rev = string;
/**
 * The sha256 hash of the package
 */
export type Sha256 = string;
/**
 * The subdir of the package, also known as platform
 */
export type Subdir = string;
/**
 * A subdirectory to use in the repo
 */
export type Subdirectory = string;
/**
 * A git tag to use
 */
export type Tag = string;
/**
 * The track features of the package
 */
export type TrackFeatures = string[];
/**
 * The URL to the package
 */
export type Url = string;
/**
 * The version of the package in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export type Version1 = string;
/**
 * The condition under which this match spec applies. Use a package string, `{ all = [...] }`, `{ any = [...] }`, or `{ package = ..., version = ..., build = ... }`.
 */
export type When = string | WhenAll | WhenAny | WhenPackage;
/**
 * Conditions to combine with a logical AND
 *
 * @minItems 1
 */
export type All = [string | WhenAll | WhenAny | WhenPackage, ...(string | WhenAll | WhenAny | WhenPackage)[]];
/**
 * Conditions to combine with a logical OR
 *
 * @minItems 1
 */
export type Any = [string | WhenAll | WhenAny | WhenPackage, ...(string | WhenAll | WhenAny | WhenPackage)[]];
/**
 * The package name to match
 */
export type Package2 = string;
/**
 * Override the workspace-level `exclude-newer` cutoff for this channel only
 */
export type ExcludeNewer = string;
/**
 * The priority of the channel
 */
export type Priority = number;
/**
 * The `conda` channels that are used to fetch the build backend from
 */
export type Channels = (string | ChannelInlineTable)[];
/**
 * The name of the build backend package
 */
export type Name1 = string;
/**
 * The build number to record in the produced package
 */
export type BuildNumber4 = number;
/**
 * An optional prefix to prepend to the auto-generated build string
 */
export type BuildStringPrefix = string;
/**
 * Names of environment variables to expose as secrets to the build script. Values are read from the host environment at build time; only the names live in the manifest. Forwarded to rattler-build's `build.script.secrets`.
 */
export type Secrets = string[];
/**
 * The sha256 hash of the package
 */
export type Sha2561 = string;
/**
 * The md5 hash of the source package
 */
export type Md52 = string;
/**
 * The sha256 hash of the source package
 */
export type Sha2562 = string;
/**
 * The type of channel priority that is used in the solve.
 * - 'strict': only take the package from the channel it exist in first.
 * - 'flexible': exhaust the candidates of higher-priority channels before falling back to the next channel, regardless of the version.
 * - 'disabled': group all dependencies together as if there is no channel difference.
 */
export type ChannelPriority = 'disabled' | 'flexible' | 'strict';
/**
 * The features that define the environment
 */
export type Features = string[];
/**
 * Whether to add the default feature to this environment
 */
export type NoDefaultFeature = boolean;
/**
 * A supported operating system and processor architecture pair.
 */
export type Platform =
  | 'emscripten-wasm32'
  | 'linux-32'
  | 'linux-64'
  | 'linux-aarch64'
  | 'linux-armv6l'
  | 'linux-armv7l'
  | 'linux-ppc64'
  | 'linux-ppc64le'
  | 'linux-riscv32'
  | 'linux-riscv64'
  | 'linux-s390x'
  | 'noarch'
  | 'osx-64'
  | 'osx-arm64'
  | 'unknown'
  | 'wasi-wasm32'
  | 'win-32'
  | 'win-64'
  | 'win-arm64'
  | 'zos-z';
/**
 * The platforms that this environment supports. Each entry is either a conda subdir or the name of a workspace platform.
 */
export type Platforms = (Platform | string)[];
/**
 * The index to fetch the package from
 */
export type Index = string;
/**
 * If `true` the package will be installed as editable
 */
export type Editable = boolean;
/**
 * Additional PyPI registries that should be used as extra indexes
 */
export type ExtraIndexUrls = string[];
/**
 * Paths to directory containing
 */
export type FindLinks = (FindLinksPath | FindLinksURL)[];
/**
 * The strategy to use when resolving packages from multiple indexes
 */
export type IndexStrategy = 'first-index' | 'unsafe-first-match' | 'unsafe-best-match';
/**
 * PyPI registry that should be used as the primary index
 */
export type IndexUrl = string;
/**
 * Don't use pre-built wheels for these packages
 */
export type NoBinary = boolean | string[];
/**
 * Packages that should NOT be built
 */
export type NoBuild = boolean | string[];
/**
 * Packages that should NOT be isolated during the build process
 */
export type NoBuildIsolation = boolean | string[];
/**
 * The strategy to use when considering pre-release versions
 */
export type PrereleaseMode = 'disallow' | 'allow' | 'if-necessary' | 'explicit' | 'if-necessary-or-explicit';
/**
 * Skip wheel filename validation, allowing installation of wheels with version mismatches between filename and metadata
 */
export type SkipWheelFilenameCheck = boolean;
/**
 * The group name for environments that should be solved together
 */
export type SolveGroup = string;
/**
 * The strategy that is used in the solve.
 * - 'highest': solve all packages to the highest compatible version.
 * - 'lowest': solve all packages to the lowest compatible version.
 * - 'lowest-direct': solve direct dependencies to the lowest compatible version and transitive ones to the highest compatible version.
 */
export type SolveStrategy = 'highest' | 'lowest' | 'lowest-direct';
/**
 * The name of the argument
 */
export type Arg = string;
/**
 * Allowed values for the argument
 *
 * @minItems 1
 */
export type Choices = [string, ...string[]];
/**
 * The default value of the argument
 */
export type Default = string;
/**
 * The arguments to a task
 */
export type Args = (TaskArgs | string)[];
/**
 * Whether to run in a clean environment, removing all environment variables except those defined in `env` and by pixi itself.
 */
export type CleanEnv = boolean;
/**
 * A shell command to run the task in the limited, but cross-platform `bash`-like `deno_task_shell`. See the documentation for [supported syntax](https://pixi.sh/latest/environments/advanced_tasks/#syntax)
 */
export type Cmd = string[] | string;
/**
 * The working directory to run the task
 */
export type Cwd = string;
/**
 * A default environment to run the task
 */
export type DefaultEnvironment = string;
/**
 * The tasks that this task depends on. Environment variables will **not** be expanded.
 */
export type DependsOn = (DependsOn1 | string)[] | DependsOn1 | string;
/**
 * The (positional or named) arguments to pass to the task
 */
export type Args1 = (
  | string
  | {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^[a-zA-Z_][a-zA-Z\d_]*$".
       */
      [k: string]: string | undefined;
    }
)[];
/**
 * The environment to use for the task
 */
export type Environment1 = string;
/**
 * the name of the task to depend on
 */
export type Task = string;
/**
 * The tasks that this task depends on. Environment variables will **not** be expanded. Deprecated in favor of `depends-on` from v0.21.0 onward.
 */
export type DependsOn2 = string[] | string;
/**
 * A short description of the task
 */
export type Description1 = string;
/**
 * A list of `.gitignore`-style glob patterns that should be watched for changes before this command is run. Environment variables _will_ be expanded.
 */
export type Inputs = string[];
/**
 * A list of `.gitignore`-style glob patterns that are generated by this command. Environment variables _will_ be expanded.
 */
export type Outputs = string[];
/**
 * The architecture the project supports
 */
export type Archspec = string;
/**
 * The minimum version of CUDA
 */
export type Cuda = number | string;
/**
 * The minimum version of `libc`
 */
export type Libc = LibcFamily | number | string;
/**
 * The family of the `libc`
 */
export type Family = string;
/**
 * The version of `libc`
 */
export type Version6 = number | string;
/**
 * The minimum version of the Linux kernel
 */
export type Linux = number | string;
/**
 * The minimum version of MacOS
 */
export type Macos = number | string;
/**
 * Whether the project supports UNIX
 */
export type Unix = boolean | string;
/**
 * The authors of the project
 */
export type Authors1 = string[];
/**
 * Ordered list of variant definition files.
 */
export type BuildVariantsFiles = string[];
/**
 * The `conda` to PyPI mapping configuration; `false` disables the mapping entirely
 */
export type CondaPypiMap =
  | {
      [k: string]: string | false | CondaPypiMapTable | undefined;
    }
  | false;
/**
 * The URL or path to a mapping file with `conda_name: pypi_name` entries
 */
export type Location = string;
/**
 * How the project mapping interacts with Pixi's default mapping data: `overlay` (default) applies it on top, `replace` uses it instead
 */
export type MappingMode = 'overlay' | 'replace';
/**
 * Whether Pixi may assume the conda package name is also the PyPI package name when mapping data has no answer. Defaults to true for conda-forge and false for other channels.
 */
export type SameNameHeuristic = boolean;
/**
 * The URL of the documentation of the project
 */
export type Documentation1 = string;
/**
 * The URL of the homepage of the project
 */
export type Homepage1 = string;
/**
 * The path to the license file of the project
 */
export type LicenseFile1 = string;
/**
 * A workspace platform: a conda subdir plus declared virtual-package
 * guarantees, identified by a workspace-scoped name.
 */
export type WorkspacePlatform = WorkspacePlatform1 & WorkspacePlatform2;
export type WorkspacePlatform1 =
  | {
      name: unknown;
      [k: string]: unknown | undefined;
    }
  | {
      platform: unknown;
      [k: string]: unknown | undefined;
    };
/**
 * Declare a `__cuda` virtual package at the given version (e.g. `12.0`), or a `{ driver, arch }` table to also declare `__cuda_arch` (GPU compute capability).
 */
export type Cuda1 = string | CudaTable;
/**
 * The `__cuda_arch` GPU compute capability, e.g. `8.6`. Requires `driver`.
 */
export type Arch = string;
/**
 * The `__cuda` driver version, e.g. `12.0`.
 */
export type Driver = string;
/**
 * Declare a `__glibc` virtual package at the given version, e.g. `2.28`.
 */
export type Glibc = string;
/**
 * Declare a `__linux` virtual package at the given kernel version, e.g. `5.10`.
 */
export type Linux1 = string;
/**
 * Declare a `__osx` virtual package at the given macOS version, e.g. `14.0`.
 */
export type Macos1 = string;
/**
 * Alias for `macos`: declare a `__osx` virtual package at the given macOS version, e.g. `14.0`.
 */
export type Osx = string;
/**
 * Declare a `__win` virtual package at the given Windows version, e.g. `10`.
 */
export type Windows = string;
/**
 * The platforms that the project supports. Each entry is either a conda subdir, the name of a workspace platform defined elsewhere, or an inline table describing a workspace platform (optional `name`, optional `platform`, plus virtual-package shortcut keys such as `cuda`, `archspec`, `glibc`, `linux`, `macos`/`osx`, `windows`).
 */
export type Platforms2 = (Platform | string | WorkspacePlatform)[];
/**
 * Defines the enabling of preview features of the project
 */
export type Preview = ('pixi-build' | string)[] | boolean;
/**
 * The path to the readme file of the project
 */
export type Readme1 = string;
/**
 * The URL of the repository of the project
 */
export type Repository1 = string;
/**
 * The required version spec for pixi itself to resolve and build the project.
 */
export type RequiresPixi = string;
/**
 * The endpoint URL to use for the S3 client
 */
export type EndpointUrl = string;
/**
 * Whether to force path style for the S3 client
 */
export type ForcePathStyle = boolean;
/**
 * The region to use for the S3 client
 */
export type Region = string;

/**
 * The `[tool.pixi]` section of a `pyproject.toml`.
 */
export interface ToolPixiForPyprojectToml {
  activation?: Activation;
  'build-dependencies'?: BuildDependencies;
  constraints?: Constraints;
  dependencies?: Dependencies;
  dev?: Dev;
  environments?: Environments;
  'exclude-newer'?: ExcludeNewer1;
  feature?: Feature;
  'host-dependencies'?: HostDependencies1;
  package?: Package;
  project?: Workspace3;
  'pypi-dependencies'?: PypiDependencies;
  'pypi-exclude-newer'?: PypiExcludeNewer;
  'pypi-options'?: PyPIOptions;
  'system-requirements'?: SystemRequirements;
  target?: Target1;
  tasks?: Tasks;
  tool?: Tool;
  workspace?: Workspace3;
  [k: string]: unknown | undefined;
}
/**
 * The scripts used on the activation of the project
 */
export interface Activation {
  env?: Env;
  scripts?: Scripts;
}
/**
 * A map of environment variables to values, used in the activation of the environment. These will be set in the shell. Thus these variables are shell specific. Using '$' might not expand to a value in different shells.
 */
export interface Env {
  [k: string]: string | undefined;
}
/**
 * The build `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface BuildDependencies {
  [k: string]: string | InheritableMatchspecTable | undefined;
}
/**
 * A spec that may inherit from `[workspace.dependencies]`.
 *
 * Setting `workspace = true` pulls the version (and any other unset fields)
 * from the matching `[workspace.dependencies]` entry. Members may layer
 * further attributes on top; restating `version` or the source location
 * (`path`, `git`, `url`) alongside `workspace = true` is an error.
 */
export interface InheritableMatchspecTable {
  branch?: Branch;
  build?: Build;
  'build-number'?: BuildNumber;
  channel?: Channel;
  extras?: Extras;
  'file-name'?: FileName;
  flags?: Flags;
  git?: Git;
  lfs?: Lfs;
  license?: License;
  'license-family'?: LicenseFamily;
  md5?: Md5;
  package?: Package;
  path?: Path;
  rev?: Rev;
  sha256?: Sha2561;
  subdir?: Subdir;
  subdirectory?: Subdirectory;
  tag?: Tag;
  'track-features'?: TrackFeatures;
  url?: Url;
  version?: Version1;
  when?: When;
  workspace?: Workspace;
}
/**
 * An inline package definition for this source dependency, instead of a separate `pixi.toml`. The package name is taken from the dependency key and the source is taken from this spec, so `name` and `build.source` are not set here.
 */
export interface Package {
  authors?: Authors;
  build: Build1;
  'build-dependencies'?: BuildDependencies1;
  description?: Description;
  documentation?: Documentation;
  'extra-dependencies'?: ExtraDependencies;
  homepage?: Homepage;
  'host-dependencies'?: HostDependencies;
  license?: License2;
  'license-file'?: LicenseFile;
  name?: Name;
  publish?: Publish;
  readme?: Readme;
  repository?: Repository;
  'run-constraints'?: RunConstraints;
  'run-dependencies'?: RunDependencies;
  'run-exports'?: RunExports;
  version?: Version;
}
/**
 * Indicates that a field should inherit its value from the workspace.
 */
export interface WorkspaceInheritance {
  workspace: Workspace;
}
/**
 * The build configuration of the package
 */
export interface Build1 {
  'additional-dependencies'?: AdditionalDependencies;
  backend: BuildBackend;
  'build-number'?: BuildNumber4;
  'build-string-prefix'?: BuildStringPrefix;
  channels?: Channels;
  config?: Config;
  flags?: Flags;
  secrets?: Secrets;
  source?: SourceLocation;
  target?: Target;
}
/**
 * Additional dependencies to install alongside the build backend
 */
export interface AdditionalDependencies {
  [k: string]: string | MatchspecTable | undefined;
}
/**
 * A precise description of a `conda` package version.
 */
export interface MatchspecTable {
  branch?: Branch;
  build?: Build;
  'build-number'?: BuildNumber;
  channel?: Channel;
  extras?: Extras;
  'file-name'?: FileName;
  flags?: Flags;
  git?: Git;
  lfs?: Lfs;
  license?: License;
  'license-family'?: LicenseFamily;
  md5?: Md51;
  package?: Package;
  path?: Path;
  rev?: Rev;
  sha256?: Sha256;
  subdir?: Subdir;
  subdirectory?: Subdirectory;
  tag?: Tag;
  'track-features'?: TrackFeatures;
  url?: Url;
  version?: Version1;
  when?: When;
}
/**
 * The build `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface BuildDependencies1 {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | {
        [k: string]: string | InheritableMatchspecTable | undefined;
      }
    | undefined;
}
/**
 * Extra groups that can be requested through MatchSpec extras. Each group uses the same conda package specification syntax as run-dependencies.
 */
export interface ExtraDependencies {
  /**
   * This interface was referenced by `ExtraDependencies`'s JSON-Schema definition
   * via the `patternProperty` "^[a-z0-9._+-]{1,64}$".
   */
  [k: string]:
    | {
        [k: string]:
          | string
          | MatchspecTable
          | {
              [k: string]: string | MatchspecTable | undefined;
            }
          | undefined;
      }
    | undefined;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | undefined;
      }
    | undefined;
}
/**
 * Pin to a version compatible with the one resolved in the previous environment.
 *
 * Mirrors rattler-build's `pin_compatible()`: a `pin-compatible` entry in
 * `run-dependencies` resolves against the host environment, one in
 * `host-dependencies` against the build environment.
 */
export interface PinCompatibleSpec {
  'pin-compatible': PinCompatible;
}
/**
 * The arguments of a pin, mirroring rattler-build's `pin_compatible`/`pin_subpackage`.
 *
 * Bounds that are not given fall back to the defaults: `lower-bound = "x.x.x.x.x.x"`
 * (pin to the exact resolved version) and `upper-bound = "x"` (next-major exclusive).
 */
export interface PinTable {
  build?: Build;
  exact?: Exact;
  'lower-bound'?: LowerBound;
  'upper-bound'?: UpperBound;
}
/**
 * The `conda` run-time version constraints. These constrain the versions of packages that may be installed in the run environment without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface RunConstraints {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | {
        [k: string]: string | InheritableMatchspecTable | undefined;
      }
    | undefined;
}
/**
 * The `conda` dependencies required at runtime. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface RunDependencies {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | undefined;
      }
    | undefined;
}
/**
 * The run-exports this package declares for its consumers, mirroring the conda run-exports mechanism. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface RunExports {
  noarch?: Noarch;
  strong?: Strong;
  'strong-constraints'?: StrongConstraints;
  weak?: Weak;
  'weak-constraints'?: WeakConstraints;
}
/**
 * The only run-export bucket applied when the consuming output is `noarch`: added to the run dependencies of noarch consumers that depend on this package in `host-dependencies`.
 */
export interface Noarch {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | PinSubpackageSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | PinSubpackageSpec | undefined;
      }
    | undefined;
}
/**
 * Pin the package itself for its consumers.
 *
 * Mirrors rattler-build's `pin_subpackage()`. Only valid in the
 * `run-exports` tables, on an entry named after the package itself.
 */
export interface PinSubpackageSpec {
  'pin-subpackage': PinSubpackage;
}
/**
 * Added to the run dependencies of consumers that depend on this package in `build-dependencies` or `host-dependencies`.
 */
export interface Strong {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | PinSubpackageSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | PinSubpackageSpec | undefined;
      }
    | undefined;
}
/**
 * Added to the run constraints of consumers that depend on this package in `build-dependencies` or `host-dependencies`. Constraints only restrict versions and cannot be source specs.
 */
export interface StrongConstraints {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | PinSubpackageSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | PinSubpackageSpec | undefined;
      }
    | undefined;
}
/**
 * Added to the run dependencies of consumers that depend on this package in `host-dependencies`.
 */
export interface Weak {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | PinSubpackageSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | PinSubpackageSpec | undefined;
      }
    | undefined;
}
/**
 * Added to the run constraints of consumers that depend on this package in `host-dependencies`. Constraints only restrict versions and cannot be source specs.
 */
export interface WeakConstraints {
  [k: string]:
    | string
    | InheritableMatchspecTable
    | PinCompatibleSpec
    | PinSubpackageSpec
    | {
        [k: string]: string | InheritableMatchspecTable | PinCompatibleSpec | PinSubpackageSpec | undefined;
      }
    | undefined;
}
/**
 * All conditions must apply.
 */
export interface WhenAll {
  all: All;
}
/**
 * Any condition may apply.
 */
export interface WhenAny {
  any: Any;
}
/**
 * Expanded package condition syntax.
 *
 * Accepts the same matchspec fields as a regular package dependency except
 * for `when` itself, `channel`, and source-location fields (`url`, `git`,
 * `path`, `md5`, `sha256`, ...).
 */
export interface WhenPackage {
  build?: Build;
  'build-number'?: BuildNumber;
  extras?: Extras;
  'file-name'?: FileName;
  flags?: Flags;
  license?: License;
  'license-family'?: LicenseFamily;
  package: Package2;
  subdir?: Subdir;
  'track-features'?: TrackFeatures;
  version?: Version1;
}
/**
 * The build backend to instantiate
 */
export interface BuildBackend {
  'additional-dependencies'?: AdditionalDependencies;
  build?: Build;
  'build-number'?: BuildNumber;
  channel?: Channel;
  channels?: Channels;
  extras?: Extras;
  'file-name'?: FileName;
  flags?: Flags;
  license?: License;
  'license-family'?: LicenseFamily;
  name?: Name1;
  subdir?: Subdir;
  'track-features'?: TrackFeatures;
  version?: Version1;
  when?: When;
  workspace?: Workspace;
}
/**
 * A precise description of a `conda` channel, with an optional priority.
 */
export interface ChannelInlineTable {
  channel: Channel;
  'exclude-newer'?: ExcludeNewer;
  priority?: Priority;
}
/**
 * The configuration of the build backend
 */
export interface Config {
  [k: string]: unknown | undefined;
}
/**
 * The source from which to build the package
 */
export interface SourceLocation {
  branch?: Branch;
  git?: Git;
  path?: Path;
  rev?: Rev;
  subdirectory?: Subdirectory;
  tag?: Tag;
}
/**
 * Target-specific build configuration for different platforms
 */
export interface Target {
  [k: string]: BuildTarget | undefined;
}
/**
 * Target-specific build configuration for different platforms
 */
export interface BuildTarget {
  config?: Config;
}
/**
 * The `conda` version constraints. These constrain the versions of packages that may be installed without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints.
 */
export interface Constraints {
  [k: string]: string | InheritableMatchspecTable | undefined;
}
/**
 * The `conda` dependencies, consisting of a package name and a requirement in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export interface Dependencies {
  [k: string]: string | InheritableMatchspecTable | undefined;
}
/**
 * Source packages whose dependencies should be installed without building the package itself. Useful for development environments.
 */
export interface Dev {
  [k: string]: SourceSpecTable | undefined;
}
/**
 * A precise description of a source package location.
 */
export interface SourceSpecTable {
  branch?: Branch;
  git?: Git;
  md5?: Md52;
  path?: Path;
  rev?: Rev;
  sha256?: Sha2562;
  subdirectory?: Subdirectory;
  tag?: Tag;
  url?: Url;
}
/**
 * The environments of the project, defined as a full object or a list of feature names.
 */
export interface Environments {
  /**
   * This interface was referenced by `Environments`'s JSON-Schema definition
   * via the `patternProperty` "^[a-z\d\-]+$".
   */
  [k: string]: Environment | string[] | undefined;
}
/**
 * A composition of the dependencies of features which can be activated to run tasks or provide a shell
 */
export interface Environment {
  activation?: Activation;
  'channel-priority'?: ChannelPriority;
  channels?: Channels;
  constraints?: Constraints1;
  dependencies?: Dependencies1;
  dev?: Dev;
  features?: Features;
  'no-default-feature'?: NoDefaultFeature;
  platforms?: Platforms;
  'pypi-dependencies'?: PypiDependencies;
  'pypi-options'?: PyPIOptions;
  'solve-group'?: SolveGroup;
  'solve-strategy'?: SolveStrategy;
  target?: Target1;
  tasks?: Tasks;
}
/**
 * The `conda` version constraints. These constrain the versions of packages that may be installed without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints.
 */
export interface Constraints1 {
  [k: string]: string | MatchspecTable | undefined;
}
/**
 * The `conda` dependencies, consisting of a package name and a requirement in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export interface Dependencies1 {
  [k: string]: string | MatchspecTable | undefined;
}
/**
 * The PyPI dependencies of this environment
 */
export interface PypiDependencies {
  [k: string]:
    | string
    | PyPIVersion
    | PyPIGitBranchRequirement
    | PyPIGitTagRequirement
    | PyPIGitRevRequirement
    | PyPIPathRequirement
    | PyPIUrlRequirement
    | undefined;
}
export interface PyPIVersion {
  extras?: Extras;
  index?: Index;
  version?: Version1;
}
export interface PyPIGitBranchRequirement {
  branch?: Branch;
  extras?: Extras;
  git?: Git;
  lfs?: Lfs;
  subdirectory?: Subdirectory;
}
export interface PyPIGitTagRequirement {
  extras?: Extras;
  git?: Git;
  lfs?: Lfs;
  subdirectory?: Subdirectory;
  tag?: Tag;
}
export interface PyPIGitRevRequirement {
  extras?: Extras;
  git?: Git;
  lfs?: Lfs;
  rev?: Rev;
  subdirectory?: Subdirectory;
}
export interface PyPIPathRequirement {
  editable?: Editable;
  extras?: Extras;
  path?: Path;
  subdirectory?: Subdirectory;
}
export interface PyPIUrlRequirement {
  extras?: Extras;
  url?: Url;
}
/**
 * Options related to PyPI indexes for this environment
 */
export interface PyPIOptions {
  'dependency-overrides'?: DependencyOverrides;
  'extra-index-urls'?: ExtraIndexUrls;
  'find-links'?: FindLinks;
  'index-strategy'?: IndexStrategy;
  'index-url'?: IndexUrl;
  'no-binary'?: NoBinary;
  'no-build'?: NoBuild;
  'no-build-isolation'?: NoBuildIsolation;
  'prerelease-mode'?: PrereleaseMode;
  'skip-wheel-filename-check'?: SkipWheelFilenameCheck;
}
/**
 * A list of PyPI dependencies that override the resolved dependencies
 */
export interface DependencyOverrides {
  [k: string]:
    | string
    | PyPIVersion
    | PyPIGitBranchRequirement
    | PyPIGitTagRequirement
    | PyPIGitRevRequirement
    | PyPIPathRequirement
    | PyPIUrlRequirement
    | undefined;
}
/**
 * The path to the directory containing packages
 */
export interface FindLinksPath {
  path?: Path;
}
/**
 * The URL to the html file containing href-links to packages
 */
export interface FindLinksURL {
  url?: Url;
}
/**
 * Machine-specific aspects of this environment
 */
export interface Target1 {
  [k: string]: Target2 | undefined;
}
/**
 * A machine-specific configuration of dependencies and tasks
 */
export interface Target2 {
  activation?: Activation;
  'build-dependencies'?: BuildDependencies;
  constraints?: Constraints;
  dependencies?: Dependencies;
  dev?: Dev;
  'host-dependencies'?: HostDependencies1;
  'pypi-dependencies'?: PypiDependencies;
  tasks?: Tasks;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies1 {
  [k: string]: string | InheritableMatchspecTable | undefined;
}
/**
 * The tasks of the target
 */
export interface Tasks {
  /**
   * This interface was referenced by `Tasks`'s JSON-Schema definition
   * via the `patternProperty` "^[^\s\$]+$".
   */
  [k: string]: TaskInlineTable | DependsOn1[] | string | undefined;
}
/**
 * A precise definition of a task.
 */
export interface TaskInlineTable {
  args?: Args;
  'clean-env'?: CleanEnv;
  cmd?: Cmd;
  cwd?: Cwd;
  'default-environment'?: DefaultEnvironment;
  'depends-on'?: DependsOn;
  depends_on?: DependsOn2;
  description?: Description1;
  env?: Env;
  inputs?: Inputs;
  outputs?: Outputs;
}
/**
 * The arguments of a task.
 */
export interface TaskArgs {
  arg: Arg;
  choices?: Choices;
  default?: Default;
}
/**
 * The dependencies of a task.
 */
export interface DependsOn1 {
  args?: Args1;
  environment?: Environment1;
  task: Task;
}
/**
 * Workspace-wide per-package `exclude-newer` overrides for conda packages
 */
export interface ExcludeNewer1 {
  [k: string]: string | undefined;
}
/**
 * The features of the project
 */
export interface Feature {
  [k: string]: Feature1 | undefined;
}
/**
 * A composable aspect of the project which can contribute dependencies and tasks to an environment
 */
export interface Feature1 {
  activation?: Activation;
  'build-dependencies'?: BuildDependencies;
  'channel-priority'?: ChannelPriority;
  channels?: Channels;
  constraints?: Constraints;
  dependencies?: Dependencies;
  dev?: Dev;
  'host-dependencies'?: HostDependencies1;
  platforms?: Platforms;
  'pypi-dependencies'?: PypiDependencies;
  'pypi-options'?: PyPIOptions;
  'solve-strategy'?: SolveStrategy;
  'system-requirements'?: SystemRequirements;
  target?: Target1;
  tasks?: Tasks;
}
/**
 * The system requirements of this feature
 */
export interface SystemRequirements {
  archspec?: Archspec;
  cuda?: Cuda;
  libc?: Libc;
  linux?: Linux;
  macos?: Macos;
  unix?: Unix;
}
export interface LibcFamily {
  family?: Family;
  version?: Version6;
}
/**
 * The project's metadata information
 */
export interface Workspace3 {
  authors?: Authors1;
  'build-variants'?: BuildVariants;
  'build-variants-files'?: BuildVariantsFiles;
  'channel-priority'?: ChannelPriority;
  channels: Channels;
  'conda-pypi-map'?: CondaPypiMap;
  dependencies?: Dependencies1;
  description?: Description1;
  documentation?: Documentation1;
  'exclude-newer'?: ExcludeNewer;
  homepage?: Homepage1;
  license?: License;
  'license-file'?: LicenseFile1;
  name?: Name1;
  platforms?: Platforms2;
  preview?: Preview;
  'pypi-options'?: PyPIOptions;
  readme?: Readme1;
  repository?: Repository1;
  'requires-pixi'?: RequiresPixi;
  's3-options'?: S3Options;
  'solve-strategy'?: SolveStrategy;
  target?: Target4;
  version?: Version1;
}
/**
 * The build variants of the project
 */
export interface BuildVariants {
  [k: string]: string[] | undefined;
}
/**
 * The mapping configuration for one channel in `conda-pypi-map`.
 */
export interface CondaPypiMapTable {
  location?: Location;
  mapping?: Mapping;
  'mapping-mode'?: MappingMode;
  'same-name-heuristic'?: SameNameHeuristic;
}
/**
 * Inline `conda_name: pypi_name` entries; a list maps one conda package to several PyPI names, `false` marks a package as not available on PyPI. Inline entries override entries from `location`.
 */
export interface Mapping {
  [k: string]: string | string[] | false | undefined;
}
export interface WorkspacePlatform2 {
  archspec?: Archspec;
  cuda?: Cuda1;
  glibc?: Glibc;
  linux?: Linux1;
  macos?: Macos1;
  name?: Name1;
  osx?: Osx;
  platform?: Platform;
  windows?: Windows;
  [k: string]: unknown | undefined;
}
/**
 * The grouped CUDA virtual-package table: `cuda = { driver, arch }`.
 *
 * `driver` maps to `__cuda` (equivalent to the bare `cuda = "12.0"` form);
 * `arch` maps to `__cuda_arch` (GPU compute capability) and requires `driver`.
 */
export interface CudaTable {
  arch?: Arch;
  driver: Driver;
}
/**
 * Options related to S3 for this project
 */
export interface S3Options {
  [k: string]: S3Options1 | undefined;
}
/**
 * Options related to S3 for this project
 */
export interface S3Options1 {
  'endpoint-url': EndpointUrl;
  'force-path-style': ForcePathStyle;
  region: Region;
}
/**
 * The workspace targets
 */
export interface Target4 {
  [k: string]: WorkspaceTarget | undefined;
}
/**
 * Target-specific configuration for a workspace
 */
export interface WorkspaceTarget {
  'build-variants'?: BuildVariants;
}
/**
 * Workspace-wide per-package `exclude-newer` overrides for PyPI packages
 */
export interface PypiExcludeNewer {
  [k: string]: string | undefined;
}
/**
 * Third-party tool configurations, ignored by pixi
 */
export interface Tool {
  [k: string]: unknown | undefined;
}
