/* eslint-disable */

/**
 * The namespaced ID of the pool.
 */
export type Name = string;
/**
 * Can set to another template pool, which generates when the original pool cannot generate at the end of all layers.
 */
export type Fallback = string;
/**
 * How likely this element is to be chosen when using this pool.
 */
export type Weight = number;
export type ElementType =
  | 'minecraft:empty_pool_element'
  | 'minecraft:feature_pool_element'
  | 'minecraft:list_pool_element'
  | 'minecraft:legacy_single_pool_element'
  | 'minecraft:single_pool_element';
/**
 * The namespaced id of the feature.
 */
export type Feature = string;
/**
 * The namespaced id of the structure to place.
 */
export type Location = string;
export type Projection = 'rigid' | 'terrain_matching';
/**
 * The namespaced ID of a processor if this is a string.
 */
export type Processors =
  | string
  | {
      processors?: Processors1;
      [k: string]: unknown | undefined;
    };
/**
 * The namespaced id of the processor to use.
 */
export type ProcessorType = string;
/**
 * A list of processors to use.
 */
export type Processors1 = Processor[];
export type ElementType1 =
  | 'minecraft:empty_pool_element'
  | 'minecraft:list_pool_element'
  | 'minecraft:legacy_single_pool_element'
  | 'minecraft:single_pool_element';
/**
 * The namespaced ID of a processor if this is a string.
 */
export type Processors2 =
  | string
  | {
      processors?: Processors3;
      [k: string]: unknown | undefined;
    };
/**
 * A list of processors to use.
 */
export type Processors3 = Processor1[];
/**
 * A list of structures to choose from.
 */
export type Elements1 = Element2[];
/**
 * A list of structures to choose from.
 */
export type Elements = Element[];

/**
 * Configuration file defining a template pool for a data pack for Minecraft.
 */
export interface MinecraftDataPackTemplatePool {
  name?: Name;
  fallback?: Fallback;
  elements?: Elements;
  [k: string]: unknown | undefined;
}
export interface Element {
  weight?: Weight;
  element?: Element1;
  [k: string]: unknown | undefined;
}
/**
 * The properties of this element.
 */
export interface Element1 {
  element_type?: ElementType;
  feature?: Feature;
  location?: Location;
  projection?: Projection;
  processors?: Processors;
  elements?: Elements1;
  [k: string]: unknown | undefined;
}
export interface Processor {
  processor_type?: ProcessorType;
  [k: string]: unknown | undefined;
}
export interface Element2 {
  weight?: unknown;
  location?: Location;
  projection?: Projection;
  element_type?: ElementType1;
  processors?: Processors2;
  [k: string]: unknown | undefined;
}
export interface Processor1 {
  processor_type?: ProcessorType;
  [k: string]: unknown | undefined;
}
