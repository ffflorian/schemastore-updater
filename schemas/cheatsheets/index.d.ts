/* eslint-disable */

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
    | 'abap'
    | 'algol'
    | 'algol_nu'
    | 'api'
    | 'arduino'
    | 'autumn'
    | 'average'
    | 'base16-snazzy'
    | 'borland'
    | 'bw'
    | 'catppuccin-frappe'
    | 'catppuccin-latte'
    | 'catppuccin-macchiato'
    | 'catppuccin-mocha'
    | 'colorful'
    | 'compat'
    | 'doom-one'
    | 'doom-one2'
    | 'dracula'
    | 'emacs'
    | 'friendly'
    | 'fruity'
    | 'github'
    | 'github-dark'
    | 'gruvbox'
    | 'gruvbox-light'
    | 'hr_high_contrast'
    | 'hrdark'
    | 'igor'
    | 'lovelace'
    | 'manni'
    | 'modus-operandi'
    | 'modus-vivendi'
    | 'monokai'
    | 'monokailight'
    | 'murphy'
    | 'native'
    | 'nord'
    | 'onedark'
    | 'onesenterprise'
    | 'paraiso-dark'
    | 'paraiso-light'
    | 'pastie'
    | 'perldoc'
    | 'pygments'
    | 'rainbow_dash'
    | 'rose-pine'
    | 'rose-pine-dawn'
    | 'rose-pine-moon'
    | 'rrt'
    | 'solarized-dark'
    | 'solarized-dark256'
    | 'solarized-light'
    | 'swapoff'
    | 'tango'
    | 'trac'
    | 'vim'
    | 'vs'
    | 'vulcan'
    | 'witchhazel'
    | 'xcode'
    | 'xcode-dark';
  /**
   * A formatter to format cheatsheets
   * https://github.com/cheat/cheat#cheatpaths
   */
  formatter?: 'terminal' | 'terminal256' | 'terminal16m';
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
  /**
   * A cheatpath path
   * https://github.com/cheat/cheat#cheatpaths
   */
  path?: string;
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
