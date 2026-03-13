/* eslint-disable */

/**
 * A mcmeta file for an animated texture for a Minecraft resource pack config schema
 */
export type MinecraftResourcePackTextureMcmeta =
  | {
      /**
       * Animation
       */
      animation: {
        interpolate?: boolean;
        width?: number;
        height?: number;
        frametime?: number;
        frames?: (
          | number
          | {
              index?: number;
              time?: number;
              [k: string]: unknown | undefined;
            }
        )[];
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }
  | {
      fusion: FusionTextureProperties;
      [k: string]: unknown | undefined;
    };
/**
 * The type of the texture corresponding to the metadata file
 * https://github.com/SuperMartijn642/Fusion/wiki/Default-Texture-Types
 */
export type TextureType = 'connecting' | 'scrolling';

/**
 * Properties for Fusion's texture types
 * https://github.com/SuperMartijn642/Fusion/wiki/Default-Texture-Types
 */
export interface FusionTextureProperties {
  type: TextureType;
  [k: string]: unknown | undefined;
}
