/* eslint-disable */

export interface HttpsJsonSchemastoreOrgPartialMypyJson {
  /**
   * Specifies the paths to use, after trying the paths from `MYPYPATH` environment variable. Useful if you'd like to keep stubs in your repo, along with the config file. Multiple paths are always separated with a `:` or `,` regardless of the platform. User home directory and environment variables will be expanded.
   */
  mypy_path?: string | string[];
  /**
   * A comma-separated list of paths which should be checked by mypy if none are given on the command line. Supports recursive file globbing using `glob`, where `*` (e.g. `*.py`) matches files in the current directory and `** /` (e.g. `** /*.py`) matches files in any directories below the current one. User home directory and environment variables will be expanded.
   */
  files?: string | string[];
  /**
   * A comma-separated list of packages which should be checked by mypy if none are given on the command line. Mypy WILL NOT recursively type check any submodules of the provided module.
   */
  modules?: string | string[];
  /**
   * A comma-separated list of packages which should be checked by mypy if none are given on the command line. Mypy WILL recursively type check any submodules of the provided package. This flag is identical to `modules` apart from this behavior.
   */
  packages?: string | string[];
  /**
   * A regular expression that matches file names, directory names and paths which mypy should ignore while recursively discovering files to check. Use forward slashes (`/`) as directory separators on all platforms.
   */
  exclude?: string | string[];
  /**
   * This flag will add everything that matches `.gitignore` file(s) to `exclude` (https://mypy.readthedocs.io/en/stable/config_file.html#confval-exclude). This option may only be set in the global section (`[mypy]`).
   */
  exclude_gitignore?: boolean;
  /**
   * Enables PEP 420 style namespace packages. See the corresponding flag `--no-namespace-packages` (https://mypy.readthedocs.io/en/stable/command_line.html#cmdoption-mypy-no-namespace-packages) for more information.
   */
  namespace_packages?: boolean;
  /**
   * This flag tells mypy that top-level packages will be based in either the current directory, or a member of the `MYPYPATH` environment variable or `mypy_path` config option. This option is only useful in the absence of `__init__.py`. See Mapping file paths to modules (https://mypy.readthedocs.io/en/stable/running_mypy.html#mapping-paths-to-modules) for details.
   */
  explicit_package_bases?: boolean;
  /**
   * Suppresses error messages about imports that cannot be resolved.
   */
  ignore_missing_imports?: boolean;
  /**
   * Makes mypy analyze imports from installed packages even if missing a py.typed marker or stubs.
   */
  follow_untyped_imports?: boolean;
  /**
   * Directs what to do with imports when the imported module is found as a `.py` file and not part of the files, modules and packages provided on the command line.
   */
  follow_imports?: 'normal' | 'silent' | 'skip' | 'error';
  /**
   * Determines whether to respect the `follow_imports` setting even for stub (`.pyi`) files.
   */
  follow_imports_for_stubs?: boolean;
  /**
   * Specifies the path to the Python executable to inspect to collect a list of available PEP 561 packages (https://mypy.readthedocs.io/en/stable/installed_packages.html#installed-packages). User home directory and environment variables will be expanded. Defaults to the executable used to run mypy.
   */
  python_executable?: string;
  /**
   * Disables using type information in installed packages (see PEP 561). This will also disable searching for a usable Python executable. This acts the same as :option:`--no-site-packages <mypy --no-site-packages>` command line flag.
   */
  no_site_packages?: boolean;
  /**
   * Enables reporting error messages generated within installed packages (see PEP 561 for more details on distributing type information). Those error messages are suppressed by default, since you are usually not able to control errors in 3rd party code.
   */
  no_silence_site_packages?: boolean;
  /**
   * Specifies the Python version used to parse and check the target program. The string should be in the format `MAJOR.MINOR` (for example, `2.7`). The default is the version of the Python interpreter used to run mypy.
   */
  python_version?: string;
  /**
   * Specifies the OS platform for the target program, for example `darwin` or `win32` (meaning OS X or Windows, respectively). The default is the current platform as revealed by Python's `sys.platform` variable.
   */
  platform?: string;
  /**
   * Specifies a list of variables that mypy will treat as compile-time constants that are always true.
   */
  always_true?: string | string[];
  /**
   * Specifies a list of variables that mypy will treat as compile-time constants that are always false.
   */
  always_false?: string | string[];
  /**
   * Disallows usage of types that come from unfollowed imports (anything imported from an unfollowed import is automatically given a type of `Any`).
   */
  disallow_any_unimported?: boolean;
  /**
   * Disallows all expressions in the module that have type `Any`.
   */
  disallow_any_expr?: boolean;
  /**
   * Disallows functions that have `Any` in their signature after decorator transformation.
   */
  disallow_any_decorated?: boolean;
  /**
   * Disallows explicit `Any` in type positions such as type annotations and generic type parameters.
   */
  disallow_any_explicit?: boolean;
  /**
   * Disallows usage of generic types that do not specify explicit type parameters.
   */
  disallow_any_generics?: boolean;
  /**
   * Disallows subclassing a value of type `Any`.
   */
  disallow_subclassing_any?: boolean;
  /**
   * Disallows calling functions without type annotations from functions with type annotations. Note that when used in per-module options, it enables/disables this check INSIDE the module(s) specified, not for functions that come from that module(s).
   */
  disallow_untyped_calls?: boolean;
  /**
   * Selectively excludes functions and methods defined in specific packages, modules, and classes from action of `disallow_untyped_calls`. This also applies to all submodules of packages (i.e. everything inside a given prefix). Note, this option does not support per-file configuration, the exclusions list is defined globally for all your code.
   */
  untyped_calls_exclude?: string | string[];
  /**
   * Disallows defining functions without type annotations or with incomplete type annotations (a superset of `disallow_incomplete_defs`).
   */
  disallow_untyped_defs?: boolean;
  /**
   * Disallows defining functions with incomplete type annotations, while still allowing entirely unannotated definitions.
   */
  disallow_incomplete_defs?: boolean;
  /**
   * Type-checks the interior of functions without type annotations.
   */
  check_untyped_defs?: boolean;
  /**
   * Allow decorating typed functions with untyped decorators.
   */
  allow_untyped_decorators?: boolean;
  /**
   * Reports an error whenever a function with type annotations is decorated with a decorator without annotations.
   */
  disallow_untyped_decorators?: boolean;
  /**
   * Causes mypy to treat arguments with a `None` default value as having an implicit `typing.Optional` type.
   */
  implicit_optional?: boolean;
  /**
   * Inverse of implicit_optional.
   */
  no_implicit_optional?: boolean;
  /**
   * By default, imported values to a module are treated as exported and mypy allows other modules to import them. This flag changes the behavior to not re-export unless the item is imported using from-as or is included in `__all__`. Note this is always treated as enabled for stub files.
   */
  no_implicit_reexport?: boolean;
  /**
   * Disable treating `bytearray` and `memoryview` as subtypes of `bytes`. This will be enabled by default in mypy 2.0.
   */
  strict_bytes?: boolean;
  /**
   * Enables or disables strict `Optional` checks. If `False`, mypy treats `None` as compatible with every type.
   */
  strict_optional?: boolean;
  /**
   * Warns about casting an expression to its inferred type.
   */
  warn_redundant_casts?: boolean;
  /**
   * Warns about unneeded `# type: ignore` comments.
   */
  warn_unused_ignores?: boolean;
  /**
   * Shows errors for missing return statements on some execution paths.
   */
  warn_no_return?: boolean;
  /**
   * Shows a warning when returning a value with type `Any` from a function declared with a non-`Any` return type.
   */
  warn_return_any?: boolean;
  /**
   * Shows a warning when encountering any code inferred to be unreachable or redundant after performing type analysis.
   */
  warn_unreachable?: boolean;
  /**
   * Ignores all non-fatal errors.
   */
  ignore_errors?: boolean;
  /**
   * Causes mypy to suppress errors caused by not being able to fully infer the types of global and class variables.
   */
  allow_untyped_globals?: boolean;
  /**
   * By default, mypy won't allow a variable to be redefined with an unrelated type. This experimental flag enables the redefinition of unannotated variables with an arbitrary type. You will also need to enable `local_partial_types` (https://mypy.readthedocs.io/en/stable/config_file.html#confval-local_partial_types).
   */
  allow_redefinition_new?: boolean;
  /**
   * Allows variables to be redefined with an arbitrary type, as long as the redefinition is in the same block and nesting level as the original definition.
   */
  allow_redefinition?: boolean;
  /**
   * Disallows inferring variable type for `None` from two assignments in different scopes. This is always implicitly enabled when using the mypy daemon (https://mypy.readthedocs.io/en/stable/mypy_daemon.html).
   */
  local_partial_types?: boolean;
  /**
   * Allows disabling one or multiple error codes globally.
   */
  disable_error_code?: string | string[];
  /**
   * Allows enabling one or multiple error codes globally.
   */
  enable_error_code?: string | string[];
  /**
   * By default, imported values to a module are treated as exported and mypy allows other modules to import them. When false, mypy will not re-export unless the item is imported using from-as or is included in `__all__`. Note that mypy treats stub files as if this is always disabled.
   */
  implicit_reexport?: boolean;
  /**
   * Make arguments prepended via `Concatenate` be truly positional-only.
   */
  strict_concatenate?: boolean;
  /**
   * Enable additional checks that are technically correct but impractical.
   */
  extra_checks?: boolean;
  /**
   * Prohibit equality checks, identity checks, and container checks between non-overlapping types.
   */
  strict_equality?: boolean;
  /**
   * Include `None` in strict equality checks. Requires `strict_equality` to be activated.
   */
  strict_equality_for_none?: boolean;
  /**
   * Enable all optional error checking flags. You can see the list of flags enabled by strict mode in the full `mypy --help` output. The exact list of flags enabled by `strict` may change over time.
   */
  strict?: boolean;
  /**
   * Prefixes each error with the relevant context.
   */
  show_error_context?: boolean;
  /**
   * Shows column numbers in error messages.
   */
  show_column_numbers?: boolean;
  /**
   * Hides error codes (https://mypy.readthedocs.io/en/stable/error_codes.html#error-codes) in error messages.
   */
  hide_error_codes?: boolean;
  /**
   * Use visually nicer output in error messages: use soft word wrap, show source code snippets, and show error location markers.
   */
  pretty?: boolean;
  /**
   * Shows error messages with color enabled.
   */
  color_output?: boolean;
  /**
   * Shows a short summary line after error messages.
   */
  error_summary?: boolean;
  /**
   * Show absolute paths to files.
   */
  show_absolute_path?: boolean;
  /**
   * Always use `List` instead of `list` in error messages, even on Python 3.9+.
   */
  force_uppercase_builtins?: boolean;
  /**
   * Always use `Union[]` and `Optional[]` for union types in error messages (instead of the `|` operator), even on Python 3.10+.
   */
  force_union_syntax?: boolean;
  /**
   * Enables incremental mode (https://mypy.readthedocs.io/en/stable/command_line.html#incremental).
   */
  incremental?: boolean;
  /**
   * Specifies the location where mypy stores incremental cache info. User home directory and environment variables will be expanded. This setting will be overridden by the `MYPY_CACHE_DIR` environment variable.
   */
  cache_dir?: string;
  /**
   * Use an SQLite database to store the cache.
   */
  sqlite_cache?: boolean;
  /**
   * Include fine-grained dependency information in the cache for the mypy daemon (https://mypy.readthedocs.io/en/stable/mypy_daemon.html).
   */
  cache_fine_grained?: boolean;
  /**
   * Makes mypy use incremental cache data even if it was generated by a different version of mypy. (By default, mypy will perform a version check and regenerate the cache if it was written by older versions of mypy.)
   */
  skip_version_check?: boolean;
  /**
   * Skip cache internal consistency checks based on mtime.
   */
  skip_cache_mtime_checks?: boolean;
  /**
   * Use a new experimental cache format for faster incremental builds. Makes incremental builds up to twice as fast. This is experimental and currently only supported when using a compiled version of mypy.
   */
  fixed_format_cache?: boolean;
  /**
   * A comma-separated list of mypy plugins.
   */
  plugins?: string | string[];
  /**
   * Invokes `pdb` (https://docs.python.org/3/library/pdb.html) on fatal error.
   */
  pdb?: boolean;
  /**
   * Shows traceback on fatal error.
   */
  show_traceback?: boolean;
  /**
   * Raise exception on fatal error.
   */
  raise_exceptions?: boolean;
  /**
   * Specifies a custom module to use as a substitute for the `typing` module.
   */
  custom_typing_module?: string;
  /**
   * This specifies the directory where mypy looks for standard library typeshed stubs, instead of the typeshed that ships with mypy. This is primarily intended to make it easier to test typeshed changes before submitting them upstream, but also allows you to use a forked version of typeshed.
   */
  custom_typeshed_dir?: string;
  /**
   * Warns about missing type annotations in typeshed. This is only relevant in combination with `disallow_untyped_defs` or `disallow_incomplete_defs`.
   */
  warn_incomplete_stub?: boolean;
  /**
   * Causes mypy to generate a text file report documenting how many expressions of type `Any` are present within your codebase.
   */
  any_exprs_report?: string;
  /**
   * Causes mypy to generate a Cobertura XML type checking coverage report.
   */
  cobertura_xml_report?: string;
  /**
   * Causes mypy to generate a text file report documenting the functions and lines that are typed and untyped within your codebase.
   */
  linecount_report?: string;
  /**
   * Causes mypy to generate a JSON file that maps each source file's absolute filename to a list of line numbers that belong to typed functions in that file.
   */
  linecoverage_report?: string;
  /**
   * Causes mypy to generate a flat text file report with per-module statistics of how many lines are typechecked etc.
   */
  lineprecision_report?: string;
  /**
   * Causes mypy to generate an XML type checking coverage report.
   */
  xml_report?: string;
  /**
   * Causes mypy to generate a JUnit XML test result document with type checking results. This can make it easier to integrate mypy with continuous integration (CI) tools.
   */
  junit_xml?: string;
  /**
   * Makes script `x` become module `x` instead of `__main__`. This is useful when checking multiple scripts in a single run.
   */
  scripts_are_modules?: boolean;
  /**
   * Warns about per-module sections in the config file that do not match any files processed when invoking mypy. (This requires turning off incremental mode using `incremental = False`.)
   */
  warn_unused_configs?: boolean;
  /**
   * Controls how much debug output will be generated. Higher numbers are more verbose.
   */
  verbosity?: number;
  /**
   * @deprecated
   * DEPRECATED and UNDOCUMENTED: Now defaults to true, use `hide_error_codes` if you need to disable error codes instead.
   */
  show_error_codes?: boolean;
  /**
   * UNDOCUMENTED: show links for error codes.
   */
  show_error_code_links?: boolean;
  /**
   * UNDOCUMENTED. Disables automatic promotion of `bytearray` to `bytes` type. Is set to `true` in strict mode.
   */
  disable_bytearray_promotion?: boolean;
  /**
   * UNDOCUMENTED. Disables automatic promotion of `memoryview` to `bytes` type. Is set to `true` in strict mode.
   */
  disable_memoryview_promotion?: boolean;
  /**
   * Enable a preview of incomplete features that are not yet enabled by default by the current version of mypy. Note that it is not guaranteed that all features will be ultimately enabled by default.
   */
  enable_incomplete_feature?: string | string[];
  overrides?: {
    module: string | [string, ...string[]];
    /**
     * Suppresses error messages about imports that cannot be resolved.
     */
    ignore_missing_imports?: boolean;
    /**
     * Makes mypy analyze imports from installed packages even if missing a py.typed marker or stubs.
     */
    follow_untyped_imports?: boolean;
    /**
     * Directs what to do with imports when the imported module is found as a `.py` file and not part of the files, modules and packages provided on the command line.
     */
    follow_imports?: 'normal' | 'silent' | 'skip' | 'error';
    /**
     * Determines whether to respect the `follow_imports` setting even for stub (`.pyi`) files.
     */
    follow_imports_for_stubs?: boolean;
    /**
     * Disables using type information in installed packages (see PEP 561). This will also disable searching for a usable Python executable. This acts the same as :option:`--no-site-packages <mypy --no-site-packages>` command line flag.
     */
    no_site_packages?: boolean;
    /**
     * Specifies a list of variables that mypy will treat as compile-time constants that are always true.
     */
    always_true?: string | string[];
    /**
     * Specifies a list of variables that mypy will treat as compile-time constants that are always false.
     */
    always_false?: string | string[];
    /**
     * Disallows usage of types that come from unfollowed imports (anything imported from an unfollowed import is automatically given a type of `Any`).
     */
    disallow_any_unimported?: boolean;
    /**
     * Disallows all expressions in the module that have type `Any`.
     */
    disallow_any_expr?: boolean;
    /**
     * Disallows functions that have `Any` in their signature after decorator transformation.
     */
    disallow_any_decorated?: boolean;
    /**
     * Disallows explicit `Any` in type positions such as type annotations and generic type parameters.
     */
    disallow_any_explicit?: boolean;
    /**
     * Disallows usage of generic types that do not specify explicit type parameters.
     */
    disallow_any_generics?: boolean;
    /**
     * Disallows subclassing a value of type `Any`.
     */
    disallow_subclassing_any?: boolean;
    /**
     * Disallows calling functions without type annotations from functions with type annotations. Note that when used in per-module options, it enables/disables this check INSIDE the module(s) specified, not for functions that come from that module(s).
     */
    disallow_untyped_calls?: boolean;
    /**
     * Selectively excludes functions and methods defined in specific packages, modules, and classes from action of `disallow_untyped_calls`. This also applies to all submodules of packages (i.e. everything inside a given prefix). Note, this option does not support per-file configuration, the exclusions list is defined globally for all your code.
     */
    untyped_calls_exclude?: string | string[];
    /**
     * Disallows defining functions without type annotations or with incomplete type annotations (a superset of `disallow_incomplete_defs`).
     */
    disallow_untyped_defs?: boolean;
    /**
     * Disallows defining functions with incomplete type annotations, while still allowing entirely unannotated definitions.
     */
    disallow_incomplete_defs?: boolean;
    /**
     * Type-checks the interior of functions without type annotations.
     */
    check_untyped_defs?: boolean;
    /**
     * Allow decorating typed functions with untyped decorators.
     */
    allow_untyped_decorators?: boolean;
    /**
     * Reports an error whenever a function with type annotations is decorated with a decorator without annotations.
     */
    disallow_untyped_decorators?: boolean;
    /**
     * Causes mypy to treat arguments with a `None` default value as having an implicit `typing.Optional` type.
     */
    implicit_optional?: boolean;
    /**
     * Inverse of implicit_optional.
     */
    no_implicit_optional?: boolean;
    /**
     * By default, imported values to a module are treated as exported and mypy allows other modules to import them. This flag changes the behavior to not re-export unless the item is imported using from-as or is included in `__all__`. Note this is always treated as enabled for stub files.
     */
    no_implicit_reexport?: boolean;
    /**
     * Enables or disables strict `Optional` checks. If `False`, mypy treats `None` as compatible with every type.
     */
    strict_optional?: boolean;
    /**
     * Warns about unneeded `# type: ignore` comments.
     */
    warn_unused_ignores?: boolean;
    /**
     * Shows errors for missing return statements on some execution paths.
     */
    warn_no_return?: boolean;
    /**
     * Shows a warning when returning a value with type `Any` from a function declared with a non-`Any` return type.
     */
    warn_return_any?: boolean;
    /**
     * Shows a warning when encountering any code inferred to be unreachable or redundant after performing type analysis.
     */
    warn_unreachable?: boolean;
    /**
     * Ignores all non-fatal errors.
     */
    ignore_errors?: boolean;
    /**
     * Causes mypy to suppress errors caused by not being able to fully infer the types of global and class variables.
     */
    allow_untyped_globals?: boolean;
    /**
     * By default, mypy won't allow a variable to be redefined with an unrelated type. This experimental flag enables the redefinition of unannotated variables with an arbitrary type. You will also need to enable `local_partial_types` (https://mypy.readthedocs.io/en/stable/config_file.html#confval-local_partial_types).
     */
    allow_redefinition_new?: boolean;
    /**
     * Allows variables to be redefined with an arbitrary type, as long as the redefinition is in the same block and nesting level as the original definition.
     */
    allow_redefinition?: boolean;
    /**
     * Disallows inferring variable type for `None` from two assignments in different scopes. This is always implicitly enabled when using the mypy daemon (https://mypy.readthedocs.io/en/stable/mypy_daemon.html).
     */
    local_partial_types?: boolean;
    /**
     * Allows disabling one or multiple error codes globally.
     */
    disable_error_code?: string | string[];
    /**
     * Allows enabling one or multiple error codes globally.
     */
    enable_error_code?: string | string[];
    /**
     * Enable additional checks that are technically correct but impractical.
     */
    extra_checks?: boolean;
    /**
     * By default, imported values to a module are treated as exported and mypy allows other modules to import them. When false, mypy will not re-export unless the item is imported using from-as or is included in `__all__`. Note that mypy treats stub files as if this is always disabled.
     */
    implicit_reexport?: boolean;
    /**
     * Make arguments prepended via `Concatenate` be truly positional-only.
     */
    strict_concatenate?: boolean;
    /**
     * Prohibit equality checks, identity checks, and container checks between non-overlapping types.
     */
    strict_equality?: boolean;
    /**
     * Include `None` in strict equality checks. Requires `strict_equality` to be activated.
     */
    strict_equality_for_none?: boolean;
    /**
     * Disable treating `bytearray` and `memoryview` as subtypes of `bytes`. This will be enabled by default in mypy 2.0.
     */
    strict_bytes?: boolean;
    /**
     * Enable all optional error checking flags. You can see the list of flags enabled by strict mode in the full `mypy --help` output. The exact list of flags enabled by `strict` may change over time.
     */
    strict?: boolean;
    /**
     * Prefixes each error with the relevant context.
     */
    show_error_context?: boolean;
    /**
     * Shows column numbers in error messages.
     */
    show_column_numbers?: boolean;
    /**
     * UNDOCUMENTED: show links for error codes.
     */
    show_error_code_links?: boolean;
    /**
     * Hides error codes (https://mypy.readthedocs.io/en/stable/error_codes.html#error-codes) in error messages.
     */
    hide_error_codes?: boolean;
    /**
     * Use visually nicer output in error messages: use soft word wrap, show source code snippets, and show error location markers.
     */
    pretty?: boolean;
    /**
     * Shows error messages with color enabled.
     */
    color_output?: boolean;
    /**
     * Shows a short summary line after error messages.
     */
    error_summary?: boolean;
    /**
     * Show absolute paths to files.
     */
    show_absolute_path?: boolean;
    /**
     * Always use `List` instead of `list` in error messages, even on Python 3.9+.
     */
    force_uppercase_builtins?: boolean;
    /**
     * Always use `Union[]` and `Optional[]` for union types in error messages (instead of the `|` operator), even on Python 3.10+.
     */
    force_union_syntax?: boolean;
    /**
     * Enables incremental mode (https://mypy.readthedocs.io/en/stable/command_line.html#incremental).
     */
    incremental?: boolean;
    /**
     * Specifies the location where mypy stores incremental cache info. User home directory and environment variables will be expanded. This setting will be overridden by the `MYPY_CACHE_DIR` environment variable.
     */
    cache_dir?: string;
    /**
     * Use an SQLite database to store the cache.
     */
    sqlite_cache?: boolean;
    /**
     * Include fine-grained dependency information in the cache for the mypy daemon (https://mypy.readthedocs.io/en/stable/mypy_daemon.html).
     */
    cache_fine_grained?: boolean;
    /**
     * Makes mypy use incremental cache data even if it was generated by a different version of mypy. (By default, mypy will perform a version check and regenerate the cache if it was written by older versions of mypy.)
     */
    skip_version_check?: boolean;
    /**
     * Skip cache internal consistency checks based on mtime.
     */
    skip_cache_mtime_checks?: boolean;
    /**
     * Use a new experimental cache format for faster incremental builds. Makes incremental builds up to twice as fast. This is experimental and currently only supported when using a compiled version of mypy.
     */
    fixed_format_cache?: boolean;
    /**
     * A comma-separated list of mypy plugins.
     */
    plugins?: string | string[];
    /**
     * Invokes `pdb` (https://docs.python.org/3/library/pdb.html) on fatal error.
     */
    pdb?: boolean;
    /**
     * Shows traceback on fatal error.
     */
    show_traceback?: boolean;
    /**
     * Raise exception on fatal error.
     */
    raise_exceptions?: boolean;
    /**
     * Specifies a custom module to use as a substitute for the `typing` module.
     */
    custom_typing_module?: string;
    /**
     * This specifies the directory where mypy looks for standard library typeshed stubs, instead of the typeshed that ships with mypy. This is primarily intended to make it easier to test typeshed changes before submitting them upstream, but also allows you to use a forked version of typeshed.
     */
    custom_typeshed_dir?: string;
    /**
     * Warns about missing type annotations in typeshed. This is only relevant in combination with `disallow_untyped_defs` or `disallow_incomplete_defs`.
     */
    warn_incomplete_stub?: boolean;
    /**
     * Causes mypy to generate a text file report documenting how many expressions of type `Any` are present within your codebase.
     */
    any_exprs_report?: string;
    /**
     * Causes mypy to generate a Cobertura XML type checking coverage report.
     */
    cobertura_xml_report?: string;
    /**
     * Causes mypy to generate a text file report documenting the functions and lines that are typed and untyped within your codebase.
     */
    linecount_report?: string;
    /**
     * Causes mypy to generate a JSON file that maps each source file's absolute filename to a list of line numbers that belong to typed functions in that file.
     */
    linecoverage_report?: string;
    /**
     * Causes mypy to generate a flat text file report with per-module statistics of how many lines are typechecked etc.
     */
    lineprecision_report?: string;
    /**
     * Causes mypy to generate an XML type checking coverage report.
     */
    xml_report?: string;
    /**
     * Causes mypy to generate a JUnit XML test result document with type checking results. This can make it easier to integrate mypy with continuous integration (CI) tools.
     */
    junit_xml?: string;
    /**
     * Makes script `x` become module `x` instead of `__main__`. This is useful when checking multiple scripts in a single run.
     */
    scripts_are_modules?: boolean;
    /**
     * Warns about per-module sections in the config file that do not match any files processed when invoking mypy. (This requires turning off incremental mode using `incremental = False`.)
     */
    warn_unused_configs?: boolean;
    /**
     * Controls how much debug output will be generated. Higher numbers are more verbose.
     */
    verbosity?: number;
  }[];
  /**
   * Install detected missing library stub packages using pip
   */
  install_types?: boolean;
  /**
   * Install stubs without asking for confirmation and hide errors, with --install-types
   */
  non_interactive?: boolean;
}
