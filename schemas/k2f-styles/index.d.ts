/* eslint-disable */

export interface K2FStylesThemeSchema {
  /**
   * Named colors. The only color table; roles and primitives reference these keys or hex.
   */
  palette: {
    [k: string]: string | undefined;
  };
  /**
   * Named visual atoms referenced by role/variant box_decoration.
   */
  primitives?: {
    /**
     * Named fills used for backgrounds and surfaces.
     */
    surfaces?: {
      [k: string]:
        | {
            type: 'solid';
            /**
             * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
             */
            color: string;
          }
        | {
            type: 'linear_gradient';
            value: LinearGradient;
          }
        | undefined;
    };
    /**
     * Named gradients for reuse.
     */
    gradients?: {
      [k: string]: LinearGradient | undefined;
    };
    /**
     * Named compound shadows (one or more layers).
     */
    shadows?: {
      [k: string]: Shadow | undefined;
    };
    /**
     * Named blur definitions.
     */
    blurs?: {
      [k: string]: Blur | undefined;
    };
    /**
     * Named corner radii in 1/1000 pt units.
     */
    corners?: {
      /**
       * Non-negative fixed-point Pt in 1/1000 pt units.
       */
      [k: string]: number | undefined;
    };
    /**
     * Named borders (width + color).
     */
    borders?: {
      [k: string]: Border | undefined;
    };
  };
  /**
   * Role -> base style mapping. Must include 'default' with font_family, font_size, line_height_mult, and color. Other roles inherit omitted text fields from default.
   */
  roles: {
    [k: string]:
      | {
          font_family?: string;
          /**
           * Fixed-point Pt in 1/1000 pt units (e.g. 12000 = 12pt).
           */
          font_size?: number;
          /**
           * Line height multiplier in 1/1000 units (e.g. 1200 = 1.2x).
           */
          line_height_mult?: number;
          /**
           * Extra advance between glyphs in 1/1000 pt (may be negative). Default 0.
           */
          letter_spacing_pt?: number;
          /**
           * First-line indent in 1/1000 pt. Applies only to the first wrapped line of a text node.
           */
          first_line_indent_pt?: number;
          color?: string;
          /**
           * Text alignment within the text box.
           */
          text_align?: 'start' | 'center' | 'end' | 'justify';
          /**
           * Role-level bold. Defaults to false.
           */
          bold?: boolean;
          /**
           * Role-level italic. Defaults to false.
           */
          italic?: boolean;
          /**
           * Overrides the parent container's cross-axis alignment for this item.
           */
          self_align?: 'start' | 'center' | 'end' | 'stretch';
          /**
           * How an image node's bitmap maps into its laid-out box. contain (default) letterboxes; cover center-crops. Lives on the role/variant, never on the node.
           */
          image_fit?: 'contain' | 'cover';
          box_decoration?: BoxDecoration;
          list_style?: ListStyle;
          /**
           * Variant name -> skin for this role. Keys: box_decoration, self_align, text_overrides, list_style, image_fit. Text fields (bold, color, text_align, font_size, …) go in text_overrides, not at the variant root.
           */
          variants?: {
            [k: string]:
              | {
                  box_decoration?: BoxDecoration;
                  /**
                   * Overrides the parent container's cross-axis alignment for this item.
                   */
                  self_align?: 'start' | 'center' | 'end' | 'stretch';
                  text_overrides?: TextStylePatch;
                  list_style?: ListStyle;
                  /**
                   * How an image node's bitmap maps into its laid-out box. contain (default) letterboxes; cover center-crops.
                   */
                  image_fit?: 'contain' | 'cover';
                }
              | undefined;
          };
        }
      | undefined;
  };
  /**
   * Role font_family names -> embedded font file stems under assets/fonts/ (e.g. 'Roboto-Regular' -> 'Roboto-Regular'). Lives in styles/theme.json, not manifest.json. One face also registers as 'default'; two or more faces: alias every stem, no auto-default.
   */
  font_aliases?: {
    [k: string]: string | undefined;
  };
  /**
   * Optional family name -> {regular,bold,italic,bold_italic} file stems. Role font_family names this family; bold/italic then select those files. Omitted slots stay synthetic (stroke/shear). Not CSS font-weight numbers. Lives in styles/theme.json.
   */
  font_faces?: {
    [k: string]:
      | {
          regular?: string;
          bold?: string;
          italic?: string;
          bold_italic?: string;
        }
      | undefined;
  };
  modifiers?: {
    /**
     * Modifier type precedence list (low -> high). Higher precedence overrides lower precedence on overlap.
     */
    precedence?: string[];
    /**
     * Modifier type -> intent -> style patch (optional).
     */
    styles?: {
      [k: string]:
        | {
            [k: string]: TextStylePatch | undefined;
          }
        | undefined;
    };
  };
}
export interface LinearGradient {
  type: 'linear';
  /**
   * Degrees; 0 = toward +x (right), 90 = toward +y (down). Not CSS (CSS 180° = down).
   */
  angle_degrees: number;
  /**
   * @minItems 2
   */
  stops: [
    {
      /**
       * Stop position in 0..1000 (0 = start, 1000 = end).
       */
      pos: number;
      /**
       * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
       */
      color: string;
    },
    {
      /**
       * Stop position in 0..1000 (0 = start, 1000 = end).
       */
      pos: number;
      /**
       * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
       */
      color: string;
    },
    ...{
      /**
       * Stop position in 0..1000 (0 = start, 1000 = end).
       */
      pos: number;
      /**
       * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
       */
      color: string;
    }[]
  ];
}
export interface Shadow {
  /**
   * @minItems 1
   */
  layers: [ShadowLayer, ...ShadowLayer[]];
}
export interface ShadowLayer {
  /**
   * Fixed-point Pt in 1/1000 pt units.
   */
  offset_x_pt: number;
  /**
   * Fixed-point Pt in 1/1000 pt units.
   */
  offset_y_pt: number;
  /**
   * Non-negative fixed-point Pt in 1/1000 pt units.
   */
  blur_radius_pt: number;
  /**
   * Fixed-point Pt in 1/1000 pt units.
   */
  spread_radius_pt: number;
  /**
   * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
   */
  color: string;
}
export interface Blur {
  /**
   * Non-negative fixed-point Pt in 1/1000 pt units.
   */
  radius_pt: number;
}
export interface Border {
  /**
   * Non-negative fixed-point Pt in 1/1000 pt units.
   */
  width_pt: number;
  /**
   * A palette key (e.g. 'ink') or a hex color ('#RRGGBB' / '#RRGGBBAA').
   */
  color: string;
  /**
   * Sides that receive the stroke. Omit for all four sides.
   *
   * @minItems 1
   * @maxItems 4
   *
   * Items: Which side of the box receives the border stroke.
   */
  edges?:
    | ['top' | 'right' | 'bottom' | 'left']
    | ['top' | 'right' | 'bottom' | 'left', 'top' | 'right' | 'bottom' | 'left']
    | ['top' | 'right' | 'bottom' | 'left', 'top' | 'right' | 'bottom' | 'left', 'top' | 'right' | 'bottom' | 'left']
    | [
        'top' | 'right' | 'bottom' | 'left',
        'top' | 'right' | 'bottom' | 'left',
        'top' | 'right' | 'bottom' | 'left',
        'top' | 'right' | 'bottom' | 'left'
      ];
  /**
   * Stroke pattern. Omit for solid.
   */
  style?: 'solid' | 'dashed' | 'dotted';
}
/**
 * Optional box decoration for any node using this role (text, table, container, image). Lives on the role, never on the node. Text badges: background + padding + corner_radius on the role.
 */
export interface BoxDecoration {
  /**
   * Name of a theme primitive. Inline objects are forbidden in theme.json.
   */
  background?: string;
  /**
   * Name of a theme primitive. Inline objects are forbidden in theme.json.
   */
  border?: string;
  /**
   * Name of a theme primitive. Inline objects are forbidden in theme.json.
   */
  corner_radius?: string;
  padding_pt?:
    | {
        /**
         * Non-negative fixed-point Pt in 1/1000 pt units.
         */
        top: number;
        /**
         * Non-negative fixed-point Pt in 1/1000 pt units.
         */
        right: number;
        /**
         * Non-negative fixed-point Pt in 1/1000 pt units.
         */
        bottom: number;
        /**
         * Non-negative fixed-point Pt in 1/1000 pt units.
         */
        left: number;
      }
    | number
    | [number, number, number, number];
  /**
   * Name of a theme primitive. Inline objects are forbidden in theme.json.
   */
  shadow?: string;
  /**
   * Name of a theme primitive. Inline objects are forbidden in theme.json.
   */
  blur?: string;
}
/**
 * Optional list layout tokens for this role.
 */
export interface ListStyle {
  /**
   * Fixed-width marker box in 1/1000 pt units.
   */
  marker_box_width_pt?: number;
  /**
   * Gap between marker box and body text start in 1/1000 pt units.
   */
  marker_gap_pt?: number;
  /**
   * Additional indent per nesting depth level in 1/1000 pt units.
   */
  depth_indent_pt?: number;
  /**
   * Alignment of the marker within the fixed-width marker box.
   */
  marker_align?: 'start' | 'center' | 'end';
  /**
   * Glyph used for bullet markers.
   */
  bullet_glyph?: string;
  /**
   * Suffix appended to the number marker (e.g. '.' yields '1.').
   */
  number_suffix?: string;
}
/**
 * Optional text patch (bold, color, text_align, font_size, …). Not valid at the variant root.
 */
export interface TextStylePatch {
  font_family?: string | null;
  font_size?: number | null;
  line_height_mult?: number | null;
  letter_spacing_pt?: number | null;
  color?: string | null;
  text_align?: ('start' | 'center' | 'end' | 'justify') | null;
  bold?: boolean | null;
  italic?: boolean | null;
  strikethrough?: boolean | null;
  underline?: boolean | null;
}
