/* eslint-disable */

/**
 * Json schema version for the vtesttree.yaml file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = '2.0.0';
/**
 * Parameter value for a CAPL test case or CAPL test sequence.
 */
export type CAPLParameter = NumericValue | StringValue;
export type NumericValue = number;
export type StringValue = string;
/**
 * List of parameter values for a CAPL test case or CAPL test sequence.
 */
export type CAPLParameterList = CAPLParameter[];
/**
 * Definition of a test tree consisting of test fixtures, CAPL test cases and CAPL test sequences.
 *
 * Items: Element of a test tree or test fixture.
 */
export type TestTree = (CAPLTestCase | CAPLTestSequence | TestFixture)[];

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
  params?: CAPLParameterList;
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
  params?: CAPLParameterList;
}
/**
 * Definition of a test fixture containing other test fixtures, CAPL test cases and CAPL test sequences.
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
  elements?: (CAPLTestCase | CAPLTestSequence | TestFixture)[];
}
