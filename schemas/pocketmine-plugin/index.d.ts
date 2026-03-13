/* eslint-disable */

export interface HttpsJsonSchemastoreOrgPocketminePluginJson {
  /**
   * The PocketMine API version(s) supported by the plugin. The array should be minimized such that no two API versions.
   */
  api: string[] | string;
  /**
   * The author name
   */
  author?: string;
  /**
   * The author names, will be appended to `author` if both are present
   */
  authors?: string[];
  /**
   * The commands to be registered automatically. The keys are command name. Commands can also be dynamically registered with the server CommandMap.
   */
  commands?: {
    [k: string]:
      | {
          /**
           * Aliases of the command
           */
          aliases?: string[];
          /**
           * Description of the command as shown in /help
           */
          description?: string;
          /**
           * Name of the permission to check for, or multiple permissions separated
           */
          permission?: string;
          /**
           * Message to send to users if permission checks fail. Occurrences of <permission> are replaced with the `permission` property.
           */
          'permission-message'?: string;
          /**
           * Usage message of the command
           */
          usage?: string;
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  /**
   * Plugin(s) in `depend` must be present and will be loaded BEFORE this plugin.
   */
  depend?: string[] | string;
  /**
   * The detailed description of the plugin
   */
  description?: string;
  /**
   * Extension(s) required to load this plugin. Can be one extension name, a list of extension names or a mapping of extension name to version constraints.
   */
  extensions?:
    | string[]
    | {
        [k: string]: (string[] | string) | undefined;
      }
    | string;
  /**
   * The point of loading the plugin, defaults to POSTWORLD
   */
  load?: 'POSTWORLD' | 'STARTUP';
  /**
   * Plugin(s) in `loadbefore` will be loaded AFTER this plugin if they are present.
   */
  loadbefore?: string[] | string;
  /**
   * The fully-qualified name of the main class that extends PluginBase
   */
  main: string;
  /**
   * The MCPE protocol versions supported by the plugin. If supported,
   */
  'mcpe-protocols'?: number[] | number;
  /**
   * Name of the plugin
   */
  name: string;
  permissions?: PermissionChildren;
  /**
   * The plugin prefix used in the logger, defaults to plugin name
   */
  prefix?: string;
  /**
   * Plugin(s) in `softdepend` will be loaded BEFORE this plugin if they are present, but nothing special happens if they are not present.
   */
  softdepend?: string[] | string;
  /**
   * Plugin version
   */
  version: string;
  /**
   * The plugin's website
   */
  website?: string;
  [k: string]: unknown | undefined;
}
/**
 * Permissions to be registered by this plugin automatically. Permissions can still be registered dynamically.
 */
export interface PermissionChildren {
  [k: string]:
    | {
        children?: PermissionChildren1;
        /**
         * Indicates whether players have this permission by default.
         */
        default?:
          | '!admin'
          | '!op'
          | '!operator'
          | 'admin'
          | false
          | 'false'
          | 'isadmin'
          | 'isop'
          | 'isoperator'
          | 'notadmin'
          | 'notop'
          | 'notoperator'
          | 'op'
          | 'operator'
          | true
          | 'true';
        /**
         * Description of the permission
         */
        description?: string;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
/**
 * The child permissions. Toggling the parent permission will toggle all child permissions too.
 */
export interface PermissionChildren1 {
  [k: string]:
    | {
        children?: PermissionChildren1;
        /**
         * Indicates whether players have this permission by default.
         */
        default?:
          | '!admin'
          | '!op'
          | '!operator'
          | 'admin'
          | false
          | 'false'
          | 'isadmin'
          | 'isop'
          | 'isoperator'
          | 'notadmin'
          | 'notop'
          | 'notoperator'
          | 'op'
          | 'operator'
          | true
          | 'true';
        /**
         * Description of the permission
         */
        description?: string;
        [k: string]: unknown | undefined;
      }
    | undefined;
}
