/* eslint-disable */

/**
 * Path to another `.json` or `.toml` file that is used as a "base configuration", allowing this configuration to inherit configuration settings. Top-level keys within this configuration overwrite top-level keys in the base configuration. Multiple levels of inheritance are supported. Relative paths specified in a configuration file are resolved relative to the location of that configuration file.
 */
export type PathToConfigurationFileThatThisConfigurationExtends = string;
/**
 * Paths of directories or files that should be considered part of the project. If no paths are specified, pyright defaults to the directory that contains the config file. Paths may contain wildcard characters: `**` (a directory or multiple levels of directories), `*` (a sequence of zero or more characters), or `?` (a single character). If no include paths are specified, the root path for the workspace is assumed.
 */
export type FilesAndDirectoriesIncludedInTypeAnalysis = string[];
export type FileOrDirectoryToExcludeFromTypeAnalysis = string;
/**
 * Paths of directories or files that should not be considered part of the project. These override the includes directories and files, allowing specific subdirectories to be excluded. Note that files in the exclude paths may still be included in the analysis if they are referenced (imported) by source files that are not excluded. Paths may contain wildcard characters: `**` (a directory or multiple levels of directories), `*` (a sequence of zero or more characters), or `?` (a single character). If no exclude paths are specified, Pyright automatically excludes the following: `** /node_modules`, `** /__pycache__`, `** /.*` and any virtual environment directories.
 */
export type FilesAndDirectoriesExcludedFromTypeAnalysis = FileOrDirectoryToExcludeFromTypeAnalysis[];
export type FileOrDirectoryWhereDiagnosticsShouldBeSuppressed = string;
/**
 * Paths of directories or files whose diagnostic output (errors and warnings) should be suppressed even if they are an included file or within the transitive closure of an included file. Paths may contain wildcard characters: `**` (a directory or multiple levels of directories), `*` (a sequence of zero or more characters), or `?` (a single character).
 */
export type FilesAndDirectoriesWhoseDiagnosticsAreSuppressed = FileOrDirectoryWhereDiagnosticsShouldBeSuppressed[];
export type FileOrDirectoryThatShouldUseStrictTypeCheckingRules = string;
/**
 * Paths of directories or files that should use "strict" analysis if they are included. This is the same as manually adding a `# pyright: strict` comment. In strict mode, most type-checking rules are enabled. Paths may contain wildcard characters: `**` (a directory or multiple levels of directories), `*` (a sequence of zero or more characters), or `?` (a single character).
 */
export type FilesAndDirectoriesThatShouldUseStrictTypeCheckingRules =
  FileOrDirectoryThatShouldUseStrictTypeCheckingRules[];
export type ValueOfConstantBooleanOrString = (string | boolean) | undefined;
/**
 * Specifies the default rule set to use. Some rules can be overridden using additional configuration flags documented below. If set to `off`, all type-checking rules are disabled, but Python syntax and semantic errors are still reported.
 */
export type SpecifiesTheDefaultRuleSetToUseForTypeChecking = 'off' | 'basic' | 'standard' | 'strict';
/**
 * Determines whether pyright reads, parses and analyzes library code to extract type information in the absence of type stub files. Type information will typically be incomplete. We recommend using type stubs where possible.
 */
export type UseLibraryImplementationsToExtractTypeInformationWhenTypeStubIsNotPresent = boolean;
/**
 * Path to a directory that contains `typeshed` type stub files. Pyright ships with a bundled copy of `typeshed` type stubs. If you want to use a different version of `typeshed` stubs, you can clone the `typeshed` GitHub repo (https://github.com/python/typeshed) to a local directory and reference the location with this path. This option is useful if you're actively contributing updates to `typeshed`.
 */
export type PathToDirectoryContainingTypeshedTypeStubFiles = string;
/**
 * Path to a directory that contains custom type stubs. Each package's type stub file(s) are expected to be in its own subdirectory.
 */
export type PathToDirectoryContainingCustomTypeStubFiles = string;
/**
 * Disables legacy behavior where `bytearray` and `memoryview` are considered subtypes of bytes. PEP 688 deprecates this behavior, but this switch is provided to restore the older behavior.
 */
export type DoNotTreatBytearrayAndMemoryviewAsImplicitSubtypesOfBytes = boolean;
/**
 * When inferring the type of a list, use strict type assumptions. For example, the expression `[1, 'a', 3.4]` could be inferred to be of type `list[Any]` or `list[int | str | float]`. If this setting is `true`, it will use the latter (stricter) type.
 */
export type InferStrictTypesForListExpressions = boolean;
/**
 * When inferring the type of a set, use strict type assumptions. For example, the expression `{1, 'a', 3.4}` could be inferred to be of type `set[Any]` or `set[int | str | float]`. If this setting is `true`, it will use the latter (stricter) type.
 */
export type InferStrictTypesForSetExpressions = boolean;
/**
 * When inferring the type of a dictionary's keys and values, use strict type assumptions. For example, the expression `{'a': 1, 'b': 'a'}` could be inferred to be of type `dict[str, Any]` or `dict[str, int | str]`. If this setting is `true`, it will use the latter (stricter) type.
 */
export type InferStrictTypesForDictionaryExpressions = boolean;
/**
 * Analyze and report errors for functions and methods that have no type annotations for input parameters or return types.
 */
export type AnalyzeAndReportDiagnosticsForFunctionsThatHaveNoAnnotations = boolean;
/**
 * PEP 484 indicates that when a function parameter is assigned a default value of `None`, its type should implicitly be `Optional` even if the explicit type is not. When enabled, this rule requires that parameter type annotations use `Optional` explicitly in this case.
 */
export type AllowImplicitOptionalWhenDefaultParameterValueIsNone = boolean;
/**
 * Enables a set of experimental (mostly undocumented) features that correspond to proposed or exploratory changes to the Python typing standard. These features will likely change or be removed, so they should not be used except for experimentation purposes.
 */
export type EnableTheUseOfExperimentalFeaturesThatAreNotPartOfThePythonTypingSpec = boolean;
/**
 * PEP 484 defines support for `# type: ignore` comments. This switch enables or disables support for these comments. This does not affect `# pyright: ignore` comments.
 */
export type AllowTypeIgnoreComments = boolean;
/**
 * If enabled, code that is determined to be unreachable by type analysis is reported using a tagged hint. This setting does not affect code that is determined to be unreachable independent of type analysis; such code is always reported as unreachable using a tagged hint. This setting also has no effect when using the command-line version of pyright because it never emits tagged hints for unreachable code.
 */
export type IdentifyCodeDeterminedToBeUnreachableThroughTypeAnalysis = boolean;
/**
 * PEP 585 indicates that aliases to types in standard collections that were introduced solely to support generics are deprecated as of Python 3.9. This switch controls whether these are treated as deprecated. This applies only when `pythonVersion` is 3.9 or newer. The default value for this setting is `false` but may be switched to `true` in the future.
 */
export type TreatTypingSpecificAliasesToStandardTypesAsDeprecated = boolean;
/**
 * Generate or suppress diagnostics for general type inconsistencies, unsupported operations, argument/parameter mismatches, etc. This covers all of the basic type-checking rules not covered by other rules. It does not include syntax errors.
 */
export type ControlsReportingOfGeneralTypeIssues = 'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Generate or suppress diagnostics for properties where the type of the value passed to the setter is not assignable to the value returned by the getter. Such mismatches violate the intended use of properties, which are meant to act like variables.
 */
export type ControlsReportingOfPropertyGetterSetterTypeMismatches =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for non-standard member accesses for functions.
 */
export type ControlsReportingOfMemberAccessesOnFunctionObjects =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for imports that have no corresponding imported python file or type stub file.
 */
export type ControlsReportingOfImportsThatCannotBeResolved =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for imports that have no corresponding source file. This happens when a type stub is found, but the module source file was not found, indicating that the code may fail at runtime when using this execution environment. Type checking will be done using the type stub.
 */
export type ControlsReportingOfImportsThatCannotBeResolvedToSourceFiles =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for type annotations that use invalid type expression forms or are semantically invalid.
 */
export type ControlsReportingOfTypeExpressionsThatUseAnInvalidForm =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for imports that have no corresponding type stub file (either a typeshed file or a custom type stub). The type checker requires type stubs to do its best job at analysis.
 */
export type ControlsReportingOfImportsThatCannotBeResolvedToTypeStubFiles =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for cyclical import chains. These are not errors in Python, but they do slow down type analysis and often hint at architectural layering issues. Generally, they should be avoided. Note that there are import cycles in the typeshed stdlib typestub files that are ignored by this setting.
 */
export type ControlsReportingOfModuleImportsThatCreateCyclesInImportGraph =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an imported symbol that is not referenced within that file.
 */
export type ControlsReportingOfImportedSymbolsThatAreNotReferencedWithinTheSourceFile =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a class with a private name (starting with an underscore) that is not accessed.
 */
export type ControlsReportingOfPrivateClassesThatAreNotAccessed =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a function or method with a private name (starting with an underscore) that is not accessed.
 */
export type ControlsReportingOfPrivateFunctionsOrMethodsThatAreNotAccessed =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a variable that is not accessed. Variables whose names begin with an underscore are exempt from this check.
 */
export type ControlsReportingOfLocalVariablesThatAreNotAccessed =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an imported symbol or module that is imported more than once.
 */
export type ControlsReportingOfSymbolsOrModulesThatAreImportedMoreThanOnce =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a wildcard import from an external library. The use of this language feature is highly discouraged and can result in bugs when the library is updated.
 */
export type ControlsReportingOfWildcardImportFromExternalLibrary =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for the attempted instantiate an abstract or protocol class or use of an abstract method.
 */
export type ControlsReportingOfAttemptedInstantiationOfAbstractClass =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for argument type incompatibilities when evaluating a call expression.
 */
export type ControlsReportingOfIncompatibleArgumentType = 'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Generate or suppress diagnostics for a type mismatch detected by the `typing.assert_type` call.
 */
export type ControlsReportingOfTypeMismatchDetectedByTypingAssertTypeCall =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for assignment type incompatibility.
 */
export type ControlsReportingOfTypeIncompatibilitiesForAssignments =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics related to attribute accesses.
 */
export type ControlsReportingOfIssuesRelatedToAttributeAccesses =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics related to call expressions and arguments passed to a call target.
 */
export type ControlsReportingOfIssuesRelatedToCallExpressionsAndArguments =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an overloaded function that has overload signatures that are inconsistent with each other or with the implementation.
 */
export type ControlsReportingOfInconsistenciesBetweenFunctionOverloadSignatures =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics related to index operations and expressions.
 */
export type ControlsReportingOfIssuesRelatedToIndexOperationsAndExpressions =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for invalid type argument usage.
 */
export type ControlsReportingOfInvalidTypeArgumentUsage = 'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Generate or suppress diagnostics for an overloaded function or method if the implementation is not provided.
 */
export type ControlsReportingOfAnOverloadedFunctionOrMethodWithAMissingImplementation =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics related to the use of unary or binary operators (like `*` or `not`).
 */
export type ControlsReportingOfDiagnosticsRelatedToUnaryAndBinaryOperators =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to subscript (index) a variable with an `Optional` type.
 */
export type ControlsReportingOfAttemptsToSubscriptIndexAVariableWithOptionalType =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to access a member of a variable with an `Optional` type.
 */
export type ControlsReportingOfAttemptsToAccessAMemberOfAVariableWithOptionalType =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to call a variable with an `Optional` type.
 */
export type ControlsReportingOfAttemptsToCallAVariableWithOptionalType =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to use an `Optional` type as an iterable value (e.g. within a `for` statement).
 */
export type ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnIterableValue =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to use an `Optional` type as a context manager (as a parameter to a `with` statement).
 */
export type ControlsReportingOfAttemptsToUseAnOptionalTypeAsAParameterToAWithStatement =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to use an `Optional` type as an operand to a unary operator (like `~`) or the left-hand operator of a binary operator (like `*` or `<<`).
 */
export type ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnOperandForABinaryOrUnaryOperator =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a symbol that has more than one type declaration.
 */
export type ControlsReportingOfAttemptsToDeclareTheTypeOfASymbolMultipleTimes =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics related to function return type compatibility.
 */
export type ControlsReportingOfFunctionReturnTypeIncompatibility =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an attempt to access a non-required field within a `TypedDict` without first checking whether it is present.
 */
export type ControlsReportingOfAttemptsToAccessANonRequiredKeyInATypedDictWithoutACheckForItsPresence =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for function decorators that have no type annotations. These obscure the function type, defeating many type analysis features.
 */
export type ControlsReportingOfFunctionDecoratorsWithoutTypeAnnotationsWhichObscureFunctionTypes =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for class decorators that have no type annotations. These obscure the class type, defeating many type analysis features.
 */
export type ControlsReportingOfClassDecoratorsWithoutTypeAnnotationsWhichObscureClassTypes =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for base classes whose type cannot be determined statically. These obscure the class type, defeating many type analysis features.
 */
export type ControlsReportingOfABaseClassOfAnUnknownTypeWhichObscuresMostTypeCheckingForTheClass =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics when `namedtuple` is used rather than `NamedTuple`. The former contains no type information, whereas the latter does.
 */
export type ControlsReportingOfANamedTupleDefinitionThatDoesNotContainTypeInformation =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for incorrect usage of private or protected variables or functions. Protected class members begin with a single underscore (`_`) and can be accessed only by subclasses. Private class members begin with a double underscore but do not end in a double underscore and can be accessed only within the declaring class. Variables and functions declared outside of a class are considered private if their names start with either a single or double underscore, and they cannot be accessed outside of the declaring module.
 */
export type ControlsReportingOfPrivateVariablesAndFunctionsUsedOutsideOfTheOwningClassOrModuleAndUsageOfProtectedMembersOutsideOfSubclasses =
  'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Prior to Python 3.5, the grammar did not support type annotations, so types needed to be specified using type comments. Python 3.5 eliminated the need for function type comments, and Python 3.6 eliminated the need for variable type comments. Future versions of Python will likely deprecate all support for type comments. If enabled, this check will flag any type comment usage unless it is required for compatibility with the specified language version.
 */
export type ControlsReportingOfDeprecatedTypeCommentUsage = 'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Generate or suppress diagnostics for use of a symbol from a `py.typed` module that is not meant to be exported from that module.
 */
export type ControlsReportingOfImproperUsageOfSymbolImportedFromAPyTypedModuleThatIsNotReExportedFromThatModule =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for attempts to redefine variables whose names are all-caps with underscores and numerals.
 */
export type ControlsReportingOfAttemptsToRedefineVariablesThatAreInAllCaps =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for use of a class or function that has been marked as deprecated.
 */
export type ControlsReportingOfUseOfDeprecatedClassOrFunction =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for methods that override a method of the same name in a base class in an incompatible manner (wrong number of parameters, incompatible parameter types, or incompatible return type).
 */
export type ControlsReportingOfMethodOverridesInSubclassesThatRedefineTheMethodInAnIncompatibleWay =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for class variable declarations that override a symbol of the same name in a base class with a type that is incompatible with the base class symbol type.
 */
export type ControlsReportingOfOverridesInSubclassesThatRedefineAVariableInAnIncompatibleWay =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics when an `__init__` method signature is inconsistent with a `__new__` signature.
 */
export type ControlsReportingOf_Init__And_New__MethodsWhoseSignaturesAreInconsistent =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for function overloads that overlap in signature and obscure each other or have incompatible return types.
 */
export type ControlsReportingOfFunctionOverloadsThatOverlapInSignatureAndObscureEachOtherOrDoNotAgreeOnReturnType =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for variables that are possibly unbound on some code paths.
 */
export type ControlsReportingOfAttemptsToUseVariableThatIsPossiblyUnboundOnSomeCodePaths =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `__init__`, `__init_subclass__`, `__enter__` and `__exit__` methods in a subclass that fail to call through to the same-named method on a base class.
 */
export type ControlsReportingOfMissingCallToParentClassForInherited_Init__Methods =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for instance variables within a class that are not initialized or declared within the class body or the `__init__` method.
 */
export type ControlsReportingOfInstanceVariablesThatAreNotInitializedInTheConstructor =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for invalid escape sequences used within string literals. The Python specification indicates that such sequences will generate a syntax error in future versions.
 */
export type ControlsReportingOfInvalidEscapeSequencesUsedWithinStringLiterals =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for input or return parameters for functions or methods that have an unknown type.
 */
export type ControlsReportingInputAndReturnParametersWhoseTypesAreUnknown =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for call arguments for functions or methods that have an unknown type.
 */
export type ControlsReportingArgumentExpressionsWhoseTypesAreUnknown =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for input or return parameters for lambdas that have an unknown type.
 */
export type ControlsReportingInputAndReturnParametersForLambdasWhoseTypesAreUnknown =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for variables that have an unknown type.
 */
export type ControlsReportingLocalVariablesWhoseTypesAreUnknown =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for class or instance variables that have an unknown type.
 */
export type ControlsReportingClassAndInstanceVariablesWhoseTypesAreUnknown =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for input parameters for functions or methods that are missing a type annotation. The `self` and `cls` parameters used within methods are exempt from this check.
 */
export type ControlsReportingInputParametersThatAreMissingATypeAnnotation =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics when a generic class is used without providing explicit or implicit type arguments.
 */
export type ControlsReportingGenericClassReferenceWithMissingTypeArguments =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics when a `TypeVar` is used inappropriately (e.g. if a `TypeVar` appears only once) within a generic function signature.
 */
export type ControlsReportingImproperUseOfTypeVariablesWithinFunctionSignatures =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for function calls, list expressions, set expressions, or dictionary expressions within a default value initialization expression. Such calls can mask expensive operations that are performed at module initialization time.
 */
export type ControlsReportingUsageOfFunctionCallsWithinADefaultValueInitializerExpression =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `isinstance` or `issubclass` calls where the result is statically determined to be always true or always false. Such calls are often indicative of a programming error.
 */
export type ControlsReportingCallsToIsinstanceOrIssubclassWhereTheResultIsStaticallyDeterminedToBeAlwaysOrNeverTrue =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `cast` calls that are statically determined to be unnecessary. Such calls are sometimes indicative of a programming error.
 */
export type ControlsReportingCallsToCastThatAreUnnecessary =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `==` or `!=` comparisons or other conditional expressions that are statically determined to always evaluate to `False` or `True`. Such comparisons are sometimes indicative of a programming error. Also reports `case` clauses in a `match` statement that can be statically determined to never match (with exception of the `_` wildcard pattern, which is exempted).
 */
export type ControlsReportingTheUseOfOrComparisonsThatAreUnnecessary =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `in` operations that are statically determined to always evaluate to `False` or `True`. Such operations are sometimes indicative of a programming error.
 */
export type ControlsReportingTheUseOfInOperationsThatAreUnnecessary =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for `assert` statement that will provably always assert because its first argument is a parenthesized tuple (for example, `assert (v > 0, "Bad value")` when the intent was probably `assert v > 0, "Bad value"`). This is a common programming error.
 */
export type ControlsReportingAssertExpressionsThatWillAlwaysEvaluateToTrue =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a missing or misnamed `self` parameter in instance methods and `cls` parameter in class methods. Instance methods in metaclasses (classes that derive from `type`) are allowed to use `cls` for instance methods.
 */
export type ControlsReportingMissingOrMisnamedSelfParameters =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for two or more string literals that follow each other, indicating an implicit concatenation. This is considered a bad practice and often masks bugs such as missing commas.
 */
export type ControlsReportingUsageOfImplicitConcatenationOfStringLiterals =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for unbound variables.
 */
export type ControlsReportingOfAttemptsToUseAnUnboundVariable =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for the use of an unhashable object in a container that requires hashability.
 */
export type ControlsReportingOfUnhashableObjectInContainerThatRequiresHashability =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for undefined variables.
 */
export type ControlsReportingOfAttemptsToUseAnUndefinedVariable =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for statements that are syntactically correct but have no purpose within a type stub file.
 */
export type ControlsReportingOfTypeStubStatementsThatDoNotConformToPEP484 =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a module-level `__getattr__` call in a type stub file, indicating that it is incomplete.
 */
export type ControlsReportingOfIncompleteTypeStubsThatDeclareAModuleLevel_Getattr__Function =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for statements that define or manipulate `__all__` in a way that is not allowed by a static type checker, thus rendering the contents of `__all__` to be unknown or incorrect. Also reports names within the `__all__` list that are not present in the module namespace.
 */
export type ControlsReportingOfUnsupportedOperationsPerformedOn_All__ =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for call statements whose return value is not used in any way and is not `None`.
 */
export type ControlsReportingOfCallExpressionsWhoseResultsAreNotConsumed =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for call statements whose return value is not used in any way and is a `Coroutine`. This identifies a common error where an `await` keyword is mistakenly omitted.
 */
export type ControlsReportingOfCallExpressionsThatReturnsCoroutineWhoseResultsAreNotConsumed =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for an `except` clause that will never be reached.
 */
export type ControlsReportingOfUnreachableExceptClauses = 'none' | 'information' | 'warning' | 'error' | true | false;
/**
 * Generate or suppress diagnostics for simple expressions whose results are not used in any way.
 */
export type ControlsReportingOfSimpleExpressionsWhoseValueIsNotUsedInAnyWay =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a `# type: ignore` or `# pyright: ignore` comment that would have no effect if removed.
 */
export type ControlsReportingOfTypeIgnoreCommentsThatHaveNoEffect =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for a `match` statement that does not provide cases that exhaustively match against all potential types of the target expression.
 */
export type ControlsReportingOfMatchStatementsThatDoNotExhaustivelyMatchAllPossibleValues =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for code that is determined to be structurally unreachable or unreachable by type analysis.
 */
export type ControlsReportingOfCodeThatIsDeterminedByTypeAnalysisToBeUnreachable =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
/**
 * Generate or suppress diagnostics for overridden methods in a class that are missing an explicit `@override` decorator.
 */
export type ControlsReportingOverriddenMethodsThatAreMissingAnOverrideDecorator =
  | 'none'
  | 'information'
  | 'warning'
  | 'error'
  | true
  | false;
export type AdditionalImportSearchResolutionPath = string;
/**
 * Additional search paths that will be used when searching for modules imported by files.
 */
export type AdditionalImportSearchResolutionPaths = AdditionalImportSearchResolutionPath[];
/**
 * Specifies the version of Python that will be used to execute the source code. The version should be specified as a string in the format `M.m` where `M` is the major version and `m` is the minor (e.g. `3.0` or `3.6`). If a version is provided, pyright will generate errors if the source code makes use of language features that are not supported in that version. It will also tailor its use of type stub files, which conditionalizes type definitions based on the version. If no version is specified, pyright will use the version of the current python interpreter, if one is present.
 */
export type PythonVersionToAssumeDuringTypeAnalysis = string;
/**
 * Specifies the target platform that will be used to execute the source code. Should be one of `Windows`, `Darwin`, `Linux`, or `All`. If specified, pyright will tailor its use of type stub files, which conditionalize type definitions based on the platform. If no platform is specified, pyright will use the current platform.
 */
export type PythonPlatformToAssumeDuringTypeAnalysis = 'Windows' | 'Darwin' | 'Linux' | 'All';
/**
 * Path to a directory containing one or more subdirectories, each of which contains a virtual environment. When used in conjunction with a `venv` setting, pyright will search for imports in the virtual environment's site-packages directory rather than the paths specified by the default Python interpreter. If you are working on a project with other developers, it is best not to specify this setting in the config file, since this path will typically differ for each developer. Instead, it can be specified on the command line or in a per-user setting.
 */
export type PathToDirectoryContainingAFolderOfVirtualEnvironments = string;
/**
 * Used in conjunction with the `venvPath`, specifies the virtual environment to use.
 */
export type NameOfVirtualEnvironmentSubdirectoryWithinVenvPath = string;
/**
 * Specifies whether output logs should be verbose. This is useful when diagnosing certain problems like import resolution issues.
 */
export type OutputVerboseLogging = boolean;
/**
 * Root path for the code that will execute within this execution environment.
 */
export type PathToCodeSubdirectoryToWhichTheseSettingsApply = string;
/**
 * Specifies a list of execution environments. Execution environments are searched from start to finish by comparing the path of a source file with the root path specified in the execution environment.
 */
export type AnalysisSettingsToUseForSpecifiedSubdirectoriesOfCode =
  AnalysisSettingsToUseForSpecifiedSubdirectoriesOfCode1[];

/**
 * Pyright Configuration Schema
 */
export interface HttpsJsonSchemastoreOrgPartialPyrightJson {
  extends?: PathToConfigurationFileThatThisConfigurationExtends;
  include?: FilesAndDirectoriesIncludedInTypeAnalysis;
  exclude?: FilesAndDirectoriesExcludedFromTypeAnalysis;
  ignore?: FilesAndDirectoriesWhoseDiagnosticsAreSuppressed;
  strict?: FilesAndDirectoriesThatShouldUseStrictTypeCheckingRules;
  defineConstant?: IdentifiersThatShouldBeTreatedAsConstants;
  typeCheckingMode?: SpecifiesTheDefaultRuleSetToUseForTypeChecking;
  useLibraryCodeForTypes?: UseLibraryImplementationsToExtractTypeInformationWhenTypeStubIsNotPresent;
  typeshedPath?: PathToDirectoryContainingTypeshedTypeStubFiles;
  stubPath?: PathToDirectoryContainingCustomTypeStubFiles;
  disableBytesTypePromotions?: DoNotTreatBytearrayAndMemoryviewAsImplicitSubtypesOfBytes;
  strictListInference?: InferStrictTypesForListExpressions;
  strictSetInference?: InferStrictTypesForSetExpressions;
  strictDictionaryInference?: InferStrictTypesForDictionaryExpressions;
  analyzeUnannotatedFunctions?: AnalyzeAndReportDiagnosticsForFunctionsThatHaveNoAnnotations;
  strictParameterNoneValue?: AllowImplicitOptionalWhenDefaultParameterValueIsNone;
  enableExperimentalFeatures?: EnableTheUseOfExperimentalFeaturesThatAreNotPartOfThePythonTypingSpec;
  enableTypeIgnoreComments?: AllowTypeIgnoreComments;
  enableReachabilityAnalysis?: IdentifyCodeDeterminedToBeUnreachableThroughTypeAnalysis;
  deprecateTypingAliases?: TreatTypingSpecificAliasesToStandardTypesAsDeprecated;
  reportGeneralTypeIssues?: ControlsReportingOfGeneralTypeIssues;
  reportPropertyTypeMismatch?: ControlsReportingOfPropertyGetterSetterTypeMismatches;
  reportFunctionMemberAccess?: ControlsReportingOfMemberAccessesOnFunctionObjects;
  reportMissingImports?: ControlsReportingOfImportsThatCannotBeResolved;
  reportMissingModuleSource?: ControlsReportingOfImportsThatCannotBeResolvedToSourceFiles;
  reportInvalidTypeForm?: ControlsReportingOfTypeExpressionsThatUseAnInvalidForm;
  reportMissingTypeStubs?: ControlsReportingOfImportsThatCannotBeResolvedToTypeStubFiles;
  reportImportCycles?: ControlsReportingOfModuleImportsThatCreateCyclesInImportGraph;
  reportUnusedImport?: ControlsReportingOfImportedSymbolsThatAreNotReferencedWithinTheSourceFile;
  reportUnusedClass?: ControlsReportingOfPrivateClassesThatAreNotAccessed;
  reportUnusedFunction?: ControlsReportingOfPrivateFunctionsOrMethodsThatAreNotAccessed;
  reportUnusedVariable?: ControlsReportingOfLocalVariablesThatAreNotAccessed;
  reportDuplicateImport?: ControlsReportingOfSymbolsOrModulesThatAreImportedMoreThanOnce;
  reportWildcardImportFromLibrary?: ControlsReportingOfWildcardImportFromExternalLibrary;
  reportAbstractUsage?: ControlsReportingOfAttemptedInstantiationOfAbstractClass;
  reportArgumentType?: ControlsReportingOfIncompatibleArgumentType;
  reportAssertTypeFailure?: ControlsReportingOfTypeMismatchDetectedByTypingAssertTypeCall;
  reportAssignmentType?: ControlsReportingOfTypeIncompatibilitiesForAssignments;
  reportAttributeAccessIssue?: ControlsReportingOfIssuesRelatedToAttributeAccesses;
  reportCallIssue?: ControlsReportingOfIssuesRelatedToCallExpressionsAndArguments;
  reportInconsistentOverload?: ControlsReportingOfInconsistenciesBetweenFunctionOverloadSignatures;
  reportIndexIssue?: ControlsReportingOfIssuesRelatedToIndexOperationsAndExpressions;
  reportInvalidTypeArguments?: ControlsReportingOfInvalidTypeArgumentUsage;
  reportNoOverloadImplementation?: ControlsReportingOfAnOverloadedFunctionOrMethodWithAMissingImplementation;
  reportOperatorIssue?: ControlsReportingOfDiagnosticsRelatedToUnaryAndBinaryOperators;
  reportOptionalSubscript?: ControlsReportingOfAttemptsToSubscriptIndexAVariableWithOptionalType;
  reportOptionalMemberAccess?: ControlsReportingOfAttemptsToAccessAMemberOfAVariableWithOptionalType;
  reportOptionalCall?: ControlsReportingOfAttemptsToCallAVariableWithOptionalType;
  reportOptionalIterable?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnIterableValue;
  reportOptionalContextManager?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAParameterToAWithStatement;
  reportOptionalOperand?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnOperandForABinaryOrUnaryOperator;
  reportRedeclaration?: ControlsReportingOfAttemptsToDeclareTheTypeOfASymbolMultipleTimes;
  reportReturnType?: ControlsReportingOfFunctionReturnTypeIncompatibility;
  reportTypedDictNotRequiredAccess?: ControlsReportingOfAttemptsToAccessANonRequiredKeyInATypedDictWithoutACheckForItsPresence;
  reportUntypedFunctionDecorator?: ControlsReportingOfFunctionDecoratorsWithoutTypeAnnotationsWhichObscureFunctionTypes;
  reportUntypedClassDecorator?: ControlsReportingOfClassDecoratorsWithoutTypeAnnotationsWhichObscureClassTypes;
  reportUntypedBaseClass?: ControlsReportingOfABaseClassOfAnUnknownTypeWhichObscuresMostTypeCheckingForTheClass;
  reportUntypedNamedTuple?: ControlsReportingOfANamedTupleDefinitionThatDoesNotContainTypeInformation;
  reportPrivateUsage?: ControlsReportingOfPrivateVariablesAndFunctionsUsedOutsideOfTheOwningClassOrModuleAndUsageOfProtectedMembersOutsideOfSubclasses;
  reportTypeCommentUsage?: ControlsReportingOfDeprecatedTypeCommentUsage;
  reportPrivateImportUsage?: ControlsReportingOfImproperUsageOfSymbolImportedFromAPyTypedModuleThatIsNotReExportedFromThatModule;
  reportConstantRedefinition?: ControlsReportingOfAttemptsToRedefineVariablesThatAreInAllCaps;
  reportDeprecated?: ControlsReportingOfUseOfDeprecatedClassOrFunction;
  reportIncompatibleMethodOverride?: ControlsReportingOfMethodOverridesInSubclassesThatRedefineTheMethodInAnIncompatibleWay;
  reportIncompatibleVariableOverride?: ControlsReportingOfOverridesInSubclassesThatRedefineAVariableInAnIncompatibleWay;
  reportInconsistentConstructor?: ControlsReportingOf_Init__And_New__MethodsWhoseSignaturesAreInconsistent;
  reportOverlappingOverload?: ControlsReportingOfFunctionOverloadsThatOverlapInSignatureAndObscureEachOtherOrDoNotAgreeOnReturnType;
  reportPossiblyUnboundVariable?: ControlsReportingOfAttemptsToUseVariableThatIsPossiblyUnboundOnSomeCodePaths;
  reportMissingSuperCall?: ControlsReportingOfMissingCallToParentClassForInherited_Init__Methods;
  reportUninitializedInstanceVariable?: ControlsReportingOfInstanceVariablesThatAreNotInitializedInTheConstructor;
  reportInvalidStringEscapeSequence?: ControlsReportingOfInvalidEscapeSequencesUsedWithinStringLiterals;
  reportUnknownParameterType?: ControlsReportingInputAndReturnParametersWhoseTypesAreUnknown;
  reportUnknownArgumentType?: ControlsReportingArgumentExpressionsWhoseTypesAreUnknown;
  reportUnknownLambdaType?: ControlsReportingInputAndReturnParametersForLambdasWhoseTypesAreUnknown;
  reportUnknownVariableType?: ControlsReportingLocalVariablesWhoseTypesAreUnknown;
  reportUnknownMemberType?: ControlsReportingClassAndInstanceVariablesWhoseTypesAreUnknown;
  reportMissingParameterType?: ControlsReportingInputParametersThatAreMissingATypeAnnotation;
  reportMissingTypeArgument?: ControlsReportingGenericClassReferenceWithMissingTypeArguments;
  reportInvalidTypeVarUse?: ControlsReportingImproperUseOfTypeVariablesWithinFunctionSignatures;
  reportCallInDefaultInitializer?: ControlsReportingUsageOfFunctionCallsWithinADefaultValueInitializerExpression;
  reportUnnecessaryIsInstance?: ControlsReportingCallsToIsinstanceOrIssubclassWhereTheResultIsStaticallyDeterminedToBeAlwaysOrNeverTrue;
  reportUnnecessaryCast?: ControlsReportingCallsToCastThatAreUnnecessary;
  reportUnnecessaryComparison?: ControlsReportingTheUseOfOrComparisonsThatAreUnnecessary;
  reportUnnecessaryContains?: ControlsReportingTheUseOfInOperationsThatAreUnnecessary;
  reportAssertAlwaysTrue?: ControlsReportingAssertExpressionsThatWillAlwaysEvaluateToTrue;
  reportSelfClsParameterName?: ControlsReportingMissingOrMisnamedSelfParameters;
  reportImplicitStringConcatenation?: ControlsReportingUsageOfImplicitConcatenationOfStringLiterals;
  reportUnboundVariable?: ControlsReportingOfAttemptsToUseAnUnboundVariable;
  reportUnhashable?: ControlsReportingOfUnhashableObjectInContainerThatRequiresHashability;
  reportUndefinedVariable?: ControlsReportingOfAttemptsToUseAnUndefinedVariable;
  reportInvalidStubStatement?: ControlsReportingOfTypeStubStatementsThatDoNotConformToPEP484;
  reportIncompleteStub?: ControlsReportingOfIncompleteTypeStubsThatDeclareAModuleLevel_Getattr__Function;
  reportUnsupportedDunderAll?: ControlsReportingOfUnsupportedOperationsPerformedOn_All__;
  reportUnusedCallResult?: ControlsReportingOfCallExpressionsWhoseResultsAreNotConsumed;
  reportUnusedCoroutine?: ControlsReportingOfCallExpressionsThatReturnsCoroutineWhoseResultsAreNotConsumed;
  reportUnusedExcept?: ControlsReportingOfUnreachableExceptClauses;
  reportUnusedExpression?: ControlsReportingOfSimpleExpressionsWhoseValueIsNotUsedInAnyWay;
  reportUnnecessaryTypeIgnoreComment?: ControlsReportingOfTypeIgnoreCommentsThatHaveNoEffect;
  reportMatchNotExhaustive?: ControlsReportingOfMatchStatementsThatDoNotExhaustivelyMatchAllPossibleValues;
  reportUnreachable?: ControlsReportingOfCodeThatIsDeterminedByTypeAnalysisToBeUnreachable;
  reportImplicitOverride?: ControlsReportingOverriddenMethodsThatAreMissingAnOverrideDecorator;
  extraPaths?: AdditionalImportSearchResolutionPaths;
  pythonVersion?: PythonVersionToAssumeDuringTypeAnalysis;
  pythonPlatform?: PythonPlatformToAssumeDuringTypeAnalysis;
  venvPath?: PathToDirectoryContainingAFolderOfVirtualEnvironments;
  venv?: NameOfVirtualEnvironmentSubdirectoryWithinVenvPath;
  verboseOutput?: OutputVerboseLogging;
  executionEnvironments?: AnalysisSettingsToUseForSpecifiedSubdirectoriesOfCode;
  [k: string]: unknown | undefined;
}
/**
 * Set of identifiers that should be assumed to contain a constant value wherever used within this program. For example, `{ "DEBUG": true }` indicates that pyright should assume that the identifier `DEBUG` will always be equal to `True`. If this identifier is used within a conditional expression (such as `if not DEBUG:`) pyright will use the indicated value to determine whether the guarded block is reachable or not. Member expressions that reference one of these constants (e.g. `my_module.DEBUG`) are also supported.
 */
export interface IdentifiersThatShouldBeTreatedAsConstants {
  [k: string]: ValueOfConstantBooleanOrString | undefined;
}
export interface AnalysisSettingsToUseForSpecifiedSubdirectoriesOfCode1 {
  root: PathToCodeSubdirectoryToWhichTheseSettingsApply;
  disableBytesTypePromotions?: DoNotTreatBytearrayAndMemoryviewAsImplicitSubtypesOfBytes;
  strictListInference?: InferStrictTypesForListExpressions;
  strictSetInference?: InferStrictTypesForSetExpressions;
  strictDictionaryInference?: InferStrictTypesForDictionaryExpressions;
  analyzeUnannotatedFunctions?: AnalyzeAndReportDiagnosticsForFunctionsThatHaveNoAnnotations;
  strictParameterNoneValue?: AllowImplicitOptionalWhenDefaultParameterValueIsNone;
  enableExperimentalFeatures?: EnableTheUseOfExperimentalFeaturesThatAreNotPartOfThePythonTypingSpec;
  enableTypeIgnoreComments?: AllowTypeIgnoreComments;
  enableReachabilityAnalysis?: IdentifyCodeDeterminedToBeUnreachableThroughTypeAnalysis;
  deprecateTypingAliases?: TreatTypingSpecificAliasesToStandardTypesAsDeprecated;
  reportGeneralTypeIssues?: ControlsReportingOfGeneralTypeIssues;
  reportPropertyTypeMismatch?: ControlsReportingOfPropertyGetterSetterTypeMismatches;
  reportFunctionMemberAccess?: ControlsReportingOfMemberAccessesOnFunctionObjects;
  reportMissingImports?: ControlsReportingOfImportsThatCannotBeResolved;
  reportMissingModuleSource?: ControlsReportingOfImportsThatCannotBeResolvedToSourceFiles;
  reportInvalidTypeForm?: ControlsReportingOfTypeExpressionsThatUseAnInvalidForm;
  reportMissingTypeStubs?: ControlsReportingOfImportsThatCannotBeResolvedToTypeStubFiles;
  reportImportCycles?: ControlsReportingOfModuleImportsThatCreateCyclesInImportGraph;
  reportUnusedImport?: ControlsReportingOfImportedSymbolsThatAreNotReferencedWithinTheSourceFile;
  reportUnusedClass?: ControlsReportingOfPrivateClassesThatAreNotAccessed;
  reportUnusedFunction?: ControlsReportingOfPrivateFunctionsOrMethodsThatAreNotAccessed;
  reportUnusedVariable?: ControlsReportingOfLocalVariablesThatAreNotAccessed;
  reportDuplicateImport?: ControlsReportingOfSymbolsOrModulesThatAreImportedMoreThanOnce;
  reportWildcardImportFromLibrary?: ControlsReportingOfWildcardImportFromExternalLibrary;
  reportAbstractUsage?: ControlsReportingOfAttemptedInstantiationOfAbstractClass;
  reportArgumentType?: ControlsReportingOfIncompatibleArgumentType;
  reportAssertTypeFailure?: ControlsReportingOfTypeMismatchDetectedByTypingAssertTypeCall;
  reportAssignmentType?: ControlsReportingOfTypeIncompatibilitiesForAssignments;
  reportAttributeAccessIssue?: ControlsReportingOfIssuesRelatedToAttributeAccesses;
  reportCallIssue?: ControlsReportingOfIssuesRelatedToCallExpressionsAndArguments;
  reportInconsistentOverload?: ControlsReportingOfInconsistenciesBetweenFunctionOverloadSignatures;
  reportIndexIssue?: ControlsReportingOfIssuesRelatedToIndexOperationsAndExpressions;
  reportInvalidTypeArguments?: ControlsReportingOfInvalidTypeArgumentUsage;
  reportNoOverloadImplementation?: ControlsReportingOfAnOverloadedFunctionOrMethodWithAMissingImplementation;
  reportOperatorIssue?: ControlsReportingOfDiagnosticsRelatedToUnaryAndBinaryOperators;
  reportOptionalSubscript?: ControlsReportingOfAttemptsToSubscriptIndexAVariableWithOptionalType;
  reportOptionalMemberAccess?: ControlsReportingOfAttemptsToAccessAMemberOfAVariableWithOptionalType;
  reportOptionalCall?: ControlsReportingOfAttemptsToCallAVariableWithOptionalType;
  reportOptionalIterable?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnIterableValue;
  reportOptionalContextManager?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAParameterToAWithStatement;
  reportOptionalOperand?: ControlsReportingOfAttemptsToUseAnOptionalTypeAsAnOperandForABinaryOrUnaryOperator;
  reportRedeclaration?: ControlsReportingOfAttemptsToDeclareTheTypeOfASymbolMultipleTimes;
  reportReturnType?: ControlsReportingOfFunctionReturnTypeIncompatibility;
  reportTypedDictNotRequiredAccess?: ControlsReportingOfAttemptsToAccessANonRequiredKeyInATypedDictWithoutACheckForItsPresence;
  reportUntypedFunctionDecorator?: ControlsReportingOfFunctionDecoratorsWithoutTypeAnnotationsWhichObscureFunctionTypes;
  reportUntypedClassDecorator?: ControlsReportingOfClassDecoratorsWithoutTypeAnnotationsWhichObscureClassTypes;
  reportUntypedBaseClass?: ControlsReportingOfABaseClassOfAnUnknownTypeWhichObscuresMostTypeCheckingForTheClass;
  reportUntypedNamedTuple?: ControlsReportingOfANamedTupleDefinitionThatDoesNotContainTypeInformation;
  reportPrivateUsage?: ControlsReportingOfPrivateVariablesAndFunctionsUsedOutsideOfTheOwningClassOrModuleAndUsageOfProtectedMembersOutsideOfSubclasses;
  reportTypeCommentUsage?: ControlsReportingOfDeprecatedTypeCommentUsage;
  reportPrivateImportUsage?: ControlsReportingOfImproperUsageOfSymbolImportedFromAPyTypedModuleThatIsNotReExportedFromThatModule;
  reportConstantRedefinition?: ControlsReportingOfAttemptsToRedefineVariablesThatAreInAllCaps;
  reportDeprecated?: ControlsReportingOfUseOfDeprecatedClassOrFunction;
  reportIncompatibleMethodOverride?: ControlsReportingOfMethodOverridesInSubclassesThatRedefineTheMethodInAnIncompatibleWay;
  reportIncompatibleVariableOverride?: ControlsReportingOfOverridesInSubclassesThatRedefineAVariableInAnIncompatibleWay;
  reportInconsistentConstructor?: ControlsReportingOf_Init__And_New__MethodsWhoseSignaturesAreInconsistent;
  reportOverlappingOverload?: ControlsReportingOfFunctionOverloadsThatOverlapInSignatureAndObscureEachOtherOrDoNotAgreeOnReturnType;
  reportPossiblyUnboundVariable?: ControlsReportingOfAttemptsToUseVariableThatIsPossiblyUnboundOnSomeCodePaths;
  reportMissingSuperCall?: ControlsReportingOfMissingCallToParentClassForInherited_Init__Methods;
  reportUninitializedInstanceVariable?: ControlsReportingOfInstanceVariablesThatAreNotInitializedInTheConstructor;
  reportInvalidStringEscapeSequence?: ControlsReportingOfInvalidEscapeSequencesUsedWithinStringLiterals;
  reportUnknownParameterType?: ControlsReportingInputAndReturnParametersWhoseTypesAreUnknown;
  reportUnknownArgumentType?: ControlsReportingArgumentExpressionsWhoseTypesAreUnknown;
  reportUnknownLambdaType?: ControlsReportingInputAndReturnParametersForLambdasWhoseTypesAreUnknown;
  reportUnknownVariableType?: ControlsReportingLocalVariablesWhoseTypesAreUnknown;
  reportUnknownMemberType?: ControlsReportingClassAndInstanceVariablesWhoseTypesAreUnknown;
  reportMissingParameterType?: ControlsReportingInputParametersThatAreMissingATypeAnnotation;
  reportMissingTypeArgument?: ControlsReportingGenericClassReferenceWithMissingTypeArguments;
  reportInvalidTypeVarUse?: ControlsReportingImproperUseOfTypeVariablesWithinFunctionSignatures;
  reportCallInDefaultInitializer?: ControlsReportingUsageOfFunctionCallsWithinADefaultValueInitializerExpression;
  reportUnnecessaryIsInstance?: ControlsReportingCallsToIsinstanceOrIssubclassWhereTheResultIsStaticallyDeterminedToBeAlwaysOrNeverTrue;
  reportUnnecessaryCast?: ControlsReportingCallsToCastThatAreUnnecessary;
  reportUnnecessaryComparison?: ControlsReportingTheUseOfOrComparisonsThatAreUnnecessary;
  reportUnnecessaryContains?: ControlsReportingTheUseOfInOperationsThatAreUnnecessary;
  reportAssertAlwaysTrue?: ControlsReportingAssertExpressionsThatWillAlwaysEvaluateToTrue;
  reportSelfClsParameterName?: ControlsReportingMissingOrMisnamedSelfParameters;
  reportImplicitStringConcatenation?: ControlsReportingUsageOfImplicitConcatenationOfStringLiterals;
  reportUnboundVariable?: ControlsReportingOfAttemptsToUseAnUnboundVariable;
  reportUnhashable?: ControlsReportingOfUnhashableObjectInContainerThatRequiresHashability;
  reportUndefinedVariable?: ControlsReportingOfAttemptsToUseAnUndefinedVariable;
  reportInvalidStubStatement?: ControlsReportingOfTypeStubStatementsThatDoNotConformToPEP484;
  reportIncompleteStub?: ControlsReportingOfIncompleteTypeStubsThatDeclareAModuleLevel_Getattr__Function;
  reportUnsupportedDunderAll?: ControlsReportingOfUnsupportedOperationsPerformedOn_All__;
  reportUnusedCallResult?: ControlsReportingOfCallExpressionsWhoseResultsAreNotConsumed;
  reportUnusedCoroutine?: ControlsReportingOfCallExpressionsThatReturnsCoroutineWhoseResultsAreNotConsumed;
  reportUnusedExcept?: ControlsReportingOfUnreachableExceptClauses;
  reportUnusedExpression?: ControlsReportingOfSimpleExpressionsWhoseValueIsNotUsedInAnyWay;
  reportUnnecessaryTypeIgnoreComment?: ControlsReportingOfTypeIgnoreCommentsThatHaveNoEffect;
  reportMatchNotExhaustive?: ControlsReportingOfMatchStatementsThatDoNotExhaustivelyMatchAllPossibleValues;
  reportUnreachable?: ControlsReportingOfCodeThatIsDeterminedByTypeAnalysisToBeUnreachable;
  reportImplicitOverride?: ControlsReportingOverriddenMethodsThatAreMissingAnOverrideDecorator;
  extraPaths?: AdditionalImportSearchResolutionPaths;
  pythonVersion?: PythonVersionToAssumeDuringTypeAnalysis;
  pythonPlatform?: PythonPlatformToAssumeDuringTypeAnalysis;
  [k: string]: unknown | undefined;
}
