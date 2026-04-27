/* eslint-disable */

/**
 * Schema for the [tool.setuptools_scm] section in pyproject.toml
 */
export interface SetuptoolsScmConfigurationInPyprojectToml {
  /**
   * Relative path to the SCM root, defaults to `.` and is relative to the file path passed in `relative_to`.
   */
  root?: string;
  /**
   * An entrypoint name; configures how the local version number is constructed.
   */
  version_scheme?: string;
  /**
   * An entrypoint name; configures how the local component of the version is constructed.
   */
  local_scheme?: string;
  /**
   * A path to a file that gets replaced with a file containing the current version. It is ideal for creating a `_version.py` file within the package, typically used to avoid using `importlib.metadata` (which adds some overhead). Only files with `.py` and `.txt` extensions have builtin templates, for other file types it is necessary to provide version_file_template.
   */
  version_file?: string;
  /**
   * A new-style format string taking `version`, `scm_version` and `version_tuple` as parameters. `version` is the generated next_version as string, `version_tuple` is a tuple of split numbers/strings and `scm_version` is the `ScmVersion` instance the current `version` was rendered from.
   */
  version_file_template?: string;
  /**
   * @deprecated
   * Create a version file relative to the scm root; deprecated in favor of use `version_file` instead.
   */
  write_to?: string;
  /**
   * A file/directory from which the root can be resolved. Typically called by a script or module that is not in the root of the repository to point `setuptools_scm` at the root of the repository by supplying `__file__`.
   */
  relative_to?: string;
  /**
   * A Python regex string to extract the version part from any SCM tag. The regex needs to contain either a single match group, or a group named `version`, that captures the actual version information.
   */
  tag_regex?: string;
  /**
   * If the normal methods for detecting the version (SCM version, sdist metadata) fail, and the parent directory name starts with `parentdir_prefix_version`, then this prefix is stripped and the rest of the parent directory name is matched with `tag_regex` to get a version string.  If this parameter is unset (the default), then this fallback is not used.
   *
   * This was intended to cover GitHub's "release tarballs", which extract into directories named `projectname-tag/` (in which case `parentdir_prefix_version` can be set e.g. to `projectname-`).
   */
  parentdir_prefix_version?: string;
  /**
   * A version string that will be used if no other method for detecting the version worked (e.g., when using a tarball with no metadata). If this is unset (the default), `setuptools-scm` will error if it fails to detect the version.
   */
  fallback_version?: string;
  /**
   * The directory to use when SCM metadata is not available (e.g., in extracted archives like PyPI tarballs). When SCM metadata is present, `root` is used; when it is not available, `fallback_root` is used instead. This allows the same configuration to work in both scenarios without modification.
   */
  fallback_root?: string;
  /**
   * SCM-specific configuration.
   */
  scm?: {
    /**
     * Git-specific configuration.
     */
    git?: {
      /**
       * This command will be used instead of the default `git describe --long` command.
       */
      describe_command?: string[];
      /**
       * A string specifying which git pre-parse function to use before parsing version information. `warn_on_shallow` (default) warns when the repository is shallow; `fail_on_shallow` raises an error; `fetch_on_shallow` automatically fetches to rectify shallow repositories; `fail_on_missing_submodules` fails when submodules are defined but not initialised.
       */
      pre_parse?: 'warn_on_shallow' | 'fail_on_shallow' | 'fetch_on_shallow' | 'fail_on_missing_submodules';
    };
  };
  /**
   * @deprecated
   * Deprecated since 8.4.0: use `scm.git.describe_command` instead. This command will be used instead of the default `git describe --long` command.
   */
  git_describe_command?: string[];
  /**
   * A boolean flag indicating if the version string should be normalized.
   */
  normalize?: boolean;
  /**
   * Qualified name of an optional class used to parse, verify and possibly normalize the version string. Its constructor should receive a single string argument, and its `str` should return the normalized version string to use.
   */
  version_cls?: string;
}
