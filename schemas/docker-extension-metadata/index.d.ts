/* eslint-disable */

/**
 * The path to the binary in the extension's image.
 */
export type StringPathToTheBinaryOnTheImage = string;
export type ConfigurationSchemaForBinariesThatWillBeCopiedByDockerDesktopFromTheImageOntoTheHostMachine = {
  path?: StringPathToTheBinaryOnTheImage;
  [k: string]: unknown | undefined;
}[];

/**
 * Docker Desktop extension.
 */
export interface MetadataConfigurationSchemaForDockerDesktopExtensions {
  /**
   * The icon for the extension. Will be displayed on the sidebar, in the extension list and on Docker Hub.
   */
  icon?: string;
  /**
   * UI configuration for your extension.
   */
  ui?: {
    /**
     * Dashboard tab UI configuration.
     */
    'dashboard-tab'?: {
      /**
       * The name of your extension, that will be displayed in the dashboard.
       */
      title: string;
      /**
       * The root folder (in your extension's image) where your UI code is stored.
       */
      root?: string;
      /**
       * The HTML entrypoint for the extension tab.
       */
      src: string;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * Backend configuration for your extension.
   */
  vm?: {
    /**
     * The image to use for your extension. A default compose file will be generated for your extension. If you want to use the same image that packages your extension, use ${DESKTOP_PLUGIN_IMAGE}.
     */
    image?: string;
    /**
     * A path to your Docker compose file for your backend container.
     */
    composefile?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Host configuration for your extension.
   */
  host?: {
    /**
     * An array of binaries that Docker Desktop will copy from the extension image onto the host machine. These binaries can be invoked by your extension using the JavaScript API in your frontend. Docker Desktop automatically handles transfer of binaries for you. For more information, see https://docs.docker.com/extensions/extensions-sdk/guides/invoke-host-binaries/
     */
    binaries?: {
      darwin?: ConfigurationSchemaForBinariesThatWillBeCopiedByDockerDesktopFromTheImageOntoTheHostMachine & {
        [k: string]: unknown | undefined;
      };
      windows?: ConfigurationSchemaForBinariesThatWillBeCopiedByDockerDesktopFromTheImageOntoTheHostMachine & {
        [k: string]: unknown | undefined;
      };
      linux?: ConfigurationSchemaForBinariesThatWillBeCopiedByDockerDesktopFromTheImageOntoTheHostMachine & {
        [k: string]: unknown | undefined;
      };
      [k: string]: unknown | undefined;
    }[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
