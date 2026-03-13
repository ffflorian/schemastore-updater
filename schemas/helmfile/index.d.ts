/* eslint-disable */

export type MissingFileHandler = 'Error' | 'Warn' | 'Info' | 'Debug';
export type Helmfile =
  | string
  | {
      path: string;
      selectors?: string[];
      values?: (
        | string
        | {
            key1?: string;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    };
export type Release = Release1 & {
  /**
   * The name of the release.
   */
  name: string;
  /**
   * The namespace to install the release into.
   */
  namespace?: string;
  /**
   * The chart name to be installed. The chart name can be either: 1) a chart reference: https://helm.sh/docs/topics/charts/#chart-references, 2) a path to a directory containing a chart, 3) a path to a packaged chart, or 4) a URL.
   */
  chart?: string;
  /**
   * Restores previous state in case of failed release.
   */
  atomic?: boolean;
  /**
   * When true, cleans up any new resources created during a failed release.
   */
  cleanupOnFail?: boolean;
  /**
   * --kube-context to be passed to helm commands.
   * Defaults tp an empty string, which means the standard kubeconfig, either ~/kubeconfig or the file pointed by $KUBECONFIG environment variable)
   */
  kubeContext?: string;
  /**
   * Wen set, helmfile will only attempt to install the release if the condition is true
   */
  condition?: string;
  /**
   * When using helm 3.2+, automatically create release namespaces if they do not exist.
   */
  createNamespace?: boolean;
  /**
   * If used with charts museum allows to pull unstable charts for deployment, for example: if 1.2.3 and 1.2.4-dev versions exist and set to true, 1.2.4-dev will be pulled.
   */
  devel?: boolean;
  /**
   * Disables validation of the rendered templates before releasing.
   */
  disableValidation?: boolean;
  /**
   * Passes --disable-validation to helm 3 diff plugin, this requires diff plugin >= 3.1.2
   */
  disableValidationOnInstall?: boolean;
  /**
   * Passes --disable-openapi-validation to helm 3 diff plugin, this requires diff plugin >= 3.1.2
   */
  disableOpenAPIValidation?: boolean;
  /**
   * Limit the maximum number of revisions saved per release. Use 0 for no limit.
   */
  historyMax?: number;
  /**
   * When set to `true`, skips running `helm dep up` and `helm dep build` on this release's chart.
   */
  skipDeps?: boolean;
  /**
   * Cascade `--cascade` to helmv3 delete, available values: background, foreground, or orphan
   */
  cascade?: 'background' | 'foreground' | 'orphan';
  /**
   * Propagate `--post-renderer` to helmv3 template and helm install.
   */
  postRenderer?: string;
  /**
   * Is true if the TLS verification should be skipped when fetching remote chart
   */
  insecureSkipTLSVerify?: boolean;
  /**
   * Hooks allow to trigger actions at certain points in helm's lifecycle.
   */
  hooks?: Hook[];
  /**
   * Set `false` to uninstall this release on sync.
   */
  installed?:
    | boolean
    | string
    | {
        [k: string]: unknown | undefined;
      };
  labels?: Map;
  missingFileHandler?: 'Error' | 'Warn' | 'Info' | 'Debug';
  /**
   * Will attempt to decrypt it using helm-secrets plugin
   */
  secrets?: string[];
  /**
   * Inherit from one or more release templates
   */
  inherit?: {
    template: string;
    except?: string[];
    [k: string]: unknown | undefined;
  }[];
  set?: (
    | {
        name?: string;
        file?: string;
        [k: string]: unknown | undefined;
      }
    | {
        name?: string;
        values?: number[];
        [k: string]: unknown | undefined;
      }
    | {
        name?: string;
        value?: string;
        [k: string]: unknown | undefined;
      }
  )[];
  /**
   * Time in seconds to wait for any individual Kubernetes operation (like Jobs for hooks, and waits on pod/pvc/svc/deployment readiness)
   */
  timeout?: number;
  /**
   * Performs pods restart for the resource if applicable
   */
  recreatePods?: boolean;
  /**
   * Forces resource update through delete/recreate if needed.
   */
  force?: boolean;
  values?: (string | Map)[];
  verify?: boolean;
  version?: string | number;
  /**
   * Wait for k8s resources via --wait.
   */
  wait?: boolean;
  /**
   * If set and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout.
   */
  waitForJobs?: boolean;
  /**
   * Define dependencies between releases. This release will only be installed after all releases in the needs list are installed.
   */
  needs?: string[];
  /**
   * Add chart dependencies without forking. Can be local paths or OCI charts.
   */
  dependencies?: {
    chart: string;
    version?: string;
    alias?: string;
    [k: string]: unknown | undefined;
  }[];
  /**
   * Apply strategic merge patches to Kubernetes resources using Kustomize.
   */
  strategicMergePatches?: string[];
  /**
   * Apply Kustomize transformers to add labels, annotations, etc.
   */
  transformers?: string[];
  /**
   * Apply JSON patches to Kubernetes resources.
   */
  jsonPatches?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Adopt existing resources into Helm management.
   */
  adopt?: string[];
  [k: string]: unknown | undefined;
};
export type Release1 = {
  [k: string]: unknown | undefined;
};

export interface HelmfileConfigSchema {
  /**
   * Configure a fixed list of API versions to pass to 'helm template' via the `--api-versions` flag.
   */
  apiVersions?: string[];
  bases?: string[];
  /**
   * The list of environments managed by helmfile.
   */
  environments?: {
    [k: string]: Environment;
  };
  commonLabels?: Map1;
  /**
   * Path to alternative helm binary (--helm-binary)
   */
  helmBinary?: string;
  helmDefaults?: HelmDefaults;
  helmfiles?: Helmfile[];
  hooks?: Hook[];
  missingFileHandler?: MissingFileHandler;
  /**
   * Helmfile runs various helm commands to converge the current state in the live cluster to the desired state defined here.
   */
  releases?: Release[];
  repositories?: Repository[];
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "[a-zA-Z\d_-]+".
 */
export interface Environment {
  values?: (string | Map)[];
  secrets?: string[];
  missingFileHandler?: MissingFileHandler;
  kubeContext?: string;
  [k: string]: unknown | undefined;
}
export interface Map {
  /**
   * This interface was referenced by `Map`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z\d_-]+".
   *
   * This interface was referenced by `Map1`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z\d_-]+".
   */
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | boolean
    | string
    | unknown[]
    | null
    | number;
}
/**
 * these labels will be applied to all releases in a Helmfile. Useful in templating if you have a helmfile per environment or customer and don't want to copy the same label to each release
 */
export interface Map1 {
  /**
   * This interface was referenced by `Map`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z\d_-]+".
   *
   * This interface was referenced by `Map1`'s JSON-Schema definition
   * via the `patternProperty` "[a-zA-Z\d_-]+".
   */
  [k: string]:
    | {
        [k: string]: unknown | undefined;
      }
    | boolean
    | string
    | unknown[]
    | null
    | number;
}
/**
 * Default values to set for args along with dedicated keys that can be set by contributors, cli args take precedence over these.
 */
export interface HelmDefaults {
  /**
   * Dedicated default key for kube-context (--kube-context).
   */
  kubeContext?: string;
  /**
   * When true, cleans up any new resources created during a failed release.
   */
  cleanupOnFail?: boolean;
  args?: string[];
  /**
   * Verify the chart before upgrading (only works with packaged charts not directories).
   */
  verify?: boolean;
  /**
   * Wait for k8s resources via --wait.
   */
  wait?: boolean;
  /**
   * If true and --wait enabled, will wait until all Jobs have been completed before marking the release as successful. It will wait for as long as --timeout
   */
  waitForJobs?: boolean;
  /**
   * Time in seconds to wait for any individual Kubernetes operation (like Jobs for hooks, and waits on pod/pvc/svc/deployment readiness)
   */
  timeout?: number;
  /**
   * Performs pods restart for the resource if applicable.
   */
  recreatePods?: boolean;
  /**
   * Forces resource update through delete/recreate if needed.
   */
  force?: boolean;
  /**
   * Limit the maximum number of revisions saved per release. Use 0 for no limit.
   */
  historyMax?: number;
  /**
   * When using helm 3.2+, automatically create release namespaces if they do not exist.
   */
  createNamespace?: boolean;
  /**
   * If used with charts museum allows to pull unstable charts for deployment, for example: if 1.2.3 and 1.2.4-dev versions exist and set to true, 1.2.4-dev will be pulled (default false)
   */
  devel?: boolean;
  /**
   * If set to true, reuses the last release's values and merges them with ones provided in helmfile.
   */
  reuseValues?: boolean;
  /**
   * When set to `true`, skips running `helm dep up` and `helm dep build` on this release's chart.
   */
  skipDeps?: boolean;
  /**
   * Cascade `--cascade` to helmv3 delete, available values: background, foreground, or orphan.
   */
  cascade?: 'background' | 'foreground' | 'orphan';
  /**
   * Propagate `--post-renderer` to helmv3 template and helm install.
   */
  postRenderer?: string;
  /**
   * Is true if the TLS verification should be skipped when fetching remote chart.
   */
  insecureSkipTLSVerify?: boolean;
  [k: string]: unknown | undefined;
}
export interface Hook {
  events?: ('prepare' | 'preapply' | 'presync' | 'preuninstall' | 'postuninstall' | 'postsync' | 'cleanup')[];
  showlogs?: boolean;
  command?: string;
  args?: string[];
  [k: string]: unknown | undefined;
}
export interface Repository {
  name: string;
  url?: string;
  certFile?: string;
  keyFile?: string;
  caFile?: string;
  username?: string;
  password?: string;
  oci?: boolean;
  passCredentials?: boolean;
  [k: string]: unknown | undefined;
}
