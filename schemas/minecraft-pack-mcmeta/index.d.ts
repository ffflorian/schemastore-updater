/* eslint-disable */

/**
 * A text component that appears when hovering over the pack's name in the list given by the `/datapack list` command, or when viewing the pack in the Create World screen.
 */
export type Description =
  | string
  | {
      [k: string]: unknown | undefined;
    };
/**
 * https://minecraft.wiki/w/Pack_format
 */
export type PackFormat = number;
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
  pack: (
    | {
        pack_format: unknown;
        [k: string]: unknown | undefined;
      }
    | {
        min_format: unknown;
        max_format: unknown;
        [k: string]: unknown | undefined;
      }
  ) & {
    description: Description;
    /**
     * https://minecraft.wiki/w/Pack_format
     */
    pack_format?: number;
    /**
     * Describes the minimum supported pack format version. Can be an integer or an array of one or two integers ([major] or [major, minor]).
     */
    min_format?: number | [number] | [number, number];
    /**
     * Describes the maximum supported pack format version. Can be an integer or an array of one or two integers ([major] or [major, minor]).
     */
    max_format?: number | [number] | [number, number];
    /**
     * DEPRECATED. The major versions this pack supports. Has to match the major versions specified in min_format and max_format.
     * Required when the pack declares support for versions either below data pack format 82 or resource pack format 65.
     * Must be absent otherwise.
     */
    supported_formats?:
      | [PackFormat, PackFormat]
      | PackFormat
      | {
          min_inclusive: PackFormat;
          max_inclusive: PackFormat;
        };
  };
  /**
   * Section for selecting experimental features.
   */
  features?: {
    /**
     * List of enabled feature flags.
     *
     * Items: Resource location of a feature flag.
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
     *
     * Items: An overlay.
     */
    entries: ((
      | {
          formats: unknown;
          [k: string]: unknown | undefined;
        }
      | {
          min_format: unknown;
          max_format: unknown;
          [k: string]: unknown | undefined;
        }
    ) & {
      /**
       * The directory to overlay for the respective versions.
       */
      directory: string;
      /**
       * Describes the minimum pack format version to which this overlay applies. As integer or one or two element integer array.
       */
      min_format?: number | [number] | [number, number];
      /**
       * Describes the minimum pack format version to which this overlay applies. As integer or one or two element integer array.
       */
      max_format?: number | [number] | [number, number];
      /**
       * DEPRECATED. A range of major pack format versions to which this overlay applies. Has to match the major versions specified in min_format and max_format.
       * Required when the pack declares support for versions either below data pack format 82 or resource pack format 65.
       * Must be absent otherwise.
       */
      formats?:
        | [PackFormat, PackFormat]
        | PackFormat
        | {
            min_inclusive: PackFormat;
            max_inclusive: PackFormat;
          };
    })[];
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
