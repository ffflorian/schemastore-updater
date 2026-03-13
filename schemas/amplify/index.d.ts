/* eslint-disable */

export interface AWSAmplifyBuildSpecificationAmplifyYml {
  /**
   * Schema version (integer as in AWS examples)
   */
  version?: number;
  env?: {
    variables?: {
      [k: string]: string | undefined;
    };
    [k: string]: unknown | undefined;
  };
  backend?: {
    phases?: {
      [k: string]: Phase;
    };
    [k: string]: unknown | undefined;
  };
  frontend?: {
    buildpath?: string;
    phases?: {
      [k: string]: Phase;
    };
    artifacts?: {
      files?: string[];
      'discard-paths'?: boolean;
      baseDirectory?: string;
    };
    cache?: {
      paths?: string[];
    };
    [k: string]: unknown | undefined;
  };
  test?: {
    phases?: {
      [k: string]: Phase;
    };
    artifacts?: {
      files?: string[];
      configFilePath?: string;
      baseDirectory?: string;
    };
    [k: string]: unknown | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 *
 * This interface was referenced by `undefined`'s JSON-Schema definition
 * via the `patternProperty` ".*".
 */
export interface Phase {
  commands?: string[];
  /**
   * Optional object to specify runtime versions (e.g. nodejs: 12)
   */
  'runtime-versions'?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
