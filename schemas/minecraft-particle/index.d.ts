/* eslint-disable */

/**
 * A particle for a Minecraft resource pack config schema
 */
export interface MinecraftResourcePackParticle {
  textures: string[];
  [k: string]: unknown | undefined;
}
