/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * The repository URI or local repository directory path.
 */
export type Repository = Path | Path1 | RepoNamePattern;
export type Path = string;
export type Path1 = string;
/**
 * If {repo} starts with github user name (ex:'Shougo/dein.vim'), dein will install github plugins.
 */
export type RepoNamePattern = string;
/**
 * '_' key is executed after all ftplugin.
 */
export type AllFiletypes = string;
/**
 * '{filetype}' key is executed {filetype} ftplugin.
 * You can define multiple filetypes by '{filetype1}_{filetype2}' key.
 * 'b:undo_ftplugin' is defined automatically.
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[0-9a-zA-Z].+$".
 */
export type Filetype = string;
export type VimModeKeyMappingString = string;
export type OnMapArray2 = VimModeKeyMappingString[];
export type OnMapArray = OnMapArray1 | OnMapArray2;
export type OnMapString = VimModeKeyPatternString | VimModeKeyMappingString;
export type VimModeKeyPatternString = string;
export type OnMapString1 = string;
export type OnMapArray1 = (OnMapString & OnMapString1)[];
/**
 * Definition properties table for installing a vim plugin.
 * It is converted to |dein#add()|.
 */
export type DefinitionPropertiesTableForInstallingAVimPlugin = PatternForADefinitionOfVimPlugin[];
/**
 * '_' key is executed after all ftplugin.
 */
export type AllFiletypes1 = string;
/**
 * '{filetype}' key is executed {filetype} ftplugin.
 * You can define multiple filetypes by '{filetype1}_{filetype2}' key.
 * 'b:undo_ftplugin' is defined automatically.
 *
 * This interface was referenced by `FtpluginDefinition`'s JSON-Schema definition
 * via the `patternProperty` "^[0-9a-zA-Z].+$".
 */
export type Filetype1 = string;
/**
 * It is the global |dein-options-hook_add|.
 * It is executed in |dein#end()|.
 */
export type HookAddDefinition = string;
/**
 * The repository URI or local repository directory path.
 */
export type Plugins = RepoNamePattern[];
/**
 * It is converted to |dein-toml-hook_add|
 * "plugins" key is needed.
 */
export type ItIsConvertedToDeinTomlHookAdd = PatternForMultipleDefinitionOfVimPlugin[];

/**
 * A schema for config of dein.vim (https://github.com/Shougo/dein.vim/blob/f93be8c/doc/dein.txt#L963)
 */
export interface DeinVim {
  plugins: DefinitionPropertiesTableForInstallingAVimPlugin;
  ftplugin?: FtpluginDefinition;
  hook_add?: HookAddDefinition;
  multiple_plugins?: ItIsConvertedToDeinTomlHookAdd;
}
export interface PatternForADefinitionOfVimPlugin {
  repo: Repository;
  /**
   * An augroup name that the plugin uses for |VimEnter| or |GUIEnter| autocmd events.
   */
  augroup?: string;
  /**
   * Specify the build script. This command is executed by |system()| in the plugin runtimepath. Note: In previous versions of dein, build could also be of type dictionary, but that is now deprecated. Please use |dein-options-hook_post_update| instead.
   */
  build?: string;
  /**
   * Specify a list of plugins a plugin depends on. List items are '{plugin-name}'. Those specified in the list are NOT installed automatically. Note: The loading order is not guaranteed in non lazy plugins.
   */
  depends?: string[] | string;
  /**
   * If set to v:true, dein doesn't update it automatically. It is useful for outdated plugins that can no longer be updated.
   */
  frozen?: boolean | (0 | 1);
  /**
   * '_' key is executed after all ftplugin. '{filetype}' key is executed {filetype} ftplugin.
   */
  ftplugin?: {
    _?: AllFiletypes;
    [k: string]: Filetype;
  };
  /**
   * If set to v:false, dein doesn't register the plugin, i.e. the plugin will be disabled. If it is String, dein will eval it. If you don't set it, dein will register (enable) the plugin
   */
  if?: boolean | number | string;
  /**
   * If set to v:true, dein doesn't add the path to 'runtimepath' automatically. If you don't set it, dein will set it automatically when the conditions are met. Note: You should not specify the plugins which have no 'plugin/' directory as lazy load plugins.  It is meaningless and just increases the overhead.  You can get the no meaning lazy plugins by |dein#check_lazy_plugins()|.
   */
  lazy?: boolean | number;
  /**
   * If set to v:false, dein doesn't merge the plugin directory. It is useful for the plugin files conflicts.
   */
  merged?: boolean | (0 | 1);
  /**
   * If set to v:true, dein merge the plugin "ftdetect" directory. It is useful to enable file detection when lazy loaded plugin. Note: It does not work if ftdetect script depends on lazy plugin functions.
   */
  merge_ftdetect?: boolean | (0 | 1);
  /**
   * Specify the name of the plugin. This is used for dein management and other functions. If it is omitted, the tail of the repository name will be used. Note: Must be unique across the all plugin. If the plugin name conflicts with another plugin, dein will overwrite the previous settings with the new one. If the repo tail is bound to conflict, you can set the 'name' option manually to prevent overwriting an existing plugin setting.
   */
  name?: string;
  /**
   * Specify the normalized name of the plugin.  If omitted, dein will normalize the tail of the repository name. Note: Must be unique across all plugins.
   */
  normalized_name?: string;
  /**
   * If it is matched to the executed command, dein will call |dein#source()|.
   */
  on_cmd?: string[] | string;
  /**
   * dein will call |dein#source()| on the events.
   */
  on_event?: string[] | string;
  /**
   * If it is matched to the called function, dein will call |dein#source()|.
   */
  on_func?: string[] | string;
  /**
   * If it is matched to 'filetype', dein will call |dein#source()|.
   */
  on_ft?: string[] | string;
  /**
   * If it is evaluated and it is non-zero, dein will call|dein#source()|.The default evaluate timings are 'BufRead', 'BufNewFile','VimEnter' and 'FileType'.If |dein-options-on_event| exists, it is evaluated when|dein-options-on_event|.
   */
  on_if?: string;
  /**
   * If it is matched to the required lua module root, dein will call |dein#source()|. Note: It is for neovim only. Note: It does not work for neovim standard modules.
   */
  on_lua?: string[] | string;
  /**
   * If it is the Dictionary, the key is {mode} and the items are{mapping} or [{mapping1}, {mapping2}, ...].If it is the List, the items are {mapping} or [{mode},{mapping1}, [{mapping2}, ...]].If {mode} is omitted, 'nx' is used.
   */
  on_map?: OnMapDict | OnMapArray | (OnMapString & OnMapString1);
  /**
   * If set to '.*', dein will call |dein#source()| on editing allfiles.  Otherwise, dein will call |dein#source()| if thebuffer name is matched to the string pattern.Note: It is useful for explorer behavior plugins.
   */
  on_path?: string[] | string;
  /**
   * If set to '.*', dein will call |dein#source()| on editing allfiles.  Otherwise, dein will call |dein#source()| if thebuffer name is matched to the string pattern.Note: It is useful for explorer behavior plugins.
   */
  on_source?: string[] | string;
  /**
   * If set to v:true, dein overwrite existing plugin config when |dein#add()|.
   */
  overwrite?: boolean | (0 | 1);
  /**
   * Specify the plugin downloaded path.
   */
  path?: string;
  /**
   * Specify a revision number or branch/tag name. If it is '*' in 'git' type, dein will use latest released tag.You can specify the wildcards like '0.*'.Note: If the type is 'raw', rev must be hash number.
   */
  rev?: string;
  /**
   * Specify the runtime path. You can use it when the repository has the Vim plugin in a subdirectory.For example: https://github.com/rstacruz/sparkup If it is empty string, dein will not add the path to'runtimepath'
   */
  rtp?: string;
  /**
   * Specify the script type. It is useful for non-official categorized plugins. For example: 'indent', 'plugin', 'ftplugin', ... Note: You must not specify it for categorized plugins.
   */
  script_type?: "indent" | "plugin" | "colors" | "ftplugin";
  /**
   * The time of timeout seconds when updating/installing plugins. If omit it, |g:dein#install_process_timeout| will be used.
   */
  timeout?: number;
  /**
   * If set to v:true, dein will load the plugin in 'sudo' mode. If you don't set it, dein won't load it.
   */
  trusted?: boolean | (0 | 1);
  /**
   * Specify the repository type. If it is omitted, a guess is made based on {repository}.
   */
  type?: "none" | "raw" | "git";
  /**
   * The history depth for 'git clone'.
   *  If omitted, |g:dein#types#git#clone_depth| is used. If it is than 0, dein clones the repository by shallow clone. Shallow clone feature saves your repository clone time. But it has problems in some repository.
   *  Note: This attribute is available in git type only.
   *
   *  https://github.com/Shougo/neobundle.vim/issues/81 https://github.com/Homebrew/homebrew/issues/12024
   */
  type__depth?: number;
  /**
   * It is executed after the line is parsed. Note: You cannot call plugin function in 'hook_add'. Because the plugin is not sourced when 'hook_add'.
   */
  hook_add?: string;
  /**
   * It is executed after the all plugins are updated.
   */
  hook_done_update?: string;
  /**
   * It is executed after plugins are sourced.  Note: In Vim initializing, you must call the 'hook_post_source' hooks manually in |VimEnter| if needed.
   */
  hook_post_source?: string;
  /**
   * It is executed after the plugins are updated.
   */
  hook_post_update?: string;
  /**
   * It is executed before plugins are sourced. Note: The 'sourced' means after |dein#end()| or when |VimEnter| or autoloaded.           'type': 'string',
   */
  hook_source?: string;
  /**
   * Lua lauguage string hook instead of Vim script.
   * It is converted to "hook_add" key.
   */
  lua_add?: string;
  /**
   * Lua lauguage string hook instead of Vim script.
   * It is converted to "hook_source" key.
   */
  lua_source?: string;
}
export interface OnMapDict {
  /**
   * Pattern for vim key binding. You can use plugin prefix mappings. You can use '<Plug>' keyword as {mapping}. If{mapping} is '<Plug>', '<Plug>(normalized_name' isused. linter support is now under developping
   *
   * This interface was referenced by `OnMapDict`'s JSON-Schema definition
   * via the `patternProperty` "^[nvxsomilct]+$".
   */
  [k: string]: VimModeKeyMappingString | OnMapArray2;
}
/**
 * '_' key is executed after all ftplugin.
 * '{filetype}' key is executed {filetype} ftplugin.
 *  You can define multiple filetypes by '{filetype1}_{filetype2}' key.
 */
export interface FtpluginDefinition {
  _?: AllFiletypes1;
  [k: string]: Filetype1;
}
export interface PatternForMultipleDefinitionOfVimPlugin {
  plugins: Plugins;
}
