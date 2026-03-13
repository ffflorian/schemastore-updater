/* eslint-disable */

/**
 * Description of the op
 */
export type Markdown = string;
/**
 * A single node of the [call graph](https://en.wikipedia.org/wiki/Call_graph)
 */
export type Call = {
  [k: string]: unknown | undefined;
};
/**
 * Version of the op
 */
export type SemVer = string;
/**
 * Version of [opspec](https://opspec.io) used by the op
 */
export type SemVer1 = string;

/**
 * Defines an op
 */
export interface OpFile {
  /**
   * Name of the op
   */
  name: string;
  description?: Markdown;
  inputs?: Inputs;
  outputs?: Inputs;
  run?: Call;
  version?: SemVer;
  opspec?: SemVer1;
}
/**
 * Parameter of an op
 */
export interface Inputs {
  /**
   * This interface was referenced by `Inputs`'s JSON-Schema definition
   * via the `patternProperty` "[-_.a-zA-Z0-9]+".
   */
  [k: string]: {
    [k: string]: unknown | undefined;
  };
}
