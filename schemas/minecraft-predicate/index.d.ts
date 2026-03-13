/* eslint-disable */

/**
 * Configuration file defining a predicate for a data pack for Minecraft.
 */
export type MinecraftDataPackPredicate = {
  [k: string]: unknown | undefined;
} & {
  conditions?: Conditions;
  [k: string]: unknown | undefined;
};
/**
 * The condition's ID.
 */
export type Conditions =
  | 'minecraft:alternative'
  | 'minecraft:block_state_property'
  | 'minecraft:damage_source_properties'
  | 'minecraft:entity_properties'
  | 'minecraft:entity_scores'
  | 'minecraft:inverted'
  | 'minecraft:killed_by_player'
  | 'minecraft:location_check'
  | 'minecraft:match_tool'
  | 'minecraft:random_chance'
  | 'minecraft:random_chance_with_looting'
  | 'minecraft:reference'
  | 'minecraft:survives_explosion'
  | 'minecraft:table_bonus'
  | 'minecraft:time_check'
  | 'minecraft:weather_check'
  | 'minecraft:value_check';
