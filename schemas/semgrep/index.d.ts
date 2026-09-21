/* eslint-disable */

export type RuleIDToAttachToFindings = string;
export type EarliestSemgrepVersionSupportingThisRule = string;
export type LastSemgrepVersionSupportingThisRule = string;
export type VersionOfRule = string;
export type DescriptionToAttachToFindings = string;
export type LanguagesThisPatternShouldRunOn = (
  | string
  | (
      | 'apex'
      | 'bash'
      | 'sh'
      | 'c'
      | 'clojure'
      | 'cpp'
      | 'c++'
      | 'csharp'
      | 'c#'
      | 'dart'
      | 'dockerfile'
      | 'docker'
      | 'ex'
      | 'elixir'
      | 'generic'
      | 'go'
      | 'golang'
      | 'gosu'
      | 'hack'
      | 'html'
      | 'java'
      | 'js'
      | 'javascript'
      | 'json'
      | 'jsonnet'
      | 'julia'
      | 'kt'
      | 'kotlin'
      | 'lisp'
      | 'lua'
      | 'ocaml'
      | 'php'
      | 'python2'
      | 'python3'
      | 'py'
      | 'python'
      | 'r'
      | 'regex'
      | 'none'
      | 'ruby'
      | 'rust'
      | 'scala'
      | 'scheme'
      | 'solidity'
      | 'sol'
      | 'swift'
      | 'tf'
      | 'hcl'
      | 'terraform'
      | 'ts'
      | 'typescript'
      | 'vue'
      | 'yaml'
      | 'xml'
    )
)[];
export type PathArray = string[];
export type SeverityToReportAlongsideThisFinding =
  'ERROR' | 'WARNING' | 'INFO' | 'INVENTORY' | 'EXPERIMENT' | 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
export type ReturnFindingWhereSemgrepPatternMatchesExactly = string;
export type ReturnFindingWhereRegularExpressionMatchesExactly = string;
export type ReturnFindingsOnlyFromWithinSnippetsSemgrepPatternMatches =
  | string
  | {
      [k: string]: unknown | undefined;
    };
export type MarksThisSubpatternSuchThatAtAContainingPatternsOrOtherFormOfConjunctionTheRangeIsNotConsideredSubpatternMatchesAreInsteadCombinedSolelyOnTheBasisOfMetavariablesWithoutRespectToRangeAndTheRangeOfTheMatchingSubpatternIsDiscardedWholly =
  | string
  | {
      [k: string]: unknown | undefined;
    };
export type ReturnFindingWhereRegularExpressionMatches = string;
export type ReturnFindingWhereAnyOfTheNestedConditionsAreTrue = (
  Patterns | PatternEither | PatternInside | SemgrepInternalPatternAnywhere | Pattern | PatternRegex
)[];
export type FocusOnWhatAGivenMetavariableIsMatching = {
  [k: string]: unknown | undefined;
}[];
export type DoNotReturnFindingsFromWithinSnippetsSemgrepPatternMatches =
  | string
  | {
      [k: string]: unknown | undefined;
    };
export type DoNotReturnFindingWhereSemgrepPatternMatchesExactly =
  | string
  | {
      [k: string]: unknown | undefined;
    };
export type DoNotReturnFindingWhereRegularExpressionMatches = string;
export type AnalyzerToUse =
  | 'entropy'
  | 'entropy_v2'
  | 'redos'
  | {
      kind: 'entropy';
    }
  | {
      kind: 'entropy_v2';
      mode?: 'lax' | 'strict' | 'default';
    }
  | {
      kind: 'redos';
    };
export type MetavariableToAnalyze = string;
export type MetavariableToSearch = string;
export type PCRERegularExpression = string;
export type MatchMetavariableValueWithAPatternFormula = {
  [k: string]: unknown | undefined;
} & {
  metavariable: MetavariableToMatch;
  language?: string;
  pattern?: ReturnFindingWhereSemgrepPatternMatchesExactly;
  'pattern-regex'?: ReturnFindingWhereRegularExpressionMatchesExactly;
  patterns?: ReturnFindingWhereAllOfTheNestedConditionsAreTrue;
  'pattern-either'?: ReturnFindingWhereAnyOfTheNestedConditionsAreTrue;
};
export type MetavariableToMatch = string;
export type FilterForMetavariablesWithACertainType = {
  [k: string]: unknown | undefined;
} & {
  metavariable?: MetavariableToMatch;
  type?: TypeExpression;
  types?: TypeExpressions;
  language?: string;
};
export type TypeExpression = string;
export type TypeExpressions = string[];
export type FilterForMetavariablesWithACertainKind = {
  [k: string]: unknown | undefined;
} & {
  metavariable: MetavariableToMatch;
  kind?: KindKeyword;
  module?: AModuleName;
  modules?: AListOfModuleNames;
  fqn?: AFullyQualifiedName;
  fqns?: AListOfFullyQualifiedNames;
};
export type KindKeyword = string;
export type AModuleName = string;
export type AListOfModuleNames = string[];
export type AFullyQualifiedName = string;
export type AListOfFullyQualifiedNames = string[];
export type FilterForMetavariablesWithACertainKind1 = {
  [k: string]: unknown | undefined;
} & {
  metavariable: MetavariableToMatch;
  module?: AModuleName;
  modules?: AListOfModuleNames;
};
export type MetavariableToCompare = string;
export type ComparisonExpression = string;
export type ReturnFindingWherePythonExpressionReturnsTrue = string;
export type ReturnFindingWhereAllOfTheNestedConditionsAreTrue = (
  | Patterns
  | PatternEither
  | FocusMetavariable
  | PatternInside
  | SemgrepInternalPatternAnywhere
  | PatternNotInside
  | PatternNot
  | Pattern
  | PatternRegex
  | PatternNotRegex
  | MetavariableAnalysis
  | MetavariableRegex
  | MetavariablePattern
  | MetavariableType
  | SemgrepInternalMetavariableName
  | MetavariableName
  | MetavariableComparison
  | PatternWherePython
)[];
export type TaintContent = ({
  [k: string]: unknown | undefined;
} & {
  pattern?: ReturnFindingWhereSemgrepPatternMatchesExactly;
  'pattern-regex'?: ReturnFindingWhereRegularExpressionMatchesExactly;
  patterns?: ReturnFindingWhereAllOfTheNestedConditionsAreTrue;
  'pattern-either'?: ReturnFindingWhereAnyOfTheNestedConditionsAreTrue;
  [k: string]: unknown | undefined;
})[];
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern = NewSourcePattern & NewSourcePattern1;
export type NewSourcePattern =
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    });
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1 =
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    });
export type IntegerBaseToParseMetavariableContentsAs = number;
export type WhetherToStripQuotesFromComparedMetavariables = boolean;
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2 = (
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    })
) & {
  metavariable: string;
  [k: string]: unknown | undefined;
};
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern3 = NewSinkPattern & NewSinkPattern1;
export type NewSinkPattern =
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    });
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern4 = NewPropagatorPattern & NewPropagatorPattern1;
export type NewPropagatorPattern =
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    });
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern5 = NewSanitizerPattern & NewSanitizerPattern1;
export type NewSanitizerPattern =
  | string
  | ({
      [k: string]: unknown | undefined;
    } & {
      pattern?: string;
      regex?: string;
      /**
       * @minItems 1
       */
      all?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      /**
       * @minItems 1
       */
      any?: [
        ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1,
        ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1[]
      ];
      not?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      inside?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      anywhere?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
      where?: (
        | {
            focus: string | string[];
            [k: string]: unknown | undefined;
          }
        | {
            comparison: string;
            base?: IntegerBaseToParseMetavariableContentsAs;
            strip?: WhetherToStripQuotesFromComparedMetavariables;
            [k: string]: unknown | undefined;
          }
        | ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern2
        | {
            metavariable: string;
            type: string;
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            types: string[];
            [k: string]: unknown | undefined;
          }
        | {
            metavariable: string;
            analyzer: AnalyzerToUse;
            [k: string]: unknown | undefined;
          }
      )[];
      [k: string]: unknown | undefined;
    });
export type Validator = {
  http?: {
    request: HttpRequestContent;
    response: HttpResponseContent;
    [k: string]: unknown | undefined;
  };
  aws?: {
    request: AwsRequestContent;
    response: HttpResponseContent;
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
} & Validator1;
export type ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern6 = (
  | string
  | {
      [k: string]: unknown | undefined;
    }
) & {
  language?: string;
  [k: string]: unknown | undefined;
};
export type HttpResponseContent = HttpResponseItem[];
export type Validator1 =
  {
      [k: string]: unknown | undefined;
    };
export type ReplacementTextToFixMatchedCodeCanUseMatchedMetavariables = string;
export type ReplaceUpToThisManyRegexMatches = number;
export type RegularExpressionToFindInMatchedCode = string;
export type CodeToReplaceTheRegularExpressionMatchWithCanUseCaptureGroups = string;
export type OneOrMoreDependenciesThatTheProjectContainsInALockFile = R2CInternalProjectDependsOnContent &
  R2CInternalProjectDependsOnContent1;
export type R2CInternalProjectDependsOnContent = {
  [k: string]: unknown | undefined;
};
export type MetavariableWhoseContentToUseAsTheExtractedResultForSubsequentRules = string;
export type LanguageToProcessTheExtractedResultOfThisRuleAs = string;
export type MethodToTransformTheExtractedContent = 'no_transform' | 'unquote_string' | 'concat_json_string_array';
export type MethodOfIntrafileMatchReduction = 'concat' | 'separate';

export interface HttpsRawGithubusercontentComReturntocorpSemgrepInterfacesMainRuleSchemaV1Yaml {
  rules: {
    id?: RuleIDToAttachToFindings;
    'min-version'?: EarliestSemgrepVersionSupportingThisRule;
    'max-version'?: LastSemgrepVersionSupportingThisRule;
    version?: VersionOfRule;
    message?: DescriptionToAttachToFindings;
    mode?: 'search' | 'taint' | 'join' | 'extract';
    languages?: LanguagesThisPatternShouldRunOn;
    paths?: PathGlobsThisPatternShouldRunOn;
    severity?: SeverityToReportAlongsideThisFinding;
    'pattern-sinks'?: TaintContent;
    'pattern-sources'?: TaintContent;
    'pattern-sanitizers'?: TaintContent;
    'pattern-propagators'?: TaintContent;
    taint?: ReturnFindingUsingTaintGivenSourcesAndSinks;
    join?: JoinOneOrMoreRulesTogetherBasedOnMetavariableContents;
    /**
     * @minItems 1
     */
    validators?: [Validator, ...Validator[]];
    fix?: ReplacementTextToFixMatchedCodeCanUseMatchedMetavariables;
    'fix-regex'?: ReplacementRegexToFixMatchedCode;
    metadata?: ArbitraryStructuredDataForYourOwnReference;
    options?: OptionsObjectToEnableDisableCertainMatchingFeaturesInSemgrepCore;
    pattern?: ReturnFindingWhereSemgrepPatternMatchesExactly;
    'pattern-regex'?: ReturnFindingWhereRegularExpressionMatchesExactly;
    patterns?: ReturnFindingWhereAllOfTheNestedConditionsAreTrue;
    'pattern-either'?: ReturnFindingWhereAnyOfTheNestedConditionsAreTrue;
    'r2c-internal-project-depends-on'?: OneOrMoreDependenciesThatTheProjectContainsInALockFile;
    match?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern1;
    extract?: MetavariableWhoseContentToUseAsTheExtractedResultForSubsequentRules;
    'dest-rules'?: RulesToIncludeOrExcludeWhenRunningTheDestinationLanguageRulesOnTheExtractedFile;
    'dest-language'?: LanguageToProcessTheExtractedResultOfThisRuleAs;
    transform?: MethodToTransformTheExtractedContent;
    reduce?: MethodOfIntrafileMatchReduction;
    [k: string]: unknown | undefined;
  }[];
  [k: string]: unknown | undefined;
}
export interface PathGlobsThisPatternShouldRunOn {
  include?: PathArray;
  exclude?: PathArray;
}
export interface Patterns {
  patterns: ReturnFindingWhereAllOfTheNestedConditionsAreTrue;
}
export interface PatternEither {
  'pattern-either': ReturnFindingWhereAnyOfTheNestedConditionsAreTrue;
}
export interface PatternInside {
  'pattern-inside': ReturnFindingsOnlyFromWithinSnippetsSemgrepPatternMatches;
}
export interface SemgrepInternalPatternAnywhere {
  'semgrep-internal-pattern-anywhere': MarksThisSubpatternSuchThatAtAContainingPatternsOrOtherFormOfConjunctionTheRangeIsNotConsideredSubpatternMatchesAreInsteadCombinedSolelyOnTheBasisOfMetavariablesWithoutRespectToRangeAndTheRangeOfTheMatchingSubpatternIsDiscardedWholly;
}
export interface Pattern {
  pattern: ReturnFindingWhereSemgrepPatternMatchesExactly;
}
export interface PatternRegex {
  'pattern-regex': ReturnFindingWhereRegularExpressionMatches;
}
export interface FocusMetavariable {
  'focus-metavariable': FocusOnWhatAGivenMetavariableIsMatching;
}
export interface PatternNotInside {
  'pattern-not-inside': DoNotReturnFindingsFromWithinSnippetsSemgrepPatternMatches;
}
export interface PatternNot {
  'pattern-not': DoNotReturnFindingWhereSemgrepPatternMatchesExactly;
}
export interface PatternNotRegex {
  'pattern-not-regex': DoNotReturnFindingWhereRegularExpressionMatches;
}
export interface MetavariableAnalysis {
  'metavariable-analysis': InspectAMetavariableWithAGivenAnalyzer;
}
export interface InspectAMetavariableWithAGivenAnalyzer {
  analyzer: AnalyzerToUse;
  metavariable: MetavariableToAnalyze;
}
export interface MetavariableRegex {
  'metavariable-regex': SearchMetavariableValueWithRegEx;
}
export interface SearchMetavariableValueWithRegEx {
  metavariable: MetavariableToSearch;
  regex: PCRERegularExpression;
  'constant-propagation'?: boolean;
}
export interface MetavariablePattern {
  'metavariable-pattern': MatchMetavariableValueWithAPatternFormula;
}
export interface MetavariableType {
  'metavariable-type': FilterForMetavariablesWithACertainType;
}
export interface SemgrepInternalMetavariableName {
  'semgrep-internal-metavariable-name': FilterForMetavariablesWithACertainKind;
}
export interface MetavariableName {
  'metavariable-name': FilterForMetavariablesWithACertainKind1;
}
export interface MetavariableComparison {
  'metavariable-comparison': CompareMetavariablesWithOtherMetavariablesOrLiteralsUsingConstantPropagation;
}
export interface CompareMetavariablesWithOtherMetavariablesOrLiteralsUsingConstantPropagation {
  metavariable?: MetavariableToCompare;
  comparison: ComparisonExpression;
  strip?: boolean;
  base?: number;
}
export interface PatternWherePython {
  'pattern-where-python': ReturnFindingWherePythonExpressionReturnsTrue;
}
export interface ReturnFindingUsingTaintGivenSourcesAndSinks {
  /**
   * @minItems 1
   */
  sources: [
    ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern,
    ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern[]
  ];
  /**
   * @minItems 1
   */
  sinks: [
    ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern3,
    ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern3[]
  ];
  /**
   * @minItems 1
   */
  propagators?: [
    ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern4,
    ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern4[]
  ];
  /**
   * @minItems 1
   */
  sanitizers?: [
    ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern5,
    ...ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern5[]
  ];
  [k: string]: unknown | undefined;
}
export interface NewSourcePattern1 {
  requires?: string;
  label?: string;
  [k: string]: unknown | undefined;
}
export interface NewSinkPattern1 {
  requires?:
    | string
    | {
        [k: string]: string | undefined;
      }[];
  [k: string]: unknown | undefined;
}
export interface NewPropagatorPattern1 {
  from: string;
  to: string;
  [k: string]: unknown | undefined;
}
export interface NewSanitizerPattern1 {
  'not-conflicting'?: string;
  [k: string]: unknown | undefined;
}
export interface JoinOneOrMoreRulesTogetherBasedOnMetavariableContents {
  refs?: {
    rule?: string;
    renames?: {
      from?: string;
      to?: string;
      [k: string]: unknown | undefined;
    }[];
    as?: string;
  }[];
  rules?: ({
    [k: string]: unknown | undefined;
  } & {
    id: RuleIDToAttachToFindings;
    languages: LanguagesThisPatternShouldRunOn;
    pattern?: string;
    patterns?: ReturnFindingWhereAllOfTheNestedConditionsAreTrue;
    mode?: 'search' | 'taint';
    'pattern-sources'?: TaintContent;
    'pattern-propagators'?: TaintContent;
    'pattern-sinks'?: TaintContent;
    'pattern-sanitizers'?: TaintContent;
  })[];
  on?: string[];
  additionalProperties?: never;
}
export interface HttpRequestContent {
  url?: string;
  method?: string;
  headers?: {
    [k: string]: unknown | undefined;
  };
  body?: string;
  auth?: {
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface HttpResponseItem {
  match?: HttpResponseMatch;
  result?: {
    validity?: 'valid' | 'invalid';
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
export interface HttpResponseMatch {
  'status-code'?: number;
  headers?: {
    name?: string;
    value?: string;
    [k: string]: unknown | undefined;
  }[];
  content?: ReturnFindingWhereCodeMatchesAgainstTheFollowingPattern6;
  [k: string]: unknown | undefined;
}
export interface AwsRequestContent {
  access_key_id: string;
  secret_access_key: string;
  region: string;
  session_token?: string;
  [k: string]: unknown | undefined;
}
export interface ReplacementRegexToFixMatchedCode {
  count?: ReplaceUpToThisManyRegexMatches;
  regex: RegularExpressionToFindInMatchedCode;
  replacement: CodeToReplaceTheRegularExpressionMatchWithCanUseCaptureGroups;
}
export interface ArbitraryStructuredDataForYourOwnReference {
  [k: string]: unknown | undefined;
}
export interface OptionsObjectToEnableDisableCertainMatchingFeaturesInSemgrepCore {
  [k: string]: unknown | undefined;
}
export interface R2CInternalProjectDependsOnContent1 {
  namespace?: string;
  package?: string;
  version?: string;
  'depends-on-either'?: unknown[];
  [k: string]: unknown | undefined;
}
export interface RulesToIncludeOrExcludeWhenRunningTheDestinationLanguageRulesOnTheExtractedFile {
  include?: PathArray;
  exclude?: PathArray;
  [k: string]: unknown | undefined;
}
