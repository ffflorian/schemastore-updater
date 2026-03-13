/* eslint-disable */

export interface JSONSchemaForVisualStudioComponentConfigurationFiles {
  /**
   * The version of the component configuration file format.
   */
  version?: string;
  /**
   * An array of Visual Studio component names.
   */
  components: string[];
  /**
   * An array of Visual Studio extensions. These can be URLs to marketplace extensions or paths to private VSIX files.
   */
  extensions?: string[];
  [k: string]: unknown | undefined;
}
