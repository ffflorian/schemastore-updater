/* eslint-disable */

export type Release = ReleaseSpec;

export interface HelmfileConfigSchema {
  /**
   * Capabilities.APIVersions
   */
  apiVersions?: string[];
  /**
   * List of base helmfile YAML files layered under this one before rendering.
   */
  bases?: string[];
  /**
   * Override the chart used by all releases in this helmfile.
   */
  chart?: string;
  /**
   * Labels applied to all releases in this helmfile. Useful when templating a helmfile per environment or customer to avoid copying the same label onto each release.
   */
  commonLabels?: {
    [k: string]: string | undefined;
  };
  /**
   * Default release templates that every release inherits from, unless overridden per release with `inherit`.
   */
  defaultInherit?: string | string[];
  /**
   * The environments managed by this helmfile, keyed by environment name.
   */
  environments?: {
    [k: string]: Environment | undefined;
  };
  /**
   * Path to an alternative helm binary (--helm-binary).
   */
  helmBinary?: string;
  helmDefaults?: HelmDefaults;
  /**
   * Sub-helmfiles to run, each given as a path/glob string or a sub-helmfile object.
   */
  helmfiles?: (string | SubHelmfile)[];
  /**
   * Hooks is a list of extension points paired with operations, that are executed in specific points of the lifecycle of releases defined in helmfile
   */
  hooks?: Hook[];
  /**
   * Override the kube-context used by all releases (--kube-context).
   */
  kubeContext?: string;
  /**
   * Capabilities.KubeVersion
   */
  kubeVersion?: string;
  /**
   * Path to an alternative kustomize binary.
   */
  kustomizeBinary?: string;
  /**
   * LLM is the optional OpenAI-compatible configuration used by AI-assisted
   * subcommands such as `helmfile doctor`. When absent (the default),
   * those commands degrade to their non-AI equivalents (e.g. plain `diff`).
   * This field is read at app layer; the state layer treats it as inert.
   */
  llm?: {
    /**
     * APIKey authenticates against BaseURL. May be templated in helmfile.yaml
     * via {{ env "KEY" }}.
     */
    apiKey?: string;
    /**
     * BaseURL is the OpenAI-compatible endpoint base URL, e.g.
     * "https://one-api.internal/v1" or "https://api.deepseek.com/v1".
     * When empty, defaults to "https://api.openai.com/v1".
     */
    baseURL?: string;
    /**
     * MaxTokens caps the completion length. Defaults to 4096 when zero.
     */
    maxTokens?: number;
    /**
     * Model is the chat completion model identifier, e.g. "gpt-4o",
     * "claude-3-5-sonnet" (via gateway), "deepseek-chat".
     */
    model?: string;
    /**
     * Temperature controls generation randomness. Defaults to 0.2 when zero
     * (deterministic-ish for risk analysis).
     */
    temperature?: number;
    /**
     * Timeout is the per-request timeout. Defaults to 60s when zero.
     */
    timeout?: number;
    [k: string]: unknown | undefined;
  };
  /**
   * Path to the dependency lock file (defaults to helmfile.lock next to the helmfile).
   */
  lockFilePath?: string;
  /**
   * If set to "Error", return an error when a subhelmfile points to a
   * non-existent path. The default behavior is to print a warning. Note the
   * differing default compared to other MissingFileHandlers.
   */
  missingFileHandler?: 'Error' | 'Warn' | 'Info' | 'Debug';
  /**
   * MissingFileHandlerConfig is composed of various settings for the MissingFileHandler
   */
  missingFileHandlerConfig?: MissingFileHandlerConfig;
  /**
   * Override the namespace used by all releases (--namespace).
   */
  namespace?: string;
  /**
   * Releases that helmfile converges to the desired state via helm commands.
   */
  releases?: Release[];
  /**
   * Helm chart repositories available to the releases in this helmfile.
   */
  repositories?: Repository[];
  /**
   * Reusable release templates, referenced by name via `inherit` or `defaultInherit`.
   */
  templates?: {
    [k: string]: ReleaseSpec;
  };
  /**
   * DefaultValues is the default values to be overrode by environment values and command-line overrides
   */
  values?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  [k: string]: unknown | undefined;
}
export interface Environment {
  kubeContext?: string;
  /**
   * MergeStrategy controls precedence when multiple values files are listed under `values`.
   *
   * "override" (default): later files override earlier files (the historical helmfile behavior).
   * "fallback":           earlier files take precedence; later files only fill gaps.
   *
   * Under the "fallback" strategy, an explicit non-nil value in an earlier file (including
   * the zero values false, 0, "", and empty list) is preserved against any later file. Maps
   * are deep-merged, so an earlier map does not block later files from adding nested keys.
   * An explicit null in an earlier file falls through to a later file's value (matching how
   * helmfile's MergeMaps treats nil from the override side elsewhere). Subsequent .gotmpl
   * values files can also reference values from earlier files via .Values.
   */
  mergeStrategy?: string;
  /**
   * MissingFileHandler instructs helmfile to fail when unable to find a environment values file listed
   * under `environments.NAME.values`.
   *
   * Possible values are  "Error", "Warn", "Info", "Debug". The default is "Error".
   *
   * Use "Warn", "Info", or "Debug" if you want helmfile to not fail when a values file is missing, while just leaving
   * a message about the missing file at the log-level.
   */
  missingFileHandler?: 'Error' | 'Warn' | 'Info' | 'Debug';
  /**
   * MissingFileHandlerConfig is composed of various settings for the MissingFileHandler
   */
  missingFileHandlerConfig?: MissingFileHandlerConfig;
  secrets?: string[];
  values?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  [k: string]: unknown | undefined;
}
export interface MissingFileHandlerConfig {
  /**
   * IgnoreMissingGitBranch is set to true in order to let the missing file handler
   * treat missing git branch errors like `pathspec 'develop' did not match any file(s) known to git` safe
   * and ignored when the handler is set to Warn or Info.
   */
  ignoreMissingGitBranch?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Default settings applied to every release, unless overridden on the release itself.
 */
export interface HelmDefaults {
  args?: string[];
  /**
   * Atomic, when set to true, restore previous state in case of a failed install/upgrade attempt
   */
  atomic?: boolean;
  /**
   * Cascade '--cascade' to helmv3 delete, available values: background, foreground, or orphan, default: background
   */
  cascade?: 'background' | 'foreground' | 'orphan';
  /**
   * CleanupOnFail, when set to true, the --cleanup-on-fail helm flag is passed to the upgrade command
   */
  cleanupOnFail?: boolean;
  /**
   * CreateNamespace, when set to true (default), --create-namespace is passed to helm on install/upgrade
   */
  createNamespace?: boolean;
  /**
   * Timeout is the time in seconds to wait for helmfile delete command (default 300)
   */
  deleteTimeout?: number;
  /**
   * Wait, if set to true, will wait until all resources are deleted before mark delete command as successful
   */
  deleteWait?: boolean;
  /**
   * Devel, when set to true, use development versions, too. Equivalent to version '>0.0.0-0'
   */
  devel?: boolean;
  diffArgs?: string[];
  /**
   * DisableAutoDetectedKubeVersionForDiff controls whether auto-detected kubeVersion should be passed
   * to helm diff. When false (default), auto-detected kubeVersion is passed to fix issue #2275.
   * Set to true to only pass explicit kubeVersion from helmfile.yaml, preventing helm-diff from
   * normalizing server-side defaults which could hide real changes (e.g., ipFamilyPolicy, ipFamilies).
   */
  disableAutoDetectedKubeVersionForDiff?: boolean;
  disableOpenAPIValidation?: boolean;
  disableValidation?: boolean;
  /**
   * EnableDNS, when set to true, enable DNS lookups when rendering templates
   */
  enableDNS?: boolean;
  /**
   * Force, when set to true, forces resource update through delete/recreate if needed
   */
  force?: boolean;
  /**
   * ForceConflicts, when set to true, force server-side apply changes against conflicts (Helm 4 only)
   */
  forceConflicts?: boolean;
  /**
   * HelmStuckGrace, when > 0, enables the helmfile-side safety-valve
   * helm-killer for releases using --track-mode kubedog. See
   * ReleaseSpec.HelmStuckGrace for semantics.
   */
  helmStuckGrace?: number;
  /**
   * HistoryMax, limit the maximum number of revisions saved per release. Use 0 for no limit (default 10)
   */
  historyMax?: number;
  /**
   * InsecureSkipTLSVerify is true if the TLS verification should be skipped when fetching remote chart
   */
  insecureSkipTLSVerify?: boolean;
  keyring?: string;
  kubeContext?: string;
  /**
   * PlainHttp is true if the remote charte should be fetched using HTTP and not HTTPS
   */
  plainHttp?: boolean;
  /**
   * Propagate '--post-renderer' to helmv3 template and helm install
   */
  postRenderer?: string;
  /**
   * Propagate '--post-renderer-args' to helmv3 template and helm install
   */
  postRendererArgs?: string[];
  /**
   * RecreatePods, when set to true, instruct helmfile to perform pods restart for the resource if applicable
   */
  recreatePods?: boolean;
  /**
   * on helm upgrade/diff, reuse values currently set in the release and merge them with the ones defined within helmfile
   */
  reuseValues?: boolean;
  /**
   * RollbackOnFailure, when set to true, restores previous state on a failed install/upgrade via the
   * Helm 4 --rollback-on-failure flag (the successor to the deprecated --atomic flag). Requires Helm 4 or greater.
   */
  rollbackOnFailure?: boolean;
  /**
   * ServerSide controls the helm 4 --server-side flag for upgrade. Must be "true", "false", or "auto".
   */
  serverSide?: string;
  /**
   * SkipCRDs passes the --skip-crds flag to helm upgrade --install to ensure any CRDs contained in the crds/
   * subdirectory of a helm chart are not automatically applied with every helmfile sync or apply
   */
  skipCRDs?: boolean;
  /**
   * SkipDeps disables running `helm dependency up` and `helm dependency build` on this release's chart.
   * This is relevant only when your release uses a local chart or a directory containing K8s manifests or a Kustomization
   * as a Helm chart.
   */
  skipDeps?: boolean;
  /**
   * SkipRefresh disables running `helm dependency up`
   */
  skipRefresh?: boolean;
  /**
   * Propagate '--skip-schema-validation' to helmv3 template and helm install
   */
  skipSchemaValidation?: boolean;
  /**
   * SuppressOutputLineRegex is a list of regexes to suppress output lines
   */
  suppressOutputLineRegex?: string[];
  syncArgs?: string[];
  /**
   * SyncReleaseLabels is true if the release labels should be synced with the helmfile labels
   */
  syncReleaseLabels?: boolean;
  /**
   * TakeOwnership is true if the helmfile should take ownership of the release
   */
  takeOwnership?: boolean;
  /**
   * TemplateArgs are extra args appended to the helm template / helm diff rendering
   * (e.g. "--dry-run=server" to enable the helm lookup function). Overridden by the
   * --template-args CLI flag on a per-invocation basis.
   */
  templateArgs?: string[];
  /**
   * Timeout is the time in seconds to wait for any individual Kubernetes operation (like Jobs for hooks, and waits on pod/pvc/svc/deployment readiness) (default 300)
   */
  timeout?: number;
  /**
   * TrackMode specifies whether to use 'helm' or 'kubedog' for tracking resources
   */
  trackMode?: string;
  verify?: boolean;
  /**
   * Wait, if set to true, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment are in a ready state before marking the release as successful
   */
  wait?: boolean;
  /**
   * WaitForJobs, if set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout
   */
  waitForJobs?: boolean;
  /**
   * WaitRetries, if set and --wait enabled, will retry any failed check on resource state, except if HTTP status code < 500 is received, subject to the specified number of retries
   * DEPRECATED: This field is ignored as the --wait-retries flag was removed from Helm. Preserved for backward compatibility.
   */
  waitRetries?: number;
  [k: string]: unknown | undefined;
}
export interface SubHelmfile {
  environment?: SubHelmfileEnvironment;
  /**
   * Inherits is the list of parent-helmfile config categories this
   * sub-helmfile inherits. Allowed values are listed in AllowedInherits
   * (repositories, helmDefaults, commonLabels, apiVersions, kubeVersion,
   * templates, environments). Child values win; parent fills gaps. See
   * MergeInherited. Empty (the default) preserves the historical behavior
   * where sub-helmfiles are independent.
   */
  inherits?: string[];
  /**
   * path or glob pattern for the sub helmfiles
   */
  path?: string;
  /**
   * chosen selectors for the sub helmfiles
   */
  selectors?: string[];
  /**
   * do the sub helmfiles inherits from parent selectors
   */
  selectorsInherited?: boolean;
  [k: string]: unknown | undefined;
}
export interface SubHelmfileEnvironment {
  values?: unknown[];
  [k: string]: unknown | undefined;
}
export interface Hook {
  args?: string[];
  command?: string;
  events?: ('prepare' | 'preapply' | 'presync' | 'preuninstall' | 'postuninstall' | 'postsync' | 'cleanup')[];
  kubectlApply?: {
    [k: string]: string | undefined;
  };
  name?: string;
  showlogs?: boolean;
  [k: string]: unknown | undefined;
}
export interface ReleaseSpec {
  adopt?: string[];
  /**
   * Capabilities.APIVersions
   */
  apiVersions?: string[];
  /**
   * Atomic, when set to true, restore previous state in case of a failed install/upgrade attempt
   */
  atomic?: boolean;
  /**
   * Cascade '--cascade' to helmv3 delete, available values: background, foreground, or orphan, default: background
   */
  cascade?: 'background' | 'foreground' | 'orphan';
  /**
   * Chart is the name of the chart being installed to create this release
   */
  chart?: string;
  /**
   * ChartPath is the downloaded and modified version of the remote Chart specified by the Chart field.
   * This field is empty when the release is going to use the remote chart as-is, without any modifications(e.g. chartify).
   */
  chartPath?: string;
  /**
   * CleanupOnFail, when set to true, the --cleanup-on-fail helm flag is passed to the upgrade command
   */
  cleanupOnFail?: boolean;
  /**
   * Condition, when set, evaluate the mapping specified in this string to a boolean which decides whether or not to process the release
   */
  condition?: string;
  conditionTemplate?: string;
  /**
   * CreateNamespace, when set to true (default), --create-namespace is passed to helm on install
   */
  createNamespace?: boolean;
  /**
   * Timeout is the time in seconds to wait for helmfile delete command (default 300)
   */
  deleteTimeout?: number;
  /**
   * --wait flag for destroy/delete, if set to true, will wait until all resources are deleted before mark delete command as successful
   */
  deleteWait?: boolean;
  /**
   * These settings requires helm-x integration to work
   */
  dependencies?: Dependency[];
  /**
   * Description is the description for this release that will be passed to helm upgrade with --description flag
   */
  description?: string;
  /**
   * Devel, when set to true, use development versions, too. Equivalent to version '>0.0.0-0'
   */
  devel?: boolean;
  /**
   * Directory is an alias to Chart which may be of more fit when you want to use a local/remote directory containing
   * K8s manifests or Kustomization as a chart
   */
  directory?: string;
  /**
   * DisableAutoDetectedKubeVersionForDiff controls whether auto-detected kubeVersion should be passed
   * to helm diff for this release. See HelmSpec.DisableAutoDetectedKubeVersionForDiff for details.
   */
  disableAutoDetectedKubeVersionForDiff?: boolean;
  /**
   * DisableOpenAPIValidation is rarely used to bypass OpenAPI validations only that is used for e.g.
   * work-around against broken CRs
   * See also:
   * - https://github.com/helm/helm/pull/6819
   * - https://github.com/roboll/helmfile/issues/1167
   */
  disableOpenAPIValidation?: boolean;
  /**
   * DisableValidation is rarely used to bypass the whole validation of manifests against the Kubernetes cluster
   * so that `helm diff` can be run containing a chart that installs both CRD and CRs on first install.
   * FYI, such diff without `--disable-validation` fails on first install because the K8s cluster doesn't have CRDs registered yet.
   */
  disableValidation?: boolean;
  /**
   * DisableValidationOnInstall disables the K8s API validation while running helm-diff on the release being newly installed on helmfile-apply.
   * It is useful when any release contains custom resources for CRDs that is not yet installed onto the cluster.
   */
  disableValidationOnInstall?: boolean;
  /**
   * EnableDNS, when set to true, enable DNS lookups when rendering templates
   */
  enableDNS?: boolean;
  /**
   * The 'env' section is not really necessary any longer, as 'set' would now provide the same functionality
   */
  env?: SetValue[];
  /**
   * Force, when set to true, forces resource update through delete/recreate if needed
   */
  force?: boolean;
  /**
   * ForceConflicts, when set to true, force server-side apply changes against conflicts (Helm 4 only)
   */
  forceConflicts?: boolean;
  /**
   * ForceGoGetter forces the use of go-getter for fetching remote directory as maniefsts/chart/kustomization
   * by parsing the url from `chart` field of the release.
   * This is handy when getting the go-getter url parsing error when it doesn't work as expected.
   * Without this, any error in url parsing result in silently falling-back to normal process of treating `chart:` as the regular
   * helm chart name.
   */
  forceGoGetter?: boolean;
  /**
   * ForceNamespace is an experimental feature to set metadata.namespace in every K8s resource rendered by the chart,
   * regardless of the template, even when it doesn't have `namespace: {{ .Namespace | quote }}`.
   * This is only needed when you can't FIX your chart to have `namespace: {{ .Namespace }}` AND you're using `helmfile template`.
   * In standard use-cases, `Namespace` should be sufficient.
   * Use this only when you know what you want to do!
   */
  forceNamespace?: string;
  /**
   * HelmStuckGrace, when > 0, enables the safety-valve helm-killer for
   * kubedog tracking: if the cluster confirms every tracked resource has
   * converged but the helm subprocess is still running, helmfile waits
   * this many seconds before sending SIGINT to helm. Targets the helm v4
   * hook waiter wedge that --track-timeout would otherwise resolve only
   * after hours. Zero (or absent) disables the killer.
   */
  helmStuckGrace?: number;
  /**
   * HistoryMax, limit the maximum number of revisions saved per release. Use 0 for no limit (default 10)
   */
  historyMax?: number;
  /**
   * Hooks is a list of extension points paired with operations, that are executed in specific points of the lifecycle of releases defined in helmfile
   */
  hooks?: Hook[];
  /**
   * Inherit is used to inherit a release template from a release or another release template
   */
  inherit?:
    | {
        except?: string[];
        template: string;
        [k: string]: unknown | undefined;
      }[]
    | {
        except?: string[];
        template: string;
        [k: string]: unknown | undefined;
      };
  /**
   * InsecureSkipTLSVerify is true if the TLS verification should be skipped when fetching remote chart.
   */
  insecureSkipTLSVerify?: boolean;
  /**
   * Installed, when set to true, `delete --purge` the release
   */
  installed?: boolean | string;
  installedTemplate?: string;
  jsonPatches?: unknown[];
  keyring?: string;
  kubeContext?: string;
  /**
   * Capabilities.KubeVersion
   */
  kubeVersion?: string;
  /**
   * KubedogBurst specifies the burst for kubedog kubernetes client
   */
  kubedogBurst?: number;
  /**
   * KubedogQPS specifies the QPS (queries per second) for kubedog kubernetes client
   */
  kubedogQPS?: number;
  labels?: {
    [k: string]: string | undefined;
  };
  /**
   * MissingFileHandler is set to either "Error" or "Warn". "Error" instructs helmfile to fail when unable to find a values or secrets file. When "Warn", it prints the file and continues.
   * The default value for MissingFileHandler is "Error".
   */
  missingFileHandler?: 'Error' | 'Warn' | 'Info' | 'Debug';
  /**
   * MissingFileHandlerConfig is composed of various settings for the MissingFileHandler
   */
  missingFileHandlerConfig?: MissingFileHandlerConfig;
  /**
   * Name is the name of this release
   */
  name?: string;
  namespace?: string;
  /**
   * Needs is the [KUBECONTEXT/][NS/]NAME representations of releases that this release depends on.
   */
  needs?: string[];
  /**
   * PlainHttp is true if the remote charte should be fetched using HTTP and not HTTPS
   */
  plainHttp?: boolean;
  /**
   * Propagate '--post-renderer' to helmv3 template and helm install
   */
  postRenderer?: string;
  /**
   * Propagate '--post-renderer-args' to helmv3 template and helm install
   */
  postRendererArgs?: string[];
  /**
   * RecreatePods, when set to true, instruct helmfile to perform pods restart for the resource if applicable
   */
  recreatePods?: boolean;
  /**
   * ReuseValues, on helm upgrade/diff, reuse values currently set in the release and merge them with the ones defined within helmfile
   */
  reuseValues?: boolean;
  /**
   * RollbackOnFailure, when set to true, restores previous state on a failed install/upgrade via the
   * Helm 4 --rollback-on-failure flag (the successor to the deprecated --atomic flag). Requires Helm 4 or greater.
   */
  rollbackOnFailure?: boolean;
  secrets?: unknown[];
  /**
   * ServerSide controls the helm 4 --server-side flag for this release. Must be "true", "false", or "auto".
   */
  serverSide?: string;
  set?: SetValue[];
  setString?: SetValue[];
  setTemplate?: SetValue[];
  /**
   * SkipDeps disables running `helm dependency up` and `helm dependency build` on this release's chart.
   * This is relevant only when your release uses a local chart or a directory containing K8s manifests or a Kustomization
   * as a Helm chart.
   */
  skipDeps?: boolean;
  /**
   * SkipKinds is a blacklist of resource kinds to skip tracking
   */
  skipKinds?: string[];
  /**
   * SkipRefresh disables running `helm dependency up`
   */
  skipRefresh?: boolean;
  /**
   * Propagate '--skip-schema-validation' to helmv3 template and helm install
   */
  skipSchemaValidation?: boolean;
  strategicMergePatches?: unknown[];
  /**
   * SuppressDiff skip the helm diff output. Useful for charts which produces large not helpful diff.
   */
  suppressDiff?: boolean;
  /**
   * SuppressOutputLineRegex is a list of regexes to suppress output lines
   */
  suppressOutputLineRegex?: string[];
  /**
   * SyncReleaseLabels is true if the release labels should be synced with the helmfile labels
   */
  syncReleaseLabels?: boolean;
  /**
   * TakeOwnership is true if release should take ownership of resources
   */
  takeOwnership?: boolean;
  /**
   * Timeout is the time in seconds to wait for any individual Kubernetes operation (like Jobs for hooks, and waits on pod/pvc/svc/deployment readiness) (default 300)
   */
  timeout?: number;
  /**
   * TrackFailOnError controls whether kubedog tracking failures cause a non-zero exit code
   */
  trackFailOnError?: boolean;
  /**
   * TrackFailedLogs streams logs only for pods that enter a failed state
   * (CrashLoopBackOff, Error, etc.). Pods that succeed produce no output.
   * Has no effect when TrackLogs is true (full streaming wins).
   */
  trackFailedLogs?: boolean;
  /**
   * TrackKinds is a whitelist of resource kinds to track
   */
  trackKinds?: string[];
  /**
   * TrackLogs enables log streaming with kubedog
   */
  trackLogs?: boolean;
  /**
   * TrackMode specifies whether to use 'helm' or 'kubedog' for tracking resources
   */
  trackMode?: string;
  /**
   * TrackResources is a whitelist of specific resources to track
   */
  trackResources?: TrackResource[];
  /**
   * TrackTimeout specifies timeout for kubedog tracking (in seconds)
   */
  trackTimeout?: number;
  /**
   * Transformers is the list of Kustomize transformers
   *
   * Each item can be a path to a YAML or go template file, or an embedded transformer declaration as a YAML hash.
   * It's often used to add common labels and annotations to your resources.
   * See https://github.com/kubernetes-sigs/kustomize/blob/master/examples/configureBuiltinPlugin.md#configuring-the-builtin-plugins-instead for more information.
   */
  transformers?: unknown[];
  /**
   * UnitTests is a list of test file or directory paths for helm-unittest integration.
   * When specified, `helmfile unittest` will run `helm unittest` with the merged values and these test paths.
   */
  unitTests?: string[];
  /**
   * UpdateStrategy, when set, indicate the strategy to use to update the release
   */
  updateStrategy?: string;
  values?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  valuesPathPrefix?: string;
  valuesTemplate?: (
    | string
    | {
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Verify enables signature verification on fetched chart.
   * Beware some (or many?) chart repositories and charts don't seem to support it.
   */
  verify?: boolean;
  /**
   * These values are used in templating
   */
  verifyTemplate?: string;
  /**
   * Version is the semver version or version constraint for the chart
   */
  version?: string;
  /**
   * Wait, if set to true, will wait until all Pods, PVCs, Services, and minimum number of Pods of a Deployment are in a ready state before marking the release as successful
   */
  wait?: boolean;
  /**
   * WaitForJobs, if set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout
   */
  waitForJobs?: boolean;
  /**
   * WaitRetries, if set and --wait enabled, will retry any failed check on resource state, except if HTTP status code < 500 is received, subject to the specified number of retries
   * DEPRECATED: This field is ignored as the --wait-retries flag was removed from Helm. Preserved for backward compatibility.
   */
  waitRetries?: number;
  waitTemplate?: string;
  [k: string]: unknown | undefined;
}
export interface Dependency {
  alias?: string;
  chart: string;
  version?: string;
  [k: string]: unknown | undefined;
}
export interface SetValue {
  file?: string;
  name?: string;
  value?: string;
  values?: unknown[];
  [k: string]: unknown | undefined;
}
export interface TrackResource {
  kind?: string;
  name?: string;
  namespace?: string;
  [k: string]: unknown | undefined;
}
export interface Repository {
  caFile?: string;
  certFile?: string;
  keyFile?: string;
  keyring?: string;
  managed?: string;
  name: string;
  oci?: boolean;
  passCredentials?: boolean;
  password?: string;
  plainHttp?: boolean;
  registryConfig?: string;
  skipTLSVerify?: boolean;
  url?: string;
  username?: string;
  verify?: boolean;
  [k: string]: unknown | undefined;
}
