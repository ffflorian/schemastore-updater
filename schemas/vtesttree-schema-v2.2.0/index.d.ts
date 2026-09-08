/* eslint-disable */

/**
 * Json schema version for the vtesttree.yaml file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '2.2.0';
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
  CAPLTestCase | CAPLTestSequence | NETTestCase | NETTestSequence | PythonTestCase | PythonTestSequence | TestFixture
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
    CAPLTestCase | CAPLTestSequence | NETTestCase | NETTestSequence | PythonTestCase | PythonTestSequence | TestFixture
  )[];
  'capl-preparation'?: CAPLPreparation;
  'capl-completion'?: CAPLCompletion;
  'dotnet-preparation'?: NETPreparation;
  'dotnet-completion'?: NETCompletion;
  'python-preparation'?: PythonPreparation;
  'python-completion'?: PythonCompletion;
  'variant-dependencies'?: VariantDependencies;
}
