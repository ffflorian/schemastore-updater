/* eslint-disable */

/**
 * UNDOCUMENTED. Defaults to "url" when omitted or empty. Use "metadata:curseforge" when downloading from CurseForge.
 */
export type ModeProperty = 'url' | 'metadata:curseforge';
/**
 * UNDOCUMENTED. Prevents packwiz from updating the mod automatically. Set when using the command `packiwz pin`.
 */
export type ModPinning = boolean;

/**
 * A metadata file which references an external file from a URL. This allows for side-only mods, optional mods and stores metadata to allow finding updates from Modrinth and CurseForge. The "mod" terminology is used a lot here, but this should work for any file.
 */
export interface ModPwTomlPackwiz {
  download: DownloadObject;
  /**
   * The destination path of the mod file, relative to this file using forward slashes. Must not reference a file outside the pack root, and should not include characters or filenames restricted on common operating systems.
   */
  filename: string;
  /**
   * The name of the mod, which can be displayed in user interfaces to identify the mod. It does not need to be unique between mods, although this may cause confusion.
   */
  name: string;
  option?: OptionObject;
  /**
   * The side on which this mod should be installed. A physical Minecraft side. Server applies to the dedicated server, client applies to the client (and integrated server), and both applies to every installation.
   */
  side?: 'both' | 'client' | 'server';
  update?: UpdateObject;
  pin?: ModPinning;
}
/**
 * Information about how to download this mod.
 */
export interface DownloadObject {
  /**
   * The hash format for the hash of the specified file.
   */
  'hash-format': 'sha256' | 'sha512' | 'sha1' | 'md5' | 'murmur2';
  /**
   * The hash of the specified file, as a string. Binary hashes should be stored as hexadecimal, and case should be ignored during parsing. Numeric hashes (e.g. Murmur2) should still be stored as a string, to ensure the value is preserved correctly.
   */
  hash: string;
  /**
   * The URL to download the mod from. An absolute URI compliant with RFC 3986. Can be omitted if `mode` is set to "metadata:curseforge".
   */
  url?: string;
  mode?: ModeProperty;
}
/**
 * Information about the optional state of this mod. When excluded, this indicates that the mod is not optional.
 */
export interface OptionObject {
  /**
   * Whether or not the mod is optional. This can be set to false if you want to keep the description but make the mod required.
   */
  optional: boolean;
  /**
   * If true, the mod will be enabled by default. If false, the mod will be disabled by default. If a pack format does not support optional mods but it does support disabling mods, the mod will be disabled if it defaults to being disabled.
   */
  default?: boolean;
  /**
   * A description displayed to the user when they select optional mods. This should explain why or why not the user should enable the mod.
   */
  description?: string;
}
/**
 * Information about how to update the download details of this mod with tools. If this object does not exist or there are no defined update sources, the mod will not be automatically updated. If there are multiple defined update sources, one of them will be chosen. The source that is chosen is not defined, so it is therefore dependent on the implementation of the tool (may not be deterministic, so do not rely on one source being chosen over another).
 */
export interface UpdateObject {
  curseforge?: CurseForgeUpdateSource;
  modrinth?: ModrinthUpdateSource;
}
/**
 * An update source for updating mods downloaded from CurseForge.
 */
export interface CurseForgeUpdateSource {
  /**
   * An integer representing the unique file ID of this mod file. This can be used if more metadata needs to be obtained relating to the mod.
   */
  'file-id': number;
  /**
   * An integer representing the unique project ID of this mod. Updating will retrieve the latest file for this project ID that is valid (correct Minecraft version, release channel, modloader, etc.).
   */
  'project-id': number;
}
/**
 * An update source for updating mods downloaded from Modrinth.
 */
export interface ModrinthUpdateSource {
  /**
   * A string representing the unique mod ID of this mod. Updating will retrieve the latest file for this project ID that is valid (correct Minecraft version, release channel, modloader, etc.).
   */
  'mod-id': string;
  /**
   * A string representing the unique version ID of this file. This can be used if more metadata needs to be obtained relating to the mod.
   */
  version: string;
}
