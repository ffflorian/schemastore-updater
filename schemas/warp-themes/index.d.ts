/* eslint-disable */

/**
 * An accent color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Accent =
  | Color
  | (
      | {
          left?: Left;
          right?: Right;
        }
      | {
          top?: Top;
          bottom?: Bottom;
        }
    );
export type Color = string;
/**
 * A left color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Left = string;
/**
 * A right color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Right = string;
/**
 * A top color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Top = string;
/**
 * A bottom color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Bottom = string;
/**
 * A background color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Background =
  | Color
  | (
      | {
          left?: Left;
          right?: Right;
        }
      | {
          top?: Top;
          bottom?: Bottom;
        }
    );
/**
 * Whether lighter or darker colors are used in the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Details = 'lighter' | 'darker';
/**
 * A foreground color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Foreground = string;
/**
 * A black color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Black = string;
/**
 * A blue color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Blue = string;
/**
 * A cyan color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Cyan = string;
/**
 * A green color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Green = string;
/**
 * A magenta color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Magenta = string;
/**
 * A red color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Red = string;
/**
 * A white color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type White = string;
/**
 * A yellow color of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export type Yellow = string;
/**
 * A path of the current image of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Path = string;
/**
 * An opacity of the current image of the current theme
 * https://docs.warp.dev/appearance/custom-themes#background-images-and-gradients
 */
export type Opacity = number;

/**
 * A theme
 */
export interface Theme {
  accent?: Accent;
  background?: Background;
  details?: Details;
  foreground?: Foreground;
  terminal_colors?: TerminalColors;
  background_image?: BackgroundImage;
}
/**
 * Terminal colors of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export interface TerminalColors {
  bright?: Bright;
  normal?: Normal;
}
/**
 * Bright colors of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export interface Bright {
  black?: Black;
  blue?: Blue;
  cyan?: Cyan;
  green?: Green;
  magenta?: Magenta;
  red?: Red;
  white?: White;
  yellow?: Yellow;
}
/**
 * Normal colors of the current theme
 * https://docs.warp.dev/appearance/custom-themes#create-your-own-custom-theme-manually
 */
export interface Normal {
  black?: Black;
  blue?: Blue;
  cyan?: Cyan;
  green?: Green;
  magenta?: Magenta;
  red?: Red;
  white?: White;
  yellow?: Yellow;
}
/**
 * A background image of the current theme
 */
export interface BackgroundImage {
  path?: Path;
  opacity?: Opacity;
}
