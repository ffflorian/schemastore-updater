/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JSONSchemaForJSHintConfigurationFiles {
  /**
   * Prohibit the use of bitwise operators (&, |, ^, etc.)
   */
  bitwise?: boolean;
  /**
   * Requires you to always put curly braces around blocks in loops and conditionals
   */
  curly?: boolean;
  /**
   * Prohibits the use of `==` and `!=` in favor of `===` and `!==`
   */
  eqeqeq?: boolean;
  /**
   * The ECMAScript version to which the code must adhere
   */
  esversion?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11;
  /**
   * Requires all `for in` loops to filter object's items with obj.hasOwnProperty()
   */
  forin?: boolean;
  /**
   * Prohibits overwriting prototypes of native objects such as Array, Date and so on
   */
  freeze?: boolean;
  /**
   * Suppresses warnings about declaring variables inside of control structures while accessing them later from the outside
   */
  funcscope?: boolean;
  /**
   * Enables warnings about the use of identifiers which are defined in future versions of JavaScript
   */
  futurehostile?: boolean;
  /**
   * Suppresses warnings about the __iterator__ property.
   */
  iterator?: boolean;
  /**
   * Prohibits the use of a variable before it was defined
   */
  latedef?: true | false | "nofunc";
  /**
   * Prohibits unnecessary clauses within `switch` statements
   */
  leanswitch?: boolean;
  /**
   * Max cyclomatic complexity per function
   */
  maxcomplexity?: boolean | number;
  /**
   * Max depth of nested blocks
   */
  maxdepth?: boolean | number;
  /**
   * Maximum amount of warnings JSHint will produce before giving up
   */
  maxerr?: number;
  /**
   * Max number of formal parameters allowed per function
   */
  maxparams?: boolean | number;
  /**
   * Max number statements per function
   */
  maxstatements?: boolean | number;
  /**
   * Prohibits the use of `arguments.caller` and `arguments.callee`
   */
  noarg?: boolean;
  /**
   * Prohibits the use of the comma operator
   */
  nocomma?: boolean;
  /**
   * Warns about `non-breaking whitespace` characters
   */
  nonbsp?: boolean;
  /**
   * Prohibits the use of constructors for side-effects (without assignment)
   */
  nonew?: boolean;
  /**
   * Suppresses warnings about invalid `typeof`operator values
   */
  notypeof?: boolean;
  /**
   * Async functions resolve on their return value. In most cases, this makes returning the result of an AwaitExpression (which is itself a Promise instance) unnecessary
   */
  noreturnawait?: boolean;
  /**
   * Enables warnings for regular expressions which do not include the 'u' flag
   */
  regexpu?: boolean;
  /**
   * Suppresses warnings about variable shadowing. i.e. declaring a variable that had been already declared somewhere in the outer scope
   */
  shadow?: true | false | "inner" | "outer";
  /**
   * Prohibits the use of the grouping operator when it is not strictly required.
   */
  singleGroups?: boolean;
  /**
   * Requires all code to run in ES5 strict mode
   */
  strict?: true | false | "implied" | "global" | "func";
  /**
   * Warns when a comma is not placed after the last element in an array or object literal
   */
  trailingcomma?: boolean;
  /**
   * Prohibits the use of explicitly undeclared variables
   */
  undef?: boolean;
  /**
   * Warns when you define and never use your variables
   */
  unused?: true | false | "vars" | "strict";
  /**
   * Forbids the use of VariableStatements (`var`) in favor of `let` and `const`
   */
  varstmt?: boolean;
  /**
   * Suppresses warnings about missing semicolons
   */
  asi?: boolean;
  /**
   * Suppresses warnings about the use of assignments in cases where comparisons are expected
   */
  boss?: boolean;
  /**
   * Suppresses warnings about the `debugger` statements in your code
   */
  debug?: boolean;
  /**
   * Tells JSHint that your code uses ES3 array elision elements, or empty elements
   */
  elision?: boolean;
  /**
   * Suppresses warnings about `== null` comparisons
   */
  eqnull?: boolean;
  /**
   * Suppresses warnings about the use of `eval`
   */
  evil?: boolean;
  /**
   * Suppresses warnings about the use of expressions where normally you would expect to see assignments or function calls
   */
  expr?: boolean;
  /**
   * Suppresses warnings about missing semicolons, but only when the semicolon is omitted for the last statement in a one-line block
   */
  lastsemic?: boolean;
  /**
   * Suppresses warnings about functions inside of loops
   */
  loopfunc?: boolean;
  /**
   * Tells JSHint that your code uses Mozilla JavaScript extensions
   */
  moz?: boolean;
  /**
   * Suppresses warnings about generator functions with no `yield` statement in them
   */
  noyield?: boolean;
  /**
   * Prohibits the use of `++` and `--`
   */
  plusplus?: boolean;
  /**
   * Suppresses warnings about the `__proto__` property
   */
  proto?: boolean;
  /**
   * Suppresses warnings about the use of script-targeted URLs
   */
  scripturl?: boolean;
  /**
   * Suppresses warnings about constructions like `new function () { ... };` and `new Object;`
   */
  supernew?: boolean;
  /**
   * Suppresses warnings about possible strict violations when the code is running in strict mode and you use `this` in a non-constructor function
   */
  validthis?: boolean;
  /**
   * Suppresses warnings about the use of the `with` statement
   */
  withstmt?: boolean;
  /**
   * [Environment] Web Browser (window, document, etc)
   */
  browser?: boolean;
  /**
   * [Environment] Browserify
   */
  browserify?: boolean;
  /**
   * [Environment] CouchDB
   */
  couch?: boolean;
  /**
   * [Environment] Development/debugging (alert, confirm, etc)
   */
  devel?: boolean;
  /**
   * [Environment] Dojo Toolkit
   */
  dojo?: boolean;
  /**
   * [Environment] Jasmine unit testing framework
   */
  jasmine?: boolean;
  /**
   * [Environment] jQuery
   */
  jquery?: boolean;
  /**
   * [Environment] Mocha unit testing framework
   */
  mocha?: boolean;
  /**
   * [Environment] ES6 module
   */
  module?: boolean;
  /**
   * [Environment] MooTools
   */
  mootools?: boolean;
  /**
   * [Environment] Node.js
   */
  node?: boolean;
  /**
   * [Environment] Widely adopted globals (escape, unescape, etc)
   */
  nonstandard?: boolean;
  /**
   * [Environment] PhantomJS runtime environment
   */
  phantom?: boolean;
  /**
   * [Environment] Prototype JavaScript framework
   */
  prototypejs?: boolean;
  /**
   * [Environment] Rhino
   */
  rhino?: boolean;
  /**
   * [Environment] Defines globals exposed by the ShellJS library
   */
  shelljs?: boolean;
  /**
   * [Environment] Defines globals for typed array constructors
   */
  typed?: boolean;
  /**
   * [Environment] Web Workers
   */
  worker?: boolean;
  /**
   * [Environment] Windows Scripting Host
   */
  wsh?: boolean;
  /**
   * [Environment] Yahoo User Interface
   */
  yui?: boolean;
  /**
   * Specify a white list of global variables that are not formally defined in the source code
   */
  globals?: {
    /**
     * Name of the global. Set to `true` for read/write, `false` for read-only.
     */
    [k: string]: boolean;
  };
  /**
   * Specify the path to another configuration file to use as a base, relative to the current file
   */
  extends?: string;
  /**
   * Specify the options that should only be applied to files matching a given path pattern
   */
  overrides?: {
    /**
     * The path pattern to apply the given options to
     */
    [k: string]: {
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
