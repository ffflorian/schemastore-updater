/* eslint-disable */

/**
 * ZarfPackage the top-level structure of a Zarf config file.
 */
export interface HttpsGithubComZarfDevZarfSrcApiV1Alpha1ZarfPackage {
  /**
   * The API version of the Zarf package.
   */
  apiVersion?: 'zarf.dev/v1alpha1';
  /**
   * The kind of Zarf package.
   */
  kind: 'ZarfInitConfig' | 'ZarfPackageConfig';
  metadata?: ZarfMetadata;
  build?: ZarfBuildData;
  /**
   * List of components to deploy in this package.
   *
   * @minItems 1
   */
  components: [ZarfComponent, ...ZarfComponent[]];
  /**
   * Constant template values applied on deploy for K8s resources.
   */
  constants?: Constant[];
  /**
   * Variable template values applied on deploy for K8s resources.
   */
  variables?: InteractiveVariable[];
  /**
   * This interface was referenced by `HttpsGithubComZarfDevZarfSrcApiV1Alpha1ZarfPackage`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Package metadata.
 */
export interface ZarfMetadata {
  /**
   * Name to identify this Zarf package.
   */
  name: string;
  /**
   * Additional information about this package.
   */
  description?: string;
  /**
   * Generic string set by a package author to track the package version (Note: ZarfInitConfigs will always be versioned to the CLIVersion they were created with).
   */
  version?: string;
  /**
   * Link to package information when online.
   */
  url?: string;
  /**
   * An image URL to embed in this package (Reserved for future use in Zarf UI).
   */
  image?: string;
  /**
   * Disable compression of this package.
   */
  uncompressed?: boolean;
  /**
   * The target cluster architecture for this package.
   */
  architecture?: string;
  /**
   * Yaml OnLy Online (YOLO): True enables deploying a Zarf package without first running zarf init against the cluster. This is ideal for connected environments where you want to use existing VCS and container registries.
   */
  yolo?: boolean;
  /**
   * Comma-separated list of package authors (including contact info).
   */
  authors?: string;
  /**
   * Link to package documentation when online.
   */
  documentation?: string;
  /**
   * Link to package source code when online.
   */
  source?: string;
  /**
   * Name of the distributing entity, organization or individual.
   */
  vendor?: string;
  /**
   * Checksum of a checksums.txt file that contains checksums all the layers within the package.
   */
  aggregateChecksum?: string;
  /**
   * Annotations contains arbitrary metadata about the package.
   * Users are encouraged to follow OCI image-spec https://github.com/opencontainers/image-spec/blob/main/annotations.md
   */
  annotations?: {
    [k: string]: string | undefined;
  };
  /**
   * AllowNamespaceOverride controls whether a package's namespace may be overridden.
   */
  allowNamespaceOverride?: boolean;
  /**
   * This interface was referenced by `ZarfMetadata`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Zarf-generated package build data.
 */
export interface ZarfBuildData {
  /**
   * The machine name that created this package.
   */
  terminal: string;
  /**
   * The username who created this package.
   */
  user: string;
  /**
   * The architecture this package was created on.
   */
  architecture: string;
  /**
   * The timestamp when this package was created.
   */
  timestamp: string;
  /**
   * The version of Zarf used to build this package.
   */
  version: string;
  /**
   * Any migrations that have been run on this package.
   */
  migrations?: string[];
  /**
   * Any registry domains that were overridden on package create when pulling images.
   */
  registryOverrides?: {
    [k: string]: string | undefined;
  };
  /**
   * Whether this package was created with differential components.
   */
  differential?: boolean;
  /**
   * Version of a previously built package used as the basis for creating this differential package.
   */
  differentialPackageVersion?: string;
  /**
   * List of components that were not included in this package due to differential packaging.
   */
  differentialMissing?: string[];
  /**
   * The minimum version of Zarf that does not have breaking package structure changes.
   */
  lastNonBreakingVersion?: string;
  /**
   * The flavor of Zarf used to build this package.
   */
  flavor?: string;
  /**
   * This interface was referenced by `ZarfBuildData`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfComponent is the primary functional grouping of assets to deploy by Zarf.
 */
export interface ZarfComponent {
  /**
   * The name of the component.
   */
  name: string;
  /**
   * Message to include during package deploy describing the purpose of this component.
   */
  description?: string;
  /**
   * Determines the default Y/N state for installing this component on package deploy.
   */
  default?: boolean;
  /**
   * Do not prompt user to install this component.
   */
  required?: boolean;
  only?: ZarfComponentOnlyTarget;
  /**
   * [Deprecated] Create a user selector field based on all components in the same group. This will be removed in Zarf v1.0.0. Consider using 'only.flavor' instead.
   */
  group?: string;
  import?: ZarfComponentImport;
  /**
   * Kubernetes manifests to be included in a generated Helm chart on package deploy.
   */
  manifests?: ZarfManifest[];
  /**
   * Helm charts to install during package deploy.
   */
  charts?: ZarfChart[];
  /**
   * Datasets to inject into a container in the target cluster.
   */
  dataInjections?: ZarfDataInjection[];
  /**
   * Files or folders to place on disk during package deployment.
   */
  files?: ZarfFile[];
  /**
   * List of OCI images to include in the package.
   */
  images?: string[];
  /**
   * List of git repos to include in the package.
   */
  repos?: string[];
  scripts?: DeprecatedZarfComponentScripts;
  actions?: ZarfComponentActions;
  /**
   * List of resources to health check after deployment
   */
  healthChecks?: NamespacedObjectKindReference[];
  /**
   * This interface was referenced by `ZarfComponent`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Filter when this component is included in package creation or deployment.
 */
export interface ZarfComponentOnlyTarget {
  /**
   * Only deploy component to specified OS.
   */
  localOS?: 'linux' | 'darwin' | 'windows';
  cluster?: ZarfComponentOnlyCluster;
  /**
   * Only include this component when a matching '--flavor' is specified on 'zarf package create'.
   */
  flavor?: string;
  /**
   * This interface was referenced by `ZarfComponentOnlyTarget`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Only deploy component to specified clusters.
 */
export interface ZarfComponentOnlyCluster {
  /**
   * Only create and deploy to clusters of the given architecture.
   */
  architecture?: 'amd64' | 'arm64';
  /**
   * A list of kubernetes distros this package works with (Reserved for future use).
   */
  distros?: string[];
  /**
   * This interface was referenced by `ZarfComponentOnlyCluster`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Import a component from another Zarf package.
 */
export interface ZarfComponentImport {
  /**
   * The name of the component to import from the referenced zarf.yaml.
   */
  name?: string;
  /**
   * The path to the directory containing the zarf.yaml to import.
   */
  path?: string;
  /**
   * [beta] The URL to a Zarf package to import via OCI.
   */
  url?: string;
  /**
   * This interface was referenced by `ZarfComponentImport`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfManifest defines raw manifests Zarf will deploy as a helm chart.
 */
export interface ZarfManifest {
  /**
   * A name to give this collection of manifests; this will become the name of the dynamically-created helm chart.
   */
  name: string;
  /**
   * The namespace to deploy the manifests to.
   */
  namespace?: string;
  /**
   * List of local K8s YAML files or remote URLs to deploy (in order).
   */
  files?: string[];
  /**
   * Allow traversing directory above the current directory if needed for kustomization.
   */
  kustomizeAllowAnyDirectory?: boolean;
  /**
   * List of local kustomization paths or remote URLs to include in the package.
   */
  kustomizations?: string[];
  /**
   * Whether to not wait for manifest resources to be ready before continuing.
   */
  noWait?: boolean;
  /**
   * This interface was referenced by `ZarfManifest`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfChart defines a helm chart to be deployed.
 */
export interface ZarfChart {
  /**
   * The name of the chart within Zarf; note that this must be unique and does not need to be the same as the name in the chart repo.
   */
  name: string;
  /**
   * The version of the chart to deploy; for git-based charts this is also the tag of the git repo by default (when not using the '@' syntax for 'repos').
   */
  version?: string;
  /**
   * The URL of the OCI registry, chart repository, or git repo where the helm chart is stored.
   */
  url?: string;
  /**
   * The name of a chart within a Helm repository (defaults to the Zarf name of the chart).
   */
  repoName?: string;
  /**
   * (git repo only) The sub directory to the chart within a git repo.
   */
  gitPath?: string;
  /**
   * The path to a local chart's folder or .tgz archive.
   */
  localPath?: string;
  /**
   * The namespace to deploy the chart to.
   */
  namespace?: string;
  /**
   * The name of the Helm release to create (defaults to the Zarf name of the chart).
   */
  releaseName?: string;
  /**
   * Whether to not wait for chart resources to be ready before continuing.
   */
  noWait?: boolean;
  /**
   * List of local values file paths or remote URLs to include in the package; these will be merged together when deployed.
   */
  valuesFiles?: string[];
  /**
   * [alpha] List of variables to set in the Helm chart.
   */
  variables?: ZarfChartVariable[];
  /**
   * Whether or not to validate the values.yaml schema, defaults to true. Necessary in the air-gap when the JSON Schema references resources on the internet.
   */
  schemaValidation?: boolean;
  /**
   * This interface was referenced by `ZarfChart`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfChartVariable represents a variable that can be set for a Helm chart overrides.
 */
export interface ZarfChartVariable {
  /**
   * The name of the variable.
   */
  name: string;
  /**
   * A brief description of what the variable controls.
   */
  description: string;
  /**
   * The path within the Helm chart values where this variable applies.
   */
  path: string;
  /**
   * This interface was referenced by `ZarfChartVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfDataInjection is a data-injection definition.
 */
export interface ZarfDataInjection {
  /**
   * Either a path to a local folder/file or a remote URL of a file to inject into the given target pod + container.
   */
  source: string;
  target: ZarfContainerTarget;
  /**
   * Compress the data before transmitting using gzip. Note: this requires support for tar/gzip locally and in the target image.
   */
  compress?: boolean;
  /**
   * This interface was referenced by `ZarfDataInjection`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * The target pod + container to inject the data into.
 */
export interface ZarfContainerTarget {
  /**
   * The namespace to target for data injection.
   */
  namespace: string;
  /**
   * The K8s selector to target for data injection.
   */
  selector: string;
  /**
   * The container name to target for data injection.
   */
  container: string;
  /**
   * The path within the container to copy the data into.
   */
  path: string;
  /**
   * This interface was referenced by `ZarfContainerTarget`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfFile defines a file to deploy.
 */
export interface ZarfFile {
  /**
   * Local folder or file path or remote URL to pull into the package.
   */
  source: string;
  /**
   * (files only) Optional SHA256 checksum of the file.
   */
  shasum?: string;
  /**
   * The absolute or relative path where the file or folder should be copied to during package deploy.
   */
  target: string;
  /**
   * (files only) Determines if the file should be made executable during package deploy.
   */
  executable?: boolean;
  /**
   * List of symlinks to create during package deploy.
   */
  symlinks?: string[];
  /**
   * Local folder or file to be extracted from a 'source' archive.
   */
  extractPath?: string;
  /**
   * This interface was referenced by `ZarfFile`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * [Deprecated] (replaced by actions) Custom commands to run before or after package deployment. This will be removed in Zarf v1.0.0.
 */
export interface DeprecatedZarfComponentScripts {
  /**
   * Show the output of the script during package deployment.
   */
  showOutput?: boolean;
  /**
   * Timeout in seconds for the script.
   */
  timeoutSeconds?: number;
  /**
   * Retry the script if it fails.
   */
  retry?: boolean;
  /**
   * Scripts to run before the component is added during package create.
   */
  prepare?: string[];
  /**
   * Scripts to run before the component is deployed.
   */
  before?: string[];
  /**
   * Scripts to run after the component successfully deploys.
   */
  after?: string[];
  /**
   * This interface was referenced by `DeprecatedZarfComponentScripts`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Custom commands to run at various stages of a package lifecycle.
 */
export interface ZarfComponentActions {
  onCreate?: ZarfComponentActionSet;
  onDeploy?: ZarfComponentActionSet1;
  onRemove?: ZarfComponentActionSet2;
  /**
   * This interface was referenced by `ZarfComponentActions`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Actions to run during package creation.
 */
export interface ZarfComponentActionSet {
  defaults?: ZarfComponentActionDefaults;
  /**
   * Actions to run at the start of an operation.
   */
  before?: ZarfComponentAction[];
  /**
   * Actions to run at the end of an operation.
   */
  after?: ZarfComponentAction[];
  /**
   * Actions to run if all operations succeed.
   */
  onSuccess?: ZarfComponentAction[];
  /**
   * Actions to run if all operations fail.
   */
  onFailure?: ZarfComponentAction[];
  /**
   * This interface was referenced by `ZarfComponentActionSet`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet2`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Default configuration for all actions in this set.
 */
export interface ZarfComponentActionDefaults {
  /**
   * Hide the output of commands during execution (default false).
   */
  mute?: boolean;
  /**
   * Default timeout in seconds for commands (default to 0, no timeout).
   */
  maxTotalSeconds?: number;
  /**
   * Retry commands given number of times if they fail (default 0).
   */
  maxRetries?: number;
  /**
   * Working directory for commands (default CWD).
   */
  dir?: string;
  /**
   * Additional environment variables for commands.
   */
  env?: string[];
  shell?: Shell;
  /**
   * This interface was referenced by `ZarfComponentActionDefaults`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * (cmd only) Indicates a preference for a shell for the provided cmd to be executed in on supported operating systems.
 */
export interface Shell {
  /**
   * (default 'powershell') Indicates a preference for the shell to use on Windows systems (note that choosing 'cmd' will turn off migrations like touch -> New-Item)
   */
  windows?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on Linux systems
   */
  linux?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on macOS systems
   */
  darwin?: string;
  /**
   * This interface was referenced by `Shell`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `Shell1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * ZarfComponentAction represents a single action to run during a zarf package operation.
 */
export interface ZarfComponentAction {
  /**
   * Hide the output of the command during package deployment (default false).
   */
  mute?: boolean;
  /**
   * Timeout in seconds for the command (default to 0, no timeout for cmd actions and 300, 5 minutes for wait actions).
   */
  maxTotalSeconds?: number;
  /**
   * Retry the command if it fails up to given number of times (default 0).
   */
  maxRetries?: number;
  /**
   * The working directory to run the command in (default is CWD).
   */
  dir?: string;
  /**
   * Additional environment variables to set for the command.
   */
  env?: string[];
  /**
   * The command to run. Must specify either cmd or wait for the action to do anything.
   */
  cmd?: string;
  shell?: Shell1;
  /**
   * [Deprecated] (replaced by setVariables) (onDeploy/cmd only) The name of a variable to update with the output of the command. This variable will be available to all remaining actions and components in the package. This will be removed in Zarf v1.0.0.
   */
  setVariable?: string;
  /**
   * (onDeploy/cmd only) An array of variables to update with the output of the command. These variables will be available to all remaining actions and components in the package.
   */
  setVariables?: Variable[];
  /**
   * Description of the action to be displayed during package execution instead of the command.
   */
  description?: string;
  wait?: ZarfComponentActionWait;
  /**
   * This interface was referenced by `ZarfComponentAction`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * (cmd only) Indicates a preference for a shell for the provided cmd to be executed in on supported operating systems.
 */
export interface Shell1 {
  /**
   * (default 'powershell') Indicates a preference for the shell to use on Windows systems (note that choosing 'cmd' will turn off migrations like touch -> New-Item)
   */
  windows?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on Linux systems
   */
  linux?: string;
  /**
   * (default 'sh') Indicates a preference for the shell to use on macOS systems
   */
  darwin?: string;
  /**
   * This interface was referenced by `Shell`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `Shell1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Variable represents a variable that has a value set programmatically
 */
export interface Variable {
  /**
   * The name to be used for the variable
   */
  name: string;
  /**
   * Whether to mark this variable as sensitive to not print it in the log
   */
  sensitive?: boolean;
  /**
   * Whether to automatically indent the variable's value (if multiline) when templating. Based on the number of chars before the start of ###ZARF_VAR_.
   */
  autoIndent?: boolean;
  /**
   * An optional regex pattern that a variable value must match before a package deployment can continue.
   */
  pattern?: string;
  /**
   * Changes the handling of a variable to load contents differently (i.e. from a file rather than as a raw variable - templated files should be kept below 1 MiB)
   */
  type?: 'raw' | 'file';
  /**
   * This interface was referenced by `Variable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Wait for a condition to be met before continuing. Must specify either cmd or wait for the action. See the 'zarf tools wait-for' command for more info.
 */
export interface ZarfComponentActionWait {
  cluster?: ZarfComponentActionWaitCluster;
  network?: ZarfComponentActionWaitNetwork;
  /**
   * This interface was referenced by `ZarfComponentActionWait`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Wait for a condition to be met in the cluster before continuing. Only one of cluster or network can be specified.
 */
export interface ZarfComponentActionWaitCluster {
  /**
   * The kind of resource to wait for.
   */
  kind: string;
  /**
   * The name of the resource or selector to wait for.
   */
  name: string;
  /**
   * The namespace of the resource to wait for.
   */
  namespace?: string;
  /**
   * The condition or jsonpath state to wait for; defaults to exist, a special condition that will wait for the resource to exist.
   */
  condition?: string;
  /**
   * This interface was referenced by `ZarfComponentActionWaitCluster`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Wait for a condition to be met on the network before continuing. Only one of cluster or network can be specified.
 */
export interface ZarfComponentActionWaitNetwork {
  /**
   * The protocol to wait for.
   */
  protocol: 'tcp' | 'http' | 'https';
  /**
   * The address to wait for.
   */
  address: string;
  /**
   * The HTTP status code to wait for if using http or https.
   */
  code?: number;
  /**
   * This interface was referenced by `ZarfComponentActionWaitNetwork`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Actions to run during package deployment.
 */
export interface ZarfComponentActionSet1 {
  defaults?: ZarfComponentActionDefaults;
  /**
   * Actions to run at the start of an operation.
   */
  before?: ZarfComponentAction[];
  /**
   * Actions to run at the end of an operation.
   */
  after?: ZarfComponentAction[];
  /**
   * Actions to run if all operations succeed.
   */
  onSuccess?: ZarfComponentAction[];
  /**
   * Actions to run if all operations fail.
   */
  onFailure?: ZarfComponentAction[];
  /**
   * This interface was referenced by `ZarfComponentActionSet`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet2`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Actions to run during package removal.
 */
export interface ZarfComponentActionSet2 {
  defaults?: ZarfComponentActionDefaults;
  /**
   * Actions to run at the start of an operation.
   */
  before?: ZarfComponentAction[];
  /**
   * Actions to run at the end of an operation.
   */
  after?: ZarfComponentAction[];
  /**
   * Actions to run if all operations succeed.
   */
  onSuccess?: ZarfComponentAction[];
  /**
   * Actions to run if all operations fail.
   */
  onFailure?: ZarfComponentAction[];
  /**
   * This interface was referenced by `ZarfComponentActionSet`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet1`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   *
   * This interface was referenced by `ZarfComponentActionSet2`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * NamespacedObjectKindReference is a reference to a specific resource in a namespace using its kind and API version.
 */
export interface NamespacedObjectKindReference {
  /**
   * API Version of the resource
   */
  apiVersion: string;
  /**
   * Kind of the resource
   */
  kind: string;
  /**
   * Namespace of the resource
   */
  namespace: string;
  /**
   * Name of the resource
   */
  name: string;
  /**
   * This interface was referenced by `NamespacedObjectKindReference`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * Constant are constants that can be used to dynamically template K8s resources or run in actions.
 */
export interface Constant {
  /**
   * The name to be used for the constant
   */
  name: string;
  /**
   * The value to set for the constant during deploy
   */
  value: string;
  /**
   * A description of the constant to explain its purpose on package create or deploy confirmation prompts
   */
  description?: string;
  /**
   * Whether to automatically indent the variable's value (if multiline) when templating. Based on the number of chars before the start of ###ZARF_CONST_.
   */
  autoIndent?: boolean;
  /**
   * An optional regex pattern that a constant value must match before a package can be created.
   */
  pattern?: string;
  /**
   * This interface was referenced by `Constant`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
/**
 * InteractiveVariable is a variable that can be used to prompt a user for more information
 */
export interface InteractiveVariable {
  /**
   * The name to be used for the variable
   */
  name: string;
  /**
   * Whether to mark this variable as sensitive to not print it in the log
   */
  sensitive?: boolean;
  /**
   * Whether to automatically indent the variable's value (if multiline) when templating. Based on the number of chars before the start of ###ZARF_VAR_.
   */
  autoIndent?: boolean;
  /**
   * An optional regex pattern that a variable value must match before a package deployment can continue.
   */
  pattern?: string;
  /**
   * Changes the handling of a variable to load contents differently (i.e. from a file rather than as a raw variable - templated files should be kept below 1 MiB)
   */
  type?: 'raw' | 'file';
  /**
   * A description of the variable to be used when prompting the user a value
   */
  description?: string;
  /**
   * The default value to use for the variable
   */
  default?: string;
  /**
   * Whether to prompt the user for input for this variable
   */
  prompt?: boolean;
  /**
   * This interface was referenced by `InteractiveVariable`'s JSON-Schema definition
   * via the `patternProperty` "^x-".
   */
  [k: string]: unknown;
}
