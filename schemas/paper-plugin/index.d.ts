/* eslint-disable */

export type PluginName = string;

/**
 * JSON schema for Paper Plugin YAML
 */
export interface PaperPaperPluginYml {
  /**
   * The name of the plugin
   */
  name: string;
  /**
   * The main class of the plugin
   */
  main: string;
  /**
   * The main class of the custom bootstrapper for the plugin
   */
  bootstrapper?: string;
  /**
   * The main class of the custom plugin loader for the plugin
   */
  loader?: string;
  /**
   * Satisfies dependency requirements as this plugin. When resolving dependencies, if a plugin requires a plugin in this list, this plugin will satisfy it.
   */
  provides?: PluginName[];
  /**
   * Whether the plugin should have its classloader public to other paper plugins
   */
  'has-open-classloader'?: boolean;
  /**
   * The version of the plugin
   */
  version: string;
  /**
   * The description of the plugin
   */
  description?: string;
  /**
   * Main authors of the plugin
   */
  authors?: string[];
  /**
   * Other contributors to the plugin
   */
  contributors?: string[];
  /**
   * Plugin website
   */
  website?: string;
  /**
   * Log prefix for this plugin. Defaults to the plugin name
   */
  prefix?: string;
  /**
   * When to load this plugin. Defaults to POSTWORLD.
   */
  load?: 'STARTUP' | 'POSTWORLD';
  /**
   * Default value for permissions. Defaults to 'op'
   */
  'default-perm'?: 'true' | 'false' | 'op' | 'not op';
  /**
   * Permissions for this plugin
   */
  permissions?: {
    [k: string]: Permission | undefined;
  };
  /**
   * The API version of the plugin
   */
  'api-version': string;
  /**
   * Plugin dependencies.
   */
  dependencies?: {
    bootstrap?: DependencyGroup;
    server?: DependencyGroup1;
  };
  [k: string]: unknown | undefined;
}
/**
 * A permission for this plugin
 */
export interface Permission {
  /**
   * Default for this permission
   */
  default?: 'true' | 'false' | 'op' | 'not op';
  description?: string;
  children?:
    | string[]
    | {
        [k: string]: (boolean | Permission | undefined) | undefined;
      };
}
/**
 * Dependencies for the plugin bootstrapper
 */
export interface DependencyGroup {
  [k: string]: Dependency | undefined;
}
/**
 * A plugin dependency
 */
export interface Dependency {
  /**
   * Where to load this dependency in relation to the plugin. Defaults to OMIT
   */
  load?: 'AFTER' | 'BEFORE' | 'OMIT';
  /**
   * Whether this dependency's classpath should be joined by the plugin. Defaults to true
   */
  'join-classpath'?: boolean;
  /**
   * Whether this dependency is required for the plugin to load. Defaults to true
   */
  required?: boolean;
}
/**
 * Dependencies for the server
 */
export interface DependencyGroup1 {
  [k: string]: Dependency | undefined;
}
