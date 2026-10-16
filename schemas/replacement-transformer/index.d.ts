/* eslint-disable */

export type ReplacementsInline =
  | {
      source: Source;
      /**
       * The N fields to write the value to
       */
      targets: Target[];
    }
  | {
      /**
       * A scalar value as source
       */
      sourceValue: string;
      /**
       * The N fields to write the value to
       */
      targets: Target[];
    };

/**
 * Configuration file for the Kustomize replacement transformer. Referenced from the `transformers` field of a kustomization.yaml file.
 */
export interface KustomizeReplacementTransformer {
  /**
   * The API version of the transformer. Always `builtin` for built-in transformers
   */
  apiVersion?: 'builtin';
  /**
   * The kind of the transformer
   */
  kind: 'ReplacementTransformer';
  metadata?: Metadata;
  /**
   * Substitute field(s) in N target(s) with a field from a source
   */
  replacements?: (ReplacementsPath | ReplacementsInline)[];
  [k: string]: unknown | undefined;
}
/**
 * Standard object metadata
 */
export interface Metadata {
  annotations?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  labels?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".*".
     */
    [k: string]: string | undefined;
  };
  name?: string;
  namespace?: string;
}
export interface ReplacementsPath {
  path: string;
}
/**
 * The source of the value
 */
export interface Source {
  /**
   * The structured path to the source value
   */
  fieldPath?: string;
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
  options?: FieldOptions;
  /**
   * The version of the referent
   */
  version?: string;
  [k: string]: unknown | undefined;
}
export interface FieldOptions {
  /**
   * If field missing, add it
   */
  create?: boolean;
  /**
   * Used to split/join the field
   */
  delimiter?: string;
  /**
   * Which position in the split to consider
   */
  index?: number;
}
export interface Target {
  /**
   * The structured path(s) to the target nodes
   */
  fieldPaths?: string[];
  options?: FieldOptions;
  /**
   * Exclude objects that match this
   */
  reject?: Selector[];
  select: Selector;
}
/**
 * Selector specifies a set of resources.
 * Any resource that matches intersection of all conditions is included in this set.
 */
export interface Selector {
  /**
   * AnnotationSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  annotationSelector?: string;
  /**
   * The group of the referent
   */
  group?: string;
  /**
   * The kind of the referent
   */
  kind?: string;
  /**
   * LabelSelector is a string that follows the label selection expression
   * https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#api
   */
  labelSelector?: string;
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
}
