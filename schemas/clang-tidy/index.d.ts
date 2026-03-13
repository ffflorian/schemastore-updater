/* eslint-disable */

export interface HttpsJsonSchemastoreOrgClangTidyJson {
  CheckOptions?:
    | {
        [k: string]: unknown | undefined;
      }
    | {
        key?: string;
        value?: string | boolean | number | null;
      }[];
  /**
   * Comma-separated list of globs with optional '-' prefix. Globs are processed in order of  appearance in the list. Globs without '-' prefix add checks with matching names to the set, globs with the '-' prefix remove checks with matching names from the set of enabled checks.
   */
  Checks?: string[] | string;
  /**
   * Regular expression matching the names of the headers to exclude diagnostics from. Diagnostics from the main file of each translation unit are always displayed. Must be used together with --header-filter. Can be used together with -line-filter.
   */
  ExcludeHeaderFilterRegex?: string;
  /**
   * Additional argument to append to the compiler command line
   */
  ExtraArgs?: string[] | string;
  /**
   * Additional argument to prepend to the compiler command line
   */
  ExtraArgsBefore?: string[] | string;
  /**
   * Style for formatting code around applied fixes.
   */
  FormatStyle?:
    | ('none' | 'file' | 'llvm' | 'google' | 'webkit' | 'mozilla' | 'chromium' | 'microsoft' | 'gnu')
    | string;
  /**
   * File extensions to consider to determine if a given diagnostic is located in a header file.
   */
  HeaderFileExtensions?: string[] | string;
  /**
   * Regular expression matching the names of the headers to output diagnostics from. Diagnostics from the main file of each translation unit are always displayed. Can be used together with -line-filter.
   */
  HeaderFilterRegex?: string;
  /**
   * File extensions to consider to determine if a given diagnostic is located in an implementation file.
   */
  ImplementationFileExtensions?: string[] | string;
  /**
   * If this option is true in a config file, the configuration file in the parent directory (if any exists) will be taken and the current config file will be applied on top of the parent one.
   */
  InheritParentConfig?: boolean;
  /**
   * Display the errors from system headers. This option overrides the 'SystemHeaders' option in .clang-tidy file, if any.
   */
  SystemHeaders?: boolean;
  /**
   * Use colors in diagnostics. If not set, colors will be used if the terminal connected to standard output supports colors.
   */
  UseColor?: boolean;
  /**
   * Specifies the name or e-mail of the user running clang-tidy. This option is used, for example, to place the correct user name in TODO() comments in the relevant checks.
   */
  User?: string;
  /**
   * Upgrades warnings to errors.
   */
  WarningsAsErrors?: string;
  [k: string]: unknown | undefined;
}
