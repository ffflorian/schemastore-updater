/* eslint-disable */

/**
 * Removes the rule.
 */
export type NullRule = null;
export type Keywords =
  | (
      | 'break'
      | 'case'
      | 'catch'
      | 'continue'
      | 'debugger'
      | 'default'
      | 'delete'
      | 'do'
      | 'else'
      | 'finally'
      | 'for'
      | 'function'
      | 'if'
      | 'in'
      | 'instanceof'
      | 'new'
      | 'return'
      | 'switch'
      | 'this'
      | 'throw'
      | 'try'
      | 'typeof'
      | 'var'
      | 'void'
      | 'while'
      | 'with'
    )[]
  | null;
export type BlockKeywords =
  | ('catch' | 'do' | 'else' | 'finally' | 'for' | 'function' | 'if' | 'try' | 'while')[]
  | null;
export type Keywords2 = Keywords | boolean;
export type EqualityOperators = ('==' | '===' | '!=' | '!==' | null)[] | boolean | null;

export interface JSONSchemaForJSCSConfigurationFiles {
  /**
   * Path to load additional rules
   */
  additionalRules?: string[];
  /**
   * Requires that a function expression be named. Named functions provide more information in the error stack trace than anonymous functions.  This option does not help if you use Arrow functions (ES6) which are always anonymous.
   */
  disallowAnonymousFunctions?: boolean | null;
  /**
   * Disallows arrow functions.
   */
  disallowArrowFunctions?: boolean | null;
  /**
   * Requires the first alphabetical character of a comment to be lowercase.
   */
  disallowCapitalizedComments?: boolean | null;
  /**
   * Disallows commas as last token on a line in lists.
   */
  disallowCommaBeforeLineBreak?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: 'function'[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows curly braces after statements.
   */
  disallowCurlyBraces?: Keywords | boolean;
  /**
   * Disallows identifiers that start or end in _.  Some popular identifiers are automatically listed as exceptions:  __proto__ (javascript), _ (underscore.js), __filename (node.js global), __dirname (node.js global), super_ (node.js, used by util.inherits).
   */
  disallowDanglingUnderscores?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows empty blocks (except for catch blocks).
   */
  disallowEmptyBlocks?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.  Blocks containing only comments would not be considered empty.
         *
         * @minItems 0
         */
        allExcept?: 'comments'[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows function declarations.
   */
  disallowFunctionDeclarations?: boolean | null;
  /**
   * Disallows identical destructuring names for the key and value in favor of using shorthand destructuring.
   */
  disallowIdenticalDestructuringNames?: boolean | null;
  /**
   * Disallows a specified set of identifier names.
   */
  disallowIdentifierNames?: string[] | NullRule;
  /**
   * Disallows implicit type conversion.
   */
  disallowImplicitTypeConversion?: ('numeric' | 'boolean' | 'binary' | 'string')[] | null;
  /**
   * Disallows one or more keywords in comments.
   */
  disallowKeywordsInComments?: string[] | boolean | NullRule | string;
  /**
   * Disallows placing the specified keywords on a new line.
   */
  disallowKeywordsOnNewLine?:
    | (
        | 'break'
        | 'case'
        | 'catch'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'delete'
        | 'do'
        | 'else'
        | 'finally'
        | 'for'
        | 'function'
        | 'if'
        | 'in'
        | 'instanceof'
        | 'new'
        | 'return'
        | 'switch'
        | 'this'
        | 'throw'
        | 'try'
        | 'typeof'
        | 'var'
        | 'void'
        | 'while'
        | 'with'
      )[]
    | null;
  /**
   * Disallows usage of the specified keywords.
   */
  disallowKeywords?:
    | (
        | 'break'
        | 'case'
        | 'catch'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'delete'
        | 'do'
        | 'else'
        | 'finally'
        | 'for'
        | 'function'
        | 'if'
        | 'in'
        | 'instanceof'
        | 'new'
        | 'return'
        | 'switch'
        | 'this'
        | 'throw'
        | 'try'
        | 'typeof'
        | 'var'
        | 'void'
        | 'while'
        | 'with'
      )[]
    | null;
  /**
   * Requires lines to not contain both spaces and tabs consecutively, or spaces after tabs only for alignment if "smart
   */
  disallowMixedSpacesAndTabs?: boolean | null | 'smart';
  /**
   * Disallows the test, consequent and alternate to be on separate lines when using the ternary operator.
   */
  disallowMultiLineTernary?: boolean | null;
  /**
   * Disallows multiple blank lines in a row.
   */
  disallowMultipleLineBreaks?: boolean | null;
  /**
   * Disallows strings that span multiple lines without using concatenation.
   */
  disallowMultipleLineStrings?: boolean | null;
  /**
   * Disallows multiple indentation characters (tabs or spaces) between identifiers, keywords, and any other token.
   */
  disallowMultipleSpaces?:
    | boolean
    | NullRule
    | {
        allowEOLComments?: boolean | null;
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows multiple `var` declaration (except for-loop).
   */
  disallowMultipleVarDecl?:
    | boolean
    | NullRule
    | {
        strict?: boolean | null;
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('require' | 'undefined') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows unassigned functions to be named inline.
   */
  disallowNamedUnassignedFunctions?: boolean | null;
  /**
   * Disallows nested ternaries.
   */
  disallowNestedTernaries?:
    | boolean
    | NullRule
    | {
        /**
         * The maximum levels of ternary nesting to be allowed.
         */
        maxLevel?: number;
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows newline before opening curly brace of all block statements.
   */
  disallowNewlineBeforeBlockStatements?:
    | BlockKeywords
    | boolean
    | NullRule
    | {
        value?: unknown[] | boolean;
        /**
         * Array of quoted keywords to exempt.  If `multiline` is specified, when the conditions span on multiple lines, require a new line before the curly brace.
         *
         * @minItems 0
         */
        allExcept?: (string | 'multiline')[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallow use of certain node types (from Esprima/ESTree).  Value equals an array of parser node types to be disallowed.
   */
  disallowNodeTypes?:
    | (
        | 'ArrayExpression'
        | 'ArrayPattern'
        | 'ArrowFunctionExpression'
        | 'AssignmentExpression'
        | 'AssignmentPattern'
        | 'BinaryExpression'
        | 'BlockStatement'
        | 'BreakStatement'
        | 'CallExpression'
        | 'CatchClause'
        | 'ClassBody'
        | 'ClassDeclaration'
        | 'ClassExpression'
        | 'ConditionalExpression'
        | 'ContinueStatement'
        | 'DebuggerStatement'
        | 'DoWhileStatement'
        | 'EmptyStatement'
        | 'ExportAllDeclaration'
        | 'ExportDefaultDeclaration'
        | 'ExportNamedDeclaration'
        | 'ExportSpecifier'
        | 'ExpressionStatement'
        | 'ForInStatement'
        | 'ForStatement'
        | 'FunctionDeclaration'
        | 'FunctionExpression'
        | 'Identifier'
        | 'IfStatement'
        | 'ImportDeclaration'
        | 'ImportDefaultSpecifier'
        | 'ImportNamespaceSpecifier'
        | 'ImportSpecifier'
        | 'LabeledStatement'
        | 'Literal'
        | 'LogicalExpression'
        | 'MemberExpression'
        | 'MethodDefinition'
        | 'NewExpression'
        | 'ObjectExpression'
        | 'ObjectPattern'
        | 'Program'
        | 'Property'
        | 'RestElement'
        | 'ReturnStatement'
        | 'SequenceExpression'
        | 'SpreadElement'
        | 'Super'
        | 'SwitchCase'
        | 'SwitchStatement'
        | 'TaggedTemplateExpression'
        | 'TemplateElement'
        | 'TemplateLiteral'
        | 'ThisExpression'
        | 'ThrowStatement'
        | 'TryStatement'
        | 'UnaryExpression'
        | 'UpdateExpression'
        | 'VariableDeclaration'
        | 'VariableDeclarator'
        | 'WhileStatement'
        | 'WithStatement'
      )[]
    | null;
  /**
   * Disallows the not, not equals, and strict not equals operators in conditionals.
   */
  disallowNotOperatorsInConditionals?: boolean | null;
  /**
   * Disallows placing object keys on new line.
   */
  disallowObjectKeysOnNewLine?: boolean | null;
  /**
   * Requires putting certain operators on the next line rather than on the current line before a line break.
   */
  disallowOperatorBeforeLineBreak?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Disallow a newline after blocks.
   */
  disallowPaddingNewLinesAfterBlocks?: boolean | null;
  /**
   * Disallow a blank line after 'use strict'; statements.
   */
  disallowPaddingNewLinesAfterUseStrict?: boolean | null;
  /**
   * Disallows newline before module.exports.
   */
  disallowPaddingNewLinesBeforeExport?: boolean | null;
  /**
   * Disallow an empty line above the specified keywords.
   */
  disallowPaddingNewlinesBeforeKeywords?: Keywords | boolean;
  /**
   * Disallows newline before line comments.
   */
  disallowPaddingNewLinesBeforeLineComments?: boolean | NullRule;
  /**
   * Disallows blocks from beginning or ending with 2 newlines.
   */
  disallowPaddingNewlinesInBlocks?:
    | boolean
    | NullRule
    | {
        /**
         * A value of true validates that there is a newline before the closing brace in a block.  A value of false ignores the newline validation before the closing brace in a block.
         */
        close?: boolean;
        /**
         * A value of true validates that there is a newline after the opening brace in a block.  A value of false ignores the newline validation after the opening brace in a block.
         */
        open?: boolean;
        /**
         * Array of quoted keywords to exempt.  If `conditionals` is specified, conditionals (if, else if, else) blocks are ignored.  If `functions` is specified, function blocks are ignored.
         *
         * @minItems 0
         */
        allExcept?: ('conditionals' | 'functions')[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows newlines adjacent to curly braces in all object literals.
   */
  disallowPaddingNewLinesInObjects?: boolean | null;
  /**
   * Disallows parentheses around arrow function expressions that contain a single parameter.
   */
  disallowParenthesesAroundArrowParam?: boolean | null;
  /**
   * Disallows quoted keys in object if possible.
   */
  disallowQuotedKeysInObjects?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (string | 'reserved')[];
        [k: string]: unknown | undefined;
      }
    | 'allButReserved';
  /**
   * Disallows lines from ending in a semicolon.
   */
  disallowSemicolons?: boolean | null;
  /**
   * Require arrow functions to use a block statement (explicit return).
   */
  disallowShorthandArrowFunctions?: boolean | null;
  /**
   * Requires sticking binary operators to the right.
   */
  disallowSpaceAfterBinaryOperators?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Disallows spaces after commas.
   */
  disallowSpaceAfterComma?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('sparseArrays' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows space after the specified keywords.  A value of true will require spaces after all possible keywords.
   */
  disallowSpaceAfterKeywords?: Keywords | boolean;
  /**
   * Requires that a line comment (//) not be followed by a space.
   */
  disallowSpaceAfterLineComment?: boolean | null;
  /**
   * Disallows space after object keys.
   */
  disallowSpaceAfterObjectKeys?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('singleline' | 'multiline' | 'aligned' | 'method') & string)[];
        [k: string]: unknown | undefined;
      }
    | (('ignoreSingleLine' | 'ignoreMultiLine') & string);
  /**
   * Requires sticking unary operators to the right.
   */
  disallowSpaceAfterPrefixUnaryOperators?: ('++' | '--' | '+' | '-' | '~' | '!')[] | boolean | null;
  /**
   * Requires sticking binary operators to the left.
   */
  disallowSpaceBeforeBinaryOperators?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Disallows space before block statements (for loops, control structures).
   */
  disallowSpaceBeforeBlockStatements?: boolean | null;
  /**
   * Disallows spaces before commas.
   */
  disallowSpaceBeforeComma?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('sparseArrays' & string)[];
        [k: string]: unknown | undefined;
      }
    | ('exceptExports' & string);
  /**
   * Disallows space before keyword.
   */
  disallowSpaceBeforeKeywords?: Keywords | boolean;
  /**
   * Disallows space before object values.
   */
  disallowSpaceBeforeObjectValues?: boolean | null;
  /**
   * Requires sticking unary operators to the left.
   */
  disallowSpaceBeforePostfixUnaryOperators?: ('++' | '--' | '+' | '-' | '~' | '!')[] | boolean | null;
  /**
   * Disallows spaces before semicolons.
   */
  disallowSpaceBeforeSemicolon?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted tokens to exempt (allows whitespace before semicolon if preceded by the specified token).
         *
         * @minItems 0
         */
        allExcept?: (('(' | string) & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Ensure there are no spaces after argument separators in call expressions.
   */
  disallowSpaceBetweenArguments?: boolean | null;
  /**
   * Disallows space before () or {} in anonymous function expressions.
   */
  disallowSpacesInAnonymousFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Disallows space before () in call expressions.
   */
  disallowSpacesInCallExpression?: boolean | null;
  /**
   * Disallows space before and/or after ? or : in conditional expressions.
   */
  disallowSpacesInConditionalExpression?:
    | boolean
    | NullRule
    | {
        afterConsequent?: boolean;
        afterTest?: boolean;
        beforeAlternate?: boolean;
        beforeConsequent?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Disallow spaces in between for statement.
   */
  disallowSpacesInForStatement?: boolean | null;
  /**
   * Disallows space before `()` or `{}` in function expressions (both named and anonymous) and function declarations.
   */
  disallowSpacesInFunction?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Disallows space before () or {} in function declarations.
   */
  disallowSpacesInFunctionDeclaration?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Disallows space before `()` or `{}` in function expressions (both named and anonymous).
   */
  disallowSpacesInFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Disallow space before or after * in generator functions.
   */
  disallowSpacesInGenerator?:
    | NullRule
    | {
        /**
         * A value of true disallows space before *.
         */
        beforeStar?: boolean;
        /**
         * A value of true disallows space after *.
         */
        afterStar?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows space before () or {} in named function expressions
   */
  disallowSpacesInNamedFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Disallows space after opening array square bracket and before closing.  Reports only on arrays, not on property accessors.  Use disallowSpacesInsideBrackets to report on all brackets.
   */
  disallowSpacesInsideArrayBrackets?:
    | (boolean | 'all')
    | NullRule
    | {
        /**
         * Array of quoted tokens to exempt.  Tokens should consist of an opener with a matching closer () {} [] etc.
         *
         * @minItems 0
         */
        allExcept?: (('(' | ')' | '{' | '}' | '[' | ']') & string)[];
        [k: string]: unknown | undefined;
      }
    | ('nested' & string);
  /**
   * Disallows space after opening square bracket and before closing.  Reports on all on brackets, even on property accessors.  Use disallowSpacesInsideArrayBrackets to exclude property accessors.
   */
  disallowSpacesInsideBrackets?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted tokens to exempt.  Tokens should consist of an opener with a matching closer () {} [] etc.
         *
         * @minItems 0
         */
        allExcept?: (('(' | ')' | '{' | '}' | '[' | ']') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows space after opening object curly brace and before closing.
   */
  disallowSpacesInsideObjectBrackets?:
    | (boolean | 'all')
    | NullRule
    | {
        /**
         * Array of quoted tokens to exempt.  Applies only to closer tokens:  e.g. ) } ].  If a (closer) token is specified, the rule ignores contiguous (closer) tokens.
         *
         * @minItems 0
         */
        allExcept?: ((')' | '}' | ']') & string)[];
        [k: string]: unknown | undefined;
      }
    | ('nested' & string);
  /**
   * Disallows space after opening round bracket and before closing.
   */
  disallowSpacesInsideParentheses?:
    | (boolean | 'all')
    | NullRule
    | {
        /**
         * Array of quoted values to target.
         *
         * @minItems 0
         */
        only?: ((('(' | ')' | '{' | '}' | '[' | ']' | 'function') | string) & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows space after opening and before closing grouping parentheses.
   */
  disallowSpacesInsideParenthesizedExpression?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted tokens or items to exempt.  Tokens should consist of an opener with a matching closer () {} [] or `function`.
         *
         * @minItems 0
         */
        allExcept?: (('(' | ')' | '{' | '}' | '[' | ']' | 'function') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows spaces before and after curly brace inside template string placeholders.
   */
  disallowSpacesInsideTemplateStringPlaceholders?: boolean | NullRule;
  /**
   * Disallows tabs everywhere.
   */
  disallowTabs?: boolean | NullRule;
  /**
   * Disallows an extra comma following the final element of an array or object literal.
   */
  disallowTrailingComma?: boolean | NullRule;
  /**
   * Requires all lines to end on a non-whitespace character. Use "ignoreEmptyLines" to allow whitespace on empty lines (default is false).
   */
  disallowTrailingWhitespace?: boolean | 'ignoreEmptyLines' | NullRule;
  /**
   * Disallows unused params in function expression and function declaration.
   */
  disallowUnusedParams?: boolean | NullRule;
  /**
   * Disallows declaring variables with var.
   */
  disallowVar?: boolean | NullRule;
  /**
   * Requires the variable to be the left hand operator when doing a boolean comparison.  Array of quoted operators or true to disallow yoda conditions for most possible comparison operators.
   */
  disallowYodaConditions?: ('==' | '===' | '!=' | '!==' | null)[] | boolean | null;
  /**
   * Disables style checking for specified paths.
   */
  excludeFiles?: string[];
  jsDoc?: JsDoc;
  /**
   * Requires all lines to be at most the number of characters specified.
   */
  maximumLineLength?:
    | number
    | NullRule
    | {
        /**
         * Array of conditions that will exempt a line.
         *
         * @minItems 0
         */
        allExcept?: ('comments' | 'functionSignature' | 'regex' | 'require' | 'urlComments')[];
        /**
         * Considered the tab character as number of specified spaces.
         */
        tabSize?: number;
        /**
         * Lines should be at most the number of characters specified.
         */
        value: number;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires the file to be at most the number of lines specified.
   */
  maximumNumberOfLines?:
    | number
    | NullRule
    | {
        /**
         * Array of conditions that will exempt a line.
         *
         * @minItems 0
         */
        allExcept?: 'comments'[];
        /**
         * Lines should be at most the number of characters specified.
         */
        value: number;
        [k: string]: unknown | undefined;
      };
  /**
   * Extends defined rules with preset rules.
   */
  preset?:
    | 'airbnb'
    | 'crockford'
    | 'google'
    | 'grunt'
    | 'idiomatic'
    | 'jquery'
    | 'mdcs'
    | 'node-style-guide'
    | 'wikimedia'
    | 'wordpress'
    | 'yandex';
  /**
   * Enforces indentation of parameters in multiline functions.
   */
  requireAlignedMultilineParams?: boolean | number | NullRule | 'firstParam';
  /**
   * Requires proper alignment in object literals.
   */
  requireAlignedObjectValues?: NullRule | (('all' | 'ignoreFunction' | 'ignoreLineBreak') & string);
  /**
   * Requires that a function expression be anonymous.
   */
  requireAnonymousFunctions?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: 'declarations'[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires that variable assignment from array values are * destructured.
   */
  requireArrayDestructuring?: boolean | NullRule;
  /**
   * Requires that arrow functions are used instead of anonymous function expressions in callbacks.
   */
  requireArrowFunctions?: boolean | NullRule;
  /**
   * Requires blocks to begin and end with a newline.
   */
  requireBlocksOnNewline?:
    | boolean
    | number
    | NullRule
    | {
        /**
         * If true, includes comments as part of the validation.
         */
        includeComments?: boolean;
        /**
         * Specifies a minimum number of lines containing elements in the block before validating.
         */
        minLines?: number;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires identifiers to be camelCased or UPPERCASE_WITH_UNDERSCORES.
   */
  requireCamelCaseOrUpperCaseIdentifiers?:
    | boolean
    | NullRule
    | {
        /**
         * Array of String, RegExp, or ESTree RegExpLiteral values permitted as exceptions.
         *
         * @minItems 0
         */
        allExcept?: string[];
        /**
         * Array of String, RegExp, or ESTree RegExpLiteral values permitted as prefixes.
         *
         * @minItems 0
         */
        allowedPrefixes?: string[];
        /**
         * Array of String, RegExp, or ESTree RegExpLiteral values permitted as suffixes.
         *
         * @minItems 0
         */
        allowedSuffixes?: string[];
        /**
         * If true, allows an exception for object property names.
         */
        ignoreProperties?: boolean;
        /**
         * If true, forces the first character to not be capitalized.
         */
        strict?: boolean;
        [k: string]: unknown | undefined;
      }
    | 'ignoreProperties';
  /**
   * Requires the first alphabetical character of a comment to be uppercase, unless it is part of a multi-line textblock.  This rule automatically ignores jscs, jshint, eslint, and istanbul specific comments.
   */
  requireCapitalizedComments?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: string[];
        /**
         * If true, ignore comments in the middle of the code line.
         */
        inlined?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires capitalized constructors to to use the new keyword.
   */
  requireCapitalizedConstructorsNew?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires constructors to be capitalized (except for "this")
   */
  requireCapitalizedConstructors?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires commas as last token on a line in lists.
   */
  requireCommaBeforeLineBreak?: boolean | NullRule;
  /**
   * Requires curly braces after statements.  A value of true will require curly braces for all the necessary keywords:  if, else, for, while do, try, catch, case, and default.
   */
  requireCurlyBraces?:
    | Keywords2
    | {
        /**
         * Array of quoted keywords that would require curly braces.
         *
         * @minItems 0
         */
        keywords?: string[];
        /**
         * Array of quoted keywords to exempt.  Allows not using braces in some instances; ex.  /*allowed:* / if (x) return; /* not allowed* / if (x) i++; given "allExcept": ["return", "continue", "break", ...],
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Require a $ before variable names that are jquery assignments.
   */
  requireDollarBeforejQueryAssignment?: boolean | 'ignoreProperties' | NullRule;
  /**
   * Requires member expressions to use dot notation when possible.
   */
  requireDotNotation?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('keywords' | 'snake_case') & string)[];
        [k: string]: unknown | undefined;
      }
    | ('except_snake_case' & string);
  /**
   * Requires early return in a function.
   */
  requireEarlyReturn?: boolean | NullRule;
  /**
   * Requires declaring objects via ES6 enhanced object literals.
   */
  requireEnhancedObjectLiterals?: boolean | NullRule;
  /**
   * Requires function declarations by disallowing assignment of functions expressions to variables. Function expressions are allowed in all other contexts, including when passed as function arguments or immediately invoked.  Assignment of function expressions to object members is also permitted, since these can't be declared.
   */
  requireFunctionDeclarations?: boolean | NullRule;
  /**
   * Requires imports to be alphabetized (A-Z).
   */
  requireImportAlphabetized?: boolean | NullRule;
  /**
   * Requires placing the specified keywords on a new line.
   */
  requireKeywordsOnNewLine?:
    | (
        | 'break'
        | 'case'
        | 'catch'
        | 'continue'
        | 'debugger'
        | 'default'
        | 'delete'
        | 'do'
        | 'else'
        | 'finally'
        | 'for'
        | 'function'
        | 'if'
        | 'in'
        | 'instanceof'
        | 'new'
        | 'return'
        | 'switch'
        | 'this'
        | 'throw'
        | 'try'
        | 'typeof'
        | 'var'
        | 'void'
        | 'while'
        | 'with'
      )[]
    | null;
  /**
   * Requires placing line feed after assigning a variable.
   */
  requireLineBreakAfterVariableAssignment?: boolean | NullRule;
  /**
   * Requires placing line feed at file end.
   */
  requireLineFeedAtFileEnd?: boolean | NullRule;
  /**
   * Requires function names to match member and property names.  It doesn't affect anonymous functions nor functions assigned to members or properties named with a reserved word.  Assigning to module.exports is also ignored, unless includeModuleExports: true is configured.
   */
  requireMatchingFunctionName?:
    | boolean
    | NullRule
    | {
        includeModuleExports?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires the test, consequent and alternate to be on separate lines when using the ternary operator.
   */
  requireMultiLineTernary?: boolean | NullRule;
  /**
   * Requires multiple `var` declaration.
   */
  requireMultipleVarDecl?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('require' & string)[];
        [k: string]: unknown | undefined;
      }
    | 'onevar';
  /**
   * Require unassigned functions to be named inline.
   */
  requireNamedUnassignedFunctions?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires newline before opening curly brace of all block statements.  If true, always requires newline before curly brace of block statements.  Array specifies block-type keywords after which newlines are required before curly brace.
   */
  requireNewlineBeforeBlockStatements?: Keywords | boolean;
  /**
   * Requires use of binary, hexadecimal, and octal literals instead of parseInt.
   */
  requireNumericLiterals?: boolean | NullRule;
  /**
   * Requires variable declarations from objects via destructuring.
   */
  requireObjectDestructuring?: boolean | NullRule;
  /**
   * Requires placing object keys on new line.
   */
  requireObjectKeysOnNewLine?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('sameLine' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires operators to appear before line breaks and not after.
   */
  requireOperatorBeforeLineBreak?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Requires an extra blank newline after var declarations, as long as it is not the last expression in the current block.
   */
  requirePaddingNewLineAfterVariableDeclaration?: boolean | NullRule;
  /**
   * Requires newline after blocks.
   */
  requirePaddingNewLinesAfterBlocks?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('inCallExpressions' | 'inNewExpressions' | 'inArrayExpressions' | 'inProperties') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires a blank line after 'use strict'; statements.
   */
  requirePaddingNewLinesAfterUseStrict?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('require' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires newline before module.exports.
   */
  requirePaddingNewLinesBeforeExport?: boolean | NullRule;
  /**
   * Requires an empty line above the specified keywords unless the keyword is the first expression in a block.  If true, specifies that the spacedKeywords found in the utils module require an empty line above it.  Array values indicate keywords that require an empty line above it.
   */
  requirePaddingNewlinesBeforeKeywords?: Keywords | boolean;
  /**
   * Requires newline before line comments.
   */
  requirePaddingNewLinesBeforeLineComments?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('firstAfterCurly' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires blocks to begin and end with 2 newlines.
   */
  requirePaddingNewlinesInBlocks?:
    | boolean
    | number
    | NullRule
    | {
        /**
         * If true, validates that there is a newline after the opening brace in a block.
         */
        open?: boolean;
        /**
         * If true, validates that there is a newline before the closing brace in a block.
         */
        close?: boolean;
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('conditionals' | 'functions') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires newline inside curly braces of all objects.
   */
  requirePaddingNewLinesInObjects?: boolean | NullRule;
  /**
   * Requires parentheses around arrow function expressions with a single parameter.
   */
  requireParenthesesAroundArrowParam?: boolean | NullRule;
  /**
   * Requires parentheses around immediately invoked function expressions.
   */
  requireParenthesesAroundIIFE?: boolean | NullRule;
  /**
   * Requires quoted keys in objects.
   */
  requireQuotedKeysInObjects?: boolean | NullRule;
  /**
   * Requires semicolon after:  var declaration, expression statement, return, throw, break, continue, do-while.
   */
  requireSemicolons?: boolean | NullRule;
  /**
   * Require arrow functions to use an expression body when returning a single statement (no block statement, implicit return).
   */
  requireShorthandArrowFunctions?: boolean | NullRule;
  /**
   * Disallows sticking binary operators to the right.
   */
  requireSpaceAfterBinaryOperators?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Requires space after comma.
   */
  requireSpaceAfterComma?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('trailing' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires space after the specified keywords.  A value of true will disallow spaces after all possible keywords.
   */
  requireSpaceAfterKeywords?: Keywords | boolean;
  /**
   * Requires that a line comment (`//`) be followed by a space.
   */
  requireSpaceAfterLineComment?:
    | boolean
    | NullRule
    | {
        /**
         * Array of allowed strings before space.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      }
    | ('allowSlash' & string);
  /**
   * Requires space after object keys.
   */
  requireSpaceAfterObjectKeys?: boolean | NullRule;
  /**
   * Disallows sticking unary operators to the right.
   */
  requireSpaceAfterPrefixUnaryOperators?: ('++' | '--' | '+' | '-' | '~' | '!')[] | boolean | null;
  /**
   * Disallows sticking binary operators to the left.
   */
  requireSpaceBeforeBinaryOperators?:
    | (
        | ','
        | ':'
        | '?'
        | '^'
        | '^='
        | '|'
        | '||'
        | '|='
        | '&'
        | '&&'
        | '&='
        | '+'
        | '+='
        | '-'
        | '-='
        | '%'
        | '%='
        | '/'
        | '/='
        | '*'
        | '*='
        | '='
        | '=='
        | '==='
        | '!='
        | '!=='
        | '>'
        | '>>'
        | '>>>'
        | '>='
        | '>>='
        | '>>>='
        | '<'
        | '<<'
        | '<='
        | '<<='
        | null
      )[]
    | boolean
    | null;
  /**
   * Requires space before block statements (for loops, control structures).
   */
  requireSpaceBeforeBlockStatements?: boolean | NullRule | number;
  /**
   * Requires a space before a comma.
   */
  requireSpaceBeforeComma?: boolean | NullRule;
  /**
   * Requires a space before a keyword.
   */
  requireSpaceBeforeKeywords?:
    | BlockKeywords
    | boolean
    | NullRule
    | {
        /**
         * Array of allowed strings before space.
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires space after object keys.
   */
  requireSpaceBeforeObjectValues?: boolean | NullRule;
  /**
   * Disallows sticking unary operators to the left.
   */
  requireSpaceBeforePostfixUnaryOperators?: ('++' | '--' | '+' | '-' | '~' | '!')[] | boolean | null;
  /**
   * Ensure there are spaces after argument separators in call expressions.
   */
  requireSpaceBetweenArguments?: boolean | NullRule;
  /**
   * Requires space before `()` or `{}` in function expressions (both named and anonymous).
   */
  requireSpacesInAnonymousFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    /**
     * A boolean or an array of quoted exceptions.
     */
    allExcept?: boolean | NullRule | ('shorthand' & string)[];
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Requires space before `()` in call expressions.
   */
  requireSpacesInCallExpression?: boolean | NullRule;
  /**
   * Requires space before and/or after `?` or `:` in conditional expressions.
   */
  requireSpacesInConditionalExpression?:
    | boolean
    | NullRule
    | {
        afterTest?: boolean;
        beforeConsequent?: boolean;
        afterConsequent?: boolean;
        beforeAlternate?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires spaces in between `for` statement.
   */
  requireSpacesInForStatement?: boolean | NullRule;
  /**
   * Requires space before `()` or `{}` in function expressions (both named and anonymous) and function declarations.
   */
  requireSpacesInFunction?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Requires space before `()` or `{}` in function declarations.
   */
  requireSpacesInFunctionDeclaration?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Requires space before `()` or `{}` in function expressions (both named and anonymous).
   */
  requireSpacesInFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Requires space before and after `*` in generator functions.
   */
  requireSpacesInGenerator?:
    | NullRule
    | {
        /**
         * If true, validates that there is a space before `*`.
         */
        beforeStar?: boolean;
        /**
         * If true, validates that there is a space after `*`.
         */
        afterStar?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires space before `()` or `{}` in named function expressions.
   */
  requireSpacesInNamedFunctionExpression?: {
    beforeOpeningRoundBrace?: boolean | null;
    beforeOpeningCurlyBrace?: boolean | null;
    [k: string]: unknown | undefined;
  } | null;
  /**
   * Requires space after opening array square bracket and before closing.  Reports only on arrays, not on property accessors.  Use requireSpacesInsideBrackets to report on all brackets.
   */
  requireSpacesInsideArrayBrackets?:
    | NullRule
    | {
        /**
         * Array of quoted tokens that can occur after an opening square bracket or before a closing square bracket without a space.
         *
         * @minItems 0
         */
        allExcept?: (('{' | '}' | '[' | ']') & string)[];
        [k: string]: unknown | undefined;
      }
    | (('all' | 'allButNested') & string);
  /**
   * Requires space after opening square bracket and before closing.  Reports on all on brackets, even on property accessors.  Use requireSpacesInsideArrayBrackets to exclude property accessors.
   */
  requireSpacesInsideBrackets?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted tokens that can occur after an opening square bracket or before a closing square bracket without a space.
         *
         * @minItems 0
         */
        allExcept?: (('{' | '}' | '[' | ']') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires space after opening object curly brace and before closing.
   */
  requireSpacesInsideObjectBrackets?:
    | NullRule
    | {
        /**
         * Array of quoted tokens that can occur after an opening object brace or before a closing object brace without a space.
         *
         * @minItems 0
         */
        allExcept?: (('(' | ')' | '{' | '}' | '[' | ']') & string)[];
        [k: string]: unknown | undefined;
      }
    | (('all' | 'allButNested') & string);
  /**
   * Requires space after opening round bracket and before closing.
   */
  requireSpacesInsideParentheses?:
    | NullRule
    | {
        all?: boolean;
        ignoreParenthesizedExpression?: boolean;
        /**
         * Array of quoted tokens that can occur after an opening bracket or before a closing bracket without a space.
         *
         * @minItems 0
         */
        except?: ((('(' | ')' | '{' | '}' | '[' | ']') | string) & string)[];
        [k: string]: unknown | undefined;
      }
    | (('all' | 'allButNested') & string);
  /**
   * Requires space after opening and before closing grouping parentheses.
   */
  requireSpacesInsideParenthesizedExpression?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('{' | '}' | 'function') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Disallows using `.apply` in favor of the spread operator.
   */
  requireSpread?: boolean | NullRule;
  /**
   * Requires the use of template strings instead of string concatenation.
   */
  requireTemplateStrings?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: ('stringConcatenation' & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Requires an extra comma following the final element of an array or object literal.
   */
  requireTrailingComma?:
    | boolean
    | NullRule
    | {
        /**
         * If true, allows single property objects and single element arrays to not require a trailing comma.
         */
        ignoreSingleValue?: boolean;
        /**
         * If true, allows objects and arrays on a single line to not require a trailing comma.
         */
        ignoreSingleLine?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Requires `var` declaration to be on the top of an enclosing scope.
   */
  requireVarDeclFirst?: boolean | NullRule;
  /**
   * Requires the variable to be the right hand operator when doing a boolean comparison.  An array of quoted operators can be supplied to indicate which operators requires yoda conditions.
   */
  requireYodaConditions?: EqualityOperators | boolean | NullRule;
  /**
   * Option to check `var that = this` expressions.
   */
  safeContextKeyword?: string[] | NullRule | string;
  /**
   * Validates proper alignment of function parameters.
   */
  validateAlignedFunctionParameters?:
    | boolean
    | NullRule
    | {
        /**
         * If true, specifies that the first function parameter must not be on the same line as the opening parenthesis `(` of the function parameters list.
         */
        lineBreakAfterOpeningBrace?: boolean;
        /**
         * If true, specifies that the last function parameter must not be on the same line as the closing parenthesis `)` of the function parameters list.
         */
        lineBreakBeforeClosingBrace?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * This rule is for validating the positioning of line comments.  Block comments are ignored.  Comments that start with the following keywords are also ignored:  `eslint`, `jshint`, `jslint`, `istanbul`, `global`, `exported`, `jscs`, `falls through` eg. // jshint strict: true
   */
  validateCommentPosition?:
    | NullRule
    | {
        position?: 'above' | 'beside';
        /**
         * Array of quoted exceptions (comments that start with these values will be excepted).
         *
         * @minItems 0
         */
        allExcept?: string[];
        [k: string]: unknown | undefined;
      };
  /**
   * Validates indentation for switch statements and block statements.
   */
  validateIndentation?:
    | string
    | number
    | NullRule
    | {
        value: number | string;
        /**
         * Deprecated.  Require empty lines to be indented.
         */
        includeEmptyLines?: boolean;
        /**
         * Array of quoted exceptions.
         *
         * @minItems 0
         */
        allExcept?: (('comments' | 'emptyLines') & string)[];
        [k: string]: unknown | undefined;
      };
  /**
   * Option to check line break characters.
   */
  validateLineBreaks?:
    | NullRule
    | {
        character?: 'CR' | 'LF' | 'CRLF';
        /**
         * If true, specifies that validation for the file should stop running upon encountering the first rule violation and return the details of that violation in the report.
         */
        reportOncePerFile?: boolean;
        [k: string]: unknown | undefined;
      }
    | ('CR' | 'LF' | 'CRLF');
  /**
   * Requires each element in array on a single line when array length is more than passed maximum number or array fills more than one line.
   */
  validateNewlineAfterArrayElements?:
    | boolean
    | number
    | NullRule
    | {
        maximum?: number;
        /**
         * If true, specifies that the `[` and `]` brackets can be placed on the same line as the array elements.
         */
        ignoreBrackets?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
   * Validates the order in object keys.
   */
  validateOrderInObjectKeys?:
    | boolean
    | NullRule
    | (('asc' | 'asc-insensitive' | 'asc-natural' | 'desc' | 'desc-insensitive' | 'desc-natural') & string);
  /**
   * Enable validation of separators between function parameters.  Will ignore newlines.
   */
  validateParameterSeparator?: NullRule | ((',' | ', ' | ' ,' | ' , ') & string);
  /**
   * Requires all quote marks to be either the supplied value, or consistent if `true`.
   */
  validateQuoteMarks?:
    | boolean
    | NullRule
    | {
        /**
         * Allow the "other" quote mark to be used, but only to avoid having to escape.
         */
        escape?: boolean;
        /**
         * The same effect as the non-object values.
         */
        mark?: ('"' | "'") & string;
        /**
         * Ignore JSX nodes.
         */
        ignoreJSX?: boolean;
        [k: string]: unknown | undefined;
      }
    | (('"' | "'") & string);
  [k: string]: unknown | undefined;
}
/**
 * Validate jsdoc comments.
 */
export interface JsDoc {
  /**
   * Checks whether tag names are valid.
   */
  checkAnnotations?:
    | boolean
    | NullRule
    | {
        preset?: ('closurecompiler' | 'jsdoc3' | 'jsduck5') & string;
        /**
         * Add custom tags with the extra field.  The extra field should contain tags in keys with true, false, or "some" for the values.
         */
        extra?: {
          [k: string]: (boolean | 'some') | undefined;
        };
        [k: string]: unknown | undefined;
      }
    | (('closurecompiler' | 'jsdoc3' | 'jsduck5') & string);
  /**
   * Checks whether all parameters are documented.
   */
  checkParamExistence?: boolean | null;
  /**
   * Checks whether param names in jsdoc and in function declaration are equal.
   */
  checkParamNames?: boolean | null;
  /**
   * Checks whether params in jsdoc contains type.
   */
  requireParamTypes?: boolean | null;
  /**
   * Reports redundant params in jsdoc.
   */
  checkRedundantParams?: boolean | null;
  /**
   * Checks for differences between the jsdoc and actual return types if both exist.
   */
  checkReturnTypes?: boolean | null;
  /**
   * Report statements for functions without a return, which are described with an @return tag.
   */
  checkRedundantReturns?: boolean | null;
  /**
   * Checks whether @returns in jsdoc contains type.
   */
  requireReturnTypes?: boolean | null;
  /**
   * Reports invalid types for bunch of tags.
   */
  checkTypes?: boolean | NullRule | (('strictNativeCase' | 'capitalizedNativeCase') & string);
  /**
   * Reports redundant access declarations.
   */
  checkRedundantAccess?: boolean | NullRule | (('enforceLeadingUnderscore' | 'enforceTrailingUnderscore') & string);
  /**
   * Checks whether access declaration is set for _underscored function names.  Ignores a bunch of popular identifiers: __filename, __dirname, __proto__, __defineGetter__, super_, __constructor, etc.
   */
  leadingUnderscoreAccess?: boolean | NullRule | (('private' | 'protected') & string);
  /**
   * Checks whether jsdoc block exists.
   */
  enforceExistence?:
    | boolean
    | NullRule
    | {
        /**
         * Array of quoted keywords to exempt.
         *
         * @minItems 0
         */
        allExcept?: (('expressions' | 'exports' | 'paramless-procedures') & string)[];
        [k: string]: unknown | undefined;
      }
    | ('exceptExports' & string);
  /**
   * Checks whether a jsdoc param description has a hyphen before it (checks for -).
   */
  requireHyphenBeforeDescription?: boolean | null;
  /**
   * Checks whether a jsdoc comment description has a padding (trailing) newline separator between it and additional @tags.
   */
  requireNewlineAfterDescription?: boolean | null;
  /**
   * Checks whether a jsdoc comment description has no padding (trailing) newline separator between it and additional @tags.
   */
  disallowNewlineAfterDescription?: boolean | null;
  /**
   * Checks whether a jsdoc comment description is a complete sentence.  A complete sentence is defined as starting with an upper case letter and ending with a period.
   */
  requireDescriptionCompleteSentence?: boolean | null;
  /**
   * Checks whether a jsdoc param description exists.
   */
  requireParamDescription?: boolean | null;
  /**
   * Checks whether a jsdoc return description exists.
   */
  requireReturnDescription?: boolean | null;
  [k: string]: unknown | undefined;
}
