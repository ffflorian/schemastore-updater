/* eslint-disable */

/**
 * https://docs.replit.com/programming-ide/configuring-repl
 */
export interface ReplItConfigSchemaReplit {
  /**
   * Command to run REPL
   */
  run?: string | string[];
  /**
   * Language name used in REPL
   */
  language?:
    | 'clojure'
    | 'haskell'
    | 'kotlin'
    | 'qbasic'
    | 'forth'
    | 'lolcode'
    | 'brainf***'
    | 'emoticon'
    | 'bloop'
    | 'react_native'
    | 'unlambda'
    | 'javascript'
    | 'babel'
    | 'coffeescript'
    | 'scheme'
    | 'apl'
    | 'lua'
    | 'python'
    | 'ruby'
    | 'roy'
    | 'php'
    | 'python3'
    | 'nodejs'
    | 'enzyme'
    | 'go'
    | 'java'
    | 'cpp'
    | 'cpp11'
    | 'c'
    | 'csharp'
    | 'fsharp'
    | 'web_project'
    | 'html'
    | 'rust'
    | 'swift'
    | 'python_turtle'
    | 'basic'
    | 'jest'
    | 'django'
    | 'express'
    | 'sinatra'
    | 'rails'
    | 'rlang'
    | 'nextjs'
    | 'gatsbyjs'
    | 'reactjs'
    | 'reactts'
    | 'reactre'
    | 'flow'
    | 'bash'
    | 'quil'
    | 'polygott'
    | 'crystal'
    | 'julia'
    | 'perl6'
    | 'elixir'
    | 'nim'
    | 'dart'
    | 'gatsbyjsv2'
    | 'reason_nodejs'
    | 'tcl'
    | 'erlang'
    | 'typescript'
    | 'ocaml'
    | 'pygame'
    | 'love2d'
    | 'reason'
    | 'Tkinter'
    | 'tkinter'
    | 'java_swing'
    | 'php_server'
    | 'nodejs_prybar'
    | 'elisp'
    | 'php7'
    | 'sqlite'
    | 'java10'
    | 'php_cli'
    | 'nodejs_beta'
    | 'pyxel'
    | 'static'
    | 'go_beta'
    | 'nodejs_static'
    | 'python3_beta'
    | 'raku'
    | 'testj'
    | 'wasm'
    | 'java10_beta'
    | 'python_beta'
    | 'html_beta'
    | 'testj_beta'
    | 'scala'
    | 'riddlejs'
    | 'java_maven';
  /**
   * Enable/disable system-wide audio in REPL
   */
  audio?: boolean;
  /**
   * Universal Package Manager (UPM) configuration
   */
  packager?: {
    /**
     * Command to run on new package install
     */
    afterInstall?: string;
    /**
     * List of ignored path
     *
     * @minItems 1
     */
    ignoredPaths?: [string, ...string[]];
    /**
     * List of ignored packages
     *
     * @minItems 1
     */
    ignoredPackages?: [string, ...string[]];
    /**
     * Language name
     */
    language?:
      | 'python-python3-poetry'
      | 'python-python2-poetry'
      | 'nodejs-npm'
      | 'nodejs-yarn'
      | 'ruby-bundler'
      | 'elisp-cask'
      | 'dart-pub'
      | 'java-maven'
      | 'rlang'
      | 'dotnet'
      | 'rust';
    /**
     * Universal Package Manager (UPM) features
     */
    features?: {
      /**
       * Enable/disable package search panel
       */
      packageSearch?: boolean;
      /**
       * Enable/disable guessing required packages
       */
      guessImports?: boolean;
    };
  };
  /**
   * Language configuration
   */
  languages?: {
    /**
     * Language configuration
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` ".".
     */
    [k: string]: {
      /**
       * Glob for language files
       */
      glob?: string;
      /**
       * Language Server Protocol (LSP) configuration
       */
      languageServer?: {
        /**
         * Command to run server
         */
        start?: string;
      };
    };
  };
}
