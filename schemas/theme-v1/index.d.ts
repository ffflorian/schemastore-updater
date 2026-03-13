/* eslint-disable */

export type SettingsPropertiesComplete = SettingsProperties & {
  border?: unknown;
  color?: unknown;
  layout?: unknown;
  spacing?: unknown;
  typography?: unknown;
  custom?: unknown;
};
export type StylesPropertiesComplete = StylesProperties & {
  border?: unknown;
  color?: unknown;
  spacing?: unknown;
  typography?: unknown;
};
export type StylesPropertiesAndElementsComplete = StylesProperties & {
  border?: unknown;
  color?: unknown;
  spacing?: unknown;
  typography?: unknown;
  elements?: StylesElementsPropertiesComplete1;
};

export interface JSONSchemaForWordPressBlockThemeGlobalSettingsAndStyles {
  /**
   * JSON schema URI for theme.json.
   */
  $schema?: string;
  /**
   * Version of theme.json to use.
   * Since 5.8.
   */
  version: 1;
  /**
   * Settings for the block editor and individual blocks. These include things like:
   * - Which customization options should be available to the user.
   * - The default colors, font sizes... available to the user.
   * - CSS custom properties and class names used in styles.
   * - And the default layout of the editor (widths and available alignments).
   * Since 5.8.
   */
  settings?: SettingsProperties & {
    color?: unknown;
    layout?: unknown;
    spacing?: unknown;
    typography?: unknown;
    border?: unknown;
    custom?: unknown;
    blocks?: SettingsBlocksPropertiesComplete;
  };
  /**
   * Organized way to set CSS properties. Styles in the top-level will be added in the `body` selector.
   * Since 5.8.
   */
  styles?: StylesProperties & {
    border?: unknown;
    color?: unknown;
    spacing?: unknown;
    typography?: unknown;
    elements?: StylesElementsPropertiesComplete;
    blocks?: StylesBlocksPropertiesComplete;
  };
  /**
   * Additional metadata for custom templates defined in the block-templates folder.
   * Gutenberg plugin required.
   */
  customTemplates?: {
    /**
     * Filename, without extension, of the template in the block-templates folder.
     * Gutenberg plugin required.
     */
    name: string;
    /**
     * Title of the template, translatable.
     * Gutenberg plugin required.
     */
    title: string;
    /**
     * List of post types that can use this custom template.
     * Gutenberg plugin required.
     */
    postTypes?: string[];
  }[];
  /**
   * Additional metadata for template parts defined in the block-template-parts folder.
   * Gutenberg plugin required.
   */
  templateParts?: {
    /**
     * Filename, without extension, of the template in the block-template-parts folder.
     * Gutenberg plugin required.
     */
    name: string;
    /**
     * Title of the template, translatable.
     * Gutenberg plugin required.
     */
    title?: string;
    /**
     * The area the template part is used for. Block variations for `header` and `footer` values exist and will be used when the area is set to one of those.
     * Gutenberg plugin required.
     */
    area?: string;
  }[];
}
export interface SettingsProperties {
  /**
   * Settings related to borders.
   * Gutenberg plugin required.
   */
  border?: {
    /**
     * Allow users to set custom border colors.
     * Gutenberg plugin required.
     */
    customColor?: boolean;
    /**
     * Allow users to set custom border radius.
     * Gutenberg plugin required.
     */
    customRadius?: boolean;
    /**
     * Allow users to set custom border styles.
     * Gutenberg plugin required.
     */
    customStyle?: boolean;
    /**
     * Allow users to set custom border widths.
     * Gutenberg plugin required.
     */
    customWidth?: boolean;
  };
  /**
   * Settings related to colors.
   * Since 5.8.
   */
  color?: {
    /**
     * Allow users to set background colors.
     * Gutenberg plugin required.
     */
    background?: boolean;
    /**
     * Allow users to select custom colors.
     * Since 5.8.
     */
    custom?: boolean;
    /**
     * Allow users to create custom duotone filters.
     * Since 5.8.
     */
    customDuotone?: boolean;
    /**
     * Allow users to create custom gradients.
     * Since 5.8.
     */
    customGradient?: boolean;
    /**
     * Duotone presets for the duotone picker.
     * Doesn't generate classes or properties.
     * Since 5.8.
     */
    duotone?: {
      /**
       * Name of the duotone preset, translatable.
       * Since 5.8.
       */
      name: string;
      /**
       * Kebab-case unique identifier for the duotone preset.
       * Since 5.8.
       */
      slug: string;
      /**
       * List of colors from dark to light.
       * Since 5.8.
       */
      colors: string[];
    }[];
    /**
     * Gradient presets for the gradient picker.
     * Generates a single class (`.has-{slug}-background`) and custom property (`--wp--preset--gradient--{slug}`) per preset value.
     * Since 5.8.
     */
    gradients?: {
      /**
       * Name of the gradient preset, translatable.
       * Since 5.8.
       */
      name: string;
      /**
       * Kebab-case unique identifier for the gradient preset.
       * Since 5.8.
       */
      slug: string;
      /**
       * CSS gradient string.
       * Since 5.8.
       */
      gradient: string;
    }[];
    /**
     * Allow users to set link colors.
     * Since 5.8.
     */
    link?: boolean;
    /**
     * Color palette presets for the color picker.
     * Generates three classes (`.has-{slug}-color`, `.has-{slug}-background-color`, and `.has-{slug}-border-color`) and a single custom property (`--wp--preset--color--{slug}`) per preset value.
     * Since 5.8.
     */
    palette?: {
      /**
       * Name of the color preset, translatable.
       * Since 5.8.
       */
      name: string;
      /**
       * Kebab-case unique identifier for the color preset.
       * Since 5.8.
       */
      slug: string;
      /**
       * CSS hex or rgb(a) string.
       * Since 5.8.
       */
      color: string;
    }[];
    /**
     * Allow users to set text colors.
     * Gutenberg plugin required.
     */
    text?: boolean;
  };
  /**
   * Settings related to layout.
   * Since 5.8.
   */
  layout?: {
    /**
     * Sets the max-width of the content.
     * Since 5.8.
     */
    contentSize?: string;
    /**
     * Sets the max-width of wide (`.alignwide`) content.
     * Since 5.8.
     */
    wideSize?: string;
  };
  /**
   * Settings related to spacing.
   * Since 5.8.
   */
  spacing?: {
    /**
     * Enables `--wp--style--block-gap` to be generated from styles.spacing.blockGap.
     * A value of `null` instead of `false` further disables layout styles from being generated.
     * Gutenberg plugin required.
     */
    blockGap?: boolean | null;
    /**
     * Allow users to set a custom margin.
     * Since 5.8.
     */
    customMargin?: boolean;
    /**
     * Allow users to set a custom padding.
     * Since 5.8.
     */
    customPadding?: boolean;
    /**
     * List of units the user can use for spacing values.
     * Since 5.8.
     */
    units?: string[];
  };
  /**
   * Settings related to typography.
   * Since 5.8.
   */
  typography?: {
    /**
     * Allow users to set custom font sizes.
     * Since 5.8.
     */
    customFontSize?: boolean;
    /**
     * Allow users to set custom font styles.
     * Gutenberg plugin required.
     */
    customFontStyle?: boolean;
    /**
     * Allow users to set custom font weights.
     * Gutenberg plugin required.
     */
    customFontWeight?: boolean;
    /**
     * Allow users to set custom letter spacing.
     * Gutenberg plugin required.
     */
    customLetterSpacing?: boolean;
    /**
     * Allow users to set custom line height.
     * Since 5.8.
     */
    customLineHeight?: boolean;
    /**
     * Allow users to set custom text decorations.
     * Gutenberg plugin required.
     */
    customTextDecorations?: boolean;
    /**
     * Allow users to set custom text transforms.
     * Gutenberg plugin required.
     */
    customTextTransforms?: boolean;
    /**
     * Enable drop cap.
     * Since 5.8.
     */
    dropCap?: boolean;
    /**
     * Font size presets for the font size selector.
     * Generates a single class (`.has-{slug}-color`) and custom property (`--wp--preset--font-size--{slug}`) per preset value.
     * Since 5.8.
     */
    fontSizes?: {
      /**
       * Name of the font size preset, translatable.
       * Since 5.8.
       */
      name?: string;
      /**
       * Kebab-case unique identifier for the font size preset.
       * Since 5.8.
       */
      slug?: string;
      /**
       * CSS font-size value, including units.
       * Since 5.8.
       */
      size?: string;
    }[];
    /**
     * Font family presets for the font family selector.
     * Generates a single custom property (`--wp--preset--font-family--{slug}`) per preset value.
     * Gutenberg plugin required.
     */
    fontFamilies?: {
      /**
       * Name of the font family preset, translatable.
       * Since 5.8.
       */
      name?: string;
      /**
       * Kebab-case unique identifier for the font family preset.
       * Since 5.8.
       */
      slug?: string;
      /**
       * CSS font-family value.
       * Since 5.8.
       */
      fontFamily?: string;
    }[];
  };
  custom?: SettingsCustomAdditionalProperties;
  [k: string]: unknown | undefined;
}
/**
 * Generate custom CSS custom properties of the form `--wp--custom--{key}--{nested-key}: {value};`. `camelCased` keys are transformed to `kebab-case` as to follow the CSS property naming schema. Keys at different depth levels are separated by `--`, so keys should not include `--` in the name.
 * Since 5.8.
 */
export interface SettingsCustomAdditionalProperties {
  [k: string]: (string | number | SettingsCustomAdditionalProperties1) | undefined;
}
export interface SettingsCustomAdditionalProperties1 {
  [k: string]: (string | number | SettingsCustomAdditionalProperties1) | undefined;
}
/**
 * Settings defined on a per-block basis.
 * Since 5.8.
 */
export interface SettingsBlocksPropertiesComplete {
  'core/archives'?: SettingsPropertiesComplete;
  'core/audio'?: SettingsPropertiesComplete;
  'core/block'?: SettingsPropertiesComplete;
  'core/button'?: SettingsPropertiesComplete;
  'core/buttons'?: SettingsPropertiesComplete;
  'core/calendar'?: SettingsPropertiesComplete;
  'core/categories'?: SettingsPropertiesComplete;
  'core/code'?: SettingsPropertiesComplete;
  'core/column'?: SettingsPropertiesComplete;
  'core/columns'?: SettingsPropertiesComplete;
  'core/cover'?: SettingsPropertiesComplete;
  'core/embed'?: SettingsPropertiesComplete;
  'core/file'?: SettingsPropertiesComplete;
  'core/freeform'?: SettingsPropertiesComplete;
  'core/gallery'?: SettingsPropertiesComplete;
  'core/group'?: SettingsPropertiesComplete;
  'core/heading'?: SettingsPropertiesComplete;
  'core/home-link'?: SettingsPropertiesComplete;
  'core/html'?: SettingsPropertiesComplete;
  'core/image'?: SettingsPropertiesComplete;
  'core/latest-comments'?: SettingsPropertiesComplete;
  'core/latest-posts'?: SettingsPropertiesComplete;
  'core/list'?: SettingsPropertiesComplete;
  'core/loginout'?: SettingsPropertiesComplete;
  'core/media-text'?: SettingsPropertiesComplete;
  'core/missing'?: SettingsPropertiesComplete;
  'core/more'?: SettingsPropertiesComplete;
  'core/navigation'?: SettingsPropertiesComplete;
  'core/navigation-link'?: SettingsPropertiesComplete;
  'core/nextpage'?: SettingsPropertiesComplete;
  'core/page-list'?: SettingsPropertiesComplete;
  'core/paragraph'?: SettingsPropertiesComplete;
  'core/post-author'?: SettingsPropertiesComplete;
  'core/post-comment'?: SettingsPropertiesComplete;
  'core/post-comment-author'?: SettingsPropertiesComplete;
  'core/post-comment-content'?: SettingsPropertiesComplete;
  'core/post-comment-date'?: SettingsPropertiesComplete;
  'core/post-comments'?: SettingsPropertiesComplete;
  'core/post-comments-count'?: SettingsPropertiesComplete;
  'core/post-comments-form'?: SettingsPropertiesComplete;
  'core/post-comments-link'?: SettingsPropertiesComplete;
  'core/post-content'?: SettingsPropertiesComplete;
  'core/post-date'?: SettingsPropertiesComplete;
  'core/post-excerpt'?: SettingsPropertiesComplete;
  'core/post-featured-image'?: SettingsPropertiesComplete;
  'core/post-navigation-link'?: SettingsPropertiesComplete;
  'core/post-template'?: SettingsPropertiesComplete;
  'core/post-terms'?: SettingsPropertiesComplete;
  'core/post-title'?: SettingsPropertiesComplete;
  'core/preformatted'?: SettingsPropertiesComplete;
  'core/pullquote'?: SettingsPropertiesComplete;
  'core/query'?: SettingsPropertiesComplete;
  'core/query-pagination'?: SettingsPropertiesComplete;
  'core/query-pagination-next'?: SettingsPropertiesComplete;
  'core/query-pagination-numbers'?: SettingsPropertiesComplete;
  'core/query-pagination-previous'?: SettingsPropertiesComplete;
  'core/query-title'?: SettingsPropertiesComplete;
  'core/quote'?: SettingsPropertiesComplete;
  'core/rss'?: SettingsPropertiesComplete;
  'core/search'?: SettingsPropertiesComplete;
  'core/separator'?: SettingsPropertiesComplete;
  'core/shortcode'?: SettingsPropertiesComplete;
  'core/site-logo'?: SettingsPropertiesComplete;
  'core/site-tagline'?: SettingsPropertiesComplete;
  'core/site-title'?: SettingsPropertiesComplete;
  'core/social-link'?: SettingsPropertiesComplete;
  'core/social-links'?: SettingsPropertiesComplete;
  'core/spacer'?: SettingsPropertiesComplete;
  'core/table'?: SettingsPropertiesComplete;
  'core/table-of-contents'?: SettingsPropertiesComplete;
  'core/tag-cloud'?: SettingsPropertiesComplete;
  'core/template-part'?: SettingsPropertiesComplete;
  'core/term-description'?: SettingsPropertiesComplete;
  'core/text-columns'?: SettingsPropertiesComplete;
  'core/verse'?: SettingsPropertiesComplete;
  'core/video'?: SettingsPropertiesComplete;
  'core/widget-area'?: SettingsPropertiesComplete;
  'core/legacy-widget'?: SettingsPropertiesComplete;
  'core/widget-group'?: SettingsPropertiesComplete;
}
export interface StylesProperties {
  /**
   * Border styles.
   * Gutenberg plugin required.
   */
  border?: {
    /**
     * Sets the `border-color` CSS property.
     * Gutenberg plugin required.
     */
    color?: string;
    /**
     * Sets the `border-radius` CSS property.
     * Gutenberg plugin required.
     */
    radius?: string;
    /**
     * Sets the `border-style` CSS property.
     * Gutenberg plugin required.
     */
    style?: string;
    /**
     * Sets the `border-width` CSS property.
     * Gutenberg plugin required.
     */
    width?: string;
  };
  /**
   * Color styles.
   * Since 5.8.
   */
  color?: {
    /**
     * Sets the `background-color` CSS property.
     * Since 5.8.
     */
    background?: string;
    /**
     * Sets the `background` CSS property.
     * Since 5.8.
     */
    gradient?: string;
    /**
     * Sets the `color` CSS property.
     * Since 5.8.
     */
    text?: string;
  };
  /**
   * Spacing styles.
   * Since 5.8.
   */
  spacing?: {
    /**
     * Sets the `--wp--style--block-gap` CSS custom property when settings.spacing.blockGap is true.
     */
    blockGap?: string;
    /**
     * Margin styles.
     * Since 5.8.
     */
    margin?: {
      /**
       * Sets the `margin-top` CSS property.
       * Since 5.8.
       */
      top?: string;
      /**
       * Sets the `margin-right` CSS property.
       * Since 5.8.
       */
      right?: string;
      /**
       * Sets the `margin-bottom` CSS property.
       * Since 5.8.
       */
      bottom?: string;
      /**
       * Sets the `margin-left` CSS property.
       * Since 5.8.
       */
      left?: string;
    };
    /**
     * Padding styles.
     * Since 5.8.
     */
    padding?: {
      /**
       * Sets the `padding-top` CSS property.
       * Since 5.8.
       */
      top?: string;
      /**
       * Sets the `padding-right` CSS property.
       * Since 5.8.
       */
      right?: string;
      /**
       * Sets the `padding-bottom` CSS property.
       * Since 5.8.
       */
      bottom?: string;
      /**
       * Sets the `padding-left` CSS property.
       * Since 5.8.
       */
      left?: string;
    };
  };
  /**
   * Typography styles.
   * Since 5.8.
   */
  typography?: {
    /**
     * Sets the `font-family` CSS property.
     * Gutenberg plugin required.
     */
    fontFamily?: string;
    /**
     * Sets the `font-size` CSS property.
     * Since 5.8.
     */
    fontSize?: string;
    /**
     * Sets the `font-style` CSS property.
     * Gutenberg plugin required.
     */
    fontStyle?: string;
    /**
     * Sets the `font-weight` CSS property.
     * Gutenberg plugin required.
     */
    fontWeight?: string;
    /**
     * Sets the `letter-spacing` CSS property.
     * Gutenberg plugin required.
     */
    letterSpacing?: string;
    /**
     * Sets the `line-height` CSS property.
     * Since 5.8.
     */
    lineHeight?: string;
    /**
     * Sets the `text-decoration` CSS property.
     * Gutenberg plugin required.
     */
    textDecoration?: string;
    /**
     * Sets the `text-transform` CSS property.
     * Gutenberg plugin required.
     */
    textTransform?: string;
  };
  [k: string]: unknown | undefined;
}
/**
 * Styles defined on a per-element basis using the element's selector.
 * Since 5.8.
 */
export interface StylesElementsPropertiesComplete {
  link?: StylesPropertiesComplete;
  h1?: StylesPropertiesComplete;
  h2?: StylesPropertiesComplete;
  h3?: StylesPropertiesComplete;
  h4?: StylesPropertiesComplete;
  h5?: StylesPropertiesComplete;
  h6?: StylesPropertiesComplete;
}
/**
 * Styles defined on a per-block basis using the block's selector.
 * Since 5.8.
 */
export interface StylesBlocksPropertiesComplete {
  'core/archives'?: StylesPropertiesAndElementsComplete;
  'core/audio'?: StylesPropertiesAndElementsComplete;
  'core/block'?: StylesPropertiesAndElementsComplete;
  'core/button'?: StylesPropertiesAndElementsComplete;
  'core/buttons'?: StylesPropertiesAndElementsComplete;
  'core/calendar'?: StylesPropertiesAndElementsComplete;
  'core/categories'?: StylesPropertiesAndElementsComplete;
  'core/code'?: StylesPropertiesAndElementsComplete;
  'core/column'?: StylesPropertiesAndElementsComplete;
  'core/columns'?: StylesPropertiesAndElementsComplete;
  'core/cover'?: StylesPropertiesAndElementsComplete;
  'core/embed'?: StylesPropertiesAndElementsComplete;
  'core/file'?: StylesPropertiesAndElementsComplete;
  'core/freeform'?: StylesPropertiesAndElementsComplete;
  'core/gallery'?: StylesPropertiesAndElementsComplete;
  'core/group'?: StylesPropertiesAndElementsComplete;
  'core/heading'?: StylesPropertiesAndElementsComplete;
  'core/home-link'?: StylesPropertiesAndElementsComplete;
  'core/html'?: StylesPropertiesAndElementsComplete;
  'core/image'?: StylesPropertiesAndElementsComplete;
  'core/latest-comments'?: StylesPropertiesAndElementsComplete;
  'core/latest-posts'?: StylesPropertiesAndElementsComplete;
  'core/list'?: StylesPropertiesAndElementsComplete;
  'core/loginout'?: StylesPropertiesAndElementsComplete;
  'core/media-text'?: StylesPropertiesAndElementsComplete;
  'core/missing'?: StylesPropertiesAndElementsComplete;
  'core/more'?: StylesPropertiesAndElementsComplete;
  'core/navigation'?: StylesPropertiesAndElementsComplete;
  'core/navigation-link'?: StylesPropertiesAndElementsComplete;
  'core/nextpage'?: StylesPropertiesAndElementsComplete;
  'core/page-list'?: StylesPropertiesAndElementsComplete;
  'core/paragraph'?: StylesPropertiesAndElementsComplete;
  'core/post-author'?: StylesPropertiesAndElementsComplete;
  'core/post-comment'?: StylesPropertiesAndElementsComplete;
  'core/post-comment-author'?: StylesPropertiesAndElementsComplete;
  'core/post-comment-content'?: StylesPropertiesAndElementsComplete;
  'core/post-comment-date'?: StylesPropertiesAndElementsComplete;
  'core/post-comments'?: StylesPropertiesAndElementsComplete;
  'core/post-comments-count'?: StylesPropertiesAndElementsComplete;
  'core/post-comments-form'?: StylesPropertiesAndElementsComplete;
  'core/post-comments-link'?: StylesPropertiesAndElementsComplete;
  'core/post-content'?: StylesPropertiesAndElementsComplete;
  'core/post-date'?: StylesPropertiesAndElementsComplete;
  'core/post-excerpt'?: StylesPropertiesAndElementsComplete;
  'core/post-featured-image'?: StylesPropertiesAndElementsComplete;
  'core/post-navigation-link'?: StylesPropertiesAndElementsComplete;
  'core/post-template'?: StylesPropertiesAndElementsComplete;
  'core/post-terms'?: StylesPropertiesAndElementsComplete;
  'core/post-title'?: StylesPropertiesAndElementsComplete;
  'core/preformatted'?: StylesPropertiesAndElementsComplete;
  'core/pullquote'?: StylesPropertiesAndElementsComplete;
  'core/query'?: StylesPropertiesAndElementsComplete;
  'core/query-pagination'?: StylesPropertiesAndElementsComplete;
  'core/query-pagination-next'?: StylesPropertiesAndElementsComplete;
  'core/query-pagination-numbers'?: StylesPropertiesAndElementsComplete;
  'core/query-pagination-previous'?: StylesPropertiesAndElementsComplete;
  'core/query-title'?: StylesPropertiesAndElementsComplete;
  'core/quote'?: StylesPropertiesAndElementsComplete;
  'core/rss'?: StylesPropertiesAndElementsComplete;
  'core/search'?: StylesPropertiesAndElementsComplete;
  'core/separator'?: StylesPropertiesAndElementsComplete;
  'core/shortcode'?: StylesPropertiesAndElementsComplete;
  'core/site-logo'?: StylesPropertiesAndElementsComplete;
  'core/site-tagline'?: StylesPropertiesAndElementsComplete;
  'core/site-title'?: StylesPropertiesAndElementsComplete;
  'core/social-link'?: StylesPropertiesAndElementsComplete;
  'core/social-links'?: StylesPropertiesAndElementsComplete;
  'core/spacer'?: StylesPropertiesAndElementsComplete;
  'core/table'?: StylesPropertiesAndElementsComplete;
  'core/table-of-contents'?: StylesPropertiesAndElementsComplete;
  'core/tag-cloud'?: StylesPropertiesAndElementsComplete;
  'core/template-part'?: StylesPropertiesAndElementsComplete;
  'core/term-description'?: StylesPropertiesAndElementsComplete;
  'core/text-columns'?: StylesPropertiesAndElementsComplete;
  'core/verse'?: StylesPropertiesAndElementsComplete;
  'core/video'?: StylesPropertiesAndElementsComplete;
  'core/widget-area'?: StylesPropertiesAndElementsComplete;
  'core/legacy-widget'?: StylesPropertiesAndElementsComplete;
  'core/widget-group'?: StylesPropertiesAndElementsComplete;
}
export interface StylesElementsPropertiesComplete1 {
  link?: StylesPropertiesComplete;
  h1?: StylesPropertiesComplete;
  h2?: StylesPropertiesComplete;
  h3?: StylesPropertiesComplete;
  h4?: StylesPropertiesComplete;
  h5?: StylesPropertiesComplete;
  h6?: StylesPropertiesComplete;
}
