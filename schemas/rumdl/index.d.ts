/* eslint-disable */

/**
 * Markdown flavor/dialect. Accepts: standard, gfm, mkdocs, mdx, pandoc, quarto, obsidian, kramdown, azure_devops, myst, hugo, mdg, gh-aw (preview). Aliases: commonmark/github map to standard, qmd/rmd/rmarkdown map to quarto, jekyll maps to kramdown, azure/ado map to azure_devops, mystmd maps to myst, goldmark maps to hugo, markdown_with_gherkin maps to mdg.
 */
export type MarkdownFlavor =
  | 'standard'
  | 'gfm'
  | 'github'
  | 'commonmark'
  | 'mkdocs'
  | 'mdx'
  | 'pandoc'
  | 'quarto'
  | 'qmd'
  | 'rmd'
  | 'rmarkdown'
  | 'obsidian'
  | 'kramdown'
  | 'jekyll'
  | 'azure_devops'
  | 'azure'
  | 'ado'
  | 'myst'
  | 'mystmd'
  | 'hugo'
  | 'goldmark'
  | 'mdg'
  | 'markdown_with_gherkin'
  | 'gh-aw';
/**
 * Error handling strategy for tool execution failures.
 */
export type OnError = 'fail' | 'skip' | 'warn';
export type Severity = 'error' | 'warning' | 'info';

/**
 * rumdl configuration for linting Markdown files. Rules can be configured individually using [MD###] sections with rule-specific options.
 */
export interface Config {
  /**
   * Path to a base config file to inherit settings from.
   * Supports relative paths, absolute paths, `~/` for the home directory, and
   * `$VAR` / `${VAR}` environment-variable expansion (a literal `$` is written `$$`).
   * Example: `extends = "../base.rumdl.toml"` or `extends = "$GEM_PATH/base.rumdl.toml"`
   */
  extends?: string | null;
  global?: GlobalConfig;
  /**
   * Per-file rule ignores: maps file patterns to lists of rules to ignore.
   * Patterns are relative to the project root; a leading `~/` expands to the
   * home directory and absolute paths are matched as written.
   * Example: { "README.md": ["MD033"], "docs/** /*.md": ["MD013"] }
   */
  'per-file-ignores'?: {
    [k: string]: string[] | undefined;
  };
  /**
   * Per-file flavor overrides: maps file patterns to Markdown flavors.
   * Patterns are relative to the project root; a leading `~/` expands to the
   * home directory and absolute paths are matched as written.
   * Example: { "docs/** /*.md": MkDocs, "** /*.mdx": MDX }
   * Uses IndexMap to preserve config file order for "first match wins" semantics
   */
  'per-file-flavor'?: {
    [k: string]: MarkdownFlavor | undefined;
  };
  'code-block-tools'?: CodeBlockToolsConfig;
  [k: string]:
    | RuleConfig
    | string
    | null
    | GlobalConfig
    | {
        [k: string]: string[] | undefined;
      }
    | {
        [k: string]: MarkdownFlavor | undefined;
      }
    | CodeBlockToolsConfig
    | undefined;
}
/**
 * Global configuration options
 */
export interface GlobalConfig {
  /**
   * Enabled rules
   */
  enable?: string[];
  /**
   * Disabled rules
   */
  disable?: string[];
  /**
   * Files to exclude. Glob patterns, relative to the project root; a
   * leading `~/` expands to the home directory and absolute paths are
   * matched as written.
   */
  exclude?: string[];
  /**
   * Files to include. Glob patterns, relative to the project root; a
   * leading `~/` expands to the home directory and absolute paths are
   * matched as written.
   */
  include?: string[];
  /**
   * Respect .gitignore files when scanning directories
   */
  'respect-gitignore'?: boolean;
  /**
   * Global line length setting (used by MD013 and other rules if not overridden)
   */
  'line-length'?: number | null;
  /**
   * Output format for linting results (e.g., "text", "json", "pylint", etc.)
   */
  'output-format'?: string | null;
  /**
   * Rules that are allowed to be fixed when --fix is used
   * If specified, only these rules will be fixed
   */
  fixable?: string[];
  /**
   * Rules that should never be fixed, even when --fix is used
   * Takes precedence over fixable
   */
  unfixable?: string[];
  /**
   * Markdown flavor/dialect to use (mkdocs, gfm, commonmark, etc.)
   * When set, adjusts parsing and validation rules for that specific Markdown variant
   */
  flavor?:
    | 'standard'
    | 'gfm'
    | 'github'
    | 'commonmark'
    | 'mkdocs'
    | 'mdx'
    | 'pandoc'
    | 'quarto'
    | 'qmd'
    | 'rmd'
    | 'rmarkdown'
    | 'obsidian'
    | 'kramdown'
    | 'jekyll'
    | 'azure_devops'
    | 'azure'
    | 'ado'
    | 'myst'
    | 'mystmd'
    | 'hugo'
    | 'goldmark'
    | 'mdg'
    | 'markdown_with_gherkin'
    | 'gh-aw';
  /**
   * @deprecated
   * \[DEPRECATED\] Whether to enforce exclude patterns for explicitly passed paths.
   * This option is deprecated as of v0.0.156 and has no effect.
   * Exclude patterns are now always respected, even for explicitly provided files.
   * This prevents duplication between rumdl config and tool configs like pre-commit.
   */
  'force-exclude'?: boolean;
  /**
   * Directory to store cache files (default: .rumdl_cache).
   * A leading `~/` expands to the home directory; a relative path resolves
   * against the project root.
   * Can also be set via --cache-dir CLI flag or RUMDL_CACHE_DIR environment variable
   */
  'cache-dir'?: string | null;
  /**
   * Whether caching is enabled (default: true)
   * Can also be disabled via --no-cache CLI flag
   */
  cache?: boolean;
  /**
   * Additional rules to enable on top of the base set (additive)
   */
  'extend-enable'?: string[];
  /**
   * Additional rules to disable on top of the base set (additive)
   */
  'extend-disable'?: string[];
  /**
   * Whether to read settings from `.editorconfig` files (default: false).
   * When enabled, the `.editorconfig` properties that map onto rumdl
   * settings fill in anything no rumdl config sets, resolved per file so
   * section globs and nested `.editorconfig` files apply as written.
   */
  editorconfig?: boolean;
  [k: string]: unknown | undefined;
}
/**
 * Code block tools configuration for per-language linting and formatting
 * using external tools like ruff, prettier, shellcheck, etc.
 */
export interface CodeBlockToolsConfig {
  /**
   * Master switch (default: false)
   */
  enabled?: boolean;
  /**
   * Language normalization strategy
   */
  'normalize-language'?: 'linguist' | 'exact';
  /**
   * Global error handling strategy
   */
  'on-error'?: 'fail' | 'skip' | 'warn';
  /**
   * Behavior when a code block language has no tools configured for the current mode
   * (e.g., no lint tools for `rumdl check`, no format tools for `rumdl check --fix`)
   */
  'on-missing-language-definition'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Behavior when a configured tool's binary cannot be found (e.g., not in PATH).
   * Defaults to `warn`: the tools rumdl drives are installed separately from
   * rumdl, so an absent one is common enough that silence about it is a trap.
   */
  'on-missing-tool-binary'?: 'ignore' | 'warn' | 'fail' | 'fail-fast';
  /**
   * Timeout per tool execution in milliseconds (default: 30000)
   */
  timeout?: number;
  /**
   * Per-language tool configuration
   */
  languages?: {
    [k: string]: LanguageToolConfig | undefined;
  };
  /**
   * User-defined language aliases (override built-in resolution)
   * Example: { "py": "python", "bash": "shell" }
   */
  'language-aliases'?: {
    [k: string]: string | undefined;
  };
  /**
   * Custom tool definitions (override built-ins)
   */
  tools?: {
    [k: string]: ToolDefinition | undefined;
  };
  [k: string]: unknown | undefined;
}
/**
 * Per-language tool configuration.
 */
export interface LanguageToolConfig {
  /**
   * Whether code block tools are enabled for this language (default: true).
   * Set to false to acknowledge a language without configuring tools.
   * This satisfies strict mode (on-missing-language-definition) checks.
   */
  enabled?: boolean;
  /**
   * Tools to run in lint mode (rumdl check)
   */
  lint?: string[];
  /**
   * Tools to run in format mode (rumdl check --fix / rumdl fmt)
   */
  format?: string[];
  /**
   * Override global on-error setting for this language
   */
  'on-error'?: OnError | null;
  [k: string]: unknown | undefined;
}
/**
 * Definition of an external tool.
 *
 * This describes how to invoke a tool and how it communicates.
 */
export interface ToolDefinition {
  /**
   * Command to run (first element is the binary, rest are arguments)
   */
  command: string[];
  /**
   * Whether the tool reads from stdin (default: true)
   */
  stdin?: boolean;
  /**
   * Whether the tool writes to stdout (default: true)
   */
  stdout?: boolean;
  /**
   * Additional arguments for lint mode (appended to command)
   */
  'lint-args'?: string[];
  /**
   * Additional arguments for format mode (appended to command)
   */
  'format-args'?: string[];
  [k: string]: unknown | undefined;
}
/**
 * Represents a rule-specific configuration
 */
export interface RuleConfig {
  /**
   * Severity override for this rule (Error, Warning, or Info)
   */
  severity?: Severity | null;
  [k: string]: unknown | undefined;
}
