/* eslint-disable */

export interface JSONSchemaForNuGetProjectJsonFiles {
  dependencies?: Dependencies;
  /**
   * The frameworks on which your project will run.
   */
  frameworks?: {
    [k: string]: ConfigType | undefined;
  };
  /**
   * The Operating System and Architectures on which your application will be running.
   */
  runtimes?: {
    'centos.7-x64'?: {
      [k: string]: unknown | undefined;
    };
    'debian.8-x64'?: {
      [k: string]: unknown | undefined;
    };
    'fedora.23-x64'?: {
      [k: string]: unknown | undefined;
    };
    'fedora.24-x64'?: {
      [k: string]: unknown | undefined;
    };
    'linuxmint.17-x64'?: {
      [k: string]: unknown | undefined;
    };
    'linuxmint.17.1-x64'?: {
      [k: string]: unknown | undefined;
    };
    'linuxmint.17.2-x64'?: {
      [k: string]: unknown | undefined;
    };
    'linuxmint.17.3-x64'?: {
      [k: string]: unknown | undefined;
    };
    'linuxmint.18-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ol.7.0-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ol.7.1-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ol.7.2-x64'?: {
      [k: string]: unknown | undefined;
    };
    'opensuse.13.2-x64'?: {
      [k: string]: unknown | undefined;
    };
    'opensuse.42.1-x64'?: {
      [k: string]: unknown | undefined;
    };
    'osx.10.10-x64'?: {
      [k: string]: unknown | undefined;
    };
    'osx.10.11-x64'?: {
      [k: string]: unknown | undefined;
    };
    'osx.10.12-x64'?: {
      [k: string]: unknown | undefined;
    };
    'rhel.7.0-x64'?: {
      [k: string]: unknown | undefined;
    };
    'rhel.7.1-x64'?: {
      [k: string]: unknown | undefined;
    };
    'rhel.7.2-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.14.04-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.14.10-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.15.04-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.15.10-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.16.04-x64'?: {
      [k: string]: unknown | undefined;
    };
    'ubuntu.16.10-x64'?: {
      [k: string]: unknown | undefined;
    };
    win?: {
      [k: string]: unknown | undefined;
    };
    'win-x86'?: {
      [k: string]: unknown | undefined;
    };
    'win-x64'?: {
      [k: string]: unknown | undefined;
    };
    win7?: {
      [k: string]: unknown | undefined;
    };
    'win7-x86'?: {
      [k: string]: unknown | undefined;
    };
    'win7-x64'?: {
      [k: string]: unknown | undefined;
    };
    win8?: {
      [k: string]: unknown | undefined;
    };
    'win8-x86'?: {
      [k: string]: unknown | undefined;
    };
    'win8-x64'?: {
      [k: string]: unknown | undefined;
    };
    'win8-arm'?: {
      [k: string]: unknown | undefined;
    };
    win81?: {
      [k: string]: unknown | undefined;
    };
    'win81-x86'?: {
      [k: string]: unknown | undefined;
    };
    'win81-x64'?: {
      [k: string]: unknown | undefined;
    };
    'win81-arm'?: {
      [k: string]: unknown | undefined;
    };
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
