/* eslint-disable */

/**
 * A comment rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type CommentRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
export type Rule1 = string;
/**
 * Rules
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type Rules = {
  comment?: CommentRuleRegion;
  'comment.line'?: LineCommentRuleRegion;
  'comment.block'?: BlockCommentRuleRegion;
  identifier?: IdentifierRuleRegion;
  'identifier.builtin'?: BuiltinIdentifierRuleRegion;
  'identifier.type'?: TypeIdentifierRuleRegion;
  'identifier.type.builtin'?: BuiltinTypeIdentifierRuleRegion;
  'identifier.callable'?: CallableIdentifierRuleRegion;
  'identifier.callable.builtin'?: BuiltinCallableIdentifierRuleRegion;
  'identifier.macro'?: MacroIdentifierRuleRegion;
  'identifier.macro.builtin'?: BuiltinMacroIdentifierRuleRegion;
  'identifier.var'?: VariableIdentifierRuleRegion;
  'identifier.var.builtin'?: BuiltinVariableIdentifierRuleRegion;
  constant?: ConstantRuleRegion;
  'identifier.null'?: NullIdentifierRuleRegion;
  'constant.bool'?: BoolConstantRuleRegion;
  'constant.bool.true'?: TrueBoolConstantRuleRegion;
  'constant.bool.false'?: FalseBoolConstantRuleRegion;
  'constant.number'?: NumberConstantRuleRegion;
  'constant.number.integer'?: IntegerNumberConstantRuleRegion;
  'constant.number.float'?: FloatNumberConstantRuleRegion;
  'constant.number.complex'?: ComplexNumberConstantRuleRegion;
  'constant.string'?: StringConstantRuleRegion;
  'constant.string.builtin'?: BuiltinStringConstantRuleRegion;
  'constant.string.url'?: UrlStringConstantRuleRegion;
  'constant.string.escape'?: EscapeStringConstantRuleRegion;
  'constant.string.format'?: StringFormatSpecifierConstantRuleRegion;
  statement?: StatementRuleRegion;
  symbol?: SymbolRuleRegion;
  'symbol.brackets'?: BracketSymbolRuleRegion;
  'symbol.operator'?: OperatorSymbolRuleRegion;
  'symbol.tag'?: TagSymbolRuleRegion;
  preproc?: PreprocessorRuleRegion;
  'preproc.shebang'?: ShebangPreprocessorRuleRegion;
  type?: TypeRuleRegion;
  'type.builtin'?: BuiltinTypeRuleRegion;
  'type.keyword'?: KeywordTypeRuleRegion;
  todo?: TodoRegion;
  /**
   * An include
   * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
   */
  include?: string;
  [k: string]: RuleRegion | undefined;
}[];
/**
 * A line comment rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type LineCommentRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A block comment rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BlockCommentRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * An identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type IdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A type rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type TypeIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin type rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinTypeIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A callable identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type CallableIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin callable identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinCallableIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A macro rule
 * Also used for functions
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type MacroIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin macro rule
 * Also used for functions
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinMacroIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A variable identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type VariableIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin variable identifier rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinVariableIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type ConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A null rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type NullIdentifierRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A bool constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BoolConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A true bool constant rule
 * `.builtin` suffix is not used
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type TrueBoolConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A false bool constant rule
 * `.builtin` suffix is not used
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type FalseBoolConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A number constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type NumberConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A integer number constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type IntegerNumberConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A float number constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type FloatNumberConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A complex number constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type ComplexNumberConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A string constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type StringConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin string constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinStringConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A url string constant rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type UrlStringConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A escape string constant rule
 * `.builtin` suffix is not used
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type EscapeStringConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A string format specifier constant rule
 * `.builtin` suffix is not used
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type StringFormatSpecifierConstantRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A statement rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type StatementRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A symbol rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type SymbolRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A bracket symbol rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BracketSymbolRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * An operator symbol rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type OperatorSymbolRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A tag symbol rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type TagSymbolRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A preprocessor rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type PreprocessorRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A shebang preprocessor rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type ShebangPreprocessorRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A type rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type TypeRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A builtin type rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type BuiltinTypeRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A keyword type rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type KeywordTypeRuleRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A todo rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type TodoRegion =
  | Rule1
  | {
      /**
       * A region start
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      start?: string;
      /**
       * A region end
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      end?: string;
      /**
       * Ignored region sequences
       * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
       */
      skip?: string;
      rules?: Rules;
    };
/**
 * A rule
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type RuleRegion =
  | (
      | Rule1
      | {
          /**
           * A region start
           * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
           */
          start?: string;
          /**
           * A region end
           * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
           */
          end?: string;
          /**
           * Ignored region sequences
           * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
           */
          skip?: string;
          rules?: Rules;
        }
    )
  | undefined;
/**
 * Rules
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
 */
export type Rule = {
  comment?: CommentRuleRegion;
  'comment.line'?: LineCommentRuleRegion;
  'comment.block'?: BlockCommentRuleRegion;
  identifier?: IdentifierRuleRegion;
  'identifier.builtin'?: BuiltinIdentifierRuleRegion;
  'identifier.type'?: TypeIdentifierRuleRegion;
  'identifier.type.builtin'?: BuiltinTypeIdentifierRuleRegion;
  'identifier.callable'?: CallableIdentifierRuleRegion;
  'identifier.callable.builtin'?: BuiltinCallableIdentifierRuleRegion;
  'identifier.macro'?: MacroIdentifierRuleRegion;
  'identifier.macro.builtin'?: BuiltinMacroIdentifierRuleRegion;
  'identifier.var'?: VariableIdentifierRuleRegion;
  'identifier.var.builtin'?: BuiltinVariableIdentifierRuleRegion;
  constant?: ConstantRuleRegion;
  'identifier.null'?: NullIdentifierRuleRegion;
  'constant.bool'?: BoolConstantRuleRegion;
  'constant.bool.true'?: TrueBoolConstantRuleRegion;
  'constant.bool.false'?: FalseBoolConstantRuleRegion;
  'constant.number'?: NumberConstantRuleRegion;
  'constant.number.integer'?: IntegerNumberConstantRuleRegion;
  'constant.number.float'?: FloatNumberConstantRuleRegion;
  'constant.number.complex'?: ComplexNumberConstantRuleRegion;
  'constant.string'?: StringConstantRuleRegion;
  'constant.string.builtin'?: BuiltinStringConstantRuleRegion;
  'constant.string.url'?: UrlStringConstantRuleRegion;
  'constant.string.escape'?: EscapeStringConstantRuleRegion;
  'constant.string.format'?: StringFormatSpecifierConstantRuleRegion;
  statement?: StatementRuleRegion;
  symbol?: SymbolRuleRegion;
  'symbol.brackets'?: BracketSymbolRuleRegion;
  'symbol.operator'?: OperatorSymbolRuleRegion;
  'symbol.tag'?: TagSymbolRuleRegion;
  preproc?: PreprocessorRuleRegion;
  'preproc.shebang'?: ShebangPreprocessorRuleRegion;
  type?: TypeRuleRegion;
  'type.builtin'?: BuiltinTypeRuleRegion;
  'type.keyword'?: KeywordTypeRuleRegion;
  todo?: TodoRegion;
  /**
   * An include
   * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-rules
   */
  include?: string;
  [k: string]: RuleRegion | undefined;
}[];

/**
 * A syntax
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#syntax-files
 */
export interface Syntax {
  /**
   * A file type
   * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#filetype-definition
   */
  filetype?: string;
  detect?: DetectionOptions;
  rules?: Rule;
}
/**
 * Detection options
 * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#detect-definition
 */
export interface DetectionOptions {
  /**
   * A file name
   * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#detect-definition
   */
  filename?: string;
  /**
   * A file header
   * https://github.com/zyedidia/micro/blob/master/runtime/help/colors.md#detect-definition
   */
  header?: string;
}
