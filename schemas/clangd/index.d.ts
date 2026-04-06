/* eslint-disable */

/**
 * An external index source
 * https://clangd.llvm.org/config.html#external
 */
export type IndexSource =
  | string
  | {
      /**
       * A file
       * https://clangd.llvm.org/config.html#external
       */
      File: string;
    }
  | {
      /**
       * A server
       * https://clangd.llvm.org/config.html#external
       */
      Server: string;
      /**
       * A mount point
       * https://clangd.llvm.org/config.html#external
       */
      MountPoint?: string;
    };
export type ClangTidyCheck =
  | 'abseil-cleanup-ctad'
  | 'abseil-duration-addition'
  | 'abseil-duration-comparison'
  | 'abseil-duration-conversion-cast'
  | 'abseil-duration-division'
  | 'abseil-duration-factory-float'
  | 'abseil-duration-factory-scale'
  | 'abseil-duration-subtraction'
  | 'abseil-duration-unnecessary-conversion'
  | 'abseil-faster-strsplit-delimiter'
  | 'abseil-no-internal-dependencies'
  | 'abseil-no-namespace'
  | 'abseil-redundant-strcat-calls'
  | 'abseil-str-cat-append'
  | 'abseil-string-find-startswith'
  | 'abseil-string-find-str-contains'
  | 'abseil-time-comparison'
  | 'abseil-time-subtraction'
  | 'abseil-upgrade-duration-conversions'
  | 'altera-id-dependent-backward-branch'
  | 'altera-kernel-name-restriction'
  | 'altera-single-work-item-barrier'
  | 'altera-struct-pack-align'
  | 'altera-unroll-loops'
  | 'android-cloexec-accept'
  | 'android-cloexec-accept4'
  | 'android-cloexec-creat'
  | 'android-cloexec-dup'
  | 'android-cloexec-epoll-create'
  | 'android-cloexec-epoll-create1'
  | 'android-cloexec-fopen'
  | 'android-cloexec-inotify-init'
  | 'android-cloexec-inotify-init1'
  | 'android-cloexec-memfd-create'
  | 'android-cloexec-open'
  | 'android-cloexec-pipe'
  | 'android-cloexec-pipe2'
  | 'android-cloexec-socket'
  | 'android-comparison-in-temp-failure-retry'
  | 'boost-use-to-string'
  | 'bugprone-argument-comment'
  | 'bugprone-assert-side-effect'
  | 'bugprone-assignment-in-if-condition'
  | 'bugprone-bad-signal-to-kill-thread'
  | 'bugprone-bool-pointer-implicit-conversion'
  | 'bugprone-branch-clone'
  | 'bugprone-copy-constructor-init'
  | 'bugprone-dangling-handle'
  | 'bugprone-dynamic-static-initializers'
  | 'bugprone-easily-swappable-parameters'
  | 'bugprone-exception-escape'
  | 'bugprone-fold-init-type'
  | 'bugprone-forward-declaration-namespace'
  | 'bugprone-forwarding-reference-overload'
  | 'bugprone-implicit-widening-of-multiplication-result'
  | 'bugprone-inaccurate-erase'
  | 'bugprone-incorrect-roundings'
  | 'bugprone-infinite-loop'
  | 'bugprone-integer-division'
  | 'bugprone-lambda-function-name'
  | 'bugprone-macro-parentheses'
  | 'bugprone-macro-repeated-side-effects'
  | 'bugprone-misplaced-operator-in-strlen-in-alloc'
  | 'bugprone-misplaced-pointer-arithmetic-in-alloc'
  | 'bugprone-misplaced-widening-cast'
  | 'bugprone-move-forwarding-reference'
  | 'bugprone-multiple-statement-macro'
  | 'bugprone-no-escape'
  | 'bugprone-not-null-terminated-result'
  | 'bugprone-parent-virtual-call'
  | 'bugprone-posix-return'
  | 'bugprone-redundant-branch-condition'
  | 'bugprone-reserved-identifier'
  | 'bugprone-shared-ptr-array-mismatch'
  | 'bugprone-signal-handler'
  | 'bugprone-signed-char-misuse'
  | 'bugprone-sizeof-container'
  | 'bugprone-sizeof-expression'
  | 'bugprone-spuriously-wake-up-functions'
  | 'bugprone-standalone-empty'
  | 'bugprone-string-constructor'
  | 'bugprone-string-integer-assignment'
  | 'bugprone-string-literal-with-embedded-nul'
  | 'bugprone-stringview-nullptr'
  | 'bugprone-suspicious-enum-usage'
  | 'bugprone-suspicious-include'
  | 'bugprone-suspicious-memory-comparison'
  | 'bugprone-suspicious-memset-usage'
  | 'bugprone-suspicious-missing-comma'
  | 'bugprone-suspicious-realloc-usage'
  | 'bugprone-suspicious-semicolon'
  | 'bugprone-suspicious-string-compare'
  | 'bugprone-swapped-arguments'
  | 'bugprone-terminating-continue'
  | 'bugprone-throw-keyword-missing'
  | 'bugprone-too-small-loop-variable'
  | 'bugprone-unchecked-optional-access'
  | 'bugprone-undefined-memory-manipulation'
  | 'bugprone-undelegated-constructor'
  | 'bugprone-unhandled-exception-at-new'
  | 'bugprone-unhandled-self-assignment'
  | 'bugprone-unused-raii'
  | 'bugprone-unused-return-value'
  | 'bugprone-use-after-move'
  | 'bugprone-virtual-near-miss'
  | 'cert-dcl21-cpp'
  | 'cert-dcl50-cpp'
  | 'cert-dcl58-cpp'
  | 'cert-env33-c'
  | 'cert-err33-c'
  | 'cert-err34-c'
  | 'cert-err52-cpp'
  | 'cert-err58-cpp'
  | 'cert-err60-cpp'
  | 'cert-flp30-c'
  | 'cert-mem57-cpp'
  | 'cert-msc50-cpp'
  | 'cert-msc51-cpp'
  | 'cert-oop57-cpp'
  | 'cert-oop58-cpp'
  | 'clang-analyzer-core.DynamicTypePropagation'
  | 'clang-analyzer-core.uninitialized.CapturedBlockVariable'
  | 'clang-analyzer-cplusplus.InnerPointer'
  | 'clang-analyzer-nullability.NullableReturnedFromNonnull'
  | 'clang-analyzer-optin.osx.OSObjectCStyleCast'
  | 'clang-analyzer-optin.performance.GCDAntipattern'
  | 'clang-analyzer-optin.performance.Padding'
  | 'clang-analyzer-optin.portability.UnixAPI'
  | 'clang-analyzer-osx.MIG'
  | 'clang-analyzer-osx.NumberObjectConversion'
  | 'clang-analyzer-osx.OSObjectRetainCount'
  | 'clang-analyzer-osx.ObjCProperty'
  | 'clang-analyzer-osx.cocoa.AutoreleaseWrite'
  | 'clang-analyzer-osx.cocoa.Loops'
  | 'clang-analyzer-osx.cocoa.MissingSuperCall'
  | 'clang-analyzer-osx.cocoa.NonNilReturnValue'
  | 'clang-analyzer-osx.cocoa.RunLoopAutoreleaseLeak'
  | 'clang-analyzer-valist.CopyToSelf'
  | 'clang-analyzer-valist.Uninitialized'
  | 'clang-analyzer-valist.Unterminated'
  | 'concurrency-mt-unsafe'
  | 'concurrency-thread-canceltype-asynchronous'
  | 'cppcoreguidelines-avoid-const-or-ref-data-members'
  | 'cppcoreguidelines-avoid-do-while'
  | 'cppcoreguidelines-avoid-goto'
  | 'cppcoreguidelines-avoid-non-const-global-variables'
  | 'cppcoreguidelines-avoid-reference-coroutine-parameters'
  | 'cppcoreguidelines-init-variables'
  | 'cppcoreguidelines-interfaces-global-init'
  | 'cppcoreguidelines-macro-usage'
  | 'cppcoreguidelines-narrowing-conversions'
  | 'cppcoreguidelines-no-malloc'
  | 'cppcoreguidelines-owning-memory'
  | 'cppcoreguidelines-prefer-member-initializer'
  | 'cppcoreguidelines-pro-bounds-array-to-pointer-decay'
  | 'cppcoreguidelines-pro-bounds-constant-array-index'
  | 'cppcoreguidelines-pro-bounds-pointer-arithmetic'
  | 'cppcoreguidelines-pro-type-const-cast'
  | 'cppcoreguidelines-pro-type-cstyle-cast'
  | 'cppcoreguidelines-pro-type-member-init'
  | 'cppcoreguidelines-pro-type-reinterpret-cast'
  | 'cppcoreguidelines-pro-type-static-cast-downcast'
  | 'cppcoreguidelines-pro-type-union-access'
  | 'cppcoreguidelines-pro-type-vararg'
  | 'cppcoreguidelines-slicing'
  | 'cppcoreguidelines-special-member-functions'
  | 'cppcoreguidelines-virtual-class-destructor'
  | 'darwin-avoid-spinlock'
  | 'darwin-dispatch-once-nonstatic'
  | 'fuchsia-default-arguments-calls'
  | 'fuchsia-default-arguments-declarations'
  | 'fuchsia-multiple-inheritance'
  | 'fuchsia-overloaded-operator'
  | 'fuchsia-statically-constructed-objects'
  | 'fuchsia-trailing-return'
  | 'fuchsia-virtual-inheritance'
  | 'google-build-explicit-make-pair'
  | 'google-build-namespaces'
  | 'google-build-using-namespace'
  | 'google-default-arguments'
  | 'google-explicit-constructor'
  | 'google-global-names-in-headers'
  | 'google-objc-avoid-nsobject-new'
  | 'google-objc-avoid-throwing-exception'
  | 'google-objc-function-naming'
  | 'google-objc-global-variable-declaration'
  | 'google-readability-avoid-underscore-in-googletest-name'
  | 'google-readability-casting'
  | 'google-readability-todo'
  | 'google-runtime-int'
  | 'google-runtime-operator'
  | 'google-upgrade-googletest-case'
  | 'hicpp-avoid-goto'
  | 'hicpp-exception-baseclass'
  | 'hicpp-multiway-paths-covered'
  | 'hicpp-no-assembler'
  | 'hicpp-signed-bitwise'
  | 'linuxkernel-must-use-errs'
  | 'llvm-header-guard'
  | 'llvm-include-order'
  | 'llvm-namespace-comment'
  | 'llvm-prefer-isa-or-dyn-cast-in-conditionals'
  | 'llvm-prefer-register-over-unsigned'
  | 'llvm-twine-local'
  | 'llvmlibc-callee-namespace'
  | 'llvmlibc-implementation-in-namespace'
  | 'llvmlibc-restrict-system-libc-headers'
  | 'misc-confusable-identifiers'
  | 'misc-const-correctness'
  | 'misc-definitions-in-headers'
  | 'misc-misleading-bidirectional'
  | 'misc-misleading-identifier'
  | 'misc-misplaced-const'
  | 'misc-new-delete-overloads'
  | 'misc-no-recursion'
  | 'misc-non-copyable-objects'
  | 'misc-non-private-member-variables-in-classes'
  | 'misc-redundant-expression'
  | 'misc-static-assert'
  | 'misc-throw-by-value-catch-by-reference'
  | 'misc-unconventional-assign-operator'
  | 'misc-uniqueptr-reset-release'
  | 'misc-unused-alias-decls'
  | 'misc-unused-parameters'
  | 'misc-unused-using-decls'
  | 'misc-use-anonymous-namespace'
  | 'modernize-avoid-bind'
  | 'modernize-avoid-c-arrays'
  | 'modernize-concat-nested-namespaces'
  | 'modernize-deprecated-headers'
  | 'modernize-deprecated-ios-base-aliases'
  | 'modernize-loop-convert'
  | 'modernize-macro-to-enum'
  | 'modernize-make-shared'
  | 'modernize-make-unique'
  | 'modernize-pass-by-value'
  | 'modernize-raw-string-literal'
  | 'modernize-redundant-void-arg'
  | 'modernize-replace-auto-ptr'
  | 'modernize-replace-disallow-copy-and-assign-macro'
  | 'modernize-replace-random-shuffle'
  | 'modernize-return-braced-init-list'
  | 'modernize-shrink-to-fit'
  | 'modernize-unary-static-assert'
  | 'modernize-use-auto'
  | 'modernize-use-bool-literals'
  | 'modernize-use-default-member-init'
  | 'modernize-use-emplace'
  | 'modernize-use-equals-default'
  | 'modernize-use-equals-delete'
  | 'modernize-use-nodiscard'
  | 'modernize-use-noexcept'
  | 'modernize-use-nullptr'
  | 'modernize-use-override'
  | 'modernize-use-trailing-return-type'
  | 'modernize-use-transparent-functors'
  | 'modernize-use-uncaught-exceptions'
  | 'modernize-use-using'
  | 'mpi-buffer-deref'
  | 'mpi-type-mismatch'
  | 'objc-assert-equals'
  | 'objc-avoid-nserror-init'
  | 'objc-dealloc-in-category'
  | 'objc-forbidden-subclassing'
  | 'objc-missing-hash'
  | 'objc-nsdate-formatter'
  | 'objc-nsinvocation-argument-lifetime'
  | 'objc-property-declaration'
  | 'objc-super-self'
  | 'openmp-exception-escape'
  | 'openmp-use-default-none'
  | 'performance-faster-string-find'
  | 'performance-for-range-copy'
  | 'performance-implicit-conversion-in-loop'
  | 'performance-inefficient-algorithm'
  | 'performance-inefficient-string-concatenation'
  | 'performance-inefficient-vector-operation'
  | 'performance-move-const-arg'
  | 'performance-move-constructor-init'
  | 'performance-no-automatic-move'
  | 'performance-no-int-to-ptr'
  | 'performance-noexcept-move-constructor'
  | 'performance-trivially-destructible'
  | 'performance-type-promotion-in-math-fn'
  | 'performance-unnecessary-copy-initialization'
  | 'performance-unnecessary-value-param'
  | 'portability-restrict-system-includes'
  | 'portability-simd-intrinsics'
  | 'portability-std-allocator-const'
  | 'readability-avoid-const-params-in-decls'
  | 'readability-braces-around-statements'
  | 'readability-const-return-type'
  | 'readability-container-contains'
  | 'readability-container-data-pointer'
  | 'readability-container-size-empty'
  | 'readability-convert-member-functions-to-static'
  | 'readability-delete-null-pointer'
  | 'readability-duplicate-include'
  | 'readability-else-after-return'
  | 'readability-function-cognitive-complexity'
  | 'readability-function-size'
  | 'readability-identifier-length'
  | 'readability-identifier-naming'
  | 'readability-implicit-bool-conversion'
  | 'readability-inconsistent-declaration-parameter-name'
  | 'readability-isolate-declaration'
  | 'readability-magic-numbers'
  | 'readability-make-member-function-const'
  | 'readability-misleading-indentation'
  | 'readability-misplaced-array-index'
  | 'readability-named-parameter'
  | 'readability-non-const-parameter'
  | 'readability-qualified-auto'
  | 'readability-redundant-access-specifiers'
  | 'readability-redundant-control-flow'
  | 'readability-redundant-declaration'
  | 'readability-redundant-function-ptr-dereference'
  | 'readability-redundant-member-init'
  | 'readability-redundant-preprocessor'
  | 'readability-redundant-smartptr-get'
  | 'readability-redundant-string-cstr'
  | 'readability-redundant-string-init'
  | 'readability-simplify-boolean-expr'
  | 'readability-simplify-subscript-expr'
  | 'readability-static-accessed-through-instance'
  | 'readability-static-definition-in-anonymous-namespace'
  | 'readability-string-compare'
  | 'readability-suspicious-call-argument'
  | 'readability-uniqueptr-delete-release'
  | 'readability-uppercase-literal-suffix'
  | 'readability-use-anyofallof'
  | 'zircon-temporary-objects';

export interface HttpsJsonSchemastoreOrgClangdJson {
  If?: Conditions;
  CompileFlags?: CompilationFlags;
  Index?: CodeInterpretation;
  Style?: Style;
  Diagnostics?: Diagnostics;
  Completion?: CompletionOptions;
  InlayHints?: InlayHintOptions;
  Hover?: HoverOptions;
  /**
   * Configure semantic highlighting
   * https://clangd.llvm.org/config.html#semantic-tokens
   */
  SemanticTokens?: {
    /**
     * Specify semantic token kinds that clangd should not send to client
     * https://clangd.llvm.org/config.html#disabledkinds
     */
    DisabledKinds?: string[];
    /**
     * Specify semantic token modifiers that clangd should not send to client
     * https://clangd.llvm.org/config.html#disabledmodifiers
     */
    DisabledModifiers?: string[];
  };
  /**
   * Specify server side documentation code comment interpretation. Affects the format of the documentation string sent to the client for hover and code completions.
   * https://clangd.llvm.org/config.html#documentation
   */
  Documentation?: {
    /**
     * Determines the comment format of code documentation.
     * https://clangd.llvm.org/config.html#commentformat
     */
    CommentFormat?: 'Plaintext' | 'Markdown' | 'Doxygen';
  };
  [k: string]: unknown | undefined;
}
/**
 * Conditions
 * https://clangd.llvm.org/config.html#if
 */
export interface Conditions {
  /**
   * Path patterns
   * https://clangd.llvm.org/config.html#pathmatch
   */
  PathMatch?: string | string[];
  /**
   * An exclude path pattern
   * https://clangd.llvm.org/config.html#pathexclude
   */
  PathExclude?: string | string[];
}
/**
 * Flag lists to be added or removed
 * https://clangd.llvm.org/config.html#compileflags
 */
export interface CompilationFlags {
  /**
   * Flags to be added to the compile command
   * https://clangd.llvm.org/config.html#add
   */
  Add?: string | string[];
  /**
   * Flags to be removed from the compile command
   * https://clangd.llvm.org/config.html#remove
   */
  Remove?: string | string[];
  /**
   * A directory to search for compilation database
   * https://clangd.llvm.org/config.html#compilationdatabase
   */
  CompilationDatabase?: string | ('Ancestors' | 'None');
  /**
   * An `argv[0]` replacement
   * https://clangd.llvm.org/config.html#compiler
   */
  Compiler?: string;
  /**
   * Whether Clangd should include its own built-in headers (like stddef.h), or use the system header found from the query driver.
   */
  BuiltinHeaders?: 'Clangd' | 'QueryDriver';
}
/**
 * Code interpretation outside of the current file
 */
export interface CodeInterpretation {
  /**
   * Whether to produce a project index from files built in the background
   * https://clangd.llvm.org/config.html#background
   */
  Background?: 'Build' | 'Skip';
  External?: IndexSource;
  /**
   * Whether to index a standard library
   * https://clangd.llvm.org/config.html#standardlibrary
   */
  StandardLibrary?: boolean;
}
/**
 * A code base style
 * https://clangd.llvm.org/config.html#style
 */
export interface Style {
  /**
   * List of fully qualified namespaces
   * https://clangd.llvm.org/config.html#fullyqualifiednamespaces
   */
  FullyQualifiedNamespaces?: string[];
  /**
   * A list of regexes. Headers whose path matches one of these regexes are inserted using "" syntax
   * https://clangd.llvm.org/config#quotedheaders
   */
  QuotedHeaders?: string[];
  /**
   * A list of regexes. Headers whose path matches one of these regexes are inserted using <> syntax.
   * https://clangd.llvm.org/config#angledheaders
   */
  AngledHeaders?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Diagnostics
 * https://clangd.llvm.org/config.html#diagnostics
 */
export interface Diagnostics {
  /**
   * Diagnostic codes that to be suppressed
   * https://clangd.llvm.org/config.html#suppress
   */
  Suppress?: '*' | string[];
  ClangTidy?: ClangtidyOptions;
  /**
   * Whether to enable Include Cleaner's unused includes diagnostics
   * https://clangd.llvm.org/config.html#unusedincludes
   */
  UnusedIncludes?: 'None' | 'Strict';
  Includes?: {
    /**
     * A list of regexes. Include Cleaner will not produce diagnostics for headers whose path is a suffix match for any of these
     * https://clangd.llvm.org/config.html#ignoreheader
     */
    IgnoreHeader?: string[];
    /**
     * Enables/disables detection of unused angled includes that are not from the Standard Library. Disabled by default to avoid false-positives caused by umbrella headers
     * https://clangd.llvm.org/config.html#analyzeangledincludes
     */
    AnalyzeAngledIncludes?: boolean;
  };
  /**
   * Whether to enable Include Cleaner's missing includes diagnostics
   * https://clangd.llvm.org/config.html#missingincludes
   */
  MissingIncludes?: 'None' | 'Strict';
}
/**
 * Clang-Tidy options
 * https://clangd.llvm.org/config.html#clangtidy
 */
export interface ClangtidyOptions {
  /**
   * Checks to enable
   * https://clangd.llvm.org/config.html#add-1
   */
  Add?: (string | ClangTidyCheck) | (string | ClangTidyCheck)[];
  /**
   * Checks to disable
   * https://clangd.llvm.org/config.html#remove-1
   */
  Remove?: (string | ClangTidyCheck) | (string | ClangTidyCheck)[];
  /**
   * Check's options
   * https://clangd.llvm.org/config.html#checkoptions
   */
  CheckOptions?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Whether to run clang-tidy checks that may slow down clangd.
   * https://clangd.llvm.org/config.html#fastcheckfilter
   */
  FastCheckFilter?: 'Strict' | 'Loose' | 'None';
}
/**
 * Completion options
 * https://clangd.llvm.org/config.html#completion
 */
export interface CompletionOptions {
  /**
   * Whether to include suggestions from scopes that are not visible
   * https://clangd.llvm.org/config.html#allscopes
   */
  AllScopes?: boolean;
  /**
   * Determines what is inserted in argument list position when completing a call to a function
   * https://clangd.llvm.org/config#argumentlists
   */
  ArgumentLists?: 'None' | 'OpenDelimiter' | 'Delimiters' | 'FullPlaceholders';
  /**
   * Whether to add #include directives when accepting code completions. Config equivalent of the CLI option --header-insertion.
   */
  HeaderInsertion?: 'IWYU' | 'Never';
  /**
   * Change how completion will suggest code snippets and code patterns.
   */
  CodePatterns?: 'All' | 'None';
  /**
   * Controls whether exact or fuzzy matching is used to decide which macro symbols to offer during code completion.
   * https://clangd.llvm.org/config.html#macrofilter
   */
  MacroFilter?: 'ExactPrefix' | 'FuzzyMatch';
}
/**
 * Inlay-hints options
 * https://clangd.llvm.org/config.html#inlayhints
 */
export interface InlayHintOptions {
  /**
   * Whether to enable inlay-hints
   * https://clangd.llvm.org/config.html#enabled
   */
  Enabled?: boolean;
  /**
   * Whether to enable inlay-hints for parameter names in function calls
   * https://clangd.llvm.org/config.html#parameternames
   */
  ParameterNames?: boolean;
  /**
   * Whether to enable inlay-hints for deduced types
   * https://clangd.llvm.org/config.html#deducedtypes
   */
  DeducedTypes?: boolean;
  /**
   * Whether to enable inlay-hints for designators in aggregate initialization
   * https://clangd.llvm.org/config.html#designators
   */
  Designators?: boolean;
  /**
   * A boolean that enables/disables inlay-hints for block end comments
   * https://clangd.llvm.org/config.html#blockend
   */
  BlockEnd?: boolean;
  /**
   * A boolean that enables/disables inlay hints for default arguments
   * https://clangd.llvm.org/config#defaultarguments
   */
  DefaultArguments?: boolean;
  /**
   * Character limit for type hints. Hints that would be longer are not shown. 0 means no limit.
   * https://clangd.llvm.org/config.html#typenamelimit
   */
  TypeNameLimit?: number;
}
/**
 * Hover card's options
 * https://clangd.llvm.org/config.html#hover
 */
export interface HoverOptions {
  /**
   * Whether to display desugared types
   * https://clangd.llvm.org/config.html#showaka
   */
  ShowAKA?: boolean;
  /**
   * Character limit for hovered macro expansions. Expansions that would be longer are not shown.
   * https://clangd.llvm.org/config.html#macrocontentslimit
   */
  MacroContentsLimit?: number;
}
