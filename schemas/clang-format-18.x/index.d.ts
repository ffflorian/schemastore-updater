/* eslint-disable */

/**
 * The .clang-format file is a YAML file defining formatting styles used by clang-format.

 see https://clang.llvm.org/docs/ClangFormatStyleOptions.html
 */
export interface ClangFormatConfig {
  /**
   * The style used for all options not specifically set in the configuration.
   */
  BasedOnStyle?:
    | 'Chromium'
    | 'Google'
    | 'LLVM'
    | 'Mozilla'
    | 'WebKit'
    | 'Microsoft'
    | 'GNU'
    | 'InheritParentConfig'
    | 'chromium'
    | 'google'
    | 'llvm'
    | 'mozilla'
    | 'webkit'
    | 'microsoft'
    | 'gnu'
    | 'inheritparentconfig';
  /**
 * clang-format 3.3

 The extra indent or outdent of access modifiers, e.g. public:.
 */
  AccessModifierOffset?: number;
  /**
 * clang-format 3.8

 This applies to round brackets (parentheses), angle brackets and square brackets.
 */
  AlignAfterOpenBracket?: 'Align' | 'DontAlign' | 'AlwaysBreak' | 'BlockIndent';
  /**
 * clang-format 13

 if not None, when using initialization for an array of structs aligns the fields into columns.

 NOTE: In clang-format 15 this option only applied to arrays with equal number of columns per row.
 */
  AlignArrayOfStructures?: 'None' | 'Left' | 'Right';
  AlignConsecutiveMacros?:
    | ('None' | 'Consecutive' | 'AcrossEmptyLines' | 'AcrossComments' | 'AcrossEmptyLinesAndComments')
    | {
        /**
         * Whether aligning is enabled.
         */
        Enabled?: boolean;
        /**
         * Whether to align across empty lines.
         */
        AcrossEmptyLines?: boolean;
        /**
         * Whether to align across comments.
         */
        AcrossComments?: boolean;
        [k: string]: unknown | undefined;
      };
  AlignConsecutiveAssignments?:
    | ('None' | 'Consecutive' | 'AcrossEmptyLines' | 'AcrossComments' | 'AcrossEmptyLinesAndComments')
    | {
        /**
         * Whether aligning is enabled.
         */
        Enabled?: boolean;
        /**
         * Whether to align across empty lines.
         */
        AcrossEmptyLines?: boolean;
        /**
         * Whether to align across comments.
         */
        AcrossComments?: boolean;
        /**
         * Whether compound assignments like += are aligned along with =.
         */
        AlignCompound?: boolean;
        /**
         * Whether short assignment operators are left-padded to the same length as long ones in order to put all assignment operators to the right of the left hand side.
         */
        PadOperators?: boolean;
        [k: string]: unknown | undefined;
      };
  AlignConsecutiveBitFields?:
    | ('None' | 'Consecutive' | 'AcrossEmptyLines' | 'AcrossComments' | 'AcrossEmptyLinesAndComments')
    | {
        /**
         * Whether aligning is enabled.
         */
        Enabled?: boolean;
        /**
         * Whether to align across empty lines.
         */
        AcrossEmptyLines?: boolean;
        /**
         * Whether to align across comments.
         */
        AcrossComments?: boolean;
        [k: string]: unknown | undefined;
      };
  AlignConsecutiveDeclarations?:
    | ('None' | 'Consecutive' | 'AcrossEmptyLines' | 'AcrossComments' | 'AcrossEmptyLinesAndComments')
    | {
        /**
         * Whether aligning is enabled.
         */
        Enabled?: boolean;
        /**
         * Whether to align across empty lines.
         */
        AcrossEmptyLines?: boolean;
        /**
         * Whether to align across comments.
         */
        AcrossComments?: boolean;
        /**
         * Whether function pointers are aligned.
         */
        AlignFunctionPointers?: boolean;
        [k: string]: unknown | undefined;
      };
  /**
 * clang-format 17

 Style of aligning consecutive short case labels.
 */
  AlignConsecutiveShortCaseStatements?: {
    /**
     * Whether aligning is enabled.
     */
    Enabled?: boolean;
    /**
     * Whether to align across empty lines.
     */
    AcrossEmptyLines?: boolean;
    /**
     * Whether to align across comments.
     */
    AcrossComments?: boolean;
    /**
     * Whether aligned case labels are aligned on the colon or on the tokens after the colon.
     */
    AlignCaseColons?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 5

 Options for aligning backslashes in escaped newlines.
 */
  AlignEscapedNewlines?: 'Left' | 'Right' | 'DontAlign';
  /**
 * clang-format 3.5

 If true, horizontally align operands of binary and ternary expressions.
 */
  AlignOperands?: 'Align' | 'DontAlign' | 'AlignAfterOperator';
  AlignTrailingComments?:
    | boolean
    | {
        /**
         * Specifies the way to align trailing comments.
         */
        Kind?: 'Leave' | 'Always' | 'Never';
        /**
         * How many empty lines to apply alignment.
         */
        OverEmptyLines?: number;
        [k: string]: unknown | undefined;
      };
  /**
 * clang-format 9

 If a function call or braced initializer list doesn't fit on a line, allow putting all arguments onto the next line, even if BinPackArguments is false.
 */
  AllowAllArgumentsOnNextLine?: boolean;
  /**
 * clang-format 9

 This option is deprecated in clang-format 15. See NextLine of PackConstructorInitializers.

 If a constructor definition with a member initializer list doesn't fit on a single line, allow putting all member initializers onto the next line, if `ConstructorInitializerAllOnOneLineOrOnePerLine` is true. Note that this parameter has no effect if `ConstructorInitializerAllOnOneLineOrOnePerLine` is false.
 */
  AllowAllConstructorInitializersOnNextLine?: boolean;
  /**
 * clang-format 3.3

 If the function declaration doesn't fit on a line, allow putting all parameters of a function declaration onto the next line even if BinPackParameters is false.
 */
  AllowAllParametersOfDeclarationOnNextLine?: boolean;
  /**
 * clang-format 18

 Controls if there could be a line break before a noexcept specifier.
 */
  AllowBreakBeforeNoexceptSpecifier?: 'Never' | 'OnlyWithParen' | 'Always';
  /**
 * clang-format 11

 Allow short enums on a single line.
 */
  AllowShortEnumsOnASingleLine?: boolean;
  /**
 * clang-format 3.5

 Dependent on the value, while (true) { continue; } can be put on a single line.
 */
  AllowShortBlocksOnASingleLine?: 'Never' | 'Empty' | 'Always';
  /**
 * clang-format 3.6

 If true, short case labels will be contracted to a single line.
 */
  AllowShortCaseLabelsOnASingleLine?: boolean;
  /**
 * clang-format 18

 Allow short compound requirement on a single line.
 */
  AllowShortCompoundRequirementOnASingleLine?: boolean;
  /**
 * clang-format 3.5

 Dependent on the value, int f() { return 0; } can be put on a single line.
 */
  AllowShortFunctionsOnASingleLine?: 'All' | 'None' | 'Inline' | 'Empty' | 'InlineOnly';
  /**
 * clang-format 9

 Dependent on the value, auto lambda []() { return 0; } can be put on a single line.
 */
  AllowShortLambdasOnASingleLine?: 'None' | 'Empty' | 'Inline' | 'All';
  /**
 * clang-format 9

 If true, if (a) return; can be put on a single line.
 */
  AllowShortIfStatementsOnASingleLine?: 'AllIfsAndElse' | 'Never' | 'WithoutElse' | 'OnlyFirstIf';
  /**
 * clang-format 3.7

 If true, while (true) continue; can be put on a single line.
 */
  AllowShortLoopsOnASingleLine?: boolean;
  /**
 * clang-format 3.7

 This option is deprecated and is retained for backwards compatibility.

 The function definition return type breaking style to use. This option is deprecated and is retained for backwards compatibility
 */
  AlwaysBreakAfterDefinitionReturnType?: 'None' | 'All' | 'TopLevel';
  /**
 * clang-format 3.8

 The function declaration return type breaking style to use.
 */
  AlwaysBreakAfterReturnType?: 'None' | 'All' | 'TopLevel' | 'AllDefinitions' | 'TopLevelDefinitions';
  /**
 * clang-format 3.4

 If true, always break before multiline string literals.
 */
  AlwaysBreakBeforeMultilineStrings?: boolean;
  /**
 * clang-format 7

 The template declaration breaking style to use.
 */
  AlwaysBreakTemplateDeclarations?: 'Yes' | 'No' | 'MultiLine';
  /**
 * clang-format 12

 A vector of strings that should be interpreted as attributes/qualifiers instead of identifiers. This can be useful for language extensions or static analyzer annotations.
 */
  AttributeMacros?: string[];
  /**
 * clang-format 3.7

 If false, a function call's arguments will either be all on the same line or will have one line each.
 */
  BinPackArguments?: boolean;
  /**
 * clang-format 3.7

 If false, a function declaration's or function definition's parameters will either all be on the same line or will have one line each.
 */
  BinPackParameters?: boolean;
  /**
 * clang-format 12

 The BitFieldColonSpacingStyle to use for bitfields.
 */
  BitFieldColonSpacing?: 'Both' | 'None' | 'Before' | 'After';
  /**
 * clang-format 3.8

 Control of individual brace wrapping cases.If BreakBeforeBraces is set to BS_Custom, use this to specify how each individual brace case should be handled. Otherwise, this is ignored.
 */
  BraceWrapping?: {
    /**
     * Wrap case labels.
     */
    AfterCaseLabel?: boolean;
    /**
     * Wrap class definitions.
     */
    AfterClass?: boolean;
    /**
     * Wrap control statements (if/for/while/switch/...).
     */
    AfterControlStatement?: 'Never' | 'MultiLine' | 'Always';
    /**
     * Wrap enum definitions.
     */
    AfterEnum?: boolean;
    /**
     * Wrap function definitions.
     */
    AfterFunction?: boolean;
    /**
     * Wrap namespace definitions.
     */
    AfterNamespace?: boolean;
    /**
     * Wrap ObjC definitions (interfaces, implementations…). @autoreleasepool and @synchronized blocks are wrapped according to AfterControlStatement flag.
     */
    AfterObjCDeclaration?: boolean;
    /**
     * Wrap struct definitions.
     */
    AfterStruct?: boolean;
    /**
     * Wrap union definitions.
     */
    AfterUnion?: boolean;
    /**
     * Wrap extern blocks.
     */
    AfterExternBlock?: boolean;
    /**
     * Wrap before catch.
     */
    BeforeCatch?: boolean;
    /**
     * Wrap before else.
     */
    BeforeElse?: boolean;
    /**
     * Wrap lambda block.
     */
    BeforeLambdaBody?: boolean;
    /**
     * Wrap before while.
     */
    BeforeWhile?: boolean;
    /**
     * Indent the wrapped braces themselves.
     */
    IndentBraces?: boolean;
    /**
     * If false, empty function body can be put on a single line. This option is used only if the opening brace of the function has already been wrapped, i.e. the AfterFunction brace wrapping mode is set, and the function could/should not be put on a single line (as per AllowShortFunctionsOnASingleLine and constructor formatting options).
     */
    SplitEmptyFunction?: boolean;
    /**
     * If false, empty record (e.g. class, struct or union) body can be put on a single line. This option is used only if the opening brace of the record has already been wrapped, i.e. the AfterClass (for classes) brace wrapping mode is set.
     */
    SplitEmptyRecord?: boolean;
    /**
     * If false, empty namespace body can be put on a single line. This option is used only if the opening brace of the namespace has already been wrapped, i.e. the AfterNamespace brace wrapping mode is set.
     */
    SplitEmptyNamespace?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 17

 The number of columns to use to indent the contents of braced init lists. If unset, ContinuationIndentWidth is used.
 */
  BracedInitializerIndentWidth?: number;
  /**
 * clang-format 18

 Break between adjacent string literals.
 */
  BreakAdjacentStringLiterals?: boolean;
  /**
 * clang-format 16

 Break after a group of C++11 attributes before a function declaration/definition name.
 */
  BreakAfterAttributes?: 'Always' | 'Leave' | 'Never';
  /**
 * clang-format 3.8

 Break after each annotation on a field in Java files.
 */
  BreakAfterJavaFieldAnnotations?: boolean;
  /**
 * clang-format 16

 If true, clang-format will always break after a Json array [ otherwise it will scan until the closing ] to determine if it should add newlines between elements (prettier compatible).
 */
  BreakArrays?: boolean;
  /**
 * clang-format 16

 The inline ASM colon style to use..
 */
  BreakBeforeInlineASMColon?: 'Never' | 'OnlyMultiline' | 'Always';
  /**
 * clang-format 3.6

 The way to wrap binary operators.
 */
  BreakBeforeBinaryOperators?: 'None' | 'NonAssignment' | 'All';
  /**
 * clang-format 3.7

 The brace breaking style to use.
 */
  BreakBeforeBraces?:
    | 'Attach'
    | 'Linux'
    | 'Mozilla'
    | 'Stroustrup'
    | 'Allman'
    | 'Whitesmiths'
    | 'GNU'
    | 'WebKit'
    | 'Custom';
  BreakBeforeConceptDeclarations?: boolean | ('Never' | 'Allowed' | 'Always');
  /**
 * clnag-format 5

 If true, in the class inheritance expression clang-format will break before : and , if there is multiple inheritance.
 */
  BreakBeforeInheritanceComma?: boolean;
  /**
 * clang-format 3.7

 If true, ternary operators will be placed after line breaks.
 */
  BreakBeforeTernaryOperators?: boolean;
  /**
 * clang-format 5

 The constructor initializers style to use.
 */
  BreakConstructorInitializers?: 'BeforeColon' | 'BeforeComma' | 'AfterColon';
  /**
 * clang-format 7

 The inheritance list style to use.
 */
  BreakInheritanceList?: 'BeforeColon' | 'BeforeComma' | 'AfterColon' | 'AfterComma';
  /**
 * clang-format 3.9

 Allow breaking string literals when formatting.
 */
  BreakStringLiterals?: boolean;
  /**
 * clang-format 3.8

 Always break constructor initializers before commas and align the commas with the colon.
 */
  BreakConstructorInitializersBeforeComma?: boolean;
  /**
 * clang-format 3.7

 The column limit.
 */
  ColumnLimit?: number;
  /**
 * clang-format 3.7

 A regular expression that describes comments with special meaning, which should not be split into lines or otherwise changed.
 */
  CommentPragmas?: string;
  /**
 * clang-format 5

 If true, consecutive namespace declarations will be on the same line. If false, each namespace is declared on a new line.
 */
  CompactNamespaces?: boolean;
  /**
 * clang-format 3.7

 This option is deprecated. See CurrentLine of PackConstructorInitializers.
 */
  ConstructorInitializerAllOnOneLineOrOnePerLine?: boolean;
  /**
 * clang-format 3.7

 The number of characters to use for indentation of constructor initializer lists as well as inheritance lists.
 */
  ConstructorInitializerIndentWidth?: number;
  /**
 * clang-format 3.7

 Indent width for line continuations.
 */
  ContinuationIndentWidth?: number;
  /**
 * clang-format 3.4

 If true, format braced lists as best suited for C++11 braced lists.
 */
  Cpp11BracedListStyle?: boolean;
  /**
 * clang-format 10

 Analyze the formatted file for the most used line ending (
 *  or 
 * ). UseCRLF is only used as a fallback if none can be derived.

 This option is deprecated in clang-format 16. See DeriveLF and DeriveCRLF of LineEnding.
 */
  DeriveLineEnding?: boolean;
  /**
 * clang-format 3.7

 If true, analyze the formatted file for the most common alignment of & and *. Pointer and reference alignment styles are going to be updated according to the preferences found in the file. PointerAlignment is then used only as fallback.
 */
  DerivePointerAlignment?: boolean;
  /**
 * clang-format 3.7

 Disables formatting completely.
 */
  DisableFormat?: boolean;
  /**
 * clang-format 13

 Defines when to put an empty line after access modifiers. EmptyLineBeforeAccessModifier configuration handles the number of empty lines between two access modifiers.
 */
  EmptyLineAfterAccessModifier?: 'Never' | 'Leave' | 'Always';
  /**
 * clang-format 12

 Defines in which cases to put empty line before access modifiers.
 */
  EmptyLineBeforeAccessModifier?: 'LogicalBlock' | 'Never' | 'Leave' | 'Always';
  /**
 * clang-format 3.7

 If true, clang-format detects whether function calls and definitions are formatted with one parameter per line.
 */
  ExperimentalAutoDetectBinPacking?: boolean;
  /**
 * clang-format 5

 If true, clang-format adds missing namespace end comments for namespaces and fixes invalid existing ones. This doesn't affect short namespaces, which are controlled by ShortNamespaceLines.
 */
  FixNamespaceComments?: boolean;
  /**
 * clang-format 3.7

 A vector of macros that should be interpreted as foreach loops instead of as function calls.
 */
  ForEachMacros?: string[];
  /**
 * clang-format 13

 A vector of macros that should be interpreted as conditionals instead of as function calls.
 */
  IfMacros?: string[];
  /**
 * clang-format 7

 Dependent on the value, multiple #include blocks can be sorted as one and divided based on category.
 */
  IncludeBlocks?: 'Regroup' | 'Preserve' | 'Merge';
  /**
 * clang-format 7

 Regular expressions denoting the different #include categories used for ordering #includes. If none of the regular expressions match, INT_MAX is assigned as category.The main header for a source file automatically gets category 0. so that it is generally kept at the beginning of the #includes (https://llvm.org/docs/CodingStandards.html#include-style). However, you can also assign negative priorities if you have certain headers that always need to be first. 
 There is a third and optional field SortPriority which can used while IncludeBlocks = IBS_Regroup to define the priority in which #includes should be ordered. The value of Priority defines the order of #include blocks and also allows the grouping of #includes of different priority. SortPriority is set to the value of Priority as default if it is not assigned.
 */
  IncludeCategories?: {
    Regex: string;
    Priority: number;
    SortPriority?: number;
    CaseSensitive?: boolean;
    [k: string]: unknown | undefined;
  }[];
  /**
 * clang-format 7

 Specify a regular expression of suffixes that are allowed in the file-to-main-include mapping.
When guessing whether a #include is the "main" include (to assign category 0, see above), use this regex of allowed suffixes to the header stem. A partial match is done, so that: - "" means "arbitrary suffix" - "$" means "no suffix"
For example, if configured to "(_test)?$", then a header a.h would be seen as the "main" include in both a.cc and a_test.cc.
 */
  IncludeIsMainRegex?: string;
  /**
 * clang-format 7

 Specify a regular expression for files being formatted that are allowed to be considered "main" in the file-to-main-include mapping.
By default, clang-format considers files as "main" only when they end with: .c, .cc, .cpp, .c++, .cxx, .m or .mm extensions. For these files a guessing of "main" include takes place (to assign category 0, see above). This config option allows for additional suffixes and extensions for files to be considered as "main".
By default, clang-format considers files as "main" only when they end with: .c, .cc, .cpp, .c++, .cxx, .m or .mm extensions. For these files a guessing of "main" include takes place (to assign category 0, see above). This config option allows for additional suffixes and extensions for files to be considered as "main". 
 */
  IncludeIsMainSourceRegex?: string;
  /**
 * clang-format 13

 Specify whether access modifiers should have their own indentation level.
When false, access modifiers are indented (or outdented) relative to the record members, respecting the AccessModifierOffset. Record members are indented one level below the record. When true, access modifiers get their own indentation level. As a consequence, record members are always indented 2 levels below the record, regardless of the access modifier presence. Value of the AccessModifierOffset is ignored.
 */
  IndentAccessModifiers?: boolean;
  /**
 * clang-format 11

 Indent case label blocks one level from the case label.
When false, the block following the case label uses the same indentation level as for the case label, treating the case label the same as an if-statement. When true, the block gets indented as a scope block.
 */
  IndentCaseBlocks?: boolean;
  /**
 * clang-format 3.3

 Indent case labels one level from the switch statement.
When false, use the same indentation level as for the switch statement. Switch statement body is always indented one level more than case labels (except the first block following the case label, which itself indents the code - unless IndentCaseBlocks is enabled).
 */
  IndentCaseLabels?: boolean;
  /**
 * clang-format 11

 IndentExternBlockStyle is the type of indenting of extern blocks.
 */
  IndentExternBlock?: 'AfterExternBlock' | 'NoIndent' | 'Indent';
  /**
 * clang-format 10

 Indent goto labels.
When false, goto labels are flushed left.
 */
  IndentGotoLabels?: boolean;
  /**
 * clang-format 6

 The preprocessor directive indenting style to use.
 */
  IndentPPDirectives?: 'None' | 'AfterHash' | 'BeforeHash';
  /**
 * clang-format 15

 Indent the requires clause in a template. This only applies when RequiresClausePosition is OwnLine, or WithFollowing.
 */
  IndentRequiresClause?: boolean;
  /**
 * clang-format 12-14

 Indent the requires clause in a template. This only applies when RequiresClausePosition is OwnLine, or WithFollowing. In clang-format 12, 13 and 14 it was named IndentRequires.
 */
  IndentRequires?: boolean;
  /**
 * clang-format 3.7

 The number of columns to use for indentation.
 */
  IndentWidth?: number;
  /**
 * clang-format 3.7

 Indent if a function definition or declaration is wrapped after the type.
 */
  IndentWrappedFunctionNames?: boolean;
  /**
 * clang-format 15
 Insert braces after control statements (if, else, for, do, and while) in C++ unless the control statements are inside macro definitions or the braces would enclose preprocessor directives.

 Warning: Setting this option to true could lead to incorrect code formatting due to clang-format's lack of complete semantic information. As such, extra care should be taken to review code changes made by this option.
 */
  InsertBraces?: boolean;
  /**
 * clang-format 16
 Insert a newline at end of file if missing.
 */
  InsertNewlineAtEOF?: boolean;
  /**
 * clang-format 11

 If set to TCS_Wrapped will insert trailing commas in container literals (arrays and objects) that wrap across multiple lines. It is currently only available for JavaScript and disabled by default TCS_None. InsertTrailingCommas cannot be used together with BinPackArguments as inserting the comma disables bin-packing.
 */
  InsertTrailingCommas?: 'None' | 'Wrapped';
  /**
 * clang-format 16

 Format integer literal separators (' for C++ and _ for C#, Java, and JavaScript).

 Separator format of integer literals of different bases. If negative, remove separators. If 0, leave the literal as is. If positive, insert separators between digits starting from the rightmost digit.

 You can also specify a minimum number of digits (BinaryMinDigits, DecimalMinDigits, and HexMinDigits) the integer literal must have in order for the separators to be inserted.
 */
  IntegerLiteralSeparator?: {
    /**
     * Format separators in binary literals.
     */
    Binary?: number;
    /**
     * Format separators in binary literals with a minimum number of digits.
     */
    BinaryMinDigits?: number;
    /**
     * Format separators in decimal literals.
     */
    Decimal?: number;
    /**
     * Format separators in decimal literals with a minimum number of digits.
     */
    DecimalMinDigits?: number;
    /**
     * Format separators in hexadecimal literals
     */
    Hex?: number;
    /**
     * Format separators in hexadecimal literals with a minimum number of digits.
     */
    HexMinDigits?: number;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 8

 The JavaScriptQuoteStyle to use for JavaScript strings.
 */
  JavaImportGroup?: unknown[];
  /**
 * clang-format 3.9

 The JavaScriptQuoteStyle to use for JavaScript strings.
 */
  JavaScriptQuotes?: 'Leave' | 'Single' | 'Double';
  /**
 * clang-format 3.9

 Whether to wrap JavaScript import/export statements.
 */
  JavaScriptWrapImports?: boolean;
  /**
 * clang-format 17

 Keep empty lines (up to MaxEmptyLinesToKeep) at end of file.
 */
  KeepEmptyLinesAtEOF?: boolean;
  /**
 * clang-format 3.7

 If true, the empty line at the start of blocks is kept.
 */
  KeepEmptyLinesAtTheStartOfBlocks?: boolean;
  /**
 * clang-format 13

 The indentation style of lambda bodies. Signature (the default) causes the lambda body to be indented one additional level relative to the indentation level of the signature. OuterScope forces the lambda body to be indented one additional level relative to the parent scope containing the lambda signature.
 */
  LambdaBodyIndentation?: 'Signature' | 'OuterScope';
  /**
 * clang-format 3.5

 Language, this format style is targeted at.
 */
  Language?:
    | 'None'
    | 'Cpp'
    | 'ObjC'
    | 'CSharp'
    | 'Java'
    | 'JavaScript'
    | 'Json'
    | 'Proto'
    | 'TableGen'
    | 'TextProto'
    | 'Verilog';
  /**
 * clang-format 16

 Line ending style (\n or \r\n) to use.
 */
  LineEnding?: 'LF' | 'CRLF' | 'DeriveLF' | 'DeriveCRLF';
  /**
 * clang-format 3.7

 A regular expression matching macros that start a block.
 */
  MacroBlockBegin?: string;
  /**
 * clang-format 3.7

 A regular expression matching macros that end a block.
 */
  MacroBlockEnd?: string;
  /**
 * clang-format 17

 A list of macros of the form <definition>=<expansion>.

 Code will be parsed with macros expanded, in order to determine how to interpret and format the macro arguments.
 */
  Macros?: string[];
  /**
 * clang-format 3.7

 The maximum number of consecutive empty lines to keep.
 */
  MaxEmptyLinesToKeep?: number;
  /**
 * clnag-format 3.7

 The indentation used for namespaces.
 */
  NamespaceIndentation?: 'None' | 'Inner' | 'All';
  /**
 * clnag-format 9

 A vector of macros which are used to open namespace blocks.
 */
  NamespaceMacros?: string[];
  /**
 * clang-format 7

 Controls bin-packing Objective-C protocol conformance list items into as few lines as possible when they go over ColumnLimit.If Auto (the default), delegates to the value in BinPackParameters. If that is true, bin-packs Objective-C protocol conformance list items into as few lines as possible whenever they go over ColumnLimit.
If Always, always bin-packs Objective-C protocol conformance list items into as few lines as possible whenever they go over ColumnLimit.
If Never, lays out Objective-C protocol conformance list items onto individual lines whenever they go over ColumnLimit.
 */
  ObjCBinPackProtocolList?: 'Never' | 'Auto' | 'Always';
  /**
 * clang-format 3.7

 The number of characters to use for indentation of ObjC blocks.
 */
  ObjCBlockIndentWidth?: number;
  /**
 * clang-format 11

 Break parameters list into lines when there is nested block parameters in a function call.
 */
  ObjCBreakBeforeNestedBlockParam?: boolean;
  /**
 * clang-format 18

 The order in which ObjC property attributes should appear.

 Attributes in code will be sorted in the order specified. Any attributes encountered that are not mentioned in this array will be sorted last, in stable order. Comments between attributes will leave the attributes untouched.
 */
  ObjCPropertyAttributeOrder?: string[];
  /**
 * clang-format 3.7

 Add a space after @property in Objective-C, i.e. use @property (readonly) instead of @property(readonly).
 */
  ObjCSpaceAfterProperty?: boolean;
  /**
 * clang-format 3.7

 Add a space in front of an Objective-C protocol list, i.e. use Foo <Protocol> instead of Foo<Protocol>.
 */
  ObjCSpaceBeforeProtocolList?: boolean;
  /**
 * clang-format 13

 The number of columns to use for indentation of preprocessor statements. When set to -1 (default) IndentWidth is used also for preprocessor statements.
 */
  PPIndentWidth?: number;
  /**
 * clang-format 14

 The pack constructor initializers style to use.
 */
  PackConstructorInitializers?: 'Never' | 'BinPack' | 'CurrentLine' | 'NextLine' | 'NextLineOnly';
  /**
 * clang-format 5

 The penalty for breaking around an assignment operator.
 */
  PenaltyBreakAssignment?: number;
  /**
 * clang-format 3.7

 The penalty for breaking a function call after call(.
 */
  PenaltyBreakBeforeFirstCallParameter?: number;
  /**
 * clang-format 3.7

 The penalty for each line break introduced inside a comment.
 */
  PenaltyBreakComment?: number;
  /**
 * clang-format 3.7

 The penalty for breaking before the first <<.
 */
  PenaltyBreakFirstLessLess?: number;
  /**
 * clang-format 14

 The penalty for breaking after (.
 */
  PenaltyBreakOpenParenthesis?: number;
  /**
 * clang-format 18

 The penalty for breaking after ::.
 */
  PenaltyBreakScopeResolution?: number;
  /**
 * clang-format 3.7

 The penalty for each line break introduced inside a string literal.
 */
  PenaltyBreakString?: number;
  /**
 * clang-format 7

 The penalty for breaking after template declaration.
 */
  PenaltyBreakTemplateDeclaration?: number;
  /**
 * clang-format 3.7

 The penalty for each character outside of the column limit.
 */
  PenaltyExcessCharacter?: number;
  /**
 * clang-format 12

 Penalty for each character of whitespace indentation (counted relative to leading non-whitespace column).
 */
  PenaltyIndentedWhitespace?: number;
  /**
 * clang-format 3.7

 Penalty for putting the return type of a function onto its own line.
 */
  PenaltyReturnTypeOnItsOwnLine?: number;
  /**
 * clang-format 3.7

 Pointer and reference alignment style.
 */
  PointerAlignment?: 'Left' | 'Right' | 'Middle';
  /**
 * clang-format 14

 Different ways to arrange specifiers and qualifiers (e.g. const/volatile).

 Warning:Setting QualifierAlignment to something other than Leave, COULD lead to incorrect code formatting due to incorrect decisions made due to clang-formats lack of complete semantic information.

 As such extra care should be taken to review code changes made by the use of this option.
 */
  QualifierAlignment?: 'Leave' | 'Left' | 'Right' | 'Custom';
  /**
 * clang-format 14

 The order in which the qualifiers appear. Order is an array that can contain any of the following. 

 Note: it MUST contain 'type'. Items to the left of 'type' will be placed to the left of the type and aligned in the order supplied. Items to the right of 'type' will be placed to the right of the type and aligned in the order supplied.
 */
  QualifierOrder?: ('const' | 'inline' | 'static' | 'friend' | 'constexpr' | 'volatile' | 'restrict' | 'type')[];
  /**
 * clang-format 6

 Defines hints for detecting supported languages code blocks in raw strings.
 */
  RawStringFormats?: {
    /**
 * clang-format 3.5

 Language, this format style is targeted at.
 */
    Language?:
      | 'None'
      | 'Cpp'
      | 'ObjC'
      | 'CSharp'
      | 'Java'
      | 'JavaScript'
      | 'Json'
      | 'Proto'
      | 'TableGen'
      | 'TextProto'
      | 'Verilog';
    Delimiters?: string[];
    CanonicalDelimiter?: string;
    /**
     * The style used for all options not specifically set in the configuration.
     */
    BasedOnStyle?:
      | 'Chromium'
      | 'Google'
      | 'LLVM'
      | 'Mozilla'
      | 'WebKit'
      | 'Microsoft'
      | 'GNU'
      | 'InheritParentConfig'
      | 'chromium'
      | 'google'
      | 'llvm'
      | 'mozilla'
      | 'webkit'
      | 'microsoft'
      | 'gnu'
      | 'inheritparentconfig';
    EnclosingFunctions?: string[];
    [k: string]: unknown | undefined;
  }[];
  /**
 * clang-format 13

 Reference alignment style (overrides PointerAlignment for references).
 */
  ReferenceAlignment?: 'Pointer' | 'Left' | 'Right' | 'Middle';
  /**
 * clang-format 4

 If true, clang-format will attempt to re-flow comments. That is it will touch a comment and reflow long comments into new lines, trying to obey the ColumnLimit.
 */
  ReflowComments?: boolean;
  /**
 * clang-format 16

 Remove semicolons after the closing brace of a non-empty function.

 Warning: Setting this option to true could lead to incorrect code formatting due to clang-format's lack of complete semantic information. As such, extra care should be taken to review code changes made by this option.
 */
  RemoveSemicolon?: boolean;
  /**
 * clang-format 14

 Remove optional braces of control statements (if, else, for, and while) in C++ according to the LLVM coding style. 

 Warning: This option will be renamed and expanded to support other styles.

 Setting this option to true could lead to incorrect code formatting due to clang-format's lack of complete semantic information. As such, extra care should be taken to review code changes made by this option.
 */
  RemoveBracesLLVM?: boolean;
  /**
 * clang-format 17

 Remove redundant parentheses.
 */
  RemoveParentheses?: 'Leave' | 'MultipleParentheses' | 'ReturnStatement';
  /**
 * clang-format 15

 The position of the requires clause.
 */
  RequiresClausePosition?: 'OwnLine' | 'WithPreceding' | 'WithFollowing' | 'SingleLine';
  /**
 * clang-format 16 

 The indentation used for requires expression bodies.
 */
  RequiresExpressionIndentation?: 'OuterScope' | 'Keyword';
  /**
 * clang-format 14

 Specifies the use of empty lines to separate definition blocks, including classes, structs, enums, and functions.
 */
  SeparateDefinitionBlocks?: 'Leave' | 'Always' | 'Never';
  /**
 * clang-format 13

 The maximal number of unwrapped lines that a short namespace spans. Defaults to 1.
 */
  ShortNamespaceLines?: number;
  /**
 * clang-format 18

 Do not format macro definition body.
 */
  SkipMacroDefinitionBody?: boolean;
  /**
 * clang-format 4

 Controls if and how clang-format will sort #includes. If Never, includes are never sorted. If CaseInsensitive, includes are sorted in an ASCIIbetical or case insensitive fashion. If CaseSensitive, includes are sorted in an alphabetical or case sensitive fashion.
 */
  SortIncludes?: 'CaseSensitive' | 'CaseInsensitive' | 'Never';
  /**
 * clang-format 12

 When sorting Java imports, by default static imports are placed before non-static imports. If JavaStaticImportAfterImport is After, static imports are placed after non-static imports.
 */
  SortJavaStaticImport?: 'Before' | 'After';
  SortUsingDeclarations?: boolean | ('Never' | 'Lexicographic' | 'LexicographicNumeric');
  /**
 * clang-format 3.5

 If true, a space is inserted after C style casts.
 */
  SpaceAfterCStyleCast?: boolean;
  /**
 * clang-format 9

 If true, a space is inserted after the logical not operator (!).
 */
  SpaceAfterLogicalNot?: boolean;
  /**
 * clang-format 4

 If true, a space will be inserted after the 'template' keyword.
 */
  SpaceAfterTemplateKeyword?: boolean;
  /**
 * clang-format 12

 Defines in which cases to put a space before or after pointer qualifiers
 */
  SpaceAroundPointerQualifiers?: 'Default' | 'Before' | 'After' | 'Both';
  /**
 * clang-format 3.7

 If false, spaces will be removed before assignment operators.
 */
  SpaceBeforeAssignmentOperators?: boolean;
  /**
 * clang-format 12

 If false, spaces will be removed before case colon.
 */
  SpaceBeforeCaseColon?: boolean;
  /**
 * clang-format 7

 If true, a space will be inserted before a C++11 braced list used to initialize an object (after the preceding identifier or type).
 */
  SpaceBeforeCpp11BracedList?: boolean;
  /**
 * clang-format 7

 If false, spaces will be removed before constructor initializer colon.
 */
  SpaceBeforeCtorInitializerColon?: boolean;
  /**
 * clang-format 7

 If false, spaces will be removed before inheritance colon.
 */
  SpaceBeforeInheritanceColon?: boolean;
  /**
 * clang-format 17

 If true, a space will be added before a JSON colon. For other languages, e.g. JavaScript, use SpacesInContainerLiterals instead.
 */
  SpaceBeforeJsonColon?: boolean;
  /**
 * clang-format 3.5

 Defines in which cases to put a space before opening parentheses.
 */
  SpaceBeforeParens?:
    | 'ControlStatements'
    | 'Never'
    | 'ControlStatementsExceptControlMacros'
    | 'NonEmptyParentheses'
    | 'Always'
    | 'Custom';
  /**
 * clang-format 14

 Control of individual space before parentheses.

 If SpaceBeforeParens is set to Custom, use this to specify how each individual space before parentheses case should be handled. Otherwise, this is ignored.
 */
  SpaceBeforeParensOptions?: {
    /**
     * If true, put space between control statement keywords (for/if/while…) and opening parentheses.
     */
    AfterControlStatements?: boolean;
    /**
     * If true, put space between foreach macros and opening parentheses.
     */
    AfterForeachMacros?: boolean;
    /**
     * If true, put a space between function declaration name and opening parentheses.
     */
    AfterFunctionDeclarationName?: boolean;
    /**
     * If true, put a space between function definition name and opening parentheses.
     */
    AfterFunctionDefinitionName?: boolean;
    /**
     * If true, put space between if macros and opening parentheses.
     */
    AfterIfMacros?: boolean;
    /**
     * If true, put a space between operator overloading and opening parentheses.
     */
    AfterOverloadedOperator?: boolean;
    /**
     * If true, put a space between operator new/delete and opening parenthesis.
     */
    AfterPlacementOperator?: boolean;
    /**
     * If true, put space between requires keyword in a requires clause and opening parentheses, if there is one.
     */
    AfterRequiresInClause?: boolean;
    /**
     * If true, put space between requires keyword in a requires expression and opening parentheses.
     */
    AfterRequiresInExpression?: boolean;
    /**
     * If true, put a space before opening parentheses only if the parentheses are not empty.
     */
    BeforeNonEmptyParentheses?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 7

 If false, spaces will be removed before range-based for loop colon.
 */
  SpaceBeforeRangeBasedForLoopColon?: boolean;
  /**
 * clang-format 10

 If true, spaces will be before [. Lambdas will not be affected. Only the first [ will get a space added.
 */
  SpaceBeforeSquareBrackets?: boolean;
  /**
 * clang-format 10

 If true, spaces will be inserted into {}.
 */
  SpaceInEmptyBlock?: boolean;
  /**
 * clang-format 3.7

 If true, spaces may be inserted into (). This option is deprecated in clang-format 17. See InEmptyParentheses of SpacesInParensOptions.
 */
  SpaceInEmptyParentheses?: boolean;
  /**
 * clang-format 3.7

 The number of spaces before trailing line comments (// - comments).

 This does not affect trailing block comments (/* - comments) as those commonly have different usage patterns and a number of special cases. In the case of Verilog, it doesn't affect a comment right after the opening parenthesis in the port or parameter list in a module header, because it is probably for the port on the following line instead of the parenthesis it follows.
 */
  SpacesBeforeTrailingComments?: number;
  /**
 * clang-format 3.4

 The SpacesInAnglesStyle to use for template argument lists.
 */
  SpacesInAngles?: 'Never' | 'Always' | 'Leave';
  /**
 * clang-format 3.7

 If true, spaces may be inserted into C style casts. This option is deprecated in clang-format 17. See InConditionalStatements of SpacesInParensOptions.
 */
  SpacesInCStyleCastParentheses?: boolean;
  /**
 * clang-format 10

 If true, spaces will be inserted around if/for/switch/while conditions. This option is deprecated in clang-format 17. See InCStyleCasts of SpacesInParensOptions.
 */
  SpacesInConditionalStatement?: boolean;
  /**
 * clang-format 3.7

 If true, spaces are inserted inside container literals (e.g. ObjC and Javascript array and dict literals). For JSON, use SpaceBeforeJsonColon instead.
 */
  SpacesInContainerLiterals?: boolean;
  /**
 * clang-format 13

 How many spaces are allowed at the start of a line comment. To disable the maximum set it to -1, apart from that the maximum takes precedence over the minimum.

 In clang-format 16, this option has only effect if ReflowComments is set to true.
 */
  SpacesInLineCommentPrefix?: {
    Minimum?: number;
    Maximum?: number;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 17

 Defines in which cases spaces will be inserted after ( and before ).
 */
  SpacesInParens?: 'Never' | 'Custom';
  /**
 * clang-format 17

 Control of individual spaces in parentheses.

 If SpacesInParens is set to Custom, use this to specify how each individual space in parentheses case should be handled. Otherwise, this is ignored.
 */
  SpacesInParensOptions?: {
    InConditionalStatements?: boolean;
    InCStyleCasts?: boolean;
    InEmptyParentheses?: boolean;
    Other?: boolean;
    [k: string]: unknown | undefined;
  };
  /**
 * clang-format 3.7

 If true, spaces will be inserted after ( and before ). This option is deprecated in clang-format 17. The previous behavior is preserved by using SpacesInParens with Custom and by setting all SpacesInParensOptions to true except for InCStyleCasts and InEmptyParentheses.
 */
  SpacesInParentheses?: boolean;
  /**
 * clang-format 3.7

 If true, spaces will be inserted after [ and before ]. Lambdas without arguments or unspecified size array declarations will not be affected.
 */
  SpacesInSquareBrackets?: boolean;
  /**
 * clang-format 3.7

 Parse and format C++ constructs compatible with this standard.
 */
  Standard?: 'Auto' | 'Latest' | 'c++03' | 'c++11' | 'c++14' | 'c++17' | 'c++20';
  /**
 * clang-format 12

 Macros which are ignored in front of a statement, as if they were an attribute. So that they are not parsed as identifier, for example for Qts emit.
 */
  StatementAttributeLikeMacros?: string[];
  /**
 * clnag-format 8

 A vector of macros that should be interpreted as complete statements.

 Typical macros are expressions, and require a semi-colon to be added; sometimes this is not the case, and this allows to make clang-format aware of such cases.
 */
  StatementMacros?: string[];
  /**
 * clang-format 3.7

 The number of columns used for tab stops.
 */
  TabWidth?: number;
  /**
 * clang-format 17

 A vector of non-keyword identifiers that should be interpreted as type names.

 A *, &, or && between a type name and another non-keyword identifier is annotated as a pointer or reference token instead of a binary operator.
 */
  TypeNames?: string[];
  /**
 * clang-format 9

 A vector of macros that should be interpreted as type declarations instead of as function calls.

For example: OpenSSL STACK_OF, BSD LIST_ENTRY.
 */
  TypenameMacros?: string[];
  /**
 * clang-format 10

 Use 
 *  instead of 
 *  for line breaks. Also used as fallback if DeriveLineEnding is true.

 This option is deprecated in clang-format 16. See LF and CRLF of LineEnding.
 */
  UseCRLF?: boolean;
  /**
 * clang-format 3.7

 The way to use tab characters in the resulting file.
 */
  UseTab?: 'Never' | 'ForIndentation' | 'ForContinuationAndIndentation' | 'AlignWithSpaces' | 'Always';
  /**
 * clang-format 17

 For Verilog, put each port on its own line in module instantiations.
 */
  VerilogBreakBetweenInstancePorts?: boolean;
  /**
 * clang-format 11

 A vector of macros which are whitespace-sensitive and should not be touched.

 For example: BOOST_PP_STRINGIZE
 */
  WhitespaceSensitiveMacros?: string[];
  [k: string]: unknown | undefined;
}
