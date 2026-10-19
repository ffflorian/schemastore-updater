/* eslint-disable */

export type Tags = string | string[];
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
 * A color as #rrggbb, lowercase
 */
export type Color = string;

/**
 * One ttheme palette: the colors a terminal wears and the character they come from
 * https://github.com/kecan0406/ttheme/blob/main/CONTRIBUTING.md#the-file
 */
export interface TthemePalette {
  /**
   * This file's JSON Schema, for editor completion and checks; ttheme ignores it
   */
  $schema?: string;
  /**
   * Who the palette is and how it is listed
   */
  meta: {
    /**
     * The palette's name, the same as its file name without .toml
     */
    name: string;
    /**
     * In a market, the official palette this one varies, which only says where its ANSI colors came from
     */
    base?: string;
    /**
     * The series the palette belongs to; in the official catalog it needs a [[group]] in themes/_groups.toml, and a market palette's group is its market
     */
    group?: string;
    /**
     * The official palette's place in the new-tab rotation; a market palette has none
     */
    order?: number;
    /**
     * "default" marks the official catalog's neutral palette; a market palette has none
     */
    role?: 'default';
    /**
     * What the ANSI colors were derived from, such as a base scheme
     */
    ansi_source?: string;
    /**
     * The character's danbooru tag, which find searches for pictures
     */
    booru?: string;
    /**
     * The tag on sites that name the character otherwise: one tag, or a list find searches together; an empty list skips the site
     */
    booru_sites?: {
      [k: string]: Tags | undefined;
    };
    /**
     * The character's names in its original language, the full name first; preview and browse search them
     *
     * @minItems 1
     */
    native_names?: [string, ...string[]];
    /**
     * The three slots that identify the character, which must be three different colors
     *
     * @minItems 3
     * @maxItems 3
     */
    signature: [Slot, Slot, Slot];
    [k: string]: unknown | undefined;
  };
  /**
   * The colors the terminal wears
   */
  colors: {
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
    /**
     * The sixteen ANSI colors, black to bright white
     *
     * @minItems 16
     * @maxItems 16
     */
    ansi: [
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
    [k: string]: unknown | undefined;
  };
  /**
   * Contrast gate rules this palette is let off, with the reason
   */
  contrast?: {
    /**
     * Contrast gate rules this palette does not have to pass
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
           * A site ttheme find searches
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
