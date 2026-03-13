/* eslint-disable */

/**
 * Folder which contains files which should override regular files when Fusion is loaded
 * https://github.com/SuperMartijn642/Fusion/wiki/Optional-Fusion-Overwrites
 */
export type FusionOverridesFolder = string;

/**
 * Fusion extension for Minecraft resource pack metadata
 */
export interface FusionResourcePackMetadata {
  filter?: FilterOptions;
  fusion?: FusionOptions;
  pack?: PackOptions;
}
/**
 * Filter options for the current pack
 * https://minecraft.wiki/w/Data_pack
 */
export interface FilterOptions {
  [k: string]: Pattern | undefined;
}
/**
 * A pattern for the current pack
 * https://minecraft.wiki/w/Data_pack
 */
export interface Pattern {
  /**
   * A namespace regular expression for the current pack
   * https://minecraft.wiki/w/Data_pack
   */
  namespace?: string;
  /**
   * A path regular expression for the current pack
   * https://minecraft.wiki/w/Data_pack
   */
  path?: string;
}
/**
 * Fusion options for the current pack
 * https://github.com/SuperMartijn642/Fusion/wiki
 */
export interface FusionOptions {
  overrides_folder?: FusionOverridesFolder;
}
/**
 * Options for the current pack
 * https://minecraft.wiki/w/Data_pack#Contents
 */
export interface PackOptions {
  description?: Description;
  /**
   * A version for the current pack
   * https://minecraft.wiki/w/Data_pack#Contents
   */
  pack_format?: number;
}
/**
 * A description for the current pack
 * https://minecraft.wiki/w/Data_pack#Contents
 */
export interface Description {
  [k: string]: unknown | undefined;
}
