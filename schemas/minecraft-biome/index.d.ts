/* eslint-disable */

/**
 * A particle type for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export type ParticleOptions1 = {
  [k: string]: unknown | undefined;
};
export type TickChance = number;
/**
 * Spawner options for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export type SpawnerOptions = SwawnerOptions[];

/**
 * Configuration file defining a biome for a data pack for Minecraft
 */
export interface MinecraftDataPackBiome {
  /**
   * Used for terrain noise generation. Biomes with positive depth are considered land, biomes with negative depth are oceans
   * https://minecraft.wiki/w/Custom_biome
   */
  depth?: number;
  /**
   * Used for terrain noise generation. Vertically stretches the terrain. Lower values produce flatter terrain
   * https://minecraft.wiki/w/Custom_biome
   */
  scale?: number;
  /**
   * Controls if the current biome has precipitation
   */
  has_precipitation?: boolean;
  category?:
    | 'none'
    | 'taiga'
    | 'extreme_hills'
    | 'jungle'
    | 'mesa'
    | 'plains'
    | 'savanna'
    | 'icy'
    | 'the_end'
    | 'beach'
    | 'forest'
    | 'ocean'
    | 'desert'
    | 'river'
    | 'swamp'
    | 'mushroom'
    | 'nether';
  /**
   * A temperature for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  temperature?: number;
  /**
   * A temperature modifier for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  temperature_modifier?: 'none' | 'frozen';
  /**
   * A grass and foliage color for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  downfall?: number;
  player_spawn_friendly?: boolean;
  /**
   * Spawns passive mobs as long as random value is less than this
   * https://minecraft.wiki/w/Custom_biome
   */
  creature_spawn_friendly?: number;
  effects?: EffectOptions;
  /**
   * The namespaced id of the configured surface builder to use
   * https://minecraft.wiki/w/Custom_biome
   */
  surface_builder?: string;
  carvers?: Carvers;
  /**
   * Features for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  features?: (string | unknown[])[];
  /**
   * A creature spawn probability for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  creature_spawn_probability?: number;
  /**
   * The structures to generate in this biome
   * https://minecraft.wiki/w/Custom_biome
   */
  starts?: string[];
  spawners?: Spawners;
  spawn_costs?: SpawnCosts;
  [k: string]: unknown | undefined;
}
/**
 * Effect options for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface EffectOptions {
  /**
   * A fog color
   * https://minecraft.wiki/w/Custom_biome
   */
  fog_color?: number;
  /**
   * Decimal value converted from Hex color to use for tree leaves and vines. If not present, the value depends on humidity and temperature
   * https://minecraft.wiki/w/Custom_biome
   */
  foliage_color?: number;
  /**
   * A grass color
   * https://minecraft.wiki/w/Custom_biome
   */
  grass_color?: number;
  /**
   * A sky color
   * https://minecraft.wiki/w/Custom_biome
   */
  sky_color?: number;
  /**
   * A water color
   * https://minecraft.wiki/w/Custom_biome
   */
  water_color?: number;
  /**
   * Decimal value converted from Hex color to use for fog
   * https://minecraft.wiki/w/Custom_biome
   */
  water_fog_color?: number;
  /**
   * A grass color modifier
   * https://minecraft.wiki/w/Custom_biome
   */
  grass_color_modifier?: 'none' | 'dark_forest' | 'swamp';
  particle?: ParticleOptions;
  /**
   * Sound event to use for ambient sound
   * https://minecraft.wiki/w/Custom_biome
   */
  ambient_sound?: string;
  mood_sound?: MoodSound;
  additions_sound?: AdditionsSound;
  music?: Music;
}
/**
 * Particle options for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface ParticleOptions {
  /**
   * A particle spawning frequency for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  probability?: number;
  options?: ParticleOptions1;
}
/**
 * Settings for mood sound
 * https://minecraft.wiki/w/Custom_biome
 */
export interface MoodSound {
  /**
   * Sound event to use
   * https://minecraft.wiki/w/Custom_biome
   */
  sound?: string;
  tick_delay?: number;
  /**
   * Determines the cubic range of possible positions to play the mood sound. The player is at the center of the cubic range, and the edge length is 2 * block_search_extent + 1
   * https://minecraft.wiki/w/Custom_biome
   */
  block_search_context?: number;
  offset?: number;
  [k: string]: unknown | undefined;
}
/**
 * Settings for additions sound
 * https://minecraft.wiki/w/Custom_biome
 */
export interface AdditionsSound {
  /**
   * Sound event to use
   * https://minecraft.wiki/w/Custom_biome
   */
  sound?: string;
  tick_chance?: TickChance;
  [k: string]: unknown | undefined;
}
/**
 * Specific music that should be played in the biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface Music {
  /**
   * Sound event to use
   * https://minecraft.wiki/w/Custom_biome
   */
  sound?: string;
  min_delay?: number;
  max_delay?: number;
  /**
   * Whether or not to replace music which is already playing
   * https://minecraft.wiki/w/Custom_biome
   */
  replace_current_music?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Carvers to use for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface Carvers {
  /**
   * Carvers used during air generation step for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  air?: string[];
  /**
   * Carvers used during liquid generation step for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  liquid?: string[];
}
/**
 * Entity spawning options for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface Spawners {
  monster?: SpawnerOptions;
  creature?: SpawnerOptions;
  ambient?: SpawnerOptions;
  water_creature?: SpawnerOptions;
  underground_water_creature?: SpawnerOptions;
  water_ambient?: SpawnerOptions;
  misc?: SpawnerOptions;
  axolotls?: SpawnerOptions;
}
/**
 * A spawner for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface SwawnerOptions {
  /**
   * A mob namespaced entity for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  type?: string;
  /**
   * A mod spawn factor for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  weight?: number;
  /**
   * A minimum mob spawn in a pack for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  minCount?: number;
  /**
   * A maximum mob spawn in a pack for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  maxCount?: number;
}
/**
 * Entity identifiers for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface SpawnCosts {
  [k: string]: EntityIdentifier | undefined;
}
/**
 * A namespaced entity identifier for the current biome
 * https://minecraft.wiki/w/Custom_biome
 */
export interface EntityIdentifier {
  /**
   * A new mob maximum potential for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  energy_budget?: number;
  /**
   * A new mob charge for the current biome
   * https://minecraft.wiki/w/Custom_biome
   */
  charge?: number;
}
