/* eslint-disable */

export type ProjectRuntimeInfo =
  | Name
  | {
      name?: Name;
      options?: Options;
    };
export type Name = string;
export type SimpleConfigType = 'string' | 'integer' | 'boolean' | 'array';
/**
 * ProjectTemplate is a Pulumi project template manifest.
 */
export type ProjectTemplate = {
  /**
   * Description of the template.
   */
  description?: string | null;
  /**
   * Quickstart contains optional text to be displayed after template creation.
   */
  quickstart?: string | null;
  /**
   * Important indicates the template is important and should be listed by default.
   */
  important?: boolean | null;
  /**
   * Config to apply to each stack in the project.
   */
  config?: {
    [k: string]:
      | {
          /**
           * Description of the config.
           */
          description?: string | null;
          /**
           * Default value of the config.
           */
          default?: {
            [k: string]: unknown | undefined;
          };
          /**
           * Boolean indicating if the configuration is labeled as a secret.
           */
          secret?: boolean | null;
          [k: string]: unknown | undefined;
        }
      | undefined;
  } | null;
} | null;

/**
 * A schema for Pulumi project files.
 */
export interface PulumiProject {
  /**
   * Name of the project containing alphanumeric characters, hyphens, underscores, and periods.
   */
  name: string;
  /**
   * Description of the project.
   */
  description?: string | null;
  /**
   * Author is an optional author that created this project.
   */
  author?: string | null;
  /**
   * Website is an optional website for additional info about this project.
   */
  website?: string | null;
  /**
   * License is the optional license governing this project's usage.
   */
  license?: string | null;
  runtime: ProjectRuntimeInfo;
  /**
   * Path to the Pulumi program. The default is the working directory.
   */
  main?: string | null;
  /**
   * A map of configuration keys to their types. Using config directory location relative to the location of Pulumi.yaml is a deprecated use of this key. Use stackConfigDir instead.
   */
  config?: {
    /**
     * If true this configuration value should be encrypted.
     */
    secret?: boolean;
    [k: string]: (string | number | boolean | unknown[] | ConfigTypeDeclaration) | undefined;
  } | null;
  /**
   * Config directory location relative to the location of Pulumi.yaml.
   */
  stackConfigDir?: string | null;
  /**
   * Backend of the project.
   */
  backend?: {
    /**
     * URL is optional field to explicitly set backend url
     */
    url?: string;
  } | null;
  /**
   * Additional project options.
   */
  options?: {
    /**
     * Set to "always" to refresh the state before performing a Pulumi operation.
     */
    refresh?: 'always';
  } | null;
  template?: ProjectTemplate;
  /**
   * Override for the plugin selection. Intended for use in developing pulumi plugins.
   */
  plugins?: {
    /**
     * Plugins for resource providers.
     */
    providers?: PluginOptions[];
    /**
     * Plugins for policy analyzers.
     */
    analyzers?: PluginOptions[];
    /**
     * Plugins for languages.
     */
    languages?: PluginOptions[];
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface Options {
  [k: string]: unknown | undefined;
}
export interface ConfigTypeDeclaration {
  type?: SimpleConfigType;
  items?: ConfigItemsType;
  description?: string;
  secret?: boolean;
  default?: unknown;
  value?: unknown;
}
export interface ConfigItemsType {
  type: SimpleConfigType | ConfigItemsType;
  items?: ConfigItemsType;
  [k: string]: unknown | undefined;
}
export interface PluginOptions {
  /**
   * Name of the plugin
   */
  name: string;
  /**
   * Path to the plugin folder
   */
  path: string;
  /**
   * Version of the plugin, if not set, will match any version the engine requests.
   */
  version?: string;
}
