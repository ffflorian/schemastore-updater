/* eslint-disable */

/**
 * Rich text editor preset in Configuration/RTE/<Name>.yaml.
 */
export type TYPO3CKEditorPreset = {
  /**
   * Other YAML files to include.
   */
  imports?: {
    /**
     * Absolute, relative or "EXT:" path of the file.
     */
    resource: string;
    /**
     * Treats resource as a pattern like "*.yaml".
     */
    glob?: boolean;
  }[];
  /**
   * Configuration of the editor.
   */
  editor?: {
    /**
     * Configuration for CKEditor 5, see https://ckeditor.com/docs/ckeditor5/latest/features/index.html.
     */
    config?: {
      /**
       * Toolbar of the editor.
       */
      toolbar?: {
        /**
         * Toolbar buttons, "|" adds a separator.
         */
        items?: ToolbarItem[];
        /**
         * Wraps the toolbar if it is too small.
         */
        shouldNotGroupWhenFull?: boolean;
        [k: string]: unknown | undefined;
      };
      /**
       * Additional plugins.
       */
      importModules?: (
        | string
        | {
            /**
             * JavaScript module, for example "@my-vendor/my-extension/my-plugin.js".
             */
            module: string;
            /**
             * Plugins exported by the module.
             */
            exports?: string[];
          }
      )[];
      /**
       * Plugins to remove.
       */
      removeImportModules?: (
        | string
        | {
            /**
             * JavaScript module, for example "@my-vendor/my-extension/my-plugin.js".
             */
            module: string;
            /**
             * Plugins exported by the module.
             */
            exports?: string[];
          }
      )[];
      /**
       * Stylesheets inside the editor, for example "EXT:my_extension/Resources/Public/Css/rte.css".
       */
      contentsCss?: string[] | string;
      /**
       * Width of the editor, for example "auto" or 600.
       */
      width?: string | number;
      /**
       * Height of the editor, for example 300.
       */
      height?: string | number;
      /**
       * Makes the content read-only.
       */
      readOnly?: boolean;
      /**
       * Loads the CKEditor 5 inspector.
       */
      debug?: boolean;
      [k: string]: unknown | undefined;
    };
    /**
     * Options of TYPO3 plugins, keyed by plugin name.
     */
    externalPlugins?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Transformations between editor and database.
   */
  processing?: {
    /**
     * Transformations to apply.
     */
    mode?: string;
    /**
     * Comma separated transformations, replaces mode.
     */
    overruleMode?: string;
    /**
     * Tags kept when saving.
     */
    allowTags?: string[] | string;
    /**
     * Tags allowed outside of paragraphs.
     */
    allowTagsOutside?: string[] | string;
    /**
     * Attributes kept on block elements.
     */
    allowAttributes?: string[] | string;
    /**
     * HTML parser options applied when saving.
     */
    HTMLparser_db?: {
      [k: string]: unknown | undefined;
    };
    /**
     * HTML parser options applied when loading.
     */
    HTMLparser_rte?: {
      [k: string]: unknown | undefined;
    };
    /**
     * HTML parser options applied before the transformations when saving.
     */
    entryHTMLparser_db?: {
      [k: string]: unknown | undefined;
    };
    /**
     * HTML parser options applied after the transformations when saving.
     */
    exitHTMLparser_db?: {
      [k: string]: unknown | undefined;
    };
    /**
     * HTML parser options applied before the transformations when loading.
     */
    entryHTMLparser_rte?: {
      [k: string]: unknown | undefined;
    };
    /**
     * HTML parser options applied after the transformations when loading.
     */
    exitHTMLparser_rte?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Options of TYPO3 buttons, for example the link browser.
   */
  buttons?: {
    [k: string]: unknown | undefined;
  };
  /**
   * CSS classes for the link browser, keyed by class name.
   */
  classes?: {
    [k: string]: unknown | undefined;
  };
  /**
   * CSS classes for links, by link type.
   */
  classesAnchor?: {
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
} | null;
export type ToolbarItem =
  | string
  | {
      /**
       * Label of the dropdown.
       */
      label: string;
      /**
       * Icon name like "threeVerticalDots", or SVG markup.
       */
      icon?: string | false;
      /**
       * Toolbar buttons in the dropdown.
       */
      items: ToolbarItem[];
      /**
       * Tooltip of the dropdown button.
       */
      tooltip?: string | boolean;
      /**
       * Shows the label next to the icon.
       */
      withText?: boolean;
      [k: string]: unknown | undefined;
    };
