/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface ACSSCombConfigSchema {
  /**
   * A list of files to ignore in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  exclude?: string[];
  verbose?: boolean;
  /**
   * Whether to add missing semicolon in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "always-semicolon"?: boolean;
  /**
   * A block indent style in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "block-indent"?: string;
  /**
   * A hexadecimal color style in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "color-case"?: "lower" | "upper";
  /**
   * Whether to expand hexadecimal color or use shorthand in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "color-shorthand"?: boolean;
  /**
   * Whether to unify case of element selector in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "element-case"?: "lower" | "upper";
  /**
   * Whether to add a trailing line break in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "eof-newline"?: boolean;
  /**
   * Whether to add leading zero in a dimension in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "leading-zero"?: boolean;
  /**
   * A quote style in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  quotes?: "single" | "double";
  /**
   * Whether to remove empty rulesets
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "remove-empty-rulesets"?: boolean;
  /**
   * A space style after a colon in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-after-colon"?: string;
  /**
   * A space style after a combinator in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-after-combinator"?: string;
  /**
   * A space style after an opening brace in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-after-opening-brace"?: string;
  /**
   * A space style after a selector delimiter in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-after-selector-delimiter"?: string;
  /**
   * A space style after a closing brace in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-after-closing-brace"?: string;
  /**
   * A space style before a colon in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-before-colon"?: string;
  /**
   * A space style before a combinator in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-before-combinator"?: string;
  /**
   * A space style before an opening brace in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-before-opening-brace"?: string;
  /**
   * A space style before a selector delimiter in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-before-selector-delimiter"?: string;
  /**
   * A space style between declarations in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "space-between-declarations"?: string;
  /**
   * Whether to trim trailing space in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "strip-spaces"?: boolean;
  /**
   * Whether to remove unit in zero-valued dimension in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "unitless-zero"?: boolean;
  /**
   * Whether to align prefix in property and value in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "vendor-prefix-align"?: boolean;
  /**
   * A sort order in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "sort-order"?: string[][];
  "tab-size"?: boolean;
  /**
   * A sort style of unknown properties in the current project
   * https://github.com/csscomb/csscomb.js/blob/dev/doc/configuration.md#create-custom-config
   */
  "sort-order-fallback"?: string;
  [k: string]: unknown | undefined;
}
