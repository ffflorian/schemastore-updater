/* eslint-disable */

export type Color = 'auto' | 'yes' | 'no';
export type InlayHints = 'always' | 'threshold' | 'never';
export type OutputFormat = 'csv' | 'json' | 'gitlab' | 'sarif';
export type Sort = 'asc' | 'desc' | 'file_name';

/**
 * Configuration for complexipy, read from complexipy.toml, .complexipy.toml, or [tool.complexipy] in pyproject.toml.
 */
export interface Complexipy {
  /**
   * Directory for the analysis cache. Defaults to `.complexipy_cache/` in the invocation directory.
   */
  'cache-dir'?: string | null;
  /**
   * Report module-level (script) complexity as a synthetic `<module>` entry.
   */
  'check-script'?: boolean;
  /**
   * Use color in the output.
   */
  color?: Color & string;
  /**
   * Default complexity diff settings.
   */
  diff?: DiffSection | null;
  /**
   * Glob patterns of files to skip, such as `tests/**`.
   */
  exclude?: string | string[];
  /**
   * Show only functions above the complexity threshold.
   */
  failed?: boolean;
  /**
   * Never report these refactoring rules, such as `C007`. Wins over `select`.
   */
  ignore?: string | string[];
  /**
   * Do not exit with an error when the threshold is breached.
   */
  'ignore-complexity'?: boolean;
  lsp?: LspSection;
  /**
   * Functions strictly above this complexity are reported. A function at the limit passes.
   */
  'max-complexity-allowed'?: number;
  /**
   * Analyze every function, disregarding inline ignore comments.
   */
  'no-ignore'?: boolean;
  /**
   * File or directory for machine-readable output. Use a directory when writing more than one format.
   */
  output?: string | null;
  /**
   * Machine-readable output formats to write.
   */
  'output-format'?: OutputFormat | OutputFormat[];
  /**
   * Files or directories to analyze.
   */
  paths?: string | string[];
  /**
   * Suppress output.
   */
  quiet?: boolean;
  /**
   * List every file and line where an ignore comment suppresses a function.
   */
  'report-ignored'?: boolean;
  /**
   * Report only these refactoring rules, such as `C001`.
   */
  select?: string | string[];
  /**
   * Save the current violations above the threshold into `complexipy-snapshot.json`.
   */
  'snapshot-create'?: boolean;
  /**
   * Skip comparing against the snapshot even if it exists.
   */
  'snapshot-ignore'?: boolean;
  /**
   * Sort order of the results.
   */
  sort?: Sort & string;
}
export interface DiffSection {
  /**
   * Default git reference for `--diff` and `--diff-only`. An empty string disables the diff.
   */
  branch?: string | null;
  /**
   * Compare staged changes by default, like `--staged`.
   */
  staged?: boolean | null;
}
/**
 * Settings for the `complexipy lsp` language server.
 */
export interface LspSection {
  /**
   * Publish a warning for every function above `max-complexity-allowed`.
   */
  diagnostics?: boolean;
  /**
   * When to show the per-function hint: `threshold` only above `max-complexity-allowed`, `always` for every function, `never` for no hint.
   */
  'inlay-hints'?: InlayHints & string;
  /**
   * Also show the complexity added by each line, as `+2`. Lines that add nothing are skipped.
   */
  'per-line-hints'?: boolean;
}
