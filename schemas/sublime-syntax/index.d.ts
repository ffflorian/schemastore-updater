/* eslint-disable */

/**
 * @minItems 1
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_-]*$".
 */
export type Patterns = [Pattern, ...Pattern[]];
export type Pattern = MetaPattern | MatchPattern | IncludePattern | PrototypePattern;

/**
 * JSON schema for *.sublime-syntax yaml
 */
export interface SublimeSyntax {
  /**
   * This defines the name shown for the syntax in the menu. It’s optional, and will be derived from the file name if not used.
   */
  name?: string;
  /**
   * A list of strings, defining file extensions this syntax should be used for. Extensions listed here will be shown in file dialog dropdowns on some operating systems. If a file does not have a basename, e.g. .gitignore, the entirety of the filename including the leading . should be specified.
   *
   * @minItems 1
   */
  file_extensions?: [string, ...string[]];
  /**
   * A list of strings, also defining file extensions this syntax should be used for. These extensions are not listed in file dialogs.
   *
   * @minItems 1
   */
  hidden_file_extensions?: [string, ...string[]];
  /**
   * When a file is opened without a recognized extension, the first line of the file contents will be tested against this regex, to see if the syntax should be applied.
   */
  first_line_match?: string;
  /**
   * The default scope assigned to all text in the file
   */
  scope: string;
  version?: 1 | 2;
  /**
   * A string of a base syntax this syntax should inherit from. The base syntax must be specified using its package path, e.g. Packages/JavaScript/JavaScript.sublime-syntax. See Inheritance for an overview of syntax inheritance.
   */
  extends?: string;
  /**
   * Hidden syntax definitions won’t be shown in the menu, but can still be assigned by plugins, or included by other syntax definitions.
   */
  hidden?: boolean;
  /**
   * https://www.sublimetext.com/docs/syntax.html#contexts
   */
  contexts: {
    [k: string]: Patterns;
  };
  /**
   * Variables must be defined at the top level of the .sublime-syntax file, and are referenced within regxes via {{varname}}. Variables may themselves include other variables. Note that any text that doesn’t match {{[A-Za-z0-9_]+}} won’t be considered as a variable, so regexes can still include literal {{ characters, for example.
   * https://www.sublimetext.com/docs/syntax.html#variables
   */
  variables?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[_a-zA-Z][a-zA-Z0-9_]*$".
     */
    [k: string]: string;
  };
  [k: string]: unknown | undefined;
}
/**
 * Meta patterns must be listed first in the context, before any match or include patterns.
 * https://www.sublimetext.com/docs/syntax.html#meta-patterns
 */
export interface MetaPattern {
  /**
   * This assigns the given scope to all text within this context, including the patterns that push the context onto the stack and pop it off.
   */
  meta_scope?: string;
  /**
   * This assigns the given scope to all text within this context, including the patterns that push the context onto the stack and pop it off. But does not apply to the text that triggers the context (e.g., in the above string example, the content scope would not get applied to the quote characters).
   */
  meta_content_scope?: string;
  /**
   * Used to stop the current context from automatically including the prototype context.
   */
  meta_include_prototype?: boolean;
  /**
   * This setting allows removing scope names from the current stack. It can be an integer, or the value true to remove all scope names. It is applied before meta_scope and meta_content_scope. This is typically only used when one syntax is embedding another.
   */
  clear_scopes?: number | boolean;
  /**
   * A boolean, controlling context name conflict resolution during inheritance. If this is specified, the rules in this context will be inserted before any existing rules from a context with the same name in an ancestor syntax definition.
   */
  meta_prepend?: boolean;
  /**
   * A boolean, controlling context name conflict resolution during inheritance. If this is specified, the rules in this context will be inserted after to any existing rules from a context with the same name in an ancestor syntax definition.
   */
  meta_append?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * The following keys control behavior that is exclusive, and only one can be specified per match pattern: push pop set embed branch fail
 * https://www.sublimetext.com/docs/syntax.html#match-patterns
 */
export interface MatchPattern {
  /**
   * The regex used to match against the text. YAML allows many strings to be written without quotes, which can help make the regex clearer, but it's important to understand when you need to quote the regex. If your regex includes the characters #, :, -, {, [ or > then you likely need to quote it. Regexes are only ever run against a single line of text at a time.
   */
  match: string;
  /**
   * The scope assigned to the matched text.
   */
  scope?: string;
  /**
   * A mapping of numbers to scope, assigning scopes to captured portions of the match regex.
   */
  captures?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^\d+$".
     */
    [k: string]: string;
  };
  /**
   * The contexts to push onto the stack. This may be either a single context name, a list of context names, or an inline, anonymous context.
   */
  push?: string | [string, ...string[]] | Patterns;
  /**
   * Pops contexts off the stack. The value true will pop a single context. An integer greater than zero will pop the corresponding number of contexts. The pop key can be combined with push, set, embed and branch. When combined, the specified number of contexts will be popped off of the stack before the other action is performed. For push, embed and branch actions, the pop treats the match as if it were a lookahead, which means the match will not receive the meta_scope of the contexts that are popped.
   */
  pop?: boolean;
  /**
   * Accepts the same arguments as push, but will first pop this context off, and then push the given context(s) onto the stack. Any match will receive the meta_scope of the context being popped and the context being pushed.
   */
  set?: string | [string, ...string[]] | Patterns;
  /**
   * Accepts the name of a single context to push into. While similar to push, it pops out of any number of nested contexts as soon as the escape pattern is found. This makes it an ideal tool for embedding one syntax within another.
   */
  embed?: {
    /**
     * This key is required if embed is used, and is a regex used to exit from the embedded context. Any backreferences in this pattern will refer to capture groups in the match regex.
     */
    escape?: string;
    /**
     * A scope assigned to all text matched after the match and before the escape. Similar in concept to meta_content_scope.
     */
    embed_scope?: string;
    /**
     * A mapping of capture groups to scope names, for the escape pattern. Use capture group 0 to apply a scope to the entire escape match.
     */
    escape_captures?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^\d+$".
       */
      [k: string]: string;
    };
    /**
     * Accepts the names of two or more contexts, which are attempted in order. If a fail action is encountered, the highlighting of the file will be restarted at the character where the branch occurred, and the next context will be attempted.
     */
    branch?: {
      /**
       * This is the unique identifier for the branch and is specified when a match uses the fail action.
       */
      branch_point?: string;
      [k: string]: unknown | undefined;
    };
    /**
     * Accepts the name of a branch_point to rewind to and retry the next context of. If a fail action specifies a branch_point that was never pushed on the stack, or has already been popped off of the stack, it will have no effect.
     */
    fail?: string;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Frequently it’s convenient to include the contents of one context within another. For example, you may define several different contexts for parsing the C language, and almost all of them can include comments. Rather than copying the relevant match patterns into each of these contexts, you can include them.
 * https://www.sublimetext.com/docs/syntax.html#include-patterns
 */
export interface IncludePattern {
  include: string;
  apply_prototype?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * With elements such as comments, it’s so common to include them that it’s simpler to make them included automatically in every context, and just list the exceptions instead. You can do this by creating a context named prototype, it will be included automatically at the top of every other context, unless the context contains the meta_include_prototype key.
 * https://www.sublimetext.com/docs/syntax.html#prototype-context
 */
export interface PrototypePattern {
  meta_include_prototype: boolean;
  [k: string]: unknown | undefined;
}
