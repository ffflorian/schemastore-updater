/* eslint-disable */

/**
 * Configuration file defining a recipe for a data pack for Minecraft.
 */
export type MinecraftDataPackRecipe = {
  [k: string]: unknown | undefined;
} & {
  /**
   * The type of recipe.
   */
  type?:
    | 'minecraft:blasting'
    | 'minecraft:campfire_cooking'
    | 'minecraft:crafting_shaped'
    | 'minecraft:crafting_shapeless'
    | 'minecraft:smelting'
    | 'minecraft:smithing'
    | 'minecraft:smoking'
    | 'minecraft:stonecutting';
  [k: string]: unknown | undefined;
};
