/* eslint-disable */

/**
 * Vector test unit description
 */
export type VtestunitYaml = VtestunitYaml1 | VtestunitYaml2 | VtestunitYaml3;
/**
 * Json schema version for the test unit configuration file. Acceptance criteria: equal major version, less/equal minor and patch version.
 */
export type Version = string;
/**
 * Include a different file (similar to #include of the c preprocessor). The order of includes does not matter. Circular / multiple includes are resolved correctly.
 */
export type IncludeFiles = string | string[];
/**
 * Path to a source file (.can/.canencr/.py/.cs/.vtesttree.yaml).
 */
export type SourceFilePath = {
  [k: string]: unknown | undefined;
} & string;
/**
 * Path to a python package.
 */
export type PythonPackagePath = string;
/**
 * Path to a CAPL library file (.dll).
 */
export type CAPLLibraryPath = string;
/**
 * Path to a .NET assembly file (.dll).
 */
export type NETAssemblyPath = string;
/**
 * Name of .NET framework assembly
 */
export type NETFrameworkAssemblyName = string;
/**
 * Path to a modeling library file (.vmodule).
 */
export type ModelingLibraryPath = string;
/**
 * Path to a traceitem file (.vti-tso).
 */
export type TraceitemFilePath = {
  [k: string]: unknown | undefined;
} & string;
/**
 * Source artifacts of the test unit. Absolute and relative paths are allowed. Relative path specifications are resolved relative to the vtestunit.yaml file.
 */
export type TestUnitImplementation = (
  | {
      'source-file-path'?: SourceFilePath;
    }
  | {
      'python-package-path'?: PythonPackagePath;
    }
  | {
      'capl-library-path'?: CAPLLibraryPath;
    }
  | {
      'dotnet-assembly-path'?: NETAssemblyPath;
    }
  | {
      'dotnet-framework-assembly-name'?: NETFrameworkAssemblyName;
    }
  | {
      'modeling-library-path'?: ModelingLibraryPath;
    }
  | {
      'traceitem-file-path'?: TraceitemFilePath;
    }
)[];
/**
 * Extension with variant support. The name of the variant and the corresponding variant table must be specified.
 *
 * @minItems 0
 * @maxItems 1
 */
export type VariantProperties =
  | []
  | [
      {
        name: string;
        'value-table': string[];
      }
    ];
/**
 * File path to a requirement or test specification file (.vti-tso).
 */
export type TraceItemFilePath = {
  [k: string]: unknown | undefined;
} & string;
/**
 * File paths to requirement or test specification files (.vti-tso).
 */
export type TraceItems = {
  'file-path'?: TraceItemFilePath;
}[];
/**
 * Source artifacts of the test unit. Absolute and relative paths are allowed. Relative path specifications are resolved relative to the vtestunit.yaml file.
 */
export type TestUnitImplementation1 = (
  | {
      'source-file-path'?: SourceFilePath;
    }
  | {
      'python-package-path'?: PythonPackagePath;
    }
  | {
      'capl-library-path'?: CAPLLibraryPath;
    }
  | {
      'dotnet-assembly-path'?: NETAssemblyPath;
    }
  | {
      'dotnet-framework-assembly-name'?: NETFrameworkAssemblyName;
    }
  | {
      'modeling-library-path'?: ModelingLibraryPath;
    }
)[];
/**
 * Source artifacts of the test unit. Absolute and relative paths are allowed. Relative path specifications are resolved relative to the vtestunit.yaml file.
 */
export type TestUnitImplementation2 = (
  | {
      'source-file-path'?: SourceFilePath;
    }
  | {
      'capl-library-path'?: CAPLLibraryPath;
    }
  | {
      'modeling-library-path'?: ModelingLibraryPath;
    }
)[];

/**
 * Vector test unit description
 */
export interface VtestunitYaml1 {
  version: Version;
  includes?: IncludeFiles;
  'test-unit-information'?: TestUnitInformation;
  'test-unit-implementation'?: TestUnitImplementation;
  'variant-properties'?: VariantProperties;
  'trace-items'?: TraceItems;
}
/**
 * Miscellaneous test unit information can be defined. After the execution they are available in the test report.
 */
export interface TestUnitInformation {
  /**
   * Caption of the test unit.
   */
  caption?: string;
  /**
   * Description of the test unit.
   */
  description?: string;
  /**
   * Version of the test unit.
   */
  version?: string;
  /**
   * Information on the test developer(s). A sequence of key-value pairs that can be freely selected.
   */
  'test-designers'?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Additional key-value pairs. One key 'name' is required, the other keys can be freely selected.
   */
  'additional-information'?: {
    name: string;
    [k: string]: unknown | undefined;
  }[];
}
/**
 * Vector test unit description
 */
export interface VtestunitYaml2 {
  version: Version;
  includes?: IncludeFiles;
  'test-unit-information'?: TestUnitInformation;
  'test-unit-implementation'?: TestUnitImplementation1;
}
/**
 * Vector test unit description
 */
export interface VtestunitYaml3 {
  version: Version;
  includes?: IncludeFiles;
  'test-unit-information'?: TestUnitInformation1;
  'test-unit-implementation'?: TestUnitImplementation2;
}
/**
 * Miscellaneous test unit information can be defined. After the execution they are available in the test report.
 */
export interface TestUnitInformation1 {
  /**
   * Caption of the test unit.
   */
  caption?: string;
  /**
   * Description of the test unit.
   */
  description?: string;
  /**
   * Version of the test unit.
   */
  version?: string;
  /**
   * Information on the test developer(s). A sequence of key-value pairs that can be freely selected.
   */
  'test-designer'?: {
    [k: string]: unknown | undefined;
  }[];
  /**
   * Additional key-value pairs. One key 'name' is required, the other keys can be freely selected.
   */
  'additional-information'?: {
    name: string;
    [k: string]: unknown | undefined;
  }[];
}
