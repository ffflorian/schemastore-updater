/* eslint-disable */

export interface HttpsJsonSchemastoreOrgPartialBlackJson {
  /**
   * Format the code passed in as a string.
   */
  code?: string;
  /**
   * How many characters per line to allow.
   */
  'line-length'?: number;
  /**
   * Python versions that should be supported by Black's output. You should include all versions that your code supports. By default, Black will infer target versions from the project metadata in pyproject.toml. If this does not yield conclusive results, Black will use per-file auto-detection.
   */
  'target-version'?: (
    | 'py33'
    | 'py34'
    | 'py35'
    | 'py36'
    | 'py37'
    | 'py38'
    | 'py39'
    | 'py310'
    | 'py311'
    | 'py312'
    | 'py313'
    | 'py314'
  )[];
  /**
   * Format all input files like typing stubs regardless of file extension. This is useful when piping source on standard input.
   */
  pyi?: boolean;
  /**
   * Format all input files like Jupyter Notebooks regardless of file extension. This is useful when piping source on standard input.
   */
  ipynb?: boolean;
  /**
   * When processing Jupyter Notebooks, add the given magic to the list of known python-magics (capture, prun, pypy, python, python3, time, timeit). Useful for formatting cells with custom python magics.
   */
  'python-cell-magics'?: string[];
  /**
   * Skip the first line of the source code.
   */
  'skip-source-first-line'?: boolean;
  /**
   * Don't normalize string quotes or prefixes.
   */
  'skip-string-normalization'?: boolean;
  /**
   * Don't use trailing commas as a reason to split lines.
   */
  'skip-magic-trailing-comma'?: boolean;
  /**
   * Enable potentially disruptive style changes that may be added to Black's main functionality in the next major release.
   */
  preview?: boolean;
  /**
   * Enable potentially disruptive style changes that have known bugs or are not currently expected to make it into the stable style Black's next major release. Implies --preview.
   */
  unstable?: boolean;
  /**
   * Enable specific features included in the `--unstable` style. Requires `--preview`. No compatibility guarantees are provided on the behavior or existence of any unstable features.
   */
  'enable-unstable-feature'?: string[];
  /**
   * Don't write the files back, just return the status. Return code 0 means nothing would change. Return code 1 means some files would be reformatted. Return code 123 means there was an internal error.
   */
  check?: boolean;
  /**
   * Don't write the files back, just output a diff to indicate what changes Black would've made. They are printed to stdout so capturing them is simple.
   */
  diff?: boolean;
  /**
   * Show (or do not show) colored diff. Only applies when --diff is given.
   */
  color?: boolean;
  /**
   * By default, Black performs an AST safety check after formatting your code. The --fast flag turns off this check and the --safe flag explicitly enables it. [default: --safe]
   */
  fast?: boolean;
  /**
   * Require a specific version of Black to be running. This is useful for ensuring that all contributors to your project are using the same version, because different versions of Black may format code a little differently. This option can be set in a configuration file for consistent results across environments.
   */
  'required-version'?: string;
  /**
   * A regular expression that matches files and directories that should be excluded on recursive searches. An empty value means no paths are excluded. Use forward slashes for directories on all platforms (Windows, too). By default, Black also ignores all paths listed in .gitignore. Changing this value will override all default exclusions. [default: /(\.direnv|\.eggs|\.git|\.hg|\.ipynb_checkpoints|\.mypy_cache|\.nox|\.pytest_cache|\.ruff_cache|\.tox|\.svn|\.venv|\.vscode|__pypackages__|_build|buck-out|build|dist|venv)/]
   */
  exclude?: string;
  /**
   * Like --exclude, but adds additional files and directories on top of the default values instead of overriding them.
   */
  'extend-exclude'?: string;
  /**
   * Like --exclude, but files and directories matching this regex will be excluded even when they are passed explicitly as arguments. This is useful when invoking Black programmatically on changed files, such as in a pre-commit hook or editor plugin.
   */
  'force-exclude'?: string;
  /**
   * A regular expression that matches files and directories that should be included on recursive searches. An empty value means all files are included regardless of the name. Use forward slashes for directories on all platforms (Windows, too). Overrides all exclusions, including from .gitignore and command line options.
   */
  include?: string;
  /**
   * When Black formats multiple files, it may use a process pool to speed up formatting. This option controls the number of parallel workers. This can also be specified via the BLACK_NUM_WORKERS environment variable. Defaults to the number of CPUs in the system.
   */
  workers?: number;
  /**
   * Stop emitting all non-critical output. Error messages will still be emitted (which can silenced by 2>/dev/null).
   */
  quiet?: boolean;
  /**
   * Emit messages about files that were not changed or were ignored due to exclusion patterns. If Black is using a configuration file, a message detailing which one it is using will be emitted.
   */
  verbose?: boolean;
}
