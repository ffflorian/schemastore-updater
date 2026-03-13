/* eslint-disable */

export interface HttpsJsonSchemastoreOrgDetekt1141Json {
  build?: {
    maxIssues?: number;
    excludeCorrectable?: boolean;
    weights?: {
      [k: string]: number | undefined;
    } | null;
    [k: string]: unknown | undefined;
  };
  config?: {
    validation?: boolean;
    warningsAsErrors?: boolean;
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
    exclude?: string[] | null;
    [k: string]: unknown | undefined;
  };
  comments?: {
    active?: boolean;
    excludes?: string[];
    AbsentOrWrongFileLicense?: {
      active?: boolean;
      licenseTemplateFile?: string;
      [k: string]: unknown | undefined;
    };
    CommentOverPrivateFunction?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    CommentOverPrivateProperty?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EndOfSentenceFormat?: {
      active?: boolean;
      endOfSentenceFormat?: string;
      [k: string]: unknown | undefined;
    };
    UndocumentedPublicClass?: {
      active?: boolean;
      searchInNestedClass?: boolean;
      searchInInnerClass?: boolean;
      searchInInnerObject?: boolean;
      searchInInnerInterface?: boolean;
      [k: string]: unknown | undefined;
    };
    UndocumentedPublicFunction?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UndocumentedPublicProperty?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  complexity?: {
    active?: boolean;
    ComplexCondition?: {
      active?: boolean;
      threshold?: number;
      [k: string]: unknown | undefined;
    };
    ComplexInterface?: {
      active?: boolean;
      threshold?: number;
      includeStaticDeclarations?: boolean;
      includePrivateDeclarations?: boolean;
      [k: string]: unknown | undefined;
    };
    ComplexMethod?: {
      active?: boolean;
      threshold?: number;
      ignoreSingleWhenExpression?: boolean;
      ignoreSimpleWhenEntries?: boolean;
      ignoreNestingFunctions?: boolean;
      nestingFunctions?: string[];
      [k: string]: unknown | undefined;
    };
    LabeledExpression?: {
      active?: boolean;
      ignoredLabels?: string[];
      [k: string]: unknown | undefined;
    };
    LargeClass?: {
      active?: boolean;
      threshold?: number;
      [k: string]: unknown | undefined;
    };
    LongMethod?: {
      active?: boolean;
      threshold?: number;
      [k: string]: unknown | undefined;
    };
    LongParameterList?: {
      active?: boolean;
      functionThreshold?: number;
      constructorThreshold?: number;
      ignoreDefaultParameters?: boolean;
      ignoreDataClasses?: boolean;
      ignoreAnnotated?: string[];
      [k: string]: unknown | undefined;
    };
    MethodOverloading?: {
      active?: boolean;
      threshold?: number;
      [k: string]: unknown | undefined;
    };
    NestedBlockDepth?: {
      active?: boolean;
      threshold?: number;
      [k: string]: unknown | undefined;
    };
    ReplaceSafeCallChainWithRun?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    StringLiteralDuplication?: {
      active?: boolean;
      excludes?: string[];
      threshold?: number;
      ignoreAnnotation?: boolean;
      excludeStringsWithLessThan5Characters?: boolean;
      ignoreStringsRegex?: string;
      [k: string]: unknown | undefined;
    };
    TooManyFunctions?: {
      active?: boolean;
      excludes?: string[];
      thresholdInFiles?: number;
      thresholdInClasses?: number;
      thresholdInInterfaces?: number;
      thresholdInObjects?: number;
      thresholdInEnums?: number;
      ignoreDeprecated?: boolean;
      ignorePrivate?: boolean;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  coroutines?: {
    active?: boolean;
    GlobalCoroutineUsage?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    RedundantSuspendModifier?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    SuspendFunWithFlowReturnType?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  'empty-blocks'?: {
    active?: boolean;
    EmptyCatchBlock?: {
      active?: boolean;
      allowedExceptionNameRegex?: string;
      [k: string]: unknown | undefined;
    };
    EmptyClassBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyDefaultConstructor?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyDoWhileBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyElseBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyFinallyBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyForBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyFunctionBlock?: {
      active?: boolean;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyIfBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyInitBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyKtFile?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptySecondaryConstructor?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyTryBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyWhenBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EmptyWhileBlock?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  exceptions?: {
    active?: boolean;
    ExceptionRaisedInUnexpectedLocation?: {
      active?: boolean;
      methodNames?: string[];
      [k: string]: unknown | undefined;
    };
    InstanceOfCheckForException?: {
      active?: boolean;
      excludes?: string[];
      [k: string]: unknown | undefined;
    };
    NotImplementedDeclaration?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    PrintStackTrace?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    RethrowCaughtException?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ReturnFromFinally?: {
      active?: boolean;
      ignoreLabeled?: boolean;
      [k: string]: unknown | undefined;
    };
    SwallowedException?: {
      active?: boolean;
      ignoredExceptionTypes?: string[];
      allowedExceptionNameRegex?: string;
      [k: string]: unknown | undefined;
    };
    ThrowingExceptionFromFinally?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ThrowingExceptionInMain?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ThrowingExceptionsWithoutMessageOrCause?: {
      active?: boolean;
      excludes?: string[];
      exceptions?: string[];
      [k: string]: unknown | undefined;
    };
    ThrowingNewInstanceOfSameException?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    TooGenericExceptionCaught?: {
      active?: boolean;
      excludes?: string[];
      exceptionNames?: string[];
      allowedExceptionNameRegex?: string;
      [k: string]: unknown | undefined;
    };
    TooGenericExceptionThrown?: {
      active?: boolean;
      exceptionNames?: string[];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  formatting?: {
    active?: boolean;
    android?: boolean;
    autoCorrect?: boolean;
    AnnotationOnSeparateLine?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    AnnotationSpacing?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    ArgumentListWrapping?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    ChainWrapping?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    CommentSpacing?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    EnumEntryNameCase?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    Filename?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    FinalNewline?: {
      active?: boolean;
      autoCorrect?: boolean;
      insertFinalNewLine?: boolean;
      [k: string]: unknown | undefined;
    };
    ImportOrdering?: {
      active?: boolean;
      autoCorrect?: boolean;
      layout?: string;
      [k: string]: unknown | undefined;
    };
    Indentation?: {
      active?: boolean;
      autoCorrect?: boolean;
      indentSize?: number;
      continuationIndentSize?: number;
      [k: string]: unknown | undefined;
    };
    MaximumLineLength?: {
      active?: boolean;
      maxLineLength?: number;
      [k: string]: unknown | undefined;
    };
    ModifierOrdering?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    MultiLineIfElse?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoBlankLineBeforeRbrace?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoConsecutiveBlankLines?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoEmptyClassBody?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoEmptyFirstLineInMethodBlock?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoLineBreakAfterElse?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoLineBreakBeforeAssignment?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoMultipleSpaces?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoSemicolons?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoTrailingSpaces?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoUnitReturn?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoUnusedImports?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    NoWildcardImports?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    PackageName?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    ParameterListWrapping?: {
      active?: boolean;
      autoCorrect?: boolean;
      indentSize?: number;
      [k: string]: unknown | undefined;
    };
    SpacingAroundColon?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundComma?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundCurly?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundDot?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundDoubleColon?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundKeyword?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundOperators?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundParens?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingAroundRangeOperator?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingBetweenDeclarationsWithAnnotations?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingBetweenDeclarationsWithComments?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    StringTemplate?: {
      active?: boolean;
      autoCorrect?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  naming?: {
    active?: boolean;
    ClassNaming?: {
      active?: boolean;
      excludes?: string[];
      classPattern?: string;
      [k: string]: unknown | undefined;
    };
    ConstructorParameterNaming?: {
      active?: boolean;
      excludes?: string[];
      parameterPattern?: string;
      privateParameterPattern?: string;
      excludeClassPattern?: string;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    EnumNaming?: {
      active?: boolean;
      excludes?: string[];
      enumEntryPattern?: string;
      [k: string]: unknown | undefined;
    };
    ForbiddenClassName?: {
      active?: boolean;
      excludes?: string[];
      forbiddenName?: string[];
      [k: string]: unknown | undefined;
    };
    FunctionMaxLength?: {
      active?: boolean;
      excludes?: string[];
      maximumFunctionNameLength?: number;
      [k: string]: unknown | undefined;
    };
    FunctionMinLength?: {
      active?: boolean;
      excludes?: string[];
      minimumFunctionNameLength?: number;
      [k: string]: unknown | undefined;
    };
    FunctionNaming?: {
      active?: boolean;
      excludes?: string[];
      functionPattern?: string;
      excludeClassPattern?: string;
      ignoreOverridden?: boolean;
      ignoreAnnotated?: string[];
      [k: string]: unknown | undefined;
    };
    FunctionParameterNaming?: {
      active?: boolean;
      excludes?: string[];
      parameterPattern?: string;
      excludeClassPattern?: string;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    InvalidPackageDeclaration?: {
      active?: boolean;
      rootPackage?: string;
      [k: string]: unknown | undefined;
    };
    MatchingDeclarationName?: {
      active?: boolean;
      mustBeFirst?: boolean;
      [k: string]: unknown | undefined;
    };
    MemberNameEqualsClassName?: {
      active?: boolean;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    NonBooleanPropertyPrefixedWithIs?: {
      active?: boolean;
      excludes?: string[];
      [k: string]: unknown | undefined;
    };
    ObjectPropertyNaming?: {
      active?: boolean;
      excludes?: string[];
      constantPattern?: string;
      propertyPattern?: string;
      privatePropertyPattern?: string;
      [k: string]: unknown | undefined;
    };
    PackageNaming?: {
      active?: boolean;
      excludes?: string[];
      packagePattern?: string;
      [k: string]: unknown | undefined;
    };
    TopLevelPropertyNaming?: {
      active?: boolean;
      excludes?: string[];
      constantPattern?: string;
      propertyPattern?: string;
      privatePropertyPattern?: string;
      [k: string]: unknown | undefined;
    };
    VariableMaxLength?: {
      active?: boolean;
      excludes?: string[];
      maximumVariableNameLength?: number;
      [k: string]: unknown | undefined;
    };
    VariableMinLength?: {
      active?: boolean;
      excludes?: string[];
      minimumVariableNameLength?: number;
      [k: string]: unknown | undefined;
    };
    VariableNaming?: {
      active?: boolean;
      excludes?: string[];
      variablePattern?: string;
      privateVariablePattern?: string;
      excludeClassPattern?: string;
      ignoreOverridden?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  performance?: {
    active?: boolean;
    ArrayPrimitive?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ForEachOnRange?: {
      active?: boolean;
      excludes?: string[];
      [k: string]: unknown | undefined;
    };
    SpreadOperator?: {
      active?: boolean;
      excludes?: string[];
      [k: string]: unknown | undefined;
    };
    UnnecessaryTemporaryInstantiation?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  'potential-bugs'?: {
    active?: boolean;
    Deprecation?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    DuplicateCaseInWhenExpression?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EqualsAlwaysReturnsTrueOrFalse?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EqualsWithHashCodeExist?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ExplicitGarbageCollectionCall?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    HasPlatformType?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    IgnoredReturnValue?: {
      active?: boolean;
      restrictToAnnotatedMethods?: boolean;
      returnValueAnnotations?: string[];
      [k: string]: unknown | undefined;
    };
    ImplicitDefaultLocale?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ImplicitUnitReturnType?: {
      active?: boolean;
      allowExplicitReturnType?: boolean;
      [k: string]: unknown | undefined;
    };
    InvalidRange?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    IteratorHasNextCallsNextMethod?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    IteratorNotThrowingNoSuchElementException?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    LateinitUsage?: {
      active?: boolean;
      excludes?: string[];
      excludeAnnotatedProperties?: string[];
      ignoreOnClassesPattern?: string;
      [k: string]: unknown | undefined;
    };
    MapGetWithNotNullAssertionOperator?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    MissingWhenCase?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    NullableToStringCall?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    RedundantElseInWhen?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnconditionalJumpStatementInLoop?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessaryNotNullOperator?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessarySafeCall?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnreachableCode?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnsafeCallOnNullableType?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnsafeCast?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UselessPostfixExpression?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    WrongEqualsTypeParameter?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  style?: {
    active?: boolean;
    ClassOrdering?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    CollapsibleIfStatements?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    DataClassContainsFunctions?: {
      active?: boolean;
      conversionFunctionPrefix?: string;
      [k: string]: unknown | undefined;
    };
    DataClassShouldBeImmutable?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EqualsNullCall?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    EqualsOnSignatureLine?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ExplicitCollectionElementAccessMethod?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ExplicitItLambdaParameter?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ExpressionBodySyntax?: {
      active?: boolean;
      includeLineWrapping?: boolean;
      [k: string]: unknown | undefined;
    };
    ForbiddenComment?: {
      active?: boolean;
      values?: string[];
      allowedPatterns?: string;
      [k: string]: unknown | undefined;
    };
    ForbiddenImport?: {
      active?: boolean;
      imports?: string[];
      forbiddenPatterns?: string;
      [k: string]: unknown | undefined;
    };
    ForbiddenMethodCall?: {
      active?: boolean;
      methods?: string[];
      [k: string]: unknown | undefined;
    };
    ForbiddenPublicDataClass?: {
      active?: boolean;
      ignorePackages?: string[];
      [k: string]: unknown | undefined;
    };
    ForbiddenVoid?: {
      active?: boolean;
      ignoreOverridden?: boolean;
      ignoreUsageInGenerics?: boolean;
      [k: string]: unknown | undefined;
    };
    FunctionOnlyReturningConstant?: {
      active?: boolean;
      ignoreOverridableFunction?: boolean;
      excludedFunctions?: string;
      excludeAnnotatedFunction?: string[];
      [k: string]: unknown | undefined;
    };
    LibraryCodeMustSpecifyReturnType?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    LibraryEntitiesShouldNotBePublic?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    LoopWithTooManyJumpStatements?: {
      active?: boolean;
      maxJumpCount?: number;
      [k: string]: unknown | undefined;
    };
    MagicNumber?: {
      active?: boolean;
      excludes?: string[];
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
      [k: string]: unknown | undefined;
    };
    MandatoryBracesIfStatements?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    MandatoryBracesLoops?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    MaxLineLength?: {
      active?: boolean;
      maxLineLength?: number;
      excludePackageStatements?: boolean;
      excludeImportStatements?: boolean;
      excludeCommentStatements?: boolean;
      [k: string]: unknown | undefined;
    };
    MayBeConst?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ModifierOrder?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    NestedClassesVisibility?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    NewLineAtEndOfFile?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    NoTabs?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    OptionalAbstractKeyword?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    OptionalUnit?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    OptionalWhenBraces?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    PreferToOverPairSyntax?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ProtectedMemberInFinalClass?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    RedundantExplicitType?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    RedundantVisibilityModifierRule?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ReturnCount?: {
      active?: boolean;
      max?: number;
      excludedFunctions?: string;
      excludeLabeled?: boolean;
      excludeReturnFromLambda?: boolean;
      excludeGuardClauses?: boolean;
      [k: string]: unknown | undefined;
    };
    SafeCast?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    SerialVersionUIDInSerializableClass?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    SpacingBetweenPackageAndImports?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    ThrowsCount?: {
      active?: boolean;
      max?: number;
      [k: string]: unknown | undefined;
    };
    TrailingWhitespace?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnderscoresInNumericLiterals?: {
      active?: boolean;
      acceptableDecimalLength?: number;
      [k: string]: unknown | undefined;
    };
    UnnecessaryAbstractClass?: {
      active?: boolean;
      excludeAnnotatedClasses?: string[];
      [k: string]: unknown | undefined;
    };
    UnnecessaryAnnotationUseSiteTarget?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessaryApply?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessaryInheritance?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessaryLet?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnnecessaryParentheses?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UntilInsteadOfRangeTo?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnusedImports?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnusedPrivateClass?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UnusedPrivateMember?: {
      active?: boolean;
      allowedNames?: string;
      [k: string]: unknown | undefined;
    };
    UseArrayLiteralsInAnnotations?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseCheckNotNull?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseCheckOrError?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseDataClass?: {
      active?: boolean;
      excludeAnnotatedClasses?: string[];
      allowVars?: boolean;
      [k: string]: unknown | undefined;
    };
    UseEmptyCounterpart?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseIfInsteadOfWhen?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseRequire?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UseRequireNotNull?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UselessCallOnNotNull?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    UtilityClassWithPublicConstructor?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    VarCouldBeVal?: {
      active?: boolean;
      [k: string]: unknown | undefined;
    };
    WildcardImport?: {
      active?: boolean;
      excludes?: string[];
      excludeImports?: string[];
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
