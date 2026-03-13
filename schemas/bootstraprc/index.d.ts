/* eslint-disable */

export type JSONSchemaForWebpackSBootstrapLoaderConfigurationFile = CoreProperties &
  (
    | {
        /**
         * Sets the extractStyles property based on the value of NODE_ENV
         */
        env?: {
          development?: ExtractStyling;
          production?: ExtractStyling;
          [k: string]: unknown | undefined;
        };
        [k: string]: unknown | undefined;
      }
    | {
        /**
         * Enables/disables extraction of styles to a standalone CSS file using extract-text-webpack-plugin
         */
        extractStyles?: boolean;
        [k: string]: unknown | undefined;
      }
  ) & {
    [k: string]: unknown | undefined;
  };

export interface CoreProperties {
  /**
   * Import your custom styles here. Usually this endpoint file contains a list of @imports of your application styles.
   */
  appStyles?: string;
  /**
   * The .scss file path to be loaded after Bootstrap's _variables.scss file
   */
  bootstrapCustomizations?: string;
  /**
   * The major version of Bootstrap being used
   */
  bootstrapVersion?: 3 | 4;
  /**
   * The verbosity of logging. Exclude this property to disable.
   */
  loglevel?: 'debug';
  /**
   * The .scss file path to be loaded before Bootstrap's _variables.scss file
   */
  preBootstrapCustomizations?: string;
  /**
   * Excludes/includes Bootstrap's JavaScript modules
   */
  scripts?:
    | boolean
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * An array of Webpack loader names. Order matters, and sass-loader is required.
   *
   * @minItems 1
   */
  styleLoaders?: [string, ...string[]];
  /**
   * Excludes/includes Bootstrap's CSS modules
   */
  styles?:
    | boolean
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Set to true if using a custom icon font and you need to specify its path in your Sass files
   */
  useCustomIconFontPath?: boolean;
  /**
   * Enables/disables the flexbox model available in Bootstrap 4
   */
  useFlexbox?: boolean;
  [k: string]: unknown | undefined;
}
export interface ExtractStyling {
  /**
   * Enables/disables extraction of styles to a standalone CSS file using extract-text-webpack-plugin
   */
  extractStyles?: boolean;
  [k: string]: unknown | undefined;
}
