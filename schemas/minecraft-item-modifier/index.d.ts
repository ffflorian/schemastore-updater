/* eslint-disable */

/**
 * Namespaced ID of the function to apply.
 */
export type Function =
  | 'minecraft:apply_bonus'
  | 'minecraft:copy_name'
  | 'minecraft:copy_nbt'
  | 'minecraft:copy_state'
  | 'minecraft:enchant_randomly'
  | 'minecraft:enchant_with_levels'
  | 'minecraft:exploration_map'
  | 'minecraft:explosion_decay'
  | 'minecraft:furnace_smelt'
  | 'minecraft:fill_player_head'
  | 'minecraft:limit_count'
  | 'minecraft:looting_enchant'
  | 'minecraft:set_attributes'
  | 'minecraft:set_banner_pattern'
  | 'minecraft:set_contents'
  | 'minecraft:set_count'
  | 'minecraft:set_damage'
  | 'minecraft:set_enchantments'
  | 'minecraft:set_loot_table'
  | 'minecraft:set_lore'
  | 'minecraft:set_name'
  | 'minecraft:set_nbt'
  | 'minecraft:set_stew_effect';
/**
 * Configuration file defining an item modifier for a data pack for Minecraft.
 */
export type MinecraftDataPackItemModifier = {
  function?: Function;
  [k: string]: unknown | undefined;
}[];
