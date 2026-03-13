/* eslint-disable */

export interface HttpsJsonSchemastoreOrgClibJson {
  /**
   * The name of the package
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#name
   */
  name?: string;
  /**
   * The semantic version number of the package. This number should also be a git tag.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#version
   */
  version?: string;
  /**
   * An array of source files that make up the implementation of your package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#src
   */
  src?: string[];
  /**
   * A dictionary of packages and their versions. Each entry represents a package dependency. A dependency must be a clib package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#dependencies
   */
  dependencies?: {
    [k: string]: string | undefined;
  };
  /**
   * Development dependencies are for testing and development purposes.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#development
   */
  development?: {
    [k: string]: string | undefined;
  };
  /**
   * he GitHub slug for your package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#repo
   */
  repo?: string;
  /**
   * A short-and-sweet description of your package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#description
   */
  description?: string;
  /**
   * An array of keywords which describe your package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#keywords
   */
  keywords?: string[];
  /**
   * The license your package is released under.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#license
   */
  license?: string;
  /**
   * Your package's Makefile.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#makefile
   */
  makefile?: string;
  /**
   * Define a script to install your package. This is for executables and libraries only.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#install
   */
  install?: string;
  /**
   * Define a script to uninstall your package.
   *
   * https://github.com/clibs/clib/wiki/Explanation-of-clib.json#uninstall
   */
  uninstall?: string;
  [k: string]: unknown | undefined;
}
