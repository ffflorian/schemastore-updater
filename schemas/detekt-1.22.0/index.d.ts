/* eslint-disable */

export interface HttpsJsonSchemastoreOrgDetekt1220Json {
  build?: {
    maxIssues?: number;
    excludeCorrectable?: boolean;
    weights?: {
      [k: string]: number | undefined;
    };
    [k: string]: unknown | undefined;
  };
  config?: {
    validation?: boolean;
    warningsAsErrors?: boolean;
    checkExhaustiveness?: boolean;
    excludes?: string;
    [k: string]: unknown | undefined;
  };
  processors?: {
    active?: boolean;
    exclude?: string[];
    [k: string]: unknown | undefined;
  };
  'console-reports'?: {
    active?: boolean;
    exclude?: string[];
    [k: string]: unknown | undefined;
  };
  'output-reports'?: {
    active?: boolean;
    exclude?: string[];
    [k: string]: unknown | undefined;
  };
  comments?: {
    active?: boolean;
    AbsentOrWrongFileLicense?: RuleProperties;
    CommentOverPrivateFunction?: RuleProperties1;
    CommentOverPrivateProperty?: RuleProperties1;
    DeprecatedBlockTag?: RuleProperties1;
    EndOfSentenceFormat?: RuleProperties4;
    KDocReferencesNonPublicProperty?: RuleProperties1;
    OutdatedDocumentation?: RuleProperties6;
    UndocumentedPublicClass?: RuleProperties7;
    UndocumentedPublicFunction?: RuleProperties8;
    UndocumentedPublicProperty?: RuleProperties9;
    [k: string]: unknown | undefined;
  };
  complexity?: {
    active?: boolean;
    CognitiveComplexMethod?: RuleProperties10;
    ComplexCondition?: RuleProperties10;
    ComplexInterface?: RuleProperties12;
    CyclomaticComplexMethod?: RuleProperties13;
    LabeledExpression?: RuleProperties14;
    LargeClass?: RuleProperties10;
    LongMethod?: RuleProperties10;
    LongParameterList?: RuleProperties17;
    MethodOverloading?: RuleProperties10;
    NamedArguments?: RuleProperties19;
    NestedBlockDepth?: RuleProperties10;
    NestedScopeFunctions?: RuleProperties21;
    ReplaceSafeCallChainWithRun?: RuleProperties1;
    StringLiteralDuplication?: RuleProperties23;
    TooManyFunctions?: RuleProperties24;
    [k: string]: unknown | undefined;
  };
  coroutines?: {
    active?: boolean;
    GlobalCoroutineUsage?: RuleProperties1;
    InjectDispatcher?: RuleProperties26;
    RedundantSuspendModifier?: RuleProperties1;
    SleepInsteadOfDelay?: RuleProperties1;
    SuspendFunWithCoroutineScopeReceiver?: RuleProperties1;
    SuspendFunWithFlowReturnType?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  'empty-blocks'?: {
    active?: boolean;
    EmptyCatchBlock?: RuleProperties31;
    EmptyClassBlock?: RuleProperties1;
    EmptyDefaultConstructor?: RuleProperties1;
    EmptyDoWhileBlock?: RuleProperties1;
    EmptyElseBlock?: RuleProperties1;
    EmptyFinallyBlock?: RuleProperties1;
    EmptyForBlock?: RuleProperties1;
    EmptyFunctionBlock?: RuleProperties38;
    EmptyIfBlock?: RuleProperties1;
    EmptyInitBlock?: RuleProperties1;
    EmptyKtFile?: RuleProperties1;
    EmptySecondaryConstructor?: RuleProperties1;
    EmptyTryBlock?: RuleProperties1;
    EmptyWhenBlock?: RuleProperties1;
    EmptyWhileBlock?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  exceptions?: {
    active?: boolean;
    ExceptionRaisedInUnexpectedLocation?: RuleProperties46;
    InstanceOfCheckForException?: RuleProperties1;
    NotImplementedDeclaration?: RuleProperties1;
    ObjectExtendsThrowable?: RuleProperties1;
    PrintStackTrace?: RuleProperties1;
    RethrowCaughtException?: RuleProperties1;
    ReturnFromFinally?: RuleProperties52;
    SwallowedException?: RuleProperties53;
    ThrowingExceptionFromFinally?: RuleProperties1;
    ThrowingExceptionInMain?: RuleProperties1;
    ThrowingExceptionsWithoutMessageOrCause?: RuleProperties56;
    ThrowingNewInstanceOfSameException?: RuleProperties1;
    TooGenericExceptionCaught?: RuleProperties58;
    TooGenericExceptionThrown?: RuleProperties59;
    [k: string]: unknown | undefined;
  };
  naming?: {
    active?: boolean;
    BooleanPropertyNaming?: RuleProperties60;
    ClassNaming?: RuleProperties61;
    ConstructorParameterNaming?: RuleProperties62;
    EnumNaming?: RuleProperties63;
    ForbiddenClassName?: RuleProperties64;
    FunctionMaxLength?: RuleProperties65;
    FunctionMinLength?: RuleProperties66;
    FunctionNaming?: RuleProperties67;
    FunctionParameterNaming?: RuleProperties68;
    InvalidPackageDeclaration?: RuleProperties69;
    LambdaParameterNaming?: RuleProperties70;
    MatchingDeclarationName?: RuleProperties71;
    MemberNameEqualsClassName?: RuleProperties38;
    NoNameShadowing?: RuleProperties1;
    NonBooleanPropertyPrefixedWithIs?: RuleProperties1;
    ObjectPropertyNaming?: RuleProperties75;
    PackageNaming?: RuleProperties76;
    TopLevelPropertyNaming?: RuleProperties75;
    VariableMaxLength?: RuleProperties78;
    VariableMinLength?: RuleProperties79;
    VariableNaming?: RuleProperties80;
    [k: string]: unknown | undefined;
  };
  performance?: {
    active?: boolean;
    ArrayPrimitive?: RuleProperties1;
    CouldBeSequence?: RuleProperties10;
    ForEachOnRange?: RuleProperties1;
    SpreadOperator?: RuleProperties1;
    UnnecessaryPartOfBinaryExpression?: RuleProperties1;
    UnnecessaryTemporaryInstantiation?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  'potential-bugs'?: {
    active?: boolean;
    AvoidReferentialEquality?: RuleProperties87;
    CastToNullableType?: RuleProperties1;
    Deprecation?: RuleProperties1;
    DontDowncastCollectionTypes?: RuleProperties1;
    DoubleMutabilityForCollection?: RuleProperties91;
    ElseCaseInsteadOfExhaustiveWhen?: RuleProperties1;
    EqualsAlwaysReturnsTrueOrFalse?: RuleProperties1;
    EqualsWithHashCodeExist?: RuleProperties1;
    ExitOutsideMain?: RuleProperties1;
    ExplicitGarbageCollectionCall?: RuleProperties1;
    HasPlatformType?: RuleProperties1;
    IgnoredReturnValue?: RuleProperties98;
    ImplicitDefaultLocale?: RuleProperties1;
    ImplicitUnitReturnType?: RuleProperties100;
    InvalidRange?: RuleProperties1;
    IteratorHasNextCallsNextMethod?: RuleProperties1;
    IteratorNotThrowingNoSuchElementException?: RuleProperties1;
    LateinitUsage?: RuleProperties104;
    MapGetWithNotNullAssertionOperator?: RuleProperties1;
    MissingPackageDeclaration?: RuleProperties1;
    NullCheckOnMutableProperty?: RuleProperties1;
    NullableToStringCall?: RuleProperties1;
    UnconditionalJumpStatementInLoop?: RuleProperties1;
    UnnecessaryNotNullCheck?: RuleProperties1;
    UnnecessaryNotNullOperator?: RuleProperties1;
    UnnecessarySafeCall?: RuleProperties1;
    UnreachableCatchBlock?: RuleProperties1;
    UnreachableCode?: RuleProperties1;
    UnsafeCallOnNullableType?: RuleProperties1;
    UnsafeCast?: RuleProperties1;
    UnusedUnaryOperator?: RuleProperties1;
    UselessPostfixExpression?: RuleProperties1;
    WrongEqualsTypeParameter?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  style?: {
    active?: boolean;
    AlsoCouldBeApply?: RuleProperties1;
    CanBeNonNullable?: RuleProperties1;
    CascadingCallWrapping?: RuleProperties122;
    ClassOrdering?: RuleProperties1;
    CollapsibleIfStatements?: RuleProperties1;
    DataClassContainsFunctions?: RuleProperties125;
    DataClassShouldBeImmutable?: RuleProperties1;
    DestructuringDeclarationWithTooManyEntries?: RuleProperties127;
    EqualsNullCall?: RuleProperties1;
    EqualsOnSignatureLine?: RuleProperties1;
    ExplicitCollectionElementAccessMethod?: RuleProperties1;
    ExplicitItLambdaParameter?: RuleProperties1;
    ExpressionBodySyntax?: RuleProperties132;
    ForbiddenComment?: RuleProperties133;
    ForbiddenImport?: RuleProperties134;
    ForbiddenMethodCall?: RuleProperties135;
    ForbiddenSuppress?: RuleProperties136;
    ForbiddenVoid?: RuleProperties137;
    FunctionOnlyReturningConstant?: RuleProperties138;
    LoopWithTooManyJumpStatements?: RuleProperties139;
    MagicNumber?: RuleProperties140;
    MandatoryBracesIfStatements?: RuleProperties1;
    MandatoryBracesLoops?: RuleProperties1;
    MaxChainedCallsOnSameLine?: RuleProperties143;
    MaxLineLength?: RuleProperties144;
    MayBeConst?: RuleProperties1;
    ModifierOrder?: RuleProperties1;
    MultilineLambdaItParameter?: RuleProperties1;
    MultilineRawStringIndentation?: RuleProperties148;
    NestedClassesVisibility?: RuleProperties1;
    NewLineAtEndOfFile?: RuleProperties1;
    NoTabs?: RuleProperties1;
    NullableBooleanCheck?: RuleProperties1;
    ObjectLiteralToLambda?: RuleProperties1;
    OptionalAbstractKeyword?: RuleProperties1;
    OptionalUnit?: RuleProperties1;
    OptionalWhenBraces?: RuleProperties1;
    PreferToOverPairSyntax?: RuleProperties1;
    ProtectedMemberInFinalClass?: RuleProperties1;
    RedundantExplicitType?: RuleProperties1;
    RedundantHigherOrderMapUsage?: RuleProperties1;
    RedundantVisibilityModifierRule?: RuleProperties1;
    ReturnCount?: RuleProperties162;
    SafeCast?: RuleProperties1;
    SerialVersionUIDInSerializableClass?: RuleProperties1;
    SpacingBetweenPackageAndImports?: RuleProperties1;
    ThrowsCount?: RuleProperties166;
    TrailingWhitespace?: RuleProperties1;
    TrimMultilineRawString?: RuleProperties1;
    UnderscoresInNumericLiterals?: RuleProperties169;
    UnnecessaryAbstractClass?: RuleProperties1;
    UnnecessaryAnnotationUseSiteTarget?: RuleProperties1;
    UnnecessaryApply?: RuleProperties1;
    UnnecessaryBackticks?: RuleProperties1;
    UnnecessaryFilter?: RuleProperties1;
    UnnecessaryInheritance?: RuleProperties1;
    UnnecessaryInnerClass?: RuleProperties1;
    UnnecessaryLet?: RuleProperties1;
    UnnecessaryParentheses?: RuleProperties178;
    UntilInsteadOfRangeTo?: RuleProperties1;
    UnusedImports?: RuleProperties1;
    UnusedPrivateClass?: RuleProperties1;
    UnusedPrivateMember?: RuleProperties182;
    UseAnyOrNoneInsteadOfFind?: RuleProperties1;
    UseArrayLiteralsInAnnotations?: RuleProperties1;
    UseCheckNotNull?: RuleProperties1;
    UseCheckOrError?: RuleProperties1;
    UseDataClass?: RuleProperties187;
    UseEmptyCounterpart?: RuleProperties1;
    UseIfEmptyOrIfBlank?: RuleProperties1;
    UseIfInsteadOfWhen?: RuleProperties1;
    UseIsNullOrEmpty?: RuleProperties1;
    UseOrEmpty?: RuleProperties1;
    UseRequire?: RuleProperties1;
    UseRequireNotNull?: RuleProperties1;
    UseSumOfInsteadOfFlatMapSize?: RuleProperties1;
    UselessCallOnNotNull?: RuleProperties1;
    UtilityClassWithPublicConstructor?: RuleProperties1;
    VarCouldBeVal?: RuleProperties198;
    WildcardImport?: RuleProperties199;
    [k: string]: unknown | undefined;
  };
  formatting?: {
    active?: boolean;
    android?: boolean;
    autoCorrect?: boolean;
    AnnotationOnSeparateLine?: RuleProperties200;
    AnnotationSpacing?: RuleProperties200;
    ArgumentListWrapping?: RuleProperties202;
    BlockCommentInitialStarAlignment?: RuleProperties200;
    ChainWrapping?: RuleProperties200;
    CommentSpacing?: RuleProperties200;
    CommentWrapping?: RuleProperties206;
    DiscouragedCommentLocation?: RuleProperties200;
    EnumEntryNameCase?: RuleProperties200;
    Filename?: RuleProperties1;
    FinalNewline?: RuleProperties210;
    FunKeywordSpacing?: RuleProperties200;
    FunctionReturnTypeSpacing?: RuleProperties200;
    FunctionSignature?: RuleProperties213;
    FunctionStartOfBodySpacing?: RuleProperties200;
    FunctionTypeReferenceSpacing?: RuleProperties200;
    ImportOrdering?: RuleProperties216;
    Indentation?: RuleProperties206;
    KdocWrapping?: RuleProperties206;
    MaximumLineLength?: RuleProperties219;
    ModifierListSpacing?: RuleProperties200;
    ModifierOrdering?: RuleProperties200;
    MultiLineIfElse?: RuleProperties200;
    NoBlankLineBeforeRbrace?: RuleProperties200;
    NoBlankLinesInChainedMethodCalls?: RuleProperties200;
    NoConsecutiveBlankLines?: RuleProperties200;
    NoEmptyClassBody?: RuleProperties200;
    NoEmptyFirstLineInMethodBlock?: RuleProperties200;
    NoLineBreakAfterElse?: RuleProperties200;
    NoLineBreakBeforeAssignment?: RuleProperties200;
    NoMultipleSpaces?: RuleProperties200;
    NoSemicolons?: RuleProperties200;
    NoTrailingSpaces?: RuleProperties200;
    NoUnitReturn?: RuleProperties200;
    NoUnusedImports?: RuleProperties200;
    NoWildcardImports?: RuleProperties235;
    NullableTypeSpacing?: RuleProperties200;
    PackageName?: RuleProperties200;
    ParameterListSpacing?: RuleProperties200;
    ParameterListWrapping?: RuleProperties239;
    SpacingAroundAngleBrackets?: RuleProperties200;
    SpacingAroundColon?: RuleProperties200;
    SpacingAroundComma?: RuleProperties200;
    SpacingAroundCurly?: RuleProperties200;
    SpacingAroundDot?: RuleProperties200;
    SpacingAroundDoubleColon?: RuleProperties200;
    SpacingAroundKeyword?: RuleProperties200;
    SpacingAroundOperators?: RuleProperties200;
    SpacingAroundParens?: RuleProperties200;
    SpacingAroundRangeOperator?: RuleProperties200;
    SpacingAroundUnaryOperator?: RuleProperties200;
    SpacingBetweenDeclarationsWithAnnotations?: RuleProperties200;
    SpacingBetweenDeclarationsWithComments?: RuleProperties200;
    SpacingBetweenFunctionNameAndOpeningParenthesis?: RuleProperties200;
    StringTemplate?: RuleProperties200;
    TrailingCommaOnCallSite?: RuleProperties255;
    TrailingCommaOnDeclarationSite?: RuleProperties256;
    TypeArgumentListSpacing?: RuleProperties200;
    TypeParameterListSpacing?: RuleProperties200;
    UnnecessaryParenthesesBeforeTrailingLambda?: RuleProperties200;
    Wrapping?: RuleProperties206;
    [k: string]: unknown | undefined;
  };
  libraries?: {
    active?: boolean;
    ForbiddenPublicDataClass?: RuleProperties261;
    LibraryCodeMustSpecifyReturnType?: RuleProperties1;
    LibraryEntitiesShouldNotBePublic?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  ruleauthors?: {
    active?: boolean;
    UseEntityAtName?: RuleProperties1;
    ViolatesTypeResolutionRequirements?: RuleProperties1;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface RuleProperties {
  licenseTemplateFile?: string;
  licenseTemplateIsRegex?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties1 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties4 {
  endOfSentenceFormat?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties6 {
  matchTypeParameters?: boolean;
  matchDeclarationsOrder?: boolean;
  allowParamOnConstructorProperties?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties7 {
  searchInNestedClass?: boolean;
  searchInInnerClass?: boolean;
  searchInInnerObject?: boolean;
  searchInInnerInterface?: boolean;
  searchInProtectedClass?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties8 {
  searchProtectedFunction?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties9 {
  searchProtectedProperty?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties10 {
  threshold?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties12 {
  threshold?: number;
  includeStaticDeclarations?: boolean;
  includePrivateDeclarations?: boolean;
  ignoreOverloaded?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties13 {
  threshold?: number;
  ignoreSingleWhenExpression?: boolean;
  ignoreSimpleWhenEntries?: boolean;
  ignoreNestingFunctions?: boolean;
  nestingFunctions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties14 {
  ignoredLabels?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties17 {
  functionThreshold?: number;
  constructorThreshold?: number;
  ignoreDefaultParameters?: boolean;
  ignoreDataClasses?: boolean;
  ignoreAnnotatedParameter?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties19 {
  threshold?: number;
  ignoreArgumentsMatchingNames?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties21 {
  threshold?: number;
  functions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties23 {
  threshold?: number;
  ignoreAnnotation?: boolean;
  excludeStringsWithLessThan5Characters?: boolean;
  ignoreStringsRegex?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties24 {
  thresholdInFiles?: number;
  thresholdInClasses?: number;
  thresholdInInterfaces?: number;
  thresholdInObjects?: number;
  thresholdInEnums?: number;
  ignoreDeprecated?: boolean;
  ignorePrivate?: boolean;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties26 {
  dispatcherNames?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties31 {
  allowedExceptionNameRegex?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties38 {
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties46 {
  methodNames?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties52 {
  ignoreLabeled?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties53 {
  ignoredExceptionTypes?: string[];
  allowedExceptionNameRegex?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties56 {
  exceptions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties58 {
  exceptionNames?: string[];
  allowedExceptionNameRegex?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties59 {
  exceptionNames?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties60 {
  allowedPattern?: string;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties61 {
  classPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties62 {
  parameterPattern?: string;
  privateParameterPattern?: string;
  excludeClassPattern?: string;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties63 {
  enumEntryPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties64 {
  forbiddenName?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties65 {
  maximumFunctionNameLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties66 {
  minimumFunctionNameLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties67 {
  functionPattern?: string;
  excludeClassPattern?: string;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties68 {
  parameterPattern?: string;
  excludeClassPattern?: string;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties69 {
  rootPackage?: string;
  requireRootInDeclaration?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties70 {
  parameterPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties71 {
  mustBeFirst?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties75 {
  constantPattern?: string;
  propertyPattern?: string;
  privatePropertyPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties76 {
  packagePattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties78 {
  maximumVariableNameLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties79 {
  minimumVariableNameLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties80 {
  variablePattern?: string;
  privateVariablePattern?: string;
  excludeClassPattern?: string;
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties87 {
  forbiddenTypePatterns?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties91 {
  mutableTypes?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties98 {
  restrictToConfig?: boolean;
  returnValueAnnotations?: string[];
  ignoreReturnValueAnnotations?: string[];
  returnValueTypes?: string[];
  ignoreFunctionCall?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties100 {
  allowExplicitReturnType?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties104 {
  ignoreOnClassesPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties122 {
  includeElvis?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties125 {
  conversionFunctionPrefix?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties127 {
  maxDestructuringEntries?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties132 {
  includeLineWrapping?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties133 {
  values?: string[];
  allowedPatterns?: string;
  customMessage?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties134 {
  imports?: {
    value: string;
    reason?: string;
    [k: string]: unknown | undefined;
  }[];
  forbiddenPatterns?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties135 {
  methods?: {
    value: string;
    reason?: string;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties136 {
  rules?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties137 {
  ignoreOverridden?: boolean;
  ignoreUsageInGenerics?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties138 {
  ignoreOverridableFunction?: boolean;
  ignoreActualFunction?: boolean;
  excludedFunctions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties139 {
  maxJumpCount?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties140 {
  ignoreNumbers?: string[];
  ignoreHashCodeFunction?: boolean;
  ignorePropertyDeclaration?: boolean;
  ignoreLocalVariableDeclaration?: boolean;
  ignoreConstantDeclaration?: boolean;
  ignoreCompanionObjectPropertyDeclaration?: boolean;
  ignoreAnnotation?: boolean;
  ignoreNamedArgument?: boolean;
  ignoreEnums?: boolean;
  ignoreRanges?: boolean;
  ignoreExtensionFunctions?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties143 {
  maxChainedCalls?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties144 {
  maxLineLength?: number;
  excludePackageStatements?: boolean;
  excludeImportStatements?: boolean;
  excludeCommentStatements?: boolean;
  excludeRawStrings?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties148 {
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties162 {
  max?: number;
  excludedFunctions?: string[];
  excludeLabeled?: boolean;
  excludeReturnFromLambda?: boolean;
  excludeGuardClauses?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties166 {
  max?: number;
  excludeGuardClauses?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties169 {
  acceptableLength?: number;
  allowNonStandardGrouping?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties178 {
  allowForUnclearPrecedence?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties182 {
  allowedNames?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties187 {
  allowVars?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties198 {
  ignoreLateinitVar?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties199 {
  excludeImports?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties200 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties202 {
  autoCorrect?: boolean;
  indentSize?: number;
  maxLineLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties206 {
  autoCorrect?: boolean;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties210 {
  autoCorrect?: boolean;
  insertFinalNewLine?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties213 {
  autoCorrect?: boolean;
  forceMultilineWhenParameterCountGreaterOrEqualThan?: number;
  functionBodyExpressionWrapping?: string;
  maxLineLength?: number;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties216 {
  autoCorrect?: boolean;
  layout?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties219 {
  maxLineLength?: number;
  ignoreBackTickedIdentifier?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties235 {
  packagesToUseImportOnDemandProperty?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties239 {
  autoCorrect?: boolean;
  maxLineLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties255 {
  autoCorrect?: boolean;
  useTrailingCommaOnCallSite?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties256 {
  autoCorrect?: boolean;
  useTrailingCommaOnDeclarationSite?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties261 {
  ignorePackages?: string[];
  [k: string]: unknown | undefined;
}
