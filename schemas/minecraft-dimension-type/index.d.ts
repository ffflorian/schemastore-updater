/* eslint-disable */

/**
 * The resource location used for the dimension type.
 */
export type Name = string;
/**
 * Whether the dimensions behaves like the nether (water evaporates and sponges dry) or not. Also lets stalactites drip lava and causes lava to spread faster and thinner.
 */
export type Ultrawarm = boolean;
/**
 * When true, nether portals can spawn zombified piglins. When false, compasses spin randomly, and using a bed to set the respawn point or sleep, is disabled.
 */
export type Natural = boolean;
/**
 * The multiplier applied to coordinates when traveling to the dimension.
 */
export type CoordinateScale = number;
/**
 * Whether the dimension has skylight access or not.
 */
export type HasSkylight = boolean;
/**
 * Whether the dimension has a bedrock ceiling or not.
 */
export type HasCeiling = boolean;
/**
 * How much light the dimension has.
 */
export type AmbientLight = number;
/**
 * If this is set to a number, the time of the day is the specified value.
 */
export type FixedTime = boolean | number;
/**
 * Whether piglins shake and transform to zombified piglins.
 */
export type PiglinSafe = boolean;
/**
 * When false, the bed blows up when trying to sleep.
 */
export type BedWords = boolean;
/**
 * Whether players can charge and use respawn anchors.
 */
export type RespawnAnchorWorks = boolean;
/**
 * Whether players with the Bad Omen effect can cause a raid.
 */
export type HasRaids = boolean;
/**
 * The maximum height to which chorus fruits and nether portals can bring players within this dimension. This excludes portals that were already built above the limit as they still connect normally.
 */
export type LogicalHeight = number;
/**
 * The minimum height in which blocks can exist within this dimension.
 */
export type MinimumY = number;
/**
 * The total height in which blocks can exist within this dimension.
 */
export type Height = number;
/**
 * A resource location defining what block tag to use for infiniburn.
 */
export type Infiniburn = string;
/**
 * Determines the dimension effect used for this dimension.
 */
export type Effects = 'minecraft:overworld' | 'minecraft:the_nether' | 'minecraft:the_end';

/**
 * Configuration file defining a dimension type for a data pack for Minecraft.
 */
export interface MinecraftDataPackDimensionType {
  name?: Name;
  ultrawarm?: Ultrawarm;
  natural?: Natural;
  coordinate_scale?: CoordinateScale;
  has_skylight?: HasSkylight;
  has_ceiling?: HasCeiling;
  ambient_light?: AmbientLight;
  fixed_time?: FixedTime;
  piglin_safe?: PiglinSafe;
  bed_works?: BedWords;
  respawn_anchor_works?: RespawnAnchorWorks;
  has_raids?: HasRaids;
  logical_height?: LogicalHeight;
  min_y?: MinimumY;
  height?: Height;
  infiniburn?: Infiniburn;
  effects?: Effects;
  [k: string]: unknown | undefined;
}
