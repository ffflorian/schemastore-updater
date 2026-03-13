/* eslint-disable */

/**
 * A trim pattern for a Minecraft data pack config schema
 */
export interface MinecraftDataPackTrimPattern {
  asset_id: string;
  description: {
    color?: string;
    translate: string;
    [k: string]: unknown | undefined;
  };
  template_item: string;
  [k: string]: unknown | undefined;
}
