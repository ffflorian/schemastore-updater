/* eslint-disable */

export type ContainerChild = K2FSemanticNodesSchema1 | IncludeRef;
/**
 * Non-negative fixed-point Pt in 1/1000 pt units.
 */
export type PtNonneg = number;
export type Align = 'start' | 'center' | 'end' | 'stretch';
export type GridLayoutTrack =
  | {
      pt: number;
    }
  | {
      /**
       * Integer weight of leftover space (not CSS 1.2fr).
       */
      fr: number;
    }
  | {
      auto: true;
    };

export interface K2FSemanticNodesSchema {
  /**
   * Stable node ID. Dotted ASCII letters, digits, and underscore. Unique across the document.
   */
  id: string;
  /**
   * Page split policy. auto: split at line or child boundaries when the remainder of the page is too small. avoid: never split; fail if taller than one page.
   */
  break_inside?: 'auto' | 'avoid';
  /**
   * When page, start this node on a new page when not already at the content top.
   */
  break_before?: 'auto' | 'page';
  /**
   * If true, this node and the next sibling must start on the same page when they fit together.
   */
  keep_with_next?: boolean;
  /**
   * When all, this node spans the full width of an enclosing columns container. Must not be set on a columns container itself.
   */
  column_span?: 'none' | 'all';
  /**
   * Table-cell occupancy along column_widths (same row only). Omit or 1 = one column. Illegal outside a table cell. Not rowspan; not columns-layout column_span.
   */
  colspan?: number;
  /**
   * Semantic role. Must be defined by the theme/tokens roles.
   */
  role: string;
  /**
   * Optional visual variant name for this role. The allowed variants are defined by the theme.
   */
  variant?: string | null;
  /**
   * Optional whitespace preservation hint. When role is "code_block", engine validation requires this to be true (or omitted).
   */
  preserve_whitespace?: boolean | null;
  /**
   * Optional list group identifier. Required by engine validation when role is "list_item".
   */
  list_id?: string | null;
  /**
   * Optional nesting depth for list items. If omitted, the engine treats it as 0.
   */
  depth?: number | null;
  /**
   * Optional marker style for list items. If omitted, the engine treats it as bullet.
   */
  marker_type?: 'bullet' | 'number' | null;
  content:
    | {
        type: 'text';
        value: string;
      }
    | {
        type: 'code_block';
        value: string | string[];
      }
    | {
        type: 'math';
        /**
         * TeX-subset math source for display formulas.
         */
        value: string;
      }
    | {
        type: 'form_field';
        value: {
          kind: 'text' | 'multiline' | 'checkbox';
          value: string;
          placeholder?: string;
          width?: number;
          height?: number;
          lines?: number;
          max_length?: number;
          required?: boolean;
        };
      }
    | {
        type: 'image';
        value: {
          /**
           * Package path under assets/images/ (field name is src, not path). Supported: PNG, JPEG, WebP, SVG (engine rasterizes SVG). GIF is not supported.
           */
          src: string;
          /**
           * Deterministic image width in fixed-point Pt (1/1000 pt units).
           */
          width: number;
          /**
           * Deterministic image height in fixed-point Pt (1/1000 pt units).
           */
          height: number;
        };
      }
    | {
        type: 'container';
        value: {
          /**
           * Optional. Omitted or empty: no children (dividers, spacers).
           */
          children?: ContainerChild[];
        };
      }
    | {
        type: 'table';
        value: {
          /**
           * @minItems 1
           */
          column_widths: [
            (
              | {
                  pt: number;
                }
              | {
                  /**
                   * Integer weight of leftover space (not CSS 1.2fr).
                   */
                  fr: number;
                }
            ),
            ...(
              | {
                  pt: number;
                }
              | {
                  /**
                   * Integer weight of leftover space (not CSS 1.2fr).
                   */
                  fr: number;
                }
            )[]
          ];
          /**
           * Number of leading header rows to repeat at page breaks. Integer count, not a row of cells.
           */
          header_rows?: number;
          /**
           * Default gap between rows and columns in fixed-point Pt (1/1000 pt units). No colspan/rowspan — every row has exactly column_widths.length cells.
           */
          gap?: number;
          /**
           * Optional row gap override. Falls back to gap when omitted or null.
           */
          row_gap?: number | null;
          /**
           * Optional column gap override. Falls back to gap when omitted or null.
           */
          column_gap?: number | null;
          data:
            | {
                type: 'inline';
                rows: K2FSemanticNodesSchema1[][];
              }
            | {
                type: 'asset';
                source: string;
              };
        };
      }
    | {
        type: 'table_reference';
        value: {
          source: string;
          view_mode: string;
          /**
           * Deterministic table reference width in fixed-point Pt (1/1000 pt units).
           */
          width: number;
          /**
           * Deterministic table reference height in fixed-point Pt (1/1000 pt units).
           */
          height: number;
        };
      };
  /**
   * @maxItems 50
   */
  modifiers?: {
    /**
     * UTF-8 byte offsets [start, end) into the node text (must lie on character boundaries). Not character indices. A newline in the value is 1 byte. CJK/emoji/curly quotes are multi-byte.
     *
     * @minItems 2
     * @maxItems 2
     */
    range: [number, number];
    type:
      'emphasis' | 'link' | 'underline' | 'strikethrough' | 'subscript' | 'superscript' | 'math' | 'syntax_highlight';
    /**
     * Required. Must match a key under theme.modifiers.styles[type] (e.g. emphasis 'strong', underline 'default', link URL).
     */
    intent: string;
  }[];
  /**
   * Optional deterministic layout hint for containers. On content/root.json, omit layout or use vertical stack only — nest grid, overlay, columns, and horizontal stacks under a child.
   */
  layout?:
    | null
    | {
        /**
         * Optional. Omitted layout type is stack (same as omitting layout entirely, plus size/gap).
         */
        type?: 'stack';
        direction?: 'vertical' | 'horizontal';
        /**
         * Fixed-point Pt gap between children (1/1000 pt units).
         */
        gap?: number;
        /**
         * Cross-axis alignment for stack children.
         */
        align_items?: 'start' | 'center' | 'end' | 'stretch';
        /**
         * Main-axis distribution: start, center, or end only. Not Flexbox (no space-between). Left/right split: catalog/content/ex_split_bar.json. Footer pinned to page bottom: catalog/content/ex_poster_shell.json.
         */
        justify_content?: 'start' | 'center' | 'end';
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units).
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units).
         */
        height?: PtNonneg | null;
      }
    | {
        /**
         * Children are stacked visually in source order (first = back, last = front).
         */
        type: 'overlay';
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units).
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units).
         */
        height?: PtNonneg | null;
      }
    | {
        type: 'grid';
        /**
         * Default gap between rows and columns in fixed-point Pt (1/1000 pt units).
         */
        gap?: number;
        /**
         * Optional row gap override. Falls back to gap when omitted or null.
         */
        row_gap?: number | null;
        /**
         * Optional column gap override. Falls back to gap when omitted or null.
         */
        column_gap?: number | null;
        /**
         * Default per-cell alignment for grid children. Null/omitted = stretch/stretch.
         */
        cell_align?: CellAlign1 | null;
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units). Enables fr columns when parent width is unbounded.
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units). Enables fr rows when parent height is unbounded.
         */
        height?: PtNonneg | null;
        /**
         * @minItems 1
         */
        columns: [GridLayoutTrack, ...GridLayoutTrack[]];
        /**
         * Optional. Omitted: engine fills {auto:true} rows to fit children (ceil(n/columns)). Declared rows are not grown. fr rows still need a finite outer height.
         *
         * @minItems 1
         */
        rows?: [GridLayoutTrack, ...GridLayoutTrack[]];
      }
    | {
        /**
         * Continuous multi-column flow. Children pack left-to-right across equal-width columns.
         */
        type: 'columns';
        /**
         * Number of equal-width columns.
         */
        count: number;
        /**
         * Fixed-point Pt gap between columns (1/1000 pt units).
         */
        gap?: number;
      };
}
export interface K2FSemanticNodesSchema1 {
  /**
   * Stable node ID. Dotted ASCII letters, digits, and underscore. Unique across the document.
   */
  id: string;
  /**
   * Page split policy. auto: split at line or child boundaries when the remainder of the page is too small. avoid: never split; fail if taller than one page.
   */
  break_inside?: 'auto' | 'avoid';
  /**
   * When page, start this node on a new page when not already at the content top.
   */
  break_before?: 'auto' | 'page';
  /**
   * If true, this node and the next sibling must start on the same page when they fit together.
   */
  keep_with_next?: boolean;
  /**
   * When all, this node spans the full width of an enclosing columns container. Must not be set on a columns container itself.
   */
  column_span?: 'none' | 'all';
  /**
   * Table-cell occupancy along column_widths (same row only). Omit or 1 = one column. Illegal outside a table cell. Not rowspan; not columns-layout column_span.
   */
  colspan?: number;
  /**
   * Semantic role. Must be defined by the theme/tokens roles.
   */
  role: string;
  /**
   * Optional visual variant name for this role. The allowed variants are defined by the theme.
   */
  variant?: string | null;
  /**
   * Optional whitespace preservation hint. When role is "code_block", engine validation requires this to be true (or omitted).
   */
  preserve_whitespace?: boolean | null;
  /**
   * Optional list group identifier. Required by engine validation when role is "list_item".
   */
  list_id?: string | null;
  /**
   * Optional nesting depth for list items. If omitted, the engine treats it as 0.
   */
  depth?: number | null;
  /**
   * Optional marker style for list items. If omitted, the engine treats it as bullet.
   */
  marker_type?: 'bullet' | 'number' | null;
  content:
    | {
        type: 'text';
        value: string;
      }
    | {
        type: 'code_block';
        value: string | string[];
      }
    | {
        type: 'math';
        /**
         * TeX-subset math source for display formulas.
         */
        value: string;
      }
    | {
        type: 'form_field';
        value: {
          kind: 'text' | 'multiline' | 'checkbox';
          value: string;
          placeholder?: string;
          width?: number;
          height?: number;
          lines?: number;
          max_length?: number;
          required?: boolean;
        };
      }
    | {
        type: 'image';
        value: {
          /**
           * Package path under assets/images/ (field name is src, not path). Supported: PNG, JPEG, WebP, SVG (engine rasterizes SVG). GIF is not supported.
           */
          src: string;
          /**
           * Deterministic image width in fixed-point Pt (1/1000 pt units).
           */
          width: number;
          /**
           * Deterministic image height in fixed-point Pt (1/1000 pt units).
           */
          height: number;
        };
      }
    | {
        type: 'container';
        value: {
          /**
           * Optional. Omitted or empty: no children (dividers, spacers).
           */
          children?: (K2FSemanticNodesSchema1 | IncludeRef)[];
        };
      }
    | {
        type: 'table';
        value: {
          /**
           * @minItems 1
           */
          column_widths: [
            (
              | {
                  pt: number;
                }
              | {
                  /**
                   * Integer weight of leftover space (not CSS 1.2fr).
                   */
                  fr: number;
                }
            ),
            ...(
              | {
                  pt: number;
                }
              | {
                  /**
                   * Integer weight of leftover space (not CSS 1.2fr).
                   */
                  fr: number;
                }
            )[]
          ];
          /**
           * Number of leading header rows to repeat at page breaks. Integer count, not a row of cells.
           */
          header_rows?: number;
          /**
           * Default gap between rows and columns in fixed-point Pt (1/1000 pt units). No colspan/rowspan — every row has exactly column_widths.length cells.
           */
          gap?: number;
          /**
           * Optional row gap override. Falls back to gap when omitted or null.
           */
          row_gap?: number | null;
          /**
           * Optional column gap override. Falls back to gap when omitted or null.
           */
          column_gap?: number | null;
          data:
            | {
                type: 'inline';
                rows: K2FSemanticNodesSchema1[][];
              }
            | {
                type: 'asset';
                source: string;
              };
        };
      }
    | {
        type: 'table_reference';
        value: {
          source: string;
          view_mode: string;
          /**
           * Deterministic table reference width in fixed-point Pt (1/1000 pt units).
           */
          width: number;
          /**
           * Deterministic table reference height in fixed-point Pt (1/1000 pt units).
           */
          height: number;
        };
      };
  /**
   * @maxItems 50
   */
  modifiers?: {
    /**
     * UTF-8 byte offsets [start, end) into the node text (must lie on character boundaries). Not character indices. A newline in the value is 1 byte. CJK/emoji/curly quotes are multi-byte.
     *
     * @minItems 2
     * @maxItems 2
     */
    range: [number, number];
    type:
      'emphasis' | 'link' | 'underline' | 'strikethrough' | 'subscript' | 'superscript' | 'math' | 'syntax_highlight';
    /**
     * Required. Must match a key under theme.modifiers.styles[type] (e.g. emphasis 'strong', underline 'default', link URL).
     */
    intent: string;
  }[];
  /**
   * Optional deterministic layout hint for containers. On content/root.json, omit layout or use vertical stack only — nest grid, overlay, columns, and horizontal stacks under a child.
   */
  layout?:
    | null
    | {
        /**
         * Optional. Omitted layout type is stack (same as omitting layout entirely, plus size/gap).
         */
        type?: 'stack';
        direction?: 'vertical' | 'horizontal';
        /**
         * Fixed-point Pt gap between children (1/1000 pt units).
         */
        gap?: number;
        /**
         * Cross-axis alignment for stack children.
         */
        align_items?: 'start' | 'center' | 'end' | 'stretch';
        /**
         * Main-axis distribution: start, center, or end only. Not Flexbox (no space-between). Left/right split: catalog/content/ex_split_bar.json. Footer pinned to page bottom: catalog/content/ex_poster_shell.json.
         */
        justify_content?: 'start' | 'center' | 'end';
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units).
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units).
         */
        height?: PtNonneg | null;
      }
    | {
        /**
         * Children are stacked visually in source order (first = back, last = front).
         */
        type: 'overlay';
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units).
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units).
         */
        height?: PtNonneg | null;
      }
    | {
        type: 'grid';
        /**
         * Default gap between rows and columns in fixed-point Pt (1/1000 pt units).
         */
        gap?: number;
        /**
         * Optional row gap override. Falls back to gap when omitted or null.
         */
        row_gap?: number | null;
        /**
         * Optional column gap override. Falls back to gap when omitted or null.
         */
        column_gap?: number | null;
        /**
         * Default per-cell alignment for grid children. Null/omitted = stretch/stretch.
         */
        cell_align?: CellAlign | null;
        /**
         * Optional fixed outer width in fixed-point Pt (1/1000 pt units). Enables fr columns when parent width is unbounded.
         */
        width?: PtNonneg | null;
        /**
         * Optional fixed outer height in fixed-point Pt (1/1000 pt units). Enables fr rows when parent height is unbounded.
         */
        height?: PtNonneg | null;
        /**
         * @minItems 1
         */
        columns: [
          (
            | {
                pt: number;
              }
            | {
                /**
                 * Integer weight of leftover space (not CSS 1.2fr).
                 */
                fr: number;
              }
            | {
                auto: true;
              }
          ),
          ...(
            | {
                pt: number;
              }
            | {
                /**
                 * Integer weight of leftover space (not CSS 1.2fr).
                 */
                fr: number;
              }
            | {
                auto: true;
              }
          )[]
        ];
        /**
         * Optional. Omitted: engine fills {auto:true} rows to fit children (ceil(n/columns)). Declared rows are not grown. fr rows still need a finite outer height.
         *
         * @minItems 1
         */
        rows?: [
          (
            | {
                pt: number;
              }
            | {
                /**
                 * Integer weight of leftover space (not CSS 1.2fr).
                 */
                fr: number;
              }
            | {
                auto: true;
              }
          ),
          ...(
            | {
                pt: number;
              }
            | {
                /**
                 * Integer weight of leftover space (not CSS 1.2fr).
                 */
                fr: number;
              }
            | {
                auto: true;
              }
          )[]
        ];
      }
    | {
        /**
         * Continuous multi-column flow. Children pack left-to-right across equal-width columns.
         */
        type: 'columns';
        /**
         * Number of equal-width columns.
         */
        count: number;
        /**
         * Fixed-point Pt gap between columns (1/1000 pt units).
         */
        gap?: number;
      };
}
/**
 * Include a semantic subtree from another package file under content/. Resolved at pack time; not a SemanticNode.
 */
export interface IncludeRef {
  /**
   * Package path to a single SemanticNode JSON file (not content/root.json).
   */
  include: string;
}
/**
 * Per-cell alignment. stretch (default) fills the cell so the child follows the track size; start/center/end keep the child's measured size (logos, short labels).
 */
export interface CellAlign {
  x?: 'start' | 'center' | 'end' | 'stretch';
  y?: 'start' | 'center' | 'end' | 'stretch';
}
/**
 * Per-cell alignment. stretch (default) fills the cell so the child follows the track size; start/center/end keep the child's measured size (logos, short labels).
 */
export interface CellAlign1 {
  x?: Align;
  y?: Align;
}
