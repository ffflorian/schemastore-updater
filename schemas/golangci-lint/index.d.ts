/* eslint-disable */

/**
 * Usable linter names.
 */
export type LinterNames =
  | (
      | 'arangolint'
      | 'asasalint'
      | 'asciicheck'
      | 'bidichk'
      | 'bodyclose'
      | 'canonicalheader'
      | 'containedctx'
      | 'contextcheck'
      | 'copyloopvar'
      | 'cyclop'
      | 'decorder'
      | 'depguard'
      | 'dogsled'
      | 'dupl'
      | 'dupword'
      | 'durationcheck'
      | 'embeddedstructfieldcheck'
      | 'errcheck'
      | 'errchkjson'
      | 'errname'
      | 'errorlint'
      | 'exhaustive'
      | 'exhaustruct'
      | 'exptostd'
      | 'fatcontext'
      | 'forbidigo'
      | 'forcetypeassert'
      | 'funcorder'
      | 'funlen'
      | 'ginkgolinter'
      | 'gocheckcompilerdirectives'
      | 'gochecknoglobals'
      | 'gochecknoinits'
      | 'gochecksumtype'
      | 'gocognit'
      | 'goconst'
      | 'gocritic'
      | 'gocyclo'
      | 'godoclint'
      | 'godot'
      | 'godox'
      | 'err113'
      | 'goheader'
      | 'gomoddirectives'
      | 'gomodguard'
      | 'goprintffuncname'
      | 'gosec'
      | 'gosimple'
      | 'gosmopolitan'
      | 'govet'
      | 'grouper'
      | 'iface'
      | 'importas'
      | 'inamedparam'
      | 'ineffassign'
      | 'interfacebloat'
      | 'intrange'
      | 'iotamixing'
      | 'ireturn'
      | 'lll'
      | 'loggercheck'
      | 'maintidx'
      | 'makezero'
      | 'mirror'
      | 'misspell'
      | 'mnd'
      | 'modernize'
      | 'musttag'
      | 'nakedret'
      | 'nestif'
      | 'nilerr'
      | 'nilnesserr'
      | 'nilnil'
      | 'nlreturn'
      | 'noctx'
      | 'noinlineerr'
      | 'nolintlint'
      | 'nonamedreturns'
      | 'nosprintfhostport'
      | 'paralleltest'
      | 'perfsprint'
      | 'prealloc'
      | 'predeclared'
      | 'promlinter'
      | 'protogetter'
      | 'reassign'
      | 'recvcheck'
      | 'revive'
      | 'rowserrcheck'
      | 'sloglint'
      | 'sqlclosecheck'
      | 'staticcheck'
      | 'stylecheck'
      | 'tagalign'
      | 'tagliatelle'
      | 'testableexamples'
      | 'testifylint'
      | 'testpackage'
      | 'thelper'
      | 'tparallel'
      | 'unconvert'
      | 'unparam'
      | 'unused'
      | 'usestdlibvars'
      | 'usetesting'
      | 'varnamelen'
      | 'wastedassign'
      | 'whitespace'
      | 'wrapcheck'
      | 'wsl'
      | 'wsl_v5'
      | 'zerologlint'
    )
  | string;
export type GocriticChecks =
  | 'appendAssign'
  | 'appendCombine'
  | 'argOrder'
  | 'assignOp'
  | 'badCall'
  | 'badCond'
  | 'badLock'
  | 'badRegexp'
  | 'badSorting'
  | 'badSyncOnceFunc'
  | 'boolExprSimplify'
  | 'builtinShadow'
  | 'builtinShadowDecl'
  | 'captLocal'
  | 'caseOrder'
  | 'codegenComment'
  | 'commentFormatting'
  | 'commentedOutCode'
  | 'commentedOutImport'
  | 'defaultCaseOrder'
  | 'deferInLoop'
  | 'deferUnlambda'
  | 'deprecatedComment'
  | 'docStub'
  | 'dupArg'
  | 'dupBranchBody'
  | 'dupCase'
  | 'dupImport'
  | 'dupOption'
  | 'dupSubExpr'
  | 'dynamicFmtString'
  | 'elseif'
  | 'emptyDecl'
  | 'emptyFallthrough'
  | 'emptyStringTest'
  | 'equalFold'
  | 'evalOrder'
  | 'exitAfterDefer'
  | 'exposedSyncMutex'
  | 'externalErrorReassign'
  | 'filepathJoin'
  | 'flagDeref'
  | 'flagName'
  | 'hexLiteral'
  | 'httpNoBody'
  | 'hugeParam'
  | 'ifElseChain'
  | 'importShadow'
  | 'indexAlloc'
  | 'initClause'
  | 'mapKey'
  | 'methodExprCall'
  | 'nestingReduce'
  | 'newDeref'
  | 'nilValReturn'
  | 'octalLiteral'
  | 'offBy1'
  | 'paramTypeCombine'
  | 'preferDecodeRune'
  | 'preferFilepathJoin'
  | 'preferFprint'
  | 'preferStringWriter'
  | 'preferWriteByte'
  | 'ptrToRefParam'
  | 'rangeAppendAll'
  | 'rangeExprCopy'
  | 'rangeValCopy'
  | 'redundantSprint'
  | 'regexpMust'
  | 'regexpPattern'
  | 'regexpSimplify'
  | 'returnAfterHttpError'
  | 'ruleguard'
  | 'singleCaseSwitch'
  | 'sliceClear'
  | 'sloppyLen'
  | 'sloppyReassign'
  | 'sloppyTypeAssert'
  | 'sortSlice'
  | 'sprintfQuotedString'
  | 'sqlQuery'
  | 'stringConcatSimplify'
  | 'stringXbytes'
  | 'stringsCompare'
  | 'switchTrue'
  | 'syncMapLoadAndDelete'
  | 'timeExprSimplify'
  | 'todoCommentWithoutDetail'
  | 'tooManyResultsChecker'
  | 'truncateCmp'
  | 'typeAssertChain'
  | 'typeDefFirst'
  | 'typeSwitchVar'
  | 'typeUnparen'
  | 'uncheckedInlineErr'
  | 'underef'
  | 'unlabelStmt'
  | 'unlambda'
  | 'unnamedResult'
  | 'unnecessaryBlock'
  | 'unnecessaryDefer'
  | 'unslice'
  | 'valSwap'
  | 'weakCond'
  | 'whyNoLint'
  | 'wrapperFunc'
  | 'yodaStyleExpr'
  | 'zeroByteRepeat';
export type GocriticTags = 'diagnostic' | 'style' | 'performance' | 'experimental' | 'opinionated' | 'security';
export type GodoclintRules =
  | 'pkg-doc'
  | 'single-pkg-doc'
  | 'require-pkg-doc'
  | 'start-with-name'
  | 'require-doc'
  | 'deprecated'
  | 'max-len'
  | 'no-unused-link'
  | 'require-stdlib-doclink';
export type GoheaderSettings = {
  values?: {
    /**
     * Constants to use in the template.
     */
    const?: {
      /**
       * Value for the constant.
       *
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
    /**
     * Regular expressions to use in your template.
     */
    regexp?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: string;
    };
  };
  /**
   * Template to put on top of every file.
   */
  template?: string;
  /**
   * Path to the file containing the template source.
   */
  'template-path'?: string;
} & {
  [k: string]: unknown | undefined;
};
export type GosecRules =
  | 'G101'
  | 'G102'
  | 'G103'
  | 'G104'
  | 'G106'
  | 'G107'
  | 'G108'
  | 'G109'
  | 'G110'
  | 'G111'
  | 'G112'
  | 'G113'
  | 'G114'
  | 'G115'
  | 'G116'
  | 'G117'
  | 'G118'
  | 'G119'
  | 'G120'
  | 'G121'
  | 'G122'
  | 'G123'
  | 'G201'
  | 'G202'
  | 'G203'
  | 'G204'
  | 'G301'
  | 'G302'
  | 'G303'
  | 'G304'
  | 'G305'
  | 'G306'
  | 'G307'
  | 'G401'
  | 'G402'
  | 'G403'
  | 'G404'
  | 'G405'
  | 'G406'
  | 'G408'
  | 'G501'
  | 'G502'
  | 'G503'
  | 'G504'
  | 'G505'
  | 'G506'
  | 'G507'
  | 'G601'
  | 'G602'
  | 'G701'
  | 'G702'
  | 'G703'
  | 'G704'
  | 'G705'
  | 'G706'
  | 'G707';
export type GovetAnalyzers =
  | 'appends'
  | 'asmdecl'
  | 'assign'
  | 'atomic'
  | 'atomicalign'
  | 'bools'
  | 'buildtag'
  | 'cgocall'
  | 'composites'
  | 'copylocks'
  | 'deepequalerrors'
  | 'defers'
  | 'directive'
  | 'errorsas'
  | 'fieldalignment'
  | 'findcall'
  | 'framepointer'
  | 'hostport'
  | 'httpmux'
  | 'httpresponse'
  | 'ifaceassert'
  | 'loopclosure'
  | 'lostcancel'
  | 'nilfunc'
  | 'nilness'
  | 'printf'
  | 'reflectvaluecompare'
  | 'shadow'
  | 'shift'
  | 'sigchanyzer'
  | 'slog'
  | 'sortslice'
  | 'stdmethods'
  | 'stdversion'
  | 'stringintconv'
  | 'structtag'
  | 'testinggoroutine'
  | 'tests'
  | 'timeformat'
  | 'unmarshal'
  | 'unreachable'
  | 'unsafeptr'
  | 'unusedresult'
  | 'unusedwrite'
  | 'waitgroup';
export type IfaceAnalyzers = 'identical' | 'unused' | 'opaque' | 'unexported';
/**
 * Use either `reject` or `allow` properties for interfaces matching.
 */
export type IreturnSettings = {
  [k: string]: unknown | undefined;
} & {
  allow?: (string | ('anon' | 'error' | 'empty' | 'stdlib'))[];
  reject?: (string | ('anon' | 'error' | 'empty' | 'stdlib'))[];
};
export type ModernizeAnalyzers =
  | 'any'
  | 'fmtappendf'
  | 'forvar'
  | 'mapsloop'
  | 'minmax'
  | 'newexpr'
  | 'omitzero'
  | 'plusbuild'
  | 'rangeint'
  | 'reflecttypefor'
  | 'slicescontains'
  | 'slicessort'
  | 'stditerators'
  | 'stringscut'
  | 'stringscutprefix'
  | 'stringsseq'
  | 'stringsbuilder'
  | 'testingcontext'
  | 'unsafefuncs'
  | 'waitgroup';
export type TheRuleName =
  | 'add-constant'
  | 'argument-limit'
  | 'atomic'
  | 'banned-characters'
  | 'bare-return'
  | 'blank-imports'
  | 'bool-literal-in-expr'
  | 'call-to-gc'
  | 'cognitive-complexity'
  | 'comment-spacings'
  | 'comments-density'
  | 'confusing-naming'
  | 'confusing-results'
  | 'constant-logical-expr'
  | 'context-as-argument'
  | 'context-keys-type'
  | 'cyclomatic'
  | 'datarace'
  | 'deep-exit'
  | 'defer'
  | 'dot-imports'
  | 'duplicated-imports'
  | 'early-return'
  | 'empty-block'
  | 'empty-lines'
  | 'enforce-map-style'
  | 'enforce-repeated-arg-type-style'
  | 'enforce-slice-style'
  | 'enforce-switch-style'
  | 'epoch-naming'
  | 'error-naming'
  | 'error-return'
  | 'error-strings'
  | 'errorf'
  | 'exported'
  | 'file-header'
  | 'file-length-limit'
  | 'filename-format'
  | 'flag-parameter'
  | 'forbidden-call-in-wg-go'
  | 'function-length'
  | 'function-result-limit'
  | 'get-return'
  | 'identical-branches'
  | 'identical-ifelseif-branches'
  | 'identical-ifelseif-conditions'
  | 'identical-switch-branches'
  | 'identical-switch-conditions'
  | 'if-return'
  | 'import-alias-naming'
  | 'import-shadowing'
  | 'imports-blocklist'
  | 'increment-decrement'
  | 'indent-error-flow'
  | 'inefficient-map-lookup'
  | 'line-length-limit'
  | 'max-control-nesting'
  | 'max-public-structs'
  | 'modifies-parameter'
  | 'modifies-value-receiver'
  | 'nested-structs'
  | 'optimize-operands-order'
  | 'package-comments'
  | 'package-naming'
  | 'package-directory-mismatch'
  | 'range-val-address'
  | 'range-val-in-closure'
  | 'range'
  | 'receiver-naming'
  | 'redefines-builtin-id'
  | 'redundant-build-tag'
  | 'redundant-import-alias'
  | 'redundant-test-main-exit'
  | 'string-format'
  | 'string-of-int'
  | 'struct-tag'
  | 'superfluous-else'
  | 'time-date'
  | 'time-equal'
  | 'time-naming'
  | 'unchecked-type-assertion'
  | 'unconditional-recursion'
  | 'unexported-naming'
  | 'unexported-return'
  | 'unhandled-error'
  | 'unnecessary-format'
  | 'unnecessary-if'
  | 'unnecessary-stmt'
  | 'unreachable-code'
  | 'unsecure-url-scheme'
  | 'unused-parameter'
  | 'unused-receiver'
  | 'use-any'
  | 'use-errors-new'
  | 'use-fmt-print'
  | 'use-slices-sort'
  | 'use-waitgroup-go'
  | 'useless-break'
  | 'useless-fallthrough'
  | 'var-declaration'
  | 'var-naming'
  | 'waitgroup-by-value';
export type StaticcheckChecks =
  | '*'
  | 'all'
  | 'SA*'
  | '-SA*'
  | 'SA1*'
  | '-SA1*'
  | 'SA1000'
  | '-SA1000'
  | 'SA1001'
  | '-SA1001'
  | 'SA1002'
  | '-SA1002'
  | 'SA1003'
  | '-SA1003'
  | 'SA1004'
  | '-SA1004'
  | 'SA1005'
  | '-SA1005'
  | 'SA1006'
  | '-SA1006'
  | 'SA1007'
  | '-SA1007'
  | 'SA1008'
  | '-SA1008'
  | 'SA1010'
  | '-SA1010'
  | 'SA1011'
  | '-SA1011'
  | 'SA1012'
  | '-SA1012'
  | 'SA1013'
  | '-SA1013'
  | 'SA1014'
  | '-SA1014'
  | 'SA1015'
  | '-SA1015'
  | 'SA1016'
  | '-SA1016'
  | 'SA1017'
  | '-SA1017'
  | 'SA1018'
  | '-SA1018'
  | 'SA1019'
  | '-SA1019'
  | 'SA1020'
  | '-SA1020'
  | 'SA1021'
  | '-SA1021'
  | 'SA1023'
  | '-SA1023'
  | 'SA1024'
  | '-SA1024'
  | 'SA1025'
  | '-SA1025'
  | 'SA1026'
  | '-SA1026'
  | 'SA1027'
  | '-SA1027'
  | 'SA1028'
  | '-SA1028'
  | 'SA1029'
  | '-SA1029'
  | 'SA1030'
  | '-SA1030'
  | 'SA1031'
  | '-SA1031'
  | 'SA1032'
  | '-SA1032'
  | 'SA2*'
  | '-SA2*'
  | 'SA2000'
  | '-SA2000'
  | 'SA2001'
  | '-SA2001'
  | 'SA2002'
  | '-SA2002'
  | 'SA2003'
  | '-SA2003'
  | 'SA3*'
  | '-SA3*'
  | 'SA3000'
  | '-SA3000'
  | 'SA3001'
  | '-SA3001'
  | 'SA4*'
  | '-SA4*'
  | 'SA4000'
  | '-SA4000'
  | 'SA4001'
  | '-SA4001'
  | 'SA4003'
  | '-SA4003'
  | 'SA4004'
  | '-SA4004'
  | 'SA4005'
  | '-SA4005'
  | 'SA4006'
  | '-SA4006'
  | 'SA4008'
  | '-SA4008'
  | 'SA4009'
  | '-SA4009'
  | 'SA4010'
  | '-SA4010'
  | 'SA4011'
  | '-SA4011'
  | 'SA4012'
  | '-SA4012'
  | 'SA4013'
  | '-SA4013'
  | 'SA4014'
  | '-SA4014'
  | 'SA4015'
  | '-SA4015'
  | 'SA4016'
  | '-SA4016'
  | 'SA4017'
  | '-SA4017'
  | 'SA4018'
  | '-SA4018'
  | 'SA4019'
  | '-SA4019'
  | 'SA4020'
  | '-SA4020'
  | 'SA4021'
  | '-SA4021'
  | 'SA4022'
  | '-SA4022'
  | 'SA4023'
  | '-SA4023'
  | 'SA4024'
  | '-SA4024'
  | 'SA4025'
  | '-SA4025'
  | 'SA4026'
  | '-SA4026'
  | 'SA4027'
  | '-SA4027'
  | 'SA4028'
  | '-SA4028'
  | 'SA4029'
  | '-SA4029'
  | 'SA4030'
  | '-SA4030'
  | 'SA4031'
  | '-SA4031'
  | 'SA4032'
  | '-SA4032'
  | 'SA5*'
  | '-SA5*'
  | 'SA5000'
  | '-SA5000'
  | 'SA5001'
  | '-SA5001'
  | 'SA5002'
  | '-SA5002'
  | 'SA5003'
  | '-SA5003'
  | 'SA5004'
  | '-SA5004'
  | 'SA5005'
  | '-SA5005'
  | 'SA5007'
  | '-SA5007'
  | 'SA5008'
  | '-SA5008'
  | 'SA5009'
  | '-SA5009'
  | 'SA5010'
  | '-SA5010'
  | 'SA5011'
  | '-SA5011'
  | 'SA5012'
  | '-SA5012'
  | 'SA6*'
  | '-SA6*'
  | 'SA6000'
  | '-SA6000'
  | 'SA6001'
  | '-SA6001'
  | 'SA6002'
  | '-SA6002'
  | 'SA6003'
  | '-SA6003'
  | 'SA6005'
  | '-SA6005'
  | 'SA6006'
  | '-SA6006'
  | 'SA9*'
  | '-SA9*'
  | 'SA9001'
  | '-SA9001'
  | 'SA9002'
  | '-SA9002'
  | 'SA9003'
  | '-SA9003'
  | 'SA9004'
  | '-SA9004'
  | 'SA9005'
  | '-SA9005'
  | 'SA9006'
  | '-SA9006'
  | 'SA9007'
  | '-SA9007'
  | 'SA9008'
  | '-SA9008'
  | 'SA9009'
  | '-SA9009'
  | 'ST*'
  | '-ST*'
  | 'ST1*'
  | '-ST1*'
  | 'ST1000'
  | '-ST1000'
  | 'ST1001'
  | '-ST1001'
  | 'ST1003'
  | '-ST1003'
  | 'ST1005'
  | '-ST1005'
  | 'ST1006'
  | '-ST1006'
  | 'ST1008'
  | '-ST1008'
  | 'ST1011'
  | '-ST1011'
  | 'ST1012'
  | '-ST1012'
  | 'ST1013'
  | '-ST1013'
  | 'ST1015'
  | '-ST1015'
  | 'ST1016'
  | '-ST1016'
  | 'ST1017'
  | '-ST1017'
  | 'ST1018'
  | '-ST1018'
  | 'ST1019'
  | '-ST1019'
  | 'ST1020'
  | '-ST1020'
  | 'ST1021'
  | '-ST1021'
  | 'ST1022'
  | '-ST1022'
  | 'ST1023'
  | '-ST1023'
  | 'S*'
  | '-S*'
  | 'S1*'
  | '-S1*'
  | 'S1000'
  | '-S1000'
  | 'S1001'
  | '-S1001'
  | 'S1002'
  | '-S1002'
  | 'S1003'
  | '-S1003'
  | 'S1004'
  | '-S1004'
  | 'S1005'
  | '-S1005'
  | 'S1006'
  | '-S1006'
  | 'S1007'
  | '-S1007'
  | 'S1008'
  | '-S1008'
  | 'S1009'
  | '-S1009'
  | 'S1010'
  | '-S1010'
  | 'S1011'
  | '-S1011'
  | 'S1012'
  | '-S1012'
  | 'S1016'
  | '-S1016'
  | 'S1017'
  | '-S1017'
  | 'S1018'
  | '-S1018'
  | 'S1019'
  | '-S1019'
  | 'S1020'
  | '-S1020'
  | 'S1021'
  | '-S1021'
  | 'S1023'
  | '-S1023'
  | 'S1024'
  | '-S1024'
  | 'S1025'
  | '-S1025'
  | 'S1028'
  | '-S1028'
  | 'S1029'
  | '-S1029'
  | 'S1030'
  | '-S1030'
  | 'S1031'
  | '-S1031'
  | 'S1032'
  | '-S1032'
  | 'S1033'
  | '-S1033'
  | 'S1034'
  | '-S1034'
  | 'S1035'
  | '-S1035'
  | 'S1036'
  | '-S1036'
  | 'S1037'
  | '-S1037'
  | 'S1038'
  | '-S1038'
  | 'S1039'
  | '-S1039'
  | 'S1040'
  | '-S1040'
  | 'QF*'
  | '-QF*'
  | 'QF1*'
  | '-QF1*'
  | 'QF1001'
  | '-QF1001'
  | 'QF1002'
  | '-QF1002'
  | 'QF1003'
  | '-QF1003'
  | 'QF1004'
  | '-QF1004'
  | 'QF1005'
  | '-QF1005'
  | 'QF1006'
  | '-QF1006'
  | 'QF1007'
  | '-QF1007'
  | 'QF1008'
  | '-QF1008'
  | 'QF1009'
  | '-QF1009'
  | 'QF1010'
  | '-QF1010'
  | 'QF1011'
  | '-QF1011'
  | 'QF1012'
  | '-QF1012';
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` "^.+$".
 */
export type TagliatelleCases =
  | ''
  | 'camel'
  | 'pascal'
  | 'kebab'
  | 'snake'
  | 'goCamel'
  | 'goPascal'
  | 'goKebab'
  | 'goSnake'
  | 'upper'
  | 'upperSnake'
  | 'lower'
  | 'header';
export type WslChecks =
  | 'assign'
  | 'branch'
  | 'decl'
  | 'defer'
  | 'expr'
  | 'for'
  | 'go'
  | 'if'
  | 'inc-dec'
  | 'label'
  | 'range'
  | 'return'
  | 'select'
  | 'send'
  | 'switch'
  | 'type-switch'
  | 'append'
  | 'assign-exclusive'
  | 'assign-expr'
  | 'err'
  | 'leading-whitespace'
  | 'trailing-whitespace'
  | 'after-block';
/**
 * Usable formatter names.
 */
export type FormatterNames = 'gci' | 'gofmt' | 'gofumpt' | 'goimports' | 'golines' | 'swaggo';

export interface GolangciLintConfiguration {
  version: string;
  /**
   * Options for analysis running,
   */
  run?: {
    /**
     * Number of concurrent runners. Defaults to the number of available CPU cores.
     */
    concurrency?: number;
    /**
     * Timeout for the analysis.
     */
    timeout?: string;
    /**
     * Exit code when at least one issue was found.
     */
    'issues-exit-code'?: number;
    /**
     * Enable inclusion of test files.
     */
    tests?: boolean;
    /**
     * List of build tags to pass to all linters.
     */
    'build-tags'?: string[];
    /**
     * Option to pass to "go list -mod={option}".
     * See "go help modules" for more information.
     */
    'modules-download-mode'?: 'mod' | 'readonly' | 'vendor';
    'enable-build-vcs'?: boolean;
    /**
     * Allow multiple parallel golangci-lint instances running. If disabled, golangci-lint acquires file lock on start.
     */
    'allow-parallel-runners'?: boolean;
    /**
     * Allow multiple golangci-lint instances running, but serialize them around a lock.
     */
    'allow-serial-runners'?: boolean;
    /**
     * Targeted Go version.
     */
    go?: string;
    /**
     * The mode used to evaluate relative paths.
     */
    'relative-path-mode'?: 'gomod' | 'gitroot' | 'cfg' | 'wd';
  };
  /**
   * Output configuration options.
   */
  output?: {
    /**
     * Output formats to use.
     */
    formats?: {
      text?: {
        path?: ('stdout' | 'stderr') | string;
        'print-linter-name'?: boolean;
        'print-issued-lines'?: boolean;
        colors?: boolean;
      };
      json?: SimpleFormat;
      tab?: {
        path?: ('stdout' | 'stderr') | string;
        'print-linter-name'?: boolean;
        colors?: boolean;
      };
      html?: SimpleFormat;
      checkstyle?: SimpleFormat;
      'code-climate'?: SimpleFormat;
      'junit-xml'?: {
        path?: ('stdout' | 'stderr') | string;
        extended?: boolean;
      };
      teamcity?: SimpleFormat;
      sarif?: SimpleFormat;
    };
    'path-mode'?: string;
    /**
     * Add a prefix to the output file references.
     */
    'path-prefix'?: string;
    /**
     * Show statistics per linter.
     */
    'show-stats'?: boolean;
    'sort-order'?: ('linter' | 'severity' | 'file')[];
  };
  linters?: {
    default?: 'standard' | 'all' | 'none' | 'fast';
    /**
     * List of enabled linters.
     */
    enable?: LinterNames[];
    /**
     * List of disabled linters.
     */
    disable?: LinterNames[];
    /**
     * All available settings of specific linters.
     */
    settings?: {
      dupword?: DupwordSettings;
      asasalint?: AsasalintSettings;
      bidichk?: BidichkSettings;
      cyclop?: CyclopSettings;
      decorder?: DecorderSettings;
      depguard?: DepguardSettings;
      dogsled?: DogsledSettings;
      dupl?: DuplSettings;
      embeddedstructfieldcheck?: EmbeddedstructfieldcheckSettings;
      errcheck?: ErrcheckSettings;
      errchkjson?: ErrchkjsonSettings;
      errorlint?: ErrorlintSettings;
      exhaustive?: ExhaustiveSettings;
      exhaustruct?: ExhaustructSettings;
      fatcontext?: FatcontextSettings;
      forbidigo?: ForbidigoSettings;
      funcorder?: FuncorderSettings;
      funlen?: FunlenSettings;
      ginkgolinter?: GinkgolinterSettings;
      gochecksumtype?: GochecksumtypeSettings;
      gocognit?: GocognitSettings;
      goconst?: GoconstSettings;
      gocritic?: GocriticSettings;
      gocyclo?: GocycloSettings;
      godoclint?: GodoclintSettings;
      godot?: GodotSettings;
      godox?: GodoxSettings;
      interfacebloat?: InterfacebloatSettings;
      goheader?: GoheaderSettings;
      gomoddirectives?: GomoddirectivesSettings;
      gomodguard?: GomodguardSettings;
      gosec?: GosecSettings;
      gosmopolitan?: GosmopolitanSettings;
      govet?: GovetSettings;
      grouper?: GrouperSettings;
      iface?: IfaceSettings;
      importas?: ImportasSettings;
      inamedparam?: InamedparamSettings;
      ineffassign?: IneffassignSettings;
      iotamixing?: IotamixingSettings;
      ireturn?: IreturnSettings;
      lll?: LllSettings;
      maintidx?: MaintidxSettings;
      makezero?: MakezeroSettings;
      loggercheck?: LoggercheckSettings;
      misspell?: MisspellSettings;
      musttag?: MusttagSettings;
      nakedret?: NakedretSettings;
      nestif?: NestifSettings;
      nilnil?: NilnilSettings;
      nlreturn?: NlreturnSettings;
      mnd?: MndSettings;
      modernize?: ModernizeSettings;
      nolintlint?: NolintlintSettings;
      reassign?: ReassignSettings;
      recvcheck?: RecvcheckSettings;
      nonamedreturns?: NonamedreturnsSettings;
      paralleltest?: ParalleltestSettings;
      perfsprint?: PerfsprintSettings;
      prealloc?: PreallocSettings;
      predeclared?: PredeclaredSettings;
      promlinter?: PromlinterSettings;
      protogetter?: ProtogetterSettings;
      revive?: ReviveSettings;
      rowserrcheck?: RowserrcheckSettings;
      sloglint?: SloglintSettings;
      spancheck?: SpancheckSettings;
      staticcheck?: StaticcheckSettings;
      tagalign?: TagalignSettings;
      tagliatelle?: TagliatelleSettings;
      testifylint?: TestifylintSettings;
      testpackage?: TestpackageSettings;
      thelper?: ThelperSettings;
      usestdlibvars?: UsestdlibvarsSettings;
      usetesting?: UsetestingSettings;
      unconvert?: UnconvertSettings;
      unparam?: UnparamSettings;
      unqueryvet?: UnqueryvetSettings;
      unused?: UnusedSettings;
      varnamelen?: VarnamelenSettings;
      whitespace?: WhitespaceSettings;
      wrapcheck?: WrapcheckSettings;
      wsl?: WslSettings;
      wsl_v5?: WslSettingsV5;
      copyloopvar?: CopyloopvarSettings;
      custom?: CustomSettings;
    };
    exclusions?: {
      generated?: 'strict' | 'lax' | 'disable';
      'warn-unused'?: boolean;
      presets?: ('comments' | 'std-error-handling' | 'common-false-positives' | 'legacy')[];
      rules?: {
        [k: string]: unknown | undefined;
      }[];
      paths?: string[];
      'paths-except'?: string[];
    };
  };
  formatters?: {
    /**
     * List of enabled formatters.
     */
    enable?: FormatterNames[];
    settings?: {
      gci?: GciSettings;
      gofmt?: GofmtSettings;
      gofumpt?: GofumptSettings;
      goimports?: GoimportsSettings;
      golines?: GolinesSettings;
    };
    exclusions?: {
      generated?: 'strict' | 'lax' | 'disable';
      paths?: string[];
      'warn-unused'?: boolean;
    };
  };
  issues?: {
    /**
     * Maximum issues count per one linter. Set to 0 to disable.
     */
    'max-issues-per-linter'?: number;
    /**
     * Maximum count of issues with the same text. Set to 0 to disable.
     */
    'max-same-issues'?: number;
    /**
     * Show only new issues: if there are unstaged changes or untracked files, only those changes are analyzed, else only changes in HEAD~ are analyzed.
     */
    new?: boolean;
    /**
     * Show only new issues created after the best common ancestor (merge-base against HEAD).
     */
    'new-from-merge-base'?: string;
    /**
     * Show only new issues created after this git revision.
     */
    'new-from-rev'?: string;
    /**
     * Show only new issues created in git patch with this file path.
     */
    'new-from-patch'?: string;
    /**
     * Apply the fixes detected by the linters and formatters (if it's supported by the linter).
     */
    fix?: boolean;
    /**
     * Make issues output unique by line.
     */
    'uniq-by-line'?: boolean;
    /**
     * Show issues in any part of update files (requires new-from-rev or new-from-patch).
     */
    'whole-files'?: boolean;
  };
  severity?: {
    /**
     * Set the default severity for issues. If severity rules are defined and the issues do not match or no severity is provided to the rule this will be the default severity applied. Severities should match the supported severity names of the selected out format.
     */
    default: string;
    /**
     * When a list of severity rules are provided, severity information will be added to lint issues. Severity rules have the same filtering capability as exclude rules except you are allowed to specify one matcher per severity rule.
     * Only affects out formats that support setting severity information.
     */
    rules?: {
      [k: string]: unknown | undefined;
    }[];
  };
}
export interface SimpleFormat {
  path?: ('stdout' | 'stderr') | string;
}
export interface DupwordSettings {
  /**
   * Keywords for detecting duplicate words. If this list is not empty, only the words defined in this list will be detected.
   */
  keywords?: string[];
  /**
   * Keywords used to ignore detection.
   */
  ignore?: string[];
  /**
   * Checks only comments, skip strings.
   */
  'comments-only'?: boolean;
}
export interface AsasalintSettings {
  /**
   * To specify a set of function names to exclude.
   */
  exclude?: string[];
  /**
   * To enable/disable the asasalint builtin exclusions of function names.
   */
  'use-builtin-exclusions'?: boolean;
}
export interface BidichkSettings {
  /**
   * Disallow: LEFT-TO-RIGHT-EMBEDDING
   */
  'left-to-right-embedding'?: boolean;
  /**
   * Disallow: RIGHT-TO-LEFT-EMBEDDING
   */
  'right-to-left-embedding'?: boolean;
  /**
   * Disallow: POP-DIRECTIONAL-FORMATTING
   */
  'pop-directional-formatting'?: boolean;
  /**
   * Disallow: LEFT-TO-RIGHT-OVERRIDE
   */
  'left-to-right-override'?: boolean;
  /**
   * Disallow: RIGHT-TO-LEFT-OVERRIDE
   */
  'right-to-left-override'?: boolean;
  /**
   * Disallow: LEFT-TO-RIGHT-ISOLATE
   */
  'left-to-right-isolate'?: boolean;
  /**
   * Disallow: RIGHT-TO-LEFT-ISOLATE
   */
  'right-to-left-isolate'?: boolean;
  /**
   * Disallow: FIRST-STRONG-ISOLATE
   */
  'first-strong-isolate'?: boolean;
  /**
   * Disallow: POP-DIRECTIONAL-ISOLATE
   */
  'pop-directional-isolate'?: boolean;
}
export interface CyclopSettings {
  /**
   * Max complexity the function can have
   */
  'max-complexity'?: number;
  /**
   * Max average complexity in package
   */
  'package-average'?: number;
}
export interface DecorderSettings {
  'dec-order'?: ('type' | 'const' | 'var' | 'func')[];
  /**
   * Underscore vars (vars with "_" as the name) will be ignored at all checks
   */
  'ignore-underscore-vars'?: boolean;
  /**
   * Order of declarations is not checked
   */
  'disable-dec-order-check'?: boolean;
  /**
   * Allow init func to be anywhere in file
   */
  'disable-init-func-first-check'?: boolean;
  /**
   * Multiple global type, const and var declarations are allowed
   */
  'disable-dec-num-check'?: boolean;
  /**
   * Type declarations will be ignored for dec num check
   */
  'disable-type-dec-num-check'?: boolean;
  /**
   * Const declarations will be ignored for dec num check
   */
  'disable-const-dec-num-check'?: boolean;
  /**
   * Var declarations will be ignored for dec num check
   */
  'disable-var-dec-num-check'?: boolean;
}
export interface DepguardSettings {
  /**
   * Rules to apply.
   */
  rules?: {
    /**
     * Name of a rule.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^[^.]+$".
     */
    [k: string]: {
      /**
       * Used to determine the package matching priority.
       */
      'list-mode'?: 'original' | 'strict' | 'lax';
      /**
       * List of file globs that will match this list of settings to compare against.
       */
      files?: string[];
      /**
       * List of allowed packages.
       */
      allow?: string[];
      /**
       * Packages that are not allowed where the value is a suggestion.
       */
      deny?: {
        /**
         * Description
         */
        desc?: string;
        /**
         * Package
         */
        pkg?: string;
      }[];
    };
  };
}
export interface DogsledSettings {
  /**
   * Check assignments with too many blank identifiers.
   */
  'max-blank-identifiers'?: number;
}
export interface DuplSettings {
  /**
   * Tokens count to trigger issue.
   */
  threshold?: number;
}
export interface EmbeddedstructfieldcheckSettings {
  /**
   * Checks that there is an empty space between the embedded fields and regular fields.
   */
  'empty-line'?: boolean;
  /**
   * Checks that sync.Mutex and sync.RWMutex are not used as embedded fields.
   */
  'forbid-mutex'?: boolean;
}
export interface ErrcheckSettings {
  /**
   * Report about not checking errors in type assertions, i.e.: `a := b.(MyStruct)`
   */
  'check-type-assertions'?: boolean;
  /**
   * Report about assignment of errors to blank identifier
   */
  'check-blank'?: boolean;
  /**
   * List of functions to exclude from checking, where each entry is a single function to exclude
   */
  'exclude-functions'?: string[];
  /**
   * To disable the errcheck built-in exclude list
   */
  'disable-default-exclusions'?: boolean;
  /**
   * Display function signature instead of selector
   */
  verbose?: boolean;
}
export interface ErrchkjsonSettings {
  'check-error-free-encoding'?: boolean;
  /**
   * Issue on struct that doesn't have exported fields.
   */
  'report-no-exported'?: boolean;
}
export interface ErrorlintSettings {
  /**
   * Check whether fmt.Errorf uses the %w verb for formatting errors
   */
  errorf?: boolean;
  /**
   * Permit more than 1 %w verb, valid per Go 1.20
   */
  'errorf-multi'?: boolean;
  /**
   * Check for plain type assertions and type switches.
   */
  asserts?: boolean;
  /**
   * Check for plain error comparisons
   */
  comparison?: boolean;
  'allowed-errors'?: {
    err?: string;
    fun?: string;
  }[];
  'allowed-errors-wildcard'?: {
    err?: string;
    fun?: string;
  }[];
}
export interface ExhaustiveSettings {
  /**
   * Program elements to check for exhaustiveness.
   */
  check?: string[];
  /**
   * Only run exhaustive check on switches with "//exhaustive:enforce" comment.
   */
  'explicit-exhaustive-switch'?: boolean;
  /**
   * Only run exhaustive check on map literals with "//exhaustive:enforce" comment.
   */
  'explicit-exhaustive-map'?: boolean;
  /**
   * Switch statement requires default case even if exhaustive.
   */
  'default-case-required'?: boolean;
  /**
   * Presence of `default` case in switch statements satisfies exhaustiveness, even if all enum members are not listed.
   */
  'default-signifies-exhaustive'?: boolean;
  /**
   * Enum members matching `regex` do not have to be listed in switch statements to satisfy exhaustiveness
   */
  'ignore-enum-members'?: string;
  /**
   * Enum types matching the supplied regex do not have to be listed in switch statements to satisfy exhaustiveness.
   */
  'ignore-enum-types'?: string;
  /**
   * Consider enums only in package scopes, not in inner scopes.
   */
  'package-scope-only'?: boolean;
}
export interface ExhaustructSettings {
  /**
   * List of regular expressions to match struct packages and names.
   */
  include?: string[];
  /**
   * List of regular expressions to exclude struct packages and names from check.
   */
  exclude?: string[];
  /**
   * Allows empty structures, effectively excluding them from the check.
   */
  'allow-empty'?: boolean;
  /**
   * List of regular expressions to match type names that should be allowed to be empty.
   */
  'allow-empty-rx'?: string[];
  /**
   * Allows empty structures in return statements.
   */
  'allow-empty-returns'?: boolean;
  /**
   * Allows empty structures in variable declarations.
   */
  'allow-empty-declarations'?: boolean;
}
export interface FatcontextSettings {
  /**
   * Check for potential fat contexts in struct pointers.
   */
  'check-struct-pointers'?: boolean;
}
export interface ForbidigoSettings {
  /**
   * Exclude code in godoc examples.
   */
  'exclude-godoc-examples'?: boolean;
  /**
   * Instead of matching the literal source code, use type information to replace expressions with strings that contain the package name and (for methods and fields) the type name.
   */
  'analyze-types'?: boolean;
  /**
   * List of identifiers to forbid (written using `regexp`)
   */
  forbid?: {
    /**
     * Pattern
     */
    pattern?: string;
    /**
     * Package
     */
    pkg?: string;
    /**
     * Message
     */
    msg?: string;
  }[];
}
export interface FuncorderSettings {
  /**
   * Checks that constructors are placed after the structure declaration.
   */
  constructor?: boolean;
  /**
   * Checks if the exported methods of a structure are placed before the non-exported ones.
   */
  'struct-method'?: boolean;
  /**
   * Checks if the constructors and/or structure methods are sorted alphabetically.
   */
  alphabetical?: boolean;
}
export interface FunlenSettings {
  /**
   * Limit lines number per function.
   */
  lines?: number;
  /**
   * Limit statements number per function.
   */
  statements?: number;
  /**
   * Ignore comments when counting lines.
   */
  'ignore-comments'?: boolean;
}
export interface GinkgolinterSettings {
  /**
   * Suppress the wrong length assertion warning.
   */
  'suppress-len-assertion'?: boolean;
  /**
   * Suppress the wrong nil assertion warning.
   */
  'suppress-nil-assertion'?: boolean;
  /**
   * Suppress the wrong error assertion warning.
   */
  'suppress-err-assertion'?: boolean;
  /**
   * Suppress the wrong comparison assertion warning.
   */
  'suppress-compare-assertion'?: boolean;
  /**
   * Suppress the function all in async assertion warning.
   */
  'suppress-async-assertion'?: boolean;
  /**
   * Suppress warning for comparing values from different types, like int32 and uint32.
   */
  'suppress-type-compare-assertion'?: boolean;
  /**
   * Trigger warning for ginkgo focus containers like FDescribe, FContext, FWhen or FIt.
   */
  'forbid-focus-container'?: boolean;
  /**
   * Don't trigger warnings for HaveLen(0).
   */
  'allow-havelen-zero'?: boolean;
  /**
   * Force using `Expect` with `To`, `ToNot` or `NotTo`
   */
  'force-expect-to'?: boolean;
  /**
   * Best effort validation of async intervals (timeout and polling).
   */
  'validate-async-intervals'?: boolean;
  /**
   * Trigger a warning for variable assignments in ginkgo containers like `Describe`, `Context` and `When`, instead of in `BeforeEach()`.
   */
  'forbid-spec-pollution'?: boolean;
  /**
   * Force using the Succeed matcher for error functions, and the HaveOccurred matcher for non-function error values.
   */
  'force-succeed'?: boolean;
  /**
   * Force adding assertion descriptions to gomega matchers.
   */
  'force-assertion-description'?: boolean;
  /**
   * Force using `ToNot`, `ShouldNot` instead of `To(Not())`.
   */
  'force-tonot'?: boolean;
}
export interface GochecksumtypeSettings {
  /**
   * Presence of `default` case in switch statements satisfies exhaustiveness, if all members are not listed.
   */
  'default-signifies-exhaustive'?: boolean;
  /**
   * Include shared interfaces in the exhaustiviness check.
   */
  'include-shared-interfaces'?: boolean;
}
export interface GocognitSettings {
  /**
   * Minimal code complexity to report (we recommend 10-20).
   */
  'min-complexity'?: number;
}
export interface GoconstSettings {
  /**
   * Look for existing constants matching the values
   */
  'match-constant'?: boolean;
  /**
   * Minimum length of string constant.
   */
  'min-len'?: number;
  /**
   * Minimum occurrences count to trigger.
   */
  'min-occurrences'?: number;
  /**
   * Ignore when constant is not used as function argument
   */
  'ignore-calls'?: boolean;
  /**
   * Exclude strings matching the given regular expression
   */
  'ignore-string-values'?: string[];
  /**
   * Search also for duplicated numbers.
   */
  numbers?: boolean;
  /**
   * Minimum value, only works with `numbers`
   */
  min?: number;
  /**
   * Maximum value, only works with `numbers`
   */
  max?: number;
  /**
   * Detects constants with identical values
   */
  'find-duplicates'?: boolean;
  /**
   * Evaluates of constant expressions like Prefix + "suffix"
   */
  'eval-const-expressions'?: boolean;
}
export interface GocriticSettings {
  /**
   * Which checks should be enabled. By default, a list of stable checks is used. To see it, run `GL_DEBUG=gocritic golangci-lint run`.
   */
  'enabled-checks'?: GocriticChecks[];
  /**
   * Which checks should be disabled.
   */
  'disabled-checks'?: GocriticChecks[];
  /**
   * Enable multiple checks by tags, run `GL_DEBUG=gocritic golangci-lint run` to see all tags and checks.
   */
  'enabled-tags'?: GocriticTags[];
  /**
   * Disable multiple checks by tags, run `GL_DEBUG=gocritic golangci-lint run` to see all tags and checks.
   */
  'disabled-tags'?: GocriticTags[];
  /**
   * Settings passed to gocritic. Properties must be valid and enabled check names.
   */
  settings?: {
    captLocal?: {
      paramsOnly?: boolean;
    };
    commentedOutCode?: {
      minLength?: number;
    };
    elseif?: {
      skipBalanced?: boolean;
    };
    hugeParam?: {
      sizeThreshold?: number;
    };
    ifElseChain?: {
      minThreshold?: number;
    };
    nestingReduce?: {
      bodyWidth?: number;
    };
    rangeExprCopy?: {
      sizeThreshold?: number;
      skipTestFuncs?: boolean;
    };
    rangeValCopy?: {
      sizeThreshold?: number;
      skipTestFuncs?: boolean;
    };
    ruleguard?: {
      debug?: string;
      enable?: string;
      disable?: string;
      failOn?: string;
      rules?: string;
    };
    tooManyResultsChecker?: {
      maxResults?: number;
    };
    truncateCmp?: {
      skipArchDependent?: boolean;
    };
    underef?: {
      skipRecvDeref?: boolean;
    };
    unnamedResult?: {
      checkExported?: boolean;
    };
  };
  'disable-all'?: boolean;
  'enable-all'?: boolean;
}
export interface GocycloSettings {
  /**
   * Minimum code complexity to report (we recommend 10-20).
   */
  'min-complexity'?: number;
}
export interface GodoclintSettings {
  /**
   * Default set of rules to enable.
   */
  default?: 'all' | 'basic' | 'none';
  /**
   * List of rules to enable in addition to the default set.
   */
  enable?: GodoclintRules[];
  /**
   * List of rules to disable.
   */
  disable?: GodoclintRules[];
  /**
   * A map for setting individual rule options.
   */
  options?: {
    'max-len'?: {
      /**
       * Maximum line length for godocs, not including the `//`, `/*` or `* /` tokens.
       */
      length?: number;
      [k: string]: unknown | undefined;
    };
    'require-doc'?: {
      /**
       * Ignore exported (public) symbols when applying the `require-doc` rule.
       */
      'ignore-exported'?: boolean;
      /**
       * Ignore unexported (private) symbols when applying the `require-doc` rule.
       */
      'ignore-unexported'?: boolean;
      [k: string]: unknown | undefined;
    };
    'start-with-name'?: {
      /**
       * Include unexported symbols when applying the `start-with-name` rule.
       */
      'include-unexported'?: boolean;
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface GodotSettings {
  /**
   * Comments to be checked.
   */
  scope?: 'declarations' | 'toplevel' | 'all' | 'noinline';
  /**
   * List of regexps for excluding particular comment lines from check.
   */
  exclude?: string[];
  /**
   * Check that each sentence ends with a period.
   */
  period?: boolean;
  /**
   * Check that each sentence starts with a capital letter.
   */
  capital?: boolean;
  /**
   * DEPRECATED: Check all top-level comments, not only declarations.
   */
  'check-all'?: boolean;
}
export interface GodoxSettings {
  /**
   * Report any comments starting with one of these keywords. This is useful for TODO or FIXME comments that might be left in the code accidentally and should be resolved before merging.
   */
  keywords?: string[];
}
export interface InterfacebloatSettings {
  /**
   * The maximum number of methods allowed for an interface.
   */
  max?: number;
}
export interface GomoddirectivesSettings {
  /**
   * Allow local `replace` directives.
   */
  'replace-local'?: boolean;
  /**
   * List of allowed `replace` directives.
   */
  'replace-allow-list'?: string[];
  /**
   * Allow to not explain why the version has been retracted in the `retract` directives.
   */
  'retract-allow-no-explanation'?: boolean;
  /**
   * Forbid the use of the `exclude` directives.
   */
  'exclude-forbidden'?: boolean;
  /**
   * Forbid the use of the `ignore` directives. (>= go1.25)
   */
  'ignore-forbidden'?: boolean;
  /**
   * Forbid the use of the `toolchain` directive.
   */
  'toolchain-forbidden'?: boolean;
  /**
   * Defines a pattern to validate `toolchain` directive.
   */
  'toolchain-pattern'?: string;
  /**
   * Forbid the use of the `tool` directives.
   */
  'tool-forbidden'?: boolean;
  /**
   * Forbid the use of the `godebug` directive.
   */
  'go-debug-forbidden'?: boolean;
  /**
   * Defines a pattern to validate `go` minimum version directive.
   */
  'go-version-pattern'?: string;
  /**
   * Check the validity of the module path.
   */
  'check-module-path'?: boolean;
}
export interface GomodguardSettings {
  allowed?: {
    /**
     * List of allowed modules.
     */
    modules?: string[];
    /**
     * List of allowed module domains.
     */
    domains?: string[];
  };
  blocked?: {
    /**
     * List of blocked modules.
     */
    modules?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: {
        /**
         * Recommended modules that should be used instead.
         */
        recommendations?: string[];
        /**
         * Reason why the recommended module should be used.
         */
        reason?: string;
      };
    }[];
    /**
     * List of blocked module version constraints.
     */
    versions?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.*$".
       */
      [k: string]: {
        /**
         * Version constraint.
         */
        version?: string;
        /**
         * Reason why the version constraint exists.
         */
        reason: string;
      };
    }[];
    /**
     * Raise lint issues if loading local path with replace directive
     */
    'local-replace-directives'?: boolean;
  };
}
export interface GosecSettings {
  /**
   * To select a subset of rules to run
   */
  includes?: GosecRules[];
  /**
   * To specify a set of rules to explicitly exclude
   */
  excludes?: GosecRules[];
  /**
   * Filter out the issues with a lower severity than the given value
   */
  severity?: 'low' | 'medium' | 'high';
  /**
   * Filter out the issues with a lower confidence than the given value
   */
  confidence?: 'low' | 'medium' | 'high';
  /**
   * To specify the configuration of rules
   */
  config?: {
    [k: string]: unknown | undefined;
  };
  /**
   * Concurrency value
   */
  concurrency?: number;
}
export interface GosmopolitanSettings {
  /**
   * Allow and ignore `time.Local` usages.
   */
  'allow-time-local'?: boolean;
  /**
   * List of fully qualified names in the `full/pkg/path.name` form, to act as "i18n escape hatches".
   */
  'escape-hatches'?: string[];
  /**
   * List of Unicode scripts to watch for any usage in string literals.
   */
  'watch-for-scripts'?: string[];
}
export interface GovetSettings {
  /**
   * Settings per analyzer. Map of analyzer name to specific settings.
   * Run `go tool vet help` to find out more.
   */
  settings?: {
    /**
     * Run `go tool vet help <analyzer>` to see all settings.
     *
     * This interface was referenced by `undefined`'s JSON-Schema definition
     * via the `patternProperty` "^.*$".
     */
    [k: string]: {
      [k: string]: unknown | undefined;
    };
  };
  /**
   * Enable analyzers by name.
   */
  enable?: GovetAnalyzers[];
  /**
   * Disable analyzers by name.
   */
  disable?: GovetAnalyzers[];
  /**
   * Enable all analyzers.
   */
  'enable-all'?: boolean;
  /**
   * Disable all analyzers.
   */
  'disable-all'?: boolean;
}
export interface GrouperSettings {
  'const-require-single-const'?: boolean;
  'const-require-grouping'?: boolean;
  'import-require-single-import'?: boolean;
  'import-require-grouping'?: boolean;
  'type-require-single-type'?: boolean;
  'type-require-grouping'?: boolean;
  'var-require-single-var'?: boolean;
  'var-require-grouping'?: boolean;
}
export interface IfaceSettings {
  /**
   * Enable analyzers by name.
   */
  enable?: IfaceAnalyzers[];
  settings?: {
    unused?: {
      exclude?: string[];
    };
  };
}
export interface ImportasSettings {
  /**
   * Do not allow unaliased imports of aliased packages.
   */
  'no-unaliased'?: boolean;
  /**
   * Do not allow non-required aliases.
   */
  'no-extra-aliases'?: boolean;
  /**
   * List of aliases
   */
  alias?: {
    /**
     * Package path e.g. knative.dev/serving/pkg/apis/autoscaling/v1alpha1
     */
    pkg: string;
    /**
     * Package alias e.g. autoscalingv1alpha1
     */
    alias: string;
  }[];
}
export interface InamedparamSettings {
  /**
   * Skips check for interface methods with only a single parameter.
   */
  'skip-single-param'?: boolean;
}
export interface IneffassignSettings {
  /**
   * Check escaping variables of type error, may cause false positives.
   */
  'check-escaping-errors'?: boolean;
}
export interface IotamixingSettings {
  /**
   * Whether to report individual consts rather than just the const block.
   */
  'report-individual'?: boolean;
}
export interface LllSettings {
  /**
   * Width of "\t" in spaces.
   */
  'tab-width'?: number;
  /**
   * Maximum allowed line length, lines longer will be reported.
   */
  'line-length'?: number;
}
/**
 * Maintainability index https://docs.microsoft.com/en-us/visualstudio/code-quality/code-metrics-maintainability-index-range-and-meaning?view=vs-2022
 */
export interface MaintidxSettings {
  /**
   * Minimum accatpable maintainability index level (see https://docs.microsoft.com/en-us/visualstudio/code-quality/code-metrics-maintainability-index-range-and-meaning?view=vs-2022)
   */
  under?: number;
}
export interface MakezeroSettings {
  /**
   * Allow only slices initialized with a length of zero.
   */
  always?: boolean;
}
export interface LoggercheckSettings {
  /**
   * Allow check for the github.com/go-kit/log library.
   */
  kitlog?: boolean;
  /**
   * Allow check for the k8s.io/klog/v2 library.
   */
  klog?: boolean;
  /**
   * Allow check for the github.com/go-logr/logr library.
   */
  logr?: boolean;
  /**
   * Allow check for the log/slog library.
   */
  slog?: boolean;
  /**
   * Allow check for the "sugar logger" from go.uber.org/zap library.
   */
  zap?: boolean;
  /**
   * Require all logging keys to be inlined constant strings.
   */
  'require-string-key'?: boolean;
  /**
   * Require printf-like format specifier (%s, %d for example) not present.
   */
  'no-printf-like'?: boolean;
  /**
   * List of custom rules to check against, where each rule is a single logger pattern, useful for wrapped loggers.
   */
  rules?: string[];
}
/**
 * Correct spellings using locale preferences for US or UK. Default is to use a neutral variety of English.
 */
export interface MisspellSettings {
  locale?: 'US' | 'UK';
  /**
   * List of rules to ignore.
   */
  'ignore-rules'?: string[];
  /**
   * Mode of the analysis.
   */
  mode?: 'restricted' | '' | 'default';
  /**
   * Extra word corrections.
   */
  'extra-words'?: {
    correction?: string;
    typo?: string;
  }[];
}
export interface MusttagSettings {
  functions?: {
    name?: string;
    tag?: string;
    'arg-pos'?: number;
  }[];
}
export interface NakedretSettings {
  /**
   * Report if a function has more lines of code than this value and it has naked returns.
   */
  'max-func-lines'?: number;
}
export interface NestifSettings {
  /**
   * Minimum complexity of "if" statements to report.
   */
  'min-complexity'?: number;
}
export interface NilnilSettings {
  /**
   * To check functions with only two return values.
   */
  'only-two'?: boolean;
  /**
   * In addition, detect opposite situation (simultaneous return of non-nil error and valid value).
   */
  'detect-opposite'?: boolean;
  /**
   * List of return types to check.
   */
  'checked-types'?: ('chan' | 'func' | 'iface' | 'map' | 'ptr' | 'uintptr' | 'unsafeptr')[];
}
export interface NlreturnSettings {
  /**
   * set block size that is still ok
   */
  'block-size'?: number;
}
export interface MndSettings {
  /**
   * List of file patterns to exclude from analysis.
   */
  'ignored-files'?: string[];
  /**
   * Comma-separated list of function patterns to exclude from the analysis.
   */
  'ignored-functions'?: string[];
  /**
   * List of numbers to exclude from analysis.
   */
  'ignored-numbers'?: string[];
  /**
   * The list of enabled checks, see https://github.com/tommy-muehle/go-mnd/#checks for description.
   */
  checks?: ('argument' | 'case' | 'condition' | 'operation' | 'return' | 'assign')[];
}
export interface ModernizeSettings {
  /**
   * List of analyzers to disable.
   */
  disable?: ModernizeAnalyzers[];
}
export interface NolintlintSettings {
  /**
   * Enable to ensure that nolint directives are all used.
   */
  'allow-unused'?: boolean;
  /**
   * Exclude these linters from requiring an explanation.
   */
  'allow-no-explanation'?: LinterNames[];
  /**
   * Enable to require an explanation of nonzero length after each nolint directive.
   */
  'require-explanation'?: boolean;
  /**
   * Enable to require nolint directives to mention the specific linter being suppressed.
   */
  'require-specific'?: boolean;
}
export interface ReassignSettings {
  patterns?: string[];
}
export interface RecvcheckSettings {
  /**
   * Disables the built-in method exclusions.
   */
  'disable-builtin'?: boolean;
  /**
   * User-defined method exclusions.
   */
  exclusions?: string[];
}
export interface NonamedreturnsSettings {
  /**
   * Report named error if it is assigned inside defer.
   */
  'report-error-in-defer'?: boolean;
}
export interface ParalleltestSettings {
  /**
   * Ignore missing calls to `t.Parallel()` and only report incorrect uses of it.
   */
  'ignore-missing'?: boolean;
  /**
   * Ignore missing calls to `t.Parallel()` in subtests. Top-level tests are still required to have `t.Parallel`, but subtests are allowed to skip it.
   */
  'ignore-missing-subtests'?: boolean;
}
export interface PerfsprintSettings {
  /**
   * Enable/disable optimization of integer formatting.
   */
  'integer-format'?: boolean;
  /**
   * Optimizes even if it requires an int or uint type cast.
   */
  'int-conversion'?: boolean;
  /**
   * Enable/disable optimization of error formatting.
   */
  'error-format'?: boolean;
  /**
   * Optimizes into `err.Error()` even if it is only equivalent for non-nil errors.
   */
  'err-error'?: boolean;
  /**
   * Optimizes `fmt.Errorf`.
   */
  errorf?: boolean;
  /**
   * Enable/disable optimization of string formatting.
   */
  'string-format'?: boolean;
  /**
   * Optimizes `fmt.Sprintf` with only one argument.
   */
  sprintf1?: boolean;
  /**
   * Optimizes into strings concatenation.
   */
  strconcat?: boolean;
  /**
   * Enable/disable optimization of bool formatting.
   */
  'bool-format'?: boolean;
  /**
   * Enable/disable optimization of hex formatting.
   */
  'hex-format'?: boolean;
  /**
   * Enable/disable optimization of concat loop.
   */
  'concat-loop'?: boolean;
  /**
   * Optimization of `concat-loop` even with other operations.
   */
  'loop-other-ops'?: boolean;
}
/**
 * We do not recommend using this linter before doing performance profiling.
 * For most programs usage of `prealloc` will be premature optimization.
 */
export interface PreallocSettings {
  /**
   * Report preallocation suggestions only on simple loops that have no returns/breaks/continues/gotos in them.
   */
  simple?: boolean;
  /**
   * Report preallocation suggestions on range loops.
   */
  'range-loops'?: boolean;
  /**
   * Report preallocation suggestions on for loops.
   */
  'for-loops'?: boolean;
}
export interface PredeclaredSettings {
  /**
   * List of predeclared identifiers to not report on.
   */
  ignore?: string[];
  /**
   * Include method names and field names in checks.
   */
  'qualified-name'?: boolean;
}
export interface PromlinterSettings {
  strict?: unknown;
  'disabled-linters'?: (
    | 'Help'
    | 'MetricUnits'
    | 'Counter'
    | 'HistogramSummaryReserved'
    | 'MetricTypeInName'
    | 'ReservedChars'
    | 'CamelCase'
    | 'UnitAbbreviations'
  )[];
}
export interface ProtogetterSettings {
  'skip-generated-by'?: string[];
  'skip-files'?: string[];
  /**
   * Skip any generated files from the checking.
   */
  'skip-any-generated'?: boolean;
  /**
   * Skip first argument of append function.
   */
  'replace-first-arg-in-append'?: boolean;
}
export interface ReviveSettings {
  'max-open-files'?: number;
  confidence?: number;
  severity?: 'warning' | 'error';
  'enable-all-rules'?: boolean;
  'enable-default-rules'?: boolean;
  directives?: {
    name?: 'specify-disable-reason';
    severity?: 'warning' | 'error';
    exclude?: string[];
    arguments?: unknown[];
  }[];
  rules?: {
    name: TheRuleName;
    disabled?: boolean;
    severity?: 'warning' | 'error';
    exclude?: string[];
    arguments?: unknown[];
  }[];
}
export interface RowserrcheckSettings {
  packages?: string[];
}
export interface SloglintSettings {
  /**
   * Enforce using key-value pairs only (incompatible with attr-only).
   */
  'kv-only'?: boolean;
  /**
   * Enforce not using global loggers.
   */
  'no-global'?: '' | 'all' | 'default';
  /**
   * Enforce not mixing key-value pairs and attributes.
   */
  'no-mixed-args'?: boolean;
  /**
   * Enforce using methods that accept a context.
   */
  context?: '' | 'all' | 'scope';
  /**
   * Enforce using static values for log messages.
   */
  'static-msg'?: boolean;
  /**
   * Enforce message style.
   */
  'msg-style'?: '' | 'lowercased' | 'capitalized';
  /**
   * Enforce a single key naming convention.
   */
  'key-naming-case'?: 'snake' | 'kebab' | 'camel' | 'pascal';
  /**
   * Enforce using attributes only (incompatible with kv-only).
   */
  'attr-only'?: boolean;
  /**
   * Enforce using constants instead of raw keys.
   */
  'no-raw-keys'?: boolean;
  /**
   * Enforce not using specific keys.
   */
  'forbidden-keys'?: string[];
  /**
   * Enforce putting arguments on separate lines.
   */
  'args-on-sep-lines'?: boolean;
}
export interface SpancheckSettings {
  /**
   * Checks to enable.
   */
  checks?: ('end' | 'record-error' | 'set-status')[];
  /**
   * A list of regexes for function signatures that silence `record-error` and `set-status` reports if found in the call path to a returned error.
   */
  'ignore-check-signatures'?: string[];
  /**
   * A list of regexes for additional function signatures that create spans.
   */
  'extra-start-span-signatures'?: string[];
}
export interface StaticcheckSettings {
  checks?: (StaticcheckChecks | string)[];
  /**
   * By default, ST1001 forbids all uses of dot imports in non-test packages. This setting allows setting a whitelist of import paths that can be dot-imported anywhere.
   */
  'dot-import-whitelist'?: string[];
  /**
   * ST1013 recommends using constants from the net/http package instead of hard-coding numeric HTTP status codes. This setting specifies a list of numeric status codes that this check does not complain about.
   */
  'http-status-code-whitelist'?: (
    | '100'
    | '101'
    | '102'
    | '103'
    | '200'
    | '201'
    | '202'
    | '203'
    | '204'
    | '205'
    | '206'
    | '207'
    | '208'
    | '226'
    | '300'
    | '301'
    | '302'
    | '303'
    | '304'
    | '305'
    | '306'
    | '307'
    | '308'
    | '400'
    | '401'
    | '402'
    | '403'
    | '404'
    | '405'
    | '406'
    | '407'
    | '408'
    | '409'
    | '410'
    | '411'
    | '412'
    | '413'
    | '414'
    | '415'
    | '416'
    | '417'
    | '418'
    | '421'
    | '422'
    | '423'
    | '424'
    | '425'
    | '426'
    | '428'
    | '429'
    | '431'
    | '451'
    | '500'
    | '501'
    | '502'
    | '503'
    | '504'
    | '505'
    | '506'
    | '507'
    | '508'
    | '510'
    | '511'
  )[];
  /**
   * ST1003 check, among other things, for the correct capitalization of initialisms. The set of known initialisms can be configured with this option.
   */
  initialisms?: string[];
}
export interface TagalignSettings {
  /**
   * Align and sort can be used together or separately.
   */
  align?: boolean;
  /**
   * Whether enable tags sort.
   */
  sort?: boolean;
  /**
   * Specify the order of tags, the other tags will be sorted by name.
   */
  order?: string[];
  /**
   * Whether enable strict style.
   */
  strict?: boolean;
}
export interface TagliatelleSettings {
  case?: {
    /**
     * Use the struct field name to check the name of the struct tag.
     */
    'use-field-name'?: boolean;
    /**
     * The field names to ignore.
     */
    'ignored-fields'?: string[];
    rules?: {
      [k: string]: TagliatelleCases;
    };
    /**
     * Defines the association between tag name and case.
     */
    'extended-rules'?: {
      /**
       * This interface was referenced by `undefined`'s JSON-Schema definition
       * via the `patternProperty` "^.+$".
       */
      [k: string]: {
        case: TagliatelleCases;
        'extra-initialisms'?: boolean;
        'initialism-overrides'?: {
          /**
           * This interface was referenced by `undefined`'s JSON-Schema definition
           * via the `patternProperty` "^.+$".
           */
          [k: string]: boolean;
        };
      };
    };
    /**
     * Overrides the default/root configuration.
     */
    overrides?: {
      /**
       * A package path.
       */
      pkg: string;
      /**
       * Use the struct field name to check the name of the struct tag.
       */
      'use-field-name'?: boolean;
      /**
       * The field names to ignore.
       */
      'ignored-fields'?: string[];
      /**
       * Ignore the package (takes precedence over all other configurations).
       */
      ignore?: boolean;
      rules?: {
        [k: string]: TagliatelleCases;
      };
      /**
       * Defines the association between tag name and case.
       */
      'extended-rules'?: {
        /**
         * This interface was referenced by `undefined`'s JSON-Schema definition
         * via the `patternProperty` "^.+$".
         */
        [k: string]: {
          case: TagliatelleCases;
          'extra-initialisms'?: boolean;
          'initialism-overrides'?: {
            /**
             * This interface was referenced by `undefined`'s JSON-Schema definition
             * via the `patternProperty` "^.+$".
             */
            [k: string]: boolean;
          };
        };
      };
    }[];
  };
}
export interface TestifylintSettings {
  /**
   * Enable all checkers.
   */
  'enable-all'?: boolean;
  /**
   * Disable all checkers.
   */
  'disable-all'?: boolean;
  /**
   * Enable specific checkers.
   */
  enable?: (
    | 'blank-import'
    | 'bool-compare'
    | 'compares'
    | 'contains'
    | 'empty'
    | 'encoded-compare'
    | 'equal-values'
    | 'error-is-as'
    | 'error-nil'
    | 'expected-actual'
    | 'float-compare'
    | 'formatter'
    | 'go-require'
    | 'len'
    | 'negative-positive'
    | 'nil-compare'
    | 'regexp'
    | 'require-error'
    | 'suite-broken-parallel'
    | 'suite-dont-use-pkg'
    | 'suite-extra-assert-call'
    | 'suite-method-signature'
    | 'suite-subtest-run'
    | 'suite-thelper'
    | 'useless-assert'
  )[];
  /**
   * Disable specific checkers.
   */
  disable?: (
    | 'blank-import'
    | 'bool-compare'
    | 'compares'
    | 'contains'
    | 'empty'
    | 'encoded-compare'
    | 'equal-values'
    | 'error-is-as'
    | 'error-nil'
    | 'expected-actual'
    | 'float-compare'
    | 'formatter'
    | 'go-require'
    | 'len'
    | 'negative-positive'
    | 'nil-compare'
    | 'regexp'
    | 'require-error'
    | 'suite-broken-parallel'
    | 'suite-dont-use-pkg'
    | 'suite-extra-assert-call'
    | 'suite-method-signature'
    | 'suite-subtest-run'
    | 'suite-thelper'
    | 'useless-assert'
  )[];
  'bool-compare'?: {
    /**
     * To ignore user defined types (over builtin bool).
     */
    'ignore-custom-types'?: boolean;
  };
  'expected-actual'?: {
    /**
     * Regexp for expected variable name.
     */
    pattern?: string;
  };
  formatter?: {
    /**
     * To enable go vet's printf checks.
     */
    'check-format-string'?: boolean;
    /**
     * To require f-assertions (e.g. assert.Equalf) if format string is used, even if there are no variable-length variables.
     */
    'require-f-funcs'?: boolean;
    /**
     * To require that the first element of msgAndArgs (msg) has a string type.
     */
    'require-string-msg'?: boolean;
  };
  'go-require'?: {
    /**
     * To ignore HTTP handlers (like http.HandlerFunc).
     */
    'ignore-http-handlers'?: boolean;
  };
  'require-error'?: {
    /**
     * Regexp for assertions to analyze. If defined, then only matched error assertions will be reported.
     */
    'fn-pattern'?: string;
  };
  'suite-extra-assert-call'?: {
    /**
     * To require or remove extra Assert() call?
     */
    mode?: 'remove' | 'require';
  };
}
export interface TestpackageSettings {
  /**
   * Files with names matching this regular expression are skipped.
   */
  'skip-regexp'?: string;
  /**
   * List of packages that don't end with _test that tests are allowed to be in.
   */
  'allow-packages'?: string[];
}
export interface ThelperSettings {
  test?: {
    /**
     * Check if `t.Helper()` begins helper function.
     */
    begin?: boolean;
    /**
     * Check if *testing.T is first param of helper function.
     */
    first?: boolean;
    /**
     * Check if *testing.T param has t name.
     */
    name?: boolean;
  };
  benchmark?: {
    /**
     * Check if `b.Helper()` begins helper function.
     */
    begin?: boolean;
    /**
     * Check if *testing.B is first param of helper function.
     */
    first?: boolean;
    /**
     * Check if *testing.B param has b name.
     */
    name?: boolean;
  };
  tb?: {
    /**
     * Check if `tb.Helper()` begins helper function.
     */
    begin?: boolean;
    /**
     * Check if *testing.TB is first param of helper function.
     */
    first?: boolean;
    /**
     * Check if *testing.TB param has tb name.
     */
    name?: boolean;
  };
  fuzz?: {
    /**
     * Check if `f.Helper()` begins helper function.
     */
    begin?: boolean;
    /**
     * Check if *testing.F is first param of helper function.
     */
    first?: boolean;
    /**
     * Check if *testing.F param has f name.
     */
    name?: boolean;
  };
}
export interface UsestdlibvarsSettings {
  /**
   * Suggest the use of http.MethodXX.
   */
  'http-method'?: boolean;
  /**
   * Suggest the use of http.StatusXX.
   */
  'http-status-code'?: boolean;
  /**
   * Suggest the use of time.Weekday.String().
   */
  'time-weekday'?: boolean;
  /**
   * Suggest the use of time.Month.String().
   */
  'time-month'?: boolean;
  /**
   * Suggest the use of time.Layout.
   */
  'time-layout'?: boolean;
  /**
   * Suggest the use of time.Month in time.Date.
   */
  'time-date-month'?: boolean;
  /**
   * Suggest the use of crypto.Hash.String().
   */
  'crypto-hash'?: boolean;
  /**
   * Suggest the use of rpc.DefaultXXPath.
   */
  'default-rpc-path'?: boolean;
  /**
   * Suggest the use of sql.LevelXX.String().
   */
  'sql-isolation-level'?: boolean;
  /**
   * Suggest the use of tls.SignatureScheme.String().
   */
  'tls-signature-scheme'?: boolean;
  /**
   * Suggest the use of constant.Kind.String().
   */
  'constant-kind'?: boolean;
}
export interface UsetestingSettings {
  'context-background'?: boolean;
  'context-todo'?: boolean;
  'os-chdir'?: boolean;
  'os-mkdir-temp'?: boolean;
  'os-setenv'?: boolean;
  'os-create-temp'?: boolean;
  'os-temp-dir'?: boolean;
}
export interface UnconvertSettings {
  'fast-math'?: boolean;
  safe?: boolean;
}
export interface UnparamSettings {
  /**
   * Inspect exported functions. Set to true if no external program/library imports your code.
   *
   * WARNING: if you enable this setting, unparam will report a lot of false-positives in text editors:
   * if it's called for subdir of a project it can't find external interfaces. All text editor integrations
   * with golangci-lint call it on a directory with the changed file.
   */
  'check-exported'?: boolean;
}
export interface UnqueryvetSettings {
  /**
   * Enable SQL builder checking.
   */
  'check-sql-builders'?: boolean;
  /**
   * Enable aliased wildcard detection like SELECT t.*.
   */
  'check-aliased-wildcard'?: boolean;
  /**
   * Enable string concatenation analysis.
   */
  'check-string-concat'?: boolean;
  /**
   * Enable format string analysis like fmt.Sprintf.
   */
  'check-format-strings'?: boolean;
  /**
   * Enable strings.Builder analysis.
   */
  'check-string-builder'?: boolean;
  /**
   * Enable subquery analysis.
   */
  'check-subqueries'?: boolean;
  'check-n1'?: boolean;
  'check-sql-injection'?: boolean;
  'check-tx-leaks'?: boolean;
  /**
   * Regex patterns for acceptable SELECT * usage.
   */
  'allowed-patterns'?: string[];
  /**
   * Allow is a list of SQL patterns to allow (whitelist).
   */
  allow?: string[];
  /**
   * Functions to ignore.
   */
  'ignored-functions'?: string[];
  'sql-builders'?: {
    squirrel?: boolean;
    gorm?: boolean;
    sqlx?: boolean;
    ent?: boolean;
    pgx?: boolean;
    bun?: boolean;
    sqlboiler?: boolean;
    jet?: boolean;
  };
  'custom-rules'?: {
    id?: string;
    pattern?: string;
    patterns?: string[];
    when?: string;
    message?: string;
    action?: string;
  }[];
}
export interface UnusedSettings {
  'field-writes-are-uses'?: boolean;
  'post-statements-are-reads'?: boolean;
  'exported-fields-are-used'?: boolean;
  'parameters-are-used'?: boolean;
  'local-variables-are-used'?: boolean;
  'generated-is-used'?: boolean;
}
export interface VarnamelenSettings {
  /**
   * Variables used in at most this N-many lines will be ignored.
   */
  'max-distance'?: number;
  /**
   * The minimum length of a variable's name that is considered `long`.
   */
  'min-name-length'?: number;
  /**
   * Check method receiver names.
   */
  'check-receiver'?: boolean;
  /**
   * Check named return values.
   */
  'check-return'?: boolean;
  /**
   * Check type parameters.
   */
  'check-type-param'?: boolean;
  /**
   * Ignore `ok` variables that hold the bool return value of a type assertion
   */
  'ignore-type-assert-ok'?: boolean;
  /**
   * Ignore `ok` variables that hold the bool return value of a map index.
   */
  'ignore-map-index-ok'?: boolean;
  /**
   * Ignore `ok` variables that hold the bool return value of a channel receive.
   */
  'ignore-chan-recv-ok'?: boolean;
  /**
   * Optional list of variable names that should be ignored completely.
   */
  'ignore-names'?: string[];
  /**
   * Optional list of variable declarations that should be ignored completely.
   */
  'ignore-decls'?: string[];
}
export interface WhitespaceSettings {
  /**
   * Enforces newlines (or comments) after every multi-line if statement
   */
  'multi-if'?: boolean;
  /**
   * Enforces newlines (or comments) after every multi-line function signature
   */
  'multi-func'?: boolean;
}
export interface WrapcheckSettings {
  /**
   * An array of strings specifying additional substrings of signatures to ignore.
   */
  'extra-ignore-sigs'?: string[];
  /**
   * An array of strings which specify substrings of signatures to ignore.
   */
  'ignore-sigs'?: string[];
  /**
   * An array of strings which specify regular expressions of signatures to ignore.
   */
  'ignore-sig-regexps'?: string[];
  /**
   * An array of glob patterns which, if any match the package of the function returning the error, will skip wrapcheck analysis for this error.
   */
  'ignore-package-globs'?: string[];
  /**
   * An array of glob patterns which, if matched to an underlying interface name, will ignore unwrapped errors returned from a function whose call is defined on the given interface.
   */
  'ignore-interface-regexps'?: string[];
  /**
   * Determines whether wrapcheck should report errors returned from inside the package.
   */
  'report-internal-errors'?: boolean;
}
export interface WslSettings {
  /**
   * Controls if you may cuddle assignments and anything without needing an empty line between them.
   */
  'allow-assign-and-anything'?: boolean;
  /**
   * Allow calls and assignments to be cuddled as long as the lines have any matching variables, fields or types.
   */
  'allow-assign-and-call'?: boolean;
  /**
   * Allow declarations (var) to be cuddled.
   */
  'allow-cuddle-declarations'?: boolean;
  /**
   * A list of call idents that everything can be cuddled with.
   */
  'allow-cuddle-with-calls'?: string[];
  /**
   * AllowCuddleWithRHS is a list of right hand side variables that is allowed to be cuddled with anything.
   */
  'allow-cuddle-with-rhs'?: string[];
  /**
   * Allow cuddling with any block as long as the variable is used somewhere in the block
   */
  'allow-cuddle-used-in-block'?: boolean;
  /**
   * Allow multiline assignments to be cuddled.
   */
  'allow-multiline-assign'?: boolean;
  /**
   * Allow leading comments to be separated with empty lines.
   */
  'allow-separated-leading-comment'?: boolean;
  /**
   * Allow trailing comments in ending of blocks.
   */
  'allow-trailing-comment'?: boolean;
  /**
   * When force-err-cuddling is enabled this is a list of names used for error variables to check for in the conditional.
   */
  'error-variable-names'?: string[];
  /**
   * Force newlines in end of case at this limit (0 = never).
   */
  'force-case-trailing-whitespace'?: number;
  /**
   * Causes an error when an If statement that checks an error variable doesn't cuddle with the assignment of that variable.
   */
  'force-err-cuddling'?: boolean;
  /**
   * Causes an error if a short declaration (:=) cuddles with anything other than another short declaration.
   */
  'force-short-decl-cuddling'?: boolean;
  /**
   * If true, append is only allowed to be cuddled if appending value is matching variables, fields or types on line above.
   */
  'strict-append'?: boolean;
}
export interface WslSettingsV5 {
  'allow-first-in-block'?: boolean;
  'allow-whole-block'?: boolean;
  'branch-max-lines'?: number;
  'case-max-lines'?: number;
  default?: 'all' | 'none' | 'default' | '';
  enable?: WslChecks[];
  disable?: WslChecks[];
}
export interface CopyloopvarSettings {
  'check-alias'?: boolean;
}
/**
 * The custom section can be used to define linter plugins to be loaded at runtime. See README of golangci-lint for more information.
 * Each custom linter should have a unique name.
 */
export interface CustomSettings {
  /**
   * This interface was referenced by `CustomSettings`'s JSON-Schema definition
   * via the `patternProperty` "^.*$".
   */
  [k: string]:
    | {
        type: 'module';
        [k: string]: unknown | undefined;
      }
    | {
        [k: string]: unknown | undefined;
      };
}
export interface GciSettings {
  /**
   * Section configuration to compare against.
   */
  sections?: (('standard' | 'default' | 'blank' | 'dot' | 'alias' | 'localmodule') | string)[];
  /**
   * Checks that no inline Comments are present.
   */
  'no-inline-comments'?: boolean;
  /**
   * Checks that no prefix Comments(comment lines above an import) are present.
   */
  'no-prefix-comments'?: boolean;
  /**
   * Enable custom order of sections.
   */
  'custom-order'?: boolean;
  /**
   * Drops lexical ordering for custom sections.
   */
  'no-lex-order'?: boolean;
}
export interface GofmtSettings {
  /**
   * Simplify code.
   */
  simplify?: boolean;
  /**
   * Apply the rewrite rules to the source before reformatting.
   */
  'rewrite-rules'?: {
    pattern?: string;
    replacement?: string;
  }[];
}
export interface GofumptSettings {
  /**
   * Choose whether or not to use the extra rules that are disabled by default.
   */
  'extra-rules'?: boolean;
  /**
   *  Module path which contains the source code being formatted.
   */
  'module-path'?: string;
}
export interface GoimportsSettings {
  /**
   * Put imports beginning with prefix after 3rd-party packages. It is a list of prefixes.
   */
  'local-prefixes'?: string[];
}
export interface GolinesSettings {
  'max-len'?: number;
  'tab-len'?: number;
  'shorten-comments'?: boolean;
  'reformat-tags'?: boolean;
  'chain-split-dots'?: boolean;
}
