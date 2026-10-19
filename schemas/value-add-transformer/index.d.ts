/* eslint-disable */

/**
 * Configuration file for the Kustomize value add transformer. Referenced from the `transformers` field of a kustomization.yaml file.
 */
export interface KustomizeValueAddTransformer {
  /**
   * The API version of the transformer. Always `builtin` for built-in transformers
   */
  apiVersion?: 'builtin';
  /**
   * The kind of the transformer
   */
  kind: 'ValueAddTransformer';
  metadata?: Metadata;
  /**
   * A file path to a file containing a slice of Target which will be appended to anything specified in the targets field
   */
  targetFilePath?: string;
  /**
   * The targets that should have the value added
   */
  targets?: Target[];
  /**
   * The value to add. Defaults to the base name of the encompassing kustomization root
   */
  value?: string;
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
/**
 * Target describes where to put the value
 */
export interface Target {
  /**
   * A JSON-style path to the field intended to hold the value
   */
  fieldPath: string;
  /**
   * Position of the field path in the file path
   */
  filePathPosition?: number;
  selector?: Selector;
}
/**
 * Selector selects the resources to modify. If omitted, all resources are modified
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
