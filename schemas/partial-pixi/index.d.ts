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
 * The file name of the package
 */
export type FileName = string;
/**
 * The git URL to the repo
 */
export type Git = string;
/**
 * The license of the package
 */
export type License = string;
/**
 * The md5 hash of the package
 */
export type Md5 = string;
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
 * The URL to the package
 */
export type Url = string;
/**
 * The version of the package in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export type Version = string;
/**
 * The md5 hash of the source package
 */
export type Md51 = string;
/**
 * The sha256 hash of the source package
 */
export type Sha2561 = string;
/**
 * The features that define the environment
 */
export type Features = string[];
/**
 * Whether to add the default feature to this environment
 */
export type NoDefaultFeature = boolean;
/**
 * The group name for environments that should be solved together
 */
export type SolveGroup = string;
/**
 * The type of channel priority that is used in the solve.
 * - 'strict': only take the package from the channel it exist in first.
 * - 'disabled': group all dependencies together as if there is no channel difference.
 */
export type ChannelPriority = 'disabled' | 'strict';
/**
 * The priority of the channel
 */
export type Priority = number;
/**
 * The `conda` channels that can be considered when solving environments containing this feature
 */
export type Channels = (string | ChannelInlineTable)[];
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
 * The platforms that the feature supports: a union of all features combined in one environment is used for the environment.
 */
export type Platforms = Platform[];
/**
 * The [PEP 508 extras](https://peps.python.org/pep-0508/#extras) of the package
 */
export type Extras = string[];
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
 * The strategy that is used in the solve.
 * - 'highest': solve all packages to the highest compatible version.
 * - 'lowest': solve all packages to the lowest compatible version.
 * - 'lowest-direct': solve direct dependencies to the lowest compatible version and transitive ones to the highest compatible version.
 */
export type SolveStrategy = 'highest' | 'lowest' | 'lowest-direct';
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
export type Version2 = number | string;
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
      [k: string]: string;
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
export type Description = string;
/**
 * A list of `.gitignore`-style glob patterns that should be watched for changes before this command is run. Environment variables _will_ be expanded.
 */
export type Inputs = string[];
/**
 * A list of `.gitignore`-style glob patterns that are generated by this command. Environment variables _will_ be expanded.
 */
export type Outputs = string[];
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
export type Md52 = string;
/**
 * The name of the build backend package
 */
export type Name = string;
/**
 * The sha256 hash of the package
 */
export type Sha2562 = string;
/**
 * A short description of the project. Can be a string or { workspace = true } to inherit from workspace
 */
export type Description1 = string | WorkspaceInheritance;
/**
 * The URL of the documentation of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Documentation = string | WorkspaceInheritance;
/**
 * The URL of the homepage of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Homepage = string | WorkspaceInheritance;
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
export type Name1 = string | WorkspaceInheritance;
/**
 * The path to the readme file of the project. Can be a path or { workspace = true } to inherit from workspace
 */
export type Readme = string | WorkspaceInheritance;
/**
 * The URL of the repository of the project. Can be a URL or { workspace = true } to inherit from workspace
 */
export type Repository = string | WorkspaceInheritance;
/**
 * The version of the project; we advise use of [SemVer](https://semver.org). Can be a string or { workspace = true } to inherit from workspace
 */
export type Version4 = string | WorkspaceInheritance;
/**
 * The authors of the project
 */
export type Authors1 = string[];
/**
 * Ordered list of variant definition files.
 */
export type BuildVariantsFiles = string[];
/**
 * The URL of the documentation of the project
 */
export type Documentation1 = string;
/**
 * Exclude any package newer than this date
 */
export type ExcludeNewer = string;
/**
 * The URL of the homepage of the project
 */
export type Homepage1 = string;
/**
 * The path to the license file of the project
 */
export type LicenseFile1 = string;
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
  feature?: Feature;
  'host-dependencies'?: HostDependencies2;
  package?: Package;
  project?: Workspace1;
  'pypi-dependencies'?: PypiDependencies2;
  'pypi-options'?: PyPIOptions2;
  'system-requirements'?: SystemRequirements1;
  target?: Target5;
  tasks?: Tasks2;
  tool?: Tool;
  workspace?: Workspace2;
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
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * A precise description of a `conda` package version.
 */
export interface MatchspecTable {
  branch?: Branch;
  build?: Build;
  'build-number'?: BuildNumber;
  channel?: Channel;
  'file-name'?: FileName;
  git?: Git;
  license?: License;
  md5?: Md5;
  path?: Path;
  rev?: Rev;
  sha256?: Sha256;
  subdir?: Subdir;
  subdirectory?: Subdirectory;
  tag?: Tag;
  url?: Url;
  version?: Version;
}
/**
 * The `conda` version constraints. These constrain the versions of packages that may be installed without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints.
 */
export interface Constraints {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The `conda` dependencies, consisting of a package name and a requirement in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export interface Dependencies {
  [k: string]: (string | MatchspecTable) | undefined;
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
  md5?: Md51;
  path?: Path;
  rev?: Rev;
  sha256?: Sha2561;
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
  [k: string]: Environment | string[];
}
/**
 * A composition of the dependencies of features which can be activated to run tasks or provide a shell
 */
export interface Environment {
  features?: Features;
  'no-default-feature'?: NoDefaultFeature;
  'solve-group'?: SolveGroup;
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
  activation?: Activation1;
  'build-dependencies'?: BuildDependencies1;
  'channel-priority'?: ChannelPriority;
  channels?: Channels;
  constraints?: Constraints1;
  dependencies?: Dependencies1;
  dev?: Dev1;
  'host-dependencies'?: HostDependencies;
  platforms?: Platforms;
  'pypi-dependencies'?: PypiDependencies;
  'pypi-options'?: PyPIOptions;
  'solve-strategy'?: SolveStrategy;
  'system-requirements'?: SystemRequirements;
  target?: Target;
  tasks?: Tasks1;
}
/**
 * The scripts used on the activation of environments using this feature
 */
export interface Activation1 {
  env?: Env;
  scripts?: Scripts;
}
/**
 * The build `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface BuildDependencies1 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * A precise description of a `conda` channel, with an optional priority.
 */
export interface ChannelInlineTable {
  channel: Channel;
  priority?: Priority;
}
/**
 * The `conda` version constraints. These constrain the versions of packages that may be installed without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints.
 */
export interface Constraints1 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The `conda` dependencies, consisting of a package name and a requirement in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export interface Dependencies1 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * Source packages whose dependencies should be installed without building the package itself. Useful for development environments.
 */
export interface Dev1 {
  [k: string]: SourceSpecTable | undefined;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The PyPI dependencies of this feature
 */
export interface PypiDependencies {
  [k: string]:
    | (
        | string
        | PyPIVersion
        | PyPIGitBranchRequirement
        | PyPIGitTagRequirement
        | PyPIGitRevRequirement
        | PyPIPathRequirement
        | PyPIUrlRequirement
      )
    | undefined;
}
export interface PyPIVersion {
  extras?: Extras;
  index?: Index;
  version?: Version;
}
export interface PyPIGitBranchRequirement {
  branch?: Branch;
  extras?: Extras;
  git?: Git;
  subdirectory?: Subdirectory;
}
export interface PyPIGitTagRequirement {
  extras?: Extras;
  git?: Git;
  subdirectory?: Subdirectory;
  tag?: Tag;
}
export interface PyPIGitRevRequirement {
  extras?: Extras;
  git?: Git;
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
 * Options related to PyPI indexes for this feature
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
    | (
        | string
        | PyPIVersion
        | PyPIGitBranchRequirement
        | PyPIGitTagRequirement
        | PyPIGitRevRequirement
        | PyPIPathRequirement
        | PyPIUrlRequirement
      )
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
  version?: Version2;
}
/**
 * Machine-specific aspects of this feature
 */
export interface Target {
  [k: string]: Target1 | undefined;
}
/**
 * A machine-specific configuration of dependencies and tasks
 */
export interface Target1 {
  activation?: Activation2;
  'build-dependencies'?: BuildDependencies2;
  constraints?: Constraints2;
  dependencies?: Dependencies2;
  dev?: Dev2;
  'host-dependencies'?: HostDependencies1;
  'pypi-dependencies'?: PypiDependencies1;
  tasks?: Tasks;
}
/**
 * The scripts used on the activation of the project for this target
 */
export interface Activation2 {
  env?: Env;
  scripts?: Scripts;
}
/**
 * The build `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface BuildDependencies2 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The `conda` version constraints. These constrain the versions of packages that may be installed without explicitly requiring them. If the package is installed as a dependency of another package, it must satisfy these constraints.
 */
export interface Constraints2 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The `conda` dependencies, consisting of a package name and a requirement in [MatchSpec](https://github.com/conda/conda/blob/078e7ee79381060217e1ec7f9b0e9cf80ecc8f3f/conda/models/match_spec.py) format
 */
export interface Dependencies2 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * Source packages whose dependencies should be installed without building the package itself. Useful for development environments.
 */
export interface Dev2 {
  [k: string]: SourceSpecTable | undefined;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies1 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The PyPI dependencies for this target
 */
export interface PypiDependencies1 {
  [k: string]:
    | (
        | string
        | PyPIVersion
        | PyPIGitBranchRequirement
        | PyPIGitTagRequirement
        | PyPIGitRevRequirement
        | PyPIPathRequirement
        | PyPIUrlRequirement
      )
    | undefined;
}
/**
 * The tasks of the target
 */
export interface Tasks {
  /**
   * This interface was referenced by `Tasks`'s JSON-Schema definition
   * via the `patternProperty` "^[^\s\$]+$".
   */
  [k: string]: TaskInlineTable | DependsOn1[] | string;
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
  description?: Description;
  env?: Env1;
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
 * A map of environment variables to values, used in the task, these will be overwritten by the shell.
 */
export interface Env1 {
  [k: string]: string | undefined;
}
/**
 * The tasks provided by this feature
 */
export interface Tasks1 {
  /**
   * This interface was referenced by `Tasks1`'s JSON-Schema definition
   * via the `patternProperty` "^[^\s\$]+$".
   */
  [k: string]: TaskInlineTable | DependsOn1[] | string;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies2 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The package's metadata information
 */
export interface Package {
  authors?: Authors;
  build: Build1;
  'build-dependencies'?: BuildDependencies3;
  description?: Description1;
  documentation?: Documentation;
  homepage?: Homepage;
  'host-dependencies'?: HostDependencies3;
  license?: License2;
  'license-file'?: LicenseFile;
  name?: Name1;
  readme?: Readme;
  repository?: Repository;
  'run-dependencies'?: RunDependencies;
  target?: Target3;
  version?: Version4;
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
  channels?: Channels;
  config?: Config;
  source?: SourceLocation;
  target?: Target2;
}
/**
 * Additional dependencies to install alongside the build backend
 */
export interface AdditionalDependencies {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The build backend to instantiate
 */
export interface BuildBackend {
  'additional-dependencies'?: AdditionalDependencies1;
  branch?: Branch;
  build?: Build;
  'build-number'?: BuildNumber;
  channel?: Channel;
  channels?: Channels;
  'file-name'?: FileName;
  git?: Git;
  license?: License;
  md5?: Md52;
  name?: Name;
  path?: Path;
  rev?: Rev;
  sha256?: Sha2562;
  subdir?: Subdir;
  subdirectory?: Subdirectory;
  tag?: Tag;
  url?: Url;
  version?: Version;
}
/**
 * Additional dependencies to install alongside the build backend
 */
export interface AdditionalDependencies1 {
  [k: string]: (string | MatchspecTable) | undefined;
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
export interface Target2 {
  [k: string]: BuildTarget | undefined;
}
/**
 * Target-specific build configuration for different platforms
 */
export interface BuildTarget {
  config?: Config1;
}
/**
 * Target-specific configuration for the build backend
 */
export interface Config1 {
  [k: string]: unknown | undefined;
}
/**
 * The build `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface BuildDependencies3 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The host `conda` dependencies, used in the build process. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface HostDependencies3 {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * The `conda` dependencies required at runtime. See https://pixi.sh/latest/build/dependency_types/ for more information.
 */
export interface RunDependencies {
  [k: string]: (string | MatchspecTable) | undefined;
}
/**
 * Machine-specific aspects of the package
 */
export interface Target3 {
  [k: string]: Target1 | undefined;
}
/**
 * The project's metadata information
 */
export interface Workspace1 {
  authors?: Authors1;
  'build-variants'?: BuildVariants;
  'build-variants-files'?: BuildVariantsFiles;
  'channel-priority'?: ChannelPriority;
  channels: Channels;
  'conda-pypi-map'?: CondaPypiMap;
  description?: Description;
  documentation?: Documentation1;
  'exclude-newer'?: ExcludeNewer;
  homepage?: Homepage1;
  license?: License;
  'license-file'?: LicenseFile1;
  name?: Name;
  platforms?: Platforms;
  preview?: Preview;
  'pypi-options'?: PyPIOptions1;
  readme?: Readme1;
  repository?: Repository1;
  'requires-pixi'?: RequiresPixi;
  's3-options'?: S3Options;
  'solve-strategy'?: SolveStrategy;
  target?: Target4;
  version?: Version;
}
/**
 * The build variants of the project
 */
export interface BuildVariants {
  [k: string]: string[] | undefined;
}
/**
 * The `conda` to PyPI mapping configuration
 */
export interface CondaPypiMap {
  [k: string]: string | undefined;
}
/**
 * Options related to PyPI indexes for this project
 */
export interface PyPIOptions1 {
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
  'build-variants'?: BuildVariants1;
}
/**
 * The build variants for this workspace target
 */
export interface BuildVariants1 {
  [k: string]: string[] | undefined;
}
/**
 * The PyPI dependencies
 */
export interface PypiDependencies2 {
  [k: string]:
    | (
        | string
        | PyPIVersion
        | PyPIGitBranchRequirement
        | PyPIGitTagRequirement
        | PyPIGitRevRequirement
        | PyPIPathRequirement
        | PyPIUrlRequirement
      )
    | undefined;
}
/**
 * Options related to PyPI indexes, on the default feature
 */
export interface PyPIOptions2 {
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
 * The system requirements of the project
 */
export interface SystemRequirements1 {
  archspec?: Archspec;
  cuda?: Cuda;
  libc?: Libc;
  linux?: Linux;
  macos?: Macos;
  unix?: Unix;
}
/**
 * The targets of the project
 */
export interface Target5 {
  [k: string]: Target1 | undefined;
}
/**
 * The tasks of the project
 */
export interface Tasks2 {
  /**
   * This interface was referenced by `Tasks2`'s JSON-Schema definition
   * via the `patternProperty` "^[^\s\$]+$".
   */
  [k: string]: TaskInlineTable | DependsOn1[] | string;
}
/**
 * Third-party tool configurations, ignored by pixi
 */
export interface Tool {
  [k: string]: unknown | undefined;
}
/**
 * The workspace's metadata information
 */
export interface Workspace2 {
  authors?: Authors1;
  'build-variants'?: BuildVariants;
  'build-variants-files'?: BuildVariantsFiles;
  'channel-priority'?: ChannelPriority;
  channels: Channels;
  'conda-pypi-map'?: CondaPypiMap;
  description?: Description;
  documentation?: Documentation1;
  'exclude-newer'?: ExcludeNewer;
  homepage?: Homepage1;
  license?: License;
  'license-file'?: LicenseFile1;
  name?: Name;
  platforms?: Platforms;
  preview?: Preview;
  'pypi-options'?: PyPIOptions1;
  readme?: Readme1;
  repository?: Repository1;
  'requires-pixi'?: RequiresPixi;
  's3-options'?: S3Options;
  'solve-strategy'?: SolveStrategy;
  target?: Target4;
  version?: Version;
}
