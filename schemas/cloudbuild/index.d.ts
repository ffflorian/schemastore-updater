/* eslint-disable */

/**
 * If set to true, automatically map all subsistutions and make them available as environment variables in a single step. If set to false, ignore substitutions for that step. Can be used for a build step or for an entire build.
 */
export type AutomapSubstitutions = boolean;

/**
 * A build resource in the Cloud Build API.
 */
export interface GoogleCloudBuildBuildConfigFile {
  /**
   * Required. The operations to be performed on the workspace.
   */
  steps: BuildStep[];
  /**
   * Google Cloud Storage bucket where logs should be written. Logs file names will be of the format ${logs_bucket}/log-${build_id}.txt.
   */
  logsBucket?: string;
  /**
   * Tags for organizing and filtering builds.
   */
  tags?: string[];
  /**
   * Substitutions data for Build resource.
   */
  substitutions?: {
    [k: string]: string | undefined;
  };
  /**
   * A list of images to be pushed upon the successful completion of all build steps. The images are pushed using the builder service account's credentials. The digests of the pushed images will be stored in the Build resource's results field. If any of the images fail to be pushed, the build status is marked FAILURE.
   */
  images?: string[];
  options?: BuildOptions;
  artifacts?: Artifacts;
  /**
   * Amount of time that this build should be allowed to run, to second granularity. If this amount of time elapses, work on the build will cease and the build status will be TIMEOUT.
   */
  timeout?: string;
  /**
   * Secrets to decrypt using Cloud Key Management Service.
   */
  secrets?: Secret[];
  /**
   * Use this field to specify the IAM service account to use at build time.
   */
  serviceAccount?: string;
  /**
   * Specifies the amount of time a build can be queued. If a build is in the queue for longer than the value set in queueTtl, the build expires and the build status is set to EXPIRED.
   */
  queueTtl?: string;
  [k: string]: unknown | undefined;
}
/**
 * A step in the build pipeline.
 */
export interface BuildStep {
  /**
   * Required. The name of the container image that will run this particular build step. If the image is available in the host's Docker daemon's cache, it will be run directly. If not, the host will attempt to pull the image first, using the builder service account's credentials if necessary.
   *
   * The Docker daemon's cache will already have the latest versions of all of the officially supported build steps. The Docker daemon will also have cached many of the layers for some popular images, like "ubuntu", "debian", but they will be refreshed at the time you attempt to use them.
   *
   * If you built an image in a previous build step, it will be stored in the host's Docker daemon's cache and is available to use as the name for a later build step.
   */
  name?: string;
  /**
   * In a build step, if you set the value of the allowFailure field to true, and the build step fails, then the build succeeds as long as all other build steps in that build succeed.
   */
  allowFailure?: boolean;
  /**
   * Specify that a build step failure can be ignored when that step returns a particular exit code.
   */
  allowExitCodes?: number[];
  automapSubstitutions?: AutomapSubstitutions;
  /**
   * The ID(s) of the step(s) that this build step depends on. This build step will not start until all the build steps in waitFor have completed successfully. If waitFor is empty, this build step will start when all previous build steps in the list have completed successfully. If waitFor is set to '-', the step runs immediately when the build starts.
   */
  waitFor?: string[];
  /**
   * A list of environment variable definitions to be used when running a step. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
   */
  env?: string[];
  /**
   * Entrypoint to be used instead of the build step image's default entrypoint. If unset, the image's default entrypoint is used.
   */
  entrypoint?: string;
  /**
   * Specify a shell script to execute in the step. If you specify script in a build step, you cannot specify args or entrypoint in the same step.
   */
  script?: string;
  /**
   * List of volumes to mount into the build step. Each volume is created as an empty volume prior to execution of the build step. Upon completion of the build, volumes and their contents are discarded. Using a named volume in only one step is not valid as it is indicative of a build request with an incorrect configuration.
   */
  volumes?: Volume[];
  /**
   * A list of arguments that will be presented to the step when it is started.
   *
   * If the image used to run the step's container has an entrypoint, the args are used as arguments to that entrypoint. If the image does not define an entrypoint, the first element in args is used as the entrypoint, and the remainder will be used as arguments.
   */
  args?: string[];
  /**
   * Time limit for executing this build step. If not defined, the step has no time limit and will be allowed to continue to run until either it completes or the build itself times out.
   */
  timeout?: string;
  /**
   * Unique identifier for this build step, used in waitFor to reference this build step as a dependency.
   */
  id?: string;
  /**
   * A list of environment variables which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's Secret.
   */
  secretEnv?: string[];
  /**
   * Working directory to use when running this step's container.
   *
   * If this value is a relative path, it is relative to the build's working directory. If this value is absolute, it may be outside the build's working directory, in which case the contents of the path may not be persisted across build step executions, unless a volume for that path is specified. If the build specifies a RepoSource with dir and a step with a dir, which specifies an absolute path, the RepoSource dir is ignored for the step's execution.
   */
  dir?: string;
}
/**
 * Volume describes a Docker container volume which is mounted into build steps in order to persist files across build step execution.
 */
export interface Volume {
  /**
   * Name of the volume to mount. Volume names must be unique per build step and must be valid names for Docker volumes. Each named volume must be used by at least two build steps.
   */
  name?: string;
  /**
   * Path at which to mount the volume. Paths must be absolute and cannot conflict with other volume paths on the same build step or with certain reserved volume paths.
   */
  path?: string;
  [k: string]: unknown | undefined;
}
/**
 * Special options for this build.
 */
export interface BuildOptions {
  automapSubstitutions?: AutomapSubstitutions;
  /**
   * Compute Engine machine type on which to run the build.
   */
  machineType?: 'E2_HIGHCPU_8' | 'E2_HIGHCPU_32' | 'E2_MEDIUM' | 'N1_HIGHCPU_8' | 'N1_HIGHCPU_32' | 'UNSPECIFIED';
  /**
   * Global list of volumes to mount for ALL build steps. Each volume is created as an empty volume prior to starting the build process. Upon completion of the build, volumes and their contents are discarded. Global volume names and paths cannot conflict with the volumes defined a build step. Using a global volume in a build with only one step is not valid as it is indicative of a build request with an incorrect configuration.
   */
  volumes?: Volume[];
  /**
   * Option to define build log streaming behavior to Google Cloud Storage.
   */
  logStreamingOption?: 'STREAM_DEFAULT' | 'STREAM_ON' | 'STREAM_OFF';
  /**
   * Set the value of this field to the resource name of the private pool to run the build.
   */
  pool?: {
    /**
     * Required. The full resource name of the private pool of the form 'projects/$PRIVATEPOOL_PROJECT_ID/locations/$REGION/workerPools/$PRIVATEPOOL_ID'.
     */
    name: string;
  };
  /**
   * A list of global environment variable definitions that will exist for all build steps in this build.
   *
   * If a variable is defined both globally and in a build step, the variable will use the build step value. The elements are of the form "KEY=VALUE" for the environment variable "KEY" being given the value "VALUE".
   */
  env?: string[];
  /**
   * Option to specify the logging mode, which determines where the logs are stored.
   */
  logging?: 'LOGGING_UNSPECIFIED' | 'LEGACY' | 'GCS_ONLY' | 'CLOUD_LOGGING_ONLY' | 'NONE';
  /**
   * Configure Cloud Build to create a default logs bucket within your own project in the same region as your build.
   */
  defaultLogsBucketBehavior?: 'DEFAULT_LOGS_BUCKET_BEHAVIOR_UNSPECIFIED' | 'REGIONAL_USER_OWNED_BUCKET';
  /**
   * Requested verifiability options.
   */
  requestedVerifyOption?: 'NOT_VERIFIED' | 'VERIFIED';
  /**
   * Option to specify behavior when there is an error in the substitution checks.
   */
  substitutionOption?: 'MUST_MATCH' | 'ALLOW_LOOSE';
  /**
   * Use this option to explicitly enable or disable bash parameter expansion in substitutions.
   *
   * If your build is invoked by a trigger, the dynamicSubstitutions field is always set to true and does not need to be specified in your build config file. If your build is invoked manually, you must set the dynamicSubstitutions field to true for bash parameter expansions to be interpreted when running your build.
   */
  dynamicSubstitutions?: boolean;
  /**
   * Requested disk size for the VM that runs the build.
   *
   * Note that this is *NOT* "disk free"; some of the space will be used by the operating system and build utilities. Also note that this is the minimum disk size that will be allocated for the build -- the build may run with a larger disk than requested. At present, the maximum disk size is 2000GB; builds that request more than the maximum are rejected with an error.
   */
  diskSizeGb?: number | string;
  /**
   * A list of global environment variables, which are encrypted using a Cloud Key Management Service crypto key. These values must be specified in the build's Secret. These variables will be available to all build steps in this build.
   */
  secretEnv?: string[];
  /**
   * Requested hash for SourceProvenance.
   */
  sourceProvenanceHash?: ('NONE' | 'SHA256' | 'MD5')[];
}
/**
 * Artifacts produced by the build that should be uploaded upon successful completion of all build steps.
 */
export interface Artifacts {
  objects?: ArtifactObjects;
  /**
   * Allows you to upload non-container Go modules to Go repositories in Artifact Registry.
   */
  goModules?: GoModules[];
  /**
   * Allows you to upload non-container Java artifacts to Maven repositories in Artifact Registry.
   */
  mavenArtifacts?: MavenArtifacts[];
  /**
   * Allows you to upload Python packages to Artifact Registry.
   */
  pythonPackages?: PythonPackages[];
  /**
   * Uploads your built NPM packages to supported repositories.
   */
  npmPackages?: NpmPackages[];
  [k: string]: unknown | undefined;
}
/**
 * A list of objects to be uploaded to Cloud Storage upon successful completion of all build steps. Files in the workspace matching specified paths globs will be uploaded to the specified Cloud Storage location using the builder service account's credentials. The location and generation of the uploaded objects will be stored in the Build resource's results field. If any objects fail to be pushed, the build is marked FAILURE.
 */
export interface ArtifactObjects {
  /**
   * Cloud Storage bucket and optional object path, in the form "gs://bucket/path/to/somewhere/". Files in the workspace matching any path pattern will be uploaded to Cloud Storage with this location as a prefix.
   */
  location?: string;
  /**
   * Path globs used to match files in the build's workspace.
   */
  paths?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Allows you to upload non-container Go modules to Go repositories in Artifact Registry.
 */
export interface GoModules {
  /**
   * The name of your Go repository in Artifact Registry.
   */
  repositoryName: string;
  /**
   * The location for your repository in Artifact Registry.
   */
  repositoryLocation: string;
  /**
   * The ID of the Google Cloud project that contains your Artifact Registry Go repository.
   */
  repositoryProject_id: string;
  /**
   * The path to the go.mod file in the build's workspace.
   */
  sourcePath: string;
  /**
   * The local directory that contains the Go module to upload. It is recommended to use an absolute path for the value.
   */
  modulePath: string;
  /**
   * The version of the Go module.
   */
  moduleVersion: string;
}
/**
 * Allows you to upload non-container Java artifacts to Maven repositories in Artifact Registry.
 */
export interface MavenArtifacts {
  /**
   * Required. Name of the Artifact Registry repository to store Java artifacts.
   */
  repository: string;
  /**
   * Required. The application file path.
   */
  path: string;
  /**
   * Required. Name of your package file created from your build step
   */
  artifactId: string;
  /**
   * Required. Uniquely identifies your project across all Maven projects, in the format com.mycompany.app.
   */
  groupId: string;
  /**
   * Required. The version number for your application.
   */
  version: string;
}
/**
 * Allows you to upload Python packages to Artifact Registry.
 */
export interface PythonPackages {
  /**
   * Required. Name of the Artifact Registry repository to store the Python package.
   */
  repository: string;
  /**
   * Required. The package file paths.
   */
  paths: string[];
}
/**
 * Uploads your built NPM packages to supported repositories.
 */
export interface NpmPackages {
  /**
   * Required. Name of the Artifact Registry repository to store the NPM package.
   */
  repository: string;
  /**
   * Required. The path for the local directory containing the NPM package that you want to upload to Artifact Registry. Google recommends using an absolute path. Your packagePath value can be . to use the current working directory, but the field cannot be omitted or left empty. This directory must contain a package.json file.
   */
  packagePath: string;
}
/**
 * Pairs a set of secret environment variables containing encrypted values with the Cloud KMS key to use to decrypt the value.
 */
export interface Secret {
  /**
   * Cloud KMS key name to use to decrypt these envs.
   */
  kmsKeyName?: string;
  /**
   * Map of environment variable name to its encrypted value. Secret environment variables must be unique across all of a build's secrets, and must be used by at least one build step. Values can be at most 64 KB in size. There can be at most 100 secret values across all of a build's secrets.
   */
  secretEnv?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
