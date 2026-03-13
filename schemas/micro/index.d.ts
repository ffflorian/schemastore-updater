/* eslint-disable */

export interface AMicroEditorConfigSchema {
  /**
   * Whether to use the same indentation as a previous line
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  autoindent?: boolean;
  /**
   * A delay between automatic saves
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  autosave?: number;
  /**
   * Whether attempt to use super user privileges
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  autosu?: boolean;
  /**
   * Whether to backup all open buffers
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  backup?: boolean;
  /**
   * A directory to store backups
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  backupdir?: string;
  /**
   * Whether to show a basename instead of a full path
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  basename?: boolean;
  /**
   * A way to access the system clipboard
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  clipboard?: 'external' | 'terminal' | 'internal';
  /**
   * A position to display a column
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  colorcolumn?: number;
  /**
   * A color scheme
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  colorscheme?:
    | 'atom-dark'
    | 'bubblegum'
    | 'cmc-16'
    | 'cmc-tc'
    | 'darcula'
    | 'default'
    | 'dracula-tc'
    | 'dukedark-tc'
    | 'dukelight-tc'
    | 'dukeubuntu-tc'
    | 'geany'
    | 'gotham'
    | 'gruvbox'
    | 'gruvbox-tc'
    | 'material-tc'
    | 'monokai-dark'
    | 'monokai'
    | 'one-dark'
    | 'railscast'
    | 'simple'
    | 'solarized'
    | 'solarized-tc'
    | 'sunny-day'
    | 'twilight'
    | 'zenburn';
  /**
   * Whether to highlight a line with a cursor with a different color
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  cursorline?: boolean;
  /**
   * Whether to display diff inticators before lines
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  diffgutter?: boolean;
  /**
   * Divider chars for vertical and horizontal splits
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  divchars?: string;
  /**
   * Whether to use inversed color scheme colors for splits
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  divreverse?: boolean;
  /**
   * An encoding used to open and save files
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  encoding?: string;
  /**
   * Whether to add a missing trailing new line
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  eofnewline?: boolean;
  /**
   * Whether to use a fast algorithm to determine whether a file is changed
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  fastdirty?: boolean;
  /**
   * A line ending format
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  fileformat?: 'unix' | 'dos';
  /**
   * A filetype for the current buffer
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  filetype?: string;
  /**
   * Whether to highlight all instances of a searched text after a successful search
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  hlsearch?: boolean;
  /**
   * Whether to enable an incremental search in `Find` prompt
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  incsearch?: boolean;
  /**
   * Whether to perform case-insensitive searches
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  ignorecase?: boolean;
  /**
   * An indentation character
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  indentchar?: string;
  /**
   * Whether to enable a line at the bottom where messages are printed
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  infobar?: boolean;
  /**
   * Whether add a whitespace while using autoindent
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  keepautoindent?: boolean;
  /**
   * Whether to display nano-style key menu at the bottom
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  keymenu?: boolean;
  /**
   * Whether to underline matching braces
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  matchbrace?: boolean;
  /**
   * Whether to create missing directories
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  mkparents?: boolean;
  /**
   * Whether to enable mouse support
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  mouse?: boolean;
  /**
   * Whether to treat characters sent from the terminal in a single chunk as a paste event
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  paste?: boolean;
  /**
   * Whether to extract a line number and a column to open files with from file names
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  parsecursor?: boolean;
  /**
   * Whether to permanently save backups
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  permbackup?: boolean;
  /**
   * A file with list of plugin channels
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  pluginchannels?: string;
  /**
   * Plugin repositories
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  pluginrepos?: string[];
  /**
   * Whether to forbid buffer editing
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  readonly?: boolean;
  /**
   * Whether to remove trailing whitespaces
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  rmtrailingws?: boolean;
  /**
   * Whether to display line numbers
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  ruler?: boolean;
  /**
   * Whether to display relative line numbers
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  relativeruler?: boolean;
  /**
   * Whether to save cursor position in files
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  savecursor?: boolean;
  /**
   * Whether to save command history between closing and re-opening editor
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  savehistory?: boolean;
  /**
   * Whether to save undo after closing file
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  saveundo?: boolean;
  /**
   * Whether to save undo after closing file
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  scrollbar?: boolean;
  /**
   * A margin at which a view starts scrolling when a cursor approaches an edge of a view
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  scrollmargin?: number;
  /**
   * Line count to scroll for one scroll event
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  scrollspeed?: number;
  /**
   * Whether to add a leading whitespace while pasting multiple lines
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  smartpaste?: boolean;
  /**
   * Whether to wrap long lines
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  softwrap?: boolean;
  /**
   * Whether to create a new horizontal split below the current one
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  splitbottom?: boolean;
  /**
   * Whether to create a new vertical split right of the current one
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  splitright?: boolean;
  /**
   * Format string of left-justified part of the statusline
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  statusformatl?: string;
  /**
   * Format string of right-justified part of the statusline
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  statusformatr?: string;
  /**
   * Whether to display a status line
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  statusline?: string;
  /**
   * A super user command
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  sucmd?: string;
  /**
   * Whether to enable a syntax highlighting
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  syntax?: boolean;
  /**
   * Whether to navigate spaces at the beginning of lines as if they are tabs
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  tabmovement?: boolean;
  /**
   * Whether to invert tab character colors
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  tabhighlight?: boolean;
  /**
   * Whether to reverse tab bar colors
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  tabreverse?: boolean;
  /**
   * A tab size
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  tabsize?: number;
  /**
   * Whether to use spaces instead of tabs
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  tabstospaces?: boolean;
  /**
   * Whether to use primary clipboard to copy selections in the background
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  useprimary?: boolean;
  /**
   * Whether to wrap long lines by words
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  wordwrap?: boolean;
  /**
   * Whether to assume that the current terminal is `xterm`
   * https://github.com/zyedidia/micro/blob/master/runtime/help/options.md#options
   */
  xterm?: boolean;
}
