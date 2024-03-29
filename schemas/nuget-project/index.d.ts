/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JSONSchemaForNuGetProjectJsonFiles {
  dependencies?: Dependencies;
  /**
   * The frameworks on which your project will run.
   */
  frameworks?: {
    [k: string]: ConfigType;
  };
  /**
   * The Operating System and Architectures on which your application will be running.
   */
  runtimes?: {
    "centos.7-x64"?: {
      [k: string]: unknown;
    };
    "debian.8-x64"?: {
      [k: string]: unknown;
    };
    "fedora.23-x64"?: {
      [k: string]: unknown;
    };
    "fedora.24-x64"?: {
      [k: string]: unknown;
    };
    "linuxmint.17-x64"?: {
      [k: string]: unknown;
    };
    "linuxmint.17.1-x64"?: {
      [k: string]: unknown;
    };
    "linuxmint.17.2-x64"?: {
      [k: string]: unknown;
    };
    "linuxmint.17.3-x64"?: {
      [k: string]: unknown;
    };
    "linuxmint.18-x64"?: {
      [k: string]: unknown;
    };
    "ol.7.0-x64"?: {
      [k: string]: unknown;
    };
    "ol.7.1-x64"?: {
      [k: string]: unknown;
    };
    "ol.7.2-x64"?: {
      [k: string]: unknown;
    };
    "opensuse.13.2-x64"?: {
      [k: string]: unknown;
    };
    "opensuse.42.1-x64"?: {
      [k: string]: unknown;
    };
    "osx.10.10-x64"?: {
      [k: string]: unknown;
    };
    "osx.10.11-x64"?: {
      [k: string]: unknown;
    };
    "osx.10.12-x64"?: {
      [k: string]: unknown;
    };
    "rhel.7.0-x64"?: {
      [k: string]: unknown;
    };
    "rhel.7.1-x64"?: {
      [k: string]: unknown;
    };
    "rhel.7.2-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.14.04-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.14.10-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.15.04-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.15.10-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.16.04-x64"?: {
      [k: string]: unknown;
    };
    "ubuntu.16.10-x64"?: {
      [k: string]: unknown;
    };
    win?: {
      [k: string]: unknown;
    };
    "win-x86"?: {
      [k: string]: unknown;
    };
    "win-x64"?: {
      [k: string]: unknown;
    };
    win7?: {
      [k: string]: unknown;
    };
    "win7-x86"?: {
      [k: string]: unknown;
    };
    "win7-x64"?: {
      [k: string]: unknown;
    };
    win8?: {
      [k: string]: unknown;
    };
    "win8-x86"?: {
      [k: string]: unknown;
    };
    "win8-x64"?: {
      [k: string]: unknown;
    };
    "win8-arm"?: {
      [k: string]: unknown;
    };
    win81?: {
      [k: string]: unknown;
    };
    "win81-x86"?: {
      [k: string]: unknown;
    };
    "win81-x64"?: {
      [k: string]: unknown;
    };
    "win81-arm"?: {
      [k: string]: unknown;
    };
    "win10-arm"?: {
      [k: string]: unknown;
    };
    "win10-arm-aot"?: {
      [k: string]: unknown;
    };
    "win10-x86"?: {
      [k: string]: unknown;
    };
    "win10-x86-aot"?: {
      [k: string]: unknown;
    };
    "win10-x64"?: {
      [k: string]: unknown;
    };
    "win10-x64-aot"?: {
      [k: string]: unknown;
    };
    [k: string]: unknown;
  };
  /**
   * A list of supported target frameworks.
   */
  supports?: {
    /**
     * A supported target framework.
     */
    [k: string]: {
      [k: string]: unknown;
    };
  };
  [k: string]: unknown;
}
/**
 * A list of dependencies.
 */
export interface Dependencies {
  [k: string]:
    | string
    | {
        version?: string;
        type?: "default" | "build";
        [k: string]: unknown;
      };
}
export interface ConfigType {
  dependencies?: Dependencies;
  imports?: string;
  [k: string]: unknown;
}
