/* eslint-disable */

export type ColorValue =
  | (
      | string
      | {
          [k: string]: ColorValue | undefined;
        }
    )
  | undefined;
/**
 * Typography definition supporting both traditional array format and compact object format
 */
export type Typographies =
  | (
      | (Typography | null)[]
      | {
          fontFamily?: string | (string | null)[] | null;
          fontSize?: string | (string | null)[] | null;
          fontStyle?: string | (string | null)[] | null;
          fontWeight?: string | number | (string | number | null)[] | null;
          letterSpacing?: string | (string | null)[] | null;
          lineHeight?: string | number | (string | number | null)[] | null;
        }
    )
  | undefined;

/**
 * Root devup.json configuration
 */
export interface DevupJson {
  /**
   * Theme configuration including colors, typography, and breakpoints
   */
  theme?: Theme | null;
  [k: string]: unknown | undefined;
}
export interface Theme {
  /**
   * Breakpoints in pixels for responsive typography (default: [0, 480, 768, 992, 1280, 1600])
   */
  breakpoints?: number[];
  /**
   * Color themes by mode name (e.g., "light", "dark")
   */
  colors?: {
    [k: string]: ColorTheme | undefined;
  };
  /**
   * Typography definitions by name (e.g., "h1", "body", "caption")
   */
  typography?: {
    [k: string]: Typographies | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Color theme with color name to value mappings. Supports nested objects for color scales.
 */
export interface ColorTheme {
  [k: string]:
    | (
        | string
        | {
            [k: string]: ColorValue | undefined;
          }
      )
    | undefined;
}
export interface Typography {
  fontFamily?: string | null;
  fontSize?: string | null;
  fontWeight?: string | number | null;
  letterSpacing?: string | null;
  lineHeight?: string | number | null;
  [k: string]: unknown | undefined;
}
