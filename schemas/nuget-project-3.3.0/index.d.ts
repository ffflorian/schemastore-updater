/* eslint-disable */

export interface JSONSchemaForNuGetProjectJsonFiles {
  dependencies?: Dependencies;
  frameworks?: {
    [k: string]: ConfigType | undefined;
  };
  /**
   * A list of supported runtime platforms.
   */
  runtimes?: {
    'win10-arm'?: {
      [k: string]: unknown | undefined;
    };
    'win10-arm-aot'?: {
      [k: string]: unknown | undefined;
    };
    'win10-x86'?: {
      [k: string]: unknown | undefined;
    };
    'win10-x86-aot'?: {
      [k: string]: unknown | undefined;
    };
    'win10-x64'?: {
      [k: string]: unknown | undefined;
    };
    'win10-x64-aot'?: {
      [k: string]: unknown | undefined;
    };
    [k: string]: unknown | undefined;
  };
  /**
   * A list of supported target frameworks.
   */
  supports?: {
    /**
     * A supported target framework.
     */
    [k: string]:
      | {
          [k: string]: unknown | undefined;
        }
      | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * A list of dependencies.
 */
export interface Dependencies {
  [k: string]:
    | (
        | string
        | {
            version?: string;
            type?: 'default' | 'build';
            [k: string]: unknown | undefined;
          }
      )
    | undefined;
}
export interface ConfigType {
  dependencies?: Dependencies;
  imports?: string;
  [k: string]: unknown | undefined;
}
