/* eslint-disable */

/**
 * Json schema version for the vtesttree.yaml file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '2.4.0';
/**
 * Parameter value for a test case or test sequence.
 */
export type Parameter = NumericValue | StringValue;
export type NumericValue = number;
export type StringValue = string;
/**
 * List of parameter values for a test case or test sequence.
 */
export type ParameterList = Parameter[];
/**
 * A condition based on variant property values. If the condition is not fulfilled, the node will not be added to the test tree. The variant property must be defined in the vtestunit.yaml. The only allowed operators are !=, == and ||.
 */
export type VariantDependencies = string;
/**
 * Definition of calls to a CAPL test case with a list of parameter combinations.
 */
export type CAPLTestCaseList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the CAPL test case.
   */
  'capl-test-case-list': string;
  /**
   * Identifier used for all created CAPL test case calls.
   */
  id?: string;
  /**
   * Title of the CAPL test case calls.
   */
  title?: string;
  /**
   * An optional title for individual test cases of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-case-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * List of lists of parameter values for a test case or test sequence. Each list specifies values for one parameter. Mutually exclusive with param-vectors.
 *
 * @minItems 1
 */
export type ParameterValuesList = [ParameterList, ...ParameterList[]];
/**
 * A list of vectors of parameter values passed to the called function. Each vector in the list contains the parameter values for a single call. Mutually exclusive with param-values and combinatorics.
 *
 * @minItems 1
 */
export type ParameterVectorsList = [ParameterList, ...ParameterList[]];
/**
 * Definition of calls to a CAPL test sequence with a list of parameter combinations.
 */
export type CAPLTestSequenceList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the CAPL test sequence.
   */
  'capl-test-sequence-list': string;
  /**
   * Title of the CAPL test sequence calls.
   */
  title?: string;
  /**
   * An optional title for individual test sequences of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-sequence-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * Definition of calls to a .NET test case with a list of parameter combinations.
 */
export type NETTestCaseList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the .NET test case.
   */
  'dotnet-test-case-list': string;
  /**
   * Identifier used for all created .NET test case calls.
   */
  id?: string;
  /**
   * Title of the .NET test case calls.
   */
  title?: string;
  /**
   * An optional title for individual test cases of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-case-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * Definition of calls to a .NET test sequence with a list of parameter combinations.
 */
export type NETTestSequenceList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the .NET test sequence.
   */
  'dotnet-test-sequence-list': string;
  /**
   * Title of the .NET test sequence calls.
   */
  title?: string;
  /**
   * An optional title for individual test sequences of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-sequence-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * Definition of calls to a Python test case with a list of parameter combinations.
 */
export type PythonTestCaseList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the Python test case.
   */
  'python-test-case-list': string;
  /**
   * Identifier used for all created Python test case calls.
   */
  id?: string;
  /**
   * Title of the Python test case calls.
   */
  title?: string;
  /**
   * An optional title for individual test cases of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-case-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * Definition of calls to a Python test sequence with a list of parameter combinations.
 */
export type PythonTestSequenceList = {
  [k: string]: unknown | undefined;
} & {
  /**
   * Function name of the Python test sequence.
   */
  'python-test-sequence-list': string;
  /**
   * Title of the Python test sequence calls.
   */
  title?: string;
  /**
   * An optional title for individual test sequences of the list. Allows for field codes using {FieldCode} syntax.
   */
  'test-sequence-title'?: string;
  'param-values'?: ParameterValuesList;
  /**
   * The style of combinatorics to be used for parameter generation. The default value is sequential.
   */
  combinatorics?: ('sequential' | 'pairwise' | 'combinatorial') & string;
  'variant-dependencies'?: VariantDependencies;
  'param-vectors'?: ParameterVectorsList;
};
/**
 * Function name of the CAPL preparation.
 */
export type CAPLPreparation = string;
/**
 * Function name of the CAPL completion.
 */
export type CAPLCompletion = string;
/**
 * Function name of the .NET preparation.
 */
export type NETPreparation = string;
/**
 * Function name of the .NET completion.
 */
export type NETCompletion = string;
/**
 * Function name of the Python preparation.
 */
export type PythonPreparation = string;
/**
 * Function name of the Python completion.
 */
export type PythonCompletion = string;
/**
 * Definition of a test tree consisting of test fixtures, test cases and test sequences.
 *
 * Items: Element of a test tree or test fixture.
 */
export type TestTree = (
  | CAPLTestCase
  | CAPLTestCaseList
  | CAPLTestSequence
  | CAPLTestSequenceList
  | NETTestCase
  | NETTestCaseList
  | NETTestSequence
  | NETTestSequenceList
  | PythonTestCase
  | PythonTestCaseList
  | PythonTestSequence
  | PythonTestSequenceList
  | TestFixture
)[];

/**
 * Vector test execution tree description
 */
export interface VtesttreeYaml {
  version: Version;
  'test-tree'?: TestTree;
}
/**
 * Definition of a call to a CAPL test case.
 */
export interface CAPLTestCase {
  /**
   * Function name of the CAPL test case.
   */
  'capl-test-case': string;
  /**
   * Identifier of the CAPL test case.
   */
  id?: string;
  /**
   * Title of the CAPL test case.
   */
  title?: string;
  /**
   * Description of the CAPL test case.
   */
  description?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a call to a CAPL test sequence.
 */
export interface CAPLTestSequence {
  /**
   * Function name of the CAPL test sequence.
   */
  'capl-test-sequence': string;
  /**
   * Title of the CAPL test sequence.
   */
  title?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a call to a .NET test case.
 */
export interface NETTestCase {
  /**
   * Function name of the .NET test case.
   */
  'dotnet-test-case': string;
  /**
   * Identifier of the .NET test case.
   */
  id?: string;
  /**
   * Title of the .NET test case.
   */
  title?: string;
  /**
   * Description of the .NET test case.
   */
  description?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a call to a .NET test sequence.
 */
export interface NETTestSequence {
  /**
   * Function name of the .NET test sequence.
   */
  'dotnet-test-sequence': string;
  /**
   * Title of the .NET test sequence.
   */
  title?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a call to a Python test case.
 */
export interface PythonTestCase {
  /**
   * Function name of the Python test case.
   */
  'python-test-case': string;
  /**
   * Identifier of the Python test case.
   */
  id?: string;
  /**
   * Title of the Python test case.
   */
  title?: string;
  /**
   * Description of the Python test case.
   */
  description?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a call to a Python test sequence.
 */
export interface PythonTestSequence {
  /**
   * Function name of the Python test sequence.
   */
  'python-test-sequence': string;
  /**
   * Title of the Python test sequence.
   */
  title?: string;
  params?: ParameterList;
  'variant-dependencies'?: VariantDependencies;
}
/**
 * Definition of a test fixture containing other test fixtures, test cases and test sequences.
 */
export interface TestFixture {
  /**
   * Name of the test fixture.
   */
  'test-fixture': string;
  /**
   * Description of the test fixture.
   */
  description?: string;
  /**
   * Items: Element of a test tree or test fixture.
   */
  elements?: (
    | CAPLTestCase
    | CAPLTestCaseList
    | CAPLTestSequence
    | CAPLTestSequenceList
    | NETTestCase
    | NETTestCaseList
    | NETTestSequence
    | NETTestSequenceList
    | PythonTestCase
    | PythonTestCaseList
    | PythonTestSequence
    | PythonTestSequenceList
    | TestFixture
  )[];
  'capl-preparation'?: CAPLPreparation;
  'capl-completion'?: CAPLCompletion;
  'dotnet-preparation'?: NETPreparation;
  'dotnet-completion'?: NETCompletion;
  'python-preparation'?: PythonPreparation;
  'python-completion'?: PythonCompletion;
  'variant-dependencies'?: VariantDependencies;
}
