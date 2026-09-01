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
    CommentOverPrivateProperty?: RuleProperties2;
    DeprecatedBlockTag?: RuleProperties3;
    EndOfSentenceFormat?: RuleProperties4;
    KDocReferencesNonPublicProperty?: RuleProperties5;
    OutdatedDocumentation?: RuleProperties6;
    UndocumentedPublicClass?: RuleProperties7;
    UndocumentedPublicFunction?: RuleProperties8;
    UndocumentedPublicProperty?: RuleProperties9;
    [k: string]: unknown | undefined;
  };
  complexity?: {
    active?: boolean;
    CognitiveComplexMethod?: RuleProperties10;
    ComplexCondition?: RuleProperties11;
    ComplexInterface?: RuleProperties12;
    CyclomaticComplexMethod?: RuleProperties13;
    LabeledExpression?: RuleProperties14;
    LargeClass?: RuleProperties15;
    LongMethod?: RuleProperties16;
    LongParameterList?: RuleProperties17;
    MethodOverloading?: RuleProperties18;
    NamedArguments?: RuleProperties19;
    NestedBlockDepth?: RuleProperties20;
    NestedScopeFunctions?: RuleProperties21;
    ReplaceSafeCallChainWithRun?: RuleProperties22;
    StringLiteralDuplication?: RuleProperties23;
    TooManyFunctions?: RuleProperties24;
    [k: string]: unknown | undefined;
  };
  coroutines?: {
    active?: boolean;
    GlobalCoroutineUsage?: RuleProperties25;
    InjectDispatcher?: RuleProperties26;
    RedundantSuspendModifier?: RuleProperties27;
    SleepInsteadOfDelay?: RuleProperties28;
    SuspendFunWithCoroutineScopeReceiver?: RuleProperties29;
    SuspendFunWithFlowReturnType?: RuleProperties30;
    [k: string]: unknown | undefined;
  };
  'empty-blocks'?: {
    active?: boolean;
    EmptyCatchBlock?: RuleProperties31;
    EmptyClassBlock?: RuleProperties32;
    EmptyDefaultConstructor?: RuleProperties33;
    EmptyDoWhileBlock?: RuleProperties34;
    EmptyElseBlock?: RuleProperties35;
    EmptyFinallyBlock?: RuleProperties36;
    EmptyForBlock?: RuleProperties37;
    EmptyFunctionBlock?: RuleProperties38;
    EmptyIfBlock?: RuleProperties39;
    EmptyInitBlock?: RuleProperties40;
    EmptyKtFile?: RuleProperties41;
    EmptySecondaryConstructor?: RuleProperties42;
    EmptyTryBlock?: RuleProperties43;
    EmptyWhenBlock?: RuleProperties44;
    EmptyWhileBlock?: RuleProperties45;
    [k: string]: unknown | undefined;
  };
  exceptions?: {
    active?: boolean;
    ExceptionRaisedInUnexpectedLocation?: RuleProperties46;
    InstanceOfCheckForException?: RuleProperties47;
    NotImplementedDeclaration?: RuleProperties48;
    ObjectExtendsThrowable?: RuleProperties49;
    PrintStackTrace?: RuleProperties50;
    RethrowCaughtException?: RuleProperties51;
    ReturnFromFinally?: RuleProperties52;
    SwallowedException?: RuleProperties53;
    ThrowingExceptionFromFinally?: RuleProperties54;
    ThrowingExceptionInMain?: RuleProperties55;
    ThrowingExceptionsWithoutMessageOrCause?: RuleProperties56;
    ThrowingNewInstanceOfSameException?: RuleProperties57;
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
    MemberNameEqualsClassName?: RuleProperties72;
    NoNameShadowing?: RuleProperties73;
    NonBooleanPropertyPrefixedWithIs?: RuleProperties74;
    ObjectPropertyNaming?: RuleProperties75;
    PackageNaming?: RuleProperties76;
    TopLevelPropertyNaming?: RuleProperties77;
    VariableMaxLength?: RuleProperties78;
    VariableMinLength?: RuleProperties79;
    VariableNaming?: RuleProperties80;
    [k: string]: unknown | undefined;
  };
  performance?: {
    active?: boolean;
    ArrayPrimitive?: RuleProperties81;
    CouldBeSequence?: RuleProperties82;
    ForEachOnRange?: RuleProperties83;
    SpreadOperator?: RuleProperties84;
    UnnecessaryPartOfBinaryExpression?: RuleProperties85;
    UnnecessaryTemporaryInstantiation?: RuleProperties86;
    [k: string]: unknown | undefined;
  };
  'potential-bugs'?: {
    active?: boolean;
    AvoidReferentialEquality?: RuleProperties87;
    CastToNullableType?: RuleProperties88;
    Deprecation?: RuleProperties89;
    DontDowncastCollectionTypes?: RuleProperties90;
    DoubleMutabilityForCollection?: RuleProperties91;
    ElseCaseInsteadOfExhaustiveWhen?: RuleProperties92;
    EqualsAlwaysReturnsTrueOrFalse?: RuleProperties93;
    EqualsWithHashCodeExist?: RuleProperties94;
    ExitOutsideMain?: RuleProperties95;
    ExplicitGarbageCollectionCall?: RuleProperties96;
    HasPlatformType?: RuleProperties97;
    IgnoredReturnValue?: RuleProperties98;
    ImplicitDefaultLocale?: RuleProperties99;
    ImplicitUnitReturnType?: RuleProperties100;
    InvalidRange?: RuleProperties101;
    IteratorHasNextCallsNextMethod?: RuleProperties102;
    IteratorNotThrowingNoSuchElementException?: RuleProperties103;
    LateinitUsage?: RuleProperties104;
    MapGetWithNotNullAssertionOperator?: RuleProperties105;
    MissingPackageDeclaration?: RuleProperties106;
    NullCheckOnMutableProperty?: RuleProperties107;
    NullableToStringCall?: RuleProperties108;
    UnconditionalJumpStatementInLoop?: RuleProperties109;
    UnnecessaryNotNullCheck?: RuleProperties110;
    UnnecessaryNotNullOperator?: RuleProperties111;
    UnnecessarySafeCall?: RuleProperties112;
    UnreachableCatchBlock?: RuleProperties113;
    UnreachableCode?: RuleProperties114;
    UnsafeCallOnNullableType?: RuleProperties115;
    UnsafeCast?: RuleProperties116;
    UnusedUnaryOperator?: RuleProperties117;
    UselessPostfixExpression?: RuleProperties118;
    WrongEqualsTypeParameter?: RuleProperties119;
    [k: string]: unknown | undefined;
  };
  style?: {
    active?: boolean;
    AlsoCouldBeApply?: RuleProperties120;
    CanBeNonNullable?: RuleProperties121;
    CascadingCallWrapping?: RuleProperties122;
    ClassOrdering?: RuleProperties123;
    CollapsibleIfStatements?: RuleProperties124;
    DataClassContainsFunctions?: RuleProperties125;
    DataClassShouldBeImmutable?: RuleProperties126;
    DestructuringDeclarationWithTooManyEntries?: RuleProperties127;
    EqualsNullCall?: RuleProperties128;
    EqualsOnSignatureLine?: RuleProperties129;
    ExplicitCollectionElementAccessMethod?: RuleProperties130;
    ExplicitItLambdaParameter?: RuleProperties131;
    ExpressionBodySyntax?: RuleProperties132;
    ForbiddenComment?: RuleProperties133;
    ForbiddenImport?: RuleProperties134;
    ForbiddenMethodCall?: RuleProperties135;
    ForbiddenSuppress?: RuleProperties136;
    ForbiddenVoid?: RuleProperties137;
    FunctionOnlyReturningConstant?: RuleProperties138;
    LoopWithTooManyJumpStatements?: RuleProperties139;
    MagicNumber?: RuleProperties140;
    MandatoryBracesIfStatements?: RuleProperties141;
    MandatoryBracesLoops?: RuleProperties142;
    MaxChainedCallsOnSameLine?: RuleProperties143;
    MaxLineLength?: RuleProperties144;
    MayBeConst?: RuleProperties145;
    ModifierOrder?: RuleProperties146;
    MultilineLambdaItParameter?: RuleProperties147;
    MultilineRawStringIndentation?: RuleProperties148;
    NestedClassesVisibility?: RuleProperties149;
    NewLineAtEndOfFile?: RuleProperties150;
    NoTabs?: RuleProperties151;
    NullableBooleanCheck?: RuleProperties152;
    ObjectLiteralToLambda?: RuleProperties153;
    OptionalAbstractKeyword?: RuleProperties154;
    OptionalUnit?: RuleProperties155;
    OptionalWhenBraces?: RuleProperties156;
    PreferToOverPairSyntax?: RuleProperties157;
    ProtectedMemberInFinalClass?: RuleProperties158;
    RedundantExplicitType?: RuleProperties159;
    RedundantHigherOrderMapUsage?: RuleProperties160;
    RedundantVisibilityModifierRule?: RuleProperties161;
    ReturnCount?: RuleProperties162;
    SafeCast?: RuleProperties163;
    SerialVersionUIDInSerializableClass?: RuleProperties164;
    SpacingBetweenPackageAndImports?: RuleProperties165;
    ThrowsCount?: RuleProperties166;
    TrailingWhitespace?: RuleProperties167;
    TrimMultilineRawString?: RuleProperties168;
    UnderscoresInNumericLiterals?: RuleProperties169;
    UnnecessaryAbstractClass?: RuleProperties170;
    UnnecessaryAnnotationUseSiteTarget?: RuleProperties171;
    UnnecessaryApply?: RuleProperties172;
    UnnecessaryBackticks?: RuleProperties173;
    UnnecessaryFilter?: RuleProperties174;
    UnnecessaryInheritance?: RuleProperties175;
    UnnecessaryInnerClass?: RuleProperties176;
    UnnecessaryLet?: RuleProperties177;
    UnnecessaryParentheses?: RuleProperties178;
    UntilInsteadOfRangeTo?: RuleProperties179;
    UnusedImports?: RuleProperties180;
    UnusedPrivateClass?: RuleProperties181;
    UnusedPrivateMember?: RuleProperties182;
    UseAnyOrNoneInsteadOfFind?: RuleProperties183;
    UseArrayLiteralsInAnnotations?: RuleProperties184;
    UseCheckNotNull?: RuleProperties185;
    UseCheckOrError?: RuleProperties186;
    UseDataClass?: RuleProperties187;
    UseEmptyCounterpart?: RuleProperties188;
    UseIfEmptyOrIfBlank?: RuleProperties189;
    UseIfInsteadOfWhen?: RuleProperties190;
    UseIsNullOrEmpty?: RuleProperties191;
    UseOrEmpty?: RuleProperties192;
    UseRequire?: RuleProperties193;
    UseRequireNotNull?: RuleProperties194;
    UseSumOfInsteadOfFlatMapSize?: RuleProperties195;
    UselessCallOnNotNull?: RuleProperties196;
    UtilityClassWithPublicConstructor?: RuleProperties197;
    VarCouldBeVal?: RuleProperties198;
    WildcardImport?: RuleProperties199;
    [k: string]: unknown | undefined;
  };
  formatting?: {
    active?: boolean;
    android?: boolean;
    autoCorrect?: boolean;
    AnnotationOnSeparateLine?: RuleProperties200;
    AnnotationSpacing?: RuleProperties201;
    ArgumentListWrapping?: RuleProperties202;
    BlockCommentInitialStarAlignment?: RuleProperties203;
    ChainWrapping?: RuleProperties204;
    CommentSpacing?: RuleProperties205;
    CommentWrapping?: RuleProperties206;
    DiscouragedCommentLocation?: RuleProperties207;
    EnumEntryNameCase?: RuleProperties208;
    Filename?: RuleProperties209;
    FinalNewline?: RuleProperties210;
    FunKeywordSpacing?: RuleProperties211;
    FunctionReturnTypeSpacing?: RuleProperties212;
    FunctionSignature?: RuleProperties213;
    FunctionStartOfBodySpacing?: RuleProperties214;
    FunctionTypeReferenceSpacing?: RuleProperties215;
    ImportOrdering?: RuleProperties216;
    Indentation?: RuleProperties217;
    KdocWrapping?: RuleProperties218;
    MaximumLineLength?: RuleProperties219;
    ModifierListSpacing?: RuleProperties220;
    ModifierOrdering?: RuleProperties221;
    MultiLineIfElse?: RuleProperties222;
    NoBlankLineBeforeRbrace?: RuleProperties223;
    NoBlankLinesInChainedMethodCalls?: RuleProperties224;
    NoConsecutiveBlankLines?: RuleProperties225;
    NoEmptyClassBody?: RuleProperties226;
    NoEmptyFirstLineInMethodBlock?: RuleProperties227;
    NoLineBreakAfterElse?: RuleProperties228;
    NoLineBreakBeforeAssignment?: RuleProperties229;
    NoMultipleSpaces?: RuleProperties230;
    NoSemicolons?: RuleProperties231;
    NoTrailingSpaces?: RuleProperties232;
    NoUnitReturn?: RuleProperties233;
    NoUnusedImports?: RuleProperties234;
    NoWildcardImports?: RuleProperties235;
    NullableTypeSpacing?: RuleProperties236;
    PackageName?: RuleProperties237;
    ParameterListSpacing?: RuleProperties238;
    ParameterListWrapping?: RuleProperties239;
    SpacingAroundAngleBrackets?: RuleProperties240;
    SpacingAroundColon?: RuleProperties241;
    SpacingAroundComma?: RuleProperties242;
    SpacingAroundCurly?: RuleProperties243;
    SpacingAroundDot?: RuleProperties244;
    SpacingAroundDoubleColon?: RuleProperties245;
    SpacingAroundKeyword?: RuleProperties246;
    SpacingAroundOperators?: RuleProperties247;
    SpacingAroundParens?: RuleProperties248;
    SpacingAroundRangeOperator?: RuleProperties249;
    SpacingAroundUnaryOperator?: RuleProperties250;
    SpacingBetweenDeclarationsWithAnnotations?: RuleProperties251;
    SpacingBetweenDeclarationsWithComments?: RuleProperties252;
    SpacingBetweenFunctionNameAndOpeningParenthesis?: RuleProperties253;
    StringTemplate?: RuleProperties254;
    TrailingCommaOnCallSite?: RuleProperties255;
    TrailingCommaOnDeclarationSite?: RuleProperties256;
    TypeArgumentListSpacing?: RuleProperties257;
    TypeParameterListSpacing?: RuleProperties258;
    UnnecessaryParenthesesBeforeTrailingLambda?: RuleProperties259;
    Wrapping?: RuleProperties260;
    [k: string]: unknown | undefined;
  };
  libraries?: {
    active?: boolean;
    ForbiddenPublicDataClass?: RuleProperties261;
    LibraryCodeMustSpecifyReturnType?: RuleProperties262;
    LibraryEntitiesShouldNotBePublic?: RuleProperties263;
    [k: string]: unknown | undefined;
  };
  ruleauthors?: {
    active?: boolean;
    UseEntityAtName?: RuleProperties264;
    ViolatesTypeResolutionRequirements?: RuleProperties265;
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
export interface RuleProperties2 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties3 {
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
export interface RuleProperties5 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties11 {
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
export interface RuleProperties15 {
  threshold?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties16 {
  threshold?: number;
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
export interface RuleProperties18 {
  threshold?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties19 {
  threshold?: number;
  ignoreArgumentsMatchingNames?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties20 {
  threshold?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties21 {
  threshold?: number;
  functions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties22 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties25 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties26 {
  dispatcherNames?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties27 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties28 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties29 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties30 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties31 {
  allowedExceptionNameRegex?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties32 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties33 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties34 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties35 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties36 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties37 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties38 {
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties39 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties40 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties41 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties42 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties43 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties44 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties45 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties46 {
  methodNames?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties47 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties48 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties49 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties50 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties51 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties54 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties55 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties56 {
  exceptions?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties57 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties72 {
  ignoreOverridden?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties73 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties74 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties77 {
  constantPattern?: string;
  propertyPattern?: string;
  privatePropertyPattern?: string;
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
export interface RuleProperties81 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties82 {
  threshold?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties83 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties84 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties85 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties86 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties87 {
  forbiddenTypePatterns?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties88 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties89 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties90 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties91 {
  mutableTypes?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties92 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties93 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties94 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties95 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties96 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties97 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties99 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties100 {
  allowExplicitReturnType?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties101 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties102 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties103 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties104 {
  ignoreOnClassesPattern?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties105 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties106 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties107 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties108 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties109 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties110 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties111 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties112 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties113 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties114 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties115 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties116 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties117 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties118 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties119 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties120 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties121 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties122 {
  includeElvis?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties123 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties124 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties125 {
  conversionFunctionPrefix?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties126 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties127 {
  maxDestructuringEntries?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties128 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties129 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties130 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties131 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties141 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties142 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties145 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties146 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties147 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties148 {
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties149 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties150 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties151 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties152 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties153 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties154 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties155 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties156 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties157 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties158 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties159 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties160 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties161 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties163 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties164 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties165 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties166 {
  max?: number;
  excludeGuardClauses?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties167 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties168 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties169 {
  acceptableLength?: number;
  allowNonStandardGrouping?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties170 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties171 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties172 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties173 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties174 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties175 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties176 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties177 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties178 {
  allowForUnclearPrecedence?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties179 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties180 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties181 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties182 {
  allowedNames?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties183 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties184 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties185 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties186 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties187 {
  allowVars?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties188 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties189 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties190 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties191 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties192 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties193 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties194 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties195 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties196 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties197 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
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
export interface RuleProperties201 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties202 {
  autoCorrect?: boolean;
  indentSize?: number;
  maxLineLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties203 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties204 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties205 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties206 {
  autoCorrect?: boolean;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties207 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties208 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties209 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties210 {
  autoCorrect?: boolean;
  insertFinalNewLine?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties211 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties212 {
  autoCorrect?: boolean;
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
export interface RuleProperties214 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties215 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties216 {
  autoCorrect?: boolean;
  layout?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties217 {
  autoCorrect?: boolean;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties218 {
  autoCorrect?: boolean;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties219 {
  maxLineLength?: number;
  ignoreBackTickedIdentifier?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties220 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties221 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties222 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties223 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties224 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties225 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties226 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties227 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties228 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties229 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties230 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties231 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties232 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties233 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties234 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties235 {
  packagesToUseImportOnDemandProperty?: string;
  [k: string]: unknown | undefined;
}
export interface RuleProperties236 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties237 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties238 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties239 {
  autoCorrect?: boolean;
  maxLineLength?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties240 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties241 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties242 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties243 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties244 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties245 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties246 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties247 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties248 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties249 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties250 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties251 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties252 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties253 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties254 {
  autoCorrect?: boolean;
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
export interface RuleProperties257 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties258 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties259 {
  autoCorrect?: boolean;
  [k: string]: unknown | undefined;
}
export interface RuleProperties260 {
  autoCorrect?: boolean;
  indentSize?: number;
  [k: string]: unknown | undefined;
}
export interface RuleProperties261 {
  ignorePackages?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties262 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties263 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties264 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
export interface RuleProperties265 {
  active?: boolean;
  excludes?: string[];
  ignoreAnnotated?: string[];
  ignoreFunction?: string[];
  [k: string]: unknown | undefined;
}
