/* eslint-disable */

export type ReplacementsInline =
  | {
      source: ReplacementsSource;
      /**
       * The N fields to write the value to
       */
      targets: ReplacementsTarget[];
    }
  | {
      /**
       * A scalar value as source
       */
      sourceValue: string;
      /**
       * The N fields to write the value to
       */
      targets: ReplacementsTarget[];
    };
export type PatchJson6902 =
  | {
      /**
       * relative file path for a json patch file inside a kustomization
       */
      path: string;
      target: PatchTarget;
    }
  | {
      /**
       * inline json patch
       */
      patch: string;
      target: PatchTarget1;
    }
  | {
      /**
       * The operation
       */
      op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
      /**
       * The source location.
       */
      from?: string;
      /**
       * The target location.
       */
      path: string;
      value?: string | string[];
    };

export interface HttpsJsonSchemastoreOrgKustomizationJson {
  apiVersion?: string;
  /**
   * DEPRECATED. Bases are relative paths or git repository URLs specifying a directory containing a kustomization.yaml file.
   */
  bases?: string[];
  /**
   * CommonAnnotations to add to all objects
   */
  commonAnnotations?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * BuildMetadata is a list of strings used to toggle different build options
   */
  buildMetadata?: string[];
  /**
   *  CommonLabels to add to all objects and selectors
   */
  commonLabels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * ConfigMapGenerator is a list of configmaps to generate from local data (one configMap per list item)
   */
  configMapGenerator?: ConfigMapArgs[];
  /**
   * Configurations is a list of transformer configuration files
   */
  configurations?: string[];
  /**
   * Crds specifies relative paths to Custom Resource Definition files. This allows custom resources to be recognized as operands, making it possible to add them to the Resources list. CRDs themselves are not modified.
   */
  crds?: string[];
  generatorOptions?: GeneratorOptions;
  /**
   * Generators is a list of files containing custom generators
   */
  generators?: string[];
  /**
   * HelmCharts is a list of helm chart configuration instances
   */
  helmCharts?: HelmChart[];
  /**
   * HelmGlobals contains helm configuration that isn't chart specific
   */
  helmGlobals?: {
    /**
     * ChartHome is a file path, relative to the kustomization root, to a directory containing a subdirectory for each chart to be included in the kustomization
     */
    chartHome?: string;
    /**
     * ConfigHome defines a value that kustomize should pass to helm via the HELM_CONFIG_HOME environment variable
     */
    configHome?: string;
  };
  /**
   * Images is a list of (image name, new name, new tag or digest) for changing image names, tags or digests. This can also be achieved with a patch, but this operator is simpler to specify.
   */
  images?: Image[];
  inventory?: Inventory;
  /**
   * Labels to add to all objects but not selectors
   */
  labels?: Labels[];
  kind?: string;
  metadata?: Metadata;
  /**
   * NamePrefix will prefix the names of all resources mentioned in the kustomization file including generated configmaps and secrets
   */
  namePrefix?: string;
  /**
   * NameSuffix will suffix the names of all resources mentioned in the kustomization file including generated configmaps and secrets
   */
  nameSuffix?: string;
  /**
   * Namespace to add to all objects
   */
  namespace?: string;
  /**
   * Substitute field(s) in N target(s) with a field from a source
   */
  replacements?: (ReplacementsPath | ReplacementsInline)[];
  /**
   * OpenAPI contains information about what kubernetes schema to use
   */
  openapi?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * Apply a patch to multiple resources
   */
  patches?: (PatchesPatchPath | PatchesInlinePatch)[];
  /**
   * JSONPatches is a list of JSONPatch for applying JSON patch. See http://jsonpatch.com
   */
  patchesJson6902?: PatchJson6902[];
  /**
   *  PatchesStrategicMerge specifies the relative path to a file containing a strategic merge patch. URLs and globs are not supported
   */
  patchesStrategicMerge?: string[];
  /**
   * Replicas is a list of (resource name, count) for changing number of replicas for a resources. It will match any group and kind that has a matching name and that is one of: Deployment, ReplicationController, Replicaset, Statefulset.
   */
  replicas?: Replicas[];
  /**
   * Resources specifies relative paths to files holding YAML representations of kubernetes API objects. URLs and globs not supported.
   */
  resources?: string[];
  /**
   * Components are relative paths or git repository URLs specifying a directory containing a kustomization.yaml file of Kind Component.
   */
  components?: string[];
  /**
   * SecretGenerator is a list of secrets to generate from local data (one secret per list item)
   */
  secretGenerator?: SecretArgs[];
  /**
   * sortOptions is used to sort the resources kustomize outputs
   */
  sortOptions?:
    | {
        order?: 'legacy';
        legacySortOptions?: {
          orderFirst?: unknown[];
          orderLast?: unknown[];
        };
      }
    | {
        order?: 'fifo';
      };
  /**
   * Transformers is a list of files containing transformers
   */
  transformers?: string[];
  /**
   * Validators is a list of files containing validators
   */
  validators?: string[];
  /**
   * Allows things modified by kustomize to be injected into a container specification. A var is a name (e.g. FOO) associated with a field in a specific resource instance.  The field must contain a value of type string, and defaults to the name field of the instance
   */
  vars?: Var[];
}
/**
 * ConfigMapArgs contains the metadata of how to generate a configmap
 */
export interface ConfigMapArgs {
  KVSources?: KVSource[];
  behavior?: 'create' | 'replace' | 'merge';
  /**
   * Deprecated.  Use envs instead.
   */
  env?: string;
  /**
   * A list of file paths. The contents of each file should be one key=value pair per line
   */
  envs?: string[];
  /**
   * A list of file sources to use in creating a list of key, value pairs
   */
  files?: string[];
  /**
   * A list of literal pair sources. Each literal source should be a key and literal value, e.g. `key=value`
   */
  literals?: string[];
  /**
   * Name - actually the partial name - of the generated resource
   */
  name?: string;
  /**
   * Namespace for the configmap, optional
   */
  namespace?: string;
  options?: GeneratorOptions;
}
export interface KVSource {
  args?: string[];
  name?: string;
  pluginType?: string;
}
/**
 * GeneratorOptions modify behavior of all ConfigMap and Secret generators
 */
export interface GeneratorOptions {
  /**
   * Annotations to add to all generated resources
   */
  annotations?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * DisableNameSuffixHash if true disables the default behavior of adding a suffix to the names of generated resources that is a hash of the resource contents
   */
  disableNameSuffixHash?: boolean;
  /**
   * Immutable if true add to all generated resources
   */
  immutable?: boolean;
  /**
   * Labels to add to all generated resources
   */
  labels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
}
export interface HelmChart {
  name?: string;
  version?: string;
  repo?: string;
  releaseName?: string;
  namespace?: string;
  valuesFile?: string;
  valuesInline?: {
    [k: string]: unknown | undefined;
  };
  valuesMerge?: 'merge' | 'override' | 'replace';
  includeCRDs?: boolean;
  skipHooks?: boolean;
  additionalValuesFiles?: string[];
  skipTests?: boolean;
  apiVersions?: string[];
  kubeVersion?: string;
  nameTemplate?: string;
}
export interface Image {
  digest?: string;
  name?: string;
  newName?: string;
  newTag?: string;
  /**
   * UNDOCUMENTED.
   */
  tagSuffix?: string;
}
/**
 * Inventory appends an object that contains the record of all other objects, which can be used in apply, prune and delete
 */
export interface Inventory {
  configMap?: NameArgs;
  type?: string;
}
export interface NameArgs {
  name?: string;
  namespace?: string;
}
export interface Labels {
  /**
   * Pairs contains the key-value pairs for labels to add
   */
  pairs?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  /**
   * IncludeSelectors indicates should transformer include the fieldSpecs for selectors
   */
  includeSelectors?: boolean;
  /**
   * IncludeTemplates indicates should transformer include the template labels
   */
  includeTemplates?: boolean;
  /**
   * FieldSpec completely specifies a kustomizable field in a k8s API object. It helps define the operands of transformations
   */
  fields?: FieldSpec[];
}
export interface FieldSpec {
  create?: boolean;
  group?: string;
  kind?: string;
  path?: string;
  version?: string;
  [k: string]: unknown | undefined;
}
/**
 * Contains metadata about a Resource
 */
export interface Metadata {
  name?: string;
  namespace?: string;
  labels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  annotations?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
}
export interface ReplacementsPath {
  path: string;
}
/**
 * The source of the value
 */
export interface ReplacementsSource {
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The version of the referent
   */
  version?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * The name of the referent
   */
  name?: string;
  /**
   * The namespace of the referent
   */
  namespace?: string;
  /**
   * The structured path to the source value
   */
  fieldPath?: string;
  options?: {
    delimiter?: string;
    index?: number;
    create?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface ReplacementsTarget {
  select: Selector;
  /**
   * Exclude objects that match this
   */
  reject?: Selector1[];
  /**
   * The structured path(s) to the target nodes
   *
   * Items: The structured path to the source value
   */
  fieldPaths?: string[];
  options?: {
    delimiter?: string;
    index?: number;
    create?: boolean;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Include objects that match this
 */
export interface Selector {
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * The name of the referent
   */
  name?: string;
  /**
   * The namespace of the referent
   */
  namespace?: string;
  /**
   * The version of the referent
   */
  version?: string;
  /**
   * AnnotationSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  annotationSelector?: string;
  /**
   * LabelSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  labelSelector?: string;
}
/**
 * Selector specifies a set of resources.
 * Any resource that matches intersection of all conditions is included in this set.
 */
export interface Selector1 {
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * The name of the referent
   */
  name?: string;
  /**
   * The namespace of the referent
   */
  namespace?: string;
  /**
   * The version of the referent
   */
  version?: string;
  /**
   * AnnotationSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  annotationSelector?: string;
  /**
   * LabelSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  labelSelector?: string;
}
export interface PatchesPatchPath {
  options?: PatchesOptions;
  path: string;
  target?: Selector2;
}
export interface PatchesOptions {
  allowNameChange?: boolean;
  allowKindChange?: boolean;
}
/**
 * Selector specifies a set of resources.
 * Any resource that matches intersection of all conditions is included in this set.
 */
export interface Selector2 {
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * The name of the referent
   */
  name?: string;
  /**
   * The namespace of the referent
   */
  namespace?: string;
  /**
   * The version of the referent
   */
  version?: string;
  /**
   * AnnotationSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  annotationSelector?: string;
  /**
   * LabelSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  labelSelector?: string;
}
export interface PatchesInlinePatch {
  options?: PatchesOptions;
  patch: string;
  target?: Selector3;
}
/**
 * Selector specifies a set of resources.
 * Any resource that matches intersection of all conditions is included in this set.
 */
export interface Selector3 {
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * The name of the referent
   */
  name?: string;
  /**
   * The namespace of the referent
   */
  namespace?: string;
  /**
   * The version of the referent
   */
  version?: string;
  /**
   * AnnotationSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  annotationSelector?: string;
  /**
   * LabelSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  labelSelector?: string;
}
/**
 * Refers to a Kubernetes object that the json patch will be applied to. It must refer to a Kubernetes resource under the purview of this kustomization
 */
export interface PatchTarget {
  group?: string;
  kind: string;
  name: string;
  namespace?: string;
  version: string;
}
/**
 * Refers to a Kubernetes object that the json patch will be applied to. It must refer to a Kubernetes resource under the purview of this kustomization
 */
export interface PatchTarget1 {
  group?: string;
  kind: string;
  name: string;
  namespace?: string;
  version: string;
}
export interface Replicas {
  name?: string;
  count?: number;
}
/**
 * SecretArgs contains the metadata of how to generate a secret
 */
export interface SecretArgs {
  KVSources?: KVSource[];
  behavior?: 'create' | 'replace' | 'merge';
  env?: string;
  envs?: string[];
  files?: string[];
  literals?: string[];
  /**
   * Name - actually the partial name - of the generated resource
   */
  name?: string;
  /**
   * Namespace for the secret, optional
   */
  namespace?: string;
  options?: GeneratorOptions;
  /**
   * Type of the secret, optional
   */
  type?: string;
}
/**
 * Represents a variable whose value will be sourced from a field in a Kubernetes object.
 */
export interface Var {
  fieldref?: FieldSelector;
  /**
   * Value of identifier name e.g. FOO used in container args, annotations, Appears in pod template as $(FOO)
   */
  name: string;
  objref: Target;
}
/**
 * Refers to the field of the object referred to by objref whose value will be extracted for use in replacing $(FOO)
 */
export interface FieldSelector {
  fieldpath?: string;
}
/**
 * Refers to a Kubernetes resource under the purview of this kustomization
 */
export interface Target {
  apiVersion?: string;
  group?: string;
  kind?: string;
  name: string;
  /**
   * UNDOCUMENTED.
   */
  namespace?: string;
  version?: string;
}
