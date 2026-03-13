/* eslint-disable */

/**
 * The dot-separated path to the mixin class relative to the specified package. The class must be annotated with @Mixin
 */
export type MixinClass = string;

export interface HttpsJsonSchemastoreOrgSpongeMixinsJson {
  /**
   * The name of a parent configuration that options get inherited from
   */
  parent?: string;
  /**
   * Target selector. Either the specifies the phase directly or use "@env(PHASE)" separated by '&', '\', or ' '
   */
  target?: string;
  /**
   * Minimum version of the mixin subsystem required for this configuration
   */
  minVersion?: string;
  /**
   * Minimum compatibility level required for mixins in this set
   */
  compatibilityLevel?: string;
  /**
   * Determines whether mixin failures in this configuration are considered terminal and stop the game
   */
  required?: boolean;
  /**
   * The priority of this configuration. Will be inherited if smaller than 0
   */
  priority?: number;
  /**
   * Default mixin priority for this configuration. Will be inherited if smaller than 0
   */
  mixinPriority?: number;
  /**
   * The target package where the mixin classes reside
   */
  package: string;
  /**
   * Mixin classes to load in all environments. Class names get prepended with the specified package
   */
  mixins?: MixinClass[];
  /**
   * Mixin classes to load ONLY on client. Class names get prepended with the specified package
   */
  client?: MixinClass[];
  /**
   * Mixin classes to load ONLY on server. Class names get prepended with the specified package
   */
  server?: MixinClass[];
  /**
   * Sets whether targets' source files will be updated to the mixin source file
   */
  setSourceFile?: boolean;
  /**
   * The path to the reference map resource to use for this configuration
   */
  refmap?: string;
  /**
   * Increases log detail level from DEBUG to INFO
   */
  verbose?: boolean;
  /**
   * Name of the mixin config plugin to use for this config
   */
  plugin?: string;
  injectors?: InjectorOptions;
  overwrites?: OverwriteOptions;
  [k: string]: unknown | undefined;
}
/**
 * Injection options
 */
export interface InjectorOptions {
  /**
   * Sets the default minimum of injections that must be successfully applied per injector
   */
  defaultRequire?: number;
  /**
   * Sets the default injector group
   */
  defaultGroup?: string;
  /**
   * Registers injection points for this configuration
   */
  injectionPoints?: string[];
  /**
   * Sets the maximum allowed number of opcodes that can be shifted in @At annotations. This is hard capped at 5
   */
  maxShiftBy?: number;
  [k: string]: unknown | undefined;
}
/**
 * Overwrite options
 */
export interface OverwriteOptions {
  /**
   * Sets whether the visibility of overwritten methods should be conformed to the target class
   */
  conformVisibility?: boolean;
  /**
   * Sets whether overwriting methods must explicitly be declared through @Overwrite annotations
   */
  requireAnnotations?: boolean;
  [k: string]: unknown | undefined;
}
