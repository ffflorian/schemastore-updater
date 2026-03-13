/* eslint-disable */

export interface HttpsJsonSchemastoreOrgLuaurcJson {
  languageMode?: 'strict' | 'nonstrict' | 'nocheck';
  lintErrors?: boolean;
  typeErrors?: boolean;
  globals?: string[];
  aliases?: {
    /**
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^(?!\.{1,2}$)(?!.*\/)[a-zA-Z0-9\-\._]+$".
     */
    [k: string]: string;
  };
  lint?: {
    '*'?: boolean;
    UnknownGlobal?: boolean;
    DeprecatedGlobal?: boolean;
    GlobalUsedAsLocal?: boolean;
    LocalShadow?: boolean;
    SameLineStatement?: boolean;
    MultiLineStatement?: boolean;
    LocalUnused?: boolean;
    FunctionUnused?: boolean;
    ImportUnused?: boolean;
    BuiltinGlobalWrite?: boolean;
    PlaceholderRead?: boolean;
    UnreachableCode?: boolean;
    UnknownType?: boolean;
    ForRange?: boolean;
    UnbalancedAssignment?: boolean;
    ImplicitReturn?: boolean;
    DuplicateLocal?: boolean;
    FormatString?: boolean;
    TableLiteral?: boolean;
    UninitializedLocal?: boolean;
    DuplicateFunction?: boolean;
    DeprecatedApi?: boolean;
    TableOperations?: boolean;
    DuplicateCondition?: boolean;
    MisleadingAndOr?: boolean;
    CommentDirective?: boolean;
    IntegerParsing?: boolean;
    ComparisonPrecedence?: boolean;
    RedundantNativeAttribute?: boolean;
  };
}
