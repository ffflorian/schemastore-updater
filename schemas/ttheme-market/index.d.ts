/* eslint-disable */

/**
 * A palette's bare name, its file name under palettes/ without .toml
 */
export type Palette = string;

/**
 * The ttheme-market.toml at the root of a ttheme market: a repository or folder whose palettes/*.toml and palettes/<catalog>/*.toml are the market's palettes
 * https://github.com/kecan0406/ttheme/blob/main/docs/usage.md#markets
 */
export interface TthemeMarket {
  /**
   * This file's JSON Schema, for editor completion and checks; ttheme ignores it
   */
  $schema?: string;
  /**
   * The market's name: its palettes are <owner>@<name>/<palette>, where the owner is the repository's owner on GitHub
   * https://github.com/kecan0406/ttheme/blob/main/docs/usage.md#markets
   */
  name: string;
  /**
   * What the market holds, shown in ttheme browse, ttheme market and the market page
   */
  description?: string;
  /**
   * Who keeps the market
   */
  owner: {
    /**
     * The owner's GitHub handle, which names a market read from a folder; a market added from GitHub takes its repository's owner instead
     */
    name: string;
    /**
     * An address for questions about the market
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
   * https://github.com/kecan0406/ttheme/blob/main/docs/usage.md#markets
   */
  renames?: {
    [k: string]: Palette | false | undefined;
  };
  /**
   * Whether a palette that leaves the market without a rename is removed from the machines that installed it; by default they keep their copy
   */
  force_remove_deleted_palettes?: boolean;
  /**
   * Anything else the owner wants to keep here; ttheme does not read it
   */
  metadata?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
