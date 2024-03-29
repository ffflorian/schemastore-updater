/* eslint-disable */
/**
 * This file was automatically generated by json-schema-to-typescript.
 * DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
 * and run json-schema-to-typescript to regenerate this file.
 */

export interface JSONSchemaForNpmPackageJsonLintConfigurationFiles {
  /**
   * Use the extends property to inherit rules from a shared configuration file/module.
   */
  extends?: string | string[];
  /**
   * npm-package-json-lint rules are configurable. Use the rules object to specify what rules should be used and what severity level they should follow.
   */
  rules?: RequiredNode & DataType & ValidValues & Dependencies & Format & PackageJsonProperties & Deprecated;
  [k: string]: unknown;
}
export interface RequiredNode {
  /**
   * Require author property.
   */
  "require-author"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require bin property.
   */
  "require-bin"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require bugs property.
   */
  "require-bugs"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require bundledDependencies property.
   */
  "require-bundledDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require config property.
   */
  "require-config"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require contributors property.
   */
  "require-contributors"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require cpu property.
   */
  "require-cpu"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require dependencies property.
   */
  "require-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require description property.
   */
  "require-description"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require devDependencies property.
   */
  "require-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require directories property.
   */
  "require-directories"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require engines property.
   */
  "require-engines"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require files property.
   */
  "require-files"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require homepage property.
   */
  "require-homepage"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require keywords property.
   */
  "require-keywords"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require license property.
   */
  "require-license"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require main property.
   */
  "require-main"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require man property.
   */
  "require-man"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require module property.
   */
  "require-module"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require name property.
   */
  "require-name"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require optionalDependencies property.
   */
  "require-optionalDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require os property.
   */
  "require-os"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require peerDependencies property.
   */
  "require-peerDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require preferGlobal property.
   */
  "require-preferGlobal"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require private property.
   */
  "require-private"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require publishConfig property.
   */
  "require-publishConfig"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require repository property.
   */
  "require-repository"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require scripts property.
   */
  "require-scripts"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require version property.
   */
  "require-version"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface DataType {
  /**
   * Ensure the proper data type is used for bin.
   */
  "bin-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for bundledDependencies.
   */
  "bundledDependencies-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for config.
   */
  "config-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for cpu.
   */
  "cpu-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for dependencies.
   */
  "dependencies-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for description.
   */
  "description-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for devDependencies.
   */
  "devDependencies-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for directories.
   */
  "directories-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for engines.
   */
  "engines-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for files.
   */
  "files-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for homepage.
   */
  "homepage-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for keywords.
   */
  "keywords-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for license.
   */
  "license-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for main.
   */
  "main-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for man.
   */
  "man-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for name.
   */
  "name-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for optionalDependencies.
   */
  "optionalDependencies-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for os.
   */
  "os-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for peerDependencies.
   */
  "peerDependencies-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for preferGlobal.
   */
  "preferGlobal-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for private.
   */
  "private-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for repository.
   */
  "repository-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for scripts.
   */
  "scripts-type"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Ensure the proper data type is used for version.
   */
  "version-type"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface ValidValues {
  /**
   * Requires author to equal one of the supplied values.
   */
  "valid-values-author"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Requires engines to equal one of the supplied values.
   */
  "valid-values-engines"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Requires license to equal one of the supplied values.
   */
  "valid-values-license"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Requires the scope used for the name to equal one of the supplied values.
   */
  "valid-values-name-scope"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Requires private to equal one of the supplied values.
   */
  "valid-values-private"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Requires publishConfig to equal one of the supplied values.
   */
  "valid-values-publishConfig"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface Dependencies {
  /**
   * Restrict dependencies from specifying an absolute version.
   */
  "no-absolute-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict dependencies from using caret version syntax.
   */
  "no-caret-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict a list of dependencies.
   */
  "no-restricted-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict listed dependencies from using pre-release versions.
   */
  "no-restricted-pre-release-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict dependencies from using tilde version syntax.
   */
  "no-tilde-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict dependencies from specifying version 0.x.x modules.
   */
  "prefer-no-version-zero-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all dependencies to use absolute versions.
   */
  "prefer-absolute-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all dependencies to use caret version syntax.
   */
  "prefer-caret-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all dependencies to use tilde version syntax.
   */
  "prefer-tilde-version-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require dependencies to be listed in alphabetical order.
   */
  "prefer-alphabetical-dependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict devDependencies from specifying an absolute version.
   */
  "no-absolute-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict devDependencies from using caret version syntax.
   */
  "no-caret-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict a list of devDependencies.
   */
  "no-restricted-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict listed devDependencies from using pre-release versions.
   */
  "no-restricted-pre-release-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict devDependencies from using tilde version syntax.
   */
  "no-tilde-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Restrict devDependencies from specifying version 0.x.x modules.
   */
  "prefer-no-version-zero-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all devDependencies to use absolute versions.
   */
  "prefer-absolute-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all devDependencies to use caret version syntax.
   */
  "prefer-caret-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require all devDependencies to use tilde version syntax.
   */
  "prefer-tilde-version-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require devDependencies to be listed in alphabetical order.
   */
  "prefer-alphabetical-devDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require bundledDependencies to be listed in alphabetical order.
   */
  "prefer-alphabetical-bundledDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require optionalDependencies to be listed in alphabetical order.
   */
  "prefer-alphabetical-optionalDependencies"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require peerDependencies to be listed in alphabetical order.
   */
  "prefer-alphabetical-peerDependencies"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface Format {
  /**
   * Require description formatting rules, such as: requiring the first letter be capitalized and/or ending with a period.
   */
  "description-format"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require name to be lowercase.
   */
  "name-format"?: ("off" | "warning" | "error") | unknown[];
  /**
   * Require version to follow semver.
   */
  "version-format"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface PackageJsonProperties {
  /**
   * Require all package.json properties to be in a specified order.
   */
  "prefer-property-order"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
export interface Deprecated {
  /**
   * Ensure engineStrict is not present in package.json file.
   */
  "prefer-no-engineStrict"?: ("off" | "warning" | "error") | unknown[];
  [k: string]: unknown;
}
