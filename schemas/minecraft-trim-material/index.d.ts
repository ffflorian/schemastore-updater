/* eslint-disable */

/**
 * A trim material for a Minecraft data pack config schema
 */
export interface MinecraftDataPackTrimMaterial {
  asset_name: string;
  description: {
    color: string;
    translate: string;
    [k: string]: unknown | undefined;
  };
  ingredient: string;
  item_model_index: number;
  [k: string]: unknown | undefined;
}
