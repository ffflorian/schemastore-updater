/* eslint-disable */

/**
 * A palette's name within the marketplace, its file name under palettes/ without .toml
 */
export type Palette = string;

/**
 * The ttheme-marketplace.toml at the root of a ttheme marketplace: a repository or folder whose palettes/*.toml are the marketplace's palettes and whose works/*.toml propose works and characters the commons does not hold yet
 * https://ttheme.dev/docs/creating-palettes/publish
 */
export interface TthemeMarketplace {
  /**
   * This file's JSON Schema, for editor completion and checks; ttheme ignores it
   */
  $schema?: string;
  /**
   * The marketplace's name: its palettes are <owner>@<name>/<palette>, where the owner is the repository's owner on GitHub. The built-in marketplace alone is named ttheme, and its palettes ttheme/<palette>
   * https://ttheme.dev/docs/creating-palettes/publish
   */
  name: string;
  /**
   * What the marketplace holds, shown in Browse, ttheme marketplace and the marketplace page
   */
  description?: string;
  /**
   * Who keeps the marketplace
   */
  owner?: {
    /**
     * The owner's GitHub handle, which names a marketplace read from a folder; a marketplace added from GitHub takes its repository's owner instead
     */
    name: string;
    /**
     * An address for questions about the marketplace
     */
    email?: string;
    /**
     * The owner's page, such as a GitHub profile
     */
    url?: string;
    [k: string]: unknown | undefined;
  };
  /**
   * Palettes that were renamed or removed: an old name maps to its new name, or to false once it is gone. Installs of the old name follow the chain on the next update, so keep the entries after everyone has moved
   * https://ttheme.dev/docs/creating-palettes/publish
   */
  renames?: {
    [k: string]: Palette | false | undefined;
  };
  /**
   * Whether a palette that leaves the marketplace without a rename is removed from the machines that installed it; by default they keep their copy
   */
  force_remove_deleted_palettes?: boolean;
  /**
   * Anything else the owner wants to keep here; ttheme does not read it
   */
  metadata?: {
    [k: string]: unknown | undefined;
  };
  /**
   * A palette's name within the marketplace, its file name under palettes/ without .toml
   */
  fallback?: string;
  [k: string]: unknown | undefined;
}
