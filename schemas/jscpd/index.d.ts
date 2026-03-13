/* eslint-disable */

export type Format =
  | 'abap'
  | 'actionscript'
  | 'ada'
  | 'apacheconf'
  | 'apl'
  | 'applescript'
  | 'arduino'
  | 'arff'
  | 'asciidoc'
  | 'asm6502'
  | 'aspnet'
  | 'autohotkey'
  | 'autoit'
  | 'bash'
  | 'basic'
  | 'batch'
  | 'bison'
  | 'brainfuck'
  | 'bro'
  | 'c'
  | 'c-header'
  | 'clike'
  | 'clojure'
  | 'coffeescript'
  | 'comments'
  | 'cpp'
  | 'cpp-header'
  | 'crystal'
  | 'csharp'
  | 'csp'
  | 'css-extras'
  | 'css'
  | 'd'
  | 'dart'
  | 'diff'
  | 'django'
  | 'docker'
  | 'eiffel'
  | 'elixir'
  | 'elm'
  | 'erb'
  | 'erlang'
  | 'flow'
  | 'fortran'
  | 'fsharp'
  | 'gedcom'
  | 'gherkin'
  | 'git'
  | 'glsl'
  | 'go'
  | 'graphql'
  | 'groovy'
  | 'haml'
  | 'handlebars'
  | 'haskell'
  | 'haxe'
  | 'hpkp'
  | 'hsts'
  | 'http'
  | 'ichigojam'
  | 'icon'
  | 'inform7'
  | 'ini'
  | 'io'
  | 'j'
  | 'java'
  | 'javascript'
  | 'jolie'
  | 'json'
  | 'jsx'
  | 'julia'
  | 'keymap'
  | 'kotlin'
  | 'latex'
  | 'less'
  | 'liquid'
  | 'lisp'
  | 'livescript'
  | 'lolcode'
  | 'lua'
  | 'makefile'
  | 'markdown'
  | 'markup'
  | 'matlab'
  | 'mel'
  | 'mizar'
  | 'monkey'
  | 'n4js'
  | 'nasm'
  | 'nginx'
  | 'nim'
  | 'nix'
  | 'nsis'
  | 'objectivec'
  | 'ocaml'
  | 'opencl'
  | 'oz'
  | 'parigp'
  | 'pascal'
  | 'perl'
  | 'php'
  | 'plsql'
  | 'powershell'
  | 'processing'
  | 'prolog'
  | 'properties'
  | 'protobuf'
  | 'pug'
  | 'puppet'
  | 'pure'
  | 'python'
  | 'q'
  | 'qore'
  | 'r'
  | 'reason'
  | 'renpy'
  | 'rest'
  | 'rip'
  | 'roboconf'
  | 'ruby'
  | 'rust'
  | 'sas'
  | 'sass'
  | 'scala'
  | 'scheme'
  | 'scss'
  | 'smalltalk'
  | 'smarty'
  | 'soy'
  | 'sql'
  | 'stylus'
  | 'swift'
  | 'tap'
  | 'tcl'
  | 'textile'
  | 'tsx'
  | 'tt2'
  | 'twig'
  | 'typescript'
  | 'vbnet'
  | 'velocity'
  | 'verilog'
  | 'vhdl'
  | 'vim'
  | 'visual-basic'
  | 'wasm'
  | 'url'
  | 'wiki'
  | 'xeora'
  | 'xojo'
  | 'xquery'
  | 'yaml';
export type ColorPreset =
  | 'green'
  | 'blue'
  | 'red'
  | 'yellow'
  | 'orange'
  | 'purple'
  | 'pink'
  | 'grey'
  | 'gray'
  | 'cyan'
  | 'black';
export type ColorHex = string;

export interface HttpsJsonSchemastoreOrgJscpdJson {
  /**
   * minimum size of code block in lines to check for duplication
   */
  minLines?: number;
  /**
   * maximum size of source file in lines to check for duplication
   */
  maxLines?: number;
  /**
   * maximum size of source file in bytes to check for duplication (e.g.,: 1kb, 1mb, 120kb)
   */
  maxSize?: string | number;
  /**
   * minimum size of code block in tokens to check for duplication
   */
  minTokens?: number;
  /**
   * maximum allowed duplicate lines expressed as a percentage; exit with error and exit code 1 when threshold exceeded
   */
  threshold?: number;
  /**
   * custom mapping from formats to file extensions (default: https://github.com/kucherenko/jscpd/blob/master/packages/tokenizer/src/formats.ts); see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  formatsExts?: {
    [k: string]: string[] | undefined;
  };
  /**
   * path to directory for non-console reports
   */
  output?: string;
  /**
   * paths that should be included in duplicate detection (default: [process.cwd()])
   */
  path?: string[];
  /**
   * glob pattern for files that should be included in duplicate detection (e.g., ** /*.txt); only used to filter directories configured via path option
   */
  pattern?: string;
  /**
   * ignore code blocks matching these regular expressions
   */
  ignorePattern?: string[];
  /**
   * mode of detection quality; see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#mode
   */
  mode?: 'mild' | 'strict' | 'weak';
  /**
   * glob pattern for files that should be excluded from duplicate detection
   */
  ignore?: string[];
  /**
   * list of formats for which to detect duplication (default: all); see https://github.com/kucherenko/jscpd/blob/master/supported_formats.md
   */
  format?: Format[];
  /**
   * store used to collect information about code (default: in-memory store); install @jscpd/leveldb-store and use leveldb for big repositories
   */
  store?: 'leveldb' | 'redis';
  /**
   * a list of reporters to use to output information about duplication; see https://github.com/kucherenko/jscpd/blob/master/packages/jscpd/README.md#reporters
   */
  reporters?: (
    | 'xml'
    | 'json'
    | 'csv'
    | 'markdown'
    | 'consoleFull'
    | 'html'
    | 'console'
    | 'silent'
    | 'threshold'
    | 'xcode'
  )[];
  /**
   * get information about authors and dates of duplicated blocks from Git
   */
  blame?: boolean;
  /**
   * do not write duplicate detection progress and result to console
   */
  silent?: boolean;
  /**
   * show full information during duplicate detection
   */
  verbose?: boolean;
  /**
   * use absolute paths in reports
   */
  absolute?: boolean;
  /**
   * do not follow symlinks
   */
  noSymlinks?: boolean;
  /**
   * skip duplicates within folders; just detect cross-folder duplicates
   */
  skipLocal?: boolean;
  /**
   * ignore case of symbols in code (experimental)
   */
  ignoreCase?: boolean;
  /**
   * ignore all files from .gitignore file
   */
  gitignore?: boolean;
  reportersOptions?: {
    badge?: {
      /**
       * output path for duplication level badge (default: path.join(output, 'jscpd-badge.svg'))
       */
      path?: string;
      /**
       * badge subject text (URL-encoding needed for spaces or special characters)
       */
      label?: string;
      /**
       * badge label color (name or RGB code without #); see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
       */
      labelColor?: ColorPreset | ColorHex;
      /**
       * badge value text (URL-encoding needed for spaces or special characters, default: duplication %)
       */
      status?: string;
      /**
       * badge color (name or RGB code without #, default: green if beneath threshold, red if above threshold, grey if threshold not set); see https://github.com/badgen/badgen/blob/master/src/color-presets.ts
       */
      color?: ColorPreset | ColorHex;
      /**
       * badge look: flat or classic
       */
      style?: 'flat' | 'classic';
      /**
       * URL for icon to display in front of badge subject text (e.g., data:image/svg+xml;base64,...)
       */
      icon?: string;
      /**
       * SVG width of icon to display in front of badge subject text; set this if icon is not square
       */
      iconWidth?: number;
      /**
       * size of badge relative to default of 1
       */
      scale?: number;
    };
  };
  /**
   * exit code to use when at least one duplicate code block is detected but threshold is not exceeded
   */
  exitCode?: number;
}
