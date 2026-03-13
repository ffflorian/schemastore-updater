/* eslint-disable */

/**
 * Fusion extension for Minecraft texture metadata
 */
export type FusionTextureMetadata =
  | {
      /**
       * Animation
       */
      animation?: {
        frames?: (
          | number
          | {
              index?: number;
              time?: number;
              [k: string]: unknown | undefined;
            }
        )[];
        frametime?: number;
        height?: number;
        interpolate?: boolean;
        width?: number;
        [k: string]: unknown | undefined;
      };
    }
  | {
      fusion?: FusionTextureProperties;
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
