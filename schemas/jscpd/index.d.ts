/* eslint-disable */

export type Format =
  | (
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
      | 'gdscript'
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
      | 'razor'
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
      | 'svelte'
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
      | 'txt'
      | 'vbnet'
      | 'velocity'
      | 'verilog'
      | 'vhdl'
      | 'vim'
      | 'visual-basic'
      | 'astro'
      | 'vue'
      | 'wasm'
      | 'wiki'
      | 'xeora'
      | 'xojo'
      | 'xquery'
      | 'yaml'
      | 'abnf'
      | 'agda'
      | 'antlr4'
      | 'apex'
      | 'aql'
      | 'armasm'
      | 'awk'
      | 'bicep'
      | 'bnf'
      | 'cfscript'
      | 'cfml'
      | 'cmake'
      | 'cobol'
      | 'csv'
      | 'cypher'
      | 'dhall'
      | 'dns-zone-file'
      | 'dot'
      | 'ebnf'
      | 'editorconfig'
      | 'excel-formula'
      | 'factor'
      | 'ftl'
      | 'gcode'
      | 'gettext'
      | 'gml'
      | 'go-module'
      | 'hcl'
      | 'hlsl'
      | 'idris'
      | 'ignore'
      | 'jq'
      | 'json5'
      | 'kusto'
      | 'lilypond'
      | 'linker-script'
      | 'llvm'
      | 'log'
      | 'mermaid'
      | 'mongodb'
      | 'n1ql'
      | 'odin'
      | 'openqasm'
      | 'plant-uml'
      | 'powerquery'
      | 'promql'
      | 'purescript'
      | 'qsharp'
      | 'racket'
      | 'regex'
      | 'rego'
      | 'rescript'
      | 'robotframework'
      | 'shell-session'
      | 'smali'
      | 'solidity'
      | 'sparql'
      | 'stata'
      | 'toml'
      | 'turtle'
      | 'typoscript'
      | 'unrealscript'
      | 'uri'
      | 'vala'
      | 'wgsl'
      | 'wolfram'
      | 'zig'
    )
  | string;
export type Reporter =
  | (
      | 'ai'
      | 'badge'
      | 'console'
      | 'console-full'
      | 'consoleFull'
      | 'csv'
      | 'full'
      | 'html'
      | 'json'
      | 'markdown'
      | 'sarif'
      | 'silent'
      | 'threshold'
      | 'xcode'
      | 'xml'
    )
  | string;
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
   * maximum size of source file in bytes to check for duplication (e.g., 102400, 1kb, 1m, 120kb)
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
   * custom mapping from formats to file extensions, as an object or mapping string (e.g. javascript:es,es6;dart:dt); see https://github.com/kucherenko/jscpd/blob/master/FORMATS.md
   */
  formatsExts?:
    | {
        [k: string]: (string[] | string) | undefined;
      }
    | string[]
    | string;
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
   * format or list of formats for which to detect duplication (default: all); see https://github.com/kucherenko/jscpd/blob/master/FORMATS.md
   */
  format?: Format[] | Format;
  /**
   * store used to collect information about code. v4 supports external stores such as leveldb and redis; v5 reports this config field as migrated to the CLI --store flag.
   */
  store?: ('leveldb' | 'redis') | string;
  /**
   * a list of reporters to use to output information about duplication; built-ins include console, consoleFull/console-full, json, xml, csv, html, markdown, badge, sarif, ai, xcode, threshold, and silent; third-party reporters are also supported
   */
  reporters?: Reporter[];
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
   * respect .gitignore files. Enabled by default in current jscpd; set false to opt out in v4 configs.
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
    [k: string]: unknown | undefined;
  };
  /**
   * exit code to use when at least one duplicate code block is detected but threshold is not exceeded
   */
  exitCode?: number;
  /**
   * custom mapping from formats to exact filenames without relying on extensions (e.g. makefile:Makefile,GNUmakefile); see https://github.com/kucherenko/jscpd/blob/master/FORMATS.md
   */
  formatsNames?:
    | {
        [k: string]: (string[] | string) | undefined;
      }
    | string[]
    | string;
  /**
   * v5 alias for format; format or list of formats for which to detect duplication
   */
  formats?: Format[] | Format;
  /**
   * directory used by the v4 store for cache files, useful for isolating parallel LevelDB runs. v5 reports this config field as migrated to the CLI --store-path flag.
   */
  storePath?: string;
  /**
   * v5 config field matching --no-gitignore; do not respect .gitignore files
   */
  noGitignore?: boolean;
  /**
   * v5 config field matching --follow-symlinks; follow symbolic links
   */
  followSymlinks?: boolean;
  /**
   * compatibility alias for noSymlinks with a capital L; prefer noSymlinks or followSymlinks
   */
  noSymLinks?: boolean;
  /**
   * disable ANSI color output
   */
  noColors?: boolean;
  /**
   * suppress tips and promotional messages after detection
   */
  noTips?: boolean;
  /**
   * show debug information and do not run detection in v4; silently ignored by v5 config compatibility handling
   */
  debug?: boolean;
  /**
   * v5 kebab-case alias for minTokens. minimum size of code block in tokens to check for duplication
   */
  'min-tokens'?: number;
  /**
   * v5 kebab-case alias for minLines. minimum size of code block in lines to check for duplication
   */
  'min-lines'?: number;
  /**
   * v5 kebab-case alias for maxLines. maximum size of source file in lines to check for duplication
   */
  'max-lines'?: number;
  /**
   * v5 kebab-case alias for maxSize. maximum size of source file in bytes to check for duplication (e.g., 102400, 1kb, 1m, 120kb)
   */
  'max-size'?: string | number;
  /**
   * v5 kebab-case alias for ignorePattern. ignore code blocks matching these regular expressions
   */
  'ignore-pattern'?: string[];
  /**
   * v5 kebab-case alias for ignoreCase. ignore case of symbols in code (experimental)
   */
  'ignore-case'?: boolean;
  /**
   * v5 kebab-case alias for noGitignore. v5 config field matching --no-gitignore; do not respect .gitignore files
   */
  'no-gitignore'?: boolean;
  /**
   * v5 kebab-case alias for followSymlinks. v5 config field matching --follow-symlinks; follow symbolic links
   */
  'follow-symlinks'?: boolean;
  /**
   * v5 kebab-case alias for skipLocal. skip duplicates within folders; just detect cross-folder duplicates
   */
  'skip-local'?: boolean;
  /**
   * v5 kebab-case alias for exitCode. exit code to use when at least one duplicate code block is detected but threshold is not exceeded
   */
  'exit-code'?: number;
  /**
   * v5 kebab-case alias for noColors. disable ANSI color output
   */
  'no-colors'?: boolean;
  /**
   * v5 kebab-case alias for noTips. suppress tips and promotional messages after detection
   */
  'no-tips'?: boolean;
  /**
   * v5 kebab-case alias for formatsExts. custom mapping from formats to file extensions, as an object or mapping string (e.g. javascript:es,es6;dart:dt); see https://github.com/kucherenko/jscpd/blob/master/FORMATS.md
   */
  'formats-exts'?:
    | {
        [k: string]: (string[] | string) | undefined;
      }
    | string[]
    | string;
  /**
   * v5 kebab-case alias for formatsNames. custom mapping from formats to exact filenames without relying on extensions (e.g. makefile:Makefile,GNUmakefile); see https://github.com/kucherenko/jscpd/blob/master/FORMATS.md
   */
  'formats-names'?:
    | {
        [k: string]: (string[] | string) | undefined;
      }
    | string[]
    | string;
}
