/* eslint-disable */

/**
 * One of the palette's twenty colors
 */
export type Slot =
  | 'background'
  | 'foreground'
  | 'cursor'
  | 'selection'
  | 'ansi0'
  | 'ansi1'
  | 'ansi2'
  | 'ansi3'
  | 'ansi4'
  | 'ansi5'
  | 'ansi6'
  | 'ansi7'
  | 'ansi8'
  | 'ansi9'
  | 'ansi10'
  | 'ansi11'
  | 'ansi12'
  | 'ansi13'
  | 'ansi14'
  | 'ansi15';
/**
 * The sixteen ANSI colors, black to bright white
 *
 * @minItems 16
 * @maxItems 16
 */
export type Ansi = [
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color,
  Color
];
/**
 * A color as #rrggbb, lowercase
 */
export type Color = string;

/**
 * One ttheme palette: the colors a terminal shows, and the work or character they are of. Its file name is its name
 * https://github.com/kecan0406/ttheme/blob/main/CONTRIBUTING.md#the-file
 */
export interface TthemePalette {
  /**
   * This file's JSON Schema, for editor completion and checks; ttheme ignores it
   */
  $schema?: string;
  /**
   * What the palette is of: a work in the commons, as <work>, or one of its characters, as <work>/<character>. Lists shelve the palette under that work. A palette with no subject is an original, listed under its marketplace
   * https://ttheme.dev/docs/creating-palettes/publish
   */
  subject?: string;
  /**
   * The palette this one was copied from, by its full name: ttheme/<palette> for a built-in one, or <owner>@<marketplace>/<palette>, so a copy keeps saying whose it was
   */
  from?: string;
  /**
   * The palette's three colors that identify it, the ones a card draws as its own, which must differ
   *
   * @minItems 3
   * @maxItems 3
   */
  signature: [Slot, Slot, Slot];
  /**
   * What the ANSI colors were derived from, such as a base scheme. A built-in palette names it; any other palette that leaves it out reads as original
   */
  ansi_source?: string;
  /**
   * The colors the terminal shows, in the mode the palette was made in: light when its background is lighter than its foreground
   */
  colors: {
    /**
     * A color as #rrggbb, lowercase
     */
    background: string;
    /**
     * A color as #rrggbb, lowercase
     */
    foreground: string;
    /**
     * A color as #rrggbb, lowercase
     */
    cursor: string;
    /**
     * A color as #rrggbb, lowercase
     */
    selection_background: string;
    ansi: Ansi;
    light?: Shade;
    dark?: Shade;
    [k: string]: unknown | undefined;
  };
  /**
   * Contrast checks this palette is let off, with the reason
   */
  contrast?: {
    /**
     * Contrast checks this palette does not have to pass
     */
    waive?: (
      | (
          | 'foreground'
          | 'accents'
          | 'ansi0-dark'
          | 'light-ansi'
          | 'ansi8-visible'
          | 'selection'
          | 'ansi-role'
          | 'bright-follows'
          | 'distinct'
          | 'ansi0-on-accents'
          | 'ansi7-on-ansi8'
          | 'cvd-red-green'
        )
      | string
    )[];
    /**
     * Why the waived rules do not apply; a waiver needs one
     */
    reason?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Ghostty's dock icon colors
   */
  ghostty?: {
    /**
     * A color as #rrggbb, lowercase
     */
    icon_ghost?: string;
    /**
     * The screen behind the ghost on Ghostty's dock icon: one color, or several drawn as a gradient
     */
    icon_screen?: Color | [Color, ...Color[]];
    [k: string]: unknown | undefined;
  };
  /**
   * Background pictures, by their post on a find site, with their framing
   *
   * @minItems 1
   * @maxItems 8
   */
  picture?:
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ]
    | [
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        },
        {
          /**
           * The site the post is on
           */
          site: ('danbooru' | 'konachan' | 'yande' | 'zerochan') | string;
          /**
           * The post's number on the site
           */
          id: number;
          /**
           * How large the picture is drawn: fill covers the window, a number is a percentage of it
           */
          size?: 'fill' | number;
          /**
           * Where the picture sits in the window
           */
          position?:
            | (
                | 'top-left'
                | 'top-center'
                | 'top-right'
                | 'center-left'
                | 'center'
                | 'center-right'
                | 'bottom-left'
                | 'bottom-center'
                | 'bottom-right'
              )
            | string;
          /**
           * How strongly the picture shows through the palette's background
           */
          opacity?: number;
          [k: string]: unknown | undefined;
        }
      ];
  [k: string]: unknown | undefined;
}
/**
 * The palette in light mode, for a palette made dark. A built-in palette carries its other mode; without one, ttheme mirrors it
 */
export interface Shade {
  /**
   * The terminal's background
   */
  background: string;
  /**
   * The text color
   */
  foreground: string;
  /**
   * The cursor's color
   */
  cursor: string;
  /**
   * The background of selected text
   */
  selection_background: string;
  ansi: Ansi;
  [k: string]: unknown | undefined;
}
