/* tslint:disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

/**
 * A cheatpath path
 * https://github.com/cheat/cheat#cheatpaths
 */
export type Path = string;

export interface ACheatsheetConfigSchema {
  editor?: unknown;
  /**
   * Whether cheatsheets should be colorized
   * https://github.com/cheat/cheat#cheatpaths
   */
  colorize?: boolean;
  /**
   * A color schema applied for cheatsheets
   * https://github.com/cheat/cheat#cheatpaths
   */
  style?:
    | "abap"
    | "algol"
    | "algol_nu"
    | "api"
    | "arduino"
    | "autumn"
    | "average"
    | "base16-snazzy"
    | "borland"
    | "bw"
    | "catppuccin"
    | "colorful"
    | "doom-one2"
    | "doom-one"
    | "dracula"
    | "emacs"
    | "friendly"
    | "fruity"
    | "github-dark"
    | "github"
    | "gruvbox"
    | "gruvbox-light"
    | "hr_dark"
    | "hr_high_contrast"
    | "igor"
    | "lovelace"
    | "manni"
    | "modus-operandi"
    | "modus-vivendi"
    | "monokai"
    | "monokailight"
    | "murphy"
    | "native"
    | "nord"
    | "onesenterprise"
    | "paraiso-dark"
    | "paraiso-light"
    | "pastie"
    | "perldoc"
    | "pygments"
    | "rainbow_dash"
    | "rose-pine-dawn"
    | "rose-pine"
    | "rose-pine-moon"
    | "rrt"
    | "solarized-dark256"
    | "solarized-dark"
    | "solarized-light"
    | "swapoff"
    | "tango"
    | "trac"
    | "vim"
    | "vs"
    | "vulcan"
    | "witchhazel"
    | "xcode-dark"
    | "xcode";
  /**
   * A formatter to format cheatsheets
   * https://github.com/cheat/cheat#cheatpaths
   */
  formatter?: "terminal" | "terminal256" | "terminal16m";
  pager?: unknown;
  /**
   * Cheatpaths
   * https://github.com/cheat/cheat#cheatpaths
   */
  cheatpaths?: Cheatpath[];
}
/**
 * A cheatpath
 * https://github.com/cheat/cheat#cheatpaths
 */
export interface Cheatpath {
  /**
   * A cheatpath name
   * https://github.com/cheat/cheat#cheatpaths
   */
  name?: string;
  path?: Path;
  /**
   * Cheatpath tags
   * https://github.com/cheat/cheat#cheatpaths
   */
  tags?: string[];
  /**
   * Whether allow creating cheatsheets in a cheatpath
   * https://github.com/cheat/cheat#cheatpaths
   */
  readonly?: boolean;
}