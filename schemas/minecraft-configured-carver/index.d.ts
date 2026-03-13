/* eslint-disable */

/**
 * Vertical scaling options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export type VerticalScalingOptions =
  | number
  | {
      [k: string]: unknown | undefined;
    };
/**
 * Horizontal tunnel scaling options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export type HorizontalTunnelScalingOptions =
  | number
  | {
      [k: string]: unknown | undefined;
    };
/**
 * Vertical tunnel scaling options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export type VerticalTunnelScalingOptions =
  | number
  | {
      [k: string]: unknown | undefined;
    };
/**
 * Floor level options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export type FloorLevelOptions =
  | number
  | {
      [k: string]: unknown | undefined;
    };
/**
 * Vertical rotation options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export type VerticalRotationOptions =
  | number
  | {
      [k: string]: unknown | undefined;
    };

/**
 * A carver for a data pack for Minecraft
 * https://minecraft.wiki/w/Custom_world_generation#Carvers
 */
export interface Carver {
  /**
   * A type for the current carver
   * https://minecraft.wiki/w/Custom_carver#JSON_format
   */
  type?:
    | 'minecraft:cave'
    | 'cave'
    | 'minecraft:nether_cave'
    | 'nether_cave'
    | 'minecraft:canyon'
    | 'canyon'
    | 'minecraft:underwater_canyon'
    | 'underwater_canyon'
    | 'minecraft:underwater_cave'
    | 'underwater_cave';
  config?: CarverOptions;
  [k: string]: unknown | undefined;
}
/**
 * Options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface CarverOptions {
  /**
   * A probability that each chunk attempts to generate for the current carver
   * https://minecraft.wiki/w/Custom_carver#JSON_format
   */
  probability?: number;
  y?: Height;
  /**
   * A height at which to generate the current carver
   * https://minecraft.wiki/w/Custom_carver#JSON_format
   */
  lava_level?: 'absolute' | 'above_bottom' | 'below_top';
  /**
   * Blocks can be carved for the current carver
   * https://minecraft.wiki/w/Custom_carver#JSON_format
   */
  replaceable?: string | string[];
  debug_settings?: ReplacementOptions;
  yScale?: VerticalScalingOptions;
  horizontal_radius_multiplier?: HorizontalTunnelScalingOptions;
  vertical_radius_multiplier?: VerticalTunnelScalingOptions;
  floor_level?: FloorLevelOptions;
  vertical_rotation?: VerticalRotationOptions;
  shape?: RavineShapeOptions;
}
/**
 * A height at which to generate the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface Height {
  [k: string]: unknown | undefined;
}
/**
 * Replace blocks for debugging for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface ReplacementOptions {
  /**
   * Whether to enable debug mode for the current carver
   * https://minecraft.wiki/w/Custom_carver#JSON_format
   */
  debug_mode?: boolean;
  air_state?: AirReplacementOptions;
  water_state?: WaterReplacementOptions;
  lava_state?: LavaReplacementOptions;
  barrier_state?: BarrierReplacementOptions;
}
/**
 * Air replacement options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface AirReplacementOptions {
  [k: string]: unknown | undefined;
}
/**
 * Water replacement options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface WaterReplacementOptions {
  [k: string]: unknown | undefined;
}
/**
 * Lava replacement options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface LavaReplacementOptions {
  [k: string]: unknown | undefined;
}
/**
 * Barrier replacement options for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface BarrierReplacementOptions {
  [k: string]: unknown | undefined;
}
/**
 * Ravine shape for the current carver
 * https://minecraft.wiki/w/Custom_carver#JSON_format
 */
export interface RavineShapeOptions {
  [k: string]: unknown | undefined;
}
