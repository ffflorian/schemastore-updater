/* eslint-disable */

export interface HttpsJsonSchemastoreOrgBpkgJson {
  /**
   * Where the dependency is located in `deps/`.
   *
   * See more: https://github.com/bpkg/bpkg#name
   */
  name: string;
  /**
   * The current version of the dependency.
   *
   * See more: https://github.com/bpkg/bpkg#version-optional
   */
  version?: string;
  /**
   * Human-readable description of the functionality of the package.
   *
   * See more: https://github.com/bpkg/bpkg#description
   */
  description: string;
  /**
   * Whether the package is only intended be installed as a global script. Allows the omission of the `--global` flag when installing.
   *
   * See more: https://github.com/bpkg/bpkg#global
   */
  global: string;
  /**
   * Shell script used to invoke in the install script. Required if package is being installed as a global script.
   *
   * See more: https://github.com/bpkg/bpkg#install-1
   */
  install: string;
  /**
   * An array of scripts to install into a project. See more: https://github.com/bpkg/bpkg#scripts
   */
  scripts: string[];
  /**
   * An array of non-script files to install into a project. See more: https://github.com/bpkg/bpkg#files-optional
   */
  files?: string[];
  /**
   * Hash of dependencies of this project. Use either a tagged release identifier or `master`.
   *
   * See more: https://github.com/bpkg/bpkg#dependencies-optional
   */
  dependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * Hash of development dependencies of this project. Use either a tagged release identifier or `master`.
   *
   * See more: https://github.com/bpkg/bpkg#dependencies-dev-optional
   */
  'dependencies-dev'?: {
    [k: string]: string | undefined;
  };
  /**
   * A hash of runnable commands for `bpkg run`.
   *
   * See more: https://github.com/bpkg/bpkg#commands-optional
   */
  commands?: {
    [k: string]: string | undefined;
  };
  /**
   * A hash of descriptions for each command in `commands`.
   *
   * See more: https://github.com/bpkg/bpkg#commands-description-optional
   */
  'commands-description'?: {
    [k: string]: string | undefined;
  };
  [k: string]: unknown | undefined;
}
