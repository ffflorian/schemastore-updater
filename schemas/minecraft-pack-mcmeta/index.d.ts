/* eslint-disable */

/**
 * Folder which contains files which should override regular files when Fusion is loaded
 * https://github.com/SuperMartijn642/Fusion/wiki/Optional-Fusion-Overwrites
 */
export type FusionOverridesFolder = string;

/**
 * Minecraft Resource/Data Pack Metadata
 * https://minecraft.wiki/w/Pack.mcmeta#Format
 */
export interface HttpsJsonSchemastoreOrgMinecraftPackMcmetaJson {
  /**
   * Holds the pack information.
   */
  pack:
    | {
        pack_format: unknown;
        [k: string]: unknown | undefined;
      }
    | {
        min_format: unknown;
        max_format: unknown;
        [k: string]: unknown | undefined;
      };
  /**
   * Section for selecting experimental features.
   */
  features?: {
    /**
     * List of enabled feature flags.
     */
    enabled: string[];
    [k: string]: unknown | undefined;
  };
  /**
   * Section for filtering out files from packs applied below this one. Any file that matches one of the blocked patterns is treated as if it was not present in the pack at all.
   */
  filter?: {
    block?: {
      /**
       * A regular expression for the namespace of files to be filtered out. If unspecified, it applies to every namespace.
       */
      namespace?: string;
      /**
       * A regular expression for the paths of files to be filtered out. If unspecified, it applies to every file.
       */
      path?: string;
    }[];
  };
  /**
   * Section for specifying the overlays, which are sub-packs applied over the "normal" contents of a pack. Their directories have their own assets and data directories, and are placed in the pack's root directory.
   */
  overlays?: {
    /**
     * List of overlays. The order is important, as the first in the list is applied first.
     */
    entries: (
      | {
          formats: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          min_format: unknown;
          max_format: unknown;
          [k: string]: unknown | undefined;
        }
    )[];
  };
  /**
   * Contains additional languages to add to the language menu. Only present in resource packs.
   */
  language?: {
    [k: string]:
      | {
          /**
           * The full name of the language
           */
          name: string;
          /**
           * The country or region name
           */
          region: string;
          /**
           * If true, the language reads right to left.
           */
          bidirectional?: boolean;
        }
      | undefined;
  };
  fusion?: FusionOptions;
}
/**
 * Fusion options for the current pack
 * https://github.com/SuperMartijn642/Fusion/wiki
 */
export interface FusionOptions {
  overrides_folder?: FusionOverridesFolder;
}
