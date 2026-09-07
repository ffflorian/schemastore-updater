/* eslint-disable */

/**
 * A reference to a container. Can be specified as a container ID string or as an object with the container ID as the key and optional configuration as the value.
 */
export type ContainerReferenceModel =
  | string
  | {
      [k: string]: ContainerReferenceConfigModel | undefined;
    };

export interface HttpsJsonSchemastoreOrgBitriseStepJson {
  /**
   * The human-readable title of the Step.
   */
  title?: string;
  /**
   * A short summary of what the Step does.
   */
  summary?: string;
  /**
   * A more detailed overview of the Step's function and configuration.
   */
  description?: string;
  /**
   * A web URL where users can find more information about the Step or the tools and services it implements.
   */
  website?: string;
  /**
   * The URL of the repository of the Step's source code.
   */
  source_code_url?: string;
  /**
   * A URL where users can get support for the Step.
   */
  support_url?: string;
  /**
   * The date and time when the Step was published to the Step Library. This is auto-generated and should not be set manually.
   */
  published_at?: string;
  source?: StepSourceModel;
  /**
   * URLs of assets associated with the Step, such as icon images. This is auto-generated and only set in the spec.json file in the Step Library.
   */
  asset_urls?: {
    /**
     * A URL pointing to a Step asset such as an icon image.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * This property defines the host operating systems the Step is compatible with. For example, `linux` or `macos`.
   *
   * Items: The host operating system tag.
   */
  host_os_tags?: string[];
  /**
   * This property defines the project type category of the Step. For example, `flutter` or `ios`.
   *
   * Items: The project type tag.
   */
  project_type_tags?: string[];
  /**
   * This property defines the functional category of the Step. For example, `utility`, `test`, or `notification`.
   *
   * Items: A functional category tag. For example, `utility`, `test`, or `notification`.
   */
  type_tags?: string[];
  /**
   * The dependencies required by the Step.
   */
  dependencies?: DependencyModel[];
  toolkit?: StepToolkitModel;
  deps?: DepsModel;
  /**
   * If this property is true, the Step requires admin user privileges to run.
   */
  is_requires_admin_user?: boolean;
  /**
   * If this property is true, the Step will always run, even if a previous Step in the Workflow failed.
   */
  is_always_run?: boolean;
  /**
   * If this property is true, the build won't fail even if this Step fails. For example, if a Step restoring a cache archive fails, you might still want to run the build.
   */
  is_skippable?: boolean;
  /**
   * This property sets conditions for running a Step. It requires boolean value or a valid Go template expression.
   */
  run_if?: string;
  /**
   * This property defines a time limit for a Step: if the Step runs longer than the defined time, the Step fails. Define the limit in seconds.
   */
  timeout?: number;
  /**
   * This property defines a time limit for a Step that produces no output: if the Step runs for the defined number of seconds without producing any output, the Step fails. Define the limit in seconds.
   */
  no_output_timeout?: number;
  /**
   * Additional metadata related to the Step.
   */
  meta?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * The execution container for this Step. The Step runs inside the specified Docker container.
   */
  execution_container?:
    | string
    | {
        [k: string]: ContainerReferenceConfigModel | undefined;
      };
  /**
   * Service containers to run alongside this Step as background services.
   */
  service_containers?: ContainerReferenceModel[];
  /**
   * The inputs of the Step.
   *
   * Items: An input parameter of the Step.
   */
  inputs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  }[];
  /**
   * The outputs the Step generates.
   *
   * Items: An output parameter of the Step.
   */
  outputs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  }[];
  /**
   * Platform-specific executable binaries
   */
  executables?: {
    [k: string]: ExecutableModel | undefined;
  };
}
/**
 * The source code repository and commit information of the Step.
 */
export interface StepSourceModel {
  /**
   * The Git repository URL of the Step's source code.
   */
  git?: string;
  /**
   * The commit hash for the version tag of the Step's current version.
   */
  commit?: string;
}
export interface DependencyModel {
  /**
   * The package manager used to handle the dependency.
   */
  manager?: string;
  /**
   * The name of the dependency.
   */
  name?: string;
}
/**
 * The toolkit used by the Step.
 */
export interface StepToolkitModel {
  bash?: BashStepToolkitModel;
  go?: GoStepToolkitModel;
}
/**
 * The Bash toolkit configuration for the Step.
 */
export interface BashStepToolkitModel {
  /**
   * The path to the bash script file that serves as the entry point for the Step.
   */
  entry_file?: string;
}
/**
 * The Go toolkit configuration for the Step.
 */
export interface GoStepToolkitModel {
  /**
   * The name of the Go package that serves as the entry point for the Step.
   */
  package_name: string;
}
/**
 * The dependencies required by the Step.
 */
export interface DepsModel {
  /**
   * List of Homebrew dependencies required by the Step.
   */
  brew?: BrewDepModel[];
  /**
   * List of apt-get dependencies required by the Step.
   */
  apt_get?: AptGetDepModel[];
  /**
   * List of dependencies that are only checked for existence.
   */
  check_only?: CheckOnlyDepModel[];
}
/**
 * A Homebrew dependency required by the Step.
 */
export interface BrewDepModel {
  /**
   * The name of the package to be installed via Homebrew.
   */
  name?: string;
  /**
   * The name of the binary. This is optional and can be used if the binary name differs from the package name.
   */
  bin_name?: string;
}
/**
 * An apt-get dependency required by the Step.
 */
export interface AptGetDepModel {
  /**
   * The name of the package to be installed via apt-get.
   */
  name?: string;
  /**
   * The name of the binary. This is optional and can be used if the binary name differs from the package name.
   */
  bin_name?: string;
}
/**
 * A dependency that is only checked for existence.
 */
export interface CheckOnlyDepModel {
  /**
   * The name of the binary or tool to check for. If it is not present on the system, the Step will fail before running.
   */
  name?: string;
}
/**
 * Additional configuration for a container reference.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface ContainerReferenceConfigModel {
  /**
   * If true, the current container instance is discarded and a fresh one is started for this Step.
   */
  recreate?: boolean;
}
/**
 * Platform-specific executable binary.
 */
export interface ExecutableModel {
  /**
   * The URI where the executable binary is stored.
   */
  storage_uri?: string;
  /**
   * The hash of the executable binary for integrity verification.
   */
  hash?: string;
  [k: string]: unknown | undefined;
}
