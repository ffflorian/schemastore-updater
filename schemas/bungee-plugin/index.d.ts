/* eslint-disable */

export type PluginName = string;

export interface JSONSchemaForBungeeCordPluginYAML {
  /**
   * The name of the plugin.
   */
  name: string;
  /**
   * Plugin main class.
   */
  main: string;
  /**
   * Plugin version.
   */
  version?: string;
  /**
   * Plugin author.
   */
  author?: string;
  /**
   * Plugin hard dependencies.
   */
  depends?: PluginName[];
  /**
   * Plugin soft dependencies.
   */
  softDepends?: PluginName[];
  /**
   * Optional description.
   */
  description?: string;
  [k: string]: unknown | undefined;
}
