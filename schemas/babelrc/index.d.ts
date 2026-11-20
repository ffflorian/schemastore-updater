/* eslint-disable */

export type JSONSchemaForBabel6ConfigurationFiles = Options & {
  /**
   * This is an object of keys that represent different environments. For example, you may have: `{ env: { production: { /* specific options * / } } }` which will use those options when the environment variable BABEL_ENV is set to "production". If BABEL_ENV isn't set then NODE_ENV will be used, if it's not set then it defaults to "development"
   */
  env?: {
    [k: string]: Options | undefined;
  };
  [k: string]: unknown | undefined;
};

export interface Options {
  /**
   * Assumptions that Babel can make in order to produce smaller output
   * https://babeljs.io/docs/options#assumptions
   */
  assumptions?: {
    arrayLikeIsIterable?: boolean;
    constantReexports?: boolean;
    constantSuper?: boolean;
    enumerableModuleMeta?: boolean;
    ignoreFunctionLength?: boolean;
    ignoreToPrimitiveHint?: boolean;
    iterableIsArray?: boolean;
    mutableTemplateObject?: boolean;
    noClassCalls?: boolean;
    noClassPrototypeAssign?: boolean;
    noConstructorPrimitiveReturn?: boolean;
    noDocumentAll?: boolean;
    noIncompleteNsImportDetection?: boolean;
    noNewArrows?: boolean;
    noUninitializedPrivateFieldAccess?: boolean;
    noUninitializedThis?: boolean;
    objectRestNoSymbols?: boolean;
    privateFieldsAsSymbols?: boolean;
    privateFieldsAsProperties?: boolean;
    pureGetters?: boolean;
    setClassMethods?: boolean;
    setComputedProperties?: boolean;
    setPublicClassFields?: boolean;
    setSpreadProperties?: boolean;
    skipForOfIteratorClosing?: boolean;
    superIsCallableConstructor?: boolean;
    [k: string]: boolean | undefined;
  };
  /**
   * Include the AST in the returned object
   */
  ast?: boolean;
  /**
   * Attach a comment after all non-user injected code.
   */
  auxiliaryCommentAfter?: string;
  /**
   * Attach a comment before all non-user injected code.
   */
  auxiliaryCommentBefore?: string;
  /**
   * Whether to search for .babelrc.json files relative to the file being compiled. Only allowed in the root config file
   * https://babeljs.io/docs/options#babelrc
   */
  babelrc?: boolean;
  /**
   * Packages that should be considered root packages when deciding whether to load their .babelrc.json files. Only allowed in the root config file
   * https://babeljs.io/docs/options#babelrcroots
   */
  babelrcRoots?: boolean | string | string[];
  /**
   * Whether to use browserslist config sources, or the path of a browserslist configuration file
   * https://babeljs.io/docs/options#browserslistconfigfile
   */
  browserslistConfigFile?: boolean | string;
  /**
   * The Browserslist environment to use
   * https://babeljs.io/docs/options#browserslistenv
   */
  browserslistEnv?: string;
  /**
   * Enable code generation
   */
  code?: boolean;
  /**
   * Output comments in generated output.
   */
  comments?: boolean;
  /**
   * Do not include superfluous whitespace characters and line terminators. When set to "auto" compact is set to true on input sizes of >500KB.
   */
  compact?: 'auto' | boolean;
  /**
   * If any of these patterns match, the current configuration object is ignored
   * https://babeljs.io/docs/options#exclude
   */
  exclude?: string | string[];
  /**
   * A path to a .babelrc file to extend
   */
  extends?: string;
  /**
   * Filename for use in errors etc.
   */
  filename?: string;
  /**
   * Filename relative to sourceRoot (defaults to "filename")
   */
  filenameRelative?: string;
  /**
   * An object containing the options to be passed down to the Babel code generator
   * https://babeljs.io/docs/options#generatoropts
   */
  generatorOpts?: {
    [k: string]: unknown | undefined;
  };
  /**
   * ANSI highlight syntax error code frames
   */
  highlightCode?: boolean;
  /**
   * Opposite of the "only" option
   */
  ignore?: string | string[];
  /**
   * A synonym for "test"
   * https://babeljs.io/docs/options#include
   */
  include?: string | string[];
  /**
   * If true, attempt to load an input sourcemap from the file itself. If an object is provided, it will be treated as the source map object itself.
   */
  inputSourceMap?:
    | boolean
    | {
        [k: string]: unknown | undefined;
      };
  /**
   * Keep extensions in module ids
   */
  keepModuleIdExtensions?: boolean;
  /**
   * Like compact, but also omits block-end semicolons, () from new Foo() when possible, and may output shorter versions of literals
   * https://babeljs.io/docs/options#minified
   */
  minified?: boolean;
  /**
   * Specify a custom name for module ids.
   */
  moduleId?: string;
  /**
   * If truthy, insert an explicit id for modules. By default, all modules are anonymous. (Not available for common modules)
   */
  moduleIds?: boolean & string;
  /**
   * Optional prefix for the AMD module formatter that will be prepend to the filename on module definitions. (defaults to "sourceRoot")
   */
  moduleRoot?: string;
  /**
   * A glob, regex, or mixed array of both, matching paths to only compile. Can also be an array of arrays containing paths to explicitly match. When attempting to compile a non-matching file it's returned verbatim.
   */
  only?: string | string[];
  /**
   * An array of options that are merged into the current configuration one at a time, usually combined with test, include and exclude
   * https://babeljs.io/docs/options#overrides
   */
  overrides?: Options[];
  /**
   * An object containing the options to be passed down to the Babel parser
   * https://babeljs.io/docs/options#parseropts
   */
  parserOpts?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Instructs Babel to run each of the presets in the presets array as an independent pass
   * https://babeljs.io/docs/options#passperpreset
   */
  passPerPreset?: boolean;
  /**
   * List of plugins to load and use
   */
  plugins?: (
    | string
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ]
  )[];
  /**
   * List of presets (a set of plugins) to load and use
   */
  presets?: (
    | string
    | [
        string,
        {
          [k: string]: unknown | undefined;
        }
      ]
  )[];
  /**
   * Retain line numbers. This will lead to wacky code but is handy for scenarios where you can't use source maps. NOTE: This will obviously not retain the columns.
   */
  retainLines?: boolean;
  /**
   * Set sources[0] on returned source map. (defaults to "filenameRelative")
   */
  sourceFileName?: string;
  /**
   * If truthy, adds a map property to returned output. If set to "inline", a comment with a sourceMappingURL directive is added to the bottom of the returned code. If set to "both" then a map property is returned as well as a source map comment appended.
   */
  sourceMaps?: ('both' | 'inline') | boolean;
  /**
   * Set file on returned source map. (defaults to "filenameRelative")
   */
  sourceMapTarget?: string;
  /**
   * The root from which all sources are relative. (defaults to "moduleRoot")
   */
  sourceRoot?: string;
  /**
   * Whether files are parsed as scripts, ES modules or CommonJS, or detected from their import/export statements
   * https://babeljs.io/docs/options#sourcetype
   */
  sourceType?: ('module' | 'script' | 'commonjs' | 'unambiguous') | string;
  /**
   * The environments you support, as a browserslist query, a list of queries, or an object of minimum versions
   * https://babeljs.io/docs/options#targets
   */
  targets?:
    | string
    | string[]
    | {
        browsers?: string | string[];
        esmodules?: boolean | 'intersect';
        node?: string | number | true;
        [k: string]: string | number | string[] | boolean | 'intersect' | true | undefined;
      };
  /**
   * If all of these patterns fail to match, the current configuration object is ignored
   * https://babeljs.io/docs/options#test
   */
  test?: string | string[];
  [k: string]: unknown | undefined;
}
