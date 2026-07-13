/* eslint-disable */

/**
 * A list of additional Minecraft versions to accept when installing or updating mods.
 */
export type AcceptableGameVersions = string[];
/**
 * The folder in which new metadata files will be added, defaulting to a folder based on the category (mods, resourcepacks, etc; if the category is unknown the current directory is used).
 */
export type MetaFolder = string;
/**
 * DEPRECATED. `mods-folder` is now deprecated; aliased to `meta-folder`.
 */
export type ModsFolder = string;
/**
 * The base folder from which meta-folder will be resolved, defaulting to the current directory (so you can put all mods/etc in a subfolder while still using the default behaviour).
 */
export type MetaFolderBase = string;
/**
 * If this is set to true, packwiz will not generate hashes of local files, to prevent merge conflicts and inconsistent hashes when using git/etc. `packwiz refresh --build` can be used in this mode to generate internal hashes for distributing the pack with packwiz-installer.
 */
export type NoInternalHashes = boolean;
/**
 * The folder in which datapacks are to be added; specific to the datapack loader mod you use, and must be set to add datapacks (that are not bundled as mods).
 */
export type DatapackFolder = string;
/**
 * UNDOCUMENTED. Used for export manifest.
 */
export type CurseForgeProjectID = number;

/**
 * The main modpack file for a packwiz modpack.
 */
export interface PackTomlPackwiz {
  index: IndexObject;
  /**
   * The name of the modpack. This can be displayed in user interfaces to identify the pack, and it does not need to be unique between packs.
   */
  name: string;
  /**
   * A version string identifying the pack format and version of it. If it is defined, it must begin with "packwiz:", followed by a valid SemVer v2.0.0. If it is not defined, default to "packwiz:1.0.0" for backwards-compatibility with packs created before this field was added.
   */
  'pack-format': string;
  versions: VersionsObject;
  /**
   * The author(s) of the modpack. This is output when exporting to the CurseForge pack format, and can be displayed in user interfaces.
   */
  author?: string;
  /**
   * A short description of the modpack. This is output when exporting to the Modrinth pack format, but is not currently used elsewhere by the tools or installer.
   */
  description?: string;
  /**
   * The version of the modpack. This is output when exporting to the CurseForge pack format, but is not currently used elsewhere by the tools or installer. It must not be used for determining if the modpack is outdated.
   */
  version?: string;
  options?: AdditionalOptions;
  export?: ExportOptions;
}
/**
 * Information about the index file in this modpack.
 */
export interface IndexObject {
  /**
   * The path to the file that contains the index.
   */
  file: string;
  /**
   * The hash format for the hash of the index file.
   */
  'hash-format': 'sha256' | 'sha512' | 'sha1' | 'md5' | 'murmur2';
  /**
   * The hash of the index file, as a string.
   */
  hash?: string;
}
/**
 * The versions of components used by this modpack - usually Minecraft and the mod loader this pack uses. The existence of a component implies that it should be installed. These values can also be used by tools to determine which versions of mods should be installed.
 */
export interface VersionsObject {
  /**
   * The version of Minecraft used by this modpack. This should be in the format used by the version.json files.
   */
  minecraft: string;
  /**
   * The version of Fabric loader used by this modpack.
   */
  fabric?: string;
  /**
   * The version of Forge used by this modpack. This version must not include the Minecraft version as a prefix.
   */
  forge?: string;
  /**
   * The version of Liteloader used by this modpack.
   */
  liteloader?: string;
  /**
   * The version of Quilt loader used by this modpack.
   */
  quilt?: string;
  /**
   * The version of NeoForge loader used by this modpack.
   */
  neoforge?: string;
}
/**
 * Additional options can be configured in the `[options]` section of `pack.toml`.
 */
export interface AdditionalOptions {
  'acceptable-game-versions'?: AcceptableGameVersions;
  'meta-folder'?: MetaFolder;
  'mods-folder'?: ModsFolder;
  'meta-folder-base'?: MetaFolderBase;
  'no-internal-hashes'?: NoInternalHashes;
  'datapack-folder'?: DatapackFolder;
}
/**
 * UNDOCUMENTED. Options used for modpack exports. Currently only used for CurseForge.
 */
export interface ExportOptions {
  curseforge?: CurseForgeExportOptions;
}
/**
 * UNDOCUMENTED. Options used for CurseForge exports.
 */
export interface CurseForgeExportOptions {
  'project-id'?: CurseForgeProjectID;
}
